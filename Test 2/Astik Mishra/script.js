var category = 'happiness'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'E9b9giYPrMgLlsSu197/Yg==D4sguqK8AlqVf7IT'},
    contentType: 'application/json',
    success: function(result) {
        // console.log(result);
        var markup="";
        markup += `<h3><i>${result[0].quote}</i></h3>`;
        document.getElementById("quote").innerHTML=markup;
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
        // console.log(data.results[0].phone);
        var markup="";
        markup += `<p><u>${data.results[0].phone}</u></p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>`;
        document.getElementById("phNo").innerHTML=markup;
    }
  });
        
$.ajax({
    method: 'GET',
    url: 'https://reqres.in/api/users?page=2',
    contentType: 'application/json',
    success: function(result) {
        // console.log(result.data[0].email);
        var markup="";
        markup += `<div class="w-50">
        <h4>General Inquiries</h4>
        <p>Reach us at <span style="color: rgb(33, 42, 50);"><u>${result.data[0].email}</u></span> and we will get back to you asap</p>
    </div>
    <div class="w-50">
        <h4>Working at Gasper?</h4>
        <p>Visit our carrers page or send us an email at <span style="color: rgb(33, 42, 50);"><u>${result.data[1].email}</u></span></p>
    </div>
    <div class="w-50">
        <h4>Insurance agent?</h4>
        <p>Become an insurance agent by contacting us at <span style="color: rgb(33, 42, 50);"><u>${result.data[2].email}</u></span></p>
    </div>
    <div class="d-flex gap-3 align-items-center">
            <h6>Follow us </h6>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
        </div>`;
        document.getElementById("emailApi").innerHTML=markup;
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});


function clearErr(){
    error = document.getElementsByClassName('formErr');
    for(let item of error){
        item.innerHTML = "";
    }
}

function setErr(id, err){
    elements=document.getElementById(id);
    elements.getElementsByClassName('formErr')[0].innerHTML=err;
}

function formValidation(){
    var returnVal = true;
    clearErr();

    var fname = document.forms['myForm']['firstName'].value;
    var fnameRegEx = '/^[A-Za-z]+$/';
    if(fname.length < 2){
        setErr("firstName","Please enter atleast 2 words!");
        returnVal = false;
    }
    else if(fname.length > 50){
        setErr("firstName","First Name length is too long!");
        returnVal = false;
    }
    else if(fnameRegEx.match(fname) == false){
        setErr("firstName","Invalid First Name!");
        returnVal = false;
    }

    var lname = document.forms['myForm']['lastName'].value;
    var lnameRegEx = '/^[A-Za-z]+$/';
    if(lname.length < 2){
        setErr("lastName","Please enter atleast 2 words!");
        returnVal = false;
    }
    else if(lname.length > 50){
        setErr("lastName","Last Name length is too long!");
        returnVal = false;
    }
    else if(lnameRegEx.match(lname) == false){
        setErr("lastName","Invalid Last Name!");
        returnVal = false;
    }

    var email = document.forms['myForm']['email'].value;
    var emailRegEx = "/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/";
    if(email.length < 6){
        setErr("email","Enter atleast 6 words!");
        returnVal = false;
    }
    else if(email.length > 25){
        setErr("email","Email too large!");
        returnVal = false;
    }
    else if(emailRegEx.match(email) == false){
        setErr("email","Invalid Email!");
        returnVal = false;
    }

    var phone = document.forms['myForm']['phone'].value;
    var phoneRegEx = "/^[0-9]{10}$/";
    if(phone.length !== 10){
        setErr("phone","Please enter 10 digit number only.");
        returnVal = false;
    }
    else if(phoneRegEx.match(phone) == false){
        setErr("phone","Invalid Phone Number!");
        returnVal = false;
    }

    var bestTime = document.forms['myForm']['bestTime'].value;
    var bestTimeRegex = "/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/";
    if(bestTime.length !== 5){
        setErr("bestTime","Please enter in 24hr(HH:MM) format only.");
        returnVal = false;
    }
    if((bestTimeRegex.match(bestTime)) == false){
        setErr("bestTime","Please enter in 24hr format only.");
        returnVal = false;
    }

    var additionalInfo = document.forms['myForm']['additionalInfo'].value;
    if(additionalInfo.length == 0){
        setErr("additionalInfo","Please enter Additional Information, if nothing Please type 'NA' !");
        returnVal = false;
    }
    else if(additionalInfo.length < 2){
        setErr("additionalInfo","Additional Information is too small, Please type atleast 2 Characters.");
        returnVal = false;
    }
    else if(additionalInfo.length > 100){
        setErr("additionalInfo","Additional Information is too large, Please type 100 Characters only.");
        returnVal = false;
    }


    return returnVal;
}