myApp.controller("homeController", function ($scope, $http, $state, $rootScope, $location, $window, $stateParams) {


  $scope.token = localStorage.getItem("token");
  if ($scope.token) {
    $rootScope.showBefore = false;
    $rootScope.showAfter = true;
  }

  $scope.logout = function () {

    $window.localStorage.removeItem("user_id");
    $window.localStorage.removeItem("token");
    $state.go("login");
  }



  $scope.jobsArray = [];

  $scope.getJobs = function () {
    $http({
      method: "GET",
      url: $rootScope.url + "/jobs",
    })
      .then(
        function success(response) {
          //   console.log(response);
          //   console.log(response.data);

          if (response.status) {
            console.log(response);
            $scope.jobsArray = response.data.data;
          }
        },
        function failure(err) {
          return err;
        }
      )

      .catch(function (error) {
        return error;
      });
  };
  $scope.getJobs();



});