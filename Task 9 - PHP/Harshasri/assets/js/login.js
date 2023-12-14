var userId = localStorage.getItem("user_id");
console.log(userId);
if (userId) {
  window.location.replace("./home.html");
}

$(document).ready(function () {
  $("#myForm").submit(function (event) {
    event.preventDefault();

    let userInput = $("#userInput").val();
    let password = $("#password").val();

    $("#usernameError").text("");
    $("#passwordError").text("");
    $("#LoginError").text("");

    if (userInput.length < 3 || userInput.length > 25) {
      $("#usernameError").text(
        "UserInput should be at least 3 Characters and at most 25 Characters"
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
        login: userInput,
        password: password,
      },
      success: function (data) {
        console.log(data);
        data = JSON.parse(data);
        console.log(data);
        if (data.status) {
          window.localStorage.setItem("user_id", data.data);
          window.location.replace("./home.html");
        } else {
          $("#LoginError").text(
            "No user with this userInput & password Please Register!"
          );
          return false;
        }
      },
      error: function (error) { },
    });
  });
});
