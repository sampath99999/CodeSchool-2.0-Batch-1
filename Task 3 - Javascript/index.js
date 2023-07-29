const myForm = document.getElementById("myForm");
const image = document.getElementById("image");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const dob = document.getElementById("dob");
const doj = document.getElementById("doj");
const phone = document.getElementById("phone");
const fnameErrorMsg = document.getElementById("fnameErrorMsg");
const lnameErrorMsg = document.getElementById("lnameErrorMsg");
const emailErrorMsg = document.getElementById("emailErrorMsg");
const confirmPasswordErrMsg = document.getElementById("confirmPasswordErrMsg");
const dobErrorMsg = document.getElementById("dobErrorMsg");
const dojErrorMsg = document.getElementById("dojErrorMsg");
const phoneErrorMsg = document.getElementById("phoneErrorMsg");




function imageLoad() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://api.unsplash.com/photos/random?query=building&client_id=yOuLQTgiS1AKlFK5YgpeGRDpb8nsstWkBLNF1TBLbdI");
    xhttp.onload = async function() {
     let products = await JSON.parse(this.response);
     
       let imageSrc=products.urls.regular;
    //    console.log(imageSrc);
        document.getElementById('image').src= imageSrc;

      }
   
    xhttp.send();

}

setInterval(imageLoad,30000)


  
  

  


//phone codes
document.addEventListener('DOMContentLoaded', () => {

    const selectDrop = document.querySelector('#countries');

    fetch('https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json').then(res => {
        
      return res.json();
    }).then(data => {
      let output = "";
      data.forEach(country => {
        output += `
        
        <option value="${country.dial_code}">${country.dial_code}</option>`;
      })
  
      selectDrop.innerHTML = output;
    }).catch(err => {
      console.log(err);
    })
  
  
  });
//country
  document.addEventListener('DOMContentLoaded', () => {

    const selectDrop = document.querySelector('#country');

    // fetch('http://universities.hipolabs.com/search?country').then(res => {
    fetch('https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json').then(res => {
        
      
      return res.json();
    }).then(data => {
      let output = "";
    //   console.log(data)
      data.forEach(each => {
        output += `
        
        <option value="${each.name}">${each.name}</option>`;
      })
  
      selectDrop.innerHTML = output;
    }).catch(err => {
      console.log(err);
    })
  
  
  });

//university

document.addEventListener('DOMContentLoaded', () => {

    const selectDrop = document.querySelector('#university');

    country.addEventListener("change", e => {
        console.log(e.target.value.toLowerCase());
        fetch(`http://universities.hipolabs.com/search?country=${e.target.value.toLowerCase()}`)
    .then(res => {
        
      
      return res.json();
    }).then(data => {
      let output = "";

      data.forEach(each => {
        output += `
        
        <option value="${each.name}">${each.name}</option>`;
      })
  
      selectDrop.innerHTML = output;
    }).catch(err => {
      console.log(err);
    })
  
    })
   
  });

