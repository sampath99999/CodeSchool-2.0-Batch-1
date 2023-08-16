function loginLogout() {

  if ($("#loginLogout").text() === "Logout") {
    $("#loginLogout").text("Login");
  } else {
    $("#loginLogout").text("Logout");
  }
}


function updateCurrentTime() {
  var currentTime = new Date();
  var currentDate = new Date();

  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var hour = currentTime.getHours();
  var minute = currentTime.getMinutes();
  var meridiem = hour >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hour = hour % 12;
  hour = hour ? hour : 12; // Handle midnight (0 hours)

  var formattedTime =
    hour + ":" + (minute < 10 ? "0" : "") + minute + " " + meridiem;

  var year = currentDate.getFullYear();
  var month = months[currentDate.getMonth()];
  var day = currentDate.getDate();
  var formattedDate = day + "-" + month + "-" + year;

  $("#date").text(formattedDate);
  $("#time").text(formattedTime);
}

updateCurrentTime();

$("#acNo").on("input", function () {
  $(this).val($(this).val().replace(/\D/g, "")); 

  if ($(this).val().length > 22) {
    $(this).val($(this).val().substring(0, 22)); 
  }
});

$("#confirmAcNo").on("input", function () {
  $(this).val($(this).val().replace(/\D/g, ""));

  if ($(this).val().length > 22) {
    $(this).val($(this).val().substring(0, 22)); 
  }
});
$("#partyAmount").on("input", function () {
  $(this).val($(this).val().replace(/\D/g, "")); 

  if ($(this).val().length > 22) {
    $(this).val($(this).val().substring(0, 22)); 
  }
});

function accountValidation() {
  const accountNo = $("#acNo").val();

  if (accountNo.length === 0) {
    $("#acNoError").text("Account Number cannot be empty");
    return false;
  } else if (accountNo.length < 12 || accountNo.length > 22) {
    $("#acNoError").text("Account Number should be between 12 and 22 digits");
    return false;
  } else {
    $("#acNoError").text("");
    return true;
  }
}

function confirmAccountValidation() {
  const accountNo = $("#acNo").val();
  const confirmAccountNo = $("#confirmAcNo").val();

  if (confirmAccountNo.trim() === "") {
    $("#confirmAcNoError")
      .text("Confirm Account Number cannot be empty")
      .css("color", "red");
    return false;
  } else if (accountNo === confirmAccountNo) {
    $("#confirmAcNoError").text("Account Number Matched").css("color", "green");
    return true;
  } else {
    $("#confirmAcNoError")
      .text("Account Number Not Matched")
      .css("color", "red");
    return false;
  }
}

$("#confirmAcNo").on("blur", function () {
  console.log("hi");
  const password = $("#Acno").val();
  const confrimPassword = $("#confirmAcno").val();
  if (password !== confrimPassword) {
    console.log("hi");
  }
});

function partyNameValidation() {
  const name = $("#partyName");
  const nameValue = name.val();
  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  if (nameValue.trim() === "") {
    name.removeClass("is-valid");
    $("#partyNameError").text("field should not be empty");
    name.addClass("is-invalid");
    return false;
  } else if (specialChars.test(nameValue)) {
    name.removeClass("is-valid");
    $("#partyNameError").text("Should not have special characters");

    name.addClass("is-invalid");
    return false;
  } else {
    name.removeClass("is-invalid");
    name.addClass("is-valid");
    return true;
  }
}

function ifscCodeValidation() {
  const input = $("#ifscCode");
  const errorclass = $("#ifscerror");
  const inputvalue = input.val();

  if (inputvalue.trim() === "") {
    errorclass.text("IFSC code cannot be empty");
    input.removeClass("is-valid");
    input.addClass("is-invalid");
    return false;
  }

  var firstFourChars = inputvalue.substring(0, 4);

  if (!/^[A-Z]+$/.test(firstFourChars)) {
    errorclass.text("The first four characters should be capital Alphabets");
    input.removeClass("is-valid");
    input.addClass("is-invalid");
    return false;
  } else if (inputvalue[4] !== "0") {
    input.addClass("is-invalid");
    errorclass.text(
      "Please Enter 11 characters and fifth character should be 0"
    );
    input.removeClass("is-valid");
    return false;
  } else if (inputvalue.length != 11) {
    errorclass.text("IFSC should be 11 characters long");
    input.removeClass("is-valid");
    input.addClass("is-invalid");
    return false;
  }

  errorclass.text("");
  
  input.removeClass("is-invalid");
  input.addClass("is-valid");
  return true;
}

function ifscSearch() {
  const apiUrl = "https://ifsc.razorpay.com/" + $("#ifscCode").val();
  const bankName = $("#bankName");
  const branchName = $("#branchName");

  $.get(apiUrl)
    .done(function (data) {
      bankName.text(data.BANK);
      branchName.text(data.BRANCH);
    })
    .fail(function () {
      bankName.text("Data Not Available");
      branchName.text("Data Not Available");
    });
}

const mainObject = [
  {
    key: "0853001020002000000NVN",
    Balance: 1000000,
    LOC: 5000,
  },
  {
    key: "8342001170004001000NVN",
    Balance: 1008340,
    LOC: 4000,
  },
  {
    key: "2071011170004320000NVN",
    Balance: 14530000,
    LOC: 78000,
  },
  {
    key: "8342001170004002000NVN",
    Balance: 1056400,
    LOC: 34000,
  },
  {
    key: "2204000030006300303NVN",
    Balance: 123465400,
    LOC: 5000,
  },
];


function getBalanceForKey(key) {
  for (const obj of mainObject) {
    if (obj.key === key) {
      $("#balance").text(obj.Balance);
      $("#loc").text(obj.LOC);

      return;
    }
  }
  return null; 
}

