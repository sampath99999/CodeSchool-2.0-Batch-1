$(document).ready(function () {

  // Validate first name
  function validateFirstName() {
    const firstName = $("#firstNameInput").val().trim();
    const firstNameError = $("#firstNameError");
    if (firstName === "") {
      firstNameError.text("First Name is required.");
    } else if (firstName.length < 2 || firstName.length > 50) {
      firstNameError.text("First Name must be between 2 and 50 characters.");
    } else if (!/^[A-Z][a-z]*$/.test(firstName)) {
      firstNameError.text(
        "First Name must be in Title case (e.g., John, Alice)."
      );
    } else {
      firstNameError.text("");
    }
  }

  // Validate last name
  function validateLastName() {
    const lastName = $("#lastNameInput").val().trim();
    const lastNameError = $("#lastNameError");
    if (lastName === "") {
      lastNameError.text("Last Name is required.");
    } else if (lastName.length < 2 || lastName.length > 50) {
      lastNameError.text("Last Name must be between 2 and 50 characters.");
    } else if (!/^[A-Z][a-z]*$/.test(lastName)) {
      lastNameError.text(
        "Last Name must be in Title case (e.g., John, Alice)."
      );
    } else {
      lastNameError.text("");
    }
  }

  // Validate Email
  function validateEmail() {
    const email = $("#emailInput").val().trim();
    const emailError = $("#emailError");
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (email === "") {
      emailError.text("Email is required.");
    } else if (email.length > 100) {
      emailError.text("Email exceeds the maximum length limit.");
    } else if (!emailRegex.test(email)) {
      emailError.text("Email is invalid.");
    } else {
      emailError.text("");
    }
  }

  // Validate phone number
  function validatePhone() {
    const phone = $("#callingCode").val().trim();
    const phoneError = $("#phoneError");
    const phoneRegex = /^[0-9]+$/;
    if (phone === "") {
      phoneError.text("Phone number is required.");
    } else if (phone.length !== 10) {
      phoneError.text("Phone number must be a 10-digit number.");
    } else if (!phoneRegex.test(phone)) {
      phoneError.text("Phone number must contain numeric digits (0-9) only.");
    } else {
      phoneError.text("");
    }
  }

  // Validate date of birth (DOB)
  function validateDOB() {
    const dob = new Date($("#dobInput").val());
    const dobError = $("#dobError");
    const currentDate = new Date();
    const ageDifference = currentDate - dob;
    const ageInYears = ageDifference / (1000 * 60 * 60 * 24 * 365.25);

    if ($("#dobInput").val() === "") {
      dobError.text("Date of Birth is required.");
    } else if (isNaN(dob.getTime())) {
      dobError.text("Please enter a valid date.");
    } else if (dob > currentDate) {
      dobError.text("Date of Birth cannot be in the future.");
    } else if (ageInYears < 18) {
      dobError.text("You must be 18 years or older.");
    } else {
      dobError.text("");
    }
  }

  // Validate date of joining (DOJ)
  function validateDOJ() {
    const dob = new Date($("#dobInput").val());
    const doj = new Date($("#dojInput").val());
    const dojError = $("#dojError");
    const dateDifference = doj - dob;
    const ageInYears = dateDifference / (1000 * 60 * 60 * 24 * 365.25);
    if ($("#dojInput").val() === "") {
      dojError.text("Date of Joining is required.");
    } else if (isNaN(doj.getTime())) {
      dojError.text("Please enter a valid date.");
    } else if (doj <= dob) {
      dojError.text("Date of Joining must be after the Date of Birth.");
    } else if (ageInYears < 18) {
      dojError.text("Age must be at least 18 years from the Date of Birth.");
    } else {
      dojError.text("");
    }
  }

  // Validate password
  function validatePassword() {
    const password = $("#passwordInput").val();
    const passwordError = $("#passwordError");
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,25}$/;
    const commonWords = ["password", "123456", "abcdef"];

    if (password === "") {
      passwordError.text("Password is required.");
    } else if (password.length < 5 || password.length > 25) {
      passwordError.text("Password must be between 5 and 25 characters.");
    } else if (!passwordRegex.test(password)) {
      passwordError.text(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
    } else if (/\s/.test(password)) {
      passwordError.text("Password cannot contain spaces.");
    } else if (commonWords.includes(password.toLowerCase())) {
      passwordError.text(
        "Password cannot be a common word or easily guessable."
      );
    } else if (isSequential(password)) {
      passwordError.text("Password cannot contain sequential characters.");
    } else if (hasRepeatingCharacters(password)) {
      passwordError.text(
        "Password cannot have repeating characters consecutively."
      );
    } else {
      passwordError.text("");
    }
    validateConfirmedPassword();
  }

  // Validate confirmed password
  function validateConfirmedPassword() {
    const confirmedPassword = $("#confirmed-password").val();
    const confirmedPasswordError = $("#confirmedPasswordError");
    const password = $("#passwordInput").val();

    if (confirmedPassword === "") {
      confirmedPasswordError.text("Confirm Password is required.");
    } else if (password === "") {
      confirmedPasswordError.text("");
    } else if (confirmedPassword !== password) {
      confirmedPasswordError.text("Passwords do not match.");
    } else {
      confirmedPasswordError.text("");
    }
  }

  function isSequential(str) {
    const lowerStr = str.toLowerCase();
    for (let i = 0; i < lowerStr.length - 2; i++) {
      const firstChar = lowerStr.charCodeAt(i);
      const secondChar = lowerStr.charCodeAt(i + 1);
      const thirdChar = lowerStr.charCodeAt(i + 2);
      if (firstChar + 1 === secondChar && secondChar + 1 === thirdChar) {
        return true;
      }
    }
    return false;
  }

  function hasRepeatingCharacters(str) {
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === str[i + 1]) {
        return true;
      }
    }
    return false;
  }

  function clearError(errorId) {
    $(errorId).text("");
  }

  // Event Handlers
  $("#firstNameInput").on("input", validateFirstName);
  $("#lastNameInput").on("input", validateLastName);
  $("#emailInput").on("input", validateEmail);
  $("#callingCode").on("input", validatePhone);
  $("#dobInput").on("change", validateDOB);
  $("#dojInput").on("change", validateDOJ);
  $("#passwordInput").on("input", validatePassword);
  $("#confirmed-password").on("input", validateConfirmedPassword);

  // Form submission
  $("#registrationForm").on("submit", function (event) {
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePhone();
    validateDOB();
    validateDOJ();
    validatePassword();
    validateConfirmedPassword();

    if (
      $("#firstNameError").text() !== "" ||
      $("#lastNameError").text() !== "" ||
      $("#emailError").text() !== "" ||
      $("#phoneError").text() !== "" ||
      $("#dobError").text() !== "" ||
      $("#dojError").text() !== "" ||
      $("#passwordError").text() !== "" ||
      $("#confirmedPasswordError").text() !== ""
    ) {
      event.preventDefault();
    }
  });

  $("#submitBtn").click(function () {
    var allFieldsFilled = true;
    if ($("#firstNameInput").val() === "") {
      $("#firstNameError").text("Please enter your first name.");
      allFieldsFilled = false;
    } else {
      clearError("#firstNameError");
    }

    if ($("#lastNameInput").val() === "") {
      $("#lastNameError").text("Please enter your last name.");
      allFieldsFilled = false;
    } else {
      clearError("#lastNameError");
    }

    if ($("#emailInput").val() === "") {
      $("#emailError").text("Please enter your email.");
      allFieldsFilled = false;
    } else {
      clearError("#emailError");
    }

    if ($("#callingCode").val() === "") {
      $("#phoneError").text("Please enter your phone number.");
      allFieldsFilled = false;
    } else {
      clearError("#phoneError");
    }

    if ($("#dobInput").val() === "") {
      $("#dobError").text("Please enter your date of birth.");
      allFieldsFilled = false;
    } else {
      clearError("#dobError");
    }

    if ($("#dojInput").val() === "") {
      $("#dojError").text("Please enter your date of joining.");
      allFieldsFilled = false;
    } else {
      clearError("#dojError");
    }

    if (!$("input[name='gender']:checked").length) {
      $("#genderError").text("Please select your gender.");
      allFieldsFilled = false;
    } else {
      clearError("#genderError");
    }

    if ($("#passwordInput").val() === "") {
      $("#passwordError").text("Please enter a password.");
      allFieldsFilled = false;
    } else {
      clearError("#passwordError");
    }

    if ($("#confirmed-password").val() === "") {
      $("#confirmedPasswordError").text("Please confirm your password.");
      allFieldsFilled = false;
    } else {
      clearError("#confirmedPasswordError");
    }

    if (allFieldsFilled) {
      var user = {
        firstName: $("#firstNameInput").val(),
        lastName: $("#lastNameInput").val(),
        email: $("#emailInput").val(),
        callingCode: $("#callingCode").val(),
        dob: $("#dobInput").val(),
        doj: $("#dojInput").val(),
        gender: $("input[name='gender']:checked").val(),
        password: $("#passwordInput").val(),
        confirmPassword: $("#confirmed-password").val(),
      };
      window.location.href = "page.html";

      $.ajax({
        url: "https://reqres.in/api/users",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(user),
        success: function (response) {
          $("#demo").text("Registration successful").css("color", "green");
        },
        error: function (xhr, status, error) {
          $("#demo")
            .text("Error: " + error)
            .css("color", "red");
        },
      });
    }
  });



