		<link href="lib/demo_style.css" rel="stylesheet" />
		<link href="lib/smart_wizard_vertical.css" rel="stylesheet" />
		<script src="lib/jquery.smartWizard.js"></script>
<style type="text/css">
#sortable {
                list-style-type: none;
                margin: 5px 0px 0px 16px;
                padding: 0;
            }
            #sortable li {
                margin: 3px 3px 3px 0;
                padding: 1px;
                float: left;
                width: 30px;
                height: 30px;
                font-size: 20px;
                text-align: center;
                line-height:30px;
                cursor:pointer;
                -moz-border-radius:5px;
                -webkit-border-radius:5px;
                -moz-box-shadow: 0 1px 1px rgba(0,0,0,0.5);
                -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.5);
                text-shadow: 0 -1px 1px rgba(0,0,0,0.25);
                background: #0066FF url(images/overlay.png) repeat-x scroll 50% 50%;
                color:#fff;
                font-weight:normal;
            }
            .captcha_wrap{
                border:1px solid #fff;
                -moz-border-radius:10px;
                -webkit-border-radius:10px;
                -moz-box-shadow: 0 1px 3px rgba(0,0,0,0.5);
                -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.5);
               /*float:left;*/
                height:100%;
                overflow:auto;
                width:50%;
                overflow:hidden;
               /* margin:0px 0px 0px 210px;*/
                background-color:#fff;
            }
            .captcha{
                -moz-border-radius:10px;
                -webkit-border-radius:10px;
                font-size:12px;
                color:#BBBBBB;
                text-align: center;
                border-bottom:1px solid #CCC;
                background-color:#fff;
            }
</style>
<script type="text/javascript">   
    $(document).ready(function()
	{
  		$('#wizard').smartWizard({transitionEffect:'slide'});  
		
		$('.collapse-icon').click(function()
		{
			var isCompact = $("#sidebar").hasClass("menu-compact");

			if (isCompact) 
			{
				$('#wizard').addClass('swMain');
				$('#wizard').removeClass('withfull');														
			}
			else
			{
				$('#wizard').removeClass('swMain');
				$('#wizard').addClass('withfull');								
				
			}
		});
	});
</script>
<br />
<div ng-controller="poductSelection" ng-init="CouplingTypes();Locatinfactor();Couplingfactor();shockfactor();loadcontition();frequency(productSel.freq);getRadialNodeValues(productSel.freq);changeTtPlaceholder(productSel.motor,productSel.motorRpm,productSel.transTorque)">

<div class="row">
	<div class="col-sm-1"></div>
	<div class="col-sm-11" align="center">
		<div class="captcha_wrap">
                    <ul id="sortable">
                        <li class="captchaItem">M</li>
                        <li class="captchaItem">O</li>
                        <li class="captchaItem">D</li>
                        <li class="captchaItem">E</li>
                        <li class="captchaItem">L</li>
                        <li class="captchaItem"></li>
						<li class="captchaItem">N</li>
						<li class="captchaItem">U</li>
						<li class="captchaItem">M</li>
						<li class="captchaItem">B</li>
                        <li class="captchaItem">E</li>
						<li class="captchaItem">R</li>
                    </ul>
                </div>
	</div>
