myApp.controller("MainController", function ($scope, $rootScope, $http) {
  $rootScope.serverUrl = "http://localhost:8000/api";
  $scope.userName = window.localStorage.getItem("name");

  $scope.logout = function () {
    window.location.replace("../../client/index/demo/index.html");
  };
});

myApp.directive("loader", function () {
  return {
    template: `
        <div ng-class="{ 'd-none': loader }">
          <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      `,
  };
});
