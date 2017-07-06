package com.finsol.bean;

public class CustmerMasterBean 
{
	public String getImagename() {
		return imagename;
	}
	public void setImagename(String imagename) {
		this.imagename = imagename;
	}
	private Integer custid;
	private String  customerStatus;
	private String  account;
	private String  accountid;
	private String  clientwebsite;
	private String  mailingadress;
	private String  shippingadress;
	private String  billingCountries;
	private String  language;
	private String  customerGroup;
	private String  industries;
	private String  application;
	private String  territory;
	private String  corporate;
	private String  contName;
	private String  title;
	private String  phnumber;
	private String  mbnumber;
	private String  ophnumber;
	private String  email;
	private String  fax;
	private String  departmentname;
	private String  reports;
    private String  salesPerson;
    private String  discountmultiplier;
    private String rolescreens[];
    private String   creditStatus ;
    private String actualacoountcode;
    private String taxPercent;
	 
	
	public String getTaxPercent() {
		return taxPercent;
	}
	public void setTaxPercent(String taxPercent) {
		this.taxPercent = taxPercent;
	}
	public String getActualacoountcode() {
		return actualacoountcode;
	}
	public void setActualacoountcode(String actualacoountcode) {
		this.actualacoountcode = actualacoountcode;
	}
	public String getCreditStatus() {
		return creditStatus;
	}
	public void setCreditStatus(String creditStatus) {
		this.creditStatus = creditStatus;
	}
	public String[] getRolescreens() {
		return rolescreens;
	}
	public void setRolescreens(String[] rolescreens) {
		this.rolescreens = rolescreens;
	}
	public String getDiscountmultiplier() {
		return discountmultiplier;
	}
	public void setDiscountmultiplier(String discountmultiplier) {
		this.discountmultiplier = discountmultiplier;
	}
	public Integer getCustid() {
		return custid;
	}
	public void setCustid(Integer custid) {
		this.custid = custid;
	}
	public String getCustomerStatus() {
		return customerStatus;
	}
	public void setCustomerStatus(String customerStatus) {
		this.customerStatus = customerStatus;
	}
	public String getAccount() {
		return account;
	}
	public void setAccount(String account) {
		this.account = account;
	}
	public String getAccountid() {
		return accountid;
	}
	public void setAccountid(String accountid) {
		this.accountid = accountid;
	}
	public String getClientwebsite() {
		return clientwebsite;
	}
	public void setClientwebsite(String clientwebsite) {
		this.clientwebsite = clientwebsite;
	}
	public String getMailingadress() {
		return mailingadress;
	}
	public void setMailingadress(String mailingadress) {
		this.mailingadress = mailingadress;
	}
	public String getShippingadress() {
		return shippingadress;
	}
	public void setShippingadress(String shippingadress) {
		this.shippingadress = shippingadress;
	}
	public String getBillingCountries() {
		return billingCountries;
	}
	public void setBillingCountries(String billingCountries) {
		this.billingCountries = billingCountries;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getCustomerGroup() {
		return customerGroup;
	}
	public void setCustomerGroup(String customerGroup) {
		this.customerGroup = customerGroup;
	}
	public String getIndustries() {
		return industries;
	}
	public void setIndustries(String industries) {
		this.industries = industries;
	}
	public String getApplication() {
		return application;
	}
	public void setApplication(String application) {
		this.application = application;
	}
	public String getTerritory() {
		return territory;
	}
	public void setTerritory(String territory) {
		this.territory = territory;
	}
	public String getCorporate() {
		return corporate;
	}
	public void setCorporate(String corporate) {
		this.corporate = corporate;
	}
	public String getContName() {
		return contName;
	}
	public void setContName(String contName) {
		this.contName = contName;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getPhnumber() {
		return phnumber;
	}
	public void setPhnumber(String phnumber) {
		this.phnumber = phnumber;
	}
	public String getMbnumber() {
		return mbnumber;
	}
	public void setMbnumber(String mbnumber) {
		this.mbnumber = mbnumber;
	}
	public String getOphnumber() {
		return ophnumber;
	}
	public void setOphnumber(String ophnumber) {
		this.ophnumber = ophnumber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFax() {
		return fax;
	}
	public void setFax(String fax) {
		this.fax = fax;
	}
	public String getDepartmentname() {
		return departmentname;
	}
	public void setDepartmentname(String departmentname) {
		this.departmentname = departmentname;
	}
	public String getReports() {
		return reports;
	}
	public void setReports(String reports) {
		this.reports = reports;
	}
	public String getSalesPerson() {
		return salesPerson;
	}
	public void setSalesPerson(String salesPerson) {
		this.salesPerson = salesPerson;
	}
	public String getSalesPersonCode() {
		return salesPersonCode;
	}
	public void setSalesPersonCode(String salesPersonCode) {
		this.salesPersonCode = salesPersonCode;
	}
	public String getLeadsource() {
		return leadsource;
	}
	public void setLeadsource(String leadsource) {
		this.leadsource = leadsource;
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
	public String getPaymentTerm() {
		return paymentTerm;
	}
	public void setPaymentTerm(String paymentTerm) {
		this.paymentTerm = paymentTerm;
	}
	public String getOpportunityAmount() {
		return opportunityAmount;
	}
	public void setOpportunityAmount(String opportunityAmount) {
		this.opportunityAmount = opportunityAmount;
	}
	public String getBddate() {
		return bddate;
	}
	public void setBddate(String bddate) {
		this.bddate = bddate;
	}
	public String getCreatedby() {
		return createdby;
	}
	public void setCreatedby(String createdby) {
		this.createdby = createdby;
	}
	public String getLastmodifiedby() {
		return lastmodifiedby;
	}
	public void setLastmodifiedby(String lastmodifiedby) {
		this.lastmodifiedby = lastmodifiedby;
	}
	private String  salesPersonCode;
	private String  leadsource;
	private String  currency;
	private String  taxName;
	private String  paymentTerm;
	private String  opportunityAmount;
	private String  bddate;
	private String  createdby;
	private String  lastmodifiedby;
	private String  imagename;
	private String applicanIndustry;


	public String getApplicanIndustry() {
		return applicanIndustry;
	}
	public void setApplicanIndustry(String applicanIndustry) {
		this.applicanIndustry = applicanIndustry;
	} 
	
	
	

}
