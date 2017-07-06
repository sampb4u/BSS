package com.finsol.model;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Description 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer did;
	
	 
	
	public Integer getDid() {
		return did;
	}

	public void setDid(Integer did) {
		this.did = did;
	}

 

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public Date getCurrentDate() {
		return currentDate;
	}

	public void setCurrentDate(Date currentDate) {
		this.currentDate = currentDate;
	}

	@Column(columnDefinition="TEXT")
	private String remarks;
	
	@Column
	private Date currentDate;
	
	@Column
	private String userName;

	 @Column
	 private String caserefernce;
	 
	 
	
	 public String getHoursandminutes() {
		return hoursandminutes;
	}

	public void setHoursandminutes(String hoursandminutes) {
		this.hoursandminutes = hoursandminutes;
	}

	@Column
	 private String hoursandminutes;
	 
	@Column
	private Integer tab;



	public Integer getTab() {
		return tab;
	}

	public void setTab(Integer tab) {
		this.tab = tab;
	}

	public String getUserName() {
		return userName;
	}

	public String getCaserefernce() {
		return caserefernce;
	}

	public void setCaserefernce(String caserefernce) {
		this.caserefernce = caserefernce;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	 
}
