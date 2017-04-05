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

	.when('/project/:projectId/:projectTitle', {
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

	$scope.currentProject = projects[$routeParams.projectId];
	$scope.projectTitle = $scope.currentProject.title;
	$scope.projectClient = $scope.currentProject.client;
	$scope.projectYear = $scope.currentProject.year;
	$scope.projectDesc = $scope.currentProject.desc;
	$scope.projectImg = $scope.currentProject.img;
	$scope.projectHighlights = $scope.currentProject.highlights;
	$scope.projectTools = $scope.currentProject.tools;
	$scope.projectLink = $scope.currentProject.link;



}]);


myApp.controller('contactController', ['$scope', function($scope) {

	$scope.contColor = { "background-color" : "#076F8A" };

}]);

// FACTORIES / SERVICES
//////////////////////////////////////////////////

myApp.service('projects', function() {
   
   var portfolioProjects = [
   {
   	"id": 0,
   	"title": "Project 1",
   	"url": "project-1",
   	"client": "Client 1",
   	"year": "2017",
   	"desc": "Desc 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium adipisci debitis quidem itaque doloribus. Id tenetur quos reiciendis quasi labore quidem a, ab itaque, eum est. Sunt ea nesciunt ut.",
   	"img": "assets/images/about-view.jpg",
   	"link": "#",
   	"highlights": "Highlights 1",
   	"tools": "Tools 1"
   },
   {
   	"id": 1,
   	"title": "Project 2",
   	"url": "project-2",
   	"client": "Client 2",
   	"year": "2017",
   	"desc": "Desc 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium adipisci debitis quidem itaque doloribus. Id tenetur quos reiciendis quasi labore quidem a, ab itaque, eum est. Sunt ea nesciunt ut.",
   	"img": "assets/images/about-view.jpg",
   	"link": "#",
   	"highlights": "Highlights 2",
   	"tools": "Tools 2"
   },
   {
   	"id": 2,
   	"title": "Project 3",
   	"url": "project-3",
   	"client": "Client 3",
   	"year": "2017",
   	"desc": "Desc 3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium adipisci debitis quidem itaque doloribus. Id tenetur quos reiciendis quasi labore quidem a, ab itaque, eum est. Sunt ea nesciunt ut.",
   	"img": "assets/images/about-view.jpg",
   	"link": "#",
   	"highlights": "Highlights 3",
   	"tools": "Tools 3"
   },
   {
   	"id": 3,
   	"title": "Project 4",
   	"url": "project-4",
   	"client": "Client 4",
   	"year": "2017",
   	"desc": "Desc 4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium adipisci debitis quidem itaque doloribus. Id tenetur quos reiciendis quasi labore quidem a, ab itaque, eum est. Sunt ea nesciunt ut.",
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