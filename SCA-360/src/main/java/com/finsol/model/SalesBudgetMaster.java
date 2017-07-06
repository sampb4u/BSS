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
public class SalesBudgetMaster {
	
	private static final long serialVersionUID = 1L;	
	
	 
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer slno; 
	public Integer getSlno() {
		return slno;
	}
	public void setSlno(Integer slno) {
		this.slno = slno;
	}
	@Column
	private String  salesmanName;
	
	 
	
	@Column
	private String  salesmanCode;
	@Column
	private Double  janBudget;
	@Column
	private Double  febBudget;
	@Column
	private Double marBudget;
	@Column
	private Double  quarterone;
	@Column
	private Double  aprBudget;
	@Column
	private Double  mayBudget;
	@Column
	private Double  junBudget;
	@Column
	private Double  quartertwo;
	@Column
	private Double  julBudget;
	@Column
	private Double  augBudget;
	@Column
	private Double  sepBudget;
	@Column
	private Double  quarterthree;
	@Column
	private Double  octBudget;
	@Column
	private Double  novBudget;
	@Column
	private Double  decBudget;
	@Column
	private Double  quarterfour;
	@Column
	private Double  grandTotal;
	@Column
	private String  year;
	@Column
	private String  countrycode;
	@Column
	private String  currency;
	public String getSalesmanName() {
		return salesmanName;
	}
	public void setSalesmanName(String salesmanName) {
		this.salesmanName = salesmanName;
	}
	public String getSalesmanCode() {
		return salesmanCode;
	}
	public void setSalesmanCode(String salesmanCode) {
		this.salesmanCode = salesmanCode;
	}
	public Double getJanBudget() {
		return janBudget;
	}
	public void setJanBudget(Double janBudget) {
		this.janBudget = janBudget;
	}
	public Double getFebBudget() {
		return febBudget;
	}
	public void setFebBudget(Double febBudget) {
		this.febBudget = febBudget;
	}
	public Double getMarBudget() {
		return marBudget;
	}
	public void setMarBudget(Double marBudget) {
		this.marBudget = marBudget;
	}
	public Double getQuarterone() {
		return quarterone;
	}
	public void setQuarterone(Double quarterone) {
		this.quarterone = quarterone;
	}
	public Double getAprBudget() {
		return aprBudget;
	}
	public void setAprBudget(Double aprBudget) {
		this.aprBudget = aprBudget;
	}
	public Double getMayBudget() {
		return mayBudget;
	}
	public void setMayBudget(Double mayBudget) {
		this.mayBudget = mayBudget;
	}
	public Double getJunBudget() {
		return junBudget;
	}
	public void setJunBudget(Double junBudget) {
		this.junBudget = junBudget;
	}
	public Double getQuartertwo() {
		return quartertwo;
	}
	public void setQuartertwo(Double quartertwo) {
		this.quartertwo = quartertwo;
	}
	public Double getJulBudget() {
		return julBudget;
	}
	public void setJulBudget(Double julBudget) {
		this.julBudget = julBudget;
	}
	public Double getAugBudget() {
		return augBudget;
	}
	public void setAugBudget(Double augBudget) {
		this.augBudget = augBudget;
	}
	public Double getSepBudget() {
		return sepBudget;
	}
	public void setSepBudget(Double sepBudget) {
		this.sepBudget = sepBudget;
	}
	public Double getQuarterthree() {
		return quarterthree;
	}
	public void setQuarterthree(Double quarterthree) {
		this.quarterthree = quarterthree;
	}
	public Double getOctBudget() {
		return octBudget;
	}
	public void setOctBudget(Double octBudget) {
		this.octBudget = octBudget;
	}
	public Double getNovBudget() {
		return novBudget;
	}
	public void setNovBudget(Double novBudget) {
		this.novBudget = novBudget;
	}
	public Double getDecBudget() {
		return decBudget;
	}
	public void setDecBudget(Double decBudget) {
		this.decBudget = decBudget;
	}
	public Double getQuarterfour() {
		return quarterfour;
	}
	public void setQuarterfour(Double quarterfour) {
		this.quarterfour = quarterfour;
	}
	public Double getGrandTotal() {
		return grandTotal;
	}
	public void setGrandTotal(Double grandTotal) {
		this.grandTotal = grandTotal;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public String getCountrycode() {
		return countrycode;
	}
	public void setCountrycode(String countrycode) {
		this.countrycode = countrycode;
	}
	public String getCurrency() {
		return currency;
	}
	public void setCurrency(String currency) {
		this.currency = currency;
	}
	 


  
 
}
