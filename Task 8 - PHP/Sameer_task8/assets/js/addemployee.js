$(document).ready(function () {
    $("#name").on("blur", nameValidation);
    $("#fname").on("blur", fnameValidation);
    $("#gender").on("blur", genderValidation);
    $("#martial_status").on("blur", martial_statusValidation);
    $("#dob").on("blur", dobValidation);
    $("#aadhaar_no").on("blur", aadhaar_noValidation);
    $("#address").on("blur", addressValidation);
    $("#email").on("blur", emailValidation);
    $("#phone").on("blur", phoneValidation);
    $("#myform").on("submit", register);
  });

  function nameValidation() {
    let name = $("#name").val();
    let pattern = /^[A-Za-z]{3,}$/;
    if (name === "") {
      $("#nameError").text("Name should not be empty");
      return false;
    } else if (!pattern.test(name)) {
      $("#nameError").text(
        "Name should contain only alphabetic characters and should contact 3 letters"
      );
      return false;
    } else {
      $("#nameError").text("");
      return true;
    }
  }
  function fnameValidation() {
    let fname = $("#fname").val();
    let pattern = /^[A-Za-z]{3,}$/;
    if (fname === "") {
      $("#fnameError").text("Father name should not be empty");
      return false;
    } else if (!pattern.test(fname)) {
      $("#fnameError").text(
        "Father name should contain only alphabetic characters and should contact 3 letters"
      );
      return false;
    } else {
      $("#fnameError").text("");
      return true;
    }
  }
  function genderValidation(){
    var gender = document.getElementById("gender");
    if (gender.value == "") {
        $("#genderError").text("");
        //alert("Please select an option!");
        return false;
    }
    return true;
}

function martial_statusValidation(){
    var martial_status = document.getElementById("martial_status");
    if (martial_status == "") {
        $("#martial_statusError").text("");
        //alert("Please select an option!");
        return false;
    }
    return true;
}
function dobValidation(date, feedback){
    date.on("change", function(){
        date.removeClass("is-invalid");
    });
    if(date.val() == ''){
        date.removeClass("is-valid");
        date.addClass("is-invalid");
        feedback.text("* Field is required!");
        return false;
    } else {
        date.removeClass("is-invalid");
        return true;
    }
}
function aadhaar_noValidation() {
    let aadhaar_no = $("#aadhaar_no").val();
    let pattern = /^\d{16}$/;
  
    if (aadhaar_no === "") {
      $("#aadhaar_no").text("Aadhaar_no number is required.");
      return false;
    } else if (!pattern.test(phone)) {
      $("#aadhaar_noError").text("Aadhaar_no number should be a 10-digit number.");
      return false;
    } else {
      $("#aadhaar_noError").text(""); 
      return true;
    }
  }
  function addressValidation() {
    let address = $("#address").val();
    let pattern = /^[A-Za-z]{3,}$/;
    if (address === "") {
      $("#addressError").text("Address should not be empty");
      return false;
    } else if (!pattern.test(address)) {
      $("#addressError").text(
        "Address should contain only alphabetic characters and should contact 3 letters"
      );
      return false;
    } else {
      $("#AddressError").text("");
      return true;
    }
  }
  function pan_noValidation() {
    let pan_no = $("#aadhaar_no").val();
    let pattern = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  
    if (pan_no === "") {
      $("#pan_no").text("Pan_no number is required.");
      return false;
    } else if (!pattern.test(phone)) {
      $("#pan_noError").text("Pan_no number should be a 10-digit number.");
      return false;
    } else {
      $("#pan_noError").text(""); 
      return true;
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
      return true;// Clear the error
    }
  }
  

function register(event) {
    event.preventDefault();

    var isnameValid = nameValidation();
    var isfnameValid = fnameValidation();
    var isgenderValid = genderValidation();
    var ismartial_statusValid = martial_statusValidation();
    var isdobValid = dobValidation();
    var isaadhaar_noValid = aadhaar_noValidation();
    var isaddressValid = addressValidation();
    var ispan_noValid = pan_noValidation();
    var isemailValid = emailValidation();
    var isphoneValid = phoneValidation();

    if (
        isnameValid &&
        isfnameValid &&
        isgenderValid &&
        ismartial_statusValid &&
        isdobValid &&
        isaadhaar_noValid &&
        isaddressValid &&
        ispan_noValid &&
        isemailValid &&
        isphoneValid
      ) {
        var name = $("#name").val();
        var fname = $("#fname").val();
        var gender = $("#gender").val();
        var martial_status = $("#martial_status").val();
        var dob = $("#dob").val();
        var aadhaar_no = $("#aadhaar_no").val();
        var address = $("#address").val();
        var pan_no = $("#pan_no").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
       
        

        $.ajax({
            method: "POST",
            url: "./api/register.php",
            data: {
              name: name,
              fname: fname,
              gender: gender,
              martial_status: martial_status,
              dob:dob,
              aadhaar_no:aadhaar_no,
              address:address,
              pan_no:pan_no,
              email: email,
              phone: phone,
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

    