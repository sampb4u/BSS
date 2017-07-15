package com.finsol.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

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
	private String lastname;
	@Column
	private String middlename;
	@Column
	private String emailid;
	@Column
	private String assignedto;
	@Column
	private String status;

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
	private String createdby;

	@Column
	private String computertype;

	@Column
	private String computerbrand;
	@Column
	private String computermodel;
	@Column
	private String computerram;
	@Column
	private String computerstorage;
	@Column
	private String assetid;
	@Column
	private String lan;
	@Column
	private String computername;
	@Column
	private String ip;
	@Column
	private String shiid;
	@Column
	private String vpnid;
	@Column
	private String vpnpassowrd;
	@Column
	private String macaddress;
	@Column
	private String monitorbrand;
	@Column
	private String monitormodel;
	@Column
	private String monitorsize;
	@Column
	private String keyboardtype;
	@Column
	private String keyboardbrand;
	@Column
	private String mousetype;
	@Column
	private String mousebrand;
	@Column
	private String exstorage1;
	@Column
	private String exstorage2;
	@Column
	private String notesit;

	@Column
	private String emailid1;
	@Column
	private String emailid2;
	@Column
	private String emailid3;

	@Column
	private String country;

	@Column
	private String notes;

/*	@OneToMany(targetEntity = ITUserLinks.class)
	private List<ITUserLinks> hrlinks;

	@OneToMany(targetEntity = ITUserLinks.class)
	private List<ITUserLinks> itlinks;*/

/*	public List<ITUserLinks> getHrlinks() {
		return hrlinks;
	}

	public void setHrlinks(List<ITUserLinks> hrlinks) {
		this.hrlinks = hrlinks;
	}

	public List<ITUserLinks> getItlinks() {
		return itlinks;
	}

	public void setItlinks(List<ITUserLinks> itlinks) {
		this.itlinks = itlinks;
	}*/

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

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

	public String getCreatedby() {
		return createdby;
	}

	public void setCreatedby(String createdby) {
		this.createdby = createdby;
	}

	public String getComputertype() {
		return computertype;
	}

	public void setComputertype(String computertype) {
		this.computertype = computertype;
	}

	public String getComputerbrand() {
		return computerbrand;
	}

	public void setComputerbrand(String computerbrand) {
		this.computerbrand = computerbrand;
	}

	public String getComputermodel() {
		return computermodel;
	}

	public void setComputermodel(String computermodel) {
		this.computermodel = computermodel;
	}

	public String getComputerram() {
		return computerram;
	}

	public void setComputerram(String computerram) {
		this.computerram = computerram;
	}

	public String getComputerstorage() {
		return computerstorage;
	}

	public void setComputerstorage(String computerstorage) {
		this.computerstorage = computerstorage;
	}

	public String getAssetid() {
		return assetid;
	}

	public void setAssetid(String assetid) {
		this.assetid = assetid;
	}

	public String getLan() {
		return lan;
	}

	public void setLan(String lan) {
		this.lan = lan;
	}

	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}

	public String getShiid() {
		return shiid;
	}

	public void setShiid(String shiid) {
		this.shiid = shiid;
	}

	public String getVpnid() {
		return vpnid;
	}

	public void setVpnid(String vpnid) {
		this.vpnid = vpnid;
	}

	public String getVpnpassowrd() {
		return vpnpassowrd;
	}

	public void setVpnpassowrd(String vpnpassowrd) {
		this.vpnpassowrd = vpnpassowrd;
	}

	public String getMacaddress() {
		return macaddress;
	}

	public void setMacaddress(String macaddress) {
		this.macaddress = macaddress;
	}

	public String getMonitorbrand() {
		return monitorbrand;
	}

	public void setMonitorbrand(String monitorbrand) {
		this.monitorbrand = monitorbrand;
	}

	public String getMonitormodel() {
		return monitormodel;
	}

	public void setMonitormodel(String monitormodel) {
		this.monitormodel = monitormodel;
	}

	public String getMonitorsize() {
		return monitorsize;
	}

	public void setMonitorsize(String monitorsize) {
		this.monitorsize = monitorsize;
	}

	public String getKeyboardtype() {
		return keyboardtype;
	}

	public void setKeyboardtype(String keyboardtype) {
		this.keyboardtype = keyboardtype;
	}

	public String getKeyboardbrand() {
		return keyboardbrand;
	}

	public void setKeyboardbrand(String keyboardbrand) {
		this.keyboardbrand = keyboardbrand;
	}

	public String getMousetype() {
		return mousetype;
	}

	public void setMousetype(String mousetype) {
		this.mousetype = mousetype;
	}

	public String getMousebrand() {
		return mousebrand;
	}

	public void setMousebrand(String mousebrand) {
		this.mousebrand = mousebrand;
	}

	public String getExstorage1() {
		return exstorage1;
	}

	public void setExstorage1(String exstorage1) {
		this.exstorage1 = exstorage1;
	}

	public String getExstorage2() {
		return exstorage2;
	}

	public void setExstorage2(String exstorage2) {
		this.exstorage2 = exstorage2;
	}

	public String getNotesit() {
		return notesit;
	}

	public void setNotesit(String notesit) {
		this.notesit = notesit;
	}

	public String getEmailid1() {
		return emailid1;
	}

	public void setEmailid1(String emailid1) {
		this.emailid1 = emailid1;
	}

	public String getEmailid2() {
		return emailid2;
	}

	public void setEmailid2(String emailid2) {
		this.emailid2 = emailid2;
	}

	public String getEmailid3() {
		return emailid3;
	}

	public void setEmailid3(String emailid3) {
		this.emailid3 = emailid3;
	}

}
