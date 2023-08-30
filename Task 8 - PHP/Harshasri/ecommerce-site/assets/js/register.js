$(document).ready(function () {
  let userId = window.localStorage.getItem("user_id");
  let userType = window.localStorage.getItem("user_type");
  if (userId && userType == 1) {
    window.location.replace("./adminhome.html");
  } else if (userId && userType == 0) {
    window.location.replace("./userhome.html");
  }
});

function onChangeTypeOptions() {
  var x = document.getElementById("mySelect").value;
  // console.log(x);
  return x;
}

function register(event) {
  event.preventDefault();

  let username = $("#username").val();
  let password = $("#password").val();
  let userType = onChangeTypeOptions();
  console.log(userType);

  $("#usernameError").text("");
  $("#passwordError").text("");
  $("#userTypeError").text("");

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
  if (userType.length < 0) {
    $("#userTypeError").text("UserType should not be empty!");
    return false;
  }

  $.ajax({
    method: "POST",
    url: "./api/register.php",
    data: {
      username,
      password,
      userType,
    },
    success: function (data) {
      console.log(data);
      data = JSON.parse(data);
      if (data.status) {
        window.location.replace("./login.html");
      } else {
        $("#usernameError").text(data.message);
      }
    },
    error: function (error) {},
  });
}
