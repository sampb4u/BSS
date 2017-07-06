package com.finsol.service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.finsol.dao.Bss_Migrate_DAO;
import com.finsol.model.AppCode;
import com.finsol.model.ApplicationIndustryCode;
import com.finsol.model.Country;
import com.finsol.model.CustmerType;
import com.finsol.model.SalesManIndexMaster;

@Service("Bss_Migrate_ServiceImpl")
public class Bss_Migrate_ServiceImpl 
{
	private static final Logger logger = Logger.getLogger( Bss_Migrate_ServiceImpl.class);
	
	@Autowired
	private Bss_Migrate_DAO bssmigrationdao ;
	
	
	public Integer getTest()
    {
        return  bssmigrationdao.getMaxValue();
    }

	public List  getAllTheBookingDetailsFromTempTable(String migartiontime) {
		return bssmigrationdao.getAllTheBookingDetailsFromTempTable(migartiontime);
	}

	public List  getAllTheBookingDetailsFromTempTableForProductionScheduler(String migartiontime) {
		return bssmigrationdao. getAllTheBookingDetailsFromTempTableForProductionScheduler(migartiontime);
	}
	
	public List  getAllTheBookingDetailsFromTempTableForServiceScheduler(String migartiontime) {
		return bssmigrationdao. getAllTheBookingDetailsFromTempTableForServiceScheduler(migartiontime);
	}


	public List<Integer> gettingBookingBudgetYears() {
		return bssmigrationdao.gettingBookingBudgetYears();
	}

	public List<Object[]> getCountries() {
		return bssmigrationdao.getCountries();
	}
	
	public List<Object[]> getCountriesProductYTD() {
		return bssmigrationdao.getCountriesProductYTD();
	}
	
	
	public List<Object[]> getProducts() {
		return bssmigrationdao.getProducts();
	}
	
	public List<Object[]> getIndustrieSectors() {
		return bssmigrationdao.getIndustrieSectors();
	}
	
	public List<Object[]> getIndustriesByIndustrySector(String industrysectorname) {
		return bssmigrationdao.getIndustriesByIndustrySector(industrysectorname);
	}

	public Double getBookingValue(String countryname, Integer year) {
		return bssmigrationdao.getBookingValue(countryname,year);
	}
	
	public Double getBookingValueForProductShare(String productname, Integer year) {
		return bssmigrationdao.getBookingValueForProductShare(productname,year);
	}
	
	
	public List getBookingValueForProductShareOpt(Integer year,String counrtyname) {
		return bssmigrationdao.getBookingValueForProductShareOpt(year,counrtyname);
	}
	
	public Double getBookingValueForIndustrySectorShare(String industrysectorname, Integer year) {
		return bssmigrationdao.getBookingValueForIndustrySectorShare(industrysectorname,year);
	}
	
	public List getBookingValueForIndustrySectorShareOpt(Integer year) {
		return bssmigrationdao.getBookingValueForIndustrySectorShareOpt(year);
	}
	public List getBookingValueForIndustrySectorShareTableData(String ISCode) {
		return bssmigrationdao.getBookingValueForIndustrySectorShareTableData(ISCode);
	}
	
	public List getBookingValueForIndustrySectorShareTableDataByCountry(String ISCode,String countrycode) {
		return bssmigrationdao.getBookingValueForIndustrySectorShareTableDataByCountry(ISCode,countrycode);
	}
	
	public Double getBookingValueForIndustryShare(String industryname, Integer year) {
		return bssmigrationdao.getBookingValueForIndustryShare(industryname,year);
	}

	public Double getBudgetValue(String countryname, int i) {
		return bssmigrationdao.getBudgetValue(countryname,i);
	}

	public List<Object[]> getAllCatagories() {
		return bssmigrationdao.getAllCatagories();
	}

	public List<String> getAllProductsOnCatgeorycode(String categoreycode) {
		return bssmigrationdao.getAllProductsOnCatgeorycode(categoreycode);
	}

	public float getBookingValue(String countryname, String catageoryname) {
		return bssmigrationdao.getBookingValue(countryname,catageoryname);
	}

	public float getBudgetValue(String countryname, String catagoreyname) {
		
		return bssmigrationdao.getBudgetValue(countryname,catagoreyname);
	}

	public float getBookingsForProduct(String product, String countryname, String catagoreyname) {
		return bssmigrationdao.getBookingsForProduct(product,countryname,catagoreyname);
	}
	
	public List getMonths() {
		return bssmigrationdao.getMonths();
	}
	
