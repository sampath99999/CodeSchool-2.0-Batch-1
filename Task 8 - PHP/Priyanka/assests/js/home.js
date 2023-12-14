$(document).ready(function () {
    let userToken = localStorage.getItem("access_token");
    if (!userToken) {
      window.location.href = "login.html";
    }
  
    $.post(
      "http://localhost/Priyanka/api/home.php",
      { email: email, password: password },
      function (result) {
        var result = JSON.parse(result);
        if (!result.status) {
          alert(result.message);
        } else {
          localStorage.setItem("access_token", result.data);
          window.location.href = "home.html";
        }
      }
    );
  });
  
  