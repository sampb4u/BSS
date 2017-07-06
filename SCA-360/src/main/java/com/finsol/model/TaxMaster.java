package com.finsol.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TaxMaster 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer aid;
	
	@Column
	private String taxname;
	public Integer getAid() {
		return aid;
	}
	public void setAid(Integer aid) {
		this.aid = aid;
	}
	public String getTaxname() {
		return taxname;
	}
	public String getPercentage() {
		return percentage;
		
	}
	public void setPercentage(String percentage) {
		this.percentage = percentage;
	}
	public void setTaxname(String taxname) {
		this.taxname = taxname;
	}
	public String getCountrycode() {
		return countrycode;
	}
	public void setCountrycode(String countrycode) {
		this.countrycode = countrycode;
	}
	@Column
	private  String countrycode;
	
	@Column
	private String percentage;

}
