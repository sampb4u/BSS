package com.finsol.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author siva reddy
 *
 */
@Entity
public class Industry {
	
	private static final long serialVersionUID = 1L;	
	
	/*@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer aid;
	*/
	@Id
	@Column (nullable = false)
	private String industrycode;

	@Column
	private String  totalIndustryname;
	
	@Column
	private String industrycolour;
	
	@Column
	private String description;

	public String getIndustrycolour() {
		return industrycolour;
	}

	public void setIndustrycolour(String industrycolour) {
		this.industrycolour = industrycolour;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	 
	 

	public String getIndustrycode() {
		return industrycode;
	}

	public void setIndustrycode(String industrycode) {
		this.industrycode = industrycode;
	}

	public String getTotalIndustryname() {
		return totalIndustryname;
	}

	public void setTotalIndustryname(String totalIndustryname) {
		this.totalIndustryname = totalIndustryname;
	}

	 
 
	
	
	
	 
 
	 	 

}
