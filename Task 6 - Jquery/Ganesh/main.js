// Get Last Login Date & Time.
$("document").ready(function(){
    const dateObject = new Date();
    $("#login-date").text(dateObject.getDate() +"-"+ (dateObject.toLocaleString('default', { month: 'short'})) +"-"+ dateObject.getFullYear())
    $("#login-time").text(dateObject.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
});

// Login and Logout credentials
function loginUser(credential){
    if(credential.text() === 'Logout'){
        credential.text("Login");
        $("#userProfile").addClass("d-md-none");
    }else{
        credential.text("Logout");
        $("#userProfile").removeClass("d-md-none");
    }
}

// Load Bank Details by IFSC Code.
function loadBankDetails(ifscCode){
    if(ifscCode == ''){
        $("#bankName").val("XXXXX");
        $("#bankBranch").val("XXXXX");
        $("#bankIfscCode").addClass("is-invalid");
        $("#bankIfscFeedback").text("Field is required!");
        return false;
    }
    else{
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://ifsc.razorpay.com/" + ifscCode,
            "method": "GET"
        }
        $.ajax(settings)
            .done(function (response) {
                $("#bankIfscCode").removeClass("is-invalid");
                $("#bankName").val(response.BANK);
                $("#bankBranch").val(response.BRANCH);
                return true;
            })
            .fail(function (){
                $("#bankIfscCode").addClass("is-invalid");
                $("#bankIfscFeedback").text("IFSC Code is Invalid!");
                return false;
            }); 
    }
    
}

// Load Head of Accounts Details.
function loadHoAccountDetails(headOfAC){
    if(headOfAC == null) {
        $('#headOfAccount').addClass("is-invalid");
        $('#headOfAccountFeedback').text("Field is required!");
        return false;
    } else {
        let headOfACDetails = {
            "0853001020002000000NVN":{
                "balance": 1000000,
                "loc": 5000
            },
            "8342001170004001000NVN":{
                "balance": 1008340,
                "loc": 4000
            },
            "2071011170004320000NVN":{
                "balance": 14530000,
                "loc": 78000
            },
            "8342001170004002000NVN":{
                "balance": 1056400,
                "loc": 34000
            },
            "2204000030006300303NVN":{
                "balance": 123465400,
                "loc": 5000
            }
        };
        $('#headOfAccount').removeClass("is-invalid");
        $("#bankBalance").val(headOfACDetails[headOfAC].balance);
        $("#bankLOC").val(headOfACDetails[headOfAC].loc);
        return true;
    }
}
   
// Load Purpose Type.
function loadPurposeTypes(expenditureType){
    if(expenditureType == null){
        $("#expenditureType").addClass("is-invalid");
        $("#expenditureTypeFeedback").text("Field is required!");
        return false;
    } else {
        let purposeType = {
            "Capital Expenditure": [
                "Maintain current levels of operation within the organization",
                "Expenses to permit future expansion"
            ],
            "Revenue Expenditure": [
                "Sales costs or All expenses incurred by the firm that are directly tied to the manufacture and selling of its goods or services",
                "All expenses incurred by the firm to guarantee the smooth operation"
            ],
            "Deferred Revenue Expenditure": [
                "Exorbitant Advertising Expenditures",
                "Unprecedented Losses",
                "Development and Research Cost"
            ]
        };
        $("#expenditureType").removeClass("is-invalid");
        let typesOfPurpose = purposeType[expenditureType];
        for(let type in typesOfPurpose){
            $("#purposeType").append(`
                <option value="${typesOfPurpose[type]}">${typesOfPurpose[type]}</option>
            `);
        }
        return true;
    }

}

// Validating function for transaction type.
function validateTransType(){
    // On Click listener for Radio Input.
    $("input[name='transactionType']").on("click", function(){
        $("input[name='transactionType']").removeClass("is-invalid");
    });
    // Validating Condition.
    if($('input[name="transactionType"]:checked').length == 0){
        $("input[name='transactionType']").addClass("is-invalid");
        $("#transactionTypeFeedback").text("Field is required!")
        return false;
    }
    else{
        $("input[name='transactionType']").removeClass("is-invalid");
        return true;
    }
}

// Validating function for party account number.
function validatePartyAccount(){
    let acNumber = $("#partyAccountNum");
    if(acNumber.val() == ''){
        acNumber.addClass("is-invalid");
        $("#partyAccountNumFeedback").text("Field is required!");
        return false;
    }
    else if(!(acNumber.val().length >= 12 && acNumber.val().length <= 22)){
        acNumber.addClass("is-invalid");
        $("#partyAccountNumFeedback").text("Account should be min 12 and max 22 digits");
        return false;
    }
    else{
        acNumber.removeClass("is-invalid");
        return true;
    }
}

// Validating function for confirm party account number.
function confirmPartyAccount(){
    let account = $("#partyAccountNum");
    let confirmAccount = $("#partyConfirmAccountNum");
    if(confirmAccount.val() == ''){
        confirmAccount.addClass("is-invalid");
        $("#partyConfirmAccountNumFeedback").text("Field is required!");
        return false;
    }
    else if(account.val() !== confirmAccount.val()){
        confirmAccount.addClass("is-invalid");
        $("#partyConfirmAccountNumFeedback").text("Account Number does not match!");
        return false;
    }
    else{
        confirmAccount.removeClass("is-invalid");
        return true;
    }
}

// Validating function for party name.
function validatePartyName(){
    let nameRegExp = /^[A-Za-z ]{2,}$/;
    let name = $("#partyName");
    if(name.val() == ''){
        name.addClass("is-invalid");
        $("#partyNameFeedback").text("Field is required!");
        return false;
    }
    else if(name.val().match(nameRegExp)){
        name.removeClass("is-invalid");
        return true;
    }
    else{
        name.addClass("is-invalid");
        $("#partyNameFeedback").text("Special Characters are not allowed!");
        return false;
    }
}

// Validating function for purpose type.
function validatePurposeType(type){
    if(type == null){
        $("#purposeType").addClass("is-invalid");
        $("#purposeTypeFeedback").text("Field is required!");
        return false;
    } else {
        $("#purposeType").removeClass("is-invalid");
        return true;
    }
}

// Validating function for purpose in brief.
function validateBriefPurpose(){
    let purpose = $("#briefPurpose");
    if(purpose.val().length == 0){
        $("#briefPurposeFeedback").text("Field is required!");
        purpose.addClass("is-invalid");
        return false;
    }
    else if(purpose.val().length > 500){
        $("#briefPurposeFeedback").text("Max 500 characters allowed");
        purpose.addClass("is-invalid");
        return false;
    }
    else{
        purpose.removeClass("is-invalid");
        return true;
    }
}

// Validating the Transactional Details.
function checkPartyTransDetails(){
    event.preventDefault();
    let trans = validateTransType();
    let ac = validatePartyAccount();
    let confirmAC = confirmPartyAccount();
    let name  = validatePartyName();
    let briefPurpose = validateBriefPurpose();
    let purposeLoad = loadPurposeTypes($('#expenditureType').val());
    let purposeType = validatePurposeType($('#purposeType').val());
    let bankDetails = loadBankDetails($('#bankIfscCode').val());
    let hoc = loadHoAccountDetails($('#headOfAccount').val());
    if(trans&&ac&&confirmAC&&name&&briefPurpose&&purposeLoad&&purposeType&&bankDetails&&hoc){
        return true;
    } else {
        return false;
    }
}