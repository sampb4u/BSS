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
public class CustmerType {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer ctid;
	
	@Column 
    private String custmertype;
	
	@Column
	private String custmertypename;

	public String getCustmertypename() {
		return custmertypename;
	}

	public void setCustmertypename(String custmertypename) {
		this.custmertypename = custmertypename;
	}

	public Integer getCtid() {
		return ctid;
	}

	public void setCtid(Integer ctid) {
		this.ctid = ctid;
	}

	public String getCustmertype() {
		return custmertype;
	}

	public void setCustmertype(String custmertype) {
		this.custmertype = custmertype;
	}
    

	 	 

}
