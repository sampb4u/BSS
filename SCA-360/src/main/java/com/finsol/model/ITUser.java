package com.finsol.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author Anvesh
 *
 */
@Entity
public class ITUser {
	

	@Id
	private String requestid;	
	@Column
	private String employeeid;
	@Column
	private String firstname;
	@Column
	private String  lastname;
	@Column
	private String  middlename;
	@Column
	private String  emailid;
	@Column
	private String assignedto;
	@Column
	private String status;
	@Column
	private String computername;
	@Column
	private String designation;
	
	@Column
	private String managername;
	
	@Column
	private String personalphonenumber;
	
	@Column
	private String officephonenumber;
	@Column
	private String officephonebrand;
	
	@Column
	private String officephonemodel;
	
	@Column
	private String officephonestorage;
	@Column
	private String officephonesno;
	
	@Column
	private String notes;

	public String getOfficephonesno() {
		return officephonesno;
	}

	public void setOfficephonesno(String officephonesno) {
		this.officephonesno = officephonesno;
	}

	public String getRequestid() {
		return requestid;
	}

	public void setRequestid(String requestid) {
		this.requestid = requestid;
	}

	public String getEmployeeid() {
		return employeeid;
	}

	public void setEmployeeid(String employeeid) {
		this.employeeid = employeeid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getMiddlename() {
		return middlename;
	}

	public void setMiddlename(String middlename) {
		this.middlename = middlename;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getAssignedto() {
		return assignedto;
	}

	public void setAssignedto(String assignedto) {
		this.assignedto = assignedto;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getComputername() {
		return computername;
	}

	public void setComputername(String computername) {
		this.computername = computername;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getManagername() {
		return managername;
	}

	public void setManagername(String managername) {
		this.managername = managername;
	}

	public String getPersonalphonenumber() {
		return personalphonenumber;
	}

	public void setPersonalphonenumber(String personalphonenumber) {
		this.personalphonenumber = personalphonenumber;
	}

	public String getOfficephonenumber() {
		return officephonenumber;
	}

	public void setOfficephonenumber(String officephonenumber) {
		this.officephonenumber = officephonenumber;
	}

	public String getOfficephonebrand() {
		return officephonebrand;
	}

	public void setOfficephonebrand(String officephonebrand) {
		this.officephonebrand = officephonebrand;
	}

	public String getOfficephonemodel() {
		return officephonemodel;
	}

	public void setOfficephonemodel(String officephonemodel) {
		this.officephonemodel = officephonemodel;
	}

	public String getOfficephonestorage() {
		return officephonestorage;
	}

	public void setOfficephonestorage(String officephonestorage) {
		this.officephonestorage = officephonestorage;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}
	
	
	
	
	
}
