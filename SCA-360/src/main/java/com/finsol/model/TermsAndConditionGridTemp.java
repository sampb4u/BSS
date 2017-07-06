package com.finsol.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TermsAndConditionGridTemp 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer qtgid;
	@Column
	private Integer qid;
	@Column
	private  String modelTerm;
	@Column
	private String  modelCon;
	public Integer getQtgid() {
		return qtgid;
	}
	public void setQtgid(Integer qtgid) {
		this.qtgid = qtgid;
	}
	public Integer getQid() {
		return qid;
	}
	public void setQid(Integer qid) {
		this.qid = qid;
	}
	public String getModelTerm() {
		return modelTerm;
	}
	public void setModelTerm(String modelTerm) {
		this.modelTerm = modelTerm;
	}
	public String getModelCon() {
		return modelCon;
	}
	public void setModelCon(String modelCon) {
		this.modelCon = modelCon;
	}
	
	
	
	 @Column
	 private String qtnNo;
	public String getQtnNo() {
		return qtnNo;
	}
	public void setQtnNo(String qtnNo) {
		this.qtnNo = qtnNo;
	}
	 
	 
	 
 
	

}
