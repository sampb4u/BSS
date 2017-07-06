package com.finsol.bean;


public class SalesProgressIndicatorsBean {

	private Integer id;
	private Integer indicatorcode;
	private String indicator;	
	private String description;	
	private Byte status;
	
	

	public Integer getIndicatorcode() {
		return indicatorcode;
	}

	public void setIndicatorcode(Integer indicatorcode) {
		this.indicatorcode = indicatorcode;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getIndicator() {
		return indicator;
	}

	public void setIndicator(String indicator) {
		this.indicator = indicator;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Byte getStatus() {
		return status;
	}

	public void setStatus(Byte status) {
		this.status = status;
	}

	
	
}
