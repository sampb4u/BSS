 <style>#pageheading
{
	font-size: 25px;
	font-weight: 300;
	color: #000000;
	text-align: center;
	margin: 0px 0px;
	padding: 0px 0px;
}
.container
		{
			margin-left:30px;
			width:95%;
		}

.asdok 
		{
			  position: relative;
			  padding-top: 25px;
			  background-color:#ffffff;
			  color:#333333;
		}
		.asdok.positioned 
		{
			  position: absolute;
			  width:95%;
			  box-shadow: 0 0 15px #333;
		}
		.container1 
		{
			  overflow-y: auto;
			  height: 350px;
		}
		.table 
		{
			 border-spacing: 0; border-width: 0; padding: 0; border-width: 0;
		}
		.table td + .table td 
		{
			  border-left:1px solid #eee;
			  text-align:left;
		}
		.table td, .table th 
		{
			  border-bottom:1px solid #eee;
			  color: #000;
			  width:0%;
		}
		.table th span
		{
			  position: absolute;
			  background: transparent;
			  color: #333333;
			  top: 0;
		}
		.table th:first-child div
		{
			  border: none;
		}
</style>
<form name="probablitymasterForm" novalidate>
<div ng-controller="probalityMaster" ng-init="addprobabilitydataForm();getIndicators();getCustomergruop();">									
	<div class="well with-header with-footer">
      <div class="header bordered-blue" id="pageheading">Probability Master</div>
	  <div class="row">
	   <div class="col-sm-3"></div>
	  <div class="col-sm-3">
	  <label><b>Customer Type</b></label>
	  <select class="form-control" data-ng-model="probability.customerGroup" ng-options="customerGroup.custmertypename as customerGroup.custmertypename for customerGroup in customergroupData" name="customerGroup"  ng-change="getCustomerGroup(probability.customerGroup);">
													<option value="">---SELECT----</option>
											
													</select>
	  </div>
	 </div>
	  <br/>
	  <br/>
	  <div class="row">
			<div class="col-sm-3">
			</div>
				<div class="col-sm-6">
	<!--<div class="table-scrollable">
				<table class="table table-hover table-striped table-bordered">
					<thead class="bordered-blue">
						<tr>
						<th style="width:1%">Action</th>
						  <th style="width:2%">Progress Indicators</th>
							<th style="width:1%">Probability</th>
							
						</tr>
					</thead>
					<tbody>
					<tr ng-repeat="probabilitydata in probabilityFormData">
						<td> <input type="hidden" ng-model="probabilitydata.id"  name="id{{$index}}"/>							<button type="button" class="btn btn-primary" id="right_All_1"   ng-if="probabilitydata.id==1" ng-click='addprobabilitydataForm();'>
                                  <span style="font-family: Geneva, Arial, Helvetica, sans-serif;"> </span> <i class="glyphicon glyphicon-plus-sign"></i>
                                                  </button>
												  <button type="button" id="right_All_1" class="btn btn-primary" ng-if="probabilitydata.id!=1"  ng-click='removeFormRow(probabilitydata.id);'>
                                                   	<span style="font-family: Geneva, Arial, Helvetica, sans-serif;"></span><i class="glyphicon glyphicon-remove-sign"></i>
                                                    </button>	</td>
													<td> <select class="form-control" data-ng-model="probabilitydata.indicator" ng-options="indicator.indicator as indicator.indicator for indicator in indicatorsData" name="indicator{{$index}}">
													<option value="">---SELECT----</option>
													
													</select></td>
													<td style="width:1%"> <input type="text"   class="form-control" ng-model="probabilitydata.probability"  name="probability{{$index}}"/></td>
													
													
				</tr>		
					</tbody>
				</table>
			</div>-->
			
			<div class="table-responsive">
									<section class="asdok">
										<div class="container1">								
								 				
							        <table ng-table="" class="table table-striped table-vmiddle">
											<thead>
													<tr>
											<th style="width:1%">Action</th>
										  <th style="width:2%">Progress Indicators</th>
											<th style="width:1%">Probability</th>
														</tr>
												</thead>
											<tbody>
								        <tr ng-repeat="probabilitydata in probabilityFormData">
						<td> <input type="hidden" ng-model="probabilitydata.id"  name="id{{$index}}"/>							<button type="button" class="btn btn-primary" id="right_All_1"   ng-if="probabilitydata.id==1" ng-click='addprobabilitydataForm();'>
                                  <span style="font-family: Geneva, Arial, Helvetica, sans-serif;"> </span> <i class="glyphicon glyphicon-plus-sign"></i>
                                                  </button>
												  <button type="button" id="right_All_1" class="btn btn-primary" ng-if="probabilitydata.id!=1"  ng-click='removeFormRow(probabilitydata.id);'>
                                                   	<span style="font-family: Geneva, Arial, Helvetica, sans-serif;"></span><i class="glyphicon glyphicon-remove-sign"></i>
                                                    </button>	</td>
													<td>
													<div class="form-group" ng-class="{ 'has-error' : probablitymasterForm.indicatorcode{{$index}}.$invalid && (probablitymasterForm.indicatorcode{{$index}}.$dirty || submitted)}">
													 <select class="form-control" data-ng-model="probabilitydata.indicatorcode" ng-options="indicator.indicatorcode as indicator.indicator for indicator in indicatorsData" name="indicatorcode{{$index}}" ng-required="true">
													<option value="">---SELECT----</option>
													
													</select>
													 <p ng-show="probablitymasterForm.indicatorcode{{$index}}.$error.required && (probablitymasterForm.indicatorcode{{$index}}.$dirty || submitted)" class="help-block">Required</p></div>
									
													</td>
													<td style="width:1%"> 
														<div class="form-group" ng-class="{ 'has-error' : probablitymasterForm.probability{{$index}}.$invalid && (probablitymasterForm.probability{{$index}}.$dirty || submitted)}">
													<input type="text"   class="form-control" ng-model="probabilitydata.probability"  name="probability{{$index}}"   ng-pattern="/^[0-9]+$/"  ng-required="true"/>
														<span ng-show="probablitymasterForm.probability{{$index}}.$error.pattern" class="help-block">Only Numbers</span>
														
															 <p ng-show="probablitymasterForm.probability{{$index}}.$error.required && (probablitymasterForm.probability{{$index}}.$dirty || submitted)" class="help-block">Required</p></div>
													</td>
													
													
				</tr>		
										 </tbody>
								         </table>	
									
								</div>
								</section>			
							    
						</div>
			
			</div><br/><br/>
       <div class="row" >
					<div class="col-sm-12" align="center">
						<button type="submit" class="btn btn-blue" ng-click="saveprobability(probability,probablitymasterForm);" >Save</button>
						<!--<button type="reset" class="btn btn-blue" ng-click="resetprobablity(probablitymasterForm)">Reset</button>-->
						
					</div>
					<div class="col-sm-6"></div>	
				</div>                                             
	</div>
		
      
  
	
											
	



	</div>		
									

</div>
</form>