package com.finsol.bean;

public class ScoreBean {
	
	 private Integer slno;
	 private Integer id;
	 private String productType;
	 private Byte productTypeCode;
	 private String subType;
	 private Byte subTypeCode;
	 private String guide;
	 private String frameSizeFrom;
	 private String frameSizeTo;
	 private String stage;
	 private Double score;
	 private String mountingType;
	 
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
	public String getProductType() {
		return productType;
	}
	public void setProductType(String productType) {
		this.productType = productType;
	}

	public String getSubType() {
		return subType;
	}
	public void setSubType(String subType) {
		this.subType = subType;
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

	public Byte getProductTypeCode() {
		return productTypeCode;
	}
	public void setProductTypeCode(Byte productTypeCode) {
		this.productTypeCode = productTypeCode;
	}
	public Byte getSubTypeCode() {
		return subTypeCode;
	}
	public void setSubTypeCode(Byte subTypeCode) {
		this.subTypeCode = subTypeCode;
	}

	
	public String getFrameSizeFrom()
	{
		return frameSizeFrom;
	}
	public void setFrameSizeFrom(String frameSizeFrom)
	{
		this.frameSizeFrom = frameSizeFrom;
	}
	public String getFrameSizeTo()
	{
		return frameSizeTo;
	}
	public void setFrameSizeTo(String frameSizeTo)
	{
		this.frameSizeTo = frameSizeTo;
	}
	public Double getScore() {
		return score;
	}
	public void setScore(Double score) {
		this.score = score;
	}
	public String getMountingType() {
		return mountingType;
	}
	public void setMountingType(String mountingType) {
		this.mountingType = mountingType;
	}
	 
	
	

}
