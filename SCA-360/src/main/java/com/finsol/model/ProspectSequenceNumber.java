package com.finsol.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @author Rama Krishna
 *
 */
@Entity
public class ProspectSequenceNumber {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer psid;	
	public Integer getPsid() {
		return psid;
	}

	public void setPsid(Integer psid) {
		this.psid = psid;
	}

	public String getCountrycode() {
		return countrycode;
	}

	public void setCountrycode(String countrycode) {
		this.countrycode = countrycode;
	}

	public Integer getSeqyear() {
		return seqyear;
	}

	public void setSeqyear(Integer seqyear) {
		this.seqyear = seqyear;
	}

	public String getTotalsequenceno() {
		return totalsequenceno;
	}

	public void setTotalsequenceno(String totalsequenceno) {
		this.totalsequenceno = totalsequenceno;
	}

	@Column
	private String countrycode;	
	
	 
	 	
	@Column
	private Integer   seqyear;	
	 
	@Column
	private String totalsequenceno;
	
	
	@Column
	private Integer serialno;
	public Integer getSerialno() {
		return serialno;
	}

	public void setSerialno(Integer serialno) {
		this.serialno = serialno;
	}
	 
	
	
	
	
	 	
	
	

}
