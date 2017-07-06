

	<style type="text/css">
	.sscCode{ z-index : 900; }
	.thumb{
    width:100px;
    margin:5px;
    float:left;
}

.uploader{
    clear:both;
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
div.polaroid {
 	width: 24%;
	background-color: white;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	float: left;
	margin: 5px 5px 15px 5px;
	padding: 5px;
}


.contentDelete {
  text-align: center;
  padding: 10px 20px;
  cursor:pointer;
}
.contentDelete {
  /*text-align: center;
  padding: 10px 20px;*/
  background-color: #3498db;
  cursor:pointer;
}
.contentDelete:hover{
background-color:#e74c3c;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.margin{
margin-left: -6%;}
.marginQuan{
margin-left: 1%;}

	</style>

<style>
#popup_box {
 display: none;
    position: fixed;
	 
   
    _position: absolute;
    height: 223px;
    width: 29%;
     background:#ffffff;
    left: 300px;
    top: 200px;
    z-index: 9002;
    margin-left: 289px;
    border: 2px solid #000000;
    padding: 29px;
    padding-top: 25px;

 

    margin-top: 28px;
	 overflow-x: hidden; 
}
   

#overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    filter:alpha(opacity=50);
    -moz-opacity:0.5;
    -khtml-opacity: 0.5;
    opacity: 0.8;
    z-index: 900;
}
/*.overlay:target {
  visibility: visible;
  opacity: 1;
}
.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .close:hover {
  color: #06D85F;
}
.popup .content {
  max-height: 30%;
  overflow: auto;
}
.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
}

.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}*/
.ui-select-match-item {
    outline: 0;
    margin: 0 3px 3px 0;
    background-color: #add8e6;
}
.ui-select-bootstrap .ui-select-choices-row.disabled > a, .ui-select-bootstrap .ui-select-choices-row.active.disabled > a {
    color: #26D8CB;
    cursor: not-allowed;
    background-color: bisque;
}
</style>
<div  ng-controller="serviceInquiryController" ng-init="getStatus();addinquiryForm();getAccessories();loadCustomer();loadcustomerStatus();getcasereafernce();getReferenceNumber();getDepartments();getApplicationIndustry();loadCountryNames();">									
	<div class="well with-header with-footer">
      <div class="header bordered-blue"  id="pageHeadding">Service Inquiry</div>
        <form name="serviceInquiryForm"  novalidate>
                   <div class="row">
                       
					   
					   <div class="col-sm-3">
			     <div class="form-group floating-label-wrapper">
				<div class="form-group" ng-class="{ 'has-error' : serviceInquiryForm.customerName.$invalid && (serviceInquiryForm.customerName.$dirty || submitted)}">
				  	<label for="CustomerCode"></label>
					
				 <input type="text" name="customerName" id="CustomerCode" ng-model="serviceInq.customer" placeholder="Customer Name" typeahead="customer.name as customer.name for customer in customernames | filter:{name:$viewValue}:startsWith" typeahead-no-results="noResults"  typeahead-on-select='getCustomerStatus($item)' typeahead-min-length='3' class="form-control" autocomplete="off"  data-ng-required="true"  with-floating-label  ng-disabled="{{disabled}}"/>
					<div ng-if="noResults" style="color: red;">No Results Found!</div>	
				 <!--<p id="existValRC1gg" class="help-block" style="color:#FF0000; display:none;" ng-if="salesReport.customer==null">Required</p>-->
				  <p ng-show="serviceInquiryForm.customerName.$error.required && (serviceInquiryForm.customerName.$dirty || submitted)" class="help-block">Required</p>
				 </div>
			  </div>
			  
			  </div>
                       <div class="col-sm-3">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="CustCode"></label>																																																											
								    <input type="text" class="form-control" name="customerCode" ng-model="serviceInq.customerCode" id="CustCode" placeholder="Cust Code" autocomplete="on" with-floating-label    ng-disabled="{{disabled}}" />
									 <input type="hidden" name="modifyFlag"  ng-model="serviceInq.modifyFlag" /> 
									  
                                    <i class="glyphicon glyphicon-user circular"></i>
                                                    </span>
                                </div>
						    </div>
                       </div>
					   <div class="col-sm-3">
					   <div class="form-group floating-label-wrapper">
													 <label for="startdate"></label>
												
