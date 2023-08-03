//For left Image
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
  setTimeout(reloadImage, 3000);
}
reloadImage();

//For country code
const countrySelect = document.getElementById('country');


function allCountries() {
  const xhr = new XMLHttpRequest();
  const url = 'https://restcountries.com/v3.1/all'; 

  xhr.open('GET', url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const countries = JSON.parse(xhr.responseText);
        countries.forEach(x => {
          const option = document.createElement('option');
          option.text = x.name.common;
          option.value = x.name.common; 
          countrySelect.appendChild(option);
        });
      } else {
        console.error('Error loading countries:', xhr.status, xhr.statusText);
      }
    }
  };

  xhr.send();
}


allCountries();

const countrycodeSelect = document.getElementById('countrycode');

function allCountriescode() {
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


allCountriescode();

let countrysel=document.getElementById("country");
countrysel.addEventListener("change", function(event) {
  n=countrysel.value;
  function university(n) {
    const universities=document.getElementById("university");
    universities.innerHTML="";

    const xhr = new XMLHttpRequest();
    var urll = 'http://universities.hipolabs.com/search?country='+n; 



    xhr.open('GET', urll, true);

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



function validateForm() {
    const firstNameInput = document.getElementById("firstname");
    const lastNameInput = document.getElementById("lastname");
    const emailInput = document.getElementById("email");
    const countrycodeSelect = document.getElementById('countrycode');
    const dobInput = document.getElementById("dob").value;
    const dojInput = document.getElementById("doj").value;
    
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

  