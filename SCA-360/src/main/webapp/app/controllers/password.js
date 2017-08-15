'use strict';
angular
	.module('app', [])
	.controller(
		'PasswordCtrl',
		function($scope, $http) {
			
			$scope.getuser =function (){
				if ($scope.user == undefined || $scope.user.username.length == 0){
					$scope.error = "user name is required"
				} 
				
				var req = {
						method : 'POST',
						url : "/SCA-360/resetpassword.do",
						headers : {
							'Content-Type' : 'application/json'
						},
						data : {'username' : $scope.user.username}
					}

					$http(req)
						.then(
							function(data) {
								if (data.data.error != undefined) {
									$scope.error =data.data.error
								}else {
									window.location = "forgotPassword1.html";
								}
							}, function(data) {})
			}

			$scope.forgotpass = function() {}

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