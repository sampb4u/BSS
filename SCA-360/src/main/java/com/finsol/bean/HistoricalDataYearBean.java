package com.finsol.bean;

/**
 * @author Rama Krishna
 *
 */
public class HistoricalDataYearBean 
{
	
	private String countryCode;
	private Integer year;
	private String pcCode;
	private Byte historyFlag;
	private String modifyFlag;
	


	public String getCountryCode() {
		return countryCode;
	}
	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}
	public Integer getYear() {
		return year;
	}
	public void setYear(Integer year) {
		this.year = year;
	}
	public String getPcCode() {
		return pcCode;
	}
	public void setPcCode(String pcCode) {
		this.pcCode = pcCode;
	}
	public Byte getHistoryFlag() {
		return historyFlag;
	}
	public void setHistoryFlag(Byte historyFlag) {
		this.historyFlag = historyFlag;
	}
	public String getModifyFlag() {
		return modifyFlag;
	}
	public void setModifyFlag(String modifyFlag) {
		this.modifyFlag = modifyFlag;
	}
	
	

}
