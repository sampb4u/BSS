package com.finsol.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @author sahadeva
 */
@Entity
public class RoleScreens 
{
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
	
	@Column
    private Integer screenid;
	@Column 
    private String screenname;
    @Column
    private String description;
	
	@Column
    private Boolean canadd;
	
	@Column
    private Boolean canmodify;
	
	@Column
    private Boolean canread;
	
	@Column
	private Boolean candelete;

	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getScreenid()
	{
		return screenid;
	}

	public void setScreenid(Integer screenid) 
	{
		this.screenid = screenid;
	}

	public Boolean getCanadd() 
	{
		return canadd;
	}

	public void setCanadd(Boolean canadd) 
	{
		this.canadd = canadd;
	}

	public Boolean getCanmodify()
	{
		return canmodify;
	}

	public void setCanmodify(Boolean canmodify)
	{
		this.canmodify = canmodify;
	}

	public Boolean getCanread()
	{
		return canread;
	}

	public void setCanread(Boolean canread) 
	{
		this.canread = canread;
	}

	public Boolean getCandelete() 
	{
		return candelete;
	}

	public void setCandelete(Boolean candelete)
	{
		this.candelete = candelete;
	}

	public String getScreenname() {
		return screenname;
	}

	public void setScreenname(String screenname) {
		this.screenname = screenname;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	
}
