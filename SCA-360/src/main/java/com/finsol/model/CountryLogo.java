package com.finsol.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


/**
 * @author Rama Krishna
 *
 */
@Entity
public class CountryLogo 
{
	 


	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer clid;
	
	 
    @Column
	private String countrycode;

	 
	
	@Column
	private String countryflag;



	public Integer getClid()
	{
		return clid;
	}



	public void setClid(Integer clid)
	{
		this.clid = clid;
	}



	public String getCountrycode()
	{
		return countrycode;
	}



	public void setCountrycode(String countrycode)
	{
		this.countrycode = countrycode;
	}



	public String getCountryflag()
	{
		return countryflag;
	}



	public void setCountryflag(String countryflag)
	{
		this.countryflag = countryflag;
	}

	
	


	 
	
	 
  
	 
	 
	}
