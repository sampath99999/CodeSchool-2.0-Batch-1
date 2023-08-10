function name1(){
    var Name=document.getElementById('Name2').value;
    console.log(Name)
    if(Name===''){
        document.getElementById('name-error').innerHTML ='required field!';
        return false;
    }
    else if (Name.length < 3 || Name.length > 50) {
          document.getElementById('name-error').innerHTML = 'First Name must be between 2 and 50 characters.';
          return false;
    } 
    else if (!/^[A-Z][a-z]{1,49}$/.test(Name)) {
          document.getElementById('name-error').innerHTML = 'first letter must should be capital only and rest will be small';
          return false;
    } 
    else {
          document.getElementById('name-error').style.display = 'none';
          return true;
    }
}
function email(){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email=document.getElementById('Email').value;
    console.log(email);
    if(email===''){
      document.getElementById('email-error').innerHTML="Required Field";
      return false;
    }
    else if (!emailRegex.test(email)){
        document.getElementById('email-error').innerHTML='please enter the vaild email';
        return false;
    }
    else{
        document.getElementById('email-error').style.display='none';
        return true;
    }
}
function password(){
    let password=document.getElementById("Password").value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,25}$/;
    if(password===''){
        document.getElementById('password-error').innerHTML ='Please Enter Password';
        return false;
    }
    else if (password.length < 5 || password.length > 25) {
        document.getElementById('password-error').innerHTML = 'Password must be between 5 and 25 characters.';
        return false;
    } else if (!passwordRegex.test(password)) {
        document.getElementById('password-error').innerHTML =
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
         return false;  
    } else if (/\s/.test(password)) {
        document.getElementById('password-error').innerHTML = 'Password cannot contain spaces.';
        return false;
    } else {
        document.getElementById('password-error').innerHTML = '';
        return true;
    }
}
function check(){
    var password2=document.getElementById('confirm-Password').value;
    var password1=document.getElementById('Password').value;
    if(password2===''){
        document.getElementById('confirm-error').innerHTML="please enter the password"
        return false;
    }
    else if(password2 != password1){
        document.getElementById('confirm-error').innerHTML="password should be same."
        return false;
    }
    else{
        document.getElementById('confirm-error').style.display='none';
        return true;
    }

}
function signUp(){
    event.preventDefault()
    name1()
    email()
    password()
    check()
}