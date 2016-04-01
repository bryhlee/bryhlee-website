
var app = angular.module('bryhlee-website', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/about'
      })
      .when('/about', {
        templateUrl: 'views/home.html'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
    $locationProvider.html5Mode(true);
  }]
);

app.controller('dialogController', function($scope) {
  // Position: sticky polyfill
  $('.sticky').Stickyfill();
  
  // Smoothscroll on dialog links
  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 300, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

app.controller('projectController', function($scope) {
  // Prevent image drag
  $('img').on('dragstart', function(event) { event.preventDefault(); });
});