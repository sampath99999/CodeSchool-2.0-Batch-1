myApp.controller(
  "loginAndRegistrationController",
  function ($scope, $http, $rootScope, $state) {
    $scope.serverUrl = "http://localhost:8000/api";
    $scope.loader = true;
    $scope.name = "";
    $scope.email = "";
    $scope.password = "";
    $scope.mobile = "";
    $scope.userEmail = "arun@gmail.com";
    $scope.userPassword = "arun@123";

    $scope.register = function () {
      $scope.loader = false;
      var userData = {
        name: $scope.name,
        mobile: $scope.mobile,
        email: $scope.email,
        password: $scope.password,
      };

      $http
        .post($scope.serverUrl + "/register", userData)
        .then(function (response) {
          $scope.loader = true;
          $scope.email = "";
          $scope.password = "";
          $scope.name = "";
          $scope.mobile = "";
          Swal.fire({
            title: "Good job!",
            text: "Registration successful!",
            icon: "success",
          });
        })
        .catch(function (error) {
          $scope.errorMessage = "email already taken!";
          $scope.loader = true;
          if (error.status === 422) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Email Already Exists Try Another One!",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.data.message,
            });
          }
        });
    };

    $scope.login = function () {
      $scope.loader = false;

      var userData = {
        email: $scope.userEmail,
        password: $scope.userPassword,
      };

      $http
        .post($scope.serverUrl + "/login", userData)
        .then(function (response) {
          const token = response.data.authorization.token;
          const name = response.data.user.name;
          window.localStorage.setItem("token", token);
          window.localStorage.setItem("name", name);
          window.location.replace("./templates/home.html");
          $scope.loader = true;
        })
        .catch(function (error) {
          $scope.loader = true;
          Swal.fire({
            icon: "error",
            title: "success",
            text: "invalid userId or password!",
          });
        });
    };
  }
);