</div><br />
<!--<form name="step-1Form">	-->
<table>
<tr><td> 
		<!-- Tabs -->
  		<div id="wizard" class="swMain">  		
			<ul>
  				<li>
					<a href="#step-1">
		                <span class="stepDesc">
        		           Mains Supply
                		</span>
		            </a>
				</li>
  				
  				<li>
					<a href="#step-2">
		                <span class="stepDesc">
        		            Model Selection Data
                		</span>                   
		             </a>
				</li>
                <li>
					<a href="#step-3">
		                <span class="stepDesc">
		                  
                           Shaft Radial Load
        		        </span>
		            </a>
				</li>
  				<li>
					<a href="#step-4">
		                <span class="stepDesc">
                           Checking Frequency of Start up
        		          
		                </span>                   
        		    </a>
				</li>
				<!--<li>
					<a href="#step-5">
		                <span class="stepDesc">
        		            Model from Selection Table
                		</span>                   
		            </a>
				</li>-->
				<li>
					<a href="#step-5">
		                <span class="stepDesc">
        		           Other
                		</span>                   
		            </a>
				</li>
				<li>
					<a href="#step-6">
		                <span class="stepDesc">
        		           Result
                		</span>                   
		            </a>
				</li>
				
				<!--<li>
					<a href="#step-7">
		                <span class="stepDesc">
		                   MOTOR SPECIFICATION
        		        </span>                   
		            </a>
				</li>
				<li>
					<a href="#step-8">
		                <span class="stepDesc">
        		           TERMINAL BOX SPECIFICATION
		                </span>                   
		            </a>
				</li>-->			
  			</ul>	
					
  			<div id="step-1">	
				<form name="step1Form"  novalidate>
			
					<!--<input type="button" value="Test" ng-click="testing();"/>-->
					<div class="row">
						<div class="col-sm-3"></div>
                        <div class="col-sm-6">
                        	<div class="radio">
							<div class="control-group">
								
                                
									<label>
										Motor : <input name="motor" type="radio" class="colored-blue" ng-model="productSel.motor" value="0"  ng-click="changeTtPlaceholder(productSel.motor,productSel.motorRpm,productSel.transTorque);getFrameSize(productSel.freq,productSel.outputRpm,productSel.redRation,productSel.shaftRadial,productSel.equivalntTorque,productSel.motorType,productSel.couplingType,productSel.loadMntInt,productSel.startupFreq,productSel.mtype,productSel.alwstartup,productSel.motor,productSel.voltage);">
										<span class="text">Torque</span>
									</label>
									<label>
										<input name="motor" type="radio" class="colored-blue" ng-model="productSel.motor"  value="1" ng-click="changeTtPlaceholder(productSel.motor,productSel.motorRpm,productSel.transTorque);getFrameSize(productSel.freq,productSel.outputRpm,productSel.redRation,productSel.shaftRadial,productSel.equivalntTorque,productSel.motorType,productSel.couplingType,productSel.loadMntInt,productSel.startupFreq,productSel.mtype,productSel.alwstartup,productSel.motor,productSel.voltage);">
										<span class="text"> Kilowatt</span>
									</label>
                                   
								</div>
                                <!--<p ng-show="step1Form.motor.$error.required && (step1Form.motor.$dirty || submitted1)" class="help-block"> Select Motor</p>	-->
							</div>												
						</div>
						<div class="col-sm-3"></div>
					</div>
	           		<div class="row">
						<div class="col-sm-3"></div>
						<div class="col-sm-6">
							<div class="control-group">
								<div class="radio"> 
									<label>
										Frequency(Hz) : <input name="freq" type="radio" class="colored-blue" ng-model="productSel.freq" value="50" ng-click="frequency(productSel.freq);calculateReductionRatio(productSel.freq,productSel.outputRpm);getRadialNodeValues(productSel.freq);getFrameSize(productSel.freq,productSel.outputRpm,productSel.redRation,productSel.shaftRadial,productSel.equivalntTorque,productSel.motorType,productSel.couplingType,productSel.loadMntInt,productSel.startupFreq,productSel.mtype,productSel.alwstartup,productSel.motor,productSel.voltage);">
										<span class="text">50 Hz</span>
									</label>
									<label>
										<input name="freq" type="radio" class="colored-blue" ng-model="productSel.freq"  value="60" ng-click="frequency(productSel.freq);calculateReductionRatio(productSel.freq,productSel.outputRpm);getRadialNodeValues(productSel.freq);getFrameSize(productSel.freq,productSel.outputRpm,productSel.redRation,productSel.shaftRadial,productSel.equivalntTorque,productSel.motorType,productSel.couplingType,productSel.loadMntInt,productSel.startupFreq,productSel.mtype,productSel.alwstartup,productSel.motor,productSel.voltage);">
										<span class="text"> 60 Hz</span>
									</label>
								</div>
							</div>												
						</div>
						<div class="col-sm-3"></div>
					</div><br>
					<div class="row">
						<div class="col-sm-3"></div>
						<div class="col-sm-6">
							<div class="floating-label-wrapper">
								<div>
									<label for="motorrpm"></label>
    	        						<input type="text" class="form-control" placeholder="Motor RPM(r/min)" name="motorRpm" data-ng-model='productSel.motorRpm' id="motorrpm" with-floating-label readonly/>							
									</div>
							</div>
						</div>
						<div class="col-sm-3"></div>
					</div><br />
					<div class="row">
						<div class="col-sm-3"></div>
						<div class="col-sm-6">
							<div  ng-class="{ 'has-error' : step1Form.voltage.$invalid && (step1Form.voltage.$dirty || submitted1)}">
								<select class="form-control" ng-model="productSel.voltage" name="voltage" ng-required="true" ng-options="voltage.volatge as voltage.volatge for voltage in v" ng-change="getFrameSize(productSel.freq,productSel.outputRpm,productSel.redRation,productSel.shaftRadial,productSel.equivalntTorque,productSel.motorType,productSel.couplingType,productSel.loadMntInt,productSel.startupFreq,productSel.mtype,productSel.alwstartup,productSel.motor,productSel.voltage);">
									<option value="">Voltage</option>
								</select>
								<p ng-show="step1Form.voltage.$error.required && (step1Form.voltage.$dirty || submitted1)" class="help-block"> Voltage is required</p>							
							</div>
						</div>
						<div class="col-sm-3"></div>
					</div><br>
					<div class="row">
						<div class="col-sm-3"></div>
						<div class="col-sm-6">
							<div  ng-class="{ 'has-error' : step1Form.motorType.$invalid && (step1Form.motorType.$dirty || submitted1)}">
								<select class="form-control" ng-model="productSel.motorType" name="motorType" ng-required="true" ng-change="getMomenrOfInterria(productSel.motorType,productSel.seletdMtrPwr);getFrameSize(productSel.freq,productSel.outputRpm,productSel.redRation,productSel.shaftRadial,productSel.equivalntTorque,productSel.motorType,productSel.couplingType,productSel.loadMntInt,productSel.startupFreq,productSel.mtype,productSel.alwstartup,productSel.motor,productSel.voltage);getFinalModelNumber(productSel.motorType,productSel.mtype,productSel.alwstartup);">
									<option value="">Motor Type</option>
									<option value="w/ brake">Brake</option>
									<option value="w/o brake">No Brake</option>
								</select>							
								<p ng-show="step1Form.motorType.$error.required && (step1Form.motorType.$dirty || submitted1)" class="help-block"> Motor Type is required</p>							
							</div>
						</div>
						<div class="col-sm-3"></div>
					</div>	 					   
				</form>			     			
	        </div>
  			    
		                 
  			<div id="step-2">
				<form name="step2Form">	
					<br />
                   
                    <div class="row">
						<div class="col-sm-6">
							<div  ng-class="{ 'has-error' : step2Form.outputRpm.$invalid && (step2Form.outputRpm.$dirty || submitted2)}"  class="floating-label-wrapper">
								<div>
									<label for="outputrpm"></label>
									<input type="text" class="form-control" placeholder="Output rpm(r/min)" data-ng-model="productSel.outputRpm" name="outputRpm" ng-required="true" maxlength="10" data-ng-pattern="/^[0-9.\s]*$/" ng-blur="calculateReductionRatio(productSel.freq,productSel.outputRpm);calculateTransmitPower(productSel.outputRpm,productSel.transTorque,productSel.motor);" id="outputrpm" with-floating-label>
									<p ng-show="step2Form.outputRpm.$error.required && (step2Form.outputRpm.$dirty || submitted2)" class="help-block"> Output rpm(r/min) is required</p>								
									<p ng-show="step2Form.outputRpm.$error.pattern && (step2Form.outputRpm.$dirty || submitted2)" class="help-block"> Enter Valid Output rpm(r/min)</p>							
								</div>
							</div>
						</div>
						<div class="col-sm-6">
							<div  ng-class="{ 'has-error' : step2Form.transTorque.$invalid && (step2Form.transTorque.$dirty || submitted2)}" class="floating-label-wrapper">
								<div>
									<label for="transtorque"></label>
									<input type="text" class="form-control" placeholder="Transmitted Torque(Nm)" ng-model="productSel.transTorque" name="transTorque" ng-required="true" maxlength="10" data-ng-pattern="/^[0-9.\s]*$/" ng-blur="calculateTransmitPower(productSel.outputRpm,productSel.transTorque,productSel.motor);calculateEquivalentTorque(productSel.loadFactor,productSel.transTorque);calculateShaftRadial(productSel.locationFactor,productSel.couplingFactor,productSel.shockFactor,productSel.pitchDiameter,productSel.transTorque)" id="transtorque" with-floating-label ng-if="productSel.motor==0">
									<input type="text" class="form-control" placeholder="Power to move Load Pab(KW)" ng-model="productSel.transTorque" name="transTorque" ng-required="true" maxlength="10" data-ng-pattern="/^[0-9.\s]*$/" ng-blur="calculateTransmitPower(productSel.outputRpm,productSel.transTorque,productSel.motor);calculateEquivalentTorque(productSel.loadFactor,productSel.transTorque);calculateShaftRadial(productSel.locationFactor,productSel.couplingFactor,productSel.shockFactor,productSel.pitchDiameter,productSel.transTorque);" id="transtorque" with-floating-label ng-if="productSel.motor!=0">
                                    
                                    
									<p ng-show="step2Form.transTorque.$error.required && (step2Form.transTorque.$dirty || submitted2)" class="help-block"> {{transTorquepl}} is required</p>							
									<p ng-show="step2Form.outputRpm.$error.pattern && (step2Form.outputRpm.$dirty || submitted2)" class="help-block"> Enter Valid Transmitted Torque(Nm)</p>
								</div>
                             
							</div>
                           
						</div>
					</div><br><br>
					<div class="row">
						<div class="col-sm-6">
							<div  ng-class="{ 'has-error' : step2Form.calTransPower.$invalid && (step2Form.calTransPower.$dirty || submitted2)}" class="floating-label-wrapper">
								<div>
									<label for="caltranspower"></label>
									<input type="text" class="form-control" placeholder="Calculated Transmitted Power" readonly ng-model="productSel.calTransPower" name="calTransPower" maxlength="10" id="caltranspower" with-floating-label ng-if="productSel.motor==0">
									<p ng-show="step2Form.calTransPower.$error.required && (step2Form.calTransPower.$dirty || submitted2)" class="help-block"> Calculated Transmitted Power is required</p>
                                    <input type="text" class="form-control" placeholder="Calculated Load Torque" readonly ng-model="productSel.calTransPower" name="calTransPower" maxlength="10" id="caltranspower" with-floating-label ng-if="productSel.motor!=0">
									<p ng-show="step2Form.calTransPower.$error.required && (step2Form.calTransPower.$dirty || submitted2)" class="help-block"> Calculated Load Torque is required</p>
								</div>
							</div>
						</div>
                        <div class="col-sm-6">
							<div  ng-class="{ 'has-error' : step2Form.calculatedRed.$invalid && (step2Form.calculatedRed.$dirty || submitted2)}"  class="floating-label-wrapper">
								<div class="floating-label-wrapper">
									<label for="calculatedred"></label>
									<input type="text" class="form-control" placeholder="Calculated Reduction Ratio" ng-model="productSel.calculatedRed" name="calculatedRed" ng-required="true" maxlength="10" readonly with-floating-label id="calculatedred">
									<p ng-show="step2Form.calculatedRed.$error.required && (step2Form.calculatedRed.$dirty || submitted2)" class="help-block"> Calculated Reduction Ratio is required</p>
								</div>
							</div>
						</div>
                       
					</div><br><br>
                     <div class="row">
						<div class="col-sm-6">
							<div  ng-class="{ 'has-error' : step2Form.redRation.$invalid && (step2Form.redRation.$dirty || submitted2)}"  class="floating-label-wrapper">
								<div>
									<label for="redration"></label>
									<input type="text"  ng-model="productSel.redRation" name="redRation" readonly class="form-control" with-floating-label id="redration" placeholder="Reduction Ratio"/>																	
							  </div>
							</div>
						</div>
                         <div class="col-sm-6">
							<div  ng-class="{ 'has-error' : step2Form.seletdMtrPwr.$invalid && (step2Form.seletdMtrPwr.$dirty || submitted2)}" class="floating-label-wrapper">
								<div>
									<label for="seletdmtrpwr"></label>
									<input type="text" class="form-control" placeholder="Selected Motor Power Kw" ng-model="productSel.seletdMtrPwr" name="seletdMtrPwr" ng-required="true" with-floating-label id="seletdmtrpwr" readonly>
									<p ng-show="step2Form.seletdMtrPwr.$error.required && (step2Form.seletdMtrPwr.$dirty || submitted2)" class="help-block"> Selected Motor Power Kw is required</p>
								</div>
							</div>
						</div>
					</div><br><br>
                   
	            	<div class="row">
						<div class="col-sm-6">
							<div  ng-class="{ 'has-error' : step2Form.loadCondition.$invalid && (step2Form.loadCondition.$dirty || submitted2)}">
								<select class="form-control" ng-model="productSel.loadCondition" name="loadCondition" ng-required="true" ng-options="loadCondition.ctype as loadCondition.ctype for  loadCondition in ldt " ng-change="getLoadFactor(productSel.loadCondition,productSel.operatingHrs);">
									<option value="">Load Condition</option>
									 
								</select>				
								<p ng-show="step2Form.loadCondition.$error.required && (step2Form.loadCondition.$dirty || submitted2)" class="help-block"> Load Condition is required</p>		
							</div>
						</div>
						<div class="col-sm-6">
							<div  ng-class="{ 'has-error' : step2Form.operatingHrs.$invalid && (step2Form.operatingHrs.$dirty || submitted2)}"  class="floating-label-wrapper">
								<div>
									<label for="operatinghrs"></label>
									<input type="text" class="form-control" placeholder="Operating Hrs Per Day (Hr/day)" ng-model="productSel.operatingHrs" name="operatingHrs" ng-required="true" maxlength="10" ng-blur="getLoadFactor(productSel.loadCondition,productSel.operatingHrs);" with-floating-label id="operatinghrs">
									<p ng-show="step2Form.operatingHrs.$error.required && (step2Form.operatingHrs.$dirty || submitted2)" class="help-block"> Operating Hrs Per Day (Hr/day) is required</p>
								</div>
							</div>
						</div>
					</div><br><br>
					<div class="row">
						<div class="col-sm-6">
							<div  ng-class="{ 'has-error' : step2Form.loadFactor.$invalid && (step2Form.loadFactor.$dirty || submitted2)}"  class="floating-label-wrapper">
								<div>
									<label for="loadfactor"></label>
									<input type="text" class="form-control" placeholder="Load Factor" ng-model="productSel.loadFactor" name="loadFactor" ng-required="true" maxlength="10" ng-blur="calculateEquivalentTorque(productSel.loadFactor,productSel.transTorque);" id="loadfactor" readonly with-floating-label>
									<p ng-show="step2Form.loadFactor.$error.required && (step2Form.loadFactor.$dirty || submitted2)" class="help-block"> Load Factor is required</p>
								</div>
							</div>
						</div>
						<div class="col-sm-6">
							<div  ng-class="{ 'has-error' : step2Form.equivalntTorque.$invalid && (step2Form.equivalntTorque.$dirty || submitted2)}"  class="floating-label-wrapper">
								<div>
									<label for="equivalnttorque"></label>
									<input type="text" class="form-control" placeholder="Equivalent Torque(Nm)" readonly ng-model="productSel.equivalntTorque" name="equivalntTorque" maxlength="10" with-floating-label id="equivalnttorque" ng-if="productSel.motor==0">
									<p ng-show="step2Form.equivalntTorque.$error.required && (step2Form.equivalntTorque.$dirty || submitted2)" class="help-block"> Equivalent Torque(Nm) is required</p>
                                    <input type="text" class="form-control" placeholder="Equivalent Power (Pe)" readonly ng-model="productSel.equivalntTorque" name="equivalntTorque" maxlength="10" with-floating-label id="equivalnttorque" ng-if="productSel.motor!=0">
									<p ng-show="step2Form.equivalntTorque.$error.required && (step2Form.equivalntTorque.$dirty || submitted2)" class="help-block"> Equivalent Power (Pe) is required</p>
								</div>
							</div>
						</div>
					</div><br> <br>             				          
			  </form>
	        </div>
		<div id="step-3">
				<form name="step3Form">	
					<br />
                    <div class="row">
                    	<div class="col-sm-6">
							<div  ng-class="{ 'has-error' : step3Form.couplingType.$invalid && (step3Form.couplingType.$dirty || submitted3)}">
								<select class="form-control" ng-model="productSel.couplingType" name="couplingType" ng-required="requiredStatus" ng-options="couplingType.ctype as couplingType.ctype for couplingType in c" ng-change="getFrameSize(productSel.freq,productSel.outputRpm,productSel.redRation,productSel.shaftRadial,productSel.equivalntTorque,productSel.motorType,productSel.couplingType,productSel.loadMntInt,productSel.startupFreq,productSel.mtype,productSel.alwstartup,productSel.motor,productSel.voltage);loadAllowableFreq(productSel.rstartup,productSel.couplingType);changeStatus(productSel.couplingType)">
									<option value="">Coupling Type</option>									 
								</select>
								<p ng-show="step3Form.couplingType.$error.required && (step3Form.couplingType.$dirty || submitted3)" class="help-block"> Coupling Type is required</p>
                                
							</div>
						</div>
						
						<div class="col-sm-6">
							<div  ng-class="{ 'has-error' : step3Form.pitchDiameter.$invalid && (step3Form.pitchDiameter.$dirty || submitted3)}" class="floating-label-wrapper">
								<div>
									<label for="pitchdiameter"></label>
									<input type="text" class="form-control" placeholder="Pitch Diameter(mm)" ng-model="productSel.pitchDiameter" name="pitchDiameter" ng-required="requiredStatus" maxlength="4" ng-blur="calculateShaftRadial(productSel.locationFactor,productSel.couplingFactor,productSel.shockFactor,productSel.pitchDiameter,productSel.transTorque);" id="pitchdiameter" with-floating-label  ng-disabled="productSel.couplingType=='Direct Shaft'">
									<p ng-show="step3Form.pitchDiameter.$error.required && (step3Form.pitchDiameter.$dirty || submitted3)" class="help-block"> Pitch Diameter(mm) is required</p>								
								</div>
							</div>
						</div>
					</div><br>
                    <div class="row">
						
						<div class="col-sm-6" >
							<div  ng-class="{ 'has-error' : step3Form.locationFactor.$invalid && (step3Form.locationFactor.$dirty || submitted3)}">
								<select class="form-control" ng-model="productSel.locationFactor" name="locationFactor" ng-required="requiredStatus" ng-disabled="productSel.couplingType=='Direct Shaft'" ng-change="calculateShaftRadial(productSel.locationFactor,productSel.couplingFactor,productSel.shockFactor,productSel.pitchDiameter,productSel.transTorque);" ng-options="locationFactor.cvalue as locationFactor.ctype for locationFactor in l">
									<option value="">Location Factor</option>
								</select>
								<p ng-show="step3Form.locationFactor.$error.required && (step3Form.locationFactor.$dirty || submitted3)" class="help-block"> Location Factor is required</p>					
							</div>
						</div>
                        <div class="col-sm-6">
							<div  ng-class="{ 'has-error' : step3Form.couplingFactor.$invalid && (step3Form.couplingFactor.$dirty || submitted3)}">
								<select class="form-control" ng-model="productSel.couplingFactor" name="couplingFactor" ng-required="requiredStatus" ng-disabled="productSel.couplingType=='Direct Shaft'" ng-change="calculateShaftRadial(productSel.locationFactor,productSel.couplingFactor,productSel.shockFactor,productSel.pitchDiameter,productSel.transTorque);" ng-options="couplingFactor.cvalue as couplingFactor.ctype for couplingFactor in co ">
									<option value="">Coupling Factor</option>
									 
								</select>
								<p ng-show="step3Form.couplingFactor.$error.required && (step3Form.couplingFactor.$dirty || submitted3)" class="help-block"> Coupling Factor is required</p>
							</div>
						</div>
					</div><br>
					<div class="row">
						
						 <div class="col-sm-6">
							<div  ng-class="{ 'has-error' : step3Form.shockFactor.$invalid && (step3Form.shockFactor.$dirty || submitted3)}">
								<select class="form-control" ng-model="productSel.shockFactor" name="shockFactor" ng-required="requiredStatus" ng-disabled="productSel.couplingType=='Direct Shaft'"  ng-change="calculateShaftRadial(productSel.locationFactor,productSel.couplingFactor,productSel.shockFactor,productSel.pitchDiameter,productSel.transTorque);" ng-options="shockFactor.cvalue as shockFactor.ctype for shockFactor in sh">
									<option value="">Shock Factor</option>
									 
								</select>
								<p ng-show="step3Form.shockFactor.$error.required && (step3Form.shockFactor.$dirty || submitted3)" class="help-block"> Shock Factor is required</p>
							</div>
						</div>
                        <div class="col-sm-6">
							<div class="floating-label-wrapper">							
								<div>
									<label for="shaftradial"></label>
									<input type="text" class="form-control" placeholder="Shaft Radial Load(N)" readonly ng-model="productSel.shaftRadial" name="shaftRadial" maxlength="10" with-floating-label id="shaftradial">
								</div>
							</div>
						</div>
                        
                        </div><br>
                        <div class="row">
						 <div class="col-sm-6">
						  <div  ng-class="{ 'has-error' : step3Form.allowableRadial.$invalid && (step3Form.allowableRadial.$dirty || submitted3)}"  class="floating-label-wrapper">
						  	<div>
								<label for="allowableradial"></label>
								<input type="text" class="form-control" placeholder="Allowable Radial Load(N) Pro" ng-model="productSel.allowableRadial" name="allowableRadial" with-floating-label id="allowableradial" readonly>
								<p ng-show="step3Form.allowableRadial.$error.required && (step3Form.allowableRadial.$dirty || submitted3)" class="help-block"> Allowable Radial Load(N) Pro is required</p>
							</div>
						  </div>
						</div>
					</div><br>
				</form>
	        </div>
  			<div id="step-4">
				<form name="step4Form">	
					<br />
                    
                    <div class="row">
						<div class="col-sm-6">
							<div class="control-group">
								<div class="radio"> 
									<label>
										Will the Motor run continuously : <input name="mrun" type="radio" class="colored-blue" ng-model="productSel.mrun" value="0">
										<span class="text">Yes</span>
									</label>
									<label>
										<input name="mrun" type="radio" class="colored-blue" ng-model="productSel.mrun"  value="1" ng-click="getFrameSize(productSel.freq,productSel.outputRpm,productSel.redRation,productSel.shaftRadial,productSel.equivalntTorque,productSel.motorType,productSel.couplingType,productSel.loadMntInt,productSel.startupFreq,productSel.mtype,productSel.alwstartup,productSel.motor,productSel.voltage);loadAllowableFreq(productSel.rstartup,productSel.couplingType);changeStatus(productSel.couplingType)">
										<span class="text">No</span>
									</label>
								</div>
							</div>
						</div>
						<div class="col-sm-6" ng-if="productSel.mrun=='1'" >
							<div class="control-group">
								<div class="radio"> 
									<label>
										Required Start-Stops can be given : <input name="rstartup" type="radio" class="colored-blue" ng-model="productSel.rstartup" value="0" ng-disabled="productSel.mrun=='0'" ng-click="loadAllowableFreq(productSel.rstartup,productSel.couplingType);">
										<span class="text">Yes</span>
									</label>
									<label>
										<input name="rstartup" type="radio" class="colored-blue" ng-model="productSel.rstartup"  value="1" ng-disabled="productSel.mrun=='0'" ng-click="loadAllowableFreq(productSel.rstartup,productSel.couplingType);">
										<span class="text">No</span>
									</label>
								</div>
							</div>
						</div>
					</div><br>
					<div class="row" ng-if="productSel.mrun=='1' && productSel.rstartup=='1'">						
						<div class="col-sm-6">
								<div  ng-class="{ 'has-error' : step4Form.loadMntInt.$invalid && (step4Form.loadMntInt.$dirty || submitted4)}" class="floating-label-wrapper">
								  <div>
								  	<label for="loadmntint"></label>
									<input type="text" class="form-control" placeholder="Load Moment Of Inertia(kg.m2)" ng-model="productSel.loadMntInt" name="loadMntInt" ng-required="true" maxlength="10" ng-blur="calculateShaftAxis(productSel.loadMntInt,productSel.redRation);" id="loadmntint" with-floating-label>
									<p ng-show="step4Form.loadMntInt.$error.required && (step4Form.loadMntInt.$dirty || submitted4)" class="help-block"> Load Moment Of Inertia(kg.m2) is required</p>			
								  </div>					
								</div>
						</div>
						<div class="col-sm-6" ng-if="productSel.rstartup=='1'">
							<div  ng-class="{ 'has-error' : step4Form.startupFreq.$invalid && (step4Form.startupFreq.$dirty || submitted4)}"  class="floating-label-wrapper">
								<div>
									<label for="startupfreq"></label>
									<input type="text" class="form-control" placeholder="Startup Freq(times per min)" ng-model="productSel.startupFreq" name="startupFreq" id="startupfreq" with-floating-label ng-blur="getFrameSize(productSel.freq,productSel.outputRpm,productSel.redRation,productSel.shaftRadial,productSel.equivalntTorque,productSel.motorType,productSel.couplingType,productSel.loadMntInt,productSel.startupFreq,productSel.mtype,productSel.alwstartup,productSel.motor,productSel.voltage);" ng-required="true">
									<p ng-show="step4Form.startupFreq.$error.required && (step4Form.startupFreq.$dirty || submitted4)" class="help-block"> Startup Freq(times per min) is required</p>
								</div>
							</div>
						</div>
					</div>
					<div class="row" ng-if="productSel.rstartup=='0' && productSel.mrun=='1'">											
						<div class="col-sm-6">
                        <div ng-class="{ 'has-error' : step4Form.alwstartup.$invalid && (step4Form.alwstartup.$dirty || submitted4)}">
							<select name="alwstartup" ng-model="productSel.alwstartup" class="form-control" ng-options="alwstartup.frequency as alwstartup.frequency for alwstartup in allowableFreqVal" ng-change="getFrameSize(productSel.freq,productSel.outputRpm,productSel.redRation,productSel.shaftRadial,productSel.equivalntTorque,productSel.motorType,productSel.couplingType,productSel.loadMntInt,productSel.startupFreq,productSel.mtype,productSel.alwstartup,productSel.motor,productSel.voltage);getFinalModelNumber(productSel.motorType,productSel.mtype,productSel.alwstartup);" ng-required="true">
								<option value="">Allowable Start-Stops (Per/Hr)</option>								
							</select>
                            <p ng-show="step4Form.alwstartup.$error.required && (step4Form.alwstartup.$dirty || submitted4)" class="help-block"> Allowable Start-Stops (Per/Hr) is required</p>
						 </div>
                        
                        </div>
                        
				</div><br><br>
                <div class="row" ng-if="productSel.mrun=='1'">
                	<div class="col-sm-6">
							<div  ng-class="{ 'has-error' : step3Form.capacityFrame.$invalid && (step3Form.capacityFrame.$dirty || submitted3)}" class="floating-label-wrapper">
								<div>
									<label for="capacityframe"></label>
									<input type="text" class="form-control" placeholder="Capacity-Frame Number-Reduction Ratio" ng-model="productSel.capacityFrame" name="capacityFrame" maxlength="20" with-floating-label id="capacityframe" readonly >
									<p ng-show="step3Form.capacityFrame.$error.required && (step3Form.capacityFrame.$dirty || submitted3)" class="help-block"> Capacity-Frame Number-Reduction Ratio is required</p>
								</div>
							</div>
						</div>
                    <div class="col-sm-6">
							<div class="floating-label-wrapper">
								<div>
									<label for="loadmntintjm"></label>
									<input type="text" class="form-control" placeholder="Load Moment Of Inertia(Kg.m2) Jm" readonly ng-model="productSel.loadMntIntjm" name="loadMntIntjm" maxlength="10" with-floating-label id="loadmntintjm">
								</div>
							</div>
						</div>
                </div><br><br>
	            	<div class="row" ng-if="productSel.mrun=='1'">
						<div class="col-sm-6">
							<div class="floating-label-wrapper">
								<div>
									<label for="loadmntintjlm"></label>
									<input type="text" class="form-control" placeholder="Load Moment of Inertia (kg.m2) Jlm" readonly ng-model="productSel.loadMntIntjlm" name="loadMntIntjlm" maxlength="10" with-floating-label id="loadmntintjlm">
								</div>
							</div>
						</div>
						<div class="col-sm-6">
							<div  ng-class="{ 'has-error' : step5Form.mntIntRatio.$invalid && (step5Form.mntIntRatio.$dirty || submitted5)}" class="floating-label-wrapper">
								<div>
									<label for="mntintratio"></label>
									<input type="text" class="form-control" placeholder="Moment of Inertia Ratio" ng-model="productSel.mntIntRatio" name="mntIntRatio" ng-required="true" maxlength="10" with-floating-label id="mntintratio" readonly>
									<p ng-show="step5Form.mntIntRatio.$error.required && (step5Form.mntIntRatio.$dirty || submitted5)" class="help-block"> Moment of Inertia Ratio is required</p>
								</div>
							</div>
						</div>
					</div><br><br>
					<div class="row" ng-if="productSel.mrun=='1'">
						<div class="col-sm-6">
							<div  ng-class="{ 'has-error' : step5Form.alowleStartupFrq.$invalid && (step5Form.alowleStartupFrq.$dirty || submitted5)}" class="floating-label-wrapper">
								<div>
									<label for="alowlestartupfrq"></label>
									<input type="text" class="form-control" placeholder="Allowable Startup Freq" ng-model="productSel.alowleStartupFrq" name="alowleStartupFrq" with-floating-label id="alowlestartupfrq" readonly>
									<p ng-show="step5Form.alowleStartupFrq.$error.required && (step5Form.alowleStartupFrq.$dirty || submitted5)" class="help-block"> Allowable Startup Freq is required</p>
								</div>
							</div>
						</div>
						<div class="col-sm-6">
							
						</div>
					</div><br>
				</form>
	        </div>
		<div id="step-5">
			<form name="step5Form">	
				<br />
	            <div class="row">
					<div class="col-sm-6">
						<div class="control-group">
							<div class="radio"> 
								<label>
									Mounting Type : <input name="mtype" type="radio" class="colored-blue"  ng-model="productSel.mtype" value="0" ng-click="getFinalModelNumber(productSel.motorType,productSel.mtype);getFrameSize(productSel.freq,productSel.outputRpm,productSel.redRation,productSel.shaftRadial,productSel.equivalntTorque,productSel.motorType,productSel.couplingType,productSel.loadMntInt,productSel.startupFreq,productSel.mtype,productSel.alwstartup,productSel.motor,productSel.voltage);">
									<span class="text">Foot Mount</span>
								</label>
								<label>
									<input name="mtype" type="radio" class="colored-blue"  ng-model="productSel.mtype" value="1"  ng-click="getFinalModelNumber(productSel.motorType,productSel.mtype);getFrameSize(productSel.freq,productSel.outputRpm,productSel.redRation,productSel.shaftRadial,productSel.equivalntTorque,productSel.motorType,productSel.couplingType,productSel.loadMntInt,productSel.startupFreq,productSel.mtype,productSel.alwstartup,productSel.motor,productSel.voltage);">
									<span class="text">Fringe Mount</span>
								</label>
							</div>
						</div>
					</div>
					<div class="col-sm-6">
						<div  ng-class="{ 'has-error' : step5Form.motorStandard.$invalid && (step5Form.motorStandard.$dirty || submitted5)}">
							<select class="form-control" ng-model="productSel.motorStandard" name="motorStandard" ng-required="true">
								<option value="">Motor Standard</option>
								<option value="JIS">JIS</option>
								<option value="CE">CE</option>
								<option value="UL">UL</option>
								<option value="SCA">SCA</option>
								<option value="NEMA">NEMA</option>
								<option value="CC">CCC</option>
							</select>
							<p ng-show="step5Form.motorStandard.$error.required && (step5Form.motorStandard.$dirty || submitted5)" class="help-block"> Motor Standard is required</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-6">
						<div class="control-group">
							<div class="radio"> 
								<label>
									IP Protection : <input name="ipPro" type="radio" class="colored-blue"  ng-model="productSel.ipPro" value="0">
									<span class="text">IP 44</span>
								</label>
								<label>
									<input name="ipPro" type="radio" class="colored-blue"  ng-model="productSel.ipPro" value="1">
									<span class="text">IP 55</span>
								</label>
							</div>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="control-group">
							<div class="radio"> 
								<label>
									Working Environment : <input name="workEnv" type="radio" class="colored-blue"  ng-model="productSel.workEnv" value="0">
									<span class="text">Indoor</span>
								</label>
								<label>
									<input name="workEnv" type="radio" class="colored-blue" ng-model="productSel.workEnv"  value="1">
									<span class="text">Outdoor</span>
								</label>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-6">
						<div  ng-class="{ 'has-error' : step5Form.tboxType.$invalid && (step5Form.tboxType.$dirty || submitted5)}">
							<select class="form-control" ng-model="productSel.tboxType" name="tboxType" ng-required="true">
								<option value="">TBox Type</option>
								<option value="Aluminium">Aluminium</option>
								<option value="Steel">Steel</option>
								<option value="Resin-made">Resin-made</option>
								<option value="Steel">Steel</option>
							</select>
							<p ng-show="step5Form.tboxType.$error.required && (step5Form.tboxType.$dirty || submitted5)" class="help-block"> TBox Type is required</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div  ng-class="{ 'has-error' : step5Form.tboxPosition.$invalid && (step5Form.tboxPosition.$dirty || submitted5)}">
							<select class="form-control" ng-model="productSel.tboxPosition" name="tboxPosition" ng-required="true">
								<option value="">TBox Position</option>
								<option value="L (N33)">L (N33)</option>
								<option value="R (N34)">R (N34)</option>
								<option value="T (N35)">T (N35)</option>
								<option value="B (N36)">B (N36)</option>														
							</select>
							<p ng-show="step5Form.tboxPosition.$error.required && (step5Form.tboxPosition.$dirty || submitted5)" class="help-block"> TBox Position is required</p>
						</div>
					</div>
				</div><br />    
				<div class="row">
					<div class="col-sm-6">
						<div  ng-class="{ 'has-error' : step5Form.cableEntryPos.$invalid && (step5Form.cableEntryPos.$dirty || submitted5)}">
							<select class="form-control" ng-model="productSel.cableEntryPos" name="cableEntryPos" ng-required="true">
								<option value="">Cable Entry Position</option>
								<option value="A (N3A)">A (N3A)</option>
								<option value="B  (N3B)">B  (N3B)</option>
								<option value="C (N3C)">C (N3C)</option>
								<option value="D (N3D)">D (N3D)</option>
							</select>
							<p ng-show="step5Form.cableEntryPos.$error.required && (step5Form.cableEntryPos.$dirty || submitted5)" class="help-block"> Cable Entry Position is required</p>
						</div>
					</div>
				</div>      			
			</form>
        </div>
		<div id="step-6">
			<div class="row">
				<div class="col-sm-2"></div>
				<div class="col-sm-8">
					<table width="100%;" border="1" style=" font-family:Verdana, Arial, Helvetica, sans-serif;">
						<tr style="background-color: #0066FF; text-align:center; color:#FFFFFF;"><td>Label</td><td>Result</td></tr>
						<tr><td>Model Number</td><td id="modelNumberResult"></td></tr>
						<tr><td>Model Image</td><td id="modelImageResult"></td></tr>
						<tr><td>Price</td><td id="priceResult"></td></tr>
						<tr style="background-color: #0066FF; text-align:center; color:#FFFFFF;"><td colspan="2">Model Data</td></tr>
						<tr><td>Motor KW</td><td id="kwsResult"></td></tr>
						<tr><td>Voltage</td><td id="voltageResult"></td></tr>
						<tr><td>Frequency</td><td id="freqResult"></td></tr>
						<tr><td>Standard/Brake</td><td id="mtypeResult"></td></tr>
						<tr><td>Output Speed	</td><td id="outputspeedResult"></td></tr>
						<tr><td>Output Torque	</td><td id="outputspeedTorque"></td></tr>
						<tr style="background-color: #0066FF; text-align:center; color:#FFFFFF;"><td colspan="2">Input Data</td></tr>
						<tr><td>Transmitted Torque(Tt)</td><td id="transmittedtorqueResult"></td></tr>
						<tr><td>Transmitted Power(KWc)</td><td id="transmittedpowerResult"></td></tr>
						<tr><td>Coupling Type</td><td id="couplingtypeResult"></td></tr>
						<tr><td>PCD</td><td id="pcdResult"></td></tr>
						<tr><td>Load Moment of Inertia @gearhead axis</td><td id="lmiResult"></td></tr>
						
						
						
						
					</table>					
				</div>
				<div class="col-sm-2"></div>				
			</div>
		</div>
		
		<!--<div id="step-7">
			<form name="step7Form">	
				<br />
	            <div class="row">
					<div class="col-sm-3"></div>
					<div class="col-sm-6">
						<div  ng-class="{ 'has-error' : step7Form.motorStandard.$invalid && (step7Form.motorStandard.$dirty || submitted7)}">
							<select class="form-control" ng-model="productSel.motorStandard" name="motorStandard" ng-required="true">
								<option value="">Motor Standard</option>
								<option value="JIS">JIS</option>
								<option value="CE">CE</option>
								<option value="UL">UL</option>
								<option value="SCA">SCA</option>
								<option value="NEMA">NEMA</option>
								<option value="CC">CCC</option>
							</select>
							<p ng-show="step7Form.motorStandard.$error.required && (step7Form.motorStandard.$dirty || submitted7)" class="help-block"> Motor Standard is required</p>
						</div>
					</div>
					<div class="col-sm-3"></div>					
				</div><br>   
				<div class="row">
					<div class="col-sm-3"></div>
					<div class="col-sm-6">
						<div class="control-group">
							<div class="radio"> 
								<label>
									IP Protection : <input name="ipPro" type="radio" class="colored-blue"  ng-model="productSel.ipPro" value="0">
									<span class="text">IP 44</span>
								</label>
								<label>
									<input name="ipPro" type="radio" class="colored-blue"  ng-model="productSel.ipPro" value="1">
									<span class="text">IP 55</span>
								</label>
							</div>
						</div>
					</div>
					<div class="col-sm-3"></div>
				</div>
				<div class="row">
					<div class="col-sm-3"></div>
					<div class="col-sm-6">
						<div class="control-group">
							<div class="radio"> 
								<label>
									Working Environment : <input name="workEnv" type="radio" class="colored-blue"  ng-model="productSel.workEnv" value="0">
									<span class="text">Indoor</span>
								</label>
								<label>
									<input name="workEnv" type="radio" class="colored-blue" ng-model="productSel.workEnv"  value="1">
									<span class="text">Outdoor</span>
								</label>
							</div>
						</div>
					</div>
					<div class="col-sm-3"></div>
				</div>           			
			</form>
        </div>
		
		<div id="step-8">
			<form name="step8Form">	
	            <div class="row">
					<div class="col-sm-6">
						<div  ng-class="{ 'has-error' : step8Form.tboxType.$invalid && (step8Form.tboxType.$dirty || submitted8)}">
							<select class="form-control" ng-model="productSel.tboxType" name="tboxType" ng-required="true">
								<option value="">TBox Type</option>
								<option value="Aluminium">Aluminium</option>
								<option value="Steel">Steel</option>
								<option value="Resin-made">Resin-made</option>
								<option value="Steel">Steel</option>
							</select>
							<p ng-show="step8Form.tboxType.$error.required && (step8Form.tboxType.$dirty || submitted8)" class="help-block"> TBox Type is required</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div  ng-class="{ 'has-error' : step8Form.tboxPosition.$invalid && (step8Form.tboxPosition.$dirty || submitted8)}">
							<select class="form-control" ng-model="productSel.tboxPosition" name="tboxPosition" ng-required="true">
								<option value="">TBox Position</option>
								<option value="L (N33)">L (N33)</option>
								<option value="R (N34)">R (N34)</option>
								<option value="T (N35)">T (N35)</option>
								<option value="B (N36)">B (N36)</option>														
							</select>
							<p ng-show="step8Form.tboxPosition.$error.required && (step8Form.tboxPosition.$dirty || submitted8)" class="help-block"> TBox Position is required</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div  ng-class="{ 'has-error' : step8Form.cableEntryPos.$invalid && (step8Form.cableEntryPos.$dirty || submitted8)}">
							<select class="form-control" ng-model="productSel.cableEntryPos" name="cableEntryPos" ng-required="true">
								<option value="">Cable Entry Position</option>
								<option value="A (N3A)">A (N3A)</option>
								<option value="B  (N3B)">B  (N3B)</option>
								<option value="C (N3C)">C (N3C)</option>
								<option value="D (N3D)">D (N3D)</option>
							</select>
							<p ng-show="step8Form.cableEntryPos.$error.required && (step8Form.cableEntryPos.$dirty || submitted8)" class="help-block"> Cable Entry Position is required</p>
						</div>
					</div>
					
				</div><br>            			
			</form>
        </div>	-->
  	</div>
	
<!-- End SmartWizard Content -->  		  		
</td>
</tr>
</table>   	
<!--</form>-->
</div>	