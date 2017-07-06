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
public class CouplingFactor {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer cid;
	
	@Column(nullable = false)
	private String  couplingMethod;
	
	@Column(nullable = false)
	private Double  cf;
	
	@Column(nullable = false)
	private Byte  status;

	public Integer getCid() {
		return cid;
	}

	public void setCid(Integer cid) {
		this.cid = cid;
	}

	public String getCouplingMethod() {
		return couplingMethod;
	}

	public void setCouplingMethod(String couplingMethod) {
		this.couplingMethod = couplingMethod;
	}

	public Double getCf() {
		return cf;
	}

	public void setCf(Double cf) {
		this.cf = cf;
	}

	public Byte getStatus() {
		return status;
	}

	public void setStatus(Byte status) {
		this.status = status;
	}
	
	

	  	 
	 
}
