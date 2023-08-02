// An Animation of Images for UI
function bannerAnimation(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        let jsonData = JSON.parse(this.responseText)
        for(let index in jsonData){
            function imageAnimate(){
                setTimeout(function(){
                    document.getElementById("banner").src= jsonData[index].download_url;  
                }, index * 15000);
            }
            imageAnimate();  
        }      
    }
    xhttp.open("GET", "https://picsum.photos/v2/list");
    xhttp.send();
    phoneCodeAPI();
    listCountries();
}

// API function for phone code of countries
function phoneCodeAPI(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        let jsonData = JSON.parse(this.responseText);
        userPhoneCodes = document.getElementById("phoneCodeInput");
        for(let code in jsonData.countries){
            userPhoneCodes.innerHTML += `
            <option value="${jsonData.countries[code].code}">
            (${jsonData.countries[code].code})  ${jsonData.countries[code].name}
            </option>
             `;
        }
    }
    xhttp.open("GET", "phoneCode.json");
    xhttp.send();
}

//  API list of countries
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

// API function for list of  universities
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

// Function to check whether string is in TITLE-CASE or not
function isTitleCase(str) {
    const words = str.split(' ');
    // Check if each word has the first letter capitalized and the rest in lowercase
    for (const word of words) {
      if (word !== '' && word[0] !== word[0].toUpperCase()) {
        return false;
      }
      const restOfWord = word.slice(1);
      if (restOfWord !== restOfWord.toLowerCase()) {
        return false;
      }
    }
    return true;
}

// Validation function for user First Name
function userFirstNameValidation(){
    let firstNameElement = document.getElementById("firstNameInput");
    let feedback = document.getElementById("firstName-feedback");
    if((firstNameElement.value.length >= 2 && firstNameElement.value.length <= 50)){
        let alphaRegExp = /^[A-Za-z]+$/;
        if(firstNameElement.value.match(alphaRegExp)){
            if(isTitleCase(firstNameElement.value)){
                firstNameElement.classList.remove("is-invalid");
                firstNameElement.classList.add("is-valid");
                return true;
            }
            else{
                firstNameElement.classList.remove("is-valid");
                firstNameElement.classList.add("is-invalid");
                feedback.innerHTML = "Name should be TitleCase i.e, (John) not john";
                return false;
            }
        }
        else{
            firstNameElement.classList.remove("is-valid");
            firstNameElement.classList.add("is-invalid");
            feedback.innerHTML = "0-9 and special-characters i.e,(!@#$%^&*) are not allowed."
            return false;
        }
    }
    else{
        firstNameElement.classList.remove("is-valid");
        firstNameElement.classList.add("is-invalid");
        feedback.innerHTML = "Name should be min 2 and max 50 character length."
        return false;
    }

}

// Validation function for user Last Name
function userLastNameValidation(){
    let lastNameElement = document.getElementById("lastNameInput");
    let feedback = document.getElementById("lastName-feedback");
    if((lastNameElement.value.length >= 2 && lastNameElement.value.length <= 50)){
        let alphaRegExp = /^[A-Za-z]+$/;
        if(lastNameElement.value.match(alphaRegExp)){
            if(isTitleCase(lastNameElement.value)){
                lastNameElement.classList.remove("is-invalid");
                lastNameElement.classList.add("is-valid");
                return true;
            }
            else{
                lastNameElement.classList.remove("is-valid");
                lastNameElement.classList.add("is-invalid");
                feedback.innerHTML = "Name should be TitleCase i.e, (Alice) not alice";
                return false;
            }
        }
        else{
            lastNameElement.classList.remove("is-valid");
            lastNameElement.classList.add("is-invalid");
            feedback.innerHTML = "0-9 and special-characters i.e,(!@#$%^&*) are not allowed."
            return false;
        }
    }
    else{
        lastNameElement.classList.remove("is-valid");
        lastNameElement.classList.add("is-invalid");
        feedback.innerHTML = "Name should be min 2 and max 50 character length."
        return false;
    }
}

