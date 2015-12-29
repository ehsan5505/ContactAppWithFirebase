'use strict';

// Declare app level module which depends on views, and components
angular.module('ess', [
  'ngRoute',
  'firebase',
  'ess.contacts'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/contacts'});
}]);
