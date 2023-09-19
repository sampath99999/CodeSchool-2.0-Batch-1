$(document).ready(function () {
  let userId = window.localStorage.getItem("user_id");
  if (userId) {
    window.location.replace("./dashboard");
  }
});

function login(event) {
  event.preventDefault();

  let email = $("#emailInput").val();
  let password = $("#passwordInput").val();

  $("#emailError").text("");
  $("#passwordError").text("");

  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
    $("#emailError").text("Email format is not valid.");
    return false;
  }

  if (
    password.length < 5 ||
    password.length > 25 ||
    !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,25}$/.test(
      password
    )
  ) {
    $("#passwordError").text(
      "Password should be between 5 and 25 characters, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    );
    return false;
  }

  $.ajax({
    method: "POST",
    url: "./api/login.php",
    data: {
      email,
      password,
    },
    success: function (data) {
      data = JSON.parse(data);
      if (data.status) {
        window.localStorage.setItem("user_id", data.data);
        window.location.replace("./dashboard");
      } else {
        $("#emailError").text(data.message);
      }
    },
    error: function (error) {
      console.error("AJAX error:", error);
    },
  });
}

$("#loginBtn").on("click", login);
