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
public class Year 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private Integer slno;	
	@Column(unique = true,nullable = false)
	private Integer year;
	@Column
	private Byte historyflag;
	@Column
	private Byte budgetflag;
	
	public Integer getSlno() {
		return slno;
	}
	public void setSlno(Integer slno) {
		this.slno = slno;
	}
	public Integer getYear() {
		return year;
	}
	public void setYear(Integer year) {
		this.year = year;
	}
	public Byte getHistoryflag() {
		return historyflag;
	}
	public void setHistoryflag(Byte historyflag) {
		this.historyflag = historyflag;
	}
	public Byte getBudgetflag() {
		return budgetflag;
	}
	public void setBudgetflag(Byte budgetflag) {
		this.budgetflag = budgetflag;
	}
	
	

}
