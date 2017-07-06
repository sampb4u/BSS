package com.finsol.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.JDBCException;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.finsol.model.CDepartment;
import com.finsol.model.CTDepartment;
import com.finsol.model.CompititorGrid;
import com.finsol.model.CompititorGridTemp;
import com.finsol.model.Country;
import com.finsol.model.CreditStatus;
import com.finsol.model.CurrencyCountryMaster;
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

@Repository("MasterScreen_Dao")
@Transactional
public class MasterScreen_Dao {
	
	private static final Logger logger = Logger.getLogger(MasterScreen_Dao.class);
	
	@Autowired	
	private HibernateDao hibernateDao;

	public void saveProductCategorey(ProductCategory productageorey) {
		Session session=hibernateDao.getSessionFactory().openSession();
		session.save(productageorey);
		
		
	}
	
	

	public List<ProductCategory> allValuesInProductCatageory() {
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "FROM ProductCategory";
		Query query = session.createQuery(hql);
		List<ProductCategory> results = query.list();
		
		return results;
		
		
	}



	public void updateProductCatgeorey(ProductCategory productageorey) {
		Session session=hibernateDao.getSessionFactory().openSession();
		 session.beginTransaction();
		ProductCategory productageoreyold=	(ProductCategory) session.get(ProductCategory.class,productageorey.getPcid());
	    productageoreyold.setBokclr(productageorey.getBokclr());
		productageoreyold.setBudgclr(productageorey.getBudgclr());
		productageoreyold.setDescription(productageorey.getDescription());
		productageoreyold.setProductcategory(productageorey.getProductcategory());
		productageoreyold.setProductcategorycode(productageorey.getProductcategorycode());
		productageoreyold.setStatus(productageorey.getStatus());
		session.saveOrUpdate(productageoreyold);
		
		session.getTransaction().commit();
	 
		session.close();
	}



	public void saveProducts(ArrayList<Product> product) {
		// TODO Auto-generated method stub
		Session session=hibernateDao.getSessionFactory().openSession();
		/*Session session2=hibernateDao.getSessionFactory().openSession();*/
		String productcode=null;
		int i=1;
		for(Product p:product)
		{
			productcode=p.getPccode();
			if (i==1)
				break;
		}
		
		String sql="delete from Product where pccode='"+productcode+"'";
	Query a	=session.createQuery(sql);
	a.executeUpdate();
		
		
		for(Product p:product)
		{
			Product p1=new Product();
			p1.setBokclr(p.getBokclr());
			p1.setBudgclr(p.getBudgclr());
			p1.setPccode(p.getPccode());
			p1.setProduct(p.getProduct());
			p1.setProductcode(p.getProductcode());
			session.save(p1);
			
		}
		
	}



	public List<Product> getAllproductOnCatgeoreyCode(String productcatgeoreycode) 
	{
		String hql=null;
		Session session=hibernateDao.getSessionFactory().openSession();
		if(productcatgeoreycode!=null)
		{
		 hql = "FROM  Product where pccode='"+productcatgeoreycode+"'";
		}
		
		else
		{
			hql = "FROM  Product";
			
		}
		Query query = session.createQuery(hql);
		List<Product> results = query.list();
		
		return results;
	}



