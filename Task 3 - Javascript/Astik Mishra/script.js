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

    var fname = document.forms['jsValidation']['First_Name'].value;
    var fNameExp = /^([A-Z]{1}[a-z]{1,49})/;
    if(fNameExp.test(fname) == false){
        setErr("fname","Invalid First Name.");
        returnVal = false;
    }

    var lname = document.forms['jsValidation']['Last_Name'].value;
    var lNameExp = /^([A-Z]{1}[a-z]{1,49})/;
    if(lNameExp.test(lname) == false){
        setErr("lname","Invalid Last Name.");
        returnVal = false;
    }

    var email = document.forms['jsValidation']['Email'].value;
    var emailExp = '/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/';
    if(emailExp.test(email) == false){
        setErr("email","Invalid Email.");
        returnVal = false;
    }

    var code= document.forms['jsValidation']['country_code'].value;
    if(code !== '+91'){
        setErr("c-code","Please select +91 as country code.");
        returnVal = false;
    }

    var pNo= document.forms['jsValidation']['Email'].value;
    var phExp='/^[0-9]{10}$/';
    if(phExp.test(pNo) == false){
        setErr("phone","Please input only 10 digits.");
        returnVal = false;
    }

    var pass= document.forms['jsValidation']['Password'].value;
    var passExp='/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,25}$/';
    if(passExp.test(pass) == false){
        setErr("pass","Invalid Password.");
        returnVal = false;
    }

    var cpass = document.forms['jsValidation']['Confirm_Password'].value;
    if(pass !== cpass){
        setErr("cpass","Password and Comfirm Password must be equal.");
        returnVal = false;
    }

    var dob = document.forms['jsValidation']['DOB'].value;
    var ActualDob = new Date(dob);
    var PresentDate = new Date();
    var ageDiff = 18;

    if(ActualDob >= PresentDate){
        setErr("dob","DOB could not be future date.");
        returnVal = false;
    }
    var age = PresentDate - ActualDob;
    var ageInYr = age / (31536000000);
    if(ageInYr < ageDiff){
        setErr("dob","DOB must be 18+.");
        returnVal = false;
    }

    var doj = document.forms['jsValidation']['DOJ'].value;
    if(doj < dob){
        setErr("doj","DOJ must be after DOB.");
        returnVal = false;
    }


    return returnVal;
}

function universities(){   
    clearErr();
    var country=document.getElementById('country').value;
    if(country=='India'){
        fetch('http://universities.hipolabs.com/search?country=india').then(data =>{
        return data.json();
        }).then(completedata => {
         completedata.forEach(element => {
            const markup = `<option>${element.name}</option>`;
            document.getElementById('university').insertAdjacentHTML('beforeend' , markup);
            
         })  
    });
    }
    else{
        setErr("college" , "Please select country as India");
    }
}
fetch('./PhoneCode.json').then(data =>{
    return data.json();
}).then(completedata => {
     completedata.forEach(element => {
        const markup = `<option>+${element.code}</option>`;
        document.getElementById('country_code').insertAdjacentHTML('beforeend' , markup);
     })  
});

fetch('./PhoneCode.json').then(data =>{
    return data.json();
}).then(completedata => {
     completedata.forEach(element => {
        const markup = `<option>${element.country}</option>`;
        document.getElementById('country').insertAdjacentHTML('beforeend' , markup);
     })  
});

fetch('https://demo-api-wh0x.onrender.com/register').then(data =>{
    return data.json();
}).then(completedata =>{
    completedata.forEach(element =>{
        const markup = `<li>${element}</li>`;
        document.getElementById('output').insertAdjacentHTML('beforeend' , markup);
    })
})



fetch('https://dog.ceo/api/breeds/image/random').then(data=>{
    return data.json;
}).then(completedata =>{
    completedata.setTimeout((element) => {
        const markup = `<img src='${element.message}' height="200" width= "100">`;
        document.getElementById('left_content').insertAdjacentHTML('beforeend' , markup);
    }, 30000);
})