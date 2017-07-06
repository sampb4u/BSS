package com.finsol.model;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @author siva redy
 */
@Entity
public class Hello{

	@Id
	/* @GeneratedValue(strategy = GenerationType.AUTO) */
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private Integer custid;

	@Column
	private String account;
	@Column
	private String phnumber;
	@Column
	private String accountid;
	@Column
	private String email;
	
	
	@Column
	private String mbnumber;
	@Column
	private String title;
	@Column
	private String ophnumber;
	@Column
	private String departmentname;
	@Column
	private String fax;
	
	@Column
	private Date  bddate;
	 
	@Column
	private String reports;
	@Column
	private String clientwebsite;
	@Column
	private String leadsource;
	@Column
	private String salesPerson;
	@Column
	private String mailingadress;
	@Column
	private String salesPersonCode;
	@Column
	private String billingCountries;
	@Column
	private String discountmultiplier;
	@Column
	private String language;
	@Column
	private String paymentTerm;
	@Column
	private String customerType;
	@Column
	private String lastmodifiedby;
	@Column
	private String industries;
	public String getApplicanindustryname() {
		return applicanindustryname;
	}

	public void setApplicanindustryname(String applicanindustryname) {
		this.applicanindustryname = applicanindustryname;
	}

	@Column
	private String createdby;
	@Column
	private String application;
	
	
	@Column
	private String applicanindustryname;
	@Column
	private String corporate;
	@Column
	private String territory;
	@Column
	private String opportunityAmount;
	@Column
	private String customerStatus;
	
	@Column
	private String imagename;
	
	@Column
	private String creditstatus;
	
	
	public String getCreditstatus() {
		return creditstatus;
	}

	public void setCreditstatus(String creditstatus) {
		this.creditstatus = creditstatus;
	}

	@Column 
	private String  shippingadress;
	@Column(length = 255)
	private String  contName;
	@Column
	private String  currency;
	@Column
	private String  taxName;
	 


	
	 
	public String getCorporate() {
		return corporate;
	}

	public void setCorporate(String corporate) {
		this.corporate = corporate;
	}

	public String getTerritory() {
		return territory;
	}

	public void setTerritory(String territory) {
		this.territory = territory;
	}

	public String getOpportunityAmount() {
		return opportunityAmount;
	}

	public void setOpportunityAmount(String opportunityAmount) {
		this.opportunityAmount = opportunityAmount;
	}

	public String getCustomerStatus() {
		return customerStatus;
	}

	public void setCustomerStatus(String customerStatus) {
		this.customerStatus = customerStatus;
	}

	/*@JoinColumn(name = "custmerid")
	@OneToMany
	@Cascade({ CascadeType.ALL })
	private List<CustmerContactDetails> rolescreens;
*/
	public Integer getCustid() {
		return custid;
	}

	public void setCustid(Integer custid) {
		this.custid = custid;
	}

	public String getAccount() {
		return account;
	}

	public void setAccount(String account) {
		this.account = account;
	}

	public String getPhnumber() {
		return phnumber;
	}

	public void setPhnumber(String phnumber) {
		this.phnumber = phnumber;
	}

	public String getAccountid() {
		return accountid;
	}

	public void setAccountid(String accountid) {
		this.accountid = accountid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	 

	public String getContName() {
		return contName;
	}

	public void setContName(String contName) {
		this.contName = contName;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public String getTaxName() {
		return taxName;
	}

	public void setTaxName(String taxName) {
		this.taxName = taxName;
	}

	public String getMbnumber() {
		return mbnumber;
	}

	public void setMbnumber(String mbnumber) {
		this.mbnumber = mbnumber;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getOphnumber() {
		return ophnumber;
	}

	public void setOphnumber(String ophnumber) {
		this.ophnumber = ophnumber;
	}

	public String getDepartmentname() {
		return departmentname;
	}

	public void setDepartmentname(String departmentname) {
		this.departmentname = departmentname;
	}

	public String getFax() {
		return fax;
	}

	public void setFax(String fax) {
		this.fax = fax;
	}

 
	 
	 
	public Date getBddate() {
		return bddate;
	}

	public void setBddate(Date bddate) {
		this.bddate = bddate;
	}

	public String getShippingadress() {
		return shippingadress;
	}

	public void setShippingadress(String shippingadress) {
		this.shippingadress = shippingadress;
	}

	public String getReports() {
		return reports;
	}

	public void setReports(String reports) {
		this.reports = reports;
	}

	public String getClientwebsite() {
		return clientwebsite;
	}

	public void setClientwebsite(String clientwebsite) {
		this.clientwebsite = clientwebsite;
	}

	public String getLeadsource() {
		return leadsource;
	}

	public void setLeadsource(String leadsource) {
		this.leadsource = leadsource;
	}

	public String getSalesPerson() {
		return salesPerson;
	}

	public void setSalesPerson(String salesPerson) {
		this.salesPerson = salesPerson;
	}

	public String getMailingadress() {
		return mailingadress;
	}

	public void setMailingadress(String mailingadress) {
		this.mailingadress = mailingadress;
	}

	public String getSalesPersonCode() {
		return salesPersonCode;
	}

	public void setSalesPersonCode(String salesPersonCode) {
		this.salesPersonCode = salesPersonCode;
	}

	public String getBillingCountries() {
		return billingCountries;
	}

	public void setBillingCountries(String billingCountries) {
		this.billingCountries = billingCountries;
	}

	public String getDiscountmultiplier() {
		return discountmultiplier;
	}

	public void setDiscountmultiplier(String discountmultiplier) {
		this.discountmultiplier = discountmultiplier;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getPaymentTerm() {
		return paymentTerm;
	}

	public void setPaymentTerm(String paymentTerm) {
		this.paymentTerm = paymentTerm;
	}

	 

	public String getLastmodifiedby() {
		return lastmodifiedby;
	}

	public void setLastmodifiedby(String lastmodifiedby) {
		this.lastmodifiedby = lastmodifiedby;
	}

	public String getCustomerType() {
		return customerType;
	}

	public void setCustomerType(String customerType) {
		this.customerType = customerType;
	}

	public String getIndustries() {
		return industries;
	}

	public String getImagename() {
		return imagename;
	}

	public void setImagename(String imagename) {
		this.imagename = imagename;
	}

	public void setIndustries(String industries) {
		this.industries = industries;
	}

	public String getCreatedby() {
		return createdby;
	}

	public void setCreatedby(String createdby) {
		this.createdby = createdby;
	}

	public String getApplication() {
		return application;
	}

	public void setApplication(String application) {
		this.application = application;
	}

	/*public List<CustmerContactDetails> getRolescreens() {
		return rolescreens;
	}

	public void setRolescreens(List<CustmerContactDetails> rolescreens) {
		this.rolescreens = rolescreens;
	}
	*/
	

}
