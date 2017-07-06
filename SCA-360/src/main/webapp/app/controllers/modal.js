'use strict';
angular.module('app', [])
.controller('ModalDemoCtrl', function ($scope, $modal, $log) {
alert(1);
   

    $scope.open = function (windowClass, templateUrl,size) {
alert(1);
        var modalInstance = $modal.open({
            windowClass: windowClass,
            templateUrl: templateUrl,
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
	
	
	    $scope.rows = [];
        //$scope.sparepartsrows = ['Row1'];
		//$scope.projectrows = ['Row1'];
       // $scope.counter =  0;
		$index = 0;
	  // $scope.specificationCounter = 3;
		/*$scope.addRow = function() {
        $scope.rows.push('Row ' + $scope.counter);
        $scope.counter++;
        }
		  $scope.deleteRow = function()
		  {
			  $scope.rows.pop('Row ' + $scope.counter);
			$scope.counter--;
		  };
		  $scope.addsparepartsTableRow = function()
		  {
			   $scope.sparepartsrows.push('Row ' + $scope.counter);
			$scope.counter++;
		  };
		   $scope.addprojectTableRow = function()
		  {
				  
			   $scope.projectrows.push('Row ' + $scope.counter);
			 $scope.counter++;
		  };*/
		
		//-----------Add Row ------
		        
				$scope.addExtentField = function() 
				{
					 $index++;
				    $scope.rows.push({'id':$index})
				};		 		 		
				//------------Delete Row from table---
				$scope.removeExtent = function(id)
				{		
					var comArr = eval( $scope.rows );
					
					for( var i = 1; i < comArr.length; i++ ) 
					{	
						if( comArr[i].id == id ) 
						{
							
							Index = i;
							break;
						}				
					}
					$scope.rows.splice( Index, 1 );
		  	    };		
		
		
		});

          		
				
				
 

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.
'use strict';
angular.module('app', [])

.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

   
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});