<!--<style>
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
</style>-->
<!--<script>
!function(e){var t=function(t,n){this.$element=e(t),this.type=this.$element.data("uploadtype")||(this.$element.find(".thumbnail").length>0?"image":"file"),this.$input=this.$element.find(":file");if(this.$input.length===0)return;this.name=this.$input.attr("name")||n.name,this.$hidden=this.$element.find('input[type=hidden][name="'+this.name+'"]'),this.$hidden.length===0&&(this.$hidden=e('<input type="hidden" />'),this.$element.prepend(this.$hidden)),this.$preview=this.$element.find(".fileupload-preview");var r=this.$preview.css("height");this.$preview.css("display")!="inline"&&r!="0px"&&r!="none"&&this.$preview.css("line-height",r),this.original={exists:this.$element.hasClass("fileupload-exists"),preview:this.$preview.html(),hiddenVal:this.$hidden.val()},this.$remove=this.$element.find('[data-dismiss="fileupload"]'),this.$element.find('[data-trigger="fileupload"]').on("click.fileupload",e.proxy(this.trigger,this)),this.listen()};t.prototype={listen:function(){this.$input.on("change.fileupload",e.proxy(this.change,this)),e(this.$input[0].form).on("reset.fileupload",e.proxy(this.reset,this)),this.$remove&&this.$remove.on("click.fileupload",e.proxy(this.clear,this))},change:function(e,t){if(t==="clear")return;var n=e.target.files!==undefined?e.target.files[0]:e.target.value?{name:e.target.value.replace(/^.+\\/,"")}:null;if(!n){this.clear();return}this.$hidden.val(""),this.$hidden.attr("name",""),this.$input.attr("name",this.name);if(this.type==="image"&&this.$preview.length>0&&(typeof n.type!="undefined"?n.type.match("image.*"):n.name.match(/\.(gif|png|jpe?g)$/i))&&typeof FileReader!="undefined"){var r=new FileReader,i=this.$preview,s=this.$element;r.onload=function(e){i.html('<img src="'+e.target.result+'" '+(i.css("max-height")!="none"?'style="max-height: '+i.css("max-height")+';"':"")+" />"),s.addClass("fileupload-exists").removeClass("fileupload-new")},r.readAsDataURL(n)}else this.$preview.text(n.name),this.$element.addClass("fileupload-exists").removeClass("fileupload-new")},clear:function(e){this.$hidden.val(""),this.$hidden.attr("name",this.name),this.$input.attr("name","");if(navigator.userAgent.match(/msie/i)){var t=this.$input.clone(!0);this.$input.after(t),this.$input.remove(),this.$input=t}else this.$input.val("");this.$preview.html(""),this.$element.addClass("fileupload-new").removeClass("fileupload-exists"),e&&(this.$input.trigger("change",["clear"]),e.preventDefault())},reset:function(e){this.clear(),this.$hidden.val(this.original.hiddenVal),this.$preview.html(this.original.preview),this.original.exists?this.$element.addClass("fileupload-exists").removeClass("fileupload-new"):this.$element.addClass("fileupload-new").removeClass("fileupload-exists")},trigger:function(e){this.$input.trigger("click"),e.preventDefault()}},e.fn.fileupload=function(n){return this.each(function(){var r=e(this),i=r.data("fileupload");i||r.data("fileupload",i=new t(this,n)),typeof n=="string"&&i[n]()})},e.fn.fileupload.Constructor=t,e(document).on("click.fileupload.data-api",'[data-provides="fileupload"]',function(t){var n=e(this);if(n.data("fileupload"))return;n.fileupload(n.data());var r=e(t.target).closest('[data-dismiss="fileupload"],[data-trigger="fileupload"]');r.length>0&&(r.trigger("click.fileupload"),t.preventDefault())})}(window.jQuery)
</script>-->
<script>
$(function() {

$(document).on('click', '#close-preview', function(){ 
    $('.image-preview').popover('hide');
    // Hover before close the preview
    $('.image-preview').hover(		
        function () {
           $('#'+ $(this).attr('id')).popover('show');
        }, 
         function () {
		   $('#'+ $(this).attr('id')).popover('hide');
        }
    );    
});
    // Create the close button
    var closebtn = $('<button/>', {
        type:"button",
        text: 'x',
        id: 'close-preview',
        style: 'font-size: initial;',
    });
    closebtn.attr("class","close pull-right");
    // Set the popover default content
    $('.image-preview').popover({
        trigger:'manual',
        html:true,
        title: "<strong>Preview</strong>"+$(closebtn)[0].outerHTML,
        content: "There's no image",
        placement:'bottom'
    });
    // Clear event
    $('.image-preview-clear').click(function(){
		var getClearId = $(this).attr('id').split("2");

		//if(getClearId[1]=="siginput")
		//{
		//	var previewID = "signature";
		//	var buttonText = "Upload Signature";
		//}
	  // else
	//	{
			var previewID = "photo";
			var buttonText = "Upload Photo";
		//}
		//alert($(this).attr('id'));
		var textChange = "1"+ getClearId[1];
		var clearButton = "2"+ getClearId[1];
		var dispFileName = "3"+ getClearId[1];
				
        $('#'+ previewID).attr("data-content","").popover('hide');
        $('#'+ dispFileName).val("");
        $('#'+ clearButton).hide();
		$('#'+ getClearId[1]).val("");
		$("#"+ textChange).text(buttonText);
    }); 
    // Create the preview image
    $(".image-preview-input input:file").change(function (){  
        var img = $('<img/>', {
            id: 'dynamic',
            width:200,
            height:150
        });      
		//alert($(this).attr('id'));
		//if($(this).attr('id')=="siginput")
		//{
		//	var previewID = "signature";
		//}
	  // else
		//{
			var previewID = "photo";
		//}
		var textChange = "1"+ $(this).attr('id');
		var clearButton = "2"+ $(this).attr('id');
		var dispFileName = "3"+ $(this).attr('id');
		
        var file = this.files[0];
        var reader = new FileReader();		
        // Set preview image into the popover data-content		
        reader.onload = function (e) {
            $("#"+ textChange).text("Change");
            $("#"+ clearButton).show();
            $("#"+ dispFileName).val(file.name);   			
            img.attr('src', e.target.result);
			//alert($(img)[0].outerHTML);
            $("#"+ previewID).attr("data-content",$(img)[0].outerHTML).popover("show");
        }        
        reader.readAsDataURL(file);
    });  
});




 
	</script>
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
	</style>

