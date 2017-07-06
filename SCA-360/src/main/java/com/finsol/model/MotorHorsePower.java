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
public class MotorHorsePower
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer id;
	@Column
	private Integer  voltage;
	@Column
	private Integer  frequency;
	@Column
	private Double  kilowatt;	
	@Column
	private Double  horsepower;
	public Integer getId()
	{
		return id;
	}
	public void setId(Integer id)
	{
		this.id = id;
	}
	public Integer getVoltage()
	{
		return voltage;
	}
	public void setVoltage(Integer voltage)
	{
		this.voltage = voltage;
	}
	public Integer getFrequency()
	{
		return frequency;
	}
	public void setFrequency(Integer frequency)
	{
		this.frequency = frequency;
	}
	public Double getKilowatt()
	{
		return kilowatt;
	}
	public void setKilowatt(Double kilowatt)
	{
		this.kilowatt = kilowatt;
	}
	public Double getHorsepower()
	{
		return horsepower;
	}
	public void setHorsepower(Double horsepower)
	{
		this.horsepower = horsepower;
	}
	
	
}
