



 <style>
 #pageHeadding{
	font-size: 25px;
	font-weight: 300;
	color: #000000;
	text-align: center;
	margin: 0px 0px;
	padding: 0px 0px;
}</style>

<div ng-controller="serviceInquiriesController" ng-init="LoadData();loadCustomer();ServiceLoaction();loadCountryNames();ServiceStatus();">									
	<div class="well with-header with-footer">
      <div class="header bordered-blue" id="pageHeadding">Service Search</div>
	   <form name="serviceSearchForm"  novalidate>
	  <div class="row" >
	  <div class="col-sm-3"><div class="form-group floating-label-wrapper">

  								<div class="form-group" >
                                                     <label for="fromdate"></label>
    		        					          <input type="text" class="form-control datepicker " placeholder="From Date" maxlength="10" name="fromdate" ng-model="SerSearch.fromdate" data-input-mask="{mask: '00-00-0000'}"   id="fromdate"  ng-mouseover="ShowDatePicker();"   data-ng-pattern="/(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/"  with-floating-label/>
											
					                	        </div>
                                                    </div></div>
	  <div class="col-sm-3"><div class="form-group floating-label-wrapper">

  								<div class="form-group" >
                                                     <label for="todate"></label>
    		        					          <input type="text" class="form-control datepicker " placeholder="To Date" maxlength="10" name="todate" ng-model="SerSearch.todate" data-input-mask="{mask: '00-00-0000'}"   id="todate"  ng-mouseover="ShowDatePicker();"   data-ng-pattern="/(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/"  with-floating-label/>
												 
					                	        </div>
                                                    </div></div>
	  
						<div class="col-sm-3" style="margin-top: -17px;">
	           <label for=""  style="margin-top: -6px;">Status</label>																																																											
								     <select class="form-control" placeholder="" name="inquiryStatus"   ng-options="inquiryStatus.seqid as inquiryStatus.status for inquiryStatus in inquiryStatuses"  ng-model="SerSearch.inquiryStatus" style="text-transform: uppercase;">

</select>   
</div>    
<div class="col-sm-3" >
	          <div class="floating-label-wrapper">
                                 
                                  <label for="empty"></label>																																																											
								    <input type="text" class="form-control" name="selectedModel" ng-model="SerSearch.selectedModel" id="empty" placeholder=" Model No."  with-floating-label  style="text-transform: uppercase;" />
                                   
                                                    </span>
                                </div>
</div>                           
	</div>
	<div class="row">
	<div class="col-sm-3">
			     <div class="form-group floating-label-wrapper">
				
				  	<label for="CustomerCode"></label>
					
				 <input type="text" name="customer" id="CustomerCode" ng-model="SerSearch.customer" placeholder="Customer Name" typeahead="customer.name as customer.name for customer in customernames | filter:{name:$viewValue}:startsWith" typeahead-on-select='getCustomerStatus($item)'  typeahead-no-results="noResults"  typeahead-min-length='3' class="form-control" autocomplete="off"  data-ng-required="true"  with-floating-label  ng-disabled="{{disabled}}" style="margin-top: 19px;text-transform: uppercase;"/>
				<div ng-if="noResults" style="color: red;">No Results Found!</div>		
				 <!--<p id="existValRC1gg" class="help-block" style="color:#FF0000; display:none;" ng-if="salesReport.customer==null">Required</p>-->
				  
				
			  </div>
			  
			  </div>
			  <div class="col-sm-3" style="margin-top: 2px;">
	           <label for=""  style="margin-top: -12px;">Country</label>																																																											
								     <select class="form-control" placeholder=""  name="country"  ng-options="country.countrycode as country.country for country in countryNames"  ng-model="SerSearch.country" style="text-transform: uppercase;" >

</select>   
</div>
<div class="col-sm-3" >
	          <div class="floating-label-wrapper">
                                 
                                  <label for="serialno"></label>																																																											
								    <input type="text" class="form-control" name="itemserialno" ng-model="SerSearch.itemserialno" id="serialno" placeholder=" Serial No."  with-floating-label style="margin-top: 19px;text-transform: uppercase;"  />
                                   
                                                    </span>
                                </div>
