<style>
#pageHeadding
{
	font-size: 25px;
	font-weight: 300;
	color: #000000;
	text-align: center;
	margin: 0px 0px;
	padding: 0px 0px;
}
</style>

<script type="text/javascript">
$(function() {

$(document).on('click', '#close-preview', function(){ 
    $('.image-preview').popover('hide');
    // Hover befor close the preview
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

		if(getClearId[1]=="siginput")
		{
			var previewID = "signature";
			var buttonText = "Upload Signature";
		}
	   else
		{
			var previewID = "photo";
			var buttonText = "Upload Photo";
		}
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
		if($(this).attr('id')=="siginput")
		{
			var previewID = "signature";
		}
	   else
		{
			var previewID = "photo";
		}
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

<script>
$(document).ready(function()
{
	var numOfPieces = 6 * 6;
	var frag = document.createDocumentFragment();

	function insertInnerPieces($el, innerPieces) 
	{
	  for (var i = 0; i < innerPieces; i++) 
	  {
	    var $inner = document.createElement('div');
    	$inner.classList.add('popup__piece-inner');
	    $el.appendChild($inner);
	  }
	};

	for (var i = 1; i <= numOfPieces; i++) 
	{
	  var $piece = document.createElement('div');
	  $piece.classList.add('popup__piece');
	    
	  insertInnerPieces($piece, 3);
	  frag.appendChild($piece);
	}

	document.querySelector('.popup__pieces').appendChild(frag);

	var $popupsCont = document.querySelector('.popups-cont');
	var $popup = document.querySelector('.popup');
	var popupAT = 900;
	
	var overlay = jQuery('<div id="overlay"> </div>');	
	
	$('.popup-btn').click(function()
	{
		  overlay.appendTo(document.body);	
		  $popupsCont.classList.add('s--popup-active');
		  $popup.classList.add('s--active');
	});
	
	$('.popup__close').click(function()
	{
		  $("#overlay").remove();	
	      $popupsCont.classList.remove('s--popup-active');
		  $popup.classList.remove('s--active');
		  $popup.classList.add('s--closed');  
		  setTimeout(function() 
		  {
		    $popup.classList.remove('s--closed');
		  }, popupAT);
	});

});
</script>
<!--<img src="http://localhost:8080/SCA-360/Medical__Health_care-100-20-128.png" />-->
<div ng-controller="userMasterController" ng-init="loadAllAddedUsers();">
<div class="popups-cont">
	  <div class="popups-cont__overlay"></div>
	  <div class="popup">
    	<div class="popup__pieces"></div>
	    <div class="popup__content">
    	  	<div class="popup__close"></div>
		    <p class="popup__text">
				<div class="modal-body">
					<div class="row">
     					<div class="col-lg-12 col-sm-12 col-xs-12">                						
							<div class="row">
     							<div class="col-lg-12 col-sm-12 col-xs-12">
                					<div class="row">
                    					<div class="col-lg-12 col-sm-12 col-xs-12">
                        					<div class="widget flat radius-bordered">
                             					<h3 style="font-weight:bold;">User</h3>
												<hr>
                            					<div class="widget-body">
                                					<div id="registration-form"> 
                                    					<form name="userMaster" ng-submit="userMasterFormSubmit(userData,userMaster);" enctype="multipart/form-data" novalidate>
														
														<div class="row">
															<div class="col-sm-4">
																<div class="row">
																	<div class="col-sm-12">
																		<div  ng-class="{ 'has-error' : userMaster.loginId.$invalid && (userMaster.loginId.$dirty || submitted)}">
																			<span class="input-icon icon-right">
																				<input type="text" class="form-control" placeholder="Login ID" name="loginId" ng-model="userData.loginId" ng-required="true" tabindex="1" autofocus="autofocus">
																				<i class="glyphicon glyphicon-user circular"></i>
																				<p ng-show="userMaster.loginId.$error.required && (userMaster.loginId.$dirty || submitted)" class="help-block"> LoginID is required</p>
																			</span>
																	   </div>
																	</div>
																</div><br />
																<div class="row">
																	<div class="col-sm-12">
																		<div  ng-class="{ 'has-error' : userMaster.emailId.$invalid && (userMaster.emailId.$dirty || submitted)}">
																			<span class="input-icon icon-right">
																				<input type="text" class="form-control" placeholder="E-mail ID" name="emailId" ng-model="userData.emailId" ng-required="true" tabindex="4">
																				<i class="glyphicon glyphicon-envelope circular"></i>
																				<p ng-show="userMaster.emailId.$error.required && (userMaster.emailId.$dirty || submitted)" class="help-block"> E-mail ID is required</p>
																			</span>
																		</div>
																	</div>
																</div><br />
																<div class="row">
																	<div class="col-sm-12">
																		<div  ng-class="{ 'has-error' : userMaster.roleId.$invalid && (userMaster.roleId.$dirty || submitted)}">
																			<select class="form-control" name="roleId" ng-model="userData.roleId" tabindex="6" ng-required="true">
																				<option value="">Role</option>
																				<option value="1">Role 1</option>
																				<option value="2">Role 2</option>
																				<option value="3">Role 3</option>
																			</select>
																			<p ng-show="userMaster.roleId.$error.required && (userMaster.roleId.$dirty || submitted)" class="help-block"> Role is required</p>
																		</div>
																	</div>
																</div><br />
															</div>
															<div class="col-sm-4">
																<div class="row">
																	<div class="col-sm-12">
																		<div  ng-class="{ 'has-error' : userMaster.userFirstName.$invalid && (userMaster.userFirstName.$dirty || submitted)}">
																			<span class="input-icon icon-right">
																				<input type="text" class="form-control" placeholder="First Name" name="userFirstName" ng-model="userData.userFirstName" ng-required="true" tabindex="2">
																				<i class="glyphicon glyphicon-user circular"></i>
																			</span>
																			<p ng-show="userMaster.userFirstName.$error.required && (userMaster.userFirstName.$dirty || submitted)" class="help-block"> First Name required</p>
																		</div>
																	</div>
																</div><br />
																<!----><div class="row">
																	<div class="col-sm-12">
																		<div  ng-class="{ 'has-error' : userMaster.countryCode.$invalid && (userMaster.countryCode.$dirty || submitted)}">
																		<span class="input-icon icon-right">
																			<select class="form-control" name="countryCode" ng-model="userData.countryCode" ng-required="true" ng-options="countryCode.countrycode as countryCode.country for countryCode in CountryCode" tabindex="5">
																				<option value="">Country</option>
																				<option value="all">All</option>
																			</select>
																			</span>
																			<p ng-show="userMaster.countryCode.$error.required && (userMaster.countryCode.$dirty || submitted)" class="help-block"> Country is required</p>
																		</div>
																	</div>
																</div>
															<br />
																<div class="row">
																	<div class="col-sm-12">
																		<div class="control-group">
																			<div class="radio"> 
																			<label>
																			Status : <input name="status" type="radio" class="colored-blue" ng-model="userData.status" value="0">
																			<span class="text">Active</span>
																			</label>
																			<label>
																			<input name="status" type="radio" class="colored-blue" ng-model="userData.status" value="1">
																			<span class="text"> Inactive</span>
																			</label>
																	      </div>
																	 </div>
																	</div>
																</div><br />
															</div>
															<div class="col-sm-4">
																<div class="row">
																	<div class="col-sm-12">
																		<div  ng-class="{ 'has-error' : userMaster.userLastName.$invalid && (userMaster.userLastName.$dirty || submitted)}">
																			<span class="input-icon icon-right">
																				<input type="text" class="form-control" placeholder="Last Name" name="userLastName" ng-model="userData.userLastName" ng-required="true" tabindex="3">
																				<i class="glyphicon glyphicon-user circular"></i>
																			</span>
																			<p ng-show="userMaster.userLastName.$error.required && (userMaster.userLastName.$dirty || submitted)" class="help-block"> Last Name is required</p>
																		</div>
																	</div>
																</div><br />
																<div class="row">
																	<div class="col-sm-12">
																	<div class="form-group" ng-class="{ 'has-error' : userMaster.salesmancode.$invalid && (userMaster.salesmancode.$dirty || submitted)}">
																			<select class="form-control" name="salesmancode" ng-model="userData.salesManCode" ng-required="true" ng-options="salesManCode.salesmancode as salesManCode.salesmancode for salesManCode in salesmancodes" tabindex="6">
																				<option value="">Salesman</option>
																			
																			</select>
																			<p ng-show="userMaster.salesmancode.$error.required && (userMaster.salesmancode.$dirty || submitted)" class="help-block">Salesman Code is required</p>
																	</div>	
																	</div>
																</div><br />
																<div class="row">
																	<div class="col-sm-12">
																		<div  ng-class="{ 'has-error' : userMaster.utctimeZone.$invalid && (userMaster.utctimeZone.$dirty || submitted)}">
																			<!--<select class="form-control" name="utctimeZone" ng-model="userData.utctimeZone" ng-required="true">
																				<option value="">Time Zone</option>
																				<option value="Designation 1">Designation 1</option>
																				<option value="Designation 2">Designation 2</option>
																				<option value="Designation 3">Designation 3</option>
																			</select>-->
																			<input type="hidden" name="utctimeZone" ng-model="userData.utctimeZone"/>
																			<p ng-show="userMaster.utctimeZone.$error.required && (userMaster.utctimeZone.$dirty || submitted)" class="help-block"> Time Zone is required</p>
																		</div>
																	</div>
																</div><br />
																
																
																
																
															</div>
															
														</div>
														<br />		
																									
														<div class="row"> 
                                                        <input type="hidden" class="form-control" name="photoPath"  ng-model="userData.photoPath" /> 
                                                        <input type="hidden" class="form-control" name="signaturePath"  ng-model="userData.signaturePath" />  
													        <!--<div class="col-sm-6">  
													            <div class="input-group image-preview" id="photo">
													                <input type="text" class="form-control image-preview-filename" disabled="disabled"  name="photoPath1" ng-model="userData.photoPath1" id="3photoinput">
													                <span class="input-group-btn">
												        	            <button type="button" class="btn btn-default image-preview-clear" style="display:none;"  id="2photoinput" ng-click="rmvUserFilePath();">
													        	            <span class="glyphicon glyphicon-remove"></span> Clear
												                	    </button>
													                    <div class="btn btn-default image-preview-input">
													                        <span class="glyphicon glyphicon-folder-open"></span>
													                        <span class="image-preview-input-title"  id="1photoinput">Upload Photo</span>
																			<input type="file"  name="Ryotfile" onchange="angular.element(Ryotfile).scope().uploadAadharFile(Ryotfile.files);" id="photoinput" accept="image/png, image/jpeg, image/gif" ng-model="userData.photoPath"/>
													                    </div>
													                </span>
													            </div>
																<div>
																	<input type="hidden" name="dummyPhoto" ng-model="dummyPhoto" id="dummyPhoto"/>
																	<p ng-show="userMaster.dummyPhoto.$error.required && (userMaster.dummyPhoto.$dirty || submitted)" class="help-block"> User Photo is required</p>
																</div>
													        </div>-->
															<!--<div class="col-sm-6">  
													            <div class="input-group image-preview" id="signature">
													                <input type="text" class="form-control image-preview-filename" disabled="disabled"  name="signaturePath1" ng-model="userData.signaturePath1" id="3siginput">
													                <span class="input-group-btn">
												        	            <button type="button" class="btn btn-default image-preview-clear" style="display:none;" id="2siginput">
													        	            <span class="glyphicon glyphicon-remove"></span> Clear
												                	    </button>
													                    <div class="btn btn-default image-preview-input">
													                        <span class="glyphicon glyphicon-folder-open"></span>
													                        <span class="image-preview-input-title" id="1siginput">Upload Signature</span>
													                        <input type="file"  accept="image/png, image/jpeg, image/gif" name="signatureFile" onchange="angular.element(this).scope().uploadSignatureFile(this.files)" id="siginput" />
													                    </div>
													                </span>																	
													            </div>
																<div>
																	<input type="hidden" name="dummySignature" ng-model="dummySignature" id="dummySignature"/>
																	<p ng-show="userMaster.dummySignature.$error.required && (userMaster.dummySignature.$dirty || submitted)" class="help-block"> User Signature is required</p>
																</div>																
													        </div>-->
													    </div>
														<br />																																							
						                              	<div style="text-align:center;">
															<button type="submit" class="btn btn-blue">Save</button>
						                                    <input type="button" value="Reset" class="btn btn-blue" ng-click="reset(userMaster)"/>
                        						       </div>
													   	
											</form>
                                	</div>
                            	</div>
                        	</div>
                    	</div>
                    </div>
            	</div>
  			</div>
  		</div>		
		</div>
        </div>	  
	  </p>
    </div>
  </div>
</div>
<div id="cover" ></div>
<p align="right">
	<span class="btn btn-blue popup-btn" ng-click="reset(userMaster);">Add User</span>
</p>
<div class="horizontal-space"></div>
<div class="row">
    <div class="col-xs-12 col-md-12">
        <div class="well with-header with-footer">
            <div class="header bordered-blue" id="pageHeadding">
               Added Users
            </div>
			<div class="table-scrollable">
				<table class="table table-hover table-striped table-bordered">
					<thead class="bordered-blue">
						<tr>
							<th>Login Id</th>
							<th>User Name</th>
							<th>E-mail ID</th>
							<th>Country</th>
						</tr>
					</thead>
					<tbody>
						<tr ng-repeat="UserData in AddedUserData">
							<td>
							<a   href="#/app/UserMaster" ng-click="showPopup(UserData);">{{UserData.loginId}}</a></td>
							<td>{{UserData.userFirstName}} {{UserData.userLastName}}</td>
							<td>{{UserData.emailId}}</td>
							<td>{{UserData.countryCode}}</td>
						</tr>						
					</tbody>
				</table>
			</div>			
        </div>
    </div>
</div>
</div>
