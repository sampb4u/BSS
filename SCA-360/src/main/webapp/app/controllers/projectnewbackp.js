///////////////////salesman//////////////////////
angular.module('app')
    .controller('salesmanMaster', function($scope, $http,$filter) {
        // naveebna
 $("#showsearch").hide();
        var countryObj = new Object();
        countryObj.dropdownname = "Country";
        countryObj.columnname = "country";
        countryObj.columncode = "countrycode";
        var jsonCountryString = JSON.stringify(countryObj);

        var regionObj = new Object();
        regionObj.targetdropdownname = "Region";
        regionObj.targetcolumnname = "region";
        regionObj.targetcolumncode = "regionid";
        regionObj.columnname = "countrycode";


        $scope.salesmanData = [];
        $index = 0;
        $scope.addsalesmandataForm = function(country) {
			if(country==undefined){
				$scope.items = [{
                        'id': $index,
                        'status': '0'
                    }];
				}

            $index++;
			
            $scope.salesmanData.push({
                'id': $index,
                'status': '0'
            })

        };
		
		

        $scope.removeFormRow = function(name) {
            // alert(name);
            var IndexTab1 = -1;
            var comArrTab1 = eval($scope.salesmanData);
            for (var i = 0; i < comArrTab1.length; i++) {
                if (comArrTab1[i].id === name) {
                    IndexTab1 = i;
                    break;
                }
            }
            $scope.salesmanData.splice(IndexTab1, 1);
            $indexTab1 = comArrTab1.length;
            for (var s = 0; s < $indexTab1; s++) {
                $scope.salesmanData[s].id = Number(s) + Number(1);
            }
        };



        $scope.loadCountryNames = function() {
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadDropDown.do",
                data: jsonCountryString,
            }).success(function(data, status) {
                $scope.countryNames = data;
				
                //alert(JSON.stringify($scope.countryNames));


            });
        };

        $scope.loadRegionNames = function(countryCode) {

           if(countryCode==null){}else{
            regionObj.value = countryCode;
            var jsonRegionString = JSON.stringify(regionObj);
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadDropDownOnChange.do",
                data: jsonRegionString,
            }).success(function(data, status) {
                //alert(JSON.stringify(data));
                $scope.regionNames = data;



            });
		   }
        };
		

 
  
        $scope.CategoryOnchange = function(county) {
			
			$scope.searchFish="";
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getSalesManfromMaster.do",
                data: county,
            }).success(function(data, status) {
                //alert(JSON.stringify(data));
                if (data.saleman.length == 0) {
					 $("#showsearch").hide();
                    $index = 1;
                    /*$scope.salesmanData = [{
                        'id': $index,
                        'status': '0'
                    }];*/
					 $scope.totalItems = data.saleman.length;
				 $scope.currentPage =0;	
			$scope.itemsPerPage = 0;
				 $scope.$watch("currentPage", function() {
  			  setPagingData($scope.currentPage);
 				 });

					  function setPagingData(page) {
   				
   				 $scope.items = [{
                        'id': $index,
                        'status': '0'
                    }];
  			}

					
                } else {
					 $("#showsearch").show();
					 $scope.totalItems = data.saleman.length;
					  $scope.currentPage =1;
  					$scope.itemsPerPage = 7;
					
					
 			 $scope.$watch("currentPage", function() {
  			  setPagingData($scope.currentPage);
 				 });

					  function setPagingData(page) {
						 
   				 var pagedData =  data.saleman.slice((page - 1) * $scope.itemsPerPage, page * $scope.itemsPerPage);
					
   				 $scope.items = pagedData;
  			}
				 

                    $scope.salesmanData = data.saleman;
					//datasalesman= data.saleman;
				//	alert(JSON.stringify( $scope.salesmanData));
					

                    for (var i = 0; i <= data.saleman.length; i++) {
                        //alert(data.countries.length);
                        $index = data.saleman.length;


                    }
                }

            });

        };

 

        $scope.savesalesmanCode = function(salesman) {
            var salesman = salesman;
            var salesmanArray = new Array();
            var salesmanObj = new Object();
            $scope.salesmanData.forEach(function(salesman) {

                salesmanArray.push(angular.toJson(salesman));

            });
            salesmanObj.gridData = salesmanArray;
            salesmanObj.formData = salesman;
            //alert(JSON.stringify(salesmanObj));
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/Salesmanformsubmit.do",
                data: JSON.stringify(salesmanObj),
            }).success(function(data, status) {
                //alert(JSON.stringify(data));
                // $scope.customergroupData = data;
                if (data == true) {
                    swal('Saved Successfully');
                    //$scope.getCountries();
                    salesmanArray.length = 0;

                } else if (data == false) {
                    swal("Ooh no...", "Something went wrong!", "error");
                    //$scope.getOnLoadHyponicData(0,0);
                }


            });

        };



    });
	
	/////////////////////////////region master////////////////////////////////////////
	angular.module('app')
    //==============Region Master========================
    .controller('RegionMaster', function($scope, $http) {
        //	 alert("enterd");

        var PrepareLoanAddObj = new Object();




        var countryObj = new Object();
        countryObj.dropdownname = "Country";
        countryObj.columnname = "country";
        countryObj.columncode = "countrycode";
        var jsonCountryString = JSON.stringify(countryObj);




        $scope.master = {};


        $scope.loadCountryNames = function() {
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadDropDown.do",
                data: jsonCountryString,
            }).success(function(data, status) {
                $scope.countryNames = data;


            });
        };




        $scope.regionSubmit = function(AddRegion, form) {
            if ($scope.RegionMasterForm.$valid) {
                regiondatamasterData = [];
                var AddRegion = JSON.stringify(AddRegion);



                $scope.RegionDataFoorm.forEach(function(regiondata) {

                    regiondatamasterData.push(angular.toJson(regiondata));

                });

                PrepareLoanAddObj.formData = $scope.AddRegion;
                PrepareLoanAddObj.gridData = regiondatamasterData;
                //alert(JSON.stringify(PrepareLoanAddObj));
                $.ajax({
                    url: "/SCA-360/saveRegionMaster.do",
                    processData: true,
                    type: 'POST',
                    contentType: 'Application/json',
                    data: JSON.stringify(PrepareLoanAddObj),
                    beforeSend: function(xhr) {

                        xhr.setRequestHeader("Accept", "application/json");
                        xhr.setRequestHeader("Content-Type", "application/json");
                    },
                    success: function(response) {
                        if (response == true) {
                            var countrycode = $scope.AddRegion.countrycode;
                            $scope.getRegions(countrycode);
                            regiondatamasterData.length = 0;

                            swal("", 'Region Added Successfully', "success");


                        } else {

                            swal("Ooh no...", "Something went wrong!", "error");
                        }

                    }
                });

            } else {
                //alert("shw errors");
                var field = null,
                    firstError = null;
                for (field in form) {
                    if (field[0] != '$') {
                        if (firstError === null && !form[field].$valid) {
                            firstError = form[field].$name;
                        }
                        if (form[field].$pristine) {
                            form[field].$dirty = true;
                        }
                    }
                }
            }

        };
        /*
                $scope.regionModify = function(regionCode) {
                    var httpRequest = $http({
                        method: 'POST',
                        url: "/SCA-360/getRegion.do",
                        data: regionCode,
                    }).success(function(data, status) {
                        //alert(JSON.stringify(data));
                        $scope.AddRegion = data.formData;

                        var salesmanSplit = data.salesmanCode.split(',');
                        //alert(salesmanSplit);
                        var addstringSales = [];
                        for (var s = 0; s < salesmanSplit.length; s++) {
                            addstringSales.push(salesmanSplit[s]);
                        }

                        $scope.AddRegion.modifyFlag = "Yes";

                        DropDownLoadOnChangesalesman.value = data.formData.countryCode;

                        var jsonStringOnChangeSalesmanDropDown = JSON.stringify(DropDownLoadOnChangesalesman);
                        var httpRequest = $http({
                            method: 'POST',
                            url: "/SCA-360/loadDropDownOnChange.do",
                            data: jsonStringOnChangeSalesmanDropDown,
                        }).success(function(data, status) {
                            $scope.salesmanCode = data;
                            var optionValues = "";
                            for (var i = 0; i < data.length; i++) {
                                optionValues += "<option value='" + data[i].salesmancode + "'>" + data[i].name + "</option>";
                            }
                            $('#picturegallery').empty();
                            var newOption = $(optionValues);
                            $('#picturegallery').append(newOption);
                            $('#picturegallery').trigger("chosen:updated");

                            $('#picturegallery').val(addstringSales).trigger('chosen:updated');
                            $scope.AddRegion.salesmanCode = addstringSales;
                        });

                    });
                };*/
        //---------Reset Form----
        $scope.reset = function(form) {
            $scope.AddRegion = angular.copy($scope.master);
            $scope.loadStatus();
            form.$setPristine(true);
            $('#picturegallery').val("['']").trigger('chosen:updated');
            $scope.addedRegion = "";
        };



        $scope.RegionDataFoorm = [];

        $index = 0;
        $scope.addRegionForm = function() {

            $index++;
            $scope.RegionDataFoorm.push({
                'id': $index,
                'status': '0'
            })

        };
        $scope.removeFormRow = function(name) {
            // alert(name);
            var IndexTab1 = -1;
            var comArrTab1 = eval($scope.RegionDataFoorm);
            for (var i = 0; i < comArrTab1.length; i++) {
                if (comArrTab1[i].id === name) {
                    IndexTab1 = i;
                    break;
                }
            }
            $scope.RegionDataFoorm.splice(IndexTab1, 1);
            $indexTab1 = comArrTab1.length;
            for (var s = 0; s < $indexTab1; s++) {
                $scope.RegionDataFoorm[s].id = Number(s) + Number(1);
            }
        };




        $scope.getRegions = function(countryCode) {
            //alert(countryCode);
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getRegion.do",
                data: countryCode,
            }).success(function(data, status) {

                if (data.length == 0) {

                    $index = 1;
                    $scope.RegionDataFoorm = [{
                        'id': $index,
                        'status': '0'
                    }];
                } else {
                    $scope.RegionDataFoorm = data;
                    $scope.updateFlag = 'ok';
                    for (var i = 0; i <= data.length; i++) {
                        //alert(data.countries.length);
                        $index = data.length;
                        $scope.updateLength = data.length;

                    }
                }

            });
        }

        /*	$scope.getcountryvalidate=function(country,index){
				var country=country;
				$.getJSON("getcountrycheck.do",{country:country}, function(json) {
	               
					var countryvalidate=json;
					 if(countryvalidate==false){
						 for (var i = 0; i < JSON.stringify($scope.countryDataForm.length); i++) {

                    if (index == i) {
                       
                            $(".existValRC122" + index).show();
							$("#buttonhide").prop('disabled', true);
							
					}
					
					}
					 }else{
						 
						   $(".existValRC122" + index).hide();
						   	$("#buttonhide").prop('disabled', false);
					 }
	              
	                
	            });
				
			}*/



        $scope.getvalidateRegionCode = function(values, index) {
            //alert("enterd");

            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/checkValueExist.do",
                data: values,
            }).success(function(data, status) {

                if (data == true) {
                    for (var i = 0; i < JSON.stringify($scope.RegionDataFoorm.length); i++) {

                        if (index == i) {

                            $(".existValRC122" + index).show();
                            $("#buttonhide").prop('disabled', true);

                        }
                    }
                } else {
                    $(".existValRC122" + index).hide();
                    $("#buttonhide").prop('disabled', false);
                }

            });
        };



        $scope.getvalidateRegion = function(region, index) {


            var region = region.toUpperCase();
            var count = 0;

            angular.forEach($scope.RegionDataFoorm, function(value, index) {

                var sum = (value.region).toUpperCase();

                if (region == sum) {
                    count++;
                }

            })

            // alert("COUNT  "+count);
            if (count > 1) {
                swal("Region Name Already Exist");
                $scope.RegionDataFoorm[index].region = "";
            } else {
                // alert("enterd");
                // $(".existValRC122" + index).hide();
            }


        };

        $scope.getvalidateRegionCodeData = function(regionCode, index) {
          //  alert("enterd");

            var regionCode = regionCode.toUpperCase();
            //alert(regionCode);
            var count = 0;

            angular.forEach($scope.RegionDataFoorm, function(value, index) {

                var sum = (value.regionCode).toUpperCase();

                if (regionCode == sum) {
                    count++;
                }

            })

            // alert("COUNT  "+count);
            if (count > 1) {
                swal("RegionCode Name Already Exist");
                $scope.RegionDataFoorm[index].regionCode = "";
            } else {
                // alert("enterd");
                // $(".existValRC122" + index).hide();
            }



        };



    });
///////////////////////SALESPROGRESS INDICATORS///////////////////////////////
angular.module('app')
    .controller('salesprogressController', function($scope, $http) {
        SaveprogressindicatorData = [];

        $scope.progressindicatorData = [];

        $index = 0;
        $scope.addindicatorForm = function() {

            $index++;
            $scope.progressindicatorData.push({
                'id': $index,
                'status': '0'
            })

        };
        $scope.removeFormRow = function(name) {
            // alert(name);
            var IndexTab1 = -1;
            var comArrTab1 = eval($scope.progressindicatorData);
            for (var i = 0; i < comArrTab1.length; i++) {
                if (comArrTab1[i].id === name) {
                    IndexTab1 = i;
                    break;
                }
            }
            $scope.progressindicatorData.splice(IndexTab1, 1);
            $index = comArrTab1.length;

            for (var s = 0; s < $index; s++) {
                $scope.progressindicatorData[s].id = Number(s) + Number(1);
            }
        };
        $scope.saveSalesIndicator = function(form) {
            if ($scope.salesprogressindicatorform.$valid) {
                var progressObject = new Object();
                $scope.progressindicatorData.forEach(function(progressindicator) {

                    SaveprogressindicatorData.push(angular.toJson(progressindicator));
                });


                progressObject.gridData = SaveprogressindicatorData;
                // alert(JSON.stringify(progressObject));

                $.ajax({
                    url: "/SCA-360/saveProgressIndicators.do",
                    processData: true,
                    type: 'POST',
                    contentType: 'Application/json',
                    data: JSON.stringify(progressObject),
                    beforeSend: function(xhr) {

                        xhr.setRequestHeader("Accept", "application/json");
                        xhr.setRequestHeader("Content-Type", "application/json");
                    },
                    success: function(response) {
                        if (response == true) {
                            swal('Saved Successfully');
                            SaveprogressindicatorData.length = 0;
                            $scope.getData();

                        } else if (response == false) {
                            swal("Ooh no...", "Something went wrong!", "error");
                            //$scope.getOnLoadHyponicData(0,0);
                        }


                    }
                });
            } else {
                //alert("shw errors");
                var field = null,
                    firstError = null;
                for (field in form) {
                    if (field[0] != '$') {
                        if (firstError === null && !form[field].$valid) {
                            firstError = form[field].$name;
                        }
                        if (form[field].$pristine) {
                            form[field].$dirty = true;
                        }
                    }
                }
            }

        };


        var indicatorValObj = new Object();
        indicatorValObj.tablename = "com.finsol.model.SalesProgressIndicators";
        indicatorValObj.columnname = "indicator";
        $scope.getindicatorvalidate = function(indicator, index) {

            indicatorValObj.value = indicator;
            var jsonObj = JSON.stringify(indicatorValObj);
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/checkValue.do",
                data: jsonObj,
            }).success(function(data, status) {
                //alert(data);
                if (data == true) {

                    for (var i = 0; i < JSON.stringify($scope.progressindicatorData.length); i++) {

                        if (index == i) {

                            $(".existValRC122" + index).show();
                            /*$("#buttonhide").prop('disabled', true);*/

                        }

                    }
                } else {
                    $(".existValRC122" + index).hide();
                }

            });

        }


        $scope.getData = function() {
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getAllSalesProgressIndicators.do",
                data: {},
            }).success(function(data, status) {
                if (data.indicators.length == 0) {
                    $index = 1;
                    $scope.progressindicatorData = [{
                        'id': $index,
                        'status': '0'
                    }];
                } else {
                    $scope.progressindicatorData = data.indicators;
                    $scope.updateFlag = 'ok';
                    for (var i = 0; i <= data.indicators.length; i++) {
                        // alert(data.countries.length);
                        $scope.updateLength = data.indicators.length;
                        $index = data.indicators.length


                    }

                }

            });
        };

        $scope.resetprogressindicator = function(form) {
            $index = 1;
            $scope.progressindicatorData = [{
                'id': $index
            }]
            form.$setPristine(true);
        }


        $scope.getValidate = function(indicator, index) {

            var indicator = indicator.toUpperCase();
            var count = 0;

            angular.forEach($scope.progressindicatorData, function(value, index) {

                var sum = (value.indicator).toUpperCase();

                if (indicator == sum) {
                    count++;
                }

            })

            // alert("COUNT  "+count);
            if (count > 1) {
                swal("Indicator Already Exist");
                $scope.progressindicatorData[index].indicator = "";
            } else {
                // alert("enterd");
                // $(".existValRC122" + index).hide();
            }


        };



    });

////////////////probability master//////////////////////////////
angular.module('app')
    .controller('probalityMaster', function($scope, $http) {
        var probalityObject = new Object();
        $scope.probabilityFormData = [];
        SaveprobalityData = [];

        var DropDownLoad = new Object();
        DropDownLoad.dropdownname = "SalesProgressIndicators";
        DropDownLoad.columnname = "indicator";
        DropDownLoad.columncode = "indicatorcode";
        var jsonStringDropDown = JSON.stringify(DropDownLoad);


        var DropDownLoadcustomer = new Object();
        DropDownLoadcustomer.dropdownname = "CustmerType";
        DropDownLoadcustomer.columnname = "custmertypename";
        DropDownLoadcustomer.columncode = "ctid";
        var jsonStringDropDowncustomer = JSON.stringify(DropDownLoadcustomer);

        $index = 0;
        $scope.addprobabilitydataForm = function() {

            $index++;
            $scope.probabilityFormData.push({
                'id': $index
            })

        };
        $scope.removeFormRow = function(name) {
            // alert(name);
            var IndexTab1 = -1;
            var comArrTab1 = eval($scope.probabilityFormData);
            for (var i = 0; i < comArrTab1.length; i++) {
                if (comArrTab1[i].id === name) {
                    IndexTab1 = i;
                    break;
                }
            }
            $scope.probabilityFormData.splice(IndexTab1, 1);
            $indexTab1 = comArrTab1.length;
            for (var s = 0; s < $indexTab1; s++) {
                $scope.probabilityFormData[s].id = Number(s) + Number(1);
            }
        };

        $scope.getIndicators = function() {
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadDropDown.do",
                data: jsonStringDropDown,
            }).success(function(data, status) {
                // alert(JSON.stringify(data));
                $scope.indicatorsData = data;


            });
        };

        $scope.getCustomergruop = function() {
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadDropDown.do",
                data: jsonStringDropDowncustomer,
            }).success(function(data, status) {
                // alert(JSON.stringify(data));
                $scope.customergroupData = data;


            });
        };

        $scope.saveprobability = function(probability, form) {

            if ($scope.probablitymasterForm.$valid) {

                $scope.probabilityFormData.forEach(function(probabilitydata) {

                    SaveprobalityData.push(angular.toJson(probabilitydata));
                });

                probalityObject = probability;
                probalityObject.gridData = SaveprobalityData;
                //alert(JSON.stringify(probalityObject));

                $.ajax({
                    url: "/SCA-360/saveProbabilityMaster.do",
                    processData: true,
                    type: 'POST',
                    contentType: 'Application/json',
                    data: JSON.stringify(probalityObject),
                    beforeSend: function(xhr) {

                        xhr.setRequestHeader("Accept", "application/json");
                        xhr.setRequestHeader("Content-Type", "application/json");
                    },
                    success: function(response) {
                        if (response == true) {
                            swal('Saved Successfully');
                            SaveprobalityData.length = 0;



                        } else if (response == false) {
                            swal("Ooh no...", "Something went wrong!", "error");
                            //$scope.getOnLoadHyponicData(0,0);
                        }


                    }
                });

            } else {
                //alert("shw errors");
                var field = null,
                    firstError = null;
                for (field in form) {
                    if (field[0] != '$') {
                        if (firstError === null && !form[field].$valid) {
                            firstError = form[field].$name;
                        }
                        if (form[field].$pristine) {
                            form[field].$dirty = true;
                        }
                    }
                }
            }

        };


        $scope.getCustomerGroup = function(customerGroup) {
            var custoomergroup = customerGroup;

            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getAllProbabilityMasters.do",
                data: custoomergroup,
            }).success(function(data, status) {
                //alert(JSON.stringify(data));
                if (data.probabilities.length == 0) {
                    $index = 1;
                    $scope.probabilityFormData = [{
                        'id': $index
                    }];
                } else {
                    $scope.probabilityFormData = data.probabilities;
                    for (var i = 0; i <= data.probabilities.length; i++) {
                        $index = data.probabilities.length;
                    }
                }

                /*	angular.forEach(data.probabilities, function(value, index) {
						
                        var sum = value.indicator;
						for(var i=0;i<$scope.indicatorsData.length;i++){
							//alert($scope.indicatorsData[i].indicator==sum);
							if($scope.indicatorsData[i].indicator==sum){
								
								 $scope.probabilityFormData = data.probabilities;
								
							}
							
							}
					
					
                    })*/



            });


        }

        $scope.resetprobablity = function(form) {
            $index = 1;
            $scope.probabilityFormData = [{
                'id': $index
            }]
            form.$setPristine(true);
        }
    });
	
	///////salesreport/////////////
