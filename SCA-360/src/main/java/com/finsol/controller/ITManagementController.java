package com.finsol.controller;

import java.io.BufferedOutputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.finsol.dao.ITUserDaoImpl;
import com.finsol.model.ITTicket;
import com.finsol.model.ITUser;

import net.sf.json.JSONObject;

@Controller
public class ITManagementController {

	private static final Logger logger = Logger.getLogger(ITManagementController.class);
	private static final String UPLOAD_DIRECTORY = "/files";
	@Autowired
	private ITUserDaoImpl dataSource;

	@RequestMapping(value = "/createITUser", method = RequestMethod.POST)
	public @ResponseBody JSONObject createITUser(@RequestBody ITUser ituser) {
		dataSource.save(ituser);
		return getSucessobject();

	}

	@RequestMapping(value = "/getITUsers", method = RequestMethod.GET)
	public @ResponseBody String getITUser() {

		return convertPojoToJson(dataSource.getItUser());

	}

	@RequestMapping(value = "/getITTickets", method = RequestMethod.GET)
	public @ResponseBody String getITTickets() {

		return convertPojoToJson(dataSource.getTickets());

	}

	@RequestMapping(value = "/getTicketSQid", method = RequestMethod.GET)
	public @ResponseBody long getSQID() {

		return dataSource.getNextSequanceID("reqsqid");
	}

	@RequestMapping(value = "/getSQid", method = RequestMethod.GET)
	public @ResponseBody long getgetTicketSQid() {

		return dataSource.getNextSequanceID("itsql");
	}

	@RequestMapping(value = "/createITTicket", method = RequestMethod.POST)
	public @ResponseBody JSONObject createticket(@RequestBody ITTicket itTicket) {
		dataSource.save(itTicket);
		return getSucessobject();

	}

	@RequestMapping(value = "/savefile", method = RequestMethod.POST)
	public @ResponseBody JSONObject  saveimage(@RequestParam MultipartFile file) throws Exception {

		//ServletContext context = session.getServletContext();
		String path = "C:/files/";
		String filename = file.getOriginalFilename();

		System.out.println(path + " " + filename);

		byte[] bytes = file.getBytes();
		BufferedOutputStream stream = new BufferedOutputStream(
				new FileOutputStream(new File(path + File.separator + filename)));
		stream.write(bytes);
		stream.flush();
		stream.close();

		return getSucessobject();
	}

	private JSONObject getSucessobject() {
		JSONObject j1 = new JSONObject();
		j1.put("data", "Sucess");
		return j1;
	}

	public String convertPojoToJson(Object object) {
		ObjectMapper objectMapper = new ObjectMapper();
		OutputStream outputStream = new ByteArrayOutputStream();
		try {
			objectMapper.writeValue(outputStream, object);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return outputStream.toString();
	}

	public String uploadFileToDisk(File file) {
		return null;
	}
}
