/**
 *
 */
package com.finsol.utils;

import java.sql.Time;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import org.apache.log4j.Logger;



/**
 * Includes all methods realted to dates
 * 
 * @author Rama Krishna
 * 
 */

public class DateUtils
{
	private static final Logger logger = Logger.getLogger(DateUtils.class);

    /**
     * static final members for various date formats useful in the application
     */
    public static final SimpleDateFormat YYYY_MM_DD_TIME = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss.SS");
    public static final SimpleDateFormat DD_MM_YYYY = new SimpleDateFormat("dd-MM-yyyy");
    public static final SimpleDateFormat DD_MM_YYYY_SLASH = new SimpleDateFormat("dd/MM/yyyy");
    public static final SimpleDateFormat YYYY_MM_DD = new SimpleDateFormat("yyyy-MM-dd");
    public static final SimpleDateFormat HH_MM_SS_SS = new SimpleDateFormat("hh:mm:ss.SS");
    public static final SimpleDateFormat MM_DD_YYYY_TIME = new SimpleDateFormat("MM/dd/yyyy hh:mm:ss.SS");
    public static final SimpleDateFormat MM_DD_YYYY = new SimpleDateFormat("MM/dd/yyyy");
    public static final SimpleDateFormat MM_DD_YYYY_TIME_SHORT = new SimpleDateFormat("MM/dd/yyyy hh:mm a");
    public static final SimpleDateFormat DD_MM_YYYY_TIME_SHORT = new SimpleDateFormat("dd/MM/yyyy hh:mm a");
    public static final SimpleDateFormat FULL_DATE_WITH_DAY = new SimpleDateFormat("EEE MMM dd, yyyy hh:mm a");
    public static final SimpleDateFormat MM_DD_YYYY_FULL_WITH_DAY = new SimpleDateFormat("MM/dd/yyyy EEE hh:mm a");
    public static final SimpleDateFormat TIME_FORMAT_ZONE = new SimpleDateFormat("K:mm a, z");
    public static final SimpleDateFormat TIME_FORMAT = new SimpleDateFormat("h:mm a");
    public static final SimpleDateFormat DD_MM_YYYY_HH_MM = new SimpleDateFormat("dd/MM/yyyy hh:mm");
    public static final SimpleDateFormat DEFAULT_TIMESTAMP_FORMAT = MM_DD_YYYY_TIME;
    public static final SimpleDateFormat DEFAULT_DATE_FORMAT = DD_MM_YYYY_SLASH;
    public static final SimpleDateFormat DEFAULT_DATETIME_FORMAT = DD_MM_YYYY_TIME_SHORT;

    public static String formatDate(Date date, String dateFormat)
    {
        if (date != null)
        {
            if (dateFormat == null)
            {
                dateFormat = "dd/MM/yyyy";
            }
            DateFormat formatter = new SimpleDateFormat(dateFormat);

            return formatter.format(date);
        }
        return null;
    }

    /**
     * Used to format the date from sal format to dd/mm/yyyy format
     * 
     * @param date
     * @return string in dd/mm/yyyy format
     */
    public static String formatDate(String date)
    {
        try
        {
            if (date != null)
            {
                SimpleDateFormat dbFormat = new SimpleDateFormat("yyyy-MM-dd");

                SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
                return df.format(dbFormat.parse(date));
            }
        } catch (ParseException e)
        {
            // e.printStackTrace();
            logger.error("Date Parsing Exception : " + e.getMessage());
        }

        return date;
    }

    /**
     * used to convert String date to sql date
     * 
     * @param date
     * @return
     */
    public static java.sql.Date getSqlDateFromString(String date)
    {
        try
        {
            if (date != null)
            {
                DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
                java.util.Date dat = formatter.parse(date);
                Calendar c = formatter.getCalendar();
                c.setTime(dat);
                long l = c.getTimeInMillis();
                return new java.sql.Date(l);
            }
            return null;
        } catch (ParseException e)
        {
            logger.error(e.getMessage(), e);
            return null;
        } catch (Exception e)
        {
            logger.error(e.getMessage(), e);
            return null;
        }
    }

    /**
     * used to convert String date to sql date
     * 
     * @param date
     * @return
     */
    public static java.sql.Date getSqlDateFromString(String date, String dateFormat)
    {
        try
        {
            if (date != null)
            {
                if (dateFormat == null)
                {
                    dateFormat = "dd/MM/yyyy";
                }
                DateFormat formatter = new SimpleDateFormat(dateFormat);
                java.util.Date dat = formatter.parse(date);
                Calendar c = formatter.getCalendar();
                c.setTime(dat);
                long l = c.getTimeInMillis();
                return new java.sql.Date(l);
            }
            return null;
        } catch (ParseException e)
        {
            logger.error(e.getMessage());
            return null;
        }
    }

