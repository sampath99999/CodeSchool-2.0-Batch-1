$(document).ready(function(){
  const userToken=localStorage.getItem("token");
  if(userToken!==null){
    window.location.replace("./dashboard.html");
  }
})
function validateUserCredentials() {
  const userEmail = $("#login-email").val();
  const userPassword = $("#login-password").val();
  $.ajax({
    method: "POST",
    url: "./../api/userAuthentication.php",
    data: {
      userEmail,
      userPassword,
    },
    success: function (data) {
      const response = JSON.parse(data);
      if (!response.status) {
        $("#login-form-error").text(response.message);
      } else {
        const tokenId = response.data;
        localStorage.setItem("token", tokenId);
        window.location.replace("./dashboard.html");
      }
    },
    error: function (error) {
      $("#login-form-error").text(error.responseText);
    },
  });
}

$("#login-form-submission").submit(function (event) {
  event.preventDefault();
  if ($("#login-email").val() !== "" && $("#login-password").val() !== "") {
    $("#login-form-error").text("");
    //ajax call for validation of credentials
    validateUserCredentials();
  } else {
    $("#login-form-error").text("*Username and Password cannot be empty");
  }
});
