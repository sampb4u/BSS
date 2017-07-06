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
public class PrestNeoGreeseAmount
{

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer id;

	@Column
	private String model;
	
	@Column
	private Integer framesize;
	
	@Column
	private Integer ratio;
	@Column
	private String flangetype;
	@Column
	private Double greaseamount;
	
	public Integer getId()
	{
		return id;
	}
	public void setId(Integer id)
	{
		this.id = id;
	}
	public String getModel()
	{
		return model;
	}
	public void setModel(String model)
	{
		this.model = model;
	}
	public Integer getFramesize()
	{
		return framesize;
	}
	public void setFramesize(Integer framesize)
	{
		this.framesize = framesize;
	}
	public Integer getRatio()
	{
		return ratio;
	}
	public void setRatio(Integer ratio)
	{
		this.ratio = ratio;
	}
	public String getFlangetype()
	{
		return flangetype;
	}
	public void setFlangetype(String flangetype)
	{
		this.flangetype = flangetype;
	}
	public Double getGreaseamount()
	{
		return greaseamount;
	}
	public void setGreaseamount(Double greaseamount)
	{
		this.greaseamount = greaseamount;
	}

	
	
	
}
