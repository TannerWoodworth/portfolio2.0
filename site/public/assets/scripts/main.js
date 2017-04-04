(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

	.when('/project/:project', {
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

myApp.controller('workController', ['$scope', 'projects', function($scope, projects) {

$scope.contColor = { "background-color" : "#032A2F" };

	$scope.projects = projects;
	console.log($scope.projects);

}]);

myApp.controller('projectController', ['$scope', '$routeParams', 'projects', function($scope, $routeParams, projects) {

	$scope.contColor = { "background-color" : "#032A2F" };

}]);


myApp.controller('contactController', ['$scope', function($scope) {

	$scope.contColor = { "background-color" : "#076F8A" };

}]);

// FACTORIES / SERVICES
//////////////////////////////////////////////////

myApp.service('projects', function() {
   
   var portfolioProjects = [
   {
   	"id": 1,
   	"title": "Project 1",
   	"url": "project-1",
   	"client": "Client 1",
   	"year": "Year 1",
   	"desc": "Desc 1",
   	"img": "assets/images/about-view.jpg",
   	"link": "#",
   	"highlights": "Highlights 1",
   	"tools": "Tools 1"
   },
   {
   	"id": 2,
   	"title": "Project 2",
   	"url": "project-2",
   	"client": "Client 2",
   	"year": "Year 2",
   	"desc": "Desc 2",
   	"img": "assets/images/about-view.jpg",
   	"link": "#",
   	"highlights": "Highlights 2",
   	"tools": "Tools 2"
   },
   {
   	"id": 3,
   	"title": "Project 3",
   	"url": "project-3",
   	"client": "Client 3",
   	"year": "Year 3",
   	"desc": "Desc 3",
   	"img": "assets/images/about-view.jpg",
   	"link": "#",
   	"highlights": "Highlights 3",
   	"tools": "Tools 3"
   },
   {
   	"id": 4,
   	"title": "Project 4",
   	"url": "project-4",
   	"client": "Client 4",
   	"year": "Year 4",
   	"desc": "Desc 4",
   	"img": "assets/images/about-view.jpg",
   	"link": "#",
   	"highlights": "Highlights 4",
   	"tools": "Tools 4"
   }
   ];

		return portfolioProjects;
  
});

// DIRECTIVES
//////////////////////////////////////////////////

myApp.directive("portfolioItem", ['projects', function(projects) {
	return {
		templateUrl: 'app/directives/project.html',
		replace: false,
		scope: {
			projectObject: "="
		},
		link: function (scope, element, attributes) {

    }
	};
}]);
},{}]},{},[1]);