<input type="text" class="form-control datepicker " placeholder="Inquiry Date" maxlength="10" name="inquiryDate" ng-model="serviceInq.inquiryDate" data-input-mask="{mask: '00-00-0000'}"   id="startdate"  ng-mouseover="ShowDatePicker();"   data-ng-pattern="/(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/"  with-floating-label ng-disabled="{{disabled}}"/>
                                                    </div></div>
						<div class="col-sm-3">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="telephoneno"></label>																																																											
								    <input type="text" class="form-control" name="telephoneno" ng-model="serviceInq.telephoneno" id="telephoneno" placeholder="Tel"  with-floating-label ng-disabled="{{disabled}}"/>
                                    <i class="glyphicon glyphicon-earphone circular"></i>
                                                    </span>
                                </div>
						    </div>
                       </div>							
                      
                       
                   </div>
				   <div class="row">
				   <div class="col-sm-3">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="caseReferenceno"></label>																																																											
								    <input type="text" class="form-control" name="caseReferenceno" ng-model="serviceInq.caseReferenceno" id="caseReferenceno" placeholder="Service Inq no" autocomplete="on" with-floating-label  readonly />
                                    
                                                    </span>
                                </div>
						    </div>
                       </div>
                       <div class="col-sm-3">
						 <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="contactno"></label>																																																											
								    <input type="text" class="form-control" name="contactno" ng-model="serviceInq.contactno" id="contactno" placeholder="Inquiry Created by" with-floating-label ng-disabled="{{disabled}}"/>
                                    <i class="glyphicon glyphicon-user circular"></i>
                                                    </span>
                                </div>
						    </div>
                       </div>
                       <div class="col-sm-6">
                             
                            <div class="form-group">
                              <div class="floating-label-wrapper">
                              <label for="address"></label>	
                            <textarea cols="50" rows="1" placeholder="Address" id="address" class="form-control" name="address" ng-model="serviceInq.address"  ng-disabled="{{disabled}}" with-floating-label></textarea>
                           
                            </div>
                       </div>
                       </div>
                      
					 
					   
                       
                       
                   </div>
				   <div class="row"><div class="col-sm-3">
				    <div class="form-group">
                                <div class="floating-label-wrapper">
				    <label for="assignedTo" ></label>	
					<select class="form-control" name="assignedTo" ng-model="serviceInq.assignedTo" ng-options="assignedto.departmentname as assignedto.departmentname for assignedto in departmentsData"  with-floating-label  id="assignedTo"  placeholder="Assigned To" > 
					
					
					    					
					</select>
					</div></div>
 				      </div>
					  
					  
					  <div class="col-sm-3">
				   <div class="form-group">
                                <div class="floating-label-wrapper">
                            
                                 <label for="country" ></label>																																																											
								     <select class="form-control"   name="country"  ng-options="country.countrycode as country.country for country in countryNames"  ng-model="serviceInq.country" style="text-transform: uppercase;" with-floating-label  id="country"  placeholder="Country">

