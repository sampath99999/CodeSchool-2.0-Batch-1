$(document).ready(function () {
  let userId = window.localStorage.getItem("user_id");
  if (userId) {
    window.location.replace("./dashboard");
  }

  var emailValidate;
  var passwordValidate;

  $("#myForm").submit(function (event) {
    event.preventDefault();
    console.log("clicked");
    var email = $("#email").val();
    var password = $("#password").val();

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //email

    if (email == "") {
      $("#emailErrorMsg").text("*Email should not be Empty!");
      emailValidate = false;
    } else if (email.length > 50) {
      $("#emailErrorMsg").text("*Email must be less than 50 characters!");
      emailValidate = false;
    } else if (email.match(/@/g).length > 1) {
      $("#emailErrorMsg").text("*Email should contain only single @!");
      emailValidate = false;
    } else if (!emailRegex.test(email)) {
      $("#emailErrorMsg").text("*Invalid email format!");
      emailValidate = false;
    } else {
      $("#emailErrorMsg").text("");
      emailValidate = true;
    }

    //password
    commonPass = ["Password@123", "Abcdef@123", "Abc123@", "Hello"];
    if (password == "") {
      $("#passwordErrorMsg").text("*Password should not be Empty!");
      passwordValidate = false;
    } else if (commonPass.includes(password.toLowerCase())) {
      $("#passwordErrorMsg").text("*Password is easily guessable!");
      passwordValidate = false;
    } else if (!/[A-Z]/.test(password)) {
      $("#passwordErrorMsg").text(
        "*Password should contain one uppercase character"
      );
      passwordValidate = false;
    } else if (!/[A-Z]/.test(password)) {
      $("#passwordErrorMsg").text(
        "*Password should contain one lowercase character"
      );
      passwordValidate = false;
    } else if (!/\d/.test(password)) {
      $("#passwordErrorMsg").text("*Password should contain one digit");
      passwordValidate = false;
    } else if (!/[!@#$%^&*()_+{}:;<>,.?~]/.test(password)) {
      $("#passwordErrorMsg").text(
        "*Password should contain one special character!"
      );
      passwordValidate = false;
    } else if (/([a-zA-Z0-9])\1/.test(password)) {
      $("#passwordErrorMsg").text(
        "*Password should not contain repeating characters.!"
      );
      passwordValidate = false;
    } else if (/\s/.test(password)) {
      $("#passwordErrorMsg").text("*Password should contain Spaces.!");
      passwordValidate = false;
    } else {
      $("#passwordErrorMsg").text("");
      passwordValidate = true;
    }

    console.log(emailValidate);
    console.log(passwordValidate);

    //check
    if (emailValidate && passwordValidate) {
      console.log("success");
      $.ajax({
        method: "POST",
        url: "./api/login.php",
        data: {
          email: email,
          password: password,
        },
        success: function (data) {
          console.log(data);
          data = JSON.parse(data);
          console.log(data);
          if (data.status) {
            window.localStorage.setItem("user_id", data.data[0]);
            window.location.replace("./index.html");
          } else {
            $("#LoginError").text("No user with this email & password!");
            return false;
          }
        },
        error: function (error) {
          console.log(error);
        },
      });
    }
  });
});
