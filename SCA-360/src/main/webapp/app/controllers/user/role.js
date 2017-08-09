'use strict';
angular
	.module('app', [ 'ngAnimate', 'toaster', 'components.download' ])
	.controller(
		'RoleController',
		function($scope, $modal, $log, $http, $state, $stateParams,
			$mdToast, toaster, $timeout, $filter, downloadService) {

			$scope.role = $stateParams.role;
			$scope.roles = [];
			$scope.sortType = 'name'; // set the default sort type
			$scope.sortReverse = false; // set the default sort order
			$scope.searchFish = '';
			$scope.read = $stateParams.read;

			$scope.invalid = false;


			if ($scope.role != undefined && ($stateParams.read == true || $stateParams.edit == true || ($scope.role.copy != 'new' && $scope.role.copy != undefined))) {
				var roleid = $scope.role.roleid;
				if ($scope.role.copy != 'new' && $scope.role.copy != undefined) {
					roleid = $scope.role.copy
				}

				var req = {
					method : 'POST',
					url : "/SCA-360/getRoleAccess.do",
					headers : {
						'Content-Type' : 'application/json'
					},
					data : {
						'roleid' : roleid + ':'
					}
				}

				$http(req)
					.then(
						function(data) {
							var acc = data.data
							var req = {
								method : 'GET',
								url : "/SCA-360/getAccesspoints.do",
								headers : {
									'Content-Type' : 'application/json'
								}
							}

							$http(req).then(function(data) {
								$scope.role.templates = data.data;
								for (var i = 0; i < $scope.role.templates.length; i++) {
									for (var j = 0; j < $scope.role.templates[i].menulist.length; j++) {
										for (var k = 0; k < $scope.role.templates[i].menulist[j].submenulist.length; k++) {
											var key = roleid + ":"
											+ $scope.role.templates[i].accessname + ":"
											+ $scope.role.templates[i].menulist[j].menuname + ":"
											+ $scope.role.templates[i].menulist[j].submenulist[k].name
											for (var a = 0; a < acc.length; a++) {
												if (acc[a].roleid === key) {

													$scope.role.templates[i].menulist[j].submenulist[k].writeaccess = acc[a].writeaccess
													$scope.role.templates[i].menulist[j].submenulist[k].readaccess = acc[a].readaccess
													$scope.role.templates[i].menulist[j].submenulist[k].deleteaccess = acc[a].deleteaccess
													$scope.role.templates[i].menulist[j].submenulist[k].editaccess = acc[a].editaccess
												}
											}

										}
									}
								}

							}, function() {
								console.log("failed get getAccesspoints")


							});

						},
						function() {
							console
								.log("failed ")
						});
			}


			var vm = this;

			$scope.saverole = function() {

				var access = [];

				for (var i = 0; i < $scope.role.templates.length; i++) {
					for (var j = 0; j < $scope.role.templates[i].menulist.length; j++) {
						for (var k = 0; k < $scope.role.templates[i].menulist[j].submenulist.length; k++) {
							var data = {};
							data.roleid = $scope.role.roleid + ":"
							+ $scope.role.templates[i].accessname + ":"
							+ $scope.role.templates[i].menulist[j].menuname + ":"
							+ $scope.role.templates[i].menulist[j].submenulist[k].name
							data.writeaccess = $scope.role.templates[i].menulist[j].submenulist[k].writeaccess;
							data.readaccess = $scope.role.templates[i].menulist[j].submenulist[k].readaccess
							data.deleteaccess = $scope.role.templates[i].menulist[j].submenulist[k].deleteaccess
							data.editaccess = $scope.role.templates[i].menulist[j].submenulist[k].editaccess
							access.push(data)

						}

					}
					if (i == $scope.role.templates.length - 1) {
						var p = {}
						p.accesslist = access
						var req = {
							method : 'POST',
							url : "/SCA-360/createRoleAccesses.do",
							headers : {
								'Content-Type' : 'application/json'
							},
							data : p
						}

						$http(req)
							.then(
								function(data) {
									toaster.success({
										title : "Saved Successfully "
									});

								},
								function() {
									console
										.log("failed createRoleAccesses")
								});


					}
				}

			}

			$scope.createrole = function() {
				if ($scope.role == undefined || $scope.role.roleid == undefined || $scope.role.rolename == undefined || isNaN($scope.role.roleid) || $scope.role.roleid == '' || $scope.role.rolename == '') {
					$scope.invalid = true;

				} else {
					var req = {
						method : 'POST',
						url : "/SCA-360/createRole.do",
						headers : {
							'Content-Type' : 'application/json'
						},
						data : $scope.role
					}

					$http(req).then(function(data) {
						var req = {
							method : 'GET',
							url : "/SCA-360/getAccesspoints.do",
							headers : {
								'Content-Type' : 'application/json'
							}
						}

						$http(req).then(function(data) {
							$scope.role.templates = data.data;
							$scope.role.copy = $scope.copy
							$state.go('app.RolePortfolio', {
								'role' : $scope.role
							});


						}, function() {
							console.log("failed get getAccesspoints")


						}, function() {
							console.log("failed get getAccesspoints")
						}
						);
					}
						, function() {
							console.log("failed to create user")
						});

				}

			}

			$scope.getroleAccesspoints = function() {}

			$scope.getroles = function() {
				var req = {
						method : 'GET',
						url : "/SCA-360/getRoleId.do",
						headers : {
							'Content-Type' : 'application/json'
						}
					}

					$http(req).then(function(data) {
						if ($scope.role == undefined){
							$scope.role ={}
						}
						$scope.role.roleid=data.data;
						var req = {
								method : 'GET',
								url : "/SCA-360/getRoles.do",
								headers : {
									'Content-Type' : 'application/json'
								}
							}

							$http(req).then(function(data) {
								$scope.roles = data.data
								console.log("success to get roles")
							}, function() {
								console.log("failed to get roles")
							});

						
					}, function() {
						console.log("failed to get roles")
					});
				
				
				
			}

			$scope.openeditrole = function(role) {

				$state.go('app.RolePortfolio', {
					'role' : role,

					'edit' : true
				});
			}
			$scope.openreadrole = function(role) {

				$state.go('app.RolePortfolio', {
					'role' : role,
					'read' : true
				});
			}
		});