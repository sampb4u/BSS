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
public class LoadFactor {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer lid;
	@Column(nullable = false)
	private String  loadType;
	@Column(nullable = false)
	private Byte opertingHrsStart;
	@Column(nullable = false)
	private Byte operatingHrsEnd;
	@Column(nullable = false)
	private Double loadFactor;
	@Column(nullable = false)
	private Byte  status;
	public Integer getLid() {
		return lid;
	}
	public void setLid(Integer lid) {
		this.lid = lid;
	}
	public String getLoadType() {
		return loadType;
	}
	public void setLoadType(String loadType) {
		this.loadType = loadType;
	}
	public Byte getOpertingHrsStart() {
		return opertingHrsStart;
	}
	public void setOpertingHrsStart(Byte opertingHrsStart) {
		this.opertingHrsStart = opertingHrsStart;
	}
	public Byte getOperatingHrsEnd() {
		return operatingHrsEnd;
	}
	public void setOperatingHrsEnd(Byte operatingHrsEnd) {
		this.operatingHrsEnd = operatingHrsEnd;
	}
	public Double getLoadFactor() {
		return loadFactor;
	}
	public void setLoadFactor(Double loadFactor) {
		this.loadFactor = loadFactor;
	}
	public Byte getStatus() {
		return status;
	}
	public void setStatus(Byte status) {
		this.status = status;
	}



	 	 	  	 
	 
}