$(document).ready(function () {
  $("#options").on("change", function () {
    
    var selectedValue = $(this).val();

    getBalanceForKey(selectedValue);
  });
});

$("#exp").on("change", function () {
  
  var selectedValue = $(this).val();

  getDetails(selectedValue);
});

function getDetails(a) {
  if (a == "Capital Expenditure") {
    $("#firstOption").text(
      "Maintain current levels of operation within the organization"
    );
    $("#secondOption").text("Expenses to permit future expansion.");
    $("#thirdOption").remove();
  } else if (a == "Revenue Expenditure") {
    $("#firstOption").text(
      "Sales costs or All expenses incurred by the firm that are directly tied to the manufacture and selling of its goods or services."
    );
    $("#secondOption").text(
      "All expenses incurred by the firm to guarantee the smooth operation."
    );

    $("#thirdOption").remove();
  } else if (a == "Deferred Revenue Expenditure") {
    $("#firstOption").text("Exorbitant Advertising Expenditures");
    $("#secondOption").text("Unprecedented Losses");
    $("#purposeType").append('<option id="thirdOption"></option>');


    $("#thirdOption").text("Development and Research Cost");
  } else {
    $("#firstOption").text("");
    $("#secondOption").text("");

    $("#thirdOption").text("");
  }
}
function showFiles() {
  var selectedFiles = $("#fileUpload")[0].files;

  for (var i = 0; i < selectedFiles.length; i++) {
    var newDiv = $("<div>");
    var buttonDiv = $("<div>");
    var fileText = $("<div>");

    newDiv.addClass("row col-12");
    fileText.addClass("col-8");
    buttonDiv.addClass("col-4");
    
    var deleteButton = $('<button><i class="bi bi-x"></i></button>');
    deleteButton.addClass("filesClass");
    deleteButton.on("click", Delete(newDiv));
    buttonDiv.append(deleteButton);

    

  
    fileText.append(document.createTextNode(selectedFiles[i].name));
    newDiv.append(fileText);
    newDiv.append(buttonDiv);

    $("#files").append(newDiv);
    $("#files").addClass("files");
  }
}
function Delete(divElement) {
  return function () {
    divElement.remove();
  };
}
function formValidation() {
  event.preventDefault();
  accountValidation();
  confirmAccountValidation();
  partyNameValidation();
  ifscCodeValidation();
  console.log($("#options").val());
  if ($("#options").val() === "0") {
    $("#optionsError").text("Please Select Head Of Account");
  } else {
    $("#optionsError").text("");
  }
  if ($("#exp").val() === "0") {
    $("#expError").text("Please Select Expenditure Type");
  } else {
    $("#expError").text("");
  }
  if ($("#purposeType").val() === "0") {
    $("#purposeTypeError").text("Please Select purpose Type");
  } else {
    $("#purposeTypeError").text("");
  }
  if ($("#purpose").val() === "") {
    $("#purposeError").text("Please Enter purpose");
  } else {
    $("#purposeError").text("");
  }
  if ($("#partyAmount").val() === "") {
    $("#partyAmountError").text("Please Enter Party Amount");
  } else {
    $("#partyAmountError").text("");
  }
  if ($("#fileUpload").val() === "") {
    $("#fileError").text("Please Select File");
  } else {
    $("#fileError").text("");
  }
}


$(document).ready(function () {
  
  if ($(window).width() >= 992) {
    $("#move").on("click", function () {
      var attributeValue = $("#body").attr("flag");
      if (attributeValue === "0") {
        $("#body").attr("flag", "1");
        $("#body").removeClass("moveRight");
        $("#body").addClass("moveLeft");
      } else {
        $("#body").attr("flag", "0");
        $("#body").removeClass("moveLeft");
        $("#body").addClass("moveRight");
      }
    });
  }
});

$(document).ready(function () {
  $("#partyAmount").on("keyup", function () {
    const numberInput = $("#partyAmount").val();
    const number = parseInt(numberInput, 10);
    if (isNaN(number)) {
      $("#result").text("Please enter a valid integer.");
    } else {
      const rupeeFormat = convert(number);
      $("#result").text(rupeeFormat);
    }
  });
});

function convert(number) {
  const wordsArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tensArr = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  if (number < 20) {
    return wordsArr[number];
  } else if (number < 100) {
    const tens = Math.floor(number / 10);
    const ones = number % 10;
    return tensArr[tens] + (ones ? "-" + wordsArr[ones] : "");
  } else if (number < 1000) {
    const hundreds = Math.floor(number / 100);
    const remaining = number % 100;
    return (
      wordsArr[hundreds] +
      " hundred" +
      (remaining ? " and " + convert(remaining) : "")
    );
  } else if (number < 100000) {
    const thousands = Math.floor(number / 1000);
    const remaining = number % 1000;
    return (
      convert(thousands) +
      " thousand" +
      (remaining ? " " + convert(remaining) : "")
    );
  } else if (number < 10000000) {
    const lakhs = Math.floor(number / 100000);
    const remaining = number % 100000;
    return (
      convert(lakhs) + " lakh" + (remaining ? " " + convert(remaining) : "")
    );
  } else if (number < 100000000) {
    const crores = Math.floor(number / 10000000);
    const remaining = number % 10000000;
    return (
      convert(crores) + " crore" + (remaining ? " " + convert(remaining) : "")
    );
  } else if (number < 10000000000) {
    const crores = Math.floor(number / 10000000);
    const remaining = number % 10000000;
    return (
      convert(crores) + " crores" + (remaining ? " " + convert(remaining) : "")
    );
  } else {
    return "Number is too large to convert.";
  }
}
