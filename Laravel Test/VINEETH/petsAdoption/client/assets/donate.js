myApp.controller('DonateController',function($scope,$http,$rootScope){
    $scope.submit=()=>{
        var files = document.getElementById('files').files[0];
        const formData = new FormData();
        formData.append('name',$scope.name)
        formData.append("file",files);
        console.log(formData )
        token=localStorage.getItem('token')

        $http.post($rootScope.server_url+'uploads', formData, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined,'Authorization':"Bearer "+token}

        }).then(function (response) {
            console.log(response)
            
        }).catch(function(error){
            console.log(error)

        });
    }
})