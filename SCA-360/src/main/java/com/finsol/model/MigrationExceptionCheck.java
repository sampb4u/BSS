package com.finsol.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @author siva reddy
 *
 */
@Entity
public class MigrationExceptionCheck {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer mid;
	
	
	@Column
	private String  salesorder;  
	
	@Column
	private String feedname;
	
	
	
	public String getSalesorder() {
		return salesorder;
	}

	public void setSalesorder(String salesorder) {
		this.salesorder = salesorder;
	}

	@Column
	private String cause;
	
	@Column
	private String  migrationtime;

	public Integer getMid() {
		return mid;
	}

	public void setMid(Integer mid) {
		this.mid = mid;
	}

	 
	public String getFeedname() {
		return feedname;
	}

	public void setFeedname(String feedname) {
		this.feedname = feedname;
	}

	public String getCause() {
		return cause;
	}

	public void setCause(String cause) {
		this.cause = cause;
	}

	public String getMigrationtime() {
		return migrationtime;
	}

	public void setMigrationtime(String migrationtime) {
		this.migrationtime = migrationtime;
	}
	
	

	 	 	 

}
