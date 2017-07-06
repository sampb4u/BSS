package com.finsol.bean;


import javax.persistence.Entity;


/**
 * @author Rama Krishna
 *
 */
@Entity
public class CountryLogoBean 
{ 
	private String countryflag;

 
	private String country;


	public String getCountryflag()
	{
		return countryflag;
	}


	public void setCountryflag(String countryflag)
	{
		this.countryflag = countryflag;
	}


	public String getCountry()
	{
		return country;
	}


	public void setCountry(String country)
	{
		this.country = country;
	}
	
	
	
	 
	 
	
	}
