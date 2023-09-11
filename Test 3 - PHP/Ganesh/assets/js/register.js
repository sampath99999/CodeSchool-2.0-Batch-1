// Validate User Name.
function validateUserName(name, feedback){
    // On Key Down Remove Invalid Class.
    name.on("keydown", function(){
        name.removeClass("is-invalid");
    });
    // Validating Conditions.
    if(name.val() == ''){
        name.addClass("is-invalid");
        feedback.text("Name is required !");
        return false;
    }
    else if(!((name.val()).match(/[a-zA-Z ]/))){
        name.addClass("is-invalid");
        feedback.text("Name should only contain alphabets!");
        return false;
    }
    else {
        name.removeClass("is-invalid");
        return true;
    }
}

// Validate User Profile Picture.
function validateFile(img, feedback) {
    // On Change Remove Invalid Class.
    img.on("change", function () {
        img.removeClass("is-invalid");
    });
    // Validation Condition.
    if (!(img[0].files[0])) {
        img.removeClass("is-valid");
        img.addClass("is-invalid");
        feedback.text("Add a profile picture !");
        return false;
    } else {
        img.removeClass("is-invalid");
        return true;
    }
}

// Validate User Email.
function validateUserEmail(email, feedback){
    // On Change Remove Invalid Class.
    email.on("keydown", function(){
        email.removeClass("is-invalid");
    });
    // Validating Conditions.
    if(email.val() == ''){
        email.addClass("is-invalid");
        feedback.text("Email is required !");
        return false;
    } 
    else if(((email.val()).match(/\.\./))){
        email.addClass("is-invalid");
        feedback.text("Consecutive dots are not allowed !");
        return false;
    }
    else if(((email.val()).match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]{2,})\.([a-zA-Z]{2,5})$/))){
        email.removeClass("is-invalid");
        return true;
    }
    else {
        email.addClass("is-invalid");
        feedback.text("Domain is invalid !");
        return false;
    }
}

// Validate User Password.
function validateUserPassword(password, feedback){
    let strongPassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
    // On Key Down Remove Invalid Class.
    password.on("keydown", function(){
        password.removeClass("is-invalid");
    });
    // Validating Conditions.
    if(password.val() == ''){
        password.addClass("is-invalid");
        feedback.text("Please add the password !");
        return false;
    }
    else if(!((password.val()).match(strongPassRegex))){
        password.addClass("is-invalid");
        feedback.text("Password should contain one A-Z, one a-z, one 0-9 and one special character (e.g., !, @, #, $, %, etc.) !");
        return false;
    }
    else {
        password.removeClass("is-invalid");
        return true;
    }
}

// Confirm User Password.
function confirmPassword(password, confirmpwd, feedback){
    // On Change Remove Invalid Class.
    confirmpwd.on("change", function(){
        confirmpwd.removeClass("is-invalid");
    });
    // Validating Conditions.
    if(confirmpwd.val() != password.val()){
        confirmpwd.addClass("is-invalid");
        feedback.text("Password does not match !");
        return false;
    } else {
        confirmpwd.removeClass("is-invalid");
        return true;
    }
}

// On submit.
$("#registerUser").submit(()=>{

    event.preventDefault();
    
    let validations = [];
    let count = 0;

    validations.push(validateUserName($("#userName"), $("#userNameFeedback")));
    validations.push(validateFile($("#userImage"), $("#userImageFeedback")));
    validations.push(validateUserEmail($("#userEmail"), $("#userEmailFeedback")));
    validations.push(validateUserPassword($("#userPassword"), $("#userPasswordFeedback")));
    validations.push(confirmPassword($("#userPassword"), $("#userConfirmPassword"), $("#userConfirmPasswordFeedback")));

    validations.forEach(bool => {
        if(bool){
            count++;
        }
    });
    
    if(validations.length == count){

        // form data object.
        let userData = new FormData();

        // Appending form inputs.
        userData.append('user_name', $("#userName").val());
        userData.append('image', $("#userImage")[0].files[0]);
        userData.append('user_email', $("#userEmail").val());
        userData.append('user_password', $("#userPassword").val());
        userData.append('confirm_password', $("#userConfirmPassword").val());
        

        // Calling post request to register.php with contentType and processData as false.
        $.ajax({
            method: "POST",
            url: "./api/register.php",
            data: userData,
            contentType: false,
            processData: false,
            success: function(data){
                let jsonData = JSON.parse(data);
                console.log(jsonData)
                if(!(jsonData["status"])){
                    $("#serverMessage").removeClass("d-none bg-success border-success text-success");
                    $("#serverMessage").addClass("bg-danger border-danger text-danger");
                    $("#serverMessage").html(jsonData["message"]);
                } else {
                    $("#serverMessage").removeClass("d-none bg-danger border-danger text-danger");
                    $("#serverMessage").addClass("bg-success border-success text-success");
                    $("#serverMessage").html(jsonData["message"]);
                    setTimeout(()=>{
                        location.replace("./index.html");
                    }, 3000);
                }
            },
            error: function (error){
                console.log(error);
            }
        });
    }

});