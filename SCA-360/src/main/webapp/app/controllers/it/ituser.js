'use strict';
angular.module('app', ['ngAnimate', 'toaster']).controller('ITUserController',
		function($scope, $modal, $log, $http, $state, $stateParams ,$mdToast,toaster) {

			$scope.user = $stateParams.user;
			if ($scope.user != undefined ){
				
				if ($stateParams.read) {
					$scope.hr=true;
					$scope.it=true;
				}else {	if ($scope.user.status == 'HR-Submitted' ){
					$scope.hr=true;
				}else if ($scope.user.status == 'Closed' ){
					$scope.it=true;
				}}
			
				
				
			}
			if ($scope.user == undefined ){
				$scope.user ={status : 'New'}
			}
					

			$scope.createUser = function(status) {

				
				if (status == 'hrsave') {
					$scope.user.status = 'HR-In Progress';
				} else if (status == 'hrsubmit') {
					$scope.user.status = 'HR-Submitted';
				} else if (status == 'itsave') {
					$scope.user.status = 'IT-In Progress';
				} else if (status == 'close') {
					$scope.user.status = 'Closed';
				} 

				var req = {
					method : 'POST',
					url : "/SCA-360/createITUser.do",
					headers : {
						'Content-Type' : 'application/json'
					},
					data : $scope.user
				}

				$http(req).then(function(data) {
					toaster.success({title: "Status Updated ", body:$scope.user.status});
					$state.go('app.SearchRequests');
					

				}, function() {
					console.log("failed to create user")
				});

			}

			$scope.getusers = function(status) {

				var req = {
					method : 'GET',
					url : "/SCA-360/getITUsers.do",
					headers : {
						'Content-Type' : 'application/json'
					},

				}

				$http(req).then(function(data) {
					$scope.users = data.data;
					console.log("users ::::::::" + data);
				}, function() {
					console.log("failed to get users")
				});

			}

			$scope.opencreateuser = function() {
				$state.go('app.NewUserRequest');
			}

			$scope.openedituser = function(user) {

				$state.go('app.NewUserRequest', {
					'user' : user
				});
			}
			$scope.openreaduser = function(user) {

				$state.go('app.NewUserRequest', {
					'user' : user ,
					'read' : true
				});
			}

		});
