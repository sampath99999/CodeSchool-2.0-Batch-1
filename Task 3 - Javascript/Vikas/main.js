// Function to load image data from the remote API
function loadImage() {
    var xhr = new XMLHttpRequest();
    var url = 'https://source.unsplash.com/collection/928423/1920x1080'; 
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          var imageUrl = response.loadImage; 
  
         
          var imageElement = document.getElementById('image');
          imageElement.src = imageUrl;
        } else {
          console.error('Error fetching image:', xhr.status);
        }
      }
    };
  
    xhr.open('GET', url, true);
    xhr.send();
  }
  
  
  loadImage();
  setInterval(loadImage, 500);
  // first name validation
 
function validateFirstName() {
    const firstNameInput = document.getElementById("firstName");
    const firstNameError = document.getElementById("firstNameError");
    const firstName = firstNameInput.value.trim();
  
    if (firstName.length < 2 || firstName.length > 50) {
      firstNameError.textContent = "First name must be 2 to 50 characters long.";
    } else if (!/^[A-Za-z]+$/.test(firstName)) {
      firstNameError.textContent = "First name must contain only alphabetic characters.";
    } else if (firstName[0] !== firstName[0].toUpperCase()) {
      firstNameError.textContent = "First name must start with an uppercase letter.";
    } else {
      firstNameError.textContent = "";
    }
  }
// last name validation
  function validateLastName() {
    const lastNameInput = document.getElementById("lastName");
    const lastNameError = document.getElementById("lastNameError");
    const lastName = lastNameInput.value.trim();
  
    if (lastName.length < 2 || lastName.length > 50) {
      lastNameError.textContent = "last name must be 2 to 50 characters long.";
    } else if (!/^[A-Za-z]+$/.test(lastName)) {
      lastNameError.textContent = "last name must contain only alphabetic characters.";
    } else if (lastName[0] !== lastName[0].toUpperCase()) {
      lastNameError.textContent = "last name must start with an uppercase letter.";
    } else {
      lastNameError.textContent = "";
    }
  }
// E-mail validation
function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const email = emailInput.value.trim();
  
    const emailRegex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  
    if (email.length === 0) {
      emailError.textContent = "Email cannot be empty.";
    } else if (email.length > 100) {
      emailError.textContent = "Email is too long.";
    } else if (!emailRegex.test(email)) {
      emailError.textContent = "Invalid email format.";
    } else if (email.includes("..")) {
      emailError.textContent = "Email cannot contain consecutive dots.";
    } else if (email.indexOf("@") !== email.lastIndexOf("@")) {
      emailError.textContent = "Email can only contain a single '@' symbol.";
    } else {
      emailError.textContent = "";
    }
  }
// phone number codes

function fetchPhoneCodes() {
    var xhr = new XMLHttpRequest();
    var url = 'https://restcountries.com/v2/all'; 
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          var phoneCodes = response.phone_codes; 
  
          
          var selectElement = document.getElementById('phoneCode');
          phoneCodes.forEach(function (code) {
            var option = document.createElement('option');
            option.text = '+' + code;
            selectElement.add(option);
          });
        } else {
          console.error('Error fetching phone codes:', xhr.status);
        }
      }
    };
  
    xhr.open('GET', url, true);
    xhr.send();
  }
  
  
  fetchPhoneCodes();
  // password validation
  function validatePassword() {
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    const password = passwordInput.value.trim();
  
    const minLength = 5;
    const maxLength = 25;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/;
    const commonWordsRegex = /^(?!password$)(?!123456$)(?!abcdef$)/;
    const sequentialCharRegex = /^(?!.*[a-zA-Z]{3}).*$/;
    const repeatingCharRegex = /^(?!.*(.)\1{1}).*$/;
    const spaceRegex = /^\S*$/;
  
    let errorMessage = "";
  
    if (password.length < minLength || password.length > maxLength) {
      errorMessage = "Password must be between 5 and 25 characters long.";
    } else if (!uppercaseRegex.test(password)) {
      errorMessage = "Password must contain at least one uppercase letter.";
    } else if (!lowercaseRegex.test(password)) {
      errorMessage = "Password must contain at least one lowercase letter.";
    } else if (!numberRegex.test(password)) {
      errorMessage = "Password must contain at least one number.";
    } else if (!specialCharRegex.test(password)) {
      errorMessage = "Password must contain at least one special character.";
    } else if (!commonWordsRegex.test(password)) {
      errorMessage = "Password must not be a common or easily guessable password.";
    } else if (!repeatingCharRegex.test(password)) {
      errorMessage = "Password must not contain repeating characters.";
    } else if (!spaceRegex.test(password)) {
      errorMessage = "Password must not contain spaces.";
    }
  
    passwordError.textContent = errorMessage;
  }
  // confirm password
  function validatePassword2() {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const passwordMatchMessage = document.getElementById("passwordMatchMessage");
  
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
  
    if (password === confirmPassword && password.length >= 5) {
      passwordMatchMessage.textContent = "Passwords matched";
      passwordMatchMessage.classList.remove("password-not-match");
      passwordMatchMessage.classList.add("password-match");
    } else {
      passwordMatchMessage.textContent = "Passwords do not matched";
      passwordMatchMessage.classList.remove("password-match");
      passwordMatchMessage.classList.add("password-not-match");
    }
  }
  // validation of dob
  function validateDateOfBirth() {
    const dobInput = document.getElementById("dob");
    const dobError = document.getElementById("dobError");
    const dob = new Date(dobInput.value);
    const currentDate = new Date();
    const ageThreshold = 18;
  
    
    if (isNaN(dob.getTime())) {
      dobError.textContent = "Please enter a valid date of birth.";
      return;
    }
  
    
    if (dob >= currentDate) {
      dobError.textContent = "Date of birth must be in the past.";
      return;
    }
  
    
    const ageInMilliseconds = currentDate - dob;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);
  
   
    if (ageInYears < ageThreshold) {
      dobError.textContent = "You must be 18 years or older.";
      return;
    }
  
    
    dobError.textContent = "";
  }