<div  ng-controller="serviceInquiryController" ng-init="getStatus();addinquiryForm();getAccessories();getApplicatiosData();">									
	<div class="well with-header with-footer">
      <div class="header bordered-blue">Service Inquiry</div>
        <form name="serviceInquiryForm" ng-submit="submitServiceinq(serviceInq,serviceInquiryForm)" novalidate>
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
                                  <label for="customerCode"></label>																																																											
								    <input type="text" class="form-control" name="custCode" ng-model="serviceInq.customerCode" id="customerCode" placeholder="Cust Code" autocomplete="on" with-floating-label/>
                                    <i class="glyphicon glyphicon-user circular"></i>
                                                    </span>
                                </div>
						    </div>
                       </div>
                     
                       <div class="col-sm-3">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="caseReferenceno"></label>																																																											
								    <input type="text" class="form-control" name="caseReff" ng-model="serviceInq.caseReferenceno" id="caseReferenceno" placeholder="Case Reference" ng-blur="getcasereafernce(serviceInq.caseReferenceno);" with-floating-label/>
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
                                  <label for="contactno"></label>																																																											
								    <input type="text" class="form-control" name="contact" ng-model="serviceInq.contactno" id="contactno" placeholder="Contact" with-floating-label/>
                                    <i class="glyphicon glyphicon-user circular"></i>
                                                    </span>
                                </div>
						    </div>
                       </div>
                       <div class="col-sm-3">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="telephoneno"></label>																																																											
								    <input type="text" class="form-control" name="tel" ng-model="serviceInq.telephoneno" id="telephoneno" placeholder="Tel"  with-floating-label/>
                                    <i class="glyphicon glyphicon-earphone circular"></i>
                                                    </span>
                                </div>
						    </div>
                       </div>
                       <div class="col-sm-6">
                             
                            <div class="form-group">
                              <div class="floating-label-wrapper">
                              <label for="address"></label>	
                            <textarea cols="50" rows="1" placeholder="Address" id="address" class="form-control" name="address" ng-model="techQueryData.address" with-floating-label></textarea>
                           
                            </div>
                       </div>
                       </div>
					 
					   
                       
                       
                   </div>
				   <div class="row" >
                         <div class="col-sm-12">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="customerRemarks"></label>																																																											
								    <textarea type="text" class="form-control" name="Customer" ng-model="serviceInq.customerRemarks" id="customerRemarks" placeholder="Customer Remarks"  with-floating-label/>
                                 
                                                    </span>
                                </div>
						    </div>
                       </div>
                  </div>
				   <div class="row">
                       
                     
                       <div class="col-sm-6" style="white-space:nowrap; margin:0; padding:0; width:40%;">
                             
                            <div class="radio">
                                   <div class="control-group"> 
									<label>
										<b style="color:#666666;">Service Location : </b>  <input name="dropDimension" type="radio" class="colored-blue" ng-model="serviceInq.serviceLocation" value="0" checked="checked">
										<span class="text">ONSITE RECTIFICATION</span>
									</label>
									&nbsp;&nbsp;
									<label>
										<input name="dropDimension" type="radio" ng-required="true" class="colored-blue" ng-model="serviceInq.serviceLocation" value="1">
										<span class="text"> OVERHAUL JOB</span>
									</label>
																					
									</div>                                    
								</div>
                       </div>
                       <div class="col-sm-3" ng-if="serviceInq.serviceLocation==0">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="siteAddress"></label>																																																											
								    <input type="text" class="form-control" name="Site" ng-model="serviceInq.siteAddress" id="siteAddress" placeholder="Site Address" autocomplete="on" with-floating-label/>
                                   
                                                    </span>
                                </div>
						    </div>
                       </div>
                       <div class="col-sm-3" ng-if="serviceInq.serviceLocation==0">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="personContactNumber"></label>																																																											
								    <input type="text" class="form-control" name="ContactNo" ng-model="serviceInq.personContactNumber" id="personContactNumber" placeholder="Person Contact Number" autocomplete="on" with-floating-label/>
                                 
                                                    </span>
                                </div>
						    </div>
                       </div>
                       
                   </div>
				   
				   <div class="row" >
                         <div class="col-sm-12">
                            <div class="form-group">
                                <div class="floating-label-wrapper">
                                  <span class="input-icon icon-right">
                                  <label for="description"></label>																																																											
								    <textarea type="text" class="form-control" name="tel" ng-model="serviceInq.description" id="description" placeholder="Description"  with-floating-label/>
                                 
                                                    </span>
                                </div>
						    </div>
                       </div>
                  </div>
				  
				 
				    <div class="row" >
			 
                     <div class="col-sm-3">
								<div class="radio"> 
                                <div class="control-group">
									<label>
										<b style="color:#666666;">Attach drawing: </b>  <input name="attachdrawing" type="radio" class="colored-blue"  value="0" ng-model="serviceInq.attachDrawing" checked="checked" >
										<span class="text">Yes</span>
									</label>
									&nbsp;&nbsp;
									<label>
										<input name="attachdrawing" type="radio" class="colored-blue" ng-model="serviceInq.attachDrawing" value="1">
										<span class="text">No</span>
									</label>
																					
									</div>                                    
								</div>
                                <div>
                                <span style="font-family: Geneva, Arial, Helvetica, sans-serif;"></span>
                                </div>
							</div>
                            <div class="col-sm-9" >
							
  		<div class="fileinput fileinput-new" data-provides="fileinput">
                        <span class="btn btn-primary btn-file m-r-10">
                            <span class="fileinput-new">Browse</span>
                           
                      <input type='file'  onchange="angular.element(this).scope().imageUpload(event)" multiple />
 
 
                        </span>
                        
                       
                    </div>
   <!--  <label class="btn btn-primary">
    <input type='file'  onchange="angular.element(this).scope().imageUpload(event)" multiple />
       </label>-->
                                   
 
							</div>
                  </div>
				  <div class="row">
				  <div class="col-sm-12">
				  
				  <div ng-repeat="step in stepsModel">
				  <div class="col-sm-1">
        <img class="thumb" ng-src="data:image/png;base64,{{step}}" />
		</div>
		 
	<div class="col-sm-1">
		<button ng-click="getimage(step)"><i class="glyphicon glyphicon-remove-sign"></i></button>
		</div>
   </div>
				  </div>
				  </div>
				  <div  class="table table-striped table-vmiddle">
				  <div >
		                               <table class="table table-hover table-striped table-bordered">
                                       
		<thead class="bordered-blue">
		<tr>
        <th>Add</th>
		<th>Model No</th>
		<th>Serial No</th>
		<th>Quantity</th>
		<th>Accessiories</th>
		<th>Applications</th>
		
		</tr>
		</thead>
		<tbody>
		<tr ng-repeat = "serviceinquiry in serviceinquiryField">
		<td><button type="button" id="right_All_1" class="btn btn-primary" ng-if="serviceinquiry.id=='1'" ng-click='addinquiryForm();'>
                                                    	<i class="glyphicon glyphicon-plus-sign"></i>
                                                    </button>
												   <button type="button" id="right_All_1" class="btn btn-primary" ng-if="serviceinquiry.id!='1'" ng-click='removeserviceinquiry(serviceinquiry.id);'>
                                                   		<i class="glyphicon glyphicon-remove-sign"></i>
                                                   </button>	</td>
		<td ><input type="text" class="form-control" ng-model = "serviceinquiry.modelno"  name = "modelno{{$index}}"></td>
		<td>
                                                         
                                                        <input type="text" class="form-control" ng-model = "serviceinquiry.serialno" name = "serialno{{$index}}"   placeholder=""  id="contName"   >
                                                       </td>
		<td>                               
                                                        <input type="text" class="form-control" ng-model = "serviceinquiry.quantity"   name = "quantity{{$index}}"  placeholder=""  id="contactNum"    >
                                                      </td>
		<td>
		 <div class="form-group">


                            <!--<select class="form-control" data-ng-model="serviceinquiry.accessories" ng-options="accessories.text as accessories.text for accessories in Stage " name="accessories"><option value=""></option>-->
							<ui-select multiple ng-model="serviceinquiry.accessories" theme="select2" ng-disabled="disabled" style="width:245px;">
                                            <ui-select-match placeholder="Select Accessiories" id="sscCode" with-floating-label>{{$item.id}}</ui-select-match>
                                            <ui-select-choices repeat="serviceinquiry.id as serviceinquiry in availableCode | filter:$select.search">
                                               <!--<div ng-bind-html="formData.id | highlight: $select.search"></div>-->
                                                <small ng-bind-html="serviceinquiry.desp | highlight: $select.search"></small>
                                            </ui-select-choices>
                                        </ui-select>
			
			</select>


                        </div>
       </td>
		<td>
                        <div class="form-group">


                           <select class="form-control" id="Application" placeholder="" name="applications{{$index}}" ng-model="serviceinquiry.applications" ng-options = "serviceinquiry.application as serviceinquiry.application for serviceinquiry in applicationData" with-floating-label>
