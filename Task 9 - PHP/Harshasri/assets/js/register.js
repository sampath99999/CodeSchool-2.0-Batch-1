var userId = localStorage.getItem("user_id");
if (userId) {
    window.location.replace("home.html");
}

$(document).ready(function () {
    var firstnameValidate;
    var lastnameValidate;
    var usernameValidate;
    var phoneNoValidate;
    var emailValidate;
    var passwordValidate;

    $("#myForm").submit(function (event) {
        // function register(event){
        event.preventDefault();
        console.log("clicked");
        var firstname = $("#firstName").val();
        var lastname = $("#lastName").val();
        var username = $("#userName").val();
        var phoneNo = $("#phoneNo").val();
        var email = $("#email").val();
        var password = $("#password").val();

        $("input[type=radio][name=gender]").change(function () {
            var selectedValue = $("input[type=radio][name=gender]:checked").val();

            console.log(selectedValue);
        });

        //-----firstname------

        const alphabeticRegex = /^[A-Za-z]+$/;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (firstname == "") {
            $("#firstNameErrorMsg").text("*FirstName should not be Empty!");
            firstnameValidate = false;
        } else if (firstname.length < 2 || firstname.length > 50) {
            $("#firstNameErrorMsg").text(
                "*FirstName must be between 2 and 50 charecters"
            );
            firstnameValidate = false;
        } else if (
            firstname !==
            firstname.charAt(0).toUpperCase() + firstname.slice(1).toLowerCase()
        ) {
            $("#firstNameErrorMsg").text(
                "*First charecter should be Capital in FirstName!!"
            );
            firstnameValidate = false;
        } else if (!alphabeticRegex.test(firstname)) {
            $("#firstNameErrorMsg").text(
                "*FirstName should contain only alphabetic charecters"
            );
            firstnameValidate = false;
        } else {
            $("#firstNameErrorMsg").text("");
            firstnameValidate = true;
        }

        //------last name

        if (lastname == "") {
            $("#lastNameErrorMsg").text("*LastName should not be Empty!");
            lastnameValidate = false;
        } else if (lastname.length < 2 || lastname.length > 50) {
            $("#lastNameErrorMsg").text(
                "*LastName must be between 2 and 50 charecters"
            );
            lastnameValidate = false;
        } else if (
            lastname !==
            lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase()
        ) {
            $("#lastNameErrorMsg").text(
                "*First charecter should be Capital in LastName!!"
            );
            lastnameValidate = false;
        } else if (!alphabeticRegex.test(lastname)) {
            $("#lastNameErrorMsg").text(
                "*LastName should contain only alphabetic charecters"
            );
            lastnameValidate = false;
        } else {
            $("#lastNameErrorMsg").text("");
            lastnameValidate = true;
        }

        //user name
        if (username == "") {
            $("#userNameErrorMsg").text("*Username should not be Empty!");
            usernameValidate = false;
        } else if (!/^\w{5,}$/.test(username)) {
            $("#userNameErrorMsg").text(
                "*Valid username should be alphanumeric & longer than or equals 5 charecters!!!"
            );
            usernameValidate = false;
        } else {
            $("#userNameErrorMsg").text("");
            usernameValidate = true;
        }

        //phone no

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
            $("#emailErrorMsg").text("*Phone number must be 10 digits!");
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

        //gender

        var selectedRadioValue = $("input[name='gender']:checked").val();

        //dob
        var selectedDate = $("#date-input").val();
        console.log(selectedDate);
        console.log(selectedRadioValue);
        console.log(firstnameValidate);
        console.log(lastnameValidate);
        console.log(usernameValidate);
        console.log(phoneNoValidate);
        console.log(emailValidate);
        console.log(passwordValidate);

        //check
        if (
            firstnameValidate &&
            lastnameValidate &&
            usernameValidate &&
            phoneNoValidate &&
            emailValidate &&
            passwordValidate
        ) {
            console.log("success");
            $.ajax({
                method: "POST",
                url: "./api/register.php",
                data: {
                    first_name: firstname,
                    last_name: lastname,
                    username: username,
                    phone_no: phoneNo,
                    email: email,
                    password: password,
                    gender: selectedRadioValue,
                    dob: selectedDate,
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
                error: function (error) { },
            });
        }
    });
});