	public void saveDepatment(Department department) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		session.save(department);
		
		
	}



	public void updateDepartMent(Department department) {
		
		Session session=hibernateDao.getSessionFactory().openSession();
		 session.beginTransaction();
		 Department departmentold=	(Department) session.get(Department.class,department.getDeptid());
		 departmentold.setContactperson(department.getContactperson());
		 departmentold.setDepartmentname(department.getDepartmentname());
		 departmentold.setDepartmentnameshortcut(department.getDepartmentnameshortcut());
		 departmentold.setEmail(department.getEmail());
		 departmentold.setExtent(department.getExtent());
		 departmentold.setPhonenumber(department.getPhonenumber());
		 departmentold.setStatus(department.getStatus());
		 
	    
		session.saveOrUpdate(departmentold);
		
		session.getTransaction().commit();
	 
		session.close();
		
		
	}



	public List<Department> departmentView() {
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "FROM Department order by departmentname";
		Query query = session.createQuery(hql);
		List<Department> results = query.list();
		
		return results;
	}



	public List<Object[]> getAllProductLInes() {
		// TODO Auto-generated method stub
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "select * from ProductLine";
		SQLQuery query = session.createSQLQuery(hql);
		List<Object[]> results = query.list();
		
		return results;

	}



	public List<Object[]> getAllProductsOnProductCatageory(String productcatagerey) {
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "FROM  Product where pccode='"+productcatagerey+"'";
		SQLQuery query = session.createSQLQuery(hql);
		List<Object[]> results = query.list();
		
		return results;
	}



	public void deleteProductLine() {
		// TODO Auto-generated method stub
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "delete from ProductLine";
		SQLQuery query = session.createSQLQuery(hql);
		query.executeUpdate();

		
	}



	public void saveProductLine(ArrayList<ProductLine> al) {
		Session session=hibernateDao.getSessionFactory().openSession();
	for(ProductLine p:al){
		
		ProductLine p1=new ProductLine();
		p1.setPccode(p.getPccode());
		p1.setPlcode(p.getPlcode());
		p1.setPldesc(p.getPldesc());
		p1.setProduct(p.getProduct());
		p1.setProductcategory(p.getProductcategory());
		p1.setProductcode(p.getProductcode());
		session.save(p);
		
	}
		
	}



	public void saveCustmer(CustmerDetails al) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		 session.beginTransaction();
		/*session.save(al);*/
		 session.saveOrUpdate(al);
		session.getTransaction().commit();
		session.close();

		// TODO Auto-generated method stub
		
	}



	public int getMaxIdCustmer() 
	{
		int m=0;
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query=session.createSQLQuery("select max(custid) from CustmerDetails");
		List<Integer> i=query.list();
		
		for(Integer k:i)
		{
			m=k.intValue();
		}
		
		return m;
	}



	public void updateimageonMaxId(int maxid, String photoPath) {
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query=session.createSQLQuery("update CustmerDetails set imagename='"+photoPath+"' where custid="+maxid+"");
		query.executeUpdate();
		
	}



	/*public void saveCustmer(CustmerDetails productageorey, ArrayList<CustmerContactDetails> plk) {
		Session session=hibernateDao.getSessionFactory().openSession();
		session.beginTransaction();
		CustmerDetails custmernew	=(CustmerDetails)session.get(CustmerDetails.class,productageorey.getCustid());
		
		custmernew.setAccount(productageorey.getAccount());
		session.saveOrUpdate(custmernew);
		
	 
		 
		
		
		
	}
*/
	
	


	public boolean saveMultipleEntities(List entitiesList) 
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
	        	session.saveOrUpdate(entitiesList.get(i));	        	
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
	 
	
	@SuppressWarnings("unchecked")
	public List<FrameSizeAndTag> listFrameSizeAndTag()
	{
		return (List<FrameSizeAndTag>) hibernateDao.getSessionFactory().openSession().createCriteria(FrameSizeAndTag.class).list();
	}
	
	@SuppressWarnings("unchecked")
	public List<ItemAndScore> listItemAndScore()
	{
		return (List<ItemAndScore>) hibernateDao.getSessionFactory().openSession().createCriteria(ItemAndScore.class).list();
	}



	public List<CustmerDetails> getAllCustmersDeatails(String custmername) {
		
		
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "FROM CustmerDetails where account='"+custmername+"' and custmermodifeyStatus IS NULL";
		Query query = session.createQuery(hql);
		List<CustmerDetails> results = query.list();
		
	   return	results;
	}



	 


	public void updateCustmer(CustmerDetails productageorey, ArrayList<CustmerContactDetails> plk) 
	{
		
		Session session=hibernateDao.getSessionFactory().openSession();
		// TODO Auto-generated method stub
		 session.beginTransaction();
		 
		CustmerDetails departmentold=	(CustmerDetails) session.get(CustmerDetails.class,productageorey.getCustid());
		departmentold.setAccount(productageorey.getAccount());
		
		 session.saveOrUpdate(productageorey);
		 
		 
		session.getTransaction().commit();
		 
			session.close();
		 
		 
	}



	public void deleteofCutmerContactDetails(Integer custid) {
		// TODO Auto-generated method stub
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query=session.createSQLQuery("delete from CustmerContactDetails where custmerid="+custid+"");
		query.executeUpdate();
	}



	public void saveContactCustmerDetails(CustmerDetails productageorey, ArrayList<CustmerContactDetails> plk) 
	
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		session.beginTransaction();
		for(CustmerContactDetails plk1:plk)
		{
			CustmerContactDetails l=new CustmerContactDetails();
			l.setCustmerid(productageorey.getCustid());
			 
			l.setContactName(plk1.getContactName());
			l.setContactAltNumber(plk1.getContactAltNumber());
		 
			l.setContactNumber(plk1.getContactNumber());
			session.save(l);
			
		}
		
		session.beginTransaction();
		
	}



	public void deleteCustmer(Integer custid) {
		
		Session session=hibernateDao.getSessionFactory().openSession();
		 
		SQLQuery query=session.createSQLQuery("delete from CustmerDetails where custid="+custid+"");
		query.executeUpdate();
		// TODO Auto-generated method stub
		
	}



	public List<Object[]>  getAllAccountNames() {
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "Select distinct account,accountid FROM CustmerDetails  where custmermodifeyStatus IS NULL order by accountid";
		Query query = session.createQuery(hql);
		List<Object[]> results = query.list();
		return results;
	}



	

	
	
	


	public int getNewSelctionCaseMaxId() {
		Session session=hibernateDao.getSessionFactory().openSession();
		int p=0;
		
		String hql = "Select  coalesce(max(newselectionid),0) from  CaseSummary";
		SQLQuery query = session.createSQLQuery(hql);
		List<Integer> results = query.list();
		for(Integer k:results)
		{
			  
			p=k.intValue()+1;
		}
		
		
		return p;
	}



	public String getNewSelectionKey() 
	{
		String p=null;
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "Select  newcaseToken FROM CaseSummary where newselectionid=(select max(newselectionid) from CaseSummary )";
		// TODO Auto-generated method stub
		
		Query query = session.createQuery(hql);
		List<String> results = query.list();
		for(String k:results)
		{			  
			p=k;
		}
		
		
		return p;
	
	}



	public void saveNewSelectionGrid(List<NewSelectionGrid> newselectiongrid) 
	{
		// TODO Auto-generated method stub
		Session session=hibernateDao.getSessionFactory().openSession();
		 session.beginTransaction();
		
		 for(NewSelectionGrid l:newselectiongrid)
		 {
			 session.save(l);
		 }
		 
			session.getTransaction().commit();
			session.close();
	}
	
	public void deleteScore(Score score) {
		hibernateDao.getSessionFactory().openSession().createQuery("DELETE FROM Score WHERE producttype = '"+score.getProducttype()+"' and subtype='"+score.getSubtype()+"'").executeUpdate();
	}
	
	
	public List<Score> loadScoreByProductType(Integer prodTypeCode,Integer subTypeCode)
    {
        String sql = "select * from Score where producttypecode ="+prodTypeCode+" and subtypecode="+subTypeCode+"";
        
        return hibernateDao.findByNativeSql(sql, Score.class);
    }











	public int getNewSelctionCaseTempMaxId() {
		Session session=hibernateDao.getSessionFactory().openSession();
		int p=0;
		
		String hql = "Select  coalesce(max(newselectionid),0) from  CaseSummaryTemp";
		SQLQuery query = session.createSQLQuery(hql);
		List<Integer> results = query.list();
		for(Integer k:results)
		{
			  
			p=k.intValue()+1;
		}
		
		return p;
	}



	public String getNewSelectionTempKey() 
	{
		
		String p=null;
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "Select  newcaseToken FROM CaseSummaryTemp where newselectionid=(select max(newselectionid) from CaseSummaryTemp )";
		// TODO Auto-generated method stub
		
		Query query = session.createQuery(hql);
		List<String> results = query.list();
		for(String k:results)
		{			  
			p=k;
		}
		
		
		return p;
		 
	}



	public List<Object[]> getAllSSCCodes() 
	{
		
		try
		{
		String p=null;
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "select ssccode,desc1 from SSCCODE ";
		// TODO Auto-generated method stub
		
		Query query = session.createQuery(hql);
		List<Object[]> results = query.list();
		 
		
		return results;
		}
		
		catch(Exception e)
		{
			logger.error(e.getMessage());
			return null;
		}
	}



	public String getStoredTime(String username, int tab) 
	{
		try
		{
		String p=null;
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "select storedtime from CaseSummaryTemp where newselectionid=(select max(newselectionid) from CaseSummaryTemp where username='"+username+"' and tab="+tab+")";
		// TODO Auto-generated method stub
		
		Query query = session.createQuery(hql);
		List<String> results = query.list();
		
		for(String user:results)
		{
			p=user;
		}
		 
		
		return p;
		}
		
		catch(Exception e)
		{
			logger.error(e.getMessage());
			return null;
		}
	}










	public List<String> getAllCustmerNamesInCasessSummary(String username) {
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "select distinct customer from CaseSummary";
		Query query = session.createQuery(hql);
		List<String> results = query.list();
		return results;
	}









	public List<NewSelectionGrid> getDetailsFromNewSelectionGrid(String caseref) {
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "FROM NewSelectionGrid where caseref='"+caseref+"'";
		Query query = session.createQuery(hql);
		List<NewSelectionGrid> results = query.list();
		return results;
	}



	public void deleteFromTempTableTeable(Integer tempid, int tab)
	{
		
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "select newcaseToken,storedtime from   CaseSummaryTemp  where newselectionid="+tempid+" and tab="+tab+"" ;
		Query query = session.createQuery(hql);
		List<Object[]> results = query.list();
		for(Object[] s:results)
			
		{
			String s1=(String)s[0];
			String s2=(String)s[1];
			
			String hql2="delete from  CaseSummaryTemp    where     storedtime='"+s2+"'";
			String hql3="delete from  NewSelectionGridTemp  where    storedtime='"+s2+"'";
			
			Query query1 = session.createQuery(hql2);
			Query query2 = session.createQuery(hql3);
			query1.executeUpdate();
			query2.executeUpdate();
			
		}
		
	}



	public void deleteNecCaseSeletionGrid(String caseref) 
	{
		
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "delete from   NewSelectionGrid  where caseref='"+caseref+"'" ;
		Query query = session.createQuery(hql);
		query.executeUpdate();
	}



	public int getCaseRefernce(String caserefernce)
	{
		int k=0;
		// TODO Auto-generated method stub
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "select count(totalsequenceno) from SequenceNumber where totalsequenceno='"+caserefernce+"'" ;
		SQLQuery query = session.createSQLQuery(hql);
		List<Integer> totalsequencenocount=query.list();
		
		for(Integer l:totalsequencenocount)
		{
			k=l;
			
		}
		return k;
	}



	public void saveCompitiorRepalceGrid(List<CompititorGrid> newselectiongrid) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		 session.beginTransaction();
		
		 for(CompititorGrid l:newselectiongrid)
		 {
			 session.save(l);
		 }
		 
			session.getTransaction().commit();
			session.close();
		
	}



	public void deleteCompitiotorGrid(String caseref) 
	{

		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "delete from  CompititorGrid    where caseref='"+caseref+"'" ;
		Query query = session.createQuery(hql);
		query.executeUpdate();
		
	}



	public void saveCompitorGridTemp(List<CompititorGridTemp> newselectiongrid) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		 session.beginTransaction();
		
		 for(CompititorGridTemp l:newselectiongrid)
		 {
			 session.save(l);
		 }
		 
			session.getTransaction().commit();
			session.close();
		
	}



	public void deleteFromCompititorReplceTemp(Integer tempid, int tab) 
	{
		 
		
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "select newcaseToken,storedtime from   CaseSummaryTemp  where newselectionid="+tempid+" and tab="+tab+"" ;
		Query query = session.createQuery(hql);
		List<Object[]> results = query.list();
		for(Object[] s:results)
			
		{
			String s1=(String)s[0];
			String s2=(String)s[1];
			
			String hql2="delete from  CaseSummaryTemp where   storedtime='"+s2+"'";
			String hql3="delete from  CompititorGridTemp  where  storedtime='"+s2+"'";
			Query query1 = session.createQuery(hql2);
			Query query2 = session.createQuery(hql3);
			query1.executeUpdate();
			query2.executeUpdate();
			
		}
		
	}



	public void deletefromNewCaseSElection(Integer mainid) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "delete  from   CaseSummary   where newselectionid="+mainid+"" ;
		
		Query query1 = session.createQuery(hql);
		query1.executeUpdate();
		// TODO Auto-generated method stub
		
	}



	public List<CompititorGridTemp> getDetailsFromCompititorAndReplaceGridTemp(String storedtime)
	{
	
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "FROM CompititorGridTemp where storedtime='"+storedtime+"'";
		Query query = session.createQuery(hql);
		List<CompititorGridTemp> results = query.list();
		return results;
	}



	public String getStoredTime(String username)
	{
		try
		{
		String p=null;
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "select storedtime from CaseSummaryTemp where newselectionid=(select max(newselectionid) from CaseSummaryTemp where username='"+username+"')";
		// TODO Auto-generated method stub
		
		Query query = session.createQuery(hql);
		List<String> results = query.list();
		
		for(String user:results)
		{
			p=user;
		}
		 
		
		return p;
		}
		
		catch(Exception e)
		{
			logger.error(e.getMessage());
			return null;
		}
	}



	public List<CompititorGrid> getDetailsFromCompititorGrid(String caseref) {
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "FROM CompititorGrid where caseref='"+caseref+"'";
		Query query = session.createQuery(hql);
		List<CompititorGrid> results = query.list();
		return results;
	}







	public void deleteSumtimogridTemp(Integer tempid, int tab) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "select newcaseToken,storedtime from   CaseSummaryTemp  where newselectionid="+tempid+" and tab="+tab+"" ;
		Query query = session.createQuery(hql);
		List<Object[]> results = query.list();
		for(Object[] s:results)
			
		{
			String s1=(String)s[0];
			String s2=(String)s[1];
			
			String hql2="delete from  CaseSummaryTemp    where     storedtime='"+s2+"'";
			String hql3="delete from  SumitomoReplaceTempGrid   where    storedtime='"+s2+"'";
			Query query1 = session.createQuery(hql2);
			Query query2 = session.createQuery(hql3);
			query1.executeUpdate();
			query2.executeUpdate();
			
		}
		
	}



	public void deleteSumitomoReplaceGrid(String caseRef) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "delete from  SumitomoReplaceGrid    where caseref='"+caseRef+"'" ;
		Query query = session.createQuery(hql);
		query.executeUpdate();
		
		
	}






	public void deleteFromSparePartTempTable(Integer tempid, int tab) 
	
	{
		
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "select newcaseToken,storedtime from   CaseSummaryTemp  where newselectionid="+tempid+" and tab="+tab+"" ;
		Query query = session.createQuery(hql);
		List<Object[]> results = query.list();
		for(Object[] s:results)
			
		{
			String s1=(String)s[0];
			String s2=(String)s[1];
			
			String hql2="delete from  CaseSummaryTemp    where     storedtime='"+s2+"'";
			String hql3="delete from  SparePartGridTemp       where    storedtime='"+s2+"'";
			String hql4="delete from SparePartGridInGridTemp where storedtime='"+s2+"'";
			Query query1 = session.createQuery(hql2);
			Query query2 = session.createQuery(hql3);
			Query query4 = session.createQuery(hql4);
			query1.executeUpdate();
			query2.executeUpdate();
			query4.executeUpdate();
			
	
		// TODO Auto-generated method stub
		
	}
		 
	}

	public List<Score> getScoreByFrameSize(Integer frameSize,String stage,String productType,String productSubType,String frameType)
    {
		 String sql =null;
		 if("NA".equalsIgnoreCase(stage))
		 {
			 sql = "select * from Score where "+frameSize+" between framesizefrom and framesizeto and producttype='"+productType+"' and subtype='"+productSubType+"' and frametype='"+frameType+"'";
		 }
		 else
			 sql = "select * from Score where "+frameSize+" between framesizefrom and framesizeto and stage='"+stage+"' and producttype='"+productType+"' and subtype='"+productSubType+"' and frametype='"+frameType+"'";
		 
		 logger.info("======================SQL++++++++++"+sql);
        
        return hibernateDao.findByNativeSql(sql, Score.class);
    }









	public void deletefromsparePartsGrid(String caseRef) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "delete from   SparePartGrid  where caseref='"+caseRef+"'" ;
		String hql2 = "delete from   SparePartGridInGridMain  where caseref='"+caseRef+"'" ;
		Query query = session.createQuery(hql);
		Query query2 = session.createQuery(hql2);
		query.executeUpdate();
		query2.executeUpdate();
		
	}





	public void deleteFromTechQueryTempTable(Integer tempid, int tab) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "select newcaseToken,storedtime from   CaseSummaryTemp  where newselectionid="+tempid+" and tab="+tab+"" ;
		Query query = session.createQuery(hql);
		List<Object[]> results = query.list();
		for(Object[] s:results)
			
		{
			String s1=(String)s[0];
			String s2=(String)s[1];
			
			String hql2="delete from  CaseSummaryTemp    where     storedtime='"+s2+"'";
			String hql3="delete from  TechGridTemp  where    storedtime='"+s2+"'";
			Query query1 = session.createQuery(hql2);
			Query query2 = session.createQuery(hql3);
			query1.executeUpdate();
			query2.executeUpdate();
			
		}
		
	}



	public void saveTechGridTemp(List<TechGridTemp> newselectiongrid) 
	{
		
		Session session=hibernateDao.getSessionFactory().openSession();
		 session.beginTransaction();
		
		 for(TechGridTemp l:newselectiongrid)
		 {
			 session.save(l);
		 }
		 
			session.getTransaction().commit();
			session.close();
		// TODO Auto-generated method stub
		
	}



	public void saveTechQueryGrid(List<TechGrid> newselectiongrid) {
		// TODO Auto-generated method stub
		
		Session session=hibernateDao.getSessionFactory().openSession();
		 session.beginTransaction();
		
		 for(TechGrid l:newselectiongrid)
		 {
			 session.save(l);
		 }
		 
			session.getTransaction().commit();
			session.close();
		// TODO Auto-generated method stub
		
	}



	public void deleteTechQueryGrid(String caseRef) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "delete from   TechGrid  where caseref='"+caseRef+"'" ;
		Query query = session.createQuery(hql);
		query.executeUpdate();
		// TODO Auto-generated method stub
		
	}



	public List<TechGridTemp> getDetailsFromTechGridTemp(String storedtime) {
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "FROM TechGridTemp where storedtime='"+storedtime+"'";
		Query query = session.createQuery(hql);
		List<TechGridTemp> results = query.list();
		return results;
	}



	public List<TechGrid> getDetailsFromTechGrid(String caseref) {
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "FROM TechGrid where caseref='"+caseref+"'";
		Query query = session.createQuery(hql);
		List<TechGrid> results = query.list();
		return results;
	}




	
	
	



	public int getMaxQuationid() {
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "select max(qid) FROM Quotation";
		Query query = session.createQuery(hql);
		List<Integer> results = query.list();
		int k=0;
		for(Integer i:results)
		{
			if(i==null)
			{
				k=1;
			}
			else
			{
			k=i+1;
			}
		}
		return k;
	}

	
	public int getMaxQuationTempid() {
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "select max(qid) FROM QuotationTemp";
		Query query = session.createQuery(hql);
		List<Integer> results = query.list();
		int k=0;
		for(Integer i:results)
		{
			if(i==null)
			{
				k=1;
			}
			else
			{
			k=i+1;
			}
		}
		return k;
	}

	



	
	



	public int getCustmerStatus(String custmer)
	{
		int k=0;
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "select count(account) FROM CustmerDetails where account='"+custmer+"'";
		Query query = session.createQuery(hql);
		List<Long> results = query.list();
		for(Long i:results)
		{
			
			k=i.intValue();
			
		}
		return k;
	}



	public int getCustmerStatusOnCustmerName(String custmer) {
		int k=0;
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "select count(contactname) FROM CustmerDetails where ='"+custmer+"'";
		Query query = session.createQuery(hql);
		List<Long> results = query.list();
		for(Long i:results)
		{
			
			k=i.intValue();
		}
		return k;
	}



	public String getAccountCodefromCutmerMaster(String custmername) 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		String custmercode=null;
		String hql = "select  account FROM CustmerDetails where  accountid like '"+custmername+"' and custmermodifeyStatus IS NULL";
		Query query = session.createQuery(hql);
		List<String> results = query.list();
		for(String s:results)
		{
			custmercode=s;
		}
		
		return custmercode;
	}



	public List<TaxMaster> getAllTaxNmaesOnCountrycode(String countrycode) {
		Session session=hibernateDao.getSessionFactory().openSession();
	
		String hql = "From  TaxMaster where countrycode='"+countrycode+"'";
		Query query = session.createQuery(hql);
		List<TaxMaster> results = query.list();
		 
		
		return results;

	}



	public String getLocalCurrenceyOfCountryCode(String countrycode) {
		Session session=hibernateDao.getSessionFactory().openSession();
		
		String hql = "From  CurrencyCountryMaster  where countrycode='"+countrycode+"'";
		Query query = session.createQuery(hql);
		List<CurrencyCountryMaster> results = query.list();
		 
		String currency=null;
		for(CurrencyCountryMaster d:results)
		{
			
			currency=d.getCurrencey();
			
		}
		return currency;
	}



	public List<GearProductType> getgetpro_grp()
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "From  GearProductType order by gearproducttype";
		Query query = session.createQuery(hql);
		List<GearProductType> results = query.list();
		return  results;
		 
		 
	}



	public List<MTR_KW> getmtr_kw() {
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "From  MTR_KW";
		Query query = session.createQuery(hql);
		List<MTR_KW> results = query.list();
		return  results;
		 
	}



	public List<ExplositionClassfication> getexlositionclassfication() {
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "From  ExplositionClassfication order by explositiontype";
		Query query = session.createQuery(hql);
		List<ExplositionClassfication> results = query.list();
		return  results;
	}



	public List<String> getVolatagesforCase() {
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "select distinct  Voltage from Voltage";
		Query query = session.createQuery(hql);
		List<String> results = query.list();
		return  results;
	}



	public List<RPM> getRpm(int frequency1, int pole) {
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = " FROM RPM  where pole="+pole+"  and  frequencey ="+frequency1+""; 
		Query query = session.createQuery(hql);
		List<RPM> results = query.list();
		return  results;
	}



	public List<CreditStatus> getAllCreditStatus() {
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = " FROM CreditStatus  order by creditstatus "; 
		Query query = session.createQuery(hql);
		List<CreditStatus> results = query.list();
		return  results;
	}



	public String getSalesmanOnSalesCode(String s) {
		Session session=hibernateDao.getSessionFactory().openSession();
		SQLQuery query= session.createSQLQuery("select    top 1 salesman  from salesman where salesmancode='"+s+"'");
		List<String> country=query.list();
	String salesman=null;
	for(String k:country)
	{
		salesman=k;
	}
		return salesman;
	}



	public String getCountryOnCountreycode(String countryname1) {
		Session session=hibernateDao.getSessionFactory().openSession();
		Query query= session.createQuery(" From  Country  where country='"+countryname1+"'");
		List<Country> country=query.list();
	String countryname=null;
	for(Country k:country)
	{
		countryname=k.getCountrycode();
	}
		return countryname;
	}



	public void savequationtermsandconditiongrid(List<TermsAndConditionGrid> qtgrid) {
		Session session=hibernateDao.getSessionFactory().openSession();
		 session.beginTransaction();
		
		 for(TermsAndConditionGrid l:qtgrid)
		 {
			 session.save(l);
		 }
		 
			session.getTransaction().commit();
			session.close();
		
	}

	
	public void savequationtermsandconditiongridTemp(List<TermsAndConditionGridTemp> qtgrid) {
		Session session=hibernateDao.getSessionFactory().openSession();
		 session.beginTransaction();
		
		 for(TermsAndConditionGridTemp l:qtgrid)
		 {
			 session.save(l);
		 }
		 
			session.getTransaction().commit();
			session.close();
		
	}

	
	






	public List<String> getSalesMancode() {
		Session session=hibernateDao.getSessionFactory().openSession();
		Query query= session.createQuery("select salesmancode from Salesman order by salesmancode");
		List<String> q=query.list();

		
		return q;
	}



	public List<String> getSalesManName(String salesmancode) {
		Session session=hibernateDao.getSessionFactory().openSession();
		Query query= session.createQuery("select salesman from Salesman where salesmancode='"+salesmancode+"'");
		List<String> q=query.list();
		return q;

	}



	public List<String> getTaxPercentages() {
		Session session=hibernateDao.getSessionFactory().openSession();
		Query query= session.createQuery("select distinct percentage from TaxMaster where percentage is not null ");
		List<String> q=query.list();
		return q;

	}



	public List<String> getCurrencies() {
		Session session=hibernateDao.getSessionFactory().openSession();
		Query query= session.createQuery("select distinct currencycode  from Country");
		List<String> q=query.list();
		return q;
	}



	public void deleteofProspectCutmerContactDetails(Integer custid)
    {
		// TODO Auto-generated method stub
				Session session=hibernateDao.getSessionFactory().openSession();
				SQLQuery query=session.createSQLQuery("delete from ProspectCustmerContactDetails  where custmerid="+custid+"");
				query.executeUpdate();
	    
    }



	public void saveProspectCustmer(ProspectCustmerDetails custmerdetailsdata)
    {
		Session session=hibernateDao.getSessionFactory().openSession();
		 session.beginTransaction();
		/*session.save(al);*/
		 session.saveOrUpdate(custmerdetailsdata);
		session.getTransaction().commit();
		session.close();
	    
    }



	public List<Object[]> getAllprospectAccountNames()
    { 
		
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "Select account,accountid FROM ProspectCustmerDetails order by accountid";
		Query query = session.createQuery(hql);
		List<Object[]> results = query.list();
		return results;
		
    }



	public List<ProspectCustmerDetails> getAllprospectCustmersDeatails(String custmername1)
    {
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "FROM ProspectCustmerDetails where account='"+custmername1+"'";
		Query query = session.createQuery(hql);
		List<ProspectCustmerDetails> results = query.list();
		
		return results;
    }
















	public void deltefromAllTemmpbasedOnidandqtnsequencenumber(Integer qid) {
		Session session=hibernateDao.getSessionFactory().openSession();
		String query1="delete from QuotationTemp where qid="+qid+"";
		String query2="delete from QuotationGridTemp  where qid="+qid+"";
		String query3="delete from TermsAndConditionGridTemp where qid="+qid+"";
		Query query1a = session.createQuery(query1);
		Query query1b = session.createQuery(query2);
		Query query1c = session.createQuery(query3);
		query1a.executeUpdate();
		query1b.executeUpdate();
		query1c.executeUpdate();
		
		
		
		
		
	}



	public List<Object[]> getAllProspectAccountNames()
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "Select account,accountid FROM ProspectCustmerDetails    order by accountid";
		Query query = session.createQuery(hql);
		List<Object[]> results = query.list();
		return results;
	}



	public String getCountryOnCountreycodegforcurrencey(String billingCountries) {
		Session session=hibernateDao.getSessionFactory().openSession();
		Query query= session.createQuery(" From  Country  where country='"+billingCountries+"'");
		List<Country> country=query.list();
	String cuurenceyname=null;
	for(Country k:country)
	{
		cuurenceyname=k.getCurrencycode();
	}
		return cuurenceyname;
	}



	public String getStoredTimeOnTabandQtnmaster(String username, int tab,
			String qtnmaster) {
		
		try
		{
		String p=null;
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "select storedtime from CaseSummaryTemp where newselectionid=(select max(newselectionid) from CaseSummaryTemp where username='"+username+"' and tab="+tab+" and qtnMaster='"+qtnmaster+"')";
		// TODO Auto-generated method stub
		
		Query query = session.createQuery(hql);
		List<String> results = query.list();
		
		for(String user:results)
		{
			p=user;
		}
		 
		
		return p;
		}
		
		catch(Exception e)
		{
			logger.error(e.getMessage());
			return null;
		}
		// TODO Auto-generated method stub
		
	}



	public void deleteDepatmentsFromCase(String caseRef, Integer caseid) 
	{
		String query="delete from  CDepartment where  caserefno='"+caseRef+"'";
		Session session=hibernateDao.getSessionFactory().openSession();
		Query executequery = session.createQuery(query);
		executequery.executeUpdate();
		// TODO Auto-generated method stub
		
	}



	public void saveCDepartmentData(List<CDepartment> cdepartmentdata) {
		// TODO Auto-generated method stub
		Session session=hibernateDao.getSessionFactory().openSession();
		 session.beginTransaction();
		for(CDepartment data:cdepartmentdata)
		{
			session.save(data);
		}
		
		session.getTransaction().commit();
		session.close();
	}



	public Integer getMaxCaseId() {
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "select max(newselectionid) FROM  CaseSummary";
		Query query = session.createQuery(hql);
		List<Integer> results = query.list();
		int k=0;
		for(Integer i:results)
		{
			if(i==null)
			{
				k=1;
			}
			else
			{
			k=i+1;
			}
		}
		return k;
	}



	public void deleteCTDepartment(String caseRef, int tab, Integer tempid) {
		Session session=hibernateDao.getSessionFactory().openSession();
		String query="delete from CTDepartment where caserefno='"+caseRef+"' and caseid="+tempid+" and tab="+tab+"";
		Query deletequery = session.createQuery(query);
		deletequery.executeUpdate();
	}



	public Integer getMaxCaseTempId() {
		
		Session session=hibernateDao.getSessionFactory().openSession();
		String hql = "select max(newselectionid) FROM  CaseSummaryTemp";
		Query query = session.createQuery(hql);
		List<Integer> results = query.list();
		int k=0;
		for(Integer i:results)
		{
			if(i==null)
			{
				k=1;
			}
			else
			{
			k=i+1;
			}
		}
		return k;
	 
	}



	public void saveOfCaseTempDepartment(List<CTDepartment> ctDepatmentlist) {
		Session session=hibernateDao.getSessionFactory().openSession();
		 session.beginTransaction();
		for(CTDepartment data:ctDepatmentlist)
		{
			session.save(data);
		}
		
		session.getTransaction().commit();
		session.close();
		
	}



	public List<String> getAllCustmerNamesFoeCase() 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		 String casesummeyquery="select distinct customer from CaseSummary where casestatus=1";
		 String casesummeytempquery="select  distinct customer from CaseSummaryTemp where casestatus=1";
		Query casesummeyquerydata= session.createQuery(casesummeyquery);
		Query  casesummeytempquerydata=session.createQuery(casesummeytempquery);
		
		List<String> data1=casesummeyquerydata.list();
		 
		ArrayList<String> al=new ArrayList<String>();
		
		
		for(String d:data1)
		{
			al.add(d);
		}
		
		List<String> data2=casesummeytempquerydata.list();
		for(String d:data2)
		{
			al.add(d);
		}
		
		
		return al;
		
		
	}
	
	
	
	public List<String> getAllCustmerNamesForQuatation() 
	{
		Session session=hibernateDao.getSessionFactory().openSession();
		 String casesummeyquery="select distinct custName from Quotation where quatationstatus=1";
		 String casesummeytempquery="select distinct custName from QuotationTemp where quatationstatus=1";
		Query casesummeyquerydata= session.createQuery(casesummeyquery);
		Query  casesummeytempquerydata=session.createQuery(casesummeytempquery);
		
		List<String> data1=casesummeyquerydata.list();
		List<String> data2=casesummeytempquerydata.list();
		ArrayList<String> al=new ArrayList<String>();
		
		
		for(String d:data1)
		{
			al.add(d);
		}
		
		
		for(String d:data2)
		{
			al.add(d);
		}
		
		
		return al;
		
		
	}





	
	
	 
}

	 
	 	


