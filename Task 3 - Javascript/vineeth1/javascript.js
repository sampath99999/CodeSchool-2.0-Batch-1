
function validateFirstName() {
    const firstName = document.getElementById('firstName').value;
    console.log(firstName);
    if(firstName===''){
      document.getElementById('firstNameError').innerHTML ='required field!';
      return false;
    }
    else if (firstName.length < 3 || firstName.length > 50) {
        document.getElementById('firstNameError').innerHTML = 'First Name must be between 2 and 50 characters.';
        return false;
    } else if (!/^[A-Z][a-z]{1,49}$/.test(firstName)) {
        document.getElementById('firstNameError').innerHTML = 'first letter must should be capital only.';
        return false;
    } else {
        document.getElementById('firstNameError').style.display = 'none';
        return true;
    }
}
function validateLastName() {
    const lastName = document.getElementById('lastName').value;
    console.log(lastName);
    if(lastName===''){
      document.getElementById('lastNameError').innerHTML ='required field!';
      return false;
    }
    else if (lastName.length < 3 || lastName.length > 50) {
        document.getElementById('lasttNameError').innerHTML= 'last Name must be between 2 and 50 characters.';
        return false;
    } else if (!/^[A-Z][a-z]{1,49}$/.test(lastName)) {
        document.getElementById('lastNameError').innerHTML = 'first letter must should be capital only.';
        return false;
    } else {
        document.getElementById('lastNameError').style.display = 'none';
        return true;
    }
}
function isValidEmail() {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email=document.getElementById('email').value;
    console.log(email);
    if(email===''){
      document.getElementById('emailError').innerHTML="Required Field";
      return false;
    }
    else if (!emailRegex.test(email)){
        document.getElementById('emailError').innerHTML='please enter the vaild email';
        return false;
    }
    else{
        document.getElementById('emailError').style.display='none';
        return true;
    }
}
function phoneCodeAPI(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        let jsonData = JSON.parse(this.responseText);
        userPhoneCodes = document.getElementById("phoneCodeInput");
        for(let code in jsonData.countries){
            userPhoneCodes.innerHTML += `
            <option value="${jsonData.countries[code].code}">
            (${jsonData.countries[code].code}) 
            </option>
             `;
        }
    }
    xhttp.open("GET", "phoneCode.json");
    xhttp.send();
}
function listCountries(){
    const xhttp = new XMLHttpRequest();
    const countriesList = document.getElementById("inputCountry");
    xhttp.onload = function(){
        let jsonData = JSON.parse(this.responseText);
        for (let index in jsonData){
            countriesList.innerHTML += `
            <option value="${jsonData[index].name.common}">
                ${jsonData[index].name.common}
            </option>
            `;
        }
    }
    xhttp.open("GET", "https://restcountries.com/v3.1/all");
    xhttp.send();
}
function listUniversitiesAPI(country){
    const universitiesList = document.getElementById("inputUniversity");
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4){
            let jsonData = JSON.parse(this.responseText);
            for (let index in jsonData){
                universitiesList.innerHTML += `
                <option value="${jsonData[index].name}">
                    ${jsonData[index].name}
                </option>
                `;
            }
        }
    }
    xhttp.open("GET", "http://universities.hipolabs.com/search?country="+country);
    xhttp.send();
}
const dobInput = document.getElementById('dob');
dobInput.addEventListener('input', validateDOB);
function validateDOB() {
  const dob = new Date(dobInput.value);
  const dobError = document.getElementById('dobError');
  const currentDate = new Date();
  const ageDifference = currentDate - dob;
  const ageInYears = ageDifference / (1000 * 60 * 60 * 24 * 365.25);

  if (isNaN(dob.getTime())) {
    dobError.textContent = 'Please enter a valid date.';
    return false;
  } else if (dob > currentDate) {
    dobError.textContent = 'Date of Birth cannot be in the future.';
    return false;
  } else if (ageInYears < 18) {
    dobError.textContent = 'You must be 18 years or older.';
    return false;
  } else {
    dobError.textContent = '';
    return true;
  }
}

