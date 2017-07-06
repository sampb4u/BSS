
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
.icns
{
	font-size: 30px;
	color: #ffffff;
}
div,span{
	 font-family:Geneva, Arial, Helvetica, sans-serif;
	 /*color:#666666;*/
}

.block-mini {
    /*width: 45%;*/
    text-align: center;
    background: #b6b3b3;
    margin: 5px;
    display: inline-block;
    height: 100px;
	padding: 5px 0px 0px 0px;
	color:#ffffff;
	font-family:Geneva, Arial, Helvetica, sans-serif;
	text-decoration:none;
}
.block{
	width: 45%;
}
.block2{
	width: 30%;
}
.menu .block-mini.db-btn{
	background-color: #ffb848;;
	color:#ffffff;
}

.menu .block-mini.bg_ly{
	background: #27a9e3;;
	color:#ffffff;
}

.menu .block-mini.bg_lr{
	background: #2255a4;
	color:#ffffff;
}

.menu .block-mini.bg_lo{
	background: #da542e;
	color:#ffffff;
}
.menu .block-mini.bg_ls{
	background: #413b2f;
	color:#ffffff;
}

.menu .block-mini.db-lg{
	background: #1cb167;
	color:#ffffff;
}


.menu .block-mini:hover {
    background-color: #000;
    cursor:pointer;
	color:#ffffff;
	text-decoration:none;
	box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
	
}

.dbBtns
{
	font-size: 15px;
    margin: 10px 10px 10px 10px;
	color: #ffffff;
	font-family:Geneva, Arial, Helvetica, sans-serif;
}

.orders-num
{
	font-size: 15px;
    margin: 0px auto;
	color: #ffffff;
	font-family:Geneva, Arial, Helvetica, sans-serif;
}
.orders
{
	font-size: 10px;
    margin: 0px auto;
	color: #ffffff;
	font-family:Geneva, Arial, Helvetica, sans-serif;
}
div.polaroid {
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 5px 0px 0px 0px;
  padding: 4px;
  border: 0px solid #000;
}

div.container3 {
  text-align: center;
  padding: 5px 10px;
  font-family:Geneva, Arial, Helvetica, sans-serif;
}



.Customer-section{
	/*height: 100%;*/
	padding: 15px 0px 15px 0px;
	background: #fff;
}
.Contact-section {
    /*height: 100%;*/
	/*background: aqua;*/
	padding: 80px 0px 50px 0px;
}
.Quotes-section {
    /*height: 100%;*/
	/*background: aqua;*/
	padding: 80px 0px 50px 0px;
}
.Orders-section {
    /*height: 100%;*/
	/*background: #CF6;*/
	padding: 80px 0px 50px 0px;
}

.Cases-section {
   /* height: 100%;*/
	/*background: #0CF;*/
	padding: 80px 0px 50px 0px;
}
.History-section {
   /* height: 100%;*/
	/*background: #999;*/
	padding: 80px 0px 50px 0px;
}
.custDNA-section {
   /* height: 100%;*/
	/*background: #999;*/
	padding: 50px 0px 50px 0px;
}
.font-blue {
    color: #5db2ff !important;
}
.active2 {
       pointer-events: none;
       cursor: pointer;
    } 



