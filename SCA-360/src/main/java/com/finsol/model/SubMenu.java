package com.finsol.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class SubMenu {
	
	@Id
	private String name;
	




	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}


	
	

}
