package com.finsol.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;


/**
 * @author siva reddy
 *
 */
@Entity
public class OutPutRpm 
{
	@Id
	@Column
	private  Integer ouid;
 
	
	@Column
	private Integer frquency;
	
	@Column
	private Double outputrpm;
	@Column
	private Integer reductionvalue;
	
	public Integer getOuid() {
		return ouid;
	}
	public void setOuid(Integer ouid) {
		this.ouid = ouid;
	}
	public Integer getFrquency() {
		return frquency;
	}
	public void setFrquency(Integer frquency) {
		this.frquency = frquency;
	}
	public Double getOutputrpm() {
		return outputrpm;
	}
	public void setOutputrpm(Double outputrpm) {
		this.outputrpm = outputrpm;
	}
	public Integer getReductionvalue() {
		return reductionvalue;
	}
	public void setReductionvalue(Integer reductionvalue) {
		this.reductionvalue = reductionvalue;
	}
	 
	


	 	
	}
