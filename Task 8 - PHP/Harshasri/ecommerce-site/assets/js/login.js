$(document).ready(function () {
  let userId = window.localStorage.getItem("user_id");
  let userType = window.localStorage.getItem("user_type");
  if (userId && userType == 1) {
    window.location.replace("./adminhome.html");
  } else if (userId && userType == 0) {
    window.location.replace("./userhome.html");
  }
});

function login(event) {
  event.preventDefault();

  let username = $("#username").val();
  let password = $("#password").val();

  $("#usernameError").text("");
  $("#passwordError").text("");
  $("#LoginError").text("");

  if (username.length < 3 || username.length > 25) {
    $("#usernameError").text(
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
      username,
      password,
    },
    success: function (data) {
      // console.log("success");
      // console.log(data);
      data = JSON.parse(data);
      console.log(data);
      if (data.status) {
        window.localStorage.setItem("user_id", data.data[0]);
        window.localStorage.setItem("user_type", data.data[1]);
        if (username == "admin") {
          window.location.replace("./adminhome.html");
        } else {
          window.location.replace("./userhome.html");
        }
      } else {
        $("#LoginError").text(
          "No user with this username & password Please Register!"
        );
        return false;
      }
    },
    error: function (error) {},
  });
}
