package com.finsol.dao;

import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.finsol.model.ITTicket;
import com.finsol.model.ITUser;
import com.finsol.model.SeqGenericTbl;
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
		String sql = "SELECT * FROM ITUser";
		SQLQuery query = session.createSQLQuery(sql);
		query.addEntity(ITUser.class);

		return query.list();

	}

	public List getTickets() {
		Session session = hibernateDao.getSessionFactory().openSession();
		String sql = "SELECT * FROM ITTicket";
		SQLQuery query = session.createSQLQuery(sql);
		query.addEntity(ITTicket.class);

		return query.list();

	}

}