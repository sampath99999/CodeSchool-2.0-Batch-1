$.ajax({
    method: 'GET',
    url: 'https://random.imagecdn.app/v1/image?width=600&height=750&category=buildings&format=json',
    headers: { 'X-Api-Key': 'E9b9giYPrMgLlsSu197/Yg==D4sguqK8AlqVf7IT', 'Accept': 'image/jpg'},
    success: function(result) {
        console.log(result);
        var markup = "";
        var markup = `<div class="left_side d-flex h-100" id="quote" style="align-items: flex-end; background-image: url('${result.url}');">
        </div>`;
        console.log(result)
    document.getElementById("img").innerHTML=markup;

    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

var category = 'happiness'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'E9b9giYPrMgLlsSu197/Yg==D4sguqK8AlqVf7IT'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        var markup="";
        markup += `<figure class="text-center text-white w-100 m-auto m-md-0 mb-0 p-5 p-md-0">
        <blockquote class="blockquote">
          <p>${result[0].quote}</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          <cite title="Source Title">${result[0].author}</cite>
        </figcaption>
      </figure>`;
        document.getElementById("quote").innerHTML=markup;
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

    var name = document.forms['myForm']['fullName'].value;
    var nameRegEx = '/^[A-Za-z]+$/';
    if(name.length < 2){
        setErr("fullName","Please enter atleast 2 words!");
        returnVal = false;
    }
    else if(name.length > 50){
        setErr("fullName","Name length is too long!");
        returnVal = false;
    }
    else if(nameRegEx.match(name) == false){
        setErr("fullName","Invalid Name!");
        returnVal = false;
    };

    var email = document.forms['myForm']['Email'][0].value;
    var emailRegEx = "/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/";
    if(email.length = 0){
        setErr("email","Email can not be empty!");
        returnVal = false;
    }else if(email.length > 25){
        setErr("email","Email too large!");
        returnVal = false;
    }else if(emailRegEx.match(email) == false){
        setErr("email","Invalid Email!");
        returnVal = false;
    };

    var password = document.forms['myForm']['Password'][0].value;
    var passRegEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    if(password.length < 2){
        setErr("password","Please enter atleast 2 words!");
        returnVal = false;
    }else if(password.length > 24){
        setErr("password","Password length too long!");
        returnVal = false;
    }else if(passRegEx.match(password) == false){
        setErr("password","Invalid Password");
        returnVal = false;
    };

    var phone = document.forms['myForm']['Phone'][0].value;
    var phoneRegEx = /^[0-9]{10}$/;
    if(phone.length !== 10){
        setErr("phone","Please enter 10 digit number only.");
        returnVal = false;
    }else if(phoneRegEx.match(phone) == false){
        setErr("phone","Invalid Phone Number!");
        returnVal = false;
    };

    return returnVal;
}