$(document).ready(function () {
  const role = parseInt(localStorage.getItem("role"));
  const token = localStorage.getItem("token");
  if (token) {
    window.location.replace("./dashboard.html");
  }
  $("#register-phone-id").on("keypress", function (event) {
    const keyValue = event.key;
    const userphoneNumber = $("#register-phone-id").val();
    if (
      !(
        keyValue.charCodeAt(0) >= 48 &&
        keyValue.charCodeAt(0) <= 57 &&
        keyValue !== undefined
      )
    ) {
      event.preventDefault();
    }
  });

  function phoneNumberValidation(event) {
    const userphoneNumber = $("#register-phone-id").val();
    if (userphoneNumber.length === 0 || userphoneNumber.length < 10) {
      $("#register-phone-error").text("*Minimum length 10 digits only");
      return false;
    } else {
      $("#register-phone-error").text("");
      return userphoneNumber;
    }
  }

  $("#register-phone-id").on("input", phoneNumberValidation);

  $("#register-name-id").on("keypress", function (event) {
    const keyValue = event.key;
    if (!/^[a-zA-z]*$/.test(keyValue) && keyValue !== "enter") {
      event.preventDefault();
    }
  });

  function userNameValidation(event) {
    const userName = $("#register-name-id").val();
    if (userName.length < 3 || userName.length > 20) {
      $("#register-name-error").text(
        "*Minimum length between 2 and 21 characters"
      );
      return false;
    } else if (userName[0] !== userName[0].toUpperCase()) {
      $("#register-name-error").text("*First letter should be capital");
      return false;
    } else {
      $("#register-name-error").text("");
      return userName;
    }
  }

  $("#register-name-id").on("input", userNameValidation);

  function userEmailValidation(event) {
    const userEmail = $("#register-email-id").val();
    const pattern =
      /^[a-zA-Z0-9]+(?:[._%+-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (userEmail.length < 6) {
      $("#register-email-error").text("*Minimum length 6 characters");
      return false;
    } else if ((userEmail.match(/@/g) || []).length > 1) {
      $("#register-email-error").text("*Only one @ is allowed.");
      return false;
    } else if ((userEmail.match(/@/g) || []).length === 0) {
      $("#register-email-error").text("*@ is missing");
      return false;
    } else if (userEmail.includes("..")) {
      $("#register-email-error").text("*Consecutive dots are not allowed.");
      return false;
    } else if (!pattern.test(userEmail)) {
      $("#register-email-error").text("*Invalid Email format");
      return false;
    } else {
      $("#register-email-error").text("");
      return userEmail;
    }
  }

  $("#register-email-id").on("input", userEmailValidation);

  $("#register-password-id").on("keypress", function (event) {
    if (/\s/.test(event.key)) {
      event.preventDefault();
    }
  });

  function userPasswordValidation(event) {
    const userPassword = $("#register-password-id").val();
    const commonPasswords = [
      "password",
      "123456",
      "hello",
      "abcdef",
      "admin",
      "username",
    ];
    if (!userPassword) {
      $("#register-password-error").text("*Password cannot be empty.");
      return false;
    } else if (userPassword.length < 5 || userPassword.length > 25) {
      $("#register-password-error").text(
        "*Password should be between 5 and 25 characters."
      );
      return false;
    } else if (!/[A-Z]/.test(userPassword)) {
      $("#register-password-error").text(
        "*Password should contain at least one uppercase letter."
      );
      return false;
    } else if (!/[a-z]/.test(userPassword)) {
      $("#register-password-error").text(
        "*Password should contain at least one lowercase letter."
      );
      return false;
    } else if (!/\d/.test(userPassword)) {
      $("#register-password-error").text(
        "*Password should contain at least one number."
      );
      return false;
    } else if (!/[!@#$%^&*()_+{}:;<>,.?~]/.test(userPassword)) {
      $("#register-password-error").text(
        "*Password should contain at least one special character."
      );
      return false;
    } else if (commonPasswords.includes(userPassword.toLowerCase())) {
      $("#register-password-error").text(
        "*Password is too common or easily guessable."
      );
      return false;
    } else if (/([a-zA-Z0-9])\1/.test(userPassword)) {
      $("#register-password-error").text(
        "*Password should not contain repeating characters."
      );
      return false;
    } else if (/\s/.test(userPassword)) {
      $("#register-password-error").text(
        "*Password should not contain spaces."
      );
      return false;
    } else {
      $("#register-password-error").text("");
      return userPassword;
    }
  }

  $("#register-password-id").on("input", userPasswordValidation);

  function confirmPasswordValidation(event) {
    const userConfirmPassword = $("#register-confirm-password-id").val();
    const userPassword = $("#register-password-id").val();
    if (userConfirmPassword === "") {
      $("#register-confirm-password-error").text(
        "*Confirm password cannot be empty"
      );
    } else if (!(userPassword === userConfirmPassword)) {
      $("#register-confirm-password-error").text("*Password didn't match");
    } else {
      $("#register-confirm-password-error").text("");
      return userConfirmPassword;
    }
  }

  $("#register-confirm-password-id").on("input", confirmPasswordValidation);

  function userGenderValidation() {
    const selectedGender = $('input[name="gender"]:checked');
    if (selectedGender.length > 0) {
      const genderValue = selectedGender.val();
      return genderValue;
    } else {
      $("#selectedGender").text("No gender selected");
    }
  }

  function createUserRecord(
    userName,
    userPhone,
    userEmail,
    userPassword,
    userGender,
    userConfirmPassword
  ) {
    $.ajax({
      method: "POST",
      url: "./../api/register.php",
      data: {
        userName,
        userPhone,
        userEmail,
        userPassword,
        userGender,
        userConfirmPassword,
      },
      success: function (data) {
        const response = JSON.parse(data);
        if (!response.status) {
          $("#register-user-form-error").text(response.message);
        } else {
          alert(response.message);
          $("#register-user-form-error").text("");
          window.location.replace("./login.html");
        }
      },
      error: function (error) {
        $("#register-user-form-error").text(error.responseText);
      },
    });
  }

  $("#register-user-form-submission").submit(function (event) {
    event.preventDefault();
    const userNameResult = userNameValidation();
    const userPasswordResult = userPasswordValidation();
    const confirmPasswordResult = confirmPasswordValidation();
    const userPhoneResult = phoneNumberValidation();
    const userEmailResult = userEmailValidation();
    const userGenderResult = userGenderValidation();

    if (
      userNameResult &&
      userPasswordResult &&
      userPhoneResult &&
      userEmailResult &&
      confirmPasswordResult &&
      userGenderResult
    ) {
      console.log(userGenderResult);
      createUserRecord(
        userNameResult,
        userPhoneResult,
        userEmailResult,
        userPasswordResult,
        userGenderResult,
        confirmPasswordResult
      );
      $("#register-user-form-error").text("");
    } else {
      console.log("hello");
      $("#register-user-form-error").text("*Please fill the required details");
    }
  });
});
