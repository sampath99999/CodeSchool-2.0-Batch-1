const myApp = angular.module('myApp', ['ui.router']);


myApp.factory('myInterceptor', function ($q, $window) {
  return {

    'request': function (config) {
      console.log(config);

      var token = $window.localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = "Bearer " + token;
      }

      return config;
    },


    'requestError': function (rejection) {

      if (canRecover(rejection)) {
        return responseOrNewPromise
      }
      return $q.reject(rejection);
    },

    'response': function (response) {

      console.log('I am done');
      return response;
    },


    'responseError': function (rejection) {
      console.log(rejection);

      if (rejection.status == '404') {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: rejection.data['message'],
        });

      }
      else if (rejection.status == '401') {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: rejection.data['message'],
        });
      }
      else if (rejection.status == '402') {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: rejection.data['message'],
        });
      }

      return $q.reject(rejection);
    }
  };
});

myApp.config(function ($httpProvider) {

  $httpProvider.interceptors.push('myInterceptor');
})


myApp.run(function ($rootScope) {
  $rootScope.url = "http://127.0.0.1:8000/api";
  $rootScope.isLoading = false;

});

