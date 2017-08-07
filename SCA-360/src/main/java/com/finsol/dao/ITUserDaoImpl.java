package com.finsol.dao;

import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.finsol.model.Access;
import com.finsol.model.AccessPoint;
import com.finsol.model.ITTicket;
import com.finsol.model.ITUser;
import com.finsol.model.ITUserLinks;
import com.finsol.model.SeqGenericTbl;
import com.finsol.model.UserRole;
import com.finsol.model.Users;

/**
 * @author Anvesh
 *
 */
@Repository("ituserDao")
public class ITUserDaoImpl {

	private static final Logger logger = Logger.getLogger(ITUserDaoImpl.class);

	@Autowired
	private HibernateDao hibernateDao;

	// DetachedCriteria criteria = DetachedCriteria.forClass(ITUserDto.class);

	public Users getUser(String name) {

		logger.info("----------------In  ITUserDaoImpl-----------");
		return (Users) hibernateDao.getRowByColumn(Users.class, "loginid", name);
	}

	public void save(Object ituserdto) {
		hibernateDao.saveOrUpdate(ituserdto);

	}

	public Long getNextSequanceID(String key) {
		long sqNumber = 1;
		Session session = hibernateDao.getSessionFactory().openSession();
		String sql = "SELECT * FROM SeqGenericTbl where seqname= :key";

		SQLQuery query = session.createSQLQuery(sql);
		query.setParameter("key", key);
		SeqGenericTbl sg = new SeqGenericTbl();

		query.addEntity(SeqGenericTbl.class);
		if (!query.list().isEmpty()) {

			sg = (SeqGenericTbl) query.list().get(0);
			sqNumber = sg.getSeqno() + 1;
		} else {
			sg.setSeqname(key);
		}
		sg.setSeqno(sqNumber);

		hibernateDao.saveOrUpdate(sg);

		return sqNumber;

	}

	public List getItUser() {

		Session session = hibernateDao.getSessionFactory().openSession();
		String sql = "SELECT * FROM ITUser  ORDER BY createdate DESC";
		SQLQuery query = session.createSQLQuery(sql);
		query.addEntity(ITUser.class);

		return query.list();

	}

	public List getRoleAccess(String key) {

		Session session = hibernateDao.getSessionFactory().openSession();
		String sql = "SELECT * FROM Access where roleid  LIKE :searchKeyword";

		SQLQuery query = session.createSQLQuery(sql);

		query.setParameter("searchKeyword", key + "%");
		query.addEntity(Access.class);

		return query.list();

	}

	public List getTickets() {
		Session session = hibernateDao.getSessionFactory().openSession();
		String sql = "SELECT * FROM ITTicket ORDER BY createdate DESC";
		SQLQuery query = session.createSQLQuery(sql);
		query.addEntity(ITTicket.class);

		return query.list();

	}

	public List getTickets(String user) {
		Session session = hibernateDao.getSessionFactory().openSession();
		String sql = "SELECT * FROM ITTicket where assignedto = :key or raisedby = :key1  ORDER BY createdate DESC";
		SQLQuery query = session.createSQLQuery(sql);
		query.setParameter("key", user);
		query.setParameter("key1", user);
		query.addEntity(ITTicket.class);

		return query.list();

	}

	public List getItlinks(String id) {

		Session session = hibernateDao.getSessionFactory().openSession();
		String sql = "SELECT * FROM ITUserLinks where id = :id";
		SQLQuery query = session.createSQLQuery(sql);
		query.setParameter("id", id);
		query.addEntity(ITUserLinks.class);

		return query.list();

	}

	public String getlink(String name) {
		Session session = hibernateDao.getSessionFactory().openSession();
		String sql = "SELECT * FROM ITUserLinks where uuid = :id";
		SQLQuery query = session.createSQLQuery(sql);
		query.setParameter("id", name);
		query.addEntity(ITUserLinks.class);
		ITUserLinks ituserlink = (ITUserLinks) query.list().get(0);
		if (ituserlink != null) {
			return ituserlink.getName();
		}

		return null;

	}

	public List getAccesspoints() {
		Session session = hibernateDao.getSessionFactory().openSession();
		String sql = "SELECT * FROM AccessPoint";
		SQLQuery query = session.createSQLQuery(sql);
		query.addEntity(AccessPoint.class);
		return query.list();
	}

	public List getRoles() {
		Session session = hibernateDao.getSessionFactory().openSession();
		String sql = "SELECT * FROM UserRole";
		SQLQuery query = session.createSQLQuery(sql);
		query.addEntity(UserRole.class);
		return query.list();
	}

	public List getRole(int roleid) {
		// TODO Auto-generated method stub
		Session session = hibernateDao.getSessionFactory().openSession();
		String sql = "SELECT * FROM UserRole where roleid =:id";
		SQLQuery query = session.createSQLQuery(sql);
		query.setParameter("id", roleid);
		query.addEntity(UserRole.class);
		return query.list();
	}

	public int getRoleId() {
		Session session = hibernateDao.getSessionFactory().openSession();
		String sql = "SELECT max(roleid) FROM UserRole";
		SQLQuery query = session.createSQLQuery(sql);

		List list = query.list();

		if (list.get(0) == null) {
			return 1;
		}
		return ((int) list.get(0) + 1);

	}

}