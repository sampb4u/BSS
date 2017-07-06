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
public class LoadTypes {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer lid;
	@Column(nullable = false)
	private String  loadType;
	@Column(nullable = false)
	private Byte  status;



	public Integer getLid() {
		return lid;
	}



	public void setLid(Integer lid) {
		this.lid = lid;
	}



	public String getLoadType() {
		return loadType;
	}



	public void setLoadType(String loadType) {
		this.loadType = loadType;
	}



	public Byte getStatus() {
		return status;
	}



	public void setStatus(Byte status) {
		this.status = status;
	}

	 
	 

	 	  	 
	 
}
