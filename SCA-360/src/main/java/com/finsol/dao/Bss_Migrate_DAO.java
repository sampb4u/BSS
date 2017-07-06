package com.finsol.dao;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.apache.poi.hssf.util.Region;
import org.hibernate.JDBCException;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.finsol.model.AppCode;
import com.finsol.model.ApplicationIndustryCode;
import com.finsol.model.Country;
import com.finsol.model.CustmerType;
import com.finsol.model.SalesManIndexMaster;

@Repository("Bss_Migrate_DAO")
@Transactional
public class Bss_Migrate_DAO {
	
	private static final Logger logger = Logger.getLogger(Bss_Migrate_DAO.class);
	
	@Autowired	
	private HibernateDao hibernateDao;

	public Integer getMaxValue() 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query =session.createSQLQuery("select max(id) from test");
		 List<Object> list = query.list();
		 int k=0;
		 for(Object l:list)
		 {
			 k=(Integer)l;
		 }
		 return k;
		 
	}

	public List  getAllTheBookingDetailsFromTempTable(String migartiontime) {
		Session session=hibernateDao.getSessionFactory().openSession();
		String sql="select *   from DailyBookingTemp  where flag = 'true' and ordertype != 6 and migrationtime='"+migartiontime+"' order by slno";
		//String sql="select *   from DailyBookingTemp";
		List  tempdata=hibernateDao.findBySqlCriteria(sql);
		
		return tempdata;
	}
	
	public List  getAllTheBookingDetailsFromTempTableForProductionScheduler(String migartiontime) {
		Session session=hibernateDao.getSessionFactory().openSession();
		String sql="select *   from DailyBookingTemp  where  productionschedularstatus=0 order by slno";
		//String sql="select *   from DailyBookingTemp";
		List  tempdata=hibernateDao.findBySqlCriteria(sql);
		
		return tempdata;
	}

	public List  getAllTheBookingDetailsFromTempTableForServiceScheduler(String migartiontime) {
		Session session=hibernateDao.getSessionFactory().openSession();
		String sql="select *   from DailyBookingTemp  where migrationtime='"+migartiontime+"' order by slno";
		//String sql="select *   from DailyBookingTemp";
		List  tempdata=hibernateDao.findBySqlCriteria(sql);
		
		return tempdata;
	}
	

	public List<Integer> gettingBookingBudgetYears() 
	{
		
		List<Integer> year=null;
		
		try
		{		
			Session session=hibernateDao.getSessionFactory().openSession();
			SQLQuery query= session.createSQLQuery("select distinct year from  ytdbookingregion where year > 2012 ORDER BY year");
			year=query.list();
		 
		}
		catch(Exception e)
		{
			logger.error("Error is occured due to the follwing"+e.getMessage());
			System.out.println("Error occured due to the follwing"+e.getMessage());
			
		}
		return year;
	}

	public List<Object[]> getCountries() 
	{		
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select country,budgclr,bokclr from country where countrycode  not in ('HK','INT') and status=0  ORDER BY country_order ");
		List<Object[]> country=query.list();
		return country;
	}
	
	
	public List<Object[]> getCountries1() 
	{		
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select country,budgclr,bokclr from country where countrycode   not in ('HK','BG') and status=0  ORDER BY country_order desc");
		List<Object[]> country=query.list();
		return country;
	}
	
	public List<Object[]> getCountriesProductYTD() 
	{		
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select country,budgclr,bokclr from country where countrycode!='HK' ORDER BY country_order");
		List<Object[]> country=query.list();
		return country;
	}
	
	public List<Object[]> getProducts() 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select product,productcode from Product");
		List<Object[]> productList=query.list();
		return productList;
	}
	public List<Object[]> getIndustrieSectors() 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select distinct industrysector,industrysectorcode from YtdBookingIndustry");
		List<Object[]> productList=query.list();
		return productList;
	}
	
	public List<Object[]> getIndustriesByIndustrySector(String industrysectorname) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select distinct  application,applicationcode from YtdBookingIndustry where industrycode='"+industrysectorname+"'");
		List<Object[]> productList=query.list();
		return productList;
	}

	public Double getBookingValue(String countryname, Integer year) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		Double bVal=0.00;
		try
		{
			SQLQuery query= session.createSQLQuery("select sum(amountusd) from YtdBookingRegion where country='"+countryname+"' and year="+year+"");
			List<Double> values=query.list();
			 
			for(Double val:values)
			{
				
				bVal=val;
			}
			if(bVal==null)
			{
				bVal=0.0;
				
			}

			 return bVal;
		}catch(Exception e)
		{
			System.out.println("this is the error message"+e.getMessage());
			return 0.00;
		}
		
	}
	
	public Double getBookingValueForProductShare(String poductname, Integer year) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		Double bVal=0.00;
		try
		{
			Query query= session.createQuery("select sum(bookingamount) from YtdBookingProduct where product='"+poductname+"' and year="+year+"");
			List values=query.list();
			
			bVal=(Double)values.get(0);

			if(bVal!=null)
				return bVal;
			else
				return 0.00;
		}catch(Exception e)
		{
			System.out.println("this is the error message"+e.getMessage());
			return 0.00;
		}	
	}
	
	
	
	
	public List getBookingValueForProductShareOpt(Integer year,String counrtyname) 
	{
		String sql = null;
		
		if("NA".equalsIgnoreCase(counrtyname))
			sql = "select sum(amountusd) as value,product as name from YtdBookingProduct where year="+year+"  group by product";
		else
			sql = "select sum(bookingamount) as value,product as name from YtdBookingProduct where year="+year+" and country='"+counrtyname+"' group by product";
		
        List reqDateList=hibernateDao.findBySqlCriteria(sql);
        if(reqDateList.size()>0 && reqDateList!=null)
        	return reqDateList;
        else
        	return null;  
	}
	public Double getBookingValueForIndustrySectorShare(String industrysectorname, Integer year) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		Double bVal=0.00;
		try
		{
			Query query= session.createQuery("select sum(bookingamount) from YtdBookingIndustry where industrysectorcode='"+industrysectorname+"' and year="+year+"");
			List values=query.list();			
			bVal=(Double)values.get(0);

			if(bVal!=null)
				return bVal;
			else
				return 0.00;
		}catch(Exception e)
		{
			System.out.println("this is the error message"+e.getMessage());
			return 0.00;
		}	
	}
	
	/*public List getBookingValueForIndustrySectorShareOpt(Integer year) 
	{
		String sql =null;
		//if(year==2016)
			sql = "select sum(amountusd)  as value,industrycode as code,industry  as name,'#/app/SCA_bookingByIndustry' AS link,year  from YtdBookingIndustry where year="+year+"  group by  year,industry,industrycode";
		//else
		//	sql = "select sum(bookingamount)  as value,industrysectorcode as code,industrysector as name  from YtdBookingIndustry where year="+year+" group by  industrysector,industrysectorcode;";
		
		
		List reqDateList=hibernateDao.findBySqlCriteria(sql);
        if(reqDateList.size()>0 && reqDateList!=null)
        	return reqDateList;
        else
        	return null;  
	}
	
	public List getBookingValueForIndustrySectorShareTableData(String ISCode) 
	{
		String sql =null;
		//if(year==2016)
		if("All".equalsIgnoreCase(ISCode))
			sql = "select industrycode  as code,industry  as name,sum(amountusd)  as value,year  from YtdBookingIndustry where year in(2017,2016,2015,2014)  group by  year,industry,industrycode  order by industry";
		else
			sql = "select industry as name,sum(amountusd)  as value,year  from YtdBookingIndustry where year in(2017,2016,2015,2014) and industrysectorcode='"+ISCode+"' group by  year,industry order by name";
			//else
		//	sql = "select sum(bookingamount)  as value,industrysectorcode as code,industrysector as name  from YtdBookingIndustry where year="+year+" group by  industrysector,industrysectorcode;";
		
		
		List reqDateList=hibernateDao.findBySqlCriteria(sql);
        if(reqDateList.size()>0 && reqDateList!=null)
        	return reqDateList;
        else
        	return null;  
	}
	*/
	
	public List getBookingValueForIndustrySectorShareOpt(Integer year) 
	{
		String sql =null;
		//if(year==2016)
			sql = "select sum(amountusd)  as value,industrycode  as code,industry  as name,'#/app/SCA_bookingByIndustry' AS link,year  from YtdBookingIndustry where year="+year+"  group by  year,industrycode,industry";
		//else
		//	sql = "select sum(bookingamount)  as value,industrysectorcode as code,industrysector as name  from YtdBookingIndustry where year="+year+" group by  industrysector,industrysectorcode;";
		
		
		List reqDateList=hibernateDao.findBySqlCriteria(sql);
        if(reqDateList.size()>0 && reqDateList!=null)
        	return reqDateList;
        else
        	return null;  
	}