angular.module('app')
    .controller('salesReportController', function($scope, $http,$rootScope) {


		
		  var statusObj = new Object();
        statusObj.targetdropdownname = "CustmerDetails";
        statusObj.targetcolumnname = "customerStatus";
        statusObj.targetcolumncode = "custid";
        statusObj.columnname = "accountid";


		 var contactObj = new Object();
        contactObj.targetdropdownname = "CustmerDetails";
        contactObj.targetcolumnname = "contName";
        contactObj.targetcolumncode = "custid";
        contactObj.columnname = "accountid";

		
        var quotationObj = new Object();
        quotationObj.targetdropdownname = "Quotation";
        quotationObj.targetcolumnname = "qtnNo";
        quotationObj.targetcolumncode = "qid";
        quotationObj.columnname = "custName";

        var caseObj = new Object();
        caseObj.targetdropdownname = "CaseSummary";
        caseObj.targetcolumnname = "caseRef";
        caseObj.targetcolumncode = "newselectionid";
        caseObj.columnname = "customer";




        var DropDownLoad = new Object();
        DropDownLoad.dropdownname = "Department";
        DropDownLoad.columnname = "departmentname";
        DropDownLoad.columncode = "deptid";
        var jsonStringDropDown = JSON.stringify(DropDownLoad);




        var numOfPieces = 6 * 6;
        var frag = document.createDocumentFragment();

        function insertInnerPieces($el, innerPieces) {
            for (var i = 0; i < innerPieces; i++) {
                var $inner = document.createElement('div');
                $inner.classList.add('popup__piece-inner');
                $el.appendChild($inner);
            }
        };

        for (var i = 1; i <= numOfPieces; i++) {
            var $piece = document.createElement('div');
            $piece.classList.add('popup__piece');

            insertInnerPieces($piece, 3);
            frag.appendChild($piece);
        }

        document.querySelector('.popup__pieces').appendChild(frag);

        var $popupsCont = document.querySelector('.popups-cont');
        var $popup = document.querySelector('.popup');
        var popupAT = 900;

        var overlay = jQuery('<div id="overlay"> </div>');
        $scope.showPopup = function(salesman,form) {
			
            if (salesman == undefined|| salesman == "") {
				
				     if ($scope.salesreportForm.$valid) {
 } else {
                //alert("shw errors");
                var field = null,
                    firstError = null;
                for (field in form) {
                    if (field[0] != '$') {
                        if (firstError === null && !form[field].$valid) {
                            firstError = form[field].$name;
                        }
                        if (form[field].$pristine) {
                            form[field].$dirty = true;
                        }
                    }
                }
            }

				  
				  
				  } else {
                overlay.appendTo(document.body);
                $popupsCont.classList.add('s--popup-active');
                $popup.classList.add('s--active');
                $("#deliveryshow1").show();
                $("#deliveryshow2").show();
                $("#deliveryshow3").show();
                $("#progresShow1").hide();
                $("#progresShow2").hide();
                $("#progresSho3").hide();
                $("#progresSho4").hide();
                $("#blogHide").hide();
                $("#pageHeadding1").show();
                $("#pageHeadding2").hide();
                $("#pageHeadding3").hide();
				 $("#viewnotes").hide();
				  $("#existValRC1gg").hide();
            }
        }
		
		
		
		$scope.getcustomername=function(customername){
		
		 $rootScope.customername = customername;
		  $rootScope.Salesreportflag = "true";
			}
        $scope.showPopupprogress = function(salesman,form) {
            //alert(salesman);
            if (salesman == undefined|| salesman == "") {
				
				     if ($scope.salesreportForm.$valid) {
 } else {
                //alert("shw errors");
                var field = null,
                    firstError = null;
                for (field in form) {
                    if (field[0] != '$') {
                        if (firstError === null && !form[field].$valid) {
                            firstError = form[field].$name;
                        }
                        if (form[field].$pristine) {
                            form[field].$dirty = true;
                        }
                    }
                }
            }

				 } else {
                overlay.appendTo(document.body);
                $popupsCont.classList.add('s--popup-active');
                $popup.classList.add('s--active');
                $("#deliveryshow1").hide();
                $("#deliveryshow2").hide();
                $("#deliveryshow3").hide();
                $("#progresShow1").show();
                $("#progresShow2").show();
                $("#progresSho3").show();
                $("#progresSho4").show();
                $("#blogHide").hide();
                $("#pageHeadding1").hide();
                $("#pageHeadding2").show();
                $("#pageHeadding3").hide();
				 $("#viewnotes").hide();
            }


        }

        $scope.showviewNotes = function(salesman) {

			 
            overlay.appendTo(document.body);
            $popupsCont.classList.add('s--popup-active');
            $popup.classList.add('s--active');
            $("#deliveryshow1").hide();
            $("#deliveryshow2").hide();
            $("#deliveryshow3").hide();
            $("#progresShow1").hide();
            $("#progresShow2").hide();
            $("#progresSho3").hide();
            $("#progresSho4").hide();
            $("#blogHide").show();
            $("#pageHeadding1").hide();
            $("#pageHeadding2").hide();
            $("#pageHeadding3").show();
			    $("#viewnotes").show();
			
        }
	
	
	$scope.loadviewnotes=function(customer,quoteOrRefno,salesMan,date){
		
			var viewObj=new Object();
			
			if(customer==null || customer==undefined || customer==""){
				viewObj.srdate=date;
				viewObj.customer="NA";
			viewObj.salesMan=salesMan;
			viewObj.quotationNo="NA";
			}else if(quoteOrRefno==null){
				viewObj.srdate=date;
				viewObj.customer=customer;
			viewObj.salesMan=salesMan;
			viewObj.quotationNo="NA";
				}else{
					viewObj.srdate=date;
				viewObj.customer=customer;
			viewObj.salesMan=salesMan;
			viewObj.quotationNo=quoteOrRefno;
					
					}
			
		//alert(JSON.stringify(viewObj));
		var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadViewNotes.do",
                data: JSON.stringify(viewObj),
            }).success(function(data, status) {
				//alert(JSON.stringify(data));
				$scope.callnotesData=data;
			});

		
		
		
		}
		
		
        $scope.loadRadio = function() {
			var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getServerDate.do",
                data: {},
            }).success(function(data, status) {
                var serverdate= data.serverdate;
                //alert( $scope.ev.from);
           
       				var Username=sessionStorage.getItem("sessionUserName");
					var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getSalesManNameCode.do",
                data: Username,
            }).success(function(data, status) {
				//alert(JSON.stringify(data));
				var salesman=data.salesMan;
					var salesManCode=data.salesManCode;
					
            $scope.salesReport = {
                'activity': '0',
                'caseOrQuotaion': '0',
				'srdatetime':serverdate,
                'salesMan': salesman,
				'customerStatus':'---Status---',
				'salesManCode':salesManCode
            };
			 });
			 });
			
			$scope.customerStatus = [{ custid: '1', customerStatus: '---Status---' },{ custid: '2', customerStatus: 'Active' }, { custid: '3', customerStatus: 'Prospect' },{ custid: '4', customerStatus: 'Qualified' },{ custid: '5', customerStatus: 'Inactive or on Hold' }];
			
			

        }


		$scope.getCustomerStatus=function(customer){
		statusObj.value = customer;
                var jsonquotationString = JSON.stringify(statusObj);
			//	alert(jsonquotationString);
                var httpRequest = $http({
                    method: 'POST',
                    url: "/SCA-360/loadDropDownOnChange.do",
                    data: jsonquotationString,
                }).success(function(data, status) {
					//alert(JSON.stringify(data[0].customerStatus));
				
					 $scope.salesReport.customerStatus=data[0].customerStatus;
			
					
				})
			
		}
		
			$scope.getCustomerName=function(customer){
		contactObj.value = customer;
                var jsonquotationString = JSON.stringify(contactObj);
				//alert(jsonquotationString);
                var httpRequest = $http({
                    method: 'POST',
                    url: "/SCA-360/loadDropDownOnChange.do",
                    data: jsonquotationString,
                }).success(function(data, status) {
					//alert(JSON.stringify(data));
				
					 $scope.salesReport.contactName=data[0].contName;
			
					
				})
			
		}

        $scope.saveProgressdetails = function(customer,quotationno, totalProbability,salesMan) {
        
 
			 var saveTotalObj = new Object();
            var progressupdateObj = new Object();
            //  $('.popup__close').click();
            var SaveProgressUpdate = [];

            $scope.updateprogressData.forEach(function(progress) {

                SaveProgressUpdate.push(angular.toJson(progress.probabilities));
               

            });
          

           
            saveTotalObj.probabilities = SaveProgressUpdate;
			saveTotalObj.customer = customer;
			saveTotalObj.quotationno = quotationno;
			saveTotalObj.totalProbability = totalProbability;
			saveTotalObj.salesMan = salesMan;
			
            progressupdateObj.progressupdate = saveTotalObj;
            
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/saveProgressUpdate.do",
                data: JSON.stringify(progressupdateObj),
            }).success(function(data, status) {
				
                if (data == true) {

                    swal('Saved Successfully');
						
						
                    SaveProgressUpdate.length = 0;
                 
                    $('.popup__close').click();
				
                  
                } else if (data == false) {
                    swal("Ooh no...", "Something went wrong!", "error");
					
                   
                    //$scope.getOnLoadHyponicData(0,0);
                }

            });




        }

        $scope.getcaseRefQuotation = function(customer, caseOrQuotaion) {

            if (caseOrQuotaion == 1) {
                quotationObj.value = customer;
                var jsonquotationString = JSON.stringify(quotationObj);
                var httpRequest = $http({
                    method: 'POST',
                    url: "/SCA-360/loadDropDownOnChange.do",
                    data: jsonquotationString,
                }).success(function(data, status) {

                    $scope.quoteOrRefnodata = data;

                });
            } else if (caseOrQuotaion == 0) {
                caseObj.value = customer;
                var jsoncaseString = JSON.stringify(caseObj);
                var httpRequest = $http({
                    method: 'POST',
                    url: "/SCA-360/loadDropDownOnChange.do",
                    data: jsoncaseString,
                }).success(function(data) {
                    //alert(JSON.stringify(data));
                    $scope.caseRefdata = data;

                });

            }
        };



        $scope.getCustName = function(customer, caseOrQuotaion) {


            if (caseOrQuotaion == 1) {
                quotationObj.value = customer;
                var jsonquotationString = JSON.stringify(quotationObj);
                var httpRequest = $http({
                    method: 'POST',
                    url: "/SCA-360/loadDropDownOnChange.do",
                    data: jsonquotationString,
                }).success(function(data, status) {
                    //alert(JSON.stringify(data));
                    $scope.quoteOrRefnodata = data;

                });
            } else if (caseOrQuotaion == 0) {
                caseObj.value = customer;
                var jsoncaseString = JSON.stringify(caseObj);
                var httpRequest = $http({
                    method: 'POST',
                    url: "/SCA-360/loadDropDownOnChange.do",
                    data: jsoncaseString,
                }).success(function(data) {
                    //alert(JSON.stringify(data));
                    $scope.caseRefdata = data;

                });

            }


        };




        var deliveryObj = new Object();
        $scope.savedetails = function(salesMan, customer) {

            var SaveDelivery = [];
            $scope.deliveryreportData.forEach(function(deliveryreport) {

                SaveDelivery.push(angular.toJson(deliveryreport));


            });
            SaveDelivery.customer = customer;
            deliveryObj.formData = salesMan;
            deliveryObj.gridData = SaveDelivery;

            //alert(JSON.stringify(deliveryObj));
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/saveDeliveryUpdate.do",
                data: JSON.stringify(deliveryObj),
            }).success(function(data, status) {
                if (data == true) {

                    swal('Saved Successfully');
                    SaveDelivery.length = 0;
                    $('.popup__close').click();
                   

                } else if (data == false) {
                    swal("Ooh no...", "Something went wrong!", "error");
                 
                }

            });




        }



        $scope.Canceldetails = function() {
            $('.popup__close').click();
        };

        $scope.getDepartments = function() {

            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadDropDown.do",
                data: jsonStringDropDown,
            }).success(function(data, status) {
                //alert(JSON.stringify(data));
                $scope.departmentsData = data;


            });
        };

        $scope.ShowDatePicker = function() {

            $(".datepicker").datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: 'dd-mm-yy',
                beforeShow: function() {
                    setTimeout(function() {
                        $('.ui-datepicker').css({
                            'z-index': 999999,
                            'width': '20%'
                        });
                    }, 0);
                }
            });
        };

        $scope.$applyAsync(function() {
            $(".datepicker").datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: 'dd-mm-yy',
                beforeShow: function() {
                    setTimeout(function() {
                        $('.ui-datepicker').css({
                            'z-index': 999999,
                            'width': '20%'
                        });
                    }, 0);
                }
            });

        })

        $scope.FinalSave = function(salesReport,form) {
				
			if ($scope.salesreportForm.$valid) {
			
            var FinalObj = new Object();
			
			 delete $scope.salesReport["totalProbability"];
            delete $scope.salesReport["quotationno"];
            delete $scope.salesReport["probabilities"];
			
            FinalObj.salesreport = salesReport;



       //  alert(JSON.stringify(FinalObj));
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/saveSalesReport.do",
                data: JSON.stringify(FinalObj),
            }).success(function(data) {
                //alert(JSON.stringify(data));
                if (data == true) {

                    swal('Saved Successfully');
					$scope.loadRadio();
					$scope.getDepartments();
					$scope.loadCustomer();

                    // $scope.loadRadio();

                } else if (data == false) {
                    swal("Ooh no...", "Something went wrong!", "error");
                    //$scope.getOnLoadHyponicData(0,0);
                }
            })
			
			
			 } else {
                //alert("shw errors");
                var field = null,
                    firstError = null;
                for (field in form) {
                    if (field[0] != '$') {
                        if (firstError === null && !form[field].$valid) {
                            firstError = form[field].$name;
                        }
                        if (form[field].$pristine) {
                            form[field].$dirty = true;
                        }
                    }
                }
            }

        };


        $scope.loadCustomer = function() {

            $.getJSON("getAllCustmerNames.do", function(json) {

                $scope.customernames = json['data'];




            })
        };



        $scope.loadupdatevalues = function(customer,totalprobablity,quotationno) {
			$scope.salesReport.totalProbability="";
			$scope.salesReport.quotationno="";
            var customer = customer
            //alert(customer);
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getProbabilityIndicatorsForCustGroup.do",
                data: customer,
            }).success(function(data, status) {
               

                if (data.probabilities.length == 0) {

                    $index = 1;
                    $scope.updateprogressData = [{
                        'id': $index
                    }];

                } else {
                    $scope.updateprogressData = data.probabilities;

                    $scope.salesReport.customer = customer;

                }


            });

            quotationObj.value = customer;
            var jsonquotationString = JSON.stringify(quotationObj);
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadDropDownOnChange.do",
                data: jsonquotationString,
            }).success(function(data, status) {

                $scope.quotationnodata = data;

            });

        }

      var customer = "";
        $scope.loaddeliveryvalues = function(customer) {
            customer = customer

            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadDeliveryUpdates.do",
                data: customer,
            }).success(function(data, status) {
                //alert(JSON.stringify(data));
                $scope.deliveryreportData = data;



            });
        }


        //$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd-MM-yyyy', 'shortDate'];
        //$scope.format = $scope.formats[2];
		$scope.changestatus=function(status,index,totalProbability,probability){
			if(status=="true"){
					$scope.updateprogressData[index].probabilities="false";
					
				   $scope.salesReport.totalProbability = parseInt(totalProbability) - parseInt(probability);
            
				}
			
			}
		
		
		var count=0;
        var probabilitysum = 0;
	
        $scope.calculatePercentage = function(probability, status, quotationno,totalprobablity) {
				 
            sessionStorage.setItem("quotation", quotationno)
            if (status == true) {
			
		     probabilitysum = parseInt(probability) + parseInt(totalprobablity);
			
			 $scope.salesReport.totalProbability = probabilitysum;
					
					
            }else if(status==false){
				
                //var totalprobability=$scope.salesReport.totalprobability;
                probabilitysum = parseInt(probabilitysum) - parseInt(probability);
                $scope.salesReport.totalProbability = probabilitysum;

            }
        }


	
        $scope.submitOnChange = function(quotationno, totalProbability,customer,salesMan) {
		
				  
				  
				  var totalObj=new Object();
				  
			 var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadProgressUpdates.do",
                data: quotationno,
            }).success(function(data, status) {
				
				if(data.length!=0){
					//$scope.updateprogressData.push({"modifyFlag":"True"});
					//alert("nullarray"+JSON.stringify(data[1]));
					$scope.salesReport.totalProbability=data[0].totalProbability;
					
				for(var i=0;i<=$scope.updateprogressData.length;i++){
					//alert(data[0].probabilities[i]);
					
					
					for(var i=0;i<= data[0].probabilities.length-1;i++){
						//alert(data[0].probabilities[i]);
						
					$scope.updateprogressData[i].probabilities=data[0].probabilities[i];
				
					}

				}
				}else if(data.length==0){
					for(var i=0;i<=$scope.updateprogressData.length-1;i++){
							$scope.updateprogressData[i].probabilities="false";
							 $scope.salesReport.totalProbability = 0;
							   $scope.salesReport.quotationno = quotationno;
						    probabilitysum = 0;
							}
					
					}

            });
			 
			 
			 
				 sessionStorage.setItem("quotationnooo", quotationno);
            $scope.salesReport.quotationno = quotationno;
            if (totalProbability != undefined && totalProbability != 0) {

                var progressupdateObj = new Object();
                //  $('.popup__close').click();
                var SaveProgressUpdate = [];

                  $scope.updateprogressData.forEach(function(progress) {

                SaveProgressUpdate.push(angular.toJson(progress.probabilities));
                //alert(JSON.stringify(salesReport));

            });


             
                var quotation = sessionStorage.getItem("quotation");
                //   alert(quotation);
                //progressupdateObj.probabilities=SaveProgressUpdate;
                totalObj.probabilities = SaveProgressUpdate;
                totalObj.quotationno = quotation;
				totalObj.customer = customer;
				totalObj.salesMan = salesMan;
				totalObj.totalProbability =	totalProbability
                progressupdateObj.progressupdate = totalObj;
             //   alert(JSON.stringify(progressupdateObj));

                var httpRequest = $http({
                    method: 'POST',
                    url: "/SCA-360/saveProgressUpdate.do",
                    data: JSON.stringify(progressupdateObj),
                }).success(function(data, status) {
                   if(data==true){
					     SaveProgressUpdate.length = 0;
						
						
						
					  }
                   
                   //$scope.salesReport.totalProbability = 0;
                   // $scope.salesReport.quotationno = quotationno;
                 //   $scope.loadupdatevalues(customer);
				 
                   // probabilitysum = 0;
					//	for(var i=0;i<=$scope.updateprogressData.length;i++){
						//	$scope.updateprogressData[i].probabilities="false";
						//	}

                });

            }




        };


    /*  $scope.getProbabilitiesOnLoad=function(quotationno){
		
		 if(quotationno==null){
			var quotationno =sessionStorage.getItem("quotationnooo");
			   var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadProgressUpdates.do",
                data: quotationno,
            }).success(function(data, status) {
				//alert("nullarray"+JSON.stringify(data));
				if(data.length!=0){
					$scope.salesReport.totalProbability=data[0].totalProbability;
				for(var i=0;i<=$scope.updateprogressData.length;i++){
					//alert(data[0].probabilities[i]);
					
					
					for(var i=0;i<= data[0].probabilities.length;i++){
					$scope.updateprogressData[i].probabilities=data[0].probabilities[i];
					}

				}
				}else{
					
					}

            });
			 }else{
		      alert(quotationno);
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadProgressUpdates.do",
                data: quotationno,
            }).success(function(data, status) {
				//alert("array"+JSON.stringify(data));
				if(data.length!=0){
					$scope.salesReport.totalProbability=data[0].totalProbability;
				for(var i=0;i<=$scope.updateprogressData.length;i++){
					//alert(data[0].probabilities[i]);
					
					
					for(var i=0;i<= data[0].probabilities.length;i++){
					$scope.updateprogressData[i].probabilities=data[0].probabilities[i];
					}

				}
				}else{
					
					}

            });
			
			  
			 }
		  
		  }
*/
	
	

		$scope.getCallNotes=function(fromdate,todate){
			if(todate == undefined || fromdate.length==0 || todate.length==0){
				}else{
			var callnotesObj=new Object();
			
			callnotesObj.fromdate=fromdate;
			callnotesObj.todate=todate;
			//alert(JSON.stringify(callnotesObj));
			 var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadViewNotesByDate.do",
                data: JSON.stringify(callnotesObj),
            }).success(function(data, status) {
				if(data.length!=0){
				//alert(JSON.stringify(data));
				$scope.callnotesData=data;}else{
					  swal('Data Not Exist');
					  $scope.callnotesData="";
					
					}
				
				
			})
		
		}
			
			}
			
			
			
			

    });
	
//===================Yearly Budget ========================
angular.module('app')

    .controller('YearlyBudget', function($scope, $http) {
        $scope.data = [];
        $index = 0;
        var obj = new Object();
        var countryObj = new Object();
        countryObj.dropdownname = "Country";
        countryObj.columnname = "country";
        countryObj.columncode = "countrycode";
        var jsonCountryString = JSON.stringify(countryObj);

        var yearObj = new Object();
        yearObj.dropdownname = "Year";
        yearObj.columnname = "year";
        yearObj.columncode = "budgetflag";
        var jsonYearString = JSON.stringify(yearObj);

        var productCategoryObj = new Object();
        productCategoryObj.dropdownname = "ProductCategory";
        productCategoryObj.columnname = "productcategory";
        productCategoryObj.columncode = "productcategorycode";
        var jsonproductCategoryString = JSON.stringify(productCategoryObj);


        //$scope.product = [{ product: 'HYPONIC', product: 'HYPONIC' }, { product: 'PRESTO NEO', product: 'PRESTO NEO' }, { product: 'ATLAX', product: 'ATLAX' },{ product: 'ASTERO', product: 'ASTERO' }];



        $scope.loadCountryNames = function() {
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadDropDown.do",
                data: jsonCountryString,
            }).success(function(data, status) {
                $scope.countryNames = data;
            });
        };
        $scope.loadYearNames = function() {
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadDropDown.do",
                data: jsonYearString,
            }).success(function(data, status) {
                $scope.yearNames = data;
                //alert(JSON.stringify(data));
            });
        };

        $scope.loadProductCategory = function() {
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadDropDown.do",
                data: jsonproductCategoryString,
            }).success(function(data, status) {
                $scope.product = data;
            });
        };

        $scope.addFormField = function() {

            $index++;
            $scope.data.push({
                'id': $index
            })
        };
        $scope.removeRow = function(name) {
            var Index = -1;
            var comArr = eval($scope.data);
            for (var i = 0; i < comArr.length; i++) {
                if (comArr[i].id === name) {
                    Index = i;
                    break;
                }
            }
            $scope.data.splice(Index, 1);
            $index = comArr.length;
            for (var s = 0; s < $index; s++) {
                $scope.data[s].id = Number(s) + Number(1);
            }

        };
        $scope.getq1total = function(id, m1, m2, m3) {

            //if (m2 == null && m3 != null) {
            if (m1 == null || m1 == '') {
                m1 = 0;
            }
            if (m2 == null || m2 == '') {
                m2 = 0;
            }
            if (m3 == null || m3 == '') {
                m3 = 0;
            }
            $scope.data[id].quarter1 = Number(m1) + Number(m2) + Number(m3);
            //alert($scope.data[id].quarter1);
            $scope.data[id].quarter1 = Number(Math.round($scope.data[id].quarter1 + 'e2') + 'e-2');

        };

        $scope.getq2total = function(id, m1, m2, m3) {

            //if (m2 != null && m3 != null) {
            if (m1 == null || m1 == '') {
                m1 = 0;
            }
            if (m2 == null || m2 == '') {
                m2 = 0;
            }
            if (m3 == null || m3 == '') {
                m3 = 0;
            }


            $scope.data[id].quarter2 = Number(m1) + Number(m2) + Number(m3);
            //}
        };

        $scope.getq3total = function(id, m1, m2, m3) {

            //  if (m2 != null && m3 != null) {
            if (m1 == null || m1 == '') {
                m1 = 0;
            }
            if (m2 == null || m2 == '') {
                m2 = 0;
            }
            if (m3 == null || m3 == '') {
                m3 = 0;
            }
            $scope.data[id].quarter3 = Number(m1) + Number(m2) + Number(m3);
            $scope.data[id].quarter3 = Number(Math.round($scope.data[id].quarter3 + 'e2') + 'e-2');
            // }
        };
        $scope.getq4total = function(id, m1, m2, m3) {

            // if (m2 != null && m3 != null) {
            if (m1 == null || m1 == '') {
                m1 = 0;
            }
            if (m2 == null || m2 == '') {
                m2 = 0;
            }
            if (m3 == null || m3 == '') {
                m3 = 0;
            }
            $scope.data[id].quarter4 = Number(m1) + Number(m2) + Number(m3);
            $scope.data[id].quarter4 = Number(Math.round($scope.data[id].quarter4 + 'e2') + 'e-2');
            //}
        };

        $scope.getqtotal = function(id, m1, m2, m3, m4) {
            if (m2 == null) {
                m2 = 0;
            }
            if (m3 == null) {
                m3 = 0;
            }
            if (m4 == null) {
                m4 = 0;
            }
            if (m2 != null && m3 != null && m4 != null) {
                $scope.data[id].yearTotal = Number(m1) + Number(m2) + Number(m3) + Number(m4);
                $scope.data[id].yearTotal = Number(Math.round($scope.data[id].yearTotal + 'e2') + 'e-2');
            }
        };
        $scope.AddYearlyBudget = function(AddBudget, form) {

            if ($scope.YearlyBudgetForm.$valid) {
                gridData = [];
                $scope.data.forEach(function(BudgetData) {
                    gridData.push(angular.toJson(BudgetData));
                });

                obj.formData = angular.toJson(AddBudget);
                obj.gridData = gridData;
                delete obj["$index"];
                //alert(obj.formData);
                //alert(JSON.stringify(obj));

                $.ajax({
                    url: "/SCA-360/saveYearlyBudget.do",
                    processData: true,
                    type: 'POST',
                    contentType: 'Application/json',
                    data: JSON.stringify(obj),
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader("Accept", "application/json");
                        xhr.setRequestHeader("Content-Type", "application/json");
                    },
                    success: function(response) {
                        if (response == true) {
                            swal("", 'Yearly Budget Added Successfully', "success");
                            $index = 1;
                            $scope.data = [{
                                'id': $index
                            }]
                            form.$setPristine(true);
                            $scope.AddBudget = angular.copy($scope.master);
                        } else {
                            swal("Ooh no...", "Something went wrong!", "error");

                        }
                    }
                });
            } else {
                var field = null,
                    firstError = null;
                for (field in form) {
                    if (field[0] != '$') {
                        if (firstError === null && !form[field].$valid) {
                            firstError = form[field].$name;
                        }
                        if (form[field].$pristine) {
                            form[field].$dirty = true;
                        }
                    }
                }
            }
        };

        $scope.CategoryOnchange = function(country, year, pccode) {
            //alert(country+'--'+year+'--'+pccode);

            var BudgetObj = new Object();
            BudgetObj.countrycode = country;
            BudgetObj.year = year;
            BudgetObj.categorycode = pccode;

            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getYearlyBudget.do",
                data: JSON.stringify(BudgetObj),
            }).success(function(data, status) {
				//alert(JSON.stringify(data));
                $scope.data = data;
                //$scope.AddBudget.countryCode=country;
                //$scope.AddBudget.year=year;
                //$scope.AddBudget.pcCode=pccode;

            });
        };
        $scope.reset = function(form) {
            $scope.AddBudget = angular.copy($scope.master);

            $index = 1;
            $scope.data = [{
                'id': $index
            }]
            form.$setPristine(true);
        };


    });






////////////////////////

angular.module('app')
    .controller('HistoryMasterData', function($scope, $http) {
											 
        $scope.data = [];
        $index = 0;
        var obj = new Object();
        var filterData = new Object();
        var countryObj = new Object();
        countryObj.dropdownname = "Country";
        countryObj.columnname = "country";
        countryObj.columncode = "countrycode";
        var jsonCountryString = JSON.stringify(countryObj);

        var yearObj = new Object();
        yearObj.dropdownname = "Year";
        yearObj.columnname = "year";
        yearObj.columncode = "historyflag";
        var jsonYearString = JSON.stringify(yearObj);

        var productCategoryObj = new Object();
        productCategoryObj.dropdownname = "ProductCategory";
        productCategoryObj.columnname = "productcategory";
        productCategoryObj.columncode = "productcategorycode";
        var jsonproductCategoryString = JSON.stringify(productCategoryObj);

        //$scope.year = [{ year: 2002, year: 2002 },{ year: 2003, year: 2003 },{ year: 2004, year: 2004 },{ year: 2005, year: 2005 },{ year: 2006, year: 2006 },{ year: 2007, year: 2007 },{ year: 2008, year: 2008 }, { year: 2009, year: 2009 }, { year: 2010, year: 2010 },{ year: 2011, year: 2011 },{ year: 2012, year: 2012 }];

        $scope.loadCountryNames = function() {
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadDropDown.do",
                data: jsonCountryString,
            }).success(function(data, status) {
                $scope.countryNames = data;
            });
        };

        $scope.loadYearNames = function() {
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadDropDown.do",
                data: jsonYearString,
            }).success(function(data, status) {
                $scope.yearNames = data;
            });
        };
        $scope.loadProductCategory = function() {
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadDropDown.do",
                data: jsonproductCategoryString,
            }).success(function(data, status) {

                $scope.product = data;
            });
        };

        $scope.loadhistoryFlag = function() {
            $scope.AddHistoricalData = {
                'historyFlag': 0
            };
        };

        $scope.gethistoryFlag = function(Year, CountryCode) {
            if (Year >= 2002) {

                $scope.AddHistoricalData = {
                    'historyFlag': 0,
                    'year': Year,
                    'countryCode': CountryCode
                };

            } else {
                $scope.AddHistoricalData = {
                    'historyFlag': 1,
                    'year': Year,
                    'countryCode': CountryCode
                };

            }

        };

        $scope.changeProductCategoryStatus = function(status) {
            if (status == '0') {
                $scope.requiredstatus = true;
            } else {
                $scope.requiredstatus = false;
            }
        };
        $scope.loadGridData = function(status) {
            filterData.countryCode = $scope.AddHistoricalData.countryCode;
            filterData.year = $scope.AddHistoricalData.year;
            filterData.pcCode = $scope.AddHistoricalData.pcCode;


            if (status == '0') {

                if (filterData.countryCode != '' && filterData.year != '' && filterData.pcCode != null) {

                    //alert("All there");
                    //alert(JSON.stringify(filterData));
                    var httpRequest = $http({
                        method: 'POST',
                        url: "/SCA-360/getProductsByCategory.do",
                        data: JSON.stringify(filterData),
                    }).success(function(data, status) {
                        $("#errorMsg").hide();
                        $('.tabData').show();
                        $scope.data = data;

                    }).error(function(data, status) {
                        $scope.data = [];
                        $('.tabData').hide();
                        $('#errorMsg').show();
                        $('#errorMsg').html("No Historical Data for this Product Category");
                    });
                } else {
                    $scope.requiredstatus = true;
                    //alert("select all");
                }



            } else if (status == '1') {



                var httpRequest = $http({
                    method: 'POST',
                    url: "/SCA-360/getProductsByCountry.do",
                    data: JSON.stringify(filterData),
                }).success(function(data, status) {
                    $scope.data = data;
                });


                //alert("no ajax call");
            }

        };

        $scope.addFormField = function() {

            $index++;
            $scope.data.push({
                'id': $index
            })
        };

        $scope.removeRow = function(name) {
            var Index = -1;
            var comArr = eval($scope.data);
            for (var i = 0; i < comArr.length; i++) {
                if (comArr[i].id === name) {
                    Index = i;
                    break;
                }
            }
            $scope.data.splice(Index, 1);
            $index = comArr.length;
            for (var s = 0; s < $index; s++) {
                $scope.data[s].id = Number(s) + Number(1);
            }

        };


        //----Submit Form----//
        $scope.AddHistory = function(AddHistoricalData, form) {

            if ($scope.HistoricalDataForm.$valid) {
                //alert(form);
                gridData = [];
                $scope.data.forEach(function(HistoryData) {
                    gridData.push(angular.toJson(HistoryData));
                });
                obj.gridData = gridData;
                obj.formData = angular.toJson(AddHistoricalData);
                delete obj["$index"];
                //alert(obj.formData);
                //alert(JSON.stringify(obj));

                $.ajax({
                    url: "/SCA-360/saveHistoricalData.do",
                    processData: true,
                    type: 'POST',
                    contentType: 'Application/json',
                    data: JSON.stringify(obj),
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader("Accept", "application/json");
                        xhr.setRequestHeader("Content-Type", "application/json");
                    },
                    success: function(response) {
                        if (response == true) {
                            swal("", 'Historical Data Added Successfully', "success");
                            $index = 1;
                            $scope.data = [{
                                'id': $index
                            }]
                            form.$setPristine(true);
                            $scope.AddHistoricalData = angular.copy($scope.master);
                            $scope.loadhistoryFlag();
                        } else {
                            swal("Oops sorry...", "Something went wrong!", "error");

                        }
                    }
                });
            } else {
                var field = null,
                    firstError = null;
                for (field in form) {
                    if (field[0] != '$') {
                        if (firstError === null && !form[field].$valid) {
                            firstError = form[field].$name;
                        }
                        if (form[field].$pristine) {
                            form[field].$dirty = true;
                        }
                    }
                }
            }
        };


        //---Reset ----
        $scope.reset = function(form) {
            $scope.AddHistoricalData = angular.copy($scope.master);

            $index = 1;
            $scope.data = [{
                'id': $index
            }]
            form.$setPristine(true);
            $scope.loadhistoryFlag();
        };

    });

/***********************************************************end of custmermaster**************************/

