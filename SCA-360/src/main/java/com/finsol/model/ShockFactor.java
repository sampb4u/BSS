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
public class ShockFactor {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer sid;
	
	@Column(nullable = false)
	private String  degreeOfShock;
	
	@Column(nullable = false)
	private Double  fsform;
	
	@Column(nullable = false)
	private Double  fseform;
	
	@Column(nullable = false)
	private Byte  status;

	public Integer getSid() {
		return sid;
	}

	public void setSid(Integer sid) {
		this.sid = sid;
	}

	public String getDegreeOfShock() {
		return degreeOfShock;
	}

	public void setDegreeOfShock(String degreeOfShock) {
		this.degreeOfShock = degreeOfShock;
	}

	public Double getFsform() {
		return fsform;
	}

	public void setFsform(Double fsform) {
		this.fsform = fsform;
	}

	public Double getFseform() {
		return fseform;
	}

	public void setFseform(Double fseform) {
		this.fseform = fseform;
	}

	public Byte getStatus() {
		return status;
	}

	public void setStatus(Byte status) {
		this.status = status;
	}

	 

	 	  	 
	 
}