</style>
<script>
$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});
</script>
<div ng-controller="customerDBController" ng-init="loadCustomersForDB(); loadAllCustomerDetails();">									
	<div class="well with-header with-footer">
      <div class="header bordered-blue" id="pageHeadding">Customer DashBoard</div>
	
       <form name="customerdashboardform" novalidate="novalidate">
             <div class="main-block">
                  <div class="row">
                        <div class="col-sm-4">
                            <div class="form-group floating-label-wrapper">
                               <span class="input-icon icon-right">
                                                          <label for="AccountCode"></label>
                                                        <input type="text" name="customerName" id="AccountCode" ng-model="customerName" placeholder="Type Customer Name" typeahead="customerName.name as customerName.name for customerName in customersData | filter:$viewValue | limitTo:10" typeahead-on-select='loadAllCustomerDetails($label);' typeahead-min-length='2' class="form-control" autocomplete="off" with-floating-label autofocus="autofocus"  tabindex="1">
                                                        <!--<i class="fa fa-search nav-search-icon"></i>-->
                                                  <i class="glyphicon glyphicon-search blue circular"></i>
                                                    </span>
                        </div>
                        </div>
                        <div class="col-sm-3">
                           <!--<a  href="#/app/customermaster" ng-click="editCustomerData();" class="tooltip-blue" tooltip-placement="bottom" tooltip="Edit"><span class="btn btn-primary"><i class="glyphicon glyphicon-pencil"></i>Edit Customer</span></a>-->
                           <a  href="#/app/customermaster" ng-click="editCustomerData();" id="editCust"><span class="btn btn-primary"><i class="glyphicon glyphicon-pencil"></i>Edit Customer</span></a>
                        </div>
                        <div class="col-sm-3">
                           <!--<a  href="#/app/customermaster"><span class="btn btn-success"><i class="fa fa-user-plus"></i>Add Customer</span></a>-->
                        </div>
                        
                 </div>
                   <br/>
                  <div class="row">
                           <div class="col-sm-3">
                                    <div class="container3">
                                        	<b>Logo</b>
                                      	</div>
                                    <div class="polaroid" style=" display:none;">
                                    
                                          <img src="{{getImage}}" alt="" style="width:100%; height:180px;">
                                      <!--<img src="image/rock.jpg" alt="" style="width:100%; height:180px;">-->
                                      <div class="container3" id="dynamic">
                                        <p>No Image Found</p>
                                      </div>
                                 </div>
                                <!--<div class="form-group">
                                     <img src="image/Flag_of_Sg.png" style="width:100%;height: 170px;"/>
                                </div>-->
                           </div>
                           <div class="col-sm-4">
                                <div class="menu">
                                    <div class="block-mini db-btn block"><span><a href="#Quotes"><i class="fa fa-inbox icns"></i><p class="dbBtns">Quotes </p></a></span></div>
                                    <div class="block-mini bg_ly block"><span><a href="#Orders"><i class="fa fa-signal icns"></i><p class="dbBtns">Orders</p></a></span></div>
                                    <div class="block-mini bg_lr block"><span><a href="#Cases"><i class="fa fa-briefcase icns"></i><p class="dbBtns">Cases</p></a></span></div>
                                    <div class="block-mini bg_lo block"><span><a href="#History"><i class="fa fa-book icns"></i><p class="dbBtns">History</p></a></span></div>
                                  </div>
                           </div>
                           <div class="col-sm-5">
                                <div class="menu">
                                    <div class="block-mini bg_ls block2"><span><i class="fa fa-users icns"></i><p class="orders-num">{{OpenQuotations}}</p><p class="orders">No.of Quotations</p></span></div>
                                    <div class="block-mini bg_lr block2"><span><i class="fa fa-bar-chart icns"></i><p class="orders-num">10</p><p class="orders">No.of Orders YTD</p></span></div>
                                    <div class="block-mini bg_lo block2"><span><i class="fa fa-cog icns"></i><p class="orders-num">USD&nbsp;120</p><p class="orders">Closed order Value</p></span></div>
                                    <div class="block-mini db-btn block2"><span><i class="fa fa-tag icns"></i><p class="orders-num">USD&nbsp;{{QuoteVal}}</p><p class="orders">Quotations Value</p></span></div>
                                     <div class="block-mini bg_ly block2"><span><i class="fa fa-magnet icns"></i><p class="orders-num">USD&nbsp;120</p><p class="orders">Order Value</p></span></div>
                                    <div class="block-mini db-lg block2"><span><i class="fa fa-usd icns"></i><p class="orders-num">USD&nbsp;{{opportunityAmount}}</p><p class="orders">Opportunity Amount</p></span></div>
                                </div>
                           </div>
                      </div> 
                   <br />
                    <div id='container-block'>
                        <div style="font-size:20px; position:fixed; top:40%; left:50%; display:none;" id="loading">
                            <img src="image/ajax-loader.gif"/> <br><span style="color:#5876D1; font-size:20px; margin-left:-25px;">Please Wait..</span>
                        </div>
                    </div>
                    <div class="content-block">
                          <section id="customer" class="Customer-section">
                          	     <div class="row">
                                <div class="col-xs-12 col-md-12">
                                    <div class="widget">
                                        <div class="widget-header  with-footer bg-palegreen">
                                            <span class="widget-caption">Customer Details</span>
                                            <div class="widget-buttons">
                                                <a href="" widget-maximize></a>
                                                <a href="" widget-collapse></a>
                                                <a href="" widget-dispose></a>
                                            </div>
                                        </div>
                                        <div class="widget-body">
                                            <!--<div class="alert alert-info fade in alert-radius-bordered alert-shadowed">
                                                <button class="close" data-dismiss="alert">
                                                    ×
                                                </button>
                                                <i class="fa-fw fa fa-info"></i>
                            
                                                <strong>Flip Scroll Table:</strong> Flips between horizontal and vertical scrolls according to page width
                                            </div>-->
                                            <div class="flip-scroll">
                                                <table class="table table-hover flip-content">
                                                    <!--<thead class="flip-content bordered-palegreen">
                                                        <tr>
                                                            <th>
                                                                
                                                            </th>
                                                            <th>
                                                                
                                                            </th>
                                                            <th>
                                                               
                                                            </th>
                                                            
                                                            <th>
                                                                
                                                            </th>
                                                        </tr>
                                                    </thead>-->
                                                    <tbody>
                                                           
                                                        <tr>
                                                            
                                                            <td> Account Id</td>
                                                            <td class="font-blue">{{account}}</td>
                                                            <td> Phone</td>
                                                            <td class="font-blue">{{phnumber}}</td>
                                                        </tr>
                                                        <tr>
                                                           
                                                            <td> Contact Name </td>
                                                            <td class="font-blue">{{contName}}</td>
                                                            <td> Email</td>
                                                            <td class="font-blue">{{email}}</td>
                                                        </tr>
                                                        <tr>
                                                            
                                                            <td>Customer Group </td>
                                                            <td class="font-blue">{{customerGroup}}</td>
                                                            <td> Mobile</td>
                                                            <td class="font-blue">{{mbnumber}}</td>
                                                        </tr>
                                                        <tr>
                                                            
                                                            <td> Country</td>
                                                            <td class="font-blue">{{billingCountries}}</td>
                                                            <td> Other Phone</td>
                                                            <td class="font-blue">{{ophnumber}}</td>
                                                        </tr>
                                                        <tr>
                                                            
                                                            <td> Application or Indusry </td>
                                                            <td class="font-blue">{{application}}</td>
                                                            <td> Fax</td>
                                                            <td class="font-blue">{{fax}}</td>
                                                        </tr>
                                                        <tr>
                                                           
                                                            <td> Salesman</td>
                                                            <td class="font-blue">{{salesPerson}}</td>
                                                            <td> Salesman Code</td>
                                                            <td class="font-blue">{{salesPersonCode}}</td>
                                                        </tr>
                                                        <tr>
                                                           
                                                            <td>Website</td>
                                                            <td class="font-blue">{{clientwebsite}}</td>
                                                            <td>Department</td>
                                                            <td class="font-blue">{{departmentname}}</td>
                                                        </tr>
                                                        <!--<tr>
                                                            
                                                            <td> Lead Source</td>
                                                            <td></td>
                                                            <td> Served by Salesman</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            
                                                            <td> Departmenmt </td>
                                                            <td></td>
                                                            <td> Fax</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            
                                                            <td> Mailing Address </td>
                                                            <td></td>
                                                            <td> Salesman Code</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                           
                                                            <td> </td>
                                                            <td></td>
                                                            <td> Discount Multiplier</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            
                                                            <td> Languages</td>
                                                            <td></td>
                                                            <td> Payment terms</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            
                                                            <td> Mailing Address </td>
                                                            <td></td>
                                                            <td> Salesman Code</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                           
                                                            <td> </td>
                                                            <td></td>
                                                            <td> Last Modified By</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            
                                                            <td> </td>
                                                            <td></td>
                                                            <td> Created by</td>
                                                            <td></td>
                                                        </tr>-->
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           </div>
                          </section>
                          <section id="contacts" class="Contact-section">
                             <!--<div class="row">
                           		 <div class="col-sm-12">
                                <div class="widget">
                                    <div class="widget-header ">
                                        <span class="widget-caption">Contact Details</span>
                                        <div class="widget-buttons">
                                            <a href="" widget-maximize></a>
                                            <a href="" widget-collapse></a>
                                            <a href="" widget-dispose></a>
                                        </div>
                                    </div>
                                    <div class="widget-body">
                                      <div class="table-responsive">
                                        <table class="table table-bordered table-striped table-hover">
                                            <thead class="bordered-blue">
                                                <tr>
                                                    
                                                    <th style="width: 25%">Contact Name</th>
                                                    <th style="width: 25%">Telephone</th>
                                                    <th style="width: 25%">Mobile</th>
                                                    <th style="width: 25%">Email</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr ng-repeat="custContact in data">
                                                  
                                                   <td>{{custContact.contactName}}</td>
                                                   <td>{{custContact.contactNumber}}</td>
                                                   <td>{{custContact.contactAltNumber}}</td>
                                                   <td>{{custContact.emailAddr}}</td>
                                                </tr>
                                        </tbody>
                                        </table>
                                       </div>
                                    </div>
                                </div>
                            </div>
                            </div>-->
                             <div class="row">
                            <div class="col-sm-12">
                                <div class="widget">
                                    <div class="widget-header bg-palegreen">
                                        <span class="widget-caption">Contact Details</span>
                                        
                                        <div class="widget-buttons">
                                            <a href="" widget-maximize></a>
                                            <a href="" widget-collapse></a>
                                            <a href="" widget-dispose></a>
                                        </div>
                                    </div>
                                    <div class="widget-body">
                                        <div class="table-responsive">
                                        <table class="table table-bordered table-striped table-hover">
                                            <thead class="bordered-blue">
                                                <tr>
                                                    <th style="width: 10%">SNO.</th>
                                                    <th style="width: 25%">Contact Name</th>
                                                    <th style="width: 20%">Telephone</th>
                                                    <th style="width: 20%">Mobile</th>
                                                    <th style="width: 25%">Email</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr ng-repeat="custContact in data">
                                                   <td align="center">{{custContact.id}}</td>
                                                   <td>{{custContact.contactName}}</td>
                                                   <td>{{custContact.contactNumber}}</td>
                                                   <td>{{custContact.contactAltNumber}}</td>
                                                   <td>{{custContact.emailAddr}}</td>
                                                </tr>
                                                 <!--<tr>
                                                   <td align="center">{{$index+1}}</td>
                                                   <td></td>
                                                   <td></td>
                                                   <td></td>
                                                   <td></td>
                                                 </tr>-->
                                                 
                                        </tbody>
                                        </table>
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                          </section>
                          <section id="Quotes" class="Quotes-section">
                            <div class="row">
                            <div class="col-sm-12">
                                <div class="widget">
                                    <div class="widget-header bg-palegreen">
                                        <span class="widget-caption">Open Quotations</span>
                                        <span class="widget-caption">
                                            <a href="#/app/addedQuotation"><span class="btn btn-primary">
                                                <i class="fa fa-pencil"></i>Added Quotations
                                            </span></a>
                            			 </span>
                                        <div class="widget-buttons">
                                            <a href="" widget-maximize></a>
                                            <a href="" widget-collapse></a>
                                            <a href="" widget-dispose></a>
                                        </div>
                                    </div>
                                    <div class="widget-body">
                                        <div class="table-responsive">
                                        <table class="table table-bordered table-striped table-hover">
                                            <thead class="bordered-blue">
                                                <tr>
                                                    <th style="width: 10%">SNO.</th>
                                                    <th style="width: 25%">Quote No.</th>
                                                    <th style="width: 25%">Quotation Type</th>
                                                    <th style="width: 20%">Date of Quotation</th>
                                                    <th style="width: 20%">Probility</th>
                                                </tr>
                                            </thead>
                                            <tbody id="qtnblk">
                                                <tr ng-repeat="custQuote in quoteArray">
                                                   <td align="center">{{custQuote.id}}</td>
                                                   <td>{{custQuote.qtnNo}}</td>
                                                   <td>{{quotationType}}</td>
                                                   <td>{{custQuote.dateQuote}}</td>
                                                   <td></td>
                                                   <!--<td>{{custQuote.probility}}</td>-->
                                                </tr>
                                               
                                        </tbody>
                                        </table>
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                          </section>
                          <section id="Orders" class="Orders-section">
                         	 <div class="row">
                                <div class="col-sm-12">
                                    <div class="widget">
                                        <div class="widget-header bg-palegreen">
                                            <span class="widget-caption">Open Orders</span>
                                            <div class="widget-buttons">
                                                <a href="" widget-maximize></a>
                                                <a href="" widget-collapse></a>
                                                <a href="" widget-dispose></a>
                                            </div>
                                        </div>
                                        <div class="widget-body">
                                           <div class="table-responsive">
                                            <table class="table table-bordered table-striped table-hover">
                                                <thead class="bordered-blue">
                                                    <tr>
                                                        <th style="width: 10%">SNO.</th>
                                                        <th style="width: 25%">Order No.</th>
                                                        <th style="width: 25%">Booking Date</th>
                                                        <th style="width: 25%">Order Value (USD)</th>
                                                        <th style="width: 25%">Currency</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                   <tr ng-repeat="custOrder in OrderArray">
                                                       <td align="center">{{custOrder.id}}</td>
                                                       <td></td>
                                                       <td></td>
                                                       <td></td>
                                                       <td></td>
                                                    </tr>
                                                    <!--<tr>
                                                       <td>2</td>
                                                       <td></td>
                                                       <td></td>
                                                       <td></td>
                                                    </tr>-->
                                                </tbody>
                                            </table>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                          </div>
                          </section>
                          <section id="Cases" class="Cases-section">
                         	 <div class="row">
                                <div class="col-sm-12">
                                    <div class="widget">
                                        <div class="widget-header bg-palegreen">
                                            <span class="widget-caption">Open Cases</span>
                                            <span class="widget-caption">
                                            <a href="#/app/addNewCase"><span class="btn btn-primary">
                                                <i class="fa fa-pencil"></i>Added Cases
                                            </span></a>
                            			 </span>
                                            <div class="widget-buttons">
                                                <a href="" widget-maximize></a>
                                                <a href="" widget-collapse></a>
                                                <a href="" widget-dispose></a>
                                            </div>
                                        </div>
                                        <div class="widget-body">
                                          <div class="table-responsive">
                                            <table class="table table-bordered table-striped table-hover">
                                                <thead class="bordered-blue">
                                                    <tr>
                                                        <th style="width: 10%">SNO.</th>
                                                        <th style="width: 15%">Case Ref.</th>
                                                        <th style="width: 15%">Case Type</th>
                                                        <th style="width: 20%">Assign To</th>
                                                        <th style="width: 20%">Created Date</th>
                                                        <th style="width: 20%">Exp Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="caseblk">
                                                   <tr ng-repeat="custCases in caseArray">
                                                       <td align="center">{{custCases.id}}</td>
                                                       <td>{{custCases.caseRef}}</td>
                                                       <td>{{custCases.caseType}}</td>
                                                       <td>{{custCases.assignto}}</td>
                                                       <td>{{custCases.dateCase}}</td>
                                                       <td>{{custCases.dateexp}}</td>
                                                    </tr>
                                                    <!--<tr>
                                                       <td>2</td>
                                                       <td></td>
                                                       <td></td>
                                                       <td></td>
                                                       <td></td>
                                                    </tr>-->
                                                </tbody>
                                            </table>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                          </div>
                          </section>
                          <section id="History" class="History-section">
                         	 <div class="row">
                                <div class="col-sm-12">
                                    <div class="widget">
                                        <div class="widget-header bg-palegreen">
                                            <span class="widget-caption">Order History</span>
                                            <div class="widget-buttons">
                                                <a href="" widget-maximize></a>
                                                <a href="" widget-collapse></a>
                                                <a href="" widget-dispose></a>
                                            </div>
                                        </div>
                                        <div class="widget-body">
                                           <div class="table-responsive">
                                            <table class="table table-bordered table-striped table-hover">
                                                <thead class="bordered-blue">
                                                    <tr>
                                                        <th style="width: 10%">SNO.</th>
                                                        <th style="width: 25%">Order No.</th>
                                                        <th style="width: 25%">Booking Date</th>
                                                        <th style="width: 25%">Close Date</th>
                                                        <th style="width: 25%">Order Value</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr ng-repeat="custHistory in HistoryArray">
                                                       <td align="center">{{custHistory.id}}</td>
                                                       <td></td>
                                                       <td></td>
                                                       <td></td>
                                                       <td></td>
                                                    </tr>
                                                    <!--<tr>
                                                       <td>2</td>
                                                       <td></td>
                                                       <td></td>
                                                       <td></td>
                                                       <td></td>
                                                    </tr>-->
                                                </tbody>
                                            </table>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                          </div>
                          </section>
                          <section id="custDNA" class="custDNA-section">
                         	 <div class="row">
                               <div class="col-sm-12">
                                    <div class="form-group">
                                         <textarea class="form-control" id="textareaanimated" name="dnaRemarks" rows="8" ng-model="dnaRemarks" placeholder="Customer DNA" ui-jq="autosize" ui-options="{ append: '\n' }"></textarea>
                                    </div>
                               </div>
                            </div>
                            <div class="row" align="center">
                                  <div class="col-sm-12">
                                    <button type="button" class="btn btn-primary" ng-click="getAddedRemarks(dnaRemarks);">Update DNA</button>
                                 </div>
                            </div>
                          </section>
                      </div>   
            </div>
       </form>

	</div>		
									

</div>








