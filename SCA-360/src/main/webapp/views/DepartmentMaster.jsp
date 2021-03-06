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
div {
	   color:#666666;
	   font-family:Geneva, Arial, Helvetica, sans-serif;
	   
	}
</style>

<!--<script type="text/javascript">
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
	</script>-->

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

<div ng-controller="DepartmentMasterController" ng-init="loadAddedDepartments();"> 
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
                             					<h3 style="font-weight:bold;">Department</h3>
												<hr>
                            					<div class="widget-body">
                                					 <div id="registration-form"> 
                                                          <form name="departmentsForm" novalidate ng-submit="AddDepartmentsFormSubmit(departmentData,departmentsForm);" enctype="multipart/form-data">
                                                            <div class="row">
                                                                <div class="col-sm-1"></div>
                                                                <div class="col-sm-3">
                                                                <div class="floating-label-wrapper">
                                                                 
                                                                    <div  ng-class="{ 'has-error' : departmentsForm.departmentname.$invalid && (departmentsForm.departmentname.$dirty)}">
                                                                    <label for="departmentName"></label>
                                                                        <span class="input-icon icon-right">
                                                                            <input type="text" class="form-control"  placeholder="Department" ng-required="true" name="departmentname" ng-model="departmentData.departmentname" id="departmentName" with-floating-label>
                                                                            <i class="glyphicon glyphicon-user circular"></i>
                                                                        </span>
                                                                        <p ng-show="departmentsForm.departmentname.$error.required && (departmentsForm.departmentname.$dirty)" class="help-block"> You can't leave this empty</p>
                                                                     </div>
                                                                </div>
                                                                </div>
                                                                <div class="col-sm-3">
                                                                <div class="floating-label-wrapper">
                                                                    <div  ng-class="{ 'has-error' : departmentsForm.departmentnameshortcut.$invalid && (departmentsForm.departmentnameshortcut.$dirty)}">
                                                                            <label for="departmentNameShortcut"></label>
                                                                        <span class="input-icon icon-right">
                                                                            <input type="text" class="form-control"  placeholder="Dept. Shortcut" ng-required="true" name="departmentnameshortcut" ng-model="departmentData.departmentnameshortcut" id="departmentNameShortcut" with-floating-label>
                                                                            <i class="glyphicon glyphicon-user circular"></i>
                                                                        </span>
                                                                        <p ng-show="departmentsForm.departmentnameshortcut.$error.required && (departmentsForm.departmentnameshortcut.$dirty)" class="help-block"> You can't leave this empty</p>
                                                                     </div>
                                                                </div>
                                                                </div>	
                                                                <div class="col-sm-3">
                                                                 <div class="floating-label-wrapper">
                                                                    <div  ng-class="{ 'has-error' : departmentsForm.contactperson.$invalid && (departmentsForm.contactperson.$dirty)}">
                                                                    <label for="contactPerson"></label>
                                                                        <span class="input-icon icon-right">
                                                                            <input type="text" class="form-control"  placeholder="Contact Person" ng-required="true" name="contactperson" ng-model="departmentData.contactperson" id="contactPerson" with-floating-label>
                                                                            <i class="glyphicon glyphicon-user circular"></i>
                                                                        </span>
                                                                        <p ng-show="departmentsForm.contactperson.$error.required && (departmentsForm.contactperson.$dirty)" class="help-block"> You can't leave this empty</p>
                                                                    </div>  
                                                                 </div>                                      	
                                                                </div>								
                                                            </div>
                                                            <br>
                                                            <div class="row">
                                                                <div class="col-sm-1"></div>										
                                                                <div class="col-sm-3">
                                                                   <div class="floating-label-wrapper">
                                                                    
                                                                   <div  ng-class="{ 'has-error' : departmentsForm.email.$invalid && (departmentsForm.email.$dirty)}">
                                                                    <label for="Email"></label>
                                                                        <span class="input-icon icon-right">
                                                                            <input type="text" class="form-control"  placeholder="Email" ng-required="true" name="email" ng-model="departmentData.email" id="Email" ng-keyup="validEmailId(departmentData.email);" with-floating-label>
                                                                            <i class="glyphicon glyphicon-envelope circular"></i>
                                                                        </span>
                                                                        <p ng-show="departmentsForm.email.$error.required && (departmentsForm.email.$dirty)" class="help-block"> You can't leave this empty</p>
                                                                        <p class="help-block" id="existVal" style="color:#a94442; display:none;" ng-if="departmentData.email!=null">Enter Valid Email</p>
                                                                        <!--<p ng-show="departmentsForm.email.$error.email  && (departmentsForm.email.$dirty)" class="help-block">Enter Valid Email ID</p>-->
                                                                    </div>
                                                                    
                                                                   </div>
                                                                </div>
                                                                <div class="col-sm-3">
                                                                   <div class="form-group">
                                                                    <div class="floating-label-wrapper" ng-class="{ 'has-error' : departmentsForm.extent.$error.pattern && (departmentsForm.extent.$dirty || submitted)}">
                                                                    <label for="exTent"></label>
                                                                        <span class="input-icon icon-right">
                                                                            <input type="text" class="form-control"  placeholder="Extension Number" ng-required="true" name="extent" ng-model="departmentData.extent" id="exTent" ng-pattern="/^[0-9]*$/"  with-floating-label>
                                                                            <i class="glyphicon glyphicon-user circular"></i>
                                                                        </span>
                                                                        <p ng-show="departmentsForm.extent.$error.required && (departmentsForm.extent.$dirty || submitted)" class="help-block"> You can't leave this empty</p>
                                                                         <p ng-show="departmentsForm.extent.$error.pattern  && (departmentsForm.extent.$dirty || submitted)" class="help-block">Enter Valid Extension Number</p>
                                                                        <!--<p ng-show="departmentsForm.extent.$error.pattern  && (departmentsForm.extent.$dirty)" class="help-block">Enter Valid Extension Number</p>-->
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div class="col-sm-3">
                                                                  <div class="form-group">
                                                                     <div class="floating-label-wrapper" ng-class="{ 'has-error' : departmentsForm.phonenumber.$invalid && (departmentsForm.phonenumber.$dirty)}">
                                                                    <label for="phoneNumber"></label>
                                                                        <span class="input-icon icon-right">
                                                                            <input type="text" class="form-control"  placeholder="Phone Number" ng-required="true" name="phonenumber" ng-model="departmentData.phonenumber" id="phoneNumber" ng-pattern="/^[0-9]*$/" maxlength="13" with-floating-label>
                                                                            <i class="glyphicon glyphicon-user circular"></i>
                                                                        </span>
                                                                        <p ng-show="departmentsForm.phonenumber.$error.required && (departmentsForm.phonenumber.$dirty)" class="help-block"> You can't leave this empty</p>
                                                                        <p ng-show="departmentsForm.phonenumber.$error.pattern  && (departmentsForm.phonenumber.$dirty || submitted)" class="help-block">Enter Valid Phone Number</p>
                                                                    </div>
                                                                     </div>
                                                                </div>
                                                            </div>
                                                            <br>
                                                            <div class="row">
                                                                <div class="col-sm-1"></div>										
                                                                
                                                                <div class="col-sm-4">
                                                                    <div class="form-group">
                                                                    <div class="radio"> 
                                                                        <label>
                                                                            status : <input name="status" type="radio" class="colored-blue" ng-model="departmentData.status" value="0">
                                                                            <span class="text"> Active</span>
                                                                        </label>&nbsp;&nbsp;&nbsp;
                                                                        <label>
                                                                            <input name="status" type="radio" class="colored-blue"  ng-model="departmentData.status" value="1">
                                                                            <span class="text"> Inactive</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                            <br>
                                                            <div style="text-align:center;">
                                                            <button type="submit" class="btn btn-primary">Save</button>
                                                            <button type="button" class="btn btn-primary" ng-click="resetDepartmentForm(departmentsForm);">Reset</button>
                                                            <!--<button class="btn btn-blue" type="submit">Save</button>
                                                            <button type="button" class="btn btn-blue" ng-click="reset(departmentsForm);">Reset</button>-->
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
	<span class="btn btn-blue popup-btn" ng-click="reset(departmentsForm);">Add Department</span>
