var app = angular.module('myApp', []);
app.directive('withFloatingLabel', function () 
	 {
	    return {
    	    restrict: 'A',
        	link: function ($scope, $element, attrs) {
            var template = '<div class="floating-label">' + attrs.placeholder +'</div>';

            //append floating label template
            $element.after(template);

            //remove placeholder
            $element.removeAttr('placeholder');

            //hide label tag assotiated with given input
            document.querySelector('label[for="' +  attrs.id +  '"]').style.display = 'none';

            $scope.$watch(function () {
                if($element.val().toString().length < 1) {
                    $element.addClass('empty');
                } else {
                    $element.removeClass('empty');
                }
            });
	        }
    	};
	});
app.controller('myCtrl', function($scope) {
    $scope.loadAddedCountry = function()
			{
		        
		         $scope.availableData = [
			  { id: 'A00', country: 'Output Shaft Clockwise-A00'},
			  { id: 'A01', country: 'Output Shaft Anti-Clockwise-A01'},
			  { id: 'A02', country: 'Output Shaft Dual Direction-A02'},
			  { id: 'A10', country: 'Outdoor Type-A11'},
			  { id: 'A11', country: 'Dust-Proof Type-A11'},
			  { id: 'A12', country: 'Heavy Dust-Proof Type-A12'},
			  { id: 'A13', country: 'Water proof-A13'},
			  { id: 'A14', country: 'Marine Duty-A14'},
			  { id: 'A19', country: 'Special spec. for ship turning gear; N21; N26; N43-A19'},
			  { id: 'A1A', country: 'Light Duty Washdown-A1A'},
			  { id: 'A1B', country: 'Plant Washdown-A1B'}
			];
			var data = 	$scope.availableCode;
				$scope.countryData=data;
				var optionValues="";
				      optionValues="<option value=''>Select</option>";
						for(var i=0;i<data.length;i++)
						{
							optionValues +="<option value='"+data[i].id+"'>"+data[i].country+"</option>";
						}
						$('#Country').empty();
						var newOption = $(optionValues);
						$('#Country').append(newOption);				
						$('#Country').trigger("chosen:updated");
					//alert(JSON.stringify(data));
			//alert(JSON.stringify($scope.countryData));
          }
		  
		  $scope.loadAddedCustomers = function()
			{
				/*var httpRequest = $http({
					method: 'POST',
					url : "/SCA-360/loadDropDown.do",
					data: jsonStringSalesmanDropDown,
				   }).success(function(data, status) 
					{
						
						$scope.salesmanCode=data;
	
						var optionValues="";
						for(var i=0;i<data.length;i++)
						{
							optionValues +="<option value='"+data[i].salesmancode+"'>"+data[i].name+"</option>";
						}				
						$('#picturegallery').empty();
						var newOption = $(optionValues);
						$('#picturegallery').append(newOption);				
						$('#picturegallery').trigger("chosen:updated");											
					}); */
			$scope.availableCode = [
			  { id: 'A00', country: 'Output Shaft Clockwise-A00'},
			  { id: 'A01', country: 'Output Shaft Anti-Clockwise-A01'},
			  { id: 'A02', country: 'Output Shaft Dual Direction-A02'},
			  { id: 'A10', country: 'Outdoor Type-A11'},
			  { id: 'A11', country: 'Dust-Proof Type-A11'},
			  { id: 'A12', country: 'Heavy Dust-Proof Type-A12'},
			  { id: 'A13', country: 'Water proof-A13'},
			  { id: 'A14', country: 'Marine Duty-A14'},
			  { id: 'A19', country: 'Special spec. for ship turning gear; N21; N26; N43-A19'},
			  { id: 'A1A', country: 'Light Duty Washdown-A1A'},
			  { id: 'A1B', country: 'Plant Washdown-A1B'}
			];
				var data = 	$scope.availableCode;
				$scope.salesmanCode=data;
				var optionValues="";
						for(var i=0;i<data.length;i++)
						{
							optionValues +="<option value='"+data[i].id+"'>"+data[i].country+"</option>";
						}
						$('#CountryName').empty();
						var newOption = $(optionValues);
						$('#CountryName').append(newOption);				
						$('#CountryName').trigger("chosen:updated");
					//alert(JSON.stringify(newOption));
			};
});