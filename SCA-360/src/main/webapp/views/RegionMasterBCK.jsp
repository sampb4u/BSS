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
			  height: 300px;
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

 <section id="content" data-ng-controller="RegionMaster" ng-init="loadCountryNames();addRegionForm();">  
   
		
		<div class="row"> 
    		<div class="col-xs-12 col-md-12">
		        <div class="well with-header with-footer" style="background-color:#FFFFFF; height:700px;">
					<div class="header bordered-blue" id="pageheading">Region Master</div>
					
					<form name="RegionMasterForm"  novalidate>		
					<div class="row">
	  <div class="col-sm-3"></div>
	  <div class="col-sm-3">
	  <label><b>Country</b></label>
	  <select class="form-control" data-ng-model="AddRegion.countrycode" ng-options="countrycode.countrycode as countrycode.country for countrycode in countryNames | orderBy:'-country':true" name="countrycode"  ng-change="getRegions(AddRegion.countrycode);" >
													<option value="">SELECT</option>
											
													</select>
	  </div>
	 </div><br/><br/>
						<div class="row">
			<div class="col-sm-1">
			</div>
				<div class="col-sm-9">
			

												
								<div class="table-responsive">
									<section class="asdok">
										<div class="container1">								
								 				
							        <table ng-table="" class="table table-striped table-vmiddle">
											<thead>
													<tr>
														<th><span>Action</span></th>
														 <th><span>Region Code</span></th>
														<th><span>Region Name</span></th>
														<th><span>Status</span></th>
														</tr>
												</thead>
											<tbody>
								        <tr ng-repeat="regiondata in RegionDataFoorm">
						<td > <input type="hidden" ng-model="regiondata.id"  name="id{{$index}}"/>	<button type="button" class="btn btn-primary" id="right_All_1"   ng-if="regiondata.id==1" ng-click='addRegionForm();'>
                                  <span style="font-family: Geneva, Arial, Helvetica, sans-serif;"> </span> <i class="glyphicon glyphicon-plus-sign"></i>
                                                  </button>
												  
												  <span ng-if="updateFlag!='ok'">		
												  <button type="button" id="right_All_1" class="btn btn-primary" ng-if="regiondata.id!=1"  ng-click='removeFormRow(regiondata.id);'>
                                                   	<span style="font-family: Geneva, Arial, Helvetica, sans-serif;"></span><i class="glyphicon glyphicon-remove-sign"></i>
                                                    </button>	
													</span>
													<span ng-if="updateFlag=='ok'">
												<span ng-if="regiondata.id!= '1'">		
												 <button type="button" id="right_All_1" class="btn btn-primary" ng-if="regiondata.id<=updateLength" ng-disabled='true' ng-click='removeFormRow(regiondata.id);'>
                                                   	<span style="font-family: Geneva, Arial, Helvetica, sans-serif;"></span><i class="glyphicon glyphicon-remove-sign"></i>
                                                    </button>												
													<button type="button" id="right_All_1" class="btn btn-primary" ng-click='removeFormRow(regiondata.id);' ng-if="regiondata.id>updateLength" ng-disabled='false'><i class="glyphicon glyphicon-remove-sign"></i></button>
													
													</span>
													</span>
													
													</td>
													
													
													<td>
													<div class="form-group" ng-class="{ 'has-error' : RegionMasterForm.regionCode{{$index}}.$invalid && (RegionMasterForm.regionCode{{$index}}.$dirty || submitted)}">
													<span ng-if="updateFlag!='ok'">
				<input type="text" class="form-control" ng-model="regiondata.regionCode"  ng-required="true"  name="regionCode{{$index}}"  size="5" ng-blur="getvalidateRegionCode(regiondata.regionCode,$index);"  /></span>
				<span ng-if="updateFlag=='ok'">
				<input type="text" class="form-control" ng-model="regiondata.regionCode"  ng-if="regiondata.id<=updateLength"  ng-disabled='true' ng-required="true"  name="regionCode{{$index}}"  size="5" ng-blur="getvalidateRegionCode(regiondata.regionCode,$index);"  />
				<input type="text" class="form-control" ng-model="regiondata.regionCode"  ng-if="regiondata.id>updateLength"  ng-disabled='false' ng-required="true"  name="regionCode{{$index}}"  size="5" ng-blur="getvalidateRegionCode(regiondata.regionCode,$index);"  /></span>
													 <p ng-show="RegionMasterForm.regionCode{{$index}}.$error.required && (RegionMasterForm.regionCode{{$index}}.$dirty || submitted)" class="help-block">Required</p>
													   <p class="existValRC122{{$index}}" style="color:#FF0000; display:none;" ng-if="regiondata.regionCode!=null">Already Exist</p>
													   </div>
													
													 </td>
													<td> 
													<div class="form-group" ng-class="{ 'has-error' : RegionMasterForm.region{{$index}}.$invalid && (RegionMasterForm.region{{$index}}.$dirty || submitted)}">
													<input type="text"  class="form-control" ng-model="regiondata.region"  name="region{{$index}}" ng-required="true"  size="7"/>
													 <p ng-show="RegionMasterForm.region{{$index}}.$error.required && (RegionMasterForm.region{{$index}}.$dirty || submitted)" class="help-block">Required</p>
													</td>
													<td> <div class="radio"> 
									
                                    <label id="">
                                     	<input type="radio" class="colored-blue" class="form-control" name="status{{$index}}" ng-model="regiondata.status" value="0" checked="checked">
                                               <span class="text">Active</span>
                                               </label>
									<label id=""> &nbsp;&nbsp;&nbsp;
										
                                            <input type="radio" class="colored-blue" class="form-control"  name="status{{$index}}" ng-model="regiondata.status" value="1" >
                                               <span class="text">InActive</span>
                                            </label>
													   
                                        
								</div></td>
													
				</tr>		
										 </tbody>
								         </table>	
									
								</div>
								</section>			
							    
						</div>
			</div>
			</div>
			
							<br />		 
					<div class="row" >
					<div class="col-sm-12" align="center">
						<button type="submit" class="btn btn-blue" ng-click="regionSubmit(AddRegion,RegionMasterForm)">Save</button>
						<!--/*<button type="reset" class="btn btn-blue" ng-click="reset(RegionMasterForm)">Reset</button>*/-->
					</div>
					<div class="col-sm-6"></div>	
				</div>
          
        </div>
				
								
				
				</form>
			</div>
		</div>
		</div>
					
</section>
