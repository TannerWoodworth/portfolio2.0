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
   	"desc": "This website was created simply to learn Angular 1. ",
   	"img": "assets/images/flashcard-app.png",
   	"link": "https://github.com/TannerWoodworth/flashcardApp",
   	"objective": "Create a barebone flashcard application.",
   	"highlights": "Lack of elements and green color scheme used to promote focus on the content of the cards.",
   	"tools": "AngularJS, Gulp, Sass, unit tests with Karma and Jasmine (WIP)"
   },
   {
   	"id": 1,
   	"title": "Acute Network Site Design",
   	"url": "acute-network",
   	"client": "Side Project",
   	"year": "2017",
   	"desc": "The Acute Podcasting Network is an ongoing side project. The focus of the network is to produce high-quality and engaging content across multiple mediums. ",
   	"img": "assets/images/acute-network.png",
   	"link": "/docs/acuteNetwork.pdf",
   	"objective": "Provide a location for listeners to view and listen to content on the Acute network.",
   	"highlights": "Shows are color coordinated to help separate them and make them more identifiable.",
   	"tools": "Sketch and Adobe Photoshop"
   },
   {
   	"id": 2,
   	"title": "BluePaper Media",
   	"url": "bluepaper-media",
   	"client": "Student Project",
   	"year": "2016",
   	"desc": "BluePaper media is a fictitious design agency conceived by a group of web design students at Pittsburgh Technical College. For this assignment we were tasked to work as a team to design and develop a fake company website. ",
   	"img": "assets/images/bluepaper.png",
   	"link": "http://tannerwoodworth.com/projects/bpm/index.html",
   	"objective": "To sell services of a fictional web development company.",
   	"highlights": "An animated timeline using CSS animations and triggered with JS to show company's process of making websites. Designed with Twitter Bootstrap's framework. The site uses a working PHP-driven form that takes content of the form's fields and concatinates it into an email to send to the company for potential clients to fill out.",
   	"tools": "Adobe Illustrator, Adobe Photoshop, Twitter Bootstrap, animate.css, and wow.js "
   },
   {
   	"id": 3,
   	"title": "SpeedyMama Web Hosting",
   	"url": "speedymama-web-hosting",
   	"client": "Student Project",
   	"year": "2016",
   	"desc": "SpeedyMama Web Hosting is a fictitious company. This site won 'Best in Show' at Pittsburgh Technical College's Spring 2016 portfolio show. The piece was judged based on overall aesthetic, efficiet use of technologies, efficiency of code, and how well the site completed its overall goal.",
   	"img": "assets/images/speedymama.png",
   	"link": "http://tannerwoodworth.github.io/",
   	"objective": "Sell services of a fictitious web hosting company.",
   	"highlights": "The site was deployed using Gulp. The plugins included minify all code and optomize images for the web. Custom graphs built with the HighCharts library are used to help illustrate with selling of services. Site styled with LESS, which allows shorthand code to be compiled into a readable CSS file for browsers.",
   	"tools": "Jekyll, Gulp, LESS, and HighCharts"
   },
   {
   	"id": 4,
   	"title": "Craig Bethel Audition Video",
   	"url": "craig-bethel-audition",
   	"client": "Craig Northrop",
   	"year": "2014",
   	"desc": "Craig approached me about helping him with his audition video for Bethel's worship team. This video project was shot over two days at the Salt Church in Corry, PA.",
   	"img": "assets/images/craig-bethel.jpg",
   	"link": "https://www.youtube.com/watch?v=Xn6yP-B059s",
   	"objective": "Demonstrate musical talent and give brief overview of Craig's background.",
   	"highlights": "",
   	"tools": "Final Cut Pro X and Adobe Audition"
   },
   {
   	"id": 5,
   	"title": "AfroDjMac ALP Cover",
   	"url": "adm-pack-cover",
   	"client": "AfroDjMac",
   	"year": "2014",
   	"desc": "Brian Funk, a.k.a. AfroDjMac, is a musician, producer, songwriter, and Ableton Certified Trainer who loves to share his work and knowledge about music production. He has created numerous Ableton Live Packs to sell (and give out) to fellow musicians. For this project, Brian asked that I create a cover for his 8-bit Drums and 8-Bit Synths ALPs that resembled the packaging for old Nintendo games.",
   	"img": "assets/images/adm.jpg",
   	"link": "https://www.behance.net/gallery/13580671/8-Bit-Drums-(Nintendo-Styled-Game-Case)",
   	"objective": "Create a cover that had the appearence of an old Nindendo system game.",
   	"highlights": "Custom drawn pixel snare drum. Worn textures used to help give an aged appearence.",
   	"tools": "Adobe Illustrator and Adobe Photoshop"
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