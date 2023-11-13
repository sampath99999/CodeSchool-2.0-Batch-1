
window.addEventListener('load', () => {

  const input = document.getElementById("upload");
  const fileWrapper = document.getElementById("fileWrapper");

  input.addEventListener("change", (e) => {
    // console.log(e.target.files[0].name);
    let fileName = e.target.files[0].name;

    fileshow(fileName);

  })



  const fileshow = (fileName) => {
    const showFileboxElement = document.createElement("div");
    showFileboxElement.classList.add("show-file-box");
    const leftEle = document.createElement("div");
    leftEle.classList.add("left");



    const fileTitleEle = document.createElement("h4");
    fileTitleEle.innerHTML = fileName;
    leftEle.append(fileTitleEle);

    showFileboxElement.append(leftEle);

    const rightEle = document.createElement("div");
    rightEle.classList.add("right");
    showFileboxElement.append(rightEle);

    const crossEle = document.createElement("span");
    crossEle.innerHTML = "&#215";
    rightEle.append(crossEle);

    fileWrapper.append(showFileboxElement);

    crossEle.addEventListener("click", () => {
      fileWrapper.removeChild(showFileboxElement);
    })
  }

})




$("#sidebar-toggle").click(function (e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

function updateDate() {
  var today = new Date();
  const year = today.getFullYear();
  const month = today.toLocaleString('default', { month: 'long' });
  console.log(month);
  const day = today.getDate();
  var fullDate = day + "-" + month + "-" + year;
  $("#date").text(fullDate);


}
function updateTime() {
  let date = new Date();
  var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  var am_pm = date.getHours() >= 12 ? "PM" : "AM";
  hours = hours < 10 ? "0" + hours : hours;
  var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
  $("#time").html(time);



}
function onClickLogout() {
  console.log("Clicked");
  // var status = $("#on");
  var status = $("#on").text();
  console.log(status);
  if (status == "Logout") {
    $("#on").text("LogIn");
  }
  else {
    $("#on").text("Logout");
  }
}

function fillDetails(data) {
  const { BANK, BRANCH } = data;
  $("#bankName").html(BANK);
  $("#branchName").html(BRANCH);
}

function searchIFSCCode() {
  let ifscVal = $("#ifscCode").val();
  $.ajax({
    url: `https://ifsc.razorpay.com/${ifscVal}`,
    type: "GET",
    success: function (data) {
      fillDetails(data);
    },
    error: function (data) {
      $("#bankName").html("XXXXX");
      $("#branchName").html("XXXXX");
    },
  });
}





window.onload = () => {
  updateDate();
  updateTime();
  setInterval(updateTime, 1000);






}


$(document).ready(function () {

  //party Account
  $("#partyAccountErrorMsg").hide();
  let ValidPartyNumber = true;
  $("#partyAccount").keyup(function () {
    validatePartyAccount();
  });

  function validatePartyAccount() {

    let partyAccountValue = $("#partyAccount").val();
    const number = /^\d+$/.test(partyAccountValue);
    console.log(partyAccountValue);

    if (!partyAccountValue) {
      $("#partyAccountErrorMsg").show();
      ValidPartyNumber = false;
      return false;
    }

    else if (!number) {
      $("#partyAccountErrorMsg").show();
      $("#partyAccountErrorMsg").html("*Party Account should contain Number Only!");
      ValidPartyNumber = false;
      return false;
    }
    else if (partyAccountValue[0] != "0") {
      $("#partyAccountErrorMsg").show();
      $("#partyAccountErrorMsg").html("*Party Number Can have zero in the begining!");
      ValidPartyNumber = false;
      return false;
    }
    else if (partyAccountValue.length < 12 || partyAccountValue.length > 22) {
      $("#partyAccountErrorMsg").show();
      $("#partyAccountErrorMsg").html("*length of username must be between 12 and 22");
      ValidPartyNumber = false;
      return false;
    }

    else {
      $("#partyAccountErrorMsg").hide();
      return true;
    }
  }

  //Confim party Account

  $("#confirmPartyAccountErrorMsg").hide();
  let ValidConfirmPartyNumber = true;
  $("#confirmPartyAccount").keyup(function () {
    validateConfirmartyAccount();
  });

  function validateConfirmartyAccount() {

    let confirmPartyAccountValue = $("#confirmPartyAccount").val();
    let partyAccountVal = $("#partyAccount").val();
    const confirmNumber = /^\d+$/.test(confirmPartyAccountValue);
    console.log(confirmPartyAccountValue);

    if (!confirmPartyAccountValue) {
      $("#confirmPartyAccountErrorMsg").show();
      ValidConfirmPartyNumber = false;
      return false;
    }
    else if (!confirmNumber) {
      $("#confirmPartyAccountErrorMsg").show();
      $("#confirmPartyAccountErrorMsg").html("*Confirm Party Account should contain Number Only!");
      ValidConfirmPartyNumber = false;
      return false;
    }
    else if (confirmPartyAccountValue[0] != "0") {
      $("#confirmPartyAccountErrorMsg").show();
      $("#confirmPartyAccountErrorMsg").html("*Confirm Party Number Can have zero in the begining!");
      ValidConfirmPartyNumber = false;
      return false;
    }
    else if (confirmPartyAccountValue.length < 12 || confirmPartyAccountValue.length > 22) {
      $("#confirmPartyAccountErrorMsg").show();
      $("#confirmPartyAccountErrorMsg").html("*length of username must be between 12 and 22");
      ValidConfirmPartyNumber = false;
      return false;
    }
    else if (partyAccountVal != confirmPartyAccountValue) {
      $("#confirmPartyAccountErrorMsg").show();
      $("#confirmPartyAccountErrorMsg").html("*Confirm Party Account is not matched!");
      ValidConfirmPartyNumber = false;
      return false;
    }



    else {
      $("#confirmPartyAccountErrorMsg").hide();
      return true;
    }
  }

  //party Name
  $("#partyNameErrorMsg").hide();
  let ValidPartyName = true;
  $("#partyName").keyup(function () {
    validatePartyName();
  });

  function validatePartyName() {
    function firstChar(str) {
      return /^[A-Z]/.test(str);
    }

    function onlyLettersAndNumbers(str) {
      return /^[A-Za-z]*$/.test(str);
    }

    let partyNameValue = $("#partyName").val();
    console.log(partyNameValue);
    let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let isSpecial = specialChars.test(partyNameValue);
    console.log(isSpecial);


    if (!partyNameValue) {
      $("#partyNameErrorMsg").show();
      ValidPartyName = false;
      return false;
    }
    else if (firstChar(partyNameValue[0]) === false) {
      $("#partyNameErrorMsg").show();
      $("#partyNameErrorMsg").html("*First character should be Title case");
      ValidFirstName = false;
      return false;
    } else if (partyNameValue.length < 2 || partyNameValue.length > 50) {
      $("#partyNameErrorMsg").show();
      $("#partyNameErrorMsg").html("*length of username must be between 2 and 50");
      ValidFirstName = false;
      return false;
    }
    else if (isSpecial) {
      $("#partyNameErrorMsg").show();
      $("#partyNameErrorMsg").html("*Party Name should not contain Special Characters!");
      ValidPartyName = false;
      return false;
    }

    else if (onlyLettersAndNumbers(partyNameValue) === false) {
      $("#partyNameErrorMsg").show();
      $("#partyNameErrorMsg").html("*Party Name should not contain Numbers!");
      ValidFirstName = false;
      return false;
    }




    else {
      $("#partyNameErrorMsg").hide();
      return true;
    }
  }


  //ifsc

  $("#ifscErrorMsg").hide();
  let ValidIfscCode = true;
  $("#ifscCode").keyup(function () {
    validateIfscCode();
  });

  function validateIfscCode() {
    let ifscCodeValue = $("#ifscCode").val();
    console.log(ifscCodeValue);

    let four = ifscCodeValue.substring(0, 4);

    function checkIfsc(str) {
      let reg = /^[A-Z|a-z]{4}[0][0-9]{6}$/;
      // console.log(ifscCodeValue.match(str));
      if (ifscCodeValue.match(reg)) {
        // console.log(ifscCodeValue.match(reg) +"hi");
        return true;
      }
      else {
        return false;
      }
    }




    if (!ifscCodeValue) {
      $("#ifscErrorMsg").show();
      ValidIfscCode = false;
      return false;
    }

    // if(/[a-zA-Z]{4}/.test(ifscCodeValue)===false){
    //   console.log(/^[a-zA-Z]{4}$/.test(ifscCodeValue));
    // // if(/^[a-zA-Z]{4}$/.test(four)===false){
    // // if(four.match(/[a-zA-Z]/)===false){
    //   $("#ifscErrorMsg").show();
    //   $("#ifscErrorMsg").html("*IFSC Code first four characters should be alphabets!");
    //   ValidIfscCode = false;
    //   return false;
    // }

    if (ifscCodeValue.charAt(4) != "0") {
      $("#ifscErrorMsg").show();
      $("#ifscErrorMsg").html("*IFSC Code should contain 0 at 5th character!");
      ValidIfscCode = false;
      return false;
    }
    if (ifscCodeValue.length != 11) {
      $("#ifscErrorMsg").show();
      $("#ifscErrorMsg").html("*IFSC Code should be 11 characters!");
      ValidIfscCode = false;
      return false;
    }

    if (checkIfsc(ifscCodeValue) === false) {

      $("#ifscErrorMsg").show();
      $("#ifscErrorMsg").html("*Invalid IFSC Code!");
      ValidIfscCode = false;
      return false;
    }


    else {
      $("#ifscErrorMsg").hide();
      return true;
    }
  }

  //headAccount



  $(document).on("change", "#headAccount", function () {
    var option = ($(this).find("option:selected").text());
    var val = (this.value);
    validateHeadAccount(option, val);
  });

  function validateHeadAccount(option, val) {
    console.log(option, val);
    if (val === "1") {
      $("#balance").html("1000000");
      $("#loc").html("500");
    }
    else if (val === "2") {
      $("#balance").html("1008340");
      $("#loc").html("4000");
    }
    else if (val === "3") {
      $("#balance").html("14530000");
      $("#loc").html("78000");
    }
    else if (val === "4") {
      $("#balance").html("1056400");
      $("#loc").html("34000");
    }
    else if (val === "5") {
      $("#balance").html("123465400");
      $("#loc").html("5000");
    }
    else {
      $("#balance").html("XXXXX");
      $("#loc").html("XXXXX");
    }

  }


  //purpose

  $("#purposeErrorMsg").hide();
  let validpurpose = true;
  $("#purpose").keyup(function () {
    validatePurpose();
  });

  function validatePurpose() {
    var maxLength = 500;
    var purposeValue = $("#purpose").val();
    var textLength = purposeValue.length;

    if (!purposeValue) {
      $("#purposeErrorMsg").show();
      validPurpose = false;
      return false;
    }
    else if (textLength > maxLength) {
      // purposeValue(purposeValue.substring(0, (maxLength)));
      console.log("Sorry, you only " + maxLength + " characters are allowed");
      $("#purposeErrorMsg").show();
      $("#purposeErrorMsg").html("*Sorry, only " + maxLength + " characters are allowed!");
      validPurpose = false;
      return false;
    }

    else {
      $("#purposeErrorMsg").hide();
      return true;
    }
  }

  //Rupees
  $("#partyAmountErrorMsg").hide();
  let validPartyAmount = true;
  $("#partyAmount").keyup(function () {
    validatePartyAmount();
  });


  function validatePartyAmount() {

    let partyAmountValue = $("#partyAmount").val();
    const num = /^\d+$/.test(partyAmountValue);
    console.log(partyAmountValue);

    //
    one = ["", "One ", "Two ", "Three ", "Four ",
      "Five ", "Six ", "Seven ", "Eight ",
      "Nine ", "Ten ", "Eleven ", "Twelve ",
      "Thirteen ", "Fourteen ", "Fifteen ",
      "Sixteen ", "Seventeen ", "Eighteen ",
      "Nineteen "];


    ten = ["", "", "Twenty ", "Thirty ", "Forty ",
      "Fifty ", "Sixty ", "Seventy ", "Eighty ",
      "Ninety "];


    n = parseInt(partyAmountValue);


    function each(z, x) {
      s = ''

      if (z > 19) {
        s += ten[Math.floor(z / 10)] + one[Math.floor(z % 10)];

      }
      else {
        s += one[z]
      }
      if (z > 0) {
        s += x;
      }
      // console.log(s);
      return s;


    }

    function convertWords(n) {

      res = "";

      res += each(((Math.floor(n / 10000000))), "crore ");
      res += each(((Math.floor(n / 100000)) % 100), "lakh  ");
      res += each(((Math.floor(n / 1000)) % 100), "thousand  ");


      res += each(((Math.floor(n / 100)) % 10), "hundred ");
      if (n > 100 && n % 100) {
        res += "and "
      }

      res += each((n % 100), "")

      return res;
    }

    let result = convertWords(n);
    if (!partyAmountValue) {
      $("#partyAmountMsg").show();
      validPartyAmount = false;
      return false;
    }
    if (!num) {
      $("#partyAmountMsg").show();
      $("#partyAmountMsg").html("*Party Amount should contain Number Only!");
      validPartyAmount = false;
      return false;
    }
    else if (partyAmountValue) {
      console.log(partyAmountValue);
      $("#partyAmountMsg").show();
      $("#partyAmountMsg").html(result + "Rs.");
      validPartyAmount = true;
      return true;

    }
    else {

      $("#partyAmountMsg").hide();
      return true;

    }
  }


  //upload

  $("#myForm").submit(function (e) {
    e.preventDefault();
    const partyAccountInput = validatePartyAccount();
    const confirmPartyAccountInput = validateConfirmartyAccount();
    const validatePartyNameInput = validatePartyName();
    const validateIfscCodeInput = validateIfscCode();
    const validatePurposeInput = validatePurpose();
    const validatePartyAmountInput = validatePartyAmount();
    console.log(partyAccountInput);
    console.log(confirmPartyAccountInput);
    console.log(validatePartyNameInput);
    console.log(validateIfscCodeInput);
    console.log(validatePurposeInput);
    console.log(validatePartyAmountInput);

    if (
      partyAccountInput === true &&
      confirmPartyAccountInput === true &&
      validatePartyNameInput === true &&
      validateIfscCodeInput === true &&
      validatePurposeInput === true &&
      validatePartyAmountInput === true) {
      console.log("successfully Submitted!!");
      document.getElementById("demo").innerHTML = "successfully Submitted!!";
    } else {
      console.log("Failed");
      document.getElementById("demo").innerHTML = "Incorrect Details!!";
    }

  });
});