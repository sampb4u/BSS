package com.finsol.bean;


public class UsersBean 
{
	private Integer userId;	
	private String loginId;	
	private String userFirstName;
	private String  userLastName;
	private String  emailId;
	private String countryCode;
	private String utctimeZone;
	private Integer roleId;
	private Byte status;
	private Byte isPasswordChanged;
	private String photoPath;
	private String signaturePath;
	private String updateFlag;
	private String password;
	private String salesManCode;
	
	
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getLoginId() {
		return loginId;
	}
	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}
	public String getUserFirstName() {
		return userFirstName;
	}
	public void setUserFirstName(String userFirstName) {
		this.userFirstName = userFirstName;
	}
	public String getUserLastName() {
		return userLastName;
	}
	public void setUserLastName(String userLastName) {
		this.userLastName = userLastName;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getCountryCode() {
		return countryCode;
	}
	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}
	public String getUtctimeZone() {
		return utctimeZone;
	}
	public void setUtctimeZone(String utctimeZone) {
		this.utctimeZone = utctimeZone;
	}
	public Integer getRoleId() {
		return roleId;
	}
	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}
	public Byte getStatus() {
		return status;
	}
	public void setStatus(Byte status) {
		this.status = status;
	}
	public Byte getIsPasswordChanged() {
		return isPasswordChanged;
	}
	public void setIsPasswordChanged(Byte isPasswordChanged) {
		this.isPasswordChanged = isPasswordChanged;
	}
	public String getPhotoPath() {
		return photoPath;
	}
	public void setPhotoPath(String photoPath) {
		this.photoPath = photoPath;
	}
	public String getSignaturePath() {
		return signaturePath;
	}
	public void setSignaturePath(String signaturePath) {
		this.signaturePath = signaturePath;
	}
	public String getUpdateFlag() {
		return updateFlag;
	}
	public void setUpdateFlag(String updateFlag) {
		this.updateFlag = updateFlag;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getSalesManCode()
	{
		return salesManCode;
	}
	public void setSalesManCode(String salesManCode)
	{
		this.salesManCode = salesManCode;
	}
	
	

}