angular.module('app')
    ////Production Scheduele
    .controller("productionSchedule", function($scope, uiCalendarConfig, $timeout, $http, $log, $compile, $filter, $rootScope) {
        // var vm = this;
        $scope.master = {};
        var numOfPieces = 6 * 6;
        var frag = document.createDocumentFragment();

        function insertInnerPieces($el, innerPieces) {
            for (var i = 0; i < innerPieces; i++) {
                var $inner = document.createElement('div');
                $inner.classList.add('popup__piece-inner');
                $el.appendChild($inner);
            }
        };

        for (var i = 1; i <= numOfPieces; i++) {
            var $piece = document.createElement('div');
            $piece.classList.add('popup__piece');

            insertInnerPieces($piece, 3);
            frag.appendChild($piece);
        }

        document.querySelector('.popup__pieces').appendChild(frag);

        var $popupsCont = document.querySelector('.popups-cont');
        var $popup = document.querySelector('.popup');
        var popupAT = 900;

        var overlay = jQuery('<div id="overlay"> </div>');

        $scope.loadRadio = function() {

            $scope.schedule = ({
                'New': '0'
            })
        };


        $scope.loadServerData = function() {

            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getServerDate.do",
                data: {},
            }).success(function(data, status) {
                $scope.ev.from = data.serverdate;
                //alert( $scope.ev.from);
            });
        };


        $scope.examples = [{
            isOpen: false
        }];



        $scope.open = function($event, examples, id) {


            $scope.examples[id].isOpen = true;
        };



        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        // $scope.changeTo = 'Hungarian';
        /* event source that pulls from google.com */
        $scope.eventSource = {
            url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
            className: 'gcal-event' // an option!
            //currentTimezone: 'America/Chicago' // an option!
        };
        /* event source that contains custom events on the scope */
        $scope.events = [
            /* {title: 'Score 0/80 Qty 10',start: new Date(), color: '#00f',
             textColor: '#800000'}*/

        ];
        /* event source that calls a function on every view switch */
        $scope.eventsF = function(start, end, timezone, callback) {
            var s = new Date(start).getTime() / 1000;
            var e = new Date(end).getTime() / 1000;
            var m = new Date(start).getMonth();
            $scope.getLoads();
        };

        $scope.calEventsExt = {
            color: '#f00',
            textColor: 'yellow',
            events: [
                /*{type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
                {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
                {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}*/
            ]
        };
        $scope.getLoads = function() {
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadAllScoreEvents.do",
                data: {},
            }).success(function(data, status) {
                //alert(JSON.stringify(data.scoreEvents));
                for (var i = 0; i < data.scoreEvents.length; i++) {
                    //alert(data.scoreEvents[i].score);
					//
					
					 var date = data.scoreEvents[i].eventdate.split(' ');

			
                    $scope.events[i] = {
                        title: 'SCORE:' + (data.scoreEvents[i].score*data.scoreEvents[i].quantity)+","+'QTY:'+ (data.scoreEvents[i].quantity),
                        start: moment(date[0]),
                        allDay: true,
                        backgroundColor: 'Blue',
                        borderColor: 'Blue',
                        textColor: 'Maroon'
                   
					};
						
					
                }

            })
        };
        /* alert on eventClick */
        $scope.alertOnEventClick = function(date, jsEvent, view) {
            //$("#popupo").show(3000);
            //naveeba
 			$("#popup_box").hide();
            overlay.appendTo(document.body);
            $popupsCont.classList.add('s--popup-active');
            $popup.classList.add('s--active');
            $("#tabledata").show();
            $("#packingdetails").hide();
           
            $scope.alertMessage1 = ("Selected Event::" + date.title);

            var selectedDate = moment(date.start).format('YYYY-MM-DD');

            // set dateFrom based on user click on calendar
            $scope.events[0].start = selectedDate; // update Calendar event dateFrom
            $scope.alertMessage = $filter('date')(selectedDate, 'dd-MM-yyyy');;
            var date1 = $scope.alertMessage;
            $rootScope.eventdate = date1;
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadProductionScheduler.do",
                data: date1,
            }).success(function(data, status) {
                // alert(JSON.stringify(data));
                $scope.schedulerPopData = data.productionscheduler;



            })
        };

        $scope.alertOnDayClick = function(date) {
            $scope.alertMessage = (date.toString() + ' was clicked ');

            // alert($scope.alertMessage);
            $scope.ev = {
                from: date.format('YYYY-MM-DD'),
                to: date.format('YYYY-MM-DD'),
                title: '',
                allDay: true
            };
        };



        /* alert on Drop */
        $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view) {
            $scope.alertMessage = ('Event Dropped to make dayDelta ' + moment(delta));
        };
        /* alert on Resize */
        $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view) {
            $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
        };
        /* add and removes an event source of choice */
        $scope.addRemoveEventSource = function(sources, source) {
            var canAdd = 0;
            angular.forEach(sources, function(value, key) {
                if (sources[key] === source) {
                    sources.splice(key, 1);
                    canAdd = 1;
                }
            });
            if (canAdd === 0) {
                sources.push(source);
            }
        };
        /* add custom event*/
        $scope.addEvent = function() {
            $scope.events.push({
                title: $scope.ev.title,
                start: moment($scope.ev.from),
                end: moment($scope.ev.to),
                allDay: true,
                className: ['openSesame']
            });
        };
        /* remove event */
        $scope.remove = function(index) {
            $scope.events.splice(index, 1);
        };
        /* Change View */
        $scope.changeView = function(view, calendar) {
            $scope.currentView = view;
            uiCalendarConfig.calendars[calendar].fullCalendar('changeView', view);
        };
        /* Change View */
        $scope.eventRender = function(event, element, view) {
            element.attr({
                'tooltip': event.title,
                'tooltip-append-to-body': true
            });
            $compile(element)($scope);
        };
        /*/* Render Tooltip */
        $scope.eventRender = function(event, element, view) {
            element.attr({
                'tooltip': event.title,
                'tooltip-append-to-body': false
            });
            $compile(element)($scope);
        };
        /* config object */

        $scope.ev = {};
        $scope.uiConfig = {
            calendar: {
                height: 450,
                editable: false,
                aspectRatio: 2,
                header: {
                    left: '',
                    center: 'title',
                    right: 'today prev,next'
                },
                dayClick: $scope.alertOnDayClick,
                eventClick: $scope.alertOnEventClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize,
                eventRender: $scope.eventRender,
                businessHours: {
                    /*start: '10:00', // a start time (10am in this example)
                    end: '18:00', // an end time (6pm in this example)

                    dow: [1, 2, 3, 4]*/
                    // days of week. an array of zero-based day of week integers (0=Sunday)
                    // (Monday-Thursday in this example)
                }
            }
        };


        /* event sources array*/
        $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
        //$scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];
        /////////////////////////////////////////////////////////////////////////////////////////////
        var vm = this;

        vm.isDatePickerOpen = false;

        vm.openDatePicker = function() {
            // alert("datepicker");
            vm.isDatePickerOpen = true;
            console.log("isDatePickerOpen?", vm.isDatePickerOpen);
        };

        // $scope.examples = [{ isOpen: false},{ isOpen: false},{ isOpen: false},{ isOpen: false}];
        $scope.examples1 = [{
            isOpen: false,
            id: 0
        }, {
            isOpen: false,
            id: 1
        }, {
            isOpen: false,
            id: 0
        }, {
            isOpen: false,
            id: 1
        }];
        $scope.examples2 = [{
            isOpen: false
        }, {
            isOpen: false
        }, {
            isOpen: false
        }, {
            isOpen: false
        }];
        $scope.examples3 = [{
            isOpen: false
        }, {
            isOpen: false
        }, {
            isOpen: false
        }, {
            isOpen: false
        }];

        /* $scope.examples.forEach(function(example){
           example.date = new Date(example.date);
         });*/

        $scope.open1 = function($event, schedulerData, id) {

            $event.preventDefault();
            $event.stopPropagation();
            //alert("enterd");
            $scope.schedulerData[id].isOpen = true;
        };

        $scope.open12 = function($event, changeschedulerData, id) {

            $event.preventDefault();
            $event.stopPropagation();

            $scope.changeschedulerData[id].isOpen = true;
        };
        $scope.open2 = function($event, schedulerPopData, id) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.schedulerPopData[id].isOpen = true;
        };

        $scope.open3 = function($event, dataPackField, id) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.dataPackField[id].isOpen = true;
        };
        $scope.packingtypes = [{
            id: 1,
            label: 'type1'
        }, {
            id: 2,
            label: 'type2'
        }];




        $scope.showPackingDetails = function() {
            var sendpackingObj = new Object();
            var sendpackingObj1 = new Object();

            var parsed = "";
            //alert(JSON.stringify(salesOrderArray));
            /* groupobj=salesOrderArray;
	  for (var prop in groupobj) {
    parsed += groupobj[prop.modelno];
  }
 
	  alert(JSON.stringify(parsed));*/
            var groupArray = new Array();

            var groupArray1 = new Array();
            var sum = "";
            var sum1 = "";
            angular.forEach(salesOrderArray, function(value, index) {

                sum = value.salesOrder
                sum1 = value.modelno
                groupArray = groupArray + sum + ',';
                groupArray1 = groupArray1 + sum1 + ',';


            })
            // alert(JSON.stringify(groupArray))
            var str1 = groupArray;
            $scope.schedule.salesOrder = str1.replace(/,\s*$/, "");
            sendpackingObj.salesOrder = str1.replace(/,\s*$/, "");
            var str = groupArray1;
            $scope.schedule.modelno = str.replace(/,\s*$/, "");
            sendpackingObj.modelno = str.replace(/,\s*$/, "");
            sendpackingObj1.formData = sendpackingObj
            //alert(JSON.stringify(sendpackingObj1));
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadPackingDetails.do",
                data: JSON.stringify(sendpackingObj1),
            }).success(function(data, status) {
                //alert(JSON.stringify(data))
                if (data.packingDetails[0] != null) {
                    $scope.dataPackField = data.packingDetails;
                    $scope.schedule.remarks = data.packingDetails[0].remarks;
                    $("#tabledata").hide();
					 $("#popup_box").hide();
					
                    $("#packingdetails").show();
                    salesOrderArray.length = 0;
                } else {
                    $("#tabledata").hide();
					 $("#popup_box").hide();
                    $("#packingdetails").show();
                    salesOrderArray.length = 0;
                }




            })

        };

        /* $scope.showPackingDetails=function(modelno,salesorder){
	  alert(modelno);
	  alert("sales"+salesorder);
	  $scope.schedule.modelno=modelno;
$scope.schedule.salesOrder=salesorder;
  $("#tabledata").hide();
	 $("#packingdetails").show();
	  
	  };*/


        $scope.savePackinggDetails = function(modelno, salesOrder, remarks, formPackData) {
            var packingobjArray = [];
            var TotalorderObj = new Object();
            var packingObj = new Object();
            var packingobjArray = new Array();

            $scope.dataPackField.forEach(function(formPackData) {

                packingobjArray.push(angular.toJson(formPackData));


            });


            TotalorderObj.modelno = modelno;
            TotalorderObj.salesOrder = salesOrder;
            TotalorderObj.remarks = remarks;
            //TotalBindArray.push(TotalorderObj);

            packingObj.formData = TotalorderObj;
            packingObj.gridData = packingobjArray;



            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/savePackingDetails.do",
                data: JSON.stringify(packingObj),
            }).success(function(data, status) {

                if (data == true) {
                    swal('Saved Successfully');
                    /*new updtaed on friday*/
                    angular.forEach($scope.schedulerPopData, function(value, index) {

                        var sum = value.checkPacking
                        $scope.schedulerPopData[index].checkPacking = false;

                    })
                    $index = 1;
                    $scope.dataPackField = [{
                        'id': $index
                    }];
                    $scope.schedule.remarks = '';
                    $("#tabledata").show();
                    $("#packingdetails").hide();
					 $("#popup_box").hide();

                    packingobjArray.length = 0;
                } else if (data == false) {
                    swal("Ooh no...", "Something went wrong!", "error");
                    $("#tabledata").show();
                    $("#packingdetails").hide();
					 $("#popup_box").hide();
                    packingobjArray.length = 0;

                }

            })
        }
        $scope.CancelPackinggDetails = function() {
             $("#popup_box").hide();
			 $("#tabledata").show();
			
            $("#packingdetails").hide();
            angular.forEach($scope.schedulerPopData, function(value, index) {

                var sum = value.checkPacking
                $scope.schedulerPopData[index].checkPacking = false;

            })
            //alert(JSON.stringify(groupArray))
            
        }
        vm.toggle = function($event, field, event) {
            //alert(event)
            $event.preventDefault();
            $event.stopPropagation();
            event[field] = !event[field];
        };

        $scope.dataPackField = [];

        $index = 0;
        $scope.addpackingForm = function() {

            $index++;
            $scope.dataPackField.push({
                'id': $index
            })

        };


        /*	
		$scope.addpendingqty=function(){
			 $index = 0;
			$scope.schedulerPopData.push({
                'id': $index
            })
			};
*/

        $scope.removeFormRow = function(name) {
            // alert(name);
            var Index = -1;
            var comArr = eval($scope.dataPackField);
            for (var i = 0; i < comArr.length; i++) {
                if (comArr[i].id === name) {
                    Index = i;
                    break;
                }
            }
            $scope.dataPackField.splice(Index, 1);
            $Index = comArr.length;
            for (var s = 0; s < $Index; s++) {
                $scope.dataPackField[s].id = Number(s) + Number(1);
            }
        };


        $scope.getSearch = function(value, item) {
            var searchObj = new Object();
            searchObj.value = value
            searchObj.item = item

            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/searchProductionScheduler.do",
                data: JSON.stringify(searchObj),
            }).success(function(data, status) {

                //alert(JSON.stringify(data.productionscheduler));
                if (data.productionscheduler[0] != null == true) {
                    $scope.searchSchedulerData = data.productionscheduler;

                } else {
                    swal("Ooh no...", "Data Does Not Exist");
                }

            })

        };

        //alert("loaddetails")
        var radioValue;
        $scope.getValue = function(value) {
            if (value == 0) {
                radioValue = 'New';
				  $('#showpagination').show();
				   $('#showpaginationchange').hide();
                //alert(radioValue);
            } else if (value == 1) {
                radioValue = 'Change';
				$('#showpagination').hide();
					
					 $('#showpaginationchange').show();
            }
			else if (value == 2){
				 $('#showpagination').hide();
				   $('#showpaginationchange').hide();
				}
            //alert(radioValue)
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadProductionScheduler.do",
                data: radioValue,
            }).success(function(data, status) {

                if (radioValue == 'New') {
                   
                   // $scope.searchSchedulerData.length = 0;
                    $scope.schedule.value = " ";
					$scope.totalItems = data.productionscheduler.length;
                    $scope.schedulerData = data.productionscheduler
					$scope.currentPage =1;
  					$scope.itemsPerPage = 10;
					
							
 			 $scope.$watch("currentPage", function() {
												
												  
  			  setPagingData($scope.currentPage);
 				 });

					  function setPagingData(page) {
						 
   				 var pagedData =  data.productionscheduler.slice((page - 1) * $scope.itemsPerPage, page * $scope.itemsPerPage);

   				 $scope.schedulerData = pagedData;
				 
  			}
			
			
				 $scope.pageChanged = function () {
       		 $log.log('Page changed to: ' + $scope.currentPage);
  			  };
				
				
                } else if (radioValue == 'Change') {
                    
                    //alert(JSON.stringify(data.productionscheduler));
                    $scope.changeschedulerData = data.productionscheduler
					$scope.totalItemschange = data.productionscheduler.length;
                   // $scope.changeschedulerData = data.productionscheduler
					$scope.currentPagechange =1;
  					$scope.itemsPerPagechange = 10;
					
							
 			 $scope.$watch("currentPagechange", function() {
												
												  
  			  setPagingData($scope.currentPagechange);
 				 });

					  function setPagingData(page) {
						 
   				 var pagedData =  data.productionscheduler.slice((page - 1) * $scope.itemsPerPagechange, page * $scope.itemsPerPagechange);

   				 $scope.changeschedulerData = pagedData;
				 
  			}
			
			
				 $scope.pageChanged = function () {
       		 $log.log('Page changed to: ' + $scope.currentPagechange);
  			  };
				

                } else if (radioValue == 'Search') {

                }



            })
        };
		
		 
  

        var onLoadradioValue = "";
        $scope.getOnLoadValue = function(value) {
		
			  $('#showpaginationchange').hide();

           
            if (value == 0) {
                onLoadradioValue = 'New';
                //alert(radioValue);
            }

          
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadProductionScheduler.do",
                data: onLoadradioValue,
            }).success(function(data, status) {
				 $('#showpagination').show();
            $scope.schedulerData = data.productionscheduler;
               
				$scope.totalItems = data.productionscheduler.length;
			
				$scope.currentPage =1;
  					$scope.itemsPerPage = 10;
					
							
 			 $scope.$watch("currentPage", function() {
												
												  
  			  setPagingData($scope.currentPage);
 				 });

					  function setPagingData(page) {
						 
   				 var pagedData =  data.productionscheduler.slice((page - 1) * $scope.itemsPerPage, page * $scope.itemsPerPage);

   				 $scope.schedulerData = pagedData;
				 
  			}
			
			
				 $scope.pageChanged = function () {
       		 $log.log('Page changed to: ' + $scope.currentPage);
  			  };
				 
				
 			

            })
        };



        $scope.getOnLoadchangeValue = function() {
			
            var onLoadradioValue = "";
            onLoadradioValue = 'Change';

            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadProductionScheduler.do",
                data: onLoadradioValue,
            }).success(function(data, status) {
                $('#loading').hide();
                $scope.changeschedulerData = data.productionscheduler



            })
        };

        var newSaveobj = new Object();
        $scope.saveNewData = function(newvalue) {

            delete newvalue["isOpen"];
            delete newvalue["$$hashKey"];

            newSaveobj.gridData = newvalue

            $.ajax({
                url: "/SCA-360/updateProductionScheduler.do",
                processData: true,
                type: 'POST',
                contentType: 'Application/json',
                data: JSON.stringify(newSaveobj),
                beforeSend: function(xhr) {

                    xhr.setRequestHeader("Accept", "application/json");
                    xhr.setRequestHeader("Content-Type", "application/json");
                },
                success: function(response) {

                    if (response == true) {
                        swal('Updated Successfully');
                        $scope.getLoads();
                        if (newvalue.prodStatus == 'Modified' || newvalue.prodStatus == 'To be cancelled') {
                            $scope.getOnLoadchangeValue();
                        } else {
                            $scope.getOnLoadValue(0);
                        }
                    } else if (response == false) {
                        swal("Ooh no...", "Something went wrong!", "error");

                    }

                }
            });

        };



        var salesOrderArray = new Array();


        $scope.getDetailsProduction = function(id, salesOrder, modelno, quantity, assemblyDate, completedDate, startTime, endTime, checkPacking, scheduled, index, testby, completedquantity, modifyFlag, changeFlag) {
           

            /* if (checkPacking == true) {

                for (var i = 0; i < JSON.stringify($scope.schedulerPopData.length); i++) {

                    if (index == i) {
                        if (completedDate == undefined) {
                            $(".existValRC122" + index).show();
                            $(".existValRC2" + index).show();
                            $(".existValRC3" + index).show();

                        } else {
                            $(".existValRC122" + index).hide();
                            $(".existValRC2" + index).hide();
                            $(".existValRC3" + index).hide();

                        }
                    }
                }
				
	
				
			
				
            } else {
                $(".existValRC122" + index).hide();
                $(".existValRC2" + index).hide();
                $(".existValRC3" + index).hide();


            }*/


            var getSalesOrderObj = new Object();
            var newObj = new Object();

           

            getSalesOrderObj.assemblyDate =assemblyDate;
          getSalesOrderObj.completedDate =completedDate; 
            getSalesOrderObj.id = id;
            getSalesOrderObj.salesOrder = salesOrder;
            getSalesOrderObj.modelno = modelno;
            getSalesOrderObj.quantity = quantity;
            getSalesOrderObj.startTime = startTime;
            getSalesOrderObj.endTime = endTime;
            getSalesOrderObj.testedBy = testby;
            getSalesOrderObj.modifyFlag = modifyFlag;
            getSalesOrderObj.completedQuantity = completedquantity;
            newObj = getSalesOrderObj;




            if (checkPacking == true) {
                salesOrderArray.push(newObj);
                //alert(JSON.stringify(salesOrderArray));		
            } else {
                //alert("enterd")
                // var indexz = salesOrderArray.indexOf(id);
                //salesOrderArray.splice(indexz, 1);
                //alert(salesOrderArray.length);
                for (var i = 0; i < salesOrderArray.length; i++) {
                    if (salesOrderArray[i].id == id) {
                        var indexz = salesOrderArray.indexOf(id);
                        salesOrderArray.splice(indexz, 1);
                        //alert(JSON.stringify(salesOrderArray));			
                    }
                }


            }
            //salesOrderArray.push(newObj);



        };
        $scope.savePopdetails = function() {
            var ToTalSalesOrderObj = new Object();
            ToTalSalesOrderObj.gridData = salesOrderArray;
            //alert(JSON.stringify(ToTalSalesOrderObj));
            $.ajax({
                url: "/SCA-360/modifyProductionScheduler.do",
                processData: true,
                type: 'POST',
                contentType: 'Application/json',
                data: JSON.stringify(ToTalSalesOrderObj),
                beforeSend: function(xhr) {

                    xhr.setRequestHeader("Accept", "application/json");
                    xhr.setRequestHeader("Content-Type", "application/json");
                },
                success: function(response) {
                    if (response == true) {
                        swal('Updated Successfully');
                        $('.popup__close').click();
						  $("#popup_box").hide();
                        $scope.getLoads();
                        salesOrderArray.length = 0;

                    } else if (response == false) {
                        swal("Ooh no...", "Something went wrong!", "error");

                    }

                }
            });
        };
        $scope.ifcompleequal = function(salesOrder, modelno, quantity, completedQuantity, assemblyDate, index, modifyFlag, id, completedDate, startTime, endTime, testby, changeFlag) {


            if (quantity == completedQuantity) {


                if (changeFlag == true) {

                    var storelastArray = new Object();
                    //alert($scope.schedulerPopData.length);
                    angular.forEach($scope.schedulerPopData, function(value, index) {

                        var sum = value.salesOrder
                        var sum1 = value.modelno
                        if (sum == salesOrder && sum1 == modelno) {

                            storelastArray = index;


                        }

                    })
                    var indexremove = storelastArray;

                    $scope.schedulerPopData.splice(indexremove, 1);
                    $scope.schedulerPopData[index].changeFlag = false;


                }
            }

        }

        $scope.ifeual = function(quantity, completedquantity, changeFlag, index, id, salesOrder, modelno, assemblyDate, modifyFlag, changeFlag, completedDate) {
            if (completedquantity != undefined) {
                if (Number(quantity) > Number(completedquantity)) {
                    if (completedDate == undefined) {
                        if (changeFlag == undefined) { //

                            $scope.schedulerPopData[index].changeFlag = true;


                            var comquantity = Number(quantity) - Number(completedquantity);

                            $scope.schedulerPopData.push({
                                'id': id,
                                salesOrder: salesOrder,
                                modelno: modelno,
                                quantity: quantity,
                                assemblyDate: assemblyDate,
                                completedQuantity: comquantity,
                                modifyFlag: false,
                                changeFlag: false
                            })
                        }
                    }
                }
            }
        }

        $scope.CancelPopdetails = function() {
			 $('.popup__close').click();
 		 $("#popup_box").hide();
           
            $scope.getLoads();
            salesOrderArray.length = 0;

        };

        $scope.displayTime = function(id) { //$('.time').bootstrapMaterialDatePicker({ date: false, shortTime: true, format: 'HH:mm:00' });
            $('.time').timepicker({
                'scrollDefault': 'now',
                format: 'HH:mm:ss'
            });

        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd-MM-yyyy', 'shortDate'];
        $scope.format = $scope.formats[2];

        $scope.getdatesvalidate = function(assemblydate, duedate, id) {

            for (var i = 0; i <= JSON.stringify($scope.schedulerData.length); i++) {


                if (id != i) {

                    //alert((duedate));
                 /*  <!-- if (new Date(duedate) <= new Date(assemblydate)) {

                        $(".Datevalidate" + id).show();
                        return false;
                    } else {

                        $(".Datevalidate" + id).hide();

                    }-->*/
					
					
					if (duedate <= assemblydate) {
					  $(".Datevalidate" + id).hide();
					}else{
						  $(".Datevalidate" + id).show();
						  return false;
						}
                }
            }


        }


       $scope.getcompletvalidate = function(assemblydate, completedate, id) {
			
	

		if(completedate==undefined){}else{
            for (var i = 0; i <= JSON.stringify($scope.schedulerPopData.length); i++) {


                if (id != i) {
/*
                   var dates = assemblydate.split( 'T18:30');
					
					 var newdates= new Date(dates[0]).toString();
					 //alert(newdates.length);
					var res = newdates.substring(0, 10);
					//alert(res);
     				var res2 = newdates.substring(11, 15);
					var fromdate=completedate.toString().substring(0,15);
					var todate=res+" "+res2;
					//alert(fromdate);
					var exfromDate = fromdate.substring(3,fromdate.length);
					//alert(exfromDate);
					if(fromdate==todate){
						 $(".completevalidate" + id).hide();
                      
						
						} else {

                        $(".completevalidate" + id).show();
						  return false;

                    }*/
					
					//alert(res+" "+res2);
					//alert("completedate"+completedate.toString().substring(0,15));
						
						//alert( new Date(completedate)+"duedate");
                   /* if (new Date(completedate) < new Date(dates[0]) ) {

                        $(".completevalidate" + id).show();
                        return false;
                    } else {

                        $(".completevalidate" + id).hide();

                    }*/
					
				
				if (assemblydate <= completedate) {
					  $(".completevalidate" + id).hide();
					}else{
						  $(".completevalidate" + id).show();
						  return false;
						}
                }
            }

        }
	   }


	var storescore=new Object();
		$scope.calculatenewValue=function(score,quantity,index){
			storescore=score;
			if(score.length!=0){
			
				var Total=parseInt(score)*parseInt(quantity);
				
				$scope.schedulerData[index].totalScore=Total;
					
		}else{
			//alert(storescore);
			$scope.schedulerData[index].score=storescore;
			$scope.schedulerData[index].totalScore=quantity;
			}
			
			}
			
			

		$scope.calculateValue=function(score,quantity,index){
			
			if(score.length!=0){
			
				var Total=parseInt(score)*parseInt(quantity);
				
				$scope.changeschedulerData[index].totalScore=Total;
					
		}else{
			
			$scope.changeschedulerData[index].score="";
			$scope.changeschedulerData[index].totalScore=quantity;
			}
			
			}
			
			  $scope.ShowDatePicker = function() {

            $(".datepicker").datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: 'dd-mm-yy',
                beforeShow: function() {
                    setTimeout(function() {
                        $('.ui-datepicker').css({
                            'z-index': 999999,
                            'width': '20%'
                        });
                    }, 0);
                }
            });
        };

        $scope.$applyAsync(function() {
            $(".datepicker").datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: 'dd-mm-yy',
                beforeShow: function() {
                    setTimeout(function() {
                        $('.ui-datepicker').css({
                            'z-index': 999999,
                            'width': '20%'
                        });
                    }, 0);
                }
            });

        })
			
			$scope.cancelPopup=function(){
				 $("#popup_box").hide();
				
				}
			$scope.openmodel=function(index,salesOrder){
				
				 
            $("#tabledata").hide();
			 $("#packingdetails").hide();
			  $("#popup_box").show();
			  
			  
			  radioValue = 'New';

		var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadProductionScheduler.do",
                data: radioValue,
            }).success(function(data, status) {
				
				angular.forEach(data.productionscheduler, function(value, index) {

                        var sum = value.salesOrder
						if(salesOrder==sum){
							$scope.schedule.contractno=value.contractno;
								$scope.schedule.name=value.name;
									$scope.schedule.country=value.country;
							
							}
							
						
						
							  })
			})
				
				}
			
			

    });

//==============================
////Test Report
//=======================