// validation date of joining
function validateJoiningDate() {
    const dobInput = document.getElementById("dob");
    const joiningDateInput = document.getElementById("joiningDate");
    const joiningDateError = document.getElementById("joiningDateError");
  
    const dob = new Date(dobInput.value);
    const joiningDate = new Date(joiningDateInput.value);
  
    if (joiningDate <= dob) {
      joiningDateError.textContent = "Joining date must be after the Date of Birth.";
    } else {
      const minAge = new Date(dob);
      minAge.setFullYear(minAge.getFullYear() + 18);
  
      if (joiningDate < minAge) {
        joiningDateError.textContent = "Minimum age requirement is 18 years.";
      } else {
        joiningDateError.textContent = "";
      }
    }
  }
// post request to api
function signUp() {
    var user = {};
     user.FirstnameInput = document.getElementById("firstName").value;
     user.emailInput = document.getElementById("email");
  
    const xhr = new XMLHttpRequest();
    const url = "https://demo-api-wh0x.onrender.com/register";
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          resultElement.textContent = "Sign up successful!";
        } else {
          resultElement.textContent = "Sign up failed. Please try again later.";
        }
      }
    };
  
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(user));
  }
  
  //phone section
  const apiUrl = 'https://restcountries.com/v2/all';

    const xh = new XMLHttpRequest();
    xh.open('GET', apiUrl, true);
    xh.onload = function () {
      if (xh.status >= 200 && xh.status < 300) {
        const data = JSON.parse(xh.responseText);
    
        createCountrySelectBox(data);
      } else {
        console.error('Error fetching data:', xh.status, xh.statusText);
      }
    };
    xh.onerror = function () {
      console.error('Network error occurred.');
    };
    xh.send();

    function createCountrySelectBox(countries) {
      const selectBox = document.getElementById('country-code');

      countries.forEach((country) => {
        const option = document.createElement('option');
        option.value = country.callingCodes[0];
        option.text = `${country.name} (+${country.callingCodes[0]})`;
        selectBox.appendChild(option);
      })
}
//phone num validation

  // JavaScript
function validatePhoneNumber(phoneNumber) {
    
    const phoneRegex = /^[0-9]{10}$/;
  
    if (phoneRegex.test(phoneNumber)) {
     
      document.getElementById("error-message").style.display = "none";
    } else {
      
      document.getElementById("error-message").style.display = "block";
    }
  }
  //countries api
  const apiUrl = 'https://restcountries.com/v2/all';

    const xh = new XMLHttpRequest();
    xh.open('GET', apiUrl, true);
    xh.onload = function () {
      if (xh.status >= 200 && xh.status < 300) {
        const data = JSON.parse(xh.responseText);
    
        createCountrySelectBox(data);
      } else {
        console.error('Error fetching data:', xh.status, xh.statusText);
      }
    };
    xh.onerror = function () {
      console.error('Network error occurred.');
    };
    xh.send();

    function createCountrySelectBox(countries) {
      const selectBox = document.getElementById('country-names');

      countries.forEach((country) => {
        const option = document.createElement('option');
        
        option.text = `${country.name}`;
        selectBox.appendChild(option);
});
}
// countries and universities
const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json");
    xhttp.onload = async function() {
     let countryNamesAndCodes = await JSON.parse(this.response);
     for(i of countryNamesAndCodes){
        let countryNames = document.getElementById("countryNames");
        let listEle = document.createElement('option')
        listEle.textContent=i.name;
        countryNames.appendChild(listEle);
    }
    }
xhttp.send();
function countryOnchange(){

  let countryNames = document.getElementById('countryNames');
  let UniversityNames = document.getElementById('University');
  console.log(countryNames.value);
  let xc = countryNames.value;


  const unihttp = new XMLHttpRequest();
  unihttp.open("GET", `http://universities.hipolabs.com/search?country=${xc}`);
  unihttp.onload = async function() {
   let universityNames = await JSON.parse(this.response);
   console.log(universityNames);
   for(let j of  universityNames){
      
      let countryNameOption = document.createElement('option');
      countryNameOption.textContent= j.name;
      UniversityNames.appendChild(countryNameOption);
  }
  }
  unihttp.send();



}