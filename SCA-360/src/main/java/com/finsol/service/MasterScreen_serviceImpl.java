package com.finsol.service;

import java.util.ArrayList;
import java.util.List;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.finsol.dao.MasterScreen_Dao;
import com.finsol.model.CDepartment;
import com.finsol.model.CTDepartment;
import com.finsol.model.CompititorGrid;
import com.finsol.model.CompititorGridTemp;
import com.finsol.model.CreditStatus;
import com.finsol.model.CustmerContactDetails;
import com.finsol.model.CustmerDetails;
import com.finsol.model.Department;
import com.finsol.model.ExplositionClassfication;
import com.finsol.model.FrameSizeAndTag;
import com.finsol.model.GearProductType;
import com.finsol.model.ItemAndScore;
import com.finsol.model.MTR_KW;
import com.finsol.model.NewSelectionGrid;
import com.finsol.model.Product;
import com.finsol.model.ProductCategory;
import com.finsol.model.ProductLine;
import com.finsol.model.ProspectCustmerDetails;
import com.finsol.model.RPM;
import com.finsol.model.Score;
import com.finsol.model.TaxMaster;
import com.finsol.model.TechGrid;
import com.finsol.model.TechGridTemp;
import com.finsol.model.TermsAndConditionGrid;
import com.finsol.model.TermsAndConditionGridTemp;

@Service("MasterScreen_serviceImpl")
public class MasterScreen_serviceImpl 
{
	private static final Logger logger = Logger.getLogger( MasterScreen_serviceImpl.class);
	
	@Autowired
	private MasterScreen_Dao masterscreendao;

	public void saveCatageory(ProductCategory productageorey) {
		masterscreendao.saveProductCategorey(productageorey);
		// TODO Auto-generated method stub
		
	}

	public List<ProductCategory> allValuesInProductCatageory() {
		// TODO Auto-generated method stub
		return masterscreendao.allValuesInProductCatageory();
	}

	public void updateProductCatgeorey(ProductCategory productageorey) {
		masterscreendao.updateProductCatgeorey(productageorey);
		
	}

	public void saveProducts(ArrayList<Product> product) {
		// TODO Auto-generated method stub
		masterscreendao.saveProducts(product);
		
	}

	public List<Product> getAllproductOnCatgeoreyCode(String productcatgeoreycode) {
		// TODO Auto-generated method stub
		return masterscreendao.getAllproductOnCatgeoreyCode( productcatgeoreycode);
	}

	public void saveDepatment(Department department) 
	{
		// TODO Auto-generated method stub
		masterscreendao.saveDepatment(department);
		
	}

	public void updateDepartMent(Department department) {
		// TODO Auto-generated method stub
		masterscreendao.updateDepartMent(department);
	}

	public List<Department> departmentView() {
		// TODO Auto-generated method stub
		return masterscreendao.departmentView();
	}

	public List<Object[]> getAllProductLInes() {
		// TODO Auto-generated method stub
		return masterscreendao.getAllProductLInes();
	}

	public List<Object[]> getAllProductsOnProductCatageory(String productcatagerey) {
		// TODO Auto-generated method stub
		return masterscreendao.getAllProductsOnProductCatageory(productcatagerey);
	}

	public void deleteProductLine() {
		// TODO Auto-generated method stub
		masterscreendao.deleteProductLine();
		
	}

	public void saveProductLine(ArrayList<ProductLine> al) 
	{
		// TODO Auto-generated method stub
		masterscreendao.saveProductLine(al);
		
	}

	public void saveCustmer(CustmerDetails al) {
		// TODO Auto-generated method stub
		masterscreendao.saveCustmer(al);
	}

	public int getMaxIdCustmer() {
		// TODO Auto-generated method stub
		return masterscreendao.getMaxIdCustmer();
	}

	public void updateimageonMaxId(int maxid, String photoPath) {
		// TODO Auto-generated method stub
		masterscreendao.updateimageonMaxId(maxid,photoPath);
	}

	/*public void saveCustmer(CustmerDetails productageorey, ArrayList<CustmerContactDetails> plk) {
		// TODO Auto-generated method stub
		 masterscreendao.saveCustmer(productageorey,plk);
		
	}
	*/
	
	 
	public boolean saveMultipleEntities(List entitiesList)
	{
		return masterscreendao.saveMultipleEntities(entitiesList);
	}
	
	public List<FrameSizeAndTag> listFrameSizeAndTag()
	{
		return masterscreendao.listFrameSizeAndTag();
	}
	 
	public List<ItemAndScore> listItemAndScore()
	{
		return masterscreendao.listItemAndScore();
	}

