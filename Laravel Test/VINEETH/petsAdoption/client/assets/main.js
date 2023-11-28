myApp=angular.module('MyApp',['ui.router'])
myApp.controller('MainController',function($scope,$rootScope,$state){
    $rootScope.logout_button=false
    $rootScope.login_button=true
    if(localStorage.getItem('token')){
        $rootScope.logout_button=true
        $rootScope.login_button=false
    }
    $scope.logout=()=>{
        localStorage.removeItem('token');
        $rootScope.login_button=true
        $rootScope.logout_button=false
        $state.go('login')

    }
    
})
myApp.run(function($rootScope){
    $rootScope.server_url='http://127.0.0.1:8000/api/';
})

myApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push(['$q', '$state', function ($q, $state) {
        return {
            request: function (config) {
                if (localStorage.getItem('token')) {
                    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
                }
                return config;
            },
            requestError: function (rejection) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Bad Request: Error while making a request.',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
                return $q.reject(rejection);
            },
            response: function (response) {
                if (response.status === 201) {
                    Swal.fire({
                        title: response.data.message,
                        icon: 'success',
                        confirmButtonText: 'Close'
                    });
                }
               
                return response;  
            },
            responseError: function (response) {
                switch (response.status) {
                    case 300:
                        Swal.fire({
                            text: response.data.message,
                            icon: 'warning',
                            confirmButtonText: 'Ok'
                        })
                        break;
                    case 401:
                        Swal.fire({
                            text: "You Have To Login First",
                            icon: 'warning',
                            confirmButtonText: 'Login'
                        });
                        break;
                    case 500:
                        Swal.fire({
                            title: 'Error!',
                            icon: 'error',
                            confirmButtonText: 'Try Again'
                        });
                        break;
                    default:
                        return $q.reject(response);
                }
            }
        };
    }]);
}]);