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
public class ProductCategory {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer pcid;
	
	
	@Column (nullable = false)
	private String productcategorycode;
	
	
	
	@Column (nullable = false)
	private String bokclr;
	
	
	
	@Column (nullable = false)
	private String budgclr;
	
	
	@Column (nullable = false)
	private String  description;
	
	@Column (nullable = false)
	private String  productcategory;
	
	@Column
	private Byte  status;

	public Byte getStatus() {
		return status;
	}

	public void setStatus(Byte status) {
		this.status = status;
	}

	public Integer getPcid() {
		return pcid;
	}

	public void setPcid(Integer pcid) {
		this.pcid = pcid;
	}

	public String getProductcategorycode() {
		return productcategorycode;
	}

	public void setProductcategorycode(String productcategorycode) {
		this.productcategorycode = productcategorycode;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getProductcategory() {
		return productcategory;
	}

	public void setProductcategory(String productcategory) {
		this.productcategory = productcategory;
	}
	
	

}