angular.module('app')
.controller("testReportController", function($scope, $http, $rootScope, $state) {
        var cusImage = new FormData();
        var TestReportAddObj = new Object();
        var TestReportAddObj1 = new Object();
        var modifyFlag1 = false;
		
		
		    var cableEntryObj = new Object();
        cableEntryObj.dropdownname = "CableEntry";
        cableEntryObj.columnname = "cableentry";
        cableEntryObj.columncode = "id";
        var jsonCableEntryString = JSON.stringify(cableEntryObj);

      /*  $scope.uploadUserFile = function(files) {
            //alert(files);
            $scope.dummyPhoto = "1";
            //$('#dummyPhoto').trigger('blur');
            cusImage.delete("userphoto");
            cusImage.append("userphoto", files[0]);
            //alert(cusImage);
            $scope.$apply();
            modifyFlag1 = true;
        };*/


        $scope.Loadcoupling = function() {

            $scope.couplingType = [{
                id: 1,
                label: "--Select--"
            }, {
                id: 2,
                label: "J-adapter"
            }, {
                id: 3,
                label: "Safety cover"
            }, {
                id: 4,
                label: "Coupling"
            }, {
                id: 5,
                label: "X-Adaptor"
            }, {
                id: 6,
                label: "Safety Cover"
            }];
            $scope.couplingTypedata = $scope.couplingType


        };

        $scope.Loadmotorbrand = function() {
            $scope.MotorBrand = [{
                id: 1,
                label: "--Select--"
            },{
                id: 2,
                label: "CMG"
            }, {
                id: 3,
                label: "TECO"
            }, {
                id: 4,
                label: "ATT"
            }, {
                id: 5,
                label: "Elektrim"
            }, {
                id: 6,
                label: "Others"
            }];
            $scope.motorBranddata = $scope.MotorBrand
        };

        $scope.LoadmotorType = function() {
            $scope.MotorType = [{
                id: 1,
                label: "--Select--"
            },{
                id: 2,
                label: "M1D"
            }, {
                id: 3,
                label: "AF"
            }, {
                id: 4,
                label: "IEC"
            }, {
                id: 5,
                label: "IE2"
            }, {
                id: 6,
                label: "IE3"
            }];
            $scope.motorTypedata = $scope.MotorType
        };


        $scope.LoadPaintcolor = function() {
            $scope.paintcolor = [{
                id: 1,
                label: "--Select--"
            },{
                id: 2,
                label: "6.5 PB 3.6/8.2 Violet blue (Standard for Cyclo, BBB, HBB, HSM)"
            }, {
                id: 3,
                label: "Munsell 5Y8/1.5 VN BEIGE (Standard for Hyponic, Prestneo)"
            }, {
                id: 4,
                label: "RAL 7021 Black Grey (Bromma)"
            }, {
                id: 5,
                label: "RAL 7031 Blue Grey"
            }, {
                id: 6,
                label: "RAL 5021 Water Blue"
            }, {
                id: 7,
                label: "PU Gloss H75-80B"
            }, {
                id: 8,
                label: "PU N5 Gloss"
            }, {
                id: 9,
                label: "Munsell colour code T45-70P"
            }, {
                id: 10,
                label: "Polyurethane Gloss N7 "
            }, {
                id: 11,
                label: "Grey F75-80B S/G"
            }, {
                id: 12,
                label: "Polyurethane Gloss 2.5G7/2"
            }, {
                id: 13,
                label: "Chugoku Unymarine HS Grey H75-80B semi gloss (Shinmaywa)"
            }, {
                id: 14,
                label: "Chugoku Unymarine HS white RAL 9010 semi gloss (Shinmaywa)"
            }, {
                id: 15,
                label: "Chugoku Unymarine HS Grey H75-80B Normal (Shinmaywa)"
            }, {
                id: 16,
                label: "Univan HST silver "
            }, {
                id: 17,
                label: "Others"
            }];
            $scope.paintColordata = $scope.paintcolor
        };
	
	    $scope.ShowDatePicker = function() {

            $(".datepicker").datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: 'dd-mm-yy',
                beforeShow: function() {
                    setTimeout(function() {
                        $('.ui-datepicker').css({
                            'z-index': 999999,
                            'width': '20%'
                        });
                    }, 0);
                }
            });
        };

        $scope.$applyAsync(function() {
            $(".datepicker").datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: 'dd-mm-yy',
                beforeShow: function() {
                    setTimeout(function() {
                        $('.ui-datepicker').css({
                            'z-index': 999999,
                            'width': '20%'
                        });
                    }, 0);
                }
            });

        })
	
	$scope.getphasedetails=function(phaseVoltage){
				if(phaseVoltage==1)	{
					$scope.voltage = [{
                id: 1,
                label: "200V"
            }, {
                id: 2,
                label: "220V"
            }, {
                id: 3,
                label: "230V"
            }, {
                id: 4,
                label: "240V"
            }, {
                id: 5,
                label: "380V"
            },{
                id:6,
                label: "400V"
            }, {
                id: 7,
                label: "415V"
            },{
                id:8,
                label: "440V"
            }, {
                id: 9,
                label: "460V"
            }, {
                id: 10,
                label: "480V"
			}];
            $scope.voltagedata = $scope.voltage
					
					}else if(phaseVoltage==0){
						$scope.voltage = [{
                id: 1,
                label: "100V"
            }, {
                id: 2,
                label: "110V"
            }, {
                id: 3,
                label: "115V"
            }, {
                id: 4,
                label: "120V"
            }, {
                id: 5,
                label: "200V"
            },{
                id: 3,
                label: "220V"
            }, {
                id: 4,
                label: "230V"
            }, {
                id: 5,
                label: "200V"
            }];
            $scope.voltagedata = $scope.voltage
						
						}		
			
			
			}

        $scope.LoadProtection = function() {
            $scope.protection = [{
                id: 1,
                label: "--Select--"
            },{
                id: 2,
                label: "IP44"
            }, {
                id: 3,
                label: "IP45"
            }, {
                id: 4,
                label: "IP54"
            }, {
                id: 5,
                label: "IP55"
            }, {
                id: 6,
                label: "IP56"
            }, {
                id: 7,
                label: "IP65"
            }];
            $scope.protectiondata = $scope.protection
        };


        $scope.Loadvoltage = function() {
           $scope.voltage = [{
                id: 1,
                label: "--Select--"
            },{
                id: 2,
                label: "100V"
            }, {
                id: 3,
                label: "110V"

            }, {
                id: 4,
                label: "115V"
            }, {
                id: 5,
                label: "120V"
            }, {
                id: 6,
                label: "200V"
            },{
                id: 7,
                label: "220V"
            }, {
                id: 8,
                label: "230V"
            }, {
                id: 9,
                label: "200V"
            }];
            $scope.voltagedata = $scope.voltage
        };

        $scope.LoadLubricastion = function() {
            $scope.lubrication = [{
                id: 1,
                label: "--Select--"
            },{
                id: 2,
                label: "Unirex N2 Grease (Cyclo, BBB)"
            }, {
                id: 3,
                label: "BA-11A Grease(Hyponic, Prestneo)"
            }, {
                id: 4,
                label: "Shell Gadus S3 T220"
            }, {
                id: 5,
                label: "Beacon 325"
            }, {
                id: 6,
                label: "Gear Oil"
            }];
            $scope.lubricationdata = $scope.lubrication
        };
		
		$scope.loadcableEntry=function(){
			  var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadDropDown.do",
                data: jsonCableEntryString,
            }).success(function(data, status) {
                $scope.cableEntry = data;
              //  alert(JSON.stringify(data));
				var optionValues = "";
                for (var i = 0; i < data.length; i++) {
                    optionValues += "<option value='" + data[i].id + "'>" + data[i].cableentry + "</option>";
                }
                $('#picturegallery2').empty();
                var newOption = $(optionValues);
                //alert(JSON.stringify(newOption));
                $('#picturegallery2').append(newOption);
                $('#picturegallery2').trigger("chosen:updated");


            });
			
			
			}

        $scope.Loadterminal = function() {
            $scope.example1data = [{
                id: 1,
                label: "N3A"
            }, {
                id: 2,
                label: "N3B"
            }, {
                id: 3,
                label: "N3C"
            }, {
                id: 4,
                label: "N3D"
            }, {
                id: 5,
                label: "N33"
            }, {
                id: 5,
                label: "N34"
            }, {
                id: 5,
                label: "N35"
            }, {
                id: 5,
                label: "N36"
            }];
            var data = $scope.example1data;

            var optionValues = "";
            for (var i = 0; i < data.length; i++) {
                optionValues += "<option value='" + data[i].example1data + "'>" + data[i].label + "</option>";
            }
            $('#picturegallery').empty();
            var newOption = $(optionValues);
            $('#picturegallery').append(newOption);
            $('#picturegallery').trigger("chosen:updated");
        };
        ////
        $scope.LoadAccessioriez = function() {
            $scope.Accessiories = [{
                "Accessioriescode": "1",
                "label": "Coupling"
            }, {
                "Accessioriescode": "2",
                "label": "Base Plate"
            }, {
                "Accessioriescode": "3",
                "label": "Brake System"
            }, {
                "Accessioriescode": "4",
                "label": "Shrink Disc"
            }, {
                "Accessioriescode": "5",
                "label": "Pulley"
            }, {
                "Accessioriescode": "6",
                "label": "Sprocket"
            }, {
                "Accessioriescode": "7",
                "label": "Backstop"
            }];
            var data = $scope.Accessiories
            $scope.accessories = data




            var optionValues = "";
            for (var i = 0; i < data.length; i++) {
                optionValues += "<option value='" + data[i].Accessiories + "'>" + data[i].label + "</option>";
            }
            $('#picturegallery1').empty();
            var newOption = $(optionValues);

            $('#picturegallery1').append(newOption);
            $('#picturegallery1').trigger("chosen:updated");
        };


        /*$scope.loadThermister = function()
        		{
        			$scope.testReport={'thermister':'0','spaceHeater':'0','frequency':'0','motorDirection':'0','airPressureTest1':'0','airPressureTest3':'0','airPressureTest2':'0','airPressureTest4':'0','airPressureTest5':'0','confirmbbsSize5':'0','confirmbbsSize1':'0','confirmbbsSize2':'0','confirmbbsSize3':'0','confirmbbsSize4':'0',
        			'concentricity5':'0','concentricity1':'0','concentricity2':'0','concentricity3':'0','concentricity4':'0'};
        			
        		};
        		*/


        var DropDownLoad = new Object();
        DropDownLoad.dropdownname = "Accessories";
        DropDownLoad.columnname = "accessories";
        DropDownLoad.columncode = "id";
        var jsonStringDropDown = JSON.stringify(DropDownLoad);

        var DropDownLoadTBox = new Object();
        DropDownLoadTBox.dropdownname = "TerminalBox";
        DropDownLoadTBox.columnname = "tbox";
        DropDownLoadTBox.columncode = "id";
        var jsonStringDropDownTBox = JSON.stringify(DropDownLoadTBox);

        $scope.loadAccessories = function() {
            //alert('kk');
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadDropDown.do",
                data: jsonStringDropDown,
            }).success(function(data, status) {

                $scope.accessories = data;

                var optionValues = "";
                for (var i = 0; i < data.length; i++) {
                    optionValues += "<option value='" + data[i].id + "'>" + data[i].accessories + "</option>";
                }
                $('#picturegallery1').empty();
                var newOption = $(optionValues);
                //alert(JSON.stringify(newOption));
                $('#picturegallery1').append(newOption);
                $('#picturegallery1').trigger("chosen:updated");

            });
        };


        $scope.loadTerminlBox = function() {
            //alert('kk');
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadDropDown.do",
                data: jsonStringDropDownTBox,
            }).success(function(data, status) {
                //alert(JSON.stringify(data));
                $scope.terminalBox = data;
                var optionValues = "";
                for (var i = 0; i < data.length; i++) {
                    optionValues += "<option value='" + data[i].id + "'>" + data[i].tbox + "</option>";
                    //alert(optionValues);
                }
                $('#picturegallery').empty();
                var newOption = $(optionValues);
                $('#picturegallery').append(newOption);
                $('#picturegallery').trigger("chosen:updated");

            });
        };
        $scope.loadServerData = function() {
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getServerDate.do",
                data: {},
            }).success(function(data, status) {
                $scope.testReport = {
                    'dateRequired': data.serverdate,
                    'dateReceived': data.serverdate,
                    'assembledDate': data.serverdate,
                    'thermister': '0',
                    'spaceHeater': '0',
                    'frequency': '0',
                    'motorDirection': '0',
                    'airPressureTest1': '0',
                    'airPressureTest3': '0',
                    'airPressureTest2': '0',
                    'airPressureTest4': '0',
                    'airPressureTest5': '0',
                    'confirmbbsSize5': '0',
                    'confirmbbsSize1': '0',
                    'confirmbbsSize2': '0',
                    'confirmbbsSize3': '0',
                    'confirmbbsSize4': '0',
                    'concentricity5': '0',
                    'concentricity1': '0',
                    'concentricity2': '0',
                    'concentricity3': '0',
                    'concentricity4': '0',
                    'modifyflag': 'NO',
					'phaseVoltage':'0',
					'couplingType':'--Select--',
					'motorBrand':'--Select--',
					'protection':'--Select--',
					'paintColor':'--Select--',
					'lubrication':'--Select--',
					'voltage':'--Select--',
					'motorType':'--Select--'
					
					
					
                };
            });
        };


        //save testReport///////////////////
        $scope.testReportSubmit = function(testReport, form) {




            var GridReport1obj = new Object();
            var GridReport2obj = new Object();
            var GridReport3obj = new Object();
            var GridReport4obj = new Object();
            var GridReport5obj = new Object();

            var myArray = new Array();

            var TestReportAddObj = new Object();
            ///column1

            if ($scope.TestReportForm.$valid) {
                GridReport1obj.slno1 = testReport.slno1;
                GridReport1obj.motorslno1 = testReport.motorslno1;
                GridReport1obj.measuredGearHeadWeight1 = testReport.measuredGearHeadWeight1;
                GridReport1obj.measuredGreaseWeight1 = testReport.measuredGreaseWeight1;
                GridReport1obj.measuredFinalWeight1 = testReport.measuredFinalWeight1;
                GridReport1obj.measuredIpVoltage1 = testReport.measuredIpVoltage1;
                GridReport1obj.measuredAmpere1 = testReport.measuredAmpere1;
                GridReport1obj.measuredIpPower1 = testReport.measuredIpPower1;
                GridReport1obj.measuredOpPower1 = testReport.measuredOpPower1;
                GridReport1obj.measuredTemperatureInitial1 = testReport.measuredTemperatureInitial1;
                GridReport1obj.measuredTemperatureFinal1 = testReport.measuredTemperatureFinal1;
                GridReport1obj.measuredSoundLevelcw1 = testReport.measuredSoundLevelcw1;
                GridReport1obj.measuredSoundLevelccw1 = testReport.measuredSoundLevelccw1;
                GridReport1obj.measuredThermistorCablePresent1 = testReport.measuredThermistorCablePresent1;
                GridReport1obj.measuredSpaceHeaterCablePresent1 = testReport.measuredSpaceHeaterCablePresent1;
                GridReport1obj.overallVibration1 = testReport.overallVibration1;
                GridReport1obj.measuredOpSpeed1 = testReport.measuredOpSpeed1;
                GridReport1obj.airPressureTest1 = testReport.airPressureTest1;
                GridReport1obj.confirmbbsSize1 = testReport.confirmbbsSize1;
                GridReport1obj.concentricity1 = testReport.concentricity1;

                //column2

                GridReport2obj.slno2 = testReport.slno2;
                GridReport2obj.motorslno2 = testReport.motorslno2;
                GridReport2obj.measuredGearHeadWeight2 = testReport.measuredGearHeadWeight2;
                GridReport2obj.measuredGreaseWeight2 = testReport.measuredGreaseWeight2;
                GridReport2obj.measuredFinalWeight2 = testReport.measuredFinalWeight2;
                GridReport2obj.measuredIpVoltage2 = testReport.measuredIpVoltage2;
                GridReport2obj.measuredAmpere2 = testReport.measuredAmpere2;
                GridReport2obj.measuredIpPower2 = testReport.measuredIpPower2;
                GridReport2obj.measuredOpPower2 = testReport.measuredOpPower2;
                GridReport2obj.measuredTemperatureInitial2 = testReport.measuredTemperatureInitial2;
                GridReport2obj.measuredTemperatureFinal2 = testReport.measuredTemperatureFinal2;
                GridReport2obj.measuredSoundLevelcw2 = testReport.measuredSoundLevelcw2;
                GridReport2obj.measuredSoundLevelccw2 = testReport.measuredSoundLevelccw2;
                GridReport2obj.measuredThermistorCablePresent2 = testReport.measuredThermistorCablePresent2;
                GridReport2obj.measuredSpaceHeaterCablePresent2 = testReport.measuredSpaceHeaterCablePresent2;
                GridReport2obj.overallVibration2 = testReport.overallVibration2;
                GridReport2obj.measuredOpSpeed2 = testReport.measuredOpSpeed2;
                GridReport2obj.airPressureTest2 = testReport.airPressureTest2;
                GridReport2obj.confirmbbsSize2 = testReport.confirmbbsSize2;
                GridReport2obj.concentricity2 = testReport.concentricity2;

                //column3
                GridReport3obj.slno3 = testReport.slno3;
                GridReport3obj.motorslno3 = testReport.motorslno3;
                GridReport3obj.measuredGearHeadWeight3 = testReport.measuredGearHeadWeight3;
                GridReport3obj.measuredGreaseWeight3 = testReport.measuredGreaseWeight3;
                GridReport3obj.measuredFinalWeight3 = testReport.measuredFinalWeight3;
                GridReport3obj.measuredIpVoltage3 = testReport.measuredIpVoltage3;
                GridReport3obj.measuredAmpere3 = testReport.measuredAmpere3;
                GridReport3obj.measuredIpPower3 = testReport.measuredIpPower3;
                GridReport3obj.measuredOpPower3 = testReport.measuredOpPower3;
                GridReport3obj.measuredTemperatureInitial3 = testReport.measuredTemperatureInitial3;
                GridReport3obj.measuredTemperatureFinal3 = testReport.measuredTemperatureFinal3
                GridReport3obj.measuredSoundLevelcw3 = testReport.measuredSoundLevelcw3;
                GridReport3obj.measuredSoundLevelccw3 = testReport.measuredSoundLevelccw3;
                GridReport3obj.measuredThermistorCablePresent3 = testReport.measuredThermistorCablePresent3;
                GridReport3obj.measuredSpaceHeaterCablePresent3 = testReport.measuredSpaceHeaterCablePresent3;
                GridReport3obj.overallVibration3 = testReport.overallVibration3;
                GridReport3obj.measuredOpSpeed3 = testReport.measuredOpSpeed3;
                GridReport3obj.airPressureTest3 = testReport.airPressureTest3;
                GridReport3obj.confirmbbsSize3 = testReport.confirmbbsSize3;
                GridReport3obj.concentricity3 = testReport.concentricity3;

                //column4

                GridReport4obj.slno4 = testReport.slno4;
                GridReport4obj.motorslno4 = testReport.motorslno4;
                GridReport4obj.measuredGearHeadWeight4 = testReport.measuredGearHeadWeight4;
                GridReport4obj.measuredGreaseWeight4 = testReport.measuredGreaseWeight4;
                GridReport4obj.measuredFinalWeight4 = testReport.measuredFinalWeight4;
                GridReport4obj.measuredIpVoltage4 = testReport.measuredIpVoltage4;
                GridReport4obj.measuredAmpere4 = testReport.measuredAmpere4;
                GridReport4obj.measuredTemperatureInitial4 = testReport.measuredTemperatureInitial4;
                GridReport4obj.measuredTemperatureFinal4 = testReport.measuredTemperatureFinal4;
                GridReport4obj.intialtempearture4 = testReport.intialtempearture4;
                GridReport4obj.finaltempearture4 = testReport.finaltempearture4;
                GridReport4obj.measuredSoundLevelcw4 = testReport.measuredSoundLevelcw4;
                GridReport4obj.measuredSoundLevelccw4 = testReport.measuredSoundLevelccw4;
                GridReport4obj.measuredThermistorCablePresent4 = testReport.measuredThermistorCablePresent4;
                GridReport4obj.measuredSpaceHeaterCablePresent4 = testReport.measuredSpaceHeaterCablePresent4;
                GridReport4obj.overallVibration4 = testReport.overallVibration4;
                GridReport4obj.measuredOpSpeed4 = testReport.measuredOpSpeed4;
                GridReport4obj.airPressureTest4 = testReport.airPressureTest4;
                GridReport4obj.confirmbbsSize4 = testReport.confirmbbsSize4;
                GridReport4obj.concentricity4 = testReport.concentricity4;

                //column5
                GridReport5obj.slno5 = testReport.slno5;
                GridReport5obj.motorslno5 = testReport.motorslno5;
                GridReport5obj.measuredGearHeadWeight5 = testReport.measuredGearHeadWeight5;
                GridReport5obj.measuredGreaseWeight5 = testReport.measuredGreaseWeight5;
                GridReport5obj.measuredFinalWeight5 = testReport.measuredFinalWeight5;
                GridReport5obj.measuredIpVoltage5 = testReport.measuredIpVoltage5;
                GridReport5obj.measuredAmpere5 = testReport.measuredAmpere5;
                GridReport5obj.measuredIpPower5 = testReport.measuredIpPower5;
                GridReport5obj.measuredOpPower5 = testReport.measuredOpPower5;
                GridReport5obj.measuredTemperatureInitial5 = testReport.measuredTemperatureInitial5;
                GridReport5obj.measuredTemperatureFinal5 = testReport.measuredTemperatureFinal5;
                GridReport5obj.measuredSoundLevelcw5 = testReport.measuredSoundLevelcw5;
                GridReport5obj.measuredSoundLevelccw5 = testReport.measuredSoundLevelccw5;
                GridReport5obj.measuredThermistorCablePresent5 = testReport.measuredThermistorCablePresent5;
                GridReport5obj.measuredSpaceHeaterCablePresent5 = testReport.measuredSpaceHeaterCablePresent5;
                GridReport5obj.overallVibration5 = testReport.overallVibration5;
                GridReport5obj.measuredOpSpeed5 = testReport.measuredOpSpeed5;
                GridReport5obj.airPressureTest5 = testReport.airPressureTest5;
                GridReport5obj.confirmbbsSize5 = testReport.confirmbbsSize5;
                GridReport5obj.concentricity5 = testReport.concentricity5;

                if (GridReport1obj.motorslno1 != undefined) {
                    myArray.push(GridReport1obj);
                }
                if (GridReport2obj.motorslno2 != undefined) {
                    myArray.push(GridReport2obj);
                }
                if (GridReport3obj.motorslno3 != undefined) {
                    myArray.push(GridReport3obj);
                }
                if (GridReport4obj.motorslno4 != undefined) {
                    myArray.push(GridReport4obj);
                }
                if (GridReport5obj.motorslno5 != undefined) {
                    myArray.push(GridReport5obj);
                }

                delete $scope.testReport['slno1'];
                delete $scope.testReport['slno2'];
                delete $scope.testReport['slno3'];
                delete $scope.testReport['slno4'];
                delete $scope.testReport['slno5'];

                delete $scope.testReport['motorslno1'];
                delete $scope.testReport['motorslno2'];
                delete $scope.testReport['motorslno3'];
                delete $scope.testReport['motorslno4'];
                delete $scope.testReport['motorslno5'];

                delete $scope.testReport['measuredGearHeadWeight1'];
                delete $scope.testReport['measuredGearHeadWeight2'];
                delete $scope.testReport['measuredGearHeadWeight3'];
                delete $scope.testReport['measuredGearHeadWeight4'];
                delete $scope.testReport['measuredGearHeadWeight5'];


                delete $scope.testReport['measuredGreaseWeight1'];
                delete $scope.testReport['measuredGreaseWeight2'];
                delete $scope.testReport['measuredGreaseWeight3'];
                delete $scope.testReport['measuredGreaseWeight4'];
                delete $scope.testReport['measuredGreaseWeight5'];

                delete $scope.testReport['measuredFinalWeight1'];
                delete $scope.testReport['measuredFinalWeight2'];
                delete $scope.testReport['measuredFinalWeight3'];
                delete $scope.testReport['measuredFinalWeight4'];
                delete $scope.testReport['measuredFinalWeight5'];


                delete $scope.testReport['measuredIpVoltage1'];
                delete $scope.testReport['measuredIpVoltage2'];
                delete $scope.testReport['measuredIpVoltage3'];
                delete $scope.testReport['measuredIpVoltage4'];
                delete $scope.testReport['measuredIpVoltage5'];

                delete $scope.testReport['measuredAmpere1'];
                delete $scope.testReport['measuredAmpere2'];
                delete $scope.testReport['measuredAmpere3'];
                delete $scope.testReport['measuredAmpere4'];
                delete $scope.testReport['measuredAmpere5'];

                delete $scope.testReport['measuredIpPower1'];
                delete $scope.testReport['measuredIpPower2'];
                delete $scope.testReport['measuredIpPower3'];
                delete $scope.testReport['measuredIpPower4'];
                delete $scope.testReport['measuredIpPower5'];

                delete $scope.testReport['measuredOpPower1'];
                delete $scope.testReport['measuredOpPower2'];
                delete $scope.testReport['measuredOpPower3'];
                delete $scope.testReport['measuredOpPower4'];
                delete $scope.testReport['measuredOpPower5'];

                delete $scope.testReport['measuredTemperatureInitial1'];
                delete $scope.testReport['measuredTemperatureInitial2'];
                delete $scope.testReport['measuredTemperatureInitial3'];
                delete $scope.testReport['measuredTemperatureInitial4'];
                delete $scope.testReport['measuredTemperatureInitial5'];

                delete $scope.testReport['measuredTemperatureFinal1'];
                delete $scope.testReport['measuredTemperatureFinal2'];
                delete $scope.testReport['measuredTemperatureFinal3'];
                delete $scope.testReport['measuredTemperatureFinal4'];
                delete $scope.testReport['measuredTemperatureFinal5'];


                delete $scope.testReport['measuredSoundLevelcw1'];
                delete $scope.testReport['measuredSoundLevelcw2'];
                delete $scope.testReport['measuredSoundLevelcw3'];
                delete $scope.testReport['measuredSoundLevelcw4'];
                delete $scope.testReport['measuredSoundLevelcw5'];


                delete $scope.testReport['measuredSoundLevelccw1'];
                delete $scope.testReport['measuredSoundLevelccw2'];
                delete $scope.testReport['measuredSoundLevelccw3'];
                delete $scope.testReport['measuredSoundLevelccw4'];
                delete $scope.testReport['measuredSoundLevelccw5'];


                delete $scope.testReport['measuredThermistorCablePresent1'];
                delete $scope.testReport['measuredThermistorCablePresent2'];
                delete $scope.testReport['measuredThermistorCablePresent3'];
                delete $scope.testReport['measuredThermistorCablePresent4'];
                delete $scope.testReport['measuredThermistorCablePresent5'];

                delete $scope.testReport['measuredSpaceHeaterCablePresent1'];
                delete $scope.testReport['measuredSpaceHeaterCablePresent2'];
                delete $scope.testReport['measuredSpaceHeaterCablePresent3'];
                delete $scope.testReport['measuredSpaceHeaterCablePresent4'];
                delete $scope.testReport['measuredSpaceHeaterCablePresent5'];


                delete $scope.testReport['overallVibration1'];
                delete $scope.testReport['overallVibration2'];
                delete $scope.testReport['overallVibration3'];
                delete $scope.testReport['overallVibration4'];
                delete $scope.testReport['overallVibration5'];

                delete $scope.testReport['measuredOpSpeed1'];
                delete $scope.testReport['measuredOpSpeed2'];
                delete $scope.testReport['measuredOpSpeed3'];
                delete $scope.testReport['measuredOpSpeed4'];
                delete $scope.testReport['measuredOpSpeed5'];


                delete $scope.testReport['airPressureTest3'];
                delete $scope.testReport['airPressureTest1'];
                delete $scope.testReport['airPressureTest2'];
                delete $scope.testReport['airPressureTest4'];
                delete $scope.testReport['airPressureTest5'];

                delete $scope.testReport['confirmbbsSize5'];
                delete $scope.testReport['confirmbbsSize1'];
                delete $scope.testReport['confirmbbsSize2'];
                delete $scope.testReport['confirmbbsSize3'];
                delete $scope.testReport['confirmbbsSize4'];


                delete $scope.testReport['concentricity5'];
                delete $scope.testReport['concentricity1'];
                delete $scope.testReport['concentricity2'];
                delete $scope.testReport['concentricity3'];
                delete $scope.testReport['concentricity4'];

                delete $scope.testReport['modifyflag'];
				
				delete $scope.testReport['redcolor'];
					delete $scope.testReport['redcolor1'];
						delete $scope.testReport['redcolor2'];
							delete $scope.testReport['redcolor3'];
								delete $scope.testReport['redcolor4'];
									delete $scope.testReport['redcolor5'];
										delete $scope.testReport['redcolor6'];
											delete $scope.testReport['redcolor7'];
												delete $scope.testReport['redcolor8'];
													delete $scope.testReport['redcolor9'];
													delete $scope.testReport['redcolor10'];
					delete $scope.testReport['redcolor11'];
						delete $scope.testReport['redcolor12'];
							delete $scope.testReport['redcolor13'];
								delete $scope.testReport['redcolor14'];
									delete $scope.testReport['redcolor15'];
										delete $scope.testReport['redcolor16'];
											delete $scope.testReport['redcolor17'];
												delete $scope.testReport['redcolor18'];
													delete $scope.testReport['redcolor19'];
													delete $scope.testReport['redcolor20'];
												
													




                var accessioriesCode = $scope.testReport['accessories'];
                //alert(accessioriesCode)
                sessionStorage.setItem('accessories', accessioriesCode);

                var terminaBoxCode = $scope.testReport['terminalBox'];
                sessionStorage.setItem('terminalBox', terminaBoxCode);
				
				var cableEntryCode = $scope.testReport['cableEntry'];
                sessionStorage.setItem('terminalBox', cableEntryCode);



              /*  if (!modifyFlag1) {
                    var f = new File([""], "filename");

                    cusImage.delete("userphoto");
                    cusImage.append("userphoto", f);
                    //delete $scope.testReport['bbsimage'];
                }*/
                // alert($scope.testReport.startDateTime);
                TestReportAddObj = $scope.testReport;

                TestReportAddObj1 = myArray;
                //alert(JSON.stringify(TestReportAddObj));
                cusImage.append("formData", angular.toJson(TestReportAddObj));
                cusImage.append("gridData", angular.toJson(TestReportAddObj1));

			//	alert(JSON.stringify(cusImage));
                $http.post("/SCA-360/saveTestReport.do", cusImage, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': undefined
                    },
                    transformRequest: angular.identity
                }).success(function(data, status) {
                    swal('Saved Successfully');
                    $state.go('app.report');
                });
            } else {
                var field = null,
                    firstError = null;
                for (field in form) {
                    if (field[0] != '$') {
                        if (firstError === null && !form[field].$valid) {
                            firstError = form[field].$name;
                        }
                        if (form[field].$pristine) {
                            form[field].$dirty = true;
                        }
                    }
                }
            }
        };


	$scope.getprint=function(){
		    var pdf = new jsPDF('p', 'pt', 'b2');
                pdf.addHTML(document.getElementById('records'), function() {
                    pdf.save('test.pdf');
                });
		
		}


        /////////////////////////////////////////////////////TESTREPORT FORM SUBMIT/////////////////////////////////////////////
        var customerAssembyNumber = "";
        $scope.LoadCustomerPO = function() {

            var customerAssembyNumber = $rootScope.poname
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getAllLTR.do",
                data: customerAssembyNumber,
            }).success(function(data, status) {

                $('#CustomerPO').attr('disabled', true);
                $rootScope.poname = "";
                $scope.testReport = data.testReport;

                /////////////////////////////TERMINAL BOX EDIT MODE////////////////////////////////////////////
                var terminalboxSplit = data.testReport.terminalBox;

                var terminalboxSales = [];
                for (var s = 0; s < terminalboxSplit.length; s++) {

                    terminalboxSales.push(terminalboxSplit[s]);

                }


                var httpRequest = $http({
                    method: 'POST',
                    url: "/SCA-360/loadDropDown.do",
                    data: jsonStringDropDownTBox,
                }).success(function(data, status) {
                    $scope.terminalBox = data;
                    var optionValues = "";
                    for (var i = 0; i < data.length; i++) {
                        optionValues += "<option value='" + data[i].id + "'>" + data[i].tbox + "</option>";
                    }
                    $('#picturegallery').empty();
                    var newOption = $(optionValues);
                    $('#picturegallery').append(newOption);
                    $('#picturegallery').trigger("chosen:updated");

                    $('#picturegallery').val(terminalboxSales).trigger('chosen:updated');
                    $scope.testReport.terminalBox = terminalboxSales;
                });

                /////////////////////accessioris EDIT MODE//////////////////////////////////////////
                var accessoriesSplit = data.testReport.accessories;

                var accessoriesSales = [];
                for (var s = 0; s < accessoriesSplit.length; s++) {

                    accessoriesSales.push(accessoriesSplit[s]);
                    //alert("accessoriesSales"+accessoriesSales);
                }


                var httpRequest = $http({
                    method: 'POST',
                    url: "/SCA-360/loadDropDown.do",
                    data: jsonStringDropDown,
                }).success(function(data, status) {

                    $scope.accessories = data;

                    var optionValues = "";
                    for (var i = 0; i < data.length; i++) {
                        optionValues += "<option value='" + data[i].id + "'>" + data[i].accessories + "</option>";
                    }
                    $('#picturegallery1').empty();
                    var newOption = $(optionValues);
                    $('#picturegallery1').append(newOption);
                    $('#picturegallery1').trigger("chosen:updated");

                    $('#picturegallery1').val(accessoriesSales).trigger('chosen:updated');
                    $scope.testReport.accessories = accessoriesSales;
                });
				
				 /////////////////////Cable Entry EDIT MODE//////////////////////////////////////////
                var cableEntrySplit = data.testReport.cableEntry;

                var cableEntrySales = [];
                for (var s = 0; s < cableEntrySplit.length; s++) {

                    cableEntrySales.push(cableEntrySplit[s]);
                    //alert("accessoriesSales"+accessoriesSales);
                }


                var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadDropDown.do",
                data: jsonCableEntryString,
            }).success(function(data, status) {
                $scope.cableEntry = data;
              //  alert(JSON.stringify(data));
				var optionValues = "";
                for (var i = 0; i < data.length; i++) {
                    optionValues += "<option value='" + data[i].id + "'>" + data[i].cableentry + "</option>";
                }
                $('#picturegallery2').empty();
                var newOption = $(optionValues);
                //alert(JSON.stringify(newOption));
                $('#picturegallery2').append(newOption);
                $('#picturegallery2').trigger("chosen:updated");
				$('#picturegallery2').val(cableEntrySales).trigger('chosen:updated');
                    $scope.testReport.cableEntry = cableEntrySales;


            });




                if (data.testReport.bbsimage != null && data.testReport.bbsimage != null) {

                    var img = $('<img src="' + 'data:image/png;base64,' + data.testReport.bbsimage + '" width="200" height="150"/>', {
                        id: 'dynamic',
                        width: 200,
                        height: 150
                    });


                    var photoName = data.testReport.bbsimage.split("/");



                    $("#photo").attr("data-content", $(img)[0].outerHTML).popover("show");
                    $("#1photoinput").text("Change");
                    $("#2photoinput").show();
                    $("#3photoinput").val(photoName[1]);

                    $scope.dummyPhoto = "1";
                    $('#dummyPhoto').trigger('blur');

                } else {
                    $('.image-preview').popover('hide');
                    $("#1photoinput").text("Upload Photo");


                    $("#3photoinput").val("");

                    $("#2photoinput").hide();

                }

                if (data.testReportDtls[0]) {
                    $scope.testReport.slno1 = data.testReportDtls[0].slno1;
                    $scope.testReport.concentricity1 = data.testReportDtls[0].concentricity1;
                    $scope.testReport.measuredOpSpeed1 = data.testReportDtls[0].measuredOpSpeed1;
                    $scope.testReport.measuredOpPower1 = data.testReportDtls[0].measuredOpPower1;
                    $scope.testReport.measuredAmpere1 = data.testReportDtls[0].measuredAmpere1;
                    $scope.testReport.airPressureTest1 = data.testReportDtls[0].airPressureTest1;
                    $scope.testReport.motorslno1 = data.testReportDtls[0].motorslno1;
                    $scope.testReport.overallVibration1 = data.testReportDtls[0].overallVibration1;
                    $scope.testReport.measuredGearHeadWeight1 = data.testReportDtls[0].measuredGearHeadWeight1;
                    $scope.testReport.measuredSoundLevelcw1 = data.testReportDtls[0].measuredSoundLevelcw1;
                    $scope.testReport.measuredIpPower1 = data.testReportDtls[0].measuredIpPower1;
                    $scope.testReport.measuredSoundLevelccw1 = data.testReportDtls[0].measuredSoundLevelccw1;
                    $scope.testReport.measuredTemperatureFinal1 = data.testReportDtls[0].measuredTemperatureFinal1;
                    $scope.testReport.measuredTemperatureInitial1 = data.testReportDtls[0].measuredTemperatureInitial1;
                    $scope.testReport.confirmbbsSize1 = data.testReportDtls[0].confirmbbsSize1;
                    $scope.testReport.measuredThermistorCablePresent1 = data.testReportDtls[0].measuredThermistorCablePresent1;
                    $scope.testReport.measuredFinalWeight1 = data.testReportDtls[0].measuredFinalWeight1;
                    $scope.testReport.measuredSpaceHeaterCablePresent1 = data.testReportDtls[0].measuredSpaceHeaterCablePresent1;
					 $scope.testReport.measuredGreaseWeight1 = data.testReportDtls[0].measuredGreaseWeight1;
                }
                if (data.testReportDtls[1]) {
                    $scope.testReport.slno2 = data.testReportDtls[1].slno2;
                    $scope.testReport.concentricity2 = data.testReportDtls[1].concentricity2;
                    $scope.testReport.measuredOpSpeed2 = data.testReportDtls[1].measuredOpSpeed2;
                    $scope.testReport.measuredOpPower2 = data.testReportDtls[1].measuredOpPower2;
                    $scope.testReport.measuredAmpere2 = data.testReportDtls[1].measuredAmpere2;
                    $scope.testReport.airPressureTest2 = data.testReportDtls[1].airPressureTest2;
                    $scope.testReport.motorslno2 = data.testReportDtls[1].motorslno2;
                    $scope.testReport.overallVibration2 = data.testReportDtls[1].overallVibration2;
                    $scope.testReport.measuredGearHeadWeight2 = data.testReportDtls[1].measuredGearHeadWeight2;
                    $scope.testReport.measuredSoundLevelcw2 = data.testReportDtls[1].measuredSoundLevelcw2;
                    $scope.testReport.measuredIpPower2 = data.testReportDtls[1].measuredIpPower2;
                    $scope.testReport.measuredSoundLevelccw2 = data.testReportDtls[1].measuredSoundLevelccw2;
                    $scope.testReport.measuredTemperatureFinal2 = data.testReportDtls[1].measuredTemperatureFinal2;
                    $scope.testReport.measuredTemperatureInitial2 = data.testReportDtls[1].measuredTemperatureInitial2;
                    $scope.testReport.confirmbbsSize2 = data.testReportDtls[1].confirmbbsSize2;
                    $scope.testReport.measuredThermistorCablePresent2 = data.testReportDtls[1].measuredThermistorCablePresent2;
                    $scope.testReport.measuredFinalWeight2 = data.testReportDtls[1].measuredFinalWeight2;
                    $scope.testReport.measuredSpaceHeaterCablePresent2 = data.testReportDtls[1].measuredSpaceHeaterCablePresent2;
					 $scope.testReport.measuredGreaseWeight2 = data.testReportDtls[1].measuredGreaseWeight2;

                }
                if (data.testReportDtls[2]) {

                    $scope.testReport.slno3 = data.testReportDtls[2].slno3;
                    $scope.testReport.concentricity3 = data.testReportDtls[2].concentricity3;
                    $scope.testReport.measuredOpSpeed3 = data.testReportDtls[2].measuredOpSpeed3;
                    $scope.testReport.measuredOpPower3 = data.testReportDtls[2].measuredOpPower3;
                    $scope.testReport.measuredAmpere3 = data.testReportDtls[2].measuredAmpere3;
                    $scope.testReport.airPressureTest3 = data.testReportDtls[2].airPressureTest3;
                    $scope.testReport.motorslno3 = data.testReportDtls[2].motorslno3;
                    $scope.testReport.overallVibration3 = data.testReportDtls[2].overallVibration3;
                    $scope.testReport.measuredGearHeadWeight3 = data.testReportDtls[2].measuredGearHeadWeight3;
                    $scope.testReport.measuredSoundLevelcw3 = data.testReportDtls[2].measuredSoundLevelcw3;
                    $scope.testReport.measuredIpPower3 = data.testReportDtls[2].measuredIpPower3;
                    $scope.testReport.measuredSoundLevelccw3 = data.testReportDtls[2].measuredSoundLevelccw3;
                    $scope.testReport.measuredTemperatureFinal3 = data.testReportDtls[2].measuredTemperatureFinal3;
                    $scope.testReport.measuredTemperatureInitial3 = data.testReportDtls[2].measuredTemperatureInitial3;
                    $scope.testReport.confirmbbsSize3 = data.testReportDtls[2].confirmbbsSize3;
                    $scope.testReport.measuredThermistorCablePresent3 = data.testReportDtls[2].measuredThermistorCablePresent3;
                    $scope.testReport.measuredFinalWeight3 = data.testReportDtls[2].measuredFinalWeight3;
                    $scope.testReport.measuredSpaceHeaterCablePresent3 = data.testReportDtls[2].measuredSpaceHeaterCablePresent3;
					 $scope.testReport.measuredGreaseWeight3 = data.testReportDtls[2].measuredGreaseWeight3;

                }
                if (data.testReportDtls[3]) {


                    $scope.testReport.slno4 = data.testReportDtls[3].slno4;
                    $scope.testReport.concentricity4 = data.testReportDtls[3].concentricity4;
                    $scope.testReport.measuredOpSpeed4 = data.testReportDtls[3].measuredOpSpeed4;
                    $scope.testReport.measuredOpPower4 = data.testReportDtls[3].measuredOpPower4;
                    $scope.testReport.measuredAmpere4 = data.testReportDtls[3].measuredAmpere4;
                    $scope.testReport.airPressureTest4 = data.testReportDtls[3].airPressureTest4;
                    $scope.testReport.motorslno4 = data.testReportDtls[3].motorslno4;
                    $scope.testReport.overallVibration4 = data.testReportDtls[3].overallVibration4;
                    $scope.testReport.measuredGearHeadWeight4 = data.testReportDtls[3].measuredGearHeadWeight4;
                    $scope.testReport.measuredSoundLevelcw4 = data.testReportDtls[3].measuredSoundLevelcw4;
                    $scope.testReport.measuredIpPower4 = data.testReportDtls[3].measuredIpPower4;
                    $scope.testReport.measuredSoundLevelccw4 = data.testReportDtls[3].measuredSoundLevelccw4;
                    $scope.testReport.measuredTemperatureFinal4 = data.testReportDtls[3].measuredTemperatureFinal4;
                    $scope.testReport.measuredTemperatureInitial4 = data.testReportDtls[3].measuredTemperatureInitial4;
                    $scope.testReport.confirmbbsSize4 = data.testReportDtls[3].confirmbbsSize4;
                    $scope.testReport.measuredThermistorCablePresent4 = data.testReportDtls[3].measuredThermistorCablePresent4;
                    $scope.testReport.measuredFinalWeight4 = data.testReportDtls[3].measuredFinalWeight4;
                    $scope.testReport.measuredSpaceHeaterCablePresent4 = data.testReportDtls[3].measuredSpaceHeaterCablePresent4;
					$scope.testReport.measuredGreaseWeight4 = data.testReportDtls[3].measuredGreaseWeight4;
                }
                if (data.testReportDtls[4]) {

                    $scope.testReport.slno5 = data.testReportDtls[4].slno5;
                    $scope.testReport.concentricity5 = data.testReportDtls[4].concentricity5;
                    $scope.testReport.measuredOpSpeed5 = data.testReportDtls[4].measuredOpSpeed5;
                    $scope.testReport.measuredOpPower5 = data.testReportDtls[4].measuredOpPower5;
                    $scope.testReport.measuredAmpere5 = data.testReportDtls[4].measuredAmpere5;
                    $scope.testReport.airPressureTest5 = data.testReportDtls[4].airPressureTest5;
                    $scope.testReport.motorslno5 = data.testReportDtls[4].motorslno5;
                    $scope.testReport.overallVibration5 = data.testReportDtls[4].overallVibration5;
                    $scope.testReport.measuredGearHeadWeight5 = data.testReportDtls[4].measuredGearHeadWeight5;
                    $scope.testReport.measuredSoundLevelcw5 = data.testReportDtls[4].measuredSoundLevelcw5;
                    $scope.testReport.measuredIpPower5 = data.testReportDtls[4].measuredIpPower5;
                    $scope.testReport.measuredSoundLevelccw5 = data.testReportDtls[4].measuredSoundLevelccw5;
                    $scope.testReport.measuredTemperatureFinal5 = data.testReportDtls[4].measuredTemperatureFinal5;
                    $scope.testReport.measuredTemperatureInitial5 = data.testReportDtls[4].measuredTemperatureInitial5;
                    $scope.testReport.confirmbbsSize5 = data.testReportDtls[4].confirmbbsSize5;
                    $scope.testReport.measuredThermistorCablePresent5 = data.testReportDtls[4].measuredThermistorCablePresent5;
                    $scope.testReport.measuredFinalWeight5 = data.testReportDtls[4].measuredFinalWeight5;
                    $scope.testReport.measuredSpaceHeaterCablePresent5 = data.testReportDtls[4].measuredSpaceHeaterCablePresent5;
					$scope.testReport.measuredGreaseWeight5 = data.testReportDtls[4].measuredGreaseWeight5;

                }

            });



        };
        ///////////////////////////check duplicate customer p.o/////////////////////////////////////////////////////////////
        var CustPO = new Object();
        CustPO.tablename = "com.finsol.model.TestReport";
        CustPO.columnname = "customerpono";
        $scope.DupCustPO = function(values) {
            CustPO.value = values;
            var jsonObj = JSON.stringify(CustPO);
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/checkValue.do",
                data: jsonObj,
            }).success(function(data, status) {
                if (data == true) {

                    $("#existValRC1").show();
                } else {
                    $("#existValRC1").hide();
                }

            });
        };
        ///////////////////////////////////////////////////////////////////////////

        $scope.resettestreport = function(form) {
            $scope.testReport = angular.copy($scope.master);
            $scope.loadServerData();
            form.$setPristine(true);
            $('#picturegallery').val("['']").trigger('chosen:updated');
            $scope.testReport = "";
        };
        $scope.loadCustomerName = function(customerName) {


            $.getJSON("getAllAccountNames.do", function(json) {
                $scope.customernames = json['data'];
                //alert(JSON.stringify($scope.names));
            })
        };
		
		
		$scope.getTotalGreaseWeight1=function(headweight,finalweight,modelno){
		
		
			if(finalweight==undefined || headweight.length==0 || finalweight.length==0 ){
				$scope.testReport.measuredGreaseWeight1="";
				}
				
				else{
					
			var res = modelno.charAt(0);
			if(res=='G' || res=='Z' || res=='R'){
				var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getGreaseAmount.do",
                data: modelno,
            }).success(function(data, status) {
			//alert(JSON.stringify(data));
			if(data!=0.0){
	var greaseweight=parseInt(finalweight)-parseInt(headweight);
		greaseweight=Math.abs(greaseweight);
		var ptr1  = Math.round(greaseweight*100)/100;
			ptr  = ptr1.toFixed(2);
			if(ptr=='NaN'){
				ptr="";
				}
		$scope.testReport.measuredGreaseWeight1=ptr;
		var referncevariable=(((data-greaseweight)/data)*100);
			
			if(parseInt(referncevariable)<=10 && parseInt(referncevariable)>=-10 ){
					//alert("greater1");//hide
				
				}else{
					 swal("oops!", 'The Measured grease  value is not in reference range, please check', "error");
				
					}
			}else{
				
				var greaseweight=(finalweight)-(headweight);
				greaseweight=Math.abs(greaseweight);
		var ptr1  = Math.round(greaseweight*100)/100;
			ptr  = ptr1.toFixed(2);
			if(ptr=='NaN'){
				ptr="";
				}
		$scope.testReport.measuredGreaseWeight1=ptr;
				}
		})
				}else{
					var greaseweight=(finalweight)-(headweight);
				greaseweight=Math.abs(greaseweight);
		var ptr1  = Math.round(greaseweight*100)/100;
			ptr  = ptr1.toFixed(2);
			if(ptr=='NaN'){
				ptr="";
				}
		$scope.testReport.measuredGreaseWeight1=ptr;
					
					}
			 
			}
		}
		
			$scope.getTotalGreaseWeight2=function(headweight,finalweight,modelno){
					if(finalweight==undefined || headweight.length==0 || finalweight.length==0 ){
				$scope.testReport.measuredGreaseWeight2="";
					
					}else{	
					var res = modelno.charAt(0);
			if(res=='G' || res=='Z' || res=='R'){
					
				 var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getGreaseAmount.do",
                data: modelno,
            }).success(function(data, status) {
				//alert(data);
				if(data!=0.0){
		var greaseweight=parseInt(finalweight)-parseInt(headweight);
		greaseweight=Math.abs(greaseweight);
		var ptr1  = Math.round(greaseweight*100)/100;
			ptr  = ptr1.toFixed(2);
			if(ptr=='NaN'){
				ptr="";
				}
		$scope.testReport.measuredGreaseWeight2=ptr;
		var referncevariable=(((data-greaseweight)/data)*100);
			
			if(parseInt(referncevariable)<=10 && parseInt(referncevariable)>=-10 ){
					//alert("greater1");//hide
				
				}else{
					 swal("oops!", 'The Measured grease  value is not in reference range, please check', "error");
				
					}
				}else{
					
					var greaseweight=(finalweight)-(headweight);
				greaseweight=Math.abs(greaseweight);
		var ptr1  = Math.round(greaseweight*100)/100;
			ptr  = ptr1.toFixed(2);
			if(ptr=='NaN'){
				ptr="";
				}
		$scope.testReport.measuredGreaseWeight2=ptr;
				}
					
						
					})
				 }else{
					var greaseweight=(finalweight)-(headweight);
				greaseweight=Math.abs(greaseweight);
		var ptr1  = Math.round(greaseweight*100)/100;
			ptr  = ptr1.toFixed(2);
			if(ptr=='NaN'){
				ptr="";
				}
		$scope.testReport.measuredGreaseWeight2=ptr;
					
					}
				}
		}
		
			$scope.getTotalGreaseWeight3=function(headweight,finalweight,modelno){
					if(finalweight==undefined || headweight.length==0 || finalweight.length==0 ){
				$scope.testReport.measuredGreaseWeight3="";
						
						}else{
							
							var res = modelno.charAt(0);
			if(res=='G' || res=='Z' || res=='R'){
				 var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getGreaseAmount.do",
                data: modelno,
            }).success(function(data, status) {
				//alert(data);
					if(data!=0.0){
		var greaseweight=parseInt(finalweight)-parseInt(headweight);
		greaseweight=Math.abs(greaseweight);
		var ptr1  = Math.round(greaseweight*100)/100;
			ptr  = ptr1.toFixed(2);
			if(ptr=='NaN'){
				ptr="";
				}
		$scope.testReport.measuredGreaseWeight3=ptr;
		var referncevariable=(((data-greaseweight)/data)*100);
			
			if(parseInt(referncevariable)<=10 && parseInt(referncevariable)>=-10 ){
					//alert("greater1");//hide
				
				}else{
					 swal("oops!", 'The Measured grease  value is not in reference range, please check', "error");
				
					}
						}else{
					
					var greaseweight=(finalweight)-(headweight);
				greaseweight=Math.abs(greaseweight);
		var ptr1  = Math.round(greaseweight*100)/100;
			ptr  = ptr1.toFixed(2);
			if(ptr=='NaN'){
				ptr="";
				}
		$scope.testReport.measuredGreaseWeight3=ptr;
				}
						
						
						})}else{
					 var greaseweight=(finalweight)-(headweight);
				greaseweight=Math.abs(greaseweight);
		var ptr1  = Math.round(greaseweight*100)/100;
			ptr  = ptr1.toFixed(2);
			if(ptr=='NaN'){
				ptr="";
				}
		$scope.testReport.measuredGreaseWeight3=ptr;
					 
					 }
				 
					}
		}
		
			$scope.getTotalGreaseWeight4=function(headweight,finalweight,modelno){
			if(finalweight==undefined || headweight.length==0 || finalweight.length==0 ){
				$scope.testReport.measuredGreaseWeight4="";
				}else{
					var res = modelno.charAt(0);
			if(res=='G' || res=='Z' || res=='R'){
				 var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getGreaseAmount.do",
                data: modelno,
            }).success(function(data, status) {
				//alert(data);
					if(data!=0.0){
		var greaseweight=parseInt(finalweight)-parseInt(headweight);
		greaseweight=Math.abs(greaseweight);
		var ptr1  = Math.round(greaseweight*100)/100;
			ptr  = ptr1.toFixed(2);
			if(ptr=='NaN'){
				ptr="";
				}
		$scope.testReport.measuredGreaseWeight4=ptr;
		var referncevariable=(((data-greaseweight)/data)*100);
			
			if(parseInt(referncevariable)<=10 && parseInt(referncevariable)>=-10 ){
					//alert("greater1");//hide
				
				}else{
					 swal("oops!", 'The Measured grease  value is not in reference range, please check', "error");
				
					}
					
					}else{
						var greaseweight=(finalweight)-(headweight);
				greaseweight=Math.abs(greaseweight);
		var ptr1  = Math.round(greaseweight*100)/100;
			ptr  = ptr1.toFixed(2);
			if(ptr=='NaN'){
				ptr="";
				}
		$scope.testReport.measuredGreaseWeight4=ptr;
				}
			})
			}else{
					var greaseweight=(finalweight)-(headweight);
				greaseweight=Math.abs(greaseweight);
		var ptr1  = Math.round(greaseweight*100)/100;
			ptr  = ptr1.toFixed(2);
			if(ptr=='NaN'){
				ptr="";
				}
		$scope.testReport.measuredGreaseWeight4=ptr;
				}
			}
		}
		
			$scope.getTotalGreaseWeight5=function(headweight,finalweight,modelno){
			if(finalweight==undefined || headweight.length==0 || finalweight.length==0 ){
				$scope.testReport.measuredGreaseWeight5="";
			}else{
				var res = modelno.charAt(0);
			if(res=='G' || res=='Z' || res=='R'){
				 var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getGreaseAmount.do",
                data: modelno,
            }).success(function(data, status) {
				//alert(data);
				if(data!=0.0){
		var greaseweight=parseInt(finalweight)-parseInt(headweight);
		greaseweight=Math.abs(greaseweight);
		var ptr1  = Math.round(greaseweight*100)/100;
			ptr  = ptr1.toFixed(2);
			if(ptr=='NaN'){
				ptr="";
				}
		$scope.testReport.measuredGreaseWeight5=ptr;
		var referncevariable=(((data-greaseweight)/data)*100);
			
			if(parseInt(referncevariable)<=10 && parseInt(referncevariable)>=-10 ){
					//alert("greater1");//hide
				
				}else{
					 swal("oops!", 'The Measured grease  value is not in reference range, please check', "error");
				
					}
					}else{
						
						var greaseweight=(finalweight)-(headweight);
				greaseweight=Math.abs(greaseweight);
		var ptr1  = Math.round(greaseweight*100)/100;
			ptr  = ptr1.toFixed(2);
			if(ptr=='NaN'){
				ptr="";
				}
		$scope.testReport.measuredGreaseWeight5=ptr;
				}
			})}else{
					var greaseweight=(finalweight)-(headweight);
				greaseweight=Math.abs(greaseweight);
		var ptr1  = Math.round(greaseweight*100)/100;
			ptr  = ptr1.toFixed(2);
			if(ptr=='NaN'){
				ptr="";
				}
		$scope.testReport.measuredGreaseWeight5=ptr; 
					 }
				}
		}
		
		
		$scope.getoverrallvalidation1=function(overallvalidation){
			
			  
		if(overallvalidation>1.4){
	
         $scope.testReport.redcolor="red";
		      swal("oops!", 'The Measured Overall Vibration value is not in reference range, please check', "error");
			  
        }else{
            $scope.testReport.redcolor="";
        }
		}
		
		
		$scope.getoverrallvalidation2=function(overallvalidation){
			
			  
		if(overallvalidation>1.4){
	
         $scope.testReport.redcolor2="red";
		    swal("oops!", 'The Measured Overall Vibration value is not in reference range, please check', "error");
        }else{
            $scope.testReport.redcolor2="";
        }
		}
		
		
		$scope.getoverrallvalidation3=function(overallvalidation){
			
			  
		if(overallvalidation>1.4){
	           $scope.testReport.redcolor3="red";
			   swal("oops!", 'The Measured Overall Vibration value is not in reference range, please check', "error");
        }else{
            $scope.testReport.redcolor3="";
        }
		}
		
		
		$scope.getoverrallvalidation4=function(overallvalidation){
			
			  
		if(overallvalidation>1.4){

         $scope.testReport.redcolor4="red";
		  swal("oops!", 'The Measured Overall Vibration value is not in reference range, please check', "error");
        }else{
            $scope.testReport.redcolor4="";
        }
		}
		
		
		$scope.getoverrallvalidation5=function(overallvalidation){
			
			  
		if(overallvalidation>1.4){
	  
         $scope.testReport.redcolor5="red";
		   swal("oops!", 'The Measured Overall Vibration value is not in reference range, please check', "error");
        }else{
            $scope.testReport.redcolor5="";
        }
		}
		
		
		
			$scope.validateFinalTemperature1=function(finaltemperature){
			
			  
		if(finaltemperature>=70){
	 
         $scope.testReport.redcolor6="red";
		    swal("oops!", 'The Measured Final Temperature value is not in reference range, please check', "error");
        }else{
            $scope.testReport.redcolor6="";
        }
		}
		
		
			$scope.validateFinalTemperature2=function(finaltemperature){
			
			  
		if(finaltemperature>=70){
	
         $scope.testReport.redcolor7="red";
		  swal("oops!", 'The Measured Final Temperature value is not in reference range, please check', "error");
        }else{
            $scope.testReport.redcolor7="";
        }
		}
		
		
			$scope.validateFinalTemperature3=function(finaltemperature){
			
			  
		if(finaltemperature>=70){
	 
         $scope.testReport.redcolor8="red";
		   swal("oops!", 'The Measured Final Temperature value is not in reference range, please check', "error");
        }else{
            $scope.testReport.redcolor8="";
        }
		}
		
		
		
			$scope.validateFinalTemperature4=function(finaltemperature){
			
			  
		if(finaltemperature>=70){
	  
         $scope.testReport.redcolor9="red";
		    swal("oops!", 'The Measured Final Temperature value is not in reference range, please check', "error");
        }else{
            $scope.testReport.redcolor9="";
        }
		}
		
		
			$scope.validateFinalTemperature5=function(finaltemperature){
			
			  
		if(finaltemperature>=70){
	 
         $scope.testReport.redcolor10="red";
		   swal("oops!", 'The Measured Final Temperature value is not in reference range, please check', "error");
        }else{
            $scope.testReport.redcolor10="";
        }
		}
		
			$scope.validateSoundLevel1=function(soundlevel){
			
			  
		if(soundlevel>=80){
	
         $scope.testReport.redcolor11="red";
		   swal("oops!", 'The Measured Sound  value is not in reference range, please check', "error");
        }else{
            $scope.testReport.redcolor11="";
        }
		}
		
			$scope.validateSoundLevel2=function(soundlevel){
			
			  
		if(soundlevel>=80){
	
         $scope.testReport.redcolor12="red";
		  swal("oops!", 'The Measured Sound  value is not in reference range, please check', "error");
        }else{
            $scope.testReport.redcolor12="";
        }
		}
		
			$scope.validateSoundLevel3=function(soundlevel){
			
			  
		if(soundlevel>=80){
	
         $scope.testReport.redcolor13="red";
		   swal("oops!", 'The Measured Sound  value is not in reference range, please check', "error");
        }else{
            $scope.testReport.redcolor13="";
        }
		}
		
			$scope.validateSoundLevel4=function(soundlevel){
			
			  
		if(soundlevel>=80){
	
         $scope.testReport.redcolor14="red";
		     swal("oops!", 'The Measured Sound  value is not in reference range, please check', "error");
        }else{
            $scope.testReport.redcolor14="";
        }
		}
		
		
			$scope.validateSoundLevel5=function(soundlevel){
			
			  
		if(soundlevel>=80){
	
         $scope.testReport.redcolor15="red";
		     swal("oops!", 'The Measured Sound  value is not in reference range, please check', "error");
        }else{
            $scope.testReport.redcolor15="";
        }
		}
		
			$scope.validateSoundLevel6=function(soundlevel){
			
			  
		if(soundlevel>=80){
	
         $scope.testReport.redcolor16="red";
		  swal("oops!", 'The Measured Sound  value is not in reference range, please check', "error");
        }else{
            $scope.testReport.redcolor16="";
        }
		}
		
		
		
			$scope.validateSoundLevel7=function(soundlevel){
			
			  
		if(soundlevel>=80){
	
         $scope.testReport.redcolor17="red";
		     swal("oops!", 'The Measured Sound  value is not in reference range, please check', "error");
        }else{
            $scope.testReport.redcolor17="";
        }
		}
		
		
			$scope.validateSoundLevel8=function(soundlevel){
			
			  
		if(soundlevel>=80){
	
         $scope.testReport.redcolor18="red";
		    swal("oops!", 'The Measured Sound  value is not in reference range, please check', "error");
        }else{
            $scope.testReport.redcolor18="";
        }
		}
		
			$scope.validateSoundLevel9=function(soundlevel){
			
			  
		if(soundlevel>=80){
	
         $scope.testReport.redcolor19="red";
		 swal("oops!", 'The Measured Sound  value is not in reference range, please check', "error");
        }else{
            $scope.testReport.redcolor19="";
        }
		}
		
		
		
			$scope.validateSoundLevel10=function(soundlevel){
			
			  
		if(soundlevel>=80){
	
         $scope.testReport.redcolor20="red";
		 swal("oops!", 'The Measured Sound  value is not in reference range, please check', "error");
        }else{
            $scope.testReport.redcolor20="";
        }
		}
			
			  $scope.displayTime = function(id) { //$('.time').bootstrapMaterialDatePicker({ date: false, shortTime: true, format: 'HH:mm:00' });
            $('.time').timepicker({
                'scrollDefault': 'now',
                format: 'HH:mm:ss'
            });

        };
		
		$scope.calculateOutputRPM1=function(frequency,modelno,measuredOpSpeed1){
			
			if(measuredOpSpeed1==undefined || measuredOpSpeed1.length==0){
		
			}else{
					if(frequency==0){
				
				var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getRatioFromOutputRPM.do",
                data: modelno,
            }).success(function(data, status) {
			//alert(JSON.stringify(data));
			var result=1500/data;
						var ptr1  = Math.round(result*100)/100;
			ptr  = ptr1.toFixed(2);
			var referncevariable=(((ptr-measuredOpSpeed1)/ptr)*100);
			//alert(parseInt(referncevariable));
			if(parseInt(referncevariable)<=10 && parseInt(referncevariable)>=-10 ){
					//alert("greater1");//hide
				
				}else{
					 swal("oops!", 'The Measured RPM  value is not in reference range, please check', "error");
				
					}

	
		})
				}else if(frequency==1){
					var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getRatioFromOutputRPM.do",
                data:modelno,
            }).success(function(data, status) {
			//alert(JSON.stringify(data));
				var result=1800/data;
				var ptr1  = Math.round(result*100)/100;
			ptr  = ptr1.toFixed(2);
			var referncevariable=(((ptr-measuredOpSpeed1)/ptr)*100);
			//alert(parseInt(referncevariable));
			if(parseInt(referncevariable)<=10 && parseInt(referncevariable)>=-10 ){
					//alert("greater1");//hide
				
				}else{
					 swal("oops!", 'The Measured RPM  value is not in reference range, please check', "error");
				
					}
			//alert("referancevalue"+result);
		})
					
					}
			}
			
			}
			
			$scope.calculateOutputRPM2=function(frequency,modelno,measuredOpSpeed2){
				
				
				if(measuredOpSpeed2==undefined || measuredOpSpeed2.length==0 ){
					
			
				}else{
					if(frequency==0){
				
				var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getRatioFromOutputRPM.do",
                data: modelno,
            }).success(function(data, status) {
				var result=1500/data;
				var ptr1  = Math.round(result*100)/100;
			ptr  = ptr1.toFixed(2);
			var referncevariable=(((ptr-measuredOpSpeed2)/ptr)*100);
			//alert(parseInt(referncevariable));
			if(parseInt(referncevariable)<=10 && parseInt(referncevariable)>=-10 ){
					//alert("greater1");//hide
				
				}else{
					 swal("oops!", 'The Measured RPM  value is not in reference range, please check', "error");
				
					}
			//alert(result);
	
		})
				}else if(frequency==1){
					var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getRatioFromOutputRPM.do",
                data:modelno,
            }).success(function(data, status) {
			var result=1800/data;
				var ptr1  = Math.round(result*100)/100;
			ptr  = ptr1.toFixed(2);
			var referncevariable=(((ptr-measuredOpSpeed2)/ptr)*100);
			//alert(parseInt(referncevariable));
			if(parseInt(referncevariable)<=10 && parseInt(referncevariable)>=-10 ){
					//alert("greater1");//hide
				
				}else{
					 swal("oops!", 'The Measured RPM  value is not in reference range, please check', "error");
				
					}
	
		})
					
					}
					
				}
			
			}
			
			$scope.calculateOutputRPM4=function(frequency,modelno,measuredOpSpeed4){
			if(measuredOpSpeed4==undefined || measuredOpSpeed4.length==0){
			
				}else{if(frequency==0){
				
				var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getRatioFromOutputRPM.do",
                data: modelno,
            }).success(function(data, status) {
			var result=1500/data;
				var ptr1  = Math.round(result*100)/100;
			ptr  = ptr1.toFixed(2);
			var referncevariable=(((ptr-measuredOpSpeed4)/ptr)*100);
			//alert(parseInt(referncevariable));
			if(parseInt(referncevariable)<=10 && parseInt(referncevariable)>=-10 ){
					//alert("greater1");//hide
				
				}else{
					 swal("oops!", 'The Measured RPM  value is not in reference range, please check', "error");
				
					}
	
		})
				}else if(frequency==1){
					var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getRatioFromOutputRPM.do",
                data:modelno,
            }).success(function(data, status) {
			var result=1800/data;
				var ptr1  = Math.round(result*100)/100;
			ptr  = ptr1.toFixed(2);
			var referncevariable=(((ptr-measuredOpSpeed4)/ptr)*100);
			//alert(parseInt(referncevariable));
			if(parseInt(referncevariable)<=10 && parseInt(referncevariable)>=-10 ){
					//alert("greater1");//hide
				
				}else{
					 swal("oops!", 'The Measured RPM  value is not in reference range, please check', "error");
				
					}
	
		})
					
					}
				}
			}
			
			$scope.calculateOutputRPM5=function(frequency,modelno,measuredOpSpeed5){
				if(measuredOpSpeed5==undefined || measuredOpSpeed5.length==0){
			
					
				}else {
					if(frequency==0){
				
				var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getRatioFromOutputRPM.do",
                data: modelno,
            }).success(function(data, status) {
			var result=1500/data;
				var ptr1  = Math.round(result*100)/100;
			ptr  = ptr1.toFixed(2);
			var referncevariable=(((ptr-measuredOpSpeed5)/ptr)*100);
			//alert(parseInt(referncevariable));
			if(parseInt(referncevariable)<=10 && parseInt(referncevariable)>=-10 ){
					//alert("greater1");//hide
				
				}else{
					 swal("oops!", 'The Measured RPM  value is not in reference range, please check', "error");
				
					}
	
		})
				}else if(frequency==1){
					var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getRatioFromOutputRPM.do",
                data:modelno,
            }).success(function(data, status) {
			var result=1800/data;
				var ptr1  = Math.round(result*100)/100;
			ptr  = ptr1.toFixed(2);
			var referncevariable=(((ptr-measuredOpSpeed5)/ptr)*100);
			//alert(parseInt(referncevariable));
			if(parseInt(referncevariable)<=10 && parseInt(referncevariable)>=-10 ){
					//alert("greater1");//hide
				
				}else{
					 swal("oops!", 'The Measured RPM  value is not in reference range, please check', "error");
				
					}
	
		})
					
					}
					
				}
			}
			
			
			$scope.calculateOutputRPM3=function(frequency,modelno,measuredOpSpeed3){
						if(measuredOpSpeed3==undefined || measuredOpSpeed3.length==0){
			
					}else{if(frequency==0){
				
				var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getRatioFromOutputRPM.do",
                data: modelno,
            }).success(function(data, status) {
			var result=1500/data;
				var ptr1  = Math.round(result*100)/100;
			ptr  = ptr1.toFixed(2);
			var referncevariable=(((ptr-measuredOpSpeed3)/ptr)*100);
			//alert(parseInt(referncevariable));
			if(parseInt(referncevariable)<=10 && parseInt(referncevariable)>=-10 ){
					//alert("greater1");//hide
				
				}else{
					 swal("oops!", 'The Measured RPM  value is not in reference range, please check', "error");
				
					}
	
		})
				}else if(frequency==1){
					var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getRatioFromOutputRPM.do",
                data:modelno,
            }).success(function(data, status) {
			var result=1800/data;
				var ptr1  = Math.round(result*100)/100;
			ptr  = ptr1.toFixed(2);
			var referncevariable=(((ptr-measuredOpSpeed3)/ptr)*100);
			//alert(parseInt(referncevariable));
			if(parseInt(referncevariable)<=10 && parseInt(referncevariable)>=-10 ){
					//alert("greater1");//hide
				
				}else{
					 swal("oops!", 'The Measured RPM  value is not in reference range, please check', "error");
				
					}
	
		})
					
					}}
			}
			
			
			$scope.calculateAmpere1=function(frequency,voltage,model,phase,measuredAmpere1){
				if(phase==1){
					if(frequency==0){
				var ampereObject=new Object();
					ampereObject.frequency="50HZ";
					ampereObject.voltage=voltage;
					ampereObject.modelno=model;
				}else if(frequency==1){
					var ampereObject=new Object();
					ampereObject.frequency="60HZ";
					ampereObject.voltage=voltage;
					ampereObject.modelno=model;
					
					}
					
					//alert(JSON.stringify(ampereObject));
					 var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getHorsePower.do",
                data: JSON.stringify(ampereObject),
            }).success(function(data, status) {
			//alert("ReferalValue"+JSON.stringify(data));
			
			var referncevariable=(((data-measuredAmpere1)/data)*100);
			//alert(parseInt(referncevariable));
			if(parseInt(referncevariable)<=10 && parseInt(referncevariable)>=-10 ){
					//alert("greater1");//hide
				
				}else{
					 swal("oops!", 'The Measured Ampere value is not in reference range, please check', "error");
				
					}
		})
					
					
					}
				
			}
			
			$scope.calculateAmpere2=function(frequency,voltage,model,phase,measuredAmpere1){
				if(phase==1){
					if(frequency==0){
				var ampereObject=new Object();
					ampereObject.frequency="50HZ";
					ampereObject.voltage=voltage;
					ampereObject.modelno=model;
				}else if(frequency==1){
					var ampereObject=new Object();
					ampereObject.frequency="60HZ";
					ampereObject.voltage=voltage;
					ampereObject.modelno=model;
					
					}
					
					//alert(JSON.stringify(ampereObject));
					 var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getHorsePower.do",
                data: JSON.stringify(ampereObject),
            }).success(function(data, status) {
			//alert("ReferalValue"+JSON.stringify(data));
			
			var referncevariable=(((data-measuredAmpere1)/data)*100);
			//alert(parseInt(referncevariable));
			if(parseInt(referncevariable)<=10 && parseInt(referncevariable)>=-10 ){
					//alert("greater1");//hide
				
				}else{
					 swal("oops!", 'The Measured Ampere value is not in reference range, please check', "error");
				
					}
		})
					
					
					}
				
			}
			
			$scope.calculateAmpere3=function(frequency,voltage,model,phase,measuredAmpere1){
				if(phase==1){
					if(frequency==0){
				var ampereObject=new Object();
					ampereObject.frequency="50HZ";
					ampereObject.voltage=voltage;
					ampereObject.modelno=model;
				}else if(frequency==1){
					var ampereObject=new Object();
					ampereObject.frequency="60HZ";
					ampereObject.voltage=voltage;
					ampereObject.modelno=model;
					
					}
					
					//alert(JSON.stringify(ampereObject));
					 var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getHorsePower.do",
                data: JSON.stringify(ampereObject),
            }).success(function(data, status) {
			//alert("ReferalValue"+JSON.stringify(data));
			
			var referncevariable=(((data-measuredAmpere1)/data)*100);
			//alert(parseInt(referncevariable));
			if(parseInt(referncevariable)<=10 && parseInt(referncevariable)>=-10 ){
					//alert("greater1");//hide
				
				}else{
				 swal("oops!", 'The Measured Ampere value is not in reference range, please check', "error");
				
					}
		})
					
					
					}
				
			}
			
			$scope.calculateAmpere4=function(frequency,voltage,model,phase,measuredAmpere1){
				if(phase==1){
					if(frequency==0){
				var ampereObject=new Object();
					ampereObject.frequency="50HZ";
					ampereObject.voltage=voltage;
					ampereObject.modelno=model;
				}else if(frequency==1){
					var ampereObject=new Object();
					ampereObject.frequency="60HZ";
					ampereObject.voltage=voltage;
					ampereObject.modelno=model;
					
					}
					
					//alert(JSON.stringify(ampereObject));
					 var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getHorsePower.do",
                data: JSON.stringify(ampereObject),
            }).success(function(data, status) {
			//alert("ReferalValue"+JSON.stringify(data));
			
			var referncevariable=(((data-measuredAmpere1)/data)*100);
			//alert(parseInt(referncevariable));
			if(parseInt(referncevariable)<=10 && parseInt(referncevariable)>=-10 ){
					//alert("greater1");//hide
				
				}else{
					 swal("oops!", 'The Measured Ampere value is not in reference range, please check', "error");
				
					}
		})
					
					
					}
				
			}
			
			$scope.calculateAmpere5=function(frequency,voltage,model,phase,measuredAmpere1){
				if(phase==1){
					if(frequency==0){
				var ampereObject=new Object();
					ampereObject.frequency="50HZ";
					ampereObject.voltage=voltage;
					ampereObject.modelno=model;
				}else if(frequency==1){
					var ampereObject=new Object();
					ampereObject.frequency="60HZ";
					ampereObject.voltage=voltage;
					ampereObject.modelno=model;
					
					}
					
					//alert(JSON.stringify(ampereObject));
					 var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getHorsePower.do",
                data: JSON.stringify(ampereObject),
            }).success(function(data, status) {
			//alert("ReferalValue"+JSON.stringify(data));
			
			var referncevariable=(((data-measuredAmpere1)/data)*100);
			//alert(parseInt(referncevariable));
			if(parseInt(referncevariable)<=10 && parseInt(referncevariable)>=-10 ){
					//alert("greater1");//hide
				
				}else{
					 swal("oops!", 'The Measured Ampere value is not in reference range, please check', "error");
				
					}
		})
					
					
					}
				
			}
			
			
			$scope.getvalidate=function(measuredGearHeadWeight1,measuredFinalWeight1){
			if(measuredFinalWeight1==undefined || measuredGearHeadWeight1.length==0|| measuredFinalWeight1.length==0){}else{
				if(parseInt(measuredFinalWeight1)>=parseInt(measuredGearHeadWeight1)){
					$('#invaliddata').hide();
					
					}else{
						$('#invaliddata').show();
						
						}
				
			}
				
				}
				
				$scope.getvalidate2=function(measuredGearHeadWeight1,measuredFinalWeight1){
				if(measuredFinalWeight1==undefined || measuredGearHeadWeight1.length==0|| measuredFinalWeight1.length==0){}else{
				if(parseInt(measuredFinalWeight1)>=parseInt(measuredGearHeadWeight1)){
					$('#invaliddata1').hide();
					
					}else{
						$('#invaliddata1').show();
						
						}
				
				}
				
				}
				
				
				$scope.getvalidate3=function(measuredGearHeadWeight1,measuredFinalWeight1){
					if(measuredFinalWeight1==undefined || measuredGearHeadWeight1.length==0|| measuredFinalWeight1.length==0){}else{
				
				if(parseInt(measuredFinalWeight1)>=parseInt(measuredGearHeadWeight1)){
					$('#invaliddata2').hide();
					
					}else{
						$('#invaliddata2').show();
						
						}
				
					}
				
				}
				
				
				$scope.getvalidate4=function(measuredGearHeadWeight1,measuredFinalWeight1){
				if(measuredFinalWeight1==undefined || measuredGearHeadWeight1.length==0|| measuredFinalWeight1.length==0){}else{
				if(parseInt(measuredFinalWeight1)>=parseInt(measuredGearHeadWeight1)){
					$('#invaliddata3').hide();
					
					}else{
						$('#invaliddata3').show();
						
						}
				
				}
				
				}
				
				
				$scope.getvalidate5=function(measuredGearHeadWeight1,measuredFinalWeight1){
					if(measuredFinalWeight1==undefined || measuredGearHeadWeight1.length==0|| measuredFinalWeight1.length==0){}else{
				
				if(parseInt(measuredFinalWeight1)>=parseInt(measuredGearHeadWeight1)){
					$('#invaliddata4').hide();
					
					}else{
						$('#invaliddata4').show();
						
						}
				
					}
				
				}


    });

