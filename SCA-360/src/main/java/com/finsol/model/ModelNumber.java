package com.finsol.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @author siva reddy
 *
 */
@Entity
public class ModelNumber {
	
	private static final long serialVersionUID = 1L;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column (nullable = false)
	private Integer modelid;
	

	@Column (nullable = false)
	private Integer capacity;	
	@Column (nullable = false)
	private Double Power ;
	@Column (nullable = false)
	private Integer frameSize;
	@Column (nullable = false)
	private Integer ratio;
	@Column (nullable = false)
	private Double outputSpeed50hz; 
	@Column (nullable = false)
	private Double outputTorque50hz; 	
	@Column (nullable = false)
	private Double serviceFactor50hz;
	@Column (nullable = false)
	private Integer alowablRadialLoad50hz;
	@Column (nullable = false)
	private Double	OutputSpeed60hz;
	@Column (nullable = false)
	private Double outputTorque60hz; 
	@Column (nullable = false)
	private Double serviceFactor60hz;
	@Column (nullable = false)
	private Integer alowablRadialLoad60hz;
	@Column (nullable = false)
	private String	FootMount;
	@Column (nullable = false)
	private String flagMount;
	@Column (nullable = false)
	private String brake;
	@Column (nullable = false)
	private String footMountNumberStandard;
	@Column (nullable = false)
	private String footMountModelNumberWithBrake;
	@Column (nullable = false)
	private String flangeMountModelNumberStandard;
	@Column (nullable = false)
	private String flangeMountModelNumberWithBrake;	
	@Column (nullable = false)
	private Double footMountModelNumberStandardWeightInkg;	
	@Column (nullable = false)
	private Double footMountModelNumberWithBrakeWeightInkg;	
	@Column (nullable = false)
	private Double flangeMountModelNumberStandardWeightInKg; 
	@Column (nullable = false)
	private Double flangeMountModelNumberWithBrakeWeightInkg;
	@Column (nullable = false)
	private String footMountStandardDrawingNumber;	
	@Column (nullable = false)
	private String footMountWithBrakeDrawingNumber;
	@Column (nullable = false)
	private String flangeMountStandardDrawingNumber;
	@Column (nullable = false)
	private String flangeMountWithBrakeDrawingNumber;
	public Integer getModelid() {
		return modelid;
	}
	public void setModelid(Integer modelid) {
		this.modelid = modelid;
	}
	public Integer getCapacity() {
		return capacity;
	}
	public void setCapacity(Integer capacity) {
		this.capacity = capacity;
	}
	public Double getPower() {
		return Power;
	}
	public void setPower(Double power) {
		Power = power;
	}
	public Integer getFrameSize() {
		return frameSize;
	}
	public void setFrameSize(Integer frameSize) {
		this.frameSize = frameSize;
	}
	public Integer getRatio() {
		return ratio;
	}
	public void setRatio(Integer ratio) {
		this.ratio = ratio;
	}
	public Double getOutputSpeed50hz() {
		return outputSpeed50hz;
	}
	public void setOutputSpeed50hz(Double outputSpeed50hz) {
		this.outputSpeed50hz = outputSpeed50hz;
	}
	public Double getOutputTorque50hz() {
		return outputTorque50hz;
	}
	public void setOutputTorque50hz(Double outputTorque50hz) {
		this.outputTorque50hz = outputTorque50hz;
	}
	public Double getServiceFactor50hz() {
		return serviceFactor50hz;
	}
	public void setServiceFactor50hz(Double serviceFactor50hz) {
		this.serviceFactor50hz = serviceFactor50hz;
	}
	public Integer getAlowablRadialLoad50hz() {
		return alowablRadialLoad50hz;
	}
	public void setAlowablRadialLoad50hz(Integer alowablRadialLoad50hz) {
		this.alowablRadialLoad50hz = alowablRadialLoad50hz;
	}
	public Double getOutputSpeed60hz() {
		return OutputSpeed60hz;
	}
	public void setOutputSpeed60hz(Double outputSpeed60hz) {
		OutputSpeed60hz = outputSpeed60hz;
	}
	public Double getOutputTorque60hz() {
		return outputTorque60hz;
	}
	public void setOutputTorque60hz(Double outputTorque60hz) {
		this.outputTorque60hz = outputTorque60hz;
	}
	public Double getServiceFactor60hz() {
		return serviceFactor60hz;
	}
	public void setServiceFactor60hz(Double serviceFactor60hz) {
		this.serviceFactor60hz = serviceFactor60hz;
	}
	public Integer getAlowablRadialLoad60hz() {
		return alowablRadialLoad60hz;
	}
	public void setAlowablRadialLoad60hz(Integer alowablRadialLoad60hz) {
		this.alowablRadialLoad60hz = alowablRadialLoad60hz;
	}
	public String getFootMount() {
		return FootMount;
	}
	public void setFootMount(String footMount) {
		FootMount = footMount;
	}
 