	public List<CustmerDetails> getAllCustmersDeatails(String custmername) {
		// TODO Auto-generated method stub
		return  masterscreendao.getAllCustmersDeatails(custmername);
	}

	public void updateCustmer(CustmerDetails productageorey, ArrayList<CustmerContactDetails> plk) {
		// TODO Auto-generated method stub
		  masterscreendao.updateCustmer(productageorey,plk);
	}

	public void deleteofCutmerContactDetails(Integer custid) {
		// TODO Auto-generated method stub
		masterscreendao.deleteofCutmerContactDetails(custid);
	}

	public void saveContactCustmerDetails(CustmerDetails productageorey, ArrayList<CustmerContactDetails> plk) 
	{
		masterscreendao.saveContactCustmerDetails(productageorey, plk);
		// TODO Auto-generated method stub
		
	}

	public void deleteCustmer(Integer custid) 
	{
		masterscreendao.deleteCustmer(custid);// TODO Auto-generated method stub
		
	}

	public List<Object[]> getAllAccountNames() {
		// TODO Auto-generated method stub
		return masterscreendao.getAllAccountNames();
	}


	public int getNewSelctionCaseMaxId() {
		// TODO Auto-generated method stub
		return masterscreendao.getNewSelctionCaseMaxId();
	}

	public String getNewSelectionKey() {
		// TODO Auto-generated method stub
		return masterscreendao.getNewSelectionKey();
	}

	public void saveNewSelectionGrid(List<NewSelectionGrid> newselectiongrid) {
		// TODO Auto-generated method stub
		masterscreendao.saveNewSelectionGrid(newselectiongrid);
	}
	
		public void deleteScore(Score score) {
		masterscreendao.deleteScore(score);
	}
	
	public List<Score> loadScoreByProductType(Integer prodTypeCode,Integer subTypeCode)
    {
       // String sql = "from Branch where bankcode =" + bankcode;
        return masterscreendao.loadScoreByProductType(prodTypeCode,subTypeCode);
    }




	public int getNewSelctionCaseTempMaxId() {
		// TODO Auto-generated method stub
		return masterscreendao.getNewSelctionCaseTempMaxId();
	}

	public String getNewSelectionTempKey() {
		// TODO Auto-generated method stub
		return masterscreendao.getNewSelectionTempKey();
	}

	public List<Object[]> getAllSSCCodes() 
	{
		// TODO Auto-generated method stub
		return masterscreendao.getAllSSCCodes();
	}

	public String getStoredTime(String username, int tab) {
		// TODO Auto-generated method stub
		return masterscreendao.getStoredTime(username,tab);
	}




	public List<String> getAllCustmerNamesInCasesSummarey(String user) {
		// TODO Auto-generated method stub
		return masterscreendao.getAllCustmerNamesInCasessSummary(user);
	}

	

	public List<NewSelectionGrid> getDetailsFromNewSelectionGrid(String token) {
		// TODO Auto-generated method stub
		return masterscreendao.getDetailsFromNewSelectionGrid(token);
	}

	public void deleteFromTempTableTeable(Integer tempid, int tab) {
		// TODO Auto-generated method stub
		masterscreendao.deleteFromTempTableTeable(tempid,tab);
	}

	public void deleteNecCaseSeletionGrid(String newcaseToken) {
		// TODO Auto-generated method stub
		masterscreendao.deleteNecCaseSeletionGrid(newcaseToken);
	}

	public int getCaseRefernce(String caserefernce) {
		// TODO Auto-generated method stub
		return masterscreendao.getCaseRefernce(caserefernce);
	}

	public void saveCompitiorRepalceGrid(List<CompititorGrid> newselectiongrid) 
	{
		masterscreendao.saveCompitiorRepalceGrid(newselectiongrid);
		
	}

	public void deleteCompitiotorGrid(String newcaseToken) {
		// TODO Auto-generated method stub
		masterscreendao.deleteCompitiotorGrid(newcaseToken);
	}

	public void saveCompitorGridTemp(List<CompititorGridTemp> newselectiongrid) 
	{
		masterscreendao.saveCompitorGridTemp(newselectiongrid);
		
	}

	public void deleteFromCompititorReplceTemp(Integer tempid, int tab) {
		// TODO Auto-generated method stub
		masterscreendao.deleteFromCompititorReplceTemp(tempid,tab);
	}

	public void deletefromNewCaseSElection(Integer mainid) {
		// TODO Auto-generated method stub
		masterscreendao.deletefromNewCaseSElection(mainid);
	}

