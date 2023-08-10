    const apiurl1="https://type.fit/api/quotes";
    $.get(apiurl1, function (data) {
        data = JSON.parse(data);
        const random = getRandomIndices(data.length, 1);
        const articles = data[random];
        console.log(articles.text)
        const imagedivison=$("#mainImage");
        const quotes=$("<div>").text(articles.text);
        quotes.addClass("quotesclass");
        imagedivison.append(quotes);

    
    });

    function getRandomIndices(max, count) {
        const indices = [];
        while (indices.length < count) {
        const randomIndex = Math.floor(Math.random() * max);
        if (!indices.includes(randomIndex)) {
            indices.push(randomIndex);
        }
        }
        return indices;
    }





    var data = 'https://api-ninjas.com';
    var category = 'nature';

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/randomimage?category=' + category,
        headers: { 'X-Api-Key': 'kQvClA7MeHuBC/w77i3uNg==YymwwnWpt4Po748s', 'Accept': 'image/jpg' },
        success: function() {
            const imageContainer = $("#mainImage");
            imageUrl = "https://random.imagecdn.app/500/150";
            imageContainer.css({
                "background-image": "url(" + imageUrl + ")",
                "background-repeat": "no-repeat",
                "background-size": "cover",
            });
        },
        error: function(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });




    function userEmailValidation(){
        const emailIDElement = $("#emailInput");
        const feedback = $("#email-feedback");
        
        if(emailIDElement.val().length !== 0 && emailIDElement.val().length <= 50){
            // No Consecutive Dots: Avoid ".." in the local part.
            const consecutiveDotsRegExp = /\.\./;
            if(!emailIDElement.val().match(consecutiveDotsRegExp)){
                // Domain Name: Valid domain after "@" symbol.
                const domainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                const parts = emailIDElement.val().split("@");
                const domain = parts[1];
                if(domainPattern.test(domain)){
                    // Valid Characters: Limit to alphanumeric, period, underscore, and hyphen.
                    const pattern = /^[A-Za-z0-9.@_-]+$/;
                    if(pattern.test(emailIDElement.val())){
                        emailIDElement.removeClass("is-invalid");
                        emailIDElement.addClass("is-valid");
                        feedback.html("");
                        return true;
                    }
                    else{
                        emailIDElement.removeClass("is-valid");
                        emailIDElement.addClass("is-invalid");
                        feedback.html("Only valid characters i.e, A-Za-z0-9.-_ and no spaces");
                        return false;
                    }
                }
                else{
                    emailIDElement.removeClass("is-valid");
                    emailIDElement.addClass("is-invalid");
                    feedback.html("Domain is invalid!");
                    return false;
                }
            }
            else{
                emailIDElement.removeClass("is-valid");
                emailIDElement.addClass("is-invalid");
                feedback.html("No two consecutive dots i.e, ..");
                return false;
            }
        }
        else{
            emailIDElement.removeClass("is-valid");
            emailIDElement.addClass("is-invalid");
            feedback.html("Email should be a valid length");
            return false;
        }
    }
    function validateUsername() {
        var username = $('#usernameInput').val();
        var validationMessage = $('#usernameValidationMessage');

        if (username.length < 3) {
            validationMessage.text('Username must be at least 3 characters long.');
            validationMessage.css('color', 'red');
            return false;
        } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
            validationMessage.text('Username can only contain letters and numbers.');
            validationMessage.css('color', 'red');
            return false;
        } else {
            validationMessage.text('Username is valid.');
            validationMessage.css('color', 'green');
            return true;
        }
    }

    function phoneNumberValidation(){
        const numberValidateElement = $("#phoneInput");
        const feedback = $("#phoneNo-feedback");
        if(numberValidateElement.val().length == 10){
            let numericRegExp = /^[0-9]+$/;
            if (numericRegExp.test(numberValidateElement.val())){
                numberValidateElement.removeClass("is-invalid");
                numberValidateElement.addClass("is-valid");
                feedback.html("");
                return true;
            }
            else{   
                numberValidateElement.removeClass("is-valid");
                numberValidateElement.addClass("is-invalid");
                feedback.html("Number should not contain any symbols or characters other than numbers");
                return false;
            }
        }
        else{
            numberValidateElement.removeClass("is-valid");
            numberValidateElement.addClass("is-invalid");
            feedback.html("Phone number should be a 10-digit number");
            return false;
        }
    }
    function passwordValidation(){
        const userPassword = $("#passwordInput");
        const feedback = $("#pwd-feedback");
        if(userPassword.val().length >= 5 && userPassword.val().length <= 25){
            let strongPasswordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
            if(strongPasswordRegExp.test(userPassword.val())){
                let noConsecutivesRegExp = /^(?!.*(.)\1)(?!.*(\d)\2).+$/;
                if(noConsecutivesRegExp.test(userPassword.val())){
                    userPassword.removeClass("is-invalid");
                    userPassword.addClass("is-valid");
                    feedback.html("");
                    return true;
                }
                else{
                    userPassword.removeClass("is-valid");
                    userPassword.addClass("is-invalid");
                    feedback.html("Password should not contain consecutive characters '00' 'aa'");
                    return false;
                }
            }
            else{
                userPassword.removeClass("is-valid");
                userPassword.addClass("is-invalid");
                feedback.html("Password should contain one A-Z, one a-z, one 0-9 and one special character (e.g., !, @, #, $, %, etc.) and no spaces");
                return false;
            }
        }
        else{
            userPassword.removeClass("is-valid");
            userPassword.addClass("is-invalid");
            feedback.html("Password length should be min 5 and max 25");
            return false;
        }
    }

    // Function to confirm Password
    function confirmPassword(userPassword){
        const confirmPassword = document.getElementById("confirmPasswordInput");
        if(userPassword === confirmPassword.value){
            confirmPassword.classList.remove("is-invalid");
            confirmPassword.classList.add("is-valid");
            return true;
        }
        else{
            confirmPassword.classList.remove("is-valid");
            confirmPassword.classList.add("is-invalid");
            document.getElementById("confirmPwd-feedback").innerHTML = "Password does not match"
            return false;
        }
    }
    function validateDOB() {
        var dob = $('#dob').val();
        var dobDate = new Date(dob);
        var currentDate = new Date();
        var minAge = 18;

        if (isNaN(dobDate)) {
            $('#dobError').text('Please enter a valid date of birth.');
            return false;
        } else {
            var age = currentDate.getFullYear() - dobDate.getFullYear();
            if (currentDate.getMonth() < dobDate.getMonth() ||
                (currentDate.getMonth() === dobDate.getMonth() && currentDate.getDate() < dobDate.getDate())) {
                age--;
            }

            if (age < minAge) {
                $('#dobError').text('You must be at least 18 years old.');
                return false;
            } else {
                $('#dobError').text('');
                return true;
            }
        }
    }
    $(document).ready(function() {
        $('#dob').on('blur', function() {
            validateDOB();
        });

        function validateDOB() {
            var dob = $('#dob').val();
            var dobDate = new Date(dob);
            var currentDate = new Date();
            var minAge = 18;

            if (isNaN(dobDate)) {
                $('#dobError').text('Please enter a valid date of birth.');
                return false;
            } else {
                var age = currentDate.getFullYear() - dobDate.getFullYear();
                if (currentDate.getMonth() < dobDate.getMonth() ||
                    (currentDate.getMonth() === dobDate.getMonth() && currentDate.getDate() < dobDate.getDate())) {
                    age--;
                }

                if (age < minAge) {
                    $('#dobError').text('You must be at least 18 years old.');
                    return false;
                } else {
                    $('#dobError').text('');
                    return true;
                }
            }
        }
    });

    let formdata = {
        Email: "",
        Username: "",
        DOB: "",
        PhoneNumber: "",
        password: ""
    };

    const Emailele = $('#emailInput');
    const Usernameele = $('#usernameInput');
    const Dobele = $('#dob');
    const passwordele = $('#phoneInput');
    const phonenoele = $('#passwordInput');

    Emailele.on("change", function(event) {
        formdata.Email = event.target.value;
    
    });

    Usernameele.on("change", function(event) {
        formdata.Username = event.target.value;
    });

    Dobele.on("change", function(event) {
        formdata.DOB = event.target.value;
    });

 

    phonenoele.on("change", function(event) {
        formdata.password = event.target.value;
        console.log(formdata);
    });
    passwordele.on("change", function(event) {
        formdata.PhoneNumber = event.target.value;
    });

    

    
    let dobele=document.getElementById("birthdate");
    // dobele.addEventListener("change", function(event) {
    //     formdata.DOB = event.target.value;
    //   });

    $(document).ready(function() {
        $("#myform").on("submit", function(event) {
                console.log("hi");  
            
        });
    });
    

    $(document).ready(function() {
        $("#myButton").click(function() {
            console.log(formdata);
        });
    });
    
    
    
    
    