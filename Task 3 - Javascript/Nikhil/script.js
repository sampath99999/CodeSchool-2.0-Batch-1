
 
 function getRandomImage() {
            const  accessKey = 'Gy0Yct5StIMA-dinnVzIVS2DSORuDnfFQPa8uCAO3YE';
            const endpoint = 'https://api.unsplash.com/photos/random';
            const headers = {
                'Authorization': `Client-ID ${accessKey}`
            };

            const xhr = new XMLHttpRequest();
            xhr.open('GET', endpoint, true);
            for (const header in headers) {
                xhr.setRequestHeader(header, headers[header]);
            }

            xhr.onload = function () {
                if(xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    const randomImageURL = data.urls.regular;
                    const randomImageElement = document.getElementById('randomImage');
                    randomImageElement.src = randomImageURL;
                } else {
                    console.error('Error fetching random image:', xhr.status);
                }
            };

            xhr.onerror = function () {
                console.error('Network error occurred while fetching the random image.');
            };

            xhr.send();
        }

        function changeImageEvery30Seconds() {
            getRandomImage(); // Load an image immediately when the page loads.
            setInterval(getRandomImage, 30000); // Change image every 30 seconds (30,000 milliseconds).
        }

        changeImageEvery30Seconds();
        const firstNameInput = document.getElementById('firstName');
        const firstNameError = document.getElementById('firstNameError');
        const nameRegex = /^[A-Z][a-zA-Z]*(?: [A-Z][a-zA-Z]*)*$/;

        firstNameInput.addEventListener('input', function() {
            const firstNameValue = firstNameInput.value.trim();

            if (firstNameValue === '') {
                firstNameError.textContent = 'Please enter your first name.';
                firstNameError.style.display = 'block';
            } else if (!nameRegex.test(firstNameValue)) {
                firstNameError.textContent = 'Invalid first name. The first letter must be a capital letter, and only letters and spaces are allowed.';
                firstNameError.style.display = 'block';
            } else if (firstNameValue.length < 2 || firstNameValue.length > 50) {
                firstNameError.textContent = 'First name must be between 2 and 50 characters.';
                firstNameError.style.display = 'block';
            } else {
                firstNameError.style.display = 'none';
            }
            
        });
        const LastNameInput = document.getElementById('lastName');
        const lastNameError = document.getElementById('lastNameError');
        const NameRegex = /^[A-Z][a-zA-Z]*(?: [A-Z][a-zA-Z]*)*$/;

        LastNameInput.addEventListener('input', function() {
            const lastNameValue = LastNameInput.value.trim();

            if (lastNameValue === '') {
                lastNameError.textContent = 'Please enter your Last name.';
                lastNameError.style.display = 'block';
            } else if (!nameRegex.test(lastNameValue)) {
                lastNameError.textContent = 'Invalid last name. The first letter must be a capital letter, and only letters and spaces are allowed.';
                lastNameError.style.display = 'block';
            } else if (lastNameValue.length < 2 || lastNameValue.length > 50) {
                lastNameError.textContent = 'First name must be between 2 and 50 characters.';
                lastNameError.style.display = 'block';
            } else {
                lastNameError.style.display = 'none';
            }
            
        });

      
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[a-zA-Z0-9_%+-]+@[a-zA-Z]+\.[a-zA-Z]{3,3}$/;

        emailInput.addEventListener('input', function() {
            const emailValue = emailInput.value.trim();

            if (emailValue === '') {
                emailError.textContent = 'Please enter your email address.';
                emailError.style.display = 'block';
            } else if (emailValue.length > 100) {
                emailError.textContent = 'Email address is too long.';
                emailError.style.display = 'block';
            } else if (!emailRegex.test(emailValue)) {
                emailError.textContent = 'Invalid email address. Please enter a valid email.';
                emailError.style.display = 'block';
            } else {
                emailError.style.display = 'none';
            }
        });
        const countrySelect = document.getElementById('countrySelect');
        const xhr = new XMLHttpRequest();
        const url = 'https://restcountries.com/v2/all';

        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    data.forEach(country => {
                        const option = document.createElement('option');
                        option.value = country.name;
                        option.textContent = country.name;
                        countrySelect.appendChild(option);
                    });
                    
                } else {
                    console.error('Error fetching countries:', xhr.status);
                }
            }
        };
        xhr.send();
        

        const apiUrl = 'https://restcountries.com/v2/all';

    const xh = new XMLHttpRequest();
    xh.open('GET', apiUrl, true);
    xh.onload = function () {
      if (xh.status >= 200 && xh.status < 300) {
        const data = JSON.parse(xh.responseText);
        // Call the function to create the select box here
        createCountrySelectBox(data);
      } else {
        console.error('Error fetching data:', xh.status, xh.statusText);
      }
    };
    xh.onerror = function () {
      console.error('Network error occurred.');
    };
    xh.send();

    function createCountrySelectBox(countries) {
      const selectBox = document.getElementById('country-select');

      countries.forEach((country) => {
        const option = document.createElement('option');
        option.value = country.callingCodes[0];
        option.text = `${country.name} (+${country.callingCodes[0]})`;
        selectBox.appendChild(option);
      });
    }
    const phoneNumberInput = document.getElementById("phoneNumber");
    const phoneNumberError = document.getElementById("phoneNumberError");
    const phonePattern = /^\d{10}$/;
    phoneNumberInput.addEventListener("input", function() {
        const phoneNumberValue = phoneNumberInput.value.trim();
  
        if (phoneNumberValue === '') {
          phoneNumberError.textContent = 'Please enter your phone number.';
          phoneNumberError.style.display = 'block';
        } else if (!phonePattern.test(phoneNumberValue)) {
          phoneNumberError.textContent = 'Invalid phone number. Please enter a 10-digit number.';
          phoneNumberError.style.display = 'block';
        } else {
          phoneNumberError.style.display = 'none';
        }
      });
      const dobInput = document.getElementById("dob");
      const dojInput = document.getElementById("doj");
      const dobError = document.getElementById("dobError");
      const dojError = document.getElementById("dojError");
  
      dobInput.addEventListener("input", function() {
        const dobValue = new Date(dobInput.value);
        const currentDate = new Date();
        const ageDifference = currentDate.getFullYear() - dobValue.getFullYear();
  
        if (ageDifference < 18) {
          dobError.textContent = 'You must be 18 years old or older.';
          dobError.style.display = 'block';
        } else {
          dobError.style.display = 'none';
        }
      });
  
      dojInput.addEventListener("input", function() {
        const dobValue = new Date(dobInput.value);
        const dojValue = new Date(dojInput.value);
  
        if (dojValue <= dobValue) {
          dojError.textContent = 'Date of joining must be after the date of birth.';
          dojError.style.display = 'block';
        } else {
          dojError.style.display = 'none';
        }
      });
  
      const genderRadios = document.getElementsByName('gender');

      // Add an event listener to each radio button
      // genderRadios.forEach(radio => {
      //     radio.addEventListener('input', function() {
      //         validateForm();
      //     });
      // });

     
      
      //     let selectedGender = false;

      //     // Check if one of the radio buttons is selected
      //     for (let i = 0; i < genderRadios.length; i++) {
      //         if (genderRadios[i].checked) {
      //             selectedGender = true;
      //             break;
      //         }
      //     }

          // Display error if no gender is selected
          // const genderError = document.getElementById('genderError');
          // if (!selectedGender) {
          //     genderError.textContent = 'Please select your gender.';
          //     genderError.style.display = 'block';
          // } else {
          //     genderError.style.display = 'none';
          // }
      

     
      // form.addEventListener('submit', function(event) {
      //     // Prevent the default form submission if the validation fails
      //     if (!validateForm()) {
      //         event.preventDefault();
      //     }
      // });


      const passwordInput = document.getElementById("password");
      const confirmPasswordInput = document.getElementById("confirmPassword");
      const passwordError = document.getElementById("passwordError");

      // Add event listeners to password fields for real-time validation
      passwordInput.addEventListener("input", function() {
          validatePassword();
      });

      confirmPasswordInput.addEventListener("input", function() {
          validatePassword();
      });

      function validatePassword() {
          const passwordValue = passwordInput.value;
          const confirmPasswordValue = confirmPasswordInput.value;

          // Regular expressions for validation
          const lengthPattern = /^.{5,25}$/;
          const uppercasePattern = /[A-Z]/;
          const lowercasePattern = /[a-z]/;
          const numberPattern = /\d/;
          const specialCharacterPattern = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

          let errorMessage = "";

          // Check if password and confirm password match
          if (passwordValue !== confirmPasswordValue) {
              errorMessage += "Passwords do not match.\n";
          }

          // Check for length, uppercase, lowercase, number, and special character requirements
          if (!lengthPattern.test(passwordValue)) {
              errorMessage += "Password must be between 5 and 25 characters.\n";
          }

          if (!uppercasePattern.test(passwordValue)) {
              errorMessage += "Password must contain at least one uppercase letter.\n";
          }

          if (!lowercasePattern.test(passwordValue)) {
              errorMessage += "Password must contain at least one lowercase letter.\n";
          }

          if (!numberPattern.test(passwordValue)) {
              errorMessage += "Password must contain at least one number.\n";
          }

          if (!specialCharacterPattern.test(passwordValue)) {
              errorMessage += "Password must contain at least one special character (e.g., !, @, #, $, %, etc.).\n";
          }

          // Display the error message if there are any validation issues
          if (errorMessage !== "") {
              passwordError.textContent = errorMessage;
              passwordError.style.display = "block";
          } else {
              // Password is valid
              passwordError.style.display = "none";
          }
      }

      function fetchUniversities() {
        const selectBox = document.getElementById('country-select');
        const apiiUrl = `http://universities.hipolabs.com/search?country=india`;
        const xhrr = new XMLHttpRequest();

        xhrr.onreadystatechange = function() {
            if (xhrr.readyState === 4) {
                if (xhrr.status === 200) {
                    const data = JSON.parse(xhrr.responseText);
                    populateSelectBox(data);
                } else {
                    console.error("Error fetching data:", xhrr.status);
                }
            }
        };

        xhrr.open("GET", apiiUrl, true);
        xhrr.send();
    }

    // Function to populate the select box with university data
    function populateSelectBox(data) {
        const universitySelect = document.getElementById("universitySelect");

        // Loop through the data and create option elements for each university
        data.forEach(university => {
            const option = document.createElement("option");
            option.value = university.name;
            option.textContent = university.name;
            universitySelect.appendChild(option);
        });
    }

    // Call the function to fetch university data when the page loads
    fetchUniversities();

    const signUpButton = document.getElementById("signUpButton");
        signUpButton.addEventListener("click", function() {
            signUp();
        });

        function signUp() {
            const apiUrl = "https://demo-api-wh0x.onrender.com/register";
            const username = document.getElementById("firstName").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
                resultDiv.innerHTML="Sucess"
            const userData = {
                username: username,
                email: email,
                password: password
            };

            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            })
            .then(response => response.json())
            .then(data => {
                const resultDiv = document.getElementById("result");
                resultDiv.textContent = JSON.stringify(data, null, 2);
                resultDiv.style.display = "block";
            })
            .catch(error => console.error("Error signing up:", error));
        }