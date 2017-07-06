package com.finsol.bean;

import javax.persistence.Entity;

/**
 * @author siva reddy
 *
 */
@Entity
public class ApplicationBean {
	
	private static final long serialVersionUID = 1L;	
	
	 
	private Integer id;
	private String applicationName;
    private String applicationCode;
    private String description;
	public Integer getId()
	{
		return id;
	}
	public void setId(Integer id)
	{
		this.id = id;
	}
	 
	public String getApplicationName()
	{
		return applicationName;
	}
	public void setApplicationName(String applicationName)
	{
		this.applicationName = applicationName;
	}
	public String getApplicationCode()
	{
		return applicationCode;
	}
	public void setApplicationCode(String applicationCode)
	{
		this.applicationCode = applicationCode;
	}
	public String getDescription()
	{
		return description;
	}
	public void setDescription(String description)
	{
		this.description = description;
	}
    
    
    


 
}
