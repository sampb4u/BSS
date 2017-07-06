package com.finsol.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @author Rama Krishna
 *
 */
@Entity
public class Score {
	
	 @Id
	 @GeneratedValue(strategy=GenerationType.AUTO)
	 @Column
	 private Integer slno;
	 
	 @Column
	 private Integer id;
	 
	 @Column
	 private String producttype;
	 
	 @Column
	 private Byte producttypecode;
	 
	 @Column
	 private String subtype;
	 
	 @Column
	 private Byte subtypecode;
	 
	 @Column
	 private String guide;
	 
	 @Column
	 private Integer framesizefrom;
	 
	 @Column
	 private Integer framesizeto;

	 @Column
	 private String stage;
	 
	 @Column
	 private Double score;
	 
	 @Column
	 private String mountingtype;
	 
	 @Column
	 private String frametype;

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

	public String getProducttype() {
		return producttype;
	}

	public void setProducttype(String producttype) {
		this.producttype = producttype;
	}

	public String getSubtype() {
		return subtype;
	}

	public void setSubtype(String subtype) {
		this.subtype = subtype;
	}

	public String getGuide() {
		return guide;
	}

	public void setGuide(String guide) {
		this.guide = guide;
	}


	public String getStage() {
		return stage;
	}

	public void setStage(String stage) {
		this.stage = stage;
	}


	public Byte getProducttypecode() {
		return producttypecode;
	}

	public void setProducttypecode(Byte producttypecode) {
		this.producttypecode = producttypecode;
	}

	public Byte getSubtypecode() {
		return subtypecode;
	}

	public void setSubtypecode(Byte subtypecode) {
		this.subtypecode = subtypecode;
	}

	public Integer getFramesizefrom() {
		return framesizefrom;
	}

	public void setFramesizefrom(Integer framesizefrom) {
		this.framesizefrom = framesizefrom;
	}

	public Integer getFramesizeto() {
		return framesizeto;
	}

	public void setFramesizeto(Integer framesizeto) {
		this.framesizeto = framesizeto;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

	public String getMountingtype() {
		return mountingtype;
	}

	public void setMountingtype(String mountingtype) {
		this.mountingtype = mountingtype;
	}

	public String getFrametype()
	{
		return frametype;
	}

	public void setFrametype(String frametype)
	{
		this.frametype = frametype;
	}

	
	 
}
