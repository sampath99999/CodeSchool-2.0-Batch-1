$("#register-driver-id").on("change", () => {
  $("#vehicle-section").removeClass("d-none").addClass("d-block");
});

$("#register-rider-id").on("change", () => {
  $("#vehicle-section").removeClass("d-block").addClass("d-none");
});

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
    $("register-password-error").text("*Password cannot be empty.");
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
  } else if (/\s/.test(userPassword)) {
    $("#register-password-error").text("*Password should not contain spaces.");
  } else {
    $("#register-password-error").text("");
    return userPassword;
  }
}

$("#register-password-id").on("input", userPasswordValidation);

function confirmPasswordValidation(event) {
  const userPassword = $("#register-password-id").val();
  const userConfirmPassword = $("#register-confirm-password-id").val();
  if (userPassword === "") {
    $("#register-password-error").text("*User password cannot be empty");
  } else if (!(userPassword === userConfirmPassword)) {
    $("#register-password-error").text("*Password didn't match");
  } else {
    $("#register-password-error").text("");
    return userConfirmPassword;
  }
}

$("#register-confirm-password-id").on("input", confirmPasswordValidation);

const ride_type_vehicles = {
  1: ["Tata Auto", "Mahindra Auto"],
  2: ["Ford"],
  3: ["Suzuki Desire", "Kia Sonet"],
  4: ["Benz A6", "Audi"],
  5: ["Innovo"],
};

function driverRideTypeValidation(event) {
  const driverRideType = $("#register-ride-type-id").val();
  let options = `<option value="">Select</option>`;
  if (driverRideType === "") {
    $("#register-ride-type-error").text("*Ride type cannot be emty");
    $("#register-vehicle-name-id").html(options);
  } else {
    if (event.type !== "submit") {
      const vehicleOptions = ride_type_vehicles[driverRideType];
      for (let vehicle of vehicleOptions) {
        options += `<option value=${vehicle}>${vehicle}</option>`;
      }
      $("#register-vehicle-name-id").html(options);
      $("#register-ride-type-error").text("");
    }
    return driverRideType;
  }
}

$("#register-ride-type-id").on("change", driverRideTypeValidation);

function driverVehicleNameValidation(event) {
  const driverVehicle = $("#register-vehicle-name-id").val();
  if (driverVehicle === "") {
    $("#register-vehicle-name-error").text("*Vehicle name cannot be empty");
  } else {
    $("#register-vehicle-name-error").text("");
    return driverVehicle;
  }
}

$("#register-vehicle-name-id").on("change", driverVehicleNameValidation);

function driverVehicleTypeValidation(event) {
  const driverVehicleType = $("#register-vehicle-type-id").val();
  if (driverVehicleType === "") {
    $("#register-vehicle-type-error").text("*Vehicle type cannot be empty");
    return false;
  } else {
    $("#register-vehicle-type-error").text("");
    return $("#register-vehicle-type-id option:selected").text();
  }
}

$("#register-vehicle-type-id").on("change", driverVehicleTypeValidation);

$("#register-vehicle-number-id").on("keypress", function (event) {
  if (/\s/.test(event.key)) {
    event.preventDefault();
  }
});

function driverVehicleNumberValidation(event) {
  const driverVehicleNumber = $("#register-vehicle-number-id")
    .val()
    .toUpperCase();
  const pattern = /^[A-Z]{2}\d{2}[A-Z0-9]{1,6}$/;
  if (driverVehicleNumber === "") {
    $("#register-vehicle-number-error").text("*Vehicle number cannot be empty");
    return false;
  } else if (driverVehicleNumber.length < 9) {
    $("#register-vehicle-number-error").text("*Minimum length 9 characters");
    return false;
  } else if (!pattern.test(driverVehicleNumber)) {
    $("#register-vehicle-number-error").text("*Invalid vehicle number");
    return false;
  } else {
    $("#register-vehicle-number-error").text("");
    return driverVehicleNumber;
  }
}

$("#register-vehicle-number-id").on("input", driverVehicleNumberValidation);

function createUserRoles(userEmail, roleId) {
  $.ajax({
    method: "POST",
    url: "./../api/userRole.php",
    data: {
      userEmail,
      roleId,
    },
    success: function (data) {
      window.location.replace("./login.html");
    },
    // error:function(error){
    //     console.log(error);
    // }
  });
}

function createVehicleDetails(
  userEmail,
  driverRideTypeResult,
  driverVehicleNumberResult,
  driverVehicleNameResult,
  driverVehicleTypeResult
) {
  $.ajax({
    method: "POST",
    url: "./../api/vehicleDetails.php",
    data: {
      userEmail,
      driverRideTypeResult,
      driverVehicleNameResult,
      driverVehicleNumberResult,
      driverVehicleTypeResult,
    },
    success: function (data) {
      window.location.replace("./login.html");
    },
    error: function (error) {
      // console.log(error);
    },
  });
}

function createUserRecord(
  userName,
  userPhone,
  userEmail,
  userPassword,
  roleId,
  driverRideTypeResult,
  driverVehicleNumberResult,
  driverVehicleNameResult,
  driverVehicleTypeResult
) {
  $.ajax({
    method: "POST",
    url: "./../api/register.php",
    data: {
      userName,
      userPhone,
      userEmail,
      userPassword,
    },
    success: function (data) {
      const response = JSON.parse(data);

      if (!response.status) {
        $("#register-form-error").text(response.message);
      } else {
        $("#register-form-error").text("");
        setTimeout(function () {
          alert(response.message);
        }, 50);
        createUserRoles(userEmail, roleId);

        roleId == 2
          ? createVehicleDetails(
              userEmail,
              driverRideTypeResult,
              driverVehicleNumberResult,
              driverVehicleNameResult,
              driverVehicleTypeResult
            )
          : null;
      }
    },
    error: function (error) {
      $("#register-form-error").text(error.responseText);
    },
  });
}

$("#register-form-submission").submit(function (event) {
  event.preventDefault();
  const userNameResult = userNameValidation();
  const userPasswordResult = userPasswordValidation();
  const confirmPasswordResult = confirmPasswordValidation();
  const userPhoneResult = phoneNumberValidation();
  const userEmailResult = userEmailValidation();
  if ($("#register-driver-id").prop("checked")) {
    const driverRideTypeResult = driverRideTypeValidation(event);
    const driverVehicleNameResult = driverVehicleNameValidation();
    const driverVehicleTypeResult = driverVehicleTypeValidation();
    const driverVehicleNumberResult = driverVehicleNumberValidation();
    if (
      userNameResult &&
      userPasswordResult &&
      userPhoneResult &&
      userEmailResult &&
      confirmPasswordResult &&
      driverRideTypeResult &&
      driverVehicleNumberResult &&
      driverVehicleNameResult &&
      driverVehicleTypeResult
    ) {
      createUserRecord(
        userNameResult,
        userPhoneResult,
        userEmailResult,
        confirmPasswordResult,
        2,
        driverRideTypeResult,
        driverVehicleNumberResult,
        driverVehicleNameResult,
        driverVehicleTypeResult
      );
    }
  } else {
    if (
      userNameResult &&
      userPasswordResult &&
      userPhoneResult &&
      userEmailResult &&
      confirmPasswordResult
    ) {
      createUserRecord(
        userNameResult,
        userPhoneResult,
        userEmailResult,
        confirmPasswordResult,
        1
      );
    }
  }
});
