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
public class FrameSizes {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(nullable = false)
	private Integer fid;
	@Column
	private Double wattage;
	@Column
	private Double frequency;
	@Column
	private Double MotorRPM;
	@Column
	private Double oPSpeed;
	@Column
	private Double oPTorqueNM;
	@Column
	private Double oPTorqueKgFM;
	@Column
	private Double RadialLoadN;
	@Column
	private Double RadialLoadKgF;
	@Column
	private Double IPCapacitySymbol;
	@Column
	private Double FrameSize;
	@Column
	private String FrameSizeSym;
	@Column
   private Double ReductionRatio;
	@Column
   private Double ExactRatio;
	
	@Column
	   private Integer Flag;
	
	public Integer getFlag() {
		return Flag;
	}
	public void setFlag(Integer flag) {
		Flag = flag;
	}
	public Integer getFid() {
		return fid;
	}
	public void setFid(Integer fid) {
		this.fid = fid;
	}
	public Double getWattage() {
		return wattage;
	}
	public void setWattage(Double wattage) {
		this.wattage = wattage;
	}
	public Double getFrequency() {
		return frequency;
	}
	public void setFrequency(Double frequency) {
		this.frequency = frequency;
	}
	public Double getMotorRPM() {
		return MotorRPM;
	}
	public void setMotorRPM(Double motorRPM) {
		MotorRPM = motorRPM;
	}
	public Double getoPSpeed() {
		return oPSpeed;
	}
	public void setoPSpeed(Double oPSpeed) {
		this.oPSpeed = oPSpeed;
	}
	public Double getoPTorqueNM() {
		return oPTorqueNM;
	}
	public void setoPTorqueNM(Double oPTorqueNM) {
		this.oPTorqueNM = oPTorqueNM;
	}
	public Double getoPTorqueKgFM() {
		return oPTorqueKgFM;
	}
	public void setoPTorqueKgFM(Double oPTorqueKgFM) {
		this.oPTorqueKgFM = oPTorqueKgFM;
	}
	public Double getRadialLoadN() {
		return RadialLoadN;
	}
	public void setRadialLoadN(Double radialLoadN) {
		RadialLoadN = radialLoadN;
	}
	public Double getRadialLoadKgF() {
		return RadialLoadKgF;
	}
	public void setRadialLoadKgF(Double radialLoadKgF) {
		RadialLoadKgF = radialLoadKgF;
	}
	public Double getIPCapacitySymbol() {
		return IPCapacitySymbol;
	}
	public void setIPCapacitySymbol(Double iPCapacitySymbol) {
		IPCapacitySymbol = iPCapacitySymbol;
	}
	public Double getFrameSize() {
		return FrameSize;
	}
	public void setFrameSize(Double frameSize) {
		FrameSize = frameSize;
	}
	public String getFrameSizeSym() {
		return FrameSizeSym;
	}
	public void setFrameSizeSym(String frameSizeSym) {
		FrameSizeSym = frameSizeSym;
	}
	public Double getReductionRatio() {
		return ReductionRatio;
	}
	public void setReductionRatio(Double reductionRatio) {
		ReductionRatio = reductionRatio;
	}
	public Double getExactRatio() {
		return ExactRatio;
	}
	public void setExactRatio(Double exactRatio) {
		ExactRatio = exactRatio;
	}

	
}