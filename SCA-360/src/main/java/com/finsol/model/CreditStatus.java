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
public class CreditStatus {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer cid;
	
	
	  
	
	/**
	 * 
	 */
	@Column
	private String  creditstatus;

	@Column
	private String  creditstatusname;




	public String getCreditstatusname() {
		return creditstatusname;
	}




	public void setCreditstatusname(String creditstatusname) {
		this.creditstatusname = creditstatusname;
	}




	public Integer getCid() {
		return cid;
	}




	public void setCid(Integer cid) {
		this.cid = cid;
	}




	public String getCreditstatus() {
		return creditstatus;
	}




	public void setCreditstatus(String creditstatus) {
		this.creditstatus = creditstatus;
	}
	
	
	
	

}
