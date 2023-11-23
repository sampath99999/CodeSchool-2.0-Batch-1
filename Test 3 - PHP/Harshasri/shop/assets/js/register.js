let userId = window.localStorage.getItem("user_id");
let roleId = window.localStorage.getItem("role_id");
if (userId && roleId == 2) {
  window.location.replace("./adminhome.html");
} else if (userId && roleId == 1) {
  window.location.replace("./userhome.html");
}

function onChangeTypeOptions() {
  var x = document.getElementById("mySelect").value;

  return x;
}

$(document).ready(function () {
  var nameValidate;
  var phoneNoValidate;
  var emailValidate;
  var passwordValidate;
  var userRoleValidate;

  $("#myForm").submit(function (event) {
    // function register(event){
    event.preventDefault();
    console.log("clicked");
    var name = $("#name").val();
    var phoneNo = $("#phoneNo").val();
    var email = $("#email").val();
    var password = $("#password").val();
    let userType = onChangeTypeOptions();
    console.log(userType);

    //-----Name------

    const alphabeticRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (name == "") {
      $("#nameErrorMsg").text("*Name should not be Empty!");
      nameValidate = false;
    } else if (name.length < 2 || name.length > 50) {
      $("#nameErrorMsg").text("*Name must be between 2 and 50 charecters");
      nameValidate = false;
    } else if (
      name !==
      name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    ) {
      $("#nameErrorMsg").text("*First charecter should be Capital in Name!!");
      nameValidate = false;
    } else if (!alphabeticRegex.test(name)) {
      $("#nameErrorMsg").text(
        "*Name should contain only alphabetic charecters"
      );
      nameValidate = false;
    } else {
      $("#nameErrorMsg").text("");
      nameValidate = true;
    }
    //phone

    if (phoneNo == "") {
      $("#phoneNoErrorMsg").text("*PhoneNo should not be Empty!");
      phoneNoValidate = false;
    } else if (phoneNo.length !== 10) {
      $("#phoneNoErrorMsg").text("*Phone number must be 10 digits!");
      phoneNoValidate = false;
    } else if (!/^[0-9]+$/.test(phoneNo)) {
      $("#phoneNoErrorMsg").text("*Phone number must be Only in digits!");
      phoneNoValidate = false;
    } else {
      $("#phoneNoErrorMsg").text("");
      phoneNoValidate = true;
    }

    //email

    if (email == "") {
      $("#emailErrorMsg").text("*Email should not be Empty!");
      emailValidate = false;
    } else if (email.length > 50) {
      $("#emailErrorMsg").text("*Email must be less than 50 charecters!");
      emailValidate = false;
    } else if (email.match(/@/g).length > 1) {
      $("#emailErrorMsg").text("*Email should contain only single @!");
      emailValidate = false;
    } else if (!emailRegex.test(email)) {
      $("#emailErrorMsg").text("*Invalid email format!");
      emailValidate = false;
    } else {
      $("#emailErrorMsg").text("");
      emailValidate = true;
    }

    //password
    commonPass = ["Password@123", "Abcdef@123", "Abc123@", "Hello"];
    if (password == "") {
      $("#passwordErrorMsg").text("*Password should not be Empty!");
      passwordValidate = false;
    } else if (commonPass.includes(password.toLowerCase())) {
      $("#passwordErrorMsg").text("*Password is easily guessable!");
      passwordValidate = false;
    } else if (!/[A-Z]/.test(password)) {
      $("#passwordErrorMsg").text(
        "*Password should conatin one uppercase character"
      );
      passwordValidate = false;
    } else if (!/[A-Z]/.test(password)) {
      $("#passwordErrorMsg").text(
        "*Password should conatin one lowercase character"
      );
      passwordValidate = false;
    } else if (!/\d/.test(password)) {
      $("#passwordErrorMsg").text("*Password should conatin one digit");
      passwordValidate = false;
    } else if (!/[!@#$%^&*()_+{}:;<>,.?~]/.test(password)) {
      $("#passwordErrorMsg").text(
        "*Password should conatin one special character!"
      );
      passwordValidate = false;
    } else if (/([a-zA-Z0-9])\1/.test(password)) {
      $("#passwordErrorMsg").text(
        "*Password should not contain repeating characters.!"
      );
      passwordValidate = false;
    } else if (/\s/.test(password)) {
      $("#passwordErrorMsg").text("*Password should conatin Spaces.!");
      passwordValidate = false;
    } else {
      $("#passwordErrorMsg").text("");
      passwordValidate = true;
    }
    //user_role
    if (userType == "") {
      $("#roleErrorMsg").html("Please select at least One option");
      userRoleValidate = false;
    } else {
      $("#roleErrorMsg").text("");
      userRoleValidate = true;
    }

    console.log(nameValidate);
    console.log(phoneNoValidate);
    console.log(emailValidate);
    console.log(passwordValidate);
    console.log(userRoleValidate);

    //check
    if (
      userRoleValidate &&
      nameValidate &&
      phoneNoValidate &&
      emailValidate &&
      passwordValidate
    ) {
      console.log("success");
      $.ajax({
        method: "POST",
        url: "./api/register.php",
        data: {
          name: name,
          phone: phoneNo,
          email: email,
          password: password,
          role_id: roleId,
        },
        success: function (data) {
          console.log(data);
          data = JSON.parse(data);
          if (data.status) {
            window.location.replace("./login.html");
          } else {
            alert(data.message);
          }
        },
        error: function (error) {
          console.log(error);
        },
      });
    }
  });
});
