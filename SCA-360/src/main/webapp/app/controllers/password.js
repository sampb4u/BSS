'use strict';
angular
	.module('app', [])
	.controller(
		'PasswordCtrl',
		function($scope, $http ) {
			
			$scope.getuser =function (){
				if ($scope.user == undefined || $scope.user.username.length == 0){
					$scope.error = "user name is required"
						return;
				} 
				var data = {'username' : $scope.user.username};
				
				var req = {
						method : 'POST',
						url : "/SCA-360/forgotpassworduser.do",
						headers : {
							'Content-Type' : 'application/json'
						},
						data : data
					}

					$http(req)
						.then(
							function(data) {
								if (data.data.error != undefined) {
									$scope.error =data.data.error
								}else {
									sessionStorage.setItem('username',$scope.user.username);
									
									window.location = "forgotPassword.html"
								}
							}, function(data) {
								
								console.log("error");
							})
			}

			$scope.forgotpass = function() {
				
				if ($scope.user.ans1 == undefined || $scope.user.ans1.length < 0) {
					$scope.error = "SecurityQuestion 1 Answer is required"
					return
				}
				if ($scope.user.ans2 == undefined || $scope.user.ans2.length < 0) {
					$scope.error = "SecurityQuestion 2 Answer is required"
					return
				}
				if ($scope.user.newpass == undefined || $scope.user.newpass.length < 0) {
					$scope.error = "new Password is required"
					return
				}
				if ($scope.newpass == undefined || $scope.newpass.length < 0) {
					$scope.error = "Confirm Password is required"
					return
				}
				if ($scope.newpass != $scope.user.newpass) {
					$scope.error = "Password not matched"
					return
				}
				
				var req = {
						method : 'POST',
						url : "/SCA-360/forgotpassword.do",
						headers : {
							'Content-Type' : 'application/json'
						},
						data : $scope.user
					}

					$http(req)
						.then(
							function(data) {
								console.log(data);
								if (data.data.error != undefined) {
									$scope.error = data.data.error 
								}else {
									window.location = "passwordupdated.html";
								}
							}, function(data) {
								
								console.log("error");
							})
			}
			
			$scope.getsqs = function() {
				$scope.user={};
				$scope.user.username = sessionStorage
				.getItem("username");
				var data = {'username' : $scope.user.username};
				var req = {
						method : 'POST',
						url : "/SCA-360/getsqs.do",
						headers : {
							'Content-Type' : 'application/json'
						},
						data : data
					}

					$http(req)
						.then(
							function(data) {
								console.log(data);
								if (data.data[0] == undefined ){
									$scope.error = "Something went wrong contact admin"
								}else {
									$scope.user.sq1 = data.data[0].sq1;
									$scope.user.sq2 = data.data[0].sq2;
								}
							}, function(data) {
								
								console.log("error");
							})
			}

			$scope.resetpass = function() {

				if ($scope.user == undefined || $scope.user.oldpass.length < 0) {
					$scope.error = "Old Password is required"
					return
				}
				if ($scope.user.newpass == undefined || $scope.user.newpass.length < 0) {
					$scope.error = "new Password is required"
					return
				}
				if ($scope.newpass == undefined || $scope.newpass.length < 0) {
					$scope.error = "Confirm Password is required"
					return
				}
				
				if ($scope.newpass != $scope.user.newpass) {
					$scope.error = "Password not matched"
					return
				}
				if ($scope.user.oldpass == $scope.user.newpass) {
					$scope.error = "new password and old password should not be same"
					return
				}
				if ($scope.user.sq1 == undefined || $scope.user.sq1.length < 0) {
					$scope.error = "SecurityQuestion 1 is required"
					return
				}
				if ($scope.user.sq2 == undefined || $scope.user.sq2.length < 0) {
					$scope.error = "SecurityQuestion 2 is required"
					return
				}
				if ($scope.user.ans2 == undefined || $scope.user.ans2.length < 0) {
					$scope.error = "SecurityQuestion 2 Answer is required"
					return
				}
				if ($scope.user.ans1 == undefined || $scope.user.ans1.length < 0) {
					$scope.error = "SecurityQuestion 1 Answer is required"
					return
				}
				if ($scope.user.sq1 == $scope.user.sq2) {
					$scope.error = "Please pick diffrent SecurityQuestions"
					return
				}

				$scope.user.username = sessionStorage
					.getItem("sessionUserName");
				var req = {
					method : 'POST',
					url : "/SCA-360/resetpassword.do",
					headers : {
						'Content-Type' : 'application/json'
					},
					data : $scope.user
				}

				$http(req)
					.then(
						function(data) {
							if (data.data.error != undefined) {
								$scope.error =data.data.error
							}else {
								window.location = "passwordupdated.html";
							}

						}, function(data) {})
			}

		});