package com.finsol.bean;

public class CustmerMasterContactDetailsBean 
{  
	private Integer id;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	private String  contactName;
	private String  contactNumber;
	private String  contactAltNumber;
	private String  department;
	private String  emailAddr;
	private String  titleName;
	public String getContactName() {
		return contactName;
	}
	public void setContactName(String contactName) {
		this.contactName = contactName;
	}
	public String getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getContactAltNumber() {
		return contactAltNumber;
	}
	public void setContactAltNumber(String contactAltNumber) {
		this.contactAltNumber = contactAltNumber;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getEmailAddr() {
		return emailAddr;
	}
	public void setEmailAddr(String emailAddr) {
		this.emailAddr = emailAddr;
	}
	public String getTitleName() {
		return titleName;
	}
	public void setTitleName(String titleName) {
		this.titleName = titleName;
	}
	

}
