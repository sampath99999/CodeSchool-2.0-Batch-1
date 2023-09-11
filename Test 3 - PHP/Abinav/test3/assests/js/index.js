var role_id = window.localStorage.getItem("role_id");
var email = window.localStorage.getItem("email");
$.ajax({
  method: "POST",
  url: "../api/getMenu.php",
  data: {
    roleId: role_id,
  },
  success: function (response) {
    var parsedResponse = JSON.parse(response);

    if (parsedResponse.status === true) {
      parsedResponse.data.forEach((element) => {
        let menu_item = $("<li></li>")
          .text(element.menu_name)
          .attr("id", element.menu_name);

        $("#menuBar").append(menu_item);
      });
    } else {
    }
  },
  error: function () {
    console.log("invalid");
  },
});

$.ajax({
  method: "POST",
  url: "../api/getUserDetails.php",
  data: {
    email: email,
  },
  success: function (response) {
    var parsedResponse = JSON.parse(response);

    if (parsedResponse.status === true) {
      $("#userName").text(
        parsedResponse.data[0].first_name +
          " " +
          parsedResponse.data[0].last_name
      );
      $(".userName").text(
        parsedResponse.data[0].first_name +
          " " +
          parsedResponse.data[0].last_name
      );
    } else {
    }
  },
  error: function () {
    console.log("invalid");
  },
});

$(document).on("click", "#Manage_User", manageUser);
function manageUser() {
  $("#pageContent").addClass("d-none");
  $("#changeUserTypeSection").removeClass("d-none");
}
$(document).on("click", "#Dashboard", displayDashboard);
function displayDashboard() {
  $("#pageContent").removeClass("d-none");
  $("#changeUserTypeSection").addClass("d-none");
}

function changeUserType(event) {
  event.preventDefault();
  let user_id = $("#manageUserId").val();
  $.ajax({
    type: "POST",
    url: "../api/changeUserType.php",
    data: {
      user_id,
    },
    success: function (response) {
      var parsedResponse = JSON.parse(response);
      if (parsedResponse.status === false) {
        $("#userChangeErrorMessage").text(parsedResponse.message);
        $("#userChangeSuccessMessage").text("");
      } else {
        $("#userChangeSuccessMessage").text(parsedResponse.message);
        $("#userChangeErrorMessage").text("");
      }
    },
  });
}

function logout() {
  window.location.replace("../home.html");
}
