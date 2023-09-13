function subsribeForm() {
	$("#newsLetter").show();
}

function Submit() {
	//alert("Form would be submitted.");
	$('#newsLetter').hide();
}

function relocate_admin(){
  location.href = "adminlogin.html";
}

$(document).ready(function () {
  $("#name").on("blur", nameValidation);
  $("#phone").on("blur", phoneValidation);
  $("#email ").on("blur", emailValidation);
});
function nameValidation() {
  let name = $("#name").val();
  let pattern = /^[A-Za-z]{3,}$/;
  if (name === "") {
    $("#nameError").text(" name should not be empty");
    return false;
  } else if (!pattern.test(name)) {
    $("#nameError").text(
      "name should contain only alphabetic character"
    );
    return false;
  } else {
    $("#nameError").text("");
    return true;
  }
}
function phoneValidation() {
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
    return true;
  }
}
function emailValidation() {
  let email = $("#email").val();
  let emailError = $("#emailError");

  if (email.trim() === "") {
    emailError.text("Email should not be empty.");
    return false;
  } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
    emailError.text(
      "Please enter a valid email address. for ex:sameerpradhan256.com"
    );
    return false;
  } else {
    emailError.text("");
    return true;
  }
}
document
  .getElementById("subscribeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var isnameValid = nameValidation();
    var isphoneValid = phoneValidation();
    var isemailValid = emailValidation();

    if (
      isnameValid &&
      isphoneValid &&
      isemailValid
    ) {
      var name = $("#name").val();
      var email = $("#email").val();
      var phone = $("#phone").val();

      $.ajax({
        method: "POST",
        url: "./api/index.php",
        data: {
          name: name,
          phone: phone,
          email: email,
        },
        success: function (response) {
          response = JSON.parse(response);
          var status = response.status;
          if (response.status === false) {
            $("#failMessage").text(response.message);
          } else {
            $("#userRegistrationForm").addClass("d-none");
            $("#successMessage").text("Registration Successful!");
          }
        },
        error: function (xhr, status, error) {
          console.error("Error:", error);
        },
      });
    }
  });



   
    
   