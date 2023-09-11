$(document).ready(function () {
  const role = parseInt(localStorage.getItem("role"));
  const token = localStorage.getItem("token");
  if (token) {
    window.location.replace("./dashboard.html");
  }
  function validateUserCredentials() {
    const userEmail = $("#login-email").val();
    const userPassword = $("#login-password").val();
    $.ajax({
      method: "POST",
      url: "./../api/login.php",
      data: {
        userEmail,
        userPassword,
      },
      success: function (data) {
        const response = JSON.parse(data);
        if (!response.status) {
          console.log(response);
          $("#login-form-error").text(response.message);
        } else {
          localStorage.setItem("role", response.data);
          localStorage.setItem("token", response.token);
          window.location.replace("./dashboard.html");
        }
      },
      error: function (error) {
        $("#login-form-error").text(error.responseText);
      },
    });
  }

  $("#login-form-submission").submit(function (event) {
    event.preventDefault();
    if ($("#login-email").val() !== "" && $("#login-password").val() !== "") {
      $("#login-form-error").text("");
      validateUserCredentials();
    } else {
      $("#login-form-error").text("*Username and Password cannot be empty");
    }
  });
});
