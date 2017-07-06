package com.finsol.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import org.apache.log4j.Logger;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.HandlerMapping;
import org.springframework.web.servlet.ModelAndView;

public class HelloWorldInterceptor implements HandlerInterceptor  {
	private static final Logger logger = Logger.getLogger(HelloWorldInterceptor.class);

	
	@Override
	public boolean preHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler) throws Exception {
		 
		HttpSession hs=request.getSession();
		String restOfTheUrl1 = (String) request.getAttribute(HandlerMapping.PATH_WITHIN_HANDLER_MAPPING_ATTRIBUTE);
		 
		 String restOfTheUrl2=restOfTheUrl1.replace('/',' ');
		 String restOfTheUrl	= restOfTheUrl2.trim();
		 logger.info(restOfTheUrl+"----------------------------------- ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");
		 
		/* System.out.println(hs.getMaxInactiveInterval()+"<><><><><><><><><><><><><><><><><><><><><><>");
	 */
		if(restOfTheUrl.equalsIgnoreCase("welcome.do"))
		{
			
			return true;
		}
		
		
		else if(restOfTheUrl.equalsIgnoreCase("login.do"))
		{
			
			return true;
			
		}
		
		else if(restOfTheUrl.equalsIgnoreCase("scalogin.do"))
		{
			
			return true;
			
		}
		
		
		
		
		else if(hs.getAttribute("user")!=null)
		{
			
			if(restOfTheUrl.equalsIgnoreCase("checksession.do"))
			{
				return true;
			}
			
		else if(restOfTheUrl.equalsIgnoreCase("getSavedQuatationDataOnQuatationNumberFromQuatationTemp.do")|| restOfTheUrl.equalsIgnoreCase("getSavedQuatationDataOnQuatationNumberFromQuatationTempwithclick.do")|| restOfTheUrl.equalsIgnoreCase("resetcustomermasterdataonclick.do") )
			{
				 
				hs.removeAttribute("casecustmername");
				
			return true;
			
			}
			
		else if(restOfTheUrl.equalsIgnoreCase("loadingcasessdatafortabclick.do")|| restOfTheUrl.equalsIgnoreCase("newCaseTabForCustmerAndProspect.do") )		
		{
			hs.removeAttribute("custmername");
			return true;
		}
			
			else
			{
				hs.removeAttribute("custmername");
				hs.removeAttribute("casecustmername");
				
				return true;
				
			}
		}
		
	
		
		else if(restOfTheUrl.equalsIgnoreCase("timeout.do"))
		{
			
			 return true;
		}
		
		else if(hs.getAttribute("user")==null)
		{
			
			/*JSONObject j1=new JSONObject();
			j1.put("data",0);*/
			response.sendRedirect("scalogin.do");
		}
		
		return false;
		 
	}
	
	@Override
	public void postHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		System.out.println("Post-handle");
	}
	
	@Override
	public void afterCompletion(HttpServletRequest request,
			HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
		System.out.println("After completion handle");
	}
}
 