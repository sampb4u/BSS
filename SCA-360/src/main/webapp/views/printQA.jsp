 <style>
.styletr {border: 1px solid black;}


</style>
 
 <div id="content" ng-controller="printQAINTController" >
     <div  id="records" >
	 <br/><br/><br/>
	<div id="myDiv" style="border:thin solid #000000;height:auto;width:91%;margin-left:5%;">
	<table border="1" style="font-family:Arial, Helvetica, sans-serif; border-collapse:collapse; width:100%;" align="center">

<tr style="text-align:center;"><img src="images/Untitled.png" /></tr>


				
						
						<tr class="styletr"  style="height:40px;"><td style="border:solid 1px; padding-left:10px; width:10%;">SCA Claim No.</td><td style="border:solid 1px; padding-left:10px; width:10%;">{{qaIssue.scaClaimno}}</td><td style="border:solid 1px; padding-left:10px; width:10%;">Date:</td><td style="border:solid 1px; padding-left:10px; width:10%;">{{qaIssue.scaDate}}</td><td style="border:solid 1px; padding-left:10px; width:10%;">{{qaIssue.caseReferenceNumber}}</td><td style="border:solid 1px; padding-left:10px; width:10%;"></td></tr>		
						<tr class="styletr"  style="height:40px;"><td style="border:solid 1px; padding-left:10px; width:10%;">SHI Mfg. No.</td><td colspan="5"></td></tr>		
						<tr class="styletr"  style="height:40px;"><td style="border:solid 1px; padding-left:10px; width:10%;"> Item Description </td><td colspan="5"></td></tr>	
						<tr class="styletr"  style="height:40px;"><td style="border:solid 1px; padding-left:10px; width:10%;"> QA Issues For:</td><td colspan="5"> <ul><li>csdfd</li>
						<li>csdfd</li>
						<li>csdfd</li>
						<li>csdfd</li><li>csdfd</li></ul></td></tr>
						<tr class="styletr"  style="height:40px;"><td style="border:solid 1px; padding-left:10px; width:10%;"> Action Required :</td><td colspan="5"><ul><li>csdfd</li>
						<li>csdfd</li>
						<li>csdfd</li>
						<li>csdfd</li><li>csdfd</li></ul></td></tr>
					
						<table border="1" style="font-family:Arial, Helvetica, sans-serif;border-collapse:collapse; width:100%; border:thin 1px " align="center"><thead><th>Serial No</th><th>Order No</th><th>Part No</th><th>Quantity</th><th>Package No</th><th>Item Description</th><th>To Cliam</th></thead></table>
						<!--<tr><td colspan="1"></td><td colspan="2"><img src="images/one.png" /></td><td colspan="3"><img src="images/two.png" /></td></tr>
					<tr><td colspan="1"></td><td colspan="2">NG Part matches 39.2mm in AT6487G Drawing</td><td colspan="3"></td></tr>
						<tr><td colspan="1"></td><td colspan="2"><img src="images/three.png" /></td><td colspan="3"><img src="images/four.png" /></td></tr>-->
						
				</table>
	</div>			
 
 <%--<div class="row">
                            <div class="col-md-8">
                                <p><a ng-click="getprint();">Download PDF</a>
                                </p>
                            </div>
                        </div>--%>
 </div>
 </div>