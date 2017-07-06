package com.finsol.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @author siva reddy
 *
 */
@Entity
public class MigrateAppcode {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer maid;
	
	
	@Column
	private String  salesorder;  
	
	@Column
	private String  applicationcode;

	public Integer getMaid()
	{
		return maid;
	}

	public void setMaid(Integer maid)
	{
		this.maid = maid;
	}

	public String getSalesorder()
	{
		return salesorder;
	}

	public void setSalesorder(String salesorder)
	{
		this.salesorder = salesorder;
	}

	public String getApplicationcode()
	{
		return applicationcode;
	}

	public void setApplicationcode(String applicationcode)
	{
		this.applicationcode = applicationcode;
	}
	
	
	
	 

	 
	 
	 	 

}
