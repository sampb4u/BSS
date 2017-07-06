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
public class ApplicationIndustryCode {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer slno;
	
	
	 
	@Column
	private String machinecode;
	


	@Column
	private String totalname;
	
	@Column
	private String shortcutname;



	 


	public String getShortcutname() {
		return shortcutname;
	}



	public void setShortcutname(String shortcutname) {
		this.shortcutname = shortcutname;
	}



	public Integer getSlno() {
		return slno;
	}



	public void setSlno(Integer slno) {
		this.slno = slno;
	}



	public String getMachinecode() {
		return machinecode;
	}



	public void setMachinecode(String machinecode) {
		this.machinecode = machinecode;
	}



	public String getTotalname() {
		return totalname;
	}



	public void setTotalname(String totalname) {
		this.totalname = totalname;
	}
	
	
	
 
	
	 
  
 
}
