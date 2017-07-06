package com.finsol.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @author DMurty
 */
@Entity
public class Department
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer deptid;

	@Column(nullable = false)
	private String departmentname;

	@Column(nullable = false)
	private String departmentnameshortcut;

	@Column(nullable = false)
	private String contactperson;

	@Column(nullable = false)
	private String email;

	public Integer getDeptid() {
		return deptid;
	}

	public void setDeptid(Integer deptid) {
		this.deptid = deptid;
	}

	public String getDepartmentname() {
		return departmentname;
	}

	public void setDepartmentname(String departmentname) {
		this.departmentname = departmentname;
	}

	public String getDepartmentnameshortcut() {
		return departmentnameshortcut;
	}

	public void setDepartmentnameshortcut(String departmentnameshortcut) {
		this.departmentnameshortcut = departmentnameshortcut;
	}

	public String getContactperson() {
		return contactperson;
	}

	public void setContactperson(String contactperson) {
		this.contactperson = contactperson;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	 

	 
	public String getExtent() {
		return extent;
	}

	public void setExtent(String extent) {
		this.extent = extent;
	}

	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	public Byte getStatus() {
		return status;
	}

	public void setStatus(Byte status) {
		this.status = status;
	}

	@Column(nullable = false)
	private String extent;

	@Column(nullable = false)
	private String  phonenumber;

	@Column(nullable = false)
	private Byte status;
	 	
 }
