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
public class SequenceNumber {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;	
	@Column
	private String countrycode;	
	
	@Column
	private String processname;
	@Column
	private String staffinitial;	
	@Column
	private Integer   seqyear;	
	@Column
	private Integer serialno;	
	@Column
	private String customized1;	
	@Column
	private String customized2;	
	@Column
	private String totalsequenceno;
	
	@Column
	private String version;
	
	
	
	
	
	public String getVersion() {
		return version;
	}
	public void setVersion(String version) {
		this.version = version;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getCountrycode() {
		return countrycode;
	}
	public void setCountrycode(String countrycode) {
		this.countrycode = countrycode;
	}
	public String getStaffinitial() {
		return staffinitial;
	}
	public void setStaffinitial(String staffinitial) {
		this.staffinitial = staffinitial;
	}
	
	
	public String getProcessname() {
		return processname;
	}
	public void setProcessname(String processname) {
		this.processname = processname;
	}
	public Integer getSeqyear() {
		return seqyear;
	}
	public void setSeqyear(Integer seqyear) {
		this.seqyear = seqyear;
	}
	public Integer getSerialno() {
		return serialno;
	}
	public void setSerialno(Integer serialno) {
		this.serialno = serialno;
	}
	public String getCustomized1() {
		return customized1;
	}
	public void setCustomized1(String customized1) {
		this.customized1 = customized1;
	}
	public String getCustomized2() {
		return customized2;
	}
	public void setCustomized2(String customized2) {
		this.customized2 = customized2;
	}
	public String getTotalsequenceno() {
		return totalsequenceno;
	}
	public void setTotalsequenceno(String totalsequenceno) {
		this.totalsequenceno = totalsequenceno;
	}
	
	
	
	
	
	
	

}
