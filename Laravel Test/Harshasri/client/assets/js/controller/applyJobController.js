myApp.controller("applyJobController", function ($scope, $http, $state, $rootScope, $location, $window, $stateParams) {
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
    $scope.getApplications();


    $scope.postedJobs = function () {

        $http({
            method: "GET",
            url: $rootScope.url + "/postedJobs/" + $scope.userId,
        })
            .then(
                function success(response) {
                    console.log(response);
                    console.log(response.data);

                    if (response.status) {
                        console.log(response);
                        $scope.postedJobs = response.data.data;
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
    $scope.postedJobs();


    $scope.applyJob = function (e1) {
        console.log("clicked", e1);
        $rootScope.jobId = e1;

    };

    $scope.applyForJob = function (e1) {
        console.log("updateone");

        let data = {
            userid: $scope.userId,
            jobid: e1,

        };
        console.log(data);

        $http({
            method: "POST",
            url: $rootScope.url + "/applyJob",
            data,
        })
            .then(
                function success(response) {

                    console.log(response);
                    console.log(response.status);

                    if (response.status) {
                        console.log(response);
                        console.log(response.data.data);
                        let responseData = response.data.data;
                        $scope.applications.push(responseData);
                        console.log($scope.categories);
                        Swal.fire({
                            icon: "success",
                            title: "Successfully Applyed!",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: response.data["message"],
                        });
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
});