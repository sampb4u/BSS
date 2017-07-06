package com.finsol.model;

import java.sql.Time;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import org.hibernate.annotations.Type;

/**
 * @author Rama Krishna
 *
 */
@Entity
public class PackageDetails {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer slno;
	
	@Column
	private Integer id;	
	
	@Column
	private String salesorder;
		
	@Column
	private String modelno;
	
	@Column
	private String dimension;
	
	@Column
	private Double netweight;
	
	@Column
	private Double grossweight;	
	
	@Column
	private String packingtype;	
	
	@Column
	@Type(type="date")
	private Date startdate;	

	@Column
	private Time starttime;
	
	@Column
	@Type(type="date")
	private Date enddate;	

	@Column
	private Time endtime;
	
	@Column
	private String remarks;
	
	

	
	public Integer getSlno() {
		return slno;
	}
	public void setSlno(Integer slno) {
		this.slno = slno;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getSalesorder() {
		return salesorder;
	}
	public void setSalesorder(String salesorder) {
		this.salesorder = salesorder;
	}
	public String getModelno() {
		return modelno;
	}
	public void setModelno(String modelno) {
		this.modelno = modelno;
	}
	public String getDimension() {
		return dimension;
	}
	public void setDimension(String dimension) {
		this.dimension = dimension;
	}
	public Double getNetweight() {
		return netweight;
	}
	public void setNetweight(Double netweight) {
		this.netweight = netweight;
	}
	public Double getGrossweight() {
		return grossweight;
	}
	public void setGrossweight(Double grossweight) {
		this.grossweight = grossweight;
	}
	public String getPackingtype() {
		return packingtype;
	}
	public void setPackingtype(String packingtype) {
		this.packingtype = packingtype;
	}
	
	public Date getStartdate() {
		return startdate;
	}
	public void setStartdate(Date startdate) {
		this.startdate = startdate;
	}
	public Time getStarttime() {
		return starttime;
	}
	public void setStarttime(Time starttime) {
		this.starttime = starttime;
	}
	public Date getEnddate() {
		return enddate;
	}
	public void setEnddate(Date enddate) {
		this.enddate = enddate;
	}
	public Time getEndtime() {
		return endtime;
	}
	public void setEndtime(Time endtime) {
		this.endtime = endtime;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}	
	


	

}
