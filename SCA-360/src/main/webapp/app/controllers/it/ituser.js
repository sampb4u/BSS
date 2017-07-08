'use strict';
angular.module('app', []).controller('ITUserController',
		function($scope, $modal, $log, $http, $state, $stateParams) {

			$scope.user = $stateParams.user;

			$scope.createUser = function(status) {

				if (status == 'hrsave') {
					$scope.user.status = 'hrdraft';
				} else if (status == 'hrsubmit') {
					$scope.user.status = 'assginedtoit';
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
					$state.go('app.SearchRequests');
					console.log("usercreated");

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

		});
