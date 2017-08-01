'use strict';
angular.module('app')
    .run(
        [
            '$rootScope', '$state', '$stateParams',
            function($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(
        [
            '$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {

                $urlRouterProvider
                    .otherwise('/app/dashboard');
                $stateProvider
                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'views/layout.html'
                    })
                    .state('app.dashboard', {
						   
                        url: '/dashboard',
                        templateUrl: 'views/dashboard.html',
                        ncyBreadcrumb: {
                            label: 'Dashboard',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
										       'lib/bootstrap.min.js',
											   //'lib/bootstrap.min.css',
                                            //'lib/jquery/charts/sparkline/jquery.sparkline.js',
//                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
//                                            'lib/jquery/charts/flot/jquery.flot.js',
//                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
//                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
//                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
//                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                             'app/controllers/dashboard.js',
											 'app/controllers/datatable.js',
											  'lib/jquery/textarea/jquery.autosize.js',
											 //'app/controllers/nggrid.js',
                                             //'lib/scrollDown/css/scrolling-nav.css',
                                             'lib/scrollDown/js/jquery.easing.min.js',
                                             'lib/scrollDown/js/scrolling-nav.js',
//                                             'lib/jquery/datatable/dataTables.tableTools.min.js',
//                                             'lib/jquery/datatable/dataTables.bootstrap.min.js'
//                                            'app/directives/realtimechart.js',
											//'lib/css/matrix-style.css',
											//'lib/css/matrix-media.css'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					
									
					
					
					
                    .state('persian', {
                        abstract: true,
                        url: '/persian',
                        templateUrl: 'views/layout-persian.html'
                    })
                    .state('persian.dashboard', {
                        url: '/dashboard',
                        templateUrl: 'views/dashboard-persian.html',
                        ncyBreadcrumb: {
                            label: 'داشبورد'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('arabic', {
                        abstract: true,
                        url: '/arabic',
                        templateUrl: 'views/layout-arabic.html'
                    })
                    .state('arabic.dashboard', {
                        url: '/dashboard',
                        templateUrl: 'views/dashboard-arabic.html',
                        ncyBreadcrumb: {
                            label: 'لوحة القيادة'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('app.productionManagement', {
                        url: '/ProductionManagement',
                        templateUrl: 'views/ProductionManagement.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'app/directives/realtimechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.selection.js',
                                            'lib/jquery/charts/flot/jquery.flot.crosshair.js',
                                            'lib/jquery/charts/flot/jquery.flot.stack.js',
                                            'lib/jquery/charts/flot/jquery.flot.time.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/morris/raphael-2.0.2.min.js',
                                            'lib/jquery/charts/chartjs/chart.js',
                                            'lib/jquery/charts/morris/morris.js',
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            //'app/controllers/databoxes.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					
					.state('app.selectionresult', {
                        url: '/selectionresult',
                        templateUrl: 'views/selectionresult.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'app/directives/realtimechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.selection.js',
                                            'lib/jquery/charts/flot/jquery.flot.crosshair.js',
                                            'lib/jquery/charts/flot/jquery.flot.stack.js',
                                            'lib/jquery/charts/flot/jquery.flot.time.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/morris/raphael-2.0.2.min.js',
                                            'lib/jquery/charts/chartjs/chart.js',
                                            'lib/jquery/charts/morris/morris.js',
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            //'app/controllers/databoxes.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					
					
					/*.state('app.customermaster', {
                        url: '/customermaster',
                        templateUrl: 'views/CustomerMaster.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    'app/controllers/nggrid.js',
													//'app/controllers/modal.js',
                                                   // 'lib/jquery/datatable/dataTables.bootstrap.css',
                                                  //  'lib/jquery/datatable/jquery.dataTables.min.js',
                                                   // 'lib/jquery/datatable/ZeroClipboard.js',
                                                  //  'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                   // 'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                 //   'app/controllers/datatable.js',
													'lib/bootstrap.min.js',
													'lib/Custom_Popup.css',
													'lib/jquerydatepicker/jquery-ui.js',
													'lib/jquerydatepicker/jquery-ui.css'
													//'lib/dateRangePicFromTo/css/ui-lightness/jquery-ui-1.8.21.custom.css',
													//'lib/dateRangePicFromTo/js/jquery-ui-1.8.21.custom.min.js',
													//'lib/dateRangePicFromTo/js/jquery-migrate-1.0.0.js',
													//'lib/liveSearch/js/jquery-ui.js',
													//'lib/liveSearch/css/jquery-ui.css'
													//'lib/jquery/inputmask/jasny-bootstrap.min.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })*/
					.state('app.customermaster', {
                        url: '/customermaster',
                        templateUrl: 'views/CustomerMaster.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid','ui.select']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                     'app/controllers/nggrid.js',
													// 'app/controllers/modal.js',
                                                    // 'lib/jquery/datatable/dataTables.bootstrap.css',
													 'lib/bootstrap.min.js',
													 'lib/Custom_Popup.css',
													 'lib/jquerydatepicker/jquery-ui.js',
													 'lib/jquerydatepicker/jquery-ui.css'
													// 'lib/dateRangePicFromTo/css/ui-lightness/jquery-ui-1.8.21.custom.css',
													// 'lib/dateRangePicFromTo/js/jquery-ui-1.8.21.custom.min.js',
													// 'lib/dateRangePicFromTo/js/jquery-migrate-1.0.0.js'
//													 'lib/search_multiselect/css/prism.css'
													 
													 
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					.state('app.ProspectMaster', {
                        url: '/ProspectMaster',
                        templateUrl: 'views/prospectMaster.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid','ui.select']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                     'app/controllers/nggrid.js',
													// 'app/controllers/modal.js',
                                                    // 'lib/jquery/datatable/dataTables.bootstrap.css',
													 'lib/bootstrap.min.js',
													 'lib/Custom_Popup.css',
													 'lib/jquerydatepicker/jquery-ui.js',
													 'lib/jquerydatepicker/jquery-ui.css'
													// 'lib/dateRangePicFromTo/css/ui-lightness/jquery-ui-1.8.21.custom.css',
													// 'lib/dateRangePicFromTo/js/jquery-ui-1.8.21.custom.min.js',
													// 'lib/dateRangePicFromTo/js/jquery-migrate-1.0.0.js'
//													 'lib/search_multiselect/css/prism.css'
													 
													 
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					
					
					.state('app.salesmanmaster', {
                        url: '/salesmanmaster',
                        templateUrl: 'views/salesmanmaster.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                              'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                            //'app/controllers/databoxes.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					
					.state('app.salesmanIndices', {
                        url: '/salesmanIndices',
                        templateUrl: 'views/salesmanIndices.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                              'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                            //'app/controllers/databoxes.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					
					.state('app.SalesEnquiry', {
                        url: '/SalesEnquiry',
                        templateUrl: 'views/SalesEnquiry.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                              'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                            //'app/controllers/databoxes.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.updateprogress', {
                        url: '/updateprogress',
                        templateUrl: 'views/updateprogress.jsp',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                              'app/controllers/nggrid.js'
													
                                            //'app/controllers/databoxes.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.salesreport', {
                        url: '/salesreport',
                        templateUrl: 'views/salesreport.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                               'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js',
													'lib/jquerydatepicker/jquery-ui.js',
													'lib/jquerydatepicker/jquery-ui.css'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.ProductSelection', {
                        url: '/ProductSelection',
                        templateUrl: 'views/ProductSelection.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                               'app/controllers/nggrid.js',
													'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
													'lib/demo_style.css',
													'lib/smart_wizard_vertical.css',
													'lib/jquery.smartWizard.js',
                                                    'app/controllers/datatable.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })					
					//===========Group By Area All Countries YTD Start==============//
					
					
					/*.state('app.SCA_groupByArea_angularFC', {
                        url: '/SCA_groupByArea_angularFC',
                        templateUrl: 'views/SCA_groupByArea_angularFC.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
												
	                                                   'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js',
													   'lib/hexagons.min.js',
													   'lib/hexagons.min.css',
													   'lib/famfamfam_flags-master/famfamfam-flags.css'
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })*/
					.state('app.SCA_groupByArea', {
                        url: '/SCA_groupByArea',
                        templateUrl: 'views/SCA_groupByArea.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
													'app/controllers/nggrid.js',
													'lib/bootstrap.min.js',
	                                                'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                    'lib/jquery/charts/fusion/fusioncharts.theme.fint.js',
													'lib/hexagons.min.js',
													'lib/hexagons.min.css',
													'lib/famfamfam_flags-master/famfamfam-flags.css'                                                   																									
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })	
					.state('app.Thailand_groupByArea', {
                        url: '/Thailand_groupByArea',
                        templateUrl: 'views/Thailand_groupByArea.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
												
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Malaysia_groupByArea', {
                        url: '/Malaysia_groupByArea',
                        templateUrl: 'views/Malaysia_groupByArea.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
												
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })	
					.state('app.Indonesia_groupByArea', {
                        url: '/Indonesia_groupByArea',
                        templateUrl: 'views/Indonesia_groupByArea.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
												
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Singapore_groupByArea', {
                        url: '/Singapore_groupByArea',
                        templateUrl: 'views/Singapore_groupByArea.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
												
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					
					.state('app.Philippines_groupByArea', {
                        url: '/Philippines_groupByArea',
                        templateUrl: 'views/Philippines_groupByArea.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
												
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					
					.state('app.India_groupByArea', {
                        url: '/India_groupByArea',
                        templateUrl: 'views/India_groupByArea.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
												
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Vietnam_groupByArea', {
                        url: '/Vietnam_groupByArea',
                        templateUrl: 'views/Vietnam_groupByArea.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
												
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Other_groupByArea', {
                        url: '/Other_groupByArea',
                        templateUrl: 'views/Other_groupByArea.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
												
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Australia_groupByArea', {
                        url: '/Australia_groupByArea',
                        templateUrl: 'views/Australia_groupByArea.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
												
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
				//===========Group By Area All Countries YTD End==============//
				
				//===========Group By ProductShare All Countries  Start==============//
					.state('app.groupByProductShare', {
                        url: '/groupByProductShare',
                        templateUrl: 'views/groupByProductShare.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                   
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.SCA_groupByProductShare', {
                        url: '/SCA_groupByProductShare',
                        templateUrl: 'views/SCA_groupByProductShare.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                   
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js',
													  'lib/hexagons.min.js',
													  'lib/hexagons.min.css',
													  'lib/famfamfam_flags-master/famfamfam-flags.css'													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })	
					.state('app.Thailand_groupByProductShare', {
                        url: '/Thailand_groupByProductShare',
                        templateUrl: 'views/Thailand_groupByProductShare.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                   
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js',
													  'lib/hexagons.min.js',
													  'lib/hexagons.min.css',
													  'lib/famfamfam_flags-master/famfamfam-flags.css'													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Malaysia_groupByProductShare', {
                        url: '/Malaysia_groupByProductShare',
                        templateUrl: 'views/Malaysia_groupByProductShare.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                   
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js',
													  'lib/hexagons.min.js',
													  'lib/hexagons.min.css',
													  'lib/famfamfam_flags-master/famfamfam-flags.css'													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Indonesia_groupByProductShare', {
                        url: '/Indonesia_groupByProductShare',
                        templateUrl: 'views/Indonesia_groupByProductShare.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                   
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js',
													  'lib/hexagons.min.js',
													  'lib/hexagons.min.css',
													  'lib/famfamfam_flags-master/famfamfam-flags.css'													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Singapore_groupByProductShare', {
                        url: '/Singapore_groupByProductShare',
                        templateUrl: 'views/Singapore_groupByProductShare.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                   
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js',
													  'lib/hexagons.min.js',
													  'lib/hexagons.min.css',
													  'lib/famfamfam_flags-master/famfamfam-flags.css'													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					
					.state('app.Philippines_groupByProductShare', {
                        url: '/Philippines_groupByProductShare',
                        templateUrl: 'views/Philippines_groupByProductShare.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                   
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js',
													  'lib/hexagons.min.js',
													  'lib/hexagons.min.css',
													  'lib/famfamfam_flags-master/famfamfam-flags.css'													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.India_groupByProductShare', {
                        url: '/India_groupByProductShare',
                        templateUrl: 'views/India_groupByProductShare.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                   
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js',
													  'lib/hexagons.min.js',
													  'lib/hexagons.min.css',
													  'lib/famfamfam_flags-master/famfamfam-flags.css'													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Vietnam_groupByProductShare', {
                        url: '/Vietnam_groupByProductShare',
                        templateUrl: 'views/Vietnam_groupByProductShare.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                   
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js',
													  'lib/hexagons.min.js',
													  'lib/hexagons.min.css',
													  'lib/famfamfam_flags-master/famfamfam-flags.css'													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Other_groupByProductShare', {
                        url: '/Other_groupByProductShare',
                        templateUrl: 'views/Other_groupByProductShare.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                   
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js',
													  'lib/hexagons.min.js',
													  'lib/hexagons.min.css',
													  'lib/famfamfam_flags-master/famfamfam-flags.css'													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Australia_groupByProductShare', {
                        url: '/Australia_groupByProductShare',
                        templateUrl: 'views/Australia_groupByProductShare.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                   
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js',
													  'lib/hexagons.min.js',
													  'lib/hexagons.min.css',
													  'lib/famfamfam_flags-master/famfamfam-flags.css'													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					
						//===========Group By ProductShare All Countries  End==============//
						
				//===========Group By Product All Countries YTD  Start==============//		
					.state('app.groupByProduct', {
                        url: '/groupByProduct',
                        templateUrl: 'views/groupByProduct.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                   
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
                                        ]
                                    });
                                }
                            ]
                        }
                    })	
					
					.state('app.SCA_GroupByProduct_YTD', {
                        url: '/SCA_GroupByProduct_YTD',
                        templateUrl: 'views/SCA_GroupByProduct_YTD.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                   
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js',
													  'lib/hexagons.min.js',
													  'lib/hexagons.min.css',
													  'lib/famfamfam_flags-master/famfamfam-flags.css'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Thailand_GroupByProduct_YTD', {
                        url: '/Thailand_GroupByProduct_YTD',
                        templateUrl: 'views/Thailand_GroupByProduct_YTD.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                   
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Malaysia_GroupByProduct_YTD', {
                        url: '/Malaysia_GroupByProduct_YTD',
                        templateUrl: 'views/Malaysia_GroupByProduct_YTD.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                   
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					
					.state('app.Indonesia_GroupByProduct_YTD', {
                        url: '/Indonesia_GroupByProduct_YTD',
                        templateUrl: 'views/Indonesia_GroupByProduct_YTD.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                   
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					
					.state('app.Singapore_GroupByProduct_YTD', {
                        url: '/Singapore_GroupByProduct_YTD',
                        templateUrl: 'views/Singapore_GroupByProduct_YTD.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                   
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Philippines_GroupByProduct_YTD', {
                        url: '/Philippines_GroupByProduct_YTD',
                        templateUrl: 'views/Philippines_GroupByProduct_YTD.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                   
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.India_GroupByProduct_YTD', {
                        url: '/India_GroupByProduct_YTD',
                        templateUrl: 'views/India_GroupByProduct_YTD.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                   
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					//.state('app.India_GroupByProduct_YTD', {
//                        url: '/India_GroupByProduct_YTD',
//                        templateUrl: 'views/India_GroupByProduct_YTD.html',
//                        ncyBreadcrumb: {
//                            label: '',
//                            description: ''
//                        },
//                        resolve: {
//                            deps: [
//                                '$ocLazyLoad',
//                                function($ocLazyLoad) {
//                                    return $ocLazyLoad.load({
//                                        serie: true,
//                                        files: [
//                                                   
//	                                                   'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                  																									
//                                        ]
//                                    });
//                                }
//                            ]
//                        }
//                    })
					.state('app.Vietnam_GroupByProduct_YTD', {
                        url: '/Vietnam_GroupByProduct_YTD',
                        templateUrl: 'views/Vietnam_GroupByProduct_YTD.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                   
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Other_GroupByProduct_YTD', {
                        url: '/Other_GroupByProduct_YTD',
                        templateUrl: 'views/Other_GroupByProduct_YTD.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                   
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Australia_GroupByProduct_YTD', {
                        url: '/Australia_GroupByProduct_YTD',
                        templateUrl: 'views/Australia_GroupByProduct_YTD.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                   
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					//===========Group By Product All Countries YTD  End==============//		
					
					//=======Booking By Industry All Countries YTD Start======//
					
					.state('app.bookingByIndustry', {
                        url: '/bookingByIndustry',
                        templateUrl: 'views/bookingByIndustry.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    														                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   												
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.SCA_bookingByIndustry', {
                        url: '/SCA_bookingByIndustry',
                        templateUrl: 'views/SCA_bookingByIndustry.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js',
													  'lib/hexagons.min.js',
													  'lib/hexagons.min.css',
													  'lib/famfamfam_flags-master/famfamfam-flags.css'													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Thailand_bookingByIndustry', {
                        url: '/Thailand_bookingByIndustry',
                        templateUrl: 'views/Thailand_bookingByIndustry.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
													 // 'lib/hexagons.min.js',
													 // 'lib/hexagons.min.css',
													 // 'lib/famfamfam_flags-master/famfamfam-flags.css'													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Malaysia_bookingByIndustry', {
                        url: '/Malaysia_bookingByIndustry',
                        templateUrl: 'views/Malaysia_bookingByIndustry.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
													  //'lib/hexagons.min.js',
//													  'lib/hexagons.min.css',
//													  'lib/famfamfam_flags-master/famfamfam-flags.css'													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Indonesia_bookingByIndustry', {
                        url: '/Indonesia_bookingByIndustry',
                        templateUrl: 'views/Indonesia_bookingByIndustry.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
													 // 'lib/hexagons.min.js',
//													  'lib/hexagons.min.css',
//													  'lib/famfamfam_flags-master/famfamfam-flags.css'													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Singapore_bookingByIndustry', {
                        url: '/Singapore_bookingByIndustry',
                        templateUrl: 'views/Singapore_bookingByIndustry.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
													 /* 'lib/hexagons.min.js',
													  'lib/hexagons.min.css',
													  'lib/famfamfam_flags-master/famfamfam-flags.css'	*/												
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Philippines_bookingByIndustry', {
                        url: '/Philippines_bookingByIndustry',
                        templateUrl: 'views/Philippines_bookingByIndustry.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
													 // 'lib/hexagons.min.js',
//													  'lib/hexagons.min.css',
//													  'lib/famfamfam_flags-master/famfamfam-flags.css'													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.India_bookingByIndustry', {
                        url: '/India_bookingByIndustry',
                        templateUrl: 'views/India_bookingByIndustry.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
													 // 'lib/hexagons.min.js',
//													  'lib/hexagons.min.css',
//													  'lib/famfamfam_flags-master/famfamfam-flags.css'													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Vietnam_bookingByIndustry', {
                        url: '/Vietnam_bookingByIndustry',
                        templateUrl: 'views/Vietnam_bookingByIndustry.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
													  //'lib/hexagons.min.js',
//													  'lib/hexagons.min.css',
//													  'lib/famfamfam_flags-master/famfamfam-flags.css'													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Other_bookingByIndustry', {
                        url: '/Other_bookingByIndustry',
                        templateUrl: 'views/Other_bookingByIndustry.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
													  //'lib/hexagons.min.js',
//													  'lib/hexagons.min.css',
//													  'lib/famfamfam_flags-master/famfamfam-flags.css'													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Australia_bookingByIndustry', {
                        url: '/Australia_bookingByIndustry',
                        templateUrl: 'views/Australia_bookingByIndustry.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
													 // 'lib/hexagons.min.js',
//													  'lib/hexagons.min.css',
//													  'lib/famfamfam_flags-master/famfamfam-flags.css'													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					
					
				//=======Booking By Industry All Countries YTD End======//	
				
				//=======Booking By Product All Countries GroupByShare Start======//
				
					.state('app.groupByShare', {
                        url: '/groupByShare',
                        templateUrl: 'views/groupByShare.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
												   
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.SCA_groupByShare', {
                        url: '/SCA_groupByShare',
                        templateUrl: 'views/SCA_groupByShare.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                           	'lib/jquery/charts/fusion/fusioncharts.js',                                                'lib/jquery/charts/fusion/fusioncharts.theme.fint.js',
												'lib/hexagons.min.js',													  				                                                'lib/hexagons.min.css',
												'lib/famfamfam_flags-master/famfamfam-flags.css'                                                          																									
												   
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Thailand_groupByShare', {
                        url: '/Thailand_groupByShare',
                        templateUrl: 'views/Thailand_groupByShare.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
												   
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Malaysia_groupByShare', {
                        url: '/Malaysia_groupByShare',
                        templateUrl: 'views/Malaysia_groupByShare.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
												   
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Indonesia_groupByShare', {
                        url: '/Indonesia_groupByShare',
                        templateUrl: 'views/Indonesia_groupByShare.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
												   
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Singapore_groupByShare', {
                        url: '/Singapore_groupByShare',
                        templateUrl: 'views/Singapore_groupByShare.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
												   
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Philippines_groupByShare', {
                        url: '/Philippines_groupByShare',
                        templateUrl: 'views/Philippines_groupByShare.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
												   
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.India_groupByShare', {
                        url: '/India_groupByShare',
                        templateUrl: 'views/India_groupByShare.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
												   
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Vietnam_groupByShare', {
                        url: '/Vietnam_groupByShare',
                        templateUrl: 'views/Vietnam_groupByShare.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
												   
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Other_groupByShare', {
                        url: '/Other_groupByShare',
                        templateUrl: 'views/Other_groupByShare.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
												   
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Australia_groupByShare', {
                        url: '/Australia_groupByShare',
                        templateUrl: 'views/Australia_groupByShare.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
												   
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					
					.state('app.SCA_profitProducts', {
                        url: '/SCA_profitProducts',
                        templateUrl: 'views/SCA_profitProducts.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
	                                  files: [	                                                  
									  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js',
													'lib/hexagons.min.js',
													'lib/hexagons.min.css',
													'lib/famfamfam_flags-master/famfamfam-flags.css'									                                                     																									
												   
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })					




				//=======Booking By Product All Countries GroupByShare End======//
						
				//=======Booking By Area All Countries monthlyytd-15&16 Start======//	
					
					.state('app.monthlyytd', {
                        url: '/monthlyytd',
                        templateUrl: 'views/monthlyytd.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                 'lib/jquery/charts/fusion/fusioncharts.js',                                                     														                                                     'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									

                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.SCA_monthlyytd_Current', {
                        url: '/SCA_monthlyytd_Current',
                        templateUrl: 'views/SCA_monthlyytd_Current.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js',
													  'lib/hexagons.min.js',
													  'lib/hexagons.min.css',
													  'lib/famfamfam_flags-master/famfamfam-flags.css'
													  

                                        ]
                                    });
                                }
                            ]
                        }
                    })							
				.state('app.SCA_monthlyytd_2016', {
                        url: '/SCA_monthlyytd_2016',
                        templateUrl: 'views/SCA_monthlyytd_2016.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js',
													  'lib/hexagons.min.js',
													  'lib/hexagons.min.css',
													  'lib/famfamfam_flags-master/famfamfam-flags.css'

                                        ]
                                    });
                                }
                            ]
                        }
                    })		

					.state('app.Thailand_monthlyytd_2016', {
                        url: '/Thailand_monthlyytd_2016',
                        templateUrl: 'views/Thailand_monthlyytd_2016.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									

                                        ]
                                    });
                                }
                            ]
                        }
                    })					
					.state('app.Thailand_monthlyytd_2015', {
                        url: '/Thailand_monthlyytd_2015',
                        templateUrl: 'views/Thailand_monthlyytd_2015.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									

                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Malaysia_monthlyytd_2016', {
                        url: '/Malaysia_monthlyytd_2016',
                        templateUrl: 'views/Malaysia_monthlyytd_2016.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									

                                        ]
                                    });
                                }
                            ]
                        }
                    })		
					
					.state('app.Malaysia_monthlyytd_2015', {
                        url: '/Malaysia_monthlyytd_2015',
                        templateUrl: 'views/Malaysia_monthlyytd_2015.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									

                                        ]
                                    });
                                }
                            ]
                        }
                    })	
					.state('app.Indonesia_monthlyytd_2016', {
                        url: '/Indonesia_monthlyytd_2016',
                        templateUrl: 'views/Indonesia_monthlyytd_2016.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									

                                        ]
                                    });
                                }
                            ]
                        }
                    })					
					.state('app.Indonesia_monthlyytd_2015', {
                        url: '/Indonesia_monthlyytd_2015',
                        templateUrl: 'views/Indonesia_monthlyytd_2015.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									

                                        ]
                                    });
                                }
                            ]
                        }
                    })	
					
					.state('app.Singapore_monthlyytd_2016', {
                        url: '/Singapore_monthlyytd_2016',
                        templateUrl: 'views/Singapore_monthlyytd_2016.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									

                                        ]
                                    });
                                }
                            ]
                        }
                    })					
					.state('app.Singapore_monthlyytd_2015', {
                        url: '/Singapore_monthlyytd_2015',
                        templateUrl: 'views/Singapore_monthlyytd_2015.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									

                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Philippines_monthlyytd_2016', {
                        url: '/Philippines_monthlyytd_2016',
                        templateUrl: 'views/Philippines_monthlyytd_2016.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									

                                        ]
                                    });
                                }
                            ]
                        }
                    })					
					.state('app.Philippines_monthlyytd_2015', {
                        url: '/Philippines_monthlyytd_2015',
                        templateUrl: 'views/Philippines_monthlyytd_2015.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									

                                        ]
                                    });
                                }
                            ]
                        }
                    })	
					.state('app.India_monthlyytd_2016', {
                        url: '/India_monthlyytd_2016',
                        templateUrl: 'views/India_monthlyytd_2016.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									

                                        ]
                                    });
                                }
                            ]
                        }
                    })					
					.state('app.India_monthlyytd_2015', {
                        url: '/India_monthlyytd_2015',
                        templateUrl: 'views/India_monthlyytd_2015.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									

                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Vietnam_monthlyytd_2016', {
                        url: '/Vietnam_monthlyytd_2016',
                        templateUrl: 'views/Vietnam_monthlyytd_2016.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									

                                        ]
                                    });
                                }
                            ]
                        }
                    })					
					.state('app.Vietnam_monthlyytd_2015', {
                        url: '/Vietnam_monthlyytd_2015',
                        templateUrl: 'views/Vietnam_monthlyytd_2015.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									

                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Other_monthlyytd_2016', {
                        url: '/Other_monthlyytd_2016',
                        templateUrl: 'views/Other_monthlyytd_2016.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									

                                        ]
                                    });
                                }
                            ]
                        }
                    })					
					.state('app.Other_monthlyytd_2015', {
                        url: '/Other_monthlyytd_2015',
                        templateUrl: 'views/Other_monthlyytd_2015.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									

                                        ]
                                    });
                                }
                            ]
                        }
                    })					
					.state('app.Australia_monthlyytd_2016', {
                        url: '/Australia_monthlyytd_2016',
                        templateUrl: 'views/Australia_monthlyytd_2016.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									

                                        ]
                                    });
                                }
                            ]
                        }
                    })		
					
					.state('app.Australia_monthlyytd_2015', {
                        url: '/Australia_monthlyytd_2015',
                        templateUrl: 'views/Australia_monthlyytd_2015.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									

                                        ]
                                    });
                                }
                            ]
                        }
                    })	
										
					//=======Booking By Area All Countries monthlyytd-15&16 End======//	
					.state('app.monthlyBookingYTD', {
                        url: '/monthlyBookingYTD',
                        templateUrl: 'views/monthlyBookingYTD.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
													'lib/jquery/charts/monthlyBookingYTD/amcharts.js',
													'lib/jquery/charts/monthlyBookingYTD/serial.js',
													'lib/jquery/charts/monthlyBookingYTD/themes-light.js'
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.countryBookingYTD', {
                        url: '/countryBookingYTD',
                        templateUrl: 'views/countryBookingYTD.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					//============Quaterwise Bookings start===========//
					 .state('app.cwQuaterWise', {
                        url: '/cwQuaterWise',
                        templateUrl: 'views/cwQuaterWise.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					 .state('app.SCA_cwQuarterWise', {
                        url: '/SCA_cwQuarterWise',
                        templateUrl: 'views/SCA_cwQuarterWise.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js',
													  'lib/hexagons.min.js',
													  'lib/hexagons.min.css',
													  'lib/famfamfam_flags-master/famfamfam-flags.css'	
													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Thailand_cwQuarterWise', {
                        url: '/Thailand_cwQuarterWise',
                        templateUrl: 'views/Thailand_cwQuarterWise.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Malaysia_cwQuarterWise', {
                        url: '/Malaysia_cwQuarterWise',
                        templateUrl: 'views/Malaysia_cwQuarterWise.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Indonesia_cwQuarterWise', {
                        url: '/Indonesia_cwQuarterWise',
                        templateUrl: 'views/Indonesia_cwQuarterWise.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Singapore_cwQuarterWise', {
                        url: '/Singapore_cwQuarterWise',
                        templateUrl: 'views/Singapore_cwQuarterWise.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Philippines_cwQuarterWise', {
                        url: '/Philippines_cwQuarterWise',
                        templateUrl: 'views/Philippines_cwQuarterWise.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.India_cwQuarterWise', {
                        url: '/India_cwQuarterWise',
                        templateUrl: 'views/India_cwQuarterWise.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Vietnam_cwQuarterWise', {
                        url: '/Vietnam_cwQuarterWise',
                        templateUrl: 'views/Vietnam_cwQuarterWise.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Other_cwQuarterWise', {
                        url: '/Other_cwQuarterWise',
                        templateUrl: 'views/Other_cwQuarterWise.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Australia_cwQuarterWise', {
                        url: '/Australia_cwQuarterWise',
                        templateUrl: 'views/Australia_cwQuarterWise.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					
					//============Quaterwise Bookings end===========//
									
					//============History Bookings start===========//
					.state('app.historyBooking', {
                        url: '/historyBooking',
                        templateUrl: 'views/historyBooking.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					
					.state('app.SCA_historyBooking', {
                        url: '/SCA_historyBooking',
                        templateUrl: 'views/SCA_historyBooking.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                      'lib/jquery/charts/fusion/fusioncharts.theme.fint.js',
													  'lib/hexagons.min.js',
													  'lib/hexagons.min.css',
													  'lib/famfamfam_flags-master/famfamfam-flags.css'													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })	
					.state('app.Thailand_historyBooking', {
                        url: '/Thailand_historyBooking',
                        templateUrl: 'views/Thailand_historyBooking.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })						
					.state('app.Malaysia_historyBooking', {
                        url: '/Malaysia_historyBooking',
                        templateUrl: 'views/Malaysia_historyBooking.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })			
					.state('app.Indonesia_historyBooking', {
                        url: '/Indonesia_historyBooking',
                        templateUrl: 'views/Indonesia_historyBooking.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Singapore_historyBooking', {
                        url: '/Singapore_historyBooking',
                        templateUrl: 'views/Singapore_historyBooking.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })		
					.state('app.Philippines_historyBooking', {
                        url: '/Philippines_historyBooking',
                        templateUrl: 'views/Philippines_historyBooking.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.India_historyBooking', {
                        url: '/India_historyBooking',
                        templateUrl: 'views/India_historyBooking.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Vietnam_historyBooking', {
                        url: '/Vietnam_historyBooking',
                        templateUrl: 'views/Vietnam_historyBooking.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Other_historyBooking', {
                        url: '/Other_historyBooking',
                        templateUrl: 'views/Other_historyBooking.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Australia_historyBooking', {
                        url: '/Australia_historyBooking',
                        templateUrl: 'views/Australia_historyBooking.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })					
				//============History Bookings end===========//	
					.state('app.otdpieChart', {
                        url: '/otdpieChart',
                        templateUrl: 'views/otdpieChart.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
													'lib/jquery/charts/fusion/fusioncharts.js',
													'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
													//'lib/jquery/charts/HistoricalBooking/themes_light.js'
													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.volumeByQty', {
                        url: '/volumeByQty',
                        templateUrl: 'views/volumeByQty.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
													'lib/jquery/charts/fusion/fusioncharts.js',
													'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
													//'lib/jquery/charts/HistoricalBooking/themes_light.js'
													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.otdBusinesVolume', {
                        url: '/otdBusinesVolume',
                        templateUrl: 'views/otdBusinesVolume.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
													'lib/jquery/charts/fusion/fusioncharts.js',
													'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
													//'lib/jquery/charts/HistoricalBooking/themes_light.js'
													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.productType', {
                        url: '/productType',
                        templateUrl: 'views/productType.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
													'lib/jquery/charts/fusion/fusioncharts.js',
													'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
													//'lib/jquery/charts/HistoricalBooking/themes_light.js'
													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.requestDate', {
                        url: '/requestDate',
                        templateUrl: 'views/requestDate.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
													'lib/jquery/charts/fusion/fusioncharts.js',
													'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
													//'lib/jquery/charts/HistoricalBooking/themes_light.js'
													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.avgleadProductType', {
                        url: '/avgleadProductType',
                        templateUrl: 'views/avgleadProductType.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
													'lib/jquery/charts/fusion/fusioncharts.js',
													'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
													//'lib/jquery/charts/HistoricalBooking/themes_light.js'
													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })					
					
					.state('app.profitProducts', {
                        url: '/profitProducts',
                        templateUrl: 'views/profitProducts.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
													'lib/jquery/charts/fusion/fusioncharts.js',
													'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
													//'lib/jquery/charts/HistoricalBooking/themes_light.js'
													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })	
					.state('app.forecastBacklog', {
                        url: '/forecastBacklog',
                        templateUrl: 'views/forecastBacklog.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                                    
													'lib/jquery/charts/fusion/fusioncharts.js',
													'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
													//'lib/jquery/charts/HistoricalBooking/themes_light.js'
													
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })					
					
					
					
					
					//========== SCA Group Start=================//
						
				.state('app.ScaGroup', {
                        url: '/ScaGroup',
                        templateUrl: 'views/ScaGroup.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                   'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
												   
                                        ]
                                    });
                                }
                            ]
                        }
                    })
				.state('app.SCA_Group', {
                        url: '/SCA_Group',
                        templateUrl: 'views/SCA_Group.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                   'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js',
													   'lib/hexagons.min.js',
													   'lib/hexagons.min.css',
													   'lib/famfamfam_flags-master/famfamfam-flags.css'
												   
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Thailand_Group', {
                        url: '/Thailand_Group',
                        templateUrl: 'views/Thailand_Group.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                   'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
												   
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
				.state('app.Malaysia_Group', {
                        url: '/Malaysia_Group',
                        templateUrl: 'views/Malaysia_Group.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                   'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
												   
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
				.state('app.Indonesia_Group', {
                        url: '/Indonesia_Group',
                        templateUrl: 'views/Indonesia_Group.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                   'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
												   
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
				.state('app.Singapore_Group', {
                        url: '/Singapore_Group',
                        templateUrl: 'views/Singapore_Group.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                   'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
												   
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
				.state('app.Philippines_Group', {
                        url: '/Philippines_Group',
                        templateUrl: 'views/Philippines_Group.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                   'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
												   
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
				.state('app.India_Group', {
                        url: '/India_Group',
                        templateUrl: 'views/India_Group.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                   'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
												   
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
				.state('app.Vietnam_Group', {
                        url: '/Vietnam_Group',
                        templateUrl: 'views/Vietnam_Group.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                   'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
												   
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
				.state('app.Other_Group', {
                        url: '/Other_Group',
                        templateUrl: 'views/Other_Group.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                   'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
												   
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
				.state('app.Australia_Group', {
                        url: '/Australia_Group',
                        templateUrl: 'views/Australia_Group.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
	                                                   'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
												   
													
                                        ]
                                    });
                                }
                            ]
                        }
                    })
				//========== SCA Group End=================//
					

//	
//					.state('app.groupByProductShare', {
//                        url: '/groupByProductShare',
//                        templateUrl: 'views/groupByProductShare.html',
//                        ncyBreadcrumb: {
//                            label: '',
//                            description: ''
//                        },
//                        resolve: {
//                            deps: [
//                                '$ocLazyLoad',
//                                function($ocLazyLoad) {
//                                    return $ocLazyLoad.load({
//                                        serie: true,
//                                        files: [
//                                                   
//	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
//													
//													
//                                        ]
//                                    });
//                                }
//                            ]
//                        }
//                    })
//										
//					.state('app.bookingByIndustry', {
//                        url: '/bookingByIndustry',
//                        templateUrl: 'views/bookingByIndustry.html',
//                        ncyBreadcrumb: {
//                            label: '',
//                            description: ''
//                        },
//                        resolve: {
//                            deps: [
//                                '$ocLazyLoad',
//                                function($ocLazyLoad) {
//                                    return $ocLazyLoad.load({
//                                        serie: true,
//                                        files: [
//	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    														                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   												
//													
//                                        ]
//                                    });
//                                }
//                            ]
//                        }
//                    })
//					
				
//					.state('app.ScaGroup', {
//                        url: '/ScaGroup',
//                        templateUrl: 'views/ScaGroup.html',
//                        ncyBreadcrumb: {
//                            label: '',
//                            description: ''
//                        },
//                        resolve: {
//                            deps: [
//                                '$ocLazyLoad',
//                                function($ocLazyLoad) {
//                                    return $ocLazyLoad.load({
//                                        serie: true,
//                                        files: [
//	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
//												   
//                                        ]
//                                    });
//                                }
//                            ]
//                        }
//                    })

//					.state('app.monthlyytd', {
//                        url: '/monthlyytd',
//                        templateUrl: 'views/monthlyytd.html',
//                        ncyBreadcrumb: {
//                            label: '',
//                            description: ''
//                        },
//                        resolve: {
//                            deps: [
//                                '$ocLazyLoad',
//                                function($ocLazyLoad) {
//                                    return $ocLazyLoad.load({
//                                        serie: true,
//                                        files: [
//                                                    
//	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
//
//                                        ]
//                                    });
//                                }
//                            ]
//                        }
//                    })
//					
//					.state('app.monthlyBookingYTD', {
//                        url: '/monthlyBookingYTD',
//                        templateUrl: 'views/monthlyBookingYTD.html',
//                        ncyBreadcrumb: {
//                            label: '',
//                            description: ''
//                        },
//                        resolve: {
//                            deps: [
//                                '$ocLazyLoad',
//                                function($ocLazyLoad) {
//                                    return $ocLazyLoad.load({
//                                        serie: true,
//                                        files: [
//                                                    
//													'lib/jquery/charts/monthlyBookingYTD/amcharts.js',
//													'lib/jquery/charts/monthlyBookingYTD/serial.js',
//													'lib/jquery/charts/monthlyBookingYTD/themes-light.js'
//													
//                                        ]
//                                    });
//                                }
//                            ]
//                        }
//                    })
//					.state('app.countryBookingYTD', {
//                        url: '/countryBookingYTD',
//                        templateUrl: 'views/countryBookingYTD.html',
//                        ncyBreadcrumb: {
//                            label: '',
//                            description: ''
//                        },
//                        resolve: {
//                            deps: [
//                                '$ocLazyLoad',
//                                function($ocLazyLoad) {
//                                    return $ocLazyLoad.load({
//                                        serie: true,
//                                        files: [
//                                                    
//	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
//													
//													
//                                        ]
//                                    });
//                                }
//                            ]
//                        }
//                    })
//					.state('app.historyBooking', {
//                        url: '/historyBooking',
//                        templateUrl: 'views/historyBooking.html',
//                        ncyBreadcrumb: {
//                            label: '',
//                            description: ''
//                        },
//                        resolve: {
//                            deps: [
//                                '$ocLazyLoad',
//                                function($ocLazyLoad) {
//                                    return $ocLazyLoad.load({
//                                        serie: true,
//                                        files: [
//                                                    
//	                                                  'lib/jquery/charts/fusion/fusioncharts.js',                                                    												                                                       'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   																									
//													
//                                        ]
//                                    });
//                                }
//                            ]
//                        }
//                    })
//					
//					
//					.state('app.otdpieChart', {
//                        url: '/otdpieChart',
//                        templateUrl: 'views/otdpieChart.html',
//                        ncyBreadcrumb: {
//                            label: '',
//                            description: ''
//                        },
//                        resolve: {
//                            deps: [
//                                '$ocLazyLoad',
//                                function($ocLazyLoad) {
//                                    return $ocLazyLoad.load({
//                                        serie: true,
//                                        files: [
//                                                    
//													'lib/jquery/charts/fusion/fusioncharts.js',
//													'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
//													//'lib/jquery/charts/HistoricalBooking/themes_light.js'
//													
//													
//                                        ]
//                                    });
//                                }
//                            ]
//                        }
//                    })
//					.state('app.volumeByQty', {
//                        url: '/volumeByQty',
//                        templateUrl: 'views/volumeByQty.html',
//                        ncyBreadcrumb: {
//                            label: '',
//                            description: ''
//                        },
//                        resolve: {
//                            deps: [
//                                '$ocLazyLoad',
//                                function($ocLazyLoad) {
//                                    return $ocLazyLoad.load({
//                                        serie: true,
//                                        files: [
//                                                    
//													'lib/jquery/charts/fusion/fusioncharts.js',
//													'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
//													//'lib/jquery/charts/HistoricalBooking/themes_light.js'
//													
//													
//                                        ]
//                                    });
//                                }
//                            ]
//                        }
//                    })
//					.state('app.otdBusinesVolume', {
//                        url: '/otdBusinesVolume',
//                        templateUrl: 'views/otdBusinesVolume.html',
//                        ncyBreadcrumb: {
//                            label: '',
//                            description: ''
//                        },
//                        resolve: {
//                            deps: [
//                                '$ocLazyLoad',
//                                function($ocLazyLoad) {
//                                    return $ocLazyLoad.load({
//                                        serie: true,
//                                        files: [
//                                                    
//													'lib/jquery/charts/fusion/fusioncharts.js',
//													'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
//													//'lib/jquery/charts/HistoricalBooking/themes_light.js'
//													
//													
//                                        ]
//                                    });
//                                }
//                            ]
//                        }
//                    })
//					.state('app.productType', {
//                        url: '/productType',
//                        templateUrl: 'views/productType.html',
//                        ncyBreadcrumb: {
//                            label: '',
//                            description: ''
//                        },
//                        resolve: {
//                            deps: [
//                                '$ocLazyLoad',
//                                function($ocLazyLoad) {
//                                    return $ocLazyLoad.load({
//                                        serie: true,
//                                        files: [
//                                                    
//													'lib/jquery/charts/fusion/fusioncharts.js',
//													'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
//													//'lib/jquery/charts/HistoricalBooking/themes_light.js'
//													
//													
//                                        ]
//                                    });
//                                }
//                            ]
//                        }
//                    })
//					.state('app.requestDate', {
//                        url: '/requestDate',
//                        templateUrl: 'views/requestDate.html',
//                        ncyBreadcrumb: {
//                            label: '',
//                            description: ''
//                        },
//                        resolve: {
//                            deps: [
//                                '$ocLazyLoad',
//                                function($ocLazyLoad) {
//                                    return $ocLazyLoad.load({
//                                        serie: true,
//                                        files: [
//                                                    
//													'lib/jquery/charts/fusion/fusioncharts.js',
//													'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
//													//'lib/jquery/charts/HistoricalBooking/themes_light.js'
//													
//													
//                                        ]
//                                    });
//                                }
//                            ]
//                        }
//                    })
//					.state('app.avgleadProductType', {
//                        url: '/avgleadProductType',
//                        templateUrl: 'views/avgleadProductType.html',
//                        ncyBreadcrumb: {
//                            label: '',
//                            description: ''
//                        },
//                        resolve: {
//                            deps: [
//                                '$ocLazyLoad',
//                                function($ocLazyLoad) {
//                                    return $ocLazyLoad.load({
//                                        serie: true,
//                                        files: [
//                                                    
//													'lib/jquery/charts/fusion/fusioncharts.js',
//													'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
//													//'lib/jquery/charts/HistoricalBooking/themes_light.js'
//													
//													
//                                        ]
//                                    });
//                                }
//                            ]
//                        }
//                    })					
//					
//					.state('app.profitProducts', {
//                        url: '/profitProducts',
//                        templateUrl: 'views/profitProducts.html',
//                        ncyBreadcrumb: {
//                            label: '',
//                            description: ''
//                        },
//                        resolve: {
//                            deps: [
//                                '$ocLazyLoad',
//                                function($ocLazyLoad) {
//                                    return $ocLazyLoad.load({
//                                        serie: true,
//                                        files: [
//                                                    
//													'lib/jquery/charts/fusion/fusioncharts.js',
//													'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
//													//'lib/jquery/charts/HistoricalBooking/themes_light.js'
//													
//													
//                                        ]
//                                    });
//                                }
//                            ]
//                        }
//                    })	
//					.state('app.forecastBacklog', {
//                        url: '/forecastBacklog',
//                        templateUrl: 'views/forecastBacklog.html',
//                        ncyBreadcrumb: {
//                            label: '',
//                            description: ''
//                        },
//                        resolve: {
//                            deps: [
//                                '$ocLazyLoad',
//                                function($ocLazyLoad) {
//                                    return $ocLazyLoad.load({
//                                        serie: true,
//                                        files: [
//                                                    
//													'lib/jquery/charts/fusion/fusioncharts.js',
//													'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'
//													//'lib/jquery/charts/HistoricalBooking/themes_light.js'
//													
//													
//                                        ]
//                                    });
//                                }
//                            ]
//                        }
//                    })
					

					.state('app.indicatorweightage', {
                        url: '/indicatorweightage',
                        templateUrl: 'views/IndicatorWeightage.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                               'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
													 
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.Areamaster', {
                        url: '/Areamaster',
                        templateUrl: 'views/Area Master.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
						    						'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })	
					
					.state('app.deliverupdate', {
                        url: '/deliveryupdate',
                        templateUrl: 'views/DeliveryUpdate.jsp',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
						  							  'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js',
													'lib/jquerydatepicker/jquery-ui.js',
													'lib/jquerydatepicker/jquery-ui.css'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })	
					
					.state('app.viewnotes', {
                        url: '/viewnotes',
                        templateUrl: 'views/viewnotes.jsp',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
						  							  'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js',
													'lib/jquerydatepicker/jquery-ui.js',
													'lib/jquerydatepicker/jquery-ui.css'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })	
					
					
					.state('app.BusinessSegmentMaster', {
                        url: '/BusinessSegmentMaster',
                        templateUrl: 'views/BusinessSegmentMaster.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
						    'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })	
					.state('app.applicationMaster', {
                        url: '/applicationMaster',
                        templateUrl: 'views/Application Master.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
						    'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })	
					
					
					.state('app.salesprogressindicator', {
                        url: '/salesprogressindicator',
                        templateUrl: 'views/SalesProgressIndicators.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
						     'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })	
					
					
					.state('app.CompetitorMaster', {
                        url: '/CompetitorMaster',
                        templateUrl: 'views/Competitor Master.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
						     'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })	
					 
					//.state('app.customer', {
//                        url: '/customer',
//                        templateUrl: 'views/Customer.html',
//                        ncyBreadcrumb: {
//                            label: 'Customer',
//                            description: ''
//                        },
//                        resolve: {
//                            deps: [
//                                '$ocLazyLoad',
//                                function($ocLazyLoad) {
//                                    return $ocLazyLoad.load({
//                                        serie: true,
//                                        files: [
//                                              'app/controllers/nggrid.js',
//													 'app/controllers/modal.js',
//                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
//                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
//                                                    'lib/jquery/datatable/ZeroClipboard.js',
//                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
//                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
//                                                    'app/controllers/datatable.js'
//													
//                                            //'app/controllers/databoxes.js'
//                                        ]
//                                    });
//                                }
//                            ]
//                        }
//                    })
					
                    .state('app.widgets', {
                        url: '/widgets',
                        templateUrl: 'views/widgets.html',
                        ncyBreadcrumb: {
                            label: 'Widgets',
                            description: 'flexible containers'
                        }
                    })
                    .state('app.elements', {
                        url: '/elements',
                        templateUrl: 'views/elements.html',
                        ncyBreadcrumb: {
                            label: 'UI Elements',
                            description: 'Basics'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'app/controllers/pagination.js',
                                            'app/controllers/progressbar.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    //.state('app.departments', {
//                        url: '/Departments',
//                        templateUrl: 'views/Departments.html',
//                        ncyBreadcrumb: {
//                            label: 'Departments',
//                            description: ''
//                        }
//                    })
					.state('app.departments', {
                        url: '/Departments',
                        templateUrl: 'views/DepartmentMaster.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js',
													'lib/bootstrap.min.js',
													'lib/Custom_Popup.css'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					
					.state('app.countryTax', {
                        url: '/countryTax',
                        templateUrl: 'views/countryTax.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
 													'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					
					.state('app.sscCode', {
                        url: '/sscCode',
                        templateUrl: 'views/sscCode.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
 													'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					.state('app.dataMigration', {
                        url: '/dataMigration',
                        templateUrl: 'views/dataMigration.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
 													'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					.state('app.taxtypemaster', {
                        url: '/taxtypemaster',
                        templateUrl: 'views/TaxTypeMaster.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					.state('app.productmaster', {
                        url: '/productmaster',
                        templateUrl: 'views/ProductMaster.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid','minicolors']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js',
													'lib/jquery.minicolors.js',
													'lib/jquery.minicolors.css'
													
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					.state('app.ProductLineMaster', {
                        url: '/ProductLineMaster',
                        templateUrl: 'views/ProductLineMaster.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					.state('app.products', {
                        url: '/products',
                        templateUrl: 'views/Products.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid','minicolors']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js',
													'lib/jquery.minicolors.js',
													'lib/jquery.minicolors.css',
													//'app/controllers/minicolors.js'
													
													
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })					
					.state('app.productionscheduler', {
                        url: '/productionscheduler',
                        templateUrl: 'views/Production Schedules.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                         
											/*'lib/bootstrapDatePicker/datepicker.css',
                                                    'lib/bootstrapDatePicker/bootstrap-datepicker.js',*/
													'app/controllers/nggrid.js',
													'app/controllers/modal.js',
													  'app/controllers/datatable.js',
													  'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
													'bower_components/calender-css/bootstrap.min.css',
													'lib/jquerydatepicker/jquery-ui.js',
													'lib/jquerydatepicker/jquery-ui.css'
							
										
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					
				/*<!--	.state('app.testreport', {
                        url: '/testreport',
                        templateUrl: 'views/testReport.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
																
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })-->*/
					.state('app.testreport', {
                        url: '/testreport',
                        templateUrl: 'views/testReport.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            /*'app/directives/realtimechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.selection.js',
                                            'lib/jquery/charts/flot/jquery.flot.crosshair.js',
                                            'lib/jquery/charts/flot/jquery.flot.stack.js',
                                            'lib/jquery/charts/flot/jquery.flot.time.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/morris/raphael-2.0.2.min.js',
                                            'lib/jquery/charts/chartjs/chart.js',
                                            'lib/jquery/charts/morris/morris.js',
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',*/
                                          	'lib/jquerydatepicker/jquery-ui.js',
									'lib/jquerydatepicker/jquery-ui.css',
											'lib/bootstrap.min.js'
											
											
											
											
											
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					
					.state('app.score_master', {
                        url: '/ScoreMaster',
                        templateUrl: 'views/Score_master.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
													//'lib/jquery.minicolors.js',
													//'lib/jquery.minicolors.css'
													
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })		
					
					.state('app.packageMaster', {
                        url: '/PackageMaster',
                        templateUrl: 'views/packageMaster.jsp',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
													//'lib/jquery.minicolors.js',
													//'lib/jquery.minicolors.css'
													
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })		
					
						.state('app.report', {
                        url: '/report',
                        templateUrl: 'views/Report.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                /*   'app/directives/realtimechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.selection.js',
                                            'lib/jquery/charts/flot/jquery.flot.crosshair.js',
                                            'lib/jquery/charts/flot/jquery.flot.stack.js',
                                            'lib/jquery/charts/flot/jquery.flot.time.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/morris/raphael-2.0.2.min.js',
                                            'lib/jquery/charts/chartjs/chart.js',
                                            'lib/jquery/charts/morris/morris.js',
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',*/
                                           /* 'lib/kendo.common-material.min.css',
											'lib/kendo.all.min.js',
											'lib/kendo.material.min.css', 
											'lib/kendo.material.mobile.min.css',*/
											'lib/bootstrap.min.js',
											'lib/jquerydatepicker/jquery-ui.js',
									'lib/jquerydatepicker/jquery-ui.css'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					
					
				/*		.state('app.serviceScheduler', {
                        url: '/serviceScheduler',
                        templateUrl: 'views/ServiceScheduler.jsp',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js',
													'lib/jquery.minicolors.js',
													'lib/jquery.minicolors.css'
													
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					
					
					.state('app.serviceInquiry', {
                        url: '/serviceInquiry',
                        templateUrl: 'views/ServiceInquiry.jsp',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                  'app/controllers/nggrid.js',
													'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
												
                                                    'app/controllers/datatable.js'
													
													
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					.state('app.serviceInquirydesign', {
                        url: '/serviceInquiry',
                        templateUrl: 'views/ServiceInquiryDesign.jsp',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                  'app/controllers/nggrid.js',
													'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
													
                                                    'app/controllers/datatable.js'
													
													
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })*/
						.state('app.serviceScheduler', {
                        url: '/serviceScheduler',
                        templateUrl: 'views/ServiceScheduler.jsp',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid','ui.select']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js',
													'bower_components/calender-css/bootstrap.min.css',
													'lib/jquery.minicolors.js',
													'lib/jquery.minicolors.css',
														'lib/jquerydatepicker/jquery-ui.js',
													'lib/jquerydatepicker/jquery-ui.css'
													
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					
					
					
				/*.state('app.serviceInquiry', {
                        url: '/serviceInquiry',
                        templateUrl: 'views/ServiceInquiry.jsp',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                  'app/controllers/nggrid.js',
													'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
													
													
													
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })*/
					.state('app.serviceINQ', {
                        url: '/serviceINQ',
                        templateUrl: 'views/serviceINQ.jsp',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid','ui.select']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                  'app/controllers/nggrid.js',
													'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
													/*<!--'lib/bootstrapDatePicker/datepicker.css',
                                                    'lib/bootstrapDatePicker/bootstrap-datepicker.js',-->*/
                                                    'app/controllers/datatable.js',
													
													'lib/bootstrap.min.js',
													'lib/jquerydatepicker/jquery-ui.js',
													'lib/jquerydatepicker/jquery-ui.css'
													
													
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					.state('app.serviceInquires', {
                        url: '/serviceInquires',
                        templateUrl: 'views/serviceInquires.jsp',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid','ui.select']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                  'app/controllers/nggrid.js',
													'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
													/*<!--'lib/bootstrapDatePicker/datepicker.css',
                                                    'lib/bootstrapDatePicker/bootstrap-datepicker.js',-->*/
                                                    'app/controllers/datatable.js',
													
													'lib/bootstrap.min.js',
													'lib/jquerydatepicker/jquery-ui.js',
													'lib/jquerydatepicker/jquery-ui.css'
													
													
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
						.state('app.qaService', {
                        url: '/qaService',
                        templateUrl: 'views/QAService.jsp',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    
													 'app/controllers/nggrid.js',
													'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js',
													'lib/bootstrap.min.js',
													'lib/jquerydatepicker/jquery-ui.js',
													'lib/jquerydatepicker/jquery-ui.css'
										
													
                                                    
													
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					
					.state('app.qaServiceINT', {
                        url: '/qaServiceINT',
                        templateUrl: 'views/QAServiceInt.jsp',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    
													 'app/controllers/nggrid.js',
													'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js',
													'lib/bootstrap.min.js',											
											       'lib/jquerydatepicker/jquery-ui.js',
													'lib/jquerydatepicker/jquery-ui.css'
													
										
													
                                                    
													
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					.state('app.qaServiceEXT', {
                        url: '/qaServiceEXT',
                        templateUrl: 'views/QAServiceExt.jsp',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    
													 'app/controllers/nggrid.js',
													'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js',
													'lib/bootstrap.min.js',											
											        'lib/jquerydatepicker/jquery-ui.js',
													'lib/jquerydatepicker/jquery-ui.css'
										
													
                                                    
													
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })	
					/*.state('app.qaService', {
                        url: '/qaService',
                        templateUrl: 'views/QAService.jsp',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    
													 'app/controllers/nggrid.js',
													'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js',
													'lib/bootstrap.min.js',											
											'lib/datePickerBS/datepicker.css',
													'lib/datePickerBS/bootstrap-datepicker.js'
										
													
                                                    
													
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })*/
					.state('app.casestatus', {
                        url: '/casestatus',
                        templateUrl: 'views/CaseStatus.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					.state('app.newCaseManagement', {
                        url: '/newCaseManagement',
                        templateUrl: 'views/newCaseManagement.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid','ui.select']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                     'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                     'lib/jquery/datatable/dataTables.bootstrap.css',
													 'lib/bootstrap.min.js',
													 'lib/Custom_Popup.css',
													 'lib/jquerydatepicker/jquery-ui.js',
													 'lib/jquerydatepicker/jquery-ui.css',
													 'lib/jquery/textarea/jquery.autosize.js',
													// 'lib/dateRangePicFromTo/css/ui-lightness/jquery-ui-1.8.21.custom.css',
													// 'lib/dateRangePicFromTo/js/jquery-ui-1.8.21.custom.min.js',
													// 'lib/dateRangePicFromTo/js/jquery-migrate-1.0.0.js'
//													 'lib/search_multiselect/css/prism.css'
													 
													 
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					.state('app.addNewCase', {
                        url: '/addNewCase',
                        templateUrl: 'views/addNewCase.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                     'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                     'lib/jquery/datatable/dataTables.bootstrap.css',
													 'lib/bootstrap.min.js',
													// 'lib/Custom_Popup.css',
													 'lib/jquerydatepicker/jquery-ui.js',
													 'lib/jquerydatepicker/jquery-ui.css'
													
													 
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					.state('app.quotation', {
                        url: '/quotation',
                        templateUrl: 'views/Quotations.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                       resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid','ui.select']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    /*'app/controllers/nggrid.js',
													'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js',*/
                                                   // 'lib/dateRangePicFromTo/css/ui-lightness/jquery-ui-1.8.21.custom.css',
													//'lib/dateRangePicFromTo/js/jquery-ui-1.8.21.custom.min.js',
													//'lib/dateRangePicFromTo/js/jquery-migrate-1.0.0.js',
													//'lib/htmlToPdf/js/html2canvas.min.js',
													//'lib/htmlToPdf/js/jspdf.min.js',
													'lib/bootstrap.min.js',
													'lib/Custom_Popup.css',
													'lib/jquery/textarea/jquery.autosize.js',
													'lib/jquerydatepicker/jquery-ui.js',
													'lib/jquerydatepicker/jquery-ui.css'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					.state('app.addedQuotation', {
                        url: '/addedQuotation',
                        templateUrl: 'views/addedQuotation.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid','minicolors']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                     'app/controllers/nggrid.js',
//													 'app/controllers/modal.js',
//                                                     'lib/jquery/datatable/dataTables.bootstrap.css',
//													 'lib/bootstrap.min.js',
//													 'app/controllers/minicolors.js',
													 'lib/jquerydatepicker/jquery-ui.js',
													 'lib/jquerydatepicker/jquery-ui.css',
													 'lib/bootstrap.min.js',
													 'lib/jquery/textarea/jquery.autosize.js'
													// 'lib/Custom_Popup.css'
													
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					.state('app.CustomerDB', {
                        url: '/CustomerDB',
                        templateUrl: 'views/customerDB.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                     'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                     'lib/jquery/textarea/jquery.autosize.js',
													 'lib/scrollDown/js/jquery.easing.min.js',
													 'lib/scrollDown/js/scrolling-nav.js'
													
													 
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					/* .state('app.customerDashBoard', {
						   
                        url: '/customerDashBoard',
                        templateUrl: 'views/customerDB.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
										         'lib/bootstrap.min.js',
												 'app/controllers/nggrid.js',
												 'app/controllers/datatable.js',
												 'lib/jquery/textarea/jquery.autosize.js',
												 'lib/scrollDown/js/jquery.easing.min.js',
												 'lib/scrollDown/js/scrolling-nav.js'

                                        ]
                                    });
                                }
                            ]
                        }
                    })*/
					/*.state('app.QtnprintOuts', {
                        url: '/QtnprintOuts',
                        templateUrl: 'views/QtnprintOuts.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                     'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js',
                                                    'lib/dateRangePicFromTo/css/ui-lightness/jquery-ui-1.8.21.custom.css',
													'lib/dateRangePicFromTo/js/jquery-ui-1.8.21.custom.min.js',
													'lib/dateRangePicFromTo/js/jquery-migrate-1.0.0.js',
													'lib/htmlToPdf/js/html2canvas.min.js',
													'lib/htmlToPdf/js/jspdf.min.js',
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })*/
					
					.state('app.historicalData', {
                        url: '/historicalData',
                        templateUrl: 'views/historicalData.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    //'lib/jquery/datatable/jquery.dataTables.min.js',
//                                                    'lib/jquery/datatable/ZeroClipboard.js',
//                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
//                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
//                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					
			


					.state('app.probabilityMaster', {
                        url: '/probabilityMaster',
                        templateUrl: 'views/probabilityMaster.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                               'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
		
					
					.state('app.RegionMaster', {
                        url: '/RegionMaster',
                        templateUrl: 'views/RegionMaster.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                     'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                     'lib/jquery/datatable/dataTables.bootstrap.css',
                                                     'lib/jquery/datatable/jquery.dataTables.min.js',
//                                                    'lib/jquery/datatable/ZeroClipboard.js',
//                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
//                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
//                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					.state('app.generateScore', {
                        url: '/generateScore',
                        templateUrl: 'views/generateScore.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
//                                                    'lib/jquery/datatable/ZeroClipboard.js',
//                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
//                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
//                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					
					.state('app.frameSizeTag', {
                        url: '/frameSizeTag',
                        templateUrl: 'views/FrameSizeTag.jsp',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
//                                                    'lib/jquery/datatable/ZeroClipboard.js',
//                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
//                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
//                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					
					.state('app.itemValue', {
                        url: '/itemValue',
                        templateUrl: 'views/ItemValue.jsp',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
//                                                    'lib/jquery/datatable/ZeroClipboard.js',
//                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
//                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
//                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					
					.state('app.YearlyBudget', {
                        url: '/YearlyBudget',
                        templateUrl: 'views/YearlyBudget.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    //'lib/datePicForMonth/bootstrap-datepicker.css',
                                                   // 'lib/datePicForMonth/bootstrap-datepicker.js',
//                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
//                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
//                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					.state('app.SalesmanBudget', {
                        url: '/SalesmanBudget',
                        templateUrl: 'views/salesmanBudget.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    //'lib/datePicForMonth/bootstrap-datepicker.css',
                                                   // 'lib/datePicForMonth/bootstrap-datepicker.js',
//                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
//                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
//                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					
					.state('app.casesummary', {
                        url: '/casesummary',
                        templateUrl: 'views/CaseSummary.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    //'lib/jquery/datatable/jquery.dataTables.min.js',
//                                                    'lib/jquery/datatable/ZeroClipboard.js',
//                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
//                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
//                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					
					.state('app.OrderAcknowledgement', {
                        url: '/OrderAcknowledgement',
                        templateUrl: 'views/OrderAcknowledgement.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    //'lib/jquery/datatable/jquery.dataTables.min.js',
//                                                    'lib/jquery/datatable/ZeroClipboard.js',
//                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
//                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
//                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					.state('app.Users', {
                        url: '/UserMaster',
                        templateUrl: 'views/UserMaster.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													'app/controllers/modal.js',
                                                   // 'lib/jquery/datatable/dataTables.bootstrap.css',
                                                  //  'lib/jquery/datatable/jquery.dataTables.min.js',
                                                  //  'lib/jquery/datatable/ZeroClipboard.js',
                                                   // 'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                   // 'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js',
													'lib/bootstrap.min.js',
													'lib/Custom_Popup.css'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					.state('app.AccountType', {
                        url: '/AccountType',
                        templateUrl: 'views/Account Type.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					.state('app.Designation', {
                        url: '/Designation',
                        templateUrl: 'views/Designation.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					.state('app.AddAsset', {
                        url: '/AddAsset',
                        templateUrl: 'views/AddAsset.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
													'lib/mystyles.css',
													'lib/jquerydatepicker/jquery-ui.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
													'lib/jquery/jquery-ui.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					.state('app.SearchAssets', {
                        url: '/SearchAssets',
                        templateUrl: 'views/SearchAssets.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
													'lib/mystyles.css',
													'lib/jquerydatepicker/jquery-ui.css',													
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
													'lib/jquery/jquery-ui.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					.state('app.NewUserRequest', {
                        url: '/NewUserRequest',
                        templateUrl: 'views/NewUserRequest.html',
                        params : { user : null , read : false } ,
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
													'lib/mystyles.css',
													'lib/jquerydatepicker/jquery-ui.css',													
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
													'lib/jquery/jquery-ui.min.js',
                                                    'app/controllers/datatable.js',
													'app/controllers/it/ituser.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					.state('app.SearchRequests', {
                        url: '/SearchRequests',
                        templateUrl: 'views/SearchRequests.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
													'lib/jquery.dataTables.min.css',
													'lib/mystyles.css',
													'lib/jquerydatepicker/jquery-ui.css',													
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
													'lib/jquery/jquery-ui.min.js',
                                                    'app/controllers/datatable.js',
													'app/controllers/it/ituser.js'
                                                ]
                                            });
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    	.state('app.NewRole', {
                        url: '/NewRole',
                        templateUrl: 'views/NewRole.html',
                        params : { user : null , read : false } ,
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
													'lib/mystyles.css',
													'lib/jquerydatepicker/jquery-ui.css',													
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
													'lib/jquery/jquery-ui.min.js',
                                                    'app/controllers/datatable.js',
													'app/controllers/it/ituser.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					.state('app.SearchRole', {
                        url: '/SearchRole',
                        templateUrl: 'views/SearchRole.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
													'lib/jquery.dataTables.min.css',
													'lib/mystyles.css',
													'lib/jquerydatepicker/jquery-ui.css',													
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
													'lib/jquery/jquery-ui.min.js',
                                                    'app/controllers/datatable.js',
													'app/controllers/it/ituser.js'
                                                ]
                                            });
                                        }
                                    );
                                }
                            ]
                        }
                    })
					.state('app.MyTickets', {
                        url: '/MyTickets',
                        templateUrl: 'views/SearchTickets.html',
                        params : { mytickets : true },
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
													'lib/jquery.dataTables.min.css',
													'lib/mystyles.css',
													'lib/jquerydatepicker/jquery-ui.css',													
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
													'lib/jquery/jquery-ui.min.js',
                                                    'app/controllers/datatable.js',
                                                    'app/controllers/it/ticketController.js'
                                                ]
                                            });
                                        }
                                    );
                                }
                            ]
                        }
                    })
					.state('app.RaiseTicket', {
                        url: '/RaiseTicket',
                        templateUrl: 'views/RaiseTicket.html',
                        params : { ticket : null , read : false } ,
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
													'lib/mystyles.css',
													'lib/jquerydatepicker/jquery-ui.css',													
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
													'lib/jquery/jquery-ui.min.js',
                                                    'app/controllers/datatable.js',
                                                    'app/controllers/it/ticketController.js'
                                                ]
                                            });
                                        }
                                    );
                                }
                            ]
                        }
                    })
					.state('app.SearchTickets', {
                        url: '/SearchTickets',
                        templateUrl: 'views/SearchTickets.html',
                        params : { mytickets : false },
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
													'lib/mystyles.css',
													'lib/jquerydatepicker/jquery-ui.css',													
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
													'lib/jquery/jquery-ui.min.js',
                                                    'app/controllers/datatable.js',
                                                    'app/controllers/it/ticketController.js'
                                                ]
                                            });
                                        }
                                    );
                                }
                            ]
                        }
                    })	
                       .state('app.SearchAccessPoint', {
                        url: '/SearchAccessPoint',
                        templateUrl: 'views/SearchAccesspoints.html',
                        params : { access : null  } ,
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
													'lib/mystyles.css',
													'lib/jquerydatepicker/jquery-ui.css',													
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
													'lib/jquery/jquery-ui.min.js',
                                                    'app/controllers/datatable.js',
													'app/controllers/user/accesspoint.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
                    .state('app.NewAccessPoint', {
                        url: '/NewAccessPoint',
                        templateUrl: 'views/NewAccessPoint.html',
                        params : { access : null , read : false } ,
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
													'lib/mystyles.css',
													'lib/jquerydatepicker/jquery-ui.css',													
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
													'lib/jquery/jquery-ui.min.js',
                                                    'app/controllers/datatable.js',
													'app/controllers/user/accesspoint.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					.state('app.ProjectProgress', {
                        url: '/ProjectProgress',
                        templateUrl: 'views/Project Progress.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    }).state('app.ProgressTrackingItems', {
                        url: '/ProgressTrackingItems',
                        templateUrl: 'views/Progress Tracking Items.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
					.state('app.UploadProjectDocuments', {
                        url: '/UploadProjectDocuments',
                        templateUrl: 'views/Upload Project Documents.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })	
					.state('app.casesearch', {
                        url: '/casesearch',
                        templateUrl: 'views/Case Search.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })	
									
					
					//.state('app.sop', {
//                        url: '/SOP',
//                        templateUrl: 'views/sop.html',
//                        ncyBreadcrumb: {
//                            label: 'SOPS',
//                            description: ''
//                        },
//                        resolve: {
//                            deps: [
//                                '$ocLazyLoad',
//                                function($ocLazyLoad) {
//                                    return $ocLazyLoad.load(['ngGrid']).then(
//                                        function() {
//                                            return $ocLazyLoad.load(
//                                            {
//                                                serie: true,
//                                                files: [
//                                                    'app/controllers/nggrid.js',
//													 'app/controllers/modal.js',
//                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
//                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
//                                                    'lib/jquery/datatable/ZeroClipboard.js',
//                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
//                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
//                                                    'app/controllers/datatable.js'
//                                                ]
//                                            });
//                                        }
//                                    );
//
//                                }
//                            ]
//                        }
//
//                    })
                    .state('app.glyphicons', {
                        url: '/glyphicons',
                        templateUrl: 'views/glyph-icons.html',
                        ncyBreadcrumb: {
                            label: 'GlyphIcons',
                            description: 'Sharp and clean symbols'
                        }
                    })
                    .state('app.typicons', {
                        url: '/typicons',
                        templateUrl: 'views/typicons.html',
                        ncyBreadcrumb: {
                            label: 'Typicons',
                            description: 'Vector icons'
                        }
                    })
                    .state('app.weathericons', {
                        url: '/weathericons',
                        templateUrl: 'views/weather-icons.html',
                        ncyBreadcrumb: {
                            label: 'Weather Icons',
                            description: 'Beautiful forcasting icons'
                        }
                    })
                    .state('app.tabs', {
                        url: '/tabs',
                        templateUrl: 'views/tabs.html',
                        ncyBreadcrumb: {
                            label: 'Tabs',
                            description: 'Tabs and Accordions'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'app/controllers/accordion.js',
                                            'app/controllers/tab.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('app.alerts', {
                        url: '/alerts',
                        templateUrl: 'views/alerts.html',
                        ncyBreadcrumb: {
                            label: 'Alerts',
                            description: 'Tooltips and Notifications'
                        },
                        resolve: {
                            deps:
                            [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('toaster').then(
                                        function() {
                                            return $ocLazyLoad.load({
                                                    serie: true,
                                                    files: [
                                                        'app/controllers/alert.js',
                                                        'app/controllers/toaster.js'
                                                    ]
                                                }
                                            );
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.modals', {
                        url: '/modals',
                        templateUrl: 'views/modals.html',
                        ncyBreadcrumb: {
                            label: 'Modals',
                            description: 'Modals and Wells'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'app/controllers/modal.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('app.buttons', {
                        url: '/buttons',
                        templateUrl: 'views/buttons.html',
                        ncyBreadcrumb: {
                            label: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'app/controllers/button.js',
                                            'app/controllers/dropdown.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('app.nestedTable', {
                        url: '/SOP',
                        templateUrl: 'views/SOPOverview.html',
                        ncyBreadcrumb: {
                            label: 'SOPs',
                            description: ''
                        },
                       resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					.state('app.quote', {
                        url: '/quote',
                        templateUrl: 'views/quote.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                       resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					.state('app.supportresponsefullunit', {
                        url: '/SupportResponsefullunit',
                        templateUrl: 'views/supportResponsefullUnit.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                       resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					.state('app.salesresponsespareparts', {
                        url: '/salesresponsespareparts',
                        templateUrl: 'views/salesresponseforspareparts.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                       resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					.state('app.marketing', {
                        url: '/marketing',
                        templateUrl: 'views/marketing.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                              'app/controllers/nggrid.js'
													
                                            
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					.state('app.refpictures', {
                        url: '/refpictures',
                        templateUrl: 'views/refpictures.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                              'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
					
					.state('app.quotations', {
                        url: '/quotations',
                        templateUrl: 'views/quotation.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                       resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					
						.state('app.quotationfullunit', {
                        url: '/quotationfullunit',
                        templateUrl: 'views/QuotationResponsefullUnit.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                       resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					.state('app.quotationresponseproject', {
                        url: '/quotationresponseproject',
                        templateUrl: 'views/quotationresponseproject.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                       resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					.state('app.salesresponseforproject', {
                        url: '/salesresponseforproject',
                        templateUrl: 'views/salesresponseforproject.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                       resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					.state('app.quotationspareparts', {
                        url: '/quotationspareparts',
                        templateUrl: 'views/QuotationSpareParts.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                       resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					.state('app.customergroup', {
                        url: '/customergroup',
                        templateUrl: 'views/CustomerGroup.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                       resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					.state('app.industrygroup', {
                        url: '/industrygroup',
                        templateUrl: 'views/IndustryGroup.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                       resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
													 'lib/bootstrap.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					.state('app.currencyMaster', {
                        url: '/currencyMaster',
                        templateUrl: 'views/CurrencyMaster.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                       resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                   'lib/bootstrap.min.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					.state('app.countryMaster', {
                        url: '/countryMaster',
                        templateUrl: 'views/CountryMaster.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                       resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid','minicolors']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
													 'lib/bootstrap.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js',
													'app/controllers/minicolors.js',
													'lib/jquery.minicolors.css'
                                                   
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					.state('app.countryMasterLogo', {
                        url: '/countryMasterLogo',
                        templateUrl: 'views/countryMasterLogo.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                       resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
													 'lib/bootstrap.min.js',
													 'lib/Custom_Popup.css'
                                                    /*'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js',*/
													
                                                   
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					.state('app.PaymenttermsMaster', {
                        url: '/PaymenttermsMaster',
                        templateUrl: 'views/paymentTermGroup.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                       resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
													 'lib/bootstrap.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					.state('app.sumitomoofficemaster', {
                        url: '/sumitomoofficemaster',
                        templateUrl: 'views/SummitomoOfficeMaster.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                       resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                   
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					
					
//-------------------------------

.state('app.fusion', {
                        url: '/fusion',
                        templateUrl: 'views/drilldown.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                       resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    
                                                    'lib/jquery/charts/fusion/fusioncharts.js',
													//'lib/jquery/charts/fusion/fusioncharts.charts.js',													
                                                    'lib/jquery/charts/fusion/fusioncharts.theme.fint.js'                                                   
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })

//-------------------------------
					
					
					.state('app.currencyConverseMaster', {
                        url: '/CurrencyConverseMaster',
                        templateUrl: 'views/CurrencyConverseMaster.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                       resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
                                                   
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					.state('app.project', {
                        url: '/Createproject',
                        templateUrl: 'views/Createproject.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                       resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
													 'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                   
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					.state('app.costReview', {
                        url: '/costReview',
                        templateUrl: 'views/costReview.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                       resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
													 'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                   
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
					.state('app.projectDocumentMaster', {
                        url: '/ProjectDocumentMaster',
                        templateUrl: 'views/ProjectDocumentMaster.html',
                        ncyBreadcrumb: {
                            label: '',
                            description: ''
                        },
                       resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
													 'app/controllers/modal.js',
													 'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                   
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }
                    })
                    .state('app.treeview', {
                        url: '/treeview',
                        templateUrl: 'views/treeview.html',
                        ncyBreadcrumb: {
                            label: 'Treeview',
                            description: "Fuel UX's tree"
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['angularBootstrapNavTree']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/treeview.js'
                                                ]
                                            });
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.simpletables', {
                        url: '/simpletables',
                        templateUrl: 'views/tables-simple.html',
                        ncyBreadcrumb: {
                            label: 'Tables',
                            description: 'simple and responsive tables'
                        }
                    })
                    .state('app.datatables', {
                        url: '/datatables',
                        templateUrl: 'views/tables-data.html',
                        ncyBreadcrumb: {
                            label: 'Datatables',
                            description: 'jquery plugin for data management'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ngGrid']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/nggrid.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.css',
                                                    'lib/jquery/datatable/jquery.dataTables.min.js',
                                                    'lib/jquery/datatable/ZeroClipboard.js',
                                                    'lib/jquery/datatable/dataTables.tableTools.min.js',
                                                    'lib/jquery/datatable/dataTables.bootstrap.min.js',
                                                    'app/controllers/datatable.js'
                                                ]
                                            });
                                        }
                                    );

                                }
                            ]
                        }

                    })
                    .state('app.formlayout', {
                        url: '/formlayout',
                        templateUrl: 'views/form-layout.html',
                        ncyBreadcrumb: {
                            label: 'Form Layouts'
                        }
                    })
                    .state('app.forminputs', {
                        url: '/forminputs',
                        templateUrl: 'views/form-inputs.html',
                        ncyBreadcrumb: {
                            label: 'Form Inputs'
                        }
                    })
                    .state('app.formpickers', {
                        url: '/formpickers',
                        templateUrl: 'views/form-pickers.html',
                        ncyBreadcrumb: {
                            label: 'Form Pickers',
                            description: 'Data Pickers '
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ui.select', 'ngTagsInput', 'daterangepicker', 'vr.directives.slider', 'minicolors', 'dropzone']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/select2.js',
                                                    'app/controllers/tagsinput.js',
                                                    'app/controllers/datepicker.js',
                                                    'app/controllers/timepicker.js',
                                                    'app/controllers/daterangepicker.js',
                                                    'lib/jquery/fuelux/spinbox/fuelux.spinbox.js',
                                                    'lib/jquery/knob/jquery.knob.js',
                                                    'lib/jquery/textarea/jquery.autosize.js',
                                                    'app/controllers/slider.js',
                                                    'app/controllers/minicolors.js'
                                                ]
                                            });
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.formwizard', {
                        url: '/formwizard',
                        templateUrl: 'views/form-wizard.html',
                        ncyBreadcrumb: {
                            label: 'Form Wizard'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/fuelux/wizard/wizard-custom.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('app.formvalidation', {
                        url: '/formvalidation',
                        templateUrl: 'views/form-validation.html',
                        ncyBreadcrumb: {
                            label: 'Form Validation',
                            description: 'Bootstrap Validator'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'app/controllers/validation.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('app.formeditors', {
                        url: '/formeditors',
                        templateUrl: 'views/form-editors.html',
                        ncyBreadcrumb: {
                            label: 'Form Editors'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['textAngular']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/textangular.js'
                                                ]
                                            });
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.forminputmask', {
                        url: '/forminputmask',
                        templateUrl: 'views/form-inputmask.html',
                        ncyBreadcrumb: {
                            label: 'Form Input Mask'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/inputmask/jasny-bootstrap.min.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('app.flot', {
                        url: '/flot',
                        templateUrl: 'views/flot.html',
                        ncyBreadcrumb: {
                            label: 'Flot Charts',
                            description: 'attractive plotting'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'app/directives/realtimechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.selection.js',
                                            'lib/jquery/charts/flot/jquery.flot.crosshair.js',
                                            'lib/jquery/charts/flot/jquery.flot.stack.js',
                                            'lib/jquery/charts/flot/jquery.flot.time.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'app/controllers/flot.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('app.morris', {
                        url: '/morris',
                        templateUrl: 'views/morris.html',
                        ncyBreadcrumb: {
                            label: 'Morris Charts',
                            description: 'simple & flat charts'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/morris/raphael-2.0.2.min.js',
                                            'lib/jquery/charts/morris/morris.js',
                                            'app/controllers/morris.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('app.sparkline', {
                        url: '/sparkline',
                        templateUrl: 'views/sparkline.html',
                        ncyBreadcrumb: {
                            label: 'Sparkline',
                            description: 'inline charts'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('app.easypiechart', {
                        url: '/easypiechart',
                        templateUrl: 'views/easypiechart.html',
                        ncyBreadcrumb: {
                            label: 'Easy Pie Charts',
                            description: 'lightweight charts'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('app.chartjs', {
                        url: '/chartjs',
                        templateUrl: 'views/chartjs.html',
                        ncyBreadcrumb: {
                            label: 'ChartJS',
                            description: 'Cool HTML5 Charts'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/chartjs/chart.js',
                                            'app/controllers/chartjs.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('app.profile', {
                        url: '/profile',
                        templateUrl: 'views/profile.html',
                        ncyBreadcrumb: {
                            label: 'User Profile'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'app/controllers/profile.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('app.inbox', {
                        url: '/inbox',
                        templateUrl: 'views/inbox.html',
                        ncyBreadcrumb: {
                            label: 'Beyond Mail'
                        }
                    })
                    .state('app.messageview', {
                        url: '/viewmessage',
                        templateUrl: 'views/message-view.html',
                        ncyBreadcrumb: {
                            label: 'Veiw Message'
                        }
                    })
                    .state('app.messagecompose', {
                        url: '/composemessage',
                        templateUrl: 'views/message-compose.html',
                        ncyBreadcrumb: {
                            label: 'Compose Message'
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['textAngular']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/textangular.js'
                                                ]
                                            });
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.calendar', {
                        url: '/calendar',
                        templateUrl: 'views/calendar.html',
                        ncyBreadcrumb: {
                            label: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['ui.calendar']).then(
                                        function() {
                                            return $ocLazyLoad.load(
                                            {
                                                serie: true,
                                                files: [
                                                    'app/controllers/fullcalendar.js'
                                                ]
                                            });
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.timeline', {
                        url: '/timeline',
                        templateUrl: 'views/timeline.html',
                        ncyBreadcrumb: {
                            label: 'Responsive Timeline'
                        }
                    })
                    .state('app.pricing', {
                        url: '/pricing',
                        templateUrl: 'views/pricing.html',
                        ncyBreadcrumb: {
                            label: 'Pricing Tables'
                        }
                    })
                    .state('app.invoice', {
                        url: '/invoice',
                        templateUrl: 'views/invoice.html',
                        ncyBreadcrumb: {
                            label: 'Invoice Page'
                        }
                    })
                    .state('login', {
                        url: '/login',
                        templateUrl: 'views/login.html',
                        ncyBreadcrumb: {
                            label: 'Login'
                        }
                    })
                    .state('register', {
                        url: '/register',
                        templateUrl: 'views/register.html',
                        ncyBreadcrumb: {
                            label: 'Register'
                        }
                    })
                    .state('lock', {
                        url: '/lock',
                        templateUrl: 'views/lock.html',
                        ncyBreadcrumb: {
                            label: 'Lock Screen'
                        }
                    })
                    .state('app.typography', {
                        url: '/typography',
                        templateUrl: 'views/typography.html',
                        ncyBreadcrumb: {
                            label: 'Typography'
                        }
                    })
                    .state('error404', {
                        url: '/error404',
                        templateUrl: 'views/error-404.html',
                        ncyBreadcrumb: {
                            label: 'Error 404 - The page not found'
                        }
                    })
                    .state('error500', {
                        url: '/error500',
                        templateUrl: 'views/error-500.html',
                        ncyBreadcrumb: {
                            label: 'Error 500 - something went wrong'
                        }
                    })
                    .state('app.blank', {
                        url: '/blank',
                        templateUrl: 'views/blank.html',
                        ncyBreadcrumb: {
                            label: 'Blank Page'
                        }
                    })
                    .state('app.grid', {
                        url: '/grid',
                        templateUrl: 'views/grid.html',
                        ncyBreadcrumb: {
                            label: 'Bootstrap Grid'
                        }
                    })
                    .state('app.versions', {
                        url: '/versions',
                        templateUrl: 'views/versions.html',
                        ncyBreadcrumb: {
                            label: 'BeyondAdmin Versions'
                        }
                    })
                    .state('app.mvc', {
                        url: '/mvc',
                        templateUrl: 'views/mvc.html',
                        ncyBreadcrumb: {
                            label: 'BeyondAdmin Asp.Net MVC Version'
                        }
                    });
            }
        ]
    );