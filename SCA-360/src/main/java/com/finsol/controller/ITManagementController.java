package com.finsol.controller;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Iterator;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.apache.log4j.Logger;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.finsol.bean.ITAdmin;
import com.finsol.dao.ITUserDaoImpl;
import com.finsol.model.ITTicket;
import com.finsol.model.ITUser;
import com.finsol.model.ITUserLinks;

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

	@RequestMapping(value = "/getITTickets", method = RequestMethod.POST)
	public @ResponseBody String getITTickets(@RequestBody ITAdmin admin) {

		return convertPojoToJson(
				admin.getUser() == null ? dataSource.getTickets() : dataSource.getTickets(admin.getUser()));

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

	@RequestMapping(value = "/createITlink", method = RequestMethod.POST)
	public @ResponseBody JSONObject createAttachmentData(@RequestBody ITUserLinks link) {
		dataSource.save(link);
		return getSucessobject();

	}

	@RequestMapping(value = "/getITlinks", method = RequestMethod.POST)
	public @ResponseBody String getAttachmentData(@RequestBody ITUserLinks link) {

		return convertPojoToJson(dataSource.getItlinks(link.getId()));

	}

	@RequestMapping(value = "/continueFileUpload", method = RequestMethod.POST)
	@ResponseBody
	public JSONObject continueFileUpload(HttpServletRequest request, HttpServletResponse response) {
		MultipartHttpServletRequest mRequest;
		String filePath = null;
		String fileName = null;
		String ff1=null;
		try {
			mRequest = (MultipartHttpServletRequest) request;
			mRequest.getParameterMap();

			Iterator<String> itr = mRequest.getFileNames();
			while (itr.hasNext()) {
				MultipartFile mFile = mRequest.getFile(itr.next());
				fileName = mFile.getOriginalFilename();

				String id = UUID.randomUUID().toString();
				final File file = getLinkFilePath();
				ff1 = id + fileName;
				filePath = file.getAbsolutePath() + File.separator + ff1;

				mFile.transferTo(new File(filePath));

				System.out.println(fileName);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		JSONObject j1 = new JSONObject();
		j1.put("data", ff1);
		
		j1.put("filename", fileName);
		return j1;

		// return filePath;
	}

	private File getLinkFilePath() {
		String d = System.getProperty("user.home");

		final File file = new File(d, ".IT");
		file.mkdirs();
		return file;
	}

	@RequestMapping(value = "/getlink", method = RequestMethod.GET)
	public void download(@RequestParam("name") String name, final HttpServletRequest request,
			final HttpServletResponse response) {
		// log.trace("name : {}", name);

		File file = new File(getLinkFilePath().getAbsolutePath() + File.separator+name);

		try (InputStream fileInputStream = new FileInputStream(file);
				OutputStream output = response.getOutputStream();) {

			response.reset();

			response.setContentType("application/octet-stream");
			response.setContentLength((int) (file.length()));

			response.setHeader("Content-Disposition", "attachment; filename=\"" + file.getName() + "\"");

			IOUtils.copyLarge(fileInputStream, output);
			output.flush();
		} catch (IOException e) {
			e.printStackTrace();
		}

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