public List getBookingValueForIndustrySectorShareTableData(String ISCode) 
	{
		String sql =null;
		//if(year==2016)
		if("All".equalsIgnoreCase(ISCode))
			sql = "select industrycode  as code,industry  as name,sum(amountusd)  as value,year  from YtdBookingIndustry where year in(2017,2016,2015,2014)  group by  year,industry,industrycode  order by industry";
		else
			sql = "select application as name,sum(amountusd)  as value,year  from YtdBookingIndustry where year in(2017,2016,2015,2014) and industrycode='"+ISCode+"' group by  year,application order by application";
			//else
		//	sql = "select sum(bookingamount)  as value,industrysectorcode as code,industrysector as name  from YtdBookingIndustry where year="+year+" group by  industrysector,industrysectorcode;";
		
		
		List reqDateList=hibernateDao.findBySqlCriteria(sql);
        if(reqDateList.size()>0 && reqDateList!=null)
        	return reqDateList;
        else
        	return null;  
	}



	public List getBookingValueForIndustrySectorShareTableDataByCountry(String ISCode,String countrycode) 
	{
		String sql =null;
		//if(year==2016)
		if("All".equalsIgnoreCase(ISCode))
			sql = "select industrysector as name,sum(bookingamount)  as value,industrysectorcode as code,year  from YtdBookingIndustry where year in(2017,2016,2015,2014) and country=(select distinct country from Country where countrycode='"+countrycode+"') group by  year,industrysector,industrysectorcode order by name";
		else
			sql = "select industry as name,sum(bookingamount)  as value,industrysectorcode as code ,year  from YtdBookingIndustry where year in(2017,2016,2015,2014) and industrysectorcode='"+ISCode+"' and country=(select distinct country from Country where countrycode='"+countrycode+"')group by  year,industry,industrysectorcode order by name";
			//else
		//	sql = "select sum(bookingamount)  as value,industrysectorcode as code,industrysector as name  from YtdBookingIndustry where year="+year+" group by  industrysector,industrysectorcode;";
		
		
		List reqDateList=hibernateDao.findBySqlCriteria(sql);
        if(reqDateList.size()>0 && reqDateList!=null)
        	return reqDateList;
        else
        	return null;  
	}
	
	public Double getBookingValueForIndustryShare(String industryname, Integer year) 
	{	
		Session session=hibernateDao.getSessionFactory().openSession();
		Double bVal=0.00;
		try
		{
			SQLQuery query= session.createSQLQuery("select  coalesce(sum(amountusd),0)   from YtdBookingIndustry where applicationcode ='"+industryname+"' and year="+year+"");
			List<Double> values=query.list();			
			 for(Double d:values)
			 {
				 bVal=d;
			 }
			 return bVal;
		}catch(Exception e)
		{
			System.out.println("this is the error message"+e.getMessage());
			return 0.00;
		}	
	}
	
	/*public Double getBudgetValue(String countryname, int year) 
	{
		float j = 0;
		Double p=0.0;
		String monthString="";
		try
		{
			Calendar now = Calendar.getInstance();
		    int currMonth=now.get(Calendar.MONTH) + 1;
		    for(int i=1;i<=currMonth;i++)
		    	monthString=monthString+"+month"+i;
		    
		    monthString=monthString.substring(1,monthString.length());
		    	
		    	
		    //System.out.println("Current Year is : " + now.get(Calendar.YEAR));
		    // month start from 0 to 11
		   // System.out.println("Current Month is : " + (now.get(Calendar.MONTH) + 1));
		    //System.out.println("Current Date is : " + now.get(Calendar.DATE));
		    
		    
			Session session=hibernateDao.getSessionFactory().openSession();
			
			SQLQuery query= session.createSQLQuery("select sum("+monthString+") from YearlyBudget where country='"+countryname+"' and year="+year+"");
			List<Double> budget=query.list();
			 
			for(Double b:budget)
			{
				 p=b ;
			}
			
			if(p==null)
			{
				p=0.0;
			}
		
		}catch(Exception e)
		{
			logger.error("This is log message error is due to the "+e.getMessage());
		}
		return p;
	}
	*/
	
	public Double getBudgetValue(String countryname, int year) 
	{
		float j = 0;
		Double p=0.0;
		String monthString="";
		try
		{
			Calendar now = Calendar.getInstance();
		    int currMonth=now.get(Calendar.MONTH) + 1;
		    int curYear=now.get(Calendar.YEAR);
		    if(curYear==year)
		    {
		    	for(int i=1;i<=currMonth;i++)
		    		monthString=monthString+"+month"+i;
		    }
		    else
		    {
		    	for(int i=1;i<=12;i++)
		    		monthString=monthString+"+month"+i;
		    	
		    }
		    
		    monthString=monthString.substring(1,monthString.length());
		    	
		    	
		    //System.out.println("Current Year is : " + now.get(Calendar.YEAR));
		    // month start from 0 to 11
		   // System.out.println("Current Month is : " + (now.get(Calendar.MONTH) + 1));
		    //System.out.println("Current Date is : " + now.get(Calendar.DATE));
		    
		    
			Session session=hibernateDao.getSessionFactory().openSession();
			
			SQLQuery query= session.createSQLQuery("select sum("+monthString+") from YearlyBudget where country='"+countryname+"' and year="+year+"");
			List<Double> budget=query.list();
			 
			for(Double b:budget)
			{
				 p=b ;
			}
			
			if(p==null)
			{
				p=0.0;
			}
		
		}catch(Exception e)
		{
			logger.error("This is log message error is due to the "+e.getMessage());
		}
		return p;
	}
	
	
	
	
	
	public float getBookingValue(String countryname, String catageoryname) 
	{
		float f=0;
		try
		{
			Session session=hibernateDao.getSessionFactory().openSession();
			SQLQuery query= session.createSQLQuery("select sum(bookingamount) from YtdBookingProduct where  country='"+countryname+"' and productcategory='"+catageoryname+"' and year=2016");
			logger.info(query);
			List<Double> products=query.list();
			
			if(products.contains(null))
			{
				
				f=0;
			}
			 
			else
			{
				for(Double d:products)
				{
					f=d.floatValue();					
				}			
			}	
		
		}catch(Exception e)
		{
			logger.error("getBookingValue() getBookingValue() getBookingValue()   getBookingValue() "+e.getMessage());
		}
		return f;
	}
	
	public float getBudgetValue(String countryname, String catagoreyname) 
	{
		float f=0;
		try
		{
			Session session=hibernateDao.getSessionFactory().openSession();
			SQLQuery query= session.createSQLQuery("select sum(yeartotal)  from YearlyBudget  where  country='"+countryname+"' and productcategory='"+catagoreyname+"' and year=2016");
			List<Double> products=query.list();
			
			if(products.contains(null))
			{				
				f=0;
			}
			 
			else
			{
				for(Double d:products)
				{
					f=d.floatValue();					
				}
			}
		}catch(Exception e)
		{
			logger.error("getBudgetValue() getBudgetValue() getBudgetValue()   getBudgetValue() "+e.getMessage());
		}			 
		return f;		 
	}
	
	public List<Object[]> getAllCatagories() 
	{
		List<Object[]> catagories=null;		
		try
		{
			Session session=hibernateDao.getSessionFactory().openSession();
			SQLQuery query= session.createSQLQuery("select productcategorycode,productcategory from productCategory");
			catagories=query.list();
		}catch(Exception e)
		{
			logger.error("getAllCatagories() getAllCatagories() getAllCatagories() getAllCatagories() getAllCatagories() getAllCatagories()"+e.getMessage());
		}		
		return catagories;
	}

	public List<String> getAllProductsOnCatgeorycode(String categoreycode) {
		List<String> products=null;
		try
		{
			Session session=hibernateDao.getSessionFactory().openSession();
			SQLQuery query= session.createSQLQuery("select product from product where pccode ='"+categoreycode+"'");
			products=query.list();
		}catch(Exception e)
		{
			logger.error("getAllProductsOnCatgeorycode() getAllProductsOnCatgeorycode() getAllProductsOnCatgeorycode()   getAllProductsOnCatgeorycode() "+e.getMessage());
		}
		return products;
	}
	
	public float getBookingsForProduct(String product, String countryname, String catagoreyname) 
	{
		float f=0;
		try{
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select sum(bookingamount)  from YtdBookingProduct  where  country='"+countryname+"' and productcategory='"+catagoreyname+"' and year=2016 and product='"+product+"'");
		List<Double> products=query.list();
		
		
		if(products.contains(null))
		{
			f=0;
		}
		
		else
		{
		 
			for(Double d:products)
			{
				f=d.floatValue();				
			}
		}
		
		}catch(Exception e)
		{
			logger.error("getBookingsForProduct() getBookingsForProduct()  getBookingsForProduct()   getBookingsForProduct() "+e.getMessage());
		}
		return f;		
	}
	
	public List getMonths() 
	{		
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select distinct bookingmonth from YtdBooking where bookingyear =2016 ORDER BY bookingmonth");
		List monthList=query.list();
		
		return monthList;
	}
	
	public Double getBookingValueByMonth(Integer monthid ,Integer year) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		Double bVal=0.00;
		try
		{
			Query query= session.createQuery("select sum(amount) from YtdBooking where bookingmonth="+monthid+" and bookingyear="+year+"");
			List values=query.list();			
			bVal=(Double)values.get(0);

			if(bVal!=null)
				return bVal;
			else
				return 0.00;
		}catch(Exception e)
		{
			System.out.println("this is the error message"+e.getMessage());
			return 0.00;
		}	
	}
	
	public Double getSalesValueByMonth(Integer monthid ,Integer year) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		Double bVal=0.00;
		try
		{
			Query query= session.createQuery("select sum(invamountusd) from YTDSales where invoicemonth="+monthid+" and invoiceyear="+year+"");
			List values=query.list();			
			bVal=(Double)values.get(0);
			
			if(bVal!=null)
				return bVal;
			else
				return 0.00;
		}catch(Exception e)
		{
			System.out.println("this is the error message"+e.getMessage());
			return 0.00;
		}	
	}
		public Double getCWQuarterlyBookingValue(String quarterlyBooking,Integer year) 
        {
		Session session = hibernateDao.getSessionFactory().openSession();
		Double bVal = 0.00;

		SQLQuery query = session.createSQLQuery("select sum(amountusd)  from YtdBookingRegion  where month in("
				+ quarterlyBooking + ") and year=" + year + "");
		List<Double> values = query.list();
		for (Double val : values) {
			bVal = val;
		}
		return bVal;
}
	
	public Double getBookingValueByYear(Integer year) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		Double bVal=0.00;
		try
		{
			Query query= session.createQuery("select sum(bookingvalue) from YearlyHistory where year="+year+"");
			List values=query.list();			
			bVal=(Double)values.get(0);

			if(bVal!=null)
				return bVal;
			else
				return 0.00;
		}catch(Exception e)
		{
			System.out.println("this is the error message"+e.getMessage());
			return 0.00;
		}	
	}

	// created by siva reddy
	public List<Integer> getDistinctMonthNumbers() 
	{
		List<Integer> values=null;
		try
		{		
			Session session=hibernateDao.getSessionFactory().openSession();
			SQLQuery query= session.createSQLQuery("select distinct month from ytdbookingregion where year=2016 ORDER BY month");
			values=query.list();		
		}
		catch(Exception e)
		{
			logger.error("getDistinctMonthNumbers() getDistinctMonthNumbers()  getDistinctMonthNumbers()   getDistinctMonthNumbers() "+e.getMessage());		
	
		}
		return values;
	}

	public Double getBudgetvaluesforMonthleyYtd(int i, String countryname) 
	{
		
		List<Double> values=null;
		Double f=0.0;
		try
		{
			Session session=hibernateDao.getSessionFactory().openSession();
			SQLQuery query= session.createSQLQuery("select sum(month"+i+") from yearlybudget where year=2016 and country='"+countryname+"'");
			 values=query.list();	
			 if(values.contains(null))
			 {				 
				 f=0.0;
			 }		 
			 else
			 {
				 for(Double d:values)
				 {
					 f=d;					 
				 }
			 }
		}catch(Exception e)
		{
			logger.error(" getBudgetvaluesforMonthleyYtd() getBudgetvaluesforMonthleyYtd() getBudgetvaluesforMonthleyYtd() getBudgetvaluesforMonthleyYtd() "+e.getMessage());
			
		}
		return f;
	}

	public Double getBookingvaluesforMonthleyYtd(int i, String countryname) {

		List<Double> values=null;
		Double f=0.0;
		try
		{
			Session session=hibernateDao.getSessionFactory().openSession();
			SQLQuery query= session.createSQLQuery("select sum(bookingamount) from ytdbookingregion where year=2016 and country='"+countryname+"' and month="+i+"");
			values=query.list();	
			 if(values.contains(null))
			 {
				 
				 f=0.0;
			 }
			 else
			 {				 
				 for(Double d:values)
				 {
					 f=d;
					 
				 }
			 }
		}
		catch(Exception e)
		{
			
			logger.error("getBookingvaluesforMonthleyYtd()  getBookingvaluesforMonthleyYtd()  getBookingvaluesforMonthleyYtd() getBookingvaluesforMonthleyYtd() "+e.getMessage());
						
		}
	 
		return f;
	}
	
	
	//  1-7-2016------------------------->craeted by siva reddy----------------------------->
	
	public List<Object[]> getAllDetailsAboutCatageory()
	{
		List<Object[]> values=null;
		
		try
		{
			Session session=hibernateDao.getSessionFactory().openSession();
			SQLQuery query= session.createSQLQuery("select productcategory,bokclr,budgclr from productcategory");
			values=query.list();	
			
		}catch(Exception e)
		{			
			logger.error("getAllDetailsAboutCatageory()  getAllDetailsAboutCatageory()  getAllDetailsAboutCatageory() getAllDetailsAboutCatageory() "+e.getMessage());	
		
		}
		return values;
	}

	public Double getBudgetvaluesforMonthleyYtdtocatageorey(int i, String catageoryname, String country1) 
	{
		List<Double> values=null;
		Double f=0.0;
		try
		{
			Session session=hibernateDao.getSessionFactory().openSession();
			SQLQuery query= session.createSQLQuery("select sum(month"+i+") from yearlybudget where year=2016 and country='"+country1+"' and productcategory='"+catageoryname+"'");
			values=query.list();	
			 if(values.contains(null))
			 {
				 
				 f=0.0;
			 }
			 
			 else
			 {
				 for(Double d:values)
				 {
					 f=d;
					 
				 }
			 }
		}
		catch(Exception e)
		{
			logger.error("getBudgetvaluesforMonthleyYtdtocatageorey()  getBudgetvaluesforMonthleyYtdtocatageorey() getBudgetvaluesforMonthleyYtdtocatageorey() getBudgetvaluesforMonthleyYtdtocatageorey() "+e.getMessage());
			
		}
		return f;
	}

	public Double getBookingvaluesforMonthleyYtdToCatageorey(int i, String catageoryname, String country1) {
		
		List<Double> values=null;
		Double f=0.0;
		try
		{
			Session session=hibernateDao.getSessionFactory().openSession();
			SQLQuery query= session.createSQLQuery("select sum(bookingamount) from YtdBookingProduct  where year=2016 and country='"+country1+"' and month="+i+" and productcategory='"+catageoryname+"'");
			 values=query.list();	
			 if(values.contains(null))
			 {
				 
				 f=0.0;
			 }
			 else
			 {			 
				 for(Double d:values)
				 {
					 f=d;
					 
				 }
			 }
		}
		catch(Exception e)
		{			
			logger.error("getBookingvaluesforMonthleyYtdToCatageorey()  getBookingvaluesforMonthleyYtdToCatageorey()  getBookingvaluesforMonthleyYtdToCatageorey() getBookingvaluesforMonthleyYtdToCatageorey() "+e.getMessage());
						
		}
	 
		return f;
	}

	public List<Object[]> getAllProductsBasedOnCatageoreyName(String catageorey1)
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select product,bokclr from product  where  pccode='"+catageorey1+"'");
		List<Object[]> values=query.list();
		return values;
	}

	public Double getproductValue(Integer integer, String country1, String productnmae) {
		
		
		List<Double> values=null;
		Double f=0.0;
		try{
			Session session=hibernateDao.getSessionFactory().openSession();
			SQLQuery query= session.createSQLQuery("select sum(bookingamount) from YtdBookingProduct  where year=2016 and country='"+country1+"' and month="+integer+" and product='"+productnmae+"'");
			 values=query.list();	
			 if(values.contains(null))
			 {				 
				 f=0.0;
			 }
			 else
			 {			 
				 for(Double d:values)
				 {
					 f=d;
					 
				 }
			 }
		}
		catch(Exception e)
		{			
			logger.error("getBookingvaluesforMonthleyYtdToCatageorey()  getBookingvaluesforMonthleyYtdToCatageorey()  getBookingvaluesforMonthleyYtdToCatageorey() getBookingvaluesforMonthleyYtdToCatageorey() "+e.getMessage());
						
		}
	 
		return f;
		 
	}

	
	public Map getOTDPie() 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		try
		{
			String SqlQuery1="select count(*) FROM YTDSales where DATEDIFF(day,invoicedate,reqdeliverydate) >=0";
			String SqlQuery2="select count(*) FROM YTDSales where DATEDIFF(day,invoicedate,reqdeliverydate) between 7 and 14";
			String SqlQuery3="select count(*) FROM YTDSales where DATEDIFF(day,invoicedate,reqdeliverydate) between 14 and 21";
			String SqlQuery4="select count(*) FROM YTDSales where DATEDIFF(day,invoicedate,reqdeliverydate) > 21";
			String[] SqlQuery={SqlQuery1,SqlQuery2,SqlQuery3,SqlQuery4};
			HashMap<Integer,Long> hm=new HashMap<Integer,Long>();
			for(int i=0;i<4;i++)
			{				
				Query query= session.createQuery(SqlQuery[i]);
				List values=query.list();			
				Long bVal=(Long)values.get(0);
				hm.put(i, bVal);		

			}
			
			return hm;
			
		}catch(Exception e)
		{
			System.out.println("this is the error message"+e.getMessage());
			return null;
		}	
	}
	
	
	public List getRequestDate()
    {
		String sql = "SELECT productline as label,count(*) as value  FROM YTDSales where dayofjobclose<=reqdeliverydate group by productline;";
        List reqDateList=hibernateDao.findBySqlCriteria(sql);
        if(reqDateList.size()>0 && reqDateList!=null)
        	return reqDateList;
        else
        	return null;        
    }
	

	public List<String> getVendorNames() 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select distinct vendorname from YTDSales");
		List<String> values=query.list();
		
		return values;
	}

	public List<String> getproductlines() {
		
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select distinct productline  from YTDSales");
		List<String> values=query.list();
		return values;
	}

	public Double getinqty(String product, String vendors) 
	{
		Double d=0.0;
		try
		{		
			Session session=hibernateDao.getSessionFactory().openSession();
			SQLQuery query= session.createSQLQuery("select sum(invqty)  from YTDSales where vendorname='"+vendors+"' and  productline='"+product+"' and invoiceyear=2016");
			List<Double> values=query.list();
			if(values.contains(null))
			{
				d=0.0;
				
			}
			else
			{
				for(Double value:values)
				{
					d=value;
				}
			}
		}
		catch(Exception e)
		{
			logger.error("error is   due to the "+e.getMessage());
			
		}
		return d;
	}

	public Double getamountusd(String product, String vendors) 
	{
		
		Double d=0.0;
		try
		{		
			Session session=hibernateDao.getSessionFactory().openSession();
			SQLQuery query= session.createSQLQuery("select sum(invamountusd)  from YTDSales where vendorname='"+vendors+"' and  productline='"+product+"' and invoiceyear=2016");
			List<Double> values=query.list();
			if(values.contains(null))
			{
				d=0.0;
				
			}
			else
			{
				for(Double value:values)
				{
					d=value;
				}
			}
		}
		catch(Exception e)
		{
			logger.error("error is   due to the "+e.getMessage());
			
		}
		return d;
		 
	}
		
	
	public List getAverageLeadProdType() 
	{
		HashMap finalMap=null;
		ArrayList finalList=new ArrayList();
		Session session=hibernateDao.getSessionFactory().openSession();
		try
		{
			String SqlQuery1="SELECT sum(DATEDIFF(day,invoicedate,reqdeliverydate)/nullif(invqty,0)) as value,productline FROM [bssdb].[dbo].[YTDSales] group by productline;";

			List fList=hibernateDao.findBySqlCriteria(SqlQuery1);
			
			for(int i=0;i<fList.size();i++)
			{
				finalMap=new HashMap();
				Map rlMap=(Map)fList.get(i);
				Double rbal=(Double)rlMap.get("value");
				String pLine=(String)rlMap.get("productline");
				String SqlQuery2="select count(*) as value,productline from YTDSales where productline='"+pLine+"' group by productline";
				List sList=hibernateDao.findBySqlCriteria(SqlQuery2);
				Map rltMap=(Map)sList.get(0);
				Integer count=(Integer)rltMap.get("value");
				Double fvalue=rbal/count;
				finalMap.put("label",pLine);
				finalMap.put("value",fvalue);
				finalList.add(finalMap);	
			}
			return finalList;
			
		}catch(Exception e)
		{
			System.out.println("this is the error message"+e.getMessage());
			return null;
		}	
	}
	
	public List<Object[]> getBudgetofallmonths() {
		
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select country, sum(month1),sum(month2),sum(month3),sum(month4),sum(month5),sum(month6),sum(month7),sum(month8),sum(month9),sum(month10),sum(month11),sum(month12) from YearlyBudget where country in(select country from country where country <> 'HONGKONG') and year=2016 group by country");
		List<Object[]> values=query.list();
		// TODO Auto-generated method stub
		return values;
		 
	}

	public List<Object[]> getBookingsOfMonthley(String countryname) {
		// TODO Auto-generated method stub
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select sum(bookingamount),month from ytdbookingregion where year=2016 and country = '"+countryname+"'  group by month order by month");
		List<Object[]> values=query.list();
		// TODO Auto-generated method stub
		return values;
		 
	}
	
	public List<Object[]> getAllcatagoriesBasedOncountry(String country1) {
		// TODO Auto-generated method stub
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery(" select productcategory,coalesce(sum(month1), 0),coalesce(sum(month2), 0),coalesce(sum(month1), 0),coalesce(sum(month1), 0),coalesce(sum(month3), 0),coalesce(sum(month4), 0),coalesce(sum(month5), 0),coalesce(sum(month6), 0),coalesce(sum(month7), 0),coalesce(sum(month8), 0),coalesce(sum(month9), 0),coalesce(sum(month10), 0),coalesce(sum(month11), 0),coalesce(sum(month1), 0),coalesce(sum(month12),0) from YearlyBudget where country ='"+country1+"' and year=2016 group by productcategory");
		List<Object[]> values=query.list();
		// TODO Auto-generated method stub
		return values;
	}

	public List<Object[]> getbookingofproductcatagories(String country1, String catageoryname) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select coalesce(sum(bookingamount),0), month from YtdBookingProduct where year=2016 and country = '"+country1+"' and  ProductCategory='"+catageoryname+"'   group by month order by month ");
		List<Object[]> values=query.list();
		// TODO Auto-generated method stub
		return values;
		 
	}
	
	public List<Object[]> getProductTypeValues() 
	{		
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select productline,submodel,sum(invamountusd) from YTDSales where  invoiceyear=2016 and    submodel <> 'NA'  group by productline,submodel Order by productline,submodel");
		List<Object[]> values=query.list();

		return values;
	}
	
	public List<Object[]> vendorsbookingwithproduc(String product) {
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select vendorname,sum(invqty) from YTDSales where productline='"+product+"'  group by vendorname");
		List<Object[]> values=query.list();
		// TODO Auto-generated method stub
		return values;
	}

	public List<Object[]> getsunofvendorsusd(String product) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select vendorname,sum(invamountusd) from YTDSales where productline='"+product+"'  group by vendorname");
		List<Object[]> values=query.list();
		// TODO Auto-generated method stub
		return values;
		
		 
	}
	
	public List<Object[]> getcountriesbookingsoncatagorey(String catageoryname) {
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select country,(sum(invoicedamount)- sum(totalcost))*100/sum(invoicedamount) from YtdProfit where pccode='"+catageoryname+"' group by country");
		List<Object[]> values=query.list();
		// TODO Auto-generated method stub
		return values;
		 
	}

	public List<Object[]> getAllProductsBasedOnCatageoreyNameforcastdrilldown(String catageorey1, String country) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select product,(sum(invoicedamount)- sum(totalcost))*100/sum(invoicedamount) from YtdProfit where pccode='"+catageorey1+"' and country='"+country+"' group by product");
		List<Object[]> values=query.list();
		// TODO Auto-generated method stub
		return values;
		 
	}
	
	public Double getbacklogofpreviousyear(int i) {
		Double k=0.0;
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select coalesce(sum(ordervalue),0) from  YtdOpenOrdersByMonth  where  year="+i+"");
		List<Double> values=query.list();
		for(Double d :values)
		{
			k=d;
			
		}
		// TODO Auto-generated method stub
		return k;
		
	}

	public Double getbacklogofpreviousyear(int i, int year) {
		// TODO Auto-generated method stub
		Double k=0.0;
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select coalesce(sum(ordervalue),0) from  YtdOpenOrdersByMonth  where  month="+i+" and year="+year+"");
		List<Double> values=query.list();
		for(Double d :values)
		{
			k=d;
			
		}
		// TODO Auto-generated method stub
		return k;
		
	}

	public Double getamountfromcurrentyearinytdsales(int i, int year) {
		// TODO Auto-generated method stub
		Double k=0.0;
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select coalesce(sum(invamountusd),0) from  YTDSales  where  invoicemonth="+i+" and invoiceyear="+year+"");
		List<Double> values=query.list();
		for(Double d :values)
		{
			k=d;
			
		}
		// TODO Auto-generated method stub
		return k;
	}

	public Double getamountfromcurrentyearinytdsalesforrequired(int i, int year) 
	{
		Double k=0.0;
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select coalesce(sum(invamountusd),0) from  YTDSales  where  reqdeliverymonth="+i+" and reqdeliveryyear="+year+"");
		List<Double> values=query.list();
		for(Double d :values)
		{
			k=d;
			
		}
		// TODO Auto-generated method stub
		return k;
		 
	}

	public Double getamountfromcurrentyearinytdsalesforrequired(int year) {
		// TODO Auto-generated method stub
		Double k=0.0;
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select coalesce(sum(ordervalue),0)  from  YtdOpenOrdersByMonth  where  year <> "+year+"");
		List<Double> values=query.list();
		for(Double d :values)
		{
			k=d;
			
		}
		// TODO Auto-generated method stub
		return k;
	}

	public List<String> getVendorNamesYtdSales2() {
	 
		
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select distinct vendorname from YTDSales2  where status='True'");
		List<String> values=query.list();
		
		return values;
	}

	public List<Object[]> vendorsbookingwithproducwithYtdSales2(String product) {
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select vendorname,sum(invqty) from YTDSales2 where productline='"+product+"' and  status='true'  group by vendorname");
		List<Object[]> values=query.list();
		// TODO Auto-generated method stub
		return values;
	}

	public List<Object[]> getsunofvendorsusdFromYTDSales2(String product) {
		
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select vendorname,sum(invamountusd) from YTDSales2 where productline='"+product+"' and status='true'  group by vendorname");
		List<Object[]> values=query.list();
		// TODO Auto-generated method stub
		return values;
	 
	}

	public List<Object[]> getProductTypeValuesYtdSales3() {
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select productline,submodel,sum(invamountusd) from YTDSales3 where  invoiceyear=2016 and    submodel <> 'NA'  group by productline,submodel Order by productline,submodel");
		List<Object[]> values=query.list();

		return values;
	}

	public List<Object[]> getProductTypeValuesYtdSales4() {
		
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select productline,submodel,sum(invamountusd) from YTDSales3  where  invoiceyear=2016 and   productline <> 'gc'    group by productline,submodel Order by productline,submodel");
		List<Object[]> values=query.list();

		return values;
	 
	}


	public Double getQuarterlyBooking(Integer year,String mString)
    {
		String sql = "select sum(bookingamount) as quarter from YtdBookingProduct where year="+year+"  and month in("+mString+") ;";
        List reqDateList=hibernateDao.findBySqlCriteria(sql);
        Map mp=(Map)reqDateList.get(0);
		Double value=(Double)mp.get("quarter");
        if(reqDateList.size()>0 && reqDateList!=null)
        	return value;
        else
        	return 0.00;        
    }

	public List getBookingValueForIndustrySectorShareTableDataByCountryDollar(String string, String countrycode) 
	{
		
		String sql =null;
		//if(year==2016)
		if("All".equalsIgnoreCase(string))
			sql = "select industrysector as name,sum(amountusd)  as value,industrysectorcode as code,year  from YtdBookingIndustry where year in(2016,2015,2014,2013) and country=(select distinct country from Country where countrycode='"+countrycode+"') group by  year,industrysector,industrysectorcode order by name";
		else
			sql = "select industry as name,sum(amountusd)  as value,industrysectorcode as code ,year  from YtdBookingIndustry where year in(2016,2015,2014,2013) and industrysectorcode='"+string+"' and country=(select distinct country from Country where countrycode='"+countrycode+"')group by  year,industry,industrysectorcode order by name";
			//else
		//	sql = "select sum(bookingamount)  as value,industrysectorcode as code,industrysector as name  from YtdBookingIndustry where year="+year+" group by  industrysector,industrysectorcode;";
		
		
		List reqDateList=hibernateDao.findBySqlCriteria(sql);
        if(reqDateList.size()>0 && reqDateList!=null)
        	return reqDateList;
        else
        	return null; 
		 
	}

	public List getBookingValueForProductShareOptindollars(int year, String counrtyname) {

		
		 
		
		String 	sql = "select sum(amountusd) as value,product as name from YtdBookingProduct where year="+year+" and country='"+counrtyname+"' group by product";
		
        List reqDateList=hibernateDao.findBySqlCriteria(sql);
        if(reqDateList.size()>0 && reqDateList!=null)
        	return reqDateList;
        else
        	return null;  
	}

	public List getBookingValueForIndustrySectorShareTableDataByCountrydollar(String parameter, String countrycode) {
		
		String sql =null;
		//if(year==2016)
		if("All".equalsIgnoreCase(parameter))
			sql = "select industrysector as name,sum(amountusd)  as value,industrysectorcode as code,year  from YtdBookingIndustry where year in(2016,2015,2014,2013) and country=(select distinct country from Country where countrycode='"+countrycode+"') group by  year,industrysector,industrysectorcode order by name";
		else
			sql = "select industry as name,sum(amountusd)  as value,industrysectorcode as code ,year  from YtdBookingIndustry where year in(2016,2015,2014,2013) and industrysectorcode='"+parameter+"' and country=(select distinct country from Country where countrycode='"+countrycode+"')group by  year,industry,industrysectorcode order by name";
			//else
		//	sql = "select sum(bookingamount)  as value,industrysectorcode as code,industrysector as name  from YtdBookingIndustry where year="+year+" group by  industrysector,industrysectorcode;";
		
		
		List reqDateList=hibernateDao.findBySqlCriteria(sql);
        if(reqDateList.size()>0 && reqDateList!=null)
        	return reqDateList;
        else
        	return null;  
	 
	}

	public BigDecimal getCWQuarterlyBookingValue1(String quarterly, int i) {
		Session session = hibernateDao.getSessionFactory().openSession();
		BigDecimal bVal=null;

		SQLQuery query = session.createSQLQuery("select sum(amountusd)  from YtdBookingRegion  where month in("
				+quarterly+ ") and year=" + i + "");
		List<BigDecimal> values = query.list();
		for (BigDecimal val : values) {
			bVal = val;
		}
		return bVal;
	}

	public Double getBookingValuelocal(String countryname, Integer year) {
		Session session=hibernateDao.getSessionFactory().openSession();
		Double bVal=0.00;
		try
		{
			Query query= session.createQuery("select sum(bookingamount) from YtdBookingRegion where country='"+countryname+"' and year="+year+"");
			List values=query.list();
			 
			bVal=(Double)values.get(0);

			if(bVal!=null)
				return bVal;
			else
				return 0.00;
		
		}catch(Exception e)
		{
			System.out.println("this is the error message"+e.getMessage());
			return 0.00;
		}
		
	}

	public List<Object[]> getAllProductsBasedOnCatageoreyNameforcastdrilldowndollar(String catageorey1,
			String country1) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select product,sum(amountusd) from YtdBookingProduct where apc='"+catageorey1+"' and country='"+country1+"' group by product");
		List<Object[]> values=query.list();
		// TODO Auto-generated method stub
		return values;
	}

	public List<Object[]> getcountriesbookingsoncatagoreylocal(String catageoryname) {
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select country,(sum(invoicedamount)- sum(totalcost))*100/sum(invoicedamount) from  YtdProfit  where pccode='"+catageoryname+"' group by country");
		List<Object[]> values=query.list();
		// TODO Auto-generated method stub
		return values;
	}

	public List<Object[]> getCountriesForProfits() {
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select  distinct country, from country where countrycode!='HK' ORDER BY country_order desc");
		List<Object[]> country=query.list();
		return country;
	}

	public List<String> getAllApplications() {
		// TODO Auto-generated method stub
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select  application from Application order by application ");
		List<String> country=query.list();
		return country;
	}

	public List<String> getAllIndustryNames() {
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select  industry from Industry order by industry");
		List<String> country=query.list();
		return country;
	 
	}

	public List<String> getAllCutmerGroupNames() {
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select  custmertype from CustmerType order by custmertype ");
		List<String> country=query.list();
		return country;
	 
	}

	public List<String> getAllTeriotreyNames() {
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select  distinct TERRITORY  from TERRITORY  order by TERRITORY ");
		List<String> country=query.list();
		return country;
	}

	public List<String> getAllSalesManNames() {
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select  distinct salesman  from salesman order by salesman");
		List<String> country=query.list();
		return country;
	}

	public List<String> getAllPaymentsNames() {
		try{
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select  distinct  paymenttewrmdescription from AppCode ");
		List<String> country=query.list();
		return country;
		
		}catch(Exception e)
		{
			System.out.println(e.getStackTrace());
		}
		
		return null;
	}

	public List<String> getAllSalesMancode(String s) {
		// TODO Auto-generated method stub
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select  salesmancode    from salesman where salesman='"+s+"'");
		List<String> country=query.list();
		return country;
	}
 
	
	
	//------------------------------------------Migration DAO---------------------------//
		//Migration
		public List getProductDetails(String plcode) {
			String sql=null;
			List tempdata=null;
			try
			{
				sql="select pccode,product,productcategory,productcode from ProductLine where plcode='"+plcode+"'";
				tempdata=hibernateDao.findBySqlCriteria(sql);
			}
			catch(Exception e)
			{
				System.out.println("The exception is"+e);
			}
			return tempdata;
		}
	public String getIndustrySector(String column,String value,String wherecolumn,String tablename) {
		Session s=hibernateDao.getSessionFactory().openSession();
		//SQLQuery query =s.createSQLQuery("select "+column+" from "+tablename+" where "+wherecolumn+" like '"+value+"%'");
		SQLQuery query =s.createSQLQuery("select "+column+" from "+tablename+" where "+wherecolumn+"='"+value+"'");
		 List<Object> list = query.list();
		if(list.size()>0)
		{
		 return (String)list.get(0);
		}
		else
		{
			return "NA";
		}
		 	 
	}
		
		public List getCustCodeAndCurrency(String customercode) {
			String sql=null;
			List currency=null;
			try
			{
				sql="select currencycode,countrycode,country from OtCustomerCodes where Customerprefix='"+customercode+"'";
				currency=hibernateDao.findBySqlCriteria(sql);
			}
			catch(Exception e)
			{
				System.out.println("The exception is"+e);
			}
			return currency;
		}
		
		
		
	public List<Double> getExchangeRate(Integer year,Integer month,String fromcode,String tocode) {
			Session s=hibernateDao.getSessionFactory().openSession();
			List<Double> currency=null;
			try
			{
			SQLQuery query =s.createSQLQuery("select exchrate from currencyfactor where year="+year+" and month="+month+" and fromcode='"+fromcode+"' and tocode='"+tocode+"'");
			currency=query.list();
			}
			catch(Exception e)
			{
				System.out.println("The exception is"+e);
			}
			return currency;
		}

	public boolean saveMigrateRegionData(List entitiesList) 
	{
	    Session session = null;
	    Transaction transaction = null;
	    boolean updateFlag=false;
	    try 
	    {
	        session = (Session)hibernateDao.getSessionFactory().openSession();
	        transaction = session.beginTransaction();
	        
	        for(int i=0;i<entitiesList.size();i++)
	        {
	        	session.save(entitiesList.get(i));	        	
	        }
	        session.flush();
	        transaction.commit();
	        updateFlag =true;
	        return updateFlag;
	    } 
	    catch (JDBCException jde)
	    {
	        logger.fatal("Error occured in database communication", jde);
	        transaction.rollback();
	        return updateFlag;
	    }
	    finally
	    {
	        if (session.isOpen()) 
	        {
	            session.close();
	        }
	    }
	}

	public List<Integer> getYtdBookingYear() {
		Session s=hibernateDao.getSessionFactory().openSession();
		List<Integer> years=null;
		try
		{
		SQLQuery query =s.createSQLQuery("select distinct bookingyear from YtdBooking   order by bookingyear");
		years=query.list();
		}
		catch(Exception e)
		{
			System.out.println("The exception is"+e);
		}
		return years;
	}
	public List<Integer> getYtdBookingMonth(Integer year, String migartiontime, int changeflag) {
		Session s=hibernateDao.getSessionFactory().openSession();
		List<Integer> months=null;
		SQLQuery query=null;
		try
		{
			
			if(changeflag==1)
			{
		 query =s.createSQLQuery("select distinct bookingmonth from YtdBooking where bookingyear="+year+" order by bookingmonth");
			}
			if(changeflag==0)
			{
				 query =s.createSQLQuery("select distinct bookingmonth from YtdBooking where bookingyear="+year+" and migrationtime='"+migartiontime+"' order by bookingmonth");
				
			}
		months=query.list();
		}
		catch(Exception e)
		{
			System.out.println("The exception is"+e);
		}
		return months;
	}
	public List<String> getYtdBookingCountry(Integer year,Integer month, String migartiontime, int changeflag) {
		Session s=hibernateDao.getSessionFactory().openSession();
		List<String> countrys=null;
		SQLQuery query=null;
		try
		{
			if(changeflag==1)
			{
		 query =s.createSQLQuery("select distinct country from YtdBooking where bookingyear="+year+" and bookingmonth="+month+"  order by country");
			}
			
			if(changeflag==0)
			{
				query =s.createSQLQuery("select distinct country from YtdBooking where bookingyear="+year+" and bookingmonth="+month+" and  migrationtime='"+migartiontime+"' order by country");
				
			}
		countrys=query.list();
		}
		catch(Exception e)
		{
			System.out.println("The exception is"+e);
		}
		return countrys;
	}
	public List<String> getYtdBookingRegion(Integer year,Integer month,String country, String migartiontime, int changeflag) {
		Session s=hibernateDao.getSessionFactory().openSession();
		List<String> regions=null;
		SQLQuery query=null;
		try
		{
			if(changeflag==1)
			{
		 query =s.createSQLQuery("select distinct regioncode from YtdBooking where bookingyear="+year+" and bookingmonth="+month+"and country='"+country+"'   order by regioncode");
			}
			
			if(changeflag==0)
			{
				 query =s.createSQLQuery("select distinct regioncode from YtdBooking where bookingyear="+year+" and bookingmonth="+month+"and country='"+country+"' and  migrationtime='"+migartiontime+"' order by regioncode");
				
			}
		regions=query.list();
		}
		catch(Exception e)
		{
			System.out.println("The exception is"+e);
		}
		return regions;
	}
	public List<Object[]> getYtdBookingSalesman(Integer year,Integer month,String country,String region, String migartiontime, int changeflag) {
		Session s=hibernateDao.getSessionFactory().openSession();
		List<Object[]> salesmans=null;
		SQLQuery query=null;
		try
		{
			if(changeflag==1)
			{
				query =s.createSQLQuery("select distinct salesmanname,salesmancode from YtdBooking where bookingyear="+year+" and bookingmonth="+month+" and country='"+country+"' and regioncode='"+region+"'   order by salesmanname");
			}
			
			if(changeflag==0)
			{
				query =s.createSQLQuery("select distinct salesmanname,salesmancode  from YtdBooking where bookingyear="+year+" and bookingmonth="+month+" and country='"+country+"' and regioncode='"+region+"' and migrationtime='"+migartiontime+"'  order by salesmanname");
			}
			 
			salesmans=query.list();
		}
		catch(Exception e)
		{
			System.out.println("The exception is"+e);
		}
		return salesmans;
	}
	public List getYtdBookingAmount(Integer year,Integer month,String country,String region,String salesman) {
		List amounts=null;
		String sql=null;
		try
		{
			sql="select sum(amount) as amount,sum(amountusd) as amountusd from YtdBooking where bookingyear="+year+" and bookingmonth="+month+" and country='"+country+"' and regionname='"+region+"' and salesmanname='"+salesman+"'";
			amounts=hibernateDao.findBySqlCriteria(sql);
		}
		catch(Exception e)
		{
			System.out.println("The exception is"+e);
		}
		return amounts;
	}
	//-------------------------------YtdBookingProduct-------------------------
	public List getYtdBookingProductCategory(Integer year,Integer month,String country, String migartiontime, int changeflag) {
		//Session s=hibernateDao.getSessionFactory().openSession();
		List productcategorys=null;
		String sql=null;
		try
		{
			if(changeflag==1)
			{
		//SQLQuery query =s.createSQLQuery("select distinct productcategory,apc from YtdBooking where bookingyear="+year+" and bookingmonth="+month+"and country='"+country+"' group by productcategory,apc order by productcategory");
		sql="select productcategory,apc from YtdBooking where bookingyear="+year+" and bookingmonth="+month+" and country='"+country+"'   group by productcategory,apc order by productcategory";
			}
			if(changeflag==0)
			{
				sql="select productcategory,apc from YtdBooking where bookingyear="+year+" and bookingmonth="+month+" and country='"+country+"'   and migrationtime='"+migartiontime+"' group by productcategory,apc order by productcategory";
				
			}
		productcategorys=hibernateDao.findBySqlCriteria(sql);
		}
		catch(Exception e)
		{
			System.out.println("The exception is"+e);
		}
		return productcategorys;
	}
	public List<String> getYtdBookingProduct(Integer year,Integer month,String country,String productcategory,String apc, String migartiontime, int changeflag) {
		Session s=hibernateDao.getSessionFactory().openSession();
		List<String> products=null;
		SQLQuery query=null;
		try
		{
			//SQLQuery query =s.createSQLQuery("select distinct product from YtdBooking where bookingyear="+year+" and bookingmonth="+month+" and country='"+country+"' and productcategory='"+productcategory+"' order by product");
			if(changeflag==1)
			{
			 query =s.createSQLQuery("select distinct product from YtdBooking where bookingyear="+year+" and bookingmonth="+month+" and country='"+country+"' and productcategory='"+productcategory+"' and apc='"+apc+"'   order by product");
			}
			
			if(changeflag==0)
			{
			 query =s.createSQLQuery("select distinct product from YtdBooking where bookingyear="+year+" and bookingmonth="+month+" and country='"+country+"' and productcategory='"+productcategory+"' and apc='"+apc+"' and migrationtime='"+migartiontime+"'  order by product");
			}
			products=query.list();
		}
		catch(Exception e)
		{
			System.out.println("The exception is"+e);
		}
		return products;
	}
	public List getYtdBookingAmountForProduct(Integer year,Integer month,String country,String productcategory,String product,String apc) {
		List amounts=null;
		String sql=null;
		try
		{
			
			sql="select sum(amount) as amount,sum(amountusd) as amountusd from YtdBooking where bookingyear="+year+" and bookingmonth="+month+" and country='"+country+"' and productcategory='"+productcategory+"' and product='"+product+"' and apc='"+apc+"'";
			amounts=hibernateDao.findBySqlCriteria(sql);
		}
		catch(Exception e)
		{
			System.out.println("The exception is"+e);
		}
		return amounts;
	}
	public List getYtdBookingIndustrySector(Integer year,Integer month,String country, String migartiontime, int changeflag) 
	{
String sql=null;
     if(changeflag==1)
     {

			sql ="select distinct industrysector,industrysectorcode from YtdBooking where bookingyear="+year+" and bookingmonth="+month+"and country='"+country+"'  order by industrysector";
			
     }
     if(changeflag==0)
     {
    	 sql ="select distinct industrysector,industrysectorcode from YtdBooking where bookingyear="+year+" and bookingmonth="+month+"and country='"+country+"' and migrationtime='"+migartiontime+"' order by industrysector";
    	 
     }
			 return hibernateDao.findBySqlCriteria(sql);
			
	}
	public List<Object[]> getYtdBookingIndustry(Integer year,Integer month,String country,String industrysector,String industrysectorcode, String migartiontime, int changeflag) {
		Session s=hibernateDao.getSessionFactory().openSession();
		List<Object[]> industrys=null;
		SQLQuery query=null;
		try
		{
			if(changeflag==1)
			{
			 query =s.createSQLQuery("select distinct industry,industrycode from YtdBooking where bookingyear="+year+" and bookingmonth="+month+" and country='"+country+"' and industrysector='"+industrysector+"' and industrysectorcode='"+industrysectorcode+"' order by industry ");
			}
			
			if(changeflag==0)
			{
				query =s.createSQLQuery("select distinct industry,industrycode from YtdBooking where bookingyear="+year+" and bookingmonth="+month+" and country='"+country+"' and industrysector='"+industrysector+"' and industrysectorcode='"+industrysectorcode+"' and migrationtime='"+migartiontime+"' order by industry ");
						
				
			}
			
			 
			industrys=query.list();
		}
		catch(Exception e)
		{
			System.out.println("The exception is"+e);
		}
		return industrys;
	}
	public List getYtdBookingAmountForIndustry(Integer year,Integer month,String country,String industrysector,String industry,String industrysectorcode,String industrycode) {
		List amounts=null;
		String sql=null;
		try
		{
			sql="select sum(amount) as amount,sum(amountusd) as amountusd from YtdBooking where bookingyear="+year+" and bookingmonth="+month+" and country='"+country+"' and industrysector='"+industrysector+"' and industry='"+industry+"' and industrysectorcode='"+industrysectorcode+"' and industrycode='"+industrycode+"'";
			amounts=hibernateDao.findBySqlCriteria(sql);
				
		}
		catch(Exception e)
		{
			System.out.println("The exception is"+e);
		}
		return amounts;
	}

	public List getCustCodeAndCurrencyForNew(String customercode) {
		String sql=null;
		List currency=null;
		try
		{
			sql="select currencycode,countrycode,country from OtCustomerCodesForNew where Customerprefix='"+customercode+"'";
			currency=hibernateDao.findBySqlCriteria(sql);
		}
		catch(Exception e)
		{
			System.out.println("The exception is"+e);
		}
		return currency;
	}

	public void deleteSalesOrder(String salesorder) {
		// TODO Auto-generated method stub
		
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("delete from YtdBooking where salesorder='"+salesorder+"' ");
	query.executeUpdate();
		
	}

	public List<Object[]> getAmountandAmountusd(String salesorder) {
		Session session=hibernateDao.getSessionFactory().openSession();
		//SQLQuery query= session.createSQLQuery("select amount,amountusd  from  YtdBooking where salesorder='"+salesorder+"'");
		SQLQuery query= session.createSQLQuery("select amount,amountusd,bookingyear,bookingmonth,countrycode  from  YtdBooking where salesorder='"+salesorder+"'");

		// TODO Auto-generated method stub
		return query.list();
	}

	public List getYtdBookingAmount(Integer year, Integer month, String country, String region, String salesmancode,
			String migartiontime, int changeflag)
	{
		
		List amounts=null;
		String sql=null;
		try
		{
			if(changeflag==1)
			{
			sql="select COALESCE(sum(amount),0)  as amount,COALESCE(sum(amountusd),0)  as amountusd from YtdBooking where bookingyear="+year+" and bookingmonth="+month+" and country='"+country+"' and regioncode='"+region+"' and salesmancode='"+salesmancode+"'";
			}
			if(changeflag==0)
			{
				sql="select sum(amount) as amount,sum(amountusd) as amountusd from YtdBooking where bookingyear="+year+" and bookingmonth="+month+" and country='"+country+"' and regioncode='"+region+"' and salesmancode='"+salesmancode+"' and migrationtime='"+migartiontime+"'";
			}
			amounts=hibernateDao.findBySqlCriteria(sql);
		}
		catch(Exception e)
		{
			System.out.println("The exception is"+e);
		}
		return amounts;
		 
	}

	public List getYtdBookingAmountForProduct(Integer year, Integer month, String country, String productcategory,
			String product, String apc, String migartiontime, int changeflag) 
	{
		List amounts=null;
		String sql=null;
		try
		{
			if(changeflag==1)
			{
			sql="select COALESCE(sum(amount),0) as amount,COALESCE(sum(amountusd),0) as amountusd from YtdBooking where bookingyear="+year+" and bookingmonth="+month+" and country='"+country+"' and productcategory='"+productcategory+"' and product='"+product+"' and apc='"+apc+"'";
			}
			
			if(changeflag==0)
			{
			sql="select sum(amount) as amount,sum(amountusd) as amountusd from YtdBooking where bookingyear="+year+" and bookingmonth="+month+" and country='"+country+"' and productcategory='"+productcategory+"' and product='"+product+"' and apc='"+apc+"' and migrationtime='"+migartiontime+"'";
			}
			
			amounts=hibernateDao.findBySqlCriteria(sql);
		}
		catch(Exception e)
		{
			System.out.println("The exception is"+e);
		}
		return amounts;
		 
	}

	public List getYtdBookingAmountForIndustry(Integer year, Integer month, String country, String industrysector,
			String industry, String industrysectorcode, String industrycode, String migartiontime, int changeflag) 
	{
		 
		
		List amounts=null;
		String sql=null;
		try
		{
			if(changeflag==1)
			{
				sql="select COALESCE(sum(amount),0) as amount,COALESCE(sum(amountusd),0) as amountusd from YtdBooking where bookingyear="+year+" and bookingmonth="+month+" and country='"+country+"' and industrysector='"+industrysector+"' and industry='"+industry+"' and industrysectorcode='"+industrysectorcode+"' and industrycode='"+industrycode+"'";
				
			}
			if(changeflag==0)
			{
				
			sql="select sum(amount) as amount,sum(amountusd) as amountusd from YtdBooking where bookingyear="+year+" and bookingmonth="+month+" and country='"+country+"' and industrysector='"+industrysector+"' and industry='"+industry+"' and industrysectorcode='"+industrysectorcode+"' and industrycode='"+industrycode+"' and migrationtime='"+migartiontime+"'";
			}
			amounts=hibernateDao.findBySqlCriteria(sql);
				
		}
		catch(Exception e)
		{
			System.out.println("The exception is"+e);
		}
		return amounts;
	}

	public String getIndustrySector1(String column, String value, String wherecolumn, String tablename) {
		Session s=hibernateDao.getSessionFactory().openSession();
		SQLQuery query =s.createSQLQuery("select "+column+" from "+tablename+" where "+wherecolumn+" like '"+value+"%' and countrycode!='OT'");
		
		 List<Object> list = query.list();
		if(list.size()>0)
		{
			
		 return (String)list.get(0);
		}
		else
		{
			return "NA";
		}
	}

	
	
	
	
	
	
	

	public void updateCurrenceyto(String salesorder, String currencey, Double updatedusd, Double localcurrencey, String migartiontime) 
	{
		  Session session1=(Session)hibernateDao.getSessionFactory().openSession();
		  
		 // String sql="update YtdBooking set currency='"+currencey+"' where salesorder='"+salesorder+"'";
		  String sql="update YtdBooking set currency='"+currencey+"',amount="+localcurrencey+",amountusd="+updatedusd+",migrationtime='"+migartiontime+"'  where salesorder='"+salesorder+"'";
		  Query query= session1.createQuery(sql);
		  query.executeUpdate();
		
	}

	public String getCurrency(String salesorder) 
	{
String s=null;
		  Session session1=(Session)hibernateDao.getSessionFactory().openSession();
		  
		  String sql="select currency from  YtdBooking where salesorder='"+salesorder+"'";
		  SQLQuery query= session1.createSQLQuery(sql);
		  List<String> currency=query.list();
		  for(String c:currency)
		  {
			  s=c;
		  }
		  
		  return s;
	}

	public List getAllTheBookingDetailsFromTempTableForProductionScheduler14nov(String migartiontime) {
		Session session=hibernateDao.getSessionFactory().openSession();
		String sql="select *   from DailyBookingTemp  where migrationtime='"+migartiontime+"' and cast(edate as int) >= 20161114 order by slno";
		//String sql="select *   from DailyBookingTemp";
		List  tempdata=hibernateDao.findBySqlCriteria(sql);
		
		return tempdata;
	}

	public List<Country> getCountriesOnCountrycodes() {
		Session session=hibernateDao.getSessionFactory().openSession();
		String sql=" from Country";
		//String sql="select *   from DailyBookingTemp";
	     Query q	=session.createQuery(sql);
		List<Country>  tempdata=q.list();
		return tempdata;
	}

	public List<ApplicationIndustryCode> getAllApplicationCode()
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		String sql=" from ApplicationIndustryCode";
		//String sql="select *   from DailyBookingTemp";
	     Query q	=session.createQuery(sql);
		List<ApplicationIndustryCode>  tempdata=q.list();
		return tempdata;
	}

	public List<ApplicationIndustryCode> getAllApplicationCodeName(String applicationcode) {
		Session session=hibernateDao.getSessionFactory().openSession();
		String sql=" from ApplicationIndustryCode where machinecode='"+applicationcode+"'";
		//String sql="select *   from DailyBookingTemp";
	     Query q	=session.createQuery(sql);
		List<ApplicationIndustryCode>  tempdata=q.list();
		return tempdata;
	}

	public List<CustmerType> getAllCustmerTypes() {
		Session session=hibernateDao.getSessionFactory().openSession();
		String sql=" from CustmerType";
		//String sql="select *   from DailyBookingTemp";
	     Query q	=session.createQuery(sql);
		List<CustmerType>  tempdata=q.list();
		return tempdata;
	}

	public List<AppCode> getAllPaymentsNamesAppcode() {
		Session session=hibernateDao.getSessionFactory().openSession();
		String sql=" from AppCode";
		//String sql="select *   from DailyBookingTemp";
	     Query q	=session.createQuery(sql);
		List<AppCode>  tempdata=q.list();
		return tempdata;
	}


	public List<String> getRegions(String countryCode) 
	{		
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select distinct region,id from  Region where id in (select distinct CAST(region  AS INT) from YtdBookingRegion where country='"+countryCode+"' and  region !='NA') and countrycode=(select countrycode from Country where country='"+countryCode+"')");
		List<String> monthList=query.list();
		
		return monthList;
	}

	public Double getBookingValueForRegion(String region,String country,Integer year) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		Double bVal=0.00;
		Query query=null;
		try
		{
			
			if("NOREGION".equalsIgnoreCase(region))
			{
				query= session.createQuery("select sum(amountusd) from YtdBookingRegion where  and country='"+country+"' and year="+year+" and regstatus='0'");
			}
			else
				query= session.createQuery("select sum(amountusd) from YtdBookingRegion where region='"+region+"' and country='"+country+"' and year="+year+"  and regstatus='0'");
			List values=query.list();			
			bVal=(Double)values.get(0);

			if(bVal!=null)
				return bVal;
			else
				return 0.00;
		}catch(Exception e)
		{
			System.out.println("this is the error message"+e.getMessage());
			return 0.00;
		}	
	}
	
	public List getSalesMen(String countryCode,String rcode) 
	{		
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select distinct salesmancode from YtdBookingRegion where country=(select country from country where countrycode='"+countryCode+"') and region=(select regionid from Region where region='"+rcode+"')");
		List monthList=query.list();
		
		return monthList;
	}
	
	public Double getBookingValueForSalesMan(String salesmanCode,String region,String countryCode,Integer year) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		Double bVal=0.00;
		try
		{
			Query query= session.createQuery("select sum(amountusd) from YtdBookingRegion where salesmancode='"+salesmanCode+"'  and country='"+countryCode+"' and region= '"+region+"' and year="+year+" and regstatus='0'");
			List values=query.list();			
			bVal=(Double)values.get(0);

			if(bVal!=null)
				return bVal;
			else
				return 0.00;
		}catch(Exception e)
		{
			System.out.println("this is the error message"+e.getMessage());
			return 0.00;
		}	
	}

	public List<String> getRegionNmaesFromytdbookingRegion(String countrycode) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
	 
		 
			SQLQuery query= session.createSQLQuery("select distinct region from YtdBookingRegion where regstatus='0' and country =(select country from Country where countrycode='"+countrycode+"') and   region!='NA' ");
			List<String> values=query.list();	
			return values;
			 
		 
		 
	}

	public List<Double> getOfamountusdfromytdbookingregion(Integer year,
			String regionnanme, String countrycode,String currencyType) {
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query=null;
		if("local".equalsIgnoreCase(currencyType))
		{
			query= session.createSQLQuery("select coalesce(sum(bookingamount),0)  from YtdBookingRegion where  regstatus='0' and region='"+regionnanme+"' and year = "+year+" and country =(select country from Country where countrycode='"+countrycode+"')");
		}
		else
		query= session.createSQLQuery("select coalesce(sum(amountusd),0)  from YtdBookingRegion where   regstatus='0' and  region='"+regionnanme+"' and year = "+year+" and country =(select country from Country where countrycode='"+countrycode+"')");
		
		List<Double> values=query.list();	
		return values;
		 
	}
	
	public Double getBookingValueForSalesManCountryWise(String salesmanCode,String region,String countryCode,Integer year,String currencyType) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		Double bVal=0.00;
		Query query=null;
		try
		{
			if("local".equalsIgnoreCase(currencyType))
			{
				query= session.createQuery("select sum(bookingamount) from YtdBookingRegion where  regstatus='0' and  salesmancode='"+salesmanCode+"' and region='"+region+"' and country=(select country from Country where countrycode='"+countryCode+"') and year="+year+"");
			}
			else
			query= session.createQuery("select sum(amountusd) from YtdBookingRegion where  regstatus='0' and  salesmancode='"+salesmanCode+"' and region='"+region+"' and country=(select country from Country where countrycode='"+countryCode+"') and year="+year+"");
			
			List values=query.list();			
			bVal=(Double)values.get(0);

			if(bVal!=null)
				return bVal;
			else
				return 0.00;
		}catch(Exception e)
		{
			System.out.println("this is the error message"+e.getMessage());
			return 0.00;
		}	
	}

	public List<Double> getOfamountusdfromytdbookingregionforBudget(
			Integer year, String countrycode) {
		Session session=hibernateDao.getSessionFactory().openSession();
		Double bVal=0.00;
		
		/*Calendar c1=Calendar.getInstance();*/
		Calendar now = Calendar.getInstance();
		int currentyear = now.get(Calendar.YEAR);
		int month = now.get(Calendar.MONTH) + 1; // Note: zero based!
		int day = now.get(Calendar.DAY_OF_MONTH);
		int hour = now.get(Calendar.HOUR_OF_DAY);
		int minute = now.get(Calendar.MINUTE);
		int second = now.get(Calendar.SECOND);
		int millis = now.get(Calendar.MILLISECOND);
		List<Double> values=null;
	
		
		if(year!=currentyear)
		{
			Query query= session.createQuery("select coalesce(sum(yeartotal),0)  from YearlyBudget where countrycode='"+countrycode+"' and year="+year+"");
		 values=query.list();
			
		}
		
		else
		{
			String months="month1";
			for(int i=2;i<=month;i++)
			{
			months=	months+"+month"+i;
			}
			Query query= session.createQuery("select coalesce(sum("+months+"),0)  from YearlyBudget where countrycode='"+countrycode+"' and year="+year+"");
			 values=query.list();
			
		}
			/*Query query= session.createQuery("select coalesce(sum(yeartotal),0)  from YearlyBudget where countrycode='"+countrycode+"' and year="+year+"");
			List<Double> values=query.list();	*/		
			/*bVal=(Double)values.get(0);
*/
			 return values ;
		 
	}
	
	public List getSalesMenCountryWise(String countryCode,String rcode) 
	{		
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select distinct salesmancode from YtdBookingRegion where country=(select country from country where countrycode='"+countryCode+"') and region='"+rcode+"'");
		List monthList=query.list();
		
		return monthList;
	}

	

	public String getRegioncodeFromSalesmanTable(String countrycode, String slcode1) {
		Session session=hibernateDao.getSessionFactory().openSession();
		String regioncodename="NA";
		SQLQuery query= session.createSQLQuery("select regioncode from salesman where  salesmancode='"+slcode1+"'  and countrycode='"+countrycode+"'");
		List<String> regioncode=query.list();
		if(regioncode.size()!=0)
		{
		for(String regioncode1:regioncode)
		{
			regioncodename=regioncode1;
		}
		}
		return regioncodename;
	}

	public String getRegionNamefromRegion(String countrycode, Integer regioncode) {
		Session session=hibernateDao.getSessionFactory().openSession();
		String regioname1="NA";
		SQLQuery query= session.createSQLQuery("select region from Region where  regionid="+regioncode+"  and countrycode='"+countrycode+"'");
		List<String> regionname=query.list();
		if(regionname.size()!=0)
		{
		for(String regioncode1:regionname)
		{
			regioname1=regioncode1;
		}
		}
		return regioname1;
	}

	


	public List<Object[]> getRegionsandregionids(String countryCode) {
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select distinct region,regionid from  Region where status=0 and regionid in (select distinct CAST(region  AS INT) from YtdBookingRegion where country='"+countryCode+"' and  region !='NA') and countrycode=(select countrycode from Country where country='"+countryCode+"')");
		List<Object[]> monthList=query.list();
		
		return monthList;
	}

	public List<String> getSalesman1(String countryCode, String regionCode) {
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select distinct salesmancode from YtdBookingRegion where country='"+countryCode+"' and region=(select cast(regionid as varchar(10)) from Region where region='"+regionCode+"' and  countrycode=(select countrycode from Country where country='"+countryCode+"'))");
		List monthList=query.list();
		
		return monthList;
	}

	public String getCountryName(String countryCode) {
		Session session=hibernateDao.getSessionFactory().openSession();
		String s1="NA";
		SQLQuery query= session.createSQLQuery( "select countrycode from country where country='"+countryCode+"'");
		List<String> monthList=query.list();
		for(String s:monthList)
				{
			s1=s;
					
				}
		return s1;
	}

	public String getRegionsandregionids1(String regionCode, String countryname) {
		Session session=hibernateDao.getSessionFactory().openSession();
		String s1="NA";
		SQLQuery query= session.createSQLQuery( "select regionid from region where region='"+regionCode+"' and status=0 and countrycode='"+countryname+"'");
		List<Integer> monthList=query.list();
		for(Integer s:monthList)
				{
			s1=s.toString();
					
				}
		return s1;
	}

	public String getRegionNamefromRegioncode(String countrycode, Integer regionid) {
		Session session=hibernateDao.getSessionFactory().openSession();
		String s1="NA";
		SQLQuery query= session.createSQLQuery( "select region from region where regionid='"+regionid+"' and countrycode='"+countrycode+"'");
		List<String> monthList=query.list();
		for(String s:monthList)
				{
			s1=s.toString();
					
				}
		return s1;
	}

	public String getregionfromRegion(String regionCode, String countryCode) {
		Session session=hibernateDao.getSessionFactory().openSession();
		String s1="NA";
		SQLQuery query= session.createSQLQuery( "select regionid from region where region='"+regionCode+"' and countrycode='"+countryCode+"' and status=0");
		List<Integer> monthList=query.list();
		for(Integer s:monthList)
				{
			s1=s.toString();
					
				}
		return s1;
	}

	
	
	public List<Object[]> getAllTheYtdProfitDetailsFromTempTable() {
		Session s=hibernateDao.getSessionFactory().openSession();
		List<Object[]> tempdata=null;
		try
		{
		SQLQuery query =s.createSQLQuery("select  InvoiceDate,Customer,ProductGroup,InvoiceQty,SaleValue,TotalCost,Profit,ProfitPercent,id from ytdprofittemp");  
	     tempdata=query.list();
		}
		catch(Exception e)
		{
			System.out.println("The exception is"+e);
		}
		return tempdata;
	}

	 
	/*public List<Object[]> getYtdProfitProductDetails(String product)
    {
	    // TODO Auto-generated method stub
	    return null;
    }*/
	
	
	public List<Object[]> getYtdProfitProductDetails(String product) {
		Session s=hibernateDao.getSessionFactory().openSession();
		Session s1=hibernateDao.getSessionFactory().openSession();
		List<Object[]> products=null;
		try
		{
			SQLQuery query =s.createSQLQuery("select productcode,pccode from product where product='"+product+"'");
			products=query.list();
		}
		catch(Exception e)
		{
			System.out.println("The exception is"+e);
		}
		if(products.size()>0 && products!=null)
		return products;
		else
		{
		try{
			SQLQuery query1 =s1.createSQLQuery("select productcode,pccode from product where product='others'");
			products=query1.list();
			return products;
		}
		catch(Exception e)
		{
			System.out.println("The exception is"+e);	
		}
		
		}
		
		return products;
	}


	public List<String> getProductCategoryCode(String pccode)
    {
		
		Session s=hibernateDao.getSessionFactory().openSession();
		List<String> productcategorys=null;
		try
		{
		SQLQuery query =s.createSQLQuery("select  productcategory from productcategory where productcategorycode='"+pccode+"'");
		productcategorys=query.list();
		}
		catch(Exception e)
		{
			System.out.println("The exception is"+e);
		}
		return productcategorys;

	    // TODO Auto-generated method stub
	    
    }

	/*public String getCountryDetails(String string)
    {
	    // TODO Auto-generated method stub
	    return null;
    }
*/
	/*public String getCountryDetails(String account) {
		String country=null;
			Session s=hibernateDao.getSessionFactory().openSession();
			Session s1=hibernateDao.getSessionFactory().openSession();
			List<String> countrys=null;
			List<String> countryvf=null;
			
			try
			{
			SQLQuery query =s.createSQLQuery("select  country from customer where account='"+account+"'");
			countrys=query.list();
			}
			catch(Exception e)
			{
				System.out.println("The exception is"+e);
				
			}

			if(countrys.size()>0 && countrys!=null && !countrys.get(0).equalsIgnoreCase("NA"))
			{
			country=countrys.get(0);
			return country;
			}
			else
			{
				try{
				SQLQuery query1 =s1.createSQLQuery("select  distinct country from customer where account like '"+account.substring(0,2)+"%'");
				countryvf=query1.list();
				}
				catch(Exception e)
				{
					System.out.println("The exception is"+e);
					
				}

				country=countryvf.get(0);
				if(!country.equalsIgnoreCase("NA"))
				return country;
				
			}
			
		
			return country;
		}
		
		
		
*/	
	/*public String getCountryCode(String country)
    {
	  
    }*/
	
	
	
	public String getCountryDetails(String account) {
		String country=null;
			Session s=hibernateDao.getSessionFactory().openSession();
			Session s1=hibernateDao.getSessionFactory().openSession();
			List<String> countrys=null;
			List<String> countryvf=null;
			
			try
			{
			SQLQuery query =s.createSQLQuery("select  billingCountries from CustmerDetails where account='"+account+"' and custmermodifeyStatus IS NULL");
			countrys=query.list();
			}
			catch(Exception e)
			{
				System.out.println("The exception is"+e);
				
			}
			
			

			if(countrys.size()>0 && countrys!=null)
			{
				if(!countrys.get(0).equalsIgnoreCase("NA"));
				{
			country=countrys.get(0);
			return country;
				}
			}
			else
			{
				if(account!=null)
				{
				
				if(account.length() >= 2)
				{
				
				SQLQuery query1 =s1.createSQLQuery("select  distinct billingCountries from CustmerDetails where account like '"+account.substring(0,2)+"%' and custmermodifeyStatus IS NULL");
				countryvf=query1.list();
				 
				if(countryvf.size()>0)
				{
				for(String h:countryvf)
				{
					country=h;
					
				}
				
				}

				 if(country!=null)
				 {
				if(!country.equalsIgnoreCase("NA"))
				return country;
				 }
				}
				}
			}
			
		
			return country;
		}
		

	
	
	public String getCountryCode(String country) {
		
		Session s=hibernateDao.getSessionFactory().openSession();
		Session s1=hibernateDao.getSessionFactory().openSession();
	
		List<String> countrys=null;
	
		
		try
		{
		SQLQuery query =s.createSQLQuery("select  countrycode from country where country='"+country+"'");
		countrys=query.list();
		}
		catch(Exception e)
		{
			System.out.println("The exception is"+e);
			
		}

		if(countrys.size()>0 && countrys!=null)
		{
		
		return countrys.get(0);
		}
		else
		{
			try
			{
			SQLQuery query1 =s1.createSQLQuery("select  countrycode from country where country='other'");
			countrys=query1.list();
			return countrys.get(0);
			}
			catch(Exception e)
			{
				System.out.println("The exception is"+e);
				
			}

		}
		
	return countrys.get(0);
		
	}


	public List<Integer> getYtdProfitYear()
    {
	    // TODO Auto-generated method stub
	    return null;
    }
	

	

	public Double getBudgetforSalesMan(String salesman, String countryname,
			Integer year) {
		Double value=0.0;
		String sql= "select   grandTotal from SalesBudgetMaster where   salesmanCode='"+salesman+"' and countrycode='"+countryname+"' and year='"+year+"'";
		Session s=hibernateDao.getSessionFactory().openSession();
		Query q=s.createQuery(sql);
		List<Double> grandtotalonsalemancode=q.list();
		
		if(grandtotalonsalemancode.size()>0)
		{
			for(Double d1:grandtotalonsalemancode )
			{
				value=d1;
			}
			
		}
		return value;
	}

	public Double getBudgetValuecountrywise(String countryCode,
			String salesman, int year) {
		Double value=0.0;
		String sql= "select   grandTotal from SalesBudgetMaster where   salesmanCode='"+salesman+"' and countrycode='"+countryCode+"' and year='"+year+"'";
		Session s=hibernateDao.getSessionFactory().openSession();
		Query q=s.createQuery(sql);
		List<Double> grandtotalonsalemancode=q.list();
		
		if(grandtotalonsalemancode.size()>0)
		{
			for(Double d1:grandtotalonsalemancode )
			{
				value=d1;
			}
			
		}
		return value;
	}

	 

	public List<SalesManIndexMaster> getSalemanIndexmasterData(
			String countrycode, String salesmanindexcustmercode,
			String customercode) {
		 String query="from SalesManIndexMaster where countrycode='"+countrycode+"' and salesmancode='"+salesmanindexcustmercode+"' and  custmercode='"+customercode+"'";
		 Session s=hibernateDao.getSessionFactory().openSession();
		Query q= s.createQuery(query);
	List<SalesManIndexMaster> salesmaindexata=	q.list();
		 
		 
		return salesmaindexata;
	}

	public List<Object[]> getRegionNameBasedOnRegioncode(String regioncode,
			String countrycode) {
		int regionid=0;
		if(regioncode!=null)
		{
			regionid=Integer.parseInt(regioncode);
		}
		String query="select  regionid, region from  Region where regionid="+regionid+" and countrycode='"+countrycode+"'";
		Session s=hibernateDao.getSessionFactory().openSession();
		SQLQuery q=s.createSQLQuery(query);
		List<Object[]> regiondata=q.list();
		 
		return regiondata;
	}
}

