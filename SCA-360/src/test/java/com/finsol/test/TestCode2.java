package com.finsol.test;

import org.hibernate.SessionFactory;
import org.junit.Test;
import static org.junit.Assert.*;  

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

 
 
public class TestCode2 extends TestCode {
	@Autowired
	private SessionFactory sessionFactory;
	 
	 @Test
	    public void test_ml_always_return_true5555()
	 {
		 
		 int k=4;
		 assertEquals(4,k);
		 
	    }
	 
 
}
