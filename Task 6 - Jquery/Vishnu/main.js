//getDate details

function zeroPrefix(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}
const today = new Date();
const day = today.getDate();
const monthNames = [
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
const month = monthNames[today.getMonth()];
const year = today.getFullYear();
const todayDate = `${day}-${month}-${year}`;
const clockSystem = today.getHours() < 12 ? "AM" : "PM";
const currentTime = `${zeroPrefix(today.getHours())}:${zeroPrefix(
  today.getMinutes()
)}:${zeroPrefix(today.getSeconds())} ${clockSystem}`;

$("#today-date-id").text(todayDate);
$("#current-time-id").text(currentTime);

$("#hamburger-button-id").click(function () {
  var $menuContainer = $("#menu-container-id");
  var $bodyContainer = $("#body-container-id");

  $.when(
    $menuContainer.toggle("slide", { direction: "left" }),
    $bodyContainer.toggleClass("body-container-position")
  ).then(function () {
    $menuContainer.toggleClass("fixed-menu");
  });
});

//change login details

$("#login-logout-button-id").click(function () {
  const buttonText = $("#login-logout-button-id span").text();
  const buttonElementText =
    buttonText === "Logout"
      ? "<i class='bi bi-person-lock'></i><span class='ms-1'>Login</span>"
      : "<i class='bi bi-box-arrow-right'></i><span class='ms-1'>Logout</span>";
  $(this).html(buttonElementText);
});

//Party account number

function partyNumberFunction(event) {
  const keyValue = event.key;
  let inputData = $("#party-account-id").val();
  const pattern = /^\d+$/;
  if (
    !pattern.test(keyValue) &&
    keyValue !== undefined &&
    keyValue !== "enter"
  ) {
    event.preventDefault();
    if (/^\s+$/.test(keyValue)) {
      $("#party-account-error").text("*Spaces are not allowed");
    } else if (/^\w+$/.test(keyValue)) {
      $("#party-account-error").text("*Should contain numbers only");
    } else if (/^[$#@!%^&*()-_+=~`]+$/.test(keyValue)) {
      $("#party-account-error").text("*Should not contain special characters");
    }
  } else {
    if (keyValue !== undefined) {
      inputData += keyValue;
    }
    if (inputData.length < 12 || inputData.length > 22) {
      $("#party-account-error").text(
        "*Minimum length between 12 and 22 numbers"
      );
    } else {
      $("#party-account-error").text("");
    }
  }
}

$("#party-account-id").on("keypress input", partyNumberFunction);

function confirmPartyNumberFunction(event) {
  const keyValue = event.key;
  let inputData = $("#confirm-party-account-id").val();
  const confirmPartyAccountInput = $("#party-account-id").val();
  const pattern = /^\d+$/;
  if (!pattern.test(keyValue) && keyValue !== undefined) {
    event.preventDefault();
    if (/^\s+$/.test(keyValue)) {
      $("#confirm-party-account-error").text("*Spaces are not allowed");
    } else if (/^\[a-zA-Z]+$/.test(keyValue)) {
      $("#confirm-party-account-error").text("*Should contain numbers only");
    } else if (/^[$#@!%^&*()-_+=~`]+$/.test(keyValue)) {
      $("#confirm-party-account-error").text(
        "*Should not contain special characters"
      );
    }
  } else {
    if (keyValue !== undefined) {
      inputData += keyValue;
    }
    if (inputData.length < 12 || inputData.length > 22) {
      $("#confirm-party-account-error").text(
        "*Minimum length between 12 and 22 numbers"
      );
    } else if (confirmPartyAccountInput !== inputData) {
      $("#confirm-party-account-error").text(
        "*Party Account number and confirm party account number should match"
      );
    } else {
      $("#confirm-party-account-error").text("");
    }
  }
}

$("#confirm-party-account-id").on("keypress input", confirmPartyNumberFunction);

function partyNameFunction(event) {
  const keyValue = event.key;
  let inputData = $("#party-name-id").val();
  const pattern = /^[a-zA-Z\d\s]+$/;
  if (!pattern.test(keyValue) && keyValue !== undefined) {
    event.preventDefault();
    if (/^[$#@!%^&*()-_+=~`]+$/.test(keyValue)) {
      $("#party-name-error").text("*Should not contain special characters");
    }
  } else {
    if (keyValue !== undefined) {
      inputData += keyValue;
      $("#party-name-error").text("");
    } else if (inputData.length === 0) {
      $("#party-name-error").text("*Party name cannot be empty");
    } else {
      $("#party-name-error").text("");
    }
  }
}

$("#party-name-id").on("keypress input", partyNameFunction);

function getBankDetails(data) {
  const { BANK, BRANCH } = data;
  if (BANK !== null) {
    $("#bank-name-id").text(BANK);
    $("#bank-ifsc-error").text("");
  } else {
    $("#bank-name").text("XXXX");
  }
  if (BRANCH !== null) {
    $("#branch-name-id").text(BRANCH);
    $("#bank-ifsc-error").text("");
  } else {
    $("#branch-name").text("XXXX");
  }
}

function bankDetailsFunction(event) {
  const inputData = $("#bank-ifsc-id").val();
  const pattern = /^[A-Z]{4}0([A-Z]{6}|[0-9]{6})$/;
  const firstFourChars = inputData.slice(0, 4);
  const fifthChar = inputData.charAt(4);
  const lastSixChars = inputData.slice(5);
  if (!pattern.test(inputData)) {
    if (inputData.length !== 11) {
      $("#bank-ifsc-error").text("*Should be 11 characters long");
    } else if (!/^[A-Z]+$/.test(firstFourChars)) {
      $("#bank-ifsc-error").text(
        "*First four characters should be capital letters"
      );
    } else if (fifthChar !== "0") {
      $("#bank-ifsc-error").text("*Fifth character should be zero");
    } else if (!/^[0-9]+$|^[A-Z]+$/.test(lastSixChars)) {
      $("#bank-ifsc-error").text(
        "*Last six characters should be capital alphbetic or numeric"
      );
    }
  } else {
    $.get(`https://ifsc.razorpay.com/${inputData}`)
      .done(getBankDetails)
      .fail(function (xhr, status, error) {
        $("#bank-ifsc-error").text(error);
      });
  }
}

$("#ifsc-search-id").bind("click", bankDetailsFunction);

function headofAccountFunction(event) {
  const selectedData = $("#head-of-account-id").val();
  if (selectedData === "") {
    $("#head-of-account-error").text("*Head of account cannot be null");
  } else {
    const [account, balance, loc] = selectedData.split("-");
    $("#balance-id").text(balance);
    $("#line-of-control-id").text(loc);
    $("#head-of-account-error").text("");
  }
}

$("#head-of-account-id").on("change", headofAccountFunction);

const expenditures = {
  capital_expenditure: [
    "Maintain current levels of operation within the organization.",
    "Expenses to permit future expansion.",
  ],
  revenue_expenditure: [
    "Sales costs or All expenses incurred by the firm that are directly tied to the manufacture and selling of its goods or services.",
    "All expenses incurred by the firm to guarantee the smooth operation.",
  ],
  deferred_revenue_expenditure: [
    "Exorbitant Advertising Expenditures",
    "Unprecedented Losses",
    "Development and Research Cost",
  ],
};

function expenditureTypeFunction(event) {
  const selectedData = $("#expenditure-type-id").val();
  let options = `<option value="">Select</option>`;
  if (selectedData === "") {
    $("#expenditure-type-error").text("*Expenditure type cannot be empty");
    $("#purpose-type-id").html(options);
  } else {
    if (event.type !== "submit") {
      const purposeTypeData = expenditures[selectedData];
      for (let purpose of purposeTypeData) {
        options += `<option value=${purposeTypeData}>${purpose}</option>`;
      }
      $("#expenditure-type-error").text("");
      $("#purpose-type-id").html(options);
    }
    purposeTypeFunction();
  }
}

$("#expenditure-type-id").on("change", expenditureTypeFunction);

function purposeTypeFunction(event) {
  const selectedData = $("#purpose-type-id").val();
  if (selectedData === "") {
    $("#purpose-type-error").text("*Purpose type cannot be empty");
  } else {
    $("#purpose-type-error").text("");
  }
}
$("#purpose-type-id").on("change", purposeTypeFunction);

function purposeDescriptionFunction(event) {
  const descriptionData = $("#purose-description-id").val().trim();
  if (descriptionData.length === 0) {
    event.preventDefault();
    $("#purpose-description-error").text(
      "*Purpose description cannot be empty"
    );
  } else if (descriptionData.length > 500) {
    $("#purpose-description-error").text(
      "*Purpose description cannot be greater than 500 characters"
    );
  } else {
    $("#purpose-description-error").text("");
  }
}

$("#purose-description-id").on("input", purposeDescriptionFunction);
$("#purose-description-small-device-id").on(
  "input",
  purposeDescriptionFunction
);

$("#add-button-id").bind("click", function () {
  const selectedFiles = $("#input-files-id")[0].files;
  for (let file of selectedFiles) {
    const fileItem = $("<div></div>");
    const downloadLink = $("<a></a>", {
      text: file.name,
      href: URL.createObjectURL(file),
      download: file.name,
      target: "_blank",
    });
    fileItem.append(downloadLink);
    $("#fileList").append(fileItem);
  }
});

//number to words

const words = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
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

const numberSystem = [
  "Rupees",
  "Hundred",
  "Thousand",
  "Lakhs",
  "Crore",
  "Hundred",
];

function wordInput(event) {
  const inputValue = parseInt($("#number-input-id").val());
  const indianDecimalFormat = inputValue.toLocaleString("en-IN");
  let arrayValuesSplit = indianDecimalFormat.split(",");
  const lastItem = arrayValuesSplit[arrayValuesSplit.length - 1];

  if (lastItem.length === 3) {
    arrayValuesSplit = [
      ...arrayValuesSplit.slice(0, arrayValuesSplit.length - 1),
      lastItem[0],
      lastItem.slice(1),
    ];
  }
  arrayValuesSplit.reverse();

  getData(arrayValuesSplit);
}

$("#number-input-id").on("keypress", handleInputData);
$("#number-input-id").on("input", wordInput);

function handleInputData(event) {
  const charCode = event.key.charCodeAt(0);
  if (charCode >= 48 && charCode <= 57) {
    return true;
  } else {
    event.preventDefault();
    return false;
  }
}

function getWordFormat(newData) {
  let word = "";
  for (let k = 0; k < newData.length; k++) {
    const numberValue = newData[k][1];
    const decimalValue = newData[k][0];
    if (numberValue > 0 && numberValue < 20) {
      word += words[numberValue - 1] + " ";
      if (
        newData.length > 5 &&
        newData[1][1] === 0 &&
        newData[1][0] === "Crore"
      ) {
        word += decimalValue + " " + "Crore";
      } else {
        word += decimalValue + " ";
      }
    } else {
      if (numberValue >= 20 && numberValue < 30) {
        word += "Twenty ";
        if (numberValue > 20) {
          const lastValue = numberValue % 10;
          word += words[lastValue - 1] + " ";
        }
        word += decimalValue + " ";
      } else if (numberValue >= 30 && numberValue < 40) {
        word += "Thirty ";
        if (numberValue > 30) {
          const lastValue = numberValue % 10;
          word += words[lastValue - 1] + " ";
        }
        word += decimalValue + " ";
      } else if (numberValue >= 40 && numberValue < 50) {
        word += "Forty ";
        if (numberValue > 40) {
          const lastValue = numberValue % 10;
          word += words[lastValue - 1] + " ";
        }
        word += decimalValue + " ";
      } else if (numberValue >= 50 && numberValue < 60) {
        word += "Fifty ";
        if (numberValue > 50) {
          const lastValue = numberValue % 10;
          word += words[lastValue - 1] + " ";
        }
        word += decimalValue + " ";
      } else if (numberValue >= 60 && numberValue < 70) {
        word += "Sixty ";
        if (numberValue > 60) {
          const lastValue = numberValue % 10;
          word += words[lastValue - 1] + " ";
        }
        word += decimalValue + " ";
      } else if (numberValue >= 70 && numberValue < 80) {
        word += "Seventy ";
        if (numberValue > 70) {
          const lastValue = numberValue % 10;
          word += words[lastValue - 1] + " ";
        }
        word += decimalValue + " ";
      } else if (numberValue >= 80 && numberValue < 90) {
        word += "Eighty ";
        if (numberValue > 80) {
          const lastValue = numberValue % 10;
          word += words[lastValue - 1] + " ";
        }
        word += decimalValue + " ";
      } else if (numberValue >= 90 && numberValue < 100) {
        word += "Ninty ";
        if (numberValue > 90) {
          const lastValue = numberValue % 10;
          word += words[lastValue - 1] + " ";
        }
        word += decimalValue + " ";
      }
    }
  }
  $("#number-to-words-id").text(word);
}

function getData(data) {
  let newData = [];
  for (let decimal = 0; decimal < data.length; decimal++) {
    newData.push([numberSystem[decimal], parseInt(data[decimal])]);
  }
  newData = newData.reverse();
  getWordFormat(newData);
}

//submit form
$("#form-id").submit(function (event) {
  event.preventDefault();
  partyNumberFunction(event);
  confirmPartyNumberFunction(event);
  partyNameFunction(event);
  bankDetailsFunction(event);
  headofAccountFunction(event);
  expenditureTypeFunction(event);
  purposeTypeFunction(event);
  purposeDescriptionFunction(event);
});