    /**
     * To get previous day's date for the entered date string
     * 
     * @param dateStr
     * @return sql date
     */
    public static java.sql.Date getPreviousDayDate(String dateStr)
    {
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        java.util.Date yesterday = null;
        try
        {
            GregorianCalendar gc = new GregorianCalendar();
            java.util.Date d = sdf.parse(dateStr);
            gc.setTime(d);
            int dayBefore = gc.get(Calendar.DAY_OF_YEAR);
            gc.roll(Calendar.DAY_OF_YEAR, -1);
            int dayAfter = gc.get(Calendar.DAY_OF_YEAR);
            if (dayAfter > dayBefore)
            {
                gc.roll(Calendar.YEAR, -1);
            }
            gc.get(Calendar.DATE);
            yesterday = gc.getTime();
        } catch (Exception e)
        {
            e.printStackTrace();
        }
        return getSqlDateFromString(sdf.format(yesterday));
    }

    /**
     * method to getCurrent Time Stamp as String
     * 
     * @return
     */

    public static final String getCurrentTimestamp()
    {
        Date date = new Date();
        return DEFAULT_TIMESTAMP_FORMAT.format(date);
    }

    /**
     * method to get timestamp according to dateformat given
     * 
     * @param format
     * @return
     */

    public static final String getCurrentTimestamp(SimpleDateFormat format)
    {
        Date date = new Date();
        return DEFAULT_TIMESTAMP_FORMAT.format(date);
    }

    /**
     * uses the default DEFAULT_DATE_FORMAT or DEFAULT_DATETIME_FORMAT based on
     * input length
     * 
     * @param dateString
     * @return java.util.Date
     * @see DEFAULT_DATE_FORMAT
     * @see DEFAULT_DATETIME_FORMAT
     */

    public static final Date getDate(String dateString)
    {
        try
        {
            if (dateString != null && dateString.length() < 13)
            {
                return YYYY_MM_DD.parse(dateString); // return date only
            } else
            {
                //
                return DEFAULT_DATE_FORMAT.parse(dateString); // return
                                                              // timestamp
                                                              // column
            } // end if
        } catch (ParseException e)
        {
            logger.error(e.getMessage());
            return null;
        }
    } // end

    /**
     * 
     * @param format
     * @return
     */
    public static Date getCurrentDate(String format)
    {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(format);
        try
        {
            return simpleDateFormat.parse(getCurrentDateAsString(format));
        } catch (ParseException e)
        {
            logger.error(e.getStackTrace());
        }
        return null;
    }

    /**
     * 
     * @param format
     * @return
     */
    public static String getCurrentDateAsString(String format)
    {
        Date data = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(format);
        return simpleDateFormat.format(data);
    }

    /**
     * uses the default DEFAULT_DATE_FORMAT or DEFAULT_DATETIME_FORMAT based on
     * input length
     * 
     * @param dateString
     * @return java.util.Date
     * @see DEFAULT_DATE_FORMAT
     * @see DEFAULT_DATETIME_FORMAT
     */

    public static final Date getDate(String dateString, String format)
    {
        try
        {
            if (format == null)
            {
                format = "dd/MM/yyyy";
            }
            return new SimpleDateFormat(format).parse(dateString); // return
                                                                   // date only
        } catch (ParseException e)
        {
            e.printStackTrace();
            logger.error(e.getMessage(), e);
            return null;
        }
    } // end

    /**
     * to get java.sql.Date instance of current System date
     * 
     * @return
     */
    public static java.sql.Date getCurrentSystemDate()
    {
        return new java.sql.Date(Calendar.getInstance().getTime().getTime());
    }

    /**
     * to get java.sql.Time from current System time
     * 
     * @return
     */
    public static java.sql.Time getCurrentSystemTime()
    {
        return new java.sql.Time(Calendar.getInstance().getTime().getTime());
    }

    /**
     * to get java.sql.Timestamp from current System time
     * 
     * @return
     */
    public static java.sql.Timestamp getCurrentSystemTimestamp()
    {
        return new java.sql.Timestamp(Calendar.getInstance().getTime().getTime());
    }

    /**
     * 
     * @param date
     * @return
     */
    public static java.sql.Date getSqlDateFromUtilDate(java.util.Date date)
    {
        return new java.sql.Date(date.getTime());
    }

    /**
     * 
     * @return
     */
    public static String getCurrentTimeInStringFormat()
    {
        Date d = new Date();
        SimpleDateFormat ft = new SimpleDateFormat("yyyyMMddhhmmss");
        return ft.format(d);
    }

