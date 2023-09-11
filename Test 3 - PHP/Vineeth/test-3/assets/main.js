$(document).ready(function () {
    $("#b1").click();
});

function amount() {
    $("#user").hide();
    $("#payment").hide();
    $("#Choose_amount").show()
}

function Name() {
    $("#Choose_amount").hide();
    $("#user").show()
    $("#payment").hide();
}

function payment() {
    $("#Choose_amount").hide();
    $("#user").hide();
    $("#payment").show();
}
function add(num){
   $("#amount").val(num);
}
function validate_name() {
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
      $('#emailHelp').html('Please enter the email address');
      return false;
    } else if (!emailRegex.test(email)) {
      $('#emailHelp').html('Please enter a valid email');
      return false;
    } else {
      $('#emailHelp').hide();
      return true;
    }
}
function validatePhone() {
    var phone = $('#phone').val();
    const phoneError = $('#Phone-error');
    if (phone === '') {
      phoneError.text('Please enter the number');
      return false;
    } else if (phone.length != 10 ) {
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


function store(){
    var amount1=$("#amount").val()
    var name1=$("#name").val()
    var email1=$("#email").val()
    var phone_no=$("#phone").val()
    var acc_no=$("#acc").val()
    var cvv1=$("#cvv").val()
    var holder_name=$("#holder").val()


    $.ajax({
        method:"POST",
        url:"./../api/main.php",
        data:{
            amount1,
            name1,
            email1,
            phone_no,
            acc_no,
            cvv1,
            holder_name,
        },
        success:function(data){
            window.location.replace ='./../templetes/main.html';
        }
    })

}