</select>   
									
                               
                                                 
                                </div>
						    </div>
 				      </div>
					  <div class="col-sm-3">
				  <div class="form-group">
                                <div class="floating-label-wrapper">
                                
                                  <label for="contractno"></label>																																																											
								    <input type="text" class="form-control" name="contractno" ng-model="serviceInq.contractno" id="contractno" placeholder="Contract No"  with-floating-label    ng-disabled="{{disabled}}" />
							
                                   
                                                   
                                </div>
						    </div>
 				      </div>
					  </div>
				   
				   <div class="row">
				    
				   </div>
				   <div class="row" >
                         <div class="col-sm-12">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="description"></label>																																																											
								    <textarea type="text" class="form-control" name="description" ng-model="serviceInq.description" id="description" placeholder="Description"  with-floating-label  ng-disabled="{{disabled}}" /></textarea>
                                 
                                                    </span>
                                </div>
						    </div>
                       </div>
                  </div>
				  <div class="row">
                       
                     
                       <div class="col-sm-6" style="width:45%;">
                             
                            <div class="radio">
                                   <div class="control-group"> 
									<label>
										<b style="color:#666666;">Service Location : </b>  <input name="dropDimension" type="radio" class="colored-blue" ng-model="serviceInq.serviceLocation" value="0" checked="checked" >
										<span class="text">Onsite service</span>
									</label>
									&nbsp;&nbsp;
									<label>
										<input name="dropDimension" type="radio"  class="colored-blue" ng-model="serviceInq.serviceLocation" value="1">
										<span class="text">Inhouse service</span>
									</label>
																					
									</div>                                    
								</div>
                       </div>
                       <div class="col-sm-3" ng-if="serviceInq.serviceLocation==0" style="white-space:nowrap; margin:0; padding:0;">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="siteAddress"></label>																																																											
								    <input type="text" class="form-control" name="siteaddress" ng-model="serviceInq.siteaddress" id="siteAddress" placeholder="Site Address" autocomplete="on" with-floating-label ng-disabled="{{disabled}}"/>
                                   
                                                    </span>
                                </div>
						    </div>
                       </div>
                       <div class="col-sm-3" ng-if="serviceInq.serviceLocation==0">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="personContactNumber"></label>																																																											
								    <input type="text" class="form-control" name="personContactno" ng-model="serviceInq.personContactno" id="personContactNumber" placeholder="Person Contact Number" autocomplete="on" with-floating-label ng-disabled="{{disabled}}"/>
                                 
                                                    </span>
                                </div>
						    </div>
                       </div>
                       
                   </div>
				   
				   
				 <div class="row" >
			 
                      <div class="col-sm-5">
                            <div class="form-group">
								        <span style="color:#666666;">Attach Document</span>
										 <label class="btn btn-file" style="border:0px solid #ffffff;">
                                           <span><img src="image/file.png" style=" width:50px; border:0px solid #ffffff;"/></span><input type='file'  multiple 
										   accept="image/x-png,image/gif,image/jpeg" onchange="angular.element(this).scope().imageUpload(event)" />
                                      </label>  
								   </div>
								   </div>
                  </div>
				  <div class="row">
                          <div class="col-sm-12">
                                               <div ng-repeat="step in stepsModel">
                                                      <div class="polaroid">
													   <span class="input-icon icon-right">	
                                                         <img  ng-src="data:image/png;base64,{{step}}" style="width:100%; height:175px;">
                                                         <i class="glyphicon glyphicon-remove circular contentDelete" ng-click="getimage(step)"></i>
                                                           </span>
                                                    </div>
                                              </div>
                         </div>
                     </div>
				  
				  	<br/>	<br/>
					<div style="border:1px dotted #000000;padding:5px 5px 5px 5px;">
				  <div ng-repeat= "serviceinquiry in serviceinquiryField" >
				    <div class="row">
				  <div class="col-sm-1">
					    <button type="button" id="right_All_1" class="btn btn-primary" ng-if="serviceinquiry.id=='1'" ng-click='addinquiryForm();' ng-disabled="{{disabled}}">
                                                    	<i class="glyphicon glyphicon-plus-sign"></i>
                                                    </button>
												   <button type="button" id="right_All_1" class="btn btn-danger" ng-if="serviceinquiry.id!='1'" ng-click='removeserviceinquiry(serviceinquiry.id);' ng-disabled="{{disabled}}">
                                                   		<i class="glyphicon glyphicon-trash" ></i>
                                                   </button></div></div>
												   <br/>
				  <div class="row">
                       <div class="col-sm-2">
			     <div class="form-group ">
			
				  	<label for="">Item Serial No.</label>
					
				 <input type="text"  class="form-control" name="itemSerialno{{$index}}"  ng-model="serviceinquiry.itemSerialno" placeholder=""  ng-disabled="true"/>
				  
				
				  
			  </div>
			  
			  </div>
					   <div class="col-sm-2">
			     <div class="form-group ">
			
				  	<label for="">Gearhead Serial No.</label>
					
				 <input type="text"  class="form-control" name="gearHeadslno{{$index}}"  ng-model="serviceinquiry.gearHeadslno" placeholder=""  ng-disabled="{{disabled}}"/>
				  
				
				  
			  </div>
			  
			  </div>
                       <div class="col-sm-2">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="">Motor Serial No.</label>																																																											
					 <input type="text" class="form-control" name="motorslno{{$index}}" ng-model="serviceinquiry.motorslno" ng-disabled="{{disabled}}" />
                                   
                                                    </span>
                                </div>
						    </div>
                       </div>
                       
                       <div class="col-sm-2">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="">SHI Mfg. No.</label>																																																											
								    <input type="text" class="form-control" name="shimfgno{{$index}}" ng-model="serviceinquiry.shimfgno"  ng-disabled="{{disabled}}" />
                                   
                                                    </span>
                                </div>
						    </div>
                       </div>
					    <div class="col-sm-3"  >
					   <div class="form-group " >  
					 <label for="">Status</label>		
		
                 	<ui-select multiple  
										ng-model="serviceinquiry.serviceStatus" name="sscCode" id="SscCode" theme="bootstrap"    style="width: 300px;" remove-selected="false"  >
                                       
                                            <ui-select-match >{{$item.seqno}}</ui-select-match>
                                            
                                            <ui-select-choices repeat="sscCode.seqno as sscCode in availableSSCCode | filter:$select.search">
                                              
                                              <!--<div ng-bind-html="formData.id | highlight: $select.search"></div>-->
                                                <small ng-bind-html="sscCode.seqnoshortcutnamename | highlight: $select.search"></small>
                                            </ui-select-choices>
                                        </ui-select>
			    </div>
                       </div>
					   <!--<div class="col-sm-3" ng-if="serviceinquiry.readonly!='true'" >
					   <div class="form-group " >  
				<label for="Customerstatus">Inquiry Status</label>
			
                 	<select class="form-control"  placeholder=""  data-ng-model="serviceinquiry.inquiryStatus" ng-options="inquiryStatus.seqid as inquiryStatus.status for inquiryStatus in inquiryStatuses " name="inquiryStatus{{$index}}"  ng-disabled="{{disabled}}"> 
					   			
											
					</select>
			    </div>
                       </div>-->
                   </div>
				   <div class="row">
                       
                     
                       <div class="col-sm-6" style="width:40%;">
                             
                            <div class="radio">
                                   <div class="control-group"> 
									<label>
										<b style="color:#666666;">Inquiry for: </b>  <input name="serviceInquiryFor{{$index}}" type="radio" class="colored-blue" ng-model="serviceinquiry.serviceInquiryFor" value="0" checked="checked">
										<span class="text">Gear Motor</span>
									</label>
									&nbsp;&nbsp;
									<label>
										<input name="serviceInquiryFor{{$index}}" type="radio" class="colored-blue" ng-model="serviceinquiry.serviceInquiryFor" value="1">
										<span class="text"> Reducer</span>
									</label>
									&nbsp;&nbsp;
									<label>
										<input name="serviceInquiryFor{{$index}}" type="radio"  class="colored-blue" ng-model="serviceinquiry.serviceInquiryFor" value="2">
										<span class="text"> Others</span>

									</label>
																					
									</div>                                    
								</div>
                       </div>
					   <div class="col-sm-2 margin" ng-if="serviceinquiry.serviceInquiryFor==1 || serviceinquiry.serviceInquiryFor==0 ">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for=""></label>																																																											
								    <input type="text" class="form-control"   ng-disabled="true" placeholder="OTHERS"   />
                                   
                                                    </span>
                                </div>
						    </div>
                       </div>
					   <div class="col-sm-2 margin" ng-if="serviceinquiry.serviceInquiryFor==2">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for=""></label>																																																											
								    <input type="text" class="form-control" name="othersInquiryFor{{$index}}" ng-model="serviceinquiry.othersInquiryFor" ng-disabled="{{disabled}}" placeholder="OTHERS"   />
                                   
                                                    </span>
                                </div>
						    </div>
                       </div>
                       <div class="col-sm-1 marginQuan" >
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="">Quantity</label>																																																											
								    <input type="text" class="form-control" name="quantity{{$index}}" ng-model="serviceinquiry.quantity" ng-disabled="{{disabled}}"   />
                                   
                                                    </span>
                                </div>
						    </div>
							
                       </div>
                <!--       <div class="col-sm-3" ng-if="serviceInq.serviceLocation==0">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="personContactNumber"></label>																																																											
								    <input type="text" class="form-control" name="ContactNo" ng-model="serviceInq.personContactNumber" id="personContactNumber" placeholder="Person Contact Number" autocomplete="on" with-floating-label/>
                                 
                                                    </span>
                                </div>
						    </div>
                       </div>-->
                       
                   </div>
				<!--   ng-model="serviceinquiry.qaIssuesFor[fruitName2.text]"-->
				   <!--<div class="row">
				    <div class="col-sm-5" style="margin: -12px 0px 0px 0px;"><div class="radio">
                                   <div class="control-group"> 
									   <p>