    /**
     * 
     * @param monthValue
     * @param yearValue
     * @return
     */
    public static int getMaxDateInMonth(String monthValue, String yearValue)
    {
        int maxDay = 0;
        try
        {
            int month = Integer.parseInt(monthValue);
            int year = Integer.parseInt(yearValue);
            GregorianCalendar cal = new GregorianCalendar(year, (month - 1), 1); // Get
                                                                                 // the
                                                                                 // number
                                                                                 // of
                                                                                 // days
                                                                                 // in
                                                                                 // that
                                                                                 // month
            maxDay = cal.getActualMaximum(Calendar.DAY_OF_MONTH);
            logger.info("Max Day: " + maxDay);
        } catch (Exception e)
        {
            e.printStackTrace();
            return 0;
        }
        return maxDay;
    }

    /**
     * 
     * @param date1
     * @param date2
     * @return
     */
    public static String compareDates(java.sql.Date date1, java.sql.Date date2)
    {
        Calendar calendar1 = Calendar.getInstance();
        calendar1.setTime(date1);
        Calendar calendar2 = Calendar.getInstance();
        calendar2.setTime(date2);
        String str = "";
        long timeinmillis1 = calendar1.getTimeInMillis();
        long timeinmillis2 = calendar2.getTimeInMillis();
        if (timeinmillis1 > timeinmillis2)
        {
            str = "DATE1";
        } else
        {
            str = "DATE2";
        }

        return str;
    }

    public static long calculateAge(java.sql.Date dateOfBirth)
    {
        Calendar calendar1 = Calendar.getInstance();
        calendar1.setTime(dateOfBirth);
        Calendar calendar2 = Calendar.getInstance();
        return (calendar2.get(Calendar.YEAR) - calendar1.get(Calendar.YEAR));

    }

    public static int compareDaysBetweenDates(java.sql.Timestamp date1, java.sql.Timestamp date2)
    {
        Calendar calendar1 = Calendar.getInstance();
        java.util.Date date3 = new java.util.Date(date1.getTime());
        calendar1.setTime(date3);
        Calendar calendar2 = Calendar.getInstance();
        java.util.Date date4 = new java.util.Date(date2.getTime());
        calendar2.setTime(date4);
        int daysBetween =1;
        Calendar date = (Calendar) calendar1.clone();
        while (date.before(calendar2))
        {
            date.add(Calendar.DAY_OF_MONTH, 1);
            if (date.get(Calendar.DAY_OF_MONTH) < calendar2.get(Calendar.DAY_OF_MONTH))
            {
                daysBetween++;
            }
        }
        return daysBetween;

    }

    /**
     * 
     * @param dateStr
     * @param format
     * @return
     */
    public static Time getSqlTimeStamp(String dateStr, String format)
    {
        Date date = getDate(dateStr, format);
        return new Time(date.getTime());
    }

    public static long getDateTimeInMilliSeconds(String dateStr, String timeStr)
    {
        // Make a String that has a date in it, with MEDIUM date format
        // and SHORT time format.
        String dateString = dateStr + " " + timeStr;

        // Get the default MEDIUM/SHORT DateFormat
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        Date date = null;
        // Parse the date
        try
        {
            date = format.parse(dateString);
        } catch (ParseException pe)
        {
            System.out.println("ERROR: could not parse date in string \"" + dateString + "\"");
        }
        return date.getTime();
    }

