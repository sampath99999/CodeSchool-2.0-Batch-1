function register(event) {
  event.preventDefault();

  let name = $("#name").val();
  let email = $("#email").val();
  let phone = $("#phone").val();
  let dob = $("#dob").val();
  let password = $("#password").val();
  let confirmedPassword = $("#confirmed-password").val();

  $(".error-message").text("");

  let error = false;

  if (name.length < 2 || name.length > 50 || !/^[A-Z][a-z]+$/.test(name)) {
    $("#nameError").text(
      "Name should be between 2 and 50 characters, start with a capital letter, and contain only alphabetic characters."
    );
    error = true;
  }

  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
    $("#emailError").text("Email format is not valid.");
    error = true;
  }

  if (!/^\d{10}$/.test(phone)) {
    $("#phoneError").text("Phone should be a 10-digit number.");
    error = true;
  }

  function validateDOB() {
    const dobInput = document.getElementById("dob");
    const dob = new Date(dobInput.value);
    const dobError = document.getElementById("dobError");
    const currentDate = new Date();
    const ageDifference = currentDate - dob;
    const ageInYears = ageDifference / (1000 * 60 * 60 * 24 * 365.25);

    if (dobInput.value === "") {
      dobError.textContent = "Date of Birth is required.";
      error = true;
    } else if (isNaN(dob.getTime())) {
      dobError.textContent = "Please enter a valid date.";
      error = true;
    } else if (dob > currentDate) {
      dobError.textContent = "Date of Birth cannot be in the future.";
      error = true;
    } else if (ageInYears < 18) {
      dobError.textContent = "You must be 18 years or older.";
      error = true;
    }
  }

  validateDOB();

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
    error = true;
  }

  if (password !== confirmedPassword) {
    $("#confirmed-passwordError").text("Confirmed password does not match.");
    error = true;
  }

  if (error) {
    return false;
  }

  $.ajax({
    method: "POST",
    url: "./api/register.php",
    data: {
      name,
      email,
      phone,
      dob,
      password,
    },
    // success: function (data) {
    //     data = JSON.parse(data);
    //     if (data.status) {
    //         window.location.replace("./login.html");
    //     } else {
    //         $("#nameError").text(data.message);
    //     }
    // },
    // error: function (error) {},

    success: function (data) {
      try {
        data = JSON.parse(data);
        if (data.status) {
          window.location.replace("./login.html");
        } else {
          $("#nameError").text(data.message);
        }
      } catch (e) {
        console.error("Error:", data);
      }
    },
  });
}
