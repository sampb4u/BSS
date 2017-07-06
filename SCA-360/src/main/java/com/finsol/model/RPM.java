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
public class RPM {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer rid;
	
	@Column
	private Integer pole;  
	
	@Column
	private Integer frequencey;
	
	@Column
	private Integer rpm;
	
	
	
	 
	@Column(nullable = false)
	private Byte status;




	public Integer getRid() {
		return rid;
	}




	public void setRid(Integer rid) {
		this.rid = rid;
	}




	public Integer getPole() {
		return pole;
	}




	public void setPole(Integer pole) {
		this.pole = pole;
	}




	public Integer getFrequencey() {
		return frequencey;
	}




	public void setFrequencey(Integer frequencey) {
		this.frequencey = frequencey;
	}




	public Integer getRpm() {
		return rpm;
	}




	public void setRpm(Integer rpm) {
		this.rpm = rpm;
	}




	public Byte getStatus() {
		return status;
	}




	public void setStatus(Byte status) {
		this.status = status;
	}

	 
	 

	 
	 	 

}
