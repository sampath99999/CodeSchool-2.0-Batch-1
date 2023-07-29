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

// Validation function for user First and Last Name
function userNameValidation(){
    let  firstName = document.getElementById("firstNameInput").value;
    let lastName = document.getElementById("lastNameInput").value;
    if((firstName.length >= 2 && firstName.length <= 50) && (lastName.length >= 2 && lastName.length <= 50)){
        // console.log(firstName.length >= 2 && firstName.length <= 50);
        let alphaRegExp = /^[A-Za-z]+$/;
        if(firstName.match(alphaRegExp) && lastName.match(alphaRegExp)){
            if(isTitleCase(firstName) && isTitleCase(lastName)){
                return true;
            }
            else{
                alert("Name should be Title Case");
                return false;
            }
        }
        else{
            alert("Numbers and special symbols are not allowed");
            return false;
        }
    }
    else{
        alert("Name should be minimum 2 and maximum 50 characters");
        return false;
    }

}

// Validation function for EMAIL
function userEmailValidation(){
    // Minimum Length: Not empty.
    // Maximum Length: Reasonable limit.
    var emailID = document.getElementById("emailInput").value;
    if(emailID.length!==0 && emailID.length<=30){
        // No Consecutive Dots: Avoid ".." in the local part.
        consecutiveDotsRegExp = /\.\./;
        if(!emailID.match(consecutiveDotsRegExp)){
            // Domain Name: Valid domain after "@" symbol.
            const domainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const parts = emailID.split("@");
            const domain = parts[1];
            if(domainPattern.test(domain)){
                // Valid Characters: Limit to alphanumeric, period, underscore, and hyphen.
                const pattern = /^[A-Za-z0-9.@_-]+$/;
                if(pattern.test(emailID)){
                    return true;
                }
                else{
                    alert("Only valid characters A-Za-z0-9.-_ and no space");
                    return false;
                }
            }
            else{
                alert("Domain is invalid");
                return false;
            }
            
        }
        else{
            alert("Should not have two consecutive dots");
            return false;
        }
    }
    else{
        alert("Should be a valid length");
        return false;
    }

}

// Validation function for Phone Number
function phoneNumberValidation(){
    var numberValidate = document.getElementById("phoneInput").value;
    if(numberValidate.length == 10){
        let numericRegExp = /^[0-9]+$/;
        if (numberValidate.match(numericRegExp)){
            return true;
        }
        else{   
            alert("Number should not conatin any symbols or character other than numbers");
            document.getElementById("phoneInput").setAttribute("class", "errorMessages");
            return false;
        }
    }
    else{
        alert("Phone should be 10-digit number");
        document.getElementById("phoneInput").setAttribute("class", "errorMessages");
        return false;
    }
}

// Validation for DOBirth and DOJoining
function datesValidation(){
    const birthCalender = document.getElementById("dateOfBirthInput").value;
    const birthDate = new Date(birthCalender);
    const birthYear = birthDate.getFullYear();
    const joiningCalender = document.getElementById("dateOfJoinInput").value;
    const joiningDate = new Date(joiningCalender);
    const joiningYear = joiningDate.getFullYear();
    let age = joiningYear - birthYear;
    let joiningMonth = joiningDate.getMonth()+1;
    let birthMonth =  birthDate.getMonth()+1;
    birthMonthRemaining = joiningMonth - birthMonth;
    if(birthMonthRemaining < 0){
        age--;
    }
    if(age>=18){
        return true;
    }else{
        alert("You must be 18 Years or Old by Date of Joining");
        return false;
    }
}

// Validation function for Password
function passwordValidation(){
    // Minimum Length: At least 5 characters.
    // Maximum Length: No more than 25 characters.
    const userPassword = document.getElementById("passwordInput").value;
    if(userPassword.length >= 5 && userPassword.length <=25){
        // Uppercase Letters: Require at least one uppercase letter.
        // Lowercase Letters: Require at least one lowercase letter.
        // Numbers: Require at least one number (digit).
        // Special Characters: Require at least one special 1.character (e.g., !, @, #, $, %, etc.).
        // No Common Words or Patterns: Disallow common or easily guessable passwords like "password" or "123456".
        // No Sequential Characters: Disallow sequential characters or numbers like "abcdef" or "123456".
        // No Spaces: Password should not contain spaces.
        let strongPasswordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
        if(strongPasswordRegExp.test(userPassword)){
            // No Repeating Characters: Disallow repeating characters consecutively, such as "aa" or "11".
            let noConsecutivesRegExp = /^(?!.*(.)\1)(?!.*(\d)\2).+$/;
            if(noConsecutivesRegExp.test(userPassword)){
                console.log("GOOD");
                const confirmPassword = document.getElementById("confirmPasswordInput").value;
                if(userPassword === confirmPassword){
                    return true;
                }
                else{
                    alert("Password does not match");
                    return false;
                }
            }
            else{
                alert("Password should not contain consecutive characters '00' 'aa'");
                return false;
            }
        }
        else{
            alert("Password should contain one A-Z, one a-z, one 0-9 and one special character (e.g., !, @, #, $, %, etc.) and no spaces");
            return false;
        }
    }
    else{
        alert("Password length should be min 5 and max 25");
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
    user.selectedUniversity = document.getElementById("inputUniversityt").value;
    user.password = document.getElementById("passwordInput").value;
    console.log(user);   
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqres.in/api/users");
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var resultObj = JSON.parse(this.responseText);
            document.getElementById("form").style.display = "none";
            document.getElementById("success-navigation").innerHTML =
            resultObj.name +
            " is successfully created at" +
            resultObj.createdAt;
        }
    }
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(user));
  }

function checkValidation(){
   let validName =  userNameValidation();
   let validEmail = userEmailValidation();
   let validNumber = phoneNumberValidation();
   let validDate = datesValidation();
   let validPassword = passwordValidation();
   if(validName && validEmail && validNumber && validDate && validPassword ){
        submitForm();
   }else{
        return false;
   }

}


  