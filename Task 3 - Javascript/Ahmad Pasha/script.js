// program to display a text using setInterval method


function mainImage() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://api.unsplash.com/photos/random?query=building&client_id=0qPOwWhSfuLYLS-SAQKmD58YcbjKOJ3jeAkX3OkCiVo");
    xhttp.onload = async function() {
     let products = await JSON.parse(this.response);
     console.log(products)
       let imageSrc=products.urls.regular;
        document.getElementById('imageElement').src= imageSrc;

      }
   
    xhttp.send();

}

setInterval(mainImage,30000)


const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json");
    xhttp.onload = async function() {
     let countryNamesAndCodes = await JSON.parse(this.response);
     for(i of countryNamesAndCodes){
        let countryNames = document.getElementById("countryNames");
        let countryCode = document.getElementById('countryCode');
        let countryCodeOption = document.createElement('option');
        let listEle = document.createElement('option')
        listEle.textContent=i.name;
        countryCodeOption.textContent=i.dial_code;
        countryNames.appendChild(listEle);
        countryCode.appendChild(countryCodeOption);
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


let firstName = document.getElementById('firstName');
let fnameErrorMsg = document.getElementById('fnameErrorMsg');
let lastName = document.getElementById('lastName');
let  lnameErrorMsg = document.getElementById('lnameErrorMsg');
let email = document.getElementById('email');
let emailErrorMsg = document.getElementById('emailErrorMsg');
let password =document.getElementById('password');
let passwordErrMsg = document.getElementById('passwordErrMsg');
let confirmPassword = document.getElementById('confirmPassword');
let confirmPasswordErrMsg = document.getElementById('confirmPasswordErrMsg');
let phone = document.getElementById('phone');
let phoneErrorMsg = document.getElementById('phoneErrorMsg')
let doj = document.getElementById('doj');
let dojErrorMsg = document.getElementById('dojErrorMsg');







let myForm = document.getElementById('myForm');



function firstAndLastName(){
    function firstChar(str){
        return /^[A-Z]/.test(str);
    }

    if
    (firstName.value!==""){
        if(firstChar(firstName.value[0])===false){
            fnameErrorMsg.textContent="*First character should be Capital/Title case";
        }
        else if(firstName.value.length<2){
            fnameErrorMsg.textContent="*First Name should be minimum of 2 characters";
        }
        else if(firstName.value.length>50){
            fnameErrorMsg.textContent="*First Name should be maximum of 50 characters";
        }
     
        else{
            fnameErrorMsg.textContent="";
        }
  
    }


    //lastname validation
    if(lastName.value!==""){
        if(firstChar(lastName.value[0])===false){
            lnameErrorMsg.textContent="*First character should be Capital/Title case";
        }
        else if(lastName.value.length<2){
            lnameErrorMsg.textContent="*Last Name should be minimum of 2 characters";
        }
        else if(lastName.value.length>50){
            lnameErrorMsg.textContent="*Last Name should be maximum of 50 characters";
        }
     
        else{
            lnameErrorMsg.textContent="";
        }
    }

}


function emailValidation(){
    var validRegex = /^((?!\.)(?!.*\.$)(?!.*?\.\.)[a-z0-9.]{1,30})[@][a-z0-9]{2,}([.][a-z]{2,})+$/;
   

      if(email.value===""){
          emailErrorMsg.textContent="*Email should not be Empty!";
      }
      else{
          if(email.value.match(validRegex)){
              emailErrorMsg.textContent="";
          }
          else if(email.value.match(/(\..*){2,}/)){
              emailErrorMsg.textContent="*No Consecutive Dots!"
          }
          else if(email.value.split('@').length>2){
              emailErrorMsg.textContent="*Single '@' Symbol!"
          }
          else if(email.value.split(' ').length>1){
              emailErrorMsg.textContent="*No spaces Allowed!"
          }
          else{
            
              emailErrorMsg.textContent="*Invalid Email address!"
            
          }
      }

}

function passwordValidation(){

    // console.log('from pass')
    // var paswd=  /(?=^.{5,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    //   var cmnpwds =["password" ,"123456","abcdef"];
    //   if(password.value ===""){
    //       passwordErrMsg.textContent="Password Should not be Empty!";
    //   }
    //   else{
    //        console.log(password.value)
    //       if(password.value.match(paswd)){
    //           passwordErrMsg.textContent='';
    //       }
    //       else if (cmnpwds.includes(password.value)){
    //           passwordErrMsg.textContent="easily guessable passwords";
    //       }
        
    //       else if(password.value.length < 6){
    //           passwordErrMsg.textContent="Password should be At least 5 characters"
    //       }
    //       else if(password.value.length > 25){
    //           passwordErrMsg.textContent="Maximum Length of characters is 25"
    //       }
       
    //       else{
    //           passwordErrMsg.textContent="Invalid Password";
    //       }
    //   }



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
      
        passwordErrMsg.textContent = errorMessage;
      





}

function confirmPasswordValidation(){

    if(confirmPassword.value===""){
        confirmPasswordErrMsg.textContent="Confirm Password Should not be Empty!";
    }
    else if(password.value!==confirmPassword.value){
        confirmPasswordErrMsg.textContent="Password not Matched";
    }
  else{
        confirmPasswordErrMsg.textContent="";
    }

}


function validDateOfBirth(){
    const dateString = document.getElementsById("dob").value;
    console.log(dateString);
    const regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;


        if (regex.test(dateString)) {
            var parts = dateString.split("-");
            var dtDOB = new Date(parts[1] + "-" + parts[0] + "-" + parts[2]);
            var dtCurrent = new Date();

            let years = dtCurrent.getFullYear() - dtDOB.getFullYear();
    
            if (years < 18) {
                dobErrorMsg.textContent = "*Must be 18 years or older.";
            }

          
            else{
            dobErrorMsg.textContent = "";
            }
         
        } 
}

function validateFormData(){
//     // firstname-validation
  
     
    firstAndLastName();
    emailValidation();
    passwordValidation();
    confirmPasswordValidation();
    validDateOfBirth();

    



     
  //Doj:

      var dateStringDoj = document.getElementsById("doj").value;

          if (regex.test(dateStringDoj)) {
            
              var parts = dateStringDoj.split("-");
              var dtDOJ = new Date(parts[1] + "-" + parts[0] + "-" + parts[2]);
    
              let diff = dtDOJ.getFullYear() - dtDOB.getFullYear();
              console.log(diff);
              if(diff<0){
                  dojErrorMsg.textContent ="Should be after the Date of Birth.";
              }
            
              else if(diff < 18){
                  dojErrorMsg.textContent = "*Must be at least 18 years from the Date of Birth.";
              }
          }
          else{
              dojErrorMsg.textContent="";
          }

      //phone number
    
      const number = /^[0-9]+$/.test(phone.value);
      const alpha = /^[A-Za-z]+$/;
      var isValid = alpha.test(phone.value);
      const specialChars = /[`!@#$%^&*]/;
      var isSpecial = specialChars.test(phone.value);
      // console.log(isValid);
      if(phone.value===""){
          phoneErrorMsg.textContent="Phone Number Should not be Empty";
      }
      else{
          if(number){
              phoneErrorMsg.textContent=""
          }
          else if(isSpecial)
          {
              phoneErrorMsg.textContent="Phone Number Should not contain Special Characters";
          }
        
          else if(phone.value[0]==="+")
          {
              phoneErrorMsg.textContent="Phone number without country code (e.g., +1).";
          }
          else if(!isValid)
          {
              phoneErrorMsg.textContent="Phone Number Should not contain letters";
          }
       
      }


      function submitForm() {
        var user = {};

        user.firstName = document.getElementById('firstName').value;
      
        user.lastName = document.getElementById('lastName').value;
   
        user.email = document.getElementById('email').value;
    
        user.password =document.getElementById('password').value;
   
        user.doj = document.getElementById('doj').value;
        user.dob = document.getElementById('dob').value;
      
        
        console.log(user);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", " https://demo-api-wh0x.onrender.com/register");
        xhr.onreadystatechange = function () {
          if (this.readyState == 4) {
            var resultObj = JSON.parse(this.responseText);
            console.log(resultObj);
          }
        };
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(user));
      }

  
    

     
    
}

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
  validateFormData();
});



  
  