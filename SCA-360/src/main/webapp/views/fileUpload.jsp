<style>
div
{
	font-family: Geneva, Arial, Helvetica, sans-serif;
	color:#666666;
}
.datePic > span:hover{cursor: pointer; background-color:#3F6}

</style>
<script>
$(function () {
  $(".dateCase").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());
}
);

</script>


<div ng-controller="fileUploadCtrl" ng-init="getAddNewCaseFormRow();">									
	<div class="well with-header with-footer">
      <div class="header bordered-blue">File Upload</div>
          <div class="row">
              <div class="col-sm-4">
                <!-- <input type="file" id="{{$index+1}}" name="file" multiple onchange="angular.element(this).scope().getFileDetails(this,this.id)" />-->
                           <!--<p ng-repeat="file in files"></p>  -->                       
                         <!--ADD A PROGRESS BAR ELEMENT.-->
                         <!--<p><progress id="pro" value="0"></progress></p>-->                                             
             </div>
              <div class="col-sm-2">
                                           <!--<input type="button" ng-click="uploadFiles()" value="Upload" />-->
                                      </div>                        
         </div>
         <br><br><br><br><br><br><br><br><br>
            <div class="row">
              <div class="col-sm-4">
                    <input type="file" id="file1" name="file" multiple ng-files="getTheFiles($files)" />
              </div> 
              <div class="col-sm-4">
                    <input type="button" ng-click="uploadFiles()" value="Upload" />
              </div>                        
         </div>

    </div>
</div>