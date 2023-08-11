function displayQuote(data) {
  const { quotes } = data;
  // console.log(data);
  const totalQuotes = quotes.length;
  const randomIndex = Math.floor(Math.random() * totalQuotes);
  const { quote } = quotes[randomIndex];
  $("#randomQuote").text(quote);
}
function displayPhone(data) {
  const { users } = data;
  // console.log(data);
  const totalUsers = users.length;
  const randomIndex = Math.floor(Math.random() * totalUsers);
  const { phone } = users[randomIndex];
  $("#phoneNumber").text(phone);
}
function displayEmail(data) {
  const { users } = data;
  // console.log(data);
  const totalUsers = users.length;
  const randomIndex = Math.floor(Math.random() * totalUsers);
  const randomIndex1 = Math.floor(Math.random() * totalUsers);
  const randomIndex2 = Math.floor(Math.random() * totalUsers);
  // const {email}=users[randomIndex];
  const email1 = users[randomIndex].email;
  const email2 = users[randomIndex1].email;
  const email3 = users[randomIndex2].email;

  $("#firstEmail").text(email1);
  $("#secondEmail").text(email2);
  $("#thirdEmail").text(email3);
}

$(document).ready(function () {
  //left-part
  $.ajax({
    url: "https://dummyjson.com/quotes",
    type: "GET",
    success: function (data) {
      displayQuote(data);
    },
    error: function (data) {
      alert("woops!");
    },
  });
  $.ajax({
    url: "https://dummyjson.com/user",
    type: "GET",
    success: function (data) {
      displayPhone(data);
    },
    error: function (data) {
      alert("woops!");
    },
  });
  $.ajax({
    url: "https://dummyjson.com/user",
    type: "GET",
    success: function (data) {
      displayEmail(data);
    },
    error: function (data) {
      alert("woops!");
    },
  });

  //firstname

  $("#fnameErrorMsg").hide();
  let ValidFirstName = true;
  $("#firstName").keyup(function () {
    validateFirstName();
  });

  function validateFirstName() {
    function firstChar(str) {
      return /^[A-Z]/.test(str);
    }

    function onlyLettersAndNumbers(str) {
      return /^[A-Za-z]*$/.test(str);
    }

    let firstnameValue = $("#firstName").val();
    console.log(firstnameValue);

    if (!firstnameValue) {
      $("#fnameErrorMsg").show();
      ValidFirstName = false;
      return false;
    } else if (firstChar(firstnameValue[0]) === false) {
      $("#fnameErrorMsg").show();
      $("#fnameErrorMsg").html("*First character should be Title case");
      ValidFirstName = false;
      return false;
    } else if (firstnameValue.length < 2 || firstnameValue.length > 50) {
      $("#fnameErrorMsg").show();
      $("#fnameErrorMsg").html("*length of username must be between 2 and 50");
      ValidFirstName = false;
      return false;
    } else if (onlyLettersAndNumbers(firstnameValue) === false) {
      $("#fnameErrorMsg").show();
      $("#fnameErrorMsg").html("*Number not allowed");
      ValidFirstName = false;
      return false;
    } else {
      $("#fnameErrorMsg").hide();
      return true;
    }
  }

  //lastname
  $("#lnameErrorMsg").hide();
  let ValidLastName = true;
  $("#lastName").keyup(function () {
    validateLastName();
  });

  function validateLastName() {
    function firstChar(str) {
      return /^[A-Z]/.test(str);
    }

    function onlyLettersAndNumbers(str) {
      return /^[A-Za-z]*$/.test(str);
    }

    let lastnameValue = $("#lastName").val();
    console.log(lastnameValue);
    if (!lastnameValue) {
      $("#lnameErrorMsg").show();
      ValidLastName = false;
      return false;
    } else if (firstChar(lastnameValue[0]) === false) {
      $("#lnameErrorMsg").show();
      $("#lnameErrorMsg").html("*First character should be Title case");
      ValidLastName = false;
      return false;
    } else if (lastnameValue.length < 2 || lastnameValue.length > 50) {
      $("#lnameErrorMsg").show();
      $("#lnameErrorMsg").html("*length of username must be between 2 and 50");
      ValidLastName = false;
      return false;
    } else if (onlyLettersAndNumbers(lastnameValue) === false) {
      $("#lnameErrorMsg").show();
      $("#lnameErrorMsg").html("*Numbers not allowed");
      ValidLastName = false;
      return false;
    } else {
      $("#lnameErrorMsg").hide();
    }
    return true;
  }

  //email
  $("#emailErrorMsg").hide();
  let validEmail = true;
  $("#email").keyup(function () {
    validateEmail();
  });

  function validateEmail() {
    var validRegex =
      /^((?!\.)(?!.\.$)(?!.?\.\.)[a-z0-9.]{1,30})[@][a-z0-9]{2,}([.][a-z]{2,})+$/;

    let emailValue = $("#email").val();
    console.log(emailValue);
    if (!emailValue) {
      $("#emailErrorMsg").show();
      validEmail = false;
      return false;
    } else if (emailValue.match(/(\..*){2,}/)) {
      $("#emailErrorMsg").show();
      $("#emailErrorMsg").html("*No Consecutive Dots!");
      validEmail = false;
      return false;
    } else if (emailValue.split("@").length > 2) {
      $("#emailErrorMsg").show();
      $("#emailErrorMsg").html("*Single '@' Symbol!");
      validEmail = false;
      return false;
    } else if (emailValue.split(" ").length > 1) {
      $("#emailErrorMsg").show();
      $("#emailErrorMsg").html("*No spaces Allowed!");
      validEmail = false;
      return false;
    } else if (emailValue.match(validRegex)) {
      $("#emailErrorMsg").hide();

      validEmail = true;
      return true;
    } else {
      $("#emailErrorMsg").hide();
    }
    return true;
  }

  //phone
  $("#phoneErrorMsg").hide();
  let validPhone = true;
  $("#phone").keyup(function () {
    validPhoneNumber();
  });

  function validPhoneNumber() {
    let phoneValue = $("#phone").val();

    const number = /^[0-9]+$/.test(phoneValue);
    const specialChars = /[`!@#$%^&*]/;
    var isSpecial = specialChars.test(phoneValue);
    console.log(phoneValue);
    if (phoneValue === "") {
      $("#phoneErrorMsg").show();
      validPhone = false;
      return false;
    } else if (phoneValue.match(/^\d{10}/)) {
      $("#phoneErrorMsg").hide();

      validPhone = true;
      return true;
    } else if (/[a-zA-Z\s]+$/.test(phoneValue)) {
      console.log(/[^a-zA-Z]/.test(phoneValue));
      $("#phoneErrorMsg").show();
      $("#phoneErrorMsg").html("Phone Number Should not contain letters");
      validPhone = false;
      return false;
    } else if (/[`!@#$%^&*]+$/.test(phoneValue)) {
      $("#phoneErrorMsg").show();
      $("#phoneErrorMsg").html(
        "Phone Number Should not contain Special Character"
      );
      validPhone = false;
      return false;
    } else if (phoneValue[0] === "+") {
      $("#phoneErrorMsg").show();
      $("#phoneErrorMsg").html("Phone number without country code (e.g., +1)");
      validPhone = false;
      return false;
    } else if (phoneValue.length !== 10) {
      $("#phoneErrorMsg").show();
      $("#phoneErrorMsg").html("Phone number length should be 10");
      validPhone = false;
      return false;
    } else {
      $("#phoneErrorMsg").hide();
      return true;
    }
  }

  $("#bestTimeErrorMsg").hide();
  let validTime = true;
  $("#bestTime").keyup(function () {
    validTimer();
  });

  function validTimer() {
    let timeValue = $("#bestTime").val();
    let timeFormat = new RegExp(
      /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/
    );
    console.log(timeValue);

    if (!timeValue) {
      $("#bestTimeErrorMsg").show();
      validTime = false;
      return false;
    }

    if (timeFormat.test(timeValue) === false) {
      $("#bestTimeErrorMsg").show();
      $("#bestTimeErrorMsg").html(
        "*Contact time should be in HH:MM AM/PM format"
      );
      validTime = false;
      return false;
    } else {
      $("#bestTimeErrorMsg").hide();
      return true;
    }
  }

  $("#myForm").submit(function (e) {
    e.preventDefault();
    const firstNameInput = validateFirstName();
    const lastNameInput = validateLastName();
    const emailInput = validateEmail();
    const phoneInput = validPhoneNumber();
    const timeInput = validTimer();
    console.log(firstNameInput);
    console.log(lastNameInput);
    console.log(emailInput);
    console.log(phoneInput);
    console.log(timeInput);
    if (
      firstNameInput === true &&
      lastNameInput === true &&
      emailInput &&
      phoneInput &&
      timeInput
    ) {
      console.log("successfully Submitted!!");
      document.getElementById("demo").innerHTML = "successfully Submitted!!";
    } else {
      console.log("Failed");
      document.getElementById("demo").innerHTML = "Incorrect Details!!";
    }
  });
});
