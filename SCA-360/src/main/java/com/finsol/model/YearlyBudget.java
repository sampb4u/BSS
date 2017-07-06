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
public class YearlyBudget 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private Integer slno;
	@Column
	private Integer year;
	@Column
	private Double month1;
	@Column
	private Double month2;
	@Column
	private Double month3;
	@Column
	private Double quart1;
	@Column
	private Double month4;
	@Column
	private Double month5;
	@Column
	private Double month6;
	@Column
	private Double quart2;
	@Column
	private Double month7;
	@Column
	private Double month8;
	@Column
	private Double month9;
	@Column
	private Double quart3;
	@Column
	private Double month10;
	@Column
	private Double month11;
	@Column
	private Double month12;
	@Column
	private Double quart4;
	@Column
	private Double yeartotal;
	@Column
	private String pccode;
	@Column
	private String productcode;
	@Column
	private String currencycode;
	@Column
	private String countrycode;
	@Column
	private String productcategory;
	@Column
	private String product;
	@Column
	private String currency;
	@Column
	private String country;
	
	public Integer getYear() {
		return year;
	}
	public void setYear(Integer year) {
		this.year = year;
	}
	public Double getMonth1() {
		return month1;
	}
	public void setMonth1(Double month1) {
		this.month1 = month1;
	}
	public Double getMonth2() {
		return month2;
	}
	public void setMonth2(Double month2) {
		this.month2 = month2;
	}
	public Double getMonth3() {
		return month3;
	}
	public void setMonth3(Double month3) {
		this.month3 = month3;
	}
	public Double getQuart1() {
		return quart1;
	}
	public void setQuart1(Double quart1) {
		this.quart1 = quart1;
	}
	public Double getMonth4() {
		return month4;
	}
	public void setMonth4(Double month4) {
		this.month4 = month4;
	}
	public Double getMonth5() {
		return month5;
	}
	public void setMonth5(Double month5) {
		this.month5 = month5;
	}
	public Double getMonth6() {
		return month6;
	}
	public void setMonth6(Double month6) {
		this.month6 = month6;
	}
	public Double getQuart2() {
		return quart2;
	}
	public void setQuart2(Double quart2) {
		this.quart2 = quart2;
	}
	public Double getMonth7() {
		return month7;
	}
	public void setMonth7(Double month7) {
		this.month7 = month7;
	}
	public Double getMonth8() {
		return month8;
	}
	public void setMonth8(Double month8) {
		this.month8 = month8;
	}
	public Double getMonth9() {
		return month9;
	}
	public void setMonth9(Double month9) {
		this.month9 = month9;
	}
	public Double getQuart3() {
		return quart3;
	}
	public void setQuart3(Double quart3) {
		this.quart3 = quart3;
	}
	public Double getMonth10() {
		return month10;
	}
	public void setMonth10(Double month10) {
		this.month10 = month10;
	}
	public Double getMonth11() {
		return month11;
	}
	public void setMonth11(Double month11) {
		this.month11 = month11;
	}
	public Double getMonth12() {
		return month12;
	}
	public void setMonth12(Double month12) {
		this.month12 = month12;
	}
	public Double getQuart4() {
		return quart4;
	}
	public void setQuart4(Double quart4) {
		this.quart4 = quart4;
	}
	public Double getYeartotal() {
		return yeartotal;
	}
	public void setYeartotal(Double yeartotal) {
		this.yeartotal = yeartotal;
	}
	public String getPccode() {
		return pccode;
	}
	public void setPccode(String pccode) {
		this.pccode = pccode;
	}
	public String getProductcode() {
		return productcode;
	}
	public void setProductcode(String productcode) {
		this.productcode = productcode;
	}
	public String getCurrencycode() {
		return currencycode;
	}
	public void setCurrencycode(String currencycode) {
		this.currencycode = currencycode;
	}
	public String getCountrycode() {
		return countrycode;
	}
	public void setCountrycode(String countrycode) {
		this.countrycode = countrycode;
	}
	public String getProductcategory() {
		return productcategory;
	}
	public void setProductcategory(String productcategory) {
		this.productcategory = productcategory;
	}
	public String getProduct() {
		return product;
	}
	public void setProduct(String product) {
		this.product = product;
	}
	public String getCurrency() {
		return currency;
	}
	public void setCurrency(String currency) {
		this.currency = currency;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public Integer getSlno() {
		return slno;
	}
	public void setSlno(Integer slno) {
		this.slno = slno;
	}

	
	

}
