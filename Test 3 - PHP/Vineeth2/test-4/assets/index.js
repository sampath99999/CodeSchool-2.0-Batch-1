
function login() {
  window.location.href = "./../templates/login.html";
}
function isValidate_name() {
  const Name = $('#name').val();
  if (Name === '') {
    $('#name-error').text('Please enter the  name');
    return false;
  } else if (Name.length < 3 || Name.length > 50) {
    $('#name-error').text(' Name must be between 2 and 50 characters.');
    return false;
  } else if (!/^[A-Z][a-z]{1,49}$/.test(Name)) {
    $('#name-error').text('First letter must should be capital only.');
    return false;
  } else {
    $('#name-error').hide();
    return true;
  }
}
function isValidEmail() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const email = $('#email').val();
  if (email === '') {
    $('#email-error').html('Please enter the email address');
    return false;
  } else if (!emailRegex.test(email)) {
    $('#email-error').html('Please enter a valid email');
    return false;
  } else {
    $('#email-error').hide();
    return true;
  }
}
function validatePhone() {
  var phone = $('#phone_no').val();
  const phoneError = $('#phone-error');
  if (phone === '') {
    phoneError.text('Please enter the number');
    return false;
  } else if (phone.length != 10) {
    phoneError.text('Phone number must be a 10-digit number.');
    return false;
  } else if (/\s/.test(phone)) {
    phoneError.text('Phone number cannot contain spaces.');
    return false;
  } else {
    phoneError.hide();
    return true;
  }
}
function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if ((charCode < 48 || charCode > 57))
    return false;
  return true;
}
function submit() {
  let name = isValidate_name()
  let email = isValidEmail()
  let phone_no = validatePhone()
  if (name && email && phone_no) {
    $("#accordion").hide()
    $.ajax({
      method: "POST",
      url: "./../api/index.php",
      data: {
        name: $('#name').val(),
        email: $("#email").val(),
        phone_number: $('#phone_no').val(),
      },
      success: function (data) {
        try {
          data = JSON.parse(data)
          console.log(data)
        }
        catch (e) {
          console.log(e)
        }

      },
      error: function (error) {
        console.log('error:' + error)
      }
    })

  }
  else {
    $("#phone-error").text("Fields are required !")
  }
}
