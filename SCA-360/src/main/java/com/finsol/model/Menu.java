package com.finsol.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
public class Menu {

	@Id
	@GeneratedValue
	private int id;
	@Column
	private String menuname;

	@JoinColumn(name = "id")
	@OneToMany
	@Cascade({ CascadeType.ALL })
	private List<SubMenu> submenulist;

	public String getMenuname() {
		return menuname;
	}

	public void setMenuname(String menuname) {
		this.menuname = menuname;
	}

	public List<SubMenu> getSubmenulist() {
		return submenulist;
	}

	public void setSubmenulist(List<SubMenu> submenulist) {
		this.submenulist = submenulist;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	

}
