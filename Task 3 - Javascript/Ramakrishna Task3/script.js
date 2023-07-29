console.log("Hello");
function fetchAndDisplayPhoto() {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20",
    true
  );
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const actualdata = JSON.parse(xhr.responseText);
        const numPhotos = actualdata.photos.length;
        const randomIndex = Math.floor(Math.random() * 19);
        const mydata = actualdata.photos[randomIndex].url;
        document.getElementById("buildingImage").src = mydata;
      } else {
        console.log("Error fetching data");
      }
    }
  };
  xhr.send();
}

fetchAndDisplayPhoto();
setInterval(() => {
  fetchAndDisplayPhoto();
}, 25000);

// document.addEventListener("DOMContentLoaded", () => {
//   const countryInput = document.getElementById("countryInput");
//   const suggestionList = document.getElementById("suggestionList");
//   const countries = [];
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "https://restcountries.com/v3.1/all", true);
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       if (xhr.status === 200) {
//         const data = JSON.parse(xhr.responseText);
//         countries.push(...data.map((country) => country.name.common));
//       } else {
//         console.log("Error fetching data");
//       }
//     }
//   };
//   xhr.send();

//   countryInput.addEventListener("input", () => {
//     const inputValue = countryInput.value.toLowerCase();
//     const suggestions = countries.filter((country) =>
//       country.toLowerCase().startsWith(inputValue)
//     );
//     displaySuggestions(suggestions);
//   });

//   function displaySuggestions(suggestions) {
//     if (countryInput.value.trim() === "") {
//       suggestionList.innerHTML = "";
//     } else {
//       const html = suggestions
//         .map((suggestion) => `<li><a href="#">${suggestion}</a></li>`)
//         .join("");
//       suggestionList.innerHTML = html;
//     }
//   }

//   suggestionList.addEventListener("click", (e) => {
//     if (e.target.tagName === "A") {
//       countryInput.value = e.target.textContent;
//       suggestionList.innerHTML = "";
//     }
//   });

//   document.addEventListener("click", (e) => {
//     if (
//       !countryInput.contains(e.target) &&
//       !suggestionList.contains(e.target)
//     ) {
//       suggestionList.innerHTML = "";
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const countrySelect = document.getElementById("countrySelect");
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://restcountries.com/v3.1/all", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        populateSelect(data);
      } else {
        console.log("Error fetching data");
      }
    }
  };
  xhr.send();

  function populateSelect(countriesData) {
    const countries = countriesData.map((country) => country.name.common);
    countries.forEach((country) => {
      const option = document.createElement("option");
      option.text = country;
      countrySelect.add(option);
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let collegeInput = document.querySelector("#collegeInput");
  let collegename = document.querySelector("#collegename");
  function filterColleges(inputText) {
    let filteredColleges = realdata.filter((college) => {
      let collegeName = college.name.toLowerCase();
      return collegeName.includes(inputText);
    });

    let result = filteredColleges
      .map((college) => `<li><a href="#">${college.name}</a></li>`)
      .join("");
    collegename.innerHTML = result;
  }
  let realdata = [];
  fetchColleges();
  function fetchColleges() {
    let countryInput = document.getElementById("countryInput");
    let xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `http://universities.hipolabs.com/search?country=france`,
      true
    );
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          realdata = JSON.parse(xhr.responseText);
        } else {
          console.log("Error fetching data");
        }
      }
    };
    xhr.send();
  }
  collegeInput.addEventListener("input", () => {
    let inputText = collegeInput.value.trim().toLowerCase();
    if (inputText === "") {
      collegename.innerHTML = "";
      return;
    }
    collegename.style.display = "block";
    filterColleges(inputText);
  });
  document.addEventListener("click", (event) => {
    if (event.target !== collegeInput) {
      collegename.style.display = "none";
    }
  });
  collegename.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      collegeInput.value = event.target.innerText;
      collegename.style.display = "none";
    }
  });
});