const dojInput = document.getElementById('doj');
dobInput.addEventListener('input', validateDOJ);
function validateDOJ() {
  const dob = new Date(dobInput.value);
  const doj = new Date(dojInput.value);
  const dojError = document.getElementById('dojError');
  const dateDifference = doj - dob;
  const ageInYears = dateDifference / (1000 * 60 * 60 * 24 * 365.25);
  
  if (isNaN(doj.getTime())) {
    dojError.textContent = 'Please enter a valid date.';
    return false;
  } else if (doj <= dob) {
    dojError.textContent = 'Date of Joining must be after the Date of Birth.';
    return false;
  } else if (ageInYears < 18) {
    dojError.textContent = 'Age must be at least 18 years from the Date of Birth.';
    return false;
  } else {
    dojError.textContent = '';
    return true;
  }
}
const phoneInput = document.getElementById('callingcode');
phoneInput.addEventListener('input', validatePhone);

function validatePhone() {
  const phone = phoneInput.value.trim();
  const phoneError = document.getElementById('phoneError');

  const phoneRegex = /^\d{10}$/;

  if(phone===''){
    phoneError.textContent='plz enter the number!'
    return false;
  }
  else if (phone.length !== 10) {
    phoneError.textContent = 'Phone number must be a 10-digit number.';
    return false;
  } else if (!phoneRegex.test(phone)) {
    phoneError.textContent = 'Phone number must contain numeric digits (0-9) only.';
    return false;
  } else if (/\s/.test(phone)) {
    phoneError.textContent = 'Phone number cannot contain spaces.';
    return false;
  } else {
    phoneError.textContent = '';
    return true;
  }
}  


function validatePassword() {
    const password = passwordInput.value;
    
    const passwordError = document.getElementById('passwordError');

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,25}$/;
    if(password===''){
      passwordError.textContent ='Please Enter Password';
      return false;
    }
    else if (password.length < 5 || password.length > 25) {
      passwordError.textContent = 'Password must be between 5 and 25 characters.';
      return false;

    } else if (!passwordRegex.test(password)) {
      passwordError.textContent =
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
      return false;  
    } else if (/\s/.test(password)) {
      passwordError.textContent = 'Password cannot contain spaces.';
      return false;
    } else {
      passwordError.textContent = '';
      return true;
    }
    validateConfirmedPassword();
}
const passwordInput = document.getElementById('password');
passwordInput.addEventListener('input', validatePassword);
const confirmedPasswordInput = document.getElementById('confirmed-password');
confirmedPasswordInput.addEventListener('input', validateConfirmedPassword);
function validateConfirmedPassword() {
    const confirmedPassword = confirmedPasswordInput.value;
    const confirmedPasswordError = document.getElementById('confirmedPasswordError');
    const password = passwordInput.value;

    if (confirmedPassword !== password) {
      confirmedPasswordError.textContent = 'Passwords does not match.';
      return false;
    } else {
      confirmedPasswordError.textContent = '';
      return true;
    }
}
function getRandomImage() {
    const apiUrl = 'https://source.unsplash.com/random/800x1000'; 
    const imageContainer = document.getElementById('image-container');
    const img = new Image();
    img.onload = function () {
      imageContainer.innerHTML = '';
      imageContainer.appendChild(img);
    };
    img.src = apiUrl + '?random=' + Math.random(); 
    setTimeout(getRandomImage, 3000); 
}
getRandomImage(); 

function submitForm() {
  event.preventDefault();
  validateFirstName();
  validateLastName();
  isValidEmail();
  validatePhone();
  validateDOB();
  validateDOJ();
  validatePassword();
  
  if(validateFirstName() && validateLastName() && isValidEmail()&& validatePhone() && validateDOB() && validateDOJ && validatePassword()){
    var user = {};

  user.firstName = document.getElementById('firstName').value;

  user.lastName = document.getElementById('lastName').value;

  user.email = document.getElementById('email').value;
  user.countryName = document.getElementById('inputCountry').value;
  user.University = document.getElementById('inputUniversity').value;
  user.password =document.getElementById('password').value;

  user.doj = document.getElementById('doj').value;
  user.dob = document.getElementById('dob').value;


  console.log(user);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", " https://demo-api-wh0x.onrender.com/register");
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      var resultObj = JSON.parse(this.responseText);
      document.getElementById("result").innerHTML = `Welcome, ${resultObj.firstName} ${resultObj.lastName} <br> You are successfully Registered!`
    }
   
  };
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(user));
}
else{
  document.getElementById("result").innerHTML = `There was an Error Signing you up!`;
}

}


  

  