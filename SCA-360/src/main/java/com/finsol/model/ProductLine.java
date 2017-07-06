package com.finsol.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


/**
 * @author naidu
 */
@Entity
public class ProductLine {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private Integer id;
	@Column
	private String plcode;
	@Column
	private String pldesc;
	@Column
	private String productcode;
	@Column
	private String product;
	@Column
	private String pccode;
	@Column
	private String productcategory;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getPlcode() {
		return plcode;
	}
	public void setPlcode(String plcode) {
		this.plcode = plcode;
	}
	public String getPldesc() {
		return pldesc;
	}
	public void setPldesc(String pldesc) {
		this.pldesc = pldesc;
	}
	public String getProductcode() {
		return productcode;
	}
	public void setProductcode(String productcode) {
		this.productcode = productcode;
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
	public String getProductcategory() {
		return productcategory;
	}
	public void setProductcategory(String productcategory) {
		this.productcategory = productcategory;
	}
	
	
	
	

}
