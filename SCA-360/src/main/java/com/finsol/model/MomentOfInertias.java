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
public class MomentOfInertias {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer mid;
	@Column(nullable = false)
	private Double   wattage;
	@Column(nullable = false)
	private String   motorType;
	@Column(nullable = false)
	private Double mi;
	@Column(nullable = false)
	private Double gdsq;
	public Integer getMid() {
		return mid;
	}
	public void setMid(Integer mid) {
		this.mid = mid;
	}
	public Double getWattage() {
		return wattage;
	}
	public void setWattage(Double wattage) {
		this.wattage = wattage;
	}
	public String getMotorType() {
		return motorType;
	}
	public void setMotorType(String motorType) {
		this.motorType = motorType;
	}
	public Double getMi() {
		return mi;
	}
	public void setMi(Double mi) {
		this.mi = mi;
	}
	public Double getGdsq() {
		return gdsq;
	}
	public void setGdsq(Double gdsq) {
		this.gdsq = gdsq;
	}
	 
	 	 	  	 
	 
}
