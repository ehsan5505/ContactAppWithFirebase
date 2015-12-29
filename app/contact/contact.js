'use stricy';


angular.module('ess.contacts', ['ngRoute','firebase'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/contacts',{
        templateUrl:'contact/contact.html',
        controller:'ContactsCntr'
    })
}])
    .controller('ContactsCntr',['$scope','$firebaseArray',function($scope,$firebaseArray){
        
        $scope.addContact = function(contact){
            $scope.varAddContact = true;
        }
        
        var ref = new Firebase('https://ess-contact.firebaseio.com/');
        $scope.contacts = $firebaseArray(ref);
        console.log($scope.contacts);  
    }])

// .config(['$routeProvider',function($routeProvider){
//     $routeProvider.when('/contacts',{
//         templateUrl : 'contact/contact.html',
//         controller : 'ContactsCntr'
//     });
// }])
// .controller('ContactsCntr',[function(){
//     console.log("Issue Resolved");
// }]);

// 'use strict';

// angular.module('ess.templates', ['ngRoute'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/template', {
//     templateUrl: 'template/template.html',
//     controller: 'TempCntr'
//   });
// }])

// .controller('TempCntr', [function() {

// }]);