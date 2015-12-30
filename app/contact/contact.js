'use stricy';


angular.module('ess.contacts', ['ngRoute','firebase'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/contacts',{
        templateUrl:'contact/contact.html',
        controller:'ContactsCntr'
    })
}])
    .controller('ContactsCntr',['$scope','$firebaseArray',function($scope,$firebaseArray){
        
        var ref = new Firebase('https://ess-contact.firebaseio.com/');
        $scope.contacts = $firebaseArray(ref);
        console.log($scope.contacts);
        
        $scope.editContactSubmit = function(){
            
            record = $scope.contacts.$getRecord($scope.id);
            record.name = $scope.name;
            record.fname = $scope.fname;
            record.email = $scope.email;
            record.social = $scope.social;
            record.skype = $scope.skype;
            record.company = $scope.company;
            record.website = $scope.website;
            record.phone[0].work = $scope.work;
            record.phone[0].home = $scope.home;
            record.phone[0].cell = $scope.cell;
            record.address[0].street = $scope.street;
            record.address[0].city = $scope.city;
            record.address[0].state = $scope.state;
            record.address[0].zip = $scope.zip;
            
            $scope.contacts.$save(record).then(function(ref){
                $scope.msg = ref.key()+" data has been updated";
            });
            
            clearFields();
            $scope.hide();
            
         
        }
        
        $scope.showContact = function(data){
            // console.log("Show contact is working");
            $scope.name = data.name;
            $scope.fname = data.fname;
            $scope.email = data.email;
            $scope.social = data.social;
            $scope.company = data.company;
            $scope.website = data.website;
            $scope.cell = data.phone[0].cell;
            $scope.home = data.phone[0].home;
            $scope.work = data.phone[0].work;
            $scope.street = data.address[0].street;
            $scope.city = data.address[0].city;
            $scope.state = data.address[0].state;
            $scope.skype = data.skype;
            $scope.zip = data.address[0].zip;
            
            $scope.varShowContact = true;
            
        }
        
        $scope.editContact = function(data){
            $scope.name = data.name;
            $scope.fname = data.fname;
            $scope.email = data.email;
            $scope.social = data.social;
            $scope.skype = data.skype;
            $scope.company = data.company;
            $scope.website = data.website;
            $scope.cell = data.phone[0].cell;
            $scope.home = data.phone[0].home;
            $scope.work = data.phone[0].work;
            $scope.street = data.address[0].street;
            $scope.city = data.address[0].city;
            $scope.state = data.address[0].state;
            $scope.zip = data.address[0].zip;
            $scope.id = data.$id;
            
            $scope.varEditContact = true;
        }
        
        $scope.addContact = function(){
            $scope.varAddContact = true;
        }
        
        $scope.hide = function(){
            $scope.varAddContact = false;
            $scope.varShowContact = false;
            $scope.varEditContact = false;
        }
        
        $scope.addContactSubmit = function(){
         
         if($scope.name)    { var name = $scope.name; }         else{ var name = null; }
         if($scope.fname){ var fname = $scope.fname; }          else{ var fname = null; }
         if($scope.workPhone){ var work = $scope.workPhone; }   else{ var work = null; }
         if($scope.cellPhone)    { var cell = $scope.cellPhone; } else{ var cell = null; }
         if($scope.homePhone)    { var home = $scope.homePhone; } else{ var home = null; }
         if($scope.skype)    { var skype = $scope.skype; }      else{ var skype = null; }
         if($scope.email)    { var email = $scope.email; }      else{ var email = null; }
         if($scope.social)    { var social = $scope.social; }   else{ var social = null; }
         if($scope.company)    { var company = $scope.company; }else{ var company = null; }
         if($scope.website)    { var website = $scope.website; }else{ var website = null; }
         
         if($scope.streetAddress)    { var street = $scope.streetAddress; }  else{ var street = null; }
         if($scope.city)        { var city = $scope.city; }     else{ var city = null; }
         if($scope.state)       { var state = $scope.state; }   else{ var state = null; }
         if($scope.zip)         { var zip = $scope.zip; }       else{ var zip = null; }
         
         $scope.contacts.$add({
             name : name,
             fname : fname,
             phone : [{
                 cell : cell,
                 home : home,
                 work : work
             }],
             address : [{
                 street : street,
                 city : city,
                 state : state,
                 zip : zip
             }],
             skype : skype,
             email : email,
             social : social,
             company : company,
             website : website
         }).then(function(ref){
             var id = ref.key();
             console.log("Contact has been added with ID: "+id);
             clearFields();
             $scope.varAddContact = false;
             $scope.msg="Contact has been added with ID: "+id;
         })
         
         
        }
        
        function clearFields(){
            $scope.name = null;
            $scope.fname = null;
            $scope.work = null;
            $scope.home = null;
            $scope.cell = null;
            $scope.skype = null;
            $scope.email = null;
            $scope.social = null;
            $scope.company = null;
            $scope.website = null;
            $scope.street = null;
            $scope.city = null;
            $scope.zip = null;
            $scope.state = null;
        }
        
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