$(document).ready(function () {
  let userToken = window.localStorage.getItem("token");
  if (userToken) {
    window.location.replace("./index.html");
  }
});

function login(event) {
  event.preventDefault();

  let userName = $("#userName").val();
  let password = $("#password").val();

  $("#userNameError").text("");
  $("#passwordError").text("");

  if (userName.length < 3 || userName.length > 25) {
    $("#userNameError").text(
      "Username should be at least 3 Characters and at most 25 Characters"
    );
    return false;
  }

  if (password.length < 3 || password.length > 25) {
    $("#passwordError").text(
      "Password should be at least 3 Characters and at most 25 Characters"
    );
    return false;
  }

  $.ajax({
    method: "POST",
    url: "./api/login.php",
    data: {
      userName,
      password,
    },
    success: function (data) {
      data = JSON.parse(data);
      if (data.status) {
        window.localStorage.setItem("token", data.data);
        window.location.replace("./index.html");
      } else {
        $("#userNameError").text(data.message);
      }
    },
    error: function (error) {},
  });
}
