// function validateForm() {
//     // e.preventDefault();
//     var firstname = document.getElementById("fname").value;
//     var lastname = document.getElementById("lname").value;
//     // Reset error messages
//     console.log(firstname);
//     console.log("abd");

    
//     console.log(lastname);
//     document.getElementById("fname-error").innerHTML = "";
//     document.getElementById("lname-error").innerHTML = "";

//     // Check if password and confirm password match
//     if (firstname.length<5) {
//         document.getElementById("fname-error").innerHTML = "Passwords do not match. Please re-enter.";
        
//         return false; // Prevent form submission
//       }
//       return true; // Allow form submission

// }



//------------------------------------------------------------------------------------------

// function validateForm() {
//   const firstNameInput = document.getElementById('fname');
//   const lastNameInput = document.getElementById('lname');
//   const emailInput = document.getElementById('email')


//   const fname = firstNameInput.value.trim();
//   const lname = lastNameInput.value.trim();
//   const email = emailInput.value.trim();


//   document.getElementById("fname-error").innerHTML = "";

//   //   document.getElementById("lname-error").innerHTML = " ";

//   // Regular expression pattern to match only letters, spaces, hyphens, and apostrophes
//   const nameRegex = /^[a-zA-Z'-\s]+$/;
//   const titleCaseRegex = /^[A-Z][a-z]*$/;


//   if (!nameRegex.test(fname)) {
//     alert("Please enter a valid first name.");
//     document.getElementById("fname-error").innerHTML = "*Alphabet only"
//     firstNameInput.focus();
//     return false;
    
//   }

//   if (!titleCaseRegex.test(fname)) {
//    alert("Please enter a valid first name.");
//     document.getElementById("fname-error").innerHTML = "*Title case only"
//     firstNameInput.focus();
//     return false;
    
//   }


//   if (fname.length<2 || fname.length>50 ) {
//     // alert("Please enter a valid first name.");
//     document.getElementById("fname-error").innerHTML = "*min 2 and and max 50 characters"
//     firstNameInput.focus();
//     return false;
    
//   }

//   if (!nameRegex.test(lname)) {
//    // alert("Please enter a valid last name.");
//     document.getElementById("lname-error").innerHTML = "*Alphabet only"
//     lastNameInput.focus();
//     return false;
    
//   }

//   if (!titleCaseRegex.test(lname)) {
//     // alert("Please enter a valid first name.");
//     document.getElementById("lname-error").innerHTML = "*Title case only"
//     lastNameInput.focus();
//     return false;
    
//   }
  
  
//   if (lname.length<2 || lname.length>50) {
//     // alert("Please enter a valid last name.");
//     document.getElementById("lname-error").innerHTML = "please enter the last name."
//     lastNameInput.focus();
//     return false;
//   }
  
//   if (email.length<15 || email.length>50 ) {
//     // alert("Please enter a valid first name.");
//     document.getElementById("emailerror").innerHTML = "*min 2 and and max 50 characters"
//     emailInput.focus();
//     return false;
    
//   }


//   return true;
// }

//-----------------------------------------------------------------


// ====================       MAIN VALIDATION     =============================================

const form = document.getElementById("myform");
const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
const emailInput = document.getElementById("email");
const mobileNumberInput = document.getElementById("phone");
const passwordInput = document.getElementById("pwd");
const confirmPasswordInput = document.getElementById("cpwd");
const genderInputs = document.querySelectorAll('input[name="Gender"]');
const dobInput = document.getElementById("dob");
const dojInput = document.getElementById("doj");
const countryInput = document.getElementById("country");
const universityInput = document.getElementById("university");
const agreementCheckbox = document.getElementById("agreement");



const firstNameError = document.getElementById("fname-error");
const lastNameError = document.getElementById("lname-error");
const emailError = document.getElementById("emailerror");
const mobileNumberError = document.getElementById("phoneerror");
const passwordError = document.getElementById("pwd-error");
const confirmPasswordError = document.getElementById("cpwd-error");
const genderError = document.getElementById("genderError");
const dobError = document.getElementById("dobError");
const dojError = document.getElementById("dojError");
const countryError = document.getElementById("countryError");
const universityError = document.getElementById("universityError");
const agreementError = document.getElementById("agreementError");




