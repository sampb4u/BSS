angular.module('app')
//=================================
	//Floating Lables Demo
//=================================
	  
	 .directive('withFloatingLabel', function () 
	 {
	    return {
    	    restrict: 'A',
        	link: function ($scope, $element, attrs) {
            var template = '<div class="floating-label">' + attrs.placeholder +'</div>';

            //append floating label template
            $element.after(template);

            //remove placeholder
            $element.removeAttr('placeholder');

            //hide label tag assotiated with given input
            document.querySelector('label[for="' +  attrs.id +  '"]').style.display = 'none';

            $scope.$watch(function () {
                if($element.val().toString().length < 1) {
                    $element.addClass('empty');
                } else {
                    $element.removeClass('empty');
                }
            });
	        }
    	};
	});



/*
//==========================================================//
     //---------------Customer DB -------------------//
//=========================================================//
angular.module('app')
.controller('customerdashboardController', function($scope,$http,$rootScope) {
	
	
	$scope.loadCustomersForDB  = function() 
	 {
		     $scope.customersData = [];
		
                        $.getJSON("getAllAccountNames.do",function(json)
						{
					
							//alert(JSON.stringify(json['data']));
							 $scope.customersData = json['data'];
							  	  	
							 $scope.$apply();
					
						});

                  
	 }
	 
	 //$scope.editCustomerData = function()
//		{
//			
//			var acountName = "0";
//			$rootScope.acountName = acountName;
//			alert($rootScope.acountName);
//		}
	 
	 $index = 0;
	 $scope.data = [];
     $scope.quoteArray = []; 
	 $scope.OrderArray = [];
	 $scope.caseArray = []; 
	 $scope.HistoryArray = [];
	 $scope.getImage = [];
	 $scope.loadAllCustomerDetails = function(accountname)
	 {	
			
		    $index++;
			$scope.data.push({'id': $index});
			$scope.quoteArray.push({'id': $index});
			$scope.OrderArray.push({'id': $index});
			$scope.caseArray.push({'id': $index});
			$scope.HistoryArray.push({'id': $index});
			$scope.getImage = [];
			$scope.OpenQuotations = "0";
			$scope.QuoteVal = "0.00";
			$scope.opportunityAmount = "0.00";     
				//alert(accountname);
		   if(accountname == undefined || accountname == "")
		   {
			   //alert("no data found");
			    $index = 1;
                $scope.data = [{'id': $index}];
				$scope.quoteArray = [{'id': $index}];
				$scope.OrderArray = [{'id': $index}];
				$scope.caseArray = [{'id': $index}];
				$scope.HistoryArray = [{'id': $index}];
				$scope.OpenQuotations = "0";
				$scope.QuoteVal = "0.00";
				$scope.opportunityAmount = "0.00";   
		   }
		   else
		   {
			   //alert(" data found");
			   $.post("getAllCustmerDetailsforcustmerDB.do",{account:accountname},function(json)
					{
						
						 $index = 1;
                         $scope.OrderArray = [{'id': $index}];
						 $scope.HistoryArray = [{'id': $index}];
						 
						var p = JSON.stringify(json['check']);
						var q = json['custmer'][0];
						
						var totalQuotes = json['quatationgrid'].length;
						var tVal = "";
						var tVal2 = 0;
						
						$("#loading").show();
						 
					// alert(JSON.stringify(json['custmer'].length));
							
						if(p!=0)
						{
								//var getAppCode = json['custmer'][0].application;
								//var getIndustryName = json['custmer'][0].applicanIndustry;
								
								 //$scope.customerMaster = json['custmer'][0];
								 
								 $("#loading").hide();
								 $scope.account = q.account;
								 $scope.contName = q.contName;
								 $scope.email = q.email;
								 $scope.billingCountries = q.billingCountries;
								 $scope.application = q.application;
								 $scope.salesPerson = q.salesPerson;
								 $scope.salesPersonCode = q.salesPersonCode;
								 $scope.phnumber = q.phnumber;
								 $scope.ophnumber = q.ophnumber;
								 $scope.mbnumber = q.mbnumber;
								 $scope.fax = q.fax;
								 $scope.clientwebsite = q.clientwebsite;
								 $scope.departmentname = q.departmentname;
								 $scope.customerGroup = q.customerGroup;
								 
								 if(q.opportunityAmount == undefined || q.opportunityAmount == "")
								 {
									 $scope.opportunityAmount = "0.00";  
								 }
								 else
								 {
									 $scope.opportunityAmount = q.opportunityAmount;
								 }
								 
								 
								 //var img = q.imagename.length;
								 
								 if(q.imagename == undefined || q.imagename == "")
								 {
									 //$scope.getImage = "";
									 $(".polaroid").show();
									  $("#dynamic").show();
									 //alert("no img");
								 }
								 else
								 {
									  //alert(" img");
									  $scope.getImage = q.imagename;
									  $(".polaroid").show();
									  $("#dynamic").hide();
									
								 }
								 if(json['grid'].length<1)
								 {
									 $index = 1;
                       				 $scope.data = [{ 'id': $index}];
								 }
								 else
								 {
									 $scope.data = json['grid'];
								 }
								 
								
								 if(json['casedata'].length<1)
								 {
									 //$("#caseblk").hide();
									 $index = 1;
                       				 $scope.caseArray = [{ 'id': $index}];
								 }
								 else
								 {
									// $("#caseblk").show();
									 $scope.caseArray = json['casedata'];
								 }
								 
								 
								 
								 if(json['quatationgrid'].length<1)
								 {
									 //$("#qtnblk").hide();
									 $index = 1;
                       				 $scope.quoteArray = [{ 'id': $index}];
									 $scope.OpenQuotations = 0;
									 $scope.QuoteVal = tVal2.toFixed(2);
									 //alert("if");
								 }
								 else
								 {
									 //alert("else");
									 //$("#qtnblk").show();
									 $scope.quoteArray = json['quatationgrid'];
									 $scope.OpenQuotations = totalQuotes;
									 for(var i=0;i<json['quatationgrid'].length;i++)
									 {
										 tVal = parseFloat(json['quatationgrid'][i].grandTotal);
										
											 tVal2 += tVal;
											// alert(tVal2);
										$scope.QuoteVal = tVal2.toFixed(2);
										
									 }
									var quoteType = json['quatationgrid'][0].qtnType;
									if(quoteType=="0")
									{
										$scope.quotationType = "Full Unit";
									}
									else if(quoteType=="1")
									{
										$scope.quotationType = "Project";
									}
									else if(quoteType=="2")
									{
										$scope.quotationType = "Spare Parts(Only)";
									}
									else
									{
										$scope.quotationType = "Spare part and service";
									}
									 
								 }
								 
	
								  $scope.$apply();
						   
						}
					 
				  });	
	
		   }
			
							 
	};
			
	
	
	$scope.getAddedRemarks = function(remarks)
	{
		//alert(remarks);
		$scope.$apply();
	}
    
});	*/

//==========================================================//
     //--------------Customer Dashboard--------------------//
//=========================================================//

angular.module('app')
.controller('customerDBController',function($scope,$http,$rootScope){
	
	$scope.loadCustomersForDB  = function() 
	 {
		     $scope.customersData = [];
		
                        $.getJSON("getAllAccountNames.do",function(json)
						{
					
							//alert(JSON.stringify(json['data']));
							 $scope.customersData = json['data'];
							  	  	
							 $scope.$apply();
					
						});

                  
	 }
	 $index = 0;
	 $scope.data = [];
     $scope.quoteArray = []; 
	 $scope.OrderArray = [];
	 $scope.caseArray = []; 
	 $scope.HistoryArray = [];
	 $scope.getImage = [];
	 $scope.loadAllCustomerDetails = function(accountname)
	 {	
	      
			
		    $index++;
			$scope.data.push({'id': $index});
			$scope.quoteArray.push({'id': $index});
			$scope.OrderArray.push({'id': $index});
			$scope.caseArray.push({'id': $index});
			$scope.HistoryArray.push({'id': $index});
			$scope.getImage = [];
			$scope.OpenQuotations = "0";
			$scope.QuoteVal = "0.00";
			$scope.opportunityAmount = "0.00";     
				//alert(accountname);
		   if(accountname == undefined || accountname == "")
		   {
			   //alert("no data found");
			    $index = 1;
                $scope.data = [{'id': $index}];
				$scope.quoteArray = [{'id': $index}];
				$scope.OrderArray = [{'id': $index}];
				$scope.caseArray = [{'id': $index}];
				$scope.HistoryArray = [{'id': $index}];
				$scope.OpenQuotations = "0";
				$scope.QuoteVal = "0.00";
				$scope.opportunityAmount = "0.00"; 
				$("#editCust").addClass("active2");  
		   }
		   else
		   {
			   //alert(" data found");
			   $.post("getAllCustmerDetailsforcustmerDB.do",{account:accountname},function(json)
					{
						
						$("#editCust").removeClass("active2");
						 $index = 1;
                         $scope.OrderArray = [{'id': $index}];
						 $scope.HistoryArray = [{'id': $index}];
						 
						var p = JSON.stringify(json['check']);
						var q = json['custmer'][0];
						
						var totalQuotes = json['quatationgrid'].length;
						var tVal = "";
						var tVal2 = 0;
						
						$("#loading").show();
						 
					// alert(JSON.stringify(json['custmer'].length));
							
						if(p!=0)
						{
								//var getAppCode = json['custmer'][0].application;
								//var getIndustryName = json['custmer'][0].applicanIndustry;
								
								 //$scope.customerMaster = json['custmer'][0];
								 
								 $("#loading").hide();
								 $scope.account = q.account;
								 $scope.contName = q.contName;
								 $scope.email = q.email;
								 $scope.billingCountries = q.billingCountries;
								 $scope.application = q.application;
								 $scope.salesPerson = q.salesPerson;
								 $scope.salesPersonCode = q.salesPersonCode;
								 $scope.phnumber = q.phnumber;
								 $scope.ophnumber = q.ophnumber;
								 $scope.mbnumber = q.mbnumber;
								 $scope.fax = q.fax;
								 $scope.clientwebsite = q.clientwebsite;
								 $scope.departmentname = q.departmentname;
								 $scope.customerGroup = q.customerGroup;
								 
								 if(q.opportunityAmount == undefined || q.opportunityAmount == "")
								 {
									 $scope.opportunityAmount = "0.00";  
								 }
								 else
								 {
									 $scope.opportunityAmount = q.opportunityAmount;
								 }
								 
								 
								 //var img = q.imagename.length;
								 
								 if(q.imagename == undefined || q.imagename == "")
								 {
									 //$scope.getImage = "";
									 $(".polaroid").show();
									  $("#dynamic").show();
									 //alert("no img");
								 }
								 else
								 {
									  //alert(" img");
									  $scope.getImage = q.imagename;
									  $(".polaroid").show();
									  $("#dynamic").hide();
									
								 }
								 if(json['grid'].length<1)
								 {
									 $index = 1;
                       				 $scope.data = [{ 'id': $index}];
								 }
								 else
								 {
									 $scope.data = json['grid'];
								 }
								 
								
								 if(json['casedata'].length<1)
								 {
									 //$("#caseblk").hide();
									 $index = 1;
                       				 $scope.caseArray = [{ 'id': $index}];
								 }
								 else
								 {
									// $("#caseblk").show();
									 $scope.caseArray = json['casedata'];
								 }
								 
								 
								 
								 if(json['quatationgrid'].length<1)
								 {
									 //$("#qtnblk").hide();
									 $index = 1;
                       				 $scope.quoteArray = [{ 'id': $index}];
									 $scope.OpenQuotations = 0;
									 $scope.QuoteVal = tVal2.toFixed(2);
									 //alert("if");
								 }
								 else
								 {
									 //alert("else");
									 //$("#qtnblk").show();
									 $scope.quoteArray = json['quatationgrid'];
									 $scope.OpenQuotations = totalQuotes;
									 for(var i=0;i<json['quatationgrid'].length;i++)
									 {
										 tVal = parseFloat(json['quatationgrid'][i].grandTotal);
										
											 tVal2 += tVal;
											// alert(tVal2);
										$scope.QuoteVal = tVal2.toFixed(2);
										
									 }
									var quoteType = json['quatationgrid'][0].qtnType;
									if(quoteType=="0")
									{
										$scope.quotationType = "Full Unit";
									}
									else if(quoteType=="1")
									{
										$scope.quotationType = "Project";
									}
									else if(quoteType=="2")
									{
										$scope.quotationType = "Spare Parts(Only)";
									}
									else
									{
										$scope.quotationType = "Spare part and service";
									}
									 
								 }
								 
	
								  $scope.$apply();
						   
						}
					 
				  });	
	
		   }
			
							 
	};		
	$scope.editCustomerData = function()
	{
		//alert(455);
		var CustomerDashBoard = "0";
		$rootScope.loadEditCustDB = CustomerDashBoard;
		//alert($rootScope.loadEditCustDB);
	}
	
	
	
	$scope.getAddedRemarks = function(remarks)
	{
		//alert(remarks);
		$scope.$apply();
	}
	
	
});
 
//==========================================================//
     //--------------Region Master--------------------//
//=========================================================//
angular.module('app')
    
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
           regiondatamasterData=[];
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
							var countrycode=$scope.AddRegion.countrycode;
                          $scope.getRegions(countrycode);
                         regiondatamasterData.length=0;
						  
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
		
		
		
		
		$scope.getRegions=function(countryCode){
			//alert(countryCode);
			 var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getRegion.do",
                data: countryCode,
            }).success(function(data, status) {
				
               if(data.length==0){
			   $index = 1;
                    $scope.RegionDataFoorm = [{
                        'id': $index,
						'status': '0'
                    }];
			   }else{
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
		
      
		
    $scope.getvalidateRegionCode = function(values,index) {
      		
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
            } else  {
              $(".existValRC122" + index).hide();
						   	$("#buttonhide").prop('disabled', false);
            }

        });
    };
	
	
	
		$scope.getvalidateRegion=function(region,index){
			

var region=region.toUpperCase();
			var count=0;
			
			 angular.forEach($scope.RegionDataFoorm, function(value, index) {
						
                        var sum = (value.region).toUpperCase();
						
					 if(region==sum){
						   count++;
					   }
					
                    })
			 
			// alert("COUNT  "+count);
			 if(count>1){
				 swal("Region Name Already Exist");
				  $scope.RegionDataFoorm[index].region="";
			 }else{
				// alert("enterd");
				  // $(".existValRC122" + index).hide();
			 }
			
			
			};
			
			/*$scope.getvalidateRegionCode=function(regionCode,index){
				
				var regionCode=regionCode.toUpperCase();
				//alert(regionCode);
			var count=0;
			
			 angular.forEach($scope.RegionDataFoorm, function(value, index) {
						
                        var sum = (value.regionCode).toUpperCase();
						
					 if(regionCode==sum){
						   count++;
					   }
					
                    })
			 
			// alert("COUNT  "+count);
			 if(count>1){
				 swal("RegionCode Name Already Exist");
				  $scope.RegionDataFoorm[index].regionCode="";
			 }else{
				// alert("enterd");
				  // $(".existValRC122" + index).hide();
			 }
				
				
				
				};*/
		
		
		
    });

//==========================================================//
     //--------------Yearly Budget--------------------//
//=========================================================//

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
			//alert(JSON.stringify(data));
            $scope.countryNames = data;
        });
    };
	$scope.yearNames = [];
    $scope.loadYearNames = function() {
		
		    var d = new Date();
			var n = d.getFullYear();
			//alert(n);
			for(var i = 1991;i<=n;i++)
			{
				$scope.yearNames.push({'year':i});
				//alert(JSON.stringify($scope.yearNames));
			}
			$scope.$apply();
        /*var httpRequest = $http({
            method: 'POST',
            url: "/SCA-360/loadDropDown.do",
            data: jsonYearString,
        }).success(function(data, status) {
			
			
        });*/
    };

    $scope.loadProductCategory = function() {
        var httpRequest = $http({
            method: 'POST',
            url: "/SCA-360/loadDropDown.do",
            data: jsonproductCategoryString,
        }).success(function(data, status) {
			//alert(JSON.stringify(data));
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
		  if(m1==null || m1=='' )
		  {
			  m1 = 0;
		  }
		  if(m2==null || m2=='')
		  {
			  m2=0;
		  }
		  if(m3==null || m3=='')
		  {
			  m3=0;
		  }
            $scope.data[id].quarter1 = Number(m1) + Number(m2) + Number(m3);
            //alert($scope.data[id].quarter1);
            $scope.data[id].quarter1 = Number(Math.round($scope.data[id].quarter1 + 'e2') + 'e-2');
        
    };

    $scope.getq2total = function(id, m1, m2, m3) {

        //if (m2 != null && m3 != null) {
			 if(m1==null || m1=='' )
		  {
			  m1 = 0;
		  }
		  if(m2==null || m2=='')
		  {
			  m2=0;
		  }
		  if(m3==null || m3=='')
		  {
			  m3=0;
		  }
			
			
            $scope.data[id].quarter2 = Number(m1) + Number(m2) + Number(m3);
        //}
    };

    $scope.getq3total = function(id, m1, m2, m3) {

      //  if (m2 != null && m3 != null) {
		   if(m1==null || m1=='' )
		  {
			  m1 = 0;
		  }
		  if(m2==null || m2=='')
		  {
			  m2=0;
		  }
		  if(m3==null || m3=='')
		  {
			  m3=0;
		  }
            $scope.data[id].quarter3 = Number(m1) + Number(m2) + Number(m3);
            $scope.data[id].quarter3 = Number(Math.round($scope.data[id].quarter3 + 'e2') + 'e-2');
       // }
    };
    $scope.getq4total = function(id, m1, m2, m3) {

       // if (m2 != null && m3 != null) {
		    if(m1==null || m1=='' )
		  {
			  m1 = 0;
		  }
		  if(m2==null || m2=='')
		  {
			  m2=0;
		  }
		  if(m3==null || m3=='')
		  {
			  m3=0;
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

//==========================================================//
     //--------------Migrate Table Master--------------------//
//=========================================================//

angular.module('app')

.controller('MigrationMaster',function($scope,$http)
{
			$scope.migrateTableData=function()
		   {			
			var httpRequest = $http({
					method: 'POST',
					url : "/SCA-360/getMigrateData.html",
					data: '',
			   }).success(function(data, status) 
			   {
					
			   }); 
			};
});

//==========================================================//
     //--------------Historical Data--------------------//
//=========================================================//


angular.module('app')
	.controller('HistoryMasterData',function($scope,$http)
	{
		$scope.data = [];
		$index=0;
		var obj = new Object();
		var filterData = new Object();
		var countryObj = new Object();
		countryObj.dropdownname = "Country";
		countryObj.columnname = "country";
		countryObj.columncode = "countrycode";
		var jsonCountryString= JSON.stringify(countryObj);
		
		var yearObj = new Object();
		yearObj.dropdownname = "Year";
		yearObj.columnname = "year";
		yearObj.columncode = "historyflag";
		var jsonYearString= JSON.stringify(yearObj);
		
		var productCategoryObj = new Object();
		productCategoryObj.dropdownname = "ProductCategory";
		productCategoryObj.columnname = "productcategory";
		productCategoryObj.columncode = "productcategorycode";
		var jsonproductCategoryString= JSON.stringify(productCategoryObj);
		
		//$scope.year = [{ year: 2002, year: 2002 },{ year: 2003, year: 2003 },{ year: 2004, year: 2004 },{ year: 2005, year: 2005 },{ year: 2006, year: 2006 },{ year: 2007, year: 2007 },{ year: 2008, year: 2008 }, { year: 2009, year: 2009 }, { year: 2010, year: 2010 },{ year: 2011, year: 2011 },{ year: 2012, year: 2012 }];
		
		$scope.loadCountryNames = function()
		{
			var httpRequest = $http({
				method: 'POST',
				url : "/SCA-360/loadDropDown.do",
				data: jsonCountryString,
			   }).success(function(data, status) 
				{
					$scope.countryNames=data;
				}); 
		};
		
		$scope.loadYearNames = function()
		{
			var httpRequest = $http({
				method: 'POST',
				url : "/SCA-360/loadDropDown.do",
				data: jsonYearString,
			   }).success(function(data, status) 
				{
					$scope.yearNames=data;
				}); 
		};
		$scope.loadProductCategory = function()
		{
			var httpRequest = $http({
			method: 'POST',
			url : "/SCA-360/loadDropDown.do",
			data: jsonproductCategoryString,
			}).success(function(data, status) 
			{
				
				$scope.product=data;
			}); 
		};
		
		$scope.loadhistoryFlag = function()
		{
			$scope.AddHistoricalData={'historyFlag':0};		
		};
		 
		$scope.gethistoryFlag = function(Year,CountryCode)
		{			
			if(Year >=2002)
			{
				
				$scope.AddHistoricalData={'historyFlag':0,'year':Year,'countryCode':CountryCode};
				
			}
			else
			{
				$scope.AddHistoricalData={'historyFlag':1,'year':Year,'countryCode':CountryCode};
				
			}
			
		};
		
		$scope.changeProductCategoryStatus = function(status)
		{
			if(status=='0') { $scope.requiredstatus = true; } else { $scope.requiredstatus = false; }
		};
		$scope.loadGridData = function(status)
		{
			filterData.countryCode = $scope.AddHistoricalData.countryCode;
			filterData.year = $scope.AddHistoricalData.year;
			filterData.pcCode = $scope.AddHistoricalData.pcCode;
			
			
			if(status=='0') 
			{
				
				 if(filterData.countryCode!='' && filterData.year!='' && filterData.pcCode!=null)
				{
					
					//alert("All there");
					//alert(JSON.stringify(filterData));
					var httpRequest = $http({
				 	  method: 'POST',
					  url : "/SCA-360/getProductsByCategory.do",
					  data: JSON.stringify(filterData),
				   }).success(function(data, status) 
					{
							$("#errorMsg").hide();
							$('.tabData').show();
							$scope.data = data;
							
					}).error(function(data, status)
					{
						$scope.data = [];
						$('.tabData').hide();
						$('#errorMsg').show();
						$('#errorMsg').html("No Historical Data for this Product Category");
					});
				}
				else 
				{
					$scope.requiredstatus = true;
					//alert("select all");
				}
					
			
			
			}
			else if(status=='1')
			{
				
				
					
					var httpRequest = $http({
				 	  method: 'POST',
					  url : "/SCA-360/getProductsByCountry.do",
					  data: JSON.stringify(filterData),
					}).success(function(data, status) 
					{
						$scope.data = data;	
					});
					
						
				//alert("no ajax call");
			}

		};
		
		$scope.addFormField = function() 
		{
			
			$index++;
		    $scope.data.push({'id':$index})
		};
		
		$scope.removeRow = function(name)
		{				
			var Index = -1;		
			var comArr = eval( $scope.data );
			for( var i = 0; i < comArr.length; i++ ) 
			{
				if( comArr[i].id === name ) 
				{
					Index = i;
					break;
				}				
			}
			$scope.data.splice( Index, 1 );
			$index = comArr.length;
			for(var s=0;s<$index;s++)
			{
				$scope.data[s].id = Number(s)+Number(1);
			}
			
  	    };
				
		
		//----Submit Form----//
		$scope.AddHistory = function(AddHistoricalData,form)
		{
			
			if($scope.HistoricalDataForm.$valid) 
					{
						//alert(form);
						  gridData = [];	
						  $scope.data.forEach(function (HistoryData) 
						  {
							 gridData.push(angular.toJson(HistoryData));														 
						  });
						  obj.gridData = gridData;
						  obj.formData = angular.toJson(AddHistoricalData);
						  delete obj["$index"];
						  //alert(obj.formData);
						  //alert(JSON.stringify(obj));
						
						$.ajax({
							url:"/SCA-360/saveHistoricalData.do",
							processData:true,
							type:'POST',
							contentType:'Application/json',
							data:JSON.stringify(obj),
							beforeSend: function(xhr) 
							{
								xhr.setRequestHeader("Accept", "application/json");
								xhr.setRequestHeader("Content-Type", "application/json");
							},
							success:function(response) 
							{
								if(response==true)
								{
									swal("", 'Historical Data Added Successfully' , "success");
									$index=1;
									$scope.data = [{'id':$index}]
									form.$setPristine(true);
									$scope.AddHistoricalData = angular.copy($scope.master);
									$scope.loadhistoryFlag();
								}
							   else
								{
								   swal("Oops sorry...", "Something went wrong!", "error");
									
								}
							}
						});	
					}	
					else
					{
						var field = null, firstError = null;
						for (field in form) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form[field].$valid) 
								{
									firstError = form[field].$name;
								}
								if (form[field].$pristine) 
								{
									form[field].$dirty = true;
								}
							}	
						}
					}
		};
		
		
		//---Reset ----
		 $scope.reset = function(form)
		   {			  
				$scope.AddHistoricalData = angular.copy($scope.master);
				
				$index=1;
				$scope.data = [{'id':$index}]				
			    form.$setPristine(true);
				$scope.loadhistoryFlag();
		   };	
		
	});

//==========================================================//
     //--------------User Master--------------------//
//=========================================================//

	angular.module('app')
		.controller("userMasterController",function($http,$scope)
		{
			
				$scope.userData = {'status':0,"utctimeZone":'NA'};
				var cusImage = new FormData();
				$scope.master = {};
				
				var countryObj = new Object();
				countryObj.dropdownname = "Country";
				countryObj.columnname = "country";
				countryObj.columncode = "countrycode";
				var jsonCountryString= JSON.stringify(countryObj);
				
				
				var salesmanObj = new Object();
				salesmanObj.dropdownname = "Salesman";
				salesmanObj.columnname = "salesman";
				salesmanObj.columncode = "salesmancode";
				var jsonsalesmanString= JSON.stringify(salesmanObj);
				
				var numOfPieces = 6 * 6;
				var frag = document.createDocumentFragment();

				function insertInnerPieces($el, innerPieces) 
				{
				  for (var i = 0; i < innerPieces; i++) 
				  {
				    var $inner = document.createElement('div');
			    	$inner.classList.add('popup__piece-inner');
				    $el.appendChild($inner);
				  }
				};
	
				for (var i = 1; i <= numOfPieces; i++) 
				{
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
				
				//------Get Country Code------
				$.ajax({
					  url:"/SCA-360/loadDropDown.do",
					  processData:true,
					  type:'POST',
					  contentType:'Application/json',
					  data:jsonCountryString,
					  success:function(responce) 
					  {
						  responce.push({"countrycode":"all","country":"All"});
						  $scope.CountryCode = responce;
					  }
				});		
				
				
					$.ajax({
					  url:"/SCA-360/loadDropDown.do",
					  processData:true,
					  type:'POST',
					  contentType:'Application/json',
					  data:jsonsalesmanString,
					  success:function(responce) 
					  {
						//  alert(JSON.stringify(responce));
						  //responce.push({"countrycode":"all","country":"All"});
						  $scope.salesmancodes = responce;
					  }
				});		
				
				//------get All Added Users----
				
				$scope.loadAllAddedUsers = function()
				{
					$.ajax({
						  url:"/SCA-360/getAllUsers.do",
						  processData:true,
						  type:'POST',
						  contentType:'Application/json',
						  data:{},
						  success:function(responce) 
						  {
							  //alert(JSON.stringify(responce));
							  $scope.AddedUserData = responce;
							  $scope.$apply();
						  }		
						 });
						 	
				};
				
				//-----Show Popup--------------
				$scope.showPopup = function(UserData)
				{					 
					//alert(JSON.stringify(UserData));
					$scope.userData = UserData;
					  overlay.appendTo(document.body);	
					  $popupsCont.classList.add('s--popup-active');
					  $popup.classList.add('s--active');
					  
					  
					  if(UserData.photoPath!=null && UserData.signaturePath!=null)
					  {
						  
						  var img = $('<img src="'+UserData.photoPath+'" width="200" height="150"/>', {id: 'dynamic',width:200,height:150 });
						  var img1 = $('<img src="'+UserData.signaturePath+'" width="200" height="150"/>', {id: 'dynamic',width:200,height:150 });
						  
						  var photoName = UserData.photoPath.split("/");
						  var signatureName = UserData.signaturePath.split("/");
						  
					  
						 $("#photo").attr("data-content",$(img)[0].outerHTML).popover("show");
		            	 $("#1photoinput").text("Change");
	        		     $("#2photoinput").show();
			             $("#3photoinput").val(photoName[1]);        
					 
						 $scope.dummyPhoto="1";
						 $('#dummyPhoto').trigger('blur');
						// cusImage.append("userphoto", img[0]);
						// cusImage.append("usersign", img1[0]);
					 					 
						 $("#signature").attr("data-content",$(img1)[0].outerHTML).popover("show");
			             $("#1siginput").text("Change");
        			     $("#2siginput").show();
		    	         $("#3siginput").val(signatureName[1]); 
						 $scope.dummySignature="1";
						 $('#dummySignature').trigger('blur');
					 
						 //$('#photoinput').val(UserData.photoPath);         
					  }
					  else
					  {
						  $('.image-preview').popover('hide');
						  $("#1photoinput").text("Upload Photo");
						  $("#1siginput").text("Upload Signature");
						  
						  $("#3photoinput").val("");
						  $("#3siginput").val("");
						  $("#2photoinput").hide();
						  $("#2siginput").hide();
					  }
					 
				};
				
				//--------User Master Submit---
				$scope.userMasterFormSubmit  = function(userData,form)
				{
					//alert(angular.toJson(userData));
					if($scope.userMaster.$valid) 
					{
						cusImage.append("formData", angular.toJson(userData));
						//alert(JSON.stringify(cusImage));
						$http.post("/SCA-360/saveUsers.do", cusImage, {
						        withCredentials: true,
					        	 headers: {'Content-Type': undefined },
						       	 transformRequest: angular.identity
							  }).success(function(data, status) 
						 	   { 
							   		
									$scope.loadAllAddedUsers();	
									if(data==true)
									{
										swal("", 'User Added Successfully' , "success");
										cusImage = new FormData();
										$('.popup__close').click();
										$scope.userData = angular.copy($scope.master);				
				    					form.$setPristine(true);
										$scope.userData = {'status':0,"utctimeZone":'NA'};
										
										$('#photo').attr("data-content","").popover('hide');
								        $('#3photoinput').val("");
								        $('#2photoinput').hide();
										$('#photoinput').val("");
										$("#1photoinput").text("Upload Photo");										
										
										$('#signature').attr("data-content","").popover('hide');
								        $('#3siginput').val("");
								        $('#2siginput').hide();
										$('#siginput').val("");
										$("#1siginput").text("Upload Photo");	
										//$scope.loadAllAddedUsers();
										$.ajax({
											  url:"/SCA-360/getAllUsers.do",
											  processData:true,
											  type:'POST',
											  contentType:'Application/json',
											  data:{},
											  success:function(responce) 
											  {
												  //alert(JSON.stringify(responce));
												  $scope.AddedUserData = responce;
												  $scope.$apply();
											  }		
											 });
										$scope.$apply();
										
									}
									else
									{
										swal("Oops sorry...", "Something went wrong!", "error");
									}
					           });							
					}
					else
					{
							//alert(1);
							var field = null, firstError = null;
							for (field in form) 
							{
								if (field[0] != '$') 
								{
									if (firstError === null && !form[field].$valid) 
									{
										firstError = form[field].$name;
									}
									if (form[field].$pristine) 
									{
										form[field].$dirty = true;
									}
								}	
							}						
					}						
				};
				
				

				/*var g = new Blob();
				cusImage.append("userphoto", g );	
				cusImage.append("usersign", g );*/	
				
				/*$scope.uploadAadharFile = function(files) 
				{	
				//alert(e.target.files);
					//alert(files);
					//alert(files.length);
					$scope.dummyPhoto="1";
					$('#dummyPhoto').trigger('blur');
					//cusImage.delete("userphoto");
					//for(var i=0;i<files.length;i++)
					//{
						cusImage.append("userphoto", files[0]);	
						//alert(JSON.stringify(cusImage));
					//}
		    											
				};*/				
				
				/*$scope.uploadSignatureFile = function(files) 
				{
					$scope.dummySignature="1";
					$('#dummySignature').trigger('blur');
					//cusImage.delete("usersign");
		    		cusImage.append("usersign", files[0]);
				};*/
				
				/*$scope.rmvUserFilePath = function()
				{
					alert(45545);
				}*/
	
				//---Reset ----
				 $scope.reset = function(form)
				{	
				   	  
					$scope.userData = angular.copy($scope.master);				
				    form.$setPristine(true);
					$scope.userData = {'status':0,"utctimeZone":'NA'};
					cusImage = new FormData();
					$('#photo').attr("data-content","").popover('hide');
			        $('#3photoinput').val("");
			        $('#2photoinput').hide();
					$('#photoinput').val("");
					$("#1photoinput").text("Upload Photo");										
								
					$('#signature').attr("data-content","").popover('hide');
			        $('#3siginput').val("");
			        $('#2siginput').hide();
					$('#siginput').val("");
					$("#1siginput").text("Upload Photo");										
					
			    };
				
				
				
		});

//==========================================================//
     //--------------Product Selection--------------------//
//=========================================================//
	

angular.module('app')
.controller("poductSelection",function($scope,$http)
{
//----------Next Wizard Button--
$scope.productSel = {"motor":'0',"freq":'50','requiredstatus':true,'alowleStartupFrq':'0',"workEnv":'0',"ipPro":'0',"mtype":'0',"motorRpm":'1450','mrun':'0','rstartup':'1'};


$scope.requiredStatus = true;

sessionStorage.setItem("formStatus",'false');

sessionStorage.setItem("model1","");
sessionStorage.setItem("model2","");
sessionStorage.setItem("model3","");
sessionStorage.setItem("mountType",'0');
sessionStorage.setItem("motorTypeVal","");


var fiftyHz = [{'value':'200'},{'value':'220'},{'value':'230'},{'value':'240'},{'value':'380'},{'value':'400'},{'value':'415'},{'value':'230/400'},{'value':'240/415'}]
var sixtyHz = [{'value':'200'},{'value':'220'},{'value':'380'},{'value':'400'},{'value':'415'},{'value':'440'},{'value':'460'},{'value':'480'},{'value':'220/380'},{'value':'220/400'},{'value':'220/440'}]
//-----Change Motor RPM----
$scope.buttonNext = function(productSel)
{
	var activeDiv = $('a.selected').attr('href');
	var divID = activeDiv.split("#");
	var currentId = divID[1].split("-");
	var formName = currentId[0]+currentId[1]+"Form";
	var formSubmitted = "submitted"+currentId[1];
	$scope[formSubmitted] = true;

	if($scope[formName].$valid)
	{
		sessionStorage.setItem("formStatus",'true');
	}
	else
	{
		sessionStorage.setItem("formStatus",'false');
	}						
};


		
//----------Previous Wizard Button--
$scope.buttonPrevious = function()
{
	
};
//----------Finish Wizard Button--
$scope.buttonFinish = function()
{
};

/*$scope.loadRequiredStatusForShaftRadial = function()
{
	$scope.productSel={'productionFlag':0};		
};*/
$scope.changeStatus = function(status)
{
	//alert(status);
	if(status=='Direct Shaft') { $scope.requiredStatus = false; } else { $scope.requiredStatus = true; }
}
//--------Calculate Transmitted Power--
$scope.calculateTransmitPower = function(ng,Tt,voltage)
{
	//alert(voltage);
	var ngVal = 0;
	var TtVal = 0;
	var tansmitPower;
	if(ng!=null) {ngVal = ng; } else { ngVal = 0; }
	if(Tt!=null) { TtVal = Tt; } else {  TtVal=0; }
	
	if(voltage!="0")
	{
		tansmitPower = ((TtVal*9550)/ngVal).toFixed(2);	
	}
	else
	{			
		tansmitPower = ((ngVal*TtVal)/9550).toFixed(2);	
	}
	if(isNaN(tansmitPower) || tansmitPower == "Infinity" ){tansmitPower = 0;}else{tansmitPower = tansmitPower;}
	$scope.productSel.calTransPower = tansmitPower;	
	
	
	$.getJSON("select.do",{calpower:tansmitPower},function(json)
	{
		
		if(json['data']!=10)
		{
			$scope.productSel.seletdMtrPwr=json['data'];
			$('#seletdmtrpwr').trigger('blur');
			//alert($scope.productSel.seletdMtrPwr);
			
			$.getJSON("getMomentofInertia.do",{wattage:json['data'],motortype:$scope.productSel.motorType},function(json)
			{						
				$scope.productSel.loadMntIntjm = json['data'][0]['mi'];
				
				var jlm = $scope.productSel.loadMntIntjlm;
				var jm = $scope.productSel.loadMntIntjm;
				if(jlm==null) { jlm = 0; }else{jlm = jlm;}
				if(jm==null) { jm = 0 ;}else{jm = jm;}
				//alert(jlm);
				//alert(jm);
				var Gd2 =jlm/jm;
				
				if(Gd2 =="Infinity" ) { Gd2 = 0;}else{ Gd2 = Gd2;}
				//alert(Gd2);
				$scope.productSel.mntIntRatio =Gd2.toFixed(2); 
				
			})
					
		}
		else
		{
			alert("Transmitted Power is greater than available range of Prest Neo Gear Motors, Please contact your local Sumitimo Sales Agent");
		}
		
	})
	
	$scope.$apply();	
	
};
//-------Get Moment of Interria-------
$scope.getMomenrOfInterria = function(mtype,watage)
{
	if(watage==null) { watage = 0; }
	$.getJSON("getMomentofInertia.do",{wattage:mtype,motortype:watage},function(json)
	{						
		$scope.productSel.loadMntIntjm = json['data'][0]['mi'].toFixed(2);
	})
};
//-------Calculate Equivalent Torque---
$scope.calculateEquivalentTorque = function(lf,Tt)
{
	var lfVal = 0;
	var TtVal = 0;
	if(lf!=null) { lfVal = lf; } else { lfVal = 0; }
	if(Tt!=null) { TtVal = Tt; } else { TtVal = 0; }
	
	var TeVal = (lfVal*TtVal);
	$scope.productSel.equivalntTorque = TeVal;
	//alert($scope.productSel.equivalntTorque);
	//if($scope.productSel.equivalntTorque!=0 || $scope.productSel.equivalntTorque!='NaN')
	//{
		$scope.getFrameSize($scope.productSel.freq,$scope.productSel.outputRpm,$scope.productSel.redRation,$scope.productSel.shaftRadial,$scope.productSel.equivalntTorque,$scope.productSel.motorType,$scope.productSel.couplingType,$scope.productSel.loadMntInt,$scope.productSel.startupFreq,$scope.productSel.mtype,$scope.productSel.alwstartup);
	//}	
	$scope.$apply();
};
//-----Calculate Shaft Radial ---------
$scope.calculateShaftRadial = function(lcf,cf,fs,pcd,Tt)
{
	var lcfVal = 0;
	var cfVal = 0;
	var fsVal = 0;
	var pcdVal = 0;
	var TtVal = 0;
	
	if(lcf!=null)   { lcfVal = lcf; }else{ lcfVal = 0; }
	if(cf!=null)   { cfVal = cf; }else{ cfVal = 0; }
	if(fs!=null)   { fsVal = fs; }else{ fsVal = 0; }
	if(pcd!=null)  { pcdVal = pcd; }else{ pcdVal = 0; }
	if(Tt!=null)   { TtVal = Tt; }else{ TtVal = 0; }
	var pcdTem = (pcdVal/2);
	if(pcdTem=="Infinity"){pcdTem = 0;}
	var prVal = (TtVal*lcfVal*cfVal*fsVal)/pcdTem;
	if(isNaN(prVal)) {prVal = 0;  } else {prVal = prVal;}
	   $scope.productSel.shaftRadial = prVal.toFixed(2);
	//alert($scope.productSel.shaftRadial);
	//if($scope.productSel.shaftRadial!=0.00  || $scope.productSel.shaftRadial!='NaN')
	//{
		$scope.getFrameSize($scope.productSel.freq,$scope.productSel.outputRpm,$scope.productSel.redRation,$scope.productSel.shaftRadial,$scope.productSel.equivalntTorque,$scope.productSel.motorType,$scope.productSel.couplingType,$scope.productSel.loadMntInt,$scope.productSel.startupFreq,$scope.productSel.mtype,$scope.productSel.alwstartup);
	//}	
	$scope.$apply();
};

//----Calculate Load Moment Intertia Shaft Axis---
$scope.calculateShaftAxis = function(Jl,Z)
{
	var JlVal = 0;
	var ZVal = 0;
	
	if(Jl!=null) { JlVal = Jl;}else{JlVal = 0;}
	if(Z!=null) { ZVal = Z;}else{ZVal = 0;}
	var SquareVal = 1/ZVal;
	if(SquareVal=="Infinity") { SquareVal = 0;}
	var jlmVal = JlVal*SquareVal*SquareVal;
	if(jlmVal==null){jlmVal = 0;}else{jlmVal = jlmVal;}
	$scope.productSel.loadMntIntjlm = jlmVal.toFixed(2);
	//alert($scope.productSel.loadMntIntjlm);
	var jlm = $scope.productSel.loadMntIntjlm;
	var jm = $scope.productSel.loadMntIntjm;
	//alert(jm);
	if(jlm==null) { jlm = 0 }else{jlm = jlm;}
	if(jm==null) { jm = 0 }else{jm = jm;}
	
	var Gd2 =jlm/jm;
	//alert(Gd2);
	if(Gd2=="Infinity") { Gd2 = 0;}else{Gd2 = Gd2; }
	$scope.productSel.mntIntRatio =Gd2.toFixed(2); 			
	//alert($scope.productSel.mntIntRatio);
	$scope.getFrameSize($scope.productSel.freq,$scope.productSel.outputRpm,$scope.productSel.redRation,$scope.productSel.shaftRadial,$scope.productSel.equivalntTorque,$scope.productSel.motorType,$scope.productSel.couplingType,$scope.productSel.loadMntInt,$scope.productSel.startupFreq,$scope.productSel.mtype,$scope.productSel.alwstartup);	
	
	$scope.$apply();		
};

//------Calculate Redution Ratio--------

$scope.calculateReductionRatio = function(rpm,ng)
{
	
	var rpmVal =0;
	var ngVal =0;
	//alert(rpm);
	//alert(ng);
	if(rpm!=null) { rpmVal = $scope.productSel.motorRpm;}else{rpmVal = 0;}
	if(ng!=null) { ngVal = ng;}else{ngVal = 0;}
	//alert(rpmVal);
	var redRatio = rpmVal/ngVal;
	if(redRatio=="Infinity") { redRatio = 0; }
	
	$scope.productSel.calculatedRed = redRatio.toFixed(2);
	
	
	$.getJSON("getReductionRatio.do",{frequency:rpm,rpm:ngVal},function(json)
	{
		//alert(JSON.stringify(json['data']));
	$scope.productSel.redRation = json['data'];
	//alert("red "+ $scope.productSel.redRation);
	//if($scope.productSel.redRation!=0)
	//{
		$scope.getFrameSize($scope.productSel.freq,$scope.productSel.outputRpm,$scope.productSel.redRation,$scope.productSel.shaftRadial,$scope.productSel.equivalntTorque,$scope.productSel.motorType,$scope.productSel.couplingType,$scope.productSel.loadMntInt,$scope.productSel.startupFreq,$scope.productSel.mtype,$scope.productSel.alwstartup);
		$scope.$apply();
	//}	
	})		 	
	
	
	
};


$scope.frequency = function(frequencyvalue)
{
	if(frequencyvalue==50){ $scope.productSel.motorRpm = '1450'; }else{ $scope.productSel.motorRpm='1750';  }
	//alert(frequencyvalue);
	
	$.getJSON("getVoltages.do",{frequencey:frequencyvalue},function(json)
	{
		//alert(JSON.stringify(json['data']));
		$scope.v=json['data'];
		$scope.$apply();			
	})		 	
};

$scope.CouplingTypes = function()
{
	$.getJSON("getCouplingTypes.do",function(json)
	{
		$scope.c=json['data'];
		
	})		 	
};

$scope.Locatinfactor = function()
{
	$.getJSON("getLocationfactor.do",function(json)
	{
		$scope.l=json['data'];
	})		 	
};
		
$scope.Couplingfactor = function()
{
	$.getJSON("getCouplingFactor.do",function(json)
	{
		$scope.co=json['data'];
	})		 	
};

$scope.shockfactor = function()
{
	$.getJSON("getShockFactor.do",function(json)
	{
		$scope.sh=json['data'];
	})		 	
};
				
$scope.loadcontition = function()
{
	$.getJSON("getLoadTypes.do",function(json)
	{
		
		$scope.ldt=json['data'];
	})		 	
};


$scope.getLoadFactor = function(loadtype,hours)
{
	if(loadtype!=null && hours!=null)
	{	
		$.getJSON("getLoadFactor.do",{loadtype:loadtype,hours:hours},function(json)
		{
			 	$scope.productSel.loadFactor=json['data'];
				$('#loadfactor').trigger('blur');
		})				
	}
};		

var intarray = ['3','5','10','15','20','25','30','35','40','50','60','80','100','120','160','200'];

function getVal(array, val, dir) 
{
  for (var i=0; i < array.length; i++) 
  {
      if (array[i] > val)
	  {
        return array[i];
      }
  }
}

$scope.getRadialNodeValues = function(frq)
{
	$.getJSON("OutputSpeedR.do",{frequency:frq},function(json)
	{
			$scope.productSel.allowableRadial = json['data'][0]['RadialLoadN'];
	})						  	
};

//-----------load Allowable Freaquencys on radion buton click-------

$scope.loadAllowableFreq = function(rstartup,couplingType)
{
  //alert(rstartup);
  if(rstartup==0)
  {	
  	//alert(2);
	$.getJSON("getallowablefrequencies.do",{couplingType:couplingType},function(json)
	{
				$scope.allowableFreqVal = json['data'];
				$('#loadmntint').trigger('blur');
				
	})
	//$scope.validStatus=false;
  }
  else
  {
	//  $scope.validStatus=false;
  }
  $scope.$apply();
};

//-----------Change Tourque Placeholder on kw Change-----
$scope.changeTtPlaceholder = function(voltage,rpm,tt)
{
  var rpmKw = 0;
  var ttKw = 0;
  
  if(rpm==null) { rpmKw=0; }else { rpmKw = rpm; } 
  if(tt==null) { ttKw=0; }else { ttKw = tt; } 
  
 
  if(voltage!="0")
  {			  
	   $scope.transTorquepl = "Power to move Load Pab";
	   
	   $scope.$apply();
	  var calc = (ttKw*9550)/rpmKw;
	  $scope.productSel.calTransPower  = calc.toFixed(2);
	  $('#caltranspower').val(calc.toFixed(2));
	// alert($scope.transTorque);
	 // $('#transtorque').trigger('blur'); 
  }
  else
  {
	 
	 $scope.transTorquepl = "Transmitted Torque(Nm)";  
	 var calc = (ttKw*rpmKw)/9550;
	 $scope.productSel.calTransPower  = calc.toFixed(2);
	 $('#caltranspower').val(calc.toFixed(2));
	  //alert($scope.transTorque);
	 // $('#transtorque').trigger('blur');
  }
  
};

//--------get Frame Sixe---
$scope.getFrameSize = function(freq,opRpm,z,pr,te,mType,coupType,jl,strtFrq,mounttype,allowablefreq,selectMotr,voltage)
{
  //alert(coupType);
  var freqVal=0;
  var opRpmVal=0;
  var zVal=0;
  var prVal=0;
  var teVal=0;
  var mTypeVal="";
  var coupTypeVal="";
  var jlVal=0;
  var strtFrqVal=0;
  var selectMotrVal = "";
  var voltageVal = "0";
  
  if(selectMotr==null) { selectMotrVal = ""; } else { selectMotrVal = selectMotr;  }
  if(voltage==null) { voltageVal = ""; } else { voltageVal = voltage;  }
  
  if(allowablefreq==null) { var allowablefrequency = 0;  } else { var allowablefrequency = allowablefreq; }
 // var mounttypeVal = 0;
  if(mounttype==0) { mounttype="Foot Mount"; } else { mounttype="Flange mount"; }
 // alert(jl);
  if($scope.productSel.mrun==0) { jl=0; strtFrq=0; }
  
  if(freq==null) {	freqVal=0; } else { freqVal =freq; }		  
  if(opRpm==null) { opRpmVal=0;} else { opRpmVal =opRpm; }
  if(z==null) {	zVal=0; }  else { zVal = z;}
  if(pr==null) { prVal=0; }  else { prVal=pr; }
  if(te==null) { teVal=0; }  else { teVal =te; }
  if(mType==null) { mTypeVal=""; }  else { mTypeVal =mType; }
  if(coupType==null) { coupTypeVal=""; }  else { coupTypeVal =coupType; }
  if(jl==null) { jlVal=0; }  else { jlVal =jl; }
  if(strtFrq==null) { strtFrqVal=0; }  else { strtFrqVal =strtFrq; }
  
 
 
  // if(MountType==0) { MountType="Foot Mount"; } else { MountType="Flange mount"; }
  //,wattage:selectMotr,voltage:voltageVal
  
 $.getJSON("getframesize.do",{frequency:freqVal,outputRpm:opRpmVal,redRatio:zVal,shaftRad:prVal,eTorque:teVal,motorRype:mTypeVal,couplingType:coupTypeVal,mmntRatio:jlVal,strtFrq:strtFrqVal,mounttype:mounttype,allowablefrequency:allowablefrequency,wattage:selectMotr,voltage:voltageVal},function(json)
 {				
 		
	 	//alert("1");
 		// $('#capacityframe').trigger('blur');
		
		$('#allowableradial').val(json['radialnode']);
		$('#capacityframe').val(json['frame']);
		$('#seletdmtrpwr').val(json['kws']);
		
		$('#loadmntintjm').val(json['jm'].toFixed(2));
		$('#loadmntintjlm').val(json['jlm'].toFixed(2));
		$('#mntintratio').val(json['ratio'].toFixed(2));
		$('#alowlestartupfrq').val(json['allowablefrequency']);
		
		
		//----------Result Data----
			$('#kwsResult').text(json['kws']);
			$('#freqResult').text($scope.productSel.freq);
			$('#voltageResult').text($scope.productSel.voltage);
			$('#mtypeResult').text($scope.productSel.motorType);
			$('#outputspeedResult').text($scope.productSel.outputRpm);
			$('#transmittedtorqueResult').text($scope.productSel.transTorque);
			$('#couplingtypeResult').text($scope.productSel.couplingType);
			$('#transmittedpowerResult').text($scope.productSel.calTransPower);
			var model40="";
		//-------------------------
		/*var frameSplit = json['frame'].split('-');
		
		var model1="";
		var model2="";
		var model3="";
		var model40="";
		var model41="";
		
		
		for(var i=0;i<frameSplit[1].length;i++) { model1 +="<li class='captchaItem'>"+frameSplit[1][i]+"</li>"; }
		model1 +="<li class='captchaItem'>-</li>";
		for(var j=0;j<frameSplit[0].length;j++) { model2 +="<li class='captchaItem'>"+frameSplit[0][j]+"</li>"; }
		model2 +="<li class='captchaItem'>-</li>";				
		for(var k=0;k<frameSplit[2].length;k++) { model3 +="<li class='captchaItem'>"+frameSplit[2][k]+"</li>"; }
						
		sessionStorage.setItem("model1",model1);
		sessionStorage.setItem("model2",model2);
		sessionStorage.setItem("model3",model3);
		
		var model4 =  sessionStorage.getItem("model4");
		
		var mountType = sessionStorage.getItem("mountType");
		var motorTypeVal = sessionStorage.getItem("motorTypeVal");
		
		if((mountType=="Foot Mount" && motorTypeVal=="w/ brake") || (mountType=="Flange mount" && motorTypeVal=="w/ brake"))
		{
			$('#sortable').html(model4+model2+model1+model3);
			//$('#modelNumberResult').text(model4+model2+model1+model3);
		}
		else if((mountType=="Foot Mount" && motorTypeVal=="w/o brake") || (mountType=="Flange mount" && motorTypeVal=="w/o brake"))
		{
			//alert('else');
			var finalModelNumber =  sessionStorage.getItem("finalModelNumber");
			var modelSplit = finalModelNumber.split("-");
			for(var i=0;i<modelSplit[0].length;i++) { model40 +="<li class='captchaItem'>"+modelSplit[0][i]+"</li>"; }
			for(var j=0;j<modelSplit[1].length;j++) { model41 +="<li class='captchaItem'>"+modelSplit[1][j]+"</li>"; }
			
			$('#sortable').html(model40+model2+model1+model41+model3);
			//$('#modelNumberResult').text(model40+model2+model1+model41+model3);
		}		*/
			
			for(var i=0;i<json['modelnumber'].length;i++) {  model40 +="<li class='captchaItem'>"+json['modelnumber'][i]+"</li>"; }
			$('#modelNumberResult').text(json['modelnumber']);
			$('#sortable').html(model40);
			
			$scope.$apply();
 })						  	
};

//------Get Final Model Number----------
$scope.getFinalModelNumber = function(motorType,MountType)
{
 /* var motorTypeVal="",MountTypeVal="",finalModelNumber="",model4="",model40="",model41="";
  
  
  if(MountType==0) { MountType="Foot Mount"; } else { MountType="Flange mount"; }
  
  if(MountType==null) { MountTypeVal = ""; } else { MountTypeVal=MountType; }
  if(motorType==null) { motorTypeVal = ""; } else { motorTypeVal=motorType; }
  
 // if(MountTypeVal!="" && motorTypeVal!="")
  //{
	  if(MountTypeVal=="Foot Mount" && motorTypeVal=="w/ brake") { finalModelNumber = "ZNHM"; }
	  if(MountTypeVal=="Foot Mount" && motorTypeVal=="w/o brake") { finalModelNumber = "ZNHM-B"; }
	  
	  if(MountTypeVal=="Flange mount" && motorTypeVal=="w/ brake") { finalModelNumber = "ZNFM"; }
	  if(MountTypeVal=="Flange mount" && motorTypeVal=="w/o brake") { finalModelNumber = "ZNFM-B"; }			  
  //}		 

 var model1 =  sessionStorage.getItem("model1");
 var model2 =  sessionStorage.getItem("model2");
 var model3 =  sessionStorage.getItem("model3");
 
// alert(finalModelNumber);
 sessionStorage.setItem("mountType",MountType);
 sessionStorage.setItem("motorTypeVal",motorTypeVal);
 
 //if((MountTypeVal=="Foot Mount" && motorTypeVal=="w/ brake") || (MountTypeVal=="Flange mount" && motorTypeVal=="w/ brake"))
 if((MountType=="Foot Mount" && motorTypeVal=="w/ brake") || (MountType=="Flange mount" && motorTypeVal=="w/ brake"))
 {
	 //alert("if");
	 
	for(var i=0;i<finalModelNumber.length;i++) { model4 +="<li class='captchaItem'>"+finalModelNumber[i]+"</li>"; }
	sessionStorage.setItem("model4",model4);
 	$('#sortable').html(model4+model2+model1+model3);
	//$('#modelNumberResult').text(model4+model2+model1+model3);
 }
 else if((MountType=="Foot Mount" && motorTypeVal=="w/o brake") || (MountType=="Flange mount" && motorTypeVal=="w/o brake"))
 {
	 //alert("else");
	 var modelSplit = finalModelNumber.split("-");
	// alert(modelSplit[1]);
	 for(var i=0;i<modelSplit[0].length;i++) { model40 +="<li class='captchaItem'>"+modelSplit[0][i]+"</li>"; }
	 for(var j=0;j<modelSplit[1].length;j++) { model41 +="<li class='captchaItem'>"+modelSplit[1][j]+"</li>"; }
	 //alert(model40);
	// alert(model41);
	 sessionStorage.setItem("finalModelNumber",finalModelNumber);
	 $('#sortable').html(model40+model2+model1+model41+model3);
	 //$('#modelNumberResult').text(model40+model2+model1+model41+model3);
 }	  */
};

//---------------Testing---------
$scope.testing = function()
{
  var freqVal=50;
  var opRpmVal=483;
  var zVal=3;
  var prVal=21.33;
  var teVal=15;
  var mTypeVal="w/ brake";
  var coupTypeVal="Direct Shaft";
  var jlVal=0.004;
  var strtFrqVal=2;	
  var mounttype = "Foot Mount";
  
  
$.getJSON("getframesize.do",{frequency:freqVal,outputRpm:opRpmVal,redRatio:zVal,shaftRad:prVal,eTorque:teVal,motorRype:mTypeVal,couplingType:coupTypeVal,mmntRatio:jlVal,strtFrq:strtFrqVal,mounttype:mounttype},function(json)
 {
	 	alert(JSON.stringify(json));
 });
};

});	

//============================================//
    //=====New Case Management====//
//===========================================//

angular.module('app')
.controller("newCaseManagement",function($scope,$http,$filter,$rootScope,$timeout,$route,$state)
{


   $scope.master ={};
   $scope.addCase = ({'orginReq':'0'});
 
  var cusImage = new FormData();
 	
  var cusImageComp = new FormData();
  
   var cusImageSumit = new FormData();
  	
   var cusImageSpare = new FormData();
	
   var cusImageTech = new FormData();
 
					
					//================New Selection IMG Upload Multiple==========//
					
					   $scope.stepsModel = [];

						$scope.uploadNewMotorFile = function(event)
						{
							 var files = event.target.files; //FileList object
							 
							 for (var i = 0; i < files.length; i++) {
								 var file = files[i];
									 var reader = new FileReader();
									 reader.onload = $scope.imageIsLoaded; 
									 reader.readAsDataURL(file);
							 }
						}
						$scope.imageIsLoaded = function(e)
						{
							$scope.$apply(function() {
								 var imagelocation=e.target.result;
								 var base64result = imagelocation.split(',')[1];
												  
							   $scope.stepsModel.push(base64result);
									//alert($scope.stepsModel.length);
							});
						}
						$scope.removeImage=function(step)
						{
							 for(var i=0;i<$scope.stepsModel.length;i++) {
								
								if($scope.stepsModel[i] === step) {
								
									$scope.stepsModel.splice(i,1);
								
									break;
								}}
							
						};
					
					//=============================================//
					//================Competitor IMG Upload Multiple==========//
					     					
					   $scope.stepsModelComp = [];

						$scope.uploadMotorFileComp = function(event)
						{
							 var files = event.target.files; //FileList object
							 //alert(files.length);
							 for (var i = 0; i < files.length; i++) {
								 var file = files[i];
									 var reader = new FileReader();
									 reader.onload = $scope.imageIsLoadedComp; 
									 reader.readAsDataURL(file);
							 }
						}
						$scope.imageIsLoadedComp = function(e)
						{
							//alert(e);
							$scope.$apply(function() {
								 var imagelocation=e.target.result;
								 var base64result = imagelocation.split(',')[1];
								//alert(base64result);				  
							   $scope.stepsModelComp.push(base64result);
									//alert($scope.stepsModel.length);
							});
						}
						$scope.removeImgComp=function(stepComp)
						{
							 for(var i=0;i<$scope.stepsModelComp.length;i++) {
								
								if($scope.stepsModelComp[i] === stepComp) {
								
									$scope.stepsModelComp.splice(i,1);
								
									break;
								}}
							
						};
					

					//=============================================//
					//================Sumitomo IMG Upload Multiple==========//
					
					   $scope.stepsModelSumit = [];

						$scope.uploadMotorFileSumit = function(event)
						{
							 var files = event.target.files; //FileList object
							 
							 for (var i = 0; i < files.length; i++) {
								 var file = files[i];
									 var reader = new FileReader();
									 reader.onload = $scope.imageIsLoadedSumit; 
									 reader.readAsDataURL(file);
							 }
						}
						$scope.imageIsLoadedSumit = function(e)
						{
							$scope.$apply(function() {
								 var imagelocation=e.target.result;
								 var base64result = imagelocation.split(',')[1];
												  
							   $scope.stepsModelSumit.push(base64result);
									//alert($scope.stepsModel.length);
							});
						}
						$scope.removeImgSumit=function(stepSumit)
						{
							 for(var i=0;i<$scope.stepsModelSumit.length;i++) {
								
								if($scope.stepsModelSumit[i] === stepSumit) {
								
									$scope.stepsModelSumit.splice(i,1);
								
									break;
								}}
							
						};
					
					//=============================================//
					//================Spare IMG Upload Multiple==========//
					
					   $scope.stepsModelSpare = [];

						$scope.uploadMotorFileSpare = function(event)
						{
							 var files = event.target.files; //FileList object
							 
							 for (var i = 0; i < files.length; i++) {
								 var file = files[i];
									 var reader = new FileReader();
									 reader.onload = $scope.imageIsLoadedSpare; 
									 reader.readAsDataURL(file);
							 }
						}
						$scope.imageIsLoadedSpare = function(e)
						{
							$scope.$apply(function() {
								 var imagelocation=e.target.result;
								 var base64result = imagelocation.split(',')[1];
												  
							   $scope.stepsModelSpare.push(base64result);
									//alert($scope.stepsModel.length);
							});
						}
						$scope.removeImgSpare=function(stepSpare)
						{
							 for(var i=0;i<$scope.stepsModelSpare.length;i++) {
								
								if($scope.stepsModelSpare[i] === stepSpare) {
								
									$scope.stepsModelSpare.splice(i,1);
								
									break;
								}}
							
						};
					
					//=============================================//
					//================Tech IMG Upload Multiple==========//
					
					   $scope.stepsModelTech = [];

						$scope.uploadMotorFileTech = function(event)
						{
							 var files = event.target.files; //FileList object
							 
							 for (var i = 0; i < files.length; i++) {
								 var file = files[i];
									 var reader = new FileReader();
									 reader.onload = $scope.imageIsLoadedTech; 
									 reader.readAsDataURL(file);
							 }
						}
						$scope.imageIsLoadedTech = function(e)
						{
							$scope.$apply(function() {
								 var imagelocation=e.target.result;
								 var base64result = imagelocation.split(',')[1];
												  
							   $scope.stepsModelTech.push(base64result);
									//alert($scope.stepsModel.length);
							});
						}
						$scope.removeImgTech=function(stepTech)
						{
							 for(var i=0;i<$scope.stepsModelTech.length;i++) {
								
								if($scope.stepsModelTech[i] === stepTech) {
								
									$scope.stepsModelTech.splice(i,1);
								
									break;
								}}
							
						};
					
					//=============================================//
					
	  
   

	     
  $scope.getCaseData = function(addCase,form)
		{
			//alert("page reloading" + " " + 1);
			 var asd = $rootScope.loadNewCase;
			
			/*$rootScope.caseCustomerRef=getCaseCustomerRef;
			$rootScope.caseCustomer=getCaseCustomer;
			$rootScope.tab=gettab;*/
			//alert($rootScope.caseCustomerRef + "1 " + " caseCustomerRef" );
			//alert($rootScope.caseCustomer + "2 " + " caseCustomer" );
			//alert($rootScope.tab + "3 " + " tab" );
			if($rootScope.caseCustomer===undefined || $rootScope.caseCustomer==="" && $rootScope.caseCustomerRef===undefined || $rootScope.caseCustomerRef==="" && $rootScope.tab===undefined || $rootScope.tab==="" )
				{
					//alert(asd);
					/*if(asd==0)
					{
						 $('#menu1').addClass('active');
						 $('#newSelection').addClass('active');
						//alert("Add New Case Customer");
						 $.getJSON("loadingsequenceNember.do",function(json)
									{
								//alert("control coming to here");
								
										//var gridFormData = json['griddata']; 
										 // alert(JSON.stringify(json['maincaseform'][0])); 
										   $scope.addCase=json['maincaseform'][0];
										   //$scope.addDesp=json['description'][0]; 
										  // $scope.dataField=json['griddata'];
										   // alert(JSON.stringify($scope.addCase));
										  // alert(JSON.stringify($scope.addDesp));
										  // alert(JSON.stringify($scope.dataField));
										    
										    $rootScope.newcase='';
											//$scope.$apply();
									});
					}*/
				
					if(1==1)
					{
						$.post("loadingCasessTab.do",function(json)
							{
							
							var tab=parseInt(json['tab']);
							
							//alert(tab + " tab ");
							//alert(JSON.stringify(json['maincaseform'][0]));
                         // alert(JSON.stringify(json['griddata']));
                           // alert(JSON.stringify(json['description'][0]));
						   //alert(JSON.stringify(json));
							//alert(JSON.stringify(json['maincaseform'][0].dateCase));
							//alert(JSON.stringify(json['maincaseform'][0].dateExp));
							 
							 //var tempId = "";
                             // $scope.tempId = json['maincaseform'][0].tempid;
							//alert($scope.tempId);
							
							if(tab==1)
								{
							       //alert("tab" + 1);
							 $('#menu1').addClass('active');
							 $('#newSelection').addClass('active');
							
							// alert("newSelection tab" + " " + 4);
							  //var dtcase = json['maincaseform'][0].dateCase.split('T');
							 // var dtexp = json['maincaseform'][0].dateExp.split('T');
							    $("#newSelection").show();
								$("#competitorReplace").hide();
								$("#sumitomoReplace").hide();
								$("#sparePart").hide();
								$("#techQuery").hide();
								$("#blogHide").hide();
								$("#remarksHide").hide(); 
								$("#codeNotFound").hide();
								$("#dataNotFound").hide();
							       $scope.addCase=json['maincaseform'][0];
								   
								   $scope.addDesp=json['description'][0]; 
								   $scope.dataField=json['griddata']; 
								   $scope.QtnBtnNew = '0';
								   //$scope.addCase.dateCase=dtcase[0];
								  // $scope.addCase.dateExp=dtexp[0];
								   //$scope.stepsModel = json['maincaseform'][0].images.split(',');
								   //$("#QtnBtnNew-hide").hide();
								   //$('#qtnBtn-hide').attr('disabled',true);
								  var getImage = json['maincaseform'][0].images;
								  // alert(getImage);
									 if(getImage!=null)
									   {
										   //alert(getImage + " " + 1);
										   var imgPrew = getImage.trim();
										   if(imgPrew==null || imgPrew=="" )
										   {
											   //alert(getImage + " " + 2);
											 
											  $scope.stepsModel = [];
											  $scope.$apply();
											  //$scope.dummyPhoto="";
					                          //$('#dummyPhoto').trigger('blur');
										   }
										   else
										   {
											   //alert(getImage + " " + 3);
											   $scope.stepsModel = getImage.split(',');
											   $scope.$apply();
											   
										   }
									   }
									   else
									   {
										   //alert(getImage + " " + 4);
										    $scope.stepsModel = [];
										    $scope.$apply();
										 
									   }
									  $scope.$apply();								   
								}
							
							
							if(tab==2)
								{
								
								 $('#menu2').addClass('active');
								 $('#competitorReplace').addClass('active');
								   //alert("Competitor Replae");
								
								    $("#newSelection").hide();
									$("#competitorReplace").show();
									$("#sumitomoReplace").hide();
									$("#sparePart").hide();
									$("#techQuery").hide();
									$("#blogHideComp").hide();
									$("#remarksHideComp").hide(); 
									$("#codeNotFound").hide();
									$("#dataNotFound").hide(); 
									   $scope.addCase=json['maincaseform'][0];
									   $scope.addDespComp=json['description'][0]; 
									   $scope.dataCompetitor=json['griddata'];
									   //$scope.stepsModelComp = json['maincaseform'][0].images.split(',');
									   
									  //$scope.$apply(function(){ $("#qtnBtnComp-hide").hide(); alert("hide");});
									 // $("#qtnBtnComp-hide").hide();
									 $scope.qtnBtnComp = '0';
									    var getImageComp = json['maincaseform'][0].images;
								  // alert(getImage);
									 if(getImageComp!=null)
									   {
										   //alert(getImage + " " + 1);
										   var imgPrew = getImageComp.trim();
										   if(imgPrew==null || imgPrew=="" )
										   {
											   //alert(getImage + " " + 2);
											 
											  $scope.stepsModelComp = [];
											  $scope.$apply();
											  //$scope.dummyPhoto="";
					                          //$('#dummyPhoto').trigger('blur');
										   }
										   else
										   {
											   //alert(getImage + " " + 3);
											   $scope.stepsModelComp = getImageComp.split(',');
											   $scope.$apply();
											   
										   }
									   }
									   else
									   {
										   //alert(getImage + " " + 4);
										    $scope.stepsModelComp = [];
										    $scope.$apply();
										 
									   }
											  $scope.$apply();	
								
								
								}
							
							
							if(tab==3)
							{
							 //alert("tab" + 3);
							 $('#menu3').addClass('active');
							 $('#sumitomoReplace').addClass('active');
							 
							 
							    $("#newSelection").hide();
								$("#competitorReplace").hide();
								$("#sumitomoReplace").show();
								$("#sparePart").hide();
								$("#techQuery").hide(); 
								$("#blogHideSumit").hide();
								$("#remarksHideSumit").hide();
								$("#codeNotFound").hide();
								$("#dataNotFound").hide(); 
								
								//$("#hideBtn").hide();
								   $scope.addCase=json['maincaseform'][0];
								   $scope.addDespSumit=json['description'][0]; 
								   $scope.dataSumitomo=json['griddata'];
								   //$scope.stepsModelSumit = json['maincaseform'][0].images.split(',');
								   //$(".qtnBtnSumithide").addClass("disabledBtn");
								  //$("#qtnBtnSumit-hide").hide();
								   //$('.qtnBtnSumit-hide').attr('disabled',true);
								   //$("#sumitQtn").hide();
								    
								  $scope.qtnBtnSumit = '0';
								   
								  var getImageSumit = json['maincaseform'][0].images;
								  // alert(getImage);
									 if(getImageSumit!=null)
									   {
										   //alert(getImage + " " + 1);
										   var imgPrew = getImageSumit.trim();
										   if(imgPrew==null || imgPrew=="" )
										   {
											   //alert(getImage + " " + 2);
											 
												  $scope.stepsModelSumit = [];
												  $scope.$apply();
											  //$scope.dummyPhoto="";
					                          //$('#dummyPhoto').trigger('blur');
										   }
										   else
										   {
											   //alert(getImage + " " + 3);
											   $scope.stepsModelSumit = getImageSumit.split(',');
											   $scope.$apply();
											  
										   }
									   }
									   else
									   {
										   //alert(getImage + " " + 4);
												$scope.stepsModelSumit = [];
												$scope.$apply();
										 
									   }
										
										  $scope.$apply();	
							
								   
							
							
							}
										
													
							if(tab==4)
							{
							 
							 //alert("tab" + 4);
							 $('#menu4').addClass('active');
							 $('#sparePart').addClass('active');
							// $('#qtnBtnSpare-hide').hide();
							   $scope.qtnBtnSpare = '0';
							    $("#newSelection").hide();
								$("#competitorReplace").hide();
								$("#sumitomoReplace").hide();
								$("#sparePart").show();
								$("#techQuery").hide(); 
								$("#blogHideSpare").hide();
								$("#remarksHideSpare").hide(); 
								$("#codeNotFound").hide();
								$("#dataNotFound").hide(); 
								  $scope.addCase=json['maincaseform'][0];
								  $scope.addDespSpare=json['description'][0]; 
								  $scope.dataPart=json['griddata'];
								  //$scope.stepsModelSpare = json['maincaseform'][0].images.split(',');
								var getImageSpare = json['maincaseform'][0].images;
								  // alert(getImage);
									 if(getImageSpare!=null)
									   {
										   //alert(getImage + " " + 1);
										   var imgPrew = getImageSpare.trim();
										   if(imgPrew==null || imgPrew=="" )
										   {
											  
											  $scope.stepsModelSpare = [];
											  $scope.$apply();
											  //$scope.dummyPhoto="";
					                          //$('#dummyPhoto').trigger('blur');
										   }
										   else
										   {
											   //alert(getImage + " " + 3);
											   $scope.stepsModelSpare = getImageSpare.split(',');
											   $scope.$apply();
											   
										   }
									   }
									   else
									   {
										   //alert(getImage + " " + 4);
										    $scope.stepsModelSpare = [];
										    $scope.$apply();
										 
									   }
									  $scope.$apply();	
								   
							
							
							}
							
							

							if(tab==5)
							{
							
							//  alert("tab" + 5);
							 $('#menu5').addClass('active');
							 $('#techQuery').addClass('active');
							 //$('#qtnBtnTech-hide').hide();
							   $scope.qtnBtnTech = '0';
							    $("#newSelection").hide();
								$("#competitorReplace").hide();
								$("#sumitomoReplace").hide();
								$("#sparePart").hide();
								$("#techQuery").show(); 
								$("#blogHideTech").hide();
								$("#remarksHideTech").hide();
								$("#codeNotFound").hide();
								$("#dataNotFound").hide();  
								  $scope.addCase=json['maincaseform'][0];
								  $scope.addDespTech=json['description'][0]; 
								  $scope.dataQuery=json['griddata'];
								  
								  //$scope.stepsModelTech = json['maincaseform'][0].images.split(',');
								 var getImageTech = json['maincaseform'][0].images;
								  // alert(getImage);
									 if(getImageTech!=null)
									   {
										   //alert(getImage + " " + 1);
										   var imgPrew = getImageTech.trim();
										   if(imgPrew==null || imgPrew=="" )
										   {
											   //alert(getImage + " " + 2);
											 
											  $scope.stepsModelTech = [];
											  $scope.$apply();
											  //$scope.dummyPhoto="";
					                          //$('#dummyPhoto').trigger('blur');
										   }
										   else
										   {
											   //alert(getImage + " " + 3);
											   $scope.stepsModelTech = getImageTech.split(',');
											   $scope.$apply();
											   
										   }
									   }
									   else
									   {
										   //alert(getImage + " " + 4);
										    $scope.stepsModelTech = [];
										    $scope.$apply();
										
									   }
									  $scope.$apply();	
								   
							
							
							}
							if(tab==0)
								{
								//alert(tab);
								//alert(JSON.stringify(json['maincaseform'][0]));
								
								 $('#menu1').addClass('active');
								 $('#newSelection').addClass('active');
								  //$('#QtnBtnNew-hide').hide();
								  
								    $("#newSelection").show();
									$("#competitorReplace").hide();
									$("#sumitomoReplace").hide();
									$("#sparePart").hide();
									$("#techQuery").hide();
									$("#blogHide").hide(); 
									$("#remarksHide").hide();
									$("#codeNotFound").hide();
									$("#dataNotFound").hide();  
								       $scope.addCase=json['maincaseform'][0];
									   $scope.addDesp=json['description'][0];
									   $scope.QtnBtnNew = '0';
									   $scope.addCase.orginReq = '0';
                                       //$scope.addCase.custStatus = json['maincaseform'][0].custStatus;
									   
									  //$scope.addDesp=json['description'][0];
									   //$scope.dataField=json['griddata']; 
								 $scope.$apply();
								
								}
							});
					}
					
			
				}
			
			else
				
				{
				
				$.post("loadingCasessTabFromMainTable.do",{custmername:$rootScope.caseCustomer,caseref:$rootScope.caseCustomerRef,tab:$rootScope.tab},function(json,status)
						{
							//alert("main data");
							var gridFormData = json['griddata']; 
							var tab=json['tab'];
							 // alert(JSON.stringify(json['tab']) + " tab "); 
							 // alert(JSON.stringify(json['maincaseform'][0]));
							 
							//alert(JSON.stringify(json['griddata'][0]));
				            //alert(JSON.stringify(json['rerkadata']))
							  
							/*  $scope.addCase=json['maincaseform'][0];
							  $scope.addDespComp=json['description'][0]; 
							  $scope.dataCompetitor=json['griddata'];*/
							   /*$scope.addCase=json['maincaseform'][0];
							   $scope.addDesp=json['description'][0]; 
							    $scope.dataField=gridFormData; */
							    
							    if(tab==1)
							    	{
							    	
							    	 $('#menu1').addClass('active');
									 $('#newSelection').addClass('active');
									 
									 $('.btn-hideNew').attr('disabled',true);
									//$('#QtnBtnNew-hide').show();
									    $("#newSelection").show();
										$("#competitorReplace").hide();
										$("#sumitomoReplace").hide();
										$("#sparePart").hide();
										$("#techQuery").hide();
										$("#codeNotFound").hide();
										$("#dataNotFound").hide(); 
									    $scope.addCase=json['maincaseform'][0];
										$scope.addDesp=json['description'][0]; 
										$scope.dataField=json['griddata'];
										$scope.addedRemarksData =json['rerkadata']; 
										//$scope.stepsModel = json['maincaseform'][0].images.split(',');
										$rootScope.caseCustomer = "";
									    $rootScope.caseCustomerRef = "";
									    $rootScope.tab=""; 
									    
										$scope.QtnBtnNew = '1';
										
										$scope.$apply();
									    var getImage = json['maincaseform'][0].images;
								  // alert(getImage);
									 if(getImage!=null)
									   {
										   //alert(getImage + " " + 1);
										   var imgPrew = getImage.trim();
										   if(imgPrew==null || imgPrew=="" )
										   {
											   //alert(getImage + " " + 2);
											 /* $('.image-preview').popover('hide');
											  $("#1photoinput").text("Upload");
											  $("#3photoinput").val("");
											  $("#2photoinput").hide();*/
											  $scope.stepsModel = [];
											  $scope.$apply();
											  //$scope.dummyPhoto="";
					                          //$('#dummyPhoto').trigger('blur');
										   }
										   else
										   {
											   //alert(getImage + " " + 3);
											   $scope.stepsModel = getImage.split(',');
											   $scope.$apply();
											   /*var img = $('<img src="'+getImage+'" width="200" height="150"/>', {id: 'dynamic',width:200,height:150 });
											   
											   var photoName = getImage.split("/");
												//alert(photoName);
												$("#photo").attr("data-content",$(img)[0].outerHTML).popover("show");
												$("#1photoinput").text("Change");
												$("#2photoinput").show();
												$("#3photoinput").val(photoName[1]);*/
												//$scope.dummyPhoto="1";
					                            //$('#dummyPhoto').trigger('blur');
										   }
									   }
									   else
									   {
										   //alert(getImage + " " + 4);
										    $scope.stepsModel = [];
										    $scope.$apply();
										 /* $('.image-preview').popover('hide');
										  $("#1photoinput").text("Upload");
										  $("#3photoinput").val("");
										  $("#2photoinput").hide();*/
										  //$scope.dummyPhoto="";
					                     // $('#dummyPhoto').trigger('blur');
									   }
							    	
							    	}
							    
							    
							    if(tab==2)
						    	{
						    	
							    	 $('#menu2').addClass('active');
									 $('#competitorReplace').addClass('active');
									 
									 $('.btn-hideComp').attr('disabled',true);
									
									    $("#newSelection").hide();
										$("#competitorReplace").show();
										$("#sumitomoReplace").hide();
										$("#sparePart").hide();
										$("#techQuery").hide(); 
										$("#codeNotFound").hide();
										$("#dataNotFound").hide();
										$scope.addCase=json['maincaseform'][0];
										$scope.addDespComp=json['description'][0]; 
										$scope.dataCompetitor=json['griddata'];
										$scope.addedRemarksCompData =json['rerkadata']; 
										//$scope.stepsModelComp = json['maincaseform'][0].images.split(',');
									    $rootScope.caseCustomer = "";
									    $rootScope.caseCustomerRef = "";
										 $rootScope.tab="";
										
										//$("#qtnBtnComp-hide").show();
										 $scope.qtnBtnComp = '1';
										 $scope.$apply();
										var getImageComp = json['maincaseform'][0].images;
								  // alert(getImage);
									 if(getImageComp!=null)
									   {
										   //alert(getImage + " " + 1);
										   var imgPrew = getImageComp.trim();
										   if(imgPrew==null || imgPrew=="" )
										   {
											   //alert(getImage + " " + 2);
											 /* $('.image-preview').popover('hide');
											  $("#1photoinput").text("Upload");
											  $("#3photoinput").val("");
											  $("#2photoinput").hide();*/
											  $scope.stepsModelComp = [];
											  $scope.$apply();
											  //$scope.dummyPhoto="";
					                          //$('#dummyPhoto').trigger('blur');
										   }
										   else
										   {
											   //alert(getImage + " " + 3);
											   $scope.stepsModelComp = getImageComp.split(',');
											   $scope.$apply();
											   /*var img = $('<img src="'+getImage+'" width="200" height="150"/>', {id: 'dynamic',width:200,height:150 });
											   
											   var photoName = getImage.split("/");
												//alert(photoName);
												$("#photo").attr("data-content",$(img)[0].outerHTML).popover("show");
												$("#1photoinput").text("Change");
												$("#2photoinput").show();
												$("#3photoinput").val(photoName[1]);*/
												//$scope.dummyPhoto="1";
					                            //$('#dummyPhoto').trigger('blur');
										   }
									   }
									   else
									   {
										   //alert(getImage + " " + 4);
										    $scope.stepsModelComp = [];
										    $scope.$apply();
										 /* $('.image-preview').popover('hide');
										  $("#1photoinput").text("Upload");
										  $("#3photoinput").val("");
										  $("#2photoinput").hide();*/
										  //$scope.dummyPhoto="";
					                     // $('#dummyPhoto').trigger('blur');
									   }
						    	
						    	}
							    
							    
							    
							    
							    if(tab==3)
							    	{
							    	
							    	 $('#menu3').addClass('active');
									 $('#sumitomoReplace').addClass('active');
									 
									 $('.btn-hide').attr('disabled',true);
									 
									    $("#newSelection").hide();
										$("#competitorReplace").hide();
										$("#sumitomoReplace").show();
										$("#sparePart").hide();
										$("#techQuery").hide();
										$("#codeNotFound").hide();
										$("#dataNotFound").hide();
										 //$("#qtnBtnSumit-hide").show();
									    $scope.qtnBtnSumit = '1';
										   $scope.addCase=json['maincaseform'][0];
										   $scope.addDespSumit=json['description'][0]; 
										   $scope.dataSumitomo=json['griddata'];
										   $scope.addedRemarksSumitData =json['rerkadata'];
										   //$scope.stepsModelSumit = json['maincaseform'][0].images.split(',');
										   
										    $rootScope.caseCustomer = "";
											$rootScope.caseCustomerRef = "";
											$rootScope.tab=""; 
										   $scope.$apply();
										   var getImageSumit = json['maincaseform'][0].images;
								  // alert(getImage);
									 if(getImageSumit!=null)
									   {
										   //alert(getImage + " " + 1);
										   var imgPrew = getImageSumit.trim();
										   if(imgPrew==null || imgPrew=="" )
										   {
											   //alert(getImage + " " + 2);
											 /* $('.image-preview').popover('hide');
											  $("#1photoinput").text("Upload");
											  $("#3photoinput").val("");
											  $("#2photoinput").hide();*/
											  $scope.stepsModelSumit = [];
											  $scope.$apply();
											  //$scope.dummyPhoto="";
					                          //$('#dummyPhoto').trigger('blur');
										   }
										   else
										   {
											   //alert(getImage + " " + 3);
											   $scope.stepsModelSumit = getImageSumit.split(',');
											   $scope.$apply();
											   /*var img = $('<img src="'+getImage+'" width="200" height="150"/>', {id: 'dynamic',width:200,height:150 });
											   
											   var photoName = getImage.split("/");
												//alert(photoName);
												$("#photo").attr("data-content",$(img)[0].outerHTML).popover("show");
												$("#1photoinput").text("Change");
												$("#2photoinput").show();
												$("#3photoinput").val(photoName[1]);*/
												//$scope.dummyPhoto="1";
					                            //$('#dummyPhoto').trigger('blur');
										   }
									   }
									   else
									   {
										   //alert(getImage + " " + 4);
										    $scope.stepsModelSumit = [];
										    $scope.$apply();
										 /* $('.image-preview').popover('hide');
										  $("#1photoinput").text("Upload");
										  $("#3photoinput").val("");
										  $("#2photoinput").hide();*/
										  //$scope.dummyPhoto="";
					                     // $('#dummyPhoto').trigger('blur');
									   }
										   
									
							    	
							    	
							    	}
							    
							    
								
								if(tab==4)
								{
								
								 $('#menu4').addClass('active');
								 $('#sparePart').addClass('active');
								 
								 $('.btn-hideSpare').attr('disabled',true);
								//$('#qtnBtnSpare-hide').show();
								    $("#newSelection").hide();
									$("#competitorReplace").hide();
									$("#sumitomoReplace").hide();
									$("#sparePart").show();
									$("#techQuery").hide(); 
									$("#codeNotFound").hide();
									$("#dataNotFound").hide();
									  $scope.addCase=json['maincaseform'][0];
									  $scope.addDespSpare=json['description'][0]; 
									  $scope.dataPart=json['griddata'];
									  $scope.addedRemarksSpareData =json['rerkadata'];
									  
									   $scope.qtnBtnSpare = '1';
									  //$scope.stepsModelSpare = json['maincaseform'][0].images.split(',');
									    $rootScope.caseCustomer = "";
									    $rootScope.caseCustomerRef = "";
									    $rootScope.tab=""; 
									  $scope.$apply();
									  var getImageSpare = json['maincaseform'][0].images;
								  // alert(getImage);
									 if(getImageSpare!=null)
									   {
										   //alert(getImage + " " + 1);
										   var imgPrew = getImageSpare.trim();
										   if(imgPrew==null || imgPrew=="" )
										   {
											   //alert(getImage + " " + 2);
											 /* $('.image-preview').popover('hide');
											  $("#1photoinput").text("Upload");
											  $("#3photoinput").val("");
											  $("#2photoinput").hide();*/
											  $scope.stepsModelSpare = [];
											  $scope.$apply();
											  //$scope.dummyPhoto="";
					                          //$('#dummyPhoto').trigger('blur');
										   }
										   else
										   {
											   //alert(getImage + " " + 3);
											   $scope.stepsModelSpare = getImageSpare.split(',');
											   $scope.$apply();
											   /*var img = $('<img src="'+getImage+'" width="200" height="150"/>', {id: 'dynamic',width:200,height:150 });
											   
											   var photoName = getImage.split("/");
												//alert(photoName);
												$("#photo").attr("data-content",$(img)[0].outerHTML).popover("show");
												$("#1photoinput").text("Change");
												$("#2photoinput").show();
												$("#3photoinput").val(photoName[1]);*/
												//$scope.dummyPhoto="1";
					                            //$('#dummyPhoto').trigger('blur');
										   }
									   }
									   else
									   {
										   //alert(getImage + " " + 4);
										    $scope.stepsModelSpare = [];
										    $scope.$apply();
										 /* $('.image-preview').popover('hide');
										  $("#1photoinput").text("Upload");
										  $("#3photoinput").val("");
										  $("#2photoinput").hide();*/
										  //$scope.dummyPhoto="";
					                     // $('#dummyPhoto').trigger('blur');
									   }
								
								
								}
								
								if(tab==5)
								{
								
								 $('#menu5').addClass('active');
								 $('#techQuery').addClass('active');
								 
								 $('.btn-hideTech').attr('disabled',true);
								 //$('#qtnBtnTech-hide').show();
								    $("#newSelection").hide();
									$("#competitorReplace").hide();
									$("#sumitomoReplace").hide();
									$("#sparePart").hide();
									$("#techQuery").show();
									$("#codeNotFound").hide();
									$("#dataNotFound").hide(); 
									  $scope.addCase=json['maincaseform'][0];
									  $scope.addDespTech=json['description'][0]; 
									  $scope.dataQuery=json['griddata'];
									  $scope.addedRemarksTechData =json['rerkadata'];
									  
									  $scope.qtnBtnTech = '1';
									    //$scope.stepsModelTech = json['maincaseform'][0].images.split(',');
										$rootScope.caseCustomer = "";
									    $rootScope.caseCustomerRef = "";
									    $rootScope.tab=""; 
										
										$scope.$apply();
									 var getImageTech = json['maincaseform'][0].images;
								  // alert(getImage);
									 if(getImageTech!=null)
									   {
										   //alert(getImage + " " + 1);
										   var imgPrew = getImageTech.trim();
										   if(imgPrew==null || imgPrew=="" )
										   {
											   //alert(getImage + " " + 2);
											 /* $('.image-preview').popover('hide');
											  $("#1photoinput").text("Upload");
											  $("#3photoinput").val("");
											  $("#2photoinput").hide();*/
											  $scope.stepsModelTech = [];
											  $scope.$apply();
											  //$scope.dummyPhoto="";
					                          //$('#dummyPhoto').trigger('blur');
										   }
										   else
										   {
											   //alert(getImage + " " + 3);
											   $scope.stepsModelTech = getImageTech.split(',');
											   $scope.$apply();
											   /*var img = $('<img src="'+getImage+'" width="200" height="150"/>', {id: 'dynamic',width:200,height:150 });
											   
											   var photoName = getImage.split("/");
												//alert(photoName);
												$("#photo").attr("data-content",$(img)[0].outerHTML).popover("show");
												$("#1photoinput").text("Change");
												$("#2photoinput").show();
												$("#3photoinput").val(photoName[1]);*/
												//$scope.dummyPhoto="1";
					                            //$('#dummyPhoto').trigger('blur');
										   }
									   }
									   else
									   {
										   //alert(getImage + " " + 4);
										    $scope.stepsModelTech = [];
										    $scope.$apply();
										 /* $('.image-preview').popover('hide');
										  $("#1photoinput").text("Upload");
										  $("#3photoinput").val("");
										  $("#2photoinput").hide();*/
										  //$scope.dummyPhoto="";
					                     // $('#dummyPhoto').trigger('blur');
									   }
									  
								
								}
								
								
								
							    
							  // alert(JSON.stringify($scope.addCase));
							  // alert(JSON.stringify($scope.addDesp));
							 
							  //$rootScope.loadNewCase = c;
							   $scope.$apply();
						});
				
				
				}
		} 
		
				
		$scope.chngReqSpeed = function(rpm,ratio,indexNew)
		{
			
			var rpmVal = 0;
			var ratioVal = 0;
			var indexNew = this.$index;
			//alert(rpm);
			//alert(ratio);
			//alert(indexNew);
			var reqOutputSpeed;
			if(rpm == undefined || rpm == "") { rpmVal = 0; }else {rpmVal = rpm; } 
			if(ratio == undefined || ratio == "")  { ratioVal = 0; }else {ratioVal = ratio; }
			//if(indexNew == undefined || indexNew == "")  {var indNew = 0; }else {var indNew = indexNew; }
			//alert(rpmVal);
			//alert(ratioVal);
			reqOutputSpeed = (rpmVal/ratioVal);
			//alert(reqOutputSpeed);
			 var reqGetSpeed ;
			if(isNaN(reqOutputSpeed) || reqOutputSpeed == "Infinity") {reqGetSpeed = 0;} else {reqGetSpeed = reqOutputSpeed;  }
			
			 $scope.dataField[indexNew].requiredOutputSpeed = reqGetSpeed.toFixed(2);
			$scope.$apply();
			 //$('#RequiredOutputSpeed').trigger('blur');
			
			
		};
		
		$scope.chngReqRatio = function(rpm,outSpeed,indexnew)
		{
			//alert(rpm);
			//alert(outSpeed);
			var indexnew = this.$index;
			var ratio;
			//alert(indexnew);
			if(rpm == undefined || rpm == "") {var rpmVal = 0; }else {var rpmVal = rpm; } 
			if(outSpeed == undefined || outSpeed == "")  {var opspeedVal = 0; }else {var opspeedVal = outSpeed; }
			//if(indexnew == undefined || indexnew == "")  {var indNew = 1; }else {var indNew = indexnew; }
			
			ratio = (rpmVal/opspeedVal);
			if(isNaN(ratio) || ratio == "Infinity") {var reqratio = 0;} else {var reqratio = ratio;}
			
			$scope.dataField[indexnew].ratioRequired = reqratio.toFixed(2);
			
			$scope.$apply();
		}
		
		$scope.chngReqSpeedComp = function(rpm,ratio,indexReq)
		{
			var rpmVal = 0;
			var ratioVal = 0;
			var indexReq = this.$index;
			var reqOutputSpeed;
			if(rpm == undefined || rpm == "") { rpmVal = 0; }else {rpmVal = rpm; } 
			if(ratio == undefined || ratio == "")  { ratioVal = 0; }else {ratioVal = ratio; }
			//alert(rpmVal);
			//alert(ratioVal);
			reqOutputSpeed = rpmVal/ratioVal
			
			 var reqGetSpeed ;
			if(isNaN(reqOutputSpeed) || reqOutputSpeed == "Infinity") {reqGetSpeed = 0;} else { reqGetSpeed = reqOutputSpeed;  }
			
			$scope.dataCompetitor[indexReq].requiredOutputSpeed = reqGetSpeed.toFixed(2);
			 
			$scope.$apply();
			//alert(reqOutputSpeed);
		};
		
		$scope.chngReqRatioComp = function(rpm,outSpeed,indexnew)
		{
			//alert(rpm);
			//alert(outSpeed);
			var indexnew = this.$index;
			var ratio;
			//alert(indexnew);
			if(rpm == undefined || rpm == "") {var rpmVal = 0; }else {var rpmVal = rpm; } 
			if(outSpeed == undefined || outSpeed == "")  {var opspeedVal = 0; }else {var opspeedVal = outSpeed; }
			//if(indexnew == undefined || indexnew == "")  {var indNew = 1; }else {var indNew = indexnew; }
			
			ratio = (rpmVal/opspeedVal);
			if(isNaN(ratio) || ratio == "Infinity") {var reqratio = 0;} else {var reqratio = ratio;}
			
			$scope.dataCompetitor[indexnew].ratioRequired = reqratio.toFixed(2);
			
			$scope.$apply();
		}
		
		$scope.chngReqSpeedSumit = function(rpm,ratio,indexReq)
		{
			var rpmVal = 0;
			var ratioVal = 0;
			var indexReq = this.$index;
			var reqOutputSpeed;
			if(rpm == undefined || rpm == "") { rpmVal = 0; }else {rpmVal = rpm; } 
			if(ratio == undefined || ratio == "")  { ratioVal = 0; }else {ratioVal = ratio; }
			//alert(rpmVal);
			//alert(ratioVal);
			reqOutputSpeed = rpmVal/ratioVal
			
			 var reqGetSpeed ;
			if(isNaN(reqOutputSpeed) || reqOutputSpeed == "Infinity") {reqGetSpeed = 0;} else { reqGetSpeed = reqOutputSpeed;  }
			
			$scope.dataSumitomo[indexReq].requiredOutputSpeed = reqGetSpeed.toFixed(2);
			 
			$scope.$apply();
			//alert(reqOutputSpeed);
		};
		
		$scope.chngReqRatioSumit = function(rpm,outSpeed,indexnew)
		{
			//alert(rpm);
			//alert(outSpeed);
			var indexnew = this.$index;
			var ratio;
			//alert(indexnew);
			if(rpm == undefined || rpm == "") {var rpmVal = 0; }else {var rpmVal = rpm; } 
			if(outSpeed == undefined || outSpeed == "")  {var opspeedVal = 0; }else {var opspeedVal = outSpeed; }
			//if(indexnew == undefined || indexnew == "")  {var indNew = 1; }else {var indNew = indexnew; }
			
			ratio = (rpmVal/opspeedVal);
			if(isNaN(ratio) || ratio == "Infinity") {var reqratio = 0;} else {var reqratio = ratio;}
			
			$scope.dataSumitomo[indexnew].ratioRequired = reqratio.toFixed(2);
			
			$scope.$apply();
		}
		
		$scope.chngReqSpeedTech = function(rpm,ratio,indexReq)
		{
			var rpmVal = 0;
			var ratioVal = 0;
			var indexReq = this.$index;
			var reqOutputSpeed;
			if(rpm == undefined || rpm == "") { rpmVal = 0; }else {rpmVal = rpm; } 
			if(ratio == undefined || ratio == "")  { ratioVal = 0; }else {ratioVal = ratio; }
			//alert(rpmVal);
			//alert(ratioVal);
			reqOutputSpeed = rpmVal/ratioVal
			
			 var reqGetSpeed ;
			if(isNaN(reqOutputSpeed) || reqOutputSpeed == "Infinity") {reqGetSpeed = 0;} else { reqGetSpeed = reqOutputSpeed;  }
			
			$scope.dataQuery[indexReq].requiredOutputSpeed = reqGetSpeed.toFixed(2);
			 
			$scope.$apply();
			//alert(reqOutputSpeed);
		};
		
		$scope.chngReqRatioTech = function(rpm,outSpeed,indexnew)
		{
			//alert(rpm);
			//alert(outSpeed);
			var indexnew = this.$index;
			var ratio;
			//alert(indexnew);
			if(rpm == undefined || rpm == "") {var rpmVal = 0; }else {var rpmVal = rpm; } 
			if(outSpeed == undefined || outSpeed == "")  {var opspeedVal = 0; }else {var opspeedVal = outSpeed; }
			//if(indexnew == undefined || indexnew == "")  {var indNew = 1; }else {var indNew = indexnew; }
			
			ratio = (rpmVal/opspeedVal);
			if(isNaN(ratio) || ratio == "Infinity") {var reqratio = 0;} else {var reqratio = ratio;}
			
			$scope.dataQuery[indexnew].ratioRequired = reqratio.toFixed(2);
			
			$scope.$apply();
		}
		
		$scope.loadAssignDepartments = function()
		{
			
			$.getJSON("departmentViewForCase.do",function(json)
			{
				//alert(JSON.stringify(json));
				$scope.assignDepartmentData = json['data'];
				
			    $scope.$apply();
			});		
		};
  
   $scope.loadCaseStatus = function()
   {
	   $scope.caseStatusData =  [{ id: '1', custStatus:'Close' }, { id: '2', custStatus: 'Open' },{ id: '3', custStatus: 'Process' }]; 
   }
   $scope.loadCasePriority = function()
   {
	   $scope.casePriorityData =  [{ id: '1', casePriority:'Normal' }, { id: '2', casePriority: 'Moderate' },{ id: '3', casePriority: 'Urgent(Top Escalated Priority)' }]; 
   }
   $scope.getApplicatiosData = function(){
	   $.getJSON("getAllApplications.do",function(json)
				{
					//alert(JSON.stringify(json['data']));
					 $scope.applicationData = json['data'];
					 $scope.$apply();
				});
   }
       
$scope.getGearProductType = function()
	  {
		  $scope.gearProductData = [];
		 
		 
			$.getJSON("getpro_grp.do",function(json)
					{
						//alert(JSON.stringify(json['data']));
						 $scope.gearProductData = json['data'];
						 $scope.$apply();
					});
	  }
	  
	  $scope.getMotorType = function()
	  {
		  //$scope.motorTypeData = [{ id: '1', motorType: 'IE2' }, { id: '2', motorType: 'IE3' },{ id: '3', motorType: 'Ex-proof' }, { id: '4', motorType: 'eG3' },{ id: '5', motorType: 'AF 60Hz' }]; 
		  $.getJSON("getexlositionclassfication.do",function(json)
					{
						//alert(JSON.stringify(json['data']));
						 $scope.motorTypeData = json['data'];
						 $scope.$apply();
					});
	  }
	  
	  $scope.getMotorKw = function()
	  {
          //$scope.motorKWData = [];
		// $scope.motorKWData = [{ 'id': 0.1,'motorKW': 0.1 }, { 'id': 0.2, 'motorKW': 0.2 },{ 'id': 0.25, 'motorKW': 0.25 }, { 'id': 0.4, 'motorKW': 0.4 },{ 'id': 'OTHER', 'motorKW': 'OTHER' }]; 
		 $.getJSON("getmtr_kw.do",function(json)
					{
						 //alert(JSON.stringify(json));
						 $scope.motorKWData = json['data'];
            
						 $scope.$apply();
					});
	  }
	  
	  $scope.getMotorPole = function()
	  {
		  $scope.poleData = [{ id: '1', pole: '4' }, { id: '2', pole: '6' },{ id: '3', pole: '8' }, { id: '4', pole: '10' }]; 
	  }
	  
	  $scope.getMotorPhase = function()
	  {
		  $scope.phaseData = [{ id: '1', phase: '1' }, { id: '2', phase: '3' }]; 
	  }
	  
	  $scope.getMotorVoltage = function()
	  {
		  //$scope.voltageData = [{ id: '1', voltage: '200' }, { id: '2', voltage: '220' },{ id: '3', voltage: '230' }]; 
		  $.getJSON("getVoltagesforcase.do",function(json)
					{
						//alert(JSON.stringify(json['data']));
						 $scope.voltageData = json['data'];
						 $scope.$apply();
					});
	  }
	  $scope.getMotorHZ = function()
	  {
		  $scope.hertzData = [{ id: '1', 'hertz': '50' }, { id: '2', 'hertz': '60' }]; 
	  }
	  
	 
	  
	  $scope.getProtectionGrade = function()
	  {
		  $scope.protectionGradeData = [{ id: '1', 'protectionGrade': 'IP44' }, { id: '2', 'protectionGrade': 'IP55' },{ id: '3', 'protectionGrade': 'IP56' }, { id: '4', 'protectionGrade': 'IP65' }]; 
	  }
	  
	  $scope.getInternationalStandards = function()
	  {
		  $scope.internationalStdData = [{ id: '1', 'internationalStd': 'CE' }, { id: '2', 'internationalStd': 'UL' },{ id: '3', 'internationalStd': 'CCC' }, { id: '4', 'internationalStd': 'JIS' }];
		   
	  }
	  
	  $scope.loadRPM = function(pole,hz,ratioReq,index)
	  {
		
		 var index = this.$index;
		 $.getJSON("getRpmforCase.do",{pole:pole,frequency:hz},function(json)
					{
						//alert(JSON.stringify(json['rpm']));
						$scope.dataField[index].rpm = json['rpm'];
						//alert(ratioReq);
						
						var rpmVal = json['rpm'];
						var ratioVal = ratioReq;
						var reqOutputSpeed;
						reqOutputSpeed = (rpmVal/ratioVal);
						
						 var reqGetSpeed ;
						if(isNaN(reqOutputSpeed) || reqOutputSpeed == "Infinity") {reqGetSpeed = 0;} else { reqGetSpeed = reqOutputSpeed;}
						
						$scope.dataField[index].requiredOutputSpeed = reqGetSpeed.toFixed(2);
						
						
						 $scope.$apply();
					});
		  
		  $scope.$apply();
	  }
	  
	  $scope.loadCompRPM = function(pole,hz,rpm,ratioReq,index)
	  {
		//alert(rpm);
		 var index = this.$index;
		 $.getJSON("getRpmforCase.do",{pole:pole,frequency:hz},function(json)
					{
						//alert(JSON.stringify(json['rpm']));
						$scope.dataCompetitor[index].rpm = json['rpm'];
						var rpmVal = json['rpm'];
						var ratioVal = ratioReq;
						var reqOutputSpeed;
						reqOutputSpeed = rpmVal/ratioVal
						
						 var reqGetSpeed ;
						if(isNaN(reqOutputSpeed) || reqOutputSpeed == "Infinity") {reqGetSpeed = 0;} else { reqGetSpeed = reqOutputSpeed;}
						
						$scope.dataCompetitor[index].requiredOutputSpeed = reqGetSpeed.toFixed(2);
						 

						 $scope.$apply();
					});
		  
		  $scope.$apply();
	  }
	  
	  
	  $scope.loadSumitRPM = function(pole,hz,ratioReq,index)
	  {
		
		 var index = this.$index;
		 $.getJSON("getRpmforCase.do",{pole:pole,frequency:hz},function(json)
					{
						//alert(JSON.stringify(json['rpm']));
						$scope.dataSumitomo[index].rpm = json['rpm'];
						var rpmVal = json['rpm'];
						var ratioVal = ratioReq;
						var reqOutputSpeed;
						reqOutputSpeed = rpmVal/ratioVal
						
						 var reqGetSpeed ;
						if(isNaN(reqOutputSpeed) || reqOutputSpeed == "Infinity") {reqGetSpeed = 0;} else { reqGetSpeed = reqOutputSpeed;}
						
						$scope.dataSumitomo[index].requiredOutputSpeed = reqGetSpeed.toFixed(2);
						
						 $scope.$apply();
					});
		  
		  $scope.$apply();
	  }
	  
	  $scope.loadSpareRPM = function(pole,hz,index)
	  {
		
		 var index = this.$index;
		 $.getJSON("getRpmforCase.do",{pole:pole,frequency:hz},function(json)
					{
						//alert(JSON.stringify(json['rpm']));
						$scope.dataPart[index].rpm = json['rpm'];
						 $scope.$apply();
					});
		  
		  $scope.$apply();
	  }
	  $scope.loadTechRPM = function(pole,hz,ratioReq,index)
	  {
		
		 var index = this.$index;
		 $.getJSON("getRpmforCase.do",{pole:pole,frequency:hz},function(json)
					{
						//alert(JSON.stringify(json['rpm']));
						$scope.dataQuery[index].rpm = json['rpm'];
						var rpmVal = json['rpm'];
						var ratioVal = ratioReq;
						var reqOutputSpeed;
						reqOutputSpeed = rpmVal/ratioVal
						
						 var reqGetSpeed ;
						if(isNaN(reqOutputSpeed) || reqOutputSpeed == "Infinity") {reqGetSpeed = 0;} else { reqGetSpeed = reqOutputSpeed;}
						
						$scope.dataQuery[index].requiredOutputSpeed = reqGetSpeed.toFixed(2);
						
						 $scope.$apply();
					});
		  
		  $scope.$apply();
	  }
	  
	  
	
//==========New Selection Start============//	  
	  $scope.getSSCCode = function()
	   {  
	        $scope.availableSSCCode = [];
		   $.getJSON("getAllSSccodes.do",function(json)
				{
					//alert(JSON.stringify(json['data']));
					
					//var asd = JSON.stringify(json['data']);
					 $scope.availableSSCCode = json['data'];
					// alert($scope.availableCode);
					 $scope.$apply();
				});
	   }
	$scope.dataField = [];
    $indexTab1=0;

$scope.addFormField = function() 
	{
		
		$indexTab1++;
	    $scope.dataField.push({'id':$indexTab1,'gm':'0','model':'0','quantity':'1','ambientTemp':'40','pole':'4','rpm':'1450','phase':'3','motorType':'NO','application':'A01','gearProduct':'CYCLO 6000','motorKW':'0.1','voltage':'400','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1','conf':'0','mount':'0','oshaft':'0','mount2':'0',oshaftInc1:false,oshaftInc2:false,'ishaft':'0','oshafty':'0','oshafty2':'4','backStop':'0','rot':'0','hssRadialLoadKn':'0','hssRadialLoadMm':'0','hssAxialLoadKn':'0','sssRadialLoadKn':'0','sssRadialLoadMm':'0','sssAxialLoadKn':'0','dirHssAxial':'0','dirSssAxial':'0'});
		
		$scope.$apply();
	};
	
	$scope.removeFormRow = function(name)
	{	
	   // alert(name);
		var IndexTab1 = -1;		
		var comArrTab1 = eval( $scope.dataField );
		for( var i = 0; i < comArrTab1.length; i++ ) 
		{
			if( comArrTab1[i].id === name ) 
			{
				IndexTab1 = i;
				break;
			}				
		}
		$scope.dataField.splice( IndexTab1, 1 );
		$indexTab1 = comArrTab1.length;
		for(var s=0;s<$indexTab1;s++)
		{
			$scope.dataField[s].id = Number(s)+Number(1);
		}			
   };
   //======New Selection clear field========//
      $scope.clearField = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataField[index].hssRadialLoadKn = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataField[index].hssRadialLoadKn = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataField[index].hssRadialLoadKn = rmvData;
		  }
		  
	  }
	  $scope.defaultVal = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataField[index].hssRadialLoadKn = '0';
		  }
	  }
	  $scope.clearFieldLoadMm = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataField[index].hssRadialLoadMm = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataField[index].hssRadialLoadMm = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataField[index].hssRadialLoadMm = rmvData;
		  }
		  
	  }
	  $scope.defaultValLoadMm = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataField[index].hssRadialLoadMm = '0';
		  }
	  }
	  $scope.clearFieldLoadKn = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataField[index].hssAxialLoadKn = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataField[index].hssAxialLoadKn = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataField[index].hssAxialLoadKn = rmvData;
		  }
		  
	  }
	  $scope.defaultValLoadKn = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataField[index].hssAxialLoadKn = '0';
		  }
	  }
	  $scope.clearsssFieldLoadKn = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataField[index].sssRadialLoadKn = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataField[index].sssRadialLoadKn = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataField[index].sssRadialLoadKn = rmvData;
		  }
		  
	  }
	  $scope.defaultsssValLoadKn = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataField[index].sssRadialLoadKn = '0';
		  }
	  }
	  $scope.clearsssFieldLoadMm = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataField[index].sssRadialLoadMm = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataField[index].sssRadialLoadMm = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataField[index].sssRadialLoadMm = rmvData;
		  }
		  
	  }
	  $scope.defaultsssValLoadMm = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataField[index].sssRadialLoadMm = '0';
		  }
	  }
	  $scope.clearAxialLoadKn = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataField[index].sssAxialLoadKn = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataField[index].sssAxialLoadKn = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataField[index].sssAxialLoadKn = rmvData;
		  }
		  
	  }
	  $scope.defaultAxialLoadKn = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataField[index].sssAxialLoadKn = '0';
		  }
	  }
	  
	  //======Competitor Replace clear field========//
	  $scope.CompField = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataCompetitor[index].hssRadialLoadKn = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataCompetitor[index].hssRadialLoadKn = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataCompetitor[index].hssRadialLoadKn = rmvData;
		  }
		  
	  }
	  $scope.defaultCompVal = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataCompetitor[index].hssRadialLoadKn = '0';
		  }
	  }
	  $scope.CompFieldLoadMm = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataCompetitor[index].hssRadialLoadMm = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataCompetitor[index].hssRadialLoadMm = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataCompetitor[index].hssRadialLoadMm = rmvData;
		  }
		  
	  }
	  $scope.defaultCompValLoadMm = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataCompetitor[index].hssRadialLoadMm = '0';
		  }
	  }
	  $scope.CompFieldLoadKn = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataCompetitor[index].hssAxialLoadKn = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataCompetitor[index].hssAxialLoadKn = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataCompetitor[index].hssAxialLoadKn = rmvData;
		  }
		  
	  }
	  $scope.defaultCompValLoadKn = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataCompetitor[index].hssAxialLoadKn = '0';
		  }
	  }
	  $scope.CompsssFieldLoadKn = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataCompetitor[index].sssRadialLoadKn = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataCompetitor[index].sssRadialLoadKn = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataCompetitor[index].sssRadialLoadKn = rmvData;
		  }
		  
	  }
	  $scope.defaultCompsssValLoadKn = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataCompetitor[index].sssRadialLoadKn = '0';
		  }
	  }
	  $scope.CompsssFieldLoadMm = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataCompetitor[index].sssRadialLoadMm = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataCompetitor[index].sssRadialLoadMm = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataCompetitor[index].sssRadialLoadMm = rmvData;
		  }
		  
	  }
	  $scope.defaultCompsssValLoadMm = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataCompetitor[index].sssRadialLoadMm = '0';
		  }
	  }
	  $scope.CompaxialLoadKn = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataCompetitor[index].sssAxialLoadKn = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataCompetitor[index].sssAxialLoadKn = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataCompetitor[index].sssAxialLoadKn = rmvData;
		  }
		  
	  }
	  $scope.defaultCompAxialLoadKn = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataCompetitor[index].sssAxialLoadKn = '0';
		  }
	  }
	  //======Sumitomo Replace clear field========//
	  $scope.SumitField = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataSumitomo[index].hssRadialLoadKn = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataSumitomo[index].hssRadialLoadKn = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataSumitomo[index].hssRadialLoadKn = rmvData;
		  }
		  
	  }
	  $scope.defaultSumitVal = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataSumitomo[index].hssRadialLoadKn = '0';
		  }
	  }
	  $scope.SumitFieldLoadMm = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataSumitomo[index].hssRadialLoadMm = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataSumitomo[index].hssRadialLoadMm = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataSumitomo[index].hssRadialLoadMm = rmvData;
		  }
		  
	  }
	  $scope.defaultSumitValLoadMm = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataSumitomo[index].hssRadialLoadMm = '0';
		  }
	  }
	  $scope.SumitFieldLoadKn = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataSumitomo[index].hssAxialLoadKn = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataSumitomo[index].hssAxialLoadKn = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataSumitomo[index].hssAxialLoadKn = rmvData;
		  }
		  
	  }
	  $scope.defaultSumitValLoadKn = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataSumitomo[index].hssAxialLoadKn = '0';
		  }
	  }
	  $scope.SumitsssFieldLoadKn = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataSumitomo[index].sssRadialLoadKn = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataSumitomo[index].sssRadialLoadKn = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataSumitomo[index].sssRadialLoadKn = rmvData;
		  }
		  
	  }
	  $scope.defaultSumitsssValLoadKn = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataSumitomo[index].sssRadialLoadKn = '0';
		  }
	  }
	  $scope.SumitsssFieldLoadMm = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataSumitomo[index].sssRadialLoadMm = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataSumitomo[index].sssRadialLoadMm = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataSumitomo[index].sssRadialLoadMm = rmvData;
		  }
		  
	  }
	  $scope.defaultSumitsssValLoadMm = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataSumitomo[index].sssRadialLoadMm = '0';
		  }
	  }
	  $scope.SumitaxialLoadKn = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataSumitomo[index].sssAxialLoadKn = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataSumitomo[index].sssAxialLoadKn = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataSumitomo[index].sssAxialLoadKn = rmvData;
		  }
		  
	  }
	  $scope.defaultSumitAxialLoadKn = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataSumitomo[index].sssAxialLoadKn = '0';
		  }
	  }
	   //======Tech Query clear field========//
	  $scope.TechField = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataQuery[index].hssRadialLoadKn = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataQuery[index].hssRadialLoadKn = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataQuery[index].hssRadialLoadKn = rmvData;
		  }
		  
	  }
	  $scope.defaultTechVal = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataQuery[index].hssRadialLoadKn = '0';
		  }
	  }
	  $scope.TechFieldLoadMm = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataQuery[index].hssRadialLoadMm = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataQuery[index].hssRadialLoadMm = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataQuery[index].hssRadialLoadMm = rmvData;
		  }
		  
	  }
	  $scope.defaultTechtValLoadMm = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataQuery[index].hssRadialLoadMm = '0';
		  }
	  }
	  $scope.TechFieldLoadKn = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataQuery[index].hssAxialLoadKn = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataQuery[index].hssAxialLoadKn = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataQuery[index].hssAxialLoadKn = rmvData;
		  }
		  
	  }
	  $scope.defaultTechValLoadKn = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataQuery[index].hssAxialLoadKn = '0';
		  }
	  }
	  $scope.TechsssFieldLoadKn = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataQuery[index].sssRadialLoadKn = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataQuery[index].sssRadialLoadKn = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataQuery[index].sssRadialLoadKn = rmvData;
		  }
		  
	  }
	  $scope.defaultTechsssValLoadKn = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataQuery[index].sssRadialLoadKn = '0';
		  }
	  }
	  $scope.TechsssFieldLoadMm = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataQuery[index].sssRadialLoadMm = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataQuery[index].sssRadialLoadMm = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataQuery[index].sssRadialLoadMm = rmvData;
		  }
		  
	  }
	  $scope.defaultTechsssValLoadMm = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataQuery[index].sssRadialLoadMm = '0';
		  }
	  }
	  $scope.TechaxialLoadKn = function(rmvData,index)
	  {
		  var index = this.$index;
		  
		  if(rmvData.length==0)
		  {
			 //alert(rmvData.length); 
			 $scope.dataQuery[index].sssAxialLoadKn = '0';
		  }
		  else if(rmvData.length==1)
		  {
			  //alert(rmvData.length);
			  $scope.dataQuery[index].sssAxialLoadKn = "";
		  }
		  else
		  {
			  // alert(rmvData.length);
			   $scope.dataQuery[index].sssAxialLoadKn = rmvData;
		  }
		  
	  }
	  $scope.defaultTechAxialLoadKn = function(rmvVal,index)
	  {
		  //alert(rmvVal);
		   var index = this.$index;
		  if(rmvVal.length=="")
		  {
			  //alert(454);
			  $scope.dataQuery[index].sssAxialLoadKn = '0';
		  }
	  }
      $scope.loadAddedCustomers = function()
			{
				$.getJSON("getAllCustmerNames.do",function(json)
						{
					
					        // alert(JSON.stringify(json['data']));
					       
							$scope.customerNameArr = json['data'];
					        $scope.$apply();
						});
			 
			};
	
	
			
			
    
	    $scope.loadAddedCustomerCodes = function()
			{
				$scope.customerCodeArr = [];
				$.getJSON("getAllCustmerCopdes.do",function(json)
						{
					
					        //alert(JSON.stringify(json['data']));
					         $scope.customerCodeArr = json['data'];
							 //alert(JSON.stringify($scope.customerCodeArr));
					         $scope.$apply();
						});
						
			 
			};
			/*$scope.loadSalescustomername = function()
			{
				alert($rootScope.customername);
				var customer2 = $rootScope.customername;
				if(customer2 == undefined || customer2 == "")
				{
					alert("if");
				}
				else
				{
					alert("else");
				}
				
				$.getJSON("getCustmerNameFromNewCase.do",{custmername:customer2},function(json)
				{
					

					var getData = JSON.stringify(json['custmer']);
					
					if(getData!=undefined)
					{
						//alert(JSON.stringify(getData) + "getData" + 2 );
						$scope.addCase.customer = json['custmer'].accountid;
						$scope.addCase.customerCode = json['custmer'].account;
						$scope.addCase.contactPerson = json['custmer'].contactName;
						$scope.addCase.phone = json['custmer'].phnumber;
						$scope.addCase.address = json['custmer'].shippingadress;
						//$scope.addCase.phone = phnumber;
						//alert(JSON.stringify($scope.addCase));
						$("#dataNotFound").hide();
						$scope.$apply();
					}
					else
					{
						$("#dataNotFound").show();
					}
				 });
			 }*/
		
	$scope.validCustomer = function(customer)
	{
		
				
				
				//alert("naveena"+$rootScope.Salesreportflag);
				
		
			$.getJSON("getCustmerNameFromNewCase.do",{custmername:customer},function(json)
				{
					var getData = JSON.stringify(json['custmer']);
					//alert(JSON.stringify(getData));
					if(getData!=undefined)
					{
						//alert(JSON.stringify(getData) + "getData" + 2 );
						$scope.addCase.customer = json['custmer'].accountid;
						$scope.addCase.customerCode = json['custmer'].account;
						$scope.addCase.contactPerson = json['custmer'].contactName;
						$scope.addCase.phone = json['custmer'].phnumber;
						$scope.addCase.address = json['custmer'].shippingadress;
						//$scope.addCase.phone = phnumber;
						//alert(JSON.stringify($scope.addCase));
						$("#dataNotFound").hide();
						$scope.$apply();
					}
					else
					{
						$("#dataNotFound").show();
					}
					
					
				});
		
			
			
	};
			
	$scope.validCustomerCode = function(custCode)
	{
		//if(custCode!=undefined)
		//{
			//alert(JSON.stringify(customer)+ "if" + 1);
			/*var customerStatus;	
			$.getJSON("getstautsofcustmers.do",{account:custCode},function(json)
					{
				        //alert(json['data']);
				        customerStatus = JSON.stringify(json['data']);
				       //$scope.$apply();
					   alert(customerStatus);
					});*/
			
			 //alert(customerStatus);
			//if(customerStatus!=undefined && customerStatus ==1)
			//{
				//alert(customerStatus + "customerStatus" + 1);
				$.getJSON("custmerdatabybasingoncustmercode.do",{account:custCode},function(json)
				{
					var getData = JSON.stringify(json['custmer']);
					//alert(JSON.stringify(getData));
					if(getData!=undefined)
					{ 
					    $scope.addCase.customer = json['custmer'].accountid;
						$scope.addCase.customerCode = json['custmer'].account;
						$scope.addCase.contactPerson = json['custmer'].contactName;
						$scope.addCase.phone = json['custmer'].phnumber;
						$scope.addCase.address = json['custmer'].shippingadress;
						//$scope.addCase.phone = phnumber;
						//alert(JSON.stringify($scope.addCase));
						$("#codeNotFound").hide();
						$scope.$apply();
					}
					else
					{
						$("#codeNotFound").show();
						//$scope.addCase = angular.copy($scope.master);
						/*$.getJSON("loadingsequenceNember.do",function(json)
						 {
							$scope.addCase=json['maincaseform'][0];
							$scope.$apply();
						});*/
						//$scope.$apply(); 
					}
					
					
				});
			//}
			//else
			//{
				//alert(JSON.stringify(getData)+ "getData" + 2);
				/*swal( 'Customer Name Not Match');
				$scope.addCase = angular.copy($scope.master);
				$.getJSON("loadingsequenceNember.do",function(json)
				 {
					$scope.addCase=json['maincaseform'][0];
					$scope.$apply();
				}); */
			//}
			
		//}
		/*else
		{
			//alert(JSON.stringify(customer)+ "else" + 3);
			$("#codeNotFound").hide();
			$scope.addCase = angular.copy($scope.master);
			$.getJSON("loadingsequenceNember.do",function(json)
			 {
				$scope.addCase=json['maincaseform'][0];
				$scope.$apply();
			});
			
			$scope.$apply();
		}*/
			
	};

	$scope.addRemark = function(remark)
	{
		//alert(JSON.stringify(desp));
		$.getJSON("savingDescriptionandRemarks.do",{remarks:remark,tab:1},function(json)
				{
			           //alert(JSON.stringify(remark));
					  
					    $scope.addedRemarksData =json['rerkadata'];
					    $scope.$apply();
				});
				 $scope.remarks = "";
				 $scope.$apply();
		
		
		
	}
	
	$scope.addRemarkComp = function(remark)
	{
		//alert(JSON.stringify(remark));
		
		
	
		$.getJSON("savingDescriptionandRemarks.do",{remarks:remark,tab:2},function(json)
				{
			
			           //alert(JSON.stringify(remark));
					   //$scope.remark = "";
					   //alert(JSON.stringify($scope.remark)); 
			//alert(tab);
		  			   $scope.addedRemarksCompData =json['rerkadata'];
					   $scope.$apply();
				});
				 $scope.remarksComp = "";
				 $scope.$apply();
		
	}
	$scope.addRemarkSumit = function(remark)
	{
		//alert(JSON.stringify(desp));
		$.getJSON("savingDescriptionandRemarks.do",{remarks:remark,tab:3},function(json)
				{
			           //alert(JSON.stringify(remark));
					   //$scope.remark = "";
					   //alert(JSON.stringify($scope.remark)); 
			//alert(tab);
					   $scope.addedRemarksSumitData =json['rerkadata'];
					   $scope.$apply();
				});
		
		         $scope.remarksSumit = "";
				 $scope.$apply();
		
	}
	$scope.addRemarkSpare = function(remark)
	{
		//alert(JSON.stringify(desp));
		$.getJSON("savingDescriptionandRemarks.do",{remarks:remark,tab:4},function(json)
				{
			           //alert(JSON.stringify(remark));
					   //$scope.remark = "";
					   //alert(JSON.stringify($scope.remark)); 
			//alert(tab);
					   $scope.addedRemarksSpareData =json['rerkadata'];
					   $scope.$apply();
				});
		         $scope.remarksSpare = "";
				 $scope.$apply();
		
		
	}
	$scope.addRemarkTech = function(remark)
	{
		//alert(JSON.stringify(desp));
		$.getJSON("savingDescriptionandRemarks.do",{remarks:remark,tab:5},function(json)
				{
			           //alert(JSON.stringify(json['rerkadata']));
					   //$scope.remark = "";
					   //alert(JSON.stringify($scope.remark)); 
			//alert(tab);
					  // $scope.remark = angular.copy($scope.master);
					   //form.$setPristine(true);
					   $scope.addedRemarksTechData =json['rerkadata'];
					   $scope.$apply();
				});
		
		         $scope.remarksTech = "";
				 //$scope.addBlogTech();
				 $scope.$apply();
		
	}
$scope.changeMotorNewStatus = function(status,index)
{
	//alert(status);
	var index = this.$index;
	if(status == '2') { $scope.requiredStatus = true; } else { $scope.requiredStatus = false; $scope.dataField[index].gearMotor = "";}
	//alert($scope.requiredStatus);
}
$scope.changeMotorCompStatus = function(status,index1)
{
	var index1 = this.$index;
	if(status == '2') { $scope.reqCompStatus = true; } else { $scope.reqCompStatus = false;$scope.dataCompetitor[index1].gearMotor = ""; }
	//alert($scope.requiredStatus);
}
$scope.changeMotorSumitStatus = function(status,index2)
{
	var index2 = this.$index;
	if(status == '2') { $scope.reqSumitStatus = true; } else { $scope.reqSumitStatus = false;$scope.dataSumitomo[index2].gearMotor = ""; }
	//alert($scope.requiredStatus);
}
$scope.changeMotorSpareStatus = function(status,index3)
{
	var index3 = this.$index;
	if(status == '2') 
	{ 
		$scope.reqSpareStatus = true; 
		$scope.expSts = true;
		//$scope.expOthSts = true;
		$scope.mtrSprSts = true;
		$scope.poleSprSts = true;
		$scope.phSprSts = true;
		$scope.voltSprSts = true;
		$scope.hzSprSts = true;
		$scope.rpmSprSts = true;
	}
	else 
	{ 
		$scope.reqSpareStatus = false;
		$scope.expSts = false;
		//$scope.expOthSts = false;
		$scope.mtrSprSts = false;
		$scope.poleSprSts = false;
		$scope.phSprSts = false;
		$scope.voltSprSts = false;
		$scope.hzSprSts = false;
		$scope.rpmSprSts = false;
		$scope.dataPart[index3].gearMotor = "";
	}
	//alert($scope.requiredStatus);
}
$scope.changeMotorTechStatus = function(status,index4)
{
	var index4 = this.$index;
	if(status == '2') { $scope.reqTechStatus = true; } else { $scope.reqTechStatus = false;$scope.dataQuery[index4].gearMotor = ""; }
	//alert($scope.requiredStatus);
}

$scope.prestNeoStatus = function(status)
{
	//alert(status);
	if(status == 'CYCLO WITH TORQUE LIMITER') { $scope.reqStatus = true; } else { $scope.reqStatus = false; }
	//alert($scope.reqStatus);
}
$scope.prestNeoCompStatus = function(status)
{
	//alert(status);
	if(status == 'CYCLO WITH TORQUE LIMITER') { $scope.reqStatusComp = true; } else { $scope.reqStatusComp = false; }
	//alert($scope.reqStatus);
}
$scope.prestNeoSumitStatus = function(status)
{
	//alert(status);
	if(status == 'CYCLO WITH TORQUE LIMITER') { $scope.reqStatusSumit = true; } else { $scope.reqStatusSumit = false; }
	//alert($scope.reqStatus);
}

$scope.prestNeoTechStatus = function(status)
{
	//alert(status);
	if(status == 'CYCLO WITH TORQUE LIMITER') { $scope.reqStatusTech = true; } else { $scope.reqStatusTech = false; }
	//alert($scope.reqStatus);
}
$scope.chngOtherSts = function(status,index)
{
	var index = this.$index;
	if(status == 'other - pls specify'){$scope.reqOtherNew = true;}else{$scope.reqOtherNew = false;$scope.dataField[index].othersPlz = "";}
}
$scope.chngOtherStsComp = function(status,index)
{
	var index = this.$index;
	if(status == 'other - pls specify'){$scope.reqOtherComp = true;}else{$scope.reqOtherComp = false;$scope.dataCompetitor[index].othersPlz = "";}
}
$scope.chngOtherStsSumit = function(status,index)
{
	var index = this.$index;
	if(status == 'other - pls specify'){$scope.reqOtherSumit = true;}else{$scope.reqOtherSumit = false;$scope.dataSumitomo[index].othersPlz = "";}
}
$scope.chngOtherStsSpare = function(status,index)
{
	var index = this.$index;
	if(status == 'other - pls specify'){$scope.reqOtherSpare = true;}else{$scope.reqOtherSpare = false;$scope.dataPart[index].othersPlz = "";}
}
$scope.chngOtherStsTech = function(status,index)
{
	var index = this.$index;
	if(status == 'other - pls specify'){$scope.reqOtherTech = true;}else{$scope.reqOtherTech = false;$scope.dataQuery[index].othersPlz = "";}
}
$scope.chngMotorKWSts = function(status,index)
{
	 var index = this.$index;
	 
	if(status == 'OTHER'){$scope.reqMotorKW = true;}else{ $scope.reqMotorKW = false; $scope.dataField[index].other = "";$(".InvalidRange").hide();}
}
$scope.chngMotorKWStsComp = function(status,index)
{
	 var index = this.$index;
	 
	if(status == 'OTHER'){$scope.reqMotorKWComp = true; }else{$scope.reqMotorKWComp = false; $scope.dataCompetitor[index].other = "";$(".InvalidRangeComp").hide();}
}
$scope.chngMotorKWStsSumit = function(status,index)
{
	 var index = this.$index;
	 
	if(status == 'OTHER'){$scope.reqMotorKWSumit = true; }else{ $scope.reqMotorKWSumit = false; $scope.dataSumitomo[index].other = "";$(".InvalidRangeSumit").hide();}
}
$scope.chngMotorKWStsSpare = function(status,index)
{
	 var index = this.$index;
	 
	if(status == 'OTHER'){$scope.reqMotorKWSpare = true; }else{ $scope.reqMotorKWSpare = false; $scope.dataPart[index].other = "";$(".InvalidRangeSpare").hide();}
}
$scope.chngMotorKWStsTech = function(status,index)
{
	 var index = this.$index;
	 
	if(status == 'OTHER'){$scope.reqMotorKWTech = true; }else{ $scope.reqMotorKWTech = false; $scope.dataQuery[index].other = "";$(".InvalidRangeTech").hide();}
}

$scope.rangeValid = function(range)
{
	//alert(range);
	
	if(range <= 2000){$(".InvalidRange").hide(); }else{$(".InvalidRange").show(); }
}
$scope.rangeValidComp = function(range)
{
	//alert(range);
	
	if(range <= 2000){$(".InvalidRangeComp").hide(); }else{$(".InvalidRangeComp").show(); }
}
$scope.rangeValidSumit = function(range)
{
	//alert(range);
	
	if(range <= 2000){$(".InvalidRangeSumit").hide(); }else{$(".InvalidRangeSumit").show(); }
}
$scope.rangeValidSpare = function(range)
{
	//alert(range);
	
	if(range <= 2000){$(".InvalidRangeSpare").hide(); }else{$(".InvalidRangeSpare").show(); }
}
$scope.rangeValidTech = function(range)
{
	//alert(range);
	
	if(range <= 2000){$(".InvalidRangeTech").hide(); }else{$(".InvalidRangeTech").show(); }
}

$scope.newInclinedFields = function(sts,indexNew)
{
	
   var indexNew = this.$index; 
  if(sts ==false)
      {
         sts =true; 
            $('#degree').attr('disabled',true);
            $('#toward').attr('disabled',true);
            $scope.dataField[indexNew].deg = "";
            $scope.dataField[indexNew].towards = "";
 
      }
    else
        {
             sts =false; 
             $('#degree').attr('disabled',false);
             $('#toward').attr('disabled',false);
        }
}

$scope.compInclinedFields = function(inclinSatus,indexComp)
{
     var indexComp = this.$index; 
    if(inclinSatus ==false)
      {
         inclinSatus =true; 
            $('#degreeComp').attr('disabled',true);
            $('#towardsComp').attr('disabled',true);
            $scope.dataCompetitor[indexComp].deg = "";
            $scope.dataCompetitor[indexComp].towards = "";
 
      }
    else
        {
             inclinSatus =false; 
             $('#degreeComp').attr('disabled',false);
            $('#towardsComp').attr('disabled',false);
        }
    /*if(!inclinSatus)
        {
            //alert(inclinSatus + " false ");
            $scope.dataCompetitor[indexComp].deg = "";
            $scope.dataCompetitor[indexComp].towards = "";
        }
    else
        {
            //alert(inclinSatus + " true ");
        }*/
}
$scope.sumitInclinedFields = function(inclinSatus,indexSumit)
{
     var indexSumit = this.$index; 
    if(inclinSatus ==false)
      {
         inclinSatus =true; 
            $('#degreeSumit').attr('disabled',true);
            $('#towardsSumit').attr('disabled',true);
            $scope.dataSumitomo[indexSumit].deg = "";
            $scope.dataSumitomo[indexSumit].towards = "";
 
      }
    else
        {
             inclinSatus =false; 
             $('#degreeSumit').attr('disabled',false);
            $('#towardsSumit').attr('disabled',false);
        }
    /*if(!inclinSatus)
        {
            //alert(inclinSatus + " false ");
            $scope.dataSumitomo[indexSumit].deg = "";
            $scope.dataSumitomo[indexSumit].towards = "";
        }
    else
        {
            //alert(inclinSatus + " true ");
        }*/
}
$scope.techInclinedFields = function(inclinSatus,indexTech)
{
     var indexTech = this.$index;   
    if(inclinSatus ==false)
      {
         inclinSatus =true; 
            $('#degreeTech').attr('disabled',true);
            $('#towardsTech').attr('disabled',true);
            $scope.dataQuery[indexTech].deg = "";
            $scope.dataQuery[indexTech].towards = "";
 
      }
    else
        {
             inclinSatus =false; 
             $('#degreeTech').attr('disabled',false);
            $('#towardsTech').attr('disabled',false);
        }
    /*if(!inclinSatus)
        {
            //alert(inclinSatus + " false ");
            $scope.dataQuery[indexTech].deg = "";
            $scope.dataQuery[indexTech].towards = "";
        }
    else
        {
            //alert(inclinSatus + " true ");
        }*/
}

$scope.techInclinedFields = function(inclinSatus,indexTech)
{
     var indexTech = this.$index;   
    if(!inclinSatus)
        {
            //alert(inclinSatus + " false ");
            $scope.dataQuery[indexTech].deg = "";
            $scope.dataQuery[indexTech].towards = "";
        }
    else
        {
            //alert(inclinSatus + " true ");
        }
}

		$scope.newSelectionTempGrid = function(form)
		{
			
			 // $('#menu1').addClass('active');
		     // $('#newSelection').addClass('active');
				form.$setPristine(true);		 					
		        $("#newSelection").show();
				$("#competitorReplace").hide();
				$("#sumitomoReplace").hide();
				$("#sparePart").hide();
				$("#techQuery").hide();
				$("#blogHide").hide();
				$("#remarksHide").hide();
				$("#codeNotFound").hide();
				$("#dataNotFound").hide(); 
				$scope.QtnBtnNew = '0';
				//$('#QtnBtnNew-hide').hide();
			$.post("loadingCasessTab1.do",function(json)
					{
					
				//alert("newSelectionTempGrid");
				     //alert(JSON.stringify(json));
					 //var dtcase = json['maincaseform'][0].dateCase.split('T');
                     //var dtexp = json['maincaseform'][0].dateExp.split('T');
				      var gridVal = json['value'];
				          if(gridVal==0)
				    	  {
				        	
				        	  $scope.addCase=json['maincaseform'][0];
				        	  $scope.addDesp=json['description'][0]; 
							  $indexTab1=1;
							  $scope.dataField=[{'id':$indexTab1,'gm':'0','model':'0','ambientTemp':'40','rpm':'1450','pole':'4','phase':'3','motorType':'NO','application':'A01','quantity':'1','gearProduct':'CYCLO 6000','motorKW':'0.1','voltage':'400','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1','conf':'0','mount':'0','oshaft':'0','mount2':'0',oshaftInc1:false,oshaftInc2:false,'ishaft':'0','oshafty':'0','oshafty2':'4','backStop':'0','rot':'0','hssRadialLoadKn':'0','hssRadialLoadMm':'0','hssAxialLoadKn':'0','sssRadialLoadKn':'0','sssRadialLoadMm':'0','sssAxialLoadKn':'0','dirHssAxial':'0','dirSssAxial':'0'}];
							  $scope.stepsModel = [];
							  cusImage = new FormData();
							  $(".btn-hideNew").attr("disabled",false);
							 // $('#QtnBtnNew-hide').hide();
							 // $("#newSelection").show();
							 $scope.QtnBtnNew = '0';
							  $scope.$apply();
				    	  }
				         
						 else
						 {
							 //alert(json['maincaseform'][0].images + " img" + 1);
				        	   $scope.addCase=json['maincaseform'][0];
							   $scope.addDesp=json['description'][0]; 
							   $scope.dataField=json['griddata'];
							   $scope.QtnBtnNew = '0';
							   //$scope.addCase.dateCase=dtcase[0];
							  // $scope.addCase.dateExp=dtexp[0];
							   //$scope.stepsModel = json['maincaseform'][0].images.split(',');
							    $scope.$apply(); 
							    var getImage = json['maincaseform'][0].images;
								  // alert(getImage);
									 if(getImage!=null)
									   {
										   //alert(getImage + " " + 1);
										   var imgPrew = getImage.trim();
										   if(imgPrew==null || imgPrew=="" )
										   {
											   
											 	$scope.stepsModel = [];
											  $scope.$apply();
											  //$scope.dummyPhoto="";
					                          //$('#dummyPhoto').trigger('blur');
										   }
										   else
										   {
											   //alert(getImage + " " + 3);
											   $scope.stepsModel = getImage.split(',');
											   $scope.$apply();
											   
										   }
									   }
									   else
									   {
										   //alert(getImage + " " + 4);
										    $scope.stepsModel = [];
										    $scope.$apply();
										 
									   }
							 
				         }
						   
						  
					});
			
		}
		
		$scope.competitorReplaceTempGrid = function(form)
		{
			form.$setPristine(true);
			 // $('#menu2').addClass('active');
		      //$('#competitorReplace').addClass('active');
			 //$scope.addCase = " ";
			$("#newSelection").hide();
			$("#competitorReplace").show();
			$("#sumitomoReplace").hide();
			$("#sparePart").hide();
			$("#techQuery").hide();  
			$("#blogHideComp").hide();
			$("#remarksHideComp").hide();
			$("#codeNotFound").hide();
			$("#dataNotFound").hide(); 
			//$("#qtnBtnComp-hide").hide(); 
			$scope.qtnBtnComp = '0';
			$.post("loadingCasessTab2.do",function(json)
					{
				//alert("competitorReplaceTempGrid");
				
				      
				var gridVal = json['value'];
				if(gridVal==0)
				{
					//alert(gridVal);
					//alert(JSON.stringify(json['maincaseform']));
					//alert(JSON.stringify($scope.addCase));
					  $scope.addCase = json['maincaseform'][0];
					  $scope.addDespComp=json['description'][0];
					  $indexTab2=1;
					  $scope.dataCompetitor=[{'id':$indexTab2,'gm':'0','model':'0','ambientTemp':'40','rpm':'1450','motorType':'NO','application':'A01','gearProduct':'CYCLO 6000','motorKW':'0.1','quantity':'1','voltage':'400','pole':'4','phase':'3','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1','dimension':'1','conf':'0','mount':'0','ishaft':'0','oshaft':'0','mount2':'0',oshaftInc1:false,oshaftInc2:false,'oshafty':'0','oshafty2':'4','backStop':'0','rot':'0','hssRadialLoadKn':'0','hssRadialLoadMm':'0','hssAxialLoadKn':'0','sssRadialLoadKn':'0','sssRadialLoadMm':'0','sssAxialLoadKn':'0','dirHssAxial':'0','dirSssAxial':'0'}];
                      $scope.stepsModelComp = [];
					  cusImageComp = new FormData();
					  $('.btn-hideComp').attr('disabled',false);
					  $scope.qtnBtnComp = '0';
					  $scope.$apply();
				}
				else
				{
					   $scope.addCase=json['maincaseform'][0];
					   $scope.addDespComp=json['description'][0]; 
					   $scope.dataCompetitor=json['griddata'];
					   $scope.qtnBtnComp = '0';
					   //$scope.stepsModelComp = json['maincaseform'][0].images.split(',');
					    $scope.$apply(); 
					   var getImageComp = json['maincaseform'][0].images;
								  // alert(getImage);
									 if(getImageComp!=null)
									   {
										   //alert(getImage + " " + 1);
										   var imgPrew = getImageComp.trim();
										   if(imgPrew==null || imgPrew=="" )
										   {
											  
											  $scope.stepsModelComp = [];
											  $scope.$apply();
											  //$scope.dummyPhoto="";
					                          //$('#dummyPhoto').trigger('blur');
										   }
										   else
										   {
											   //alert(getImage + " " + 3);
											   $scope.stepsModelComp = getImageComp.split(',');
											   $scope.$apply();
											   
										   }
									   }
									   else
									   {
										   //alert(getImage + " " + 4);
										    $scope.stepsModelComp = [];
										    $scope.$apply();
										 
									   }
					
				}
						   
						  
					});
		}
		$scope.sumitomoReplaceTempGrid = function(form)
		{
			form.$setPristine(true);
			  
		      //$('#competitorReplace').addClass('active');
			//$scope.addCase = " ";
			$("#newSelection").hide();
			$("#competitorReplace").hide();
			$("#sumitomoReplace").show();
			$("#sparePart").hide();
			$("#techQuery").hide();  
			$("#blogHideSumit").hide(); 
			$("#remarksHideSumit").hide();
			$("#codeNotFound").hide();
			$("#dataNotFound").hide(); 
			//$("#qtnBtnSumit-hide").hide();
			 $scope.qtnBtnSumit = '0';
			$.post("loadingCasessTab3.do",function(json)
					{
						
				     // alert("sumitomoReplaceTempGrid");
				//alert(JSON.stringify(json['maincaseform']));
				var gridVal = json['value'];
				if(gridVal==0)
				{
					  $scope.addCase=json['maincaseform'][0];
					  $scope.addDespSumit=json['description'][0];
					  $indexTab3=1;
					  $scope.dataSumitomo=[{'id':$indexTab3,'gm':'0','model':'0','ambientTemp':'40','motorType':'NO','rpm':'1450','application':'A01','gearProduct':'CYCLO 6000','quantity':'1','motorKW':'0.1','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','voltage':'400','pole':'4','phase':'3','mtrEfficncyClass':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1','dimension':'1','conf':'0','mount':'0','mount2':'0',oshaftInc1:false,oshaftInc2:false,'ishaft':'0','oshaft':'0','oshafty':'0','oshafty2':'4','backStop':'0','rot':'0','hssRadialLoadKn':'0','hssRadialLoadMm':'0','hssAxialLoadKn':'0','sssRadialLoadKn':'0','sssRadialLoadMm':'0','sssAxialLoadKn':'0','dirHssAxial':'0','dirSssAxial':'0'}];
                       $scope.stepsModelSumit = [];
					    cusImageSumit = new FormData();
					  $('.btn-hide').attr('disabled',false);
					  $scope.qtnBtnSumit = '0';
					  $scope.$apply();
				}
				else
				{
					   $scope.addCase=json['maincaseform'][0];
					   $scope.addDespSumit=json['description'][0]; 
					   $scope.dataSumitomo=json['griddata'];
					   $scope.qtnBtnSumit = '0';
					   //$scope.stepsModelSumit = json['maincaseform'][0].images.split(',');
					   //$('.sumitQtn').addClass('disabledBtn');
					     $scope.$apply();
					   var getImageSumit = json['maincaseform'][0].images;
								  // alert(getImage);
									 if(getImageSumit!=null)
									   {
										   //alert(getImage + " " + 1);
										   var imgPrew = getImageSumit.trim();
										   if(imgPrew==null || imgPrew=="" )
										   {
											  
											  $scope.stepsModelSumit = [];
											  $scope.$apply();
											  //$scope.dummyPhoto="";
					                          //$('#dummyPhoto').trigger('blur');
										   }
										   else
										   {
											   //alert(getImage + " " + 3);
											   $scope.stepsModelSumit = getImageSumit.split(',');
											   $scope.$apply();
											  
										   }
									   }
									   else
									   {
										   //alert(getImage + " " + 4);
										    $scope.stepsModelSumit = [];
										    $scope.$apply();
										 
									   }
					
				}
						   
						  
					});
		}

		$scope.sparePartTempGrid = function(form)
		{
			
			 // $('#menu2').addClass('active');
		      //$('#competitorReplace').addClass('active');
			//alert("sparePartTempGrid" + "1");
			form.$setPristine(true);
			
			//$scope.addCase = " ";
			    $("#newSelection").hide();
				$("#competitorReplace").hide();
				$("#sumitomoReplace").hide();
				$("#sparePart").show();
				$("#techQuery").hide(); 
				$("#blogHideSpare").hide(); 
				$("#remarksHideSpare").hide(); 
				$("#codeNotFound").hide();
				$("#dataNotFound").hide();
				//$('#qtnBtnSpare-hide').hide();
				$scope.qtnBtnSpare = '0';
			$.post("loadingCasessTab4.do",function(json)
					{
				      //alert("sparePartTempGrid");
				//alert(JSON.stringify(json));
				var gridVal = json['value'];
				if(gridVal==0)
				{
					//alert(gridVal);
					  $scope.addCase=json['maincaseform'][0];
					  $scope.addDespSpare=json['description'][0]; 
					  $indexTab4=1;
					  $scope.dataPart=[{'id':$indexTab4,'gm':'0','ambientTemp':'40','pole':'4','rpm':'1450','motorType':'NO','voltage':'400','phase':'3','gearProduct':'CYCLO 6000','quantity':'1','motorKW':'0.1','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','model':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1'}];
                      $scope.stepsModelSpare = [];
					  cusImageSpare = new FormData();
					  $('.btn-hideSpare').attr('disabled',false);
					  $scope.qtnBtnSpare = '0';
					  $scope.$apply();
				}
				else
				{
					//alert("else");
					  $scope.addCase=json['maincaseform'][0];
					  $scope.addDespSpare=json['description'][0]; 
					  $scope.dataPart=json['griddata'];
					  $scope.qtnBtnSpare = '0';
					 // $scope.stepsModelSpare = json['maincaseform'][0].images.split(',');
					  $scope.$apply();
					 var getImageSpare = json['maincaseform'][0].images;
								  // alert(getImage);
									 if(getImageSpare!=null)
									   {
										   //alert(getImage + " " + 1);
										   var imgPrew = getImageSpare.trim();
										   if(imgPrew==null || imgPrew=="" )
										   {
											  
											  $scope.stepsModelSpare = [];
											  $scope.$apply();
											  //$scope.dummyPhoto="";
					                          //$('#dummyPhoto').trigger('blur');
										   }
										   else
										   {
											   //alert(getImage + " " + 3);
											   $scope.stepsModelSpare = getImageSpare.split(',');
											   $scope.$apply();
											  
										   }
									   }
									   else
									   {
										   //alert(getImage + " " + 4);
										    $scope.stepsModelSpare = [];
										    $scope.$apply();
										 
									   }
							  
				}
				  
						  
					});
		}
		
		$scope.techQueryTempGrid = function(form)
		{
			//alert(status);
			     form.$setPristine(true); 
			
			//$scope.addCase = " ";
			$("#newSelection").hide();
			$("#competitorReplace").hide();
			$("#sumitomoReplace").hide();
			$("#sparePart").hide();
			$("#techQuery").show();  
			$("#blogHideTech").hide(); 
			$("#remarksHideTech").hide(); 
			$("#codeNotFound").hide();
      		$("#dataNotFound").hide();
			//$('#qtnBtnTech-hide').hide(); 
			$scope.qtnBtnTech = '0';
			$.post("loadingCasessTab5.do",function(json)
					{
				    //  alert("techQueryTempGrid");
				//alert(JSON.stringify(json['maincaseform']));
				//alert(JSON.stringify($scope.addCase.caseRef));
				var gridVal = json['value'];
				if(gridVal==0)
				{
					//alert(JSON.stringify(json['description'][0]));
					  $scope.addCase=json['maincaseform'][0];
					  $scope.addDespTech=json['description'][0];
					  $indexTab5=1;
					  $scope.dataQuery=[{'id':$indexTab5,'gm':'0','model':'0','ambientTemp':'40','pole':'4','rpm':'1450','motorType':'NO','voltage':'400','phase':'3','application':'A01','quantity':'1','gearProduct':'CYCLO 6000','motorKW':'0.1','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1','conf':'0','mount':'0','mount2':'0',oshaftInc1:false,oshaftInc2:false,'ishaft':'0','oshaft':'0','oshafty':'0','oshafty2':'4','backStop':'0','rot':'0','hssRadialLoadKn':'0','hssRadialLoadMm':'0','hssAxialLoadKn':'0','sssRadialLoadKn':'0','sssRadialLoadMm':'0','sssAxialLoadKn':'0','dirHssAxial':'0','dirSssAxial':'0'}];
                      $scope.stepsModelTech = [];
					  cusImageTech = new FormData();
					  $('.btn-hideTech').attr('disabled',false);
					  $scope.qtnBtnTech = '0';
					   $scope.$apply();
				}
				else
				{
					  $scope.addCase=json['maincaseform'][0];
					  $scope.addDespTech=json['description'][0]; 
					  $scope.dataQuery=json['griddata'];
					  $scope.qtnBtnTech = '0';
					  //$scope.stepsModelTech = json['maincaseform'][0].images.split(',');
					  $scope.$apply();
					   var getImageTech = json['maincaseform'][0].images;
								  // alert(getImage);
									 if(getImageTech!=null)
									   {
										   //alert(getImage + " " + 1);
										   var imgPrew = getImageTech.trim();
										   if(imgPrew==null || imgPrew=="" )
										   {
											  $scope.stepsModelTech = [];
											  $scope.$apply();
											  //$scope.dummyPhoto="";
					                          //$('#dummyPhoto').trigger('blur');
										   }
										   else
										   {
											   //alert(getImage + " " + 3);
											   $scope.stepsModelTech = getImageTech.split(',');
											   $scope.$apply();
										   }
									   }
									   else
									   {
										   //alert(getImage + " " + 4);
										    $scope.stepsModelTech = [];
										    $scope.$apply();
									   }
							  
				}
				 
						  
					});
		}

	 //========New Selection Form Submit=======//   
			
	var newSelectTabData = [];
	var newSelectTabDescp = [];
	var newSelect = [];
	var newSelectImg = [];
//alert(JSON.stringify($scope.formData));
  $scope.newSelectionFormSubmit = function(addCase,form,formData,form2,addDesp)
		{
         //alert("Main Data");
	       //alert(JSON.stringify(addCase));
		   //alert(JSON.stringify($scope.dataField));
	       //$scope.submitted = true;
		     if($scope.caseManagementForm.$valid)
			    {
					//alert($scope.newSelectionForm.$valid);
					//$scope.submitted = true;
					if($scope.newSelectionForm.$valid)
					{
						
						//alert(JSON.stringify(addDesp));
						newSelectTabData = [];
			    	    $scope.dataField.forEach(function(formData)
								{ 
									 
									//alert(JSON.stringify(formData));
								   newSelectTabData.push(angular.toJson(formData));	 
								});
						newSelectImg = [];
			    	    $scope.stepsModel.forEach(function(step)
								{ 
									 
									//alert($scope.docFile);
								   newSelectImg.push(angular.toJson(step));	 
								});
								/*newSelect = [];
								$scope.getChkIdArr.forEach(function(chkName)
								{ 
									 
									alert($scope.getChkIdArr);
								   newSelect.push(angular.toJson(chkName));	 
								});*/
								//alert(JSON.stringify(newSelectTabData));
			    	    cusImage.append("formData",angular.toJson(addCase));
						cusImage.append("gridData",angular.toJson(newSelectTabData));
						cusImage.append("fieldData",angular.toJson(addDesp));
						//cusImage.append("chkBox",newSelect);
						cusImage.append("motorFile",newSelectImg);
						
						//alert(JSON.stringify(cusImage));
						 $('.btn-hideNew').attr('disabled',true);
						 $('.Send-hideNew').attr('disabled',true);
						
						$.ajax({
						       url         : "/SCA-360/newSelectionFormData.do",
						       data        : cusImage,
						       contentType : false,
						       processData : false,
						       type        : 'POST'
						   }).success(function(data, status){
							   //alert(data);
								if(data==true)
									{
										swal( 'Saved Successfully');
										$scope.addCase = angular.copy($scope.master);
							            $scope.addDesp = angular.copy($scope.master);
										$scope.remarks = "";
								        $indexTab1=1;
							          $scope.dataField=[{'id':$indexTab1,'gm':'0','model':'0','ambientTemp':'40','rpm':'1450','motorType':'NO','voltage':'400','pole':'4','phase':'3','application':'A01','quantity':'1','gearProduct':'CYCLO 6000','motorKW':'0.1','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1','conf':'0','mount':'0','oshaft':'0','mount2':'0',oshaftInc1:false,oshaftInc2:false,'ishaft':'0','oshafty':'0','oshafty2':'4','backStop':'0','rot':'0','hssRadialLoadKn':'0','hssRadialLoadMm':'0','hssAxialLoadKn':'0','sssRadialLoadKn':'0','sssRadialLoadMm':'0','sssAxialLoadKn':'0','dirHssAxial':'0','dirSssAxial':'0'}];
									    $scope.stepsModel = [];
								        form.$setPristine(true); 
										form2.$setPristine(true);
										cusImage = new FormData();
										if($rootScope.Salesreportflag == "true")
										{
											$rootScope.onloadSales="true";
											$state.go('app.salesreport');
											
											$scope.$apply();

										}
										else
										{
											$.getJSON("loadingsequenceNember.do",function(json)
											{
										
												// alert(JSON.stringify(json['maincaseform'][0])); 
												    $scope.addCase=json['maincaseform'][0];
                                                    $scope.addDesp=json['description'][0];
													//$rootScope.newcase='';
													$scope.$apply();
											});
										}
										
											
											$rootScope.newcase = '';
											$rootScope.caseCustomerRef = '';
											$rootScope.caseCustomer = '';
											$rootScope.tab = '';
										//$scope.getCaseData(addCase,form);	
                                         $("#remarksHide").hide();
                                         $("#blogHide").hide();
                                         $('.btn-hideNew').attr('disabled',false);
						                 $('.Send-hideNew').attr('disabled',false);
										//$scope.addBlog();
										$scope.$apply();
										
										
										
									}
								else
									{
									   swal("Oops sorry...", "Something went wrong!", "error");
									   $('.btn-hideNew').attr('disabled',true);
									   $('.Send-hideNew').attr('disabled',true);
									}
							    
							   
				        	   
				           });
					}
					else
					{
						var field = null, firstError = null;
						for (field in form2) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form2[field].$valid) 
								{
									firstError = form2[field].$name;
								}
								if (form2[field].$pristine) 
								{
									form2[field].$dirty = true;
								}
							}	
						}
					}
			    }
		     else
				{
					
					var field = null, firstError = null;
						for (field in form) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form[field].$valid) 
								{
									firstError = form[field].$name;
								}
								if (form[field].$pristine) 
								{
									form[field].$dirty = true;
								}
							}	
						}
				}
		}
		
		$scope.newSelectionTempFormSubmit = function(addCase,form,formData,form2,addDesp)
		{
            //alert("Temp Data");
	      
		   //alert(JSON.stringify($scope.dataField));
	       //$scope.submitted = true;
		     if($scope.caseManagementForm.$valid)
			    {
					//alert($scope.newSelectionForm.$valid);
					//$scope.submitted = true;
					if($scope.newSelectionForm.$valid)
					{
						
						//alert(JSON.stringify(addCase));
						newSelectTabData = [];
			    	    $scope.dataField.forEach(function(formData)
								{ 
									 
									//alert(JSON.stringify(formData));
								   newSelectTabData.push(angular.toJson(formData));	 
								});
						newSelectImg = [];
			    	    $scope.stepsModel.forEach(function(step)
								{ 
									 
									//alert($scope.docFile);
								   newSelectImg.push(angular.toJson(step));	 
								});
						/*newSelect = [];
								$scope.getChkIdArr.forEach(function(chkName)
								{ 
									 
									//alert($scope.getChkIdArr);
								   newSelect.push(angular.toJson(chkName));	 
								});*/
								//alert(JSON.stringify(newSelect));
			    	    cusImage.append("formData",angular.toJson(addCase));
						cusImage.append("gridData",angular.toJson(newSelectTabData));
						cusImage.append("fieldData",angular.toJson(addDesp));
						//cusImage.append("chkBox",newSelect);
						cusImage.append("motorFile",newSelectImg);
						 $('.btn-hideNew').attr('disabled',true);
						 $('.Send-hideNew').attr('disabled',true);
						//alert(JSON.stringify(newSelectTabData));
						 //alert(JSON.stringify(addCase));
						$.ajax({
						       url         : "/SCA-360/newSelectionFormDataTemp.do",
						       data        : cusImage,
						       contentType : false,
						       processData : false,
						       type        : 'POST'
						   }).success(function(data, status){
							  //alert(status);
								if(data==true)
									{
										$scope.addCase = angular.copy($scope.master);
							            $scope.addDesp = angular.copy($scope.master);
										$scope.remarks = "";
								        $indexTab1=1;
							          $scope.dataField=[{'id':$indexTab1,'gm':'0','model':'0','ambientTemp':'40','rpm':'1450','motorType':'NO','voltage':'400','pole':'4','phase':'3','application':'A01','quantity':'1','gearProduct':'CYCLO 6000','motorKW':'0.1','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1','conf':'0','mount':'0','oshaft':'0','mount2':'0',oshaftInc1:false,oshaftInc2:false,'ishaft':'0','oshafty':'0','oshafty2':'4','backStop':'0','rot':'0','hssRadialLoadKn':'0','hssRadialLoadMm':'0','hssAxialLoadKn':'0','sssRadialLoadKn':'0','sssRadialLoadMm':'0','sssAxialLoadKn':'0','dirHssAxial':'0','dirSssAxial':'0'}];
									    $scope.stepsModel = [];
								        form.$setPristine(true); 
										form2.$setPristine(true);
										swal( 'Saved Successfully');
										cusImage = new FormData();	
                                        //alert("naveena"+$rootScope.Salesreportflag);
										if($rootScope.Salesreportflag == "true")
										{
											
											$state.go('app.salesreport');
											$scope.$apply();

										}
										else
										{
											$scope.getCaseData(addCase,form);
										}
                                       
									   $scope.$apply();	
									   $('.btn-hideNew').attr('disabled',false);
						               $('.Send-hideNew').attr('disabled',false);
										
									}
								else
									{
									   swal("Oops sorry...", "Something went wrong!", "error");
									   $('.btn-hideNew').attr('disabled',true);
									   $('.Send-hideNew').attr('disabled',true);
									}
							    
							   
				        	   
				           });
					}
					else
					{
						var field = null, firstError = null;
						for (field in form2) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form2[field].$valid) 
								{
									firstError = form2[field].$name;
								}
								if (form2[field].$pristine) 
								{
									form2[field].$dirty = true;
								}
							}	
						}
					}
			    }
		     else
				{
					
					var field = null, firstError = null;
						for (field in form) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form[field].$valid) 
								{
									firstError = form[field].$name;
								}
								if (form[field].$pristine) 
								{
									form[field].$dirty = true;
								}
							}	
						}
				}
		}
		
		//=======New Selection Reset Form============//
		  $scope.resetNewSelectionForm = function(addCase,form,formData,form2,addDesp)
		  {
			  
			    cusImage.append("formData",angular.toJson(addCase));
				cusImage.append("gridData",angular.toJson(newSelectTabData));
				cusImage.append("fieldData",angular.toJson(addDesp));
				cusImage.append("motorFile",newSelectImg);
				
				//alert(JSON.stringify(cusImage));
				$('.btn-hideNew').attr('disabled',true);
				$('.Send-hideNew').attr('disabled',true);
				
				$.ajax({
				       url         : "/SCA-360/newSelectionFormDiscardData.do",
				       data        : cusImage,
				       contentType : false,
				       processData : false,
				       type        : 'POST'
				   }).success(function(data, status){
					 // alert(data);
						if(data==true)
							{
								swal( 'Discard Draft Successfully');
								$scope.addCase = angular.copy($scope.master);
							    $scope.addDesp = angular.copy($scope.master);
								//$scope.remarks = "";
								$indexTab1=1;
							    $scope.dataField=[{'id':$indexTab1,'gm':'0','model':'0','ambientTemp':'40','motorType':'NO','rpm':'1450','voltage':'400','pole':'4','phase':'3','application':'A01','quantity':'1','gearProduct':'CYCLO 6000','motorKW':'0.1','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1','conf':'0','mount':'0','oshaft':'0','mount2':'0',oshaftInc1:false,oshaftInc2:false,'ishaft':'0','oshafty':'0','oshafty2':'4','backStop':'0','rot':'0','hssRadialLoadKn':'0','hssRadialLoadMm':'0','hssAxialLoadKn':'0','sssRadialLoadKn':'0','sssRadialLoadMm':'0','sssAxialLoadKn':'0','dirHssAxial':'0','dirSssAxial':'0'}];
								$scope.stepsModel = [];
								cusImage = new FormData();
								form.$setPristine(true); 
								form2.$setPristine(true);
								$.getJSON("loadingsequenceNember.do",function(json)
								{
									$scope.addCase=json['maincaseform'][0];
                                    $scope.addDesp=json['description'][0]; 
									//alert(JSON.stringify(json['description'][0]));
									$scope.$apply();
								});
								$rootScope.newcase = '';
								$rootScope.caseCustomerRef = '';
								$rootScope.caseCustomer = '';
								$rootScope.tab = '';
								//$scope.getCaseData(addCase,form);
								$('.btn-hideNew').attr('disabled',false);
						        $('.Send-hideNew').attr('disabled',false);
								//$scope.addBlog();
								$scope.$apply();
								
								
								
								
					      }
				   });	
		  }




//==========Competitor Replace Start============//
  $scope.dataCompetitor = [];

$indexTab2=0;
$scope.addCompetitorForm = function() 
	{
		
		$indexTab2++;
		$scope.dataCompetitor.push({'id':$indexTab2,'gm':'0','model':'0','ambientTemp':'40','pole':'4','rpm':'1450','motorType':'NO','voltage':'400','phase':'3','application':'A01','quantity':'1','gearProduct':'CYCLO 6000','motorKW':'0.1','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1','dimension':'1','conf':'0','mount':'0','mount2':'0',oshaftInc1:false,oshaftInc2:false,'ishaft':'0','oshaft':'0','oshafty':'0','oshafty2':'4','backStop':'0','rot':'0','hssRadialLoadKn':'0','hssRadialLoadMm':'0','hssAxialLoadKn':'0','sssRadialLoadKn':'0','sssRadialLoadMm':'0','sssAxialLoadKn':'0','dirHssAxial':'0','dirSssAxial':'0'})
	    
	};
	$scope.removeCompetitorRow = function(name)
	{	
		var IndexTab2 = -1;		
		var comArrTab2 = eval( $scope.dataCompetitor );
		for( var j = 0; j < comArrTab2.length; j++ ) 
		{
			if( comArrTab2[j].id === name ) 
			{

				IndexTab2 = j;
				break;
			}				
		}
		$scope.dataCompetitor.splice( IndexTab2, 1 );
		$indexTab2 = comArrTab2.length;
		for(var t=0;t<$indexTab2;t++)
		{
			$scope.dataCompetitor[t].id = Number(t)+Number(1);
		}			
   };
	
	$scope.getSSCCodeComp = function()
	   { 
	          $scope.availableCompCode = [];
	         $.getJSON("getAllSSccodes.do",function(json)
				{
					//alert(JSON.stringify(json['data']));
					 $scope.availableCompCode = json['data'];
					 //alert(JSON.stringify($scope.availableCompCode));
					 $scope.$apply();
				});
			/*$scope.availableCompCode = [
			  { id: 'A00', desp: 'Output Shaft Clockwise-A00'},
			  { id: 'A01', desp: 'Output Shaft Anti-Clockwise-A01'},
			  { id: 'A02', desp: 'Output Shaft Dual Direction-A02'},
			  { id: 'A10', desp: 'Outdoor Type-A11'},
			  { id: 'A11', desp: 'Dust-Proof Type-A11'},
			  { id: 'A12', desp: 'Heavy Dust-Proof Type-A12'},
			  { id: 'A13', desp: 'Water proof-A13'},
			  { id: 'A14', desp: 'Marine Duty-A14'},
			  { id: 'A19', desp: 'Special spec. for ship turning gear; N21; N26; N43-A19'},
			  { id: 'A1A', desp: 'Light Duty Washdown-A1A'},
			  { id: 'A1B', desp: 'Plant Washdown-A1B'}
			];*/
			
			$scope.$apply();
			
	   }
//=======Competitor Replace form submit=============//
			
	var compReplaceTabData = [];
	var compReplaceTabDescp = [];
	var compReplaceImgData = [];
	var compReplace = new Object();
//alert(JSON.stringify($scope.formData));

  $scope.compReplaceFormSubmit = function(addCase,form,competitorFormData,form2,addDespComp)
		{
	       //alert(JSON.stringify(addCase));
		   //alert(JSON.stringify($scope.dataField));
	       //$scope.submitted = true;
		     if($scope.caseManagementForm.$valid)
			    {
					//alert($scope.competitorReplaceForm.$valid);
					//$scope.submitted = true;
					if($scope.competitorReplaceForm.$valid)
					{
						
						//alert(JSON.stringify(addDesp));
						compReplaceTabData = [];
					$scope.dataCompetitor.forEach(function(competitorFormData)
					{ 
						//alert(JSON.stringify(formData)); 
					   compReplaceTabData.push(angular.toJson(competitorFormData));	 
					});
					    compReplaceImgData = [];
					$scope.stepsModelComp.forEach(function(stepComp)
					{ 
						//alert(JSON.stringify(formData)); 
					   compReplaceImgData.push(angular.toJson(stepComp));	 
					});
			        cusImageComp.append("formData",angular.toJson(addCase));
					cusImageComp.append("gridData",angular.toJson(compReplaceTabData));
					cusImageComp.append("fieldData",angular.toJson(addDespComp));
					cusImageComp.append("motorFile",compReplaceImgData);
					//alert(JSON.stringify(cusImageComp));
					$('.btn-hideComp').attr('disabled',true);
					$('.Send-hideComp').attr('disabled',true);
					 $.ajax({
					       url         : "/SCA-360/saveCompetitorReplaceData.do",
					       data        : cusImageComp,
					       contentType : false,
					       processData : false,
					       type        : 'POST'
					   }).success(function(data, status){
						   if(data==true)
									{
										swal( 'Saved Successfully');
										$scope.addCase = angular.copy($scope.master);
							            $scope.addDespComp = angular.copy($scope.master);
										$scope.remarksComp = "";
								        $indexTab2=1;
							          $scope.dataCompetitor=[{'id':$indexTab2,'gm':'0','model':'0','ambientTemp':'40','rpm':'1450','motorType':'NO','voltage':'400','pole':'4','phase':'3','application':'A01','quantity':'1','gearProduct':'CYCLO 6000','motorKW':'0.1','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1','dimension':'1','conf':'0','mount':'0','ishaft':'0','oshaft':'0','mount2':'0',oshaftInc1:false,oshaftInc2:false,'oshafty':'0','oshafty2':'4','backStop':'0','rot':'0','hssRadialLoadKn':'0','hssRadialLoadMm':'0','hssAxialLoadKn':'0','sssRadialLoadKn':'0','sssRadialLoadMm':'0','sssAxialLoadKn':'0','dirHssAxial':'0','dirSssAxial':'0'}];
                                         $scope.stepsModelComp = [];
										 cusImageComp = new FormData(); 
								        form.$setPristine(true); 
										form2.$setPristine(true);
										$.getJSON("loadingsequenceNember.do",function(json)
											{
												   $scope.addCase=json['maincaseform'][0];
                                                   $scope.addDespComp=json['description'][0]; 
													$scope.$apply();
											});
									    $rootScope.newcase = '';
										$rootScope.caseCustomerRef = '';
										$rootScope.caseCustomer = '';
										$rootScope.tab = '';
										//$scope.getCaseData(addCase,form);
										$("#remarksHideComp").hide();
                                         $("#blogHideComp").hide();
                                         $('.btn-hideComp').attr('disabled',false);
					                    $('.Send-hideComp').attr('disabled',false);
										$scope.$apply();
										//alert(JSON.stringify( $scope.dataField));
										
									}
								else
									{
									   swal("Oops sorry...", "Something went wrong!", "error");
									   $('.btn-hideComp').attr('disabled',true);
									   $('.Send-hideComp').attr('disabled',true);
									}
			        	   
			           });
					}
					else
					{
						var field = null, firstError = null;
						for (field in form2) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form2[field].$valid) 
								{
									firstError = form2[field].$name;
								}
								if (form2[field].$pristine) 
								{
									form2[field].$dirty = true;
								}
							}	
						}
					}
			    }
		     else
				{
					
					var field = null, firstError = null;
						for (field in form) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form[field].$valid) 
								{
									firstError = form[field].$name;
								}
								if (form[field].$pristine) 
								{
									form[field].$dirty = true;
								}
							}	
						}
				}
		}
  $scope.compReplaceTempFormSubmit = function(addCase,form,competitorFormData,form2,addDespComp)
		{
	       //alert(JSON.stringify(addCase));
		   //alert(JSON.stringify($scope.dataField));
	       //$scope.submitted = true;
		     if($scope.caseManagementForm.$valid)
			    {
					//alert($scope.competitorReplaceForm.$valid);
					//$scope.submitted = true;
					if($scope.competitorReplaceForm.$valid)
					{
						
						//alert(JSON.stringify(addCase));
						compReplaceTabData = [];
						$scope.dataCompetitor.forEach(function(competitorFormData)
						{ 
							
						   compReplaceTabData.push(angular.toJson(competitorFormData));	 
						   //alert(JSON.stringify(compReplaceTabData)); 
						});
			            compReplaceImgData = [];
						$scope.stepsModelComp.forEach(function(stepComp)
						{ 
							//alert(JSON.stringify(formData)); 
						   compReplaceImgData.push(angular.toJson(stepComp));	 
						});
						cusImageComp.append("formData",angular.toJson(addCase));
						cusImageComp.append("gridData",angular.toJson(compReplaceTabData));
						cusImageComp.append("fieldData",angular.toJson(addDespComp));
						cusImageComp.append("motorFile",compReplaceImgData);
						
					     //alert(JSON.stringify(compReplaceTabData));
					   $('.btn-hideComp').attr('disabled',true);
					   $('.Send-hideComp').attr('disabled',true);
					   
					 $.ajax({
					       url         : "/SCA-360/saveCompetitorReplaceDataTemp.do",
					       data        : cusImageComp,
					       contentType : false,
					       processData : false,
					       type        : 'POST'
					   }).success(function(data, status){
						   if(data==true)
									{
										
										//$scope.remarksComp = "";
										//$scope.addBlogComp();
										//$scope.getCaseData();
                                        swal( 'Saved Successfully');
										$scope.addCase = angular.copy($scope.master);
							            $scope.addDespComp = angular.copy($scope.master);
										$scope.remarksComp = "";
								        $indexTab2=1;
							          $scope.dataCompetitor=[{'id':$indexTab2,'gm':'0','model':'0','ambientTemp':'40','rpm':'1450','motorType':'NO','voltage':'400','pole':'4','phase':'3','application':'A01','quantity':'1','gearProduct':'CYCLO 6000','motorKW':'0.1','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1','dimension':'1','conf':'0','mount':'0','ishaft':'0','oshaft':'0','mount2':'0',oshaftInc1:false,oshaftInc2:false,'oshafty':'0','oshafty2':'4','backStop':'0','rot':'0','hssRadialLoadKn':'0','hssRadialLoadMm':'0','hssAxialLoadKn':'0','sssRadialLoadKn':'0','sssRadialLoadMm':'0','sssAxialLoadKn':'0','dirHssAxial':'0','dirSssAxial':'0'}];
                                         $scope.stepsModelComp = [];
								        form.$setPristine(true); 
										form2.$setPristine(true);
										cusImageComp = new FormData(); 
                                        $scope.getCaseData(addCase,form);
										$('.btn-hideComp').attr('disabled',false);
					                    $('.Send-hideComp').attr('disabled',false);
										$scope.$apply();
										
										
									}
								else
									{
									   swal("Oops sorry...", "Something went wrong!", "error");
									   $('.btn-hideComp').attr('disabled',true);
					                   $('.Send-hideComp').attr('disabled',true);
									}
			        	   
			           });
					}
					else
					{
						var field = null, firstError = null;
						for (field in form2) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form2[field].$valid) 
								{
									firstError = form2[field].$name;
								}
								if (form2[field].$pristine) 
								{
									form2[field].$dirty = true;
								}
							}	
						}
					}
			    }
		     else
				{
					
					var field = null, firstError = null;
						for (field in form) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form[field].$valid) 
								{
									firstError = form[field].$name;
								}
								if (form[field].$pristine) 
								{
									form[field].$dirty = true;
								}
							}	
						}
				}
		}
		//=======Comp Form Reset===========//
		  $scope.resetCompReplaceForm = function(addCase,form,competitorFormData,form2,addDespComp)
		  {
			            cusImageComp.append("formData",angular.toJson(addCase));
						cusImageComp.append("gridData",angular.toJson(compReplaceTabData));
						cusImageComp.append("fieldData",angular.toJson(addDespComp));
						cusImageComp.append("motorFile",compReplaceImgData);
						
					     //alert(JSON.stringify(compReplaceTabData));
					$('.btn-hideComp').attr('disabled',true);
					$('.Send-hideComp').attr('disabled',true);
					 $.ajax({
					       url         : "/SCA-360/saveCompetitorReplaceDataDiscaredTemp.do",
					       data        : cusImageComp,
					       contentType : false,
					       processData : false,
					       type        : 'POST'
					   }).success(function(data, status){
						   if(data==true)
									{
										
										swal( 'Draft Discard Successfully'); 
										$scope.addCase = angular.copy($scope.master);
							            $scope.addDespComp = angular.copy($scope.master);
										//$scope.remarksComp = "";
								        $indexTab2=1;
							          $scope.dataCompetitor=[{'id':$indexTab2,'gm':'0','model':'0','ambientTemp':'40','rpm':'1450','motorType':'NO','voltage':'400','pole':'4','phase':'3','application':'A01','quantity':'1','gearProduct':'CYCLO 6000','motorKW':'0.1','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1','dimension':'1','conf':'0','mount':'0','ishaft':'0','oshaft':'0','mount2':'0',oshaftInc1:false,oshaftInc2:false,'oshafty':'0','oshafty2':'4','backStop':'0','rot':'0','hssRadialLoadKn':'0','hssRadialLoadMm':'0','hssAxialLoadKn':'0','sssRadialLoadKn':'0','sssRadialLoadMm':'0','sssAxialLoadKn':'0','dirHssAxial':'0','dirSssAxial':'0'}];
									    cusImageComp = new FormData();
									    $scope.stepsModelComp = []; 
								        form.$setPristine(true); 
										form2.$setPristine(true);
										$.getJSON("loadingsequenceNember.do",function(json)
											{
												   $scope.addCase=json['maincaseform'][0];
                                                   $scope.addDespComp=json['description'][0]; 
													$scope.$apply();
											});
											$rootScope.newcase = '';
											$rootScope.caseCustomerRef = '';
											$rootScope.caseCustomer = '';
											$rootScope.tab = '';
											//$scope.getCaseData(addCase,form);
										$('.btn-hideComp').attr('disabled',false);
					                    $('.Send-hideComp').attr('disabled',false);
									   
										//$scope.addBlogComp(); 
										$scope.$apply();
										
										
									}
			           });
		  }
	//========Sumitomo Replace Tab==========//
$scope.dataSumitomo = [];
$indexTab3=0;
$scope.addSumitomoField = function() 
	{
		
		$indexTab3++;
	    $scope.dataSumitomo.push({'id':$indexTab3,'gm':'0','model':'0','ambientTemp':'40','pole':'4','phase':'3','rpm':'1450','motorType':'NO','voltage':'400','application':'A01','quantity':'1','gearProduct':'CYCLO 6000','motorKW':'0.1','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1','dimension':'1','conf':'0','mount':'0','ishaft':'0','oshaft':'0','mount2':'0',oshaftInc1:false,oshaftInc2:false,'oshafty':'0','oshafty2':'4','backStop':'0','rot':'0','hssRadialLoadKn':'0','hssRadialLoadMm':'0','hssAxialLoadKn':'0','sssRadialLoadKn':'0','sssRadialLoadMm':'0','sssAxialLoadKn':'0','dirHssAxial':'0','dirSssAxial':'0'})
	};
	
	$scope.removeSumitomoRow = function(name)
	{	
	    
		var IndexTab3 = -1;		
		var comArrTab3 = eval( $scope.dataSumitomo );
		for( var k = 0; k < comArrTab3.length; k++ ) 
		{
			if( comArrTab3[k].id === name ) 
			{
				IndexTab3 = k;
				break;
			}				
		}
		$scope.dataSumitomo.splice( IndexTab3, 1 );
		$indexTab3 = comArrTab3.length;
		for(var l=0;l<$indexTab3;l++)
		{
			$scope.dataSumitomo[l].id = Number(l)+Number(1);
		}			
   };
	
	$scope.getSSCCodeSumito = function()
	   { 
	         $scope.availableSumito = [];
		   $.getJSON("getAllSSccodes.do",function(json)
				{
					//alert(JSON.stringify(json['data']));
					 $scope.availableSumito = json['data'];
					 $scope.$apply();
				});
			/*$scope.availableSumito = [
			  { id: 'A00', desp: 'Output Shaft Clockwise-A00'},
			  { id: 'A01', desp: 'Output Shaft Anti-Clockwise-A01'},
			  { id: 'A02', desp: 'Output Shaft Dual Direction-A02'},
			  { id: 'A10', desp: 'Outdoor Type-A11'},
			  { id: 'A11', desp: 'Dust-Proof Type-A11'},
			  { id: 'A12', desp: 'Heavy Dust-Proof Type-A12'},
			  { id: 'A13', desp: 'Water proof-A13'},
			  { id: 'A14', desp: 'Marine Duty-A14'},
			  { id: 'A19', desp: 'Special spec. for ship turning gear; N21; N26; N43-A19'},
			  { id: 'A1A', desp: 'Light Duty Washdown-A1A'},
			  { id: 'A1B', desp: 'Plant Washdown-A1B'}
			];*/
			
	   }
//	   	   	var cusImageSumit = new FormData();
//  $scope.uploadSumitFile = function(files,dummyId) 
//			{
//				//alert(files);
//				//alert(JSON.stringify(dummyId));
//				//$scope.dummyId = 0;
//				//alert($scope.dummyId);
//				cusImageSumit.delete("docFile");
//				cusImageSumit.delete("docFileId");
//	    		cusImageSumit.append("docFile",files[0]);
//				cusImageSumit.append("docFileId",dummyId);
//				
//				/*$http.post("/SCA-360/newcaseselectiongridimage.do", cusImageSumit, {
//								withCredentials: true,
//								 headers: {'Content-Type': undefined },
//								 transformRequest: angular.identity
//							  }).success(function(data, status) 
//							   { 
//									//swal( 'Saved Successfully'); 
//							   });*/
//				$scope.$apply();
//			};
//=============Sumitomo Replace Form Submit=======//			
	var sumitReplaceTabData = [];
	var sumitReplaceTabDescp = [];
	var sumitReplaceImgData = [];
	var sumitReplace = new Object();
		
   $scope.sumitReplaceFormSubmit = function(addCase,form,sumitomoData,form2,addDespSumit)
		{
	       //alert(JSON.stringify(addCase));
		   //alert(JSON.stringify($scope.dataField));
	       //$scope.submitted = true;
		     if($scope.caseManagementForm.$valid)
			    {
					//alert($scope.newSelectionForm.$valid);
					//$scope.submitted = true;
					if($scope.sumitomoReplaceForm.$valid)
					{
						
						sumitReplaceTabData = [];
					$scope.dataSumitomo.forEach(function(sumitomoData)
					{ 
						//alert(JSON.stringify(formData)); 
					   sumitReplaceTabData.push(angular.toJson(sumitomoData));	 
					});
					    sumitReplaceImgData = [];
					$scope.stepsModelSumit.forEach(function(stepSumit)
					{ 
						//alert(JSON.stringify(formData)); 
					   sumitReplaceImgData.push(angular.toJson(stepSumit));	 
					});
					cusImageSumit.append("formData",angular.toJson(addCase));
					cusImageSumit.append("gridData",angular.toJson(sumitReplaceTabData));
					cusImageSumit.append("fieldData",angular.toJson(addDespSumit));
					cusImageSumit.append("motorFile",sumitReplaceImgData);
					//alert(JSON.stringify(cusImageSumit));
						$('.btn-hide').attr('disabled',true);
					    $('.Send-hideSumit').attr('disabled',true);
						
						
						$.ajax({
						       url         : "/SCA-360/sumitomoReplaceDataSave.do",
						       data        : cusImageSumit,
						       contentType : false,
						       processData : false,
						       type        : 'POST'
						   }).success(function(data, status){
							   //alert(data);
								if(data==true)
									{
										swal( 'Saved Successfully');
										$scope.addCase = angular.copy($scope.master);
							            $scope.addDespSumit = angular.copy($scope.master);
										$scope.remarksSumit = "";
								        $indexTab3=1;
							          $scope.dataSumitomo=[{'id':$indexTab3,'gm':'0','model':'0','ambientTemp':'40','rpm':'1450','motorType':'NO','voltage':'400','pole':'4','phase':'3','application':'A01','quantity':'1','gearProduct':'CYCLO 6000','motorKW':'0.1','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1','dimension':'1','conf':'0','mount':'0','mount2':'0',oshaftInc1:false,oshaftInc2:false,'ishaft':'0','oshaft':'0','oshafty':'0','oshafty2':'4','backStop':'0','rot':'0','hssRadialLoadKn':'0','hssRadialLoadMm':'0','hssAxialLoadKn':'0','sssRadialLoadKn':'0','sssRadialLoadMm':'0','sssAxialLoadKn':'0','dirHssAxial':'0','dirSssAxial':'0'}];
                                        $scope.stepsModelSumit = [];
										cusImageSumit = new FormData();
								        form.$setPristine(true); 
										form2.$setPristine(true);
										$.getJSON("loadingsequenceNember.do",function(json)
											{
												   $scope.addCase=json['maincaseform'][0];
                                                   $scope.addDespSumit=json['description'][0]; 
													$scope.$apply();
											});
										$rootScope.newcase = '';
										$rootScope.caseCustomerRef = '';
										$rootScope.caseCustomer = '';
										$rootScope.tab = '';
										//$scope.getCaseData(addCase,form);
										//$scope.addBlogSumit();
                                        $("#remarksHideSumit").hide();
                                         $("#blogHideSumit").hide();
                                         $('.btn-hide').attr('disabled',false);
					                     $('.Send-hideSumit').attr('disabled',false);
										$scope.$apply(); 
										//alert(JSON.stringify( $scope.dataField));
										
									}
								else
									{
									   swal("Oops sorry...", "Something went wrong!", "error");
									   $('.btn-hide').attr('disabled',true);
					                   $('.Send-hideSumit').attr('disabled',true);
									}
							    
							   
				        	   
				           });
					}
					else
					{
						var field = null, firstError = null;
						for (field in form2) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form2[field].$valid) 
								{
									firstError = form2[field].$name;
								}
								if (form2[field].$pristine) 
								{
									form2[field].$dirty = true;
								}
							}	
						}
					}
			    }
		     else
				{
					
					var field = null, firstError = null;
						for (field in form) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form[field].$valid) 
								{
									firstError = form[field].$name;
								}
								if (form[field].$pristine) 
								{
									form[field].$dirty = true;
								}
							}	
						}
				}
		}
   $scope.sumitReplaceTempFormSubmit = function(addCase,form,sumitomoData,form2,addDespSumit)
		{
	       //alert(JSON.stringify(addCase));
		   //alert(JSON.stringify($scope.dataField));
	       //$scope.submitted = true;
		     if($scope.caseManagementForm.$valid)
			    {
					//alert($scope.newSelectionForm.$valid);
					//$scope.submitted = true;
					if($scope.sumitomoReplaceForm.$valid)
					{
						
						sumitReplaceTabData = [];
					$scope.dataSumitomo.forEach(function(sumitomoData)
					{ 
						//alert(JSON.stringify(formData)); 
					   sumitReplaceTabData.push(angular.toJson(sumitomoData));	 
					});
					
					    sumitReplaceImgData = [];
					$scope.stepsModelSumit.forEach(function(stepSumit)
					{ 
						//alert(JSON.stringify(formData)); 
					   sumitReplaceImgData.push(angular.toJson(stepSumit));	 
					});
					cusImageSumit.append("formData",angular.toJson(addCase));
					cusImageSumit.append("gridData",angular.toJson(sumitReplaceTabData));
					cusImageSumit.append("fieldData",angular.toJson(addDespSumit));
					cusImageSumit.append("motorFile",sumitReplaceImgData);
					//alert(JSON.stringify(cusImageSumit));
						$('.btn-hide').attr('disabled',true);
					    $('.Send-hideSumit').attr('disabled',true);
						
						
						$.ajax({
						       url         : "/SCA-360/sumitomoReplaceDataSaveTemp.do",
						       data        : cusImageSumit,
						       contentType : false,
						       processData : false,
						       type        : 'POST'
						   }).success(function(data, status){
							   //alert(data);
								if(data==true)
									{
										
										//$scope.remarksSumit = "";
										//$scope.addBlogSumit();
										//$scope.getCaseData();
                                        swal( 'Saved Successfully');
										$scope.addCase = angular.copy($scope.master);
							            $scope.addDespSumit = angular.copy($scope.master);
										$scope.remarksSumit = "";
								        $indexTab3=1;
							          $scope.dataSumitomo=[{'id':$indexTab3,'gm':'0','model':'0','ambientTemp':'40','rpm':'1450','motorType':'NO','voltage':'400','pole':'4','phase':'3','application':'A01','quantity':'1','gearProduct':'CYCLO 6000','motorKW':'0.1','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1','dimension':'1','conf':'0','mount':'0','mount2':'0',oshaftInc1:false,oshaftInc2:false,'ishaft':'0','oshaft':'0','oshafty':'0','oshafty2':'4','backStop':'0','rot':'0','hssRadialLoadKn':'0','hssRadialLoadMm':'0','hssAxialLoadKn':'0','sssRadialLoadKn':'0','sssRadialLoadMm':'0','sssAxialLoadKn':'0','dirHssAxial':'0','dirSssAxial':'0'}];
                                        $scope.stepsModelSumit = [];
								        form.$setPristine(true); 
										form2.$setPristine(true);
										cusImageSumit = new FormData();
                                        $scope.getCaseData(addCase,form);
										$('.btn-hide').attr('disabled',false);
					                    $('.Send-hideSumit').attr('disabled',false);
										$scope.$apply(); 
										
										
									}
								else
									{
									   swal("Oops sorry...", "Something went wrong!", "error");
									   $('.btn-hide').attr('disabled',true);
					                   $('.Send-hideSumit').attr('disabled',true);
									}
							    
							   
				        	   
				           });
					}
					else
					{
						var field = null, firstError = null;
						for (field in form2) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form2[field].$valid) 
								{
									firstError = form2[field].$name;
								}
								if (form2[field].$pristine) 
								{
									form2[field].$dirty = true;
								}
							}	
						}
					}
			    }
		     else
				{
					
					var field = null, firstError = null;
						for (field in form) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form[field].$valid) 
								{
									firstError = form[field].$name;
								}
								if (form[field].$pristine) 
								{
									form[field].$dirty = true;
								}
							}	
						}
				}
		}
		
		//==============Sumit Form Reset============//
		   $scope.resetSumitReplaceForm = function(addCase,form,sumitomoData,form2,addDespSumit)
		   {
			        cusImageSumit.append("formData",angular.toJson(addCase));
					cusImageSumit.append("gridData",angular.toJson(sumitReplaceTabData));
					cusImageSumit.append("fieldData",angular.toJson(addDespSumit));
					cusImageSumit.append("motorFile",sumitReplaceImgData);
					//alert(JSON.stringify(cusImageSumit));
						
					$('.btn-hide').attr('disabled',true);
					$('.Send-hideSumit').attr('disabled',true);	
						
						$.ajax({
						       url         : "/SCA-360/sumitomoReplaceDataDiscardSaveTemp.do",
						       data        : cusImageSumit,
						       contentType : false,
						       processData : false,
						       type        : 'POST'
						   }).success(function(data, status){
							   //alert(data);
								if(data==true)
									{
										
										swal( 'Draft Discard Successfully');
										$scope.addCase = angular.copy($scope.master);
							            $scope.addDespSumit = angular.copy($scope.master);
										//$scope.remarksSumit = "";
								        $indexTab3=1;
							          $scope.dataSumitomo=[{'id':$indexTab3,'gm':'0','model':'0','ambientTemp':'40','rpm':'1450','motorType':'NO','voltage':'400','pole':'4','phase':'3','application':'A01','quantity':'1','gearProduct':'CYCLO 6000','motorKW':'0.1','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1','dimension':'1','conf':'0','mount':'0','mount2':'0',oshaftInc1:false,oshaftInc2:false,'ishaft':'0','oshaft':'0','oshafty':'0','oshafty2':'4','backStop':'0','rot':'0','hssRadialLoadKn':'0','hssRadialLoadMm':'0','hssAxialLoadKn':'0','sssRadialLoadKn':'0','sssRadialLoadMm':'0','sssAxialLoadKn':'0','dirHssAxial':'0','dirSssAxial':'0'}];
									    cusImageSumit = new FormData();
								        form.$setPristine(true); 
										form2.$setPristine(true);
										$.getJSON("loadingsequenceNember.do",function(json)
											{
												   $scope.addCase=json['maincaseform'][0];
                                                   $scope.addDespSumit=json['description'][0]; 
													$scope.$apply();
											});
										$rootScope.newcase = '';
										$rootScope.caseCustomerRef = '';
										$rootScope.caseCustomer = '';
										$rootScope.tab = '';
										//$scope.getCaseData(addCase,form);	
										$scope.stepsModelSumit = [];
										$('.btn-hide').attr('disabled',false);
					                    $('.Send-hideSumit').attr('disabled',false);
										$scope.$apply(); 
										
										
									}
				           });
		   }
//========Spare Part Tab==========//
$scope.dataPart = [];
$indexTab4=0;

$scope.addSparePartField = function() 
	{
		
		$indexTab4++;
	    $scope.dataPart.push({'id':$indexTab4,'gm':'0','ambientTemp':'40','pole':'4','rpm':'1450','phase':'3','quantity':'1','gearProduct':'CYCLO 6000','motorKW':'0.1','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','motorType':'NO','voltage':'400','mtrEfficncyClass':'0','model':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1'})
	};
	$scope.removeSparePartRow = function(name)
	{	
	   // alert(name);
		var IndexTab4 = -1;		
		var comArrTab4 = eval( $scope.dataPart );
		for( var p = 0; p < comArrTab4.length; p++ ) 
		{
			if( comArrTab4[p].id === name ) 
			{
				IndexTab4 = p;
				break;
			}				
		}
		$scope.dataPart.splice( IndexTab4, 1 );
		$indexTab4 = comArrTab4.length;
		for(var m=0;m<$indexTab4;m++)
		{
			$scope.dataPart[m].id = Number(m)+Number(1);
		}			
   };

$scope.getSSCCodeSpare = function()
{ 
       $scope.availableSpare = [];
    $.getJSON("getAllSSccodes.do",function(json)
				{
					//alert(JSON.stringify(json['data']));
					 $scope.availableSpare = json['data'];
					 $scope.$apply();
				});
	/*$scope.availableSpare = [
	  { id: 'A00', desp: 'Output Shaft Clockwise-A00'},
	  { id: 'A01', desp: 'Output Shaft Anti-Clockwise-A01'},
	  { id: 'A02', desp: 'Output Shaft Dual Direction-A02'},
	  { id: 'A10', desp: 'Outdoor Type-A11'},
	  { id: 'A11', desp: 'Dust-Proof Type-A11'},
	  { id: 'A12', desp: 'Heavy Dust-Proof Type-A12'},
	  { id: 'A13', desp: 'Water proof-A13'},
	  { id: 'A14', desp: 'Marine Duty-A14'},
	  { id: 'A19', desp: 'Special spec. for ship turning gear; N21; N26; N43-A19'},
	  { id: 'A1A', desp: 'Light Duty Washdown-A1A'},
	  { id: 'A1B', desp: 'Plant Washdown-A1B'}
	];*/
	
}
//
//  	   	   	var cusImageSpare = new FormData();
//  $scope.uploadSpareFile = function(files,dummyId) 
//			{
//				//alert(files);
//				//alert(JSON.stringify(dummyId));
//				//$scope.dummyId = 0;
//				//alert($scope.dummyId);
//				cusImageSpare.delete("docFile");
//				cusImageSpare.delete("docFileId");
//	    		cusImageSpare.append("docFile",files[0]);
//				cusImageSpare.append("docFileId",dummyId);
//				
//				/*$http.post("/SCA-360/newcaseselectiongridimage.do", cusImageSpare, {
//								withCredentials: true,
//								 headers: {'Content-Type': undefined },
//								 transformRequest: angular.identity
//							  }).success(function(data, status) 
//							   { 
//									//swal( 'Saved Successfully'); 
//							   });*/
//				$scope.$apply();
//			};
//			
			
	var sparePartTabData = [];
	var sparePartImgData = [];
	var sparePartTabDescp = [];
	var sparePart = new Object();
		//alert(JSON.stringify($scope.formData));
  $scope.sparePartFormSubmit = function(addCase,form,sparePartData,form2,addDespSpare)
		{
	       //alert(JSON.stringify(addCase));
		   //alert(JSON.stringify($scope.dataField));
	       //$scope.submitted = true;
		     if($scope.caseManagementForm.$valid)
			    {
					//alert($scope.newSelectionForm.$valid);
					//$scope.submitted = true;
					if($scope.sparePartForm.$valid)
					{
						
						sparePartTabData = [];
					$scope.dataPart.forEach(function(sparePartData)
					{ 
						//alert(JSON.stringify(formData)); 
					   sparePartTabData.push(angular.toJson(sparePartData));	 
					});
						sparePartImgData = [];
					$scope.stepsModelSpare.forEach(function(stepSpare)
					{ 
						//alert(JSON.stringify(formData)); 
					   sparePartImgData.push(angular.toJson(stepSpare));	 
					});
					cusImageSpare.append("formData",angular.toJson(addCase));
					cusImageSpare.append("gridData",angular.toJson(sparePartTabData));
					cusImageSpare.append("fieldData",angular.toJson(addDespSpare));
					cusImageSpare.append("motorFile",sparePartImgData);
					//alert(JSON.stringify(cusImageSpare));
						
						$('.btn-hideSpare').attr('disabled',true);
					    $('.Send-hideSpare').attr('disabled',true);
						
						$.ajax({
						       url         : "/SCA-360/SparePartCase.do",
						       data        : cusImageSpare,
						       contentType : false,
						       processData : false,
						       type        : 'POST'
						   }).success(function(data, status){
							   //alert(data);
								if(data==true)
									{
										swal( 'Saved Successfully');
										$scope.addCase = angular.copy($scope.master);
							            $scope.addDespSpare = angular.copy($scope.master);
										$scope.remarksSpare = "";
								        $indexTab4=1;
							          $scope.dataPart=[{'id':$indexTab4,'gm':'0','ambientTemp':'40','pole':'4','rpm':'1450','motorType':'NO','voltage':'400','phase':'3','quantity':'1','gearProduct':'CYCLO 6000','motorKW':'0.1','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','model':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1'}];
                                        $scope.stepsModelSpare = [];
										cusImageSpare = new FormData();
								        form.$setPristine(true); 
										form2.$setPristine(true); 
										$.getJSON("loadingsequenceNember.do",function(json)
											{
												   $scope.addCase=json['maincaseform'][0];
                                                   $scope.addDespSpare=json['description'][0]; 
													$scope.$apply();
											});
										
										$rootScope.newcase = '';
										$rootScope.caseCustomerRef = '';
										$rootScope.caseCustomer = '';
										$rootScope.tab = '';
										//$scope.getCaseData(addCase,form);
										//$scope.addBlogSpare();
                                        $("#remarksHideSpare").hide();
                                         $("#blogHideSpare").hide();
                                        $('.btn-hideSpare').attr('disabled',false);
					                    $('.Send-hideSpare').attr('disabled',false);
										$scope.$apply();
										//alert(JSON.stringify( $scope.dataField));
										
									}
								else
									{
									   swal("Oops sorry...", "Something went wrong!", "error");
									   $('.btn-hideSpare').attr('disabled',true);
					                   $('.Send-hideSpare').attr('disabled',true);
									}
							    
							   
				        	   
				           });
					}
					else
					{
						var field = null, firstError = null;
						for (field in form2) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form2[field].$valid) 
								{
									firstError = form2[field].$name;
								}
								if (form2[field].$pristine) 
								{
									form2[field].$dirty = true;
								}
							}	
						}
					}
			    }
		     else
				{
					
					var field = null, firstError = null;
						for (field in form) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form[field].$valid) 
								{
									firstError = form[field].$name;
								}
								if (form[field].$pristine) 
								{
									form[field].$dirty = true;
								}
							}	
						}
				}
		}		
 $scope.sparePartTempFormSubmit = function(addCase,form,sparePartData,form2,addDespSpare)
		{
	       //alert(JSON.stringify(addCase));
		   //alert(JSON.stringify($scope.dataField));
	       //$scope.submitted = true;
		     if($scope.caseManagementForm.$valid)
			    {
					//alert($scope.newSelectionForm.$valid);
					//$scope.submitted = true;
					if($scope.sparePartForm.$valid)
					{
						
						sparePartTabData = [];
					$scope.dataPart.forEach(function(sparePartData)
					{ 
						//alert(JSON.stringify(sparePartData)); 
					   sparePartTabData.push(angular.toJson(sparePartData));	 
					});
					
					sparePartImgData = [];
					$scope.stepsModelSpare.forEach(function(stepSpare)
					{ 
						//alert(JSON.stringify(formData)); 
					   sparePartImgData.push(angular.toJson(stepSpare));	 
					});
					cusImageSpare.append("formData",angular.toJson(addCase));
					cusImageSpare.append("gridData",angular.toJson(sparePartTabData));
					cusImageSpare.append("fieldData",angular.toJson(addDespSpare));
					cusImageSpare.append("motorFile",sparePartImgData);
					//alert(JSON.stringify(cusImageSpare));
					$('.btn-hideSpare').attr('disabled',true);
					$('.Send-hideSpare').attr('disabled',true);	
						
						
						$.ajax({
						       url         : "/SCA-360/SparePartCaseTemp.do",
						       data        : cusImageSpare,
						       contentType : false,
						       processData : false,
						       type        : 'POST'
						   }).success(function(data, status){
							   //alert(data);
								if(data==true)
									{
										
										//$scope.remarksSpare = "";
										//$scope.addBlogSpare();
										//$scope.getCaseData();
                                        swal( 'Saved Successfully');
										$scope.addCase = angular.copy($scope.master);
							            $scope.addDespSpare = angular.copy($scope.master);
										$scope.remarksSpare = "";
								        $indexTab4=1;
							          $scope.dataPart=[{'id':$indexTab4,'gm':'0','ambientTemp':'40','pole':'4','rpm':'1450','motorType':'NO','voltage':'400','phase':'3','quantity':'1','gearProduct':'CYCLO 6000','motorKW':'0.1','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','model':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1'}];
                                        $scope.stepsModelSpare = [];
								        form.$setPristine(true); 
										form2.$setPristine(true); 
										$('.btn-hideSpare').attr('disabled', false);
					                    $('.Send-hideSpare').attr('disabled',false);
										//$route.reload();
										
										cusImageSpare = new FormData();
                                        $scope.getCaseData(addCase,form);
										$scope.$apply();
										
									}
								else
									{
									   swal("Oops sorry...", "Something went wrong!", "error");
									   $('.btn-hideSpare').attr('disabled',true);
					   				   $('.Send-hideSpare').attr('disabled',true);
									}
							    
							   
				        	   
				           });
					}
					else
					{
						var field = null, firstError = null;
						for (field in form2) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form2[field].$valid) 
								{
									firstError = form2[field].$name;
								}
								if (form2[field].$pristine) 
								{
									form2[field].$dirty = true;
								}
							}	
						}
					}
			    }
		     else
				{
					
					var field = null, firstError = null;
						for (field in form) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form[field].$valid) 
								{
									firstError = form[field].$name;
								}
								if (form[field].$pristine) 
								{
									form[field].$dirty = true;
								}
							}	
						}
				}
		}
		
		//=========Spare Form Reset==========//
		  $scope.resetsparePartForm = function(addCase,form,sparePartData,form2,addDespSpare)
		  {
			        cusImageSpare.append("formData",angular.toJson(addCase));
					cusImageSpare.append("gridData",angular.toJson(sparePartTabData));
					cusImageSpare.append("fieldData",angular.toJson(addDespSpare));
					cusImageSpare.append("motorFile",sparePartImgData);
					//alert(JSON.stringify(cusImageSpare));
						
						$('.btn-hideSpare').attr('disabled',true);
					    $('.Send-hideSpare').attr('disabled',true);
						
						$.ajax({
						       url         : "/SCA-360/SparePartCaseDiscardTemp.do",
						       data        : cusImageSpare,
						       contentType : false,
						       processData : false,
						       type        : 'POST'
						   }).success(function(data, status){
							   //alert(data);
								if(data==true)
									{
										
										swal( 'Draft Discard Successfully');
										$scope.addCase = angular.copy($scope.master);
							            $scope.addDespSpare = angular.copy($scope.master);
										//$scope.remarksSpare = "";
								        $indexTab4=1;
							          $scope.dataPart=[{'id':$indexTab4,'gm':'0','ambientTemp':'40','pole':'4','rpm':'1450','motorType':'NO','voltage':'400','phase':'3','quantity':'1','gearProduct':'CYCLO 6000','motorKW':'0.1','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','model':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1'}];
									  cusImageSpare = new FormData();
								        form.$setPristine(true); 
										form2.$setPristine(true); 
										$.getJSON("loadingsequenceNember.do",function(json)
											{
										
												   $scope.addCase=json['maincaseform'][0];
                                                   $scope.addDespSpare=json['description'][0];
												   $scope.$apply();
											});
											$rootScope.newcase = '';
											$rootScope.caseCustomerRef = '';
											$rootScope.caseCustomer = '';
											$rootScope.tab = '';
											//$scope.getCaseData(addCase,form);
										$scope.stepsModelSpare = [];
										$('.btn-hideSpare').attr('disabled',false);
					                    $('.Send-hideSpare').attr('disabled',false);
										$scope.$apply();
										
									}
				           }); 
		  }
     //========Tech Query Tab==========//
$scope.dataQuery = [];
$indexTab5=0;

$scope.addtechQueryField = function() 
	{
		
		$indexTab5++;
	    $scope.dataQuery.push({'id':$indexTab5,'gm':'0','model':'0','ambientTemp':'40','pole':'4','rpm':'1450','phase':'3','motorType':'NO','voltage':'400','application':'A01','quantity':'1','gearProduct':'CYCLO 6000','motorKW':'0.1','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1','conf':'0','mount':'0','mount2':'0',oshaftInc1:false,oshaftInc2:false,'ishaft':'0','oshaft':'0','oshafty':'0','oshafty2':'4','backStop':'0','rot':'0','hssRadialLoadKn':'0','hssRadialLoadMm':'0','hssAxialLoadKn':'0','sssRadialLoadKn':'0','sssRadialLoadMm':'0','sssAxialLoadKn':'0','dirHssAxial':'0','dirSssAxial':'0'})
	};
	$scope.removetechQueryRow = function(name)
	{	
	   // alert(name);
		var IndexTab5 = -1;		
		var comArrTab5 = eval( $scope.dataQuery );
		for( var q = 0; q < comArrTab5.length; q++ ) 
		{
			if( comArrTab5[q].id === name ) 
			{
				IndexTab5 = q;
				break;
			}				
		}
		$scope.dataQuery.splice( IndexTab5, 1 );
		$indexTab5 = comArrTab5.length;
		for(var n=0;n<$indexTab5;n++)
		{
			$scope.dataQuery[n].id = Number(n)+Number(1);
		}			
   };
	

$scope.getSSCCodeTech = function()
{ 
     $scope.availableTech = [];  
    $.getJSON("getAllSSccodes.do",function(json)
				{
					//alert(JSON.stringify(json['data']));
					 $scope.availableTech = json['data'];
					 $scope.$apply();
				});
    
	/*$scope.availableTech = [
	  { id: 'A00', desp: 'Output Shaft Clockwise-A00'},
	  { id: 'A01', desp: 'Output Shaft Anti-Clockwise-A01'},
	  { id: 'A02', desp: 'Output Shaft Dual Direction-A02'},
	  { id: 'A10', desp: 'Outdoor Type-A11'},
	  { id: 'A11', desp: 'Dust-Proof Type-A11'},
	  { id: 'A12', desp: 'Heavy Dust-Proof Type-A12'},
	  { id: 'A13', desp: 'Water proof-A13'},
	  { id: 'A14', desp: 'Marine Duty-A14'},
	  { id: 'A19', desp: 'Special spec. for ship turning gear; N21; N26; N43-A19'},
	  { id: 'A1A', desp: 'Light Duty Washdown-A1A'},
	  { id: 'A1B', desp: 'Plant Washdown-A1B'}
	];*/
	
}
//  	   	   	var cusImageTech = new FormData();
//  $scope.uploadTechFile = function(files,dummyId) 
//			{
//				//alert(files);
//				//alert(JSON.stringify(dummyId));
//				//$scope.dummyId = 0;
//				//alert($scope.dummyId);
//				cusImageTech.delete("docFile");
//				cusImageTech.delete("docFileId");
//	    		cusImageTech.append("docFile",files[0]);
//				cusImageTech.append("docFileId",dummyId);
//				
//				/*$http.post("/SCA-360/newcaseselectiongridimage.do", cusImageTech, {
//								withCredentials: true,
//								 headers: {'Content-Type': undefined },
//								 transformRequest: angular.identity
//							  }).success(function(data, status) 
//							   { 
//									//swal( 'Saved Successfully'); 
//							   });*/
//				$scope.$apply();
//			};
			
	var techQueryTabData = [];
	var techQueryTabDescp = [];
	var techQueryImgData = [];
	var techQuery = new Object();
		//alert(JSON.stringify($scope.formData));
//==========Tech Query Form Submit===========//
  $scope.techQueryFormSubmit = function(addCase,form,techQueryData,form2,addDespTech)
		{
	       //alert(JSON.stringify(addCase));
		   //alert(JSON.stringify($scope.dataField));
	       //$scope.submitted = true;
		     if($scope.caseManagementForm.$valid)
			    {
					//alert($scope.techQueryForm.$valid);
					//$scope.submitted = true;
					if($scope.techQueryForm.$valid)
					{
							techQueryTabData = [];
							$scope.dataQuery.forEach(function(techQueryData)
							{ 
								//alert(JSON.stringify(formData)); 
							   techQueryTabData.push(angular.toJson(techQueryData));	 
							});
							techQueryImgData = [];
							$scope.stepsModelTech.forEach(function(stepTech)
							{ 
								//alert(JSON.stringify(formData)); 
							   techQueryImgData.push(angular.toJson(stepTech));	 
							});
					cusImageTech.append("formData",angular.toJson(addCase));
					cusImageTech.append("gridData",angular.toJson(techQueryTabData));
					cusImageTech.append("fieldData",angular.toJson(addDespTech));
					cusImageTech.append("motorFile",techQueryImgData);
					//alert(JSON.stringify(cusImageTech));
						$('.btn-hideTech').attr('disabled',true);
					    $('.Send-hideTech').attr('disabled',true);
						
						$.ajax({
						       url         : "/SCA-360/techquerygridsave.do",
						       data        : cusImageTech,
						       contentType : false,
						       processData : false,
						       type        : 'POST'
						   }).success(function(data, status){
							   //alert(data);
								if(data==true)
									{
										swal( 'Saved Successfully');
										$scope.addCase = angular.copy($scope.master);
							            $scope.addDespTech = angular.copy($scope.master);
										$scope.remarksTech = "";
								        $indexTab5=1;
							          $scope.dataQuery=[{'id':$indexTab5,'gm':'0','model':'0','ambientTemp':'40','pole':'4','rpm':'1450','motorType':'NO','voltage':'400','phase':'3','application':'A01','quantity':'1','gearProduct':'CYCLO 6000','motorKW':'0.1','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1','conf':'0','mount':'0','mount2':'0',oshaftInc1:false,oshaftInc2:false,'ishaft':'0','oshaft':'0','oshafty':'0','oshafty2':'4','backStop':'0','rot':'0','hssRadialLoadKn':'0','hssRadialLoadMm':'0','hssAxialLoadKn':'0','sssRadialLoadKn':'0','sssRadialLoadMm':'0','sssAxialLoadKn':'0','dirHssAxial':'0','dirSssAxial':'0'}];
                                        $scope.stepsModelTech = [];
										cusImageTech = new FormData(); 
								        form.$setPristine(true); 
										form2.$setPristine(true);
										$.getJSON("loadingsequenceNember.do",function(json)
											{
												    $scope.addCase=json['maincaseform'][0];
                                                    $scope.addDespTech=json['description'][0];
													$scope.$apply();
											});
										$rootScope.newcase = '';
										$rootScope.caseCustomerRef = '';
										$rootScope.caseCustomer = '';
										$rootScope.tab = '';
										//$scope.getCaseData(addCase,form);
										//$scope.addBlogTech();
                                        $("#remarksHideTech").hide();
                                         $("#blogHideTech").hide();
                                         $('.btn-hideTech').attr('disabled',false);
					                     $('.Send-hideTech').attr('disabled',false);
										$scope.$apply();
									}
								else
									{
									   swal("Oops sorry...", "Something went wrong!", "error");
									   $('.btn-hideTech').attr('disabled',true);
					                   $('.Send-hideTech').attr('disabled',true);
									}
							    
							   
				        	   
				           });
					}
					else
					{
						var field = null, firstError = null;
						for (field in form2) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form2[field].$valid) 
								{
									firstError = form2[field].$name;
								}
								if (form2[field].$pristine) 
								{
									form2[field].$dirty = true;
								}
							}	
						}
					}
			    }
		     else
				{
					
					var field = null, firstError = null;
						for (field in form) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form[field].$valid) 
								{
									firstError = form[field].$name;
								}
								if (form[field].$pristine) 
								{
									form[field].$dirty = true;
								}
							}	
						}
				}
		}		
  $scope.techQueryTempFormSubmit = function(addCase,form,techQueryData,form2,addDespTech)
		{
	       //alert(JSON.stringify(addCase));
		   //alert(JSON.stringify($scope.dataField));
	       //$scope.submitted = true;
		     if($scope.caseManagementForm.$valid)
			    {
					//alert($scope.techQueryForm.$valid);
					//$scope.submitted = true;
					if($scope.techQueryForm.$valid)
					{
							techQueryTabData = [];
							$scope.dataQuery.forEach(function(techQueryData)
							{ 
								//alert(JSON.stringify(formData)); 
							   techQueryTabData.push(angular.toJson(techQueryData));	 
							});
					         techQueryImgData = [];
							$scope.stepsModelTech.forEach(function(stepTech)
							{ 
								//alert(JSON.stringify(formData)); 
							   techQueryImgData.push(angular.toJson(stepTech));	 
							});
					cusImageTech.append("formData",angular.toJson(addCase));
					cusImageTech.append("gridData",angular.toJson(techQueryTabData));
					cusImageTech.append("fieldData",angular.toJson(addDespTech));
					cusImageTech.append("motorFile",techQueryImgData);
					//alert(JSON.stringify(cusImageTech));
					$('.btn-hideTech').attr('disabled',true);
					$('.Send-hideTech').attr('disabled',true);	
						
						$.ajax({
						       url         : "/SCA-360/techquerycasetempsave.do",
						       data        : cusImageTech,
						       contentType : false,
						       processData : false,
						       type        : 'POST'
						   }).success(function(data, status){
							   //alert(data);
								if(data==true)
									{
										
										//$scope.remarksTech = "";
										//$scope.addBlogTech();
                                        swal( 'Saved Successfully');
										$scope.addCase = angular.copy($scope.master);
							            $scope.addDespTech = angular.copy($scope.master);
										$scope.remarksTech = "";
								        $indexTab5=1;
							          $scope.dataQuery=[{'id':$indexTab5,'gm':'0','model':'0','ambientTemp':'40','pole':'4','rpm':'1450','motorType':'NO','voltage':'400','phase':'3','application':'A01','quantity':'1','gearProduct':'CYCLO 6000','motorKW':'0.1','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1','conf':'0','mount':'0','mount2':'0',oshaftInc1:false,oshaftInc2:false,'ishaft':'0','oshaft':'0','oshafty':'0','oshafty2':'4','backStop':'0','rot':'0','hssRadialLoadKn':'0','hssRadialLoadMm':'0','hssAxialLoadKn':'0','sssRadialLoadKn':'0','sssRadialLoadMm':'0','sssAxialLoadKn':'0','dirHssAxial':'0','dirSssAxial':'0'}];
                                        $scope.stepsModelTech = []; 
								        form.$setPristine(true); 
										form2.$setPristine(true);
										cusImageTech = new FormData();
                                        $scope.getCaseData(addCase,form);
										$('.btn-hideTech').attr('disabled',false);
					                    $('.Send-hideTech').attr('disabled',false);
										$scope.$apply();
										
										
									}
								else
									{
									   swal("Oops sorry...", "Something went wrong!", "error");
									   $('.btn-hideTech').attr('disabled',true);
					         		   $('.Send-hideTech').attr('disabled',true);
									}
							    
							   
				        	   
				           });
					}
					else
					{
						var field = null, firstError = null;
						for (field in form2) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form2[field].$valid) 
								{
									firstError = form2[field].$name;
								}
								if (form2[field].$pristine) 
								{
									form2[field].$dirty = true;
								}
							}	
						}
					}
			    }
		     else
				{
					
					var field = null, firstError = null;
						for (field in form) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form[field].$valid) 
								{
									firstError = form[field].$name;
								}
								if (form[field].$pristine) 
								{
									form[field].$dirty = true;
								}
							}	
						}
				}
		}
		
		//============Tech Form Reset============//
		  $scope.resetTechQueryForm = function(addCase,form,techQueryData,form2,addDespTech)
		  {
			  
			        cusImageTech.append("formData",angular.toJson(addCase));
					cusImageTech.append("gridData",angular.toJson(techQueryTabData));
					cusImageTech.append("fieldData",angular.toJson(addDespTech));
					cusImageTech.append("motorFile",techQueryImgData);
					//alert(JSON.stringify(cusImageTech));
						
					$('.btn-hideTech').attr('disabled',true);
					$('.Send-hideTech').attr('disabled',true);	
						$.ajax({
						       url         : "/SCA-360/techquerycaseDiscardtempsave.do",
						       data        : cusImageTech,
						       contentType : false,
						       processData : false,
						       type        : 'POST'
						   }).success(function(data, status){
							   //alert(data);
								if(data==true)
									{
										
										swal( 'Draft Discard Successfully');
										$scope.addCase = angular.copy($scope.master);
							            $scope.addDespTech = angular.copy($scope.master);
										//$scope.remarksTech = "";
								        $indexTab5=1;
							            $scope.dataQuery=[{'id':$indexTab5,'gm':'0','model':'0','ambientTemp':'40','pole':'4','rpm':'1450','motorType':'NO','voltage':'400','phase':'3','application':'A01','quantity':'1','gearProduct':'CYCLO 6000','motorKW':'0.1','hertz':'50','protectionGrade': 'IP55','internationalStd': 'JIS','mtrEfficncyClass':'0','inverter':'1','motorBrake':'1','motorBrakeVolt':'1','conf':'0','mount':'0','mount2':'0',oshaftInc1:false,oshaftInc2:false,'ishaft':'0','oshaft':'0','oshaftInc':'1','oshafty':'0','oshafty2':'4','backStop':'0','rot':'0','hssRadialLoadKn':'0','hssRadialLoadMm':'0','hssAxialLoadKn':'0','sssRadialLoadKn':'0','sssRadialLoadMm':'0','sssAxialLoadKn':'0','dirHssAxial':'0','dirSssAxial':'0'}];
										cusImageTech = new FormData();
								        form.$setPristine(true); 
										form2.$setPristine(true);
										$.getJSON("loadingsequenceNember.do",function(json)
											{
												   $scope.addCase=json['maincaseform'][0];
                                                   $scope.addDespTech=json['description'][0];
													$scope.$apply();
											});
											$rootScope.newcase = '';
											$rootScope.caseCustomerRef = '';
											$rootScope.caseCustomer = '';
											$rootScope.tab = '';
											//$scope.getCaseData(addCase,form);
										$scope.stepsModelTech = []; 
										$('.btn-hideTech').attr('disabled',false);
					                    $('.Send-hideTech').attr('disabled',false);
										$scope.$apply();
										
										
									}
				           });
		  }
		  $scope.loadQuotationForm = function()
		  {
			 var caseRefNo = 0;
		     $rootScope.loadQuotation = caseRefNo;
		  }
});

//==========================================================//
     //--------------Add New Case--------------------//
//=========================================================//

angular.module('app')
.controller('addNewCaseCtrl',function($scope,$http,$rootScope){
	
	
	$scope.getAddNewCaseFormData = function()
	{
		$.getJSON("getAllCustmerNamesInCasess.do",function(json)
				{
			            //alert(JSON.stringify(json['data'])); 
					   $scope.names = json['data'];  
					  // alert(JSON.stringify(json['data'])); 
					  $scope.$apply();
				});
	};
	
	
	
	$scope.getCaseName = function(custmername,form)
	{
		
		//alert(JSON.stringify(custmername));
		$.getJSON("getAlltheDetailsIntheCustmerInCasess.do",{custmername:custmername},function(json)
				{
					
			           //alert(JSON.stringify(json['data'])); 
					   $scope.addNewCaseData = json['data']; 
					
					 $scope.$apply();
					   //alert(JSON.stringify($scope.addNewCaseData)); 
				});
				
	};
	
	$scope.loadCaseCustomerDetails = function(getCaseCustomerRef,getCaseCustomer,gettab)
	{
		//alert(JSON.stringify(getCaseCustomerRef));
		//alert(JSON.stringify(getCaseCustomer));
		$rootScope.caseCustomerRef=getCaseCustomerRef;
		$rootScope.caseCustomer=getCaseCustomer;
		$rootScope.tab=gettab;
		$scope.$apply();
 
	};
			
	$scope.loadNewCaseCustomer = function()
	{
		//alert("loadNewCaseCustomer");
		var checkCaseCustomer = 0;
		$rootScope.loadNewCase = checkCaseCustomer;
		//alert($rootScope.loadNewCase);
	}
	
	
});



//==================================================//
   //--------Quotaion Type-----------------//

//==================================================//
angular.module('app')
.controller("QuotationController",function($scope,$http,$rootScope)
{
	
	$scope.master = {};
	$scope.addQuotation = {};
	//$scope.loadDefaultFieldValue = function()
	//{
		$scope.addQuotation = ({'qtnType':'0','qtnProgress':'0','showCost':'0','modifiedstatus':'0','currency':'USD','tax':'VAT','country':'AUSTRALIA','taxPercent':'10','paymentTerm':'2','salesTerm':'CIF','estPercent':'10','assigned':'Sales'});
		$scope.$apply();
	//}
	//$scope.register = ({'countryId':'India'});
	/*var defaultValues = [{currency:"USD"}];
	$scope.defaultDropDownValues = function()
	{
		
		$scope.addQuotation.currency = defaultValues[0].currency;
		alert(JSON.stringify($scope.addQuotation.currency));
		$scope.$apply();
	}*/
	
	
	$scope.loadCurrencyData = function()
	{
		
		$.getJSON("getingCurrencies.do",function(json)
			{
                         
						   $scope.currencyArrData = json['data'];
						   // alert(JSON.stringify($scope.currencyArrData[0].currency));
						    $scope.$apply();
			});
	}
   
   $scope.getFullUnitItemized = function(form)
    {
       
        qtnFormData = new FormData();
		$indexFullUnit=1;
		$scope.qtnFullUnitData=[{'id':$indexFullUnit}];
		$indexTerm=1;
    	$scope.termData=[{'id':$indexTerm}];
		$scope.addQuotation = angular.copy($scope.master);
 		$scope.loadQuotationSeqNum();
		$scope.loadSysDate();
		$scope.addQuotation = ({'qtnType':'0','qtnProgress':'0','showCost':'0','modifiedstatus':'0','currency':'USD','tax':'VAT','country':'AUSTRALIA','taxPercent':'10','paymentTerm':'2','salesTerm':'CIF','estPercent':'10','assigned':'Sales'});
		form.$setPristine(true); 
		$scope.$apply();
       
    }
    $scope.getProjectItemized = function(form)
    {
		qtnFormData = new FormData();
        $indexProject=1;
		$scope.projectUnitData=[{'id':$indexProject}];
		$indexTerm=1;
    	$scope.termData=[{'id':$indexTerm}];
		$scope.addQuotation = angular.copy($scope.master);
	    $scope.loadQuotationSeqNum();
		$scope.loadSysDate();
		$scope.addQuotation = ({'qtnType':'1','qtnProgress':'0','showCost':'0','modifiedstatus':'0','currency':'USD','tax':'VAT','country':'AUSTRALIA','taxPercent':'10','paymentTerm':'2','salesTerm':'CIF','estPercent':'10','assigned':'Sales'});
		form.$setPristine(true); 
		$scope.$apply();
       
    }
    
	$scope.getSparePartItemized = function(form)
    {
       
        qtnFormData = new FormData();
		$indexSpare=1;
		$scope.sparePartData=[{'id':$indexSpare}];
		$indexTerm=1;
    	$scope.termData=[{'id':$indexTerm}];
		$scope.addQuotation = angular.copy($scope.master);
		$scope.loadQuotationSeqNum();
		$scope.loadSysDate();
		$scope.addQuotation = ({'qtnType':'2','qtnProgress':'0','showCost':'0','modifiedstatus':'0','currency':'USD','tax':'VAT','country':'AUSTRALIA','taxPercent':'10','paymentTerm':'2','salesTerm':'CIF','estPercent':'10','assigned':'Sales'});
		form.$setPristine(true); 
		$scope.$apply();
       
    }
	$scope.getServiceItemized = function(form)
    {
       
        qtnFormData = new FormData();
		$indexService=1;
		$scope.servicPartData=[{'id':$indexService}];
		$indexTerm=1;
    	$scope.termData=[{'id':$indexTerm}];
		$scope.addQuotation = angular.copy($scope.master);
		$scope.loadQuotationSeqNum();
		$scope.loadSysDate();
		$scope.addQuotation = ({'qtnType':'3','qtnProgress':'0','showCost':'0','modifiedstatus':'0','currency':'USD','tax':'VAT','country':'AUSTRALIA','taxPercent':'10','paymentTerm':'2','salesTerm':'CIF','estPercent':'10','assigned':'Sales'});
		form.$setPristine(true); 
		$scope.$apply();
       
    }
    
//=============Full Unit=================//	
	$scope.qtnFullUnitData = [];
    $indexFullUnit=0;

  $scope.addQtnFormField = function() 
	{
		//alert("Add item");
		$indexFullUnit++;
	    $scope.qtnFullUnitData.push({'id':$indexFullUnit})
	};
	$scope.removeQtnFormRow = function(name)
	{	
	    
		var IndexFUnit = -1;		
		var comArrFUnit = eval( $scope.qtnFullUnitData );
		//alert(comArrFUnit.length);
		for( var q = 0; q < comArrFUnit.length; q++ ) 
		{
			if( comArrFUnit[q].id === name ) 
			{
				IndexFUnit = q;
				break;
			}				
		}
		$scope.qtnFullUnitData.splice( IndexFUnit, 1 );
		$indexFullUnit = comArrFUnit.length;
		for(var n=0;n<$indexFullUnit;n++)
		{
			$scope.qtnFullUnitData[n].id = Number(n)+Number(1);
		}
		//alert($scope.fullUnitData[n].id);			
   };
    //=============Full Unit Itemized=================//	
	$scope.fullUnitItemizedData = [];
    $indexFullUnitItem=0;

  $scope.addFUnitItemizedField = function() 
	{
		//alert("Add item");
		$indexFullUnitItem++;
	    $scope.fullUnitItemizedData.push({'id':$indexFullUnitItem})
	};
	$scope.removeFUnitItemRow = function(name)
	{	
	    
		var IndexFUnitItem = -1;		
		var comArrFUnitItem = eval( $scope.fullUnitItemizedData );
		//alert(comArrFUnit.length);
		for( var c = 0; c < comArrFUnitItem.length; c++ ) 
		{
			if( comArrFUnitItem[c].id === name ) 
			{
				IndexFUnitItem = c;
				break;
			}				
		}
		$scope.fullUnitItemizedData.splice( IndexFUnitItem, 1 );
		$indexFullUnitItem = comArrFUnitItem.length;
		for(var l=0;l<$indexFullUnitItem;n++)
		{
			$scope.fullUnitItemizedData[l].id = Number(l)+Number(1);
		}
		//alert($scope.fullUnitData[n].id);			
   };
	
	
  //==============Project type===========//
    $scope.projectUnitData = [];
    $indexProject=0;

  $scope.addQtnProjFormField = function() 
	{
		//alert("Add item");
		$indexProject++;
	    $scope.projectUnitData.push({'id':$indexProject})
	};
	
	$scope.removeProjFormRow = function(name)
	{	
	    //alert(name);
		var IndexProj = -1;		
		var comArrProj = eval( $scope.projectUnitData );
		//alert(comArrProj.length);
		for( var s = 0; s < comArrProj.length; s++ ) 
		{
			if( comArrProj[s].id === name ) 
			{
				IndexProj = s;
				break;
			}
						
		}
		$scope.projectUnitData.splice( IndexProj, 1 );
		$indexProject = comArrProj.length;
		for(var m=0;m<$indexProject;m++)
		{
			$scope.projectUnitData[m].id = Number(m)+Number(1);
		}
		//alert($scope.projectUnitData[m].id);			
   };
     //==============Project Type Itemized===========//
    $scope.projectItemizedData = [];
    $indexProjectItem=0;

  $scope.ProjectItemField = function() 
	{
		//alert("Add item");
		$indexProjectItem++;
	    $scope.projectItemizedData.push({'id':$indexProjectItem})
	};
	
	$scope.removeProjectItemRow = function(name)
	{	
	    //alert(name);
		var IndexProjItem  = -1;		
		var ProjItem = eval( $scope.projectItemizedData );
		//alert(comArrProj.length);
		for( var s = 0; s < ProjItem.length; s++ ) 
		{
			if( ProjItem[s].id === name ) 
			{
				IndexProjItem = s;
				break;
			}
						
		}
		$scope.projectItemizedData.splice( IndexProjItem, 1 );
		$indexProjectItem = ProjItem.length;
		for(var m=0;m<$indexProjectItem;m++)
		{
			$scope.projectItemizedData[m].id = Number(m)+Number(1);
		}
		//alert($scope.projectUnitData[m].id);			
   };
	
	  //==============Spare Part (only)===========//
    $scope.sparePartData = [];
    $indexSpare=0;

  $scope.addQtnSpareFormField = function() 
	{
		//alert("Add item");
		$indexSpare++;
	    $scope.sparePartData.push({'id':$indexSpare})
	};
	
		$scope.removeSpareFormRow = function(name)
		{	
			//alert(name);
			var IndexSpare = -1;		
			var comArrSpare = eval( $scope.sparePartData );
			//alert(comArrSpare.length);
			for( var t = 0; t < comArrSpare.length; t++ ) 
			{
				if( comArrSpare[t].id === name ) 
				{
					IndexSpare = t;
					break;
				}
							
			}
			$scope.sparePartData.splice( IndexSpare, 1 );
			$indexSpare = comArrSpare.length;
			for(var j=0;j<$indexSpare;j++)
			{
				$scope.sparePartData[j].id = Number(j)+Number(1);
			}
			//alert($scope.sparePartData[j].id);			
	   };
      //==============Spare Part Item (only)===========//
    $scope.spareItemizedData = [];
    $indexSpareItem=0;

  $scope.spareItemField = function() 
	{
		//alert("Add item");
		$indexSpareItem++;
	    $scope.spareItemizedData.push({'id':$indexSpareItem})
	};
	
		$scope.removeSpareItemRow = function(name)
		{	
			//alert(name);
			var IndexSpareItem = -1;		
			var SpareItem = eval( $scope.spareItemizedData );
			//alert(comArrSpare.length);
			for( var t = 0; t < SpareItem.length; t++ ) 
			{
				if( SpareItem[t].id === name ) 
				{
					IndexSpareItem = t;
					break;
				}
							
			}
			$scope.spareItemizedData.splice( IndexSpareItem, 1 );
			$indexSpareItem = SpareItem.length;
			for(var j=0;j<$indexSpareItem;j++)
			{
				$scope.spareItemizedData[j].id = Number(j)+Number(1);
			}
			//alert($scope.sparePartData[j].id);			
	   };


	  //==============Spare Part & Service===========//
    $scope.servicPartData = [];
    $indexService=0;

  $scope.addQtnServiceFormField = function() 
	{
		//alert("Add item");
		$indexService++;
	    $scope.servicPartData.push({'id':$indexService})
	};
	
		$scope.removeServiceFormRow = function(name)
		{	
			//alert(name);
			var IndexService = -1;		
			var serviceArr = eval( $scope.servicPartData );
			//alert(comArrSpare.length);
			for( var t = 0; t < serviceArr.length; t++ ) 
			{
				if( serviceArr[t].id === name ) 
				{
					IndexService = t;
					break;
				}
							
			}
			$scope.servicPartData.splice( IndexService, 1 );
			$indexService = serviceArr.length;
			for(var j=0;j<$indexService;j++)
			{
				$scope.servicPartData[j].id = Number(j)+Number(1);
			}
			//alert($scope.sparePartData[j].id);			
	   };
      //==============Spare Part & Service Item===========//
    $scope.serviceItemizedData = [];
    $indexServiceItem=0;

  $scope.serviceItemField = function() 
	{
		//alert("Add item");
		$indexServiceItem++;
	    $scope.serviceItemizedData.push({'id':$indexServiceItem})
	};
	
		$scope.removeServiceItemRow = function(name)
		{	
			//alert(name);
			var IndexServiceItem = -1;		
			var ServiceItem = eval( $scope.serviceItemizedData );
			//alert(comArrSpare.length);
			for( var l = 0; l < ServiceItem.length; l++ ) 
			{
				if( ServiceItem[l].id === name ) 
				{
					IndexServiceItem = l;
					break;
				}
							
			}
			$scope.serviceItemizedData.splice( IndexServiceItem, 1 );
			$indexServiceItem = ServiceItem.length;
			for(var k=0;k<$indexServiceItem;k++)
			{
				$scope.serviceItemizedData[k].id = Number(k)+Number(1);
			}
			//alert($scope.sparePartData[j].id);			
	   };


//=============Term & Condition =============//
$scope.termData = [];
    $indexTerm = 0;
$scope.addTerms = function()
{
    $indexTerm++;
    $scope.termData.push({'id':$indexTerm})
}


$scope.removeTermRow = function(name)
{
    var IndexTerm = -1;		
			var terms = eval( $scope.termData );
			//alert(comArrSpare.length);
			for( var i = 0; i < terms.length; i++ ) 
			{
				if( terms[i].id === name ) 
				{
					IndexTerm = i;
					break;
				}
							
			}
			$scope.termData.splice( IndexTerm, 1 );
			$indexTerm = terms.length;
			for(var k=0;k<$indexTerm;k++)
			{
				$scope.termData[k].id = Number(k)+Number(1);
			}
}

/*$scope.conditionData = [];
    $indexCon = 0;
$scope.addConditions = function()
{
    $indexCon++;
    $scope.conditionData.push({'id':$indexCon})
}

$scope.removeConRow = function(name)
{
    var IndexCon = -1;		
			var condit = eval( $scope.conditionData );
			//alert(comArrSpare.length);
			for( var j = 0; j < condit.length; j++ ) 
			{
				if( condit[j].id === name ) 
				{
					IndexCon = j;
					break;
				}
							
			}
			$scope.conditionData.splice( IndexCon, 1 );
			$indexCon = condit.length;
			for(var l=0;l<$indexCon;l++)
			{
				$scope.conditionData[l].id = Number(l)+Number(1);
			}
}*/

    $scope.loadQuotationSeqNum = function()
	{
		//alert($rootScope.loadQuotation + " 1 ");
		//var getCaseRefNo = $rootScope.loadQuotation;
	if($rootScope.quotationSeqNo===undefined || $rootScope.quotationSeqNo==="" && $rootScope.quotationAction===undefined || $rootScope.quotationAction==="")
	{	
		if($rootScope.loadQuotation===undefined || $rootScope.loadQuotation==="")
		{
			//alert("Visit again");
			 
			$.post("quatationsequencenumber.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				var asd = json['data'][0].qot;
				//var counName = json['data'][0].billingCountries;
				//var assignDep = json['data'][0].assigned;
				 asd2 = asd.split("-");
				 $scope.qType = asd2[0];
				 $scope.coun_year_Code = asd2[1];
				 $scope.runNo = asd2[2];
				 $scope.version = asd2[3];
				 $scope.addQuotation.qtnNo = json['data'][0].qot;
				// $scope.addQuotation.billingCountries = json['data'][0].billingCountries;
				 //$scope.addQuotation.assigned = json['data'][0].assigned;
				 //$scope.addQuotation.country = counName;
				 //$scope.addQuotation.assigned = assignDep;
				 $scope.$apply();
			});
			
		}
		else
		{
			//alert("welcome to quotation");
			$.post("getingQuatationOnCaseRefrence.do",function(json)
			{
				
				//alert(JSON.stringify(json['custgrid']['griddata'].length));
				//alert(JSON.stringify($scope.qtnFullUnitData));
				var qtnFormData = json['custobject']['custmer'][0];
				var gridData = json['custgrid']['griddata'];
				//var gridindexId = json['custgrid']['griddata'][0].id;
				//alert(JSON.stringify($scope.qtnFullUnitData).length);
				   $scope.addQuotation.caseRef = qtnFormData.caseRef;
			       $scope.addQuotation.telephone = qtnFormData.phnumber;
				   $scope.addQuotation.currency = qtnFormData.currency;
				   $scope.addQuotation.custName = qtnFormData.accountid;
				   $scope.addQuotation.custCode = qtnFormData.account;
			       $scope.addQuotation.country = qtnFormData.billingCountries;
				//$scope.addQuotation.discount = json['custmer'][0].discountmultiplier;
				   $scope.addQuotation.tax = qtnFormData.taxName;
				   $scope.addQuotation.salesMan = qtnFormData.salesPerson;
				   $scope.addQuotation.salesManCode = qtnFormData.salesPersonCode;
				//$scope.addQuotation.assigned = json['custmer'][0].departmentname;
				   $scope.addQuotation.paymentTerm = qtnFormData.paymentTerm;
				$scope.addQuotation.application = qtnFormData.application;
				$scope.addQuotation.industry = qtnFormData.applicanIndustry;
				//$scope.addQuotation.attention = json['custmer'][0].contactName;
				   $scope.addQuotation.emailAddr = qtnFormData.email;
				   //alert($scope.qtnFullUnitData.motorPower);
				   for(var i=0;i<gridData.length;i++)
				   {
					      $scope.qtnFullUnitData[i].motorPower = gridData[i].motorKW;
					      $scope.qtnFullUnitData[i].pole = gridData[i].pole;
						  $scope.qtnFullUnitData[i].phase = gridData[i].phase;
						  $scope.qtnFullUnitData[i].voltage = gridData[i].voltage;
						  $scope.qtnFullUnitData[i].freq = gridData[i].hertz;
						  $scope.qtnFullUnitData[i].outPutRPM = gridData[i].rpm;
						  $scope.qtnFullUnitData[i].appcode = gridData[i].application;
						  $scope.qtnFullUnitData[i].specialFeaturs = gridData[i].motorType;
					   $scope.$apply();
				   }
				 
				 $rootScope.loadQuotation = "";
				  
				  //alert($rootScope.loadQuotation + " loadQuotationseqno frm case");
				   var asd = json['sequencenumber'];
					 asd2 = asd.split("-");
					 $scope.qType = asd2[0];
					 $scope.coun_year_Code = asd2[1];
					 $scope.runNo = asd2[2];
					 $scope.version = asd2[3];
				   $scope.addQuotation.qtnNo = json['sequencenumber'];
				$scope.$apply();
			});
			
		}
	}
	else
	{
		//alert($rootScope.quotationAction + " 2 ");
		
		$.post("getSavedQuatationDataOnQuatationNumber.do",{quationnumber:$rootScope.quotationSeqNo,action:$rootScope.quotationAction},function(json)
		{
			//alert($rootScope.qtnType);
			if($rootScope.quotationAction=='0')
			{
				$('.btn-hide').attr('disabled',true);
				
				
			}
			else
			{
				$('.btn-hide').attr('disabled',false);
				
			}
			//$rootScope.qtnType = qtnType;
			var Quote = $rootScope.qtnType;
			var asd = json['quatationform'][0].qtnNo;
				//var counName = json['data'][0].billingCountries;
				//var assignDep = json['data'][0].assigned;
				
				if(Quote=='0')
				{
					//alert(0);
					 asd2 = asd.split("-");
					 $scope.qType = asd2[0];
					 $scope.coun_year_Code = asd2[1];
					 $scope.runNo = asd2[2];
					 $scope.version = asd2[3];
					 $scope.addQuotation = json['quatationform'][0];
					 $scope.qtnFullUnitData = json['quatationgrid'];
					 $scope.termData = json['quatationtermsgrid'];
					 $scope.$apply();
					 $scope.addQuotation.modifiedstatus = '1';
					 $rootScope.quotationSeqNo = "";
					 $rootScope.quotationAction = "";
					 $rootScope.qtnType = "";
				}
				if(Quote=='1')
				{
					//alert(1);
					 asd2 = asd.split("-");
					 $scope.qType = asd2[0];
					 $scope.coun_year_Code = asd2[1];
					 $scope.runNo = asd2[2];
					 $scope.version = asd2[3];
					 $scope.addQuotation = json['quatationform'][0];
					 $scope.projectUnitData = json['quatationgrid'];
					 $scope.termData = json['quatationtermsgrid'];
					 $scope.$apply();
					 $scope.addQuotation.modifiedstatus = '1';
					 $rootScope.quotationSeqNo = "";
					 $rootScope.quotationAction = "";
					 $rootScope.qtnType = "";
				}
				if(Quote=='2')
				{
					//alert(2);
					//alert(JSON.stringify(json['quatationgrid']));
					 asd2 = asd.split("-");
					 $scope.qType = asd2[0];
					 $scope.coun_year_Code = asd2[1];
					 $scope.runNo = asd2[2];
					 $scope.version = asd2[3];
					 $scope.addQuotation = json['quatationform'][0];
					 $scope.sparePartData = json['quatationgrid'];
					 $scope.termData = json['quatationtermsgrid'];
					 $scope.$apply();
					 $scope.addQuotation.modifiedstatus = '1';
					 $rootScope.quotationSeqNo = "";
					 $rootScope.quotationAction = "";
					 $rootScope.qtnType = "";
				}
				if(Quote=='3')
				{
					//alert(3);
					 asd2 = asd.split("-");
					 $scope.qType = asd2[0];
					 $scope.coun_year_Code = asd2[1];
					 $scope.runNo = asd2[2];
					 $scope.version = asd2[3];
					 $scope.addQuotation = json['quatationform'][0];
					 $scope.servicPartData = json['quatationgrid'];
					 $scope.termData = json['quatationtermsgrid'];
					 $scope.$apply();
					 $scope.addQuotation.modifiedstatus = '1';
					 $rootScope.quotationSeqNo = "";
					 $rootScope.quotationAction = "";
					 $rootScope.qtnType = "";
				}
				
				   
		});
	}
		
		$scope.$apply();
			
	}
	
	$scope.loadCustomerName = function()
	{
		$scope.customerNameData = [];
		//$scope.customerNameData = [{id:'name1',name:'name1'},{id:'name2',name:'name2'},{id:'name3',name:'name3'},{id:'name4',name:'name4'}];
		$.getJSON("getAllCustmerNames.do",function(json)
				{
					//alert(JSON.stringify(json));
					$scope.customerNameData = json['data'];
					$scope.$apply();
				});
	}
	
	$scope.onSelectPart = function(customer)
	{
			//alert(customer);
			$.getJSON("getCustmerNamequatation.do",{custmername:customer},function(json)
				{
					//alert(JSON.stringify(json['custmer']));
					$scope.addQuotation.telephone = json['custmer'][0].phnumber;
					$scope.addQuotation.currency = json['custmer'][0].currency;
					$scope.addQuotation.custCode = json['custmer'][0].account;
					$scope.addQuotation.country = json['custmer'][0].billingCountries;
					$scope.addQuotation.discount = json['custmer'][0].discountmultiplier;
					$scope.addQuotation.tax = json['custmer'][0].taxName;
					$scope.addQuotation.attention = json['custmer'][0].contactName;
					$scope.addQuotation.salesMan = json['custmer'][0].salesPerson;
					$scope.addQuotation.salesManCode = json['custmer'][0].salesPersonCode;
					$scope.addQuotation.assigned = json['custmer'][0].departmentname;
					$scope.addQuotation.paymentTerm = json['custmer'][0].paymentTerm;
					$scope.addQuotation.application = json['custmer'][0].application;
					$scope.addQuotation.industry = json['custmer'][0].applicanIndustry;
					$scope.addQuotation.emailAddr = json['custmer'][0].email;
					$scope.$apply();
				});
				$scope.$apply();
		
	};
	$scope.loadCustomerCode = function()
	{
		$scope.custCodeData = [];
		$.getJSON("getAllCustmerCopdes.do",function(json)
				{
					//alert(JSON.stringify(json));
					$scope.custCodeData = json['data'];
					$scope.$apply();
				});
	}
	$scope.onSelectCustCode = function(accountname)
	{
		
		$.getJSON("getAllCustmerDetailsSavedOnId.do",{account:accountname},function(json)
		{
			//alert(JSON.stringify(json['custmer'][0].phnumber));
			$scope.addQuotation.telephone = json['custmer'][0].phnumber;
			$scope.addQuotation.currency = json['custmer'][0].currency;
			$scope.addQuotation.custName = json['custmer'][0].accountid;
			$scope.addQuotation.country = json['custmer'][0].billingCountries;
			$scope.addQuotation.discount = json['custmer'][0].discountmultiplier;
			$scope.addQuotation.tax = json['custmer'][0].taxName;
			$scope.addQuotation.salesMan = json['custmer'][0].salesPerson;
			$scope.addQuotation.salesManCode = json['custmer'][0].salesPersonCode;
			$scope.addQuotation.assigned = json['custmer'][0].departmentname;
			$scope.addQuotation.paymentTerm = json['custmer'][0].paymentTerm;
			$scope.addQuotation.application = json['custmer'][0].application;
			$scope.addQuotation.industry = json['custmer'][0].applicanIndustry;
			$scope.addQuotation.attention = json['custmer'][0].contactName;
			$scope.addQuotation.emailAddr = json['custmer'][0].email;
			$scope.$apply();
		});
		
	}
	
    
$scope.getCountryNames = function()
{  

 $scope.countryNameData = [];
 
 $.getJSON("getAllCountries.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				
				 $scope.countryNameData = json['data'];
				 //alert(JSON.stringify($scope.countryNameData));
				 $scope.$apply();
			});
	
}
/*$scope.loadDefaultConValues = function()
{
	
	$.getJSON("quatationDefaultCountry.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				$scope.addQuotation.billingCountries = json['data'][0].billingCountries;
				 
				 $scope.$apply();
			});
}
$scope.loadDefaultDepValues = function()
{
	$.getJSON("quatationDefaultStatus.do",function(json)
			{
				//alert(JSON.stringify(json['data'][0].assigned));
				$scope.addQuotation.assigned = json['data'][0].assigned;
				 
				 $scope.$apply();
			});
}*/
    $scope.assignToDepartments = function()
		{
			
			$.getJSON("departmentViewForCase.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				$scope.assignDepartData = json['data'];
				
			    $scope.$apply();
			});		
		};
    $scope.getSalesMan = function()
	   {
		   $scope.salesManData = [];
		    $.getJSON("getAllSalesMan.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				 $scope.salesManData = json['data'];
				 $scope.$apply();
			});
	   }
	  $scope.onSelectSalesman = function(salesman)
	  {
		  $.getJSON("getSalesManCode.do",{salesman:salesman},function(json)
						{
					
					       $scope.addQuotation.salesManCode=json['data'];
                             $scope.$apply();
					       
						});
	  }
	  $scope.getSalesManCodeData = function()
	   {
		   $scope.salesManCodeData = [];
		    $.getJSON("getingSalesmanCode.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				 $scope.salesManCodeData = json['data'];
				 $scope.$apply();
			});
	   }
	  $scope.onSelectSalesmanCode = function(salesmancode)
	  {
		  //alert(salesmancode);
		  $.getJSON("getingSalesman.do",{salesmancode:salesmancode},function(json)
						{
					          //alert(JSON.stringify(json['salesManCode']));
					       $scope.addQuotation.salesMan = json['salesManCode'];
                             $scope.$apply();
					       
						}); 
	  }
	  $scope.loadTaxPercentage = function()
	  {
		  $.getJSON("getingTaxPercentages.do",function(json)
		  {
					 //alert(JSON.stringify(json['data']));     
					      $scope.taxPercentData=json['data'];
                             $scope.$apply();
					       
		 }); 
	  }
 $scope.getPaymentTerm = function()
	   {
		  // alert(getAllPayments.do);
		   $.getJSON("getAllPaymentsAppcode.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				 $scope.paymentTermData = json['data'];
				 $scope.$apply();
			});
	   }
	   $scope.getSalesTerm = function()
	   {
		   $scope.salesTermData = [{'id':'1','salesTerm':'CIF'},{'id':'2','salesTerm':'FOP'}];
	   }
	   $scope.getestPercentage = function()
	   {
		   $scope.estPercentData = [{id:'1',estPercent:'10'},{id:'2',estPercent:'20'},{id:'3',estPercent:'30'},{id:'4',estPercent:'40'},{id:'5',estPercent:'50'},{id:'6',estPercent:'60'},{id:'7',estPercent:'70'},{id:'8',estPercent:'80'},{id:'9',estPercent:'90'},{id:'10',estPercent:'100'}];
	   }
 $scope.loadSysDate = function()
	   {
		   $.getJSON("getToDaysDate.do",function(json)
			{
				//alert(JSON.stringify(json['bddate']));
				 $scope.addQuotation.dateQuote = json['bddate'];
				 $scope.$apply();
			});
	   }
	   
	   $scope.getApplicationCode =function()
	   {
           
		   $scope.appCodeData = [];
		   $.getJSON("getAllApplications.do",function(json)
			{
					
							//alert(JSON.stringify(json['data']));
							 $scope.appCodeData= json['data'];
							 $scope.$apply();
					
			});
	   }
	   $scope.onSelectAppIndustry = function(applicanIndusName)
	   {
		    /*$.getJSON("getApplicationIndustryName.do",{applicanIndusName:applicanIndusName},function(json)
			{
                         //alert(JSON.stringify(json['data'][0].applicanIndustry));
						 $scope.addQuotation.industry = json['data'][0].applicanIndustry;
						 $scope.$apply();
			});*/
	   }
	   $scope.getAppCodeIndustry = function()
	   {
		   $scope.industryData = [];
		   $.getJSON("getAllIndustrynames.do",function(json)
			{
					
							//alert(JSON.stringify(json['data']));
							 $scope.industryData= json['data'];
							 $scope.$apply();
					
			});
	   }
	   $scope.onSelectApplication = function(getAppCode)
	   {
		   getAppCode = getAppCode.trim();
           //$scope.applicationIdustry = [];
		   
		   $.getJSON("getApplicationCodes.do",{getAppCode:getAppCode},function(json)
			{
                          // alert(JSON.stringify(json['data'][0].application));
						   $scope.addQuotation.application = json['data'][0].application;
						    $scope.$apply();
			});
	   }
	   $scope.loadTaxNames = function()
	   {
		   $scope.taxNameData = [{taxName:'VAT'},{taxName:'GST'}];
	   }
	
	$scope.loadDefaultTermCon = function()
	{
		
		//$scope.termConditionData = [{id:'1',modelTerm:'Delivery',modelCon:'14 weeks Ex-Singapore, Subject to prior sales.'},{id:'2',modelTerm:'Price',modelCon:'Ex-Works Singapore.'},{id:'3',modelTerm:'Payment Term',modelCon:'30 Days or L/C at sight for value greater than $25,000 dollar.'},{id:'4',modelTerm:'Currency',modelCon:'Singapore Dollars'},{id:'5',modelTerm:'Validity',modelCon:'30 Days'}];
		$.getJSON("getingTerms.do",function(json)
			{
                          //alert(JSON.stringify(json['data']));
						   $scope.termConditionData = json['data'];
						    $scope.$apply();
			});
	}
	
	$scope.getCondition = function(modelterm,index)
	{
		
		var index = this.$index;
		 $.getJSON("getingCondition.do",{modelterm:modelterm},function(json)
			{
                          //alert(JSON.stringify(json['data'][0].modelCon));
						   $scope.termData[index].modelCon = json['data'][0].modelCon;
						    $scope.$apply();
			});
	}
	$scope.getQuoteNo  = function(qtype,coun_yerCode,runNo,custN,custS,version)
	{
		
		var  Qtype,Cou_YerCode,runningNo,Cust_N,Cust_S,Ver;
		 Qtype = qtype;
		 Cou_YerCode = coun_yerCode;
		 runningNo = runNo;
		 Cust_N = custN;
		 Cust_S = custS;
		 Ver = version;
		//if(custN==undefined){Cust_N=""}else{Cust_N=custN}
		//if(custS==undefined){Cust_S=""}else{Cust_S=custS}
		
		if((Cust_N==null || Cust_N=="") && (Cust_S==null || Cust_S==""))
		{
			//alert("null");
			$scope.addQuotation.qtnNo = Qtype+"-"+Cou_YerCode+"-"+runningNo+"-"+Ver;
		}
		else if(Cust_N!=""  && (Cust_S==null || Cust_S==""))
		{
			/*alert("N not null");
			alert(custN + " N ");
		    alert(custS + " S ");*/
			$scope.addQuotation.qtnNo = Qtype+"-"+Cou_YerCode+"-"+runningNo+"-"+Cust_N+"-"+Ver;
		}
		else if((Cust_N==null || Cust_N=="")  && Cust_S!=null)
		{
			/*alert("S not null");
			alert(custN + " N ");
		    alert(custS + " S ");*/
			$scope.addQuotation.qtnNo = Qtype+"-"+Cou_YerCode+"-"+runningNo+"-"+Cust_S+"-"+Ver;
		}
		else if(Cust_N!=null  && Cust_S!=null)
		{
			/*alert("NS not null");
			alert(custN + " N ");
		    alert(custS + " S ");*/
			$scope.addQuotation.qtnNo = Qtype+"-"+Cou_YerCode+"-"+runningNo+"-"+Cust_N+"/"+Cust_S+"-"+Ver;
		}
		
		
	}
	
	
	   
var qtnTypeGridData = [];
var termCondition = [];
var qtnFormData = new FormData();

//================Full Unit Form Submit Itemized(No)========================//
/*       $scope.fullUnitFormItemizedSubmit = function(addQuotation,form)
	   {
		   //alert("Item No");
		   //alert(JSON.stringify(addQuotation));
		   qtnTypeGridData = [];
		   $scope.fullUnitItemizedData.forEach(function(fullUnitItems)
			{ 
							//alert(JSON.stringify(fullUnitItems)); 
				qtnTypeGridData.push(angular.toJson(fullUnitItems));	 
			});
			termCondition = [];
		   $scope.termData.forEach(function(term)
			{ 
								//alert(JSON.stringify(fullUnitItems)); 
				termCondition.push(angular.toJson(term));	 
			});
			
		  
		  qtnFormData.append("formData",angular.toJson(addQuotation));
		  qtnFormData.append("gridData",angular.toJson(qtnTypeGridData));
		  qtnFormData.append("termConData",angular.toJson(termCondition));
		  //alert(JSON.stringify(qtnFormData));
		               $.ajax({
						       url         : "/SCA-360/quatationformsubmitforFullunit.do",
						       data        : qtnFormData,
						       contentType : false,
						       processData : false,
						       type        : 'POST'
						   }).success(function(data, status){
							   
								if(data==true)
									{
										
										swal( 'Saved Successfully');
										$indexFullUnitItem=1;
							            $scope.fullUnitItemizedData=[{'id':$indexFullUnitItem}];
										$indexTerm=1;
    									$scope.termData=[{'id':$indexTerm}];
										$scope.addQuotation = angular.copy($scope.master);
										$scope.loadQuotationSeqNum();
										$scope.loadSysDate();
										$scope.addQuotation = ({'qtnType':'0','qtnProgress':'0','item':'1','showCost':'0'});
										form.$setPristine(true); 
										$scope.$apply();
										
										
										
										
									}
								else
									{
									   swal("Oops sorry...", "Something went wrong!", "error");
									}
							    
							   
				        	   
				           }); 
		   
	   }*/
	   
//================Full Unit Form Submit Itemized(Yes)========================//
$scope.fullUnitFormSubmit = function(addQuotation,form)
	   {
		    //alert("Item Yes");
		   //alert(JSON.stringify(addQuotation));
		 if($scope.quotationForm.$valid)
		 {
			  qtnTypeGridData = [];
		   $scope.qtnFullUnitData.forEach(function(fullUnit)
			{ 
								//alert(JSON.stringify(fullUnit)); 
				qtnTypeGridData.push(angular.toJson(fullUnit));	 
			});
			termCondition = [];
		   $scope.termData.forEach(function(term)
			{ 
								//alert(JSON.stringify(fullUnitItems)); 
				termCondition.push(angular.toJson(term));	 
			});
			
		   //alert(JSON.stringify(qtnTypeGridData)); 
		  qtnFormData.append("formData",angular.toJson(addQuotation));
		  qtnFormData.append("gridData",angular.toJson(qtnTypeGridData));
		  qtnFormData.append("termConData",angular.toJson(termCondition));
		  //alert(JSON.stringify(qtnFormData));
		               $.ajax({
						       url         : "/SCA-360/quatationformsubmitforFullunit.do",
						       data        : qtnFormData,
						       contentType : false,
						       processData : false,
						       type        : 'POST'
						   }).success(function(data, status){
							   
								if(data==true)
									{
									
										/*$.getJSON("getSavedQuatationData.do",function(json)
										{
												
											//alert(JSON.stringify(json));
											//alert(JSON.stringify(json['quatationform'][0].grandTotal));
											//alert(JSON.stringify(json['quatationform'][0].taxPercent));
											$scope.subTotal = json['quatationform'][0].subTotal;
											$scope.grandTotal = json['quatationform'][0].grandTotal;
											$scope.taxPercent = json['quatationform'][0].taxPercent;
											$scope.tax = json['quatationform'][0].tax;
											$scope.addedTax = json['quatationform'][0].addedTax;
											$scope.remarks = json['quatationform'][0].remarks;
											$scope.salesManName = json['quatationform'][0].salesMan;
											$scope.salesmanPhNo = json['quatationform'][0].salesmanPhNo;
											$scope.createdBy = json['quatationform'][0].createdBy;
											$scope.subject = json['quatationform'][0].subject;
											//$scope.addQuotation.remarks = json['quatationform'][0].remarks;
											//alert(JSON.stringify(json['quatationform'][0].remarks));
											$scope.qtnTableFormData = json['quatationform'];
											$scope.qtnFormGridData = json['quatationgrid'];
											$scope.qtnFormTermData = json['quatationtermsgrid'];
											$scope.$apply();
										});*/
										swal('Saved Successfully');
										qtnFormData = new FormData();
										$indexFullUnit=1;
							            $scope.qtnFullUnitData=[{'id':$indexFullUnit}];
										$indexTerm=1;
    									$scope.termData=[{'id':$indexTerm}];
										$scope.addQuotation = angular.copy($scope.master);
 									    $scope.loadQuotationSeqNum();
										$scope.loadSysDate();
										$scope.addQuotation = ({'qtnType':'0','qtnProgress':'0','showCost':'0','modifiedstatus':'0','currency':'USD','tax':'VAT','country':'AUSTRALIA','taxPercent':'10','paymentTerm':'2','salesTerm':'CIF','estPercent':'10','assigned':'Sales'});
										form.$setPristine(true); 
										$rootScope.loadQuotation = "";
										$scope.$apply();
									}
								else
									{
									   swal("Oops sorry...", "Something went wrong!", "error");
									}
							    
							   
				        	   
				           }); 
		 }
		 else
		 {
			 var field = null, firstError = null;
						for (field in form) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form[field].$valid) 
								{
									firstError = form[field].$name;
								}
								if (form[field].$pristine) 
								{
									form[field].$dirty = true;
								}
							}	
						}
		 }
		  
		   
	   }
	   $scope.resetFullUnit = function(form)
	   {
		   qtnFormData = new FormData();
		   $indexFullUnit=1;
		   $scope.qtnFullUnitData=[{'id':$indexFullUnit}];
		   $indexTerm=1;
    	   $scope.termData=[{'id':$indexTerm}];
		   $scope.addQuotation = angular.copy($scope.master);
 		   $scope.loadQuotationSeqNum();
		   $scope.loadSysDate();
		   $scope.addQuotation = ({'qtnType':'0','qtnProgress':'0','showCost':'0','modifiedstatus':'0','currency':'USD','tax':'VAT','country':'AUSTRALIA','taxPercent':'10','paymentTerm':'2','salesTerm':'CIF','estPercent':'10','assigned':'Sales'});
		   form.$setPristine(true); 
		   $scope.$apply();
	   }
	   
//================Project Form Submit Itemized(No)========================//
/*       $scope.projectFormItemizedSubmit = function(addQuotation,form)
	   {
		   //alert("No");
		   qtnTypeGridData = [];
		   $scope.projectItemizedData.forEach(function(projectItem)
			{ 
								//alert(JSON.stringify(projectItem)); 
				qtnTypeGridData.push(angular.toJson(projectItem));	 
			});
		   termCondition = [];
		   $scope.termData.forEach(function(term)
			{ 
								//alert(JSON.stringify(fullUnitItems)); 
				termCondition.push(angular.toJson(term));	 
			});
		  qtnFormData.append("formData",angular.toJson(addQuotation));
		  qtnFormData.append("gridData",angular.toJson(qtnTypeGridData));
		  qtnFormData.append("termConData",angular.toJson(termCondition));
		  //alert(JSON.stringify(qtnFormData));
		              $.ajax({
						       url         : "/SCA-360/quatationformsubmitforproject.do",
						       data        : qtnFormData,
						       contentType : false,
						       processData : false,
						       type        : 'POST'
						   }).success(function(data, status){
							   //alert(data);
								if(data==true)
									{
										swal( 'Saved Successfully');
										$indexProjectItem=1;
							            $scope.projectItemizedData=[{'id':$indexProjectItem}];
										$indexTerm=1;
    									$scope.termData=[{'id':$indexTerm}];
										$scope.addQuotation = angular.copy($scope.master);
										$scope.loadQuotationSeqNum();
										$scope.loadSysDate();
										$scope.addQuotation = ({'qtnType':'0','qtnProgress':'0','showCost':'0'});
										form.$setPristine(true); 
										$scope.$apply();
										
										
									}
								else
									{
									   swal("Oops sorry...", "Something went wrong!", "error");
									}
							    
							   
				        	   
				           });
	   }*/
	   
//================Project Form Submit Itemized(Yes)========================//
       $scope.projectFormSubmit = function(addQuotation,form)
	   {
		   //alert("Yes");
		  if($scope.quotationForm.$valid)
		  {
			   qtnTypeGridData = [];
			   $scope.projectUnitData.forEach(function(projectUnit)
				{ 
								//alert(JSON.stringify(projectUnit)); 
					qtnTypeGridData.push(angular.toJson(projectUnit));	 
				});
			   termCondition = [];
			   $scope.termData.forEach(function(term)
				{ 
									//alert(JSON.stringify(fullUnitItems)); 
					termCondition.push(angular.toJson(term));	 
				});
			  qtnFormData.append("formData",angular.toJson(addQuotation));
			  qtnFormData.append("gridData",angular.toJson(qtnTypeGridData));
			  qtnFormData.append("termConData",angular.toJson(termCondition));
			  //alert(JSON.stringify(qtnFormData));
						  $.ajax({
								   url         : "/SCA-360/quatationformsubmitforFullunit.do",
								   data        : qtnFormData,
								   contentType : false,
								   processData : false,
								   type        : 'POST'
							   }).success(function(data, status){
								   //alert(data);
									if(data==true)
										{
											swal( 'Saved Successfully');
											qtnFormData = new FormData();
											$indexProject=1;
											$scope.projectUnitData=[{'id':$indexProject}];
											$indexTerm=1;
											$scope.termData=[{'id':$indexTerm}];
											$scope.addQuotation = angular.copy($scope.master);
											$scope.loadQuotationSeqNum();
											$scope.loadSysDate();
											$scope.addQuotation = ({'qtnType':'1','qtnProgress':'0','showCost':'0','modifiedstatus':'0','currency':'USD','tax':'VAT','country':'AUSTRALIA','taxPercent':'10','paymentTerm':'2','salesTerm':'CIF','estPercent':'10','assigned':'Sales'});
											form.$setPristine(true); 
											$rootScope.loadQuotation = "";
											$scope.$apply();
											
											
										}
									else
										{
										   swal("Oops sorry...", "Something went wrong!", "error");
										}
									
								   
								   
							   });
		 }
		 else
		 {
			 var field = null, firstError = null;
						for (field in form) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form[field].$valid) 
								{
									firstError = form[field].$name;
								}
								if (form[field].$pristine) 
								{
									form[field].$dirty = true;
								}
							}	
						}
		 }
	   }	   
	   
	   $scope.resetProject = function(form)
	   {
		   qtnFormData = new FormData();
		   $indexProject=1;
		   $scope.projectUnitData=[{'id':$indexProject}];
		   $indexTerm=1;
		   $scope.termData=[{'id':$indexTerm}];
		   $scope.addQuotation = angular.copy($scope.master);
		   $scope.loadQuotationSeqNum();
		   $scope.loadSysDate();
		   $scope.addQuotation = ({'qtnType':'1','qtnProgress':'0','showCost':'0','modifiedstatus':'0','currency':'USD','tax':'VAT','country':'AUSTRALIA','taxPercent':'10','paymentTerm':'2','salesTerm':'CIF','estPercent':'10','assigned':'Sales'});
		   form.$setPristine(true); 
		   $scope.$apply();
	   }
//================Spare Part Form Submit Itemized(No)========================//
 /*      $scope.sparePartFormItemizedSubmit = function(addQuotation,form)
	   {
		   //alert("No");
		   qtnTypeGridData = [];
		   $scope.spareItemizedData.forEach(function(spareItem)
			{ 
								//alert(JSON.stringify(spareItem)); 
				qtnTypeGridData.push(angular.toJson(spareItem));	 
			});
		   termCondition = [];
		   $scope.termData.forEach(function(term)
			{ 
								//alert(JSON.stringify(fullUnitItems)); 
				termCondition.push(angular.toJson(term));	 
			});
		  qtnFormData.append("formData",angular.toJson(addQuotation));
		  qtnFormData.append("gridData",angular.toJson(qtnTypeGridData));
		  qtnFormData.append("termConData",angular.toJson(termCondition));
		  //alert(JSON.stringify(qtnFormData));
		                 $.ajax({
						       url         : "/SCA-360/quatationformsubmitforspareParts.do",
						       data        : qtnFormData,
						       contentType : false,
						       processData : false,
						       type        : 'POST'
						   }).success(function(data, status){
							   //alert(data);
								if(data==true)
									{
										swal( 'Saved Successfully');
										$indexSpareItem=1;
							            $scope.spareItemizedData=[{'id':$indexSpareItem}];
										$indexTerm=1;
    									$scope.termData=[{'id':$indexTerm}];
										$scope.addQuotation = angular.copy($scope.master);
										$scope.loadQuotationSeqNum();
										$scope.loadSysDate();
										$scope.addQuotation = ({'qtnType':'0','qtnProgress':'0','showCost':'0'});
										form.$setPristine(true); 
										$scope.$apply();
										
										
									}
								else
									{
									   swal("Oops sorry...", "Something went wrong!", "error");
									}
							    
							   
				        	   
				           });
	   }*/

//================Spare Part Form Submit Itemized(Yes)========================//
       $scope.sparePartFormSubmit = function(addQuotation,form)
	   {
		   //alert("Yes");
		   if($scope.quotationForm.$valid)
		   { 
			   qtnTypeGridData = [];
			   $scope.sparePartData.forEach(function(sparePart)
				{ 
									//alert(JSON.stringify(sparePart)); 
					qtnTypeGridData.push(angular.toJson(sparePart));	 
				});
			   termCondition = [];
			   $scope.termData.forEach(function(term)
				{ 
									//alert(JSON.stringify(fullUnitItems)); 
					termCondition.push(angular.toJson(term));	 
				});
			  qtnFormData.append("formData",angular.toJson(addQuotation));
			  qtnFormData.append("gridData",angular.toJson(qtnTypeGridData));
			  qtnFormData.append("termConData",angular.toJson(termCondition));
			  //alert(JSON.stringify(qtnFormData));
							 $.ajax({
								   url         : "/SCA-360/quatationformsubmitforFullunit.do",
								   data        : qtnFormData,
								   contentType : false,
								   processData : false,
								   type        : 'POST'
							   }).success(function(data, status){
								   //alert(data);
									if(data==true)
										{
											/*$.getJSON("getSavedQuatationData.do",function(json)
											{
													
												//alert(JSON.stringify(json));
												//alert(JSON.stringify(json['quatationform'][0].grandTotal));
												//alert(JSON.stringify(json['quatationform'][0].taxPercent));
												$scope.subTotal = json['quatationform'][0].subTotal;
												$scope.grandTotal = json['quatationform'][0].grandTotal;
												$scope.taxPercent = json['quatationform'][0].taxPercent;
												$scope.tax = json['quatationform'][0].tax;
												$scope.addedTax = json['quatationform'][0].addedTax;
												$scope.sparePartremarks = json['quatationform'][0].remarks;
												$scope.salesManName = json['quatationform'][0].salesMan;
												$scope.salesmanPhNo = json['quatationform'][0].salesmanPhNo;
												$scope.createdBy = json['quatationform'][0].createdBy;
												$scope.subject = json['quatationform'][0].subject;
												//$scope.addQuotation.remarks = json['quatationform'][0].remarks;
												//alert(JSON.stringify(json['quatationform'][0].remarks));
												$scope.qtnTableSparePartData = json['quatationform'];
												$scope.qtnFormGridSparePartData = json['quatationgrid'];
												$scope.qtnFormTermSparePartData = json['quatationtermsgrid'];
												$scope.$apply();
											});*/
											swal( 'Saved Successfully');
											qtnFormData = new FormData();
											$indexSpare=1;
											$scope.sparePartData=[{'id':$indexSpare}];
											$indexTerm=1;
											$scope.termData=[{'id':$indexTerm}];
											$scope.addQuotation = angular.copy($scope.master);
											$scope.loadQuotationSeqNum();
											$scope.loadSysDate();
											$scope.addQuotation = ({'qtnType':'2','qtnProgress':'0','showCost':'0','modifiedstatus':'0','currency':'USD','tax':'VAT','country':'AUSTRALIA','taxPercent':'10','paymentTerm':'2','salesTerm':'CIF','estPercent':'10','assigned':'Sales'});
											form.$setPristine(true);
											$rootScope.loadQuotation = ""; 
											$scope.$apply();
											
											
										}
									else
										{
										   swal("Oops sorry...", "Something went wrong!", "error");
										}
									
								   
								   
							   });
		 }
		 else
		 {
			 var field = null, firstError = null;
						for (field in form) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form[field].$valid) 
								{
									firstError = form[field].$name;
								}
								if (form[field].$pristine) 
								{
									form[field].$dirty = true;
								}
							}	
						}
		 }
	   }
	   
	   $scope.resetSparePart = function(form)
	   {
		    qtnFormData = new FormData();
			$indexSpare=1;
			$scope.sparePartData=[{'id':$indexSpare}];
			$indexTerm=1;
			$scope.termData=[{'id':$indexTerm}];
			$scope.addQuotation = angular.copy($scope.master);
			$scope.loadQuotationSeqNum();
			$scope.loadSysDate();
			$scope.addQuotation = ({'qtnType':'2','qtnProgress':'0','showCost':'0','modifiedstatus':'0','currency':'USD','tax':'VAT','country':'AUSTRALIA','taxPercent':'10','paymentTerm':'2','salesTerm':'CIF','estPercent':'10','assigned':'Sales'});
			form.$setPristine(true); 
			$scope.$apply();
	   }
//================Service Part Form Submit Itemized(No)========================//
  /*     $scope.servicePartFormItemizedSubmit = function(addQuotation,form)
	   {
		   //alert("No");
		   qtnTypeGridData = [];
		   $scope.serviceItemizedData.forEach(function(serviceItem)
			{ 
								//alert(JSON.stringify(serviceItem)); 
				qtnTypeGridData.push(angular.toJson(serviceItem));	 
			});
		   termCondition = [];
		   $scope.termData.forEach(function(term)
			{ 
								//alert(JSON.stringify(fullUnitItems)); 
				termCondition.push(angular.toJson(term));	 
			});
		  qtnFormData.append("formData",angular.toJson(addQuotation));
		  qtnFormData.append("gridData",angular.toJson(qtnTypeGridData));
		  qtnFormData.append("termConData",angular.toJson(termCondition));
		  //alert(JSON.stringify(qtnFormData));
		                 $.ajax({
						       url         : "/SCA-360/quatationformsubmitforwithoutspareParts.do",
						       data        : qtnFormData,
						       contentType : false,
						       processData : false,
						       type        : 'POST'
						   }).success(function(data, status){
							   //alert(data);
								if(data==true)
									{
										swal( 'Saved Successfully');
										$indexServiceItem=1;
							            $scope.serviceItemizedData=[{'id':$indexServiceItem}];
										$indexTerm=1;
    									$scope.termData=[{'id':$indexTerm}];
										$scope.addQuotation = angular.copy($scope.master);
										$scope.loadQuotationSeqNum();
										$scope.loadSysDate();
										$scope.addQuotation = ({'qtnType':'0','qtnProgress':'0','showCost':'0'});
										form.$setPristine(true); 
										$scope.$apply();
										
										
									}
								else
									{
									   swal("Oops sorry...", "Something went wrong!", "error");
									}
							    
							   
				        	   
				           });
	   }*/

//================Service Part Form Submit Itemized(Yes)========================//
       $scope.servicePartFormSubmit = function(addQuotation,form)
	   {
		   //alert("Yes");
		  if($scope.quotationForm.$valid)
		  { 
			   qtnTypeGridData = [];
			   $scope.servicPartData.forEach(function(servicePart)
				{ 
									//alert(JSON.stringify(servicePart)); 
					qtnTypeGridData.push(angular.toJson(servicePart));	 
				});
			   termCondition = [];
			   $scope.termData.forEach(function(term)
				{ 
									//alert(JSON.stringify(fullUnitItems)); 
					termCondition.push(angular.toJson(term));	 
				});
			  qtnFormData.append("formData",angular.toJson(addQuotation));
			  qtnFormData.append("gridData",angular.toJson(qtnTypeGridData));
			  qtnFormData.append("termConData",angular.toJson(termCondition));
			  //alert(JSON.stringify(qtnFormData));
							 $.ajax({
								   url         : "/SCA-360/quatationformsubmitforFullunit.do",
								   data        : qtnFormData,
								   contentType : false,
								   processData : false,
								   type        : 'POST'
							   }).success(function(data, status){
								   //alert(data);
									if(data==true)
										{
											/*$.getJSON("getSavedQuatationData.do",function(json)
											{
													
												alert(JSON.stringify(json));
												alert(JSON.stringify(json['quatationform'][0].grandTotal));
												alert(JSON.stringify(json['quatationform'][0].taxPercent));
												$scope.subTotal = json['quatationform'][0].subTotal;
												$scope.grandTotal = json['quatationform'][0].grandTotal;
												$scope.taxPercent = json['quatationform'][0].taxPercent;
												$scope.tax = json['quatationform'][0].tax;
												$scope.addedTax = json['quatationform'][0].addedTax;
												$scope.remarks = json['quatationform'][0].remarks;
												$scope.salesManName = json['quatationform'][0].salesMan;
												$scope.salesmanPhNo = json['quatationform'][0].salesmanPhNo;
												$scope.createdBy = json['quatationform'][0].createdBy;
												$scope.subject = json['quatationform'][0].subject;
												$scope.addQuotation.remarks = json['quatationform'][0].remarks;
												alert(JSON.stringify(json['quatationform'][0].remarks));
												$scope.qtnTableSparePartData = json['quatationform'];
												$scope.qtnFormGridSparePartData = json['quatationgrid'];
												$scope.qtnFormTermSparePartData = json['quatationtermsgrid'];
												$scope.$apply();
											});*/
											swal( 'Saved Successfully');
											qtnFormData = new FormData();
											$indexService=1;
											$scope.servicPartData=[{'id':$indexService}];
											$indexTerm=1;
											$scope.termData=[{'id':$indexTerm}];
											$scope.addQuotation = angular.copy($scope.master);
											$scope.loadQuotationSeqNum();
											$scope.loadSysDate();
											$scope.addQuotation = ({'qtnType':'3','qtnProgress':'0','showCost':'0','modifiedstatus':'0','currency':'USD','tax':'VAT','country':'AUSTRALIA','taxPercent':'10','paymentTerm':'2','salesTerm':'CIF','estPercent':'10','assigned':'Sales'});
											form.$setPristine(true); 
											$rootScope.loadQuotation = "";
											$scope.$apply();
											
											
										}
									else
										{
										   swal("Oops sorry...", "Something went wrong!", "error");
										}
									
								   
								   
							   });
		 }
		 else
		 {
			 var field = null, firstError = null;
						for (field in form) 
						{
							if (field[0] != '$') 
							{
								if (firstError === null && !form[field].$valid) 
								{
									firstError = form[field].$name;
								}
								if (form[field].$pristine) 
								{
									form[field].$dirty = true;
								}
							}	
						}
		 }
	   }
	   
	   $scope.resetService = function(form)
	   {
		    qtnFormData = new FormData();
			$indexService=1;
			$scope.servicPartData=[{'id':$indexService}];
			$indexTerm=1;
			$scope.termData=[{'id':$indexTerm}];
			$scope.addQuotation = angular.copy($scope.master);
			$scope.loadQuotationSeqNum();
			$scope.loadSysDate();
			$scope.addQuotation = ({'qtnType':'3','qtnProgress':'0','showCost':'0','modifiedstatus':'0','currency':'USD','tax':'VAT','country':'AUSTRALIA','taxPercent':'10','paymentTerm':'2','salesTerm':'CIF','estPercent':'10','assigned':'Sales'});
			form.$setPristine(true); 
			$scope.$apply();
	   }
	   
	   $scope.loadPrintData = function()
	   {
		   //  alert(5654);
		   //$scope.itemData = [{id:'1',motor:'CVVBM40A-4235-11',snum:'(S/N. C11163367)',data:[{id:'1',partnum:'G31965G',partdesp:'Adapter for 30 C-ID',qty:'1',uprice:'86',tprice:'86'},{id:'2',partnum:'G46729G',partdesp:'Indicator for 30 L-Type',qty:'1',uprice:'50',tprice:'50'}]},{id:'2',motor:'CVVBM15A-4185-11',snum:' (S/N. C1113532)',data:[{id:'1',partnum:'DH0581G',partdesp:'10FV-218 High Speed Shaft',qty:'1',uprice:'86',tprice:'86'},{id:'2',partnum:'DP541WW-02',partdesp:'Fan F-132 High Temp',qty:'1',uprice:'50',tprice:'50'}]}];
            
	   }
	   
	   $scope.printGeneratePermit = function()
	   {
		   
		    var prtContent = document.getElementById("qtnPrint");
			var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=500,toolbar=0,scrollbars=0,status=0');
			WinPrint.document.write(prtContent.innerHTML);
			WinPrint.document.close();
			WinPrint.focus();
			WinPrint.print();
			WinPrint.close();
	   }
	   
	   
	  /* $scope.getTotalPrice = function(qty,untPri,index)
	   {
		   //alert(qty);
		   //alert(untPri);
		   var index = this.$index;
		   $scope.fullUnitData[index].totalPrice = qty*untPri;
		   
	   }*/
	//===== Total Price Calculations=====//
	   $scope.getTotalPriceItemNo = function(qty,untPri,index)
	   {
		   //alert(qty);
		   //alert(untPri);
		   var index = this.$index;
		   if(isNaN(qty)){var qnty = 0;}else{var qnty = qty;}
		   if(isNaN(untPri)){var untPrice = 0;}else{var untPrice = untPri;}
		   var tPrice = qnty*untPrice;
		   $scope.qtnFullUnitData[index].totalPrice = tPrice.toFixed(2);
		   $scope.$apply();
	   }
	   $scope.projectTotalPriceItemNo = function(qty,untPri,index)
	   {
		   //alert(qty);
		   //alert(untPri);
		   var index = this.$index;
		   if(isNaN(qty)){var qnty = 0;}else{var qnty = qty;}
		   if(isNaN(untPri)){var untPrice = 0;}else{var untPrice = untPri;}
		   var tPrice = qnty*untPrice;
		   $scope.projectUnitData[index].totalPrice = tPrice.toFixed(2);
		   $scope.$apply();
	   }
	   $scope.sparePartTotalPriceItemYes = function(qty,untPri,index)
	   {
		   //alert(qty);
		   //alert(untPri);
		   var index = this.$index;
		   if(isNaN(qty)){var qnty = 0;}else{var qnty = qty;}
		   if(isNaN(untPri)){var untPrice = 0;}else{var untPrice = untPri;}
		   var tPrice = qnty*untPrice;
		   $scope.sparePartData[index].totalPrice = tPrice.toFixed(2);
		   $scope.$apply();
	   }
	   $scope.serviceTotalPriceItemYes = function(qty,untPri,index)
	   {
		   //alert(qty);
		   //alert(untPri);
		   var index = this.$index;
		   if(isNaN(qty)){var qnty = 0;}else{var qnty = qty;}
		   if(isNaN(untPri)){var untPrice = 0;}else{var untPrice = untPri;}
		   var tPrice = qnty*untPrice;
		   $scope.servicPartData[index].totalPrice = tPrice.toFixed(2);
		   $scope.$apply();
	   }
	 //======Sub Total Calculations=====//  
	   $scope.getTotal = function(index)
	   {
		 
		   var index = this.$index;
		   var gtotal;
		   var gndtotal = 0;
		   for(var i = 0; i < $scope.qtnFullUnitData.length; i++)
		   {
			 //alert($scope.fullUnitItemizedData[i].totalPrice);
			gtotal = parseFloat($scope.qtnFullUnitData[i].totalPrice);
			gndtotal += gtotal;
			$scope.addQuotation.subTotal = gndtotal.toFixed(2);
			 //alert(gndtotal);
			   $scope.$apply();
		   }
		   
	   }
	   $scope.getProjectTotal = function(index)
	   {
		 
		   var index = this.$index;
		   var gtotal;
		   var gndtotal = 0;
		   for(var i = 0; i < $scope.projectUnitData.length; i++)
		   {
			 //alert($scope.fullUnitItemizedData[i].totalPrice);
			gtotal = parseFloat($scope.projectUnitData[i].totalPrice);
			gndtotal += gtotal;
			$scope.addQuotation.subTotal = gndtotal.toFixed(2);
			 //alert(gndtotal);
			   $scope.$apply();
		   }
		   
	   }
	   $scope.subTotalSparePartItemYes = function(index)
	   {
		 
		   var index = this.$index;
		   var gtotal;
		   var gndtotal = 0;
		   for(var i = 0; i < $scope.sparePartData.length; i++)
		   {
			 //alert($scope.fullUnitItemizedData[i].totalPrice);
			gtotal = parseFloat($scope.sparePartData[i].totalPrice);
			gndtotal += gtotal;
			$scope.addQuotation.subTotal = gndtotal.toFixed(2);
			 //alert(gndtotal);
			   $scope.$apply();
		   }
		   
	   }
	   $scope.subTotalServiceItemYes = function(index)
	   {
		 
		   var index = this.$index;
		   var gtotal;
		   var gndtotal = 0;
		   for(var i = 0; i < $scope.servicPartData.length; i++)
		   {
			 //alert($scope.fullUnitItemizedData[i].totalPrice);
			gtotal = parseFloat($scope.servicPartData[i].totalPrice);
			gndtotal += gtotal;
			$scope.addQuotation.subTotal = gndtotal.toFixed(2);
			 //alert(gndtotal);
			   $scope.$apply();
		   }
		   
	   }
	 //===Add Tax and Sub Total (Grand Total)=====//
	   $scope.getGrandTotal = function(subTt,taxPer)
	   {
		   //alert(subTt);
		    //alert(taxPer);
			if(isNaN(subTt)){var subtt2 = 0;}else{var subtt2 = subTt;}
			if(isNaN(taxPer)){var txper = 0;}else{var txper = taxPer;}
			var gdTotal = (subtt2*txper)/100;
			var gdTotal2 = parseFloat(subtt2) + parseFloat(gdTotal);
			//var tofixgdTotal2 = gdTotal2.toFixed(2);
			$scope.addQuotation.addedTax = parseFloat(gdTotal).toFixed(2);
			$scope.addQuotation.grandTotal = gdTotal2.toFixed(2);
			$scope.$apply();
		    //alert(gdTotal2.toFixed(2));
	   }
	  /* $scope.sparePartGrandTotalItemYes = function(subTt,taxPer)
	   {
		   //alert(subTt);
		    //alert(taxPer);
			if(isNaN(subTt)){var subtt2 = 0;}else{var subtt2 = subTt;}
			if(isNaN(taxPer)){var txper = 0;}else{var txper = taxPer;}
			var gdTotal = (subtt2*txper)/100;
			var gdTotal2 = parseFloat(subtt2) + parseFloat(gdTotal);
			//var tofixgdTotal2 = gdTotal2.toFixed(2);
			$scope.addQuotation.addedTax = parseFloat(gdTotal);
			$scope.addQuotation.grandTotal = gdTotal2.toFixed(2);
			$scope.$apply();
		    //alert(gdTotal2.toFixed(2));
	   }*/
	 //=====Profit=====//
	   $scope.getProfit = function(index)
	   {
		   /*alert(uprice);
		   alert(cprice);*/
		   var index = this.$index;
		   var unittotal,costprice,quantity;
		   var unittotal2 = 0;
		   var costprice2 = 0;
		   var quantity2 = 0;
		   for(var i = 0; i < $scope.qtnFullUnitData.length; i++)
		   {
			 //alert($scope.fullUnitData[i].totalPrice);
			unittotal = parseFloat($scope.qtnFullUnitData[i].unitPrice);
			costprice = parseFloat($scope.qtnFullUnitData[i].costPrice);
			quantity = parseFloat($scope.qtnFullUnitData[i].qnty);
			unittotal2 += unittotal;
			costprice2 += costprice;
			quantity2 += quantity;
			//$scope.addQuotation.subTotal = gndtotal.toFixed(2);
			// alert(unittotal2);
			 // alert(costprice2);
			  // alert(quantity2);
			  if(isNaN(costprice2)){var cPrice = 0;}else{var cPrice = costprice2;}
			   var resProfit = ((unittotal2-cPrice)/unittotal2)*100*quantity2;
			   if(isNaN(resProfit)){var resProfit2 = 0;}else{var resProfit2 = resProfit;}
			   $scope.addQuotation.profit = resProfit2.toFixed(2);
			  // alert(resProfit);
			   $scope.$apply();
		   }
	   }
	    $scope.getProjectProfit = function(index)
	   {
		   /*alert(uprice);
		   alert(cprice);*/
		   var index = this.$index;
		   var unittotal,costprice,quantity;
		   var unittotal2 = 0;
		   var costprice2 = 0;
		   var quantity2 = 0;
		   for(var i = 0; i < $scope.projectUnitData.length; i++)
		   {
			 //alert($scope.fullUnitData[i].totalPrice);
			unittotal = parseFloat($scope.projectUnitData[i].unitPrice);
			costprice = parseFloat($scope.projectUnitData[i].costPrice);
			quantity = parseFloat($scope.projectUnitData[i].qnty);
			unittotal2 += unittotal;
			costprice2 += costprice;
			quantity2 += quantity;
			//$scope.addQuotation.subTotal = gndtotal.toFixed(2);
			// alert(unittotal2);
			 // alert(costprice2);
			  // alert(quantity2);
			  if(isNaN(costprice2)){var cPrice = 0;}else{var cPrice = costprice2;}
			   var resProfit = ((unittotal2-cPrice)/unittotal2)*100*quantity2;
			   if(isNaN(resProfit)){var resProfit2 = 0;}else{var resProfit2 = resProfit;}
			   $scope.addQuotation.profit = resProfit2.toFixed(2);
			  // alert(resProfit);
			   $scope.$apply();
		   }
	   }
	   $scope.sparePartProfitItemYes = function(index)
	   {
		  
		   var index = this.$index;
		   var unittotal,costprice,quantity;
		   var unittotal2 = 0;
		   var costprice2 = 0;
		   var quantity2 = 0;
		   for(var j = 0; j < $scope.sparePartData.length; j++)
		   {
			 //alert($scope.fullUnitItemizedData[i].totalPrice);
			unittotal = parseFloat($scope.sparePartData[j].unitPrice);
			costprice = parseFloat($scope.sparePartData[j].costPrice);
			quantity = parseFloat($scope.sparePartData[j].qnty);
			unittotal2 += unittotal;
			costprice2 += costprice;
			quantity2 += quantity;
			//$scope.addQuotation.subTotal = gndtotal.toFixed(2);
			// alert(unittotal2);
			 // alert(costprice2);
			  // alert(quantity2);
			  if(isNaN(costprice2)){var cPrice = 0;}else{var cPrice = costprice2;}
			   var resProfit = ((unittotal2-cPrice)/unittotal2)*100*quantity2;
			   if(isNaN(resProfit)){var resProfit2 = 0;}else{var resProfit2 = resProfit;}
			   $scope.addQuotation.profit = resProfit2.toFixed(2);
			  // alert(resProfit);
			   $scope.$apply();
		   }
	   }
	   $scope.serviceProfitItemYes = function(index)
	   {
		  
		   var index = this.$index;
		   var unittotal,costprice,quantity;
		   var unittotal2 = 0;
		   var costprice2 = 0;
		   var quantity2 = 0;
		   for(var j = 0; j < $scope.servicPartData.length; j++)
		   {
			 //alert($scope.fullUnitItemizedData[i].totalPrice);
			unittotal = parseFloat($scope.servicPartData[j].unitPrice);
			costprice = parseFloat($scope.servicPartData[j].costPrice);
			quantity = parseFloat($scope.servicPartData[j].qnty);
			unittotal2 += unittotal;
			costprice2 += costprice;
			quantity2 += quantity;
			//$scope.addQuotation.subTotal = gndtotal.toFixed(2);
			// alert(unittotal2);
			 // alert(costprice2);
			  // alert(quantity2);
			  if(isNaN(costprice2)){var cPrice = 0;}else{var cPrice = costprice2;}
			   var resProfit = ((unittotal2-cPrice)/unittotal2)*100*quantity2;
			   if(isNaN(resProfit)){var resProfit2 = 0;}else{var resProfit2 = resProfit;}
			   $scope.addQuotation.profit = resProfit2.toFixed(2);
			  // alert(resProfit);
			   $scope.$apply();
		   }
	   }
	   
	   $scope.getFreightandCourierTotal = function(fright,courier,grdTotal)
	   {
		   
		  if(isNaN(fright)){var frt = 0;}else{ var frt = fright;} 
		  if(isNaN(courier)){var cor = 0;}else{ var cor = courier;}
		  if(isNaN(grdTotal)){var gTotal = 0;}else{ var gTotal = grdTotal;}
		  var addFreightCourier = parseFloat(frt)+parseFloat(cor)+parseFloat(gTotal);
		  //alert(addFreightCourier);
		  if(isNaN(addFreightCourier)){var gTotal2 = 0;}else{ var gTotal2 = addFreightCourier;}
		  
		  $scope.addQuotation.courierTotal = gTotal2.toFixed(2);
		   $scope.$apply();
	   }
	   
	   /*$scope.getStatus = function(sts)
	   {
		 // alert(sts);
		  if(sts=='0'){$scope.showCostSts = true;}else{$scope.showCostSts = false;} 
	   }*/
	   
});

//==================================================//
     //======Added Quotation ==========//
//=================================================//
angular.module('app')
.controller("addNewQuoteCtrl",function($http,$scope,$rootScope)
{
	
	$scope.master = {};
	$scope.loadCustomerQtnName = function()
	{
		$scope.customerNamesQtnData = [];
		//$scope.customerNameData = [{id:'name1',name:'name1'},{id:'name2',name:'name2'},{id:'name3',name:'name3'},{id:'name4',name:'name4'}];
		$.getJSON("getAllCustmerNames.do",function(json)
				{
					//alert(JSON.stringify(json));
					$scope.customerNamesQtnData = json['data'];
					$scope.$apply();
				});
	}
	
	$scope.getQtnCustomerName = function(customer)
	{
		$.getJSON("getSavedQuatationDataOnCustmerName.do",{custmernmae:customer},function(json)
				{
					//alert(JSON.stringify(json['quatationform'][0].qtnType));
					var quoteType = json['quatationform'][0].qtnType;
					$scope.addNewQuoteData =  json['quatationform'];
					$scope.printType = json['quatationform'][0].qtnType;
					
					//alert(quoteType);
					if(quoteType=="0")
					{
						$scope.quotationType = "Full Unit";
					}
					else if(quoteType=="1")
					{
						$scope.quotationType = "Project";
					}
					else if(quoteType=="2")
					{
						$scope.quotationType = "Spare Parts(Only)";
					}
					else
					{
						$scope.quotationType = "Spare part and service";
					}
					
					$scope.$apply();
				});
	}
	/*$scope.selectCustomerQtn = function(customer)
	{
			//alert(customer);
			
				$scope.$apply();
		
	};*/
	$scope.loadQtnDetails = function(qtnSeqNo,qtnAction,qtnType)
	{
		
		$rootScope.quotationSeqNo = qtnSeqNo;
		$rootScope.quotationAction = qtnAction;
		$rootScope.qtnType = qtnType;
		//alert(qtnType+ " " + "qtnType" );
		
	}
	
	/*$scope.loadservicePrintData = function()
	   {
		    
		   $scope.itemData = [{id:'1',euipNo:'MD-511AG',motor:'CVVBM40A-4235-11',snum:'(S/N. C11163367)',data:[{id:'1',partnum:'G31965G',partdesp:'Adapter for 30 C-ID',qty:'1',uprice:'86',tprice:'86'},{id:'2',partnum:'G46729G',partdesp:'Indicator for 30 L-Type',qty:'1',uprice:'50',tprice:'50'}]},{id:'2',euipNo:'MD-660AG',motor:'CVVBM15A-4185-11',snum:' (S/N. C1113532)',data:[{id:'3',partnum:'DH0581G',partdesp:'10FV-218 High Speed Shaft',qty:'1',uprice:'86',tprice:'86'},{id:'4',partnum:'DP541WW-02',partdesp:'Fan F-132 High Temp',qty:'1',uprice:'50',tprice:'50'}]}];
		   
		   
            
	   }
	   $scope.loadDespDta = function()
	   {
		    $scope.itemData3 = [{id:'1',motor:'CVVBM40A-4235-11',snum:'(S/N. C11163367)',proDesp:'Transportation per way',qty:'2',uprice:'50',tprice:'100'}];
	   }*/
	   
	$scope.printGenerateQuotation = function(qtnseqno,qtntype,actionsts)
	   {
		   
		   //alert(qtnseqno);getSavedQuatationPrintData
		   //alert(qtntype);
		   //alert(actionsts);
		   $.getJSON("getSavedQuatationData.do",{quationnumber:qtnseqno},function(json)
			{
				//alert(JSON.stringify(json['quatationform'][0].qtnType));
				var p = json['quatationform'][0].qtnType;
				
				if(p == '0')
				{
					//alert(p);
					$scope.subTotal = json['quatationform'][0].subTotal;
					$scope.grandTotal = json['quatationform'][0].grandTotal;
					$scope.taxPercent = json['quatationform'][0].taxPercent;
					$scope.tax = json['quatationform'][0].tax;
					$scope.addedTax = json['quatationform'][0].addedTax;
					$scope.remarks = json['quatationform'][0].remarks;
					$scope.salesManName = json['quatationform'][0].salesMan;
					$scope.salesmanPhNo = json['quatationform'][0].salesmanPhNo;
					$scope.createdBy = json['quatationform'][0].createdBy;
					$scope.subject = json['quatationform'][0].subject;
					//$scope.addQuotation.remarks = json['quatationform'][0].remarks;
					//alert(JSON.stringify(json['quatationform'][0].remarks));
					$scope.qtnTableFormData = json['quatationform'];
					$scope.qtnFormGridData = json['quatationgrid'];
					$scope.qtnFormTermData = json['quatationtermsgrid'];
					$scope.$apply();
					
					var prtContent = document.getElementById("qtnPrint");
					var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=500,toolbar=0,scrollbars=0,status=0');
					WinPrint.document.write(prtContent.innerHTML);
					WinPrint.document.close();
					WinPrint.focus();
					WinPrint.print();
					WinPrint.close();
				}
				if(p == '1')
				{
					//alert(p);
					$scope.subTotal = json['quatationform'][0].subTotal;
					$scope.grandTotal = json['quatationform'][0].grandTotal;
					$scope.taxPercent = json['quatationform'][0].taxPercent;
					$scope.tax = json['quatationform'][0].tax;
					$scope.addedTax = json['quatationform'][0].addedTax;
					$scope.remarks = json['quatationform'][0].remarks;
					$scope.salesManName = json['quatationform'][0].salesMan;
					$scope.salesmanPhNo = json['quatationform'][0].salesmanPhNo;
					$scope.createdBy = json['quatationform'][0].createdBy;
					$scope.subject = json['quatationform'][0].subject;
					//$scope.addQuotation.remarks = json['quatationform'][0].remarks;
					//alert(JSON.stringify(json['quatationform'][0].remarks));
					$scope.qtnTableFormData = json['quatationform'];
					$scope.qtnFormProjectGridData = json['quatationgrid'];
					$scope.qtnFormTermData = json['quatationtermsgrid'];
					$scope.$apply();
					//alert(JSON.stringify($scope.qtnFormProjectGridData));
					var prtContent = document.getElementById("qtnPrint");
					var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=500,toolbar=0,scrollbars=0,status=0');
					WinPrint.document.write(prtContent.innerHTML);
					WinPrint.document.close();
					WinPrint.focus();
					WinPrint.print();
					WinPrint.close();
				}
				if(p == '2')
				{
					//alert(p);
					$scope.subTotal = json['quatationform'][0].subTotal;
					$scope.grandTotal = json['quatationform'][0].grandTotal;
					$scope.taxPercent = json['quatationform'][0].taxPercent;
					$scope.tax = json['quatationform'][0].tax;
					$scope.addedTax = json['quatationform'][0].addedTax;
					$scope.sparePartremarks = json['quatationform'][0].remarks;
					$scope.salesManName = json['quatationform'][0].salesMan;
					$scope.salesmanPhNo = json['quatationform'][0].salesmanPhNo;
					$scope.createdBy = json['quatationform'][0].createdBy;
					$scope.subject = json['quatationform'][0].subject;
					//$scope.addQuotation.remarks = json['quatationform'][0].remarks;
					//alert(JSON.stringify(json['quatationform'][0].remarks));
					$scope.qtnTableSparePartData = json['quatationform'];
					$scope.qtnFormGridSparePartData = json['quatationgrid'];
					$scope.qtnFormTermSparePartData = json['quatationtermsgrid'];
					$scope.$apply();
					
					var prtContent = document.getElementById("qtnPrint");
					var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=500,toolbar=0,scrollbars=0,status=0');
					WinPrint.document.write(prtContent.innerHTML);
					WinPrint.document.close();
					WinPrint.focus();
					WinPrint.print();
					WinPrint.close();
				}
				if(p == '3')
				{
					
					//alert(p);
					$scope.subTotal = json['quatationform'][0].subTotal;
					$scope.grandTotal = json['quatationform'][0].grandTotal;
					$scope.taxPercent = json['quatationform'][0].taxPercent;
					$scope.tax = json['quatationform'][0].tax;
					$scope.addedTax = json['quatationform'][0].addedTax;
					$scope.serviceremarks = json['quatationform'][0].remarks;
					$scope.salesManName = json['quatationform'][0].salesMan;
					$scope.salesmanPhNo = json['quatationform'][0].salesmanPhNo;
					$scope.createdBy = json['quatationform'][0].createdBy;
					$scope.subject = json['quatationform'][0].subject;
					//$scope.addQuotation.remarks = json['quatationform'][0].remarks;
					//alert(JSON.stringify(json['quatationgrid'].productDesp));
					$scope.qtnTableServiceData = json['quatationform'];
					$scope.qtnFormGridServiceData = json['quatationgrid'];
					$scope.qtnGridServiceDesp = json['quatationgridprd'];
					$scope.qtnFormTermServiceData = json['quatationtermsgrid'];
					$scope.$apply();
					var prtContent = document.getElementById("qtnPrint");
					var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=500,toolbar=0,scrollbars=0,status=0');
					WinPrint.document.write(prtContent.innerHTML);
					WinPrint.document.close();
					WinPrint.focus();
					WinPrint.print();
					WinPrint.close();
				}
					
			});
		    
			//$scope.qtnFormGridData = [{id:'1',model:"CHHBMN5A-6165-59"}];
			
			
	   }
	
	
});
	//==============================================//
		//-----------Generate Score--------------//
    //==============================================//
angular.module('app')
.controller("GenerateScoreController",function($http,$scope)
{
	$scope.master = {};
	
	$scope.getScore  = function(modelnumber)
	{
		
		//alert(modelno);
		var modelObj = new Object();
		modelObj.modelno = modelnumber;
		//alert(JSON.stringify(modelObj));
		//$scope.GenerateScore.score ="";
		if($scope.GenerateScoreForm.$valid)
        {
				$.ajax({
				  url:"/SCA-360/getScore.do",
				  processData:true,
				  type:'POST',
				  contentType:'Application/json',
				  data:JSON.stringify(modelObj),
				  success:function(data) 
				  {
					  //alert(data);							  
					  $scope.GenerateScore= data;
					  $scope.$apply();
					  //$scope.GenerateScore = angular.copy($scope.master);
					  //$scope.loadDesignationCode();
					 // form.$setPristine(true);
					 // swal("Success", 'Score Loaded Successfully!');	
				  }		
				 });
		}
		else
		{
			sweetAlert("Oops...", "Something went wrong!", "error");
		}
		
	};
	//---------Reset Form----
   $scope.reset = function(form)
   {	
    
    
		$scope.GenerateScore = angular.copy($scope.master);
		//alert($scope.GenerateScore);
		form.$setPristine(true);
		
   };
			
	
	
});



//==========================================================//
     //--------------Frame Size and Tag Master--------------------//
//=========================================================//

angular.module('app')
.controller('FrameSizeMaster',function($scope,$http)
{

$scope.isEdit = true;
$scope.master = {};

//--------Duplicate Entry------
$scope.validateDup = function()
 {			 
		for(var d =0;d<JSON.stringify($scope.AddedDesignations.length);d++)
		{
			var firstString = $scope.AddFrameSize.designation.toUpperCase();
			var secondString = $scope.AddedDesignations[d].designation.toUpperCase();
			if(firstString!=null)
			{
				if(firstString==secondString)
				{
					$('.btn-hide').attr('disabled',true);						
					$(".duplicate").show();
					return false;
				}					
			   else
			    {
					$(".duplicate").hide();
					$('.btn-hide').attr('disabled',false);						
				}
			}
		}
		
 };
 
 $scope.validateDuplicate = function(desigName,id)
 {
	 for(var i =0;i<JSON.stringify($scope.AddedDesignations.length);i++)
	 {
		var str1 = desigName.toUpperCase();
		var str2 = $scope.AddedDesignations[i].designation.toUpperCase();
		if(id!=i)
		{
		 if(str1 == str2)
		 {
			// alert("Enter Name already Exits");
			$('.btn-hideg').attr('disabled',true);						
					$(".duplicate"+ id).show();
					return false;
		 }
		 else
		 {
			 $(".duplicate"+ id).hide();
			 $('.btn-hideg').attr('disabled',false);	
		 }
		}
	 }
 };		



//------------Space Between Two Words -----------
	$scope.spacebtw = function(b)
{
		var twoSpace =$scope.AddFrameSize[b];
		twoSpace =twoSpace.replace(/ {2,}/g,' ');
		twoSpace=twoSpace.trim();
		$scope.AddFrameSize[b] =twoSpace;	
};

//-----------Space Between Two Words (Grid)---------------
$scope.spacebtwgrid = function(b,id)
{
	var twoSpace = $scope.AddedDesignations[id][b];
	twoSpace = twoSpace.replace(/ {2,}/g,' ');
	twoSpace=twoSpace.trim();
	$scope.AddedDesignations[id][b] = twoSpace;
};
	
//--------load all Designations ----------
$scope.loadAllFrameSizes= function()
{
	 
	var httpRequest = $http({
			method: 'POST',
			url : "/SCA-360/getAllFrameSizes.do",
			data: {},
	 	}).success(function(data, status) 
		{
			/*alert('res-----'+JSON.stringify(data));*/
			$scope.AddedDesignations=data;
		});															  
};
//----------------end--------------------

$scope.AddDesignations = function(AddFrameSize,form)
{
	//$scope.Addsubmitted = true;
/*	alert('res-----'+JSON.stringify(AddFrameSize));*/
	if($scope.FrameSizeMasterForm.$valid)
	{
		$('.btn-hide').attr('disabled',true);
		$.ajax({
		    	url:"/SCA-360/saveFrameSizeAndTag.do",
			    processData:true,
			    type:'POST',
			    contentType:'Application/json',
			    data:JSON.stringify(AddFrameSize),
				beforeSend: function(xhr) 
				{
	            	xhr.setRequestHeader("Accept", "application/json");
		            xhr.setRequestHeader("Content-Type", "application/json");
		        },
				
			    success:function(response) 
				{
					if(response==true)
					{
						swal("Success", 'Frame Size Added Successfully!', "success");				
						$('.btn-hide').attr('disabled',false);	
						$scope.AddFrameSize = angular.copy($scope.master);
						$scope.loadDesignationCode();
					    form.$setPristine(true);			    								
					  //--------load all Designations ----------
						var httpRequest = $http({
											method: 'POST',
											url : "/SCA-360/getAllFrameSizes.do",
											data: {},
										   }).success(function(data, status) 
											{
												$scope.AddedDesignations=data;
											});															  
					  //----------------end---------------------
					}
				   else
				    {
					   sweetAlert("Oops...", "Something went wrong!", "error");
					   $('.btn-hide').attr('disabled',false);								
					}
				}
			});
	}
	else
	{
			var field = null, firstError = null;
           for (field in form) 
			{
           	if (field[0] != '$') 
				{
               	if (firstError === null && !form[field].$valid) 
					{
                   	firstError = form[field].$name;
                   }
                   if (form[field].$pristine) 
					{
                   	form[field].$dirty = true;
                   }
               }	
			}
	}
};

//-------------------Update Designations--------------------
$scope.UpdateAddedDesignations = function(UpdateDesignations,id)
{
			$scope.isEdit = true;
			delete UpdateDesignations["$edit"];
	  		var UpdatedData = angular.toJson(UpdateDesignations);
			$scope.submitted=true;
			if($scope.EditDesignationMasterFrom.$valid)
			{
				$scope.isEdit = false;
			/*	alert('res-----'+JSON.stringify(UpdatedData));*/
		  		$.ajax({
		    		url:"/SCA-360/saveFrameSizeAndTag.do",
		    		processData:true,
		    		type:'POST',
		    		contentType:'Application/json',
		    		data:UpdatedData,
					beforeSend: function(xhr) 
					{
	            		xhr.setRequestHeader("Accept", "application/json");
	            		xhr.setRequestHeader("Content-Type", "application/json");
	        		},
		    		success:function(response) 
					{			  
						if(response==true)
						{
	  						swal("Success", 'Updated Successfully!', "success");
							
							//--------load all Advance SubCategory ----------
							var httpRequest = $http({
											method: 'POST',
											url : "/SCA-360/getAllFrameSizes.do",
											data: {},
										   }).success(function(data, status) 
											{
												$scope.AddedDesignations=data;
											});															  
						  //----------------end---------------------									
						}			
					   else
					    {
							sweetAlert("Oops...", "Something went wrong!", "error");									
						}
					}
				});	
			}
};

  //---------Reset Form----
  $scope.reset = function(form)
  {			  
			$scope.AddFrameSize = angular.copy($scope.master);
			$scope.loadDesignationCode();
		    form.$setPristine(true);			    								
  };



})

//==========================================================//
     //--------------Item Value Master--------------------//
//=========================================================//

angular.module('app')
.controller('ItemValueMaster',function($scope,$http)
{

$scope.isEdit = true;
$scope.master = {};

//--------Duplicate Entry------
$scope.validateDup = function()
 {			 
		for(var d =0;d<JSON.stringify($scope.AddedDesignations.length);d++)
		{
			var firstString = $scope.AddItemValue.designation.toUpperCase();
			var secondString = $scope.AddedDesignations[d].designation.toUpperCase();
			if(firstString!=null)
			{
				if(firstString==secondString)
				{
					$('.btn-hide').attr('disabled',true);						
					$(".duplicate").show();
					return false;
				}					
			   else
			    {
					$(".duplicate").hide();
					$('.btn-hide').attr('disabled',false);						
				}
			}
		}
		
 };
 
 $scope.validateDuplicate = function(desigName,id)
 {
	 for(var i =0;i<JSON.stringify($scope.AddedDesignations.length);i++)
	 {
		var str1 = desigName.toUpperCase();
		var str2 = $scope.AddedDesignations[i].designation.toUpperCase();
		if(id!=i)
		{
		 if(str1 == str2)
		 {
			// alert("Enter Name already Exits");
			$('.btn-hideg').attr('disabled',true);						
					$(".duplicate"+ id).show();
					return false;
		 }
		 else
		 {
			 $(".duplicate"+ id).hide();
			 $('.btn-hideg').attr('disabled',false);	
		 }
		}
	 }
 };		


			
//--------load all Designations ----------
$scope.loadAllItemAndScores= function()
{
	 
	var httpRequest = $http({
			method: 'POST',
			url : "/SCA-360/getAllItemAndScores.do",
			data: {},
	 	}).success(function(data, status) 
		{
			//alert('res-----'+JSON.stringify(data));
			$scope.AddedDesignations=data;
		});															  
};
//----------------end--------------------

$scope.AddItemValueAndScores = function(AddItemValue,form)
{
	//$scope.Addsubmitted = true;
	//alert('res-----'+JSON.stringify(AddItemValue));
	if($scope.ItemValueMasterForm.$valid)
	{
		$('.btn-hide').attr('disabled',true);
		$.ajax({
		    	url:"/SCA-360/saveItemAndScore.do",
			    processData:true,
			    type:'POST',
			    contentType:'Application/json',
			    data:JSON.stringify(AddItemValue),
				beforeSend: function(xhr) 
				{
	            	xhr.setRequestHeader("Accept", "application/json");
		            xhr.setRequestHeader("Content-Type", "application/json");
		        },
				
			    success:function(response) 
				{
					if(response==true)
					{
						swal("Success", 'Frame Size Added Successfully!', "success");				
						$('.btn-hide').attr('disabled',false);	
						$scope.AddItemValue = angular.copy($scope.master);
						//$scope.loadDesignationCode();
					    form.$setPristine(true);			    								
					  //--------load all Designations ----------
						var httpRequest = $http({
											method: 'POST',
											url : "/SCA-360/getAllItemAndScores.do",
											data: {},
										   }).success(function(data, status) 
											{
												$scope.AddedDesignations=data;
											});															  
					  //----------------end---------------------
					}
				   else
				    {
					   sweetAlert("Oops...", "Something went wrong!", "error");
					   $('.btn-hide').attr('disabled',false);								
					}
				}
			});
	}
	else
	{
			var field = null, firstError = null;
           for (field in form) 
			{
           	if (field[0] != '$') 
				{
               	if (firstError === null && !form[field].$valid) 
					{
                   	firstError = form[field].$name;
                   }
                   if (form[field].$pristine) 
					{
                   	form[field].$dirty = true;
                   }
               }	
			}
	}
};

//-------------------Update Designations--------------------
$scope.UpdateAddedDesignations = function(UpdateDesignations,id)
{
			$scope.isEdit = true;
			delete UpdateDesignations["$edit"];
	  		var UpdatedData = angular.toJson(UpdateDesignations);
			$scope.submitted=true;
			if($scope.EditDesignationMasterFrom.$valid)
			{
				$scope.isEdit = false;
				//alert('res-----'+JSON.stringify(UpdatedData));
		  		$.ajax({
		    		url:"/SCA-360/saveItemAndScore.do",
		    		processData:true,
		    		type:'POST',
		    		contentType:'Application/json',
		    		data:UpdatedData,
					beforeSend: function(xhr) 
					{
	            		xhr.setRequestHeader("Accept", "application/json");
	            		xhr.setRequestHeader("Content-Type", "application/json");
	        		},
		    		success:function(response) 
					{			  
						if(response==true)
						{
	  						swal("Success", 'Updated Successfully!', "success");
							
							//--------load all Advance SubCategory ----------
							var httpRequest = $http({
											method: 'POST',
											url : "/SCA-360/getAllItemAndScores.do",
											data: {},
										   }).success(function(data, status) 
											{
												$scope.AddedDesignations=data;
											});															  
						  //----------------end---------------------									
						}			
					   else
					    {
							sweetAlert("Oops...", "Something went wrong!", "error");									
						}
					}
				});	
			}
};

  //---------Reset Form----
  $scope.reset = function(form)
  {			  
			$scope.AddItemValue = angular.copy($scope.master);
			//$scope.loadDesignationCode();
		    form.$setPristine(true);			    								
  };



})

//==========================================================//
     //--------------Frame Size and Tag Master--------------------//
//=========================================================//

angular.module('app')
.controller('FrameSizeMaster',function($scope,$http)
{

$scope.isEdit = true;
$scope.master = {};

//--------Duplicate Entry------
$scope.validateDup = function()
 {			 
		for(var d =0;d<JSON.stringify($scope.AddedDesignations.length);d++)
		{
			var firstString = $scope.AddFrameSize.designation.toUpperCase();
			var secondString = $scope.AddedDesignations[d].designation.toUpperCase();
			if(firstString!=null)
			{
				if(firstString==secondString)
				{
					$('.btn-hide').attr('disabled',true);						
					$(".duplicate").show();
					return false;
				}					
			   else
			    {
					$(".duplicate").hide();
					$('.btn-hide').attr('disabled',false);						
				}
			}
		}
		
 };
 
 $scope.validateDuplicate = function(desigName,id)
 {
	 for(var i =0;i<JSON.stringify($scope.AddedDesignations.length);i++)
	 {
		var str1 = desigName.toUpperCase();
		var str2 = $scope.AddedDesignations[i].designation.toUpperCase();
		if(id!=i)
		{
		 if(str1 == str2)
		 {
			// alert("Enter Name already Exits");
			$('.btn-hideg').attr('disabled',true);						
					$(".duplicate"+ id).show();
					return false;
		 }
		 else
		 {
			 $(".duplicate"+ id).hide();
			 $('.btn-hideg').attr('disabled',false);	
		 }
		}
	 }
 };		



//------------Space Between Two Words -----------
	$scope.spacebtw = function(b)
{
		var twoSpace =$scope.AddFrameSize[b];
		twoSpace =twoSpace.replace(/ {2,}/g,' ');
		twoSpace=twoSpace.trim();
		$scope.AddFrameSize[b] =twoSpace;	
};

//-----------Space Between Two Words (Grid)---------------
$scope.spacebtwgrid = function(b,id)
{
	var twoSpace = $scope.AddedDesignations[id][b];
	twoSpace = twoSpace.replace(/ {2,}/g,' ');
	twoSpace=twoSpace.trim();
	$scope.AddedDesignations[id][b] = twoSpace;
};
	
//--------load all Designations ----------
$scope.loadAllFrameSizes= function()
{
	 
	var httpRequest = $http({
			method: 'POST',
			url : "/SCA-360/getAllFrameSizes.do",
			data: {},
	 	}).success(function(data, status) 
		{
			/*alert('res-----'+JSON.stringify(data));*/
			$scope.AddedDesignations=data;
		});															  
};
//----------------end--------------------

$scope.AddDesignations = function(AddFrameSize,form)
{
	//$scope.Addsubmitted = true;
/*	alert('res-----'+JSON.stringify(AddFrameSize));*/
	if($scope.FrameSizeMasterForm.$valid)
	{
		$('.btn-hide').attr('disabled',true);
		$.ajax({
		    	url:"/SCA-360/saveFrameSizeAndTag.do",
			    processData:true,
			    type:'POST',
			    contentType:'Application/json',
			    data:JSON.stringify(AddFrameSize),
				beforeSend: function(xhr) 
				{
	            	xhr.setRequestHeader("Accept", "application/json");
		            xhr.setRequestHeader("Content-Type", "application/json");
		        },
				
			    success:function(response) 
				{
					if(response==true)
					{
						swal("Success", 'Frame Size Added Successfully!', "success");				
						$('.btn-hide').attr('disabled',false);	
						$scope.AddFrameSize = angular.copy($scope.master);
						$scope.loadDesignationCode();
					    form.$setPristine(true);			    								
					  //--------load all Designations ----------
						var httpRequest = $http({
											method: 'POST',
											url : "/SCA-360/getAllFrameSizes.do",
											data: {},
										   }).success(function(data, status) 
											{
												$scope.AddedDesignations=data;
											});															  
					  //----------------end---------------------
					}
				   else
				    {
					   sweetAlert("Oops...", "Something went wrong!", "error");
					   $('.btn-hide').attr('disabled',false);								
					}
				}
			});
	}
	else
	{
			var field = null, firstError = null;
           for (field in form) 
			{
           	if (field[0] != '$') 
				{
               	if (firstError === null && !form[field].$valid) 
					{
                   	firstError = form[field].$name;
                   }
                   if (form[field].$pristine) 
					{
                   	form[field].$dirty = true;
                   }
               }	
			}
	}
};

//-------------------Update Designations--------------------
$scope.UpdateAddedDesignations = function(UpdateDesignations,id)
{
			$scope.isEdit = true;
			delete UpdateDesignations["$edit"];
	  		var UpdatedData = angular.toJson(UpdateDesignations);
			$scope.submitted=true;
			if($scope.EditDesignationMasterFrom.$valid)
			{
				$scope.isEdit = false;
			/*	alert('res-----'+JSON.stringify(UpdatedData));*/
		  		$.ajax({
		    		url:"/SCA-360/saveFrameSizeAndTag.do",
		    		processData:true,
		    		type:'POST',
		    		contentType:'Application/json',
		    		data:UpdatedData,
					beforeSend: function(xhr) 
					{
	            		xhr.setRequestHeader("Accept", "application/json");
	            		xhr.setRequestHeader("Content-Type", "application/json");
	        		},
		    		success:function(response) 
					{			  
						if(response==true)
						{
	  						swal("Success", 'Updated Successfully!', "success");
							
							//--------load all Advance SubCategory ----------
							var httpRequest = $http({
											method: 'POST',
											url : "/SCA-360/getAllFrameSizes.do",
											data: {},
										   }).success(function(data, status) 
											{
												$scope.AddedDesignations=data;
											});															  
						  //----------------end---------------------									
						}			
					   else
					    {
							sweetAlert("Oops...", "Something went wrong!", "error");									
						}
					}
				});	
			}
};

  //---------Reset Form----
  $scope.reset = function(form)
  {			  
			$scope.AddFrameSize = angular.copy($scope.master);
			$scope.loadDesignationCode();
		    form.$setPristine(true);			    								
  };



})

//==========================================================//
     //--------------Item Value Master--------------------//
//=========================================================//
angular.module('app')
.controller('ItemValueMaster',function($scope,$http)
{

$scope.isEdit = true;
$scope.master = {};

//--------Duplicate Entry------
$scope.validateDup = function()
 {			 
		for(var d =0;d<JSON.stringify($scope.AddedDesignations.length);d++)
		{
			var firstString = $scope.AddItemValue.designation.toUpperCase();
			var secondString = $scope.AddedDesignations[d].designation.toUpperCase();
			if(firstString!=null)
			{
				if(firstString==secondString)
				{
					$('.btn-hide').attr('disabled',true);						
					$(".duplicate").show();
					return false;
				}					
			   else
			    {
					$(".duplicate").hide();
					$('.btn-hide').attr('disabled',false);						
				}
			}
		}
		
 };
 
 $scope.validateDuplicate = function(desigName,id)
 {
	 for(var i =0;i<JSON.stringify($scope.AddedDesignations.length);i++)
	 {
		var str1 = desigName.toUpperCase();
		var str2 = $scope.AddedDesignations[i].designation.toUpperCase();
		if(id!=i)
		{
		 if(str1 == str2)
		 {
			// alert("Enter Name already Exits");
			$('.btn-hideg').attr('disabled',true);						
					$(".duplicate"+ id).show();
					return false;
		 }
		 else
		 {
			 $(".duplicate"+ id).hide();
			 $('.btn-hideg').attr('disabled',false);	
		 }
		}
	 }
 };		


			
//--------load all Designations ----------
$scope.loadAllItemAndScores= function()
{
	 
	var httpRequest = $http({
			method: 'POST',
			url : "/SCA-360/getAllItemAndScores.do",
			data: {},
	 	}).success(function(data, status) 
		{
			//alert('res-----'+JSON.stringify(data));
			$scope.AddedDesignations=data;
		});															  
};
//----------------end--------------------

$scope.AddItemValueAndScores = function(AddItemValue,form)
{
	//$scope.Addsubmitted = true;
	//alert('res-----'+JSON.stringify(AddItemValue));
	if($scope.ItemValueMasterForm.$valid)
	{
		$('.btn-hide').attr('disabled',true);
		$.ajax({
		    	url:"/SCA-360/saveItemAndScore.do",
			    processData:true,
			    type:'POST',
			    contentType:'Application/json',
			    data:JSON.stringify(AddItemValue),
				beforeSend: function(xhr) 
				{
	            	xhr.setRequestHeader("Accept", "application/json");
		            xhr.setRequestHeader("Content-Type", "application/json");
		        },
				
			    success:function(response) 
				{
					if(response==true)
					{
						swal("Success", 'Frame Size Added Successfully!', "success");				
						$('.btn-hide').attr('disabled',false);	
						$scope.AddItemValue = angular.copy($scope.master);
						//$scope.loadDesignationCode();
					    form.$setPristine(true);			    								
					  //--------load all Designations ----------
						var httpRequest = $http({
											method: 'POST',
											url : "/SCA-360/getAllItemAndScores.do",
											data: {},
										   }).success(function(data, status) 
											{
												$scope.AddedDesignations=data;
											});															  
					  //----------------end---------------------
					}
				   else
				    {
					   sweetAlert("Oops...", "Something went wrong!", "error");
					   $('.btn-hide').attr('disabled',false);								
					}
				}
			});
	}
	else
	{
			var field = null, firstError = null;
           for (field in form) 
			{
           	if (field[0] != '$') 
				{
               	if (firstError === null && !form[field].$valid) 
					{
                   	firstError = form[field].$name;
                   }
                   if (form[field].$pristine) 
					{
                   	form[field].$dirty = true;
                   }
               }	
			}
	}
};

//-------------------Update Designations--------------------
$scope.UpdateAddedDesignations = function(UpdateDesignations,id)
{
			$scope.isEdit = true;
			delete UpdateDesignations["$edit"];
	  		var UpdatedData = angular.toJson(UpdateDesignations);
			$scope.submitted=true;
			if($scope.EditDesignationMasterFrom.$valid)
			{
				$scope.isEdit = false;
				//alert('res-----'+JSON.stringify(UpdatedData));
		  		$.ajax({
		    		url:"/SCA-360/saveItemAndScore.do",
		    		processData:true,
		    		type:'POST',
		    		contentType:'Application/json',
		    		data:UpdatedData,
					beforeSend: function(xhr) 
					{
	            		xhr.setRequestHeader("Accept", "application/json");
	            		xhr.setRequestHeader("Content-Type", "application/json");
	        		},
		    		success:function(response) 
					{			  
						if(response==true)
						{
	  						swal("Success", 'Updated Successfully!', "success");
							
							//--------load all Advance SubCategory ----------
							var httpRequest = $http({
											method: 'POST',
											url : "/SCA-360/getAllItemAndScores.do",
											data: {},
										   }).success(function(data, status) 
											{
												$scope.AddedDesignations=data;
											});															  
						  //----------------end---------------------									
						}			
					   else
					    {
							sweetAlert("Oops...", "Something went wrong!", "error");									
						}
					}
				});	
			}
};

  //---------Reset Form----
  $scope.reset = function(form)
  {			  
			$scope.AddItemValue = angular.copy($scope.master);
			//$scope.loadDesignationCode();
		    form.$setPristine(true);			    								
  };



})	

//==========================================================//
     //--------------Products Master--------------------//
//=========================================================//


angular.module('app')
	.controller('productMasterControl',function($scope,$http)
	{
		 $scope.bottomrightsettings = {
			position: 'bottom right'
		};
			$scope.productsDataArray = [];
	    $scope.master = {};
		var agreementGridData = [];
		var productsSubmitData = new Object();
		$index=0;
		
		//-------Load Category DropDown---
		$scope.loadAllProducts=function()
		{		
		
			$.getJSON("viewproductcategory.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				$scope.addedProductsData = json['data'];
				$scope.$apply();
			});
		};		

		$scope.addProductField = function() 
		{
			//alert(343);
			$index++;
		    $scope.productsDataArray.push({'id':$index,'bookColor':'#000000','bugColor':'#000000'})
		};
		$scope.removeProductRow = function(name)
		{				
			var Index = -1;		
			var comArr = eval( $scope.productsDataArray );
			for( var i = 0; i < comArr.length; i++ ) 
			{
				if( comArr[i].id === name ) 
				{
					Index = i;
					break;
				}				
			}
			$scope.productsDataArray.splice( Index, 1 );
			$index = comArr.length;
			for(var s=0;s<$index;s++)
			{
				$scope.productsDataArray[s].id = Number(s)+Number(1);
			}			
  	    };
		
		//-------Get The Added Products on Category Onchange-----
		$scope.getAllProducts = function(category)
		{
			//alert(category);
			$.post("getAllAddedProducts.do",{'category':category},function(json)
			{
				//$scope.data = json['data'];
				// $scope.$apply();
				//alert(JSON.stringify(json['data']));
				if(json['data'].length!=0)
				{
					$scope.productsDataArray = json['data'];
					 $scope.$apply();
				}
				else
				{
					$index = 1;
					$scope.productsDataArray = [{'id':$index,'bookColor':'#000000','bugColor':'#000000'}];						
					$scope.$apply();
				}
			});
		};
		//---------Products Form Submit---
		$scope.productsFormSubmit = function(form,productcategory)
		{
			
			//alert($scope.productsForm.$valid);
			if($scope.productsForm.$valid)
			{
				//alert(5445);
				agreementGridData = [];
				$scope.productsDataArray.forEach(function (products) 
				{
					//alert(JSON.stringify(products));
	        		agreementGridData.push(angular.toJson(products));														 
				});	
				productsSubmitData.formData = $scope.productcategory;
				productsSubmitData.gridData = agreementGridData;
				//alert(JSON.stringify($scope.productcategory));
				var httpRequest = $http({
							method: 'POST',
							url : "/SCA-360/productsSubmit.do",
							data: productsSubmitData,
					   }).success(function(data, status) 
						{							
							if(data==true)
							{
								swal("", 'Products Added Successfully' , "success");
								$scope.getAllProducts(productcategory);
								$scope.$apply();
								/*$scope.productcategory = angular.copy($scope.master);
							    form.$setPristine(true);
								$index = 1;
								$scope.productsDataArray = [{'id':$index,'bookColor':'#000000','bugColor':'#000000'}];	*/
							}
							else
							{
								swal("Oops sorry...", "Something went wrong!", "error");
							}
						}); 				
			}
			else
			{
				var field = null, firstError = null;
				for (field in form) 
				{
					if (field[0] != '$') 
					{
						if (firstError === null && !form[field].$valid) 
						{
							firstError = form[field].$name;
						}
						if (form[field].$pristine) 
						{
							form[field].$dirty = true;
						}
					}	
				}					
			}
		};
		
		  //---------Reset Form----
		   /*$scope.reset = function(form)
		   {	
		 		$scope.productCategory = angular.copy($scope.master);
			    form.$setPristine(true);
				//$scope.loadproductvatagories();
				$index = 1;
				$scope.productsDataArray = [{'id':$index,'bookColor':'#000000','bugColor':'#000000'}];	
				$scope.$apply();			
			};	*/
		
		
		
	});

//=====================================================//
        //----------Department Master-------//
//====================================================//
angular.module('app')
.controller("DepartmentMasterController",function($scope,$http)
		{
			$scope.master = {};
			$scope.departmentData = angular.copy($scope.master);
				$scope.departmentData = ({'status':0});
				var cusImage = new FormData();
				
				
				/*var countryObj = new Object();
				countryObj.dropdownname = "Country";
				countryObj.columnname = "country";
				countryObj.columncode = "countrycode";
				var jsonCountryString= JSON.stringify(countryObj);
				
				
				var salesmanObj = new Object();
				salesmanObj.dropdownname = "Salesman";
				salesmanObj.columnname = "salesman";
				salesmanObj.columncode = "salesmancode";
				var jsonsalesmanString= JSON.stringify(salesmanObj);*/
				
				$scope.validEmailId = function(emailId)
			   {
				   //alert(emailId);
				   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
				   if(emailId.length>=4)
					   {
						  if(emailId.match(mailformat))
						   {
							 // alert("Valid"); 
							   $("#existVal" ).hide();
						   }
						  else
						   {
							   //alert("Invalid"); 
							   $("#existVal" ).show();
						   } 
					   }
				   else
					   {
							$("#existVal" ).hide();
					   }
				   
				   
			   }
				var numOfPieces = 6 * 6;
				var frag = document.createDocumentFragment();

				function insertInnerPieces($el, innerPieces) 
				{
				  for (var i = 0; i < innerPieces; i++) 
				  {
				    var $inner = document.createElement('div');
			    	$inner.classList.add('popup__piece-inner');
				    $el.appendChild($inner);
				  }
				};
	
				for (var i = 1; i <= numOfPieces; i++) 
				{
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
				
				//------Get Country Code------
				/*$.ajax({
					  url:"/SCA-360/loadDropDown.do",
					  processData:true,
					  type:'POST',
					  contentType:'Application/json',
					  data:jsonCountryString,
					  success:function(responce) 
					  {
						  responce.push({"countrycode":"all","country":"All"});
						  $scope.CountryCode = responce;
					  }
				});		
				
				
					$.ajax({
					  url:"/SCA-360/loadDropDown.do",
					  processData:true,
					  type:'POST',
					  contentType:'Application/json',
					  data:jsonsalesmanString,
					  success:function(responce) 
					  {
						//  alert(JSON.stringify(responce));
						  //responce.push({"countrycode":"all","country":"All"});
						  $scope.salesmancodes = responce;
					  }
				});*/		
				
				//------get All Added Users----
				
				/*$scope.loadAllAddedUsers = function()
				{
					$.ajax({
						  url:"/SCA-360/getAllUsers.do",
						  processData:true,
						  type:'POST',
						  contentType:'Application/json',
						  data:{},
						  success:function(responce) 
						  {
							  //alert(JSON.stringify(responce));
							  $scope.AddedUserData = responce;
							  $scope.$apply();
						  }		
						 });
						 	
				};*/
				
				$scope.loadAddedDepartments = function()
				{
					
					$.ajax({
						  url:"/SCA-360/departmentView.do",
						  processData:true,
						  type:'POST',
						  contentType:'Application/json',
						  data:{},
						  success:function(responce) 
						  {
							  //alert(JSON.stringify(responce));
							  $scope.deptArray = responce['data'];
							  $scope.$apply();
						  }		
						 });
						 	
				};
				
				//-----Show Popup--------------
				$scope.showPopup = function(AddedData)
				{					 
					//alert(JSON.stringify(UserData));
					$scope.departmentData = AddedData;
					  overlay.appendTo(document.body);	
					  $popupsCont.classList.add('s--popup-active');
					  $popup.classList.add('s--active');
					  
					  
					  /*if(UserData.photoPath!=null && UserData.signaturePath!=null)
					  {
						  
						  var img = $('<img src="'+UserData.photoPath+'" width="200" height="150"/>', {id: 'dynamic',width:200,height:150 });
						  var img1 = $('<img src="'+UserData.signaturePath+'" width="200" height="150"/>', {id: 'dynamic',width:200,height:150 });
						  
						  var photoName = UserData.photoPath.split("/");
						  var signatureName = UserData.signaturePath.split("/");
						  
					  
						 $("#photo").attr("data-content",$(img)[0].outerHTML).popover("show");
		            	 $("#1photoinput").text("Change");
	        		     $("#2photoinput").show();
			             $("#3photoinput").val(photoName[1]);        
					 
						 $scope.dummyPhoto="1";
						 $('#dummyPhoto').trigger('blur');
						// cusImage.append("userphoto", img[0]);
						// cusImage.append("usersign", img1[0]);
					 					 
						 $("#signature").attr("data-content",$(img1)[0].outerHTML).popover("show");
			             $("#1siginput").text("Change");
        			     $("#2siginput").show();
		    	         $("#3siginput").val(signatureName[1]); 
						 $scope.dummySignature="1";
						 $('#dummySignature').trigger('blur');
					 
						 //$('#photoinput').val(UserData.photoPath);         
					  }
					  else
					  {
						  $('.image-preview').popover('hide');
						  $("#1photoinput").text("Upload Photo");
						  $("#1siginput").text("Upload Signature");
						  
						  $("#3photoinput").val("");
						  $("#3siginput").val("");
						  $("#2photoinput").hide();
						  $("#2siginput").hide();
					  }*/
					 
				};
				
				
				$scope.AddDepartmentsFormSubmit  = function(departmentData,form)
				{
					//alert(angular.toJson(userData));
					if($scope.departmentsForm.$valid) 
					{
						cusImage.append("formData", angular.toJson(departmentData));
						//alert(JSON.stringify(cusImage));
						$http.post("/SCA-360/DeparmentSaveForm.do", cusImage, {
						        withCredentials: true,
					        	 headers: {'Content-Type': undefined },
						       	 transformRequest: angular.identity
							  }).success(function(data, status) 
						 	   { 
							   		
									
									if(data==true)
									{
										swal("", 'Department Added Successfully' , "success");
										$scope.departmentData = angular.copy($scope.master);			
										form.$setPristine(true);
										$scope.departmentData = ({'status':0});
										$('.popup__close').click();
										cusImage = new FormData();
										$scope.loadAddedDepartments();
										
										
										$scope.$apply();
										
									}
									else
									{
										swal("Oops sorry...", "Something went wrong!", "error");
									}
					           });							
					}
					else
					{
							//alert(1);
							var field = null, firstError = null;
							for (field in form) 
							{
								if (field[0] != '$') 
								{
									if (firstError === null && !form[field].$valid) 
									{
										firstError = form[field].$name;
									}
									if (form[field].$pristine) 
									{
										form[field].$dirty = true;
									}
								}	
							}						
					}						
				};
				
				

				
				//---Reset ----
				 $scope.resetDepartmentForm = function(form)
				{	
				   	  
					$scope.departmentData = angular.copy($scope.master);				
					$scope.departmentData = ({'status':0});
					cusImage = new FormData();
					 form.$setPristine(true);
					$scope.$apply();
			    };
				
				
				
		});

//====================================//
      //--Designation Master----//
//===================================//
angular.module('app')	

.controller("designationControl",function($scope,$http)
{
	$scope.departmentData = {'status':'0'};
	$scope.master = {};
	
	var numOfPieces = 6 * 6;
	var frag = document.createDocumentFragment();

	function insertInnerPieces($el, innerPieces) 
	{
	  for (var i = 0; i < innerPieces; i++) 
	  {
	    var $inner = document.createElement('div');
    	$inner.classList.add('popup__piece-inner');
	    $el.appendChild($inner);
	  }
	};

	for (var i = 1; i <= numOfPieces; i++) 
	{
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
		
	 $scope.bottomrightsettings = {
        position: 'bottom right'
    };
	
	
	/*$scope.AddDepartments = function(department,form)
	{
		if($scope.departmentsForm.$valid)
		{
			var httpRequest = $http({
					method: 'POST',
					url : "/SCA-360/DeparmentSaveForm.do",
					data: angular.toJson(department),
				   }).success(function(data, status) 
					{
						if(data==true)
						{
							swal("", 'User Added Successfully' , "success");
							$scope.departmentData = angular.copy($scope.master);
						    form.$setPristine(true);
							$scope.departmentData = {'status':'0'};									
							$('.popup__close').click();	
							$scope.loadAddedDepartments();							
							
						}
						else
						{
							
						}
					}); 												
		}
		else
		{
			var field = null, firstError = null;
			for (field in form) 
			{
				if (field[0] != '$') 
				{
					if (firstError === null && !form[field].$valid) 
					{
						firstError = form[field].$name;
					}
					if (form[field].$pristine) 
					{
						form[field].$dirty = true;
					}
				}	
			}					
		}		
	};*/
	$scope.loadAddedDesignations = function()
	{
		/*$.getJSON("departmentView.do",function(json)
		{
			$scope.data = json['data'];
			 $scope.$apply();
		});	*/	
	};
	
	/*$scope.addedDept = function(deptCode)
	{
		$scope.departmentData  =deptCode; 
		overlay.appendTo(document.body);	
		$popupsCont.classList.add('s--popup-active');
		$popup.classList.add('s--active');		
	};	*/
	
	/*$scope.reset = function(form)
	{
		$scope.departmentData = angular.copy($scope.master);
	    form.$setPristine(true);
		$scope.departmentData = {'status':'0'};		
	};*/
});

//==========================================================//
     //--------------Product Line Master--------------------//
//=========================================================//

angular.module('app')
.controller("productline",function($http,$scope)
{
	$scope.submitObj = [];
	var finalObj = new Object();
	$scope.viewproductLine = function()
	{
			$.post("viewproductcategory.do",function(json1)
			{
				$scope.productcatagories=json1['data'];
				
				$.post("getAllProdutsInProdutLine.do",function(json2)	
				{
					//alert(JSON.stringify(json2['data']));
					$scope.productsarray=json2['data'];	
					
					$.post("getAllProdutsLine.do",function(json)
					{
						
						$scope.productlinenames=json['data'];
						$scope.$apply();				 
					});
				});	
			});
	};
	
	$scope.getProducts = function(pccode,id)
	{
		$.post("getAllAddedProducts.do",{'category':pccode},function(json)
		{
			var tempname = "productsarray"+ id;
			$scope.productlinenames[id].product = "";
			$scope.productlinenames[id][tempname]=json['data'];
			$scope.$apply();
			//alert(JSON.stringify(json['data']));
		});		
	};
	
	$scope.productLineSubmit = function()
	{
		submitObj = [];
		$scope.productlinenames.forEach(function(x)
		{
			submitObj.push(angular.toJson(x));
		});
		finalObj.gridData = submitObj;
		
			var httpRequest = $http({
					method: 'POST',
					url : "/SCA-360/productLineSubmit.do",
					data: finalObj,
				   }).success(function(data, status) 
					{		
						if(data==true)
						{
							swal("", 'Product Line Mappings Added Successfully' , "success");
							$.getJSON("getAllProdutsLine.do",function(json)
							{
								$scope.productlinenames=json['data'];
								$scope.$apply();				 
							});							
						}
					});		
	};
	
	$scope.reset = function()
	{
		$.getJSON("getAllProdutsLine.do",function(json)
		{
			//alert(JSON.stringify(json['data']));
			$scope.productlinenames=json['data'];
			$scope.$apply();				 
		});		
	};
	
	
})


//==========================================================//
     //--------------Product Category  Master--------------------//
//=========================================================//

angular.module('app')
.controller("productCategory",function($scope,$http)
{
	$scope.productCategory = {'status':'0','bokclr':'#000000','budgclr':'#000000'};
	$scope.master = {'status':'0'};
	//$('.bkClr').css('background-color','#000');
	//$('.bgClr').css('background-color','#000');
	
				var numOfPieces = 6 * 6;
				var frag = document.createDocumentFragment();

				function insertInnerPieces($el, innerPieces) 
				{
				  for (var i = 0; i < innerPieces; i++) 
				  {
				    var $inner = document.createElement('div');
			    	$inner.classList.add('popup__piece-inner');
				    $el.appendChild($inner);
				  }
				};
	
				for (var i = 1; i <= numOfPieces; i++) 
				{
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
				
				/*$scope.getbokColor = function(clr)
				{
					$('.bkClr').css('background-color',clr);
					//$scope.$apply();
				
				}
				
				$scope.getbudgColor = function(clr)
				{
					$('.bgClr').css('background-color',clr);
					//$scope.$apply();
				}*/
				
					
	//----------Product Form Submit---
	$scope.submitProductCategoryForm = function(products,form)
	{
		if($scope.productCategoryForm.$valid) 
		{
			var httpRequest = $http({
				method: 'POST',
				url : "/SCA-360/productCategoryForm.do",
				data: products,
			   }).success(function(data, status) 
				{
					if(data==true)
					{
						swal("", 'Product Category Added Successfully' , "success");
						$scope.productCategory = angular.copy($scope.master);
						$scope.productCategory = {'status':'0','bokclr':'#000000','budgclr':'#000000'};
			            $('.popup__close').click();							
						$scope.loadproductvatagories();		
					}
					else
					{
						swal("Oops sorry...", "Something went wrong!", "error");
					}
				}); 			
			
		}
		else
		{
			var field = null, firstError = null;
			for (field in form) 
			{
				if (field[0] != '$') 
				{
					if (firstError === null && !form[field].$valid) 
					{
						firstError = form[field].$name;
					}
					if (form[field].$pristine) 
					{
						form[field].$dirty = true;
					}
				}	
			}			
		}
	};
	
	$scope.loadproductvatagories=function(){
		
		$.post("viewproductcategory.do",function(json)
		{
			//alert(JSON.stringify(json['data']));
			$scope.addedProductsData = json['data'];
			$scope.$apply();
		});
	};	
	
	$scope.updateProductCategory = function(ProductCode)
	{
			overlay.appendTo(document.body);	
			$popupsCont.classList.add('s--popup-active');
			$popup.classList.add('s--active');		
			$scope.productCategory = ProductCode;
			
						
	};
	
	//------Reset Product Category---
	$scope.reset = function(form)
	{	
	   
		$scope.productCategory = angular.copy($scope.master);
	    form.$setPristine(true);
		$scope.productCategory = {'status':'0','bokclr':'#000000','budgclr':'#000000'};
		
	};		
	
});

//==================================================//
         //====Prospect Master =====//   
//==================================================//
angular.module('app')
.controller('ProspectMasterController',function($scope,$http){
	
	 $scope.dataProspect = [];
	 $index=0;
	 $scope.master = {};
	 var customerGridData = [];
	 //var customerData = new Object();
	 var cusImage = new FormData();
   

	 /*$scope.ProspectTaxName = function()
	 {
		 
		 $.getJSON("getTaxNamesForCustmerMaster.do",function(json)
		 {
			 //alert(JSON.stringify(json));
			 $scope.taxNameData = json['tname'];
			 $scope.$apply();
		 });
	 }*/
	 $scope.loadTaxNameByCountry = function(countryCode)
	 {
		 //alert(countryCode);
		 if(countryCode == undefined || countryCode == "")
		 {
			 
			 $.getJSON("getTaxNamesForCustmerMaster.do",function(json)
			 {
				 //alert(JSON.stringify(json));
				 $scope.taxNameData = json['tname'];
				 $scope.$apply();
			 });
		 }
		 else
		 {
			 
			$.getJSON("getTaxNamesForCustmerMaster.do",{countrycode:countryCode},function(json)
			  {
				  //alert(JSON.stringify(json['tname'][0].taxName));
				  $scope.ProspectMaster.taxName = json['tname'][0].taxName;
				  $scope.$apply();
			  }); 
		 }
		  
	 }
	 $scope.ProspectAccountCodes = function() 
	 {
		     $scope.customerNameCode = [];
		
                        $.getJSON("getAllProspectAccountNames.do",function(json)
						{
					
							//alert(JSON.stringify(json['data']));
							 $scope.customerNameCode = json['data'];
							  	  	
							 $scope.$apply();
					
						});

                  
	 }
	 $scope.loadProspectCurrency = function()
	 {
		 $.getJSON("getLocalCureenceyOfCountryCode.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				 $scope.ProspectMaster.currency = json['data'];
				 $scope.$apply();
			});
		 //$scope.loadCurrency = [{ id: '1', taxName: 'VAT' }, { id: '2', taxName: 'GST' }];
	 }
	 
	 $scope.addProspectGrid = function() 
		{
			$index++;
		    $scope.dataProspect.push({'id':$index})
		};
		$scope.removeProspectRow = function(name)
		{	
			var Index = -1;		
			var comArr = eval( $scope.dataProspect );
			for( var i = 0; i < comArr.length; i++ ) 
			{
				if( comArr[i].id === name ) 
				{
					Index = i;
					break;
				}				
			}
			$scope.dataProspect.splice( Index, 1 );
			$index = comArr.length;
			for(var s=0;s<$index;s++)
			{
				$scope.dataProspect[s].id = Number(s)+Number(1);
			}			
  	    };
	
	     $scope.uploadCustomerLogo = function(files) 
				{
					//alert(files);
					
					$('#btn-hide').attr('disabled',false);
				   var fileInput = $("#photoinput");
                   var maxSize = fileInput.data('max-size');
				  
					       //cusImage = new FormData();
							if(fileInput.get(0).files.length>=1)
							{
								var fileSize = fileInput.get(0).files[0].size; // in bytes
								//alert(fileSize);
								if(maxSize<fileSize)
								{
									//alert("if");
									//alert('file size is more then' + maxSize + ' bytes');
									swal("Oops sorry...", 'File size is more then' +  maxSize  + ' bytes', "error");
									$('#btn-hide').attr('disabled',true);
									return false;
								}
								else
								{
									//alert("else");
									//alert('file size is correct- '+fileSize+' bytes');
									//swal( 'File size is correct- '+fileSize+' bytes'); 
									 $('#btn-hide').attr('disabled',false);
									 $scope.dummyPhoto="1";
									//$('#dummyPhoto').trigger('blur');
									 //cusImage.remove("usersign");
									 cusImage.append("usersign", files[0]);	
									
								}
							}
							else
							{
								swal("Choose File", 'File size should less then' +  maxSize  + ' bytes', "error");
								//alert(fileInput.get(0).files.length  + "else");
								//$('.btn-hide').attr('disabled',false);
							}
					  
					$scope.$apply();
				};
				
		$scope.rmvFilePath = function()
		{ 
			//alert(asd);
			$scope.ProspectMaster.imagename = "";
		}
	  
	   $scope.ProspectApplications =function()
	   {
           
		   $scope.applicationData = [];
		   $.getJSON("getAllApplications.do",function(json)
			{
					
							//alert(JSON.stringify(json['data']));
							 $scope.applicationData= json['data'];
							  	  	
							 $scope.$apply();
					
			});
			
			
          
	   }
	   
	   $scope.ProspectAppIndustry = function()
	   {
		   $scope.applicanIndustryData = [];
		   $.getJSON("getAllIndustrynames.do",function(json)
			{
					
							//alert(JSON.stringify(json['data']));
							 $scope.applicanIndustryData= json['data'];
							  
							 $scope.$apply();
					
			});
	   }
       
      
       
	   $scope.applicanIndustryCodes = function(getAppCode)
	   {
		   //alert(getAppCode);
		   getAppCode = getAppCode.trim();
           //$scope.applicationIdustry = [];
		   
		   $.getJSON("getApplicationCodes.do",{getAppCode:getAppCode},function(json)
						{
                           //alert(JSON.stringify(json['data'][0].application));
						   $scope.ProspectMaster.application = json['data'][0].application;
					       
                             $scope.$apply();
					       
						});
		   
		   
	   }
	   $scope.applicanIndustryName = function(applicanIndusName)
           {
               //alert(applicanIndusName);
			 applicanIndusName = applicanIndusName.trim();
               $.getJSON("getApplicationIndustryName.do",{applicanIndusName:applicanIndusName},function(json)
						{
                          // alert(JSON.stringify(json['data'][0].applicanIndustry));
						   $scope.ProspectMaster.applicanIndustry = json['data'][0].applicanIndustry;
					          
                             $scope.$apply();
					       
						});
           };
	   $scope.loadProspectCountries = function()
	   {
		   //alert(45376);
		  $.getJSON("getAllCountries.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				 $scope.countryNameArray = json['data'];
				 $scope.$apply();
			}); 
	   }
	   $scope.ProspectcustomerType = function()
	   {
		   $.getJSON("getAllCutmerGroupNames.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				 $scope.customerTypeData = json['data'];
				 $scope.$apply();
			}); 
	   }
	   $scope.ProspectSalesPerson = function()
	   {
		    $.getJSON("getAllSalesMan.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				 $scope.salesPersonData = json['data'];
				 $scope.$apply();
			});
	   }
	   
		$scope.ProspectAddedDepts = function()
		{
			$.getJSON("departmentView.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				$scope.departmentData = json['data'];
				 $scope.$apply();
			});		
		};
	   
	   
	   $scope.ProspectMaster = angular.copy($scope.master);
	   $scope.ProspectMaster =({'customerStatus':'Active','custid':0});  
	   $scope.ProspectCustomerStatus = function()
	   {
		  $scope.customerStatusArray =  [{ id: '1', customerStatus: 'Active' }, { id: '2', customerStatus: 'Inactive'},{ id: '3', customerStatus: 'Closed as Customer'}];
		    
	   }
	   $scope.ProspectTerritory = function()
	   {
		   $.getJSON("getAllTeriotreyNames.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				 $scope.territoryData = json['data'];
				 $scope.$apply();
			});
	   }
	   $scope.ProspectPayment = function()
	   {
		  // alert(getAllPayments.do);
		   $.getJSON("getAllPaymentsAppcode.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				 $scope.paymentTermData = json['data'];
				 $scope.$apply();
			});
	   }
	   
	   $scope.loadProspectDate = function()
	   {
		   $.getJSON("getToDaysDate.do",function(json)
			{
				//alert(JSON.stringify(json['bddate']));
				 $scope.ProspectMaster.bddate = json['bddate'];
				 $scope.$apply();
			});
	   }
	   $scope.ProspectCreditStatus = function()
	   {
		   $.getJSON("getCreditstatus.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				 $scope.creditStatusArray = json['data'];
				 $scope.$apply();
			});
		    //$scope.creditStatusArray = [{ id: '1', creditStatus: 'Active' }, { id: '2', creditStatus: 'Prospect' },{ id: '3', creditStatus: 'Qualified' }];
	   }
		
		
       
       $scope.validEmail = function(emailId)
       {
           //alert(emailId);
           var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
           if(emailId.length>=4)
               {
                  if(emailId.match(mailformat))
                   {
                     // alert("Valid"); 
                       $("#existVal" ).hide();
                   }
                  else
                   {
                       //alert("Invalid"); 
                       $("#existVal" ).show();
                   } 
               }
           else
               {
                    $("#existVal" ).hide();
               }
           
           
       }
       $scope.validEmailAddress = function(emailAddrsId,index)
       {
       
           var index = this.$index;
          
           var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
           if(emailAddrsId.length>=4)
               {
                  if(emailAddrsId.match(mailformat))
                   {
                     //alert("Valid"); 
                       $("#emailAddress" + index ).hide();
                   }
                  else
                   {
                       //alert("Invalid"); 
                       $("#emailAddress" + index ).show();
                   }
               }
           else
               {
                   $("#emailAddress" + index ).hide();
               }
          
       }
       
       $scope.validCode = function(accountId,custId)
       {
           //alert(accountId);
            //alert(custId);
           $.getJSON("validateCustomerCodeDuplicate.do",{account:accountId,validateDuplicate:custId},function(json)
           {
               //alert(JSON.stringify(json));
               var chk = json;
               //alert(chk);
                if (!chk) 
                {
                     // alert("Invalid");
                            $(".existVal" ).show();
							$(".btn-hide").prop('disabled', true);
							
				}
				else
                {
						 //alert("valid");
						   $(".existVal").hide();
						   	$(".btn-hide").prop('disabled', false);
				}
           });
       }
       
      
		$scope.loadsavedProspectCustmers = function(accountname,form)
			  {	
			     
				$.post("getAllprospectCustmerDetailsSavedOnId.do",{account:accountname},function(json)
				{
					
					var p= JSON.stringify(json['check']);
					
				    if(p!=0)
					{
							
							 $scope.ProspectMaster = json['custmer'][0];
							 $scope.dataProspect = json['grid'];
							
							
							 var getImage = json['custmer'][0].imagename;
							 //alert(getImage);
							 if(getImage!=null)
							   {
								   var imgPrew = getImage.trim();
								   if(imgPrew==null || imgPrew=="" )
								   {
									  $('.image-preview').popover('hide');
									  $("#1photoinput").text("Upload Logo");
									  $("#3photoinput").val("");
									  $("#2photoinput").hide();
									  $scope.dummyPhoto="";
										$('#dummyPhoto').trigger('blur');
								   }
								   else
								   {
									   var img = $('<img src="'+getImage+'" width="200" height="150"/>', {id: 'dynamic',width:200,height:150 });
									  
									   var photoName = getImage.split("/");
										//alert(photoName);
										$(".photo").attr("data-content",$(img)[0].outerHTML).popover("show");
										$("#1photoinput").text("Change");
										$("#2photoinput").show();
										$("#3photoinput").val(photoName[1]);
										$scope.dummyPhoto="1";
										$('#dummyPhoto').trigger('blur');
								   }
							   }
							   else
							   {
								   
								  $('.image-preview').popover('hide');
								  $("#1photoinput").text("Upload Logo");
								  $("#3photoinput").val("");
								  $("#2photoinput").hide();
								  $scope.dummyPhoto="";
								  $('#dummyPhoto').trigger('blur');
							   }
							  $scope.$apply();
					   
					}
					else
					{
						//alert("else");
						$scope.ProspectMaster = angular.copy($scope.master);
						$index=1;
			            $scope.dataProspect=[{'id':$index}];
						form.$setPristine(true);
						$('#photo').attr("data-content","").popover('hide');
						$('#3photoinput').val("");
						$('#2photoinput').hide();
						$('#photoinput').val("");
						$("#1photoinput").text("Upload Logo");	
						$scope.dummyPhoto="";
						$('#dummyPhoto').trigger('blur');
						$scope.ProspectMaster.account="";
						$scope.ProspectMaster =({'customerStatus':'Active','custid':0});
						$scope.loadProspectDate();
				        $scope.loadProspectCurrency();
						$scope.$apply();
					}
				 
				
				 
			  });	
			 
			};
			
			
			$scope.saleamancodeProspect = function(salesman)
			{
				$.getJSON("getSalesManCode.do",{salesman:salesman},function(json)
						{
					
					       $scope.ProspectMaster.salesPersonCode=json['data'];
                             $scope.$apply();
					       
						});

			
			
			};
            
           
			

			
	    $scope.ProspectMasterFormSubmit = function (ProspectMaster,form)
		{
			
			//alert(JSON.stringify(ProspectMaster));
		    //$scope.submitted = true;
			if($scope.ProspectMasterForm.$valid)
			{
				customerGridData = [];
				$scope.dataProspect.forEach(function(rowData)
				{ 
				   customerGridData.push(angular.toJson(rowData));	 
				   //alert(customerGridData);
				});
				cusImage.append("formData",angular.toJson(ProspectMaster));
				cusImage.append("gridData",angular.toJson(customerGridData));
			
				$.ajax({
						       url         : "/SCA-360/prospectcustomerFormSubmit.do",
						       data        : cusImage,
						       contentType : false,
						       processData : false,
						       type        : 'POST'
						   }).success(function(data, status){
							          
							  
								if(data==true)
									{
										
										 //alert(JSON.stringify(cusImage));

										swal( 'Prospect Master Saved Successfully'); 
										$scope.ProspectMaster = angular.copy($scope.master);
										$index=1;
										$scope.dataProspect=[{'id':$index}];
										form.$setPristine(true);
										cusImage = new FormData();
										$('.photo').attr("data-content","").popover('hide');
										$('#3photoinput').val("");
										$('#2photoinput').hide();
//										$('#photoinput').val("");
										$("#1photoinput").text("Upload Logo");
										$scope.dummyPhoto="";
										$scope.customerName = "";
										$scope.loadProspectDate();
										$scope.loadProspectCurrency();
										$scope.ProspectMaster =({'customerStatus':'Active','custid':0});
										$scope.ProspectAccountCodes();
										//location.reload(); 
										
										$scope.$apply();
										
										
										
									}
								else
									{
									   	swal("Oops sorry...", "Something went wrong!", "error");
										//$scope.$scope.customerMaster.taxName = conTax;
							 			//$('.btn-hide2').attr('disabled',false);
									}
							    
							   
				        	   
				           });
			}
			else
			{
				var field = null, firstError = null;
					for (field in form) 
					{
						if (field[0] != '$') 
						{
							if (firstError === null && !form[field].$valid) 
							{
								firstError = form[field].$name;
							}
							if (form[field].$pristine) 
							{
								form[field].$dirty = true;
							}
						}	
					}
			}
			
		}
		 //---------Reset Form----
		   $scope.resetProspectMasterForm = function(form)
		   {	
		   		//alert(JSON.stringify($scope.customerMaster)); 
		 		$scope.ProspectMaster = angular.copy($scope.master);
				$index=1;
		        $scope.dataProspect=[{'id':$index}];
				cusImage = new FormData();
			    form.$setPristine(true);
				$('#photo').attr("data-content","").popover('hide');
			    $('#3photoinput').val("");
			    $('#2photoinput').hide();
				$('#photoinput').val("");
				$("#1photoinput").text("Upload Logo");	
				$scope.loadsavedProspectCustmers();
				$scope.customerName = "";
				$scope.dummyPhoto="";
				$scope.ProspectMaster =({'customerStatus':'Active','custid':0});
				$scope.loadProspectDate();
				$scope.loadProspectCurrency();
               	$(".btn-hide").prop('disabled', false);
				
				$scope.$apply();
					
			};	
		});




//==================================================//
         //====Customer Master =====//   
//==================================================//
angular.module('app')
.controller('CustomerMaster',function($scope,$http,$rootScope){
	
	 $scope.data = [];
	 $index=0;
	 $scope.master = {};
	 var customerGridData = [];
	 //var customerData = new Object();
	 var cusImage = new FormData();
   
     
	 /*$scope.getTaxName = function()
	 {
		 
		 $.getJSON("getTaxNamesForCustmerMaster.do",function(json)
		 {
			 //alert(JSON.stringify(json));
			 $scope.taxNameData = json['tname'];
			 $scope.$apply();
		 });
	 }*/
	 $scope.getTaxNameByCountry = function(countryCode)
	 {
		 if(countryCode == undefined || countryCode == "")
		 {
			 
			 $.getJSON("getTaxNamesForCustmerMaster.do",function(json)
			 {
				 //alert(JSON.stringify(json));
				 $scope.taxNameData = json['tname'];
				 $scope.$apply();
			 });
		 }
		 else
		 {
			 
			$.getJSON("getTaxNamesForCustmerMaster.do",{countrycode:countryCode},function(json)
			  {
				  //alert(JSON.stringify(json['tname'][0].taxName));
				  $scope.customerMaster.taxName = json['tname'][0].taxName;
				  $scope.$apply();
			  }); 
		 }
		  
	 }
	 $scope.loadAccountCodes = function() 
	 {
		     $scope.customerNameCode = [];
		
                        $.getJSON("getAllAccountNames.do",function(json)
						{
					
							//alert(JSON.stringify(json['data']));
							 $scope.customerNameCode = json['data'];
							  	  	
							 $scope.$apply();
					
						});

                  
	 }
	 $scope.loadCurrency = function()
	 {
		 $.getJSON("getLocalCureenceyOfCountryCode.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				 $scope.customerMaster.currency = json['data'];
				 $scope.$apply();
			});
		 //$scope.loadCurrency = [{ id: '1', taxName: 'VAT' }, { id: '2', taxName: 'GST' }];
	 }
	 
	 $scope.addField = function() 
		{
			$index++;
		    $scope.data.push({'id':$index})
		};
		$scope.removeRow = function(name)
		{	
			var Index = -1;		
			var comArr = eval( $scope.data );
			for( var i = 0; i < comArr.length; i++ ) 
			{
				if( comArr[i].id === name ) 
				{
					Index = i;
					break;
				}				
			}
			$scope.data.splice( Index, 1 );
			$index = comArr.length;
			for(var s=0;s<$index;s++)
			{
				$scope.data[s].id = Number(s)+Number(1);
			}			
  	    };
	
	     $scope.uploadCustomerLogo = function(files) 
				{
					//alert(files);
					
					$('#btn-hide').attr('disabled',false);
				   var fileInput = $("#photoinput");
                   var maxSize = fileInput.data('max-size');
				  
					       //cusImage = new FormData();
							if(fileInput.get(0).files.length>=1)
							{
								var fileSize = fileInput.get(0).files[0].size; // in bytes
								//alert(fileSize);
								if(maxSize<fileSize)
								{
									//alert("if");
									//alert('file size is more then' + maxSize + ' bytes');
									swal("Oops sorry...", 'File size is more then' +  maxSize  + ' bytes', "error");
									$('#btn-hide').attr('disabled',true);
									return false;
								}
								else
								{
									//alert("else");
									//alert('file size is correct- '+fileSize+' bytes');
									//swal( 'File size is correct- '+fileSize+' bytes'); 
									 $('#btn-hide').attr('disabled',false);
									 $scope.dummyPhoto="1";
									//$('#dummyPhoto').trigger('blur');
									 //cusImage.remove("usersign");
									 cusImage.append("usersign", files[0]);	
									
								}
							}
							else
							{
								swal("Choose File", 'File size should less then' +  maxSize  + ' bytes', "error");
								//alert(fileInput.get(0).files.length  + "else");
								//$('.btn-hide').attr('disabled',false);
							}
					  
					$scope.$apply();
				};
				
		$scope.rmvFilePath = function()
		{ 
			//alert(asd);
			$scope.customerMaster.imagename = "";
		}
	  
	   $scope.getApplications =function()
	   {
           
		   $scope.applicationData = [];
		   $.getJSON("getAllApplications.do",function(json)
			{
					
							//alert(JSON.stringify(json['data']));
							 $scope.applicationData= json['data'];
							  	  	
							 $scope.$apply();
					
			});
			
			
          
	   }
	   
	   $scope.getApplicationIndustry = function()
	   {
		   $scope.applicanIndustryData = [];
		   $.getJSON("getAllIndustrynames.do",function(json)
			{
					
							//alert(JSON.stringify(json['data']));
							 $scope.applicanIndustryData= json['data'];
							  
							 $scope.$apply();
					
			});
	   }
       
      
       
	   $scope.applicanIndustryCodes = function(getAppCode)
	   {
		   //alert(getAppCode);
		   getAppCode = getAppCode.trim();
           //$scope.applicationIdustry = [];
		   
		   $.getJSON("getApplicationCodes.do",{getAppCode:getAppCode},function(json)
						{
                           //alert(JSON.stringify(json['data'][0].application));
						   $scope.customerMaster.application = json['data'][0].application;
					       
                             $scope.$apply();
					       
						});
		   
		   
	   }
	   $scope.applicanIndustryName = function(applicanIndusName)
           {
               //alert(applicanIndusName);
			 applicanIndusName = applicanIndusName.trim();
               $.getJSON("getApplicationIndustryName.do",{applicanIndusName:applicanIndusName},function(json)
						{
                          // alert(JSON.stringify(json['data'][0].applicanIndustry));
						   $scope.customerMaster.applicanIndustry = json['data'][0].applicanIndustry;
					          
                             $scope.$apply();
					       
						});
           };
	   $scope.loadCountries = function()
	   {
		   //alert(45376);
		  $.getJSON("getAllCountries.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				 $scope.countryNameArray = json['data'];
				 $scope.$apply();
			}); 
	   }
	   $scope.loadcustomerType = function()
	   {
		   $.getJSON("getAllCutmerGroupNames.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				 $scope.customerTypeData = json['data'];
				 $scope.$apply();
			}); 
	   }
	   $scope.getSalesPerson = function()
	   {
		    $.getJSON("getAllSalesMan.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				 $scope.salesPersonData = json['data'];
				 $scope.$apply();
			});
	   }
	   
		$scope.loadAddedDepartments = function()
		{
			$.getJSON("departmentView.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				$scope.departmentData = json['data'];
				 $scope.$apply();
			});		
		};
	   
	   
	    
	   $scope.getCustomerStatus = function()
	   {
		  $scope.customerStatusArray =  [{ id: '1', customerStatus: 'Active' }, { id: '2', customerStatus: 'Inactive or on Hold'}];
		    
	   }
	   $scope.customerMaster = angular.copy($scope.master);
	   $scope.customerMaster =({'customerStatus':'Active','custid':0}); 
	   $scope.getTerritory = function()
	   {
		   $.getJSON("getAllTeriotreyNames.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				 $scope.territoryData = json['data'];
				 $scope.$apply();
			});
	   }
	   $scope.getPayment = function()
	   {
		  // alert(getAllPayments.do);
		   $.getJSON("getAllPaymentsAppcode.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				 $scope.paymentTermData = json['data'];
				 $scope.$apply();
			});
	   }
	   
	   $scope.loadDate = function()
	   {
		   $.getJSON("getToDaysDate.do",function(json)
			{
				//alert(JSON.stringify(json['bddate']));
				 $scope.customerMaster.bddate = json['bddate'];
				 $scope.$apply();
			});
	   }
	   $scope.loadCreditStatus = function()
	   {
		   $.getJSON("getCreditstatus.do",function(json)
			{
				//alert(JSON.stringify(json['data']));
				 $scope.creditStatusArray = json['data'];
				 $scope.$apply();
			});
		    //$scope.creditStatusArray = [{ id: '1', creditStatus: 'Active' }, { id: '2', creditStatus: 'Prospect' },{ id: '3', creditStatus: 'Qualified' }];
	   }
		
		/*$scope.update = function(addr1,addr2,addr3,stateProvince,country,zipCode,post,poBox) {
			//alert($scope.customerMaster.billingAddress1);
			//alert(addr1);
              $scope.customerMaster.shippingAddress1 = addr1;
			  $scope.customerMaster.shippingAddress2 = addr2;
			  $scope.customerMaster.shippingAddress3 = addr3;
			  $scope.customerMaster.shippingStateProvince = stateProvince;
			  $scope.customerMaster.shippingCountries = country;
			  $scope.customerMaster.shippingZipCode = zipCode;
			  $scope.customerMaster.shippingPost = post;
			  $scope.customerMaster.shippingpoBox = poBox;
			  
        };*/
       
       $scope.validEmail = function(emailId)
       {
           //alert(emailId);
           var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
           if(emailId.length>=4)
               {
                  if(emailId.match(mailformat))
                   {
                     // alert("Valid"); 
                       $("#existVal" ).hide();
                   }
                  else
                   {
                       //alert("Invalid"); 
                       $("#existVal" ).show();
                   } 
               }
           else
               {
                    $("#existVal" ).hide();
               }
           
           
       }
       $scope.validEmailAddress = function(emailAddrsId,index)
       {
       
           var index = this.$index;
          
           var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
           if(emailAddrsId.length>=4)
               {
                  if(emailAddrsId.match(mailformat))
                   {
                     //alert("Valid"); 
                       $("#emailAddress" + index ).hide();
                   }
                  else
                   {
                       //alert("Invalid"); 
                       $("#emailAddress" + index ).show();
                   }
               }
           else
               {
                   $("#emailAddress" + index ).hide();
               }
          
       }
       
       $scope.validCode = function(accountId,custId)
       {
           //alert(accountId);
            //alert(custId);
           $.getJSON("validateCustomerCodeDuplicate.do",{account:accountId,validateDuplicate:custId},function(json)
           {
               //alert(JSON.stringify(json));
               var chk = json;
               //alert(chk);
                if (!chk) 
                {
                     // alert("Invalid");
                            $(".existVal" ).show();
							$(".btn-hide").prop('disabled', true);
							
				}
				else
                {
						 //alert("valid");
						   $(".existVal").hide();
						   	$(".btn-hide").prop('disabled', false);
				}
           });
       }
       
      $scope.loadCustomerDBData = function(form)
	  {
		 
		 var editcustdb = $rootScope.loadEditCustDB;
		  
		 if(editcustdb == undefined || editcustdb == "")
		 {
			 
			$rootScope.loadEditCustDB = "";
			    //$scope.customerMaster = angular.copy($scope.master);
//				$index=1;
//		        $scope.data=[{'id':$index}];
//				cusImage = new FormData();
//			    form.$setPristine(true);
//				$('#photo').attr("data-content","").popover('hide');
//			    $('#3photoinput').val("");
//			    $('#2photoinput').hide();
//				$('#photoinput').val("");
//				$("#1photoinput").text("Upload Logo");	
//				//$scope.loadsavedCustmers();
//				$scope.customerName = "";
//				$scope.dummyPhoto="";
//				$scope.customerMaster = ({'customerStatus':'Active','custid':0});
//				$scope.loadDate();
//				$scope.loadCurrency();
//				
//               	$(".btn-hide").prop('disabled', false);
//				
//				$scope.$apply();
		 }
		 else
		 {
			  
			$.post("getAllCustmerDetailsSavedOnId.do",function(json)
			  {
				 // alert(JSON.stringify(json['custmer'][0].account));
				  $scope.customerMaster = json['custmer'][0];
				  $scope.data = json['grid'];
				  $scope.customerName = json['custmer'][0].accountid + "-" + json['custmer'][0].account;
				  var getImage = json['custmer'][0].imagename;
								 //alert(getImage);
								 if(getImage!=null)
								   {
									   var imgPrew = getImage.trim();
									   if(imgPrew==null || imgPrew=="" )
									   {
										  $('.image-preview').popover('hide');
										  $("#1photoinput").text("Upload Logo");
										  $("#3photoinput").val("");
										  $("#2photoinput").hide();
										  $scope.dummyPhoto="";
											$('#dummyPhoto').trigger('blur');
									   }
									   else
									   {
										   var img = $('<img src="'+getImage+'" width="200" height="150"/>', {id: 'dynamic',width:200,height:150 });
										  
										   var photoName = getImage.split("/");
											//alert(photoName);
											$(".photo").attr("data-content",$(img)[0].outerHTML).popover("show");
											$("#1photoinput").text("Change");
											$("#2photoinput").show();
											$("#3photoinput").val(photoName[1]);
											$scope.dummyPhoto="1";
											$('#dummyPhoto').trigger('blur');
									   }
								   }
								   else
								   {
									   
									  $('.image-preview').popover('hide');
									  $("#1photoinput").text("Upload Logo");
									  $("#3photoinput").val("");
									  $("#2photoinput").hide();
									  $scope.dummyPhoto="";
									  $('#dummyPhoto').trigger('blur');
								   }
								  
								  
								  $scope.$apply();
								  
			  }); 
			  $rootScope.loadEditCustDB = "";
			  
		 }
		 
		// if(editcustdb == undefined || editcustdb == "")
//		 {
//			 alert("if");
//			 
//			 
//			 /*$scope.customerMaster = angular.copy($scope.master);
//				$index=1;
//		        $scope.data=[{'id':$index}];
//				cusImage = new FormData();
//			    form.$setPristine(true);
//				$('#photo').attr("data-content","").popover('hide');
//			    $('#3photoinput').val("");
//			    $('#2photoinput').hide();
//				$('#photoinput').val("");
//				$("#1photoinput").text("Upload Logo");	
//				$scope.loadsavedCustmers();
//				$scope.customerName = "";
//				$scope.dummyPhoto="";
//				$scope.customerMaster =({'customerStatus':'Active','custid':0});
//				$scope.loadDate();
//				$scope.loadCurrency();
//				
//               	$(".btn-hide").prop('disabled', false);
//				
//				$scope.$apply();*/
//		 }
//		 else
//		 {
//			 alert("else");
//			 /*$.post("getAllCustmerDetailsSavedOnId.do",function(json)
//			  {
//				 // alert(JSON.stringify(json['custmer'][0].account));
//				  $scope.customerMaster = json['custmer'][0];
//				  $scope.data = json['grid'];
//				  $scope.customerName = json['custmer'][0].accountid + "-" + json['custmer'][0].account;
//				  var getImage = json['custmer'][0].imagename;
//								 //alert(getImage);
//								 if(getImage!=null)
//								   {
//									   var imgPrew = getImage.trim();
//									   if(imgPrew==null || imgPrew=="" )
//									   {
//										  $('.image-preview').popover('hide');
//										  $("#1photoinput").text("Upload Logo");
//										  $("#3photoinput").val("");
//										  $("#2photoinput").hide();
//										  $scope.dummyPhoto="";
//											$('#dummyPhoto').trigger('blur');
//									   }
//									   else
//									   {
//										   var img = $('<img src="'+getImage+'" width="200" height="150"/>', {id: 'dynamic',width:200,height:150 });
//										  
//										   var photoName = getImage.split("/");
//											//alert(photoName);
//											$(".photo").attr("data-content",$(img)[0].outerHTML).popover("show");
//											$("#1photoinput").text("Change");
//											$("#2photoinput").show();
//											$("#3photoinput").val(photoName[1]);
//											$scope.dummyPhoto="1";
//											$('#dummyPhoto').trigger('blur');
//									   }
//								   }
//								   else
//								   {
//									   
//									  $('.image-preview').popover('hide');
//									  $("#1photoinput").text("Upload Logo");
//									  $("#3photoinput").val("");
//									  $("#2photoinput").hide();
//									  $scope.dummyPhoto="";
//									  $('#dummyPhoto').trigger('blur');
//								   }
//								  
//								  $scope.$apply();
//			  });*/
//			   $rootScope.loadEditCustDB = "";
//		 }
		  
	  }
	  
	  
		$scope.loadsavedCustmers = function(accountname,form)
			  {	
			     
				$rootScope.loadEditCustDB = "";
				$.post("getAllCustmerDetailsSavedOnId.do",{account:accountname},function(json)
				{
					
					 
					var p= JSON.stringify(json['check']);
					//alert(JSON.stringify(json['custmer'].length));
					    /*$scope.customerMaster = angular.copy($scope.master);
						$index=1;
			            $scope.data=[{'id':$index}];*/
				    if(p!=0)
					{
							//var getAppCode = json['custmer'][0].application;
							//var getIndustryName = json['custmer'][0].applicanIndustry;
							
							 $scope.customerMaster = json['custmer'][0];
							 $scope.data = json['grid'];
							 //$('#ApplicationCode').val(getAppCode).trigger('chosen:updated');
							// $scope.customerMaster.application = getAppCode;
							 //$('#ApplicanIndustry').val(getIndustryName).trigger('chosen:updated');
							 //$scope.customerMaster.applicanIndustry = getIndustryName;	
								
							 /*var getTaxName = json['custmer'][0].taxName;
								$.getJSON("getTaxNamesForCustmerMaster.do",{countrycode:countryCode},function(json)
								{
		
										 $scope.taxName = json['tname'];
										 var optionValues="";
										 //alert(JSON.stringify( json['tname']));
									for(var i=0;i<json['tname'].length;i++)
									{
										optionValues +="<option value='"+json['tname'][i].id+"'>"+json['tname'][i].taxName+"</option>";
									}				
									$('#picturegallery').empty();
									var newOption = $(optionValues);
									$('#picturegallery').append(newOption);				
									$('#picturegallery').trigger("chosen:updated");	
		
		
										$('#picturegallery').val(getTaxName).trigger('chosen:updated');	
										$scope.customerMaster.taxName = getTaxName;	 
										
									 $scope.$apply();
									 
								});*/
							
							 var getImage = json['custmer'][0].imagename;
							 //alert(getImage);
							 if(getImage!=null)
							   {
								   var imgPrew = getImage.trim();
								   if(imgPrew==null || imgPrew=="" )
								   {
									  $('.image-preview').popover('hide');
									  $("#1photoinput").text("Upload Logo");
									  $("#3photoinput").val("");
									  $("#2photoinput").hide();
									  $scope.dummyPhoto="";
										$('#dummyPhoto').trigger('blur');
								   }
								   else
								   {
									   var img = $('<img src="'+getImage+'" width="200" height="150"/>', {id: 'dynamic',width:200,height:150 });
									  
									   var photoName = getImage.split("/");
										//alert(photoName);
										$(".photo").attr("data-content",$(img)[0].outerHTML).popover("show");
										$("#1photoinput").text("Change");
										$("#2photoinput").show();
										$("#3photoinput").val(photoName[1]);
										$scope.dummyPhoto="1";
										$('#dummyPhoto').trigger('blur');
								   }
							   }
							   else
							   {
								   
								  $('.image-preview').popover('hide');
								  $("#1photoinput").text("Upload Logo");
								  $("#3photoinput").val("");
								  $("#2photoinput").hide();
								  $scope.dummyPhoto="";
								  $('#dummyPhoto').trigger('blur');
							   }
							  $scope.$apply();
					   
					}
					else
					{
						//alert("else");
						$scope.customerMaster = angular.copy($scope.master);
						$index=1;
			            $scope.data=[{'id':$index}];
						form.$setPristine(true);
						$('#photo').attr("data-content","").popover('hide');
						$('#3photoinput').val("");
						$('#2photoinput').hide();
						$('#photoinput').val("");
						$("#1photoinput").text("Upload Logo");	
						$scope.dummyPhoto="";
						$('#dummyPhoto').trigger('blur');
						$scope.customerMaster.account="";
						$scope.customerMaster =({'customerStatus':'Active','custid':0});
						$scope.loadDate();
						$scope.loadCurrency();
                        $rootScope.loadEditCustDB = "";
						$scope.$apply();
					}
				 
				
				 
			  });	
			 
			};
			
			
			$scope.saleamancode = function(salesman)
			{
				$.getJSON("getSalesManCode.do",{salesman:salesman},function(json)
						{
					
					       $scope.customerMaster.salesPersonCode=json['data'];
                             $scope.$apply();
					       
						});

			
			
			};
            
           
			

			
	    $scope.customerMasterFormSubmit = function (customerMaster,form)
		{
			
			//alert(JSON.stringify(customerMaster));
		    //$scope.submitted = true;
			if($scope.customerMasterForm.$valid)
			{
				customerGridData = [];
				$scope.data.forEach(function(rowData)
				{ 
				   customerGridData.push(angular.toJson(rowData));	 
				   //alert(customerGridData);
				});
				cusImage.append("formData",angular.toJson(customerMaster));
				cusImage.append("gridData",angular.toJson(customerGridData));
			
				$.ajax({
						       url         : "/SCA-360/customerFormSubmit.do",
						       data        : cusImage,
						       contentType : false,
						       processData : false,
						       type        : 'POST'
						   }).success(function(data, status){
							           /* checkCookie();
										function checkCookie() {
										var user=getCookie("username");
										if (user != "") {
											alert("Welcome again " + user);
										} else {
										   user = prompt("Please enter your name:","");
										   //user = cusImage;
										   if (user != "" && user != null) {
											   setCookie("username", user, 30);
										   }
										}
									}
									function getCookie(cname) {
										
										var name = cname + "=";
										var decodedCookie = decodeURIComponent(document.cookie);
										alert(decodedCookie + " 1 ");
										var ca = decodedCookie.split(';');
										for(var i = 0; i < ca.length; i++) {
											var c = ca[i];
											while (c.charAt(0) == ' ') {
												c = c.substring(1);
											}
											if (c.indexOf(name) == 0) {
												return c.substring(name.length, c.length);
											}
										}
										return "";
									}
									function setCookie(cname,cvalue,exdays) {
										//alert(JSON.stringify(cvalue));
										var d = new Date();
										
										d.setTime(d.getTime() + (exdays*24*60*60*1000));
										var expires = "expires=" + d.toGMTString();
										document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
									}
									
									document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";*/
							  
								if(data==true)
									{
										
										 //alert(JSON.stringify(cusImage));

										swal( 'Customer Master Saved Successfully'); 
										$scope.customerMaster = angular.copy($scope.master);
										$index=1;
										$scope.data=[{'id':$index}];
										form.$setPristine(true);
										cusImage = new FormData();
										$('.photo').attr("data-content","").popover('hide');
										$('#3photoinput').val("");
										$('#2photoinput').hide();
//										$('#photoinput').val("");
										$("#1photoinput").text("Upload Logo");
										$scope.dummyPhoto="";
										$scope.customerName = "";
										$scope.loadDate();
										$scope.loadCurrency();
										$scope.customerMaster =({'customerStatus':'Active','custid':0});
										$scope.loadAccountCodes();
										$rootScope.loadEditCustDB = "";
										$scope.$apply();
										
										
										
									}
								else
									{
									   	swal("Oops sorry...", "Something went wrong!", "error");
										//$scope.$scope.customerMaster.taxName = conTax;
							 			//$('.btn-hide2').attr('disabled',false);
									}
							    
							   
				        	   
				           });
			}
			else
			{
				var field = null, firstError = null;
					for (field in form) 
					{
						if (field[0] != '$') 
						{
							if (firstError === null && !form[field].$valid) 
							{
								firstError = form[field].$name;
							}
							if (form[field].$pristine) 
							{
								form[field].$dirty = true;
							}
						}	
					}
			}
			/*if($scope.customerMasterForm.$valid)
			{
				customerGridData = [];
				$scope.data.forEach(function(rowData)
				{ 
				   customerGridData.push(angular.toJson(rowData));	 
				   //alert(customerGridData)
				});
				
				cusImage.append("formData",angular.toJson(customerMaster));
				cusImage.append("gridData",angular.toJson(customerGridData));
				//alert(JSON.stringify(cusImage)+ ' 1 ');
				$('#btn-hide').attr('disabled',true);
				$.ajax({
						       url         : "/SCA-360/customerFormSubmit.do",
						       data        : cusImage,
						       contentType : false,
						       processData : false,
						       type        : 'POST'
						   }).success(function(data, status){
							   //alert(data);
								if(data==true)
									{
										$('#btn-hide').attr('disabled',false);
										swal( 'Customer Master Saved Successfully'); 
										$scope.customerMaster = angular.copy($scope.master);
										$index=1;
										$scope.data=[{'id':$index}];
										$('#photo').attr("data-content","").popover('hide');
										$('#3photoinput').val("");
										$('#2photoinput').hide();
										$('#photoinput').val("");
										$("#1photoinput").text("Upload Logo");
										$scope.dummyPhoto="";
										$scope.customerName = "";
										$scope.loadDate();
										$scope.loadCurrency();
										$scope.customerMaster =({'customerStatus':'Active','custid':0});
										$scope.loadAccountCodes();
										cusImage = new FormData();
										//$('#picturegallery').val("['']").trigger('chosen:updated');
//										$('#ApplicationCode').val("['']").trigger('chosen:updated');
//										$('#ApplicanIndustry').val("['']").trigger('chosen:updated');
										form.$setPristine(true);
										$scope.$apply();
										
										
										
									}
								else
									{
									   	swal("Oops sorry...", "Something went wrong!", "error");
										//$scope.$scope.customerMaster.taxName = conTax;
							 			$('#btn-hide').attr('disabled',false);
									}
							    
							   
				        	   
				           });
				
			}
			else
			{
				var field = null, firstError = null;
					for (field in form) 
					{
						if (field[0] != '$') 
						{
							if (firstError === null && !form[field].$valid) 
							{
								firstError = form[field].$name;
							}
							if (form[field].$pristine) 
							{
								form[field].$dirty = true;
							}
						}	
					}
			}*/
		}
		 //---------Reset Form----
		   $scope.resetCustomerMasterForm = function(form)
		   {	
		   		
		 		$scope.customerMaster = angular.copy($scope.master);
				$index=1;
		        $scope.data=[{'id':$index}];
				cusImage = new FormData();
			    form.$setPristine(true);
				$('#photo').attr("data-content","").popover('hide');
			    $('#3photoinput').val("");
			    $('#2photoinput').hide();
				$('#photoinput').val("");
				$("#1photoinput").text("Upload Logo");	
				//$scope.loadsavedCustmers();
				$scope.customerName = "";
				$scope.dummyPhoto="";
				$scope.customerMaster =({'customerStatus':'Active','custid':0});
				$scope.loadDate();
				$scope.loadCurrency();
				$rootScope.loadEditCustDB = "";
               	$(".btn-hide").prop('disabled', false);
				
				$scope.$apply();
					
			};	
		});




//==========================================//
//=========Production Scheduele=======//
//==========================================//
			
			
angular.module('app').directive('fixedTableHeaders', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $timeout(function() {

                container = element.parentsUntil(attrs.fixedTableHeaders);
                element.stickyTableHeaders({
                    scrollableArea: container,
                    "fixedOffset": 2
                });

            }, 0);
        }
    }
}]);
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
                $scope.schedulerPopData = data.productionscheduler



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

//==========================================================//
     //--------------Test Report--------------------//
//=========================================================//
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

	
//==========================================================//
     //--------------Service Inquery--------------------//
//=========================================================//

angular.module('app')
    .controller('serviceInquiryController', function($scope, $http,$rootScope,$state) {
		
		        $scope.master = {};

													 
			  var statusObj = new Object();
        statusObj.targetdropdownname = "CustmerDetails";
        statusObj.targetcolumnname = "customerStatus";
        statusObj.targetcolumncode = "custid";
        statusObj.columnname = "accountid";	
		
		
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
				
					 $scope.serviceInq.customerStatus=data[0].customerStatus;
			
					
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
//==========================================================//
     //--------------QA Service--------------------//
//=========================================================//
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
            "text": "Leakage",
            "id": "5"
        }, {
            "text": "Noise",
            "id": "6"
        }, {
            "text": "Vibration",
            "id": "7"
        }];
        $scope.actionRequired1 = [{
            "text": "Feed back to factory",
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


//==========================================================//
     //--------------QAEXT--------------------//
//=========================================================//
angular.module('app')
.controller('QAServiceEXTController',function($scope,$http,$rootScope,$state){
	var Modeifyimageflag=false;


$scope.LoadQaExtRef=function(){
	var	caseReferenceNumber=$rootScope.qaextRef
	//alert(caseReferenceNumber);
			var httpRequest = $http({
					method: 'POST',
					url : "/SCA-360/getAllQAIssue.do",
				data: caseReferenceNumber,
   				}).success(function(data, status) 
				{
					
				
 					if(data.photoPath!=null && data.photoPath!=null)
					  {
						  
						  var img = $('<img src="'+data.photoPath+'" width="200" height="150"/>', {id: 'dynamic',width:200,height:150 });
						 
						  
						  var photoName = data.photoPath.split("/");
						  
						  
					  
						 $("#photo").attr("data-content",$(img)[0].outerHTML).popover("show");
		            	 $("#1photoinput").text("Change");
	        		     $("#2photoinput").show();
			             $("#3photoinput").val(photoName[1]);        
					 
						 $scope.dummyPhoto="1";
						 $('#dummyPhoto').trigger('blur');
						 
						  $('#caseReferenceNumber1').attr('disabled',true);	
					$rootScope.qaextRef="";
					//alert(JSON.stringify(data));
					$scope.QAService=data;
					$scope.fruitSelection3=data.qaIssuesFor
					$scope.fruitSelection4= data.actionRequired
					
						        
					  }
					  else
					  {
						  $('.image-preview').popover('hide');
						  $("#1photoinput").text("Upload Photo");
					
						  
						  $("#3photoinput").val("");
						
						  $("#2photoinput").hide();
						 
					  }
				 
					
					// $scope.IsVisible = $scope.IsVisible ? false : true;
				
				})
	
};

$scope.getReferenceNumber=function(){
	var refernceNumber='C';
	//alert(refernceNumber);
	var httpRequest = $http({
					method: 'POST',
					url : "/SCA-360/getSequenceNumber.do",
				data: refernceNumber,
   				}).success(function(data, status) 
				{
					//alert(JSON.stringify(data));
					$scope.QAService.caseReferenceNumber=data.sequence;
							$('#caseReferenceNumber1').attr('disabled',true);
					})
	
}


var ExtCaseRef = new Object();
		ExtCaseRef.tablename = "com.finsol.model.QAIssue";
		ExtCaseRef.columnname = "casereferenceno";
$scope.DupextRef = function(values)
		{
			ExtCaseRef.value = values;
			var jsonObj= JSON.stringify(ExtCaseRef);
			//alert(JSON.stringify(jsonObj));
			var httpRequest = $http({
			method: 'POST',
			url : "/SCA-360/checkValue.do",
			data: jsonObj,
		   }).success(function(data, status) 
			{
				//alert(data)
				
				if(data==true)
				{
					
					
					$("#existValEXT").show();
				}
				else
				{
					$("#existValEXT").hide();
				}			
			
			});	   	   
		};


 var cusImageExt = new FormData();
	
	var FormobjExt=new Object();
	
		/*var checkArray = new Array();
		var checkArray2 = new Array();
		var checkArray3 = new Array();
		var checkArray4 = new Array();*/
		
		
	$scope.LoadStatusSelect=function(){
	$scope.LoadStatus = [
		{id: 1, label: "Active"},
		{id: 2, label: "InActive"}];
$scope.customerStatusdata=$scope.LoadStatus

};
  

$scope.qaIssuesFor2 = [{ "text": "Customer complaint about product quality", "id": "0"}, { "text": "Missing part / short shippment","id": "1" },{ "text": "wrong items received","id":"2" },{"text": "part damaged during transportation", "id": "3"}];
  $scope.actionRequired2 = [{ "text": "Feedback to factory","id": "0"},{"text": "Claim for replacement","id": "1" },{ "text": "Feed back to Service Depart","id": "2" },
 {"text": "Feed back to Engineering","id": "3"}, {"text": "Feed back to Salesman to liaise with customer","id": "4" }];
  
	  $scope.OnLoadQA=function(){
	 var httpRequest = $http({
				method: 'POST',
				url : "/SCA-360/getServerDate.do",
				data: {},
			  }).success(function(data, status) 
			  {	
	 
	
	$scope.QAService = ({qualityAssurance:1,'attachDrawing':'0','scaDate':data.serverdate,'modifyFlag':'false','shipmentDate':data.serverdate,'recievingDate':data.serverdate})
	
			  });
	  
	 };
	
	  $scope.fruitSelection4=[];
	  $scope.testId4 = function(id)
	 {
		var idx = $scope.fruitSelection4.indexOf(id);
		 
		  if(idx > -1){
			  $scope.fruitSelection4.splice(idx,1);
		  }else{
			   $scope.fruitSelection4.push(id);
			 
		  }
	
		 
	 };
	 $scope.fruitSelection3=[];
	  $scope.testId3 = function(id)
	 {
		  var idx = $scope.fruitSelection3.indexOf(id);
		 
		  if(idx > -1){
			  $scope.fruitSelection3.splice(idx,1);
		  }else{
			   $scope.fruitSelection3.push(id);
		  }
		 
		/*$scope.QAService.qaIssuesFor=id;
		checkArray3.push($scope.QAService.qaIssuesFor);*/
		
		 
	 };
	 
	 ////submit
	
	 ///QAEXTSUBMIT
	  $scope.QualExtSubmit=function(form,QAService){
		 
		  if($scope.QAEXTForm.$valid){
		 $scope.QAService.qaIssuesFor=$scope.fruitSelection3;
		$scope.QAService.actionRequired =$scope.fruitSelection4
		 
	if($scope.QAService.modifyFlag==null){
				$scope.QAService.modifyFlag=true;
				
			}
			
			if(!Modeifyimageflag){
				var f = new File([""], "filename");

					 cusImageExt.delete("userdrawing");					 
					cusImageExt.append("userdrawing", f);
				
				
			}
			
	/* var f = new File([""], "filename");

					 cusImage.delete("userdrawing");					 
					cusImage.append("userdrawing", f);*/
	FormobjExt=$scope.QAService;
	//alert(FormobjExt);
	cusImageExt.append("formData", angular.toJson(FormobjExt));
	
	$http.post("/SCA-360/saveQAIssue.do", cusImageExt, {
        withCredentials: true,
        	 headers: {'Content-Type': undefined },
       	 transformRequest: angular.identity
		}).success(function(data, status) 
			{
					swal( 'Saved Successfully'); 
					$state.go('app.qaService')
			//ng-show=" $scope.IsVisible" 
           });
	}else  {
			
					var field = null, firstError = null;
					for (field in form) 
					{
						if (field[0] != '$') 
						{
							if (firstError === null && !form[field].$valid) 
							{
								firstError = form[field].$name;
							}
							if (form[field].$pristine) 
							{
								form[field].$dirty = true;
							}
						}	
					}
				}
		 
	 };
	 
	 //UPLOADFILE
		$scope.loadCustomerName = function(customerName)
{
 

$.getJSON("getAllAccountNames.do",function(json)
{
 $scope.names= json['data'];
//alert(JSON.stringify($scope.names));
})
};
	
	//UPLOADFILE
	 $scope.uploadUserFile2 = function(files) 
	{
		Modeifyimageflag=true;
		//alert(files);
		$scope.dummyPhoto="1";
		//$('#dummyPhoto').trigger('blur');
		cusImageExt.delete("userdrawing");
		cusImageExt.append("userdrawing", files[0]);
		//alert(cusImage);
		$scope.$apply();
		modifyFlag1=true;
	};
	
	


});

//==========================================================//
     //--------------Reports--------------------//
//=========================================================//

angular.module('app')
    .controller('ReportController', function($scope, $http, $rootScope) {

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


//==========================================================//
     //--------------service scheduler--------------------//
//=========================================================//		

angular.module('app')
.controller('serviceSchedule',function($scope,$http)
		 {
			var numOfPieces = 6* 6;
				var frag = document.createDocumentFragment();

				function insertInnerPieces($el, innerPieces) 
				{
				  for (var i = 0; i < innerPieces; i++) 
				  {
				    var $inner = document.createElement('div');
			    	$inner.classList.add('popup__piece-inner');
				    $el.appendChild($inner);
				  }
				};
	
				for (var i = 1; i <= numOfPieces; i++) 
				{
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
			$scope.loadRadio=function(){

			$scope.schedule = ({'New':'0','SearchCust':'0'})
		};

$scope.loadServerData=function(){
	
	var httpRequest = $http({
				method: 'POST',
				url : "/SCA-360/getServerDate.do",
				data: {},
			  }).success(function(data, status) 
			  {
				  $scope.ev.from=data.serverdate;
				  //alert( $scope.ev.from);
			  });
};

  
   $scope.examples = [{ isOpen: false}];
  
 /* $scope.examples.forEach(function(example){
    example.date = new Date(example.date);
  });*/
  
  $scope.open = function($event, examples,id) {
	 
   
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
            className: 'gcal-event',           // an option!
            currentTimezone: 'America/Chicago' // an option!
    };
    /* event source that contains custom events on the scope */
    $scope.events = [
      {title: 'Inspection:WIP Asydt:WIP',start: new Date(), color: '#00f',
      textColor: '#800000',allDay: true}
     
    ];
    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, timezone, callback) {
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth();
      var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
      callback(events);
    };

    $scope.calEventsExt = {
       color: '#f00',
       textColor: 'yellow',
       events: [ 
          {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
          {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
          {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
        ]
    };
    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){
	//$("#popupo").show(3000);

	
   					overlay.appendTo(document.body);	
					  $popupsCont.classList.add('s--popup-active');
					  $popup.classList.add('s--active');
				
	//$("#calenderPopup").slideDown();
       $scope.alertMessage1 = ("Selected Event::"+date.title);
	 
	    var selectedDate = moment(date.start).format('YYYY-MM-DD');		
		// set dateFrom based on user click on calendar
            $scope.events[0].start = selectedDate;				    // update Calendar event dateFrom
            $scope.alertMessage = $filter('date')(selectedDate, 'yyyy-MM-dd');;		// 
    };
	
	    $scope.alertOnDayClick = function (date) {
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
     $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
       $scope.alertMessage = ('Event Dropped to make dayDelta ' +moment(delta));
    };
    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
       $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
    };
    /* add and removes an event source of choice */
    $scope.addRemoveEventSource = function(sources,source) {
      var canAdd = 0;
      angular.forEach(sources,function(value, key){
        if(sources[key] === source){
          sources.splice(key,1);
          canAdd = 1;
        }
      });
      if(canAdd === 0){
        sources.push(source);
      }
    };
    /* add custom event*/
  $scope.addEvent = function () {
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
      $scope.events.splice(index,1);
    };
    /* Change View */
   $scope.changeView = function (view, calendar) {
        $scope.currentView = view;
        uiCalendarConfig.calendars[calendar].fullCalendar('changeView', view);
    };
    /* Change View */
    $scope.renderCalender = function (calendar) {
        $timeout(function () {
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
      calendar:{
        height: 450,
        editable: true,
        header:{
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
      if($scope.changeTo === 'Hungarian'){
        $scope.uiConfig.calendar.dayNames = ["Vasárnap", "Hétfo", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
        $scope.uiConfig.calendar.dayNamesShort = ["Vas", "Hét", "Kedd", "Sze", "Csüt", "Pén", "Szo"];
        $scope.changeTo= 'English';
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
	$scope.loadRadio=function(){

			$scope.serviceSchedule = ({'New':'0'})
		};
		
			$scope.getAccessories = function()
	{
	
			$scope.availableCode = [
		  { id: 'A00', desp: 'Coupling'},
		  { id: 'A01', desp: 'Base Plate'},
		  { id: 'A02', desp: 'Brake System'},
		  { id: 'A10', desp: 'Shrink Disc'},
		  { id: 'A11', desp: 'Pulley'},
		  { id: 'A12', desp: 'Sprocket'},
		  { id: 'A13', desp: 'Backstop'}
		];
		
	};				
		  $scope.servicesheduled = [{ isOpen: false},{ isOpen: false},{ isOpen: false},{ isOpen: false}];
		   $scope.servicesheduled2 = [{ isOpen: false},{ isOpen: false}];
		    $scope.servicesheduled3= [{ isOpen: false},{ isOpen: false}];
		    $scope.packingtypes=[{id:1,label:'Inspection Done'},{id:2,label:'Inspection WIP'},
{id:3,label:'Waiting for parts'},{id:4,label:'Assembly WIP'},
{id:5,label:'Assembly Done'},{id:6,label:'Waiting for Delivery'},
{id:5,label:'Case Close'},{id:6,label:'Waiting for Inspection'}];  

		    
		});		 

//==========================================================//
     //--------------SALESPROGRESS INDICATORS--------------------//
//=========================================================//	
	
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
			$scope.getindicatorvalidate=function(indicator,index){
				
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
				}else{
					$scope.progressindicatorData = data.indicators;
					 $scope.updateFlag = 'ok';
					 for (var i = 0; i <= data.indicators.length; i++) {
                       // alert(data.countries.length);
                      $scope.updateLength = data.indicators.length;
					  $index=data.indicators.length
					 

                    }
					
				}

            });
        };

		$scope.resetprogressindicator=function(form){
		$index = 1;
        $scope.progressindicatorData = [{
            'id': $index
        }]
        form.$setPristine(true);
		}
		
		
		$scope.getValidate=function(indicator,index){
			
			var indicator=indicator.toUpperCase();
			var count=0;
			
			 angular.forEach($scope.progressindicatorData, function(value, index) {
						
                        var sum = (value.indicator).toUpperCase();
						
					 if(indicator==sum){
						   count++;
					   }
					
                    })
			 
			// alert("COUNT  "+count);
			 if(count>1){
				 swal("Indicator Already Exist");
				  $scope.progressindicatorData[index].indicator="";
			 }else{
				// alert("enterd");
				  // $(".existValRC122" + index).hide();
			 }
			
			
		};
		


    });
//=============================================================//
      //=========probability master===============//
//=============================================================//	  
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

        $scope.saveprobability = function(probability,form) {
			
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
					for(var i=0;i<= data.probabilities.length;i++){
							$index=data.probabilities.length;
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
		
		$scope.resetprobablity=function(form){
		$index = 1;
        $scope.probabilityFormData = [{
            'id': $index
        }]
        form.$setPristine(true);
		}
    });


/////////////////////////CURRENCY Master//////////
		angular.module('app')
    .controller('CurrencyMasterController', function($scope, $http) {
													 
		 $scope.CurrencyFormData=[];
        $index = 0;
        $scope.addCurrencydataForm = function() {

            $index++;
            $scope.CurrencyFormData.push({
                'id': $index
            })

        };
		
		 $scope.removeFormRow = function(name) {
            // alert(name);
            var IndexTab1 = -1;
            var comArrTab1 = eval($scope.CurrencyFormData);
            for (var i = 0; i < comArrTab1.length; i++) {
                if (comArrTab1[i].id === name) {
                    IndexTab1 = i;
                    break;
                }
            }
            $scope.CurrencyFormData.splice(IndexTab1, 1);
            $indexTab1 = comArrTab1.length;
            for (var s = 0; s < $indexTab1; s++) {
                $scope.CurrencyFormData[s].id = Number(s) + Number(1);
            }
        };
			
										  
  });
  
 //=======================================================//
  //=============Country Tax==============//
 //=======================================================//
	angular.module('app')
    .controller('CountryTaxController', function($scope, $http) {
		
		$scope.master = {};
		   var countryObj = new Object();
        countryObj.dropdownname = "Country";
        countryObj.columnname = "country";
        countryObj.columncode = "countrycode";
        var jsonCountryString = JSON.stringify(countryObj);
		
        $scope.CurrencyTaxFormData = [];
        $index = 0;
        $scope.addCurrencyTaxdataForm = function() {

            $index++;
            $scope.CurrencyTaxFormData.push({
                'id': $index
            })

        };

        $scope.removeFormRow = function(name) {
            // alert(name);
            var IndexTab1 = -1;
            var comArrTab1 = eval($scope.CurrencyTaxFormData);
            for (var i = 0; i < comArrTab1.length; i++) {
                if (comArrTab1[i].id === name) {
                    IndexTab1 = i;
                    break;
                }
            }
            $scope.CurrencyTaxFormData.splice(IndexTab1, 1);
            $indexTab1 = comArrTab1.length;
            for (var s = 0; s < $indexTab1; s++) {
                $scope.CurrencyTaxFormData[s].id = Number(s) + Number(1);
            }
        };
		
		$scope.loadCountryNames = function() {
            var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/loadDropDown.do",
                data: jsonCountryString,
            }).success(function(data, status) {
                $scope.countryNames = data;


            });
        };
		$scope.getCountryTax=function(country){
				 var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getTaxnameoncountrycode.do",
                data: country,
            }).success(function(data, status) {
               //alert(JSON.stringify(data));
			   $scope.CurrencyTaxFormData=data.countrytax;
				
			})
				}
		
		var SavecountryTax = [];
		var newObject = new FormData(); 
		$scope.savecountryTax=function(countrycode,form,country)
		{
			if($scope.countryTaxForm.$valid)
			{
				//alert(JSON.stringify(countrycode));
				SavecountryTax = [];
				 $scope.CurrencyTaxFormData.forEach(function(CurrencyTaxdata) {

                    SavecountryTax.push(angular.toJson(CurrencyTaxdata));
               
	
				});
				newObject.append("formData",angular.toJson(countrycode));
				newObject.append("gridData",angular.toJson(SavecountryTax));
			
				$.ajax({
						       url         : "/SCA-360/SaveTaxCountry.do",
						       data        : newObject,
						       contentType : false,
						       processData : false,
						       type        : 'POST'
						   }).success(function(data, status){
							   //alert(data);
								if(data==true)
									{
										
										swal( 'Country Tax Saved Successfully'); 
										//$scope.getCountryTax(country);
										$scope.countryTax = angular.copy($scope.master);
										form.$setPristine(true);
										newObject = new FormData();
										$index=1;
										$scope.CurrencyTaxFormData = [{'id':$index}];
										/*$('.photo').attr("data-content","").popover('hide');
										$('#3photoinput').val("");
										$('#2photoinput').hide();
//										$('#photoinput').val("");
										$("#1photoinput").text("Upload Logo");
										$scope.dummyPhoto="";
										$scope.customerName = "";
										$scope.loadDate();
										$scope.loadCurrency();
										$scope.customerMaster =({'customerStatus':'Active','custid':0});
										$scope.loadAccountCodes();*/
										//location.reload(); 
										
										$scope.$apply();
										
										
										
									}
								else
									{
									   	swal("Oops sorry...", "Something went wrong!", "error");
										//$scope.$scope.customerMaster.taxName = conTax;
							 			//$('.btn-hide2').attr('disabled',false);
									}
							    
							   
				        	   
				           });
			}
			else
			{
				var field = null, firstError = null;
					for (field in form) 
					{
						if (field[0] != '$') 
						{
							if (firstError === null && !form[field].$valid) 
							{
								firstError = form[field].$name;
							}
							if (form[field].$pristine) 
							{
								form[field].$dirty = true;
							}
						}	
					}
			}
			
			/*//alert(countrycode);
			 var SavecountryTax = [];
			// var countryTax=new Object();
			  var newObject=new Object();

            $scope.CurrencyTaxFormData.forEach(function(CurrencyTaxdata) {

                SavecountryTax.push(angular.toJson(CurrencyTaxdata));
               

            });
			
			newObject.gridData=SavecountryTax;
			newObject.formData=countrycode;
			
			
			
			
			  var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/SaveTaxCountry.do",
                data:JSON.stringify(newObject),
            }).success(function(data, status) {
                if(data==true)
			{
			swal( 'Saved Successfully');
			}else{
				swal( 'OOps!');
				}

            });*/
			
			
			
		}
			
			
			
				
				
		/*$scope.resettestreport = function(form)
		{
			$scope.countryTax = angular.copy($scope.master);
			$index=1;
			$scope.CurrencyTaxFormData = [{'id':$index}];
			form.$setPristine(true);
			newObject = new FormData();
		}*/


    });
	
//=======================================================//
  //=============Data Migration==============//
//=======================================================//
	angular.module('app')
    .controller('dataMigrationCon', function($scope, $http) {
		
		$scope.master = {};
		
		$scope.migrationFormSubmit = function(form)
		{
			$.getJSON("updateappcodemigration.do",function(json) {
			//alert(JSON.stringify(json));
			swal( 'Data Migration Successfully'); 
			});
		
		}

	});
 //======================================================// 
    //=============Coountry Master=============//
 //====================================================//	
	angular.module('app')
    .controller('countrymaster', function($scope, $http,$timeout) {
									  
		$scope.bottomrightsettings = {
				position: 'bottom right'
			};

		 $scope.countryDataForm=[];
        $index = 0;
        $scope.addcountrydataForm = function() {
		

            $index++;
            $scope.countryDataForm.push({
                'id': $index,'status':'0'
            })

        };
		
		 $scope.removeFormRow = function(name) {
            // alert(name);
            var IndexTab1 = -1;
            var comArrTab1 = eval($scope.countryDataForm);
            for (var i = 0; i < comArrTab1.length; i++) {
                if (comArrTab1[i].id === name) {
                    IndexTab1 = i;
                    break;
                }
            }
            $scope.countryDataForm.splice(IndexTab1, 1);
            $indexTab1 = comArrTab1.length;
            for (var s = 0; s < $indexTab1; s++) {
                $scope.countryDataForm[s].id = Number(s) + Number(1);
            }
			$("#buttonhide").prop('disabled', false);
        };
		
	
		
		var gridData = [];
		//var gridImgData = [];
		var conLogo = new FormData();
		//=======country form submit=========//
		$scope.saveCountry = function(form) 
		{

               /*$.ajax({
                url: "/SCA-360/saveCountries.do",
                processData: true,
                type: 'POST',
                contentType: 'Application/json',
                data: conLogo,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("Accept", "application/json");
                    xhr.setRequestHeader("Content-Type", "application/json");
                },
                success: function(response) {
                    if (response == true) {
                        swal("", 'Country Details Added Successfully', "success");
                        $scope.getCountries();
                      gridData.length = 0;
                        //form.$setPristine(true);
                        //$scope.AddBudget = angular.copy($scope.master);
                    } else {
                        swal("Ooh no...", "Something went wrong!", "error");

                    }
                }
            });*/
        if ($scope.countrymasterForm.$valid) 
		{
			
            gridData = [];
            $scope.countryDataForm.forEach(function(countrydata) {
                gridData.push(angular.toJson(countrydata));
				
            });
         
			//gridImgData = []; 
			//alert(JSON.stringify(gridData));
//			$scope.imgArray.forEach(function(imgArray) {
//                
//				alert(imgArray);
//				gridImgData.push(imgArray);
//			     alert(angular.toJson(gridImgData));
//            });
			
		 
            //obj.formData = angular.toJson(countryDataForm);
           // obj.gridData = gridData;
         // conLogo.gridData = angular.toJson(gridData);
            //alert(obj.formData);
            //alert(JSON.stringify(obj));
			conLogo.append("gridData",angular.toJson(gridData));
            //conLogo.append("countryLogo",angular.toJson(gridImgData));
			//alert(JSON.stringify(conLogo));
			        $.ajax({
						       url         : "/SCA-360/saveCountries.do",
						       data        : conLogo,
						       contentType : false,
						       processData : false,
						       type        : 'POST'
						   }).success(function(data, status){
							   
							  if(data==true)
									{
									
										
										swal('Saved Successfully');
										conLogo = new FormData();
										$index=1;
							            $scope.countryDataForm=[{'id': $index,'status':'0'}];
										form.$setPristine(true); 
										$scope.getCountries();
										$scope.$apply();
									}
								else
									{
									   swal("Oops sorry...", "Something went wrong!", "error");
									}
						   });
			
          
        } 
		else
		{
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
	


      $scope.removeImg = function(img,index)
	  {
		  //alert($scope.countryDataForm.length);
		  var index = this.$index;
		 // alert($scope.thumbnail[index].dataUrl + " " + index);
		  //$(this).remove();
		 /* for(var i=0;i<$scope.thumbnail.length;i++) 
		  {
								
			if($scope.thumbnail[i].dataUrl === step) 
			{
								
			  $scope.thumbnail.dataUrl.splice(i,1);
								
									break;
			
			}
		 }*/
	  }
       /*     var ind;
		$scope.uploadCountryLogo = function(event)
		{
			var files = event.target.files; //FileList object
				//alert(files);
				ind = this.$index;		 
			for (var i = 0; i < files.length; i++) 
			{
					var file = files[i];
					var reader = new FileReader();
					reader.onload = $scope.imageIsLoaded; 
					reader.readAsDataURL(file);
			}
		}
		$scope.countryModel = [];
		$scope.imageIsLoaded = function(e)
		{
			alert(ind);
			$scope.$apply(function() {
				var imagelocation=e.target.result;
				 var base64result = imagelocation.split(',')[1];
												  
				$scope.countryModel.push({id:ind,data:base64result});
									alert($scope.countryModel);
			});
		}*/
		
		//$scope.saveCountry=function(){
//			//alert($scope.countrymasterForm.$valid);
//			if ($scope.countrymasterForm.$valid) {
//			var countyArray=new Array();
//			var countryObj=new Object();
//			 $scope.countryDataForm.forEach(function(countrydata) {
//
//                countyArray.push(angular.toJson(countrydata));
//
//            });
//			 countryObj.gridData=countyArray;
//			 
//			 var httpRequest = $http({
//                method: 'POST',
//                url: "/SCA-360/saveCountries.do",
//                data: JSON.stringify(countryObj),
//            }).success(function(data, status) {
//                //alert(JSON.stringify(data));
//               // $scope.customergroupData = data;
//			   if (data == true) {
//                        swal('Saved Successfully');
//						$scope.getCountries();
//                        countyArray.length = 0;
//
//                    } else if (data == false) {
//                        swal("Ooh no...", "Something went wrong!", "error");
//                        //$scope.getOnLoadHyponicData(0,0);
//                    }
//
//
//            });
//			} else {
//
//                var field = null,
//                    firstError = null;
//                for (field in form) {
//                    if (field[0] != '$') {
//                        if (firstError === null && !form[field].$valid) {
//                            firstError = form[field].$name;
//                        }
//                        if (form[field].$pristine) {
//                            form[field].$dirty = true;
//                        }
//                    }
//                }
//            }
//
//			 
//		};
		
		$scope.getCountries=function(){
			
			
			 var httpRequest = $http({
                method: 'POST',
                url: "/SCA-360/getCoutries.do",
                data: {},
            }).success(function(data, status) {
               if(data.countries.length==0){
			 $index = 1;
                    $scope.countryDataForm = [{
                        'id': $index,
						'status': '0'
                    }];
					
			   }else{
				  
                $scope.countryDataForm = data.countries;
				 for (var i = 0; i <= data.countries.length; i++) {
                        //alert(data.countries.length);
                       $index = data.countries.length;

                    }
					
					
					 $scope.totalItems = $scope.countryDataForm.length;
  $scope.currentPage =1;
  	 $scope.itemsPerPage = 7;


 	  $scope.$watch("currentPage", function() {
  	   setPagingData($scope.currentPage);
 	  });
 


  function setPagingData(page) {
  
   	  var pagedData =  data.countries.slice((page - 1) * $scope.itemsPerPage, page * $scope.itemsPerPage);
 $scope.items=pagedData;
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
			
				$scope.getcountryvalidate=function(country,index){
			
			var country=country.toUpperCase();
			var count=0;
			
			 angular.forEach($scope.countryDataForm, function(value, index) {
						
                        var sum = (value.country).toUpperCase();
						
					 if(country==sum){
						   count++;
					   }
					
                    })
			 
			// alert("COUNT  "+count);
			 if(count>1){
				 swal("Country Already Exist");
				  $scope.countryDataForm[index].country="";
			 }else{
				// alert("enterd");
				  // $(".existValRC122" + index).hide();
			 }
			
			
		};
			
			
			$scope.getcountryCodevalidate=function(countrycode,index){
				//alert("enterd");
				var countrycode=countrycode.toUpperCase();
			var count=0;
			
			 angular.forEach($scope.countryDataForm, function(value, index) {
						
                        var sum = (value.countrycode).toUpperCase();
						
					 if(countrycode==sum){
						   count++;
					   }
					
                    })
			 
			// alert("COUNT  "+count);
			 if(count>1){
				 swal("CountryCode Already Exist");
				  $scope.countryDataForm[index].countrycode="";
			 }else{
				// alert("enterd");
				  // $(".existValRC122" + index).hide();
			 }
				
			}
			
				$scope.getOrdervalidate=function(order,index){
				var order=order;
			var count=0;
			
			 angular.forEach($scope.countryDataForm, function(value, index) {
						
                        var sum = (value.country_order);
						
					 if(order==sum){
						   count++;
					   }
					
                    })
			 
			// alert("COUNT  "+count);
			 if(count>1){
				 swal("Order Already Exist");
				  $scope.countryDataForm[index].country_order="";
			 }else{
				// alert("enterd");
				  // $(".existValRC122" + index).hide();
			 }
				
			}
		
										  
  });

//========================================//
    //=======Country logo===========//
//=======================================//
angular.module('app')
    .controller('countryLogoMaster', function($scope, $http,$timeout) {
		$scope.master = {};
		
		$scope.loadAllCountries = function()
		{
			$scope.countryNameArray = [];
 
 			$.getJSON("getAllCountries.do",function(json)
			{
				//alert(JSON.stringify(json['data'][0].billingCountries));
				
				 $scope.countryNameArray = json['data'];
				 $scope.$apply();
			});	
			
		}
		var countLogo = new FormData();
		 $scope.uploadCountryLogo = function(files) 
				{
					//alert(files);
					$('.hide-lgbtn').attr('disabled',false);
				   var fileInput = $("#photoinput");
                   var maxSize = fileInput.data('max-size');
				  
					       
							if(fileInput.get(0).files.length>=1)
							{
								var fileSize = fileInput.get(0).files[0].size; // in bytes
								//alert(fileSize);
								if(maxSize<fileSize)
								{
									//alert("if");
									//alert('file size is more then' + maxSize + ' bytes');
									swal("Oops sorry...", 'File size is more then' +  maxSize  + ' bytes', "error");
									$('.hide-lgbtn').attr('disabled',true);
									return false;
								}
								else
								{
									//alert("else");
									//alert('file size is correct- '+fileSize+' bytes');
									//swal( 'File size is correct- '+fileSize+' bytes'); 
									 $('.hide-lgbtn').attr('disabled',false);
									 $scope.dummyPhoto="1";
									//$('#dummyPhoto').trigger('blur');
									 //countLogo.delete("usersign");
									 countLogo.append("usersign", files[0]);	
									
								}
							}
							else
							{
								swal("Choose File", 'File size should less then' +  maxSize  + ' bytes', "error");
								//alert(fileInput.get(0).files.length  + "else");
								$('.hide-lgbtn').attr('disabled',false);
							}
					  
					$scope.$apply();
				};
		
		$scope.getCountryLogo = function(countryname)
		{
			$.post("getCountriesLogo.do",{countrycode:countryname}, function(json) {

               // $scope.customernames = json['data'];

              //alert(JSON.stringify(json['countrylogo']));
               //$scope.industryData = json['countrytax'];
			   
			   
			   var getImage = json['countrylogo'];
							 //alert(getImage);
							 if(getImage!=null)
							   {
								   var imgPrew = getImage.trim();
								   if(imgPrew==null || imgPrew=="" )
								   {
									  $('.image-preview').popover('hide');
									  $("#1photoinput").text("Upload Logo");
									  $("#3photoinput").val("");
									  $("#2photoinput").hide();
									  $scope.dummyPhoto="";
										$('#dummyPhoto').trigger('blur');
								   }
								   else
								   {
									   var img = $('<img src="'+getImage+'" width="200" height="150"/>', {id: 'dynamic',width:200,height:150 });
									  
									   var photoName = getImage.split("/");
										//alert(photoName);
										$(".photo").attr("data-content",$(img)[0].outerHTML).popover("show");
										$("#1photoinput").text("Change");
										$("#2photoinput").show();
										$("#3photoinput").val(photoName[1]);
										$scope.dummyPhoto="1";
										$('#dummyPhoto').trigger('blur');
								   }
							   }
							   else
							   {
								   
								  $('.image-preview').popover('hide');
								  $("#1photoinput").text("Upload Logo");
								  $("#3photoinput").val("");
								  $("#2photoinput").hide();
								  $scope.dummyPhoto="";
								  $('#dummyPhoto').trigger('blur');
							   }
							  $scope.$apply();
               $scope.$apply();
            });
		}
		
		$scope.saveCountrylogo = function(addedCountry,form)
			{
				//alert(JSON.stringify(addedCountry));
				 if($scope.countrylogomasterForm.$valid)
					{
						//alert("valid");
						countLogo.append("formdata",angular.toJson(addedCountry));
						$('#hide-lgbtn').attr('disabled',true);
					
						$.ajax({
									   url         : "/SCA-360/saveCountriesLogo.do",
									   data        : countLogo,
									   contentType : false,
									   processData : false,
									   type        : 'POST'
								   }).success(function(data, status){
									   //alert(data);
										if(data==true)
											{
												
												swal( 'Country Logo Master Saved Successfully');
												$('#hide-lgbtn').attr('disabled',false); 
												$scope.addedCountry = angular.copy($scope.master);
												form.$setPristine(true);
												countLogo = new FormData();
												$('.photo').attr("data-content","").popover('hide');
												$('#3photoinput').val("");
												$('#2photoinput').hide();
		//										$('#photoinput').val("");
												$("#1photoinput").text("Upload Logo");
												$scope.dummyPhoto="";
												$scope.$apply();
												
												
												
											}
										else
											{
												swal("Oops sorry...", "Something went wrong!", "error");
												
												$('#hide-lgbtn').attr('disabled',false);
											}
										
									   
									   
								   });
					}
					else
					{
						var field = null, firstError = null;
							for (field in form) 
							{
								if (field[0] != '$') 
								{
									if (firstError === null && !form[field].$valid) 
									{
										firstError = form[field].$name;
									}
									if (form[field].$pristine) 
									{
										form[field].$dirty = true;
									}
								}	
							}
					}
		  
		   
	   
			};
			
			$scope.resetCountry = function(form)
			{
				$scope.addedCountry = angular.copy($scope.master);
				form.$setPristine(true);
				countLogo = new FormData();
				$('.photo').attr("data-content","").popover('hide');
				$('#3photoinput').val("");
				$('#2photoinput').hide();
				$("#1photoinput").text("Upload Logo");
				$scope.dummyPhoto="";
				$scope.$apply();
			}
	});
//========================================//
    //=======Salesman Master===========//
//=======================================//
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
//=========================================================//
  //==========Industry Master==========//
//=========================================================//  
angular.module('app')
    .controller('IndustryController', function($scope, $http) {
		//alert(455);
		$scope.master = {};
		 /*$scope.industryDataForm=[];
        $index = 0;
        $scope.addindustryForm = function() {
			//alert("enterd");

            $index++;
            $scope.industryDataForm.push({
                'id': $index
            })

        };
		
		 $scope.removeFormRow = function(name) {
            // alert(name);
            var IndexTab1 = -1;
            var comArrTab1 = eval($scope.industryDataForm);
            for (var i = 0; i < comArrTab1.length; i++) {
                if (comArrTab1[i].id === name) {
                    IndexTab1 = i;
                    break;
                }
            }
            $scope.industryDataForm.splice(IndexTab1, 1);
            $indexTab1 = comArrTab1.length;
            for (var s = 0; s < $indexTab1; s++) {
                $scope.industryDataForm[s].id = Number(s) + Number(1);
            }
        };*/
		
					/* $scope.totalItems = $scope.countryDataForm.length;
  $scope.currentPage =1;
  	 $scope.itemsPerPage = 7;


 	  $scope.$watch("currentPage", function() {
  	   setPagingData($scope.currentPage);
 	  });
 


  function setPagingData(page) {
  
   	  var pagedData =  data.countries.slice((page - 1) * $scope.itemsPerPage, page * $scope.itemsPerPage);
 $scope.items=pagedData;
  	 }*/
		
		var indusObj = new FormData();
		var indusGrid = [];
		$scope.loadAllIndustryGroups = function()
		{
			$.post("getIndustryFromMaster.do", function(json) {

               // $scope.customernames = json['data'];

               //alert(JSON.stringify(json['countrytax']));
               $scope.industryData = json['countrytax'];
			   $scope.totalItems = $scope.industryData.length;
				$scope.currentPage =1;
					 $scope.itemsPerPage = 10;
				
				
					  $scope.$watch("currentPage", function() {
				
				  
					   setPagingData($scope.currentPage);
					  });
				
				  function setPagingData(page) {
				 
					  var pagedData =  json['countrytax'].slice((page - 1) * $scope.itemsPerPage, page * $scope.itemsPerPage);
				
					  $scope.items = pagedData;
				 
					 }
				
				
				 $scope.pageChanged = function () {
						  $log.log('Page changed to: ' + $scope.currentPage);
					   };
               $scope.$apply();
            });
			
			//$scope.industryData = [{id:'1',industryCode:'A01',industryName:"Food Industry"},{id:'2',industryCode:'A02',industryName:"Wood Industry"}];
			
		}
			$scope.industryMasterFormSubmit = function(form)
			{
				//alert(4155);
				 if($scope.industryForm.$valid)
				 {
					  indusGrid = [];
				   $scope.industryData.forEach(function(industryArr)
					{ 
										//alert(JSON.stringify(industryArr)); 
						indusGrid.push(angular.toJson(industryArr));	 
					});
					
					
				   //alert(JSON.stringify(qtnTypeGridData)); 
				  //qtnFormData.append("formData",angular.toJson(addQuotation));
				  indusObj.append("gridData",angular.toJson(indusGrid));
				  //qtnFormData.append("termConData",angular.toJson(termCondition));
				  //alert(JSON.stringify(qtnFormData));
							   $.ajax({
									   url         : "/SCA-360/saveIndustryToMaster.do",
									   data        : indusObj,
									   contentType : false,
									   processData : false,
									   type        : 'POST'
								   }).success(function(data, status){
									   
										if(data==true)
											{
											    swal('Saved Successfully');
												indusObj = new FormData();
												$scope.loadAllIndustryGroups();
												/*$indexFullUnit=1;
												$scope.qtnFullUnitData=[{'id':$indexFullUnit}];
												$indexTerm=1;
												$scope.termData=[{'id':$indexTerm}];
												$scope.addQuotation = angular.copy($scope.master);
												$scope.loadQuotationSeqNum();
												$scope.loadSysDate();
												$scope.addQuotation = ({'qtnType':'0','qtnProgress':'0','showCost':'0','modifiedstatus':'0','currency':'USD','tax':'VAT','country':'AUSTRALIA','taxPercent':'10','paymentTerm':'2','salesTerm':'CIF','estPercent':'10','assigned':'Sales'});*/
												form.$setPristine(true); 
												$scope.$apply();
											}
										else
											{
											   swal("Oops sorry...", "Something went wrong!", "error");
											}
										
									   
									   
								   }); 
				 }
				 else
				 {
					 var field = null, firstError = null;
								for (field in form) 
								{
									if (field[0] != '$') 
									{
										if (firstError === null && !form[field].$valid) 
										{
											firstError = form[field].$name;
										}
										if (form[field].$pristine) 
										{
											form[field].$dirty = true;
										}
									}	
								}
				 }
		  
		   
	   
			};
			
			$scope.resetIndustry = function(form)
			{
				
				indusObj = new FormData();
				$scope.loadAllIndustryGroups();
				form.$setPristine(true); 
				$scope.$apply();
			}
											   
											   
 });
//==========================================//
 //=====Application Master======//
//=========================================// 
angular.module('app')
.controller('ApplicationController', function($scope, $http) {
	$scope.master = {};
		/* $scope.ApplicationDataForm=[];
        $index = 0;
        $scope.addApplicationDataForm = function() {
			alert("enterd");

            $index++;
            $scope.ApplicationDataForm.push({
                id': $index
            })

        };
		
		 $scope.removeFormRow = function(name) {
             alert(name);
            var IndexTab1 = -1;
            var comArrTab1 = eval($scope.ApplicationDataForm);
            for (var i = 0; i < comArrTab1.length; i++) {
                if (comArrTab1[i].id === name) {
                    IndexTab1 = i;
                    break;
                }
            }
            $scope.ApplicationDataForm.splice(IndexTab1, 1);
            $indexTab1 = comArrTab1.length;
            for (var s = 0; s < $indexTab1; s++) {
                $scope.ApplicationDataForm[s].id = Number(s) + Number(1);
            }
        };*/
		var appObj = new FormData();
		var appGrid = [];
		$scope.loadAllApplicationGroups = function()
		{
			$.post("getApplicationFromMaster.do", function(json) {

               //alert(JSON.stringify(json['countrytax'].length));
               // $scope.customernames = json['data'];

                $scope.applicationData = json['countrytax'];
				$scope.totalItems =  $scope.applicationData.length;
				//alert($scope.totalItems);
				$scope.currentPage =1;
					 $scope.itemsPerPage = 10;
				
				
					  $scope.$watch("currentPage", function() {
				
				  
					   setPagingData($scope.currentPage);
					  });
				
				  function setPagingData(page) {
				 
					  var pagedData =  json['countrytax'].slice((page - 1) * $scope.itemsPerPage, page * $scope.itemsPerPage);
				
					  $scope.items = pagedData;
				 
					 }
				
				
				 $scope.pageChanged = function () {
						  $log.log('Page changed to: ' + $scope.currentPage);
					   };

                    $scope.$apply();
            });
			
			//$scope.applicationData = [{id:'1',applicationCode:'A01',applicationName:"Food Industry"},{id:'2',applicationCode:'A02',applicationName:"Wood Industry"}];
			
		}
			$scope.applicationMasterFormSubmit = function(form)
			{
				
				 if($scope.applicationForm.$valid)
				 {
					  appGrid = [];
				   $scope.applicationData.forEach(function(applicationArr)
					{ 
										//alert(JSON.stringify(applicationArr)); 
						appGrid.push(angular.toJson(applicationArr));	 
					});
					
					
				   //alert(JSON.stringify(qtnTypeGridData)); 
				  //qtnFormData.append("formData",angular.toJson(addQuotation));
				  appObj.append("gridData",angular.toJson(appGrid));
				  //qtnFormData.append("termConData",angular.toJson(termCondition));
				  //alert(JSON.stringify(qtnFormData));
							   $.ajax({
									   url         : "/SCA-360/saveApplicationToMaster.do",
									   data        : appObj,
									   contentType : false,
									   processData : false,
									   type        : 'POST'
								   }).success(function(data, status){
									   
										if(data==true)
											{
											    swal('Saved Successfully');
												appObj = new FormData();
												$scope.loadAllApplicationGroups();
												/*$indexFullUnit=1;
												$scope.qtnFullUnitData=[{'id':$indexFullUnit}];
												$indexTerm=1;
												$scope.termData=[{'id':$indexTerm}];
												$scope.addQuotation = angular.copy($scope.master);
												$scope.loadQuotationSeqNum();
												$scope.loadSysDate();
												$scope.addQuotation = ({'qtnType':'0','qtnProgress':'0','showCost':'0','modifiedstatus':'0','currency':'USD','tax':'VAT','country':'AUSTRALIA','taxPercent':'10','paymentTerm':'2','salesTerm':'CIF','estPercent':'10','assigned':'Sales'});*/
												form.$setPristine(true); 
												$scope.$apply();
											}
										else
											{
											   swal("Oops sorry...", "Something went wrong!", "error");
											}
										
									   
									   
								   }); 
				 }
				 else
				 {
					 var field = null, firstError = null;
								for (field in form) 
								{
									if (field[0] != '$') 
									{
										if (firstError === null && !form[field].$valid) 
										{
											firstError = form[field].$name;
										}
										if (form[field].$pristine) 
										{
											form[field].$dirty = true;
										}
									}	
								}
				 }
		  
		   
	   
			};
			
			$scope.resetApplication = function(form)
			{
				appObj = new FormData();
				$scope.loadAllApplicationGroups();
				form.$setPristine(true); 
				$scope.$apply();
			}
     });
//====================================================//	 
     //====sales Report controller Report====//
//====================================================//

angular.module('app')
    .controller('salesReportController', function($scope, $http,$rootScope) {



		$scope.loadSalescustomername=function(){
			alert($rootScope.onloadSales);
			if($rootScope.onloadSales=="true"){
				var customername=$rootScope.customername;
				$scope.salesReport.customer=customername;
				}
			
			}
		
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
        $scope.showPopup = function(salesman) {
			
            if (salesman == undefined|| salesman == "") {
				
				   $("#existValRC1gg").show();
				  
				  
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

        $scope.showPopupprogress = function(salesman) {
            //alert(salesman);
            if (salesman == undefined|| salesman == "") {
				 $("#existValRC1").show();
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




		$scope.getcustomername=function(customername){

		 $rootScope.customername = customername;
 		 $rootScope.Salesreportflag = "true";
		}


        $scope.FinalSave = function(salesReport) {
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
			
			
			
			

    });