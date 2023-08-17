let partyAccount = $("#partyAccount");
let partyAccountErrMsg = $("#partyAccountErrMsg");
let conPartyAccNo = $("#conPartyAccNo");
let conPartyAccNoErrMsg = $("conPartyAccNoErrMsg");
let partyName = $("#partyName");
let partyNameErrMsg = $("#partyNameErrMsg");
let ifscCode = $("#ifscCode");
let ifscCodeErrMsg = $("#ifscCodeErrMsg");
let bankName = $("#bankName");
let branch = $("#branch");
let balance = $("#balance");
let loc = $("#loc");
let purpose = $("#purpose");
let purposeErrMsg = $("purposeErrMsg");
let upload = $("#upload");
let upload_items = $(".upload_items");
let loginTime = $("#loginTime");
let loginDate = $("#loginDate");
let logout = $("#logout");
let addBtn = $("#addBtn");

var partyAccountNoRes;
var confirmPartyAccountRes;
var partyNameRes;
var bankIfscRes;
var headOfAccountRes;
var expenditureTypeRes;
var purposeTypeRes;
var purposeRes;
var partyAmountRes;
var uploadDocumentsRes;

const months = [
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

let dateTime = new Date();
let month = months[dateTime.getMonth()];
let year = dateTime.getFullYear();
let date = dateTime.getDate();
const now = new Date()
  .toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  })
  .toLowerCase();

let loginTxt = false;

loginDate.text(`${date}-${month}-${year}`);
loginTime.text(now);
logout.click(function () {
  loginTxt = !loginTxt;
  if (loginTxt) {
    logout.html(`Login<i class="bi bi-box-arrow-in-right"></i>`);
  } else {
    logout.html(`<i class="bi bi-box-arrow-right"></i>Logout`);
  }
});

$(document).ready(function () {
  var offcanvas = new bootstrap.Offcanvas(
    document.getElementById("offcanvasWithBothOptions"),
    {
      backdrop: true,
      scroll: true,
    }
  );

  $("#offcanvasToggleButton").click(function () {
    $("body").toggleClass("offcanvas-show");
    offcanvas.toggle();
  });

  $("#offcanvasWithBothOptions").on("hidden.bs.offcanvas", function () {
    $("body").removeClass("offcanvas-show");
  });

  $(".navbar-toggler").click(function () {
    $(".left_section").toggle(50);
  });

  let fileListContainer;
  let fileList;

  $("#upload").change(function (e) {
    fileList = e.target.files;
    fileListContainer = $(".upload_items");
  });
  $("#addBtn").click(function (e) {
    e.preventDefault();

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const fileItem = $("<li class='file_item m-3'></li>");
      const fileName = $("<div class='file_name'></div>").text(file.name);
      const deleteButton = $("<div class='delete_button'>X</div>");

      deleteButton.click(function () {
        fileItem.remove();
      });

      fileItem.append(fileName);
      fileItem.append(deleteButton);
      fileListContainer.append(fileItem);
    }
    upload.val("");
  });
});

function addDetails(data) {
  const { BANK, BRANCH } = data;
  $("#bankName").text(BANK);
  $("#branchName").text(BRANCH);
}

$("#searchBtn").click(function (e) {
  e.preventDefault();
  console.log("from search");

  let ifscCodeVal = $("#ifscCode").val();
  $.ajax({
    url: `https://ifsc.razorpay.com/${ifscCodeVal}`,
    type: "GET",
    success: function (data) {
      addDetails(data);
    },
    error: function (data) {
      $("#bankName").text("XXXXX");
      $("#branchName").text("XXXXX");
    },
  });
});

function onInputChange() {
  const inputField = $("#partyAmoutInWords");
  const errorDisplay = $("#partyAmoutInWordsErrMsg");
  const amountInWordsDisplay = $("#amountInWords");

  const amountValue = inputField.val().trim();
  const isValidAmount = /^\d+$/.test(amountValue);

  if (amountValue === "") {
    errorDisplay.text("Party Amount should not be empty.");
    amountInWordsDisplay.text("");
  } else if (!isValidAmount) {
    errorDisplay.text("Party Amount should be a whole number.");
    amountInWordsDisplay.text("");
  } else {
    errorDisplay.text("");
    const amountInWords = partyAmountInWords(amountValue);
    amountInWordsDisplay.text(amountInWords);
  }
}

