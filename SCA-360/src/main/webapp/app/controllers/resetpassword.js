'use strict';
angular
	.module('app', [ 'ngAnimate', 'toaster', 'components.download' ])
	.controller(
		'PassController',
		function($scope, $modal, $log, $http, $state, $stateParams,
			$mdToast, toaster, $timeout, $filter, downloadService) {

			
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
			

				$scope.user.username = sessionStorage
					.getItem("sessionUserName");
				var req = {
					method : 'POST',
					url : "/SCA-360/resetpasswordpostlogin.do",
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
								toaster.success({
									title : "passoword updated"
								});
								$scope.user= {};
								$scope.error=undefined ;
								$scope.newpass =undefined ;
							}

						}, function(data) {})
			}
		});
		