	public Double getBookingValueByMonth(Integer monthnid, Integer year) {
		return bssmigrationdao.getBookingValueByMonth(monthnid,year);
	}
	
	public Double getSalesValueByMonth(Integer monthnid, Integer year) {
		return bssmigrationdao.getSalesValueByMonth(monthnid,year);
	}
	
	public Double getCWQuarterlyBookingValue(String quarterlyBooking,Integer year) {
		return bssmigrationdao.getCWQuarterlyBookingValue(quarterlyBooking,year);
	}
	
	public Double getBookingValueByYear(Integer year) {
		return bssmigrationdao.getBookingValueByYear(year);
	}

	public List<Integer> getDistinctMonthNumbers() {
		// TODO Auto-generated method stub
		return bssmigrationdao.getDistinctMonthNumbers();
	}

	public Double getBudgetvaluesforMonthleyYtd(int i, String countryname) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getBudgetvaluesforMonthleyYtd(i,countryname);
	}

	public Double getBookingvaluesforMonthleyYtd(int i, String countryname) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getBookingvaluesforMonthleyYtd(i,countryname);
	}
	
	
	
	//   1-7-2016------------------------->craeted by siva reddy----------------------------->

	public List<Object[]> getAllDetailsAboutCatageory() {
		// TODO Auto-generated method stub
		return bssmigrationdao.getAllDetailsAboutCatageory();
	}

	public Double getBudgetvaluesforMonthleyYtdtocatageorey(int i, String catageoryname, String country1) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getBudgetvaluesforMonthleyYtdtocatageorey(i,catageoryname,country1);
	}

	public Double getBookingvaluesforMonthleyYtdToCatageorey(int i, String catageoryname, String country1) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getBookingvaluesforMonthleyYtdToCatageorey(i,catageoryname,country1);
	}
	
	// For produts.....................

	public List<Object[]> getAllProductsBasedOnCatageoreyName(String catageorey1) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getAllProductsBasedOnCatageoreyName(catageorey1);
	}

	public Double getproductValue(Integer integer, String country1, String productnmae) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getproductValue(integer,country1,productnmae);
	}
	
	public Map getOTDPie() {
		// TODO Auto-generated method stub
		return bssmigrationdao.getOTDPie();
	}

	public List<String> getVendorNames() {
		// TODO Auto-generated method stub
		return bssmigrationdao.getVendorNames();
	}

	public List<String> getproductlines() {
		// TODO Auto-generated method stub
		return bssmigrationdao.getproductlines();
	}

	public Double getinqty(String product, String vendors) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getinqty(product,vendors);
	}

	public Double getamountusd(String product, String vendors) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getamountusd(product,vendors);
	}
	
	public List getRequestDate()
	{
		return bssmigrationdao.getRequestDate();
	}
	
	public List getAverageLeadProdType() {
		// TODO Auto-generated method stub
		return bssmigrationdao.getAverageLeadProdType();
	}
	
	public List<Object[]> getBudgetofallmonths() {
		// TODO Auto-generated method stub
		return bssmigrationdao.getBudgetofallmonths();
	}
	
	public List<Object[]> getBookingsOfMonthley(String countryname) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getBookingsOfMonthley(countryname);
	}
	
	public List<Object[]> getAllcatagoriesBasedOncountry(String country1) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getAllcatagoriesBasedOncountry(country1);
	}

	public List<Object[]> getbookingofproductcatagories(String country1, String catageoryname) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getbookingofproductcatagories(country1,catageoryname);
	}
	public List<Object[]> getProductTypeValues() {
		// TODO Auto-generated method stub
		return bssmigrationdao.getProductTypeValues();
	}
	
	public List<Object[]> vendorsbookingwithproduc(String product) {
		// TODO Auto-generated method stub
		return bssmigrationdao.vendorsbookingwithproduc(product);
	}

	public List<Object[]> getsunofvendorsusd(String product) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getsunofvendorsusd(product);
	}
	public List<Object[]> getcountriesbookingsoncatagorey(String catageoryname) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getcountriesbookingsoncatagorey(catageoryname);
	}

	public List<Object[]> getAllProductsBasedOnCatageoreyNameforcastdrilldown(String catageorey1, String country) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getAllProductsBasedOnCatageoreyNameforcastdrilldown(catageorey1, country);
	}
	
	
	
	public Double getbacklogofpreviousyear(int i) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getbacklogofpreviousyear(i);
	}

	public Double getamountfromcurrentyear(int i, int year) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getbacklogofpreviousyear(i,year);
	}

	public Double getamountfromcurrentyearinytdsales(int i, int year) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getamountfromcurrentyearinytdsales(i,year);
	}

	public Double getamountfromcurrentyearinytdsalesforrequired(int i, int year) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getamountfromcurrentyearinytdsalesforrequired(i,year);
	}

	public Double getamountfromcurrentyearinytdsalesforrequired(int year) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getamountfromcurrentyearinytdsalesforrequired(year);
	}

	public List<String> getVendorNamesYtdSales2() {
		// TODO Auto-generated method stub
		return bssmigrationdao.getVendorNamesYtdSales2();
	}

	public List<Object[]> vendorsbookingwithproducwithYtdSales2(String product) {
		// TODO Auto-generated method stub
		return bssmigrationdao.vendorsbookingwithproducwithYtdSales2(product);
	}

	public List<Object[]> getsunofvendorsusdFromYTDSales2(String product) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getsunofvendorsusdFromYTDSales2(product);
	}

	public List<Object[]> getProductTypeValuesYtdSales3() {
		// TODO Auto-generated method stub
		return bssmigrationdao.getProductTypeValuesYtdSales3();
	}

	public List<Object[]> getProductTypeValuesYtdSales4() {
		// TODO Auto-generated method stub
		return bssmigrationdao.getProductTypeValuesYtdSales4();
	}
	
	public Double getQuarterlyBooking(Integer year,String mString)
	{
		return bssmigrationdao.getQuarterlyBooking(year,mString);
	}

	public List getBookingValueForIndustrySectorShareTableDataByCountryDollar(String string, String countrycode) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getBookingValueForIndustrySectorShareTableDataByCountryDollar(string,countrycode);
	}

	public List getBookingValueForProductShareOptindollars(int year, String countrycode) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getBookingValueForProductShareOptindollars(year,countrycode);
	}

	public List getBookingValueForIndustrySectorShareTableDataByCountrydollar(String parameter, String countrycode) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getBookingValueForIndustrySectorShareTableDataByCountrydollar(parameter,countrycode);
	}

	public BigDecimal getCWQuarterlyBookingValue1(String quarterly, int i) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getCWQuarterlyBookingValue1(quarterly,i);
	}

	public Double getBookingValuelocal(String countryname, Integer year) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getBookingValuelocal(countryname,year);
	}

	public List<Object[]> getAllProductsBasedOnCatageoreyNameforcastdrilldowndollar(String catageorey1,
			String country1) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getAllProductsBasedOnCatageoreyNameforcastdrilldowndollar(catageorey1,country1);
	}

	public List<Object[]> getcountriesbookingsoncatagoreylocal(String catageoryname) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getcountriesbookingsoncatagoreylocal(catageoryname);
	}

	public List<Object[]> getCountriesForProfits() {
		// TODO Auto-generated method stub
		return bssmigrationdao.getCountriesForProfits();
	}

	public List<String> getAllApplications() {
		// TODO Auto-generated method stub
		return bssmigrationdao.getAllApplications();
	}

	public List<String> getAllIndustryNames() {
		// TODO Auto-generated method stub
		return bssmigrationdao.getAllIndustryNames();
	}

	public List<String> getAllCutmerGroupNames() {
		// TODO Auto-generated method stub
		return bssmigrationdao.getAllCutmerGroupNames();
	}

	public List<String> getAllTeriotreyNames() {
		// TODO Auto-generated method stub
		return bssmigrationdao.getAllTeriotreyNames();
	}

	public List<String> getAllSalesManNames() {
		// TODO Auto-generated method stub
		return bssmigrationdao.getAllSalesManNames();
	}

	public List<String> getAllPaymentsNames() {
		// TODO Auto-generated method stub
		return bssmigrationdao.getAllPaymentsNames();
	}

	public List<String> getAllSalesMancode(String s) {
		// TODO Auto-generated method stub
		return bssmigrationdao.getAllSalesMancode(s);
	}

	 
	
	
	//------------------------------- MigratiData  Service-----------------------------------------------------------// 
		//-------------------------------------------(YtdBooking)-------------------------------------------------------------------//
			
		public List getProductDetails(String plcode) 
		{
			return bssmigrationdao.getProductDetails(plcode);
		}
		public String getIndustrySector(String column,String value,String wherecolumn,String tablename)
	    {
			 return  bssmigrationdao.getIndustrySector(column,value,wherecolumn,tablename);
	    }
		public List getCustCodeAndCurrency(String customercode) 
		{
			return bssmigrationdao.getCustCodeAndCurrency(customercode);
		}
		public List<Double> getExchangeRate(Integer year,Integer month,String fromcode,String tocode) 
		{
			return bssmigrationdao.getExchangeRate(year,month,fromcode,tocode);
		}
		public boolean saveMigrateRegionData(List regiondata) 
		{		
			return bssmigrationdao.saveMigrateRegionData(regiondata);
		}		
		public List getCustCodeAndCurrencyForNew(String customercode) {
			return bssmigrationdao.getCustCodeAndCurrencyForNew(customercode);
		}
			
		//-------------------------------YtdBookingRegion-------------------------------------------------------//
		
		public List<Integer> getYtdBookingYear() 
		{
			return bssmigrationdao.getYtdBookingYear();
		}
		public List<Integer> getYtdBookingMonth(Integer year, String migartiontime, int changeflag) 
		{
			return bssmigrationdao.getYtdBookingMonth(year,migartiontime,changeflag);
		}
		public List<String> getYtdBookingCountry(Integer year,Integer month, String migartiontime, int changeflag) 
		{
			return bssmigrationdao.getYtdBookingCountry(year,month,migartiontime,changeflag);
		}
		public List<String> getYtdBookingRegion(Integer year,Integer month,String country, String migartiontime, int changeflag) 
		{
			return bssmigrationdao.getYtdBookingRegion(year,month,country,migartiontime,changeflag);
		}
		public  List<Object[]> getYtdBookingSalesman(Integer year,Integer month,String country,String region, String migartiontime, int changeflag) 
		{
			return bssmigrationdao.getYtdBookingSalesman(year,month,country,region,migartiontime,changeflag);
		}
		public List getYtdBookingAmount(Integer year,Integer month,String country,String region,String salesman) 
		{
			return bssmigrationdao.getYtdBookingAmount(year,month,country,region,salesman);
		}

		//----------------------------- (YtdBookingProduct) ------------------------------------------------//
		
		public List getYtdBookingProductCategory(Integer year,Integer month,String country, String migartiontime, int changeflag) 
		{
			return bssmigrationdao.getYtdBookingProductCategory(year,month,country,migartiontime,changeflag);
		}
		public  List<String> getYtdBookingProduct(Integer year,Integer month,String country,String productcategory,String apc, String migartiontime, int changeflag) 
		{
			return bssmigrationdao.getYtdBookingProduct(year,month,country,productcategory,apc,migartiontime,changeflag);
		}
		public List getYtdBookingAmountForProduct(Integer year,Integer month,String country,String productcategory,String product,String apc) 
		{
			return bssmigrationdao.getYtdBookingAmountForProduct(year,month,country,productcategory,product,apc);
		}
		
		//---------------------------------- (YtdBookingIndustry) -------------------------------------------//
		
		public List getYtdBookingIndustrySector(Integer year,Integer month,String country, String migartiontime, int changeflag) 
		{
			return bssmigrationdao.getYtdBookingIndustrySector(year,month,country,migartiontime,changeflag);
		}
		
		public  List<Object[]> getYtdBookingIndustry(Integer year,Integer month,String country,String industrysector,String industrysectorcode, String migartiontime, int changeflag) 
		{
			return bssmigrationdao.getYtdBookingIndustry(year,month,country,industrysector,industrysectorcode,migartiontime,changeflag);
		}
		public List getYtdBookingAmountForIndustry(Integer year,Integer month,String country,String industrysector,String industry,String industrysectorcode,String industrycode) 
		{
			return bssmigrationdao.getYtdBookingAmountForIndustry(year,month,country,industrysector,industry,industrysectorcode,industrycode);
		}

		public void deleteSalesOrder(String salesorder) 
		{
			// TODO Auto-generated method stub
			 bssmigrationdao.deleteSalesOrder(salesorder);
		}

		public List<Object[]> getAmountandAmountusd(String salesorder) {
			// TODO Auto-generated method stub
			return bssmigrationdao.getAmountandAmountusd(salesorder);
		}

		 

		public List getYtdBookingAmount(Integer year, Integer month, String country, String region, String salesmancode,
				String migartiontime, int changeflag) {
			// TODO Auto-generated method stub
			 return bssmigrationdao.getYtdBookingAmount(year,month,country,region,salesmancode,migartiontime,changeflag);
		}

		public List getYtdBookingAmountForProduct(Integer year, Integer month, String country, String productcategory,
				String product, String apc, String migartiontime, int changeflag) {
			// TODO Auto-generated method stub
			 return bssmigrationdao.getYtdBookingAmountForProduct(year,month,country,productcategory,product,apc,migartiontime,changeflag);

		}

		public List getYtdBookingAmountForIndustry(Integer year, Integer month, String country, String industrysector,
				String industry, String industrysectorcode, String industrycode, String migartiontime, int changeflag) 
		{
			return bssmigrationdao.getYtdBookingAmountForIndustry(year,month,country,industrysector,industry,industrysectorcode,industrycode,migartiontime,changeflag);
			 
		}

		public String getIndustrySector1(String column, String value, String wherecolumn, String tablename) {
			// TODO Auto-generated method stub
			  return  bssmigrationdao.getIndustrySector1(column,value,wherecolumn,tablename);
		}

		 

		

		
		public void updateCurrenceyto(String salesorder, String currencey, Double updatedusd, Double localcurrencey, String migartiontime) 
		{
			// TODO Auto-generated method stub
			bssmigrationdao.updateCurrenceyto(salesorder,currencey,updatedusd,localcurrencey,migartiontime);
			
		}

		public String getCurrency(String salesorder) {
			// TODO Auto-generated method stub
			return bssmigrationdao.getCurrency(salesorder);
		}

		public List getAllTheBookingDetailsFromTempTableForProductionScheduler14nov(String migartiontime) {
			// TODO Auto-generated method stub
			return bssmigrationdao.getAllTheBookingDetailsFromTempTableForProductionScheduler14nov(migartiontime);
		}

		public List<Country> getCountriesOnCountrycodes() {
			// TODO Auto-generated method stub
			return bssmigrationdao.getCountriesOnCountrycodes();
		}

		public List<Object[]> getCountries1() {
			// TODO Auto-generated method stub
			return bssmigrationdao.getCountries1();
		}

		public List<ApplicationIndustryCode> getAllApplicationCode() {
			// TODO Auto-generated method stub
			return bssmigrationdao.getAllApplicationCode();
		}

		public List<ApplicationIndustryCode> getAllApplicationCodeName(String applicationcode) {
			// TODO Auto-generated method stub
			return bssmigrationdao.getAllApplicationCodeName(applicationcode);
		}

		public List<CustmerType> getAllCustmerTypes() {
			// TODO Auto-generated method stub
			return bssmigrationdao.getAllCustmerTypes();
		}

		public List<AppCode> getAllPaymentsNamesAppcode() {
			// TODO Auto-generated method stub
			return bssmigrationdao.getAllPaymentsNamesAppcode();
		}

		public List<String> getRegions(String countryCode) {
			return bssmigrationdao.getRegions(countryCode);
		}
		public Double getBookingValueForRegion(String region,String country,Integer year) {
			return bssmigrationdao.getBookingValueForRegion(region,country,year);
		}
		public List getSalesMen(String countryCode,String rcode) {
			return bssmigrationdao.getSalesMen(countryCode,rcode);
		}
		
		public Double getBookingValueForSalesMan(String salesmanCode,String region,String countryCode,Integer year)  {
			return bssmigrationdao.getBookingValueForSalesMan(salesmanCode,region,countryCode,year);
		}

		public List<String> getRegionNmaesFromytdbookingRegion(String countrycode) {
			// TODO Auto-generated method stub
			return bssmigrationdao.getRegionNmaesFromytdbookingRegion(countrycode);
		}

		public List<Double> getOfamountusdfromytdbookingregion(Integer year,
				String regionnanme, String countrycode,String currencyType) {
			// TODO Auto-generated method stub
			return bssmigrationdao.getOfamountusdfromytdbookingregion(year,regionnanme,countrycode,currencyType);
		}
		
		public Double getBookingValueForSalesManCountryWise(String salesmanCode,String region,String countryCode,Integer year,String currencyType)  {
			return bssmigrationdao.getBookingValueForSalesManCountryWise(salesmanCode,region,countryCode,year,currencyType);
		}

		public List<Double> getOfamountusdfromytdbookingregionforBudget(
				Integer year, String countrycode) {
			// TODO Auto-generated method stub
			return bssmigrationdao.getOfamountusdfromytdbookingregionforBudget(year,countrycode);
		}
		
		public List getSalesMenCountryWise(String countryCode,String rcode) {
			return bssmigrationdao.getSalesMenCountryWise(countryCode,rcode);
		}

		public String getRegioncodeFromSalesmanTable(String countrycode, String slcode1) {
			// TODO Auto-generated method stub
			return bssmigrationdao.getRegioncodeFromSalesmanTable(countrycode,slcode1);
		}

		public String getRegionNamefromRegion(String countrycode, Integer regioncode) {
			// TODO Auto-generated method stub
			return bssmigrationdao.getRegionNamefromRegion(countrycode,regioncode);
		}

		



		public List<Object[]> getRegionsandregionids(String countryCode) {
			// TODO Auto-generated method stub
			return bssmigrationdao.getRegionsandregionids(countryCode);
		}

		public List<String> getSalesman1(String countryCode, String regionCode) {
			// TODO Auto-generated method stub
			return bssmigrationdao.getSalesman1(countryCode,regionCode);
		}

		public String getCountryName(String countryCode) {
			// TODO Auto-generated method stub
			return bssmigrationdao.getCountryName(countryCode);
		}

		public String getRegionsandregionids1(String regionCode, String countryname) {
			// TODO Auto-generated method stub
			return bssmigrationdao.getRegionsandregionids1(regionCode,countryname);
		}

		public String getRegionNamefromRegioncode(String countrycode, Integer regionid) {
			// TODO Auto-generated method stub
			return bssmigrationdao.getRegionNamefromRegioncode(countrycode,regionid);
		}

		public String getregionfromRegion(String regionCode, String countryCode) {
			// TODO Auto-generated method stub
			return bssmigrationdao.getregionfromRegion(regionCode,countryCode);
		}

		public List<Object[]> getAllTheYtdProfitDetailsFromTempTable()
        {
	        // TODO Auto-generated method stub
	        return bssmigrationdao.getAllTheYtdProfitDetailsFromTempTable();
        }

		public List<Object[]> getYtdProfitProductDetails(String product)
        {
	        // TODO Auto-generated method stub
	        return bssmigrationdao.getYtdProfitProductDetails(product);
        }

		public List<String> getProductCategoryCode(String pccode)
        {
	        // TODO Auto-generated method stub
	        return bssmigrationdao.getProductCategoryCode(pccode);
        }

		public String getCountryDetails(String string)
        {
	        // TODO Auto-generated method stub
	        return bssmigrationdao.getCountryDetails(string);
        }

		public String getCountryCode(String country)
        {
	        // TODO Auto-generated method stub
	        return bssmigrationdao.getCountryCode(country);
        }

		public List<Integer> getYtdProfitYear()
        {
	        // TODO Auto-generated method stub
	        return bssmigrationdao.getYtdProfitYear();
        }

		public List<Integer> getYtdProfitMonth(Integer year)
        {
	        // TODO Auto-generated method stub
	        return null;
        }

		public List<String> getYtdProfitCountry(Integer year, Integer month)
        {
	        // TODO Auto-generated method stub
	        return null;
        }

		public List<String> getYtdProfitProductCategory(Integer year, Integer month, String country)
        {
	        // TODO Auto-generated method stub
	        return null;
        }

		public List<Object[]> getYtdProfitProduct(Integer year, Integer month, String country, String productcategory)
        {
	        // TODO Auto-generated method stub
	        return null;
        }

		public List<Object[]> getYtdProfitAmountForProduct(Integer year, Integer month, String country, String productcategory,
                String string)
        {
	        // TODO Auto-generated method stub
	        return null;
        }
		
	
		

		public Double getBudgetforSalesMan(String salesman, String countryname,
				Integer year) {
			// TODO Auto-generated method stub
			return bssmigrationdao.getBudgetforSalesMan(salesman,countryname,year);
		}

		public Double getBudgetValuecountrywise(String countryCode,
				String salesman, int parseInt) {
			// TODO Auto-generated method stub
			return bssmigrationdao.getBudgetValuecountrywise(countryCode,salesman,parseInt);
		}

		 

		public List<SalesManIndexMaster> getSalemanIndexmasterData(
				String countrycode, String salesmanindexcustmercode,
				String customercode) {
			// TODO Auto-generated method stub
			return bssmigrationdao.getSalemanIndexmasterData(countrycode,salesmanindexcustmercode,customercode);
		}

		public List<Object[]> getRegionNameBasedOnRegioncode(String regioncode,
				String countrycode) {
			// TODO Auto-generated method stub
			return bssmigrationdao.getRegionNameBasedOnRegioncode(regioncode,countrycode);
		}
		
}
