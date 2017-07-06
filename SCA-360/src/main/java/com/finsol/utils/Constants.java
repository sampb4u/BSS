package com.finsol.utils;

import java.util.HashMap;


/**
 * This class is used to declare constants
 * 
 * @author Rama Krishna
 * 
 */
public class Constants {
	
    private Constants()
    {

    }
    
    public static final String USER="USER";	   
    public static final HashMap<String,String> DropdownName =new HashMap<String,String>();
        
    static
	{

    	DropdownName.put("BSS_Region", "region");
	}
    
	public static String getFileExtension(String fileName) 
	{
        if(fileName.lastIndexOf(".") != -1 && fileName.lastIndexOf(".") != 0)
        return fileName.substring(fileName.lastIndexOf(".")+1);
        else return "";
	}
	
	public static class GenericDateFormat
    {
        public static final String DATE_FORMAT = "dd-MM-yyyy";
    }

}
