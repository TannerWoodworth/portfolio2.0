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

myApp.controller('projectController', ['$scope', '$routeParams', '$anchorScroll', 'projects', function($scope, $routeParams, $anchorScroll, projects) {

	$scope.contColor = { "background-color" : "#032A2F" };

	$anchorScroll();

	$scope.currentProject = projects[$routeParams.projectId];
	$scope.projectTitle = $scope.currentProject.title;
	$scope.projectClient = $scope.currentProject.client;
	$scope.projectYear = $scope.currentProject.year;
	$scope.projectDesc = $scope.currentProject.desc;
	$scope.projectImg = $scope.currentProject.img;
	$scope.projectHighlights = $scope.currentProject.highlights;
	$scope.projectObjective = $scope.currentProject.objective;
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
   	"title": "Flashcard App",
   	"url": "flashcard-app",
   	"client": "Side Project",
   	"year": "2017",
   	"desc": "Desc 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium adipisci debitis quidem itaque doloribus. Id tenetur quos reiciendis quasi labore quidem a, ab itaque, eum est. Sunt ea nesciunt ut.",
   	"img": "assets/images/flashcard-app.png",
   	"link": "https://github.com/TannerWoodworth/flashcardApp",
   	"objective": "Objective 1",
   	"highlights": "Highlights 1",
   	"tools": "Tools 1"
   },
   {
   	"id": 1,
   	"title": "Acute Network Site Design",
   	"url": "acute-network",
   	"client": "Side Project",
   	"year": "2017",
   	"desc": "Desc 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium adipisci debitis quidem itaque doloribus. Id tenetur quos reiciendis quasi labore quidem a, ab itaque, eum est. Sunt ea nesciunt ut.",
   	"img": "assets/images/acute-network.png",
   	"link": "#",
   	"objective": "Objective 2",
   	"highlights": "Highlights 2",
   	"tools": "Tools 2"
   },
   {
   	"id": 2,
   	"title": "BluePaper Media",
   	"url": "bluepaper-media",
   	"client": "Student Project",
   	"year": "2016",
   	"desc": "Desc 3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium adipisci debitis quidem itaque doloribus. Id tenetur quos reiciendis quasi labore quidem a, ab itaque, eum est. Sunt ea nesciunt ut.",
   	"img": "assets/images/bluepaper.png",
   	"link": "http://tannerwoodworth.com/projects/bpm/index.html",
   	"objective": "Objective 3",
   	"highlights": "Highlights 3",
   	"tools": "Tools 3"
   },
   {
   	"id": 3,
   	"title": "SpeedyMama Web Hosting",
   	"url": "speedymama-web-hosting",
   	"client": "Student Project",
   	"year": "2016",
   	"desc": "Desc 4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium adipisci debitis quidem itaque doloribus. Id tenetur quos reiciendis quasi labore quidem a, ab itaque, eum est. Sunt ea nesciunt ut.",
   	"img": "assets/images/speedymama.png",
   	"link": "http://tannerwoodworth.github.io/",
   	"objective": "Objective 4",
   	"highlights": "Highlights 4",
   	"tools": "Tools 4"
   },
   {
   	"id": 4,
   	"title": "Craig Bethel Audition Video",
   	"url": "craig-bethel-audition",
   	"client": "Craig Northrup",
   	"year": "2014",
   	"desc": "Desc 4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium adipisci debitis quidem itaque doloribus. Id tenetur quos reiciendis quasi labore quidem a, ab itaque, eum est. Sunt ea nesciunt ut.",
   	"img": "assets/images/craig-bethel.jpg",
   	"link": "https://www.youtube.com/watch?v=Xn6yP-B059s",
   	"objective": "Objective 4",
   	"highlights": "Highlights 4",
   	"tools": "Tools 4"
   },
   {
   	"id": 5,
   	"title": "ADM Pack Cover",
   	"url": "adm-pack-cover",
   	"client": "AfroDjMac",
   	"year": "2014",
   	"desc": "Desc 4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium adipisci debitis quidem itaque doloribus. Id tenetur quos reiciendis quasi labore quidem a, ab itaque, eum est. Sunt ea nesciunt ut.",
   	"img": "assets/images/adm.jpg",
   	"link": "https://www.behance.net/gallery/13580671/8-Bit-Drums-(Nintendo-Styled-Game-Case)",
   	"objective": "Objective 4",
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