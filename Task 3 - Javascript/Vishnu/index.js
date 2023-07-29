
const imageElement=document.getElementById("left-image");
let codes=document.getElementById("country-code");
let countries=document.getElementById("country-name")
let universities=document.getElementById("university-name");
const firstName=document.getElementById("firstNameInput");
const firstNameError=document.getElementById("firstNameError");
const lastName=document.getElementById("lastNameInput");
const lastNameError=document.getElementById("lastNameError");
const email=document.getElementById("emailInput");
const emailError=document.getElementById("emailError");
const password=document.getElementById("passwordInput");
const passwordError=document.getElementById("passwordError");
const confirmPassword=document.getElementById("confirmInput");
const confirmMessage=document.getElementById("confirmError");
const phoneNumber=document.getElementById("phoneInput");
const phoneError=document.getElementById("phoneError");
const dateOfBirth=document.getElementById("dateOfBirth");
const dateOfBirthError=document.getElementById("dateOfBirthError");
const dateOfJoin=document.getElementById("dateOfJoin");
const dateOfJoinError=document.getElementById("dateOfJoinError");
const countryError=document.getElementById("countryError");
const formSubmit=document.getElementById("form-submit");
const universityError=document.getElementById("universityError");
const agreement=document.getElementById("agreement");
const formError=document.getElementById("status");


formSubmit.addEventListener("submit",function(event){
    event.preventDefault();
    const fname=validateFirstName();
    const lname=validateLastName();
    const ename=validateEmailName();
    const pnum=validatePhoneNumber();
    const pcode=validateCode();
    const dob=validateDateOfBirth();
    const doj=validateDateOfJoin();
    const formcountries=validateCountries();
    const pwd=validatePassword();
    const confirmpwd=validateConfirmPassword();
    console.log("submitted");
    console.log(fname);
    console.log(lname);
    console.log(ename);
    console.log(pnum);
    console.log(pcode);
    console.log(dob);
    console.log(doj);
    console.log(formcountries);
    console.log(pwd);
    console.log(confirmpwd);
    const agreementStatus=agreement.checked;
    if(fname===true && lname===true && ename===true && pnum===true && pcode===true && dob===true && doj===true && formcountries===true && pwd===true && 
        agreementStatus===true){
        let xhrform = new XMLHttpRequest();
        xhrform.onload=function(){
            const data = JSON.parse(xhrform.responseText);
            formError.textContent="Register successfull";   
        }
        xhr.open("POST", " https://demo-api-wh0x.onrender.com/register", true); // Replace this with your API endpoint URL
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify({name:"Rahul"}));      
    }
    else{
        formError.textContent="*please fill the required details";
        formError.style.display="block";
    }
    
});


//get countries and thier codes

function createCodes(countryData){
    let code_option="";
    let country_option="";
    for(let code=0;code<countryData.length;code++){
        code_option+=`<option value=${countryData[code]["idd"]}>${countryData[code]["idd"]}</option>`
        country_option+=`<option value=${countryData[code]["country"]}>${countryData[code]["country"]}</option>`
    }
    codes.innerHTML+=code_option;
    countries.innerHTML+=country_option;
}

let data = [];
const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        const formattedResponse=JSON.parse(this.responseText)
        for(let item=0;item<formattedResponse.length;item++){
            const country=formattedResponse[item].name.common;
            const idd=formattedResponse[item].idd.root;
            const root= Object.keys(formattedResponse[item].idd).length===0?"0":formattedResponse[item].idd.root;
            const suffix=Object.keys(formattedResponse[item].idd).length===0?"0":formattedResponse[item].idd.suffixes[0];
            data.push({country,idd:root+suffix})
        }
        createCodes(data)
    }
});

xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();

//get country universities

function createUniversities(universityData){
    universities.innerHTML="";
    
    let university_option="";
    for(let item=0;item<universityData.length;item++){  
        university_option+=`<option value="${universityData[item]}">"${universityData[item]}"</option>`
    }
    universities.innerHTML+=university_option;
    universities.innerHTML+=`<option>Select</option>`;
    console.log(universities);
}

const uni_xhr = new XMLHttpRequest();



countries.addEventListener("change",function(){
    let universities_data=[];
    uni_xhr.open('GET', `http://universities.hipolabs.com/search?country=${countries.value}`);
    uni_xhr.send();
    uni_xhr.onreadystatechange=function(){
        if (this.readyState === this.DONE){
            const formattedResponse=JSON.parse(this.responseText)
            console.log(formattedResponse)
            for(let item=0;item<formattedResponse.length;item++){
                const university=formattedResponse[item]["name"];
                universities_data.push(university);
            }   
            createUniversities(universities_data);   
        }  
    }
   
})

firstName.addEventListener("blur",validateFirstName);

