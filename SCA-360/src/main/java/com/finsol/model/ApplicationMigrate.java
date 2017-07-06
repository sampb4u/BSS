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
public class ApplicationMigrate {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer aid;
	
	
	@Column
	private String maincode;

	@Column
	private String mainindustry;

	@Column
	private String subcode;

	@Column
	private String subindustry;

	public Integer getAid() {
		return aid;
	}

	public void setAid(Integer aid) {
		this.aid = aid;
	}

	public String getMaincode() {
		return maincode;
	}

	public void setMaincode(String maincode) {
		this.maincode = maincode;
	}

	public String getMainindustry() {
		return mainindustry;
	}

	public void setMainindustry(String mainindustry) {
		this.mainindustry = mainindustry;
	}

	public String getSubcode() {
		return subcode;
	}

	public void setSubcode(String subcode) {
		this.subcode = subcode;
	}

	public String getSubindustry() {
		return subindustry;
	}

	public void setSubindustry(String subindustry) {
		this.subindustry = subindustry;
	}
	
	
	
	
	
	 
 
	 	 

}