<option value="">Application</option>
</select>
			
			</select>


                        </div>
                                                     </td>
	
                                                    
                                                    
		</tr>
		
		</tbody>
		</table>
		</div>

		                             </div>
                   
                   
                  			<br />
							<br />		
                 
                    <div id="competitorData" style="border: 1px solid #666;border-radius: 5px;padding: 15px 10px 10px 10px;">
                           
                            <div class="row">
                                
                                <div class="col-sm-10">
                                <div class="form-group">
                                    <div class="floating-label-wrapper">
                                     <label for="RemarksComp"></label> 
                                        <textarea class="form-control" rows="1"  placeholder="Remarks:" name="remarksComp" ng-model="remarks" id="remarks" with-floating-label></textarea>
                                    </div>
                                      <div class="input-group">
                                       <button type="button" class="btn btn-primary"  ng-click="addRemarkComp(remarksComp);">SAVE</button>
                                       </div>
                                    </div>
                                </div>
                                
                            </div>
                            <!--<div class="row">
                                 
                                 <div class="col-sm-12">
                                     <div class="floating-label-wrapper">
                                     <label for="textareaanimatedComp"></label>  
									<textarea class="form-control" rows="10" placeholder="Added Remarks:" name="remarksAddComp" ng-model="remarksAddComp" id="textareaanimatedComp" with-floating-label></textarea>
                                    </div>
                                 </div>
                                 
                            </div>-->
                            <div class="row">
                                 
                                 <div class="col-sm-12">
                                    
                                    <B>Added Remarks:</B>
                                    <div class="table-scrollable">
									    <div style="height:250px; overflow-y:auto;">
											<table class="table table-hover table-striped">
												
												<tbody>
												<tr ng-repeat="blogCompData in addedRemarksCompData">
														<td id="gridTableBlog">{{blogCompData.id}}</td>
														<td id="gridTableBlog">{{blogCompData.remarks}}</td>
														<td id="gridTableBlog">{{blogCompData.username}}</td>
														<td id="gridTableBlog">{{blogCompData.date}}</td>
														
														
													</tr>
												
													
												</tbody>
											</table>
									  </div>
								</div>
                                    
                                    <br>
                                   
                                 </div>
                                 
                            </div>
                            <br/>
                            
                        </div> 
                       
			<br/>		   
	        <div class="row">
						   <div class="col-sm-12" align="center">
								<button type="submit" class="btn btn-blue">Save</button>
								<button type="reset" class="btn btn-blue" ng-click="reset()">Reset</button>
						  </div>
						  	
						</div>
							
	 		</form> 
            
            		
	</div>										

</div>
