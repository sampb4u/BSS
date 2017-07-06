package com.finsol.service;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.finsol.dao.UserDaoImpl;
import com.finsol.model.Users;

/**
 * @author Rama Krishna
 *
 */
@Service("userService")
public class UserSeviceImpl {

	private static final Logger logger = Logger.getLogger(UserSeviceImpl.class);
	@Autowired
	private UserDaoImpl userDao;
	
	public Users getUser(String name) {
		logger.info("----------------UserSeviceImpl-----------");
		return userDao.getUser(name);
	}




}
