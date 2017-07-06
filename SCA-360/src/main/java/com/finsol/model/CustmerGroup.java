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
public class CustmerGroup {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer custid;
	
	
	@Column(name="CUSTMERGROUP")
	private String custmergroup;
	
	
	@Column(name="DISCRIPTION")
	private String discription;
	
	
	@Column(name="DIVCOUNTMULTIPLIIER")
	private String discountmultiplier;
	
	
	
	@Column(name="STATUS")
	private String status;



	public Integer getCustid() {
		return custid;
	}



	public void setCustid(Integer custid) {
		this.custid = custid;
	}



	public String getCustmergroup() {
		return custmergroup;
	}



	public void setCustmergroup(String custmergroup) {
		this.custmergroup = custmergroup;
	}



	public String getDiscription() {
		return discription;
	}



	public void setDiscription(String discription) {
		this.discription = discription;
	}



	public String getDiscountmultiplier() {
		return discountmultiplier;
	}



	public void setDiscountmultiplier(String discountmultiplier) {
		this.discountmultiplier = discountmultiplier;
	}



	public String getStatus() {
		return status;
	}



	public void setStatus(String status) {
		this.status = status;
	}
	
	
	 
	 
}
