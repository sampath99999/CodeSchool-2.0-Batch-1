// Validate Password.
function validatePassword(password, feedback){
    // On Key Down Remove Invalid Class.
    password.on("keydown", function(){
        password.removeClass("is-invalid");
    });
    // Validating Conditions.
    if(password.val() == ''){
        password.addClass("is-invalid");
        feedback.text("Please add the password !");
        return false;
    } else {
        password.removeClass("is-invalid");
        return true;
    }
}

// Validate the user login.
$("#loginUser").on("submit", ()=>{
    event.preventDefault();

    let validations = [];
    let count = 0;

    let username = $("#userNameInput");
    let password = $("#userPasswordInput");

    if((username.val()).match(/[0-9]/)){
        validations.push(validateUserPhone(username, $("#userNameInputFeedback")));
    } else {
        validations.push(validateUserEmail(username, $("#userNameInputFeedback")));
    }

    validations.push(validatePassword(password, $("#userPasswordInputFeedback")));


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
                "username": username.val(),
                "password": password.val()
            },
            success: function(data){
                console.log(data)
                let jsonData = JSON.parse(data);
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
            error: function(error){
                
            }
        });

    }

});