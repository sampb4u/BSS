<style>
div
{
	font-family: Geneva, Arial, Helvetica, sans-serif;
	color:#666666;
}
#pageHeadding
{
	font-size: 25px;
	font-weight: 300;
	color: #000000;
	text-align: center;
	margin: 0px 0px;
	padding: 0px 0px;
}
.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td {
    padding: 8px;
	line-height: 1.42857143;
	vertical-align: top;
	border-top: 0px solid #ddd;
} 
/*.datePic > span:hover{cursor: pointer;}
.pointer {
    cursor: pointer;
}
.ui-datepicker-calendar {
    display: none;
    }*/
 
.sucessstyle {
	background-color: #53a93f !important;
	/*border-color: #53a93f !important;*/
	color: #fff;}
.draftstyle{
	background-color: #57b5e3 !important;
	/*border-color: #57b5e3;*/
	color: #fff;} 
.dangerstyle {
	background-color: #d73d32 !important;
	/*border-color: #d73d32;*/
	color: #fff;}
</style>
<script>
$(document).ready(function() {
    $( "#dateFrom" ).datepicker({
        dateFormat:"dd-mm-yy",
		changeMonth: true,
        changeYear: true,
       // showButtonPanel: true,
	   onClose: function(dateText, inst) {
		  $("#dateTo").focus();
	   },
        // before datepicker opens run this function
        beforeShow: function(){
            // this gets today's date       
            var theDate = new Date();
            
            // sets "theDate" 2 days ahead of today
            theDate.setDate(theDate.getDate());
			//theDate.setDate(<?php echo $checkin ?>);
            // set min date as 2 days from today
            $(this).datepicker('option',theDate);         
        }
       
    });
	$( "#dateTo" ).datepicker({
        dateFormat:"dd-mm-yy",
		changeMonth: true,
        changeYear: true,
       // showButtonPanel: true,
	   onClose: function(dateText, inst) {
		  $("#ModelNum").focus();
	   },
        // before datepicker opens run this function
        beforeShow: function(){
            // this gets today's date       
            var theDate = new Date();
            
            // sets "theDate" 2 days ahead of today
            theDate.setDate(theDate.getDate());
			//theDate.setDate(<?php echo $checkin ?>);
            // set min date as 2 days from today
            $(this).datepicker('option',theDate);         
        }
       
    });
});
/*$('.datepicker').datepicker(
                    {
                        dateFormat: "mm-yy",
                        changeMonth: true,
                        changeYear: true,
                        showButtonPanel: true,
                        onClose: function(dateText, inst) {


                            function isDonePressed(){
                                return ($('#ui-datepicker-div').html().indexOf('ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all ui-state-hover') > -1);
                            }

                            if (isDonePressed()){
                                var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
                                var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
                                $(this).datepicker('setDate', new Date(year, month, 1)).trigger('change');
                                
                                 $('.date-picker').focusout()//Added to remove focus from datepicker input box on selecting date
                            }
                        },
                        beforeShow : function(input, inst) {

                            inst.dpDiv.addClass('month_year_datepicker')

                            if ((datestr = $(this).val()).length > 0) {
                                year = datestr.substring(datestr.length-4, datestr.length);
                                month = datestr.substring(0, 2);
                                $(this).datepicker('option', 'defaultDate', new Date(year, month-1, 1));
                                $(this).datepicker('setDate', new Date(year, month-1, 1));
                                $(".ui-datepicker-calendar").hide();
                            }
                        }
                    })*/ //ng-submit="getQAServiceIntAndExtData(addedQASearch,addedQASearchForm);"					
					
</script>

<div ng-controller="QAIntandExtSearchCtrl" ng-init="loadAddedQASearchCountrys();getAddQASearchSalesmanCode();loadAddQASearchSalesMan(); loadAllQAStatus();loadQAServiceType();loadCustomerQASearchName();">


									
	<div class="well with-header with-footer">
      <div class="header bordered-blue" id="pageHeadding">QA SEARCH</div>
	<form name="addedQASearchForm"  ng-keyup="$event.keyCode == 13 ? getQAServiceIntAndExtData(addedQASearch,addedQASearchForm) : null" enctype="multipart/form-data" novalidate>
        <!--<div class="row">
		
            <div class="col-sm-3">
                
            </div>
            <div class="col-sm-3">
                                                              
            </div>
           <div class="col-sm-3">
                                                         
           </div>
           <div class="col-sm-3" align="right" style="display:none;">
                  <div class="form-group">
                       <span class="btn btn-blue"><a href="#/app/quotation" ng-click="loadNewQuotation();">New QA Issues</a></span>
                  </div>
                  
                  
           </div>                                            
	 </div>-->
     <!--<div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email" placeholder="Email address">
  </div>-->
       <div class="row">
       		<div class="col-sm-4">
            		<div class="form-group">
                                                <label for="Country">Country</label>
                                               			<select class="form-control" placeholder="" name="country" ng-model="addedQASearch.country" id="Country" ng-options = "country.country as country.country for country in countryData">
                                                             <!--<option value="">-----Select-----</option>-->
                                                        </select>																																																					
                                                    
                                                                   
                                                
                                            </div>
            </div>
            <div class="col-sm-4">
            		<div class="form-group">
                                                <label for="Manufacturing">Manufacturing No.</label>
                                                <span class="input-icon icon-right">	
                                                      																																																											
                                                    <input type="text" class="form-control" placeholder="" name="manufacturing" ng-model="addedQASearch.manufacturing" id="Manufacturing"/>
                                                    <i class="glyphicon glyphicon-pencil circular"></i>
                                                    </span>
                                                                   
                                                
                                            </div>
            </div>
            <div class="col-sm-2">
            		<div class="form-group">
                                   <label for="dateFrom">From</label>
                                         <span class="input-icon icon-right">
													
<input type="text" class="form-control datepicker " placeholder="" maxlength="10" name="monthYear" ng-model="addedQASearch.monthYear" id="dateFrom"/>
														<i class="glyphicon glyphicon-calendar circular"></i>
                                                                    </span>
                                                    
                                                </div>
            </div>
            <div class="col-sm-2">
            		<div class="form-group">
                                 <label for="dateTo">To</label>
                                         <span class="input-icon icon-right">
													 
<input type="text" class="form-control datepicker " placeholder="" maxlength="10" name="dateto" ng-model="addedQASearch.dateto" id="dateTo"/>
														<i class="glyphicon glyphicon-calendar circular"></i>
                                                                    </span>
                                                    
                                                </div>
            </div>
       </div>
       <div class="row">
       		<div class="col-sm-4">
            	<div class="form-group">
                                                <label for="SalesmanCode">Salesman Code</label>
                                               			<select class="form-control" placeholder="" name="salesManCode" ng-model="addedQASearch.salesManCode" id="SalesmanCode" ng-options = "salesManCode.salesManCode as salesManCode.salesManCode for salesManCode in salesManCodeArray">
                                                             <!--<option value="">-----Select-----</option>-->
                                                        </select>																																																					
                                                    
                                                                   
                                                
                                            </div>	
            </div>
            <div class="col-sm-4">
            	<div class="form-group">
                                               <label for="ModelNum">Model No.</label>
                                                <span class="input-icon icon-right">	
                                                    																																																										
                                                    <input type="text" class="form-control" placeholder="" name="modelNumber" ng-model="addedQASearch.modelNumber" id="ModelNum"/>
                                                    <i class="fa fa-cog circular" aria-hidden="true"></i>
                                                    </span>
                                                                   
                                               
                                            </div>	
            </div>
            <div class="col-sm-4">
            	<div class="form-group">
                                                <label for="QARef">QA Ref No.</label>
                                                <span class="input-icon icon-right">	
                                                     																																																										
                                                    <input type="text" class="form-control" placeholder="" name="qaRef" ng-model="addedQASearch.qaRef" id="QARef"/>
                                                   <i class="glyphicon glyphicon-tag circular"></i>
                                                                    </span>
                                                                   
                                                
                                            </div>	
            </div>
            
       </div>
       <div class="row">
       		<div class="col-sm-4">
            	<div class="form-group">
                                                 <label for="SalesmanName">Salesman Name</label>
                                               			<select class="form-control" placeholder="" name="salesMan" ng-model="addedQASearch.salesMan" id="SalesmanName" ng-options = "salesMan.salesPerson as salesMan.salesPerson for salesMan in salesmanArray">
                                                             <!--<option value="">-----Select-----</option>-->
                                                        </select>																																																					
                                                    
                                                                   
                                                
                                            </div>	
            </div>
            <div class="col-sm-4">
            	<div class="form-group">
                                                <label for="Serial">Motor Serial No.</label>
                                                <span class="input-icon icon-right">	
                                                     																																																										
                                                    <input type="text" class="form-control" placeholder="" name="serialNo" ng-model="addedQASearch.serialNo" id="Serial"  />
                                                    <i class="fa fa-cog circular" aria-hidden="true"></i>
                                                                    </span>
                                                                   
                                                
                                            </div>	
            </div>
            <div class="col-sm-4">
            	<div class="form-group">
                                                <label for="QAStatus">Status</label>
                                                <!--<span class="input-icon icon-right">	
                                                      <label for="GearHead"></label>																																																											
                                                    <input type="text" class="form-control" placeholder="GearHead Serial No." name="gearhead" ng-model="addedQtns.gearhead" id="GearHead"  with-floating-label/>
                                                    <i class="fa fa-cog circular" aria-hidden="true"></i>
                                                                    </span>-->
                                                      <select class="form-control" placeholder="" name="qaStatus" ng-model="addedQASearch.qaStatus" id="QAStatus" ng-options = "qaStatus.qaStatus as qaStatus.qaStatus for qaStatus in qaSearchStatuseData">
                                                             <!--<option value="">-----Select-----</option>-->
                                                        </select>             
                                               
                                            </div>	
            </div>
            
       </div>
       <div class="row">
       		<div class="col-sm-4">
            	<div class="form-group">
                          								 <label for="CustomerName">Customer Name</label>
                                                      <span class="input-icon icon-right">
                                                         
                                                        <input type="text" name="custName" id="CustomerName" ng-model="addedQASearch.custName" placeholder="" typeahead="custName.name as custName.name for custName in customerNamesQtnData |   filter:{name:$viewValue}:startsWith" typeahead-on-select='selectCustomerQASearch($label)' typeahead-min-length='3' autocomplete="off" class="form-control" typeahead-no-results="noResults"/>
                            	<div ng-if="noResults" style="color: red;">No Results Found!</div>	                          
                            <i class="glyphicon glyphicon-search blue circular"></i>
                        </span>
                          
                </div>	
            </div>
            <div class="col-sm-4">
            	<div class="form-group">
                			<div  ng-class="{ 'has-error' : addedQASearchForm.qaType.$invalid && (addedQASearchForm.qaType.$dirty || submitted)}">
                                                <label for="QAType">QA Type</label>
                                               			<select class="form-control" placeholder="" name="qaType" ng-model="addedQASearch.qaType" id="QAType" ng-options = "qaType.id as qaType.qaType for qaType in qaSearchTypeData" autocomplete="off" ng-required="true">
                                                             <!--<option value="">-----Select-----</option>-->
                                                        </select>
                                                        <p ng-show="addedQASearchForm.qaType.$error.required && (addedQASearchForm.qaType.$dirty || submitted)" class="help-block"> You can't leave this empty</p>																																																					
                                                    
                               </div>                                    
                                               
                                            </div>	
            </div>
            <div class="col-sm-4">
            		
            </div>
            
       </div>
       <div class="row">
       		<div class="col-sm-4">
            		
            </div>
            <div class="col-sm-4">
            		<div class="form-group">
                                <button type="button" class="btn btn-info"  ng-click="getQAServiceIntAndExtData(addedQASearch,addedQASearchForm);">
                                  <span class="glyphicon glyphicon-search"></span> Search
                                </button>
                   </div>
            </div>
            <div class="col-sm-4">
            		<!--<div class="form-group">
                                
                                  <span class="btn btn-info btn-xs btn-circle"><i class="fa fa-floppy-o" aria-hidden="true"></i></span> Draft
                                  <span class="btn btn-success btn-xs btn-circle"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span> Current Version
                                   <span class="btn btn-danger btn-xs btn-circle"><i class="fa fa-eye" aria-hidden="true"></i></span> Old Version
                               
                   </div>-->
            </div>
       </div>
    
   </form>
   		<div class="row">
   			 <div class="col-sm-12">
                    <div class="table-scrollable">
                        <table class="table table-hover table-striped table-bordered">
                            <thead class="bordered-blue">
                                <tr>
                                	<th>Date</th>
                                    <th>Customer Name</th>
									<th>QA Type</th>
									<th>QA Ref No.</th>
									<th>Status</th>
                                    <th>Salesman</th>
                                    <th>Description</th>
									<th>Motor Serial No.</th>
									<th>Action</th>
									
                                </tr>
                            </thead>
                            <tbody>
                            <tr ng-repeat="addNewQASearch in addNewQASearchData">
                                   	<td align="center" ng-class="{dangerstyle: addNewQuote.action==0,sucessstyle: addNewQuote.action==1,draftstyle: addNewQuote.action==100}">{{addNewQASearch.scadate}}</td>
                                    <td align="center" ng-class="{dangerstyle: addNewQuote.action==0,sucessstyle: addNewQuote.action==1,draftstyle: addNewQuote.action==100}">{{addNewQASearch.customer}}</td>
                                    <td align="center" ng-class="{dangerstyle: addNewQuote.action==0,sucessstyle: addNewQuote.action==1,draftstyle: addNewQuote.action==100}">{{addNewQASearch.qatype}}<span style="display:none;">{{addNewQASearch.qatypeid}}</span></td>
                                    <td align="center" ng-class="{dangerstyle: addNewQuote.action==0,sucessstyle: addNewQuote.action==1,draftstyle: addNewQuote.action==100}">{{addNewQASearch.casereferenceno}}</td>
                                    <td ng-class="{dangerstyle: addNewQuote.action==0,sucessstyle: addNewQuote.action==1,draftstyle: addNewQuote.action==100}">{{addNewQASearch.status}}</td>
                                    <td ng-class="{dangerstyle: addNewQuote.action==0,sucessstyle: addNewQuote.action==1,draftstyle: addNewQuote.action==100}">{{addNewQASearch.salesman}}</td>
                                    <td ng-class="{dangerstyle: addNewQuote.action==0,sucessstyle: addNewQuote.action==1,draftstyle: addNewQuote.action==100}">{{addNewQASearch.description}}</td>
                                    <td ng-class="{dangerstyle: addNewQuote.action==0,sucessstyle: addNewQuote.action==1,draftstyle: addNewQuote.action==100}">{{addNewQASearch.serialno}}</td>
                                    
                                     
                                    
                                    
                                   
                                   <!--<td><span><a  href="#/app/qaServiceINT" ng-click="ShowHide(qaissuedata.caseReferenceNumber);">  <span class="glyphicon glyphicon-pencil"></span></a></span>&nbsp;&nbsp;<span><a  href="#/app/qaServiceINT" ng-click="viewServices(qaissuedata.caseReferenceNumber);"  > <span class="glyphicon glyphicon-eye-open"></span></a></span></td>-->
                                   <td align="center"  ng-if="addNewQASearch.qatypeid==1"><span><a  href="#/app/qaServiceINT" ng-click="ShowHide(addNewQASearch.casereferenceno);" class="tooltip-blue" tooltip-placement="bottom" tooltip="Edit"><i class="glyphicon glyphicon-pencil"></i></a></span>&nbsp;<span><a href="#/app/qaServiceINT" ng-click="viewServices(addNewQASearch.casereferenceno);" class="tooltip-blue" tooltip-placement="bottom" tooltip="View"><i class="fa fa-eye" aria-hidden="true"></i></a></span>&nbsp;&nbsp;<span><a  href="#/app/qaServiceINT" ng-click="viewServicesIntCopy(addNewQASearch.casereferenceno);" class="tooltip-blue" tooltip-placement="bottom" tooltip="Copy"><i class="glyphicon glyphicon-copy"></i></a></span>&nbsp;&nbsp;&nbsp;<!--<span class="btn-primary tooltip-blue" tooltip-placement="bottom" tooltip="Print" ng-click="printGenerateQuotation22(addNewQuote.qtnNo,quotationType,addNewQuote.action);" style="cursor:pointer;"><i class="fa fa-print" aria-hidden="true"></i></span>-->
                                   </td>
                                   <td align="center"  ng-if="addNewQASearch.qatypeid==2"><span><a  href="#/app/qaServiceEXT" ng-click="ShowHideExt(addNewQASearch.casereferenceno);" class="tooltip-blue" tooltip-placement="bottom" tooltip="Edit"><i class="glyphicon glyphicon-pencil"></i></a></span>&nbsp;<span><a href="#/app/qaServiceEXT" ng-click="viewServicesExt(addNewQASearch.casereferenceno);" class="tooltip-blue" tooltip-placement="bottom" tooltip="View"><i class="fa fa-eye" aria-hidden="true"></i></a></span>&nbsp;&nbsp;<span><a  href="#/app/qaServiceEXT" ng-click="viewServicesExtCopy(addNewQASearch.casereferenceno);" class="tooltip-blue" tooltip-placement="bottom" tooltip="Copy"><i class="glyphicon glyphicon-copy"></i></a></span>&nbsp;&nbsp;&nbsp;<!--<span class="btn-primary tooltip-blue" tooltip-placement="bottom" tooltip="Print" ng-click="printGenerateQuotation22(addNewQuote.qtnNo,quotationType,addNewQuote.action);" style="cursor:pointer;"><i class="fa fa-print" aria-hidden="true"></i></span>-->
                                   </td>
                                  
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
		   </div>

	</div>		
									

</div>

