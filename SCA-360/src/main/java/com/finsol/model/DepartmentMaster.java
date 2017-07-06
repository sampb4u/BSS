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
public class DepartmentMaster {

private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	@Column(unique = true,nullable = false)
    private Integer deptCode;
    
    @Column
    private String department;
    
    @Column
    private String deptShortcut;
    
    @Column
    private String description;
    
    @Column
    private String location;
    
    @Column
    private String contactPerson;
    
    @Column
    private String extension;
    
    @Column
    private String directNumber;
    
    @Column
    private String status;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getDeptCode() {
		return deptCode;
	}

	public void setDeptCode(Integer deptCode) {
		this.deptCode = deptCode;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getDeptShortcut() {
		return deptShortcut;
	}

	public void setDeptShortcut(String deptShortcut) {
		this.deptShortcut = deptShortcut;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getContactPerson() {
		return contactPerson;
	}

	public void setContactPerson(String contactPerson) {
		this.contactPerson = contactPerson;
	}

	public String getExtension() {
		return extension;
	}

	public void setExtension(String extension) {
		this.extension = extension;
	}

	public String getDirectNumber() {
		return directNumber;
	}

	public void setDirectNumber(String directNumber) {
		this.directNumber = directNumber;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	
    
}
