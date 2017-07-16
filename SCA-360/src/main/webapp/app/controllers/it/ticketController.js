'use strict';
angular
		.module('app', [ 'ngAnimate', 'toaster' ])
		.controller(
				'TicketController',
				function($scope, $modal, $log, $http, $state, $stateParams,
						$mdToast, toaster, $timeout, $filter) {

					$scope.ticket = $stateParams.ticket;
					$scope.csvTemplateHeaders = [ "slNo", "routeName",
							"vehicleName", "driverName", "startTime",
							"endTime", "distance" ],
							$scope.csvTemplateHeadersXlx = [ "Sl No.",
									"Route Name", "Vehicle Name",
									"Driver Name", "Start Time", "End Time",
									"Distance in km" ]

					$scope.sortType = 'name'; // set the default sort type
					$scope.sortReverse = false; // set the default sort order
					$scope.searchFish = '';
					// $scope.con = true;

					if ($scope.ticket != undefined) {
						$scope.con = true;
			

						if ($stateParams.read
								|| $scope.ticket.status == 'Closed'
								|| $scope.ticket.status == 'Cancelled') {
							$scope.tkt = true;

						}
						if ($scope.ticket.status == 'Closed') {
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

							$http(req)
									.then(
											function(data) {
												$scope.id = data.data;
												$scope.ticket.raisedby = sessionStorage
														.getItem("sessionUserName");
												var date = new Date();
												$scope.ticket.createdate = date
														.getTime();
												$scope.ticket.createdatestring = $filter(
														'date')
														(
																new Date(
																		$scope.ticket.createdate),
																'yyyy-MM-dd HH:mm:ss');
												$scope.ticket.assignedto = 'IT Admin';
												createticketid();

											},
											function() {
												console
														.log("failed to create ticket")
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

						$http(req)
								.then(
										function(data) {
											toaster.success({
												title : "Status Updated ",
												body : $scope.ticket.status
											});
											$scope.con = true;
											if ($scope.ticket.status == 'Closed'
													|| $scope.ticket.status == 'Cancelled') {
												$scope.tkt = true;
												$scope.con = true;

											}
											/*
											 * $timeout(function() {
											 * $state.go('app.SearchRequests'); },
											 * 3000);
											 */

										},
										function() {
											console
													.log("failed to create ticket")
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
		/*			$scope.convertToDate = function(date) {

						if (date == 0) {
							return '-';
						}
						return $filter('date')(new Date(date),
								'yyyy-MM-dd HH:mm:ss');

					};*/

					$scope.closecheck = function() {
						if ($scope.ticket.status == 'Closed') {
							var date = new Date();
							$scope.ticket.enddate = date.getTime();
							$scope.ticket.enddatestring = $filter('date')(
									new Date($scope.ticket.enddate),
									'yyyy-MM-dd HH:mm:ss');
							$scope.close = true;

						} else {
							$scope.close = false;
						}
						if ($scope.ticket.status == 'Escalated') {
							$scope.ticket.assignedto = 'SG - IT Admin';
						} else if ($scope.ticket.status == 'In Progress') {
							$scope.ticket.assignedto = 'IT Admin';
						}

					};

					$scope.Workbook = function() {
						if (!(this instanceof $scope.Workbook))
							return new $scope.Workbook();
						this.SheetNames = [];
						this.Sheets = {};
					}

					$scope.sheet_from_array_of_arrays = function(data, opts) {
						var ws = {};
						var range = {
							s : {
								c : 10000000,
								r : 10000000
							},
							e : {
								c : 0,
								r : 0
							}
						};
						for (var R = 0; R != data.length; ++R) {
							for (var C = 0; C != data[R].length; ++C) {
								if (range.s.r > R)
									range.s.r = R;
								if (range.s.c > C)
									range.s.c = C;
								if (range.e.r < R)
									range.e.r = R;
								if (range.e.c < C)
									range.e.c = C;
								var cell = {
									v : data[R][C]
								};
								if (cell.v == null)
									continue;
								var cell_ref = XLSX.utils.encode_cell({
									c : C,
									r : R
								});

								if (typeof cell.v === 'number')
									cell.t = 'n';
								else if (typeof cell.v === 'boolean')
									cell.t = 'b';
								else if (cell.v instanceof Date) {
									cell.t = 'n';
									cell.z = XLSX.SSF._table[14];
									cell.v = datenum(cell.v);
								} else
									cell.t = 's';

								ws[cell_ref] = cell;
							}
						}
						if (range.s.c < 10000000)
							ws['!ref'] = XLSX.utils.encode_range(range);
						return ws;
					}
					$scope.s2ab = function(s) {
						var buf = new ArrayBuffer(s.length);
						var view = new Uint8Array(buf);
						for (var i = 0; i != s.length; ++i)
							view[i] = s.charCodeAt(i) & 0xFF;
						return buf;
					}

					$scope.exportData = function() {
						var A = [];
						A.push(['','','','Tickets ']);
						A.push([' ']);
						A.push([' ']);
						
						A.push([ 'Ticket ID', 'Title', 'Ticket type',
								'Raised by', 'Created Date', 'End Date',
								'Assigned To', 'Country', 'Priority','Notes' ,
								'Status' ]);
						if ($scope.tickets.length > 0) {
							for (var j = 0; j < $scope.tickets.length; j++) {
								var B = [];

								B.push($scope.tickets[j]['ticketid']);
								B.push($scope.tickets[j]['title']);
								B.push($scope.tickets[j]['tickettype']);
								B.push($scope.tickets[j]['raisedby']);

								B.push($scope.tickets[j]['createdatestring']);
								B.push($scope.tickets[j]['enddatestring']);

								
								B.push($scope.tickets[j]['assignedto']);
								B.push($scope.tickets[j]['country']);
								B.push($scope.tickets[j]['priority']);
								B.push($scope.tickets[j]['notes']);
								B.push($scope.tickets[j]['status']);
								A.push(B);
								if (j == $scope.tickets.length - 1) {
									var data = A;
									var ws_name = "Tickets";

									var wb = new $scope.Workbook(), ws = $scope
											.sheet_from_array_of_arrays(data);

									wb.SheetNames.push(ws_name);
									wb.Sheets[ws_name] = ws;

									/* write file */
									var wopts = {
										bookType : 'xlsx',
										bookSST : false,
										type : 'binary'
									};

									var wbout = XLSX.write(wb, wopts);

									saveAs(new Blob([ $scope.s2ab(wbout) ], {
										type : ""
									}), "Tickets.xlsx")
								}
							}
						}

					}

					$scope.selectedFile=[]; 
                    $scope.onFileSelect = function ($files) { 
                          $scope.uploadProgress = 0; 
                          $scope.selectedFile = $files; 
                      }; 
                      $scope.myData = {}; 

/*                    $scope.upload = function(){ 
                          var formData = new FormData(); 
                          formData.append("file",$scope.myFile); 
                      //    formData.append("data", myData.message.value); 
                 
                          
                          $.ajax({
                        	    url: '/SCA-360/savefile.do',
                        	    data: formData,
                        	   
                        	    processData: false,
                        	    contentType: false,
                        	    type: 'POST',
                        	    success: function(data){
                        	    	alert("done"); 
                        	    }
                        	  });
                          
                          
                          
                   
			}*/

		});