//===============================
/* Service Inquery*/
//===============================
angular.module('app')
    .controller('serviceInquiryController', function($scope, $http,$rootScope,$state) {
		
		        $scope.master = {};

													 
			 
		
		
		$scope.getCustomerStatus=function(customer){
			
               
			//	alert(jsonquotationString);
                var httpRequest = $http({
                    method: 'POST',
                    url: "/SCA-360/getCustomerDetails.do",
                    data: customer,
                }).success(function(data, status) {
					//alert(JSON.stringify(data.customerCode));
					$scope.serviceInq.customerCode=data.customerCode
					$scope.serviceInq.address=data.address
					$scope.serviceInq.telephoneno=data.contactno
					$scope.serviceInq.contactno=data.telephoneno
				
					// $scope.serviceInq.customerStatus=data[0].customerStatus;
			
					
				})
			
		}
		
		 $scope.ShowDatePicker = function() {

            $(".datepicker").datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: 'dd-mm-yy',
                beforeShow: function() {
                    setTimeout(function() {
                        $('.ui-datepicker').css({
                            'z-index': 999999,
                            'width': '20%'
                        });
                    }, 0);
                }
            });
        };

        $scope.$applyAsync(function() {
            $(".datepicker").datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: 'dd-mm-yy',
                beforeShow: function() {
                    setTimeout(function() {
                        $('.ui-datepicker').css({
                            'z-index': 999999,
                            'width': '20%'
                        });
                    }, 0);
                }
            });

        })
		
		$scope.getReferenceNumber = function() {
			
            var refernceNumber = 'S';
            //alert(refernceNumber);
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getSequenceNumber.do",
                data: refernceNumber,
            }).success(function(data, status) {
                
                $scope.serviceInq.caseReferenceno = data.sequence;
               
            })

        }
		
		  $scope.loadcustomerStatus = function() {
				 var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getServerDate.do",
                data: {},
            }).success(function(data, status) {
				
				var serverDate=data.serverdate;
				
				$scope.serviceInq = ({
            'serviceLocation': '0',
            'attachDrawing': '0',
			'inquiryDate':serverDate,
			'modifyFlag':'false'
        })
				
			})
			
			$scope.customerStatus = [{ custid: '1', customerStatus: '---Status---' },{ custid: '2', customerStatus: 'Active' }, { custid: '3', customerStatus: 'Prospect' },{ custid: '4', customerStatus: 'Qualified' },{ custid: '5', customerStatus: 'Inactive or on Hold' }];
			
			
			
			
			
			
			  };
			
		
        $scope.loadCustomer = function() {

            $.getJSON("getAllCustmerNames.do", function(json) {

                $scope.customernames = json['data'];




            })
        };
													 

        
        ////image////
        $scope.stepsModel = [];

        $scope.imageUpload = function(event) {
            var files = event.target.files; //FileList object

            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                var reader = new FileReader();
                reader.onload = $scope.imageIsLoaded;
                reader.readAsDataURL(file);
            }
        }

        $scope.imageIsLoaded = function(e) {
            $scope.$apply(function() {
                var imagelocation = e.target.result;
                var base64result = imagelocation.split(',')[1];

                $scope.stepsModel.push(base64result);
                //alert($scope.stepsModel.length);
            });
        }
        $scope.getimage = function(step) {
            for (var i = 0; i < $scope.stepsModel.length; i++) {

                if ($scope.stepsModel[i] === step) {

                    $scope.stepsModel.splice(i, 1);

                    break;
                }
            }

        };
        //////
        var ServiceInqAddObj = new Object();
        var ServiceInqAddObj1 = new Object();

        var cusImage = new FormData();
        
        var ServiceInquiryData = [];
        var ServiceInquiryimage = [];
        $scope.submitServiceinq = function(value, form) {
		 if ($scope.serviceInquiryForm.$valid) {
            $scope.stepsModel.forEach(function(step) {

                ServiceInquiryimage.push(angular.toJson(step));

            });

            $scope.serviceinquiryField.forEach(function(serviceinquiry) {

                ServiceInquiryData.push(angular.toJson(serviceinquiry));

            });
            ServiceInqAddObj = value;
            ServiceInqAddObj1 = ServiceInquiryData;

            cusImage.append("formData", angular.toJson(ServiceInqAddObj));
            cusImage.append("gridData", angular.toJson(ServiceInquiryData));
            cusImage.append("gridImage", ServiceInquiryimage);

// alert(angular.toJson(ServiceInqAddObj));

            $.ajax({
                url: '/SCA-360/saveServiceInquiry.do',
                data: cusImage,
                contentType: false,
                processData: false,

                type: 'POST'
            }).success(function(data,status){
				if(data==true){
				swal('Saved Successfully');
				
				$state.go('app.serviceInquires');
					
					}else{
						 swal("Oops sorry...", "Something went wrong!", "error");
						}
				
				
				});
			
			
 } else {

                var field = null,
                    firstError = null;
                for (field in form) {
                    if (field[0] != '$') {
                        if (firstError === null && !form[field].$valid) {
                            firstError = form[field].$name;
                        }
                        if (form[field].$pristine) {
                            form[field].$dirty = true;
                        }
                    }
                }
            }
        };
		
		
		
		
		
		
		
        $scope.getcasereafernce = function() {
			var value=$rootScope.CasseRefernceNo;
			$scope.disabled=$rootScope.disabled ;

            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getAllServiceInquiry.do",
                data: value,
            }).success(function(data, status) {

							//alert(JSON.stringify());
                $scope.serviceInq = data.serviceInquiry
				$scope.serviceInq.modifyFlag='true';
				$scope.serviceinquiryField=data.serviceInquiryDtls
                //var image=data.serviceInquiry.photoLocation.split("-");
				if(data.serviceInquiry.imageData==""){}else{
                $scope.stepsModel = data.serviceInquiry.imageData.split(",");
				}
				$rootScope.CasseRefernceNo="";
				$rootScope.disabled="false";
                //for(var i=0;i<=image.length;i++){
                //	alert(image[i]);
                //	}
            })
        };

        $scope.getAccessories = function() {

            $scope.availableCode = [{
                id: 'A00',
                desp: 'Coupling'
            }, {
                id: 'A01',
                desp: 'Base Plate'
            }, {
                id: 'A02',
                desp: 'Brake System'
            }, {
                id: 'A10',
                desp: 'Shrink Disc'
            }, {
                id: 'A11',
                desp: 'Pulley'
            }, {
                id: 'A12',
                desp: 'Sprocket'
            }, {
                id: 'A13',
                desp: 'Backstop'
            }];

        };
        $scope.getApplicatiosData = function() {
            $.getJSON("getAllApplications.do", function(json) {

                $scope.applicationData = json['data'];
                $scope.$apply();
            });
			
        }

        $scope.getStatus = function() {
            //alert("status");
        }
        $scope.serviceinquiryField = [];

        $index = 0;
        $scope.addinquiryForm = function() {

            $index++;
            $scope.serviceinquiryField.push({
                'id': $index,
				'serviceInquiryFor':'0',
				'isSelectedModel':'0',
				'brake':'0',
				'isModelUnkonown':'0',
				'brakeVoltage':'0',
				'rotationDirection':'0'
            })

        };
        $scope.removeserviceinquiry = function(name) {
            // alert(name);
            var Index = -1;
            var comArr = eval($scope.serviceinquiryField);
            for (var i = 0; i < comArr.length; i++) {
                if (comArr[i].id === name) {
                    Index = i;
                    break;
                }
            }
            $scope.serviceinquiryField.splice(Index, 1);
            $Index = comArr.length;
            for (var s = 0; s < $Index; s++) {
                $scope.serviceinquiryField[s].id = Number(s) + Number(1);
                $index = $scope.serviceinquiryField[s].id
            }
        };
		
		 $scope.reset = function(form) {
            $scope.serviceInq = angular.copy($scope.master);
			$index=1;
             $scope.serviceinquiryField = [{
                        'id': $index
                    }];
            form.$setPristine(true);
          
					
					
					$scope.stepsModel=[];
  					$scope.getApplicatiosData();
				$scope.loadCustomer();
 			$scope.loadcustomerStatus();
			$scope.getReferenceNumber();
            $scope.serviceInq = "";
        };

    });
