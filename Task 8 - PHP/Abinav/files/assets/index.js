function addNewContact() {
  $("#myForm2").removeClass("d-none");
  $("#myform").addClass("d-none");
}
function manageContacts() {
  $("#myForm2").addClass("d-none");
  $("#myform").removeClass("d-none");
  $('#statusFail').addClass("d-none");
}
function logout() {
  window.location.replace("../index.html");
}

$(document).ready(function () {
  $("#firstName").on("blur", firstNameValidation);
  $("#lastName").on("blur", lastNameValidation);
  $("#password").on("blur", passwordValidation);
  $("#phone").on("blur", phoneNumberValidation);
  $("#emailid").on("blur", emailValidation);
  $("#title").on("blur", titleValidation);
  $("#company").on("blur", companyNameValidation);
  $("#myForm2").on("submit", register);
});
function companyNameValidation() {
  let company = $("#company").val();
  if (company === "") {
    $("#companyError").text("Company name should not be empty");
    return false;
  } else if (company.length < 3) {
    $("#companyError").text("Company name should be minimum 3 letters");
    return false;
  } else {
    $("#companyError").text("");
    return true;
  }
}

function firstNameValidation() {
  let firstName = $("#firstName").val();
  let pattern = /^[A-Za-z]{3,}$/;
  if (firstName === "") {
    $("#firstNameError").text("First name should not be empty");
    return false;
  } else if (!pattern.test(firstName)) {
    $("#firstNameError").text(
      "First name should contain only alphabetic characters and should contact 3 letters"
    );
    return false;
  } else {
    $("#firstNameError").text("");
    return true;
  }
}
function lastNameValidation() {
  let lastName = $("#lastName").val();
  let pattern = /^[A-Za-z]{3,}$/;
  if (lastName === "") {
    $("#lastNameError").text("Last name should not be empty");
    return false;
  } else if (!pattern.test(lastName)) {
    $("#lastNameError").text(
      "Last name should have a minimum of 3 characters, and should not contain numbers or special characters"
    );
    return false;
  } else {
    $("#lastNameError").text("");
    return true;
  }
}

function phoneNumberValidation() {
  let phone = $("#phone").val();
  let pattern = /^\d{10}$/;

  if (phone === "") {
    $("#phoneError").text("Phone number is required.");
    return false;
  } else if (!pattern.test(phone)) {
    $("#phoneError").text("Phone number should be a 10-digit number.");
    return false;
  } else {
    $("#phoneError").text("");
    return true; // Clear the error
  }
}

function passwordValidation() {
  let password = $("#password").val();
  if (password.length < 8) {
    $("#passwordError").text("Password must be at least 8 characters");
    return false;
  } else {
    $("#passwordError").text("");
    return true;
  }
}

function emailValidation() {
  let email = $("#emailid").val();
  let emailError = $("#emailidError");

  if (!email) {
    emailError.text("Email should not be empty.");
    return false;
  }

  if (!isValidEmail(email)) {
    emailError.text(
      "Please enter a valid email address (e.g., gunda@gmail.com)."
    );
    return false;
  }

  emailError.text("");
  return true;
}

function isValidEmail(email) {
  // Use HTML5's built-in email validation and add a custom regex check
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

function titleValidation() {
  let title = $("#title").val();
  if (title === "") {
    $("#titleError").text("Title should not be empty");
    return false;
  } else {
    $("#titleError").text("");
    return true;
  }
}

function register(event) {
  event.preventDefault();
  var isFirstNameValid = firstNameValidation();
  var isLastNameValid = lastNameValidation();

  var isPhoneValid = phoneNumberValidation();
  var isEmailValid = emailValidation();
  var istitleValid = titleValidation();
  var iscompanyValid = companyNameValidation();
  console.log(isEmailValid);
  console.log(isFirstNameValid);

  console.log(isLastNameValid);

  console.log(isPhoneValid);
  console.log(isEmailValid);
  console.log(istitleValid);
  console.log(iscompanyValid);

  if (
    isFirstNameValid &&
    isLastNameValid &&
    isPhoneValid &&
    istitleValid &&
    iscompanyValid &&
    isEmailValid
  ) {
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var email = $("#email").val();
    
    var phone = $("#phone").val();
    var email = $("#emailid").val();
    var title = $("#title").val();
    var company = $("#company").val();
    var address = $("#address").val();
    var addressLine2 = $("#addressLine2").val();
    var city = $("#city").val();
    var zipCode = $("#zipCode").val();
    var websiteUrl = $("#websiteUrl").val();
    var state = $("#state").val();
    var status = $("#status").val();
    var followUp = $("#followUp").val();

    $.ajax({
      method: "POST",
      url: "../api/index.php",
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        
        phone: phone,
        email: email,
        title: title,
        company: company,
        address: address,
        addressLine2: addressLine2,
        city: city,
        zipCode: zipCode,
        websiteUrl: websiteUrl,
        state: state,
        status: status,
        followUp: followUp,
      },
      success: function (response) {
        if (response.includes("email already Taken!")) {
          $("#statusFail").text(
            "Email already taken! try with different email"
          );

          return;
        } else {
          $("#myForm2").addClass("d-none");
          $("#statusFail").removeClass("d-none");
          $("#statusFail").text("Registration Successfull !");
        
        }
      },
      error: function (xhr, status, error) {
        console.error("Error:", error);
      },
    });
  }
};

function showDetail(event) {
  event.preventDefault();
  let userCompany = $("#userCompany").val();

  // Remove existing data rows in the table except the first row
  $("#getUserDetail tbody tr:not(:first)").remove();

  $.ajax({
      method: "POST",
      url: "../api/userDetail.php",
      data: {
          userCompany: userCompany,
      },
      success: function (response) {
          response.forEach(function (item) {
              const row = $("<tr>");
              for (const property in item) {
                  const td = $("<td>").text(item[property]);
                  row.append(td);
              }
              $("#getUserDetail tbody").append(row);
          });
      },
  });
};



 
