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
public class MTR_KW {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer mid;
	
	
	@Column
	private Double mtr_kw;  
	
	 	
	@Column
	private Byte status;


	public Integer getMid() {
		return mid;
	}


	public void setMid(Integer mid) {
		this.mid = mid;
	}


	public Double getMtr_kw() {
		return mtr_kw;
	}


	public void setMtr_kw(Double mtr_kw) {
		this.mtr_kw = mtr_kw;
	}


	public Byte getStatus() {
		return status;
	}


	public void setStatus(Byte status) {
		this.status = status;
	}

	 	 	 

}
