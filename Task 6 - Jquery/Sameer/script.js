
$(document).ready(function () {
  const hamburgerButton = $("#hamburgerButton");
  const menuSidebar = $("#menuSidebar");
  const mainBody = $(".mainBody");

  hamburgerButton.click(function () {
    if (menuSidebar.hasClass("d-md-block")) {
      menuSidebar.removeClass("d-md-block").addClass("d-md-none");
      mainBody.removeClass("col-md-10").addClass("col-md-12");
    } else {
      menuSidebar.removeClass("d-md-none").addClass("d-md-block");
      mainBody.removeClass("col-md-12").addClass("col-md-10");
    }
  });
  $("#hamburgerMobileButton").click(function (event) {
    $("body").css("overflow", "hidden");
    event.stopPropagation();
    $("#menuSidebar").click(function (event) {
      event.stopPropagation();
    });
    $("#menuSidebar").css({ position: "absolute", "z-index": "3000" });
    $("#mainBody").css({
      position: "static",
      "z-index": "0",
      opacity: "0.5",
    });
    $("#menuSidebar").attr("class", "d-block col-8");
    $("html").click(function (event) {
      $("#mainBody").css({ position: "static", "z-index": "1", opacity: "1" });
      $("#menuSidebar").attr("class", "d-none");
      $("body").css("overflow", "auto");
    });
  });
});

function getCurrentDateTime() {
    const now = new Date();
    const options = {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };
    return now.toLocaleString('en-IN', options);
  }
  
  function updateDateTime() {
    const dateTimeElement = document.getElementById('currentDateTime');
    if (dateTimeElement) {
      const dateTimeString = getCurrentDateTime();
      const [datePart, timePart] = dateTimeString.split(', ');
      dateTimeElement.innerHTML = `${datePart}<br>${timePart}`;
    }
  }
  setInterval(updateDateTime, 1000);
  updateDateTime();
 
  
  const logoutButton = document.getElementById("logoutButton");
  logoutButton.addEventListener("click", function () {
    if (logoutButton.innerText === "Logout") {
      logoutButton.innerText = "Login";
    } else {
      logoutButton.innerText = "Logout";
    }
  });


$("#searchButton").click(function () {
  var bankIFSCCode = $("#bankIFSCCode").val();
  var ifscCodeError = "";
  if (bankIFSCCode.length != 11) {
      $("#bankIFSCCodeError").empty();
      $("#bankIFSCCodeError").append(`<p>IFSC code must be 11 characters.</p>`);
  } else if (bankIFSCCode.length == 11) {
      $("#bankIFSCCodeError").empty();
      if (bankIFSCCode.slice(0, 4).match(/[^A-Z]/g)?.length > 0) {
          ifscCodeError += `<p>First four characters must be capital.</p>`;
      }
      if (bankIFSCCode[4] != "0") {
          ifscCodeError += `<p>Fifth character must be zero.</p>`;
      }
      if (bankIFSCCode.slice(5, 11).match(/[^0-9a-z]/gi)?.length > 0) {
          ifscCodeError += `<p>Last six characters must be alpha-numerical</p>`;
      }
      if (ifscCodeError.length != 0) {
          $("#bankIFSCCodeError").empty();
          $("#bankIFSCCodeError").append(ifscCodeError);
      } else {
          var url = "https://ifsc.razorpay.com/" + bankIFSCCode;
          $.get(url, function (data, status) {
              if (status === "success") {
                  const { BANK, BRANCH } = data;
                  $("#bankName").text(`${BANK}`);
                  $("#bankBranch").text(`${BRANCH}`);
              }
          }).fail(function (jqXHR, textStatus, errorThrown) {
              $("#bankIFSCCodeError").empty();
              $("#bankIFSCCodeError").append(
                  `<p>${textStatus} : ${errorThrown}</p>`
              );
              $("#bankName").text("XXXXX");
              $("#bankBranch").text("XXXXX");
          });
      }
  }
});

  function updateOutput() {
    const headOfAccount = document.getElementById('headOfAccount');
    const balance = document.getElementById('balance');
    const loc=document.getElementById('loc')
    const selectedValue = headOfAccount.value;
    
    if (selectedValue === '0853001020002000000NVN') {
      balance.textContent = '1000000';
      loc.textContent='5000';
    } else if (selectedValue === '8342001170004001000NVN') {
      balance.textContent = '1008340';
      loc.textContent='4000';
    }else if (selectedValue === '2071011170004320000NVN') {
      balance.textContent = '14530000';
      loc.textContent='78000';
    } else if (selectedValue === '8342001170004002000NVN') {
      balance.textContent = '1056400';
      loc.textContent='34000';
    } else if (selectedValue === '2204000030006300303NVN') {
      balance.textContent = '123465400 ';
      loc.textContent='5000';
    } else {
      balance.textContent = 'XXXXX';
      loc.textContent='XXXXX';

    }
  }
  updateOutput();

const expenditureTypeSelect = document.getElementById('expenditureType');
const purposeTypeSelect = document.getElementById('purposeType');
expenditureTypeSelect.addEventListener('change', () => {
  const selectedExpenditureType = expenditureTypeSelect.value;

  purposeTypeSelect.innerHTML = '';

  if (selectedExpenditureType === 'Capital Expenditure') {
    const purposeOptions = ['Maintain current levels of operation within the organization', 'Expenses to permit future expansion.'];
    populateOptions(purposeOptions);
  } else if (selectedExpenditureType === 'Revenue Expenditure') {
    const purposeOptions = ['Sales costs or All expenses incurred by the firm that are directly tied to the manufacture and selling of its goods or services.', 'All expenses incurred by the firm to guarantee the smooth operation.'];
    populateOptions(purposeOptions);
  } else if (selectedExpenditureType === 'Deferred Revenue Expenditure') {
    const purposeOptions = ['Exorbitant Advertising Expenditures', 'Unprecedented Losses','Development and Research Cost'];
    populateOptions(purposeOptions);
  }
});