	public List<CompititorGridTemp> getDetailsFromCompititorAndReplaceGridTemp(String storedtime) {
		// TODO Auto-generated method stub
		return masterscreendao.getDetailsFromCompititorAndReplaceGridTemp(storedtime);
	}

	public String getStoredTime(String username) {
		// TODO Auto-generated method stub
		return masterscreendao.getStoredTime(username);
	}

	public List<CompititorGrid> getDetailsFromCompititorGrid(String caseref) {
		// TODO Auto-generated method stub
		return masterscreendao.getDetailsFromCompititorGrid(caseref);
	}







	public void deleteSumtimogridTemp(Integer tempid, int tab) {
		// TODO Auto-generated method stub
		masterscreendao.deleteSumtimogridTemp(tempid,tab);
	}

	public void deleteSumitomoReplaceGrid(String caseRef) 
	{
		// TODO Auto-generated method stub
		masterscreendao.deleteSumitomoReplaceGrid(caseRef);
	}


	public void deleteFromSparePartTempTable(Integer tempid, int tab) 
	{
		// TODO Auto-generated method stub
		masterscreendao.deleteFromSparePartTempTable(tempid,tab);
	}




	 

	public void deletefromsparePartsGrid(String caseRef) {
		// TODO Auto-generated method stub
		masterscreendao.deletefromsparePartsGrid(caseRef);
	}

	

	public void deleteFromTechQueryTempTable(Integer tempid, int tab) {
		// TODO Auto-generated method stub
		masterscreendao.deleteFromTechQueryTempTable(tempid,tab);
	}

	public void saveTechGridTemp(List<TechGridTemp> newselectiongrid) 
	{
		// TODO Auto-generated method stub
		masterscreendao.saveTechGridTemp(newselectiongrid);
	}

	public void saveTechQueryGrid(List<TechGrid> newselectiongrid) {
		// TODO Auto-generated method stub
		masterscreendao.saveTechQueryGrid(newselectiongrid);
	}

	public void deleteTechQueryGrid(String caseRef) {
		// TODO Auto-generated method stub
		masterscreendao.deleteTechQueryGrid(caseRef);
	}

	public List<TechGridTemp> getDetailsFromTechGridTemp(String storedtime) {
		// TODO Auto-generated method stub
		return masterscreendao.getDetailsFromTechGridTemp(storedtime);
	}

	public List<TechGrid> getDetailsFromTechGrid(String caseref) {
		// TODO Auto-generated method stub
		return masterscreendao.getDetailsFromTechGrid(caseref);
	}



	public int getMaxQuationid() {
		// TODO Auto-generated method stub
		return  masterscreendao.getMaxQuationid();
	}



	public int getCustmerStatus(String custmer) {
		// TODO Auto-generated method stub
		return masterscreendao.getCustmerStatus(custmer);
	}

	public int getCustmerStatusOnCustmerName(String custmer) {
		// TODO Auto-generated method stub
		return masterscreendao.getCustmerStatusOnCustmerName(custmer);
	}

	public String getAccountCodefromCutmerMaster(String custmername) {
		// TODO Auto-generated method stub
		return masterscreendao.getAccountCodefromCutmerMaster(custmername);
	}

	public List<TaxMaster> getAllTaxNmaesOnCountrycode(String countrycode) {
		// TODO Auto-generated method stub
		return masterscreendao.getAllTaxNmaesOnCountrycode(countrycode);
	}

	public String getLocalCurrenceyOfCountryCode(String countrycode) {
		// TODO Auto-generated method stub
		return masterscreendao.getLocalCurrenceyOfCountryCode(countrycode);
	}

	public List<GearProductType> getpro_grp() {
		// TODO Auto-generated method stub
		return masterscreendao.getgetpro_grp();
	}

	public List<MTR_KW> getmtr_kw() {
		// TODO Auto-generated method stub
		return masterscreendao.getmtr_kw();
	}

	public List<ExplositionClassfication> getexlositionclassfication() {
		// TODO Auto-generated method stub
		return masterscreendao.getexlositionclassfication();
	}

	public List<String> getVolatagesforCase() {
		// TODO Auto-generated method stub
		return masterscreendao.getVolatagesforCase();
	}

	public List<RPM> getRpm(int frequency1, int pole) {
		// TODO Auto-generated method stub
		return masterscreendao.getRpm(frequency1,pole);
	}

	public List<CreditStatus> getAllCreditStatus() {
		// TODO Auto-generated method stub
		return masterscreendao.getAllCreditStatus();
	}

