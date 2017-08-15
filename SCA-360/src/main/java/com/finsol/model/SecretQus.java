package com.finsol.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class SecretQus {

	@Id
	private String username;

	@Column
	private String sq1;

	@Column
	private String ans1;

	@Column
	private String sq2;

	@Column
	private String ans2;


	public String getSq1() {
		return sq1;
	}

	public void setSq1(String sq1) {
		this.sq1 = sq1;
	}

	public String getAns1() {
		return ans1;
	}

	public void setAns1(String ans1) {
		this.ans1 = ans1;
	}

	public String getSq2() {
		return sq2;
	}

	public void setSq2(String sq2) {
		this.sq2 = sq2;
	}

	public String getAns2() {
		return ans2;
	}

	public void setAns2(String ans2) {
		this.ans2 = ans2;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	

}
