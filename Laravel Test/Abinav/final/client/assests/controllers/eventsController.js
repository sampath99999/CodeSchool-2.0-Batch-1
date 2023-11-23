myApp.controller("eventsController", function ($scope, $rootScope, $http) {
  $scope.events = "";
  $scope.seatsToBook = "";
  $scope.loader = true;

  $http
    .get("http://localhost:8000/api" + "/get-events")
    .then(function (response) {
      $scope.events = response.data;
    })
    .then(function (error) {});

  $scope.bookSeats = function (event, seatsToBook) {
    if (seatsToBook > event.seats) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Booked seats are greater than available seats!",
      });
      return;
    }

    if (event.seats == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter no seats!",
      });
    }

    if (event.seats > 0) {
      $scope.loader = false;
      $http
        .post(
          "http://localhost:8000/api" + "/events/" + event.id + "/book-seats",
          { seats: seatsToBook }
        )
        .then(function (response) {
          event.seats -= seatsToBook;
          $scope.seatsToBook = " ";
          $scope.loader = true;
          Swal.fire({
            icon: "success",
            title: "success",
            text: "seats booked successfully!",
          });
        })
        .catch(function (error) {
          console.error(error.data.error);
        });
    }
  };
});