function validateFormData(){
    // firstname-validation

    function onlyLettersAndNumbers(str) {
        return /^[A-Za-z]*$/.test(str);
    }
  
    function firstChar(str){
        return /^[A-Z]/.test(str);
    }

    if(firstName.value!==""){
        if(firstChar(firstName.value[0])===false){
            fnameErrorMsg.textContent="*First character should be Title case";
        }
        else if(firstName.value.length<2){
            fnameErrorMsg.textContent="*First Name should be minimum of 2 characters";
        }
        else if(firstName.value.length>50){
            fnameErrorMsg.textContent="*First Name should be maximum of 50 characters";
        }
        else if(onlyLettersAndNumbers(firstName.value)===false){
            
            fnameErrorMsg.textContent="*Alphabetic characters only";
        }
        else{
            fnameErrorMsg.textContent="";
        }
    
    }
    

    //lastname validation
    if(lastName.value!==""){
        if(firstChar(lastName.value[0])===false){
            lnameErrorMsg.textContent="*Last character should be Title case";
        }
        else if(lastName.value.length<2){
            lnameErrorMsg.textContent="*Last Name should be minimum of 2 characters";
        }
        else if(lastName.value.length>50){
            lnameErrorMsg.textContent="*Last Name should be maximum of 50 characters";
        }
        else if(onlyLettersAndNumbers(lastName.value)===false){
            lnameErrorMsg.textContent="*Alphabetic characters only";
        }
        else{
            lnameErrorMsg.textContent="";
        }
    }
    

    //email validation

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

    //Password Validation

    var paswd=  /(?=^.{5,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    var cmnpwds =["password" ,"123456","abcdef"];
    if(password.value===""){
        passwordErrMsg.textContent="Password Should not be Empty!";
    }
    else{
        if(password.value.match(paswd)){
            passwordErrMsg.textContent='';
        }
        else if (cmnpwds.includes(password.value)){
            passwordErrMsg.textContent="easily guessable passwords";
        }
        
        else if(password.value.length < 6){
            passwordErrMsg.textContent="Password should be At least 5 characters"
        }
        else if(password.value.length > 25){
            passwordErrMsg.textContent="Password should be At least 5 characters"
        }
        else if(password.value.split(' ').length>1){
            passwordErrMsg.textContent="*No spaces Allowed!"
        }
        else{
            passwordErrMsg.textContent="Invalid Password"
        }
    }

    //confirm Password
  
    if(password.value!==confirmPassword.value){
        confirmPasswordErrMsg.textContent="Password not Matched";
    }
    else{
        confirmPasswordErrMsg.textContent="";
    }
//     DOB

// Past Date: Should be in the past.
// Age: Must be 18 years or older.

    var dateString = document.getElementById("dob").value;
    var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
 
 
        if (regex.test(dateString)) {
            var parts = dateString.split("/");
            var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
            var dtCurrent = new Date();

            let years = dtCurrent.getFullYear() - dtDOB.getFullYear();
      
            if (years < 18) {
                dobErrorMsg.textContent = "*Must be 18 years or older."
              
            }
 
            
            else{
            dobErrorMsg.textContent = "";
            }
           
        } else {
            dobErrorMsg.textContent = "Enter date in dd/MM/yyyy format ONLY.";
            
        }
//Doj:
// After DOB: Should be after the Date of Birth.
// Age Restriction: Must be at least 18 years from the Date of Birth.
    var dateStringDoj = document.getElementById("doj").value;

        if (regex.test(dateStringDoj)) {
            
            var parts = dateStringDoj.split("/");
            var dtDOJ = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
    
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
    
    console.log(phone.value);
    const number = /^[0-9]+$/.test(phone.value);
    const alpha = /^[A-Za-z]+$/;
    var isValid = alpha.test(phone.value);
    const specialChars = /[`!@#$%^&*]/;
    var isSpecial = specialChars.test(phone.value);
 
    if(phone.value===""){
        phoneErrorMsg.textContent="Phone Number Should not be Empty";
    }
    else{
        if(number && phone.value.length===10){
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
}



function loadDoc() {
    var user = {};
   
    user.fname=firstName.value
    user.lname=lastName.value
    user.emailID=email.value
    user.phoneNum=phone.value
    user.dateOfBirth=dob.value
    user.dateOfJoin=doj.value
    console.log(user);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqres.in/api/users");
    xhr.onreadystatechange = function() {
      if (this.readyState == 4) {
        var resultObj = JSON.parse(this.responseText);
        
        document.getElementById("demo1").innerHTML = 
        "First Name: "+ resultObj.fname + " || "+"Last Name: " + resultObj.lname+" || "+"email Id: " + resultObj.emailID+" || "+"Phone Number: "+ resultObj.phoneNum+" || "+"date Of Birth: "+ resultObj.dateOfBirth+" || "+"date Of Join: "+ resultObj.dateOfJoin;
             
                
      }
    };
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(user));
  }

// function loadDoc() {
//     const xhttp = new XMLHttpRequest();
//     // xhttp.withCredentials = true;
//     xhttp.open("POST", "https://demo-api-wh0x.onrender.com/register");
  
  
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4) {
         
//           console.log(this.responseText);
//           responseObj = JSON.parse(this.responseText);
//           console.log(responseObj);
        
//         document.getElementById("demo").innerHTML = "First Name: "+ responseObj.fname+" "+"Last Name: "+ responseObj.lname
//         +" "+"email: "+ responseObj.emailID+" "+"Phone Number: "+ responseObj.phoneNum+" "+"dateOfBirth: "+ responseObj.dateOfBirth+" "+"dateOfJoin: "+ responseObj.dateOfJoin;
        
//       }
//     };
//     var user = {};
//     user.fname=firstName.value
//     user.lname=lastName.value
//     user.emailID=email.value
//     user.phoneNum=phone.value
//     user.dateOfBirth=dob.value
//     user.dateOfJoin=doj.value
    
//     console.log(user);
//     xhttp.setRequestHeader('Content-Type', 'application/json');
//     xhttp.send(JSON.stringify(user));
//   }


myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    validateFormData();
    loadDoc();
});