<label ng-repeat="fruitName2 in ServiceStatus">
  <input
    type="checkbox" class="colored-blue" 
    name="qaIssuesFor{{$index}}"

    ng-checked="serviceinquiry.qaIssuesFor.indexOf(fruitName2.id) > -1"
	ng-model="serviceinquiry.qaIssuesFor[fruitName2.text]"
	
   
  ><span class="text" style="width:260px;">{{fruitName2.text}}</span>
</label>
</p>   <br/><br/>
                                   
									</div>
                                    <div>
                                    </div>
                                                                        
								</div></div>
								</div>-->
								<div class="row">
								<div class="col-sm-1">
								<b>Remarks:</b>
								</div>
								<div class="col-sm-3">
								<div class="checkbox" ><label><input type="checkbox" class="colored-blue" name="generalRepair{{$index}}"  ng-model="serviceinquiry.generalRepair" ng-checked="serviceinquiry.generalRepair==true"     /><span class="text"></span>General Repair Job</label></div>
								</div></div>
								
									<div class="row">
									<div class="col-sm-1"></div>
								<div class="col-sm-3">
								<div class="checkbox" ><label><input type="checkbox" class="colored-blue" name="underWarranty{{$index}}"  ng-model="serviceinquiry.underWarranty" ng-checked="serviceinquiry.underWarranty==true" /><span class="text"></span>Under Warranty Service</label></div>
								</div>
								</div>
								<div class="row">
									<div class="col-sm-1"></div>
								<div class="col-sm-3">
								<div class="checkbox" ><label><input type="checkbox" class="colored-blue" name="warrantyPeriod{{$index}}"  ng-model="serviceinquiry.warrantyPeriod" ng-checked="serviceinquiry.warrantyPeriod==true" /><span class="text"></span>Out of Warranty Period</label></div>
								</div>
								</div>
									<div class="row">
									<div class="col-sm-1"></div>
								<div class="col-sm-3">
								<div class="checkbox" ><label><input type="checkbox" class="colored-blue" name="companyGoodwill{{$index}}"  ng-model="serviceinquiry.companyGoodwill" ng-checked="serviceinquiry.companyGoodwill==true"  /><span class="text"></span>Company Goodwill</label></div>
								</div>
								</div>
									<div class="row">
									<div class="col-sm-1"></div>
								<div class="col-sm-3">
								<div class="checkbox" ><label><input type="checkbox" class="colored-blue" name="others{{$index}}"  ng-model="serviceinquiry.others" ng-checked="serviceinquiry.others==true" /><span class="text"></span>Others,please Specify</label></div>
								</div>
								<div class="col-sm-5" >
								<div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for=""></label>																																																											
								    <input type="text" class="form-control" name="othersStatus{{$index}}" ng-model="serviceinquiry.othersStatus"  ng-disabled="serviceinquiry.others==false" style="border-top: 0px none;
