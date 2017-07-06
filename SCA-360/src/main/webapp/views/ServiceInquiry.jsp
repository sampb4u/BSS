<style>
.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td {
    padding: 8px;
    line-height: 1.429;
    vertical-align: top;
    border-top: 0px solid #666666;
	border-radius:2px;
}
div
{
	font-family: Geneva, Arial, Helvetica, sans-serif;
	color:#666666;
}

/*--------------File Upload----------*/
/* leave this part out */
/*body{text-align:center; padding-top:30px;}*/
/* leave this part out */

.clearfix{*zoom:1;}.clearfix:before,.clearfix:after{display:table;content:"";line-height:0;}
.clearfix:after{clear:both;}
.hide-text{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0;}
.input-block-level{display:block;width:100%;min-height:30px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
.btn-file{overflow:hidden;position:relative;vertical-align:middle;}.btn-file>input{position:absolute;top:0;right:0;margin:0;opacity:0;filter:alpha(opacity=0);transform:translate(-300px, 0) scale(4);font-size:23px;direction:ltr;cursor:pointer;}
.fileupload{margin-bottom:9px;}.fileupload .uneditable-input{display:inline-block;margin-bottom:0px;vertical-align:middle;cursor:text;}
.fileupload .thumbnail{overflow:hidden;display:inline-block;margin-bottom:5px;vertical-align:middle;text-align:center;}.fileupload .thumbnail>img{display:inline-block;vertical-align:middle;max-height:100%;}
.fileupload .btn{vertical-align:middle;}
.fileupload-exists .fileupload-new,.fileupload-new .fileupload-exists{display:none;}
.fileupload-inline .fileupload-controls{display:inline;}
.fileupload-new .input-append .btn-file{-webkit-border-radius:0 3px 3px 0;-moz-border-radius:0 3px 3px 0;border-radius:0 3px 3px 0;}
.thumbnail-borderless .thumbnail{border:none;padding:0;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;}
.fileupload-new.thumbnail-borderless .thumbnail{border:1px solid #ddd;}
.control-group.warning .fileupload .uneditable-input{color:#a47e3c;border-color:#a47e3c;}
.control-group.warning .fileupload .fileupload-preview{color:#a47e3c;}
.control-group.warning .fileupload .thumbnail{border-color:#a47e3c;}
.control-group.error .fileupload .uneditable-input{color:#b94a48;border-color:#b94a48;}
.control-group.error .fileupload .fileupload-preview{color:#b94a48;}
.control-group.error .fileupload .thumbnail{border-color:#b94a48;}
.control-group.success .fileupload .uneditable-input{color:#468847;border-color:#468847;}
.control-group.success .fileupload .fileupload-preview{color:#468847;}
.control-group.success .fileupload .thumbnail{border-color:#468847;}
</style>
<script>
!function(e){var t=function(t,n){this.$element=e(t),this.type=this.$element.data("uploadtype")||(this.$element.find(".thumbnail").length>0?"image":"file"),this.$input=this.$element.find(":file");if(this.$input.length===0)return;this.name=this.$input.attr("name")||n.name,this.$hidden=this.$element.find('input[type=hidden][name="'+this.name+'"]'),this.$hidden.length===0&&(this.$hidden=e('<input type="hidden" />'),this.$element.prepend(this.$hidden)),this.$preview=this.$element.find(".fileupload-preview");var r=this.$preview.css("height");this.$preview.css("display")!="inline"&&r!="0px"&&r!="none"&&this.$preview.css("line-height",r),this.original={exists:this.$element.hasClass("fileupload-exists"),preview:this.$preview.html(),hiddenVal:this.$hidden.val()},this.$remove=this.$element.find('[data-dismiss="fileupload"]'),this.$element.find('[data-trigger="fileupload"]').on("click.fileupload",e.proxy(this.trigger,this)),this.listen()};t.prototype={listen:function(){this.$input.on("change.fileupload",e.proxy(this.change,this)),e(this.$input[0].form).on("reset.fileupload",e.proxy(this.reset,this)),this.$remove&&this.$remove.on("click.fileupload",e.proxy(this.clear,this))},change:function(e,t){if(t==="clear")return;var n=e.target.files!==undefined?e.target.files[0]:e.target.value?{name:e.target.value.replace(/^.+\\/,"")}:null;if(!n){this.clear();return}this.$hidden.val(""),this.$hidden.attr("name",""),this.$input.attr("name",this.name);if(this.type==="image"&&this.$preview.length>0&&(typeof n.type!="undefined"?n.type.match("image.*"):n.name.match(/\.(gif|png|jpe?g)$/i))&&typeof FileReader!="undefined"){var r=new FileReader,i=this.$preview,s=this.$element;r.onload=function(e){i.html('<img src="'+e.target.result+'" '+(i.css("max-height")!="none"?'style="max-height: '+i.css("max-height")+';"':"")+" />"),s.addClass("fileupload-exists").removeClass("fileupload-new")},r.readAsDataURL(n)}else this.$preview.text(n.name),this.$element.addClass("fileupload-exists").removeClass("fileupload-new")},clear:function(e){this.$hidden.val(""),this.$hidden.attr("name",this.name),this.$input.attr("name","");if(navigator.userAgent.match(/msie/i)){var t=this.$input.clone(!0);this.$input.after(t),this.$input.remove(),this.$input=t}else this.$input.val("");this.$preview.html(""),this.$element.addClass("fileupload-new").removeClass("fileupload-exists"),e&&(this.$input.trigger("change",["clear"]),e.preventDefault())},reset:function(e){this.clear(),this.$hidden.val(this.original.hiddenVal),this.$preview.html(this.original.preview),this.original.exists?this.$element.addClass("fileupload-exists").removeClass("fileupload-new"):this.$element.addClass("fileupload-new").removeClass("fileupload-exists")},trigger:function(e){this.$input.trigger("click"),e.preventDefault()}},e.fn.fileupload=function(n){return this.each(function(){var r=e(this),i=r.data("fileupload");i||r.data("fileupload",i=new t(this,n)),typeof n=="string"&&i[n]()})},e.fn.fileupload.Constructor=t,e(document).on("click.fileupload.data-api",'[data-provides="fileupload"]',function(t){var n=e(this);if(n.data("fileupload"))return;n.fileupload(n.data());var r=e(t.target).closest('[data-dismiss="fileupload"],[data-trigger="fileupload"]');r.length>0&&(r.trigger("click.fileupload"),t.preventDefault())})}(window.jQuery)
</script>
<script>
$(document).ready(function () {
                
                $('.input-daterange').datepicker({
                    todayBtn: "linked"
                });
            
            });
</script>
<div  ng-controller="serviceInquiryController" ng-init="getStatus();">									
	<div class="well with-header with-footer">
      <div class="header bordered-blue">Service Inquiry</div>
        <form name="serviceInquiryForm" novalidate>
                   <div class="row">
                       <div class="col-sm-3">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="Customer"></label>																																																											
								    <input type="text" class="form-control" name="customer" ng-model="serviceInq.customer" id="Customer" placeholder="Customer" autocomplete="on" with-floating-label/>
                                    <i class="glyphicon glyphicon-user circular"></i>
                                                    </span>
                                </div>
						    </div>
                       </div>
                       <div class="col-sm-3">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="CustCode"></label>																																																											
								    <input type="text" class="form-control" name="custCode" ng-model="serviceInq.custCode" id="CustCode" placeholder="Cust Code" autocomplete="on" with-floating-label/>
                                    <i class="glyphicon glyphicon-user circular"></i>
                                                    </span>
                                </div>
						    </div>
                       </div>
                       <div class="col-sm-3">
                       </div>
                       <div class="col-sm-3">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="CaseReff"></label>																																																											
								    <input type="text" class="form-control" name="caseReff" ng-model="serviceInq.caseReff" id="CaseReff" placeholder="Case Reference" autocomplete="on" with-floating-label/>
                                    <i class="glyphicon glyphicon-user circular"></i>
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
                                  <label for="Contact"></label>																																																											
								    <input type="text" class="form-control" name="contact" ng-model="serviceInq.contact" id="Contact" placeholder="Contact" with-floating-label/>
                                    <i class="glyphicon glyphicon-user circular"></i>
                                                    </span>
                                </div>
						    </div>
                       </div>
                       <div class="col-sm-3">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="Tel"></label>																																																											
								    <input type="text" class="form-control" name="tel" ng-model="serviceInq.tel" id="Tel" placeholder="Tel"  with-floating-label/>
                                    <i class="glyphicon glyphicon-earphone circular"></i>
                                                    </span>
                                </div>
						    </div>
                       </div>
                       <div class="col-sm-3">
                             
                       </div>
                       <div class="col-sm-3">
                            <div class="form-group">
                                              <div class="floating-label-wrapper" ng-class="{ 'has-error' : serviceInquiryForm.serviceInq.$invalid && (serviceInquiryForm.serviceInq.$dirty || submitted)}">
                                                    <span class="input-icon icon-right">
                                                        <select class="form-control" ng-model = "serviceInq.customerStatus" name = "customerStatus"  ng-required="true" ng-options = "serviceInq.id as serviceInq.custStatus for serviceInq in customerStatusArray" id="CustomerStatus" placeholder="Customer Status" with-floating-label>
                                                        <option value="">Customer Status</option>
														
													</select>
                                                    </span>
                                                    <p ng-show="serviceInquiryForm.customerStatus.$error.required && (serviceInquiryForm.customerStatus.$dirty || submitted)" class="help-block"> Customer Status is Required</p>
                                                </div>
                                                </div>
                       </div>
                       
                   </div>
                   <div class="row">
                       <div class="col-sm-3">
                            <div class="form-group">
                              <div class="floating-label-wrapper">
                              <label for="Address"></label>	
                            <textarea cols="50" rows="1" placeholder="Address" id="Address" class="form-control" name="address" ng-model="techQueryData.address" with-floating-label></textarea>
                            </div>
                            </div>
                       </div>
                       
                       <div class="col-sm-3">
                       </div>
                       <div class="col-sm-3">
                       </div>
                       <div class="col-sm-3">
                       </div>
                   </div>
                   <div class="row">
                       <div class="col-sm-12">
                            <div class="form-group">
                              <div class="floating-label-wrapper">
                              <span class="input-icon icon-right">
                              <label for="Title"></label>	
                            <input type="text" class="form-control" name="title" ng-model="serviceInq.title" id="Title" placeholder="Title"  with-floating-label/>
                            <i class="glyphicon glyphicon-user circular"></i>
                                                    </span>
                            </div>
                            </div>
                       </div>
                   </div>
                  					
                  <div class="row">
							<div class="col-sm-4">
								<div class="form-group">
                                <div class="floating-label-wrapper">
                                <span class="input-icon icon-right">
                              <label for="GearHead"></label>																																																											
									<input type="text" class="form-control" name="gearHead" ng-model="serviceInq.gearHead"  id="GearHead" placeholder="Gearhead Serial No." with-floating-label/>
                                    <i class="glyphicon glyphicon-user circular"></i>
                                                    </span>
                            </div>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="form-group">																																																											
                                    <div class="floating-label-wrapper">
                                <span class="input-icon icon-right">
                              <label for="MotorSerial"></label>																																																											
									<input type="text" class="form-control" name="motorSerial" ng-model="serviceInq.motorSerial"  id="MotorSerial" placeholder="Motor Serial No." with-floating-label/>
                                    <i class="glyphicon glyphicon-user circular"></i>
                                                    </span>
                            </div>
								</div>
							</div>
                            <div class="col-sm-4">
								<div class="form-group">																																																											
                                    <div class="floating-label-wrapper">
                                <span class="input-icon icon-right">
                              <label for="shiMfg"></label>																																																											
									<input type="text" class="form-control" name="SHIMfg" ng-model="serviceInq.SHIMfg"  id="shiMfg" placeholder="SHI Mfg No." with-floating-label/>
                                    <i class="glyphicon glyphicon-user circular"></i>
                                                    </span>
                            </div>
								</div>
							</div>							
																					
						</div>
	 
                        <div class="row">
                        	<div class="col-sm-8">
								<div class="radio">
                                   <div class="control-group"> 
									<label>
										<b style="color:#666666;">Drop in Dimensions : </b>  <input name="dropDimension" type="radio" class="colored-blue" ng-model="serviceInq.dropDimension" ng-required="true"  value="0" checked="checked">
										<span class="text">Yes, Please specify critical dimensions	</span>
									</label>
									&nbsp;&nbsp;
									<label>
										<input name="dropDimension" type="radio" ng-required="true" class="colored-blue" ng-model="serviceInq.dropDimension" value="1">
										<span class="text"> No, can accept Sumitomo Standard dimensions</span>
									</label>
																					
									</div>                                    
								</div>
							</div>
                            <div class="col-sm-3">
								<div class="radio"> 
                                <div class="control-group">
									<label>
										<b style="color:#666666;">Attach drawing: </b>  <input name="attachdrawing" type="radio" class="colored-blue"  value="0" ng-model="serviceInq.attachdrawing" checked="checked" >
										<span class="text">Yes</span>
									</label>
									&nbsp;&nbsp;
									<label>
										<input name="attachdrawing" type="radio" class="colored-blue" ng-model="serviceInq.attachdrawing" value="1">
										<span class="text">No</span>
									</label>
																					
									</div>                                    
								</div>
                                <div ng-if="serviceInq.attachdrawing!=1">
                                <span style="font-family: Geneva, Arial, Helvetica, sans-serif;">Job site drive arrangement image/dwg</span>
                                </div>
							</div>
                            <div class="col-sm-1" ng-if="serviceInq.attachdrawing!=1">
								<div class="fileupload fileupload-new" data-provides="fileupload">
    <span class="btn btn-file" style="border: 1px solid #fff;position: relative;left: -42px;padding: 0px;"><span class="fileupload-new"><img src="image/file.png" style="width:50px;"/></span>
    <span class="fileupload-exists"><img src="image/file.png" style="width:50px;"/></span> <input type="file" /></span>
    <span class="fileupload-preview"></span>
    <a href="#" class="close fileupload-exists" data-dismiss="fileupload" style="float: none">×</a>
  </div>
							</div>
                        </div><br/>
                        <div class="row">
                             <div class="col-sm-6" style="padding: 0px 0px 0px 15px;margin: 0px 0px 0px 0px;width: 33%;">
                                  <div class="radio">
                                        <label>
										 <b style="color:#666666;font-family: Geneva, Arial, Helvetica, sans-serif;">SERVICE INQ. for: </b><input name="gm" type="radio" class="colored-blue"  value="0" ng-model="serviceInq.gm" checked="checked" />
										<span class="text" title="Gear Motor">Gear Motor</span>
									</label>
                                    <label>
										 <input name="gm" type="radio" class="colored-blue" ng-model="serviceInq.gm" value="1"/>
										<span class="text" title="Reducer">Reducer</span>
									</label>
                                    <label>
										 <input name="gm" type="radio" class="colored-blue" ng-model="serviceInq.gm" value="2"/>
										<span class="text" title="Others,Please Specify">Others</span>
									</label>
								</div>
                             </div>
                             <div class="col-sm-2" style="width: 14%;padding: 0px 0px 0px 15px;margin: 0px 0px 0px -12px;">
                                  <div class="floating-label-wrapper">
							      
							        <input type="text" class="form-control" name="gMotor" placeholder="" style=" " id="" ng-model="serviceInq.gMotor"  ng-disabled="serviceInq.gm!='2'"/>
                                    
								</div>
                             </div>
                             <div class="col-sm-2" style="width: 14%;padding: 0px 0px 0px 15px;margin: 0px 0px 0px -5px;">
                                  <div class="floating-label-wrapper">
							       <label for="Quantity"></label>
							        <input type="text" class="form-control" name="quantity" id="Quantity" placeholder="Quantity" style=" "  ng-model="serviceInq.quantity" with-floating-label/>
                                    
								</div>
                             </div>
                             
                            
                        </div><br/>
                        <div class="row">
                            <div class="col-sm-2">
                                <span style="font-family: Geneva, Arial, Helvetica, sans-serif;color:#666666;">item&nbsp;1</span>
                            </div>
                            <div class="col-sm-10">
                            </div>
                        </div><br/>
                        <div class="row">
                             <div class="col-sm-2" style="margin: 0px 0px 0px 0px;padding: 0px 0px 0px 15px;width: 14%">
                             <div class="floating-label-wrapper">
                                
									<select class="form-control" ng-model = "serviceInq.motorType" id="MotorType"  placeholder="Motor" name = "motorType" ng-required="true"  with-floating-label>
										<option value="">Motor Type</option>
									</select>
                                    </div>
                             </div>
                             <div class="col-sm-2" style="margin: 0px 0px 0px 12px;padding: 0px 0px 0px 0px;width: 12%;">
                                  
                                  <div class="floating-label-wrapper" style="">
									<select class="form-control" placeholder="kW" id="MotorKW"  ng-model = "serviceInq.motorKW" name = "motorKW" ng-required="true"  with-floating-label>
										<option value="">Motor kW</option>
									</select>
                                    </div>
                             </div>
                             <div class="col-sm-1" style="margin: 0px 0px 0px 12px;padding: 0px 0px 0px 0px;width: 8%">
                                  <div class="floating-label-wrapper" style="">
									<select class="form-control" placeholder="Pole" id="Pole" ng-model = "serviceInq.pole" name = "pole" ng-required="true"  with-floating-label >
										<option value="">Pole</option>
									</select>
                                    </div>
								
                             </div>
                             <div class="col-sm-2" style="margin: 0px 0px 0px 12px;padding: 0px 0px 0px 0px;width: 10%;">
                                  <div class="floating-label-wrapper" style="">
									<select class="form-control" placeholder="Phase" id="Phase" ng-model = "serviceInq.phase" name = "phase" ng-required="true"  with-floating-label >
										<option value="">Phase</option>
									</select>
                                    </div>
								
                             </div>
                             <div class="col-sm-2" style="margin: 0px 0px 0px 12px;padding: 0px 0px 0px 0px;width: 10%;">
                                 
                                  <div class="floating-label-wrapper" style="">
									<select class="form-control" placeholder="Voltage" id="Voltage" ng-model = "serviceInq.voltage" name = "voltage" ng-required="true"  with-floating-label>
										<option value="">Voltage</option>
									</select>
                                    </div>
								
                             </div>
                             <div class="col-sm-1" style="margin: 0px 0px 0px 12px;padding: 0px 0px 0px 0px;width: 10%;">
                                
                                   <div class="floating-label-wrapper" style="">
									<select class="form-control" placeholder="Hertz" id="Hertz"  ng-model = "serviceInq.hertz" name = "hertz" ng-required="true"  with-floating-label>
										<option value="">HZ</option>
									</select>
                                    </div>
								
                             </div>
                             <div class="col-sm-2" style="margin: 0px 0px 0px 12px;padding: 0px 0px 0px 0px;width: 23%;">
                                   <div class="floating-label-wrapper" style="">
                                   <input type="text" class="form-control" name="rpm"  placeholder="Speed RPM" ng-model="serviceInq.rpm"   with-floating-label />
									
                                    </div>
								
                             </div>
                            
                             
                        </div>
                       <br />
                       
					   
	       <div class="row">
                       		<div class="col-sm-2">
								<div class="radio"> 
									<label>
									  <input type="radio" class="colored-blue" name="gearMotor" value="0" ng-model="serviceInq.gearMotor">
                                               <span class="text">Selected Model</span>
									</label>
								                                 
								</div>
							</div>
						
							<div class="col-sm-3">
                          <input type="text" class="form-control" name="selectModel" ng-model="serviceInq.selectModel" placeholder=""  />
							</div>
							
							<div class="col-sm-7" >
								<div class="radio"> 
									
                                    <label>
                                     	<span class="text">Brake</span><input type="radio" class="colored-blue" name="brake" ng-model="serviceInq.brake" value="0">
                                               <span class="text">Yes</span>
                                               </label>
                                        <label>&nbsp;&nbsp;
                                            <input type="radio" class="colored-blue" name="brake" ng-model="serviceInq.brake" value="1">
                                               <span class="text">No</span>
                                            </label>
								</div>
							</div>
                        </div> 
						 <br />
	       <div class="row">
                       		<div class="col-sm-2">
								<div class="radio"> 
									<label>
									  <input type="radio" class="colored-blue" name="gearMotor" value="1" ng-model="serviceInq.gearMotor">
                                               <span class="text" title="Please Advice">Model Unknown</span>
                                              
									</label>
								                                 
								</div>
                                
							</div>
							<div class="col-sm-3" >
								
                          <input type="text" class="form-control" placeholder="" name="modelUnknown"  ng-model="serviceInq.modelUnknown"/>
							</div>
							
							<div class="col-sm-7" >
								<div class="radio" ng-if="serviceInq.brake!=1"> 
                                    <label>
                                     	<span class="text">Brake Voltage</span><input type="radio" class="colored-blue" name="brakeVolt" ng-model="serviceInq.brakeVolt" value="0" >
                                               <span class="text">200V</span>
                                               </label>
                                        <label>&nbsp;&nbsp;
                                            <input type="radio" class="colored-blue" name="brakeVolt" ng-model="serviceInq.brakeVolt" value="1" checked="checked">
                                               <span class="text">400V</span>
                                            </label>
								</div>
							</div>
                        </div> 
						 <br />
						<div class="row">
                            
                       		<div class="col-sm-3" >
                            <div class="floating-label-wrapper">
                            <span class="input-icon icon-right">
                                                    <label for="Application"></label>
								  <input type="text" class="form-control" id="Application" placeholder="Application" name="application"  ng-model="serviceInq.application" with-floating-label/>
                                  <i class="glyphicon glyphicon-user circular"></i>
                                                    </span>
                              </div>  
							</div>
                            <div class="col-sm-9" >
								 
                                
							</div>
                        </div>
						 <div class="row">
                       		<div class="col-sm-6">
								<div class="radio"> 
									<label>
										<b style="color:#666666;">Rotation Direction(viewed from O/P Shaft): </b>  
                                              
									</label>
									 &nbsp;&nbsp;&nbsp;
                                    <label>
                                     	<input type="radio" class="colored-blue" name="rtDir" ng-model="serviceInq.rtDir" value="0">
                                               <span class="text">CW</span>
                                               </label>
											   
                                        <label> &nbsp;&nbsp;
										
                                            <input type="radio" class="colored-blue" name="rtDir" ng-model="serviceInq.rtDir" value="1">
                                               <span class="text">CCW</span>
                                            </label>
								</div>
							</div>
							</div>
							<div class="row">
                       		<div class="col-sm-4">
								<div class="floating-label-wrapper">
                                <label for="HssRadial"></label>
                               <input type="text" class="form-control" placeholder="HSS Radial Load(kgf)" id="HssRadial" name="hssRadial"  ng-model="serviceInq.hssRadial" with-floating-label/> 
                               </div>
							</div>
							<div class="col-sm-4">
								<div class="floating-label-wrapper">
                                 <label for="HssRadial1"></label>
                               <input type="text" class="form-control" placeholder="HSS Radial Load(kgf)"  id="HssRadial1" name="hssRadial1"  ng-model="serviceInq.hssRadial1" with-floating-label/>  
                               </div>
							</div>
                            <div class="col-sm-8">
								
                                
							</div>
							</div>
							<br/>
							<div class="row">
							<div class="col-sm-4">
								<div class="floating-label-wrapper">
                                 <label for="LssRadial"></label>
                               <input type="text" class="form-control" placeholder="LSS Radial Load(kgf)"  id="LssRadial" name="LssRadial"  ng-model="serviceInq.LssRadial" with-floating-label/> 
                               </div> 
							</div>
							<div class="col-sm-4">
								<div class="floating-label-wrapper">
                                 <label for="LssRadial1"></label>
                               <input type="text" class="form-control" placeholder="LSS Radial Load(kgf)"  id="LssRadial1" name="LssRadial1"  ng-model="serviceInq.LssRadial1" with-floating-label/> 
                               </div> 
							</div>
                            <div class="col-sm-8">
								
                                 
							</div>
							</div>
							<br/>
							<div class="row">
							<div class="col-sm-4">
								<div class="floating-label-wrapper">
                                 <label for="ServiceFactor"></label>
                               <input type="text" class="form-control" placeholder="Required Service Factor"  id="ServiceFactor" name="serviceFactor"  ng-model="serviceInq.serviceFactor" with-floating-label/> 
                               </div> 
							</div>
							
							</div><br/>
                            <div class="row">
                                <div class="col-sm-4">
								<div class="floating-label-wrapper">
                                 <label for="AmbientTemp"></label>
                               <input type="text" class="form-control" placeholder="Ambient Temperature&nbsp;0C"  id="AmbientTemp" name="ambientTemp"  ng-model="serviceInq.ambientTemp" with-floating-label/>
                               </div>  
							    </div>
                                <div class="col-sm-2" style="margin: 15px 0px 0px -15px;">
                                   <span style="font-family: Geneva, Arial, Helvetica, sans-serif; color:#666666">(40<sup>0</sup>C,if not specified)</span>
							    </div>
                                <div class="col-sm-6">
                                    
							    </div>
                            </div><br/>
								<div class="row">
                                    <div class="col-sm-3">
                                        <div class="floating-label-wrapper">
									<select class="form-control" id="AccessGearbox"  placeholder="SSC Code"  ng-model="accessGearbox" name="accessGearbox" with-floating-label>
										<option value="">Accessories for Gearbox</option>
									</select>
                                   
								 </div>
                                 <div class="col-sm-9">
							    </div>
                                    </div>
                                </div><br/>
                         <div class="row">
                             <div class="col-sm-12">
                                  <div class="table-responsive" style="border: 1px solid #666666;border-radius: 10px; padding: 10px 0px 10px 0px;">
                             
                                <table class="table" border="0px solid #000000"style="border-collapse:collapse;">
									
									<tbody>
										<tr><td colspan="6"><div class="floating-label-wrapper">
                                 <label for="Description"></label><textarea cols="150" rows="2" placeholder="Description of the Service Inquiry:" class="form-control" name="description" id="Description" ng-model="description" with-floating-label></textarea></div></td></tr>
                                        <tr><td><div class="floating-label-wrapper">
                                 <label for="GearUnit"></label><input type="text" class="form-control" placeholder="Location of gear unit" name="gearUnit"  id="GearUnit" ng-model="gearUnit" with-floating-label/> </div></td><td><div class="floating-label-wrapper">
                                 <label for="Sparepart"></label><input type="text" class="form-control" placeholder="Spare part required" name="sparepart" ng-model="sparepart" id="Sparepart" with-floating-label /></div></td> </td><td style="width: 170px;"><span style="line-height: 50px;">warranty period:&nbsp;from</span></td><td style="width: 165px;"><div class="hero-unit">
                                    <div class="input-daterange" id="datepicker" >
                                        
                                        <input type="text" class="input-small form-control"  name="start" placeholder="Select Date From" style=" text-align:left; cursor:pointer;width: 150px;" readonly/>
                                        
                                    </div>
                                </div></td><td style="width: 5px;"><span style="line-height: 50px;">to</span></td><td style="width: 165px;"><div class="hero-unit">
                                    <div class="input-daterange" id="datepicker" >
                                       
                                        <input type="text" class="input-small form-control"  name="end" placeholder="Select Date To" style=" text-align:left;cursor:pointer;width: 150px;" readonly/>
                                        
                                    </div>
                                </div></td></tr>
                                        <tr><td><div class="floating-label-wrapper">
                                 <label for="Jobsite"></label><input type="text" class="form-control" placeholder="Job site contact person" id="Jobsite" ng-model="jobSite" name="jobSite" with-floating-label /></div></td><td><div class="floating-label-wrapper">
                                 <label for="PhoneNo"></label><input type="text" class="form-control" placeholder="Contact phone No"  id="PhoneNo" ng-model="phoneNo" name="phoneNo" with-floating-label/></div></td><td colspan="6"><div class="floating-label-wrapper">
                                 <label for="PossibleReason"></label><input type="text" class="form-control" placeholder="Possible Reason of failure & Remarks:"  id="PossibleReason" ng-model="possibleReason" name="possibleReason" with-floating-label/></div></td></tr>
									</tbody>
								</table>
                                
                                </div>
                             </div>
                         </div>
	 		</form> <br/>
            <div class="row">
						   <div class="col-sm-12" align="center">
								<button type="submit" class="btn btn-blue">Save</button>
								<button type="reset" class="btn btn-blue" ng-click="reset()">Reset</button>
						  </div>
						  	
						</div>
            		
	</div>										

</div>