// Validation function for EMAIL
function userEmailValidation(){
    // Minimum Length: Not empty.
    // Maximum Length: Reasonable limit.
    var emailIDElement = document.getElementById("emailInput");
    let feedback = document.getElementById("email-feedback");
    if(emailIDElement.value.length!==0 && emailIDElement.value.length<=50){
        // No Consecutive Dots: Avoid ".." in the local part.
        consecutiveDotsRegExp = /\.\./;
        if(!emailIDElement.value.match(consecutiveDotsRegExp)){
            // Domain Name: Valid domain after "@" symbol.
            const domainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const parts = emailIDElement.value.split("@");
            const domain = parts[1];
            if(domainPattern.test(domain)){
                // Valid Characters: Limit to alphanumeric, period, underscore, and hyphen.
                const pattern = /^[A-Za-z0-9.@_-]+$/;
                if(pattern.test(emailIDElement.value)){
                    emailIDElement.classList.remove("is-invalid");
                    emailIDElement.classList.add("is-valid");
                    return true;
                }
                else{
                    emailIDElement.classList.remove("is-valid");
                    emailIDElement.classList.add("is-invalid");
                    feedback.innerHTML = "Only valid characters i.e, A-Za-z0-9.-_ and no space"
                    return false;
                }
            }
            else{
                emailIDElement.classList.remove("is-valid");
                emailIDElement.classList.add("is-invalid");
                feedback.innerHTML = "Domain is invalid!"
                return false;
            }
            
        }
        else{
            emailIDElement.classList.remove("is-valid");
            emailIDElement.classList.add("is-invalid");
            feedback.innerHTML = "No two consecutive dots i.e, .."
            return false;
        }
    }
    else{
        emailIDElement.classList.remove("is-valid");
        emailIDElement.classList.add("is-invalid");
        feedback.innerHTML = "Email should be a valid length"
        return false;
    }

}

// Validation function for Phone Code
function phoneCodeValidation(){
    let codeElement = document.getElementById("phoneCodeInput");
    let feedback = document.getElementById("phoneCode-feedback");
    if(codeElement.value !== "SELECT"){
        codeElement.classList.remove("is-invalid");
        codeElement.classList.add("is-valid");
        return true;
    }
    else{
        codeElement.classList.remove("is-valid");
        codeElement.classList.add("is-invalid");
        feedback.innerHTML = "Select your Country Code!";
        return false;
    }
}

// Validation function for Phone Number
function phoneNumberValidation(){
    phoneCodeValidation();
    let numberValidateElement = document.getElementById("phoneInput");
    let feedback = document.getElementById("phoneNo-feedback");
    if(numberValidateElement.value.length == 10){
            let numericRegExp = /^[0-9]+$/;
            if (numberValidateElement.value.match(numericRegExp)){
                numberValidateElement.classList.remove("is-invalid");
                numberValidateElement.classList.add("is-valid");
                return true;
            }
            else{   
                numberValidateElement.classList.remove("is-valid");
                numberValidateElement.classList.add("is-invalid");
                feedback.innerHTML = "Number should not conatin any symbols or character other than numbers";
                return false;
            }
    }
    else{
            numberValidateElement.classList.remove("is-valid");
            numberValidateElement.classList.add("is-invalid");
            feedback.innerHTML = "Phone should be 10-digit number";
            return false;
    }
    
}

// Validation for DOBirth and DOJoining
function datesValidation(){
    const birthCalender = document.getElementById("dateOfBirthInput");
    const birthDate = new Date(birthCalender.value);
    const birthYear = birthDate.getFullYear();
    const joiningCalender = document.getElementById("dateOfJoinInput");
    const joiningDate = new Date(joiningCalender.value);
    const joiningYear = joiningDate.getFullYear();
    let age = joiningYear - birthYear;
    let joiningMonth = joiningDate.getMonth()+1;
    let birthMonth =  birthDate.getMonth()+1;
    birthMonthRemaining = joiningMonth - birthMonth;
    if(birthMonthRemaining < 0){
        age--;
    }
    if(age>=18){
        birthCalender.classList.remove("is-invalid");
        joiningCalender.classList.remove("is-invalid");
        birthCalender.classList.add("is-valid");
        joiningCalender.classList.add("is-valid");
        return true;
    }else{
        birthCalender.classList.remove("is-valid");
        joiningCalender.classList.remove("is-valid");
        birthCalender.classList.add("is-invalid");
        joiningCalender.classList.add("is-invalid");
        document.getElementById("doj-feedback").innerHTML = "You must be 18 Years or Old by Date of Joining"
        return false;
    }
}

