package com.finsol.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author naidu
 *
 */
@Entity	
public class IndustrySector {
	
	@Id
	@Column
	private String industrysectorcode;	
	@Column
	private String industrysector;
	@Column
	private String category;
	public String getIndustrysectorcode() {
		return industrysectorcode;
	}
	public void setIndustrysectorcode(String industrysectorcode) {
		this.industrysectorcode = industrysectorcode;
	}
	public String getIndustrysector() {
		return industrysector;
	}
	public void setIndustrysector(String industrysector) {
		this.industrysector = industrysector;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	
	

}
