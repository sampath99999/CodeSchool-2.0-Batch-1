function login(event) {
    event.preventDefault();
    let email = $("#email").val();
    let password = $("#password").val();
    if (password.length < 8) {
        $('#passwordError').text('Password must be at least 8 characters');
        return;
      }
    else{
        $('#passwordError').text('');

    }



    $.ajax({
        method: "POST",
        url: "./api/login.php", 
        data: {
            email: email,
            password: password,
        },
        success: function (data) {
            if (data.includes("LoggedIn Successfully!")) {
                console.log("login sucessful");
                window.location.replace("./dashboard");
                // Perform further actions like redirecting or displaying a success message
            } else {
                $("#error").text(data);
            }
        },
        fail: function () {
            console.log("inavalid");
            // Handle the error appropriately, e.g., display an error message to the user
        }
    });
}
