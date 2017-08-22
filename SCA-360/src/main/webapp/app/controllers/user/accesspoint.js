'use strict';
angular
	.module('app', [ 'ngAnimate', 'toaster', 'components.download' ])
	.controller(
		'AccessController',
		function($scope, $modal, $log, $http, $state, $stateParams,
			$mdToast, toaster, $timeout, $filter, downloadService) {

			
			$scope.access = $stateParams.access;
			$scope.sortType = 'name'; // set the default sort type
			$scope.sortReverse = false; // set the default sort order
			$scope.searchFish = '';
			 $scope.points=[];
			
			
				$scope.atemp = {};
				$scope.atemp.readaccess =false ;
				$scope.atemp.writeaccess =false;
				$scope.atemp.deleteaccess=false;
				$scope.atemp.editaccess=false;
				
				var access = function (){
					
				var	roleid =sessionStorage.getItem("roleid");
				var acc={"roleid" : roleid+':Setting:User Mgmt:Add Template'};
				var httpRequest = $http({
					method: 'POST',
					url : "/SCA-360/getRoleAccess.do",
					data: acc
				   }).success(function(data, status) 
					{
					   if (data.length > 0 ) {
						   $scope.atemp.readaccess =data[0].readaccess ;
							$scope.atemp.writeaccess =data[0].writeaccess;
							$scope.atemp.deleteaccess=data[0].deleteaccess;
							$scope.atemp.editaccess=data[0].editaccess;
					   }
					   
					
					});
				}
				
				 access();	
				 $scope.stemp = {};
					$scope.stemp.readaccess =false ;
					$scope.stemp.writeaccess =false;
					$scope.stemp.deleteaccess=false;
					$scope.stemp.editaccess=false;
					
					$scope.searchaccess = function (){
						
					var	roleid =sessionStorage.getItem("roleid");
					var acc={"roleid" : roleid+':Setting:User Mgmt:Search Template'};
					var httpRequest = $http({
						method: 'POST',
						url : "/SCA-360/getRoleAccess.do",
						data: acc
					   }).success(function(data, status) 
						{
						   if (data.length > 0 ){
							   $scope.stemp.readaccess =data[0].readaccess ;
								$scope.stemp.writeaccess =data[0].writeaccess;
								$scope.stemp.deleteaccess=data[0].deleteaccess;
								$scope.stemp.editaccess=data[0].editaccess;
								
							
									  if ($scope.stemp.readaccess){
										  $scope.getpoints()
									  }
						   }
						
						
						});
					}
					
				
			 
			
			if ($stateParams.read) {
				 $scope.acc = true;
				$scope.read = true;

			}
			 if ($scope.access == undefined ){
				 $scope.access={};
				 $scope.access.menulist=[];
			 }else {
				 $scope.acc = true;
			 }
		 

			$scope.addaccesspoint= function (){
				  var req = {
							method : 'POST',
							url : "/SCA-360/getAccesspoints.do",
							headers : {
								'Content-Type' : 'application/json'
							},
							data :$scope.access
						}

						$http(req)
							.then(
								function(data) {
								if (data.data == null){
									$scope.acc=true;
									$scope.addNewChoice();
								}else {
									$state.go('app.NewAccessPoint', {
										'access' : data.data
									});
								}
									
								},
								function() {
									console
										.log("failed")
								});
				  
				
			}
			
			$scope.addNewChoice = function() {
			    var newItemNo = $scope.access.menulist.length+1;
			    var submenulist=[];
			    $scope.access.menulist.push({"submenulist":submenulist});
			  };
			  
			  $scope.addsubmenulist = function(submenulist) {
				    var newItemNo = submenulist.length+1;
				    
				    submenulist.push({});
				  };
			  
			  $scope.removeChoice = function() {
				    var lastItem = $scope.access.menulist.length-1;
				    $scope.access.menulist.splice(lastItem);
				  };
				  
				  $scope.removesubmenulist = function(submenulist) {
					    var lastItem =submenulist.length-1;
					    submenulist.splice(lastItem);
					  };
					  
					  
		
					  $scope.submitaccesspoint = function() {
						  var req = {
									method : 'POST',
									url : "/SCA-360/createAccessPoint.do",
									headers : {
										'Content-Type' : 'application/json'
									},
									data :$scope.access
								}

								$http(req)
									.then(
										function(data) {
											toaster.success({
												title : "Accesspoint created "
												
											});
											
										},
										function() {
											console
												.log("failed")
										});
					  }
					  
					  $scope.getpoints = function(status) {
						  if (!$scope.stemp.readaccess){
							  return
						  }

							var req = {
								method : 'GET',
								url : "/SCA-360/getAccesspoints.do",
								headers : {
									'Content-Type' : 'application/json'
								},
							}

							$http(req).then(function(data) {
								$scope.points = data.data;
								console.log("users ::::::::" + $scope.points);
							}, function() {
								console.log("failed to get points")
							});

						}
					  
					  $scope.openedituser = function(point) {

							$state.go('app.NewAccessPoint', {
								'access' : point
							});
						}
						$scope.openreaduser = function(point) {

							$state.go('app.NewAccessPoint', {
								'access' : point,
								'read' : true
							});
						}
		
		
		});