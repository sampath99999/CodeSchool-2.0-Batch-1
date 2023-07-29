function reloadImage() {
  var imageUrl = "https://source.unsplash.com/collection/928423/1920x1080"; // Replace this with the URL that returns the image.
  var imgElement = document.getElementById("imageElement");

  var xhr = new XMLHttpRequest();
  xhr.open("GET", imageUrl, true);
  xhr.responseType = "blob";

  xhr.onload = function () {
      if (xhr.status === 200) {
          var imageUrlObject = URL.createObjectURL(xhr.response);
          imgElement.src = imageUrlObject;
      }
  };

  xhr.onerror = function () {
      console.error("Failed to load the image.");
  };

  xhr.send();

  
  setTimeout(reloadImage, 30000);
}


reloadImage();




const countrySelect = document.getElementById('country');


function populateCountries() {
  const xhr = new XMLHttpRequest();
  const url = 'https://restcountries.com/v3.1/all'; 

  xhr.open('GET', url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const countries = JSON.parse(xhr.responseText);
        countries.forEach(a => {
          const option = document.createElement('option');
          option.text = a.name.common;
          option.value = a.name.common; 
          countrySelect.appendChild(option);
        });
      } else {
        console.error('Error loading countries:', xhr.status, xhr.statusText);
      }
    }
  };

  xhr.send();
}


populateCountries();

const countrycodeSelect = document.getElementById('countrycode');


function populateCountriescode() {
  const xhr = new XMLHttpRequest();
  const url = 'https://restcountries.com/v3.1/all'; 

  xhr.open('GET', url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const countriescode = JSON.parse(xhr.responseText);
        countriescode.forEach(a => {
          const option = document.createElement('option');
          option.text = a.idd.root+a.idd.suffixes;
          option.value = a.idd.root+a.idd.suffixes; 
          countrycodeSelect.appendChild(option);
        });
      } else {
        console.error('Error loading countries:', xhr.status, xhr.statusText);
      }
    }
  };

  xhr.send();
}


populateCountriescode();

let countryele=document.getElementById("country");
countryele.addEventListener("change", function(event) {
  a=countryele.value;
  function university(a) {
    const universities=document.getElementById("university");
    universities.innerHTML="";

    const xhr = new XMLHttpRequest();
    var urlk = 'http://universities.hipolabs.com/search?country='+a; 
  
    
  
    xhr.open('GET', urlk, true);
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const universitynames = JSON.parse(xhr.responseText);
          universitynames.forEach(a => {
            const option = document.createElement('option');
            option.text = a.name;
            option.value = a.name; 
            universities.appendChild(option);
          });
        } else {
          console.error('Error loading countries:', xhr.status, xhr.statusText);
        }
      }
    };
  
    xhr.send();
    
  }
  
  
  university(countrySelect.value);
  
});



