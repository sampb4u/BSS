
<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="utf-8">
        <title>SCA-360</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">
		<link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon">

        <!-- CSS -->
<!--        <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=PT+Sans:400,700'>
        <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Oleo+Script:400,700'>
-->        <link rel="stylesheet" href="assets_login/bootstrap/css/bootstrap.css">
        <link rel="stylesheet" href="assets_login/css/style.css">

        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->

		<style>
		.register form button.mysignin{ margin-top:0; margin-left:8px; width:40%;}
			.forgotlink{text-align:right;display:inline-block;padding:10px 0 0 170px}
			.forgotlink a{ text-decoration:underline;}
			.forgotlink a:hover{ text-decoration:none;}
			.space-top{text-align:left;margin-top:20px}
		</style>
    </head>

    <body>

        <div class="header">
            <div class="container">
                <div class="row">
                    <div class="logo span4" style="width:100%;">
                        <h1><a href="">Sumitomo Drive Technologies <span class="red">.</span></a></h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="register-container container">
            <div class="row">
                <div class="iphone span5">
                    <!--<img src="assets/img/iphone.png" alt="" style="height:540px;">-->
                </div>
					<div class="register span6">
                    <form>
                        <h3>SIGN IN TO <span class="red"><strong>SCA-360</strong></span></h3>
                        <!--<label for="countryname">Country</label>
                        <select style="width:100%;" name="countryname" id="countryname" autofocus class="dropdown" style="height:30px;"> 
							<option value="0">Select Country</option>
							<option value="all">All</option>
							<option value="TH">Thailand</option>
							<option value="SG">Singapore</option>
						</select>-->
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="username..." autofocus>
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="password...">
						<div class="space-top">
							<button type="button" id="register" class="mysignin">SIGN IN</button>
							<span class="forgotlink"><a href="views/forgotPasswordSetUser.html">Forgot Password?</a></span>
						</div>
                    </form>
                </div>
            </div>
        </div>





        <!-- Javascript -->
        <script src="assets_login/js/jquery-1.8.2.min.js"></script>
        <script src="assets_login/bootstrap/js/bootstrap.min.js"></script>
        <script src="assets_login/js/jquery.backstretch.min.js"></script>
        <script src="assets_login/js/scripts.js"></script>

    </body>

</html>

