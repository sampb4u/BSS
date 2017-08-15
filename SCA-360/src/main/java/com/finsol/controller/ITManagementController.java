package com.finsol.controller;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Iterator;
import java.util.List;
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
import com.finsol.bean.Password;
import com.finsol.dao.ITUserDaoImpl;
import com.finsol.model.Access;
import com.finsol.model.AccessList;
import com.finsol.model.AccessPoint;
import com.finsol.model.ITTicket;
import com.finsol.model.ITUser;
import com.finsol.model.ITUserLinks;
import com.finsol.model.SecretQuestions;
import com.finsol.model.UserRole;
import com.finsol.model.Users;

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

	@RequestMapping(value = "/createRoleAccess", method = RequestMethod.POST)
	public @ResponseBody JSONObject createRoleAccess(@RequestBody Access access) {
		dataSource.save(access);
		return getSucessobject();

	}

	@RequestMapping(value = "/createRole", method = RequestMethod.POST)
	public @ResponseBody JSONObject createRole(@RequestBody UserRole role) {
		dataSource.save(role);
		return getSucessobject();

	}

	@RequestMapping(value = "/getRole", method = RequestMethod.POST)
	public @ResponseBody String getRoleAccess(@RequestBody UserRole role) {

		return convertPojoToJson(dataSource.getRole(role.getRoleid()));

	}

	@RequestMapping(value = "/createRoleAccesses", method = RequestMethod.POST)
	public @ResponseBody JSONObject createITUsers(@RequestBody AccessList access) {
		for (Access ac : access.getAccesslist()) {
			dataSource.save(ac);
		}

		return getSucessobject();

	}

	@RequestMapping(value = "/getRoleAccess", method = RequestMethod.POST)
	public @ResponseBody String getRoleAccess(@RequestBody Access access) {

		return convertPojoToJson(dataSource.getRoleAccess(access.getRoleid()));

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

	@RequestMapping(value = "/getAccesspoints", method = RequestMethod.GET)
	public @ResponseBody String getAccesspoints() {

		return convertPojoToJson(dataSource.getAccesspoints());

	}

	@RequestMapping(value = "/getAccesspoints", method = RequestMethod.POST)
	public @ResponseBody String getAccesspoint(@RequestBody AccessPoint accessPoint) {

		return convertPojoToJson(dataSource.getAccesspoint(accessPoint.getAccessname()));

	}

	@RequestMapping(value = "/getTicketSQid", method = RequestMethod.GET)
	public @ResponseBody long getSQID() {

		return dataSource.getNextSequanceID("reqsqid");
	}

	@RequestMapping(value = "/getAccessSQid", method = RequestMethod.GET)
	public @ResponseBody long getAccSQID() {

		return dataSource.getNextSequanceID("accsqid");
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

	@RequestMapping(value = "/createAccessPoint", method = RequestMethod.POST)
	public @ResponseBody JSONObject createAccessPoint(@RequestBody AccessPoint accessPoint) {
		dataSource.save(accessPoint);
		return getSucessobject();

	}

	@RequestMapping(value = "/createITlink", method = RequestMethod.POST)
	public @ResponseBody JSONObject createAttachmentData(@RequestBody ITUserLinks link) {
		File file = getLinkFilePath();
		final File file1 = new File(file.getAbsolutePath(), link.getId());
		final File file2 = new File(file1.getAbsolutePath(), link.getType());

		file2.mkdirs();

		String pathname = file2.getAbsolutePath() + File.separator + link.getFilename();
		File afile = new File(file.getAbsolutePath() + File.separator + link.getName());
		afile.renameTo(new File(pathname));
		link.setName(file1.getName() + File.separator + file2.getName() + File.separator + link.getFilename());

		dataSource.save(link);

		return getSucessobject();

	}

	@RequestMapping(value = "/getITlinks", method = RequestMethod.POST)
	public @ResponseBody String getAttachmentData(@RequestBody ITUserLinks link) {

		return convertPojoToJson(dataSource.getItlinks(link.getId()));

	}

	@RequestMapping(value = "/getRoleId", method = RequestMethod.GET)
	public @ResponseBody int getRoleId() {

		return dataSource.getRoleId();

	}

	@RequestMapping(value = "/continueFileUpload", method = RequestMethod.POST)
	@ResponseBody
	public JSONObject continueFileUpload(HttpServletRequest request, HttpServletResponse response) {
		MultipartHttpServletRequest mRequest;
		String filePath = null;
		String fileName = null;
		String ff1 = null;
		String id = null;
		try {
			mRequest = (MultipartHttpServletRequest) request;
			mRequest.getParameterMap();

			Iterator<String> itr = mRequest.getFileNames();
			while (itr.hasNext()) {
				MultipartFile mFile = mRequest.getFile(itr.next());
				fileName = mFile.getOriginalFilename();

				id = UUID.randomUUID().toString();
				final File file = getLinkFilePath();
				ff1 = id + fileName;
				filePath = file.getAbsolutePath() + File.separator + ff1;

				mFile.transferTo(new File(filePath));

				System.out.println(filePath);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		JSONObject j1 = new JSONObject();
		j1.put("data", ff1);

		j1.put("filename", fileName);
		j1.put("id", id);
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
		String dfile = dataSource.getlink(name);
		if (dfile == null) {

			return;
		}

		File file = new File(getLinkFilePath().getAbsolutePath() + File.separator + dfile);

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

	@RequestMapping(value = "/getRoles", method = RequestMethod.GET)
	public @ResponseBody String getRoles() {

		return convertPojoToJson(dataSource.getRoles());

	}

	@RequestMapping(value = "/resetpassword", method = RequestMethod.POST)
	public @ResponseBody JSONObject resetpassword(@RequestBody Password pass) {
		JSONObject j1 = new JSONObject();

		List list = dataSource.getpassword(pass.getUsername());
		if (list.size() > 0) {
			Users user = (Users) list.get(0);
			if (user.getPassword().equals(pass.getOldpass())) {

				SecretQuestions sq = new SecretQuestions();
				sq.setSq1(pass.getSq1());
				sq.setSq2(pass.getSq2());

				sq.setAns1(pass.getAns1());
				sq.setAns2(pass.getAns2());
				sq.setUsername(pass.getUsername());
				dataSource.save(sq);
				user.setIspwdchanged((byte) 2);
				user.setPassword(pass.getNewpass());
				dataSource.save(user);
				j1.put("sucess", "password changed ");
			} else {
				j1.put("error", "old password did not match");
			}

		}
		return j1;
	}

	@RequestMapping(value = "/forgotpassword", method = RequestMethod.POST)
	public @ResponseBody JSONObject forgotpassword(@RequestBody Password pass) {
		JSONObject j1 = new JSONObject();

		List list = dataSource.getsqs(pass.getUsername());
		if (list.size() > 0) {
			SecretQuestions sq = (SecretQuestions) list.get(0);
			if (sq.getAns1().equalsIgnoreCase(pass.getAns1()) && sq.getAns2().equalsIgnoreCase(pass.getAns2())) {
				List list1 = dataSource.getpassword(pass.getUsername());
				if (list.size() > 0) {
					Users user = (Users) list1.get(0);
					user.setPassword(pass.getNewpass());
					dataSource.save(user);
				}

				j1.put("sucess", "password changed ");
			} else {
				j1.put("error", "Answers did not match");
			}

		}
		return j1;
	}
	
	@RequestMapping(value = "/forgotpassworduser", method = RequestMethod.POST)
	public @ResponseBody JSONObject forgotpassworduser(@RequestBody Password pass) {
		JSONObject j1 = new JSONObject();

		List list = dataSource.getpassword(pass.getUsername());
		if (list.size() > 0) {
			SecretQuestions sq = (SecretQuestions) list.get(0);
			
				j1.put("error", "UserName not found");
			

		}
		j1.put("sucess", "user found ");
		return j1;
	}

}
