    <script>
      $(function() 
	  {
        $('.chosen-select').chosen();		
      });
    </script>
   <div class="horizontal-space"></div> 
 <section id="content" data-ng-controller="GenerateScoreController" >     
		
		<div class="row"> 
    		<div class="col-xs-12 col-md-12">
		        <div class="well with-header with-footer" style="background-color:#FFFFFF; height:700px;">
					<div class="header bordered-blue">Generate Score</div>
					
					<form name="GenerateScoreForm" ng-submit="regionSubmit(GenerateScore,GenerateScoreForm)" novalidate>		
						<div class="row" >						
							<div class="col-sm-4" ></div>
							
								<div class="col-sm-4" align="center" >								
									<div  ng-class="{ 'has-error' : GenerateScoreForm.modelno.$invalid && (GenerateScoreForm.modelno.$dirty || submitted)}">
									 <div class="fg-line floating-label-wrapper">
									 <label for="modelno"></label>
								<input type="text" class="form-control" placeholder="Model Number"  data-ng-required="true"  name="modelno"  data-ng-model="GenerateScore.modelno"       tabindex="1"  maxlength="25" id="modelno"  with-floating-label>
										<p ng-show="GenerateScoreForm.modelno.$error.required && (GenerateScoreForm.modelno.$dirty || submitted)" class="help-block"> Model Number is required</p>
										</div>
									</div>
																	
								</div>
						
						<div class="col-sm-4" ></div>						
					</div>
					
					<br>
					<div class="row" >						
							<div class="col-sm-4" ></div>							
								<div class="col-sm-4" align="center">								
									<div>	
								<div class="fg-line floating-label-wrapper">
									 <label for="pcode"></label>									
								<input type="text" class="form-control" placeholder="Product Code"   name="pcode"  data-ng-model="GenerateScore.pcode"       maxlength="25" id="pcode" with-floating-label readonly>	
								</div>								
									</div>														
								</div>						
						<div class="col-sm-4" ></div>						
					</div>
					
					<br>
					<div class="row" >						
							<div class="col-sm-4" ></div>
							
								<div class="col-sm-4" align="center">								
									<div>
									<div class="fg-line floating-label-wrapper">
									 <label for="mtype"></label>	
						<input type="text" class="form-control" placeholder="Motor Type"   name="mtype"  data-ng-model="GenerateScore.mtype"         maxlength="25" id="mtype" with-floating-label readonly>
										</div>
									</div>														
								</div>						
						<div class="col-sm-4" ></div>						
					</div>
					
					<br>
							<div class="row" >						
							<div class="col-sm-4" ></div>
							
								<div class="col-sm-4" align="center">								
									<div>
									<div class="fg-line floating-label-wrapper">
									 <label for="tag"></label>
								<input type="text" class="form-control" placeholder="Tag"   name="tag"  data-ng-model="GenerateScore.tag"         maxlength="25" id="tag" with-floating-label readonly>
										</div>	
									</div>														
								</div>						
						<div class="col-sm-4" ></div>						
					</div>
					
					
					<br>
					<div class="row" >						
							<div class="col-sm-4" ></div>
							
								<div class="col-sm-4" align="center">								
									<div>
									<div class="fg-line floating-label-wrapper">
									 <label for="stage"></label>
								<input type="text" class="form-control" placeholder="Stage"   name="stage"  data-ng-model="GenerateScore.stage"         maxlength="25" id="stage" with-floating-label readonly>
										</div>	
									</div>				
								</div>						
						<div class="col-sm-4" ></div>						
					</div>
					
					<br>
					<div class="row" >						
							<div class="col-sm-4" ></div>
							
								<div class="col-sm-4" align="center">								
									<div>
									<div class="fg-line floating-label-wrapper">
									 <label for="itemVal"></label>
								<input type="text" class="form-control" placeholder="Item Value"   name="itemVal"  data-ng-model="GenerateScore.itemVal"        maxlength="25" id="itemVal" with-floating-label readonly>
										</div>
									</div>				
								</div>						
						<div class="col-sm-4" ></div>						
					</div>
					
					
					<br>
					<div class="row" >
					
					<div class="col-sm-4" >
					</div>
					<div class="col-sm-4">
					<div class="fg-line floating-label-wrapper">
									 <label for="score"></label>
					<input type="text" placeholder="Score" class="form-control" name="score"  data-ng-model="GenerateScore.score" id="score" with-floating-label readonly>				
					</div>
					</div>
				
					<div class="col-sm-4" >
					
					</div>
					</div>
				<br />
				<br />
				<div class="row" >
					<div class="col-sm-12" align="center">
						<button type="button" class="btn btn-blue" ng-click="getScore(GenerateScore.modelno);">Get Score</button>
						<button type="reset" class="btn btn-blue" ng-click="reset(GenerateScoreForm);">Reset</button>
					</div>
					<div class="col-sm-6"></div>	
				</div>
				</form>
			</div>
		</div>
		</div>
					
</section>
