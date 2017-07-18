(function() {
    'use strict';

    var downloadModule = angular.module('components.download', []);

    downloadModule.factory('downloadService', ['$q', '$timeout', '$window',
        function($q, $timeout, $window) {
            return {
                download: function(name) {

                    var defer = $q.defer();

                    $timeout(function() {
                    	var downloadPath = '/SCA-360/getlink.do?name=' + name;
                        $window.open(downloadPath, '_blank', '');
                         //   $window.location = '

                        }, 1000)
                        .then(function() {
                            defer.resolve('success');
                        }, function() {
                            defer.reject('error');
                        });
                    return defer.promise;
                }
            };
        }
    ]);
})();