const fullName=document.getElementById("name");
const cardNumber=document.getElementById("card-number");
const cvcNumber=document.getElementById("cvc");
const dateFeild=document.getElementById("dateText");
const zipCode=document.getElementById("zip-code");
const formElement=document.getElementById("form");
const formError=document.getElementById("registration-error");
const fullNameError=document.getElementById("full-name-error");
const cardError=document.getElementById("card-error");
const cvcError=document.getElementById("cvc-error");
const zipCodeError=document.getElementById("zip-code-error");
const dollarElement=document.getElementById("dollars");
const cardDateError=document.getElementById("card-date-error");




function checkName(){
    const data=fullName.value; 
    if (data.length < 2 || data.length > 50) {
        fullNameError.textContent="*Minimum length between 2 and 50 characters.";
        return false;
    }
    else if (!/^[A-Za-z]+$/.test(data)) {
        fullNameError.textContent="*Should contain alphabets only.";
        return false;
       
    }
    else if (data !== data.charAt(0).toUpperCase() + data.slice(1).toLowerCase()) {
        fullNameError.textContent="*First letter should be capital";   
        return false;
        
    }
    else{
        fullNameError.textContent=""
        return true;
    }  
}

function checkCard(){
    const  data=cardNumber.value
    if (!data) {
        cardError.textContent="*Card number cannot be empty";
        return false;
    }
    else if (data.length!==10) {
        cvcError.textContent="* Card number should contain 10 digits only";
        return false;
    }
   
    else if (!/^[0-9]+$/.test(data)) {
        cardError.textContent="*Card number should contain numbers only.";
        return false;
    }
    else{
        cardError.textContent = "";
        return true;
    }
    
}

function checkCvc(){
    const  data=cvcNumber.value
    if (!data) {
        cvcError.textContent="*CVC number cannot be empty";
        return false;
    }
    else if (data.length>4 || data.length<3) {
        cardError.textContent="*CVC number should contain 3 or 4 digits";
        return false;
    }
    else if (!/^[0-9]+$/.test(data)) {
        cvcError.textContent="*CVC number should contain numbers only.";
       
        return false;
    }
    else{
        cvcError.textContent = "";  
        return true;
    }
}

function checkZipCode(){
    const  data=zipCode.value
    if (!data) {
        zipCodeError.textContent="*ZipCode cannot be empty";
        return false;
    }
    else if (data.length<6) {
        zipCodeError.textContent="*ZipCode should contain atleast 5 digits";
        return false;
    }
    else if (!/^[0-9]+$/.test(data)) {
        zipCodeError.textContent="*Zip Code should contain numbers only.";   
        return false;
    }
    else{
        zipCodeError.textContent = "";
       
        return true;
    }
}

function checkCardDate(){
    const data=new Date(dateFeild.value)
    if (isNaN(data)) {
        cardDateError.textContent="*Date cannot be empty";
        return false;
    }
    else{
        cardDateError.textContent="";
        return true;
    }

}



formElement.addEventListener("submit",function(event){
    event.preventDefault();
    const checkNameInput=checkName();
    const checkCardInput=checkCard();
    const checkCvcInput=checkCvc();
    const checkzipCodeInput=checkZipCode();
    const cardDateInput=checkCardDate()
    if(checkCardInput===true && checkCardInput===true && checkCardInput===true && checkzipCodeInput===true){
        formError.textContent="Payemnt Successful"
    }
    else{
        formError.textContent="please fill the details";
    }
  
});

//random quote 

function getQuote(data){
    const {quotes}=data;
    const totalQuotes=quotes.length;
    const randomIndex=Math.floor(Math.random()*totalQuotes);
    const {quote}=quotes[randomIndex];
    $('#random-quote').text(quote);
}

$.get('https://dummyjson.com/quotes',getQuote)

//plan update



$('#first-plan').bind("click",function(){
    const textValue=$('#first-plan-number').text()
    dollarElement.textContent='$'+textValue;
})

$('#second-plan').bind("click",function(){
    const textValue=$('#second-plan-number').text()
    dollarElement.textContent='$'+textValue;
})

$('#third-plan').bind("click",function(){
    const textValue=$('#third-plan-number').text()
    dollarElement.textContent='$'+textValue;
})