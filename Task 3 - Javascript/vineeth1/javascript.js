function loadimage() {
    const xhttps = new XMLHttpRequest();
    xhttps.onload = function () {
        let images = JSON.parse(this.responseText);
        showImage(images);
    }
    xhttps.open('GET', 'https://source.unsplash.com/collection/928423/1920x1080', 'true');
    xhttps.send();
}
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');

firstNameInput.addEventListener('input', validateFirstName);

function validateFirstName() {
    const firstName = firstNameInput.value.trim();
    const firstNameError = document.getElementById('firstNameError');

    if (firstName.length < 2 || firstName.length > 50) {
        firstNameError.textContent = 'First Name must be between 2 and 50 characters.';
    } else if (!/^[A-Za-z]+$/.test(firstName)) {
        firstNameError.textContent = 'First Name must contain alphabetic characters only.';
    } else {
        firstNameError.textContent = '';
    }
}


lastNameInput.addEventListener('input', validateLastName);

function validateLastName() {
    const lastName = lastNameInput.value.trim();
    const lastNameError = document.getElementById('lastNameError');

    if (lastName.length < 2 || lastName.length > 50) {
        lastNameError.textContent = 'Last Name must be between 2 and 50 characters.';
    } else if (!/^[A-Za-z]+$/.test(lastName)) {
        lastNameError.textContent = 'Last Name must contain alphabetic characters only.';
    } else {
        lastNameError.textContent = '';
    }
}

firstNameInput.addEventListener('input', validateFirstName);

function validateFirstName() {
    const firstName = firstNameInput.value.trim();
    const firstNameError = document.getElementById('firstNameError');

    if (!/^[A-Z][a-z]*$/.test(firstName)) {
        firstNameError.textContent = 'First Name should start with an uppercase letter and contain only lowercase letters.';
    } else {
        firstNameError.textContent = '';
    }
}


lastNameInput.addEventListener('input', validateLastName);

function validateLastName() {
    const lastName = lastNameInput.value.trim();
    const lastNameError = document.getElementById('lastNameError');

    if (!/^[A-Z][a-z]*$/.test(lastName)) {
        lastNameError.textContent = 'Last Name should start with an uppercase letter and contain only lowercase letters.';
    } else {
        lastNameError.textContent = '';
    }
}
const emailInput = document.getElementById('email');
emailInput.addEventListener('input', validateEmail);
function validateEmail() {
    const email = emailInput.value.trim();
    const emailError = document.getElementById('emailError');

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const hasConsecutiveDots = /\.{2,}/.test(email);
    const hasMultipleAtSymbols = (email.match(/@/g) || []).length > 1;
    const hasInvalidCharacters = !emailRegex.test(email);

    if (email.length === 0) {
        emailError.textContent = 'Email cannot be empty.';
    } else if (email.length > 100) {
        emailError.textContent = 'Email exceeds the maximum length limit.';
    } else if (hasConsecutiveDots) {
        emailError.textContent = 'Email cannot have consecutive dots in the local part.';
    } else if (hasMultipleAtSymbols) {
        emailError.textContent = 'Email cannot have multiple "@" symbols.';
    } else if (hasInvalidCharacters) {
        emailError.textContent = 'Email contains invalid characters.';
    } else {
        emailError.textContent = '';
    }
}
const passwordInput = document.getElementById('password');
const confirmedPasswordInput = document.getElementById('confirmed-password');
passwordInput.addEventListener('input', validatePassword);
confirmedPasswordInput.addEventListener('input', validateConfirmedPassword);
function validatePassword() {
    const password = passwordInput.value;
    const passwordError = document.getElementById('passwordError');

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,25}$/;

    if (password.length < 5 || password.length > 25) {
        passwordError.textContent = 'Password must be between 5 and 25 characters.';
    } else if (!passwordRegex.test(password)) {
        passwordError.textContent =
            'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
    } else if (/\s/.test(password)) {
        passwordError.textContent = 'Password cannot contain spaces.';
    } else {
        passwordError.textContent = '';
    }

    validateConfirmedPassword();
}
function validateConfirmedPassword() {
    const confirmedPassword = confirmedPasswordInput.value;
    const confirmedPasswordError = document.getElementById('confirmedPasswordError');
    const password = passwordInput.value;

    if (confirmedPassword !== password) {
        confirmedPasswordError.textContent = 'Passwords does not match.';
    } else {
        confirmedPasswordError.textContent = '';
    }
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
    } else if (dob > currentDate) {
        dobError.textContent = 'Date of Birth cannot be in the future.';
    } else if (ageInYears < 18) {
        dobError.textContent = 'You must be 18 years or older.';
    } else {
        dobError.textContent = '';
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
    } else if (doj <= dob) {
        dojError.textContent = 'Date of Joining must be after the Date of Birth.';
    } else if (ageInYears < 18) {
        dojError.textContent = 'Age must be at least 18 years from the Date of Birth.';
    } else {
        dojError.textContent = '';
    }
}
const phoneInput = document.getElementById('callingcode');
phoneInput.addEventListener('input', validatePhone);

