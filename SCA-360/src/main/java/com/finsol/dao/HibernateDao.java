package com.finsol.dao;


import java.io.Serializable;
import java.lang.reflect.Field;
import java.lang.reflect.Type;
import java.util.Collection;
import java.util.List;
import org.apache.log4j.Logger;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;
import com.finsol.model.Employee;



/**
 * @author RamaKrishna
 * 
 */
public class HibernateDao extends HibernateDaoSupport
{
	private static final Logger logger = Logger.getLogger(HibernateDao.class);
	
	@Autowired
	private SessionFactory sessionFactory;
    
    /**
     * @see This deletes entity Object
     * @param entity entity
     * @throws DataAccessException DataAccessException
     */
    public void delete(Object entity) throws DataAccessException
    {
        getHibernateTemplate().delete(entity);
    }

    /*
     * @see IDao.deleteAll
     */
    public void deleteAll(Collection entities) throws DataAccessException
    {
        getHibernateTemplate().deleteAll(entities);
    }

    /*
     * @see IDao.find
     */
    public List find(String query, Object... values) throws DataAccessException
    {
        return getHibernateTemplate().find(query, values);
    }

    /*
     * @see IDao.load
     */
    @SuppressWarnings("unchecked")
    public Object load(Class type, Serializable classId) throws DataAccessException
    {
        return getHibernateTemplate().load(type, classId);
    }

    /*
     * @see IDao.load
     */
    @SuppressWarnings("unchecked")
    public List loadAll(Class type) throws DataAccessException
    {
        return getHibernateTemplate().loadAll(type);
    }

    /*
     * @see IDao.saveOrUpdate
     */
    public void saveOrUpdate(Object entity) throws DataAccessException
    {
        getHibernateTemplate().saveOrUpdate(entity);
    }

    /*
     * @see IDao.saveOrUpdate
     */
    @SuppressWarnings("unchecked")
    public void saveOrUpdateAll(Collection entities) throws DataAccessException
    {
        getHibernateTemplate().saveOrUpdateAll(entities);
    }

    /*
     * @see IDao.flush
     */
    public void flush()
    {
        getHibernateTemplate().flush();
    }

    /*
     * @see IDao.clear
     */
    public void clear()
    {
        getHibernateTemplate().clear();
    }

    /*
     * @see IDao.merge
     */
    public void merge(Object object) throws DataAccessException
    {
        getHibernateTemplate().merge(object);
    }

    /*
     * @see IDao.refresh
     */
    public void refresh(Object object)
    {
        getHibernateTemplate().refresh(object);
    }

    @SuppressWarnings("unchecked")
    public List findByCriteria(DetachedCriteria criteria)
    {
        return getHibernateTemplate().findByCriteria(criteria);
    }
	
    public Object get(Class type, Serializable classId)
    {
        return getHibernateTemplate().get(type, classId);
    }
	
    /**
     * returns a List by querying using start and limit values
     */
    @SuppressWarnings("rawtypes")
    public List findByFilter(String sql)
    {
        Session session = getHibernateTemplate().getSessionFactory().getCurrentSession(); // openSession();
        Query query = session.createQuery(sql);

        //query.setFirstResult(Integer.parseInt(GridOptions.getGridOptions().getStartValue()));
       // query.setMaxResults(Integer.parseInt(GridOptions.getGridOptions().getLimitValue()));
        List labels = query.list();
        // session.close();
        return labels;
    }

    public List findByNativeSql(String sql, Class entityClassName)
    {
        Session session = getSessionFactory().openSession(); // openSession();
        Query query = session.createSQLQuery(sql).addEntity(entityClassName);
        //session.close();
        return query.list();
    }
    
    public Object getCount(String sql)
    {
        try
        {
            Session session = getHibernateTemplate().getSessionFactory().getCurrentSession(); // openSession();
            Query query = session.createQuery(sql);
            List list = query.list();
            // session.close();
            return list.get(0);
        }
        catch (DataAccessException e)
        {
           // s_log.error(e.getMessage(), e);
            return null;
        }
    }
    public Object getSum(String sql)
    {
        try
        {
            Session session = getHibernateTemplate().getSessionFactory().getCurrentSession(); // openSession();
            Query query = session.createQuery(sql);
            List list = query.list();
            // session.close();
            return list.get(0);
        }
        catch (DataAccessException e)
        {
           // s_log.error(e.getMessage(), e);
            return null;
        }
    }
    
    public List findByStartAndEndIndex(String sql, int startIndex, int endIndex) throws DataAccessException
    {
        Session session = getHibernateTemplate().getSessionFactory().getCurrentSession();
         Query query = session.createQuery(sql);
         query.setFirstResult(Integer.valueOf(startIndex));
         query.setMaxResults(Integer.valueOf(endIndex));
        return query.list();
    }
    
    public List<Employee> getCriteria()
    {
    	Session session = getHibernateTemplate().getSessionFactory().getCurrentSession();
    	return (List<Employee>) session.createCriteria(Employee.class).list();
    }
    
    public Object getMaxValue(String sql)
    {
        try
        {
            Session session = getSession();
            SQLQuery query=session.createSQLQuery(sql);
            List list = query.list();

            return list.get(0);
        }
        catch (Exception e)
        {
        	logger.error(e.getMessage(), e);
            return null;
        }
    }
    
    
    public List getColumns(String qry)
    {
        Session session = getSession();
       // Query query = session.createSQLQuery(sql).addEntity(entityClassName);
       // return query.list();
    	
        Query q1 = session.createQuery(qry);
        List columnList=  q1.list();            	
    	return columnList;
    }
    
    public Object getID(String sql)
    {
        try
        {
            Session session = getSession();
            Query query = session.createQuery(sql);
            List list = query.list();
            if(list.isEmpty() || list==null)
            {
            	return null;
            }
            else
            	return list.get(0);
        }
        catch (Exception e)
        {
        	logger.error(e.getMessage(), e);
            return null;
        }
    }
    
    public List findBySql(String sql)
    {
        Session session = getSession();;
        Query query = session.createSQLQuery(sql);
        return query.list();
    }
    public Object getRowByColumn(Class entityClassName,String fieldName,String fieldValue)
    {
    	Criteria criteria = getSession().createCriteria(entityClassName);
    	Object object = criteria.add(Restrictions.eq(fieldName, fieldValue)).uniqueResult();
    	return object;
    
    }
    public List findBySqlCriteria(String sql)
    {
        Session session = getSession();;
        Query query = session.createSQLQuery(sql);
        query.setResultTransformer(Criteria.ALIAS_TO_ENTITY_MAP);
        return query.list();
    }
    
    public Object findUniqueResult(Object entityClassName,String Columname,String value) throws Exception
    {
    	try
    	{
	    	Session session = getSession();;
		    Criteria criteria = session.createCriteria(entityClassName.getClass());  
		    
		    Field typeField = entityClassName.getClass().getDeclaredField(Columname);
	        typeField.setAccessible(true);
	        Type type = typeField.getType();
	
	        if(type == String.class)        
	        	criteria.add(Restrictions.eq(Columname,value.toString()));
	        else
	        	criteria.add(Restrictions.eq(Columname,Integer.parseInt(value)));	        
		
		    Object ob = criteria.uniqueResult();
		    return ob;
	    }
    	catch(Exception e)
	    {
			logger.info(e.getCause(), e);
			return null;
	    }
    }
    
} 