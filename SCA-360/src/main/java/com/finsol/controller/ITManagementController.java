package com.finsol.controller;

import java.io.ByteArrayOutputStream;
import java.io.OutputStream;
import java.util.List;

import org.apache.log4j.Logger;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.finsol.dao.ITUserDaoImpl;
import com.finsol.model.ITUser;

import net.sf.json.JSONObject;

@Controller
public class ITManagementController {

	private static final Logger logger = Logger.getLogger(ITManagementController.class);

	@Autowired
	private ITUserDaoImpl dataSource;



	@RequestMapping(value = "/createITUser", method = RequestMethod.POST)
	public @ResponseBody JSONObject createITUser(@RequestBody ITUser ituser) {
		dataSource.save(ituser);
		return getSucessobject();

	}

	@RequestMapping(value = "/getITUsers", method = RequestMethod.GET)
	public @ResponseBody String createITUser() {

		// ObjectMapper mapper = new ObjectMapper();
		String users = null;
		List itUsers = dataSource.getItUser();
		System.out.println("it users :::::::::::::::::" + itUsers);

		users = convertPojoToJson(itUsers);
		System.out.println("it users :::::::::::::::::" + itUsers);

		return users;
	}

	private JSONObject getSucessobject() {
		JSONObject j1 = new JSONObject();
		j1.put("data", "Sucess");
		return j1;
	}

	public static String convertPojoToJson(Object object) {
		ObjectMapper objectMapper = new ObjectMapper();
		OutputStream outputStream = new ByteArrayOutputStream();
		try {
			objectMapper.writeValue(outputStream, object);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return outputStream.toString();
	}

}
