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
public class Product 
{

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer productid;
	
	@Column (nullable = false)
	private  String product;
	
	@Column (nullable = false)
	private  String pccode;
	
	@Column (nullable = false)
	private  String bokclr;
	
	 
	public String getProductcode() {
		return productcode;
	}


	public void setProductcode(String productcode) {
		this.productcode = productcode;
	}


	@Column (nullable = false)
	private  String budgclr;
	
	@Column 
	private  String productcode;
	
	


	public Integer getProductid() {
		return productid;
	}


	public void setProductid(Integer productid) {
		this.productid = productid;
	}


	public String getProduct() {
		return product;
	}


	public void setProduct(String product) {
		this.product = product;
	}


	public String getPccode() {
		return pccode;
	}


	public void setPccode(String pccode) {
		this.pccode = pccode;
	}


	public String getBokclr() {
		return bokclr;
	}


	public void setBokclr(String bokclr) {
		this.bokclr = bokclr;
	}


	public String getBudgclr() {
		return budgclr;
	}


	public void setBudgclr(String budgclr) {
		this.budgclr = budgclr;
	}
	
 


	
}
