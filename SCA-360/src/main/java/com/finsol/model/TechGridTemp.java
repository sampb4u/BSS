package com.finsol.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class TechGridTemp 
{
	
	
	
	
	public int getTab() {
		return tab;
	}
	public void setTab(int tab) {
		this.tab = tab;
	}
	 
	public String getStoredtime() {
		return storedtime;
	}
	public void setStoredtime(String storedtime) {
		this.storedtime = storedtime;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	private Integer newselectiongridid;
	
	private String  gm;
	
	private String  gearMotor;
	
	private String  quantity;
	
	private String  application;
	
	private String  ambientTemp;
	
	private String  gearProduct;
	
	private String  model;
	
	private String  selectModel;
	
	private String  servFactor;
	
	private String  sscCode;
	
	private String  motorType;
	
	private String  motorKW;
	
	private String  pole;
	
	private String  phase;
	
	private String  voltage;
	
	private String  hertz;
	
	private String  rpm;
	
	private String  protectionGrade;
	
	private String  internationalStd;
	
	private String  accessMotor;
	
	private String  motorBrake;
	
	private String  motorBrakeVolt;
	
	private String  hssRadialLoadKn;
	
	private String  hssRadialLoadMm;
	
	private String  hssAxialLoadKn;
	
	private String  dirAxial;
	
	private String  sssRadialLoadKn;
	
	private String  sssRadialLoadMm;
	
	private String  sssAxialLoadKn;
	
	private String  dirSssAxial;
	
	private String  ratioRequired;
	
	private String  requiredOutputSpeed;
	
	private String  presetTorque;
	
	private String  conf;
	
	private String  mount;
	
	private String  mount2;
	
	private String  mount3;
	
	private String  ishaft;
	
	private String  oshaft;
	
	private String  oshaftInc;
	
	private String  deg;
	
	private String  towards;
	
	private String  oshafty;
	
	private String  oshafty2;
	
	private String  backStop;
	
	private String  rot;
	
    private String dirHssAxial;
	
	private Integer newcaseid;
	
	
	private String  mtrEfficncyClass;
	
	private String  inverter;
	
	public String getMtrEfficncyClass() {
		return mtrEfficncyClass;
	}
	public void setMtrEfficncyClass(String mtrEfficncyClass) {
		this.mtrEfficncyClass = mtrEfficncyClass;
	}
	public String getInverter() {
		return inverter;
	}
	public void setInverter(String inverter) {
		this.inverter = inverter;
	}
	
	private String token;
	
	private int tab;
	
	private String storedtime;
	
	private String username;
	
	
	private String imagepath;
	

	
	private String caseref;
	public String getCaseref() {
		return caseref;
	}
	public void setCaseref(String caseref) {
		this.caseref = caseref;
	}
	public String getImagepath() {
		return imagepath;
	}
	public void setImagepath(String imagepath) {
		this.imagepath = imagepath;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public Integer getNewselectiongridid() {
		return newselectiongridid;
	}
	public void setNewselectiongridid(Integer newselectiongridid) {
		this.newselectiongridid = newselectiongridid;
	}
	public String getGm() {
		return gm;
	}
	public void setGm(String gm) {
		this.gm = gm;
	}
	public String getGearMotor() {
		return gearMotor;
	}
	public void setGearMotor(String gearMotor) {
		this.gearMotor = gearMotor;
	}
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
	public String getApplication() {
		return application;
	}
	public void setApplication(String application) {
		this.application = application;
	}
	public String getAmbientTemp() {
		return ambientTemp;
	}
	public void setAmbientTemp(String ambientTemp) {
		this.ambientTemp = ambientTemp;
	}
	public String getGearProduct() {
		return gearProduct;
	}
	public void setGearProduct(String gearProduct) {
		this.gearProduct = gearProduct;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getSelectModel() {
		return selectModel;
	}
	public void setSelectModel(String selectModel) {
		this.selectModel = selectModel;
	}
	public String getServFactor() {
		return servFactor;
	}
	public void setServFactor(String servFactor) {
		this.servFactor = servFactor;
	}
	public String getSscCode() {
		return sscCode;
	}
	public void setSscCode(String sscCode) {
		this.sscCode = sscCode;
	}
	public String getMotorType() {
		return motorType;
	}
	public void setMotorType(String motorType) {
		this.motorType = motorType;
	}
	public String getMotorKW() {
		return motorKW;
	}
	public void setMotorKW(String motorKW) {
		this.motorKW = motorKW;
	}
	public String getPole() {
		return pole;
	}
	public void setPole(String pole) {
		this.pole = pole;
	}
	public String getPhase() {
		return phase;
	}
	public void setPhase(String phase) {
		this.phase = phase;
	}
	public String getVoltage() {
		return voltage;
	}
	public void setVoltage(String voltage) {
		this.voltage = voltage;
	}
	public String getHertz() {
		return hertz;
	}
	public void setHertz(String hertz) {
		this.hertz = hertz;
	}
	public String getRpm() {
		return rpm;
	}
	public void setRpm(String rpm) {
		this.rpm = rpm;
	}
	public String getProtectionGrade() {
		return protectionGrade;
	}
	public void setProtectionGrade(String protectionGrade) {
		this.protectionGrade = protectionGrade;
	}
	public String getInternationalStd() {
		return internationalStd;
	}
	public void setInternationalStd(String internationalStd) {
		this.internationalStd = internationalStd;
	}
	public String getAccessMotor() {
		return accessMotor;
	}
	public void setAccessMotor(String accessMotor) {
		this.accessMotor = accessMotor;
	}
	public String getMotorBrake() {
		return motorBrake;
	}
	public void setMotorBrake(String motorBrake) {
		this.motorBrake = motorBrake;
	}
	public String getMotorBrakeVolt() {
		return motorBrakeVolt;
	}
	public void setMotorBrakeVolt(String motorBrakeVolt) {
		this.motorBrakeVolt = motorBrakeVolt;
	}
	public String getHssRadialLoadKn() {
		return hssRadialLoadKn;
	}
	public void setHssRadialLoadKn(String hssRadialLoadKn) {
		this.hssRadialLoadKn = hssRadialLoadKn;
	}
	public String getHssRadialLoadMm() {
		return hssRadialLoadMm;
	}
	public void setHssRadialLoadMm(String hssRadialLoadMm) {
		this.hssRadialLoadMm = hssRadialLoadMm;
	}
	public String getHssAxialLoadKn() {
		return hssAxialLoadKn;
	}
	public void setHssAxialLoadKn(String hssAxialLoadKn) {
		this.hssAxialLoadKn = hssAxialLoadKn;
	}
	public String getDirAxial() {
		return dirAxial;
	}
	public void setDirAxial(String dirAxial) {
		this.dirAxial = dirAxial;
	}
	public String getSssRadialLoadKn() {
		return sssRadialLoadKn;
	}
	public void setSssRadialLoadKn(String sssRadialLoadKn) {
		this.sssRadialLoadKn = sssRadialLoadKn;
	}
	public String getSssRadialLoadMm() {
		return sssRadialLoadMm;
	}
	public void setSssRadialLoadMm(String sssRadialLoadMm) {
		this.sssRadialLoadMm = sssRadialLoadMm;
	}
	public String getSssAxialLoadKn() {
		return sssAxialLoadKn;
	}
	public void setSssAxialLoadKn(String sssAxialLoadKn) {
		this.sssAxialLoadKn = sssAxialLoadKn;
	}
	public String getDirSssAxial() {
		return dirSssAxial;
	}
	public void setDirSssAxial(String dirSssAxial) {
		this.dirSssAxial = dirSssAxial;
	}
	public String getRatioRequired() {
		return ratioRequired;
	}
	public void setRatioRequired(String ratioRequired) {
		this.ratioRequired = ratioRequired;
	}
	public String getRequiredOutputSpeed() {
		return requiredOutputSpeed;
	}
	public void setRequiredOutputSpeed(String requiredOutputSpeed) {
		this.requiredOutputSpeed = requiredOutputSpeed;
	}
	public String getPresetTorque() {
		return presetTorque;
	}
	public void setPresetTorque(String presetTorque) {
		this.presetTorque = presetTorque;
	}
	public String getConf() {
		return conf;
	}
	public void setConf(String conf) {
		this.conf = conf;
	}
	public String getMount() {
		return mount;
	}
	public void setMount(String mount) {
		this.mount = mount;
	}
	public String getMount2() {
		return mount2;
	}
	public void setMount2(String mount2) {
		this.mount2 = mount2;
	}
	public String getMount3() {
		return mount3;
	}
	public void setMount3(String mount3) {
		this.mount3 = mount3;
	}
	public String getIshaft() {
		return ishaft;
	}
	public void setIshaft(String ishaft) {
		this.ishaft = ishaft;
	}
	public String getOshaft() {
		return oshaft;
	}
	public void setOshaft(String oshaft) {
		this.oshaft = oshaft;
	}
	public String getOshaftInc() {
		return oshaftInc;
	}
	public void setOshaftInc(String oshaftInc) {
		this.oshaftInc = oshaftInc;
	}
	public String getDeg() {
		return deg;
	}
	public void setDeg(String deg) {
		this.deg = deg;
	}
	public String getTowards() {
		return towards;
	}
	public void setTowards(String towards) {
		this.towards = towards;
	}
	public String getOshafty() {
		return oshafty;
	}
	public void setOshafty(String oshafty) {
		this.oshafty = oshafty;
	}
	public String getOshafty2() {
		return oshafty2;
	}
	public void setOshafty2(String oshafty2) {
		this.oshafty2 = oshafty2;
	}
	public String getBackStop() {
		return backStop;
	}
	public void setBackStop(String backStop) {
		this.backStop = backStop;
	}
	public String getRot() {
		return rot;
	}
	public void setRot(String rot) {
		this.rot = rot;
	}
	public String getDirHssAxial() {
		return dirHssAxial;
	}
	public void setDirHssAxial(String dirHssAxial) {
		this.dirHssAxial = dirHssAxial;
	}
	public Integer getNewcaseid() {
		return newcaseid;
	}
	public void setNewcaseid(Integer newcaseid) {
		this.newcaseid = newcaseid;
	}
	
	 
	private String  requiredSreviceFactor;
	 
	private String  gearhead;
	
	private String  motorSerial;
	
	private String  shiMfg;
	public String getRequiredSreviceFactor() {
		return requiredSreviceFactor;
	}
	public void setRequiredSreviceFactor(String requiredSreviceFactor) {
		this.requiredSreviceFactor = requiredSreviceFactor;
	}
	public String getGearhead() {
		return gearhead;
	}
	public void setGearhead(String gearhead) {
		this.gearhead = gearhead;
	}
	public String getMotorSerial() {
		return motorSerial;
	}
	public void setMotorSerial(String motorSerial) {
		this.motorSerial = motorSerial;
	}
	public String getShiMfg() {
		return shiMfg;
	}
	public void setShiMfg(String shiMfg) {
		this.shiMfg = shiMfg;
	}
 	 
	
	private String oshaftInc2;
	
	private String oshaftInc1;
	
	private String other;
	
	private String othersPlz;

	public String getOshaftInc2() {
		return oshaftInc2;
	}
	public void setOshaftInc2(String oshaftInc2) {
		this.oshaftInc2 = oshaftInc2;
	}
	public String getOshaftInc1() {
		return oshaftInc1;
	}
	public void setOshaftInc1(String oshaftInc1) {
		this.oshaftInc1 = oshaftInc1;
	}
	public String getOther() {
		return other;
	}
	public void setOther(String other) {
		this.other = other;
	}
	public String getOthersPlz() {
		return othersPlz;
	}
	public void setOthersPlz(String othersPlz) {
		this.othersPlz = othersPlz;
	}
	
	
	private String jadapt;
	
	private String basePlate;
	
	private String basePlateyes;

	public String getJadapt()
	{
		return jadapt;
	}
	public void setJadapt(String jadapt)
	{
		this.jadapt = jadapt;
	}
	public String getBasePlate()
	{
		return basePlate;
	}
	public void setBasePlate(String basePlate)
	{
		this.basePlate = basePlate;
	}
	public String getBasePlateyes()
	{
		return basePlateyes;
	}
	public void setBasePlateyes(String basePlateyes)
	{
		this.basePlateyes = basePlateyes;
	}
	
	

	
	private String countrycode;
	
	
	private String monthandyear;
	
	 
	 

	
	private String custmername;


	
	private String country;


 



	
	private Date dtCase;
	
	private Date dateExp;

	public String getCountrycode() {
		return countrycode;
	}
	public void setCountrycode(String countrycode) {
		this.countrycode = countrycode;
	}
	public String getMonthandyear() {
		return monthandyear;
	}
	public void setMonthandyear(String monthandyear) {
		this.monthandyear = monthandyear;
	}
	public String getCustmername() {
		return custmername;
	}
	public void setCustmername(String custmername) {
		this.custmername = custmername;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public Date getDtCase() {
		return dtCase;
	}
	public void setDtCase(Date dtCase) {
		this.dtCase = dtCase;
	}
	public Date getDateExp() {
		return dateExp;
	}
	public void setDateExp(Date dateExp) {
		this.dateExp = dateExp;
	}
	
	
	private String terminalBox;
	
	private String cableEntry;
	
	
	private String operation;
	
	private String perhour;
	
	private String installLocation;
	
	private String altitude;
	
	private String environment;
	
	private String presetTorqueRot;
	public String getTerminalBox() {
		return terminalBox;
	}
	public void setTerminalBox(String terminalBox) {
		this.terminalBox = terminalBox;
	}
	public String getCableEntry() {
		return cableEntry;
	}
	public void setCableEntry(String cableEntry) {
		this.cableEntry = cableEntry;
	}
	public String getOperation() {
		return operation;
	}
	public void setOperation(String operation) {
		this.operation = operation;
	}
	public String getPerhour() {
		return perhour;
	}
	public void setPerhour(String perhour) {
		this.perhour = perhour;
	}
	public String getInstallLocation() {
		return installLocation;
	}
	public void setInstallLocation(String installLocation) {
		this.installLocation = installLocation;
	}
	public String getAltitude() {
		return altitude;
	}
	public void setAltitude(String altitude) {
		this.altitude = altitude;
	}
	public String getEnvironment() {
		return environment;
	}
	public void setEnvironment(String environment) {
		this.environment = environment;
	}
	public String getPresetTorqueRot() {
		return presetTorqueRot;
	}
	public void setPresetTorqueRot(String presetTorqueRot) {
		this.presetTorqueRot = presetTorqueRot;
	}

	
	private String basefreq;
	public String getBasefreq() {
		return basefreq;
	}
	public void setBasefreq(String basefreq) {
		this.basefreq = basefreq;
	}
	
	
}
