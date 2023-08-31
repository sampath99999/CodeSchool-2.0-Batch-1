$(document).ready(function () {
  $("#firstname").on("blur", firstNameValidation);
  $("#lastname").on("blur", lastNameValidation);
  $("#company").on("blur", companyNameValidation);
  $("#phone").on("blur", phoneNumberValidation);
  $("#email").on("blur", emailValidation);
  $("#title").on("blur", titleValidation);
  $("#myform").on("submit", register);

  
});

function firstNameValidation() {
  let firstName = $("#firstname").val();
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
  let lastName = $("#lastname").val();
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

function companyNameValidation() {
  let company = $("#company").val();
  if (company === "") {
    $("#companyError").text("Company name should not be empty");
    return false;
  } else if (company.length < 3) {
    $("#companyError").text(
      "Company name should be minimum 3 letters"
    );
    return false;
  }  else {
    $("#companyError").text("");
    return true;
  }
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
    return true;// Clear the error
  }
}
function emailValidation() {
  let email = $("#email").val();
  if (email === "") {
    $("#emailError").text("Email Should Not Be Empty");
    return false;
  } else {
    $("#emailError").text("");
    return true;
  }
}

function register(event) {
  event.preventDefault();

  // Call the validation functions to check validity
  var isFirstNameValid = firstNameValidation();
  var isLastNameValid = lastNameValidation();
  var isCompanyValid = companyNameValidation();
  var isPhoneValid = phoneNumberValidation();
  var isEmailValid = emailValidation();


  // Check if all validation conditions are met
  if (
    isFirstNameValid &&
    isLastNameValid &&
    isCompanyValid &&
  
    isPhoneValid &&
    isEmailValid
  ) {
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var title = $("#title").val();
    var company = $("#company").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var contact_method = "";
    if ($("#phoneNumber").prop("checked")) {
      contact_method = "phone";
    } else if ($("#emailAddress").prop("checked")) {
      contact_method = "email";
    } else if ($("#noPreference").prop("checked")) {
      contact_method = "noPreference";
    }

    var comments = $("#comments").val();

    $.ajax({
      method: "POST",
      url: "./api/leads.php",
      data: {
        firstname: firstname,
        lastname: lastname,
        title: title,
        company: company,
        phone: phone,
        email: email,
        contact_method: contact_method,
        comments: comments,
      },
      success: function (response) {
        console.log("Data inserted successfully.");
        $("#myform").addClass("d-none");
        $("#status").text("Your Details Submitted Successfully");
      },
      error: function (xhr, status, error) {
        console.error("Error:", error);
      },
    });
  }
}

// function register(event) {
//   event.preventDefault();

//   firstNameValidation();
//   lastNameValidation();
//   companyNameValidation();
//   titleValidation();
//   phoneNumberValidation();
//   emailValidation();

//   var firstname = $("#firstname").val();
//   var lastname = $("#lastname").val();
//   var title = $("#title").val();
//   var company = $("#company").val();
//   var phone = $("#phone").val();
//   var email = $("#email").val();
//   var contact_method = "";
//   if ($("#phoneNumber").prop("checked")) {
//     contact_method = "phone";
//   } else if ($("#emailAddress").prop("checked")) {
//     contact_method = "email";
//   } else if ($("#noPreference").prop("checked")) {
//     contact_method = "noPreference";
//   }

//   var comments = $("#comments").val();

//   $.ajax({
//     method: "POST",
//     url: "./api/leads.php",
//     data: {
//       firstname: firstname,
//       lastname: lastname,
//       title: title,
//       company: company,
//       phone: phone,
//       email: email,
//       contact_method: contact_method,
//       comments: comments,
//     },
//     success: function (response) {
//       console.log("Data inserted successfully.");
//       $("#myform").addClass("d-none");
//       $("#status").text("Your Details Submitted Successfully");
//     },
//     error: function (xhr, status, error) {
//       console.error("Error:", error);
//     },
//   });
// }

// if (register(event)) {
//   var firstname = $("#firstname").val();
//   var lastname = $("#lastname").val();
//   var title = $("#title").val();
//   var company = $("#company").val();
//   var phone = $("#phone").val();
//   var email = $("#email").val();
//   var contact_method = "";
//   if ($("#phoneNumber").prop("checked")) {
//     contact_method = "phone";
//   } else if ($("#emailAddress").prop("checked")) {
//     contact_method = "email";
//   } else if ($("#noPreference").prop("checked")) {
//     contact_method = "noPreference";
//   }

//   var comments = $("#comments").val();

//   $.ajax({
//     method: "POST",
//     url: "./api/leads.php",
//     data: {
//       firstname: firstname,
//       lastname: lastname,
//       title: title,
//       company: company,
//       phone: phone,
//       email: email,
//       contact_method: contact_method,
//       comments: comments,
//     },
//     success: function (response) {
//       console.log("Data inserted successfully.");
//       $("#myform").addClass("d-none");
//       $("#status").text("Your Details Submitted Successfully");
//     },
//     error: function (xhr, status, error) {
//       console.error("Error:", error);
//     },
//   });
// }