function validateFirstName(event){
        let firstNameValue=firstName.value;
        if (firstNameValue.length < 2 || firstNameValue.length > 50) {
            firstNameError.textContent="*Minimum length is required.";
            firstNameError.style.display="block";
            return false;
        }
        else if (!/^[A-Za-z]+$/.test(firstNameValue)) {
            firstNameError.textContent="*Should contain alphabets only.";
            firstNameError.style.display="block";
            return false;
           
        }
        else if (firstNameValue !== firstNameValue.charAt(0).toUpperCase() + firstNameValue.slice(1).toLowerCase()) {
            firstNameError.textContent="*First letter should be capital";   
            firstNameError.style.display="block";
            return false;
            
        }
        else{
            firstNameError.textContent="";
            firstNameError.style.display="none";
            return true;
        }    
}

//lastName
lastName.addEventListener("blur",validateLastName);

function validateLastName(event){
    let lastNameValue=lastName.value;
    if (lastNameValue.length < 2 || lastNameValue.length > 50) {
        lastNameError.textContent="*Minimum length is required.";
        lastNameError.style.display="block";
        return false;
    }
    else if (!/^[A-Za-z]+$/.test(lastNameValue)) {
        lastNameError.textContent="*Should contain alphabets only.";
        lastNameError.style.display="block";
        return false;
        
    }
    else if (lastNameValue !== lastNameValue.charAt(0).toUpperCase() + lastNameValue.slice(1).toLowerCase()) {
        lastNameError.textContent="*First letter should be capital"; 
        lastNameError.style.display="block";  
        return false;
    }
    else{
        lastNameError.textContent="";
        lastNameError.style.display="none";
        return true;
    }    
}

//Email 

email.addEventListener("blur",validateEmailName);

function validateEmailName(event){
    let lastEmailValue=email.value;
   
    
    const emailFormat = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!lastEmailValue) {
        emailError.textContent="*Email address cannot be empty.";
        emailError.style.display="block";
        return false;
    }
    else if (lastEmailValue.length>50) {
        emailError.textContent="*Email should be less than 50 characters.";
        emailError.style.display="block";   
        return false; 
    }
    else if (lastEmailValue.match(/@/g).length>1) {
        emailError.textContent = "only one @ is allowed.";
        emailError.style.display="block"; 
        return false;
    }
    else if (lastEmailValue.includes("..")) {
        emailError.textContent = "consecutive dots are not allowed.";
        emailError.style.display="block"; 
        return false;
    }
    else if (emailFormat.test(lastEmailValue)===false) {
        emailError.textContent="*Incorrect email format"; 
        emailError.style.display="block";  
        return false;
    }
    else{
        emailError.textContent="";
        emailError.style.display="none";
        return true
    }    
}

//Password

password.addEventListener("blur",validatePassword);

function validatePassword() {
    
    const passwordInput = password.value;
    const commonPasswords = ["password", "123456", "qwerty", "abcdef", "admin", "letmein"];
  
    if (!passwordInput) {
        passwordError.textContent="*Password cannot be empty.";
        passwordError.style.display="block";
        return false;
    }
    else if (passwordInput.length < 5 || passwordInput.length > 25) {
      passwordError.textContent = "Password should be between 5 and 25 characters.";
      passwordError.style.display="block";
      return false;
      
    }
    else if (!/[A-Z]/.test(passwordInput)) {
        passwordError.textContent = "Password should contain at least one uppercase letter.";
        passwordError.style.display="block";
        return false;
    
    }
    else if (!/[a-z]/.test(passwordInput)) {
        passwordError.textContent = "Password should contain at least one lowercase letter.";
        passwordError.style.display="block";
        return false;

    }
    else if (!/\d/.test(passwordInput)) {
        passwordError.textContent = "Password should contain at least one number.";
        passwordError.style.display="block";
        return false;
        
    }
    else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~]/.test(passwordInput)) {
        passwordError.textContent = "Password should contain at least one special character.";
        passwordError.style.display="block";
        return false;
 
    }
    else if (commonPasswords.includes(passwordInput.toLowerCase())) {
        PasswordError.textContent = "Password is too common or easily guessable.";
        PasswordError.style.display="block";
        return false;
    }
    else if (/([a-zA-Z0-9])\1/.test(passwordInput)) {
        passwordError.textContent = "Password should not contain repeating characters.";
        passwordError.style.display="block";
        return false;
    }
    else if (/\s/.test(passwordInput)) {
        passwordError.textContent = "Password should not contain spaces.";
        passwordError.style.display="block";
        return false;
    }
    else{
        passwordError.textContent = "";
        passwordError.style.display="none";
        return true;
    }
     
}

//confirm password
confirmPassword.addEventListener("blur",validateConfirmPassword);

function validateConfirmPassword() {
    const confirmValue = confirmPassword.value;
    const passwordValue=password.value;
    
    
  
    // Check minimum and maximum length
    if (confirmValue!==passwordValue) {
        confirmMessage.textContent="*Password didn't match";
        confirmMessage.style.display="block";
        return false;
    }
    else{
        confirmMessage.textContent = "";
        confirmMessage.style.display="none";
        return true;
    }
     
}

//phone
phoneNumber.addEventListener("blur",validatePhoneNumber);

