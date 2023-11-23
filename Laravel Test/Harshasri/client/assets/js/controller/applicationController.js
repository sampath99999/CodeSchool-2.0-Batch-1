myApp.controller("applicationController", function ($scope, $http, $state, $rootScope, $location, $window, $stateParams) {
    $scope.token = localStorage.getItem("token");
    $scope.applications = [];
    if ($scope.token) {
        $rootScope.showBefore = false;
        $rootScope.showAfter = true;
    }

    $scope.logout = function () {

        $window.localStorage.removeItem("user_id");
        $window.localStorage.removeItem("token");
        $state.go("login");
    }

    $scope.userId = $window.localStorage.getItem("user_id");
    $scope.getApplications = function () {
        $http({
            method: "GET",
            url: $rootScope.url + "/applications",
        })
            .then(
                function success(response) {
                    //   console.log(response);
                    //   console.log(response.data);

                    if (response.status) {
                        console.log(response);
                        $scope.applications = response.data.data;
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
    $scope.getApplications();
});