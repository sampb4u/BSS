package com.finsol.bean;

import javax.persistence.Entity;

/**
 * @author siva reddy
 *
 */
@Entity
public class SalesBudgetFormBean {
	
	private static final long serialVersionUID = 1L;	
	
	private String  year;

	private String  countrycode;

	private String  currency;

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	 

	public String getCountrycode() {
		return countrycode;
	}

	public void setCountrycode(String countrycode) {
		this.countrycode = countrycode;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}


	 
 
}
