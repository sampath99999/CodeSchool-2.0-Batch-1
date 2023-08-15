// program to display a text using setInterval method

let successMsg = document.getElementById("successMsg");

let randomQouteNum = Math.ceil(Math.random()*28);


$(document).ready(function(){

   $.get('https://dummyjson.com/quotes',function(data,status){
    let randomQuote = data.quotes[randomQouteNum].quote;
    $('.image_quote').text(randomQuote)
    console.log(randomQuote)
   })
  
  });

function mainImage() {
  $.get(
    "https://api.unsplash.com/photos/random?query=singer&client_id=0qPOwWhSfuLYLS-SAQKmD58YcbjKOJ3jeAkX3OkCiVo",
    function (data, status) {
        console.log(data)
      let imageSrc = data.urls.regular;
      $("#imageElement").css({ "background-image": `url(${imageSrc})` });
    }
  );
}
setInterval(mainImage,30000)

let fullName = document.getElementById("fullName");
let fnameErrorMsg = document.getElementById("fnameErrorMsg");

let email = document.getElementById("email");
let emailErrorMsg = document.getElementById("emailErrorMsg");
let password = document.getElementById("password");
let passwordErrMsg = document.getElementById("passwordErrMsg");
let confirmPassword = document.getElementById("confirmPassword");
let confirmPasswordErrMsg = document.getElementById("confirmPasswordErrMsg");

let phoneErrorMsg = document.getElementById("phoneErrorMsg");

var fnameRes;
var emailRes;
var passRes;
var confirmRes;
var phoneRes;
let myForm = document.getElementById("myForm");



let randomPrice = Math.ceil(Math.random()*10);
let randomPricePoints = Math.ceil(Math.random()*100);

let priceVal1 = document.getElementById('priceVal1');
priceVal1.textContent=randomPrice;
let priceVal2 = document.getElementById('priceVal2');
priceVal2.textContent=randomPricePoints;

console.log(randomPrice,randomPricePoints);






function fullNameFunc() {
  function firstChar(str) {
    return /^[A-Z]/.test(str);
  }

  if (fullName.value === "") {
    fnameErrorMsg.textContent = "*Full Name should not be empty.";
    fnameRes = false;
  } else if (fullName.value !== "") {
    if (firstChar(fullName.value[0]) === false) {
      fnameErrorMsg.textContent =
        "*First character should be Capital/Title case";
      fnameRes = false;
    } else if (fullName.value.length < 2) {
      fnameErrorMsg.textContent =
        "*Full Name should be minimum of 2 characters";
      fnameRes = false;
    } else if (fullName.value.length > 100) {
      fnameErrorMsg.textContent =
        "*Full Name should be maximum of 100 characters";
      fnameRes = false;
    } else {
      fnameErrorMsg.textContent = "";
      fnameRes = true;
    }
  }
}

function emailValidation() {
  var validRegex =
    /^((?!\.)(?!.*\.$)(?!.*?\.\.)[a-z0-9.]{1,30})[@][a-z0-9]{2,}([.][a-z]{2,})+$/;

  if (email.value === "") {
    emailErrorMsg.textContent = "*Email should not be Empty!";
    emailRes = false;
  } else {
    if (email.value.match(validRegex)) {
      emailErrorMsg.textContent = "";
      emailRes = true;
    } else if (email.value.match(/(\..*){2,}/)) {
      emailErrorMsg.textContent = "*No Consecutive Dots!";
      emailRes = false;
    } else if (email.value.split("@").length > 2) {
      emailErrorMsg.textContent = "*Single '@' Symbol!";
      emailRes = false;
    } else if (email.value.split(" ").length > 1) {
      emailErrorMsg.textContent = "*No spaces Allowed!";
      emailRes = false;
    } else {
      emailErrorMsg.textContent = "*Invalid Email address!";
      emailRes = false;
    }
  }
}

