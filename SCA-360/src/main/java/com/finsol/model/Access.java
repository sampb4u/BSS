package com.finsol.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Access {

	@Id
	private String roleid;

	@org.hibernate.annotations.Type(type = "true_false")
	private boolean readaccess;

	@org.hibernate.annotations.Type(type = "true_false")
	private boolean writeaccess;

	@org.hibernate.annotations.Type(type = "true_false")
	private boolean deleteaccess;

	@org.hibernate.annotations.Type(type = "true_false")
	private boolean editaccess;

	public String getRoleid() {
		return roleid;
	}

	public void setRoleid(String roleid) {
		this.roleid = roleid;
	}

	public boolean isReadaccess() {
		return readaccess;
	}

	public void setReadaccess(boolean readaccess) {
		this.readaccess = readaccess;
	}

	public boolean isWriteaccess() {
		return writeaccess;
	}

	public void setWriteaccess(boolean writeaccess) {
		this.writeaccess = writeaccess;
	}

	public boolean isDeleteaccess() {
		return deleteaccess;
	}

	public void setDeleteaccess(boolean deleteaccess) {
		this.deleteaccess = deleteaccess;
	}

	public boolean isEditaccess() {
		return editaccess;
	}

	public void setEditaccess(boolean editaccess) {
		this.editaccess = editaccess;
	}

}
