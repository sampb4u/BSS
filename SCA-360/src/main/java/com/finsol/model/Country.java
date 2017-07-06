package com.finsol.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;


/**
 * @author Rama Krishna
 *
 */
@Entity
public class Country 
{
	@Id
	@Column
	private String countrycode;

	@Column(unique = true,nullable = false)
	private String country;
	
	@Column
	private String description;
	
	@Column
	private String budgclr;
	@Column
	private String bokclr;
	@Column
	private Byte country_order;
	@Column
	private Byte status;
	@Column
	private String currencycode;
	
	@Column
	private String flag;


	public String getFlag()
	{
		return flag;
	}
	public void setFlag(String flag)
	{
		this.flag = flag;
	}
	public Byte getStatus() {
		return status;
	}
	public void setStatus(Byte status) {
		this.status = status;
	}
	 
	public String getCurrencycode() {
		return currencycode;
	}
	public void setCurrencycode(String currencycode) {
		this.currencycode = currencycode;
	}
	public Byte getCountry_order() {
		return country_order;
	}
	public void setCountry_order(Byte country_order) {
		this.country_order = country_order;
	}
	public String getCountrycode() {
		return countrycode;
	}
	public void setCountrycode(String countrycode) {
		this.countrycode = countrycode;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getBudgclr() {
		return budgclr;
	}
	public void setBudgclr(String budgclr) {
		this.budgclr = budgclr;
	}
	public String getBokclr() {
		return bokclr;
	}
	public void setBokclr(String bokclr) {
		this.bokclr = bokclr;
	}
	
	}