</div>
<div class="col-sm-3" >
	          <div class="floating-label-wrapper">
                                 
                                  <label for="contactno"></label>																																																											
								    <input type="text" class="form-control" name="contractno" ng-model="SerSearch.contractno" id="contactno" placeholder="Sales Contract No."  with-floating-label style="margin-top: 19px;text-transform: uppercase;"  />
                                   
                                                    </span>
                                </div>
</div>
	</div>
		<div class="row">
		<div class="col-sm-3" >
	          <div class="floating-label-wrapper">
                                 
                                  <label for="serviceno"></label>																																																											
								    <input type="text" class="form-control" name="caseReferenceno" ng-model="SerSearch.caseReferenceno" id="serviceno" placeholder=" Service Ref  No."  with-floating-label  style="margin-top: 19px;text-transform: uppercase;"  />
                                   
                                                    </span>
                                </div>
</div>
	<div class="col-sm-3" style="margin-top: 2px;">
	           <label for=""  style="margin-top: -12px;">Service Location</label>																																																											
								     <select class="form-control" placeholder="" name="serviceLocation"  ng-options="serviceLocation.id as serviceLocation.label for serviceLocation in ServiceLocationdata"  ng-model="SerSearch.serviceLocation" style="text-transform: uppercase;">

</select>   
</div>
			  
<div class="col-sm-3" >
	          <div class="floating-label-wrapper">
                                 
                                  <label for="ManufacturingNo"></label>																																																											
								    <input type="text" class="form-control" name="shimfgno" ng-model="SerSearch.shimfgno" id="ManufacturingNo" placeholder=" Manufacturing No."  with-floating-label    style="margin-top: 19px;text-transform: uppercase;"/>
                                   
                                                    </span>
                                </div>
</div>
	</div>
     <br/>
	 <br/>
	 
   <div class="row">
       		<div class="col-sm-4">
            		
            </div>
            <div class="col-sm-4">
            		<div class="form-group">
                                <button type="button" class="btn btn-info" ng-click="SearchSearvice(SerSearch,serviceSearchForm);">
                                  <span class="glyphicon glyphicon-search"></span> Search
                                </button>
                   </div>
            </div>
            
       </div>
   
	
											
			

<div class="row" >
    
    <div class="col-xs-12 col-md-12">
       
            
			<div class="table-scrollable">
				<table class="table table-hover table-striped table-bordered">
					<thead class="bordered-blue">
						<tr>
								<th>Date</th>
								<th>Customer Name</th>
								<th>Service Ref No</th>
								<th>Sales Contract No</th>
								<th>Status</th>
								<th>Country</th>
							<th>Service Location</th>
							<th>Description</th>
							<th>Model No</th>
							<th>Serial No</th>
							<th>Manufacturing No</th>
							<th>Action</th>
														
							
							
							
						</tr>
					</thead>
					<tbody>
					<tr ng-repeat="serviceInqs in serviceInqsData" >
							
							
						
							<td>{{serviceInqs.inquirydate}}</td>
							<td>{{serviceInqs.customer}}</td>
							<td>{{serviceInqs.caseReferenceno}}</td>
							<td>{{serviceInqs.contractno}}</td>
							<td>{{serviceInqs.inquiryStatus}}</td>
							<td>{{serviceInqs.country}}</td>
							<td>{{serviceInqs.serviceLocation}}</td>
							<td>{{serviceInqs.description}}</td>
							<td>{{serviceInqs.selectedModel}}</td>
							<td>{{serviceInqs.itemserialno}}</td>
							<td>{{serviceInqs.shimfgno}}</td>
							<td><a  href="#/app/serviceINQ" ng-click="EditServices(serviceInqs.caseReferenceno);" ng-show="{{hideglyp}}" class="tooltip-blue" tooltip-placement="bottom" tooltip="Edit">  <span class="glyphicon glyphicon-pencil"></span></a><a  href="#/app/serviceINQ" ng-click="viewServices(serviceInqs.caseReferenceno);" ng-show="{{hideglyp}}"  class="tooltip-blue" tooltip-placement="bottom" tooltip="View"> <span class="glyphicon glyphicon-eye-open"></span></a></td>
							
							
						</tr>
					
						
					</tbody>
				</table>
			</div>

            
       
    </div>
</div>

</form>

	</div>		
									

</div>