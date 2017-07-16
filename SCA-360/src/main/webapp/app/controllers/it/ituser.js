'use strict';
angular
		.module('app', [ 'ngAnimate', 'toaster' ])
		.controller(
				'ITUserController',
				function($scope, $modal, $log, $http, $state, $stateParams,
						$mdToast, toaster, $timeout) {

					$scope.user = $stateParams.user;
					$scope.sortType = 'name'; // set the default sort type
					$scope.sortReverse = false; // set the default sort order
					$scope.searchFish = '';
					
					if ($scope.user != undefined) {
						$scope.con=true;
						if ($stateParams.read) {
							$scope.hr = true;
							$scope.it = true;
							
						} else {
							if ($scope.user.status == 'HR-Submitted'
									|| $scope.user.status == 'IT-In Progress') {
								$scope.hr = true;
								
							} else if ($scope.user.status == 'Closed') {
								$scope.hr = true;
								$scope.it = true;
								
							}else if ($scope.user.status == 'HR-In Progress') {
								
								$scope.it = true;
								
							}
						}

					}
					$scope.createnewrequestid = function() {
						if ($scope.user == undefined) {
							$scope.user = {
								status : 'New'
							};
							var req = {
								method : 'GET',
								url : "/SCA-360/getSQid.do",
								headers : {
									'Content-Type' : 'application/json'
								}
							}

							$http(req).then(function(data) {
								$scope.id = data.data;
								$scope.it = true;
								createrequestid();
								

							}, function() {
								console.log("failed to create user")
							});
						}
					}

					$scope.createrequestid = function(status) {
						if ($scope.user.requestid == undefined) {
							$scope.user.requestid = 'R' + $scope.user.country
									+ $scope.id;
							if ($scope.user.requestid.length < 10) {

								$scope.user.requestid = 'R' + $scope.user.country;
								for (var i = 0; i < 10 - $scope.user.requestid.length; i++) {
									$scope.user.requestid = $scope.user.requestid
											+ '0';
								}
								$scope.user.requestid = $scope.user.requestid
										+ $scope.id;
							}
						} else {
							$scope.user.requestid = 'R' + $scope.user.country
									+ $scope.user.requestid.substr(3);
							

						}

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

						$http(req)
								.then(
										function(data) {
											toaster.success({
												title : "Status Updated ",
												body : $scope.user.status
											});
											$scope.con = true;
											if ($scope.user.status == 'HR-Submitted'
													|| $scope.user.status == 'IT-In Progress') {
												$scope.hr = true;
											} else if ($scope.user.status == 'Closed') {
												$scope.hr = true;
												$scope.it = true;
											}

										},
										function() {
											console
													.log("failed to create user")
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
							'user' : user,
							'read' : true
						});
					}
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
						A.push(['','','','NewUserRequests ']);
						A.push([' ']);
						A.push([' ']);
						
						A.push([ 'Request ID','Employee Id','First name','Last Name','Assigned To','Email ID','Status' ]);
						if ($scope.users.length > 0) {
							for (var j = 0; j < $scope.users.length; j++) {
								var B = [];

								B.push($scope.users[j]['requestid']);
								B.push($scope.users[j]['employeeid']);
								B.push($scope.users[j]['firstname']);
								B.push($scope.users[j]['lastname']);
								B.push($scope.users[j]['emailid']);
							
								
								
								B.push($scope.users[j]['assignedto']);
					
								B.push($scope.users[j]['status']);
								A.push(B);
								if (j == $scope.users.length - 1) {
									var data = A;
									var ws_name = "users";

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
									}), "NewUserRequests.xlsx")
								}
							}
						}

					}


				});
