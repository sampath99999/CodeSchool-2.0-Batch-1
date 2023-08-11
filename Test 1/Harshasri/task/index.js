function display(products){
    console.log(products);
    let product="";
    
    let total_sum=0;
      for (let i = 0; i<=3;i++){
            let roundPrice=parseInt(Math.floor(products[i].price));
            let random = Math.floor(Math.random() * 11);
            let ItemQntyTotal = Math.floor(products[i].price*random);
            total_sum+=Math.floor(ItemQntyTotal);
            console.log(ItemQntyTotal);
            
            product += `<div class="col-12 d-flex flex-row justify-content-center align-items-center text-white gap-3 ">
                            <div class="col-4">
                                <div class="image-div d-flex justify-content-center align-items-center">
                                    <img class="w-75 h-75"  border-radius:7px;" src="${products[i].image}" alt="Card image cap">
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="d-flex flex-column m-0">
                                    <h6>${products[i].title}</h6>
                                    <div class="d-flex flex-row justify-content-between col-10" >
                                        <p><b>Price</b> </p>
                                        <p class="fs-6">${roundPrice}</p>
                                    </div>
                                    <div class="d-flex flex-row justify-content-between col-10" >
                                        <p><b>Quantity</b> </p>
                                        <p class="fs-6">${random}</p>
                                    </div>
                                    <div class="d-flex flex-row justify-content-between col-10" >
                                        <p><b>Total Price</b> </p>
                                        <p class="fs-6">${ItemQntyTotal}</p>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                    </div>`;
                total=`<div class="d-flex flex-row justify-content-between" >
                <h5><b>Total Price</b> </h5>
                <h5>${total_sum}/-</h5>
            </div>`
        }
      document.getElementById("demo").innerHTML = product;
      document.getElementById("total").innerHTML = total;
      
}

//validation

