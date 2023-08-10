// Random Photos API: https://picsum.photos/v2/list endpoint use "?grayscale" parameter on "download_url" for greyscale images
// Random Quotes API: https://type.fit/api/quotes 

// Random Image Generator Function
function randomImageGenerator(){
    let urlEndpoint = "https://picsum.photos/v2/list";
    $.getJSON(urlEndpoint, function(data){
        let index = Math.floor(Math.random()*30);
        let banner = data[index].download_url + "?grayscale&blur=5";
        $("#background-image-container").css("background-image","url(" +banner+")")
    });
}

// Random Quotes Generator Function
function randomQuotesGenerator(){
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://type.fit/api/quotes",
        "method": "GET"
    }
    $.ajax(settings).done(function (response) {
        const data = JSON.parse(response);
        let index = Math.floor(Math.random()*16);
        $("#inspiringQuotes").html(data[index].text);
    });
}

// Function for calling the APIs.
function callAPIs(){
    randomImageGenerator();
    randomQuotesGenerator();
}

// Validating function for user text input
function userText(name, feedback){
    let alphaRegExp = /^[A-Za-z]+$/;    
    if(name.val().match(alphaRegExp)){
        name.removeClass("is-invalid");
        name.addClass("is-valid");
        feedback.html("Enter a valid name.")
        return true;
    }
    else{
        name.removeClass("is-valid");
        name.addClass("is-invalid");
        return false;
    }
}

// Validating function for user mail
function userEmail(mail, feedback){
    let mailRegExp = /^[A-Za-z0-9.@_-]+$/;    
    if(mail.val().match(mailRegExp)){
        mail.removeClass("is-invalid");
        mail.addClass("is-valid");
        feedback.html("Enter a valid name.")
        return true;
    }
    else{
        mail.removeClass("is-valid");
        mail.addClass("is-invalid");
        return false;
    }
}

// validating function for phone num
function userPhone(phone, feedback){
    let phoneRegExp = /^[0-9]+$/;   
    if(phone.val().match(phoneRegExp) || phone.val().length ==10){
        phone.removeClass("is-invalid");
        phone.addClass("is-valid");
        feedback.html("Enter a valid name.")
        return true;
    }
    else{
        phone.removeClass("is-valid");
        phone.addClass("is-invalid");
        return false;
    }
}


// $(function(){
//     randomImageGenerator();
//     randomQuotesGenerator();
// });


