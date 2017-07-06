<style>
#pageheading
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

				
	   <div   data-ng-controller="packageMasterController" ng-init="addpackingForm();getData();modifyFlag();"> 					

<div class="row">
    
    <div class="col-xs-12 col-md-12">
        <div class="well with-header with-footer">
            <div class="header bordered-blue" id="pageheading">
              Package Master 
            </div>
            <form name="packageMasterform" novalidate>	
			<div class="row">
			<div class="col-sm-1">
			</div>
				<div class="col-sm-9">
		
			
												
								<div class="table-responsive">
									<section class="asdok">
										<div class="container1">								
								 				
							        <table class="table table-striped table-vmiddle" style=" width: 95%; border-collapse: initial;">
											<thead>
													<tr>
														<th><span>Action</span></th>
														 <th><span>ID</span></th>
														<th><span>Packing Type</span></th>
														<th><span>Description</span></th>
														
														</tr>
												</thead>
											<tbody>
								        <tr ng-repeat="packingTypes in packingTypeData">
						<td> <input type="hidden" ng-model="packingTypes.id"  name="id{{$index}}"/>	<button type="button" class="btn btn-primary" id="right_All_1"   ng-if="packingTypes.id==1" ng-click='addpackingForm();'>
                                  <span style="font-family: Geneva, Arial, Helvetica, sans-serif;"> </span> <i class="glyphicon glyphicon-plus-sign"></i>
                                                  </button>
								
												  
					<button type="button" id="right_All_1" class="btn btn-danger" ng-click='removePackingTypeRow(packingTypes.id);' ng-if="packingTypes.id != '1'" ><i class="glyphicon glyphicon-remove-sign"></i></button>
										
										
														</td>
													
													
									
													
													<td>{{$index+1}} <input type="hidden" class="form-control"  ng-model="packingTypes.id"  name="id{{$index}}"/></td>
													
												<!--	ng-keyup="getpackingvalidate(packingTypes.packing,$index)"-->
													<td>
													<div class="form-group" ng-class="{ 'has-error' : packageMasterform.packagetype{{$index}}.$invalid && (packageMasterform.packagetype{{$index}}.$dirty || submitted)}">
				<input type="text"  class="form-control" ng-model="packingTypes.packagetype" ng-required="true"  name="packagetype{{$index}}"
				 ng-blur="getValidatePackingType(packingTypes.packagetype,$index);"   size="5" />
					<!--<span ng-show="packageMasterform.packagetype{{$index}}.$error.pattern" class="help-block">Only Alphabets</span>ng-pattern="/^[a-zA-Z ]*$/"-->
													 <p ng-show="packageMasterform.packagetype{{$index}}.$error.required && (packageMasterform.packagetype{{$index}}.$dirty || submitted)" class="help-block">Required</p>
													  <!-- <p class="existValRC122{{$index}}" style="color:#FF0000; display:none;" ng-if="packingTypes.packing!=null">Already Exist</p></div>-->
													 </div></td>
													<td > <input type="text"  class="form-control" ng-model="packingTypes.description"  name="description{{$index}}" size="8" /></td>
													
													
				</tr>		
										 </tbody>
								         </table>	
									
								</div>
								</section>			
							    
						</div>
			</div>
			</div>
			
									 <div class="row" >
									 <div class="col-sm-2" ></div>
									 <div class="col-sm-1" ></div>
					<div class="col-sm-4" align="center">
						<button type="submit" class="btn btn-blue" ng-click="savePackingType(packageMasterform);" ><i class="glyphicon glyphicon-save"></i>Save</button>
						<!--<button type="reset" class="btn btn-blue" ng-click="resetpackingTypes(salespackingTypes)">Reset</button>-->
						
					</div>
					<div class="col-sm-6"></div>	
				</div>

          
        
            </form>
    </div>
</div>
</div>
