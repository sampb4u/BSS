package com.finsol.bean;

import javax.persistence.Entity;

@Entity
public class TaxMasterBean 
{ 
	private Integer id;
	private String tax;
   private String percentage;
public Integer getId()
{
	return id;
}
public void setId(Integer id)
{
	this.id = id;
}
public String getTax()
{
	return tax;
}
public void setTax(String tax)
{
	this.tax = tax;
}
public String getPercentage()
{
	return percentage;
}
public void setPercentage(String percentage)
{
	this.percentage = percentage;
}
 
   

}