border-left: 0px none;
border-right: 0px none;
background-color: white;
margin-top: -26px;
margin-left: -36px;border-bottom-color: black;" />
                                   
                                                    </span>
                                </div>
						    </div>
								</div>
								</div>
								
								
									 <div class="row">
                       
                     
                       <div class="col-sm-3">
                             
                            <div class="radio">
                                   <div class="control-group"> 
									<label>
										<b style="color:#666666;">  <input name="isSelectedModel{{$index}}" type="radio" class="colored-blue" ng-model="serviceinquiry.isSelectedModel" value="0" checked="checked">
										<span class="text">Selected Model : </b></span>
									</label>
									<label>
										<b style="color:#666666;"> <input name="isSelectedModel{{$index}}" type="radio" class="colored-blue" ng-model="serviceinquiry.isSelectedModel" value="1"  >
										<span class="text">Model Unknown  </b> </span>
									</label>
									
																					
									</div>                                    
								</div>
                       </div>
                       <div class="col-sm-4"  ng-if="serviceinquiry.isSelectedModel==0">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="empty"></label>																																																											
								    <input type="text" class="form-control" name="selectedModel{{$index}}" ng-model="serviceinquiry.selectedModel" id="empty" placeholder="Selected Model"    />
                                   
                                                    </span>
                                </div>
						    </div>
                       </div>
					   
               <div class="col-sm-4"  ng-if="serviceinquiry.isSelectedModel==1">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="empty"></label>																																																											
								    <input type="text" class="form-control" name="modelUnkonown{{$index}}" ng-model="serviceinquiry.modelUnkonown" id="empty" placeholder="Unknown Model"  ng-disabled="true"  />
                                   
                                                    </span>
                                </div>
						    </div>
                       </div>
                       
                   </div>
				   <div class="row">
                       
                     
                       <div class="col-sm-3" style="">
					   <div class="radio">
                                   <div class="control-group"> 
									<label>
										<b style="color:#666666;">Brake: </b>  <input name="brake{{$index}}" type="radio" class="colored-blue" ng-model="serviceinquiry.brake" value="0" checked="checked">
										<span class="text">Yes</span>
									</label>
									&nbsp;&nbsp;
									<label>
										<input name="brake{{$index}}" type="radio"  class="colored-blue" ng-model="serviceinquiry.brake" value="1">
										<span class="text"> No</span>
									</label>
									</div></div></div>
                       <div class="col-sm-3" >
                            <div class="form-group">
                                
                                 
                                  <label for="">Industry Code</label>																																																											
				<!--				    /* <select class="form-control" placeholder="" name="application{{$index}}" ng-model="serviceinquiry.application" ng-options = "application.application as application.application for application in applicationData" ng-disabled="{{disabled}}" >
<option value="">Application</option>
</select>*/-->

 <input type="text" name="application" id="ApplicationCode" ng-model="serviceinquiry.application" placeholder="" tabindex="12" typeahead="application.application as application.applicationshortcutnamename for application in applicationData | filter:$viewValue" typeahead-on-select='applicanIndustryName($label)' typeahead-min-length='2' autocomplete="off" class="form-control"  />
                                </div>
						    
                       </div>
					   
                     <div class="col-sm-3">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="">Accessories</label>																																																											
								    <input type="text" class="form-control" name="accessories{{$index}}" ng-model="serviceinquiry.accessories"  ng-disabled="{{disabled}}" />
                                   
                                                    </span>
                                </div>
						    </div>
                       </div>
					   
                <!--       <div class="col-sm-3" ng-if="serviceInq.serviceLocation==0">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="personContactNumber"></label>																																																											
								    <input type="text" class="form-control" name="ContactNo" ng-model="serviceInq.personContactNumber" id="personContactNumber" placeholder="Person Contact Number" autocomplete="on" with-floating-label/>
                                 
                                                    </span>
                                </div>
						    </div>
                       </div>-->
                       
                   </div>
									 
                <hr/>
                  </div>
				  
				  </div>     
			<br/>
			  <div class="row">	
			<div class="col-sm-12">
                             
                            <div class="form-group">
                              <div class="floating-label-wrapper">
                              <label for="remarks"></label>	
                            <textarea cols="50" rows="1" placeholder="Possible Reason Of Failure & Remarks" id="remarks" class="form-control" name="customerRemarks" ng-model="serviceInq.customerRemarks" with-floating-label  ng-disabled="{{disabled}}"></textarea>
                           
                            </div>
                       </div>
                       </div>	  
					   </div> 
	        <div class="row">
						   <div class="col-sm-12" align="center">
						   
						   <button type="submit" class="btn btn-blue"   ng-click="submitServiceinq(serviceInq,serviceInquiryForm);"  ng-disabled="{{disabled}}"><i class="glyphicon glyphicon-save"></i> Save</button>
						<button type="button" class="btn btn-success"  ng-click="submitServiceinqFormSubmit(serviceInq,serviceInquiryForm);"   ng-disabled="{{disabled}}"><i class="glyphicon glyphicon-envelope"></i> Save & Send</button>
						
						
							<!--	<button type="submit" class="btn btn-blue" ng-disabled="{{disabled}}">Save & Send</button>-->
							<!--/*	<button type="submit" class="btn btn-blue" ng-disabled="{{disabled}}">Save And Send</button>*/-->
								<!--<button type="button"  style="background-color:#5db2ff ;" ng-click="reset(serviceInquiryForm)" ng-disabled="{{disabled}}"> <img src="image/dustbin.jpg"  class="pointer"  data-toggle="tooltip" title="Delete"  style="width:40px;height:30px; " alt="" ></button>-->
								<button type="button"  class="btn btn-danger" ng-click="reset(serviceInquiryForm)"  ng-disabled="{{disabled}}"><i class="glyphicon glyphicon-trash" ></i> Delete<!--<img src="image/dustbin.jpg"  class="pointer"  data-toggle="tooltip" title="Delete"  style="width:40px;height:30px; " alt="" >--></button>
						  </div>
						  	
						</div>
				<div  id="popup_box"   >
 <div style="height:100%; background-color:#FFFFFF;" >
                                
                                
						    <img src="images/warning.jpg"  style="height: 71px;align-content: center;margin-left: 146px;"/>
							<h4 style="margin-left: 55px;"><b>Are You Sure Want To Delete??</b></h4>
							<br/>
							
						  
						 <div style="text-align:center;display:; background-color:#FFFFFF;">
						 <button type="button"   class="btn btn-primary"	 ng-click="cancelConfirmPopup();">Cancel</button>
						<button type="button"   class="btn btn-warning"	 ng-click="RemoveRowPopup();">Yes,Sure</button>&nbsp;&nbsp;&nbsp;
						</div>
						</div>
							
						 </div>			
	 		</form> 
            
            		
	</div>										

</div>