function partyAmountInWords(amount) {
  var ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  var teens = [
    "",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  var tens = [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Fourty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  function numbersToWords(number) {
    if (number === 0) return "";
    else if (number < 10) return ones[number];
    else if (number < 20) return teens[number - 10];
    else if (number < 100)
      return tens[Math.floor(number / 10)] + " " + ones[number % 10];
    else
      return (
        ones[Math.floor(number / 100)] +
        " Hundred " +
        numbersToWords(number % 100)
      );
  }
  var words = "";
  var crores = Math.floor(amount / 10000000);
  var lakhs = Math.floor((amount % 10000000) / 100000);
  var thousands = Math.floor((amount % 100000) / 1000);
  var remaining = Math.round(amount % 1000);

  if (crores > 0) {
    words += numbersToWords(crores) + " Crore ";
  }

  if (lakhs > 0) {
    words += numbersToWords(lakhs) + " Lakh ";
  }

  if (thousands > 0) {
    words += numbersToWords(thousands) + " Thousand ";
  }

  if (remaining > 0) {
    words += numbersToWords(remaining);
  }
  console.log(words);
  return words;
}

function expenditureFun() {
  let item = $("#expenditure").val();
  let expenOptions = "";
  if (item === "Capital Expenditure") {
    let itemOption = `
      <option>Maintain current levels of operation within the organization</option>
      <option>Expenses to permit future expansion.</option>
      <option>Revenue Expenditure</option>
                `;
    expenOptions += itemOption;
  } else if (item === "Revenue Expenditure") {
    let itemOption = `<option>Sales costs or All expenses incurred by the firm that are directly tied to the manufacture and selling of its goods or services.</option>
      <option>All expenses incurred by the firm to guarantee the smooth operation.</option>
      `;
    expenOptions += itemOption;
  } else if (item === "Deferred Revenue Expenditure") {
    let itemOption = `<option>Exorbitant Advertising Expenditures</option>
      <option>Unprecedented Losses</option>
      <option>Development and Research Cost</option>`;
    expenOptions += itemOption;
  }
  console.log(expenOptions);
  $("#purposeOptions").html(expenOptions);
}

$("#partyAccountErrMsg").hide();
$("#partyAccount").keyup(function () {
  validatePartyAccount();
});

function validatePartyAccount() {
  let partyAccountValue = $("#partyAccount").val();
  const number = /^\d+$/.test(partyAccountValue);

  if (!partyAccountValue) {
    $("#partyAccountErrMsg").show();
    partyAccountNoRes = false;
  } else if (!number) {
    $("#partyAccountErrMsg").show();
    $("#partyAccountErrMsg").html(
      "*Party Account should contain Number Only..!"
    );
    partyAccountNoRes = false;
  } else if (partyAccountValue[0] != "0") {
    $("#partyAccountErrMsg").show();
    $("#partyAccountErrMsg").html(
      "*Party Account Number Can have zero in the begining.."
    );
    partyAccountNoRes = false;
  } else if (partyAccountValue.length < 12 || partyAccountValue.length > 22) {
    $("#partyAccountErrMsg").show();
    $("#partyAccountErrMsg").html("*Length Must Be In Between 12 and 22");
    partyAccountNoRes = false;
  } else {
    $("#partyAccountErrMsg").hide();
    partyAccountNoRes = true;
  }
}

function confirmPartyAccFunc() {
  if ($("#conPartyAccNo").val() === "") {
    console.log("empty cnf");
    confirmPartyAccountRes = false;
    $("#conPartyAccNoErrMsg").text("*Confirm Account No Should Not Be Empty");
  } else if ($("#conPartyAccNo").val() !== $("#partyAccount").val()) {
    confirmPartyAccountRes = false;
    $("#conPartyAccNoErrMsg").text(
      "*Party Account And Confirm Party Account Should Be Same"
    );
  } else if (
    $("#conPartyAccNo").val() === $("#partyAccount").val() &&
    $("#conPartyAccNo").val() !== ""
  ) {
    confirmPartyAccountRes = true;
    $("#conPartyAccNoErrMsg").text("");
  }
}

$("#partyNameErrMsg").hide();
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
  let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let isSpecial = specialChars.test(partyNameValue);

  if (!partyNameValue) {
    $("#partyNameErrMsg").show();
    partyNameRes = false;
  } else if (firstChar(partyNameValue[0]) === false) {
    $("#partyNameErrMsg").show();
    $("#partyNameErrMsg").text(
      "*First Character Should Be Title Case/Upper Case"
    );
    partyNameRes = false;
  } else if (partyNameValue.length < 2 || partyNameValue.length > 50) {
    $("#partyNameErrMsg").show();
    $("#partyNameErrMsg").text(
      "*Length Of Party Name Must Be Between 2 and 50 Characters"
    );
    partyNameRes = false;
  } else if (isSpecial) {
    $("#partyNameErrMsg").show();
    $("#partyNameErrMsg").text(
      "*Party Name Should Not Contain Special Characters!"
    );
    partyNameRes = false;
  } else if (onlyLettersAndNumbers(partyNameValue) === false) {
    $("#partyNameErrMsg").show();
    $("#partyNameErrMsg").text("*Party Name Should Not Contain Numbers!");
    partyNameRes = false;
  } else {
    $("#partyNameErrMsg").hide();
    partyNameRes = true;
  }
}

$("#ifscCodeErrMsg").hide();

$("#ifscCode").keyup(function () {
  validateIfscCode();
});

function validateIfscCode() {
  let ifscCodeValue = $("#ifscCode").val();
  function checkIfsc(str) {
    let reg = /^[A-Z|a-z]{4}[0][0-9]{6}$/;
    if (ifscCodeValue.match(reg)) {
      return true;
    } else {
      return false;
    }
  }

  if (!ifscCodeValue) {
    $("#ifscCodeErrMsg").show();
    bankIfscRes = false;
  }

  if (ifscCodeValue.charAt(4) != "0") {
    $("#ifscCodeErrMsg").show();
    $("#ifscCodeErrMsg").text("*Ifsc Code Should Contain 0 At 5th Character!");
    bankIfscRes = false;
  }
  if (ifscCodeValue.length != 11) {
    $("#ifscCodeErrMsg").show();
    $("#ifscCodeErrMsg").text("*Ifsc Code Should Be 11 Characters!");
    bankIfscRes = false;
  }

  if (checkIfsc(ifscCodeValue) === false) {
    $("#ifscCodeErrMsg").show();
    $("#ifscCodeErrMsg").text("*Invalid IFSC Code...!");
    bankIfscRes = false;
  } else {
    $("#ifscCodeErrMsg").hide();
    bankIfscRes = true;
  }
}

function validateHeadAccount() {
  if ($("#headAccount").val() === "") {
    headOfAccountRes = false;
    $("#headAccountErrMsg").text("*Head Of Account Should Not Be Empty.");
  } else {
    headOfAccountRes = true;
    $("#headAccountErrMsg").text("");
  }
}
function validateExpenditure() {
  if ($("#expenditure").val() === "") {
    expenditureTypeRes = false;
    $("#expenditureErrMsg").text("*Expenditure Type Should Not Be Empty.");
  } else {
    expenditureTypeRes = true;
    $("#expenditureErrMsg").text("");
  }
}

function validatePurposeType() {
  if ($("#purposeOptions").val() === "") {
    purposeTypeRes = false;
    $("#purposeTypeErrMsg").text("*Purpose Type Should Not Be Empty.");
  } else {
    purposeTypeRes = true;
    $("#purposeTypeErrMsg").text("");
  }
}

function validatePurpose() {
  if ($("#purpose").val() === "") {
    purposeRes = false;
    $("#purposeErrMsg").text("*Purpose Should Not Be Empty.");
  } else if ($("#purpose").val().length >= 500) {
    purposeRes = false;
    $("#purposeErrMsg").text("*Purpose Should Below 500 Characters.");
  } else {
    purposeRes = true;
    $("#purposeErrMsg").text("");
  }
}

function validatePartyAmount() {
  if ($("#partyAmoutInWords").val() === "") {
    partyAmountRes = false;
    $("#partyAmoutInWordsErrMsg").text("*Party Amount Should Not Be Empty.");
  } else {
    partyAmountRes = true;
    $("#partyAmoutInWordsErrMsg").text("");
  }
}

var headAccOption = "";
$(document).on("change", "#headAccount", function () {
  headAccOption = $(this).find("option:selected").text();
  var val = this.value;
  validateHeadAcc(headAccOption, val);
});
function validateHeadAcc(headAccOption, val) {
  if (val === "1") {
    $("#balance").text("1000000");
    $("#loc").text("500");
  } else if (val === "2") {
    $("#balance").text("1008340");
    $("#loc").text("4000");
  } else if (val === "3") {
    $("#balance").text("14530000");
    $("#loc").text("78000");
  } else if (val === "4") {
    $("#balance").text("1056400");
    $("#loc").text("34000");
  } else if (val === "5") {
    $("#balance").text("123465400");
    $("#loc").text("5000");
  } else {
    $("#balance").text("XXXXX");
    $("#loc").text("XXXXX");
  }
}

$("#validate").click(function (e) {
  e.preventDefault();
  validatePartyAccount();
  confirmPartyAccFunc();
  validatePartyName();
  validateIfscCode();
  validateHeadAccount();
  validateExpenditure();
  validatePurposeType();
  validatePurpose();
  validatePartyAmount();

  if (
    partyAccountNoRes &&
    confirmPartyAccountRes &&
    partyNameRes &&
    bankIfscRes &&
    headOfAccountRes &&
    expenditureTypeRes &&
    purposeRes &&
    purposeTypeRes &&
    partyAmountRes
  ) {
    $("#successMsg").text("*** Success ***");
  } else {
    $("#successMsg").text("");
  }
});
