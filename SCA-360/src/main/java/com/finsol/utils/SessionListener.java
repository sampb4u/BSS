package com.finsol.utils;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.WebApplicationContext;

public class SessionListener implements HttpSessionListener
{
	private static final Logger logger = Logger.getLogger(SessionListener.class);
    
    @Autowired
    private HttpServletRequest request;

    @Override
    public void sessionCreated(HttpSessionEvent httpSessionEvent)
    {
        // TODO Auto-generated method stub
    	logger.info("Session Created  : " + httpSessionEvent.getSession().getId());
    }

    @Override
    public void sessionDestroyed(HttpSessionEvent httpSessionEvent)
    {
    	logger.info("Session Destroyed  : " );
        ServletContext servletContext = httpSessionEvent.getSession().getServletContext();
        WebApplicationContext appContext = (WebApplicationContext) servletContext.getAttribute(WebApplicationContext.ROOT_WEB_APPLICATION_CONTEXT_ATTRIBUTE);
       //ShoppingCartManager systemUserService = (ShoppingCartManager) appContext.getBean(ShoppingCartManager.class);
       // systemUserService.deleteCartDataBaseOnSession(httpSessionEvent.getSession().getId());

    }

}
