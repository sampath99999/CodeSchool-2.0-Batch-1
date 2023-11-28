myApp.controller('RequestController',function($scope,$rootScope,$http){
    $http.get($rootScope.server_url+'get_request')
    .then(function(response){
        if(response.data.status){
            console.log(response.data.data)
            $scope.requests = response.data.data;
        }else{
            console.log(response.data);
        }
    }).catch(function(error){
        console.log(error)
    });
    $scope.approve = function(id,name){
        $http.post($rootScope.server_url+'status_update',{upload_id:id,name})
        .then(function(response){
            if(response.data.status){
                location.reload();
            }else{
                console.log(response.data)
            }
        }).catch(function(error){
            console.log(error)
        });
    }

})