	public String getBrake() {
		return brake;
	}
	public void setBrake(String brake) {
		this.brake = brake;
	}
	public String getFootMountNumberStandard() {
		return footMountNumberStandard;
	}
	public void setFootMountNumberStandard(String footMountNumberStandard) {
		this.footMountNumberStandard = footMountNumberStandard;
	}
	public String getFootMountModelNumberWithBrake() {
		return footMountModelNumberWithBrake;
	}
	public void setFootMountModelNumberWithBrake(String footMountModelNumberWithBrake) {
		this.footMountModelNumberWithBrake = footMountModelNumberWithBrake;
	}
	public String getFlangeMountModelNumberStandard() {
		return flangeMountModelNumberStandard;
	}
	public void setFlangeMountModelNumberStandard(String flangeMountModelNumberStandard) {
		this.flangeMountModelNumberStandard = flangeMountModelNumberStandard;
	}
	public String getFlangeMountModelNumberWithBrake() {
		return flangeMountModelNumberWithBrake;
	}
	public void setFlangeMountModelNumberWithBrake(String flangeMountModelNumberWithBrake) {
		this.flangeMountModelNumberWithBrake = flangeMountModelNumberWithBrake;
	}
	public Double getFootMountModelNumberStandardWeightInkg() {
		return footMountModelNumberStandardWeightInkg;
	}
	public void setFootMountModelNumberStandardWeightInkg(Double footMountModelNumberStandardWeightInkg) {
		this.footMountModelNumberStandardWeightInkg = footMountModelNumberStandardWeightInkg;
	}
	public Double getFootMountModelNumberWithBrakeWeightInkg() {
		return footMountModelNumberWithBrakeWeightInkg;
	}
	public void setFootMountModelNumberWithBrakeWeightInkg(Double footMountModelNumberWithBrakeWeightInkg) {
		this.footMountModelNumberWithBrakeWeightInkg = footMountModelNumberWithBrakeWeightInkg;
	}
	public Double getFlangeMountModelNumberStandardWeightInKg() {
		return flangeMountModelNumberStandardWeightInKg;
	}
	public void setFlangeMountModelNumberStandardWeightInKg(Double flangeMountModelNumberStandardWeightInKg) {
		this.flangeMountModelNumberStandardWeightInKg = flangeMountModelNumberStandardWeightInKg;
	}
	public Double getFlangeMountModelNumberWithBrakeWeightInkg() {
		return flangeMountModelNumberWithBrakeWeightInkg;
	}
	public void setFlangeMountModelNumberWithBrakeWeightInkg(Double flangeMountModelNumberWithBrakeWeightInkg) {
		this.flangeMountModelNumberWithBrakeWeightInkg = flangeMountModelNumberWithBrakeWeightInkg;
	}
	public String getFootMountStandardDrawingNumber() {
		return footMountStandardDrawingNumber;
	}
	public void setFootMountStandardDrawingNumber(String footMountStandardDrawingNumber) {
		this.footMountStandardDrawingNumber = footMountStandardDrawingNumber;
	}
	 
	public String getFlagMount() {
		return flagMount;
	}
	public void setFlagMount(String flagMount) {
		this.flagMount = flagMount;
	}
	public String getFootMountWithBrakeDrawingNumber() {
		return footMountWithBrakeDrawingNumber;
	}
	public void setFootMountWithBrakeDrawingNumber(String footMountWithBrakeDrawingNumber) {
		this.footMountWithBrakeDrawingNumber = footMountWithBrakeDrawingNumber;
	}
	public String getFlangeMountStandardDrawingNumber() {
		return flangeMountStandardDrawingNumber;
	}
	public void setFlangeMountStandardDrawingNumber(String flangeMountStandardDrawingNumber) {
		this.flangeMountStandardDrawingNumber = flangeMountStandardDrawingNumber;
	}
	public String getFlangeMountWithBrakeDrawingNumber() {
		return flangeMountWithBrakeDrawingNumber;
	}
	public void setFlangeMountWithBrakeDrawingNumber(String flangeMountWithBrakeDrawingNumber) {
		this.flangeMountWithBrakeDrawingNumber = flangeMountWithBrakeDrawingNumber;
	}

	 
	 
}