function validateForm() {
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const emailInput = document.getElementById("exampleInputEmail1");
  const dobInput = document.getElementById("dob");
  const joiningDateInput = document.getElementById("joiningDate");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("conpassword");
  const firstNameError = document.getElementById("firstnameError");
  const lastNameError = document.getElementById("lastnameError");
  const emailError = document.getElementById("email");
  const dobError = document.getElementById("dateofbirth");
  const joiningDateError = document.getElementById("dataofjoining");
  const passwordError = document.getElementById("pass");
  const confirmPasswordError = document.getElementById("repass");
  const phoneNumberInput = document.getElementById("exampleInputPhone");
  document.getElementById("phonenumber").textContent = "";

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();
  const dobValue = dobInput.value;
  const joiningDateValue = joiningDateInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  firstNameError.textContent = "";
  lastNameError.textContent = "";
  emailError.textContent = "";
  dobError.textContent = "";
  joiningDateError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  const alphabeticRegex = /^[A-Za-z]+$/;

  const emailRegex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,25}$/;
  const phoneRegex = /^[0-9]{10}$/;

  if (firstName.length < 2 || firstName.length > 50) {
    firstNameError.textContent = "*Must be between 2 and 50 characters.";
    return false;
  } else if (!alphabeticRegex.test(firstName)) {
    firstNameError.textContent = "*Must contain alphabetic characters only.";
    return false;
  }
  if (lastName.length < 2 || lastName.length > 50) {
    lastNameError.textContent = "*Must be between 2 and 50 characters.";
    return false;
  } else if (!alphabeticRegex.test(lastName)) {
    lastNameError.textContent = "*Must contain alphabetic characters only.";
    return false;
  }

  if (email === "") {
    emailError.textContent = "*Email address cannot be empty.";
    return false;
  } else if (email.length > 100) {
    emailError.textContent = "*Email address exceeds the maximum length.";
    return false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "*Invalid email address format.";
    return false;
  }
  const currentDate = new Date();
  const dob = new Date(dobValue);
  if (dob >= currentDate) {
    dobError.textContent = "*DOB must be in the past.";
    return false;
  }
  const age = currentDate.getFullYear() - dob.getFullYear();
  if (age < 18) {
    dobError.textContent = "* Must be at least 18 years old.";
    return false;
  }
  const joiningDate = new Date(joiningDateValue);
  if (joiningDate <= dob) {
    joiningDateError.textContent = "*DOJ must be after the Date of Birth.";
    return false;
  }
  const ageRestriction = currentDate.getFullYear() - dob.getFullYear();
  if (ageRestriction < 18) {
    joiningDateError.textContent =
      "*Must be at least 18 years old from Date of Birth.";
    return false;
  }
  if (password === "") {
    passwordError.textContent = "*Password cannot be empty.";
    return false;
  } else if (password.length < 5 || password.length > 25) {
    passwordError.textContent =
      "*Password must be between 5 and 25 characters.";
    return false;
  } else if (!passwordRegex.test(password)) {
    passwordError.textContent = "*Invalid password format.";
    return false;
  }
  if (confirmPassword === "") {
    confirmPasswordError.textContent = "*Confirmed password cannot be empty.";
    return false;
  } else if (password !== confirmPassword) {
    confirmPasswordError.textContent = "*Passwords do not match.";
    return false;
  }
  if (!phoneRegex.test(phoneNumberInput.value)) {
    document.getElementById("phonenumber").textContent =
      "*Invalid Phone Number. Please enter a 10-digit numeric number.";
    return false;
  }
  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  let countrycode = document.querySelector("#countrycode");
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://restcountries.com/v2/all", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      let contcode = JSON.parse(xhr.responseText);
      let coding = "";
      contcode.forEach((country) => {
        coding += `<option>+${country.callingCodes}</option>`;
      });
      countrycode.innerHTML = coding;
    } else {
      console.log("Error fetching data");
    }
  };

  xhr.onerror = function () {
    console.log("Error fetching data");
  };
  xhr.send();
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    fetch("https://demo-api-wh0x.onrender.com/register", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  });
});
