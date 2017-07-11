'use strict';
angular
		.module('app', [ 'ngAnimate', 'toaster' ])
		.controller(
				'TicketController',
				function($scope, $modal, $log, $http, $state, $stateParams,
						$mdToast, toaster, $timeout) {

					$scope.ticket = $stateParams.ticket;
					
					if ($scope.ticket != undefined) {
						$scope.ticket.createdate=new Date($scope.ticket.createdate);
						$scope.ticket.enddate=new Date($scope.ticket.enddate);

						if ($stateParams.read || $scope.ticket.status == 'Closed') {
							$scope.tkt = true;
						
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

							$http(req).then(function(data) {
								$scope.id = data.data;
								createticketid();

							}, function() {
								console.log("failed to create ticket")
							});
						}
					}

					$scope.cancel = function() {
						$scope.ticket = undefined;
						//createnewticketid();
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
					$scope.createrequestid = function(status) {
						if ($scope.ticket.requestid == undefined) {
							$scope.ticket.requestid = 'R' + $scope.country
									+ $scope.id;
							if ($scope.ticket.requestid.length < 10) {

								$scope.ticket.requestid = 'R' + $scope.country;
								for (var i = 0; i < 10 - $scope.ticket.requestid.length; i++) {
									$scope.ticket.requestid = $scope.ticket.requestid
											+ '0';
								}
								$scope.ticket.requestid = $scope.ticket.requestid
										+ $scope.id;
							}
						} else {
							$scope.ticket.requestid = 'R' + $scope.country
									+ $scope.ticket.requestid.substr(3);
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

				});