function submitForm(a) {
 

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://reqres.in/api/users");
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      var resultObj = JSON.parse(this.responseText);
      document.getElementById("candidate-details").innerHTML =
      document.getElementById("candidate-para").innerHTML="Firstname :"+resultObj.firstName+ ": lastname:"+resultObj.lastName+"Email:"+resultObj.Emailid+": countrycode"+resultObj.countrycode+":phone np"+resultObj.phoneNumber+"country"+resultObj.country+"university"+resultObj.university+"dob"+resultObj.DOB+"doj"+resultObj.doj;
  
    }
  };
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(a));
}
function validateDob(){
  const doberrorele=document.getElementById("dobError")
  const dobvalue = new Date(birthdate.value);
  const currentDate=new Date();
  const days=currentDate-dobvalue;
  const formattedDate=new Date(days)
  const age = Math.abs(formattedDate.getFullYear() - 1970);
  if (isNaN(dobvalue)) {
      dobError.textContent="Date cannot be empty*";
      return false;
  }
  else if(dobvalue>currentDate){
      dobError.textContent="*Date should be in past";
      return false;
  }
  else if(age<18){
      dobError.textContent="*Age must be 18 years or older*";
      return false;
  }
  else{
      dobError.textContent="";
      return true;

  }


}
function validateDoj(){
  const Dojele=document.getElementById("doj")
  const dojvalue = new Date(Dojele.value);
  const birthdatevalue = new Date(birthdate.value);
  const currentDate=new Date();
  const days=currentDate-birthdatevalue;
  const formattedDate=new Date(days);
  const age = Math.abs(formattedDate.getFullYear() - 1970);
  if (isNaN(dojvalue)) {
      dojError.textContent="*Date cannot be empty";
      return false;
  }
  else if(dojvalue<birthdatevalue){
      dojError.textContent="*DOJ should be greater than DOB";
      return false;
  }
  else if(age<18){
      dojError.textContent="*Age must be 18 years or older";
      return false;
  }
  else{
      dojError.textContent="";
      return true

  }


}
function validatePassword() {
  const password=document.getElementById("password")
  const passwordvalue = password.value;
  const common = ["password", "123456", "abcdef", "admin", "password"];

  if (!(passwordvalue)) {
      passwordError.textContent="*Password cannot be empty.";
      return false;
  }
  else if (passwordvalue.length < 5 || passwordvalue.length > 25) {
    passwordError.textContent = "Password should be between 5 and 25 characters.";
    return false;

  }
  else if (!/[a-z]/.test(passwordvalue))  {
      passwordError.textContent = "Password should contain at least one uppercase letter.";
      passwordError.style.display="block";
      return false;

  }
  else if (!/[A-Z]/.test(passwordvalue)) {
      passwordError.textContent = "Password should contain at least one lowercase letter.";
      passwordError.style.display="block";
      return false;

  }
  else if (!/\d/.test(passwordvalue)) {
      passwordError.textContent = "Password should contain at least one number.";
      return false;

  }
  else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~]/.test(passwordvalue)) {
      passwordError.textContent = "Password should contain at least one special character.";
      return false;

  }
  else if (common.includes(passwordvalue.toLowerCase())) {
      PasswordError.textContent = "Dont use repeated values";
      return false;
  }
  else if (/([a-zA-Z0-9])\1/.test(passwordvalue)) {
      passwordError.textContent = "Password should not contain repeating characters.";
      return false;
  }
  else if (/\s/.test(passwordvalue)) {
      passwordError.textContent = "Password should not contain spaces.";
      return false;
  }
  else{
      passwordError.textContent = "";
      return true;
  }

}
function validateconfirmpassword(){
  const confirmpassword=document.getElementById("confirmpassword");
  if(password.value!==confirmpasswordele.value){
    document.getElementById("candidate-details").innerHTML="password should match";
    return false;
  }
}










let myformele=document.getElementById("myform");
let formdata={
  firstName:"",
  lastName:"",
  Emailid:"",
  countrycode:"",
  Gender:"",
  phoneNumber:"",
  DOB:"",
  DOJ:"",
  password:"",
  university:"",
}
function isCapitalized(str) {
  return /^[A-Z]/.test(str);
}


let firstnameele=document.getElementById("firstName");
let lastnameele=document.getElementById("lastName");
let phoneNumberele=document.getElementById("phone");
let dobele=document.getElementById("birthdate");
let dojele=document.getElementById("doj");
let passwordele=document.getElementById("password");
let confirmpasswordele=document.getElementById("confirmpassword");
let gendermaleele=document.getElementById("gendermale");
let genderfemaleele=document.getElementById("genderfemale");
let genderotherele=document.getElementById("genderother");
let countrycodeele=document.getElementById("countrycode");
let countryelement=document.getElementById("country");
let universityele=document.getElementById("university");




const alphabeticPattern = /^[A-Za-z]+$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\d{10}$/;

let Emailele=document.getElementById("Email");
firstnameele.addEventListener("change", function(event) {
  formdata.firstName = event.target.value;
});

lastnameele.addEventListener("change", function(event) {
  formdata.lastName = event.target.value;
});
Emailele.addEventListener("change", function(event) {
  formdata.Emailid = event.target.value;
});
phoneNumberele.addEventListener("change", function(event) {
  formdata.phoneNumber = event.target.value;
});
dobele.addEventListener("change", function(event) {
  formdata.DOB = event.target.value;
});
dojele.addEventListener("change", function(event) {
  formdata.DOJ = event.target.value;
});
gendermaleele.addEventListener("change", function(event) {
  formdata.Gender = event.target.value;
});
genderfemaleele.addEventListener("change", function(event) {
  formdata.Gender = event.target.value;
});
genderotherele.addEventListener("change", function(event) {
  formdata.Gender = event.target.value;
});
passwordele.addEventListener("change", function(event) {
  formdata.password = event.target.value;
});
countrycodeele.addEventListener("change", function(event) {
  formdata.countrycode = event.target.value;
});
console.log(formdata);

