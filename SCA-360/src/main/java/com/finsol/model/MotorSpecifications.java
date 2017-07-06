package com.finsol.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author Rama Krishna
 *
 */
@Entity
public class MotorSpecifications
{

	@Id
	@Column
	private String  modelno;	
	@Column
	private String  producttype;	
	@Column
	private String  capacity;	
	@Column
	private String  framesize;
	@Column
	private Double  ratio;	
	@Column
	private Double  power;

	public String getModelno()
	{
		return modelno;
	}
	public void setModelno(String modelno)
	{
		this.modelno = modelno;
	}
	public String getProducttype()
	{
		return producttype;
	}
	public void setProducttype(String producttype)
	{
		this.producttype = producttype;
	}
	public String getCapacity()
	{
		return capacity;
	}
	public void setCapacity(String capacity)
	{
		this.capacity = capacity;
	}
	public String getFramesize()
	{
		return framesize;
	}
	public void setFramesize(String framesize)
	{
		this.framesize = framesize;
	}
	public Double getRatio()
	{
		return ratio;
	}
	public void setRatio(Double ratio)
	{
		this.ratio = ratio;
	}
	public Double getPower()
	{
		return power;
	}
	public void setPower(Double power)
	{
		this.power = power;
	}
	
	
	
	
}
