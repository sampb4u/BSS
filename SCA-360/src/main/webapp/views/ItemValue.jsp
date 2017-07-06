<section id="content" data-ng-controller="ItemValueMaster" data-ng-init='loadAllItemAndScores()'>  
 <div class="horizontal-space"></div>
<div class="well with-header with-footer">
   <div class="header bordered-blue">			
        Item Value & Score
   </div>					
   <div class="col-xs-12 col-md-12">     
         
				<form name="ItemValueMasterForm" ng-submit='AddItemValueAndScores(AddItemValue,ItemValueMasterForm);' novalidate>
					 		<div class="row">
							
								<div class="col-sm-4">
									<div class="row">
										<div class="col-sm-12">
											    <div class="form-group floating-label-wrapper">
												<div class="form-group" ng-class="{ 'has-error' : ItemValueMasterForm.itemValue.$invalid && (ItemValueMasterForm.itemValue.$dirty || Addsubmitted)}">                                
												
					        	               			 <div class="fg-line">
														 <label for="itemvalue"></label>
														 <input type="text" class="form-control" placeholder="Item Value"  maxlength="10"  name="itemValue" data-ng-model='AddItemValue.itemValue' data-ng-required='true' tabIndex="1" id="itemvalue"  with-floating-label/>
			    		            	        	</div>
													
												</div>
			                    		<p ng-show="ItemValueMasterForm.itemValue.$error.required && (ItemValueMasterForm.itemValue.$dirty || Addsubmitted)" class="help-block">Item Value is required.</p>
										</div>
										</div>
									</div>
									
									
									<br />
							<div class="row">
										<div class="col-sm-12">
										  <div class="form-group  floating-label-wrapper">
										  <div class="form-group" ng-class="{ 'has-error' : ItemValueMasterForm.score.$invalid && (ItemValueMasterForm.score.$dirty || Addsubmitted)}">                                
							        	            <div class="fg-line">
													<label for="score"></label>
					<input type="text" class="form-control" placeholder="Score"  maxlength="50" tabIndex="4" name="score" data-ng-model='AddItemValue.score' id="score"  ng-blur="spacebtw('score');" data-ng-required='true'  with-floating-label/>														 
				                				    </div>
													
												</div>
													<p ng-show="ItemValueMasterForm.score.$error.required && (ItemValueMasterForm.score.$dirty || Addsubmitted)" class="help-block">score is required.</p>
												</div>
										</div>
									</div>
									
									
									
																		
																		
								</div>
								<div class="col-sm-4">
									<div class="row">
										<div class="col-sm-12">
										    <div class="form-group  floating-label-wrapper">
											  <div class="form-group" ng-class="{ 'has-error' : ItemValueMasterForm.stagenumber.$invalid && (ItemValueMasterForm.stagenumber.$dirty || Addsubmitted)}">                         
							        	            <div class="fg-line">
													<label for="stagenumber"></label>
	<input type="text" class="form-control" placeholder="Stage No."  maxlength="25" tabIndex="2" name="stagenumber" data-ng-model='AddItemValue.stageNumber' data-ng-required='true'  id="stagenumber" ng-blur="spacebtw('stagenumber');"  with-floating-label />														 
				                				    </div>
													
											</div>	
												<p ng-show="ItemValueMasterForm.stagenumber.$error.required && (ItemValueMasterForm.stagenumber.$dirty || Addsubmitted)" class="help-block">stageNumber is required.</p>
											</div>
										</div>
									</div>		<br>