var abi=formdata.firstName
function validateFormData(formdata) {
  let {firstName,lastName,Emailid,phoneNumber} = formdata;
  console.log(formdata.firstName);
  console.log(formdata.Emailid);
  console.log(formdata.phoneNumber);
  
  console.log(formdata.firstName.length>8)
  if(!validateDob()){
    return false;
  }
 
  validatePassword();
  validateconfirmpassword();

  if (formdata.firstName.length>8) {

    document.getElementById("firstnameerror").textContent = "Maximum length is 8";
    return false;
  }
  console.log("2");
  
  
  if (formdata.firstName.length<2){
    document.getElementById("firstnameerror").textContent = "minimum length is 2";
    return false
  }
  console.log("2");
  if (!isCapitalized(formdata.firstName)) {
    document.getElementById("firstnameerror").textContent = "First name should start capiltal";
    return false

  }
  console.log("3");
  if (!alphabeticPattern.test(formdata.firstName)) {
    document.getElementById("firstnameerror").textContent = "only alphabets are allowed";
    return false

  
  }
  console.log("4");

  if (!alphabeticPattern.test(formdata.firstName)) {
    document.getElementById("firstnameerror").textContent = "only alphabets are allowed";
    return false

  }
  console.log("5");
  console.log(formdata.firstName.length>2 && formdata.firstName.length<8 && (!alphabeticPattern.test(formdata.firstName)) )
  if (formdata.firstName.length>2 && formdata.firstName.length<8 ) {
    document.getElementById("firstnameerror").textContent = "";
  }
  console.log("5");
  
  if (formdata.lastName.length>8) {

    document.getElementById("lastnameerror").textContent = "Maximum length is 8";
    return false;
  }
  console.log("5");
  
  if (formdata.lastName.length<2){
    document.getElementById("lastnameerror").textContent = "minimum length is 2";
    return false;
  }
  console.log("5");
  // if (formdata.lastName.length>2 && formdata.lastName.length<8 ){
  //   document.getElementById("lastnameerror").textContent = "";
  //   return false;
  // }
  console.log("5");
  if (!isCapitalized(formdata.lastName)) {
    document.getElementById("lastnameerror").textContent = "last name should start with capiltal";
    return false;

  }
  console.log("5");
  
  if (!alphabeticPattern.test(formdata.lastName)) {
    document.getElementById("lastnameerror").textContent = "only alphabets are allowed";
    return false;

  
  }
  console.log("5");
  console.log("NEW");
  console.log("anna");
  console.log(formdata.lastName.length>2 && formdata.lastName.length<8);

  if (formdata.lastName.length>2 && formdata.lastName.length<8){
    document.getElementById("lastnameerror").textContent = "";
  
  } 
  console.log("5");
  
  if (formdata.Emailid.length<1) {
    document.getElementById("Emailerror").textContent="Enter Email";
    return false
  }
  console.log("5");
  if (!emailPattern.test(formdata.Emailid)) {
    document.getElementById("Emailerror").textContent="Enter valid Email";
    return false;

    
  }
  console.log("5");
  
  if(countrycodeele.value==="select"){
    document.getElementById("countrycodeerror").textContent="select code";
    return false
  }
  console.log("5");
  if(universityele.value==="select"){
    document.getElementById("universityerror").textContent="select code";
    return false
  }
  else{
    formdata.university=universityele.value;
  }
  console.log("5");
  if(countryelement.value==="select"){
    document.getElementById("countryerror").textContent="select country";
    return false
  }
  console.log("5");
  if(formdata.Emailid.length<1){
    document.getElementById("Emailerror").textContent=" ";
    return false;


  }
  console.log("5");
  console.log("step1")
  validateDoj();
  console.log("5");
  const cleanedPhoneNumber = formdata.phoneNumber.replace(/\D/g, '');
  if (cleanedPhoneNumber.length === 10 && /^\d+$/.test(cleanedPhoneNumber)) {
    document.getElementById("phoneerror").textContent="";
  } else {
    document.getElementById("phoneerror").textContent="Enter valid phone number";
    return false;
  }
  console.log(formdata)

  const boxcheck=document.getElementById("boxcheck");
  boxcheckvalue=boxcheck.checked;
  if(boxcheckvalue === false){
    alert("please accept the terms");
    return false;
  }

  return true;
}













function submitFormData(){
  console.log(formdata);
}

myformele.addEventListener("submit", function(event){
  event.preventDefault();
 if (validateFormData(formdata) ){
   
    submitForm(formdata);
    
 } 
  


});






