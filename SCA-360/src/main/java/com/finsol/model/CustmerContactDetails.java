package com.finsol.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @author sahadeva
 */
@Entity
public class CustmerContactDetails 
{
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column
    private Integer contactid;
	
	@Column
	private String  contactName;
	@Column
	 private String contactNumber;
	@Column
	 private String contactAltNumber;
	@Column
	 private String department;
	@Column
	 private String  emailAddr;
	
	@Column
	private Integer custmerid;
	
	
	@Column
	private String custmermodifeyStatus;
	
	
	
	
	
	public String getCustmermodifeyStatus() {
		return custmermodifeyStatus;
	}
	public void setCustmermodifeyStatus(String custmermodifeyStatus) {
		this.custmermodifeyStatus = custmermodifeyStatus;
	}

	private Integer id;
	
	private String status;
	
	public Integer getId() {
		return id;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getCustmerid() {
		return custmerid;
	}
	public void setCustmerid(Integer custmerid) {
		this.custmerid = custmerid;
	}
	 
	@Column
	private String titleName;
	
	 
 
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
	public Integer getContactid() {
		return contactid;
	}
	public void setContactid(Integer contactid) {
		this.contactid = contactid;
	}
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
	 
	 
	 
	
	 
	
	 	
	
	 	
}
