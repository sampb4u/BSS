package com.finsol.bean;

public class BusinessSegmentBean 
{
	private int id;
	private String industrysectorcode;	
	private String industrysector;
    private String category;
    
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
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
