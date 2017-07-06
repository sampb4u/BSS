package com.finsol.model;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

/**
 * @author sahadeva
 */
@Entity
public class Roles 
{
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column
    private Integer roleid;
	
	@Column(unique = true,nullable = false)
    private String role;
	
	@Column
    private String description;
	
	@Column
    private Byte status;
	
	
	@JoinColumn(name = "roleid")
	@OneToMany
	@Cascade({ CascadeType.ALL })
    private List<RoleScreens> rolescreens;
	
	

	public Integer getRoleid()
	{
		return roleid;
	}

	public void setRoleid(Integer roleid) 
	{
		this.roleid = roleid;
	}

	public String getRole()
	{
		return role;
	}

	public void setRole(String role)
	{
		this.role = role;
	}

	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description) 
	{
		this.description = description;
	}

	public Byte getStatus()
	{
		return status;
	}

	public void setStatus(Byte status)
	{
		this.status = status;
	}

	public List<RoleScreens> getRolescreens() {
		return rolescreens;
	}

	public void setRolescreens(List<RoleScreens> rolescreens) {
		this.rolescreens = rolescreens;
	}
	
	
}
