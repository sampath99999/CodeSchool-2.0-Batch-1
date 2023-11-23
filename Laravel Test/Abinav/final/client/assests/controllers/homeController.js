myApp.controller("homeController", function ($rootScope, $scope, $http) {
  $scope.eventName = "";
  $scope.eventDescription = "";
  $scope.eventDate = "";
  $scope.seats = "";
  $scope.userName = localStorage.getItem("name");

  $scope.logout = function () {
    window.location.replace("../index.html");
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("token");
  };

  $scope.createEvent = function () {
    let formData = new FormData();

    let fileInput = document.getElementById("file");
    if (fileInput.files.length > 0) {
      formData.append("file", fileInput.files[0]);
    }

    formData.append("eventName", $scope.eventName);
    formData.append("eventDescription", $scope.eventDescription);
    formData.append("eventDate", $scope.eventDate);
    formData.append("seats", $scope.seats);

    $http
      .post("http://localhost:8000/api" + "/create-event", formData, {
        transformRequest: angular.identity,
        headers: { "Content-Type": undefined },
      })
      .then(function (response) {
        $scope.eventName = "";
        $scope.eventDescription = "";
        $scope.eventDate = "";
        $scope.seats = "";
        Swal.fire({
          title: "success",
          text: "event created successfully",
          icon: "success",
        });
      })
      .catch(function (error) {
        if (error.data && error.data.errors) {
          let errorMessage = "\n";
          for (let key in error.data.errors) {
            errorMessage += `${key}: ${error.data.errors[key][0]}\n`;
          }
          Swal.fire({
            title: "Error",
            text: errorMessage,
            icon: "error",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Please fill the details",
            icon: "error",
          });
        }
      });
  };
});
