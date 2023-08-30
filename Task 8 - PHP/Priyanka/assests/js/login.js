$(document).ready(function () {
    let userToken = localStorage.getItem("access_token");
    if (userToken) {
      window.location.href = "home.html";
    }
  
    $("#emailError").hide();
    $("#emailError").css({ fontSize: "12px", color: "red" });
    $("#passwordError").hide();
    $("#passwordError").css({ fontSize: "12px", color: "red" });
  
    $("#emailInput").blur(function () {
      validateEmail();
    });
  
    $("#passwordInput").blur(function () {
      validatePassword();
    });
  
    function validateEmail() {
      var emailInput = $("#emailInput").val();
      if (emailInput.length === 0) {
        $("#emailError").show();
      } else {
        $("#emailError").hide();
      }
    }
  
    function validatePassword() {
      var passwordInput = $("#passwordInput").val();
      if (passwordInput.length === 0) {
        $("#passwordError").show();
      } else {
        $("#passwordError").hide();
      }
    }
  
    $("#loginBtn").click(function () {
      validateEmail();
      validatePassword();
  
      if ($("#emailError").is(":visible") || $("#passwordError").is(":visible")) {
        return;
      }
  
      var email = $("#emailInput").val();
      var password = $("#passwordInput").val();
  
      $.post(
        "http://localhost/PRIYANKA/api/login.php",
        { email: email, password: password },
        function (result) {
          try {
            var parsedResult = JSON.parse(result);
            if (parsedResult.status) {
              localStorage.setItem("access_token", parsedResult.data);
              window.location.href = "home.html";
            } else {
              alert(parsedResult.message);
            }
          } catch (e) {
            console.error("Error parsing JSON response:", e);
          }
        }
      ).fail(function () {
        console.error("Request failed");
      });
    });
  });
  