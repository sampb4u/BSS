'use strict';
angular
	.module('app', [ 'ngAnimate', 'toaster', 'components.download' ])
	.controller(
		'ITUserController',
		function($scope, $modal, $log, $http, $state, $stateParams,
			$mdToast, toaster, $timeout, $filter, downloadService) {

			$scope.user = $stateParams.user;

			$scope.sortType = 'name'; // set the default sort type
			$scope.sortReverse = false; // set the default sort order
			$scope.searchFish = '';
			$scope.hratt = [];
			$scope.itatt = [];
			$scope.lanatt = [];
			$scope.type = '';

			if ($scope.user != undefined) {
				$scope.con = true;


				$scope.id = parseInt($scope.user.requestid.substr(3));
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

						$scope.closecheck();


					} else if ($scope.user.status == 'HR-In Progress') {

						$scope.it = true;

					}
				}
				if ($scope.user.status == 'Closed') {
					$scope.close = true;

				}

			}
			$scope.createnewrequestid = function() {
				if ($scope.user == undefined) {
					$scope.user = {
						status : 'New'
					};
					$scope.it = true;
					var date = new Date();
					$scope.user.createdate = date
						.getTime();
					$scope.user.createdatestring = $filter(
						'date')(new Date($scope.user.createdate),
						'yyyy-MM-dd HH:mm:ss');
					$scope.user.assignedto = 'IT Admin';

				} else {
					$scope.getlinks();
				}
			}

			$scope.createrequestid = function(status) {




				if ($scope.user.country != undefined) {
					if ($scope.user.requestid == undefined) {
						var req = {
							method : 'GET',
							url : "/SCA-360/getSQid.do",
							headers : {
								'Content-Type' : 'application/json'
							}
						}

						$http(req).then(function(data) {
							$scope.id = data.data;
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
							//	$scope.createrequestid();
							$scope.createUser('hrsave');


						}, function() {
							console.log("failed to create user")
						});

					} else {
						$scope.user.requestid = 'R' + $scope.user.country
						+ $scope.user.requestid.substr(3);

						$scope.createUser('hrsave');
					}
				}


			}

			$scope.createUser = function(status) {

					$scope.con=true;
				if (status == 'hrsave') {
					$scope.user.status = 'HR-In Progress';
				} else if (status == 'hrsubmit') {
					$scope.user.status = 'HR-Submitted';
				} else if (status == 'itsave') {
					$scope.user.status = 'IT-In Progress';
				} else if (status == 'close') {
					$scope.user.status = 'Closed';
					$scope.closecheck();
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
								$scope.it = false;
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
				if ($scope.user.status == 'Closed') {
					var date = new Date();
					$scope.user.enddate = date.getTime();
					$scope.user.enddatestring = $filter('date')(
						new Date($scope.user.enddate),
						'yyyy-MM-dd HH:mm:ss');
					$scope.close = true;

				} else {
					$scope.close = false;
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


				A.push([ 'Request ID', 'Employee Id', 'Firstname', 'Lastname', 'Middlename', 'Emailid', 'Assignedto', 'Status', 'Createdate', 'Enddate', 'Designation', 'Managername', 'Personalphonenumber', 'Officephonenumber', 'Officephonebrand', 'Officephonemodel', 'Officephonestorage', 'Officephonesno', 'Createdby', 'Computertype', 'Computerbrand', 'Computermodel', 'Computerram', 'Computerstorage', 'Assetid', 'Lan', 'Computername', 'Ip', 'Shiid', 'Vpnid', 'Vpnpassowrd', 'Macaddress', 'Monitorbrand', 'Monitormodel', 'Monitorsize', 'Keyboardtype', 'Keyboardbrand', 'Mousetype', 'Mousebrand', 'Exstorage1', 'Exstorage2', 'Notesit', 'Emailid1', 'Emailid2', 'Emailid3', 'Country', 'Notes', 'Laptopbrand', 'Laptopmodel', 'Laptopram', 'Laptopstorage' ]);
				if ($scope.users.length > 0) {
					for (var j = 0; j < $scope.users.length; j++) {
						var B = [];

						B.push($scope.users[j]['requestid']);
						B.push($scope.users[j]['employeeid']);

						B.push($scope.users[j]['firstname']);
						B.push($scope.users[j]['lastname']);
						B.push($scope.users[j]['middlename']);
						B.push($scope.users[j]['emailid']);
						B.push($scope.users[j]['assignedto']);
						B.push($scope.users[j]['status']);
						B.push($scope.users[j]['createdatestring']);
						B.push($scope.users[j]['enddatestring']);
						B.push($scope.users[j]['designation']);
						B.push($scope.users[j]['managername']);
						B.push($scope.users[j]['personalphonenumber']);
						B.push($scope.users[j]['officephonenumber']);
						B.push($scope.users[j]['officephonebrand']);
						B.push($scope.users[j]['officephonemodel']);
						B.push($scope.users[j]['officephonestorage']);
						B.push($scope.users[j]['officephonesno']);
						B.push($scope.users[j]['createdby']);
						B.push($scope.users[j]['computertype']);
						B.push($scope.users[j]['computerbrand']);
						B.push($scope.users[j]['computermodel']);
						B.push($scope.users[j]['computerram']);
						B.push($scope.users[j]['computerstorage']);
						B.push($scope.users[j]['assetid']);
						B.push($scope.users[j]['lan']);
						B.push($scope.users[j]['computername']);
						B.push($scope.users[j]['ip']);
						B.push($scope.users[j]['shiid']);
						B.push($scope.users[j]['vpnid']);
						B.push($scope.users[j]['vpnpassowrd']);
						B.push($scope.users[j]['macaddress']);
						B.push($scope.users[j]['monitorbrand']);
						B.push($scope.users[j]['monitormodel']);
						B.push($scope.users[j]['monitorsize']);
						B.push($scope.users[j]['keyboardtype']);
						B.push($scope.users[j]['keyboardbrand']);
						B.push($scope.users[j]['mousetype']);
						B.push($scope.users[j]['mousebrand']);
						B.push($scope.users[j]['exstorage1']);
						B.push($scope.users[j]['exstorage2']);
						B.push($scope.users[j]['notesit']);
						B.push($scope.users[j]['emailid1']);
						B.push($scope.users[j]['emailid2']);
						B.push($scope.users[j]['emailid3']);
						B.push($scope.users[j]['country']);
						B.push($scope.users[j]['notes']);
						B.push($scope.users[j]['laptopbrand']);
						B.push($scope.users[j]['laptopmodel']);
						B.push($scope.users[j]['laptopram']);
						B.push($scope.users[j]['laptopstorage']);

						A.push(B);
						if (j == $scope.users.length - 1) {
							var data = A;
							var ws_name = "users";

							var wb = new $scope.Workbook(),
								ws = $scope
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


							var date = $filter(
								'date')(
								new Date(),
								'yyyy-MM-dd HH:mm:ss');

							saveAs(new Blob([ $scope.s2ab(wbout) ], {
								type : ""
							}), "NewUserRequests_" + date + ".xlsx")
						}
					}
				}

			}

			$scope.getlinks = function() {
				var tic = {};
				tic.id = $scope.user.requestid;

				var req = {
					method : 'POST',
					url : "/SCA-360/getITlinks.do",
					headers : {
						'Content-Type' : 'application/json'
					},
					data : tic
				}

				$http(req).then(function(data) {
					$scope.hratt = [];
					$scope.itatt = [];
					$scope.lanatt = [];
					data.data.forEach(function(entry) {
						if (entry.type == 'HR') {
							$scope.hratt.push(entry);
						}
						if (entry.type == 'IT') {
							$scope.itatt.push(entry);
						}
						if (entry.type == 'LAN') {
							$scope.lanatt.push(entry);
						}
					});



				}, function() {
					console.log("failed to get attachments")
				});

			}

			$scope.uploadhr = function() {
				$scope.continueFileUpload("HR")
			}
			$scope.uploadit = function() {
				$scope.continueFileUpload("IT")
			}
			$scope.uploadlan = function() {
				$scope.continueFileUpload("LAN")
			}

			$scope.continueFileUpload = function(type) {

				var formData = new FormData();
				if (type == 'HR') {
					formData.append("file", file.files[0]);
				}
				if (type == 'IT') {
					formData.append("file", fileit.files[0]);
				}
				if (type == 'LAN') {
					formData.append("file", filelan.files[0]);
				}


				$http({
					method : 'POST',
					url : "/SCA-360/continueFileUpload.do",
					headers : {
						'Content-Type' : undefined
					},
					data : formData,
					transformRequest : function(data, headersGetterFunction) {
						return data;
					}
				})
					.success(function(data, status) {
						if ($scope.id == undefined) {
							$scope.createnewrequestid()
						}
						console.log("success" + data.data);

						var filedata = {
							"name" : data.data,
							"id" : $scope.user.requestid,
							"type" : type,
							"filename" : data.filename,
							"uuid" : data.id
						};
						var req = {
							method : 'POST',
							url : "/SCA-360/createITlink.do",
							headers : {
								'Content-Type' : 'application/json'
							},
							data : filedata
						}

						$http(req)
							.then(
								function(data) {
									toaster.success({
										title : "File Uploaded "
									});
									console.log("file uploaded");
									$scope.getlinks();
								/*$scope.getlinks("IT");
								$scope.getlinks("LAN");*/
								}, function(data) {});


					})



			};
			$scope.download = function(fileName) {
				downloadService.download(fileName)
					.then(function(success) {
						console.log('success : ' + success);
					}, function(error) {
						console.log('error : ' + error);
					});
			};



		});