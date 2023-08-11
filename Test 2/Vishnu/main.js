const formElement = document.getElementById("my-form");

function checkFirstName() {
  const data = $("#first-name").val();
  if (data.length < 2 || data.length > 50) {
    $("#first-name-error").text("*Minimum length between 2 and 50 characters.");
    return false;
  } else if (!/^[A-Za-z]+$/.test(data)) {
    $("#first-name-error").text("*Should contain alphabets only.");
    return false;
  } else if (data.charAt(0) !== data.charAt(0).toUpperCase()) {
    $("#first-name-error").text("*First letter should be capital");
    return false;
  } else {
    $("#first-name-error").text("");
    return true;
  }
}

function checkLastName() {
  const data = $("#last-name").val();
  if (data.length < 2 || data.length > 50) {
    $("#last-name-error").text("*Minimum length between 2 and 50 characters.");
    return false;
  } else if (!/^[A-Za-z]+$/.test(data)) {
    $("#last-name-error").text("*Should contain alphabets only.");
    return false;
  } else if (
    data !==
    data.charAt(0).toUpperCase() + data.slice(1).toLowerCase()
  ) {
    $("#last-name-error").text("*First letter should be capital");
    return false;
  } else {
    $("#last-name-error").text("");
    return true;
  }
}

function checkJobDetail() {
  const data = $("#job-position").val();
  if (data.length < 6 || data.length > 14) {
    $("#job-position-error").text(
      "*Minimum length between 5 and 15 characters."
    );
    return false;
  } else if (!/^[A-Za-z\s]+$/.test(data)) {
    $("#job-position-error").text("*Should contain alphabets only.");
    return false;
  } else if (data.charAt(0) !== data.charAt(0).toUpperCase()) {
    $("#job-position-error").text("*First letter should be capital");
    return false;
  } else {
    $("#job-position-error").text("");
    return true;
  }
}

function checkEmail() {
  const data = $("#email").val();
  const emailFormat = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!data) {
    $("#email-error").text("*Email address cannot be empty.");
    return false;
  } else if (data.length > 50) {
    $("#email-error").text("*Email should be less than 50 characters.");
    return false;
  } else if (data.match(/@/g).length === 0) {
    $("#email-error").text("@ should be there in email");
    return false;
  } else if (data.match(/@/g).length > 1) {
    $("#email-error").text("Only one @ is allowed.");

    return false;
  } else if (data.includes("..")) {
    $("#email-error").text("Consecutive dots are not allowed.");
    return false;
  } else if (emailFormat.test(data) === false) {
    $("#email-error").text("*Incorrect email format");
    return false;
  } else {
    $("#email-error").text("");
    return true;
  }
}

function checkMobile() {
  const data = $("#mobile").val();
  if (!data) {
    $("#mobile-number-error").text("*Phone number cannot be empty");
    return false;
  } else if (data.length !== 10) {
    $("#mobile-number-error").text("*Phone number should contain 10 digits");
    return false;
  } else if (!/^[0-9]+$/.test(data)) {
    $("#mobile-number-error").text(
      "*Phone number should contain numbers only."
    );
    return false;
  } else {
    $("#mobile-number-error").text("");
    return true;
  }
}

function checkDateOfBirth() {
  const data = $("#date-of-birth").val();
  const dateOfBirthValue = new Date(data);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - dateOfBirthValue.getFullYear();
  if (isNaN(dateOfBirthValue)) {
    $("#date-of-birth-error").text("*Date cannot be empty");
    return false;
  } else if (dateOfBirthValue > currentDate) {
    $("#date-of-birth-error").text("*Date should be in past");
    return false;
  } else if (age <= 18 || age >= 60) {
    $("#date-of-birth-error").text("*Age must be between 18 and 60");
    return false;
  } else {
    $("#date-of-birth-error").text("");
    return true;
  }
}

function checkLandline() {
  const pattern = /^(?:\+1)?(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
  const data = $("#landline").val();
  if (!data) {
    $("#landline-error").text("*Landline number cannot be empty");
    return false;
  } else if (!pattern.test(data)) {
    $("#landline-error").text("*Provide valid landline number");
    return false;
  } else {
    $("#landline-error").text("");
    return true;
  }
}

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  const firstNameInput = checkFirstName();
  const lastNameInput = checkLastName();
  const emailInput = checkEmail();
  const jobInput = checkJobDetail();
  const mobileInput = checkMobile();
  const dateOfBirthInput = checkDateOfBirth();
  const landlineInput = checkLandline();
  if (
    firstNameInput === true &&
    lastNameInput === true &&
    emailInput === true &&
    jobInput === true &&
    mobileInput === true &&
    dateOfBirthInput === true &&
    landlineInput === true
  ) {
    $("#form-error").text("Successfully Saved");
    $("#form-error").css("color", "green");
  } else {
    $("#form-error").text("*Please fill the required details");
    $("#form-error").css("color", "red");
  }
});

//get users data

function getUser(data) {
  const { results } = data;
  const [userData] = results;
  const { first, last } = userData.name;
  const userEmail = userData.email;
  const { large } = userData.picture;
  const { phone } = userData;
  $("#user-name").text(first + " " + last);
  $("#user-small-device-name").text(first + " " + last);
  $("#profile-image").attr("src", large);
  $("#profile-small-device-image").attr("src", large);
  $("#user-email").text(userEmail);
  $("#user-phone-number").text(phone);
  $("#user-small-device-email").text(userEmail);
  $("#user-small-device-phone-number").text(phone);
}

$.get("https://randomuser.me/api/")
  .done(getUser)
  .fail(function (xhr, status, error) {
    $("#user-name").text("unable to fetch username");
    $("#user-email").text("unable to fetch username");
    $("#user-phone-number").text("unable to fetch phone number");
    $("#user-small-device-name").text("unable to fetch username");
    $("#user-small-device-email").text("unable to fetch username");
    $("#user-small-device-phone-number").text("unable to fetch phone number");
  });
