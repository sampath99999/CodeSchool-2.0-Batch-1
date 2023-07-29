
function LoadProducts(id){
    fetch(`http://fakestoreapi.com/products/${id}`)
    .then(response=>response.json())
    .then(data=>{
        document.getElementById("pic").src= data.image;
    })
}
var ProductId = 1;
function SlideShow(){
    ProductId++;
    LoadProducts(ProductId);
}
var show;

    show = setInterval(SlideShow, 3000);

function divload(){
    LoadProducts(1);
}

function validateForm() {
    const firstNameInput = document.getElementById("firstname");
    const lastNameInput = document.getElementById("lastname");
    const emailInput = document.getElementById("email");
    const dobInput = document.getElementById("dob").value;
    const dojInput = document.getElementById("doj").value;
    const selectBox = document.getElementById("countries");
    const passwordInput = document.getElementById("password");
    const cpasswordInput = document.getElementById("cpassword");

    // Regular expressions for first name and last name validation
    const nameRegex = /^[A-Z][a-z]{1,49}$/;

    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    function isPastDate(date) {
        const today = new Date();
        return new Date(date) < today;
      }
      
      function isAdult(dateOfBirth) {
        const eighteenYearsAgo = new Date();
        eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
        return new Date(dateOfBirth) <= eighteenYearsAgo;
      }
      
      function isValidDOJ(dob, doj) {
        const eighteenYearsAfterDOB = new Date(dob);
        eighteenYearsAfterDOB.setFullYear(eighteenYearsAfterDOB.getFullYear() + 18);
        return new Date(doj) >= eighteenYearsAfterDOB;
      }

    // Password Validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,25}$/;

    if (!nameRegex.test(firstNameInput.value)) {
       // alert("First name must be 2-50 characters long, alphabetic characters only, and start with a capital letter.");
       document.getElementById("firstnameerr").innerHTML="Enter your First name Correctly";
       return false;
    }

    if (!nameRegex.test(lastNameInput.value)) {
        //alert("Last name must be 2-50 characters long, alphabetic characters only, and start with a capital letter.");
        document.getElementById("lastnameerr").innerHTML="Enter your last name Correctly";
        return false;
    }

    if (!emailRegex.test(emailInput.value)) {
        //alert("Invalid email format.");
        document.getElementById("emailerr").innerHTML="Enter your Email Correctly";
        return false;
    }


    if (!isPastDate(dobInput) || !isAdult(dobInput)) {
       // alert("Invalid Date of Birth. Date of Birth should be in the past and the person must be 18 years or older.");
        document.getElementById("doberr").innerHTML="You Should be 18 Years old";
        return;
      }
    
      if (!isValidDOJ(dobInput, dojInput)) {
        //alert("Invalid Date of Joining. Date of Joining should be after the Date of Birth and the person must be at least 18 years old.");
        document.getElementById("dojerr").innerHTML="You Should be 18 Years old";
        return;
      }

    if (!passwordRegex.test(passwordInput.value)) {
        document.getElementById("pswerr").innerHTML="Enter your Password Correctly";
        return false;
        }
        if (!passwordRegex.test(cpasswordInput.value)) {
            document.getElementById("cpswerr").innerHTML="Enter your Confirm Password Correctly";
            return false;
            }
    return true;
}
function myFunction() {
    document.getElementById("myForm").reset();
  }

  