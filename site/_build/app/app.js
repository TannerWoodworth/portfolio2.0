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

	.when('/project', {
		templateUrl:'app/components/project/project.html',
		controller:'projectController'
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

$scope.contColor = { "background-color" : "#DE6161" };

}]);

myApp.controller('workController', ['$scope', function($scope) {

$scope.contColor = { "background-color" : "#A8D0E6" };

}]);

myApp.controller('projectController', ['$scope', function($scope) {

$scope.contColor = { "background-color" : "#A8D0E6" };

}]);


myApp.controller('contactController', ['$scope', function($scope) {

$scope.contColor = { "background-color" : "#FAABAB" };

}]);

// FACTORIES / SERVICES
//////////////////////////////////////////////////


// DIRECTIVES
//////////////////////////////////////////////////