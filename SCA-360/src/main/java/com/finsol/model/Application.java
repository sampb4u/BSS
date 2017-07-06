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
public class Application {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer slno;
	
	
	 
	@Column
	private String application;
 
	
	 
	public Integer getSlno() {
		return slno;
	}



	public void setSlno(Integer slno) {
		this.slno = slno;
	}



	public String getApplication() {
		return application;
	}



	public void setApplication(String application) {
		this.application = application;
	}



	public String getApplicationcode() {
		return applicationcode;
	}



	public void setApplicationcode(String applicationcode) {
		this.applicationcode = applicationcode;
	}



	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	@Column
	private String applicationcode;

	
	 
	@Column
	private String description;

 
}
