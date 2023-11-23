var myApp = angular.module("myApp", ["ui.router"]);

myApp.controller("appCtrl", function ($rootScope, $scope) {
  $rootScope.serverUrl = "http://localhost:8000/api";
});
myApp.config([
  "$httpProvider",
  function ($httpProvider) {
    $httpProvider.interceptors.push("tokenInterceptor");
  },
]);
myApp.factory("tokenInterceptor", [
  "$window",
  "$state",
  function ($window, $state) {
    console.log("interceptor invoked");
    return {
      request: function (config) {
        var token = $window.localStorage.getItem("token");
        if (token) {
          console.log("check");

          config.headers.Authorization = "Bearer " + token;
        }
        return config;
      },
      response: function (response) {
        console.log("Response Status:", response);
        if (response.status === 401) {
          console.log("no token");
        }
        return response;
      },
      responseError: function (rejection) {
        if (rejection.status == 401) {
          console.log("rejected");
          window.location.replace("../index.html");
        }
        return $q.reject(rejection);
      },
    };
  },
]);
