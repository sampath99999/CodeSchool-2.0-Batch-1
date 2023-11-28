myApp.controller('DonateController',function($scope,$http,$rootScope,$state){
    $scope.submit=()=>{
        var files = document.getElementById('files').files[0];
        if(!$scope.name){
            $scope.error='DOG NAME IS REQUIRED!'
            return
        }
        if(!files){
            $scope.error=' IMAGE IS REQUIRED!'
            return
        }
        $scope.error=''
        const formData = new FormData();
        formData.append('name',$scope.name)
        formData.append("file",files);
        token=localStorage.getItem('token')
        $http.post($rootScope.server_url+'uploads', formData, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined,'Authorization':"Bearer "+token}

        }).then(function (response) {
            if(response.data.status){
                $state.go('adopt')
            }
            else{
                console.log(response.data)
            }
            
        }).catch(function(error){
            console.log(error)
        });
    }
})