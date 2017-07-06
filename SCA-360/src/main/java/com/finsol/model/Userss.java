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
public class Userss 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private Integer userid;	
	@Column(unique = true,nullable = false)
	private String loginid;	
	@Column
	private String userfirstname;
	@Column
	private String  userlastname;
	@Column
	private String  emailid;
	@Column	
	private String countrycode;
	@Column	
	private String utctimezone;
	@Column	
	private Integer roleid;
	@Column	
	private Byte status;
	@Column	
	private Byte ispwdchanged;
	@Column	
	private String  photolocation;
	@Column	
	private String signaturelocation;
	
	public Integer getUserid() {
		return userid;
	}
	public void setUserid(Integer userid) {
		this.userid = userid;
	}
	public String getLoginid() {
		return loginid;
	}
	public void setLoginid(String loginid) {
		this.loginid = loginid;
	}
	public String getUserfirstname() {
		return userfirstname;
	}
	public void setUserfirstname(String userfirstname) {
		this.userfirstname = userfirstname;
	}
	public String getUserlastname() {
		return userlastname;
	}
	public void setUserlastname(String userlastname) {
		this.userlastname = userlastname;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	
	public String getCountrycode() {
		return countrycode;
	}
	public void setCountrycode(String countrycode) {
		this.countrycode = countrycode;
	}
	public String getUtctimezone() {
		return utctimezone;
	}
	public void setUtctimezone(String utctimezone) {
		this.utctimezone = utctimezone;
	}
	public Integer getRoleid() {
		return roleid;
	}
	public void setRoleid(Integer roleid) {
		this.roleid = roleid;
	}
	public Byte getStatus() {
		return status;
	}
	public void setStatus(Byte status) {
		this.status = status;
	}
	public Byte getIspwdchanged() {
		return ispwdchanged;
	}
	public void setIspwdchanged(Byte ispwdchanged) {
		this.ispwdchanged = ispwdchanged;
	}
	public String getPhotolocation() {
		return photolocation;
	}
	public void setPhotolocation(String photolocation) {
		this.photolocation = photolocation;
	}
	public String getSignaturelocation() {
		return signaturelocation;
	}
	public void setSignaturelocation(String signaturelocation) {
		this.signaturelocation = signaturelocation;
	}



}
