package com.finsol.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
/**
 * @author naidu
 *
 */
@Entity
public class Salesman {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private Integer id;
	@Column
	private String salesman;
	@Column
	private String regioncode;
	@Column
	private String salesmancode;
	@Column
	private String name;
	@Column
	private String name2;
	@Column
	private String ini;
	@Column
	private String titleoffice;
	@Column
	private String office;
	@Column
	private String vm;
	@Column
	private String vm2;
	@Column
	private String countrycode;
	@Column
	private String employeecode;
	@Column
    private Byte status;
	@Column
    private Byte regstatus;
	
	public Byte getStatus() {
		return status;
	}
	public void setStatus(Byte status) {
		this.status = status;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getSalesman() {
		return salesman;
	}
	public void setSalesman(String salesman) {
		this.salesman = salesman;
	}
	public String getRegioncode() {
		return regioncode;
	}
	public void setRegioncode(String regioncode) {
		this.regioncode = regioncode;
	}
	public String getSalesmancode() {
		return salesmancode;
	}
	public void setSalesmancode(String salesmancode) {
		this.salesmancode = salesmancode;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getName2() {
		return name2;
	}
	public void setName2(String name2) {
		this.name2 = name2;
	}
	public String getIni() {
		return ini;
	}
	public void setIni(String ini) {
		this.ini = ini;
	}
	public String getTitleoffice() {
		return titleoffice;
	}
	public void setTitleoffice(String titleoffice) {
		this.titleoffice = titleoffice;
	}
	public String getOffice() {
		return office;
	}
	public void setOffice(String office) {
		this.office = office;
	}
	public String getVm() {
		return vm;
	}
	public void setVm(String vm) {
		this.vm = vm;
	}
	public String getVm2() {
		return vm2;
	}
	public void setVm2(String vm2) {
		this.vm2 = vm2;
	}
	public String getCountrycode() {
		return countrycode;
	}
	public void setCountrycode(String countrycode) {
		this.countrycode = countrycode;
	}
	public String getEmployeecode() {
		return employeecode;
	}
	public void setEmployeecode(String employeecode) {
		this.employeecode = employeecode;
	}
	public Byte getRegstatus()
	{
		return regstatus;
	}
	public void setRegstatus(Byte regstatus)
	{
		this.regstatus = regstatus;
	}
	
	
}
