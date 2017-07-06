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
public class CouplingType {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer cid;
	@Column(nullable = false)
	private String  couplingType ;
	@Column(nullable = false)
	private Boolean  isRadialCheckReqd ;
	@Column(nullable = false)
	private Byte status;
	public Integer getCid() {
		return cid;
	}
	public void setCid(Integer cid) {
		this.cid = cid;
	}
	public String getCouplingType() {
		return couplingType;
	}
	public void setCouplingType(String couplingType) {
		this.couplingType = couplingType;
	}
	public Boolean getIsRadialCheckReqd() {
		return isRadialCheckReqd;
	}
	public void setIsRadialCheckReqd(Boolean isRadialCheckReqd) {
		this.isRadialCheckReqd = isRadialCheckReqd;
	}
	public Byte getStatus() {
		return status;
	}
	public void setStatus(Byte status) {
		this.status = status;
	}

	 
}