const products = $(".product-images");
const apiKey = "Wh6ouQ-XIJHJtg-y8ik3q6d1PINDOtpcb9eDeK-nxN0"
const apiUrl = `https://api.unsplash.com/photos/random/?count=${products.length}&client_id=${apiKey}&query=product`;

$.get(apiUrl, function (images) {
  products.each(function (index) {
    const image = $("<img>")
      .attr("src", images[index].urls.regular)
      .attr("alt", images[index].alt_description)
      .attr("width", 280)
      .attr("height", 350);
    const jsonPlaceholderApiUrl = 'https://jsonplaceholder.typicode.com/posts';

    $.get(jsonPlaceholderApiUrl, function (data) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomTitle = data[randomIndex].body.substring(0,5 );
      const randomDescription = data[randomIndex].body.substring(0, 150);
    const capitalizedTitle = randomTitle.charAt(0).toUpperCase() + randomTitle.slice(1);
    const capitalizedDescription = randomDescription.charAt(0).toUpperCase() + randomDescription.slice(1);
    const title = $("<h3>").text(capitalizedTitle);
    const description = $("<p>").text(capitalizedDescription);
    //   const title = $("<h3>").text(randomTitle);
    //   const description = $("<p>").text(randomDescription);

      $(this).append(image, title, description);
    }.bind(this));

 
  });
});

  
});
