package com.finsol.bean;

import java.util.Date;

public class DescriptionCaseBean 
{
	
	private String  description;
	//private Date    dtReport;
	private String  dtReport;
	//private Date    dateRepot;
	private String    dateRepot;
	private Date    dtReportBy;
	private String  remarks;
	private Date  dtReportComp;
	private Date dateRepotComp;
	public Date getDateRepotComp() {
		return dateRepotComp;
	}
	public void setDateRepotComp(Date dateRepotComp) {
		this.dateRepotComp = dateRepotComp;
	}
	public Date getDtReportComp() {
		return dtReportComp;
	}
	public void setDtReportComp(Date dtReportComp) {
		this.dtReportComp = dtReportComp;
	}
	/*private String remarksAdd;*/
	 
	
	 
	public String getDescription() {
		return description;
	}
	/*public Date getDateRepot() {
		return dateRepot;
	}
	public void setDateRepot(Date dateRepot) {
		this.dateRepot = dateRepot;
	}*/
	public void setDescription(String description) {
		this.description = description;
	}
	 
	public String getDateRepot() {
		return dateRepot;
	}
	public void setDateRepot(String dateRepot) {
		this.dateRepot = dateRepot;
	}
	/*public Date getDtReport() {
		return dtReport;
	}*/
/*	public void setDtReport(Date dtReport) {
		this.dtReport = dtReport;
	}*/
	public Date getDtReportBy() {
		return dtReportBy;
	}
	public String getDtReport() {
		return dtReport;
	}
	public void setDtReport(String dtReport) {
		this.dtReport = dtReport;
	}
	public void setDtReportBy(Date dtReportBy) {
		this.dtReportBy = dtReportBy;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	/*public String getRemarksAdd() {
		return remarksAdd;
	}
	public void setRemarksAdd(String remarksAdd) {
		this.remarksAdd = remarksAdd;
	}
*/
}