function passwordValidation() {
  const passwordInput = document.getElementById("password");
  const passwordErrMsg = document.getElementById("passwordErrMsg");
  const password = passwordInput.value.trim();

  const minLength = 5;
  const maxLength = 25;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/;
  const commonWordsRegex = /^(?!password$)(?!123456$)(?!abcdef$)/;
  const repeatingCharRegex = /^(?!.*(.)\1{1}).*$/;
  const spaceRegex = /^\S*$/;

  if (passwordInput.value === "") {
    console.log(passwordInput.value);
    passwordErrMsg.textContent = "Password should not be empty";
    passRes = false;
  } else if (password.length < minLength || password.length > maxLength) {
    passwordErrMsg.textContent =
      "Password must be between 5 and 25 characters long.";
    passRes = false;
  } else if (!uppercaseRegex.test(password)) {
    passwordErrMsg.textContent =
      "Password must contain at least one uppercase letter.";
    passRes = false;
  } else if (!lowercaseRegex.test(password)) {
    passwordErrMsg.textContent =
      "Password must contain at least one lowercase letter.";
    passRes = false;
  } else if (!numberRegex.test(password)) {
    passwordErrMsg.textContent = "Password must contain at least one number.";
    passRes = false;
  } else if (!specialCharRegex.test(password)) {
    passwordErrMsg.textContent =
      "Password must contain at least one special character.";
    passRes = false;
  } else if (!commonWordsRegex.test(password)) {
    passwordErrMsg.textContent =
      "Password must not be a common or easily guessable password.";
    passRes = false;
  } else if (!repeatingCharRegex.test(password)) {
    passwordErrMsg.textContent =
      "Password must not contain repeating characters.";
    passRes = false;
  } else if (!spaceRegex.test(password)) {
    passwordErrMsg.textContent = "Password must not contain spaces.";
    passRes = false;
  } else {
    passwordErrMsg.textContent = "";
    passRes = true;
  }

  // passwordErrMsg.textContent = errorMessage;
}

function confirmPasswordValidation() {
  if (confirmPassword.value === "") {
    confirmPasswordErrMsg.textContent = "Confirm Password Should not be Empty!";
    confirmRes = false;
  } else if (password.value !== confirmPassword.value) {
    confirmPasswordErrMsg.textContent = "Password not Matched";
    confirmRes = false;
  } else {
    confirmPasswordErrMsg.textContent = "";
    confirmRes = true;
  }
}

function validatePhone() {
  let phone = document.getElementById("phoneInput");
  console.log(phone.value);
  const number = /^[0-9]+$/.test(phone.value);
  const alpha = /^[A-Za-z]+$/;
  var isValid = alpha.test(phone.value);
  const specialChars = /[`!@#$%^&*]/;
  var isSpecial = specialChars.test(phone.value);
  // console.log(isValid);
  if (phone.value === "") {
    phoneErrorMsg.textContent = "Phone Number Should not be Empty";
    phoneRes = false;
  } else {
    if (phone.value.length !== 10) {
      phoneErrorMsg.textContent = "Phone Number Should be exactly 10 digits";
    } else if (number) {
      phoneErrorMsg.textContent = "";
      phoneRes = true;
    } else if (isSpecial) {
      phoneErrorMsg.textContent =
        "Phone Number Should not contain Special Characters";
      phoneRes = false;
    } else if (phone.value[0] === "+") {
      phoneErrorMsg.textContent =
        "Phone number without country code (e.g., +1).";
      phoneRes = false;
    } else if (!isValid) {
      phoneErrorMsg.textContent = "Phone Number Should not contain letters";
      phoneRes = false;
    }
  }
}

function validateFormData() {
  fullNameFunc();
  emailValidation();
  validatePhone();
  passwordValidation();
  confirmPasswordValidation();

  let checkBox = document.getElementById("form2Example33");

  if (checkBox.checked == true) {
    console.log("checked");
  } else {
    console.log("not checked");
  }

  if (fnameRes && emailRes && passRes && confirmRes && phoneRes) {
    successMsg.textContent = "SuccessFully Submitted";
  } else {
    successMsg.textContent = "";
  }
}

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validateFormData();
});
