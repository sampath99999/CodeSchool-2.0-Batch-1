$(document).ready(function () {
    let userToken = localStorage.getItem("access_token");
            if (userToken) {
              window.location.href = "login.html";
            }
  
  // Validate first name
function validateFirstName() {
    const firstName = $("#firstNameInput").val().trim();
    const firstNameError = $("#firstNameError");
    
    if (firstName === "") {
      firstNameError.text("First Name is required.");
    } else if (firstName.length < 2 || firstName.length > 50) {
      firstNameError.text("First Name must be between 2 and 50 characters.");
    } else if (!/^[A-Za-z]+$/.test(firstName)) {
      firstNameError.text("First Name must contain alphabetic characters only.");
    } else {
      const titleCaseFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
      $("#firstNameInput").val(titleCaseFirstName);
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
    } else if (!/^[A-Za-z]+$/.test(lastName)) {
      lastNameError.text("Last Name must contain alphabetic characters only.");
    } else {
      const titleCaseLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
      $("#lastNameInput").val(titleCaseLastName);
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

//   function clearError(errorId) {
//     $(errorId).text("");
//   }

  // Event Handlers
  $("#firstNameInput").on("input", validateFirstName);
  $("#lastNameInput").on("input", validateLastName);
  $("#emailInput").on("input", validateEmail);
  $("#passwordInput").on("input", validatePassword);
  $("#confirmed-password").on("input", validateConfirmedPassword);
 
        $("#registrationForm").on("submit", function (event) {
          event.preventDefault(); 
          validateFirstName();
          validateLastName();
          validateEmail();
          validatePassword();
          validateConfirmedPassword();
      
          var user = {
            firstName: $("#firstNameInput").val(),
            lastName: $("#lastNameInput").val(),
            email: $("#emailInput").val(),
            password: $("#passwordInput").val(),
            confirmPassword: $("#confirmed-password").val(),
          };
      
          // Check if all validations passed
          if (
            $("#firstNameError").text() === "" &&
            $("#lastNameError").text() === "" &&
            $("#emailError").text() === "" &&
            $("#passwordError").text() === "" &&
            $("#confirmedPasswordError").text() === ""
          ) {
      
            $.ajax({
              url: "http://localhost/PRIYANKA/api/register.php",
              method: "POST",
              contentType: "application/json; charset=utf-8",
              data: JSON.stringify(user),
              success: function (response) {
                $("#demo").text("Registration successful").css("color", "green");
                window.location.href = "login.html";
              },
              error: function (xhr, status, error) {
                $("#demo")
                  .text("Error: " + error)
                  .css("color", "red");
              },
            });
          }
        }); 
      });
      