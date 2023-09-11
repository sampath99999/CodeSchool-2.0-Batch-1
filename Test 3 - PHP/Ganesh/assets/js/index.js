// Function to validate the login input.
function validateInput(input, feedback){
    // On Change Remove Invalid Class.
    input.on("keydown", function () {
        input.removeClass("is-invalid");
    });
    // Validation Condition.
    if (input.val() == '') {
        input.removeClass("is-valid");
        input.addClass("is-invalid");
        feedback.text("Email is required !");
        return false;
    } else {
        input.removeClass("is-invalid");
        return true;
    }
}

// Function to validate the login password.
function validatePassword(password, feedback){
    // On Change Remove Invalid Class.
    password.on("keydown", function () {
        password.removeClass("is-invalid");
    });
    // Validation Condition.
    if (password.val() == '') {
        password.removeClass("is-valid");
        password.addClass("is-invalid");
        feedback.text("Password is required !");
        return false;
    } else {
        password.removeClass("is-invalid");
        return true;
    }
}

// On submit.
$("#loginUser").submit(()=>{

    event.preventDefault();
    
    let validations = [];
    let count = 0;

    validations.push(validateInput($("#userEmailInput"), $("#userEmailInputFeedback")));
    validations.push(validatePassword($("#userPasswordInput"), $("#userPasswordInputFeedback")));

    validations.forEach(bool => {
        if(bool){
            count++;
        }
    });
    
    if(validations.length == count){

        $.ajax({
            method: "POST",
            url: "./api/login.php",
            data: {
                "email": $("#userEmailInput").val(),
                "password": $("#userPasswordInput").val()
            },
            success: function(data){
                let jsonData = JSON.parse(data);
                if(!(jsonData["status"])){
                    $("#serverMessage").removeClass("d-none bg-success border-success text-success");
                    $("#serverMessage").addClass("bg-danger border-danger text-danger");
                    $("#serverMessage").html(jsonData["message"]);
                } else {
                    $("#serverMessage").removeClass("d-none bg-danger border-danger text-danger");
                    $("#serverMessage").addClass("bg-success border-success text-success");
                    $("#serverMessage").html(jsonData["message"]);
                    window.localStorage.setItem("token", jsonData['data']);
                    setTimeout(()=>{
                        location.replace("./chatroom.html");
                    }, 3000);
                }
            },
            error: function (error){
                console.log(error);
            }
        });
        
    }

});