form.addEventListener("submit", function (event) {
  event.preventDefault();

  if(!validateName2(firstNameInput.value.trim())) {
    firstNameError.innerText = "*name should have min 2 .";
  } 
  else if (!validateName(firstNameInput.value.trim())) {
    firstNameError.innerText = "*Please enter a valid name.";

  }
  else {
    firstNameError.innerText = "";
  }

  

  

  // if (!validateName(lastNameInput.value.trim())) {
  //   lastNameError.innerText = "Last Name is required.";
  // } else {
  //   lastNameError.innerText = "";
  // }

  if (!validateEmail(emailInput.value.trim())) {
    emailError.innerText = "*Please enter a valid email address.";
  } 
  else {
    emailError.innerText = "";
  }

  if (!validateMobileNumber(mobileNumberInput.value.trim())) {
    mobileNumberError.innerText = "*Please enter a valid mobile number.";
  } else {
    mobileNumberError.innerText = "";
  }

  if (!validatepassword5(passwordInput.value.trim())) {
    passwordError.innerText = "*Password must be at least 5 characters long.";
  }

  else if(!validatePassword(passwordInput.value.trim())){
    passwordError.innerText = "*Password must have atleast one charecter one speacial case and number.";

  }
   else {
    passwordError.innerText = "";
  }

  if (!confirmPassword(confirmPasswordInput.value.trim(), passwordInput.value.trim())) {
    confirmPasswordError.innerText = "*Passwords do not match.";
  } else {
    confirmPasswordError.innerText = "";
  }

  if (!validateGender()) {
    genderError.innerText = "*Please select a gender.";
  } else {
    genderError.innerText = "";
  }

  if (!validateDate(dobInput.value.trim())) {
    dobError.innerText = "*Please enter a valid date of birth.";
  }
  
  else {
    dobError.innerText = "";
  }

  if (!validateDate(dojInput.value.trim())) {
    dojError.innerText = "Please enter a valid date of joining.";
  } else {
    dojError.innerText = "";
  }

  if (!validateDateOfBirth(dobInput.value.trim())) {
    dobError.innerText = "Date of birth should be greater than 18 years ago.";
  } else {
    dobError.innerText = "";
  }


  if (!validateDateOfJoining(dojInput.value.trim(), dobInput.value.trim())) {
    dojError.innerText = "Date of joining should be after the date of birth.";
  } else {
    dojError.innerText = "";
  }

  if (!validateAgeRestriction(dobInput.value.trim())) {
    dobError.innerText = "Age must be at least 18 years from the date of birth.";
  } else {
    dobError.innerText = "";
  }


  if (!validateAgreement(agreementCheckbox.checked)) {
    agreementError.innerText = "*Please agree to the terms and conditions.";
  } else {
    agreementError.innerText = "";
  }


  if (!validateCountry(countryInput.value.trim())) {
    countryError.innerText = "*Please select a country.";
  } else {
    countryError.innerText = "";
  }

  if (!validateUniversity(universityInput.value.trim())) {
    universityError.innerText = "*University name is required.";
  } else {
    universityError.innerText = "";
  }



  if (
    validateName(firstNameInput.value.trim()) &&
    validateName(lastNameInput.value.trim()) &&
    validateEmail(emailInput.value.trim()) &&
    validateMobileNumber(mobileNumberInput.value.trim()) &&
    validatePassword(passwordInput.value.trim()) &&
    confirmPassword(confirmPasswordInput.value.trim(), passwordInput.value.trim()) && validateDate(dobInput.value.trim()) &&
    validateDate(dojInput.value.trim()) &&
    validateGender() &&
    validateCountry(countryInput.value.trim()) &&
    validateUniversity(universityInput.value.trim()) &&
    validateAgreement(agreementCheckbox.checked)
  ) {
    // Form is valid, you can submit the form here or perform any other action
    alert("Form submitted successfully!");
    // form.submit(); // Uncomment this line to submit the form to the server
  }
});


function validateName(name) {
  const titleCaseRegex = /^[A-Z][a-z]*$/;
  const name2= name.length>2

   return titleCaseRegex.test(name);
  
}

function validateName2(name) {
  const name2= name.length>2
  return name2 ;
  
}

// const name2= name.length>2

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateMobileNumber(mobileNumber) {
  const mobileNumberRegex = /^\d{10}$/;
  return mobileNumberRegex.test(mobileNumber);
}

function validatepassword5(password){
  const pass1 =password.length>5;
  return pass1;
}

function validatePassword(password) {
 var pass =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{1,20}$/ ;
  return pass.test(password);
}





function confirmPassword(confirmPassword, password) {
  return confirmPassword === password;
}

function validateGender() {
  return [...genderInputs].some(input => input.checked);
}

function validateDate(date) {
  return !isNaN(Date.parse(date));
}



