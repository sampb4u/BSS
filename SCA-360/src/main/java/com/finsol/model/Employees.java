package com.finsol.model;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import org.hibernate.annotations.Type;



/**
 * @author sahadeva
 */

@Entity

public class Employees 
{

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column
    private Integer employeeid;	
	
	@Column(nullable = false)
	private String employeename;
	
	@Column
    private Integer designationcode;
	
	@Column
    private Integer deptcode;
	
	@Column(unique = true,nullable = false)
	private String loginid;
	
	@Column(nullable = false)
	@Type(type="date")
    private Date dateofbirth;
	
	@Column
	private String emailid;
	@Column
	private Byte gender;
	@Column
	private Byte maritalstatus;
	@Column
	private String phoneno;
	@Column
	private String mobileno;
	@Column
	private String phoneno2;
	@Column
	private Integer roleid;
	
	@Column
	private String password;
	
	@Column
    private Byte status;

	public Integer getEmployeeid() {
		return employeeid;
	}

	public void setEmployeeid(Integer employeeid) {
		this.employeeid = employeeid;
	}

	public String getEmployeename() {
		return employeename;
	}

	public void setEmployeename(String employeename) {
		this.employeename = employeename;
	}

	public Integer getDesignationcode() {
		return designationcode;
	}

	public void setDesignationcode(Integer designationcode) {
		this.designationcode = designationcode;
	}

	public Integer getDeptcode() {
		return deptcode;
	}

	public void setDeptcode(Integer deptcode) {
		this.deptcode = deptcode;
	}

	public String getLoginid() {
		return loginid;
	}

	public void setLoginid(String loginid) {
		this.loginid = loginid;
	}

	public Date getDateofbirth() {
		return dateofbirth;
	}

	public void setDateofbirth(Date dateofbirth) {
		this.dateofbirth = dateofbirth;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public Byte getGender() {
		return gender;
	}

	public void setGender(Byte gender) {
		this.gender = gender;
	}

	public Byte getMaritalstatus() {
		return maritalstatus;
	}

	public void setMaritalstatus(Byte maritalstatus) {
		this.maritalstatus = maritalstatus;
	}

	public String getPhoneno() {
		return phoneno;
	}

	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}

	public String getMobileno() {
		return mobileno;
	}

	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}

	public String getPhoneno2() {
		return phoneno2;
	}

	public void setPhoneno2(String phoneno2) {
		this.phoneno2 = phoneno2;
	}

	public Integer getRoleid() {
		return roleid;
	}

	public void setRoleid(Integer roleid) {
		this.roleid = roleid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Byte getStatus() {
		return status;
	}

	public void setStatus(Byte status) {
		this.status = status;
	}
	
	
	
	
	
}
