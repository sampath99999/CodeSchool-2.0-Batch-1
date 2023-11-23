
myApp.controller("loginController", function ($scope, $http, $state, $rootScope, $location) {
  $rootScope.isLoading = false;
  console.log($scope.isLoading);
  $rootScope.showBefore = false;


  $scope.token = localStorage.getItem("token");

  // if ($scope.token !=='') {
  //   $state.go("home");
  // }

  $scope.email = "";
  $scope.password = "";
  $scope.emailError = "";
  $scope.passwordError = "";

  $scope.emailValidation = function () {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!pattern.test($scope.email)) {
      $scope.emailError = "Invalid email address";
      return false;
    } else {
      $scope.emailError = "";
      return true;
    }
  };

  $scope.passwordValidation = function () {
    if ($scope.password.length < 6) {
      $scope.passwordError = "Password should be minimum 6 characters";
      return false;
    } else {
      $scope.passwordError = "";
      return true;
    }
  };

  $scope.login = function () {
    $rootScope.isLoading = true;
    console.log($scope.isLoading);
    $scope.emailValidation();
    $scope.passwordValidation();
    if (

      $scope.emailValidation() &&
      $scope.passwordValidation()

    ) {

      $http({
        method: 'POST',
        url: $rootScope.url + '/users/login',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {

          email: $scope.email,
          password: $scope.password

        }
      })
        .then(function success(response) {

          // $rootScope.isLoading=false;

          if (response.status) {
            console.log(response.data.data);
            $scope.role = response.data.data.role;
            $scope.userId = response.data.data.id;
            $scope.token = response.data.authorization["token"];
            console.log(response);
            Swal.fire({

              icon: "success",
              title: 'Successfully LoggedIn!',
              showConfirmButton: false,
              timer: 1500
            })


            localStorage.setItem("token", $scope.token);
            localStorage.setItem("user_id", $scope.userId);
            // localStorage.setItem("user_role", $scope.role);
            $state.go("home");
            return;


          }

          else {

            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: response.data['message'],
            });
          }


        }, function failure(err) {
          console.log(err);
          return err;
        })
        .catch(function (error) {

          console.log(error);
          return error;
        })
        .finally(function () {
          $rootScope.isLoading = false;
        })
    }
  }


});