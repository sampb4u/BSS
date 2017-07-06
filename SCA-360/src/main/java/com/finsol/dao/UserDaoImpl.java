package com.finsol.dao;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.finsol.model.Users;
/**
 * @author Rama Krishna
 *
 */
@Repository("userDao")
public class UserDaoImpl {
	
	private static final Logger logger = Logger.getLogger(UserDaoImpl.class);
	
	@Autowired
	private HibernateDao hibernateDao;
	
/*	public Users getUser(String name) {
		
		logger.info("----------------In  UserDaoImpl-----------");
		return (Users) hibernateDao.getSessionFactory().openSession().get(Users.class, name);
	}*/
	public Users getUser(String name) {
		
		logger.info("----------------In  UserDaoImpl-----------");
		return (Users) hibernateDao.getRowByColumn(Users.class,"loginid",name);
	}
	
	
/*		
 * 
 * Session session=hibernateDao.getSessionFactory().openSession();
		Users user=(Users) session.get(Users.class, name);
		if(session!=null)
			session.close();
		
		return user;*/
		
/*		logger.info("----------------In  UserDaoImpl-----------"+name);
		Transaction tx=sessionFactory.getCurrentSession().beginTransaction();
		tx.begin();
		User user=(User) sessionFactory.getCurrentSession().get(User.class,Integer.parseInt("1"));
		tx.commit();
		return user;*/

}
