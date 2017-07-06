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
public class AdditionalTermsandConditions {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer atid;
	
	@Column 
	private String  modelterm;
	
	
	@Column 
	private String  modelcondition;


	public Integer getAtid() {
		return atid;
	}


	public void setAtid(Integer atid) {
		this.atid = atid;
	}


	public String getModelterm() {
		return modelterm;
	}


	public void setModelterm(String modelterm) {
		this.modelterm = modelterm;
	}


	public String getModelcondition() {
		return modelcondition;
	}


	public void setModelcondition(String modelcondition) {
		this.modelcondition = modelcondition;
	}


	 


	 
}
