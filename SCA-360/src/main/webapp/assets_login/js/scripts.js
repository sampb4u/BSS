
jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    $.backstretch([
	 "assets_login/img/backgrounds/4.jpg"
     , "assets_login/img/backgrounds/1.jpg"
    , "assets_login/img/backgrounds/2.jpg"
    , "assets_login/img/backgrounds/5.jpg"
    ], {duration: 3000, fade: 750});

    /*
        Tooltips
    */
    $('.links a.home').tooltip();
    $('.links a.blog').tooltip();

    /*
        Form validation
    */
	
	var countryObj = new Object();
	countryObj.dropdownname = "Country";
	countryObj.columnname = "country";
	countryObj.columncode = "countrycode";
	var jsonCountryString= JSON.stringify(countryObj);


	
	$.ajax({
				  url:"/SCA-360/loadDropDown.do",
				  processData:true,
				  type:'POST',
				  contentType:'Application/json',
				  data:jsonCountryString,
				  success:function(responce) 
				  {
					var optionValues="<option value='0'>Select Country</option><option value='all'>All</option>";
					//alert(optionValues);
					for(var i=0;i<responce.length;i++)
					{
						optionValues +="<option value='"+responce[i].countrycode+"'>"+responce[i].country+"</option>";
					}
					//$('#countryname').empty();
			        //var newOption = $(optionValues);
        			//$('#countryname').append(newOption);				
		    	    //$('#countryname').trigger("chosen:updated");											
					  
				  }
			});
	
	
	
    $('#register').click(function()
	{
		var loginDataObj = new Object();
		
        $(".register form").find("label[for='username']").html('Username');
        $(".register form").find("label[for='password']").html('Password');
		//$(".register form").find("label[for='countryname']").html('countryname');
        var username = $(".register form").find('input#username').val();
        var password = $(".register form").find('input#password').val();
		//var countyrname = $("#countryname").val();
        if(username == '') {
            $(".register form").find("label[for='username']").append("<span style='display:none' class='red'> - Please enter username.</span>");
            $(".register form").find("label[for='username'] span").fadeIn('medium');
            return false;
        }
        if(password == '') {
            $(".register form").find("label[for='password']").append("<span style='display:none' class='red'> - Please enter password.</span>");
            $(".register form").find("label[for='password'] span").fadeIn('medium');
            return false;
        }
        /*if(countyrname == '0') {
            $(".register form").find("label[for='countryname']").append("<span style='display:none' class='red'> - Please Select Country.</span>");
            $(".register form").find("label[for='countryname'] span").fadeIn('medium');
            return false;
        }*/
		
		
		loginDataObj.userName = username;
		loginDataObj.password = password;
		
		$.ajax({
				  url:"/SCA-360/login.do",
				  processData:true,
				  type:'POST',
				  contentType:'Application/json',
				  data:JSON.stringify(loginDataObj),
				  success:function(responce) 
				  {		
				 
					var respSplit=responce.split("?");
					
					sessionStorage.setItem('countryCode',respSplit[1]);
					
					sessionStorage.setItem('sessionUserName',username);
					sessionStorage.setItem('roleid',respSplit[3]);
					
					 window.location.assign(respSplit[0]);
				 }
			});		
		
    });


$('.register').keydown(function(event){ 
    var keyCode = (event.keyCode ? event.keyCode : event.which);   
    if (keyCode == 13) 
	{
    	var loginDataObj = new Object();
		
        $(".register form").find("label[for='username']").html('Username');
        $(".register form").find("label[for='password']").html('Password');
		//$(".register form").find("label[for='countryname']").html('countryname');
        var username = $(".register form").find('input#username').val();
        var password = $(".register form").find('input#password').val();
		//var countyrname = $("#countryname").val();
		//alert(countyrname);
        if(username == '') {
            $(".register form").find("label[for='username']").append("<span style='display:none' class='red'> - Please enter username.</span>");
            $(".register form").find("label[for='username'] span").fadeIn('medium');
            return false;
        }
        if(password == '') {
            $(".register form").find("label[for='password']").append("<span style='display:none' class='red'> - Please enter password.</span>");
            $(".register form").find("label[for='password'] span").fadeIn('medium');
            return false;
        }
       /* if(countyrname == '0') {
            $(".register form").find("label[for='countryname']").append("<span style='display:none' class='red'> - Please Select Country.</span>");
            $(".register form").find("label[for='countryname'] span").fadeIn('medium');
            return false;
        }*/
		
		loginDataObj.userName = username;
		loginDataObj.password = password;
		//loginDataObj.countryCode = countyrname;
		//alert(JSON.stringify(loginDataObj));
		$.ajax({
				  url:"/SCA-360/login.do",
				  processData:true,
				  type:'POST',
				  contentType:'Application/json',
				  data:JSON.stringify(loginDataObj),
				  success:function(responce) 
				  {
					   //alert(responce);
					var respSplit=responce.split("?");
					sessionStorage.setItem('countryCode',respSplit[1]);
					sessionStorage.setItem('sessionUserFirstName',respSplit[2]);
					sessionStorage.setItem('sessionUserName',username);
					 window.location.assign(respSplit[0]);
				 }
			});	
    }
});



});


