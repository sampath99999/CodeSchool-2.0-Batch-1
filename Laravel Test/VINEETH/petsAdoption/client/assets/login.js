myApp.controller('LoginController',function($scope,$rootScope,$http,$state,$window){
    $scope.login_form=true
    $scope.registration_form=false
    $scope.show_registration=()=>{
        $scope.login_form=false
        $scope.registration_form=true
    }
    $scope.show_login=()=>{
        $scope.login_form=true
        $scope.registration_form=false
    }
    $scope.login=()=>{
        if(!$scope.login_email){
            $scope.error='EMAIL IS REQUIRED'
            return 
        }
        if(!$scope.login_password){
            $scope.error='PASSWORD IS REQUIRED'
            return
        }
        if($scope.login_email &&$scope.login_password ){
            $http.post($rootScope.server_url+'login',{email:$scope.login_email,password:$scope.login_password})
            .then(function(response){
                console.log(response.data)
                if(response.data.status){
                    localStorage.setItem('token',response.data.data.token)
                    const home=$state.href('home')
                    $window.location.replace(home) 
                }
            }).catch(function(error){
                console.log(error)
            });
        } 
    }
    $scope.register=()=>{
        if(! $scope.register_name){
            $scope.errors="INVALID NAME FORMAT";
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test($scope.register_email )) {
            $scope.errors="INVALID EMAIL FORMAT";
            return;
        }
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordRegex.test($scope.register_password)) {
            $scope.errors="PASSWORD MUST BE AT LEAST 8 CHARACTERS LONG AND INCLUDE AT LEAST ONE UPPERCASE LETTER, ONE LOWERCASE LETTER, AND ONE NUMBER.";
            return;
        }
        if ($scope.register_name && $scope.register_email  &&  $scope.register_password && $scope.register_confirm_password) {
            $scope.errors=''
            $http.post($rootScope.server_url+'user',{name:$scope.register_name,email:$scope.register_email,password:$scope.register_password})
            .then(function(response){
                console.log(response.data)
                if(response.data.status){
                    $scope.show_login()
                }
            }).catch(function(error){
                console.log(error)
            });
        }

    }
})