function validateDateOfBirth(dob) {
  const dobDate = new Date(dob);
  const currentDate = new Date();
  const minAge = 18;

  // Calculate the date 18 years ago from the current date
  const minDate = new Date(currentDate.getFullYear() - minAge, currentDate.getMonth(), currentDate.getDate());

  return dobDate < minDate;
}


function validateDateOfJoining(doj, dob) {
  const dojDate = new Date(doj);
  const dobDate = new Date(dob);

  return dojDate > dobDate;
}

function validateAgeRestriction(dob) {
  const dobDate = new Date(dob);
  const currentDate = new Date();
  const minAge = 18;

  // Calculate the date 18 years ago from the current date
  const minDate = new Date(currentDate.getFullYear() - minAge, currentDate.getMonth(), currentDate.getDate());

  return dobDate <= minDate;
}




function validateAgreement(agreementChecked) {
  return agreementChecked;
}

function validateCountry(country) {
  return country.length > 0;
}

function validateUniversity(university) {
  return university.length > 0;
}







//=====================================================================

console.log("abdullah");
console.log("abdullah");

function fetchCountryList() {
  const url = "https://restcountries.com/v3.1/all";

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const countrySelect = document.getElementById("country");
      
      data.forEach(country => {
        const option = document.createElement("option");
        option.value = country.name.common;
        option.textContent = country.name.common;
        countrySelect.appendChild(option);
      });
    } else if (xhr.readyState === 4) {
      console.error("Error fetching country data.");
    }
  };

  xhr.send();
}

// Call the function to populate the select input when the page loads
window.onload = function() {
  fetchCountryList();
};



function fetchphonecode() {
  const url = "https://restcountries.com/v3.1/all";

  const xhr1 = new XMLHttpRequest();
  xhr1.open("GET", url, true);

  xhr1.onreadystatechange = function() {
    if (xhr1.readyState === 4 && xhr1.status === 200) {
      const data1 = JSON.parse(xhr1.responseText);
      const phonecodeselect = document.getElementById("phonecode");
      
      data1.forEach(phonecode => {
        const option1 = document.createElement("option");
        option1.value = phonecode.idd.root;
        option1.textContent = phonecode.idd.root;
        phonecodeselect.appendChild(option1);
      });
    } else if (xhr1.readyState === 4) {
      console.error("Error fetching country data.");
    }
  };

  xhr1.send();
}

// Call the function to populate the select input when the page loads
window.onload = function() {
  fetchphonecode();
};




// Example: Image carousel that changes images every 30 seconds
const images = [
  "https://png.pngtree.com/background/20220722/original/pngtree-planes-flying-over-buildings-picture-image_1714859.jpg",
  "https://media.istockphoto.com/id/1440711628/photo/copenhagen-denmark.webp?b=1&s=612x612&w=0&k=20&c=1evENE9IbiTW5tGs6gfqr0megCa3ix5Tih8B9Djj0Tk=",
  "https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667_640.jpg",
  "https://cdn.pixabay.com/photo/2017/06/30/19/52/apocalypse-2459465_640.jpg",
  "https://cdn.pixabay.com/photo/2017/07/02/16/33/church-2464899_640.jpg",
  "https://cdn.pixabay.com/photo/2018/11/22/23/57/london-3833039_640.jpg",
  "https://cdn.pixabay.com/photo/2018/02/04/21/13/monastery-3130879_640.jpg",
  "https://cdn.pixabay.com/photo/2015/07/10/15/13/building-839362_640.jpg",
  "https://cdn.pixabay.com/photo/2016/08/16/17/20/elevators-1598431_640.jpg"

  // Add more image URLs here
];
let currentIndex = 0;
const imagePlaceholder = document.getElementById("imagePlaceholder");

function changeImage() {
  imagePlaceholder.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}
setInterval(changeImage, 30000);



// calling API for phone code


// function fetchphonecode() {
//   const url1 = "https://restcountries.com/v3.1/all";

//   const xhr1 = new XMLHttpRequest();
//   xhr1.open("GET", url1, true);

//   xhr1.onreadystatechange = function() {
//     if (xhr1.readyState === 4 && xhr1.status === 200) {
//       const data1 = JSON.parse(xhr1.responseText);
//       const phonecode = document.getElementById("phonecode");
      
//       data1.forEach(phonecode => {
//         const option1 = document.createElement("option");
//         option1.value = phonecode.name.common;
//         option1.textContent = phonecode.name.common;
//         phonecode.appendChild(option1);
//       });
//     } else if (xhr1.readyState === 4) {
//       console.error("Error fetching country data.");
//     }
//   };

//   xhr1.send();
// }

// // Call the function to populate the select input when the page loads
// window.onload = function() {
//   fetchphonecode();
// };



