<section id="content" data-ng-controller="FrameSizeMaster" data-ng-init='loadAllFrameSizes()'>  
 <div class="horizontal-space"></div>
<div class="well with-header with-footer">
   <div class="header bordered-blue">			
        Frame Size
   </div>					
   <div class="col-xs-12 col-md-12">     
         
				<form name="FrameSizeMasterForm" ng-submit='AddDesignations(AddFrameSize,FrameSizeMasterForm);' novalidate>
					 		<div class="row">
								<div class="col-sm-4">
									<div class="row">
										<div class="col-sm-12">
											    <div class="form-group floating-label-wrapper"  ng-class="{ 'has-error' : FrameSizeMasterForm.frameSize.$invalid && (FrameSizeMasterForm.frameSize.$dirty || Addsubmitted)}">
					        	               			 <div class="fg-line">
														 <label for="framesize"></label>

														 <input type="text" class="form-control" placeholder="Frame Size"  maxlength="10"  name="frameSize" data-ng-model='AddFrameSize.frameSize' id="framesize" data-ng-required='true' with-floating-label/>
			    		            	        	</div>
													<p ng-show="FrameSizeMasterForm.frameSize.$error.required && (FrameSizeMasterForm.frameSize.$dirty || Addsubmitted)" class="help-block">FrameSize  is required.</p>
												</div>
			                    		
										</div>
									</div><br />
																		
									
										
									
																		
								</div>
								<div class="col-sm-4">
									<div class="row">
										<div class="col-sm-12">
											    <div class="form-group floating-label-wrapper" ng-class="{ 'has-error' : FrameSizeMasterForm.tag.$invalid && (FrameSizeMasterForm.tag.$dirty || Addsubmitted)}">
					        	               			 <div class="fg-line">
														  <label for="tag"></label>
														<input type="text" class="form-control" placeholder="Tag"  maxlength="50" tabindex="4" name="tag" data-ng-model='AddFrameSize.tag' id="tag"  ng-blur="spacebtw('tag');" data-ng-required='true' with-floating-label/>
			    		            	        	</div>
													<p ng-show="FrameSizeMasterForm.tag.$error.required && (FrameSizeMasterForm.tag.$dirty || Addsubmitted)" class="help-block">tag is required.</p>
								
												</div>
			                    		
										</div>
									</div><br />
																		
									
										
									
																		
								</div>
								
								<div class="col-sm-4">
									<div class="row">
										<div class="col-sm-12">
										<div class="form-group floating-label-wrapper" ng-class="{ 'has-error' : FrameSizeMasterForm.productcode.$invalid && (FrameSizeMasterForm.productcode.$dirty || Addsubmitted)}">
							        	            <div class="fg-line">
													<label for="Productcode"></label>
										<input type="text" class="form-control" placeholder="Product Code"  maxlength="25" tabindex="1" name="productcode" data-ng-model='AddFrameSize.productCode' data-ng-required='true' data-ng-pattern="/^[a-z A-Z.\s]*$/" id="Productcode" ng-blur="spacebtw('productcode');validateDup();" with-floating-label />														 
				                				    </div>
								<p ng-show="FrameSizeMasterForm.productcode.$error.required && (FrameSizeMasterForm.productcode.$dirty || Addsubmitted)" class="help-block">PC is required.</p>
								<p ng-show="FrameSizeMasterForm.productcode.$error.pattern  && (FrameSizeMasterForm.productcode.$dirty || Addsubmitted)" class="help-block">Enter a valid PC.</p>			
								<p class="help-block duplicate" style="color:#FF0000; display:none;" ng-if="AddFrameSize.productcode!=null">PC Name Already Exist.</p>										
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
										<button type="reset" class="btn btn-primary "  ng-click="reset(FrameSizeMasterForm)">Reset</button>
												<!--	<button type="reset" class="btn btn-primary btn-sm m-t-10" ng-click="reset(BankMasterForm,AddBankDrop.AddedBankName)" ng-if="AddBankDrop.AddedBankName==null">Reset</button>
										<button type="reset" class="btn btn-primary btn-sm m-t-10" ng-click="reset(BankMasterForm,AddBankDrop.AddedBankName)" ng-if="AddBankDrop.AddedBankName!=null">Reset</button>-->
									</div>
								</div>
								</div>							
							</div>
						</form>					
									
									
									<br>
									<div class="table-scrollable">
										<form name="EditDesignationMasterFrom" novalidate>					
							        <table ng-table="DesignationMaster.tableEdit" class="table table-striped table-vmiddle">
									
									
													<thead>
											        <tr>
											           <th><span>Action</span></th>
													   <th><span>Frame Size</span></th>
													    <th><span>Product Code</span></th>
													   <th><span>Tag</span></th>
											        </tr>
											      </thead>
											      <tbody>
										
								        <tr ng-repeat="UpdateDesignations in AddedDesignations"  ng-class="{ 'active': UpdateDesignations.$edit }">
                		    				<td>
					    		               <button type="button" class="btn btn-default" ng-if="!UpdateDesignations.$edit" ng-click="UpdateDesignations.$edit = true;"><i class="zmdi zmdi-edit"></i></button>
					            		       <button type="submit" class="btn btn-success btn-hideg" ng-if="UpdateDesignations.$edit" ng-click="UpdateAddedDesignations(UpdateDesignations,$index);UpdateDesignations.$edit = isEdit;"><i class="zmdi zmdi-check"></i></button>
											  
		                    				 </td>
							                 <td>
                		    					<span ng-if="!UpdateDesignations.$edit">{{UpdateDesignations.frameSize}}</span>
					    		                <div ng-if="UpdateDesignations.$edit">
													<div class="form-group">
													<input class="form-control" type="text" ng-model="UpdateDesignations.frameSize" placeholder='Designation Code' maxlength="10"/>
													</div>
												</div>
					            		      </td>
		                    				  <td>
							                     <span ng-if="!UpdateDesignations.$edit">{{UpdateDesignations.productCode}}</span>
							                     <div ng-if="UpdateDesignations.$edit">
