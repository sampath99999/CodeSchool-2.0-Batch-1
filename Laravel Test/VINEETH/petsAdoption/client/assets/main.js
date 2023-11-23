myApp=angular.module('MyApp',['ui.router'])
myApp.controller('MainController',function($scope,$rootScope){
    
   
})
myApp.run(function($rootScope){
    $rootScope.server_url='http://127.0.0.1:8000/api/';
})