// Validation function for Password
function passwordValidation(){
    // Minimum Length: At least 5 characters.
    // Maximum Length: No more than 25 characters.
    const userPassword = document.getElementById("passwordInput");
    let feedback = document.getElementById("pwd-feedback");
    if(userPassword.value.length >= 5 && userPassword.value.length <=25){
        // Uppercase Letters: Require at least one uppercase letter.
        // Lowercase Letters: Require at least one lowercase letter.
        // Numbers: Require at least one number (digit).
        // Special Characters: Require at least one special 1.character (e.g., !, @, #, $, %, etc.).
        // No Common Words or Patterns: Disallow common or easily guessable passwords like "password" or "123456".
        // No Sequential Characters: Disallow sequential characters or numbers like "abcdef" or "123456".
        // No Spaces: Password should not contain spaces.
        let strongPasswordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
        if(strongPasswordRegExp.test(userPassword.value)){
            // No Repeating Characters: Disallow repeating characters consecutively, such as "aa" or "11".
            let noConsecutivesRegExp = /^(?!.*(.)\1)(?!.*(\d)\2).+$/;
            if(noConsecutivesRegExp.test(userPassword.value)){
                userPassword.classList.remove("is-invalid");
                userPassword.classList.add("is-valid");   
                return true;  
            }
            else{
                userPassword.classList.remove("is-valid");
                userPassword.classList.add("is-invalid");
                feedback.innerHTML = "Password should not contain consecutive characters '00' 'aa'";
                return false;
            }
        }
        else{
            userPassword.classList.remove("is-valid");
            userPassword.classList.add("is-invalid");
            feedback.innerHTML = "Password should contain one A-Z, one a-z, one 0-9 and one special character (e.g., !, @, #, $, %, etc.) and no spaces";
            return false;
        }
    }
    else{
        userPassword.classList.remove("is-valid");
        userPassword.classList.add("is-invalid");
        feedback.innerHTML = "Password length should be min 5 and max 25";
        return false;
    }

}

// Function to confirm Password
function confirmPassword(userPassword){
    const confirmPassword = document.getElementById("confirmPasswordInput");
    if(userPassword === confirmPassword.value){
        confirmPassword.classList.remove("is-invalid");
        confirmPassword.classList.add("is-valid");
        return true;
    }
    else{
        confirmPassword.classList.remove("is-valid");
        confirmPassword.classList.add("is-invalid");
        document.getElementById("confirmPwd-feedback").innerHTML = "Password does not match"
        return false;
    }
}

// On Validation Submit Form
function submitForm() {
    var user = {};
    user.firstName = document.getElementById("firstNameInput").value;
    user.lastName = document.getElementById("lastNameInput").value;
    user.email = document.getElementById("emailInput").value;
    user.phoneCode = document.getElementById("phoneCodeInput").value;
    user.phoneNumber = document.getElementById("phoneInput").value;
    user.dob = document.getElementById("dateOfBirthInput").value;
    user.doj = document.getElementById("dateOfJoinInput").value;
    user.gender = document.getElementsByName("genderValue").value;
    user.selectedCountry = document.getElementById("inputCountry").value;
    user.selectedUniversity = document.getElementById("inputUniversity").value;
    user.password = document.getElementById("passwordInput").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqres.in/api/users");
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var resultObj = JSON.parse(this.responseText);
            document.getElementById("form").style.display = "none";
            document.getElementById("success-navigation").innerHTML = `
            <div class="bg-body-tertiary p-5 rounded mt-3">
                <h1>Welcome, ${resultObj.firstName} ${resultObj.lastName}</h1>
                <p class="lead">We will send the updates on ${resultObj.email}</p>
                <a class="btn btn-lg btn-primary" href="#" role="button" onclick="location.reload()">Go Home »</a>
            </div>
            `
            return true;
        }
        else{
            document.getElementById("success-navigation").innerHTML = `
            <div class="bg-body-tertiary p-5 rounded mt-3">
                <h1>Sorry! There was an Error</h1>
                <p class="lead">Please try again later.</p>
                <a class="btn btn-lg btn-primary" href="#" role="button" onclick="location.reload()">Go Home »</a>
            </div>
            `
        }
    }
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(user));
}

// Validation Function on submit
function checkValidation(){
   event.preventDefault();
   let validFirstName = userFirstNameValidation();
   let validLastName = userLastNameValidation();
   let validEmail = userEmailValidation();
   let validNumber = phoneNumberValidation();
   let validDate = datesValidation();
   let validPassword = passwordValidation();
   let confirmPwd = confirmPassword(document.getElementById('passwordInput').value);
   if(validFirstName && validLastName && validEmail && validNumber && validDate && validPassword && confirmPwd){
        submitForm();
   }else{
        document.getElementById("submit-feedback").innerHTML = "Fill all manditory Fields(<span style='color: red;'>*</span>)"
        return false;
   }
}