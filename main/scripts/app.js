
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
    $locationProvider.html5Mode(true);
  }]
);

app.controller('dialogController', function($scope) {
    $('.sticky').Stickyfill();
  
    
});