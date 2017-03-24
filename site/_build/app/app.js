var myApp = angular.module('myApp', ['ngRoute']);

// ROUTES
//////////////////////////////////////////////////

myApp.config(function ($routeProvider, $locationProvider){

$locationProvider.hashPrefix('');

	$routeProvider
	.when('/', {
		templateUrl:'app/components/landing/landing.html',
		controller:'landingController'
	})
	
	.when('/about', {
		templateUrl:'app/components/about/about.html',
		controller:'aboutController'
	})

	.when('/work', {
		templateUrl:'app/components/work/work.html',
		controller:'workController'
	})

	.when('/contact', {
		templateUrl:'app/components/contact/contact.html',
		controller:'contactController'
	});

});

// CONTROLERS
//////////////////////////////////////////////////

myApp.controller('landingController', ['$scope', function($scope) {


}]); 

myApp.controller('aboutController', ['$scope', function($scope) {

bgColor = '#DE6161';

}]);

myApp.controller('workController', ['$scope', function($scope) {


}]);

myApp.controller('contactController', ['$scope', function($scope) {


}]);

// FACTORIES / SERVICES
//////////////////////////////////////////////////


// DIRECTIVES
//////////////////////////////////////////////////