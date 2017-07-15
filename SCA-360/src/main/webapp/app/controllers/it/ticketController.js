'use strict';
angular
		.module('app', [ 'ngAnimate', 'toaster' ])
		.controller(
				'TicketController',
				function($scope, $modal, $log, $http, $state, $stateParams,
						$mdToast, toaster, $timeout, $filter) {

					$scope.ticket = $stateParams.ticket;
					
					  $scope.sortType     = 'name'; // set the default sort type
					  $scope.sortReverse  = false;  // set the default sort order
					  $scope.searchFish   = '';    
					//$scope.con = true;

					if ($scope.ticket != undefined) {
						$scope.con = true;
						$scope.createdate=$filter('date')(new Date($scope.ticket.createdate),'yyyy-MM-dd HH:mm:ss');
						$scope.enddate=$filter('date')(new Date($scope.ticket.enddate),'yyyy-MM-dd HH:mm:ss');

						if ($stateParams.read
								|| $scope.ticket.status == 'Closed' || $scope.ticket.status == 'Cancelled')  {
							$scope.tkt = true;
							

						}
						if ( $scope.ticket.status == 'Closed') {
							$scope.close = true;
							

						}
					}

					$scope.createnewticketid = function() {
						if ($scope.ticket == undefined) {
							$scope.ticket = {
								status : 'New'
							};
							var req = {
								method : 'GET',
								url : "/SCA-360/getTicketSQid.do",
								headers : {
									'Content-Type' : 'application/json'
								}
							}

							$http(req).then(
									function(data) {
										$scope.id = data.data;
										$scope.ticket.raisedby = sessionStorage
												.getItem("sessionUserName");
										var date=new Date();
										$scope.ticket.createdate =date.getTime();
										$scope.createdate=$filter('date')(new Date($scope.ticket.createdate),'yyyy-MM-dd HH:mm:ss');
										$scope.ticket.assignedto = 'IT Admin';
										createticketid();

									}, function() {
										console.log("failed to create ticket")
									});
						}
					}

					$scope.cancel = function() {
						$scope.ticket = undefined;
						// createnewticketid();
					}
					$scope.createticketid = function() {
						$scope.country = $scope.ticket.country;
						if ($scope.ticket.ticketid == undefined) {
							$scope.ticket.ticketid = 'R' + $scope.country
									+ $scope.id;
							if ($scope.ticket.ticketid.length < 10) {

								$scope.ticket.ticketid = 'R' + $scope.country;
								for (var i = 0; i < 10 - $scope.ticket.ticketid.length; i++) {
									$scope.ticket.ticketid = $scope.ticket.ticketid
											+ '0';
								}
								$scope.ticket.ticketid = $scope.ticket.ticketid
										+ $scope.id;
							}
						} else {
							$scope.ticket.ticketid = 'R' + $scope.country
									+ $scope.ticket.ticketid.substr(3);
							;

						}

					}
					

					$scope.createticket = function() {

						var req = {
							method : 'POST',
							url : "/SCA-360/createITTicket.do",
							headers : {
								'Content-Type' : 'application/json'
							},
							data : $scope.ticket
						}

						$http(req).then(function(data) {
							toaster.success({
								title : "Status Updated ",
								body : $scope.ticket.status
							});
							$scope.con = true;
							if ($scope.ticket.status == 'Closed' || $scope.ticket.status == 'Cancelled' ) {
								$scope.tkt = true;
								$scope.con = true;

							}
							/*
							 * $timeout(function() {
							 * $state.go('app.SearchRequests'); }, 3000);
							 */

						}, function() {
							console.log("failed to create ticket")
						});

					}

					$scope.gettickets = function() {

						var req = {
							method : 'GET',
							url : "/SCA-360/getITTickets.do",
							headers : {
								'Content-Type' : 'application/json'
							},

						}

						$http(req).then(function(data) {
							$scope.tickets = data.data;
							// console.log("users ::::::::" + data);
						}, function() {
							console.log("failed to get tickets")
						});

					}

					$scope.openeditticket = function(ticket) {

						$state.go('app.RaiseTicket', {
							'ticket' : ticket
						});
					}
					$scope.openreadticket = function(ticket) {

						$state.go('app.RaiseTicket', {
							'ticket' : ticket,
							'read' : true
						});
					}
					$scope.convertToDate = function(date) {

						if (date == 0) {
							return '-';
						}
						return $filter('date')(new Date(date),
								'yyyy-MM-dd HH:mm:ss');

					};

					$scope.closecheck = function() {
						if ( $scope.ticket.status == 'Closed') {
							var date=new Date();
							$scope.ticket.enddate =date.getTime();
							$scope.enddate=$filter('date')(new Date($scope.ticket.enddate),'yyyy-MM-dd HH:mm:ss');
							$scope.close = true;
							
							

						}else {
							$scope.close = false;
						}
						if ($scope.ticket.status ==  'Escalated'){
							$scope.ticket.assignedto = 'SG - IT Admin';
						}else if ($scope.ticket.status ==  'In Progress'){
							$scope.ticket.assignedto = 'IT Admin';
						}
					
					};
					
					 $scope.exportData = function () {
						 
			                
			                var file = new Blob($scope.tickets, {type: 'application/pdf'});
			                var fileURL = URL.createObjectURL(file);
			                saveAs(file, "Report.pdf");
					  };
				});