//===============================
angular.module('app')
    .controller('serviceInquiriesController', function($scope, $http, $rootScope) {
										$index=1;			   
							$scope.LoadData=function(){
								 $scope.serviceInqsData = [{
                        'id': $index
                    }];
								
								
								
								}						   
													   
		 $scope.loadCustomer = function() {

            $.getJSON("getAllCustmerNames.do", function(json) {

                $scope.customernames = json['data'];




            })
        };
												
				$scope.getCustomerDetails=function(customer){
					 var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadServiceInquiry.do",
                data:customer,
            }).success(function(data, status) {
				if(data.serviceInquiry.length==0){
					swal('Data Not Found');
					$index=1;
					//$("#showtable").hide();
					 $scope.serviceInqsData = [{
                        'id': $index
                    }];
				$scope.hideglyp="false";
				}else{
				$scope.serviceInqsData=data.serviceInquiry;
				$scope.hideglyp="true";
				//$("#showtable").show();
				}
			})
				}
				
				
				$scope.EditServices=function(caseReferenceno){
					
					 $scope.disabled = 'false';
					$rootScope.CasseRefernceNo=caseReferenceno;
					}
					
					$scope.viewServices=function(caseReferenceno){
					
					
					$rootScope.CasseRefernceNo=caseReferenceno;
					 $rootScope.disabled = 'true';
					}
												
		});

//===============================
/* QA Service */
//===============================
angular.module('app')
    .controller('QAServiceController', function($scope, $http, $rootScope) {



        //ONLOAD 
        $scope.OnLoadQA = function() {
			$('#showtable').hide();
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getServerDate.do",
                data: {},
            }).success(function(data, status) {

                $scope.qaIssue = ({
                    qualityAssurance: 0
                })
                $scope.loadCustomerNames();


            });

        };
		     $scope.ShowDatePicker = function() {

            $(".datepicker").datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: 'dd-mm-yy',
                beforeShow: function() {
                    setTimeout(function() {
                        $('.ui-datepicker').css({
                            'z-index': 999999,
                            'width': '20%'
                        });
                    }, 0);
                }
            });
        };

        $scope.$applyAsync(function() {
            $(".datepicker").datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: 'dd-mm-yy',
                beforeShow: function() {
                    setTimeout(function() {
                        $('.ui-datepicker').css({
                            'z-index': 999999,
                            'width': '20%'
                        });
                    }, 0);
                }
            });

        })

        $scope.loadCustomerName = function(customerName) {


            $.getJSON("getAllAccountNames.do", function(json) {
                $scope.names = json['data'];
                //alert(JSON.stringify($scope.names));
            })
        };
        $scope.loadCustomerNames = function() {


            $.getJSON("getAllAccountNames.do", function(json) {
                $scope.names = json['data'];
                //alert(JSON.stringify($scope.names));
            })
        };
        ////

        $scope.getCaseDetails = function(caseReferenceNumber) {
            // alert(caseReferenceNumber);
            var caseReferenceNumber = caseReferenceNumber
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getAllQAIssue.do",
                data: caseReferenceNumber,

            }).success(function(data, status) {


                //alert(JSON.stringify(data));
                $scope.qaIssue = data;

                $scope.fruitSelection = data.qaIssuesFor
                $scope.fruitSelection1 = data.actionRequired

            })
        };


        //ON GET EXT
        $scope.getExtIssues = function(caseReferenceNumber) {
            // alert(caseReferenceNumber);
            var caseReferenceNumber = caseReferenceNumber
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getAllQAIssue.do",
                data: caseReferenceNumber,
            }).success(function(data, status) {
                //	alert(JSON.stringify(data));


                $scope.QAService = data;
                $scope.fruitSelection3 = data.qaIssuesFor
                $scope.fruitSelection4 = data.actionRequired

            })
        };


		var qaissueObj=new Object();
        $scope.GetQA = function(fromdate,todate,radio,form) {
			 if ($scope.qaServiceForm.$valid) {
			if(todate!=undefined){
           qaissueObj.fromdate=fromdate;
		      qaissueObj.todate=todate;
			     
		   
           
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadQAIssues.do",
                data: JSON.stringify(qaissueObj),
            }).success(function(data, status) {
				//alert(JSON.stringify(data));
				if(data.length==0){
					
					$index=1;
					swal('Data Not Found');
					 $scope.qaissueDatas = [];
					 $scope.qaissueDatas = [{
                        'id': $index
                    }];
					}else{
               $('#showtable').show();
			   
                $scope.qaissueDatas = data.qaInt;
               // $scope.qaformDatas = data.qaExt;
				}
            })
			}
			} else {

                var field = null,
                    firstError = null;
                for (field in form) {
                    if (field[0] != '$') {
                        if (firstError === null && !form[field].$valid) {
                            firstError = form[field].$name;
                        }
                        if (form[field].$pristine) {
                            form[field].$dirty = true;
                        }
                    }
                }
            }
        };
        // $scope.IsVisible = false;
        $scope.ShowHide = function(caseReferenceNumber) {
            $rootScope.qaIntRef = caseReferenceNumber;
			$rootScope.disabled="false";
            //alert($rootScope.qaIntRef)
            /* var	caseReferenceNumber=caseReferenceNumber
			var httpRequest = $http({
					method: 'POST',
					url : "/SCA-360/getAllQAIssue.do",
				data: caseReferenceNumber,
   				}).success(function(data, status) 
				{
						$('#CaseReff').attr('disabled',true);
						//alert(JSON.stringify(data));
					$scope.qaIssue=data;
				
					 $scope.fruitSelection =data.qaIssuesFor
					$scope.fruitSelection1= data.actionRequired
					
					// $scope.IsVisible = $scope.IsVisible ? false : true;
				
				})
                //If DIV is visible it will be hidden and vice versa.*/

        }

        // $scope.isEnable = false;
        $scope.ShowqaEXT = function(caseReferenceNumber) {
            $rootScope.qaextRef = caseReferenceNumber;
            //alert($rootScope.qaextRef)

            /* var	caseReferenceNumber1=caseReferenceNumber
			var httpRequest = $http({
					method: 'POST',
					url : "/SCA-360/getAllQAIssue.do",
				data: caseReferenceNumber1,
   				}).success(function(data, status) 
				{
						$('#caseReferenceNumber').attr('disabled',true);	
					//alert(JSON.stringify(data));
					$scope.QAService=data;
					$scope.fruitSelection3=data.qaIssuesFor
					$scope.fruitSelection4= data.actionRequired
					
					 $scope.isEnable = $scope.isEnable ? false : true;*/


            //If DIV is visible it will be hidden and vice versa.

        }

        $scope.IsVisible = false;
        $scope.ShowHide1 = function() {


            $scope.IsVisible = $scope.IsVisible ? false : true;


            //If DIV is visible it will be hidden and vice versa.

        }

        $scope.isEnable = false;
        $scope.ShowqaEXT1 = function() {

            $scope.isEnable = $scope.isEnable ? false : true;


            //If DIV is visible it will be hidden and vice versa.

        }
		
		
		
		$scope.viewServices=function(caseReferenceNumber){
					
					
					   $rootScope.qaIntRef = caseReferenceNumber;
					 $rootScope.disabled = 'true';
					}




    });
