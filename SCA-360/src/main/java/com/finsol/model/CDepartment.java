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
public class CDepartment
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer cdid;

	@Column
	private String departmentnameshortcut;
	
	@Column
	private String caserefno;

	 
	@Column
	private Integer tab;
	
	@Column
	private Integer caseid;
	
	
	@Column
	private String stordtime;


	public Integer getCdid() {
		return cdid;
	}


	public void setCdid(Integer cdid) {
		this.cdid = cdid;
	}


	public String getDepartmentnameshortcut() {
		return departmentnameshortcut;
	}


	public void setDepartmentnameshortcut(String departmentnameshortcut) {
		this.departmentnameshortcut = departmentnameshortcut;
	}


	public String getCaserefno() {
		return caserefno;
	}


	public void setCaserefno(String caserefno) {
		this.caserefno = caserefno;
	}


	public Integer getTab() {
		return tab;
	}


	public void setTab(Integer tab) {
		this.tab = tab;
	}


	public Integer getCaseid() {
		return caseid;
	}


	public void setCaseid(Integer caseid) {
		this.caseid = caseid;
	}


	public String getStordtime() {
		return stordtime;
	}


	public void setStordtime(String stordtime) {
		this.stordtime = stordtime;
	}


	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	

	 
 }
