package com.finsol.mail;

public class TestMail {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SendMailTLS mail = new SendMailTLS();

		mail.sendMail("sent from mail api", "plain body", "anvesh27@gmail.com,gunda.sampath@gmail.com");

	}

}
