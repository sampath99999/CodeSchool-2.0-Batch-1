myApp.controller("jobController", function ($scope, $http, $state, $rootScope, $location, $window) {
    $scope.title = '';
    $scope.description = '';
    $scope.company = '';
    $scope.located = '';
    $scope.salary = '';
    $scope.skills = '';
    $scope.experience = '';
    $scope.titleError = '';
    $scope.descriptionError = '';
    $scope.companyError = '';
    $scope.locatedError = '';
    $scope.salaryError = '';
    $scope.skillsError = '';
    $scope.experienceError = '';
    $scope.userId = $window.localStorage.getItem("user_id");



    $scope.getMyJobs = function () {

        $http({
            method: "GET",
            url: $rootScope.url + "/jobs/" + $scope.userId,
        })
            .then(
                function success(response) {
                    console.log(response);
                    console.log(response.data);

                    if (response.status) {
                        console.log(response);
                        $scope.myJobs = response.data.data;
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
    $scope.getMyJobs();


    $scope.craeteJob = function () {
        console.log("cliked");
        jobData = {
            title: $scope.title,
            description: $scope.description,
            company: $scope.company,
            located: $scope.located,
            salary: $scope.salary,
            posted_by_user_id: $scope.userId,
            skills: $scope.skills,
            experience: $scope.experience,

        }



        $http({
            method: "POST",
            url: $rootScope.url + "/createJob",
            data: jobData
        })
            .then(
                function success(response) {
                    //   $scope.getProducts();
                    console.log(response);
                    console.log(response.status);

                    if (response.status) {
                        // console.log(response.data);
                        // console.log(response.data.data);
                        let responseData = response.data.data;
                        $scope.jobs.push(responseData);

                        Swal.fire({
                            icon: "success",
                            title: "Successfully Created New Job!",
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