//First Name



  $(document).ready(function () {
    //left-part
    $.get(
        "https://fakestoreapi.com/products",
        function (data, status) {
        display(data);
        
        }
    );

  
  
    // Validate Firstname
    $("#fnameErrorMsg").hide();
    let ValidFirstName = true;
    $("#firstName").keyup(function () {
        validateFirstName();
    });
 
    function validateFirstName() {
        function firstChar(str){
            return /^[A-Z]/.test(str);
        }

        function onlyLettersAndNumbers(str) {
            return /^[A-Za-z]*$/.test(str);
        }

        let firstnameValue = $("#firstName").val();
        console.log(firstnameValue);
        if (firstnameValue == "") {
            $("#fnameErrorMsg").show();
            ValidFirstName = false;
            return false;
            
        } else if (firstnameValue.length < 2 || firstnameValue.length > 50) {
            $("#fnameErrorMsg").show();
            $("#fnameErrorMsg").html("*length of username must be between 2 and 50");
            ValidFirstName = false;
            return false;
            
        } else if (firstChar(firstnameValue[0])===false){
            $("#fnameErrorMsg").show();
            $("#fnameErrorMsg").html("*First character should be Title case");
            ValidFirstName = false;
            return false;

            
        } else if(onlyLettersAndNumbers(firstnameValue)===false){
            $("#fnameErrorMsg").show();
            $("#fnameErrorMsg").html("*First character should be Title case");
            ValidFirstName = false;
            return false;

        }

        else {
            $("#fnameErrorMsg").hide();
            return true;
        }
        
    }


    //validate LastName
    $("#lnameErrorMsg").hide();
    let ValidLastName = true;
    $("#lastName").keyup(function () {
        validateLastName();
    });
 
    function validateLastName() {
        function firstChar(str){
            return /^[A-Z]/.test(str);
        }

        function onlyLettersAndNumbers(str) {
            return /^[A-Za-z]*$/.test(str);
        }

        let firstnameValue = $("#lastName").val();
        console.log(firstnameValue);
        if (firstnameValue == "") {
            $("#lnameErrorMsg").show();
            ValidLastName = false;
            return false;
            
        } else if (firstnameValue.length < 2 || firstnameValue.length > 50) {
            $("#lnameErrorMsg").show();
            $("#lnameErrorMsg").html("*length of username must be between 2 and 50");
            ValidLastName = false;
            return false;
            
        } else if (firstChar(firstnameValue[0])===false){
            $("#lnameErrorMsg").show();
            $("#lnameErrorMsg").html("*First character should be Title case");
            ValidLastName = false;
            return false;

            
        } else if(onlyLettersAndNumbers(firstnameValue)===false){
            $("#lnameErrorMsg").show();
            $("#lnameErrorMsg").html("*First character should be Title case");
            ValidLastName = false;
            return false;

        }

        else {
            $("#lnameErrorMsg").hide();
        }
        return true;
    }


    //validate Email
    $("#emailErrorMsg").hide();
    let validEmail = true;
    $("#email").keyup(function () {
        validateEmail();
    });

    function validateEmail() {
        
        var validRegex = /^((?!\.)(?!.\.$)(?!.?\.\.)[a-z0-9.]{1,30})[@][a-z0-9]{2,}([.][a-z]{2,})+$/;
        

        let emailValue = $("#email").val();
        console.log(emailValue);
        if (emailValue == "") {
            $("#emailErrorMsg").show();
            validEmail = false;
            return false;
       

        }
        
        else if(emailValue.match(validRegex)){
            $("#emailErrorMsg").hide();
            
            validEmail = true;
            return true;
      
            
        }
        
         else if(emailValue.match((/(\..*){2,}/))){
            $("#emailErrorMsg").show();
            $("#emailErrorMsg").html("**No Consecutive Dots!");
            validEmail = false;
            return false;
      
            
        } else if(emailValue.split('@').length>2){
            $("#emailErrorMsg").show();
            $("#emailErrorMsg").html("**Single '@' Symbol!");
            validEmail = false;
            return false;

        }

        else if(emailValue.split(' ').length>1){
            $("#emailErrorMsg").show();
            $("#emailErrorMsg").html("*No spaces Allowed!");
            validEmail = false;
            return false;
        }
        else {
            $("#emailErrorMsg").hide();
        }
        return true;
    }
    //validate phone
    $("#phoneErrorMsg").hide();
    let validPhone = true;
    $("#phone").keyup(function () {
        validPhoneNumber();
    });

    function validPhoneNumber() {
        let phoneValue = $("#phone").val();

        const number = /^[0-9]+$/.test(phoneValue);
        const alpha = /^[A-Za-z]+$/;
        var isValid = alpha.test(phoneValue);
        const specialChars = /[`!@#$%^&*]/;
        var isSpecial = specialChars.test(phoneValue);
 
        
        

        
        console.log(phoneValue);
        if (phoneValue == "") {
            $("#phoneErrorMsg").show();
            validPhone = false;
            return false;
       

        }
        else{
            if(number){
               
                $("#phoneErrorMsg").hide();
                validPhone = true;
                return true;
            }
            else if(isSpecial){
                $("#phoneErrorMsg").show();
                $("#phoneErrorMsg").html("Phone Number Should not contain Special Character");
                validPhone = false;
                return false;
          
                
            }
            else if(phoneValue[0]==='+'){
                $("#phoneErrorMsg").show();
                $("#phoneErrorMsg").html("Phone number without country code (e.g., +1)");
                validPhone = false;
                return false;
          
                
            }
            else if(!isValid){
                $("#phoneErrorMsg").show();
                $("#phoneErrorMsg").html("Phone Number Should not contain letters");
                validPhone = false;
                return false;
          
                
            }

            // else {
            //     $("#phoneErrorMsg").hide();
            //     return true;
            // }
        }
        
  
    }







    function validateFormData(){
        console.log(!validateFirstName());
        console.log(!validateLastName());
        console.log(!validateEmail());

        if(!validateFirstName()  && !validateLastName() && !validateEmail() && !validPhoneNumber()){
            console.log("Fail");
        }
        else{
           
            console.log("success");
        }
        
        
    }

    $("#myForm").submit(function(e){
        e.preventDefault();
        validateFormData();
       
    });

  


});
