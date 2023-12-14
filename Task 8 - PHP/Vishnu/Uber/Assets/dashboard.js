$("#dasboard-logout-id").on("click", function () {
  localStorage.removeItem("token");
  window.location.replace("./login.html");
});

$(document).ready(function () {
  const token = localStorage.getItem("token");
  if (token !== null) {
    history.replaceState(null, null, location.href);
    $.ajax({
      method: "GET",
      url: "./../api/dashboard.php",
      data: {
        token,
      },
      success: function (data) {
        const response = JSON.parse(data);
        if (!response.status) {
          $("#login-form-error").text(response.message);
        } else {
          $("#dashboard-user-id span").text(response.data);
        }
      },
      error: function (error) {
        $("#login-form-error").text(error.responseText);
      },
    });

    function getUserTripsData(tripsData) {
      const $tbody = $("#data-table tbody");
      $tbody.empty();
      tripsData.forEach(function (each) {
        const $row = $("<tr>");
        $row.append(`<td>${each.id}</td>`);
        $row.append(`<td>${each.name}</td>`);
        $row.append(`<td>${each.driver}</td>`);
        $row.append(`<td>${each.phone}</td>`);
        $row.append(`<td>${each.location}</td>`);
        $row.append(`<td>${each.destination}</td>`);
        $row.append(`<td>${each.trip_start_date}</td>`);
        $row.append(`<td>${each.trip_end_date}</td>`);
        $tbody.append($row);
      });
    }

    $("#dasboard-user-trip-id").on("click", function () {
      $.ajax({
        method: "GET",
        url: "./../api/userTrips.php",
        data: {
          token,
        },
        success: function (data) {
          const response = JSON.parse(data);
          if (!response.status) {
            $("#trip-form-error").text(response.message);
          } else {
            getUserTripsData(response.data);
          }
        },
        error: function (error) {
          $("#login-form-error").text(error.responseText);
        },
      });
    });

    $("#trip-form-id").on("submit", function (event) {
      event.preventDefault();
      const location = {
        state: $("#location-state").val(),
        city: $("#location-city").val(),
        area: $("#location-area").val(),
        pincode: $("#location-pincode").val(),
        latitude: $("#location-latitude").val(),
        longitude: $("#location-longitude").val(),
      };
      const destination = {
        state: $("#destination-state").val(),
        city: $("#destination-city").val(),
        area: $("#destination-area").val(),
        pincode: $("#destination-pincode").val(),
        latitude: parseFloat($("#destination-latitude").val()),
        longitude: parseFloat($("#destination-longitude").val()),
      };
      const rideType = $("#user-trip-type-id").val();
      $.ajax({
        method: "POST",
        url: "./../api/addTrip.php",
        data: {
          location,
          destination,
          rideType,
          token,
        },
        success: function (data) {
          const response = JSON.parse(data);
          if (!response.status) {
            $("#trip-form-error").text(response.message);
          } else {
            console.log(response);
          }
        },
        error: function (error) {
          $("#trip-form-error").text(error.responseText);
        },
      });
    });
  }
  else{
    window.location.replace('./login.html');
  }
});