function validatePhoneNumber() {
    const phoneNumberValue = phoneNumber.value;
    // Check minimum and maximum length
    if (!phoneNumberValue) {
        phoneError.textContent="*Phone number cannot be empty";
        phoneError.style.display="block";
        return false;
    }
    else if (phoneNumberValue.length!==10) {
        phoneError.textContent="*Phone number should contain 10 digits";
        phoneError.style.display="block";
        return false;
    }
    else if (!/^[0-9]+$/.test(phoneNumberValue)) {
        phoneError.textContent="*Phone number should contain numbers only.";
        phoneError.style.display="block";
        return false;
    }
    else{
        phoneError.textContent = "";
        phoneError.style.display="none";
        return true;
    }
     
}

//date of birth
dateOfBirth.addEventListener("blur",validateDateOfBirth);

function validateDateOfBirth(){
    const dateOfBirthValue = new Date(dateOfBirth.value);
    const currentDate=new Date();
    const days=currentDate-dateOfBirthValue;
    const formattedDate=new Date(days)
    const age = Math.abs(formattedDate.getFullYear() - 1970);
    if (isNaN(dateOfBirthValue)) {
        dateOfBirthError.textContent="*Date cannot be empty";
        dateOfBirthError.style.display="block";
        return false;
    }
    else if(dateOfBirthValue>currentDate){
        dateOfBirthError.textContent="*Date should be in past";
        dateOfBirthError.style.display="block";
        return false;
    }
    else if(age<18){
        dateOfBirthError.textContent="*Age must be 18 years or older";
        dateOfBirthError.style.display="block";
        return false;
    }
    else{
        dateOfBirthError.textContent="";
        dateOfBirthError.style.display="none";
        return true;

    }


}

//date of joining
dateOfJoin.addEventListener("blur",validateDateOfJoin);
function validateDateOfJoin(){
    const dateOfJoinValue = new Date(dateOfJoin.value);
    const dateOfBirthValue = new Date(dateOfBirth.value);
    console.log(dateOfJoinValue);
    console.log(dateOfBirthValue);
    console.log(dateOfJoinValue>dateOfBirthValue);
    const currentDate=new Date();
    const days=currentDate-dateOfBirthValue;
    const formattedDate=new Date(days);
    const age = Math.abs(formattedDate.getFullYear() - 1970);
    if (isNaN(dateOfJoinValue)) {
        dateOfJoinError.textContent="*Date cannot be empty";
        dateOfJoinError.style.display="block";
        return false;
    }
    else if(dateOfJoinValue<dateOfBirthValue){
        dateOfJoinError.textContent="*DOJ should be greater than DOB";
        dateOfJoinError.style.display="block";
        return false;
    }
    else if(age<18){
        dateOfJoinError.textContent="*Age must be 18 years or older";
        dateOfJoinError.style.display="block";
        return false;
    }
    else{
        dateOfJoinError.textContent="";
        dateOfJoinError.style.display="none";
        return true

    }


}

//codes validation

codes.addEventListener("blur",validateCode)

function validateCode(){
    const codeValue=codes.value;
    console.log(codeValue);
    if(codeValue==="SELECT"){
        phoneError.textContent="*Code cannot be null";
        phoneError.style.display="block";
        return false;
    }
    else{
        phoneError.textContent="";
        phoneError.style.display="none";
        return true;
    }
}

//countries validation 
countries.addEventListener("blur",validateCountries);

function validateCountries(){
    const countryValue=countries.value;
    if(countryValue==="SELECT"){
        countryError.textContent="*Country cannot be empty"
        countryError.style.display="block";
        return false;
    }
    else{
        const {idd}=data.find(each=>each.country===countryValue);
        codes.value=idd;
        countryError.textContent="";
        countryError.style.display="none";
        return true;
        validateCode();
        validateUniversities();
    }
}



//university
universities.addEventListener("blur",validateUniversities);

function validateUniversities(){
    console.log('entered');
    const universityValue=universities.value;
    console.log(universities.value)
    if(universityValue==="SELECT"){
        universityError.textContent="*University cannot be empty"
        universityError.style.display="block";
        return false;
    }
    else{
        universityError.textContent="";
        universityError.style.display="none";
        return true;
    }
}



//images



let images=[];
const image_xhr = new XMLHttpRequest();
image_xhr.onload=  function(){
    const formattedResponse=  JSON.parse(this.responseText)   
    for(let item=0;item<formattedResponse.length;item++){
        const imageUrl=formattedResponse[item]["download_url"];
        images.push({imageUrl})
    } 
   

}
image_xhr.open('GET', 'https://picsum.photos/v2/list');
image_xhr.send();

function getRandomImage(images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// let repetitions = 0;
// const numberOfRepetitions = 1;

  
function displayRandomImage() {
    const randomObject = getRandomImage(images);
    console.log(randomObject); 
    imageElement.src=randomObject.imageUrl;
    // repetitions++;
    // if (repetitions === numberOfRepetitions) {
    //     clearInterval(intervalId);
    //     console.log("Interval stopped after", numberOfRepetitions, "repetitions.");
    // }
}

const intervalId = setInterval(displayRandomImage, 30000);

window.addEventListener("DOMContentLoaded", function () {
    const radioButton = document.getElementById("inlineCheckbox1");
    radioButton.checked = true;
});





























  



      