    public static int daysBetween(java.sql.Date d1, java.sql.Date d2)
    {
        return (int) ((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
    }

    /**
     * to get java.sql.Time from String time
     * 
     * @return
     */
    @SuppressWarnings("deprecation")
    public static java.sql.Time getSqlTimeFromString(String timeStr)
    {
        try
        {
            if (timeStr != null)
            {
                String[] ampmSplitArr = timeStr.split(" ");
                String time = ampmSplitArr[0];
                String[] actualTime = time.split(":");
                if (timeStr.contains("AM"))
                {
                    if (Integer.parseInt(actualTime[0]) == 12)
                    {
                        return new java.sql.Time(Integer.parseInt(actualTime[0]) + 12, Integer.parseInt(actualTime[1]),
                                Integer.parseInt("00"));
                    } else
                    {
                        return new java.sql.Time(Integer.parseInt(actualTime[0]), Integer.parseInt(actualTime[1]),
                                Integer.parseInt("00"));
                    }
                } else
                {
                    if (Integer.parseInt(actualTime[0]) == 12)
                    {
                        return new java.sql.Time(Integer.parseInt(actualTime[0]), Integer.parseInt(actualTime[1]),
                                Integer.parseInt("00"));
                    } else
                    {
                        return new java.sql.Time(Integer.parseInt(actualTime[0]) - 12, Integer.parseInt(actualTime[1]),
                                Integer.parseInt("00"));
                    }
                }
            }
        } catch (Exception e)
        {
            e.printStackTrace();
            return null;
        }
        return null;
    }

    public static String formatTime(String timeStr)
    {
        String[] timeArr = timeStr.split(":");
        String time = "";
        int hours = Integer.parseInt(timeArr[0]);
        if (hours < 12 && hours != 0)
        {
            time = hours + ":" + timeArr[1] + " AM";
        } else if (hours == 12)
        {
            time = hours + ":" + timeArr[1] + " PM";
        } else if (hours == 0)
        {
            time = 12 + ":" + timeArr[1] + " AM";
        } else
        {
            hours = hours - 12;
            time = hours + ":" + timeArr[1] + " PM";
        }
        return time;
    }

    public static double timeDifference(long latertime, long earliertime)
    {
        double difference = latertime - earliertime;

        double noOfHours = (difference) / (1000 * 60 * 60);

        /*
         * double daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
         * difference -= daysDifference * 1000 * 60 * 60 * 24;
         * 
         * double hoursDifference = Math.floor(difference / 1000 / 60 / 60);
         * difference -= hoursDifference * 1000 * 60 * 60;
         * 
         * double minutesDifference = Math.floor(difference / 1000 / 60);
         * //difference -= minutesDifference * 1000 * 60;
         * 
         * double secondsDifference = Math.floor(difference / 1000);
         * 
         * logger.info("hoursDifference : " + hoursDifference);
         * 
         * return (long) hoursDifference;
         */

        logger.info("No Of Hours Difference : " + noOfHours);
        return noOfHours;
    }

    public static long timeDiffrenceInMinuts(long laterTime, long earliyerTime)
    {
        long difference = laterTime - earliyerTime;
        int noOfMinuts = (int) Math.floor(difference / 1000 / 60);
        logger.info("No Of minuts Difference : " + noOfMinuts);
        return noOfMinuts;

    }

    public static long dateDifference(long latertime, long earliertime)
    {
        double difference = latertime - earliertime;

        double daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
        difference -= daysDifference * 1000 * 60 * 60 * 24;

        double hoursDifference = Math.floor(difference / 1000 / 60 / 60);
        difference -= hoursDifference * 1000 * 60 * 60;

        double minutesDifference = Math.floor(difference / 1000 / 60);
        difference -= minutesDifference * 1000 * 60;

        double secondsDifference = Math.floor(difference / 1000);

        // logger.info("daysDifference : " + daysDifference);

        return (long) daysDifference;
    }

    /*
     * public static void main(String a[]) { String dateString = "2010-08-30";
     * String timeStr = "00:00:00";
     * System.out.println("Sql Time : "+getSqlTimeFromString("11:00 AM"));
     * System.out.println("Sql Time : "+getSqlTimeFromString("12:00 AM"));
     * 
     * System.out.println("Sql Time : "+getSqlTimeFromString("11:00 PM"));
     * System.out.println("Sql Time : "+getSqlTimeFromString("12:00 PM"));
     * java.sql.Date d2 = new java.sql.Date(new Date("2010-06-23").getTime());
     * java.sql.Date d1 = new java.sql.Date(new Date("2010-07-08").getTime());
     * Calendar cal = Calendar.getInstance();
     * 
     * int day = cal.get(Calendar.DATE); int month = cal.get(Calendar.MONTH) +
     * 1; int year = cal.get(Calendar.YEAR); int dow =
     * cal.get(Calendar.DAY_OF_WEEK); int dom = cal.get(Calendar.DAY_OF_MONTH);
     * int doy = cal.get(Calendar.DAY_OF_YEAR);
     * 
     * System.out.println("Current Date: " + cal.getTime());
     * System.out.println("Day: " + day); System.out.println("Month: " + month);
     * System.out.println("Year: " + year); System.out.println("Day of Week: " +
     * dow); System.out.println("Day of Month: " + dom);
     * System.out.println("Day of Year: " + doy); }
     */

    public static void main(String arg[])
    {
        System.out.println(getTime("2:00 PM"));
    }

    public static String getTime(String time)
    {
        String subTime = time.substring(0, time.length() - 3);
        if (time.contains("PM"))
        {
            int hours = Integer.parseInt(subTime.substring(0, subTime.indexOf(':')));
            subTime = subTime.replaceFirst("" + hours, "" + (hours + 12));
        }
        return subTime;
    }

    /**
     * used to convert String date to sql date
     * 
     * @param date
     * @return
     */
    public static long getLongFromDateString(String date, String dateFormat)
    {
        long l = 0;
        try
        {
            if (date != null)
            {
                if (dateFormat == null)
                {
                    dateFormat = "dd/MM/yyyy";
                }
                DateFormat formatter = new SimpleDateFormat(dateFormat);
                java.util.Date dat = formatter.parse(date);
                Calendar c = formatter.getCalendar();
                c.setTime(dat);
                l = c.getTimeInMillis();
                return l;
            }
        } catch (ParseException e)
        {
            logger.error(e.getMessage(), e);
        }
        return l;
    }

    /**
     * prepares sqlTimeStamp from the dateTimeString with the specified format
     * 
     * @param dateTimeString
     * @param format
     * @return
     */
    public static java.sql.Timestamp getSqlTimeStampFromDateTimeString(String dateTimeString, String format)
    {
        java.sql.Timestamp sqlTimestamp = null;
        try
        {
            if (dateTimeString != null)
            {
                if (format == null)
                {
                    format = "dd/MM/yyyy hh:mm a";
                }
                SimpleDateFormat simpleDateFormat = new SimpleDateFormat(format);
                Date utilDate = (Date) simpleDateFormat.parse(dateTimeString);
                sqlTimestamp = new java.sql.Timestamp(utilDate.getTime());
            }
        } catch (ParseException e)
        {
            logger.error(e.getMessage(), e);
        }
        return sqlTimestamp;
    }

    /**
     * prepares utilDate from sql timeStamp
     * 
     * @param sqlTimeStamp
     * @return
     */
    public static java.util.Date getUtilDateFromTimeStamp(java.sql.Timestamp sqlTimeStamp)
    {
        long milliseconds = sqlTimeStamp.getTime() + (sqlTimeStamp.getNanos() / 1000000);
        return new java.util.Date(milliseconds);
    }

    public static String getStringFromTimestamp(Timestamp timestamp, String dateFormat)
    {
        logger.info("Inside the dateutil function : " + dateFormat);
        if (timestamp != null)
        {
            if (dateFormat == null)
            {
                dateFormat = "dd/MM/yyyy";
            }
            DateFormat formatter = new SimpleDateFormat(dateFormat);
            String format = formatter.format(timestamp);
            return format;
        }
        return null;
    }
    
    public static boolean isTimeBetweenTwoTime(String argStartTime,String argEndTime, String argCurrentTime) throws ParseException 
    {
        String reg = "^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$";
        //
        if (argStartTime.matches(reg) && argEndTime.matches(reg)
                && argCurrentTime.matches(reg)) {
            boolean valid = false;
            // Start Time
            java.util.Date startTime = new SimpleDateFormat("HH:mm:ss")
                    .parse(argStartTime);
            Calendar startCalendar = Calendar.getInstance();
            startCalendar.setTime(startTime);

            // Current Time
            java.util.Date currentTime = new SimpleDateFormat("HH:mm:ss")
                    .parse(argCurrentTime);
            Calendar currentCalendar = Calendar.getInstance();
            currentCalendar.setTime(currentTime);

            // End Time
            java.util.Date endTime = new SimpleDateFormat("HH:mm:ss")
                    .parse(argEndTime);
            Calendar endCalendar = Calendar.getInstance();
            endCalendar.setTime(endTime);

            //
            if (currentTime.compareTo(endTime) < 0) {

                currentCalendar.add(Calendar.DATE, 1);
                currentTime = currentCalendar.getTime();

            }

            if (startTime.compareTo(endTime) < 0) {

                startCalendar.add(Calendar.DATE, 1);
                startTime = startCalendar.getTime();

            }
            //
            if (currentTime.before(startTime)) {

                System.out.println(" Time is Lesser ");

                valid = false;
            } else {

                if (currentTime.after(endTime)) {
                    endCalendar.add(Calendar.DATE, 1);
                    endTime = endCalendar.getTime();

                }

                System.out.println("Comparing , Start Time /n " + startTime);
                System.out.println("Comparing , End Time /n " + endTime);
                System.out
                        .println("Comparing , Current Time /n " + currentTime);

                if (currentTime.before(endTime)) {
                    System.out.println("RESULT, Time lies b/w");
                    valid = true;
                } else {
                    valid = false;
                    System.out.println("RESULT, Time does not lies b/w");
                }

            }
            return valid;

        } else {
            throw new IllegalArgumentException(
                    "Not a valid time, expecting HH:MM:SS format");
        }

    }
    

}
