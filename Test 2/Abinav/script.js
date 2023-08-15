$.ajax({
  url: "https://randomuser.me/api/",
  dataType: "json",
  success: function (data) {
    a = data.results[0].picture.large;
    $("#profileImage").attr("src", a);
    $("#profileUserName").text(data.results[0].name.last);
    $("#profilePhoneNumber").text(data.results[0].phone);
    $("#profileEmailAddress").text(data.results[0].email);
    $("#profileImagemobileview").attr("src", a);
    $("#profileUserNamemobileview").text(data.results[0].name.last);
    $("#profilePhoneNumbermobileview").text(data.results[0].phone);
    $("#profileEmailAddressmobileview").text(data.results[0].email);
  },
});

function firstname() {
  var username = $("#firstnameInput").val();
  var validationMessage = $("#firstnameValidationMessage");

  if (!/^[A-Z][a-zA-Z]*$/.test(username)) {
    validationMessage.text(
      "Firstname should start with a capital letter and can only contain letters."
    );
    validationMessage.css("color", "red");
    return false;
  } else if (username.length < 3) {
    validationMessage.text("Firstname must be at least 3 characters long.");
    validationMessage.css("color", "red");
    return false;
  } else {
    validationMessage.text("Firstname is valid.");
    validationMessage.css("color", "green");
    return true;
  }
}

function lastname() {
  var lastname = $("#lastNameInput").val();
  var validationMessage = $("#lastnameValidationMessage");

  if (!/^[A-Z][a-zA-Z]+$/.test(lastname)) {
    validationMessage.text(
      "Lastname should start with a capital letter and can only contain letters."
    );
    validationMessage.css("color", "red");
    return false;
  } else if (lastname.length < 3) {
    validationMessage.text("Lastname must be at least 3 characters long.");
    validationMessage.css("color", "red");
    
    return false;
  } else {
    validationMessage.text("Lastname is valid.");
    validationMessage.css("color", "green");
    return true;
  }
}

function userEmailValidation() {
  const emailIDElement = $("#emailInput");
  const feedback = $("#email-feedback");

  if (emailIDElement.val().length !== 0 && emailIDElement.val().length <= 50) {
    // No Consecutive Dots: Avoid ".." in the local part.
    const consecutiveDotsRegExp = /\.\./;
    if (!emailIDElement.val().match(consecutiveDotsRegExp)) {
      // Domain Name: Valid domain after "@" symbol.
      const domainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const parts = emailIDElement.val().split("@");
      const domain = parts[1];
      if (domainPattern.test(domain)) {
        // Valid Characters: Limit to alphanumeric, period, underscore, and hyphen.
        const pattern = /^[A-Za-z0-9.@_-]+$/;
        if (pattern.test(emailIDElement.val())) {
          emailIDElement.removeClass("is-invalid");
          emailIDElement.addClass("is-valid");
          feedback.html("");
          return true;
        } else {
          emailIDElement.removeClass("is-valid");
          emailIDElement.addClass("is-invalid");
          feedback.html(
            "Only valid characters i.e, A-Za-z0-9.-_ and no spaces"
          );
          return false;
        }
      } else {
        emailIDElement.removeClass("is-valid");
        emailIDElement.addClass("is-invalid");
        feedback.html("Domain is invalid!");
        return false;
      }
    } else {
      emailIDElement.removeClass("is-valid");
      emailIDElement.addClass("is-invalid");
      feedback.html("No two consecutive dots i.e, ..");
      return false;
    }
  } else {
    emailIDElement.removeClass("is-valid");
    emailIDElement.addClass("is-invalid");
    feedback.html("Email should be a valid length");
    return false;
  }
}

function phoneNumberValidation() {
  const numberValidateElement = $("#phoneInput");
  var validationMessage = $("#phonenovalidmessage");
  const feedback = $("#phoneNo-feedback");
  if (numberValidateElement.val().length == 10) {
    let numericRegExp = /^[0-9]+$/;
    if (numericRegExp.test(numberValidateElement.val())) {
      numberValidateElement.removeClass("is-invalid");
      numberValidateElement.addClass("is-valid");
      feedback.html("");
      validationMessage.text("Phone Number is Valid");


      return true;
    } else {
      numberValidateElement.removeClass("is-valid");
      numberValidateElement.addClass("is-invalid");
      validationMessage.text("");
      feedback.html(
        "Number should not contain any symbols or characters other than numbers"
      );
      return false;
    }
  } else {
    numberValidateElement.removeClass("is-valid");
    numberValidateElement.addClass("is-invalid");
    validationMessage.text("");
    feedback.html("Phone number should be a 10-digit number");
    return false;
  }
}
function MobileNumberValidation() {
  const numberValidateElement = $("#mobileInput");
  const feedback = $("#mobileNo-feedback");
  var validationMessage = $("#mobilenovalidmessage");
  
  if (numberValidateElement.val().length == 10) {
    let numericRegExp = /^[0-9]+$/;
    if (numericRegExp.test(numberValidateElement.val())) {
      numberValidateElement.removeClass("is-invalid");
      numberValidateElement.addClass("is-valid");
      validationMessage.text("Phone Number is Valid");
      feedback.html("");
   
      return true;
    } else {
      numberValidateElement.removeClass("is-valid");
      numberValidateElement.addClass("is-invalid");
      validationMessage.text("");
      feedback.html(
        "Number should not contain any symbols or characters other than numbers"
      );
      return false;
    }
  } else {
    numberValidateElement.removeClass("is-valid");
    numberValidateElement.addClass("is-invalid");
    validationMessage.text(" ");
    feedback.html("Mobile number should be a 10-digit number");
    return false;
  }
}

$("#faxInput").on("keyup", function () {
  var faxNumber = $(this).val();
  var isValid = validateFaxNumber(faxNumber);

  var validationMessage = isValid ? "" : "Invalid fax number";
  $("#faxValidationMessage").text(validationMessage);
});

function validateFaxNumber(faxNumber) {
  var faxRegex = /^[0-9\- ]+$/;
  return faxRegex.test(faxNumber);
}
