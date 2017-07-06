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
public class LocationFactor {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer lid;
	
	 
	
	@Column(nullable = false)
	private Double  lf;
	
	@Column(nullable = false)
	private String  loadLocation;
	
	@Column(nullable = false)
	private Byte  status;

	public Integer getLid() {
		return lid;
	}

	public void setLid(Integer lid) {
		this.lid = lid;
	}

 

	public String getLoadLocation() {
		return loadLocation;
	}

	public void setLoadLocation(String loadLocation) {
		this.loadLocation = loadLocation;
	}

	public Double getLf() {
		return lf;
	}

	public void setLf(Double lf) {
		this.lf = lf;
	}

	public Byte getStatus() {
		return status;
	}

	public void setStatus(Byte status) {
		this.status = status;
	}
	 
	 
	 
}
