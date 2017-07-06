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
public class AppCode {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer apid;
	
	
	 
	
	@Column
	private String paymenttermcode;
	
	@Column
	private String paymenttewrmdescription;
	
	
	
	@Column
	private String mappingpterm;



	public Integer getApid() {
		return apid;
	}



	public void setApid(Integer apid) {
		this.apid = apid;
	}



	public String getPaymenttermcode() {
		return paymenttermcode;
	}



	public void setPaymenttermcode(String paymenttermcode) {
		this.paymenttermcode = paymenttermcode;
	}



	public String getPaymenttewrmdescription() {
		return paymenttewrmdescription;
	}



	public void setPaymenttewrmdescription(String paymenttewrmdescription) {
		this.paymenttewrmdescription = paymenttewrmdescription;
	}



	public String getMappingpterm() {
		return mappingpterm;
	}



	public void setMappingpterm(String mappingpterm) {
		this.mappingpterm = mappingpterm;
	}
	
	
	
	 
	 	 

}
