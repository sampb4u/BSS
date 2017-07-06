package com.finsol.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @author siva reddy
 *
 */
@Entity
public class AFrequency {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer aid;
	
	
	@Column(nullable = false)
	private Double ratio;  
	
	@Column(nullable = false)
	private Double frequencey;
	
	
	
	@Column(nullable = false)
	private String motortype;
	
	@Column(nullable = false)
	private Byte status;

	public Integer getAid() {
		return aid;
	}

	public void setAid(Integer aid) {
		this.aid = aid;
	}

	public Double getRatio() {
		return ratio;
	}

	public void setRatio(Double ratio) {
		this.ratio = ratio;
	}

	public Double getFrequencey() {
		return frequencey;
	}

	public void setFrequencey(Double frequencey) {
		this.frequencey = frequencey;
	}

	public String getMotortype() {
		return motortype;
	}

	public void setMotortype(String motortype) {
		this.motortype = motortype;
	}

	public Byte getStatus() {
		return status;
	}

	public void setStatus(Byte status) {
		this.status = status;
	}

	 	 

}