<div class="row">
										<div class="col-sm-12">
											    <div class="form-group  floating-label-wrapper">
											  <div class="form-group" ng-class="{ 'has-error' : ItemValueMasterForm.remarks.$invalid && (ItemValueMasterForm.remarks.$dirty || Addsubmitted)}">                         
					        	               			 <div class="fg-line">
														  <label for="remarks"></label>
														<input type="text" class="form-control" placeholder="Remarks"  maxlength="50"  name="remarks" data-ng-model='AddItemValue.remarks'    data-ng-required='true' id="remarks"  with-floating-label />
			    		            	        	</div>
												
												</div>
												<p ng-show="ItemValueMasterForm.remarks.$error.required && (ItemValueMasterForm.remarks.$dirty || Addsubmitted)" class="help-block">Remarks is required.</p>
			                    		</div>
										</div>
									</div>
	

									
																																	
								</div>
								<div class="col-sm-4">
									
									<div class="row">
										<div class="col-sm-12">
											    <div class="form-group  floating-label-wrapper">
												 <div class="form-group" ng-class="{ 'has-error' : ItemValueMasterForm.tag.$invalid && (ItemValueMasterForm.tag.$dirty || Addsubmitted)}">                         
					        	               			 <div class="fg-line">
														 <label for="Model"></label>
														 <input type="text" class="form-control" placeholder="Model"  maxlength="50" tabIndex="3" name="tag" data-ng-model='AddItemValue.model' id="Model"  ng-blur="spacebtw('tag');" data-ng-required='true' with-floating-label />
			    		            	        	</div>
												</div>
												<p ng-show="ItemValueMasterForm.tag.$error.required && (ItemValueMasterForm.tag.$dirty || Addsubmitted)" class="help-block">Model is required.</p>
			                    		</div>
										</div>
									</div>



	

									
																																	
								</div>
								
								
										
								
								
							</div><br />		
							<div class="row" align="center">
								<div class="col-sm-12">
									<div class="input-group">
									
									<div class="fg-line">
										<button type="submit" class="btn btn-primary btn-hide" tabindex="7">Save</button>
										<button type="reset" class="btn btn-primary" ng-click="reset(ItemValueMasterForm)">Reset</button>
									</div>
								</div>
								</div>							
							</div>
						</form>					
									
									
									<br>
									<div class="table-scrollable">
										<form name="EditDesignationMasterFrom" novalidate>					
							        <table ng-table="DesignationMaster.tableEdit"  class="table table-striped table-vmiddle">
									
									
													<thead>
											        <tr>
											           <th><span>Action</span></th>
													   <th><span>Item Value</span></th>
													   	<th><span>Model</span></th>
													    <th><span>Stage No</span></th>
													   <th><span>Score</span></th>
													   <th><span>Remarks</span></th>
											        </tr>
											      </thead>
											      <tbody>
										
								        <tr style="width:100%;" ng-repeat="UpdateDesignations in AddedDesignations"  ng-class="{ 'active': UpdateDesignations.$edit }">
                		    				<td>
					    		               <button type="button" class="btn btn-default" ng-if="!UpdateDesignations.$edit" ng-click="UpdateDesignations.$edit = true;"><i class="zmdi zmdi-edit"></i></button>
					            		       <button type="submit" class="btn btn-success btn-hideg" ng-if="UpdateDesignations.$edit" ng-click="UpdateAddedDesignations(UpdateDesignations,$index);UpdateDesignations.$edit = isEdit;"><i class="zmdi zmdi-check"></i></button>
											  
		                    				 </td>
							                 <td>
                		    					<span ng-if="!UpdateDesignations.$edit">{{UpdateDesignations.itemValue}}</span>
					    		                <div ng-if="UpdateDesignations.$edit">
													<div class="form-group">
													<input class="form-control" type="text" ng-model="UpdateDesignations.itemValue" placeholder='Item Value' maxlength="10"/>
													</div>
												</div>
					            		      </td>
		                    				  <td>
							                     <span ng-if="!UpdateDesignations.$edit">{{UpdateDesignations.model}}</span>
							                     <div ng-if="UpdateDesignations.$edit">
<div class="form-group" ng-class="{ 'has-error' : EditDesignationMasterFrom.model{{$index}}.$invalid && (EditDesignationMasterFrom.model{{$index}}.$dirty || Addsubmitted)}">												
<input class="form-control" type="text" ng-model="UpdateDesignations.model" placeholder='Model Name' maxlength="25" name="designation{{$index}}" data-ng-required='true'  ng-blur="spacebtwgrid('designation',$index);validateDuplicate(UpdateDesignations.designation,$index);"/>
						<p ng-show="EditDesignationMasterFrom.designation{{$index}}.$error.required && (EditDesignationMasterFrom.designation{{$index}}.$dirty || submitted)" class="help-block">Required</p>
					<p ng-show="EditDesignationMasterFrom.designation{{$index}}.$error.pattern  && (EditDesignationMasterFrom.designation{{$index}}.$dirty || submitted)" class="help-block">Invalid</p>		
					<p class="help-block duplicate{{$index}}" style="color:#FF0000; display:none;" ng-if="UpdateDesignations.designation!=null">Designation Name Already Exist.</p>										

</div>
												 </div>
							                  </td>
							                  
											  
											  <td>
							                      <span ng-if="!UpdateDesignations.$edit">{{UpdateDesignations.stageNumber}}</span>
        		            					  <div ng-if="UpdateDesignations.$edit">
												  		<div class="form-group">
												  	 <input class="form-control" type="text" ng-model="UpdateDesignations.stageNumber" placeholder='Stage Number' maxlength="50" name="description{{$index}}"  ng-blur="spacebtwgrid('tag',$index)" />
													 </div>
												  </div>
							                  </td>	
											  <td>
							                      <span ng-if="!UpdateDesignations.$edit">{{UpdateDesignations.score}}</span>
        		            					  <div ng-if="UpdateDesignations.$edit">
												  		<div class="form-group">
												  	 <input class="form-control" type="text" ng-model="UpdateDesignations.score" placeholder='Score' maxlength="50" name="description{{$index}}"  ng-blur="spacebtwgrid('tag',$index)" />
													 </div>
												  </div>
							                  </td>	
											  <td>
							                      <span ng-if="!UpdateDesignations.$edit">{{UpdateDesignations.remarks}}</span>
        		            					  <div ng-if="UpdateDesignations.$edit">
												  		<div class="form-group">
												  	 <input class="form-control" type="text" ng-model="UpdateDesignations.remarks" placeholder='Remarks' maxlength="50" name="description{{$index}}"  ng-blur="spacebtwgrid('tag',$index)" />
													 </div>
												  </div>
							                  </td>												  
							             	</tr>
										</tbody>
								     </table>	
								</form>
		</div>
									<br />
		  							<div class="row" align="center">
							
						</div>
									
			</div>					 
			<div class="row">
			</div>
</div>
</section>		