	public String getSalesmanOnSalesCode(String salesPersonCode) {
		// TODO Auto-generated method stub
		return masterscreendao.getSalesmanOnSalesCode(salesPersonCode);
	}

	public String getCountryOnCountreycode(String countrycode) {
		// TODO Auto-generated method stub
		return masterscreendao.getCountryOnCountreycode(countrycode);
	}

	public void savequationtermsandconditiongrid(List<TermsAndConditionGrid> qtgrid) {
		// TODO Auto-generated method stub
		masterscreendao.savequationtermsandconditiongrid(qtgrid);
	}



	public List<String> getSalesMancode() {
		// TODO Auto-generated method stub
		return masterscreendao.getSalesMancode();
	}

	public List<String> getSalesManName(String salesmancode) {
		// TODO Auto-generated method stub
		return masterscreendao.getSalesManName(salesmancode);
	}

	public List<String> getTaxPercentages() {
		// TODO Auto-generated method stub
		return masterscreendao.getTaxPercentages();
	}

	public List<String> getCurrencies() {
		// TODO Auto-generated method stub
		return masterscreendao.getCurrencies();
	}

	public void deleteofProspectCutmerContactDetails(Integer custid)
    {
	    // TODO Auto-generated method stub
		masterscreendao.deleteofProspectCutmerContactDetails(custid);
    }

	public void saveProspectCustmer(ProspectCustmerDetails custmerdetailsdata)
    {
	    // TODO Auto-generated method stub
		masterscreendao.saveProspectCustmer(custmerdetailsdata);
    }

	public List<Object[]> getAllprospectAccountNames()
    {
	    // TODO Auto-generated method stub
	    return masterscreendao.getAllprospectAccountNames();
    }

	public List<ProspectCustmerDetails> getAllprospectCustmersDeatails(String custmername1)
    {
	    // TODO Auto-generated method stub
	    return masterscreendao.getAllprospectCustmersDeatails(custmername1);
    }





	public void savequationtermsandconditiongridTemp(
			List<TermsAndConditionGridTemp> qtgrid) {
		// TODO Auto-generated method stub
		masterscreendao.savequationtermsandconditiongridTemp(qtgrid);
	}

	public int getMaxQuationTempid() {
		// TODO Auto-generated method stub
		return masterscreendao.getMaxQuationTempid();
	}

	public void deltefromAllTemmpbasedOnidandqtnsequencenumber(Integer qid) 
	{
		// TODO Auto-generated method stub
		masterscreendao.deltefromAllTemmpbasedOnidandqtnsequencenumber(qid);
	}

	public List<Object[]> getAllProspectAccountNames() {
		// TODO Auto-generated method stub
		return masterscreendao.getAllProspectAccountNames();
	}

	public String getCountryOnCountreycodegforcurrencey(String billingCountries) {
		// TODO Auto-generated method stub
		return masterscreendao.getCountryOnCountreycodegforcurrencey(billingCountries);
	}

	public String getStoredTimeOnTabandQtnmaster(String username, int tab,
			String qtnmaster) {
		return masterscreendao.getStoredTimeOnTabandQtnmaster(username,tab,qtnmaster);
	}

	public void deleteDepatmentsFromCase(String caseRef, Integer caseid) {
		// TODO Auto-generated method stub
		masterscreendao.deleteDepatmentsFromCase(caseRef,caseid);
	}

	public void saveCDepartmentData(List<CDepartment> cdepartmentdata) {
		// TODO Auto-generated method stub
		masterscreendao.saveCDepartmentData(cdepartmentdata);
	}

	public Integer getMaxCaseId() {
		// TODO Auto-generated method stub
		return masterscreendao.getMaxCaseId();
	}

	public void deleteCTDepartment(String caseRef, int tab, Integer tempid) {
		// TODO Auto-generated method stub
		masterscreendao.deleteCTDepartment(caseRef,tab,tempid);
	}

	 

	public Integer getMaxCaseTempId() {
		// TODO Auto-generated method stub
		return masterscreendao.getMaxCaseTempId();
	}

	public void saveOfCaseTempDepartment(List<CTDepartment> ctDepatmentlist) {
		// TODO Auto-generated method stub
		masterscreendao.saveOfCaseTempDepartment(ctDepatmentlist);
	}

	public List<String> getAllCustmerNamesFoeCase() {
		// TODO Auto-generated method stub
		return masterscreendao.getAllCustmerNamesFoeCase();
	}

	public List<String> getAllCustmerNamesForQuotation() {
		// TODO Auto-generated method stub
		return masterscreendao.getAllCustmerNamesForQuatation();
	}



	// TODO Auto-generated method stub
	 
}
