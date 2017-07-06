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
public class SalesProgressIndicators 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer indicatorcode;
	
	@Column
	private Integer id;
	
	@Column
	private String indicator;
	
	@Column
	private String description;
	
	@Column
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
