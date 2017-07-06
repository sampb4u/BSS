package com.finsol.dao;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/*import com.finsol.model.AccountDetails;
import com.finsol.model.AccountGroupDetails;
import com.finsol.model.AccountGroupSummary;
import com.finsol.model.AccountSubGroupDetails;
import com.finsol.model.AccountSubGroupSummary;
import com.finsol.model.AccountSummary;*/
/**
 * @author naidu
 *
 */
@Repository("BSS_CommonDao")
@Transactional
public class BSS_CommonDao {
	
private static final Logger logger = Logger.getLogger(BSS_CommonDao.class);
	
	@Autowired	
	private HibernateDao hibernateDao;
	
	
	public Object getMaxValue(String sql)
    {
        return hibernateDao.getMaxValue(sql);
    }	
	
	public List getDropdownNames(String sqlQuery)
    {
        List dropDownList=hibernateDao.findBySqlCriteria(sqlQuery);
        if(dropDownList.size()>0 && dropDownList!=null)
        	return dropDownList;
        else
        	return null;         
    }
	
	 public Object getEntityByIdVarchar(String id,Class className) 
	 {	
	 return (Object) hibernateDao.getSessionFactory().openSession().get(className, id);
	 }

	 
	 public Object getEntityByDate(Date id,Class className) 
		{		
			return (Object) hibernateDao.getSessionFactory().openSession().get(className, id);
		}
	 public Object getEntityById(Integer id,Class className) 
		{		
			return (Object) hibernateDao.getSessionFactory().openSession().get(className, id);
		}
	 /*********Added by Ravichandra on 08-05-2017 **************/
	 public List getresponseforrecordsQAIssues(String data) 
	 	{		
		 	String caseref = "";
		 	HashMap temp = new HashMap();
		 	List newlist = new ArrayList();
		 	Session session=hibernateDao.getSessionFactory().openSession();
			String sql="select distinct casereferenceno from QAIssueDetails where serialno='"+data+"'";
			Query query = session.createSQLQuery(sql);
			List results = query.list();
			if(results!=null && results.size()>0)
			{
				caseref = (String)results.get(0);
				temp.put("caserefno",caseref);
				temp.put("id","0");
			}
			else
			{
				sql="select distinct casereferenceno from QAIssueExtDetails where serialno='"+data+"'";
				Query q = session.createSQLQuery(sql);
				List results1 = q.list();
				if(results1!=null && results1.size()>0)
				{
					caseref = (String)results1.get(0);
					temp.put("caserefno",caseref);
					temp.put("id","1");
				}
			}
		newlist.add(temp);
		return newlist;
		}
	 
}
