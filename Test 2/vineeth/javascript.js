$(document).ready(function () {
    let url = "https://picsum.photos/v2/list";
    $.getJSON(url, function (data) {
        let i = Math.floor(Math.random() * data.length);
        let Url = data[i].download_url;
        $("#image").css("background-image", "url(" + Url + ")")
    });
    var category = 'happiness'
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': '98oO1eMUqhwfs2s8niPJFg==RQTTtSe5Ezew2ADo' },
        contentType: 'application/json',
        success: function (result) {
            $('#quote').html(result[0].quote);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
    var v = Math.random() * 10;
    $('#cost').html(`<h3>$${v.toFixed(2)}</h3>` + `<small class="mt-2">/ Month</small>`);
});
function Name() {
    const Name = $('#name').val();
    if (Name === '') {
        $('#name-error').html('Please enter the name.');
        return false;
    }
    else if (Name.length < 3 || Name.length > 50) {
        $('#name-error').html('Name must be between 2 and 50 characters.');
        return false;
    } else if (!/^[A-Z][a-z]{1,49}$/.test(Name)) {
        $('#name-error').html('Name must should be Camel case only.');
        return false;
    } else {
        $('#name-error').css("display", "none");
        return true;
    }
}
function email() {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = $('#Email').val();
    if (email === '') {
        $('#email-error').html("Please enter the email.")
        return false;
    }
    else if (!emailRegex.test(email)) {
        $('#email-error').html('Please enter the vaild email');
        return false;
    }
    else {
        $('#email-error').css('display', 'none');
        return true;
    }
}
function Password() {
    let password = $("#Password1").val();
    console.log(password)
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,25}$/;
    if (password === '') {
        $('#password-error').html('Please Enter Password');
        return false;
    }
    else if (password.length < 5 || password.length > 25) {
        $('#password-error').html("Password must be between 5 and 25 characters.");
        return false;
    } else if (!passwordRegex.test(password)) {
        $('#password-error').html('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
        return false;
    } else if (/\s/.test(password)) {
        $('#password-error').html('Password cannot contain spaces.');
        return false;
    } else {
        $('#password-error').css('display', 'none');
        return true;
    }
}

function check() {
    let P1 = $('#Password1').val()
    let P2 = $('#Password2').val()
    if (P2 === '') {
        $('#confirm_password-error').html("Please enter the confirm password.")
        return false;
    }
    else if (P2 != P1) {
        $('#confirm_password-error').html("Password should be same.")
        return false;
    }
    else {
        $('#confirm_password-error').css('display', 'none');
        return true;
    }
}
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if ((charCode < 48 || charCode > 57))
        return false;
    return true;
}
function gender() {
    var c = $('#male').val()
    var c2 = $('#male').val()
    var c3 = $('#male').val()
    if (c || c2 || c3) {
        $('#gender').css('display', 'none');
    }
    else {
        $('#gender').html("Please select the gender")
    }
}
function Register() {
    event.preventDefault()
    Name()
    email()
    Password()
    check()
    gender()
}