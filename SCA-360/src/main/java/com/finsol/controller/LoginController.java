package com.finsol.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import org.apache.log4j.Logger;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;


import com.finsol.bean.UserBean;
import com.finsol.model.ApplicationIndustryCode;
import com.finsol.model.ExplositionClassfication;
import com.finsol.model.GearProductType;
import com.finsol.model.MTR_KW;
import com.finsol.model.Users;
import com.finsol.service.Bss_Migrate_ServiceImpl;
import com.finsol.service.MasterScreen_serviceImpl;
import com.finsol.service.UserSeviceImpl;
import com.finsol.utils.Constants;
import com.finsol.utils.DateUtils;

/*import com.finsol.service.CommonService;*/

/**
 * @author Rama Krishna
 *
 */
@Controller
public class LoginController 
{
	private static final Logger logger = Logger.getLogger(LoginController.class);
	
	/*@Autowired
	private CommonService bssService;*/
	@Autowired
	private UserSeviceImpl userService;	
	 	
	@Autowired
	private Bss_Migrate_ServiceImpl migratesevice;
	
	@Autowired
	private MasterScreen_serviceImpl masterservice;
	
	
	
	@RequestMapping(value = "/login", method = RequestMethod.POST,headers = {"Content-type=application/json"})		
	 public @ResponseBody String sca360Validate(@RequestBody String jsonData,HttpServletRequest request) throws Exception 
	 {
		Users user=null;
		//ServerSocketOn sso=new ServerSocketOn();
		HttpSession session=request.getSession();
		 
		UserBean userBean = new ObjectMapper().readValue(jsonData, UserBean.class);
		
		String uName=userBean.getUserName();
		String uPassword=userBean.getPassword();
		//String uCountryCode=userBean.getCountryCode();
		
		user=userService.getUser(userBean.getUserName());
		
		if(user!=null)
		{		
			if(user.getLoginid().equalsIgnoreCase(uName) && user.getPassword().equals(uPassword))
			{	
				session.setAttribute("userid",user.getUserid());
				if (user.getIspwdchanged() == 1){
					 return "views/resetPassword.html";
				}
				String countryCode=user.getCountrycode();
				Integer roleid	=user.getRoleid();/*Role Id*/
				session.setAttribute("countrycode",countryCode);
				session.setAttribute("roleid", roleid);
			
				
				String value =  user.getLoginid();
				StringBuilder sb = new StringBuilder(value);
				for (int index = 0; index < sb.length(); index++) {
				    char c = sb.charAt(index);
				    
				        sb.setCharAt(index, Character.toUpperCase(c));
				    
				}

				// System.out.println(sb);
				
				
				session.setAttribute("user",sb.toString());
				
				
				
				
				/*************************loading drop downs urls in case ***********************/
				
				
				
				
				
				List<ApplicationIndustryCode> coutries=migratesevice.getAllApplicationCode();
				List<GearProductType> gearproduct = masterservice.getpro_grp();
				List<ExplositionClassfication> explosionclassification= masterservice.getexlositionclassfication();
				List<MTR_KW> mtrkw= masterservice.getmtr_kw();
				List<String> voltageforcase = masterservice.getVolatagesforCase();
				
				
				//session.setAttribute("acode1",coutries);
				session.setAttribute("gcode1",gearproduct);
				session.setAttribute("ecode1",explosionclassification);
				session.setAttribute("mcode1",mtrkw);
				session.setAttribute("scode1",voltageforcase);
				session.setAttribute("pwdchanged",user.getIspwdchanged());
				
				
				
				
				
				/*************************End of loading drop down urls in caase*////////////////
				
				
				
				
				
				
				
				
				session.setAttribute("userfname",user.getUserfirstname());;
				 session.setMaxInactiveInterval(60*60);
 				 return "login.htm?"+countryCode+"?"+user.getUserfirstname()+"?"+roleid;
								
			}
			else
			{
				return "/SCA-360";	
				//return "redirect:/welcome";
			}
		}
		else
		{
			return "/SCA-360";
		}
	}
	
	
	/*@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public ModelAndView logout(HttpServletRequest request) 
	{
		HttpSession session=request.getSession(false);
		
		if(session!=null)
		{
			session.invalidate();
		}
		//return new ModelAndView("index.html");
		return new ModelAndView("redirect:/index.html");
	}*/
	
	@RequestMapping(value = "/welcome", method = RequestMethod.GET)
	public  String  welcome1(HttpServletRequest req) 
	{
		
	/*	List<ApplicationIndustryCode> coutries=migratesevice.getAllApplicationCode();
		JSONObject countryobject = new JSONObject();
		
		JSONArray vendorarray= new JSONArray();
		
		for(ApplicationIndustryCode country:coutries)
		{
			JSONObject vendorobject = new JSONObject();
			vendorobject.put("application",country.getMachinecode());
			vendorobject.put("applicationshortcutnamename",country.getMachinecode()+"-"+country.getShortcutname());
			vendorarray.add(vendorobject);
			
		}
		
		HttpSession hs=req.getSession();
		hs.setAttribute("Applicationarray",vendorarray);*/
		
		
		
		
		
		
		
		
		

		return "index";
	}
	
	
	@RequestMapping(value = "/logout", method = RequestMethod.POST)
	public  @ResponseBody JSONObject  logout(HttpServletRequest req) 
	{
		HttpSession hs=req.getSession();
		
		
		hs.removeAttribute("custmername");
		hs.removeAttribute("casecustmername");
		hs.removeAttribute("caseref");
		hs.invalidate();
		 

		JSONObject j1=new JSONObject();
		j1.put("data",0);
		return j1;
	}
	/*@RequestMapping(value = "/testurl", method = RequestMethod.GET)
	public  @ResponseBody Integer  welcome5() 
	{
		Integer count=bssService.getTest();
		HashMap a =new HashMap();
		return count;
	}
	*/
	
	@RequestMapping(value = "/loginggg", method = RequestMethod.GET)
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		String uName = request.getParameter("name");
		String uPass = request.getParameter("password");
		return new ModelAndView("redirect:/angular/login.jsp");
	}
	
	
	
	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String  logout(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		HttpSession hs=request.getSession();
		hs.removeAttribute("user");
		 return "index";
	}
	// Reference Code ---------------	
	/*	
	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	public String welcome() {
		System.out.println("==============Inside Welcome=====");
		logger.info("==============Inside welcome()=====");
		return "redirect:welcome.do";
	}*/
	
	//if(uName.equalsIgnoreCase(user.getName()) && uPassword.equalsIgnoreCase(user.getPassword()))
/*	if("makella".equalsIgnoreCase(uName) && "finsol".equalsIgnoreCase(uPassword))
	{
		return "angular/login.jsp";
	}
	else
	{
			return "/SugarERP";
		
	}*/
	
	
	
	@RequestMapping(value = "/scalogin", method = RequestMethod.GET)
	public @ResponseBody JSONObject  homepage(HttpServletRequest request) 
	{
		JSONObject j1=new JSONObject();
		j1.put("data",0);
		return j1;
		
		 
	}
	
	
	
	@RequestMapping(value = "/timeout", method = RequestMethod.GET)
	public  String  welcome2() 
	{

		return "index";
	}
	
	
	@RequestMapping(value = "/checksession", method = RequestMethod.GET)
	public @ResponseBody JSONObject  homepage1(HttpServletRequest request) 
	{
		JSONObject j1=new JSONObject();
		j1.put("data",1);
		return j1;
		
		 
	}
	

	
}