</p>
<div class="horizontal-space"></div>
<div class="row">
    <div class="col-xs-12 col-md-12">
        <div class="well with-header with-footer">
            <div class="header bordered-blue" id="pageHeadding">
               Department Master
            </div>
			<div class="table-scrollable">
                 <table class="table table-hover table-striped table-bordered">
						<thead class="bordered-blue">
							<tr>
								<th>SL.No.</th>
								<th>Department</th>
								<th>Shortcut</th>
								<th>Contact Person</th>
								<th>E-mail</th>
								<th>Extent</th>
								<th>Phone Number</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr ng-repeat="AddedData in deptArray">
								<!--<td><a class="popup-btn" href="#/app/departments" ng-click="addedDept(AddedData);">{{AddedData.deptid}}</a></td>-->
                                <td><a href="#/app/Departments" ng-click="showPopup(AddedData);">{{$index+1}}</a></td>
								<td>{{AddedData.departmentname}}</td>
								<td>{{AddedData.departmentnameshortcut}}.</td>
								<td>{{AddedData.contactperson}}</td>
								<td>{{AddedData.email}}</td>
								<td>{{AddedData.extent}}</td>
								<td>{{AddedData.phonenumber}}</td>
								<td><span ng-if="AddedData.status==0">Active</span><span ng-if="AddedData.status==1">Inactive</span></td>
							</tr>		
						</tbody>
					</table>
				<!--<table class="table table-hover table-striped table-bordered">
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
				</table>-->
			</div>			
        </div>
    </div>
</div>
</div>
