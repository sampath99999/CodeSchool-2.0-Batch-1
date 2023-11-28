myApp.controller('SeeController',function($scope,$http,$rootScope){


    $http.get($rootScope.server_url+'get_data')
    .then(function(response){
        console.log(response.data)
        if(response.data.status){
            $scope.data=response.data.data
        }
        else{
            console.log(response.data)
        } 
    }).catch(function(error){
        console.log(error)
    });

})