function populateOptions(options) {
  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.textContent = option;
    purposeTypeSelect.appendChild(optionElement);
  });
}


$("#partyAmount").on("input", function () {
  var inputVal = $(this).val();
  var numericVal = inputVal.replace(/[^0-9]/g, "");
  $(this).val(numericVal);

  var words = partyAmountInWords(parseInt(numericVal));
  $("#partyAmountInWords").val(words);
});
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

  return words;
}
var initialAmount = parseInt(
  $("#partyAmount")
    .val()
    .replace(/[^0-9]/g, "")
);
if (!isNaN(initialAmount)) {
  var initialWords = partyAmountInWords(initialAmount);
  $("#partyAmountInWords").val(initialWords);
}

const maxFiles = 6;
const input = $("#documents");
const documentList = $("#documentList");
const addFileButton = $("#addFileInput");
const files = [];
addFileButton.on("click", function () {
  input.click();
});
input.on("change", function (e) {
  const fileList = e.target.files;
  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i];
    if (files.length < maxFiles && !files.includes(file.name)) {
      files.push(file.name);
      addFileElement(file);
    }
  }
  input.val(null);
});

function addFileElement(file) {
  const fileDiv = $("<div></div>").addClass(
    "file-item  d-flex justify-content-between mt-1 p-1 "
  );
  const fileName = $("<span></span>")
    .addClass("file-name  text-opacity-75")
    .text(file.name);
  const removeButton = $("<span></span>")
    .addClass("remove-button  text-opacity-75 ms-3 ")
    .html('<i class="fas fa-times"></i>');

  removeButton.on("click", function () {
    const fileName = $(this).siblings(".file-name").text();
    removeFile(fileName);
    $(this).closest(".file-item").remove();
  });
  fileDiv.append(fileName);
  fileDiv.append(removeButton);
  documentList.append(fileDiv);
}

function removeFile(fileName) {
  const index = files.indexOf(fileName);
  if (index !== -1) {
    files.splice(index, 1);
  }
}


$(".nextBtn").click(function (event) {
  let isValid = true;
  $(".text-danger").text("");

  const selectedTransactionType = $(
    "input[name='transactionType']:checked"
  ).val();
  if (!selectedTransactionType) {
    $("#transactionTypeError").text("Select any one Transaction Type.");
    isValid = false;
  }
  let partyAccount = $("#partyAccount").val();
  if (partyAccount === "") {
    $("#partyAccountError").text("Party Account number is required.");
  } else if (
    partyAccount.length < 12 ||
    partyAccount.length > 22 ||
    !/^\d+$/.test(partyAccount)
  ) {
    $("#partyAccountError").text("Party Account number is invalid.");
    isValid = false;
  }
  let confirmPartyAccount = $("#confirmPartyAccount").val();
  if (confirmPartyAccount === "") {
    $("#confirmPartyAccountErrorr").text(
      "Confirm Party Account number is required."
    );
  } else if (confirmPartyAccount !== partyAccount) {
    $("#confirmPartyAccountError").text(
      "Confirm Party Account number does not match."
    );
    isValid = false;
  }
  let partyName = $("#partyName").val();
  if (partyName == "") {
    $("#partyNameError").text("Party Name is required.");
  } else if (!/^[A-Za-z\s]+$/.test(partyName)) {
    $("#partyNameError").text("Special characters are not allowed.");
    isValid = false;
  }
  let bankIFSC = $("#bankIFSC").val();
  if (bankIFSC == "") {
    $("#bankIFSCError").text("IFSC code is required.");
    isValid = false;
  }
  let headOfAccount = $("#headOfAccount").val();
  if (headOfAccount === "") {
    $("#headOfAccountError").text("Please select a Head of Account.");
    isValid = false;
  }
  let expenditureType = $("#expenditureType").val();
  if (expenditureType === "") {
    $("#expenditureTypeError").text("Please select an Expenditure Type.");
    isValid = false;
  }
  let purposeType = $("#purposeType").val();
  if (purposeType === "") {
    $("#purposeTypeError").text("Please select a Purpose Type.");
    isValid = false;
  }
  let purposeDescription = $("#purposeDescription").val();
  if (purposeDescription === "") {
    $("#purposeError").text("Please enter a Purpose .");
  } else if (purposeDescription.length > 500) {
    $("#purposeError").text(
      "Purpose Description shouldn't exceed 500 words."
    );
    isValid = false;
  }
  let partyAmount = $("#partyAmount").val();
  if (partyAmount === "") {
    $("#partyAmountError").text("Please enter some Party Amount.");
  } else if (partyAmount.includes(".") || isNaN(partyAmount)) {
    $("#partyAmountError").text(
      "Party Amount should be a valid number without fractions."
    );
    isValid = false;
  }
  const fileInput = $("#documents")[0];
  if (fileInput.files.length === 0) {
    $("#documentsError").text(
      "Error: No file selected. Please choose a file."
    );
  } else {
    $("#documentsError").text("");
  }

  if (!isValid) {
    event.preventDefault();
  }
});
$("#partyAccountNo").on("input", function () {
  var inputVal = $(this).val();
  var numericVal = inputVal.replace(/[^0-9]/g, "");
  $(this).val(numericVal);
});
$("#partyAmount").on("input", function () {
  var inputVal = $(this).val();
  var numericVal = inputVal.replace(/[^0-9]/g, "");
  $(this).val(numericVal);
});



  
 