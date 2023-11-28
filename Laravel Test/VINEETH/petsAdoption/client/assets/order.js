myApp.controller('OrderController',function($scope,$http,$rootScope){

     $http.get($rootScope.server_url+'get_order')
     .then(function(response){
        console.log(response.data)
        if(response.data.status){
          $scope.orders = response.data.data;
        }
        else{
          console.log(response.data)
        }
      }).catch(function(error){
        console.log(error)
      });
})