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
public class Voltage {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer vid;
	
	@Column(nullable = false)
	private Byte frequencey;
	
	@Column(nullable = false)
	private String Voltage;
	
	@Column(nullable = false)
	private Byte status;

	public Integer getVid() {
		return vid;
	}

	public void setVid(Integer vid) {
		this.vid = vid;
	}

	public Byte getFrequencey() {
		return frequencey;
	}

	public void setFrequencey(Byte frequencey) {
		this.frequencey = frequencey;
	}

	public String getVoltage() {
		return Voltage;
	}

	public void setVoltage(String voltage) {
		Voltage = voltage;
	}

	public Byte getStatus() {
		return status;
	}

	public void setStatus(Byte status) {
		this.status = status;
	}

	 

}
