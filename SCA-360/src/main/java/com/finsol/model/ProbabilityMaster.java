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
public class ProbabilityMaster {

	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer slno;
	
	@Column
	private Integer id;
	
	@Column
	private String customergroup;
	
	@Column
	private Integer indicatorcode;
	
	@Column
	private String indicator;
	
	@Column
	private Integer probability;
	

	@Column
	private Byte status;

	
	public Integer getSlno() {
		return slno;
	}

	public void setSlno(Integer slno) {
		this.slno = slno;
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

	public String getCustomergroup() {
		return customergroup;
	}

	public void setCustomergroup(String customergroup) {
		this.customergroup = customergroup;
	}


	

	public Integer getIndicatorcode() {
		return indicatorcode;
	}

	public void setIndicatorcode(Integer indicatorcode) {
		this.indicatorcode = indicatorcode;
	}

	public Integer getProbability() {
		return probability;
	}

	public void setProbability(Integer probability) {
		this.probability = probability;
	}

	public Byte getStatus() {
		return status;
	}

	public void setStatus(Byte status) {
		this.status = status;
	}


	
	
	
	
}