<div class="form-group" ng-class="{ 'has-error' : EditDesignationMasterFrom.productCode{{$index}}.$invalid && (EditDesignationMasterFrom.productCode{{$index}}.$dirty || Addsubmitted)}">												
<input class="form-control" type="text" ng-model="UpdateDesignations.productCode" placeholder='productCode Name' maxlength="25" name="designation{{$index}}" data-ng-required='true' data-ng-pattern="/^[a-z A-Z\s]*$/" ng-blur="spacebtwgrid('designation',$index);validateDuplicate(UpdateDesignations.designation,$index);"/>
						<p ng-show="EditDesignationMasterFrom.designation{{$index}}.$error.required && (EditDesignationMasterFrom.designation{{$index}}.$dirty || submitted)" class="help-block">Required</p>
					<p ng-show="EditDesignationMasterFrom.designation{{$index}}.$error.pattern  && (EditDesignationMasterFrom.designation{{$index}}.$dirty || submitted)" class="help-block">Invalid</p>		
					<p class="help-block duplicate{{$index}}" style="color:#FF0000; display:none;" ng-if="UpdateDesignations.designation!=null">Designation Name Already Exist.</p>										

</div>
												 </div>
							                  </td>
							                  
											  
											  <td>
							                      <span ng-if="!UpdateDesignations.$edit">{{UpdateDesignations.tag}}</span>
        		            					  <div ng-if="UpdateDesignations.$edit">
												  		<div class="form-group">
												  	 <input class="form-control" type="text" ng-model="UpdateDesignations.tag" placeholder='Description' maxlength="50" name="description{{$index}}"  ng-blur="spacebtwgrid('tag',$index)" />
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