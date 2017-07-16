package com.finsol.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ITTicket {

	@Id
	private String ticketid;
	@Column
	private String title;
	@Column
	private String tickettype;
	@Column
	private String raisedby;
	@Column
	private long createdate;
	@Column
	private long enddate;
	@Column
	private String createdatestring;
	@Column
	private String enddatestring;

	@Column
	private String status;
	@Column
	private String assignedto;
	@Column
	private String country;
	@Column
	private String priority;
	@Column
	private String notes;
	

	public String getCreatedatestring() {
		return createdatestring;
	}
	public void setCreatedatestring(String createdatestring) {
		this.createdatestring = createdatestring;
	}
	public String getEnddatestring() {
		return enddatestring;
	}
	public void setEnddatestring(String enddatestring) {
		this.enddatestring = enddatestring;
	}
	public String getTicketid() {
		return ticketid;
	}
	public void setTicketid(String ticketid) {
		this.ticketid = ticketid;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getTickettype() {
		return tickettype;
	}
	public void setTickettype(String tickettype) {
		this.tickettype = tickettype;
	}
	public String getRaisedby() {
		return raisedby;
	}
	public void setRaisedby(String raisedby) {
		this.raisedby = raisedby;
	}
	public long getCreatedate() {
		return createdate;
	}
	public void setCreatedate(long createdate) {
		this.createdate = createdate;
	}
	public long getEnddate() {
		return enddate;
	}
	public void setEnddate(long enddate) {
		this.enddate = enddate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getAssignedto() {
		return assignedto;
	}
	public void setAssignedto(String assignedto) {
		this.assignedto = assignedto;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getPriority() {
		return priority;
	}
	public void setPriority(String priority) {
		this.priority = priority;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}

}
