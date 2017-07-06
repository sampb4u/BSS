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
public class HyphonicGreeseAmount
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
	private Double greaseamount;
	
	@Column
	private Double weight;
	
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
	

	
	public Double getGreaseamount()
	{
		return greaseamount;
	}
	public void setGreaseamount(Double greaseamount)
	{
		this.greaseamount = greaseamount;
	}
	public Double getWeight()
	{
		return weight;
	}
	public void setWeight(Double weight)
	{
		this.weight = weight;
	}
	
	
	
}
