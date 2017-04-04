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

$scope.contColor = { "background-color" : "#D63932" };

}]);

myApp.controller('workController', ['$scope', function($scope) {

$scope.contColor = { "background-color" : "#032A2F" };

}]);

myApp.controller('projectController', ['$scope', function($scope) {

$scope.contColor = { "background-color" : "#032A2F" };

}]);


myApp.controller('contactController', ['$scope', function($scope) {

$scope.contColor = { "background-color" : "#076F8A" };

}]);

// FACTORIES / SERVICES
//////////////////////////////////////////////////

myApp.factory('projects', function() {
   
   var projectObject = [
   {
   	"title": "Project 1",
   	"client": "Client 1",
   	"year": "Year 1",
   	"desc": "Desc 1",
   	"img": "assets/images/about-view.jpg",
   	"highlights": "Highlights 1",
   	"tools": "Tools 1"
   },
   {
   	"title": "Project 2",
   	"client": "Client 2",
   	"year": "Year 2",
   	"desc": "Desc 2",
   	"img": "assets/images/about-view.jpg",
   	"highlights": "Highlights 2",
   	"tools": "Tools 2"
   },
   {
   	"title": "Project 3",
   	"client": "Client 3",
   	"year": "Year 3",
   	"desc": "Desc 3",
   	"img": "assets/images/about-view.jpg",
   	"highlights": "Highlights 3",
   	"tools": "Tools 3"
   }
   ];

		return projectObject;
  
});

// DIRECTIVES
//////////////////////////////////////////////////

myApp.directive("projects", ['projects', function(projects) {
	return {
		templateUrl: 'directives/project.html',
		replace: false,
		scope: {
			projectObject: "="
		},
		link: function (scope, element, attributes) {

    }
	};
}]);