///=========================================
/* QAINT*/
//////===========================================

angular.module('app')
    .controller('QAServiceINTController', function($scope, $http, $rootScope, $state, $route) {
										   
        var Modeifyimageflag = false;
		
		$scope.master={};

        $scope.qaIssuesFor1 = [{
            "text": "Manufacturing Defect",
            "id": "0"
        }, {
            "text": "Missing part ",
            "id": "1"
        }, {
            "text": "Part damaged during transportation",
            "id": "2"
        }, {
            "text": "Part Shortage",
            "id": "3"
        }, {
            "text": "Wrong items received",
            "id": "4"
        },{
            "text": "LSeakage",
            "id": "5"
        }, {
            "text": "Noise",
            "id": "6"
        }, {
            "text": "Vibration",
            "id": "7"
        }];
        $scope.actionRequired1 = [{
            "text": "Feedback to factory",
            "id": "0"
        }, {
            "text": "Claim for replacement",
            "id": "1"
        }, {
            "text": "Feed back to OP for inventory update",
            "id": "2"
        }, {
            "text": "Feed back to engineering",
            "id": "3"
        }];
		
		
		       $scope.ShowDatePicker = function() {

            $(".datepicker").datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: 'dd-mm-yy',
                beforeShow: function() {
                    setTimeout(function() {
                        $('.ui-datepicker').css({
                            'z-index': 999999,
                            'width': '20%'
                        });
                    }, 0);
                }
            });
        };

        $scope.$applyAsync(function() {
            $(".datepicker").datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: 'dd-mm-yy',
                beforeShow: function() {
                    setTimeout(function() {
                        $('.ui-datepicker').css({
                            'z-index': 999999,
                            'width': '20%'
                        });
                    }, 0);
                }
            });

        })
		
		
		
		$scope.qaissues=[];
        $index = 0;
        $scope.addqaintForm = function() {
		

            $index++;
            $scope.qaissues.push({
                'id': $index
            })

        };
		
		 $scope.removeFormRow = function(name) {
            // alert(name);
            var IndexTab1 = -1;
            var comArrTab1 = eval($scope.qaissues);
			
            for (var i = 0; i < comArrTab1.length; i++) {
                if (comArrTab1[i].id === name) {
                    IndexTab1 = i;
                    break;
                }
            }
            $scope.qaissues.splice(IndexTab1, 1);
            $indexTab1 = comArrTab1.length;
            for (var s = 0; s < $indexTab1; s++) {
                $scope.qaissues[s].id = Number(s) + Number(1);
				
            }
			
        };
		
		
		
		 $scope.stepsModel = [];

        $scope.imageUpload = function(event) {
            var files = event.target.files; //FileList object

            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                var reader = new FileReader();
                reader.onload = $scope.imageIsLoaded;
                reader.readAsDataURL(file);
            }
        }

        $scope.imageIsLoaded = function(e) {
            $scope.$apply(function() {
                var imagelocation = e.target.result;
                var base64result = imagelocation.split(',')[1];

                $scope.stepsModel.push(base64result);
                //alert($scope.stepsModel.length);
            });
        }
        $scope.getimage = function(step) {
            for (var i = 0; i < $scope.stepsModel.length; i++) {

                if ($scope.stepsModel[i] === step) {

                    $scope.stepsModel.splice(i, 1);

                    break;
                }
            }

        };
		
        $scope.LoadQaIntRef = function() {
            var caseReferenceNumber = $rootScope.qaIntRef
			$scope.disabled=$rootScope.disabled ;

            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getAllQAIssue.do",
                data: caseReferenceNumber,
            }).success(function(data, status) {
               //alert(JSON.stringify(data.qaissue.actionRequired));
			$scope.qaIssue = data.qaissue
			
                    $scope.fruitSelection = data.qaissue.qaIssuesFor
                    $scope.fruitSelection1 = data.qaissue.actionRequired

				$scope.qaIssue.modifyFlag='true';
				$scope.qaissues=data.qaissuedtls
                //var image=data.serviceInquiry.photoLocation.split("-");
				if(data.qaissue.imageData==""){}else{
                $scope.stepsModel = data.qaissue.imageData.split(",");
				}
				
           $('#caseReferenceNumber').attr('disabled', true);
                    $rootScope.qaIntRef = "";
					
				$rootScope.disabled="false";
                    //alert(JSON.stringify(data));
                    


                

                // $scope.IsVisible = $scope.IsVisible ? false : true;

            })

        };
        $scope.getReferenceNumber = function() {
            var refernceNumber = 'A';
            //alert(refernceNumber);
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getSequenceNumber.do",
                data: refernceNumber,
            }).success(function(data, status) {
                //alert(JSON.stringify(data));
                $scope.qaIssue.caseReferenceNumber = data.sequence;
                $('#caseReferenceNumber').attr('disabled', true);
            })

        }

        var intCaseRef = new Object();
        intCaseRef.tablename = "com.finsol.model.QAIssue";
        intCaseRef.columnname = "casereferenceno";
        $scope.DupintRef = function(values) {
            intCaseRef.value = values;
            var jsonObj = JSON.stringify(intCaseRef);

            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/checkValue.do",
                data: jsonObj,
            }).success(function(data, status) {

                if (data == true) {


                    $("#existValINT").show();
                } else {
                    $("#existValINT").hide();
                }

            });
        };

        $scope.OnLoadQA = function() {
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getServerDate.do",
                data: {},
            }).success(function(data, status) {

                $scope.qaIssue = ({
                   
                    'attachDrawing': '0',
                    'scaDate': data.serverdate,
                    'modifyFlag': 'false'
                })


            });

        };

        $scope.loadCustomerName = function(customerName) {


            $.getJSON("getAllAccountNames.do", function(json) {
                $scope.names = json['data'];
                //alert(JSON.stringify($scope.names));
            })
        };
        var cusImage = new FormData();
        var Formobj = new Object();
        $scope.fruitSelection = [];
        $scope.testId = function(id) {

            var idx = $scope.fruitSelection.indexOf(id);

            if (idx > -1) {
                $scope.fruitSelection.splice(idx, 1);
            } else {
                $scope.fruitSelection.push(id);
            }
            /*$scope.qaIssue.qaIssuesFor=id;
            checkArray.push($scope.qaIssue.qaIssuesFor);*/


        };
        $scope.fruitSelection1 = [];
        $scope.testId2 = function(id) {
            /*$scope.qaIssue.actionRequired=id;
            checkArray2.push($scope.qaIssue.actionRequired);*/
            var idx = $scope.fruitSelection1.indexOf(id);

            if (idx > -1) {
                $scope.fruitSelection1.splice(idx, 1);
            } else {
                $scope.fruitSelection1.push(id);
            }

        };





  
        var QainquiryData = [];
        var QAintimage = [];
        $scope.QualIntSubmit = function(form, QuaIssue) {
			
		
            if ($scope.QAINTForm.$valid) {
	
                $scope.qaIssue.hiddenvalue = $scope.fruitSelection;
                $scope.qaIssue.actionRequired = $scope.fruitSelection1

                $scope.qaIssue.qaIssuesFor = $scope.qaIssue.hiddenvalue;
                delete $scope.qaIssue['hiddenvalue'];
				

                if ($scope.qaIssue.modifyFlag == null) {
                    $scope.qaIssue.modifyFlag = true;

                }
            
             
                Formobj = $scope.qaIssue;
               
     		
            $scope.stepsModel.forEach(function(step) {

					QAintimage.push(angular.toJson(step));

            });

            $scope.qaissues.forEach(function(qaint) {

                QainquiryData.push(angular.toJson(qaint));

            });
           

            cusImage.append("formData", angular.toJson(Formobj));
            cusImage.append("gridData", angular.toJson(QainquiryData));
            cusImage.append("gridImage", QAintimage);

//alert(JSON.stringify(QainquiryData));

            $.ajax({
                url: '/SCA-360/saveQAIssue.do',
                data: cusImage,
                contentType: false,
                processData: false,

                type: 'POST'
            }).success(function(data,status){
				if(data==true){
				
                    swal('Saved Successfully');
                    $state.go('app.qaService');
				  
				}
                    //	 $scope.IsVisible = $scope.IsVisible ? true : false;

                });
			
            } else {

                var field = null,
                    firstError = null;
                for (field in form) {
                    if (field[0] != '$') {
                        if (firstError === null && !form[field].$valid) {
                            firstError = form[field].$name;
                        }
                        if (form[field].$pristine) {
                            form[field].$dirty = true;
                        }
                    }
                }
            }

        };
        $scope.uploadUserFile1 = function(files) {
            Modeifyimageflag = true;
            //alert(files);
            $scope.dummyPhoto = "1";
            //$('#dummyPhoto').trigger('blur');
          //  cusImage.delete("userdrawing");
            cusImage.append("userdrawing", files[0]);
            //alert(cusImage);
            $scope.$apply();

        };


        $scope.LoadStatusSelect = function() {
            $scope.LoadStatus = [{
                id: 1,
                label: "Active"
            }, {
                id: 2,
                label: "InActive"
            }];
            $scope.customerStatusdata = $scope.LoadStatus

        };
		
		
		$scope.removefunction=function(path){
			$scope.qaIssue.photoPath="";
			}
			
			
			 $scope.reset = function(form) {
            $scope.qaIssue = angular.copy($scope.master);
			$index=1;
             $scope.qaissues = [{
                        'id': $index
                    }];
            form.$setPristine(true);
          $scope.fruitSelection = [];
                    $scope.fruitSelection1 = [];
					$scope.getReferenceNumber();
					$scope.OnLoadQA();
					$scope.stepsModel=[];
  					$scope.loadCustomerName();
 					$scope.LoadStatusSelect();
            $scope.qaIssue = "";
        };
		

    });

///=========================================
/* QAEXT*/
//////===========================================

angular.module('app')
    .controller('QAServiceEXTController', function($scope, $http, $rootScope, $state) {
        var Modeifyimageflag = false;


        $scope.LoadQaExtRef = function() {
            var caseReferenceNumber = $rootScope.qaextRef
            //alert(caseReferenceNumber);
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getAllQAIssue.do",
                data: caseReferenceNumber,
            }).success(function(data, status) {


                if (data.photoPath != null && data.photoPath != null) {

                    var img = $('<img src="' + data.photoPath + '" width="200" height="150"/>', {
                        id: 'dynamic',
                        width: 200,
                        height: 150
                    });


                    var photoName = data.photoPath.split("/");



                    $("#photo").attr("data-content", $(img)[0].outerHTML).popover("show");
                    $("#1photoinput").text("Change");
                    $("#2photoinput").show();
                    $("#3photoinput").val(photoName[1]);

                    $scope.dummyPhoto = "1";
                    $('#dummyPhoto').trigger('blur');

                    $('#caseReferenceNumber1').attr('disabled', true);
                    $rootScope.qaextRef = "";
                    //alert(JSON.stringify(data));
                    $scope.QAService = data;
                    $scope.fruitSelection3 = data.qaIssuesFor
                    $scope.fruitSelection4 = data.actionRequired


                } else {
                    $('.image-preview').popover('hide');
                    $("#1photoinput").text("Upload Photo");


                    $("#3photoinput").val("");

                    $("#2photoinput").hide();

                }


                // $scope.IsVisible = $scope.IsVisible ? false : true;

            })

        };

        $scope.getReferenceNumber = function() {
            var refernceNumber = 'C';
            //alert(refernceNumber);
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getSequenceNumber.do",
                data: refernceNumber,
            }).success(function(data, status) {
                //alert(JSON.stringify(data));
                $scope.QAService.caseReferenceNumber = data.sequence;
                $('#caseReferenceNumber1').attr('disabled', true);
            })

        }


        var ExtCaseRef = new Object();
        ExtCaseRef.tablename = "com.finsol.model.QAIssue";
        ExtCaseRef.columnname = "casereferenceno";
        $scope.DupextRef = function(values) {
            ExtCaseRef.value = values;
            var jsonObj = JSON.stringify(ExtCaseRef);
            //alert(JSON.stringify(jsonObj));
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/checkValue.do",
                data: jsonObj,
            }).success(function(data, status) {
                //alert(data)

                if (data == true) {


                    $("#existValEXT").show();
                } else {
                    $("#existValEXT").hide();
                }

            });
        };


        var cusImageExt = new FormData();

        var FormobjExt = new Object();

        /*var checkArray = new Array();
        var checkArray2 = new Array();
        var checkArray3 = new Array();
        var checkArray4 = new Array();*/


        $scope.LoadStatusSelect = function() {
            $scope.LoadStatus = [{
                id: 1,
                label: "Active"
            }, {
                id: 2,
                label: "InActive"
            }];
            $scope.customerStatusdata = $scope.LoadStatus

        };


        $scope.qaIssuesFor2 = [{
            "text": "Customer complaint about product quality",
            "id": "0"
        }, {
            "text": "Missing part / short shippment",
            "id": "1"
        }, {
            "text": "wrong items received",
            "id": "2"
        }, {
            "text": "part damaged during transportation",
            "id": "3"
        }];
        $scope.actionRequired2 = [{
            "text": "Feedback to factory",
            "id": "0"
        }, {
            "text": "Claim for replacement",
            "id": "1"
        }, {
            "text": "Feed back to Service Depart",
            "id": "2"
        }, {
            "text": "Feed back to Engineering",
            "id": "3"
        }, {
            "text": "Feed back to Salesman to liaise with customer",
            "id": "4"
        }];

        $scope.OnLoadQA = function() {
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getServerDate.do",
                data: {},
            }).success(function(data, status) {


                $scope.QAService = ({
                    qualityAssurance: 1,
                    'attachDrawing': '0',
                    'scaDate': data.serverdate,
                    'modifyFlag': 'false',
                    'shipmentDate': data.serverdate,
                    'recievingDate': data.serverdate
                })

            });

        };

        $scope.fruitSelection4 = [];
        $scope.testId4 = function(id) {
            var idx = $scope.fruitSelection4.indexOf(id);

            if (idx > -1) {
                $scope.fruitSelection4.splice(idx, 1);
            } else {
                $scope.fruitSelection4.push(id);

            }


        };
        $scope.fruitSelection3 = [];
        $scope.testId3 = function(id) {
            var idx = $scope.fruitSelection3.indexOf(id);

            if (idx > -1) {
                $scope.fruitSelection3.splice(idx, 1);
            } else {
                $scope.fruitSelection3.push(id);
            }

            /*$scope.QAService.qaIssuesFor=id;
            checkArray3.push($scope.QAService.qaIssuesFor);*/


        };

        ////submit

        ///QAEXTSUBMIT
        $scope.QualExtSubmit = function(form, QAService) {

            if ($scope.QAEXTForm.$valid) {
                $scope.QAService.qaIssuesFor = $scope.fruitSelection3;
                $scope.QAService.actionRequired = $scope.fruitSelection4

                if ($scope.QAService.modifyFlag == null) {
                    $scope.QAService.modifyFlag = true;

                }

                if (!Modeifyimageflag) {
                    var f = new File([""], "filename");

                    cusImageExt.delete("userdrawing");
                    cusImageExt.append("userdrawing", f);


                }

                /* var f = new File([""], "filename");

                				 cusImage.delete("userdrawing");					 
                				cusImage.append("userdrawing", f);*/
                FormobjExt = $scope.QAService;
                //alert(FormobjExt);
                cusImageExt.append("formData", angular.toJson(FormobjExt));

                $http.post("/SCA-360/saveQAIssue.do", cusImageExt, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': undefined
                    },
                    transformRequest: angular.identity
                }).success(function(data, status) {
                    swal('Saved Successfully');
                    $state.go('app.qaService')
                    //ng-show=" $scope.IsVisible" 
                });
            } else {

                var field = null,
                    firstError = null;
                for (field in form) {
                    if (field[0] != '$') {
                        if (firstError === null && !form[field].$valid) {
                            firstError = form[field].$name;
                        }
                        if (form[field].$pristine) {
                            form[field].$dirty = true;
                        }
                    }
                }
            }

        };

        //UPLOADFILE
        $scope.loadCustomerName = function(customerName) {


            $.getJSON("getAllAccountNames.do", function(json) {
                $scope.names = json['data'];
                //alert(JSON.stringify($scope.names));
            })
        };

        //UPLOADFILE
        $scope.uploadUserFile2 = function(files) {
            Modeifyimageflag = true;
            //alert(files);
            $scope.dummyPhoto = "1";
            //$('#dummyPhoto').trigger('blur');
            cusImageExt.delete("userdrawing");
            cusImageExt.append("userdrawing", files[0]);
            //alert(cusImage);
            $scope.$apply();
            modifyFlag1 = true;
        };



		


    });
//===============================
/* Reports */
//===============================
angular.module('app')
    .controller('ReportController', function($scope, $http, $rootScope) {
											 
											 $scope.getprint=function(){
		    var pdf = new jsPDF('p', 'pt', 'a4');
                pdf.addHTML(document.getElementById('records'), function() {
                    pdf.save('test.pdf');
                });
		
		}

		 
        $scope.reportData = [];
        $scope.testReport = [];
        ////////load reports////////////
		var reportObj=new Object();
        $scope.getReports = function(fromdata,todate) {
			if(todate!=undefined){
			reportObj.fromdate=fromdata;
			reportObj.todate=todate;
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadTestReports.do",
                data: JSON.stringify(reportObj),
            }).success(function(data, status) {
				if(data.length!=0){				
                $scope.reportData = data;
				}else{
					$index=1;
					swal('Data Not Found');
					 $scope.reportData = [];
					 $scope.reportData = [{
                        'id': $index
                    }];
					
					}
            })
			}
        };

		
		
		$scope.ShowDatePicker = function() {

            $(".datepicker").datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: 'dd-mm-yy',
                beforeShow: function() {
                    setTimeout(function() {
                        $('.ui-datepicker').css({
                            'z-index': 999999,
                            'width': '20%'
                        });
                    }, 0);
                }
            });
        };

        $scope.$applyAsync(function() {
            $(".datepicker").datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: 'dd-mm-yy',
                beforeShow: function() {
                    setTimeout(function() {
                        $('.ui-datepicker').css({
                            'z-index': 999999,
                            'width': '20%'
                        });
                    }, 0);
                }
            });

        })



        $scope.LoadReportCustomer = function(customerAssembyNumber) {
			

            $rootScope.poname = customerAssembyNumber;

            //alert("reportpage=="+$rootScope.poname);
        };
			$index=1;
        $scope.loadAccountmandropdown = function(customerName) {
	
			$scope.reportData = [{
                        'id': $index
                    }];
            $.getJSON("getAllAccountNames.do", function(json) {
                $scope.names = json['data'];
                //alert(JSON.stringify($scope.names));
            })
        };




    });
//===================================================================//
//=============Score Master============//
//===================================================================//
angular.module('app')
    .controller('ScoreMasterController', function($scope, $http) {

        $scope.master = {};
        $scope.LoadRadio = function() {
            $scope.scoremaster = ({
                'productTypeCode': '0',
                'subTypeCode': '1'
            });
        };
        $scope.LoadpresRadio = function() {
            $scope.scoremaster = ({
                'productTypeCode': '1',
                'subTypeCode': '1'
            });
        };
        $scope.LoadpresbbbRadio = function() {
            $scope.scoremaster = ({
                'productTypeCode': '2',
                'subTypeCode': '1'
            });
        };
        $scope.LoadpreshbbRadio = function() {
            $scope.scoremaster = ({
                'productTypeCode': '3',
                'subTypeCode': '1'
            });
        };
        $scope.Stage = [{
            "text": "SINGLE ",
            "id": "0"
        }, {
            "text": "DOUBLE-DA,DB,DC",
            "id": "1"
        }, {
            "text": "TRIPLE-TA,TB,TC",
            "id": "2"
        }];
		
		   $scope.StageHbb = [{
            "text": "SINGLE ",
            "id": "0"
        }, {
            "text": "DOUBLE-DA,DB,DC",
            "id": "1"
        }];
		   
        $scope.Mounting = [{
            "text": "Y-Hollow Shaft Type",
            "id": "0"
        }, {
            "text": "U-Solid Shaft Type,Case Mount",
            "id": "1"
        }, {
            "text": "F-Solid Shaft Type,Flange Mount",
            "id": "2"
        }, {
            "text": "H-Solid Shaft Type,Foot Mount",
            "id": "3"
        }];
		
		 $scope.MountingCycloMotor = [{
            "text": "CNHM",
            "id": "0"
        }, {
            "text": "CNFM",
            "id": "1"
        }, {
            "text": "CNVM",
            "id": "2"
        }, {
            "text": "CNHJM",
            "id": "3"
        },{
            "text": "CNFJM",
            "id": "4"
        }, {
            "text": "CNVJM",
            "id": "5"
        },{
            "text": "CHHJM",
            "id": "6"
        }, {
            "text": "CHFJM",
            "id": "7"
        }, {
            "text": "CVVJM",
            "id": "8"
        }, {
            "text": "CHHXM",
            "id": "9"
        },{
            "text": "CHFXM",
            "id": "10"
        }, {
            "text": "CVVXM",
            "id": "11"
        }, {
            "text": "CHHM",
            "id": "12"
        }, {
            "text": "CHFM",
            "id": "13"
        },{
            "text": "CHVM",
            "id": "14"
        }, {
            "text": "CVHM",
            "id": "15"
        }, {
            "text": "CVFM",
            "id": "16"
        }, {
            "text": "CVVM",
            "id": "17"
        },{
            "text": "CWHM",
            "id": "18"
        }, {
            "text": "CWFM",
            "id": "19"
        }, {
            "text": "CWVM",
            "id": "20"
        }, {
            "text": "CHHCM",
            "id": "21"
        }, {
            "text": "CHHPM",
            "id": "22"
        }, {
            "text": "C14VM",
            "id": "23"
        }, {
            "text": "C15VM",
            "id": "24"
        },{
            "text": "C17VM",
            "id": "25"
        }, {
            "text": "C18VM",
            "id": "26"
        }];
		 
		 $scope.MountingCycloReducer = [{
            "text": "CNH",
            "id": "0"
        }, {
            "text": "CNF",
            "id": "1"
        }, {
            "text": "CNV",
            "id": "2"
        }, {
            "text": "CNHJ",
            "id": "3"
        },{
            "text": "CNFJ",
            "id": "4"
        }, {
            "text": "CNVJ",
            "id": "5"
        }, {
            "text": "CHHJ",
            "id": "6"
        }, {
            "text": "CHFJ",
            "id": "7"
        }, {
            "text": "CVVJ",
            "id": "8"
        }, {
            "text": "CHHX",
            "id": "9"
        }, {
            "text": "CHFX",
            "id": "10"
        },{
            "text": "CVVX",
            "id": "11"
        }, {
            "text": "CHH",
            "id": "12"
        }, {
            "text": "CHF",
            "id": "13"
        }, {
            "text": "CHV",
            "id": "14"
        },{
            "text": "CVH",
            "id": "15"
        }, {
            "text": "CVF",
            "id": "16"
        }, {
            "text": "CVV",
            "id": "17"
        }, {
            "text": "CWH",
            "id": "18"
        },{
            "text": "CWF",
            "id": "19"
        }, {
            "text": "CWV",
            "id": "20"
        }, {
            "text": "CHHP",
            "id": "21"
        }];



        $scope.ScoremasterField = [];

        $index = 0;
        $index1 = 0;
        $index2 = 0;
        $index3 = 0;
        $index4 = 0;
        $index5 = 0;
        /////////////
        $scope.addScoreForm = function() {


            $index++;
            $scope.ScoremasterField.push({
                'id': $index,
                'guide': 'H' + $index
            })
            // alert(JSON.stringify($scope.ScoremasterField));
        };

        /////////////	
        $scope.PrestNeoField = [];

        $scope.addPrestNeoForm = function() {

            $index1++;
            $scope.PrestNeoField.push({
                'id': $index1,
                'guide': 'PS' + $index1
            })

        };
        /////////////
        $scope.bbbField = [];

        $scope.addbbbscoreForm = function() {

            $index2++;
            $scope.bbbField.push({
                'id': $index2,
                'guide': 'B' + $index2
            })

        };


        /////////////
        $scope.hbbscoreField = [];

        $scope.addhbbscoreForm = function() {

            $index3++;
            $scope.hbbscoreField.push({
                'id': $index3,
                'guide': 'HB' + $index3
            })

        };
        /////////////
        $scope.gmscoreField = [];

        $scope.addgmscoreForm = function() {

            $index4++;
            $scope.gmscoreField.push({
                'id': $index4,
                'guide': 'GM' + $index4
            })

        };
        /////////////
        $scope.gmreducerField = [];

        $scope.addgmreducerForm = function() {
            //alert("enterd");
            $index5++;
            $scope.gmreducerField.push({
                'id': $index5,
                'guide': 'GR' + $index5
            })

        };



        ////////////

        $scope.removeFormRow = function(name) {
            // alert(name);
            var Index = -1;
            var comArr = eval($scope.ScoremasterField);
            for (var i = 0; i < comArr.length; i++) {
                //alert(comArr[i].id === name)
                if (comArr[i].id === name) {
                    Index = i;
                    break;
                }
            }
            $scope.ScoremasterField.splice(Index, 1);
            $Index = comArr.length;
            //alert($Index);
            for (var s = 0; s < $Index; s++) {

                $scope.ScoremasterField[s].id = Number(s) + Number(1);
                //alert($scope.ScoremasterField[s].id );
                $index = $scope.ScoremasterField[s].id

            }
        };

        $scope.removePrestNeo = function(name) {
            // alert(name);
            var Index = -1;
            var comArr = eval($scope.PrestNeoField);
            for (var i = 0; i < comArr.length; i++) {
                if (comArr[i].id === name) {
                    Index = i;
                    break;
                }
            }
            $scope.PrestNeoField.splice(Index, 1);
            $Index = comArr.length;
            for (var s = 0; s < $Index; s++) {
                $scope.PrestNeoField[s].id = Number(s) + Number(1);
                $index1 = $scope.PrestNeoField[s].id
            }
        };

        $scope.removebbbscoreRow = function(name) {
            // alert(name);
            var Index = -1;
            var comArr = eval($scope.bbbField);
            for (var i = 0; i < comArr.length; i++) {
                if (comArr[i].id === name) {
                    Index = i;
                    break;
                }
            }
            $scope.bbbField.splice(Index, 1);
            $Index = comArr.length;
            for (var s = 0; s < $Index; s++) {
                $scope.bbbField[s].id = Number(s) + Number(1);
                $index2 = $scope.bbbField[s].id
            }
        };

        $scope.removehbbscoreRow = function(name) {
            // alert(name);
            var Index = -1;
            var comArr = eval($scope.hbbscoreField);
            for (var i = 0; i < comArr.length; i++) {
                if (comArr[i].id === name) {
                    Index = i;
                    break;
                }
            }
            $scope.hbbscoreField.splice(Index, 1);
            $Index = comArr.length;
            for (var s = 0; s < $Index; s++) {
                $scope.hbbscoreField[s].id = Number(s) + Number(1);
                $index3 = $scope.hbbscoreField[s].id
            }
        };

        $scope.removegmscoreRow = function(name) {
            // alert(name);
            var Index = -1;
            var comArr = eval($scope.gmscoreField);
            for (var i = 0; i < comArr.length; i++) {
                if (comArr[i].id === name) {
                    Index = i;
                    break;
                }
            }
            $scope.gmscoreField.splice(Index, 1);
            $Index = comArr.length;
            for (var s = 0; s < $Index; s++) {
                $scope.gmscoreField[s].id = Number(s) + Number(1);
                $index4 = $scope.gmscoreField[s].id
            }
        };

        $scope.removegmreducerRow = function(name) {
            // alert(name);
            var Index = -1;
            var comArr = eval($scope.gmreducerField);
            for (var i = 0; i < comArr.length; i++) {
                if (comArr[i].id === name) {
                    Index = i;
                    break;
                }
            }
            $scope.gmreducerField.splice(Index, 1);
            $Index = comArr.length;
            for (var s = 0; s < $Index; s++) {
                $scope.gmreducerField[s].id = Number(s) + Number(1);
                $index5 = $scope.gmreducerField[s].id
            }
        };

        ////////////	Hyponic/////////////////

        var ScoremasterObj = new Object();
        var SaveScoremasterData = [];
        SaveScoremasterData.length = 0;
        $scope.ScoremasterSubmit = function(scoremaster, form) {
            if (form.productTypeCode == 0) {
                $scope.scoremaster.productType = "Hyponic";
            }

            if (form.subTypeCode == 1) {
                $scope.scoremaster.subType = "NA";
                $scope.scoremaster.subTypeCode = '0';
            } else if (form.subTypeCode == 2) {
                $scope.scoremaster.subType = "NA";
                $scope.scoremaster.subTypeCode = '0';
            }

            $scope.ScoremasterField.forEach(function(Scoredata) {

                SaveScoremasterData.push(angular.toJson(Scoredata));

            });

            ScoremasterObj.gridData = SaveScoremasterData;
            ScoremasterObj.formData = form;
            //alert(JSON.stringify(ScoremasterObj));
            $.ajax({
                url: "/SCA-360/saveScore.do",
                processData: true,
                type: 'POST',
                contentType: 'Application/json',
                data: JSON.stringify(ScoremasterObj),
                beforeSend: function(xhr) {

                    xhr.setRequestHeader("Accept", "application/json");
                    xhr.setRequestHeader("Content-Type", "application/json");
                },
                success: function(response) {
                    if (response == true) {
                        swal('Saved Successfully');
                        //ScoremasterObj = {};
                        SaveScoremasterData.length = 0;
                        $scope.getOnLoadHyponicData(0, 0);
                        // $scope.getCycloData(4);
                        $scope.LoadRadio();


                    } else if (response == false) {
                        swal("Ooh no...", "Something went wrong!", "error");
                        $scope.getOnLoadHyponicData(0, 0);
                    }

                }
            });

        };

        //////////////PrestNeo    /////////////
        var PrestNeoObj = new Object();
        var SavePrestNeoData = [];
        $scope.PrestNeoSubmit = function(PrestNeo, form) {
            if (form.productTypeCode == 1) {
                $scope.scoremaster.productType = "PrestNeo";
            }

            if (form.subTypeCode == 1) {
                $scope.scoremaster.subType = "NA";
                $scope.scoremaster.subTypeCode = '0';
            } else if (form.subTypeCode == 2) {
                $scope.scoremaster.subType = "NA";
                $scope.scoremaster.subTypeCode = '0';
            }
            $scope.PrestNeoField.forEach(function(PrestNeo) {

                SavePrestNeoData.push(angular.toJson(PrestNeo));

            });

            PrestNeoObj.gridData = SavePrestNeoData;
            PrestNeoObj.formData = form;
            //alert(JSON.stringify(PrestNeoObj));
            $.ajax({
                url: "/SCA-360/saveScore.do",
                processData: true,
                type: 'POST',
                contentType: 'Application/json',
                data: JSON.stringify(PrestNeoObj),
                beforeSend: function(xhr) {

                    xhr.setRequestHeader("Accept", "application/json");
                    xhr.setRequestHeader("Content-Type", "application/json");
                },
                success: function(response) {
                    if (response == true) {
                        swal('Saved Successfully');
                        SavePrestNeoData.length = 0;
                        $scope.getPrestNeoData(1, 0);
                        $scope.LoadpresRadio();

                    } else if (response == false) {
                        swal("Ooh no...", "Something went wrong!", "error");

                        //$scope.getOnLoadHyponicData(0,0);
                    }

                }
            });


        };


        //////////////BBB        /////////////
        var bbbscoreObj = new Object();
        var SavebbbscoremasterData = [];
        $scope.bbbFieldSubmit = function(bbbscore, form) {
            if (form.productTypeCode == 2) {
                $scope.scoremaster.productType = "BBB";
            }

            if (form.subTypeCode == 1) {
                $scope.scoremaster.subType = "NA";
                $scope.scoremaster.subTypeCode = '0';
            } else if (form.subTypeCode == 2) {
                $scope.scoremaster.subType = "NA";
                $scope.scoremaster.subTypeCode = '0';
            }
            $scope.bbbField.forEach(function(bbbscore) {

                SavebbbscoremasterData.push(angular.toJson(bbbscore));

            });

            bbbscoreObj.gridData = SavebbbscoremasterData;
            bbbscoreObj.formData = form;
            //alert(JSON.stringify(bbbscoreObj));
            $.ajax({
                url: "/SCA-360/saveScore.do",
                processData: true,
                type: 'POST',
                contentType: 'Application/json',
                data: JSON.stringify(bbbscoreObj),
                beforeSend: function(xhr) {

                    xhr.setRequestHeader("Accept", "application/json");
                    xhr.setRequestHeader("Content-Type", "application/json");
                },
                success: function(response) {
                    if (response == true) {
                        swal('Saved Successfully');
                        SavebbbscoremasterData.length = 0;
                        $scope.getBBBData(2, 0);
                        $scope.LoadpresbbbRadio();

                    } else if (response == false) {
                        swal("Ooh no...", "Something went wrong!", "error");
                        //$scope.getOnLoadHyponicData(0,0);
                    }


                }
            });

        };
        //////////////HBB/////////////
        var hbbscoreObj = new Object();
        var SavehbbscoreData = [];
        $scope.hbbscoreFieldSubmit = function(hbbscore, form) {
            if (form.productTypeCode == 3) {
                $scope.scoremaster.productType = "HBB";
            }

            if (form.subTypeCode == 1) {
                $scope.scoremaster.subType = "NA";
                $scope.scoremaster.subTypeCode = '0';
            } else if (form.subTypeCode == 2) {
                $scope.scoremaster.subType = "NA";
                $scope.scoremaster.subTypeCode = '0';
            }
            $scope.hbbscoreField.forEach(function(hbbscore) {

                SavehbbscoreData.push(angular.toJson(hbbscore));

            });

            hbbscoreObj.gridData = SavehbbscoreData;
            hbbscoreObj.formData = form;
            delete hbbscoreObj["$index"];
            //alert(JSON.stringify(hbbscoreObj));
            $.ajax({
                url: "/SCA-360/saveScore.do",
                processData: true,
                type: 'POST',
                contentType: 'Application/json',
                data: JSON.stringify(hbbscoreObj),
                beforeSend: function(xhr) {

                    xhr.setRequestHeader("Accept", "application/json");
                    xhr.setRequestHeader("Content-Type", "application/json");
                },
                success: function(response) {

                    if (response == true) {
                        swal('Saved Successfully');
                        SavehbbscoreData.length = 0;
                        $scope.getHBBData(3, 0);
                        $scope.LoadpreshbbRadio();

                    } else if (response == false) {
                        swal("Ooh no...", "Something went wrong!", "error");
                        //$scope.getOnLoadHyponicData(0,0);
                    }

                }
            });

        };
        //////////////CycloGM/////////////
        var gmscoreObj = new Object();
        var gmscoremasterData = [];
        $scope.gmscoreFieldSubmit = function(gmscore, form) {
            if (form.productTypeCode == 4) {
                $scope.scoremaster.productType = "CYCLO";
            }

            if (form.subTypeCode == 1) {
                $scope.scoremaster.subType = "Gear Motor";
            }
            $scope.gmscoreField.forEach(function(gmscore) {

                gmscoremasterData.push(angular.toJson(gmscore));

            });

            gmscoreObj.gridData = gmscoremasterData;
            gmscoreObj.formData = form;
            //alert(JSON.stringify(gmscoreObj));
            $.ajax({
                url: "/SCA-360/saveScore.do",
                processData: true,
                type: 'POST',
                contentType: 'Application/json',
                data: JSON.stringify(gmscoreObj),
                beforeSend: function(xhr) {

                    xhr.setRequestHeader("Accept", "application/json");
                    xhr.setRequestHeader("Content-Type", "application/json");
                },
                success: function(response) {
                    if (response == true) {
                        swal('Saved Successfully');
                        gmscoremasterData.length = 0;
                        $scope.getOnLoadGearMotorData(4, 1);
                        //$scope.LoadRadio();

                    } else if (response == false) {
                        swal("Ooh no...", "Something went wrong!", "error");
                        //$scope.getOnLoadHyponicData(0,0);
                    }


                }
            });

        };
        //////////////CycloGR /////////////
        var gmreducermasterObj = new Object();
        var SavegmreducermasterData = [];
        $scope.gmreducerFieldSubmit = function(gmreducer, form) {
            if (form.productTypeCode == 4) {
                $scope.scoremaster.productType = "CYCLO";
            }

            if (form.subTypeCode == 2) {
                $scope.scoremaster.subType = "Gear Reducer";
            }
            $scope.gmreducerField.forEach(function(gmreducer) {

                SavegmreducermasterData.push(angular.toJson(gmreducer));

            });

            gmreducermasterObj.gridData = SavegmreducermasterData;
            gmreducermasterObj.formData = form;
            //alert(JSON.stringify(gmreducermasterObj));
            $.ajax({
                url: "/SCA-360/saveScore.do",
                processData: true,
                type: 'POST',
                contentType: 'Application/json',
                data: JSON.stringify(gmreducermasterObj),
                beforeSend: function(xhr) {

                    xhr.setRequestHeader("Accept", "application/json");
                    xhr.setRequestHeader("Content-Type", "application/json");
                },
                success: function(response) {

                    if (response == true) {
                        swal('Saved Successfully');
                        SavegmreducermasterData.length = 0;
                        $scope.getGearReducerData(4, 2);
                        // $scope.LoadRadio();

                    } else if (response == false) {
                        swal("Ooh no...", "Something went wrong!", "error");
                        //$scope.getOnLoadHyponicData(0,0);
                    }

                }
            });

        };


        $scope.getOnLoadHyponicData = function(productcode, subcode) {

            //$scope.ScoremasterField.length=0;
            var getScoreDetails = new Object();
            getScoreDetails.ptcode = productcode;
            getScoreDetails.stcode = subcode;

            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getAllScores.do",
                data: getScoreDetails,
            }).success(function(data, status) {
				//alert(JSON.stringify(data));
                if (data.Scores[0] != null) {
                    $scope.ScoremasterField = data.Scores;
                    for (var i = 0; i <= data.Scores.length; i++) {
                        //alert(data.Scores.length);
                        $index = data.Scores.length;

                    }

                }
            })
        };


        ///////////get hyponic//////////////////
        $scope.getHyponicData = function(productcode, subcode) {
            var getScoreDetails = new Object();
            getScoreDetails.ptcode = productcode;
            getScoreDetails.stcode = subcode;

            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getAllScores.do",
                data: getScoreDetails,
            }).success(function(data, status) {
                if (data.Scores[0] != null) {

                    $scope.ScoremasterField = data.Scores;
                    for (var i = 0; i <= data.Scores.length; i++) {
                        //alert(data.Scores.length);
                        $index = data.Scores.length;

                    }
                }

            })
        };


        //////get getPrestNeoData//////////////////
        $scope.getPrestNeoData = function(productcode, subcode) {
            var getPrestNeoDetails = new Object();
            getPrestNeoDetails.ptcode = productcode;
            getPrestNeoDetails.stcode = subcode;

            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getAllScores.do",
                data: getPrestNeoDetails,
            }).success(function(data, status) {

                if (data.Scores[0] != null) {
                    $scope.PrestNeoField = data.Scores;
                    for (var i = 0; i <= data.Scores.length; i++) {
                        //alert(data.Scores.length);
                        $index1 = data.Scores.length;

                    }
                }

            })
        };

        ///////getBBBData////////////
        $scope.getBBBData = function(productcode, subcode) {
            var getbbbFieldDetails = new Object();
            getbbbFieldDetails.ptcode = productcode;
            getbbbFieldDetails.stcode = subcode;

            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getAllScores.do",
                data: getbbbFieldDetails,
            }).success(function(data, status) {
                //alert(JSON.stringify(data));
                if (data.Scores[0] != null) {


                    $scope.bbbField = data.Scores;
                    for (var i = 0; i <= data.Scores.length; i++) {
                        //alert(data.Scores.length);
                        $index2 = data.Scores.length;

                    }

                }



            })

        };

        ///////getHBBData////////////
        $scope.getHBBData = function(productcode, subcode) {
            var gethbbscoreDetails = new Object();
            gethbbscoreDetails.ptcode = productcode;
            gethbbscoreDetails.stcode = subcode;

            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getAllScores.do",
                data: gethbbscoreDetails,
            }).success(function(data, status) {
                //alert(JSON.stringify(data));
                if (data.Scores[0] != null) {

                    $scope.hbbscoreField = data.Scores;
                    for (var i = 0; i <= data.Scores.length; i++) {
                        //alert(data.Scores.length);
                        $index3 = data.Scores.length;

                    }
                }


            })
        };

        /////////getGearMotorData//////////////////
        $scope.getGearMotorData = function(productcode, subcode) {

            var getgmscoreDetails = new Object();
            getgmscoreDetails.ptcode = productcode;
            getgmscoreDetails.stcode = subcode;

            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getAllScores.do",
                data: getgmscoreDetails,
            }).success(function(data, status) {
                if (data.Scores[0] != null) {


                    $scope.gmscoreField = data.Scores;
                    for (var i = 0; i <= data.Scores.length; i++) {
                        //alert(data.Scores.length);
                        $index4 = data.Scores.length;

                    }
                }

            })
        };
        $scope.getOnLoadGearMotorData = function(productcode, subcode) {

            var getgmscoreDetails = new Object();
            getgmscoreDetails.ptcode = productcode;
            getgmscoreDetails.stcode = subcode;

            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getAllScores.do",
                data: getgmscoreDetails,
            }).success(function(data, status) {
                if (data.Scores[0] != null) {


                    $scope.gmscoreField = data.Scores;
                    for (var i = 0; i <= data.Scores.length; i++) {
                        //alert(data.Scores.length);
                        $index4 = data.Scores.length;

                    }
                }

            })
        };
        //////////getGearReducerData/////////////////////////////
        $scope.getGearReducerData = function(productcode, subcode) {
            var getgmreducerDetails = new Object();
            getgmreducerDetails.ptcode = productcode;
            getgmreducerDetails.stcode = subcode;

            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getAllScores.do",
                data: getgmreducerDetails,
            }).success(function(data, status) {

                if (data.Scores[0] != null) {

                    $scope.gmreducerField = data.Scores;
                    for (var i = 0; i <= data.Scores.length; i++) {
                        //alert(data.Scores.length);
                        $index5 = data.Scores.length;

                    }
                }


            })
        };
		
		
		$scope.validateFrame=function(frameSizeFrom,frameSizeTo,id){
			
			if(frameSizeTo==undefined || frameSizeFrom.length==0 ||  frameSizeTo.length==0){
			
			//alert(frameSizeFrom.substring(0, 2));
			
			}else{
				var frameStartsize=frameSizeFrom.substring(0, 2);
			var frameEndsize=frameSizeTo.substring(0, 2);
		
				   for (var i = 0; i <= JSON.stringify($scope.bbbField.length); i++) {


               			 if (id != i) {

                   
                   					if(frameStartsize!=frameEndsize){

                       				 $(".existValRC1" + id).show();
                        			return false;
									}else{
									 $(".existValRC1" + id).hide();
									}
				
						}else{
					
							}
			
			
					}
				
				}}
				
				
				
				$scope.validateFrameHbb=function(frameSizeFrom,frameSizeTo,id){
			
			if(frameSizeTo==undefined || frameSizeFrom.length==0 ||  frameSizeTo.length==0){
			
			//alert(frameSizeFrom.substring(0, 2));
			
			}else{
				var frameStartsize=frameSizeFrom.substring(0, 2);
			var frameEndsize=frameSizeTo.substring(0, 2);
		
				   for (var i = 0; i <= JSON.stringify($scope.hbbscoreField.length); i++) {


               			 if (id != i) {

                   
                   					if(frameStartsize!=frameEndsize){

                       				 $(".existValRC12" + id).show();
                        			return false;
									}else{
									 $(".existValRC12" + id).hide();
									}
				
						}else{
					
							}
			
			
					}
				
				}}
				
				
				
				$scope.getVlidate=function(data,start,end,index,stage){
					var data=data.toUpperCase();
					var start=start.toUpperCase();
					var end=end.toUpperCase();
					var stage=stage.toUpperCase();
					
						 	var count=0;
					angular.forEach($scope.bbbField, function(value, index) {
						
                        var sum = (value.mountingType).toUpperCase();
						var frameFrom = (value.frameSizeFrom).toUpperCase();
						var frameTO = (value.frameSizeTo).toUpperCase();
						var stagearray =(value.stage).toUpperCase();
					 if(data==sum && start==frameFrom && end==frameTO && stage==stagearray){
				
						   count++;
					   }
					
                    })
			 
			// alert("COUNT  "+count);
			 if(count>1){
				 swal("Mounting Type Already Exist");
				 $scope.bbbField[index].mountingType="";
			 }else{
				
			 }
					
					}
					
					
					
					
					$scope.getVlidateCyclo=function(data,start,end,index,stage){
					var data=data.toUpperCase();
					var start=start.toUpperCase();
					var end=end.toUpperCase();
					var stage=stage;
					
						 	var count=0;
					angular.forEach($scope.gmscoreField, function(value, index) {
						
                        var sum = (value.mountingType).toUpperCase();
						var frameFrom = (value.frameSizeFrom).toUpperCase();
						var frameTO = (value.frameSizeTo).toUpperCase();
						var stagearray =(value.stage);
					 if(data==sum && start==frameFrom && end==frameTO && stage==stagearray){
				
						   count++;
					   }
					
                    })
			 
			// alert("COUNT  "+count);
			 if(count>1){
				 swal("Mounting Type Already Exist");
				 $scope.gmscoreField[index].mountingType="";
			 }else{
				
			 }
					
					}
					
					
					
					/*$scope.getVlidateCyclo=function(data,start,end,index,stage){
					var data=data.toUpperCase();
					var start=start.toUpperCase();
					var end=end.toUpperCase();
					var stage=stage.toUpperCase();
						 	var count=0;
					angular.forEach($scope.gmscoreField, function(value, index) {
					alert(value.stage);
                        var sum = (value.mountingType).toUpperCase();
						var frameFrom = (value.frameSizeFrom).toUpperCase();
						var frameTO = (value.frameSizeTo).toUpperCase();
						
							
					 if(data==sum && start==frameFrom && end==frameTO  ){
				
						   count++;
					   }
					
                    })
			 
			// alert("COUNT  "+count);
			 if(count>1){
				 swal("Mounting Type Already Exist");
				 $scope.gmscoreField[index].mountingType="";
			 }else{
				
			 }
					
					}
					*/
					
					
					
					$scope.getVlidateReducer=function(data,start,end,index,stage){
					var data=data.toUpperCase();
					var start=start.toUpperCase();
					var end=end.toUpperCase();
					var stage=stage;
						 	var count=0;
					angular.forEach($scope.gmreducerField, function(value, index) {
						
                        var sum = (value.mountingType).toUpperCase();
						var frameFrom = (value.frameSizeFrom).toUpperCase();
						var frameTO = (value.frameSizeTo).toUpperCase();
							var stagearray =(value.stage);
							
					 if(data==sum && start==frameFrom && end==frameTO && stage==stagearray ){
				
						   count++;
					   }
					
                    })
			 
			// alert("COUNT  "+count);
			 if(count>1){
				 swal("Mounting Type Already Exist");
				 $scope.gmreducerField[index].mountingType="";
			 }else{
				
			 }
					
					}
			

   			 });

///////////////////////////////////////////SERVICE SCHEDULER//////////////////////////////////
angular.module('app')
    .controller('serviceSchedule', function($scope, $http) {
        var numOfPieces = 6 * 6;
        var frag = document.createDocumentFragment();

        function insertInnerPieces($el, innerPieces) {
            for (var i = 0; i < innerPieces; i++) {
                var $inner = document.createElement('div');
                $inner.classList.add('popup__piece-inner');
                $el.appendChild($inner);
            }
        };

        for (var i = 1; i <= numOfPieces; i++) {
            var $piece = document.createElement('div');
            $piece.classList.add('popup__piece');

            insertInnerPieces($piece, 3);
            frag.appendChild($piece);
        }

        document.querySelector('.popup__pieces').appendChild(frag);

        var $popupsCont = document.querySelector('.popups-cont');
        var $popup = document.querySelector('.popup');
        var popupAT = 900;

        var overlay = jQuery('<div id="overlay"> </div>');

        /*var isFirstTime = true;
        $scope.SelectedEvent = null;*/
        $scope.loadRadio = function() {

            $scope.schedule = ({
                'New': '0',
                'SearchCust': '0'
            })
        };

        $scope.loadServerData = function() {

            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getServerDate.do",
                data: {},
            }).success(function(data, status) {
                $scope.ev.from = data.serverdate;
                //alert( $scope.ev.from);
            });
        };


        $scope.examples = [{
            isOpen: false
        }];

        /* $scope.examples.forEach(function(example){
           example.date = new Date(example.date);
         });*/

        $scope.open = function($event, examples, id) {


            $scope.examples[id].isOpen = true;
        };



        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        $scope.changeTo = 'Hungarian';
        /* event source that pulls from google.com */
        $scope.eventSource = {
            url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
            className: 'gcal-event', // an option!
            currentTimezone: 'America/Chicago' // an option!
        };
        /* event source that contains custom events on the scope */
        $scope.events = [{
                title: 'Inspection:WIP Asydt:WIP',
                start: new Date(),
                color: '#00f',
                textColor: '#800000',
                allDay: true
            }

        ];
        /* event source that calls a function on every view switch */
        $scope.eventsF = function(start, end, timezone, callback) {
            var s = new Date(start).getTime() / 1000;
            var e = new Date(end).getTime() / 1000;
            var m = new Date(start).getMonth();
            var events = [{
                title: 'Feed Me ' + m,
                start: s + (50000),
                end: s + (100000),
                allDay: false,
                className: ['customFeed']
            }];
            callback(events);
        };

        $scope.calEventsExt = {
            color: '#f00',
            textColor: 'yellow',
            events: [{
                type: 'party',
                title: 'Lunch',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false
            }, {
                type: 'party',
                title: 'Lunch 2',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false
            }, {
                type: 'party',
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/'
            }]
        };
        /* alert on eventClick */
        $scope.alertOnEventClick = function(date, jsEvent, view) {
            //$("#popupo").show(3000);


            overlay.appendTo(document.body);
            $popupsCont.classList.add('s--popup-active');
            $popup.classList.add('s--active');

            //$("#calenderPopup").slideDown();
            $scope.alertMessage1 = ("Selected Event::" + date.title);

            var selectedDate = moment(date.start).format('YYYY-MM-DD');
            // set dateFrom based on user click on calendar
            $scope.events[0].start = selectedDate; // update Calendar event dateFrom
            $scope.alertMessage = $filter('date')(selectedDate, 'yyyy-MM-dd');; // 
        };

        $scope.alertOnDayClick = function(date) {
            $scope.alertMessage = (date.toString() + ' was clicked ');

            // alert($scope.alertMessage);
            $scope.ev = {
                from: date.format('YYYY-MM-DD'),
                to: date.format('YYYY-MM-DD'),
                title: '',
                allDay: true
            };
        };



        /* alert on Drop */
        $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view) {
            $scope.alertMessage = ('Event Dropped to make dayDelta ' + moment(delta));
        };
        /* alert on Resize */
        $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view) {
            $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
        };
        /* add and removes an event source of choice */
        $scope.addRemoveEventSource = function(sources, source) {
            var canAdd = 0;
            angular.forEach(sources, function(value, key) {
                if (sources[key] === source) {
                    sources.splice(key, 1);
                    canAdd = 1;
                }
            });
            if (canAdd === 0) {
                sources.push(source);
            }
        };
        /* add custom event*/
        $scope.addEvent = function() {
            $scope.events.push({
                title: $scope.ev.title,
                start: moment($scope.ev.from),
                end: moment($scope.ev.to),
                allDay: true,
                className: ['openSesame']
            });
        };
        /* remove event */
        $scope.remove = function(index) {
            $scope.events.splice(index, 1);
        };
        /* Change View */
        $scope.changeView = function(view, calendar) {
            $scope.currentView = view;
            uiCalendarConfig.calendars[calendar].fullCalendar('changeView', view);
        };
        /* Change View */
        $scope.renderCalender = function(calendar) {
            $timeout(function() {
                if (uiCalendarConfig.calendars[calendar]) {
                    uiCalendarConfig.calendars[calendar].fullCalendar('render');
                }
            });
        };
        /*/* Render Tooltip */
        /* $scope.eventRender = function( event, element, view ) { 
             element.attr({'tooltip': event.title,
                          tooltip-append-to-body': true});
             $compile(element)($scope);
         };*/
        /* config object */

        $scope.ev = {};
        $scope.uiConfig = {
            calendar: {
                height: 450,
                editable: true,
                header: {
                    left: '',
                    center: 'title',
                    right: 'today prev,next'
                },
                dayClick: $scope.alertOnDayClick,
                eventClick: $scope.alertOnEventClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize,
                eventRender: $scope.eventRender,
                businessHours: {
                    start: '10:00', // a start time (10am in this example)
                    end: '18:00', // an end time (6pm in this example)

                    dow: [1, 2, 3, 4]
                    // days of week. an array of zero-based day of week integers (0=Sunday)
                    // (Monday-Thursday in this example)
                }
            }
        };

        $scope.changeLang = function() {
            if ($scope.changeTo === 'Hungarian') {
                $scope.uiConfig.calendar.dayNames = ["Vasárnap", "Hétfo", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
                $scope.uiConfig.calendar.dayNamesShort = ["Vas", "Hét", "Kedd", "Sze", "Csüt", "Pén", "Szo"];
                $scope.changeTo = 'English';
            } else {
                $scope.uiConfig.calendar.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                $scope.uiConfig.calendar.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                $scope.changeTo = 'Hungarian';
            }
        };
        /* event sources array*/
        $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
        $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];
        /////////////////////////////////////////////////////////////////////////////////////////////
        $scope.loadRadio = function() {

            $scope.serviceSchedule = ({
                'New': '0'
            })
        };

        $scope.getAccessories = function() {

            $scope.availableCode = [{
                id: 'A00',
                desp: 'Coupling'
            }, {
                id: 'A01',
                desp: 'Base Plate'
            }, {
                id: 'A02',
                desp: 'Brake System'
            }, {
                id: 'A10',
                desp: 'Shrink Disc'
            }, {
                id: 'A11',
                desp: 'Pulley'
            }, {
                id: 'A12',
                desp: 'Sprocket'
            }, {
                id: 'A13',
                desp: 'Backstop'
            }];

        };
        $scope.servicesheduled = [{
            isOpen: false
        }, {
            isOpen: false
        }, {
            isOpen: false
        }, {
            isOpen: false
        }];
        $scope.servicesheduled2 = [{
            isOpen: false
        }, {
            isOpen: false
        }];
        $scope.servicesheduled3 = [{
            isOpen: false
        }, {
            isOpen: false
        }];
        $scope.packingtypes = [{
            id: 1,
            label: 'Inspection Done'
        }, {
            id: 2,
            label: 'Inspection WIP'
        }, {
            id: 3,
            label: 'Waiting for parts'
        }, {
            id: 4,
            label: 'Assembly WIP'
        }, {
            id: 5,
            label: 'Assembly Done'
        }, {
            id: 6,
            label: 'Waiting for Delivery'
        }, {
            id: 5,
            label: 'Case Close'
        }, {
            id: 6,
            label: 'Waiting for Inspection'
        }];


    });