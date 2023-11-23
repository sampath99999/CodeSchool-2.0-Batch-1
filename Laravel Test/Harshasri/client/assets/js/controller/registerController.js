myApp.controller("registerController", function ($scope, $http, $state, $rootScope) {
  $rootScope.isLoading = false;
  $scope.token = window.localStorage.getItem("token");
  // if ($scope.token) {
  //   $state.go("home");
  //   return
  // }

  $scope.name = "";
  $scope.nameError = "";
  $scope.email = "";
  $scope.emailError = "";
  $scope.password = "";
  $scope.passwordError = "";
  $scope.phoneNumber = "";
  $scope.phoneNumberError = "";

  $scope.nameValidation = function () {
    $scope.firstName = $scope.name.replace(/[^A-Za-z]+/g, "");

    if ($scope.name.length < 3) {
      $scope.nameError = "Name should be minimum three characters";
      return false;
    } else {
      $scope.nameError = "";
      return true;
    }
  };

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

  $scope.phoneNumberValidation = function () {
    if ($scope.phoneNumber.length != 10) {

      $scope.phoneNumberError = "PhoneNumber should be 10 digits";
      return false;
    } else {
      $scope.phoneNumberError = "";
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
  $scope.register = function () {
    $scope.nameValidation();
    $scope.emailValidation();
    $scope.passwordValidation();
    $scope.phoneNumberValidation();

    if (
      $scope.nameValidation() &&
      $scope.emailValidation() &&
      $scope.passwordValidation() &&
      $scope.phoneNumberValidation()
    ) {

      $rootScope.isLoading = true;
      console.log("clicked");
      $http({
        method: 'POST',
        url: $rootScope.url + '/users/register',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          name: $scope.name,
          email: $scope.email,
          password: $scope.password,
          phoneno: $scope.phoneNumber

        }
      })
        .then(function success(response) {
          $rootScope.isLoading = false;
          console.log(response);
          console.log("success");
          $responseData = response.data;
          console.log(response.status);
          if (response.status) {
            console.log(response);
            Swal.fire({

              icon: "success",
              title: 'Successfully Registered!',
              showConfirmButton: false,
              timer: 1500
            })
            $state.go("login");
          }


          else {
            alert($responseData.message);
          }


        }, function failure(err) {
          return err;
        })
        .catch(function (error) {

          return error;
        })
        .finally(function (error) {

          $rootScope.isLoading = false;
        })
    }


  }

});