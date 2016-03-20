
var app = angular.module('bryhlee-website', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .when('/about', {
        templateUrl: 'views/home.html'
      })
    $locationProvider.html5Mode(true);
  }]
);

app.controller('dialogController', function($scope) {
    $('.sticky').Stickyfill();
  
    
});