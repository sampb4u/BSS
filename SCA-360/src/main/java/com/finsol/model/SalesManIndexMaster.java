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
public class SalesManIndexMaster {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer smIno;
	
	
	 
	@Column
	private String custmercode;
	
	
	@Column
	private String countrycode;
	
	
	@Column
	private String regionid;
	
	
	

	@Column
	private String regionname;
	
	
	@Column
	private String salesmancode;
	
	
	@Column
	private String salesmanname;
	
	@Column
	private Byte status;


	public Byte getStatus() {
		return status;
	}


	public void setStatus(Byte status) {
		this.status = status;
	}


	public Integer getSmIno() {
		return smIno;
	}


	public void setSmIno(Integer smIno) {
		this.smIno = smIno;
	}


	public String getCustmercode() {
		return custmercode;
	}


	public void setCustmercode(String custmercode) {
		this.custmercode = custmercode;
	}


	public String getCountrycode() {
		return countrycode;
	}


	public void setCountrycode(String countrycode) {
		this.countrycode = countrycode;
	}


	 


	 

	public String getRegionname() {
		return regionname;
	}


	public void setRegionname(String regionname) {
		this.regionname = regionname;
	}


	public String getSalesmancode() {
		return salesmancode;
	}


	public void setSalesmancode(String salesmancode) {
		this.salesmancode = salesmancode;
	}


	public String getSalesmanname() {
		return salesmanname;
	}


	public void setSalesmanname(String salesmanname) {
		this.salesmanname = salesmanname;
	}


	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	public String getRegionid() {
		return regionid;
	}


	public void setRegionid(String regionid) {
		this.regionid = regionid;
	}
	
	
	
	
	
	
	
	
	
 
	
	 
	 
 
}
