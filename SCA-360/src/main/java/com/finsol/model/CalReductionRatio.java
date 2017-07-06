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
public class CalReductionRatio {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer caid;
	@Column(nullable = false)
	private Double  ratiostartingvalue;
	@Column(nullable = false)
	private Double ratioendingvalue;
	public Integer getCaid() {
		return caid;
	}
	public void setCaid(Integer caid) {
		this.caid = caid;
	}
	public Double getRatiostartingvalue() {
		return ratiostartingvalue;
	}
	public void setRatiostartingvalue(Double ratiostartingvalue) {
		this.ratiostartingvalue = ratiostartingvalue;
	}
	public Double getRatioendingvalue() {
		return ratioendingvalue;
	}
	public void setRatioendingvalue(Double ratioendingvalue) {
		this.ratioendingvalue = ratioendingvalue;
	}
		 
}
