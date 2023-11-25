myApp.controller('HomeController',function($scope,$rootScope){
    $rootScope.logout_button=false
    $rootScope.login_button=true
    if(localStorage.getItem('token')){
        $rootScope.logout_button=true
        $rootScope.login_button=false
    }
})