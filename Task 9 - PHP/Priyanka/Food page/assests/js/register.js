function register(event) {
  event.preventDefault();

  let name = $("#name").val();
  let phone = $("#phone").val();
  let email = $("#email").val();
  let password = $("#password").val();
  let confirmedPassword = $("#confirmed-password").val();

  $(".error-message").text("");

  if (name.length < 2 || name.length > 50 || !/^[A-Z][a-z]+$/.test(name)) {
    $("#nameError").text(
      "Name should be between 2 and 50 characters, start with a capital letter, and contain only alphabetic characters."
    );
    return false;
  }

  if (!/^\d{10}$/.test(phone)) {
    $("#phoneError").text("Phone should be a 10-digit number.");
    return false;
  }

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
  if (password !== confirmedPassword) {
    $("#confirmed-passwordError").text("Confirmed password does not match.");
    return false;
  }

  $.ajax({
    method: "POST",
    url: "./api/register.php",
    data: {
      name,
      phone,
      email,
      password,
    },
    success: function (data) {
      data = JSON.parse(data);
      if (data.status) {
        window.location.replace("./login.html");
      } else {
        $("#nameError").text(data.message);
      }
    },
    error: function (error) {},
  });
}