function validatePhone() {
    const phone = phoneInput.value.trim();
    const phoneError = document.getElementById('phoneError');

    const phoneRegex = /^\d{10}$/;

    if (phone.length !== 10) {
        phoneError.textContent = 'Phone number must be a 10-digit number.';
    } else if (!phoneRegex.test(phone)) {
        phoneError.textContent = 'Phone number must contain numeric digits (0-9) only.';
    } else if (/\s/.test(phone)) {
        phoneError.textContent = 'Phone number cannot contain spaces.';
    } else {
        phoneError.textContent = '';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const countrySelect = document.getElementById('countrySelect');
    fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) => {
            data.forEach((country) => {
                const option = document.createElement('option');
                option.value = country.name.common;
                option.textContent = country.name.common;
                countrySelect.appendChild(option);
            });
        })
        .catch((error) => {
            console.error('Error fetching countries:', error);
        });

    const universitySelect = document.getElementById('universitySelect');
    countrySelect.addEventListener('change', fetchUniversityList);

    async function fetchUniversityList() {
        const selectedCountry = countrySelect.value;
        const url = `http://universities.hipolabs.com/search?country=${selectedCountry}`;
        universitySelect.innerHTML = '';

        try {
            const response = await fetch(url);
            const universities = await response.json();
            universities.forEach((university) => {
                const option = document.createElement('option');
                option.value = university.name;
                option.textContent = university.name;
                universitySelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error fetching university list:', error);
        }
    }
});
function createCodes(countryData) {
    let countryCodeSelect = document.getElementById('countryCode');
    let phoneNumberInput = document.getElementById('callingcode');

    for (let code = 0; code < countryData.length; code++) {
        let code_option = document.createElement('option');
        code_option.value = countryData[code].idd;
        code_option.textContent = countryData[code].idd;
        countryCodeSelect.appendChild(code_option);

        let country_option = document.createElement('option');
        country_option.value = countryData[code].country;
        country_option.textContent = countryData[code].country;
        phoneNumberInput.appendChild(country_option);
    }
}

let data = [];
const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        const formattedResponse = JSON.parse(this.responseText);
        for (let item = 0; item < formattedResponse.length; item++) {
            const country = formattedResponse[item].name.common;
            const idd = formattedResponse[item].idd.root;
            const root = Object.keys(formattedResponse[item].idd).length === 0 ? "0" : formattedResponse[item].idd.root;
            const suffix = Object.keys(formattedResponse[item].idd).length === 0 ? "0" : formattedResponse[item].idd.suffixes[0];
            data.push({ country, idd: root + suffix });
        }
        createCodes(data);
    }
});
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();
function submitForm() {
    var user = {};
    user.firstName = document.getElementById("firstName").value;
    user.lastName = document.getElementById("lastName").value;
    user.email = document.getElementById("email").value;
    user.callingCode = document.getElementById("callingcode").value;
    user.dob = document.getElementById("dob").value;
    user.doj = document.getElementById("doj").value;
    user.gender = document.getElementById("gender").value;
    user.countrySelect = document.getElementById("countrySelect").value;
    user.universitySelect = document.getElementById("universitySelect").value;
    user.password = document.getElementById("password").value;
    user.confirmedPassword = document.getElementById("confirmed-password").value;
    console.log(user);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqres.in/api/users");
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var resultObj = JSON.parse(this.responseText);
            document.getElementById("demo").innerHTML =
                resultObj.name +
                " is successfully created at" +
                resultObj.createdAt;
        }
    };
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(user))
}








