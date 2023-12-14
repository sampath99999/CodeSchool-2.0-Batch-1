$(document).ready(function () {
    $("#loginBtn").click(function () {
        var email = $("#loginEmail").val();
        var password = $("#loginPassword").val();
        var isValid = true;
        $("#loginEmailErr, #loginPasswordErr").text("").hide();
        if (email.length < 3 || email.length > 25) {
            $("#loginEmailErr").text("Enter a valid email").show();
            isValid = false;
        }
  
        if (password.length < 3 || password.length > 25) {
            $("#loginPasswordErr").text("Invalid password").show();
            isValid = false;
        }
  
        if (isValid) {
            $.post(
                "./api/adminlogin.php",
                { email: email, password: password },
                function (result) {
                    try {
                        console.log(result);
                        result = JSON.parse(result);
  
                        if (!result.status) {
                            alert(result.message);
                        } else {
                            window.location.replace("index.html");
                        }
                    } catch (error) {
                        console.error("Error parsing JSON:", error);
                    }
                }
            ).fail(function (jqXHR, textStatus, errorThrown) {
                console.error("An error occurred:", errorThrown);
            });
        }
    });
  });
  