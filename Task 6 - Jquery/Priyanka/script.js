$(document).ready(function () {
  $("#menu-toggle").click(function () {
    $("#menu-list").toggleClass("active");
  });
});


// Logout

$(document).ready(function () {
  $(".logout").on("click", function () {
    var loginButton = $(this);
    var lastLoginInfo = $("#lastLoginInfo");
    if (loginButton.text().trim() === "Logout") {
      var currentDate = new Date();
      var formattedDate = currentDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      var formattedTime = currentDate.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      lastLoginInfo.html(`Last Login<br>${formattedDate}<br>${formattedTime}`);
      loginButton.html('<i class="fas fa-sign-in-alt"></i>&nbsp; Login');
    } else {
      loginButton.html('<i class="fas fa-sign-out-alt"></i>&nbsp; Logout');
    }
  });
});

// validations
// Account

$(document).ready(function () {
  $("#ac-No").on("input", function () {
    var input = $(this).val();
    var errorSpan = $("#accountError");
    errorSpan.text("");
    if (input.length < 12 || input.length > 22) {
      errorSpan.text("Account number should be between 12 and 22 digits.");
      return;
    }
    if (!/^\d+$/.test(input)) {
      errorSpan.text("Account number should only contain numbers.");
      return;
    }
    errorSpan.text("");
  });
});

// Confirm Account
$(document).ready(function () {
  $("#confirm-Ac-No").on("input", function () {
    var confirmInput = $(this).val();
    var partyInput = $("#ac-No").val();
    var errorSpan = $("#confirm-Account-Error");
    errorSpan.text("");
    if (confirmInput !== partyInput) {
      errorSpan.text("Account numbers do not match.");
    }
  });
});

// Party Name
$(document).ready(function () {
  $("#partyname").on("input", function () {
    var partyName = $(this).val();
    var errorSpan = $("#partyNameError");
    errorSpan.text("");
    if (partyName.length < 6 || partyName.length > 50) {
      errorSpan.text("Party name should be between 6 and 50 characters.");
    }
    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (specialChars.test(partyName)) {
      errorSpan.text("Party name should not have special characters.");
    }
  });
});

// Bank
$(document).ready(function () {
  $("#searchButton").click(function () {
    var ifscCode = $("#ifsc").val().toUpperCase();
    var ifscErrorSpan = $("#ifscError");
    var banknameErrorSpan = $("#banknameError");
    var branchErrorSpan = $("#branchError");
    ifscErrorSpan.text("");
    banknameErrorSpan.text("Loading...");
    branchErrorSpan.text("Loading...");
    if (ifscCode) {
      $.ajax({
        url: "https://ifsc.razorpay.com/" + ifscCode,
        method: "GET",
        success: function (data) {
          banknameErrorSpan.text(data.BANK);
          branchErrorSpan.text(data.BRANCH);
        },
        error: function () {
          ifscErrorSpan.text("Invalid IFSC code");
          banknameErrorSpan.text("XXX");
          branchErrorSpan.text("XXX");
        },
      });
    } else {
      banknameErrorSpan.text("XXX");
      branchErrorSpan.text("XXX");
    }
  });
});

// head
$(document).ready(function () {
  var headOfAccountData = [
    { head: "0853001020002000000NVN", balance: 1000000, loc: 5000 },
    { head: "8342001170004001000NVN", balance: 1008340, loc: 4000 },
    { head: "2071011170004320000NVN", balance: 14530000, loc: 78000 },
    { head: "8342001170004002000NVN", balance: 1056400, loc: 34000 },
    { head: "2204000030006300303NVN", balance: 123465400, loc: 5000 },
  ];

  $("#headSelect").on("change", function () {
    var selectedHead = $(this).val();
    var selectedData = headOfAccountData.find(
      (item) => item.head === selectedHead
    );

    if (selectedData) {
      $("#balanceSelect").val(selectedData.balance);
      $("#locSelect").val(selectedData.loc);
    }
  });
});

// Expenditure
$(document).ready(function () {
  var options = [
    { value: "Capital", text: "Capital Expenditure" },
    { value: "Revenue", text: "Revenue Expenditure" },
    { value: "Deferred", text: "Deferred Revenue Expenditure" },
  ];

  var select = $("#expenditureSelect");
  var expenditureErrorSpan = $("#expenditureError");
  options.forEach(function (option) {
    select.append($("<option>").val(option.value).text(option.text));
  });
});

// purpose Type
$(document).ready(function () {
  var options = [
    { value: "Capital", text: "Maintain current levels of operation within the organization" },
    { value: "Capital", text: " Expenses to permit future expansion" },
    { value: "Revenue", text: "Sales costs or All expenses incurred by the firm that are directly tied to the manufacture and selling of its goods or services." },
    { value: "Revenue", text: "All expenses incurred by the firm to guarantee the smooth operation." },
    { value: "Deferred", text: "Exorbitant Advertising Expenditures" },
    { value: "Deferred", text: "Unprecedented Losses" },
    { value: "Deferred", text: "Development and Research Cost" },
  ];

  var select = $("#purposeTypeSelect");
  var expenditureErrorSpan = $("#purposeTypeError");

  options.forEach(function (option) {
    select.append($("<option>").val(option.value).text(option.text));
  });


});

// Purpose Name
$(document).ready(function () {
  $("#purposeName").on("input", function () {
    var purposeText = $(this).val();
    var purposeErrorSpan = $("#purposeError");
    purposeErrorSpan.text("");
    if (purposeText.length > 500) {
      purposeErrorSpan.text("Maximum 500 characters allowed.");
    }
  });
});

// Amount
$(document).ready(function () {
  $("#amount").on("input", function () {
    var amount = $(this).val();
    if (!isValidAmount(amount)) {
      $("#amountError").text("Party Amount cannot be a Fraction Value");
    } else {
      $("#amountError").text("");
    }
  });
  function isValidAmount(amount) {
    return /^\d+$/.test(amount) && parseFloat(amount) % 1 === 0;
  }
});
$(document).ready(function () {
  var amountInput = $("#amount");
  var amountInWords = $("#amountInWords");
  var digits = [
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
  ];
  var teenDigits = [
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
  var tensDigits = [
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
  var suffixes = ["", "thousand", "lakh", "crore"];
  amountInput.on("input", function () {
    var amountInWordsText = convertToWords(amountInput.val());
    amountInWords.text(amountInWordsText);
  });

  function convertToWords(number) {
    var numberStr = number.toString();
    var parts = [];

    while (numberStr.length > 0) {
      parts.unshift(numberStr.substr(-3));
      numberStr = numberStr.substr(0, numberStr.length - 3);
    }

    var words = [];

    for (var i = 0; i < parts.length; i++) {
      var part = parseInt(parts[i]);
      if (part !== 0) {
        var partWords = convertPartToWords(part);
        if (i > 0) {
          partWords = partWords + " " + suffixes[i];
        }
        words.unshift(partWords);
      }
    }

    if (words.length === 0) {
      words.push(digits[0]);
    }

    return words.join(" ");
  }

  function convertPartToWords(part) {
    var partWords = [];

    if (part >= 100) {
      partWords.push(digits[Math.floor(part / 100)]);
      partWords.push("hundred");
      part %= 100;
    }

    if (part >= 10 && part <= 19) {
      partWords.push(teenDigits[part - 10]);
    } else if (part >= 20) {
      partWords.push(tensDigits[Math.floor(part / 10)]);
      part %= 10;
    }

    if (part > 0) {
      partWords.push(digits[part]);
    }

    return partWords.join(" ");
  }
  amountInput.on("input", function () {
    var amountInWordsText = convertToWords(amountInput.val());
    amountInWords.text(amountInWordsText);
  });

  function convertToWords(number) {
    var words = "";

    if (number === "0") {
      words = "zero";
    } else {
      words = convertNumber(number);
    }

    return words;
  }

  function convertNumber(number) {
    var units = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    var teens = [
      "",
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
    var tens = [
      "",
      "ten",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];

    if (number < 10) {
      return units[number];
    } else if (number < 20) {
      return teens[number - 10];
    } else if (number < 100) {
      return (
        tens[Math.floor(number / 10)] +
        (number % 10 !== 0 ? " " + units[number % 10] : "")
      );
    } else if (number < 1000) {
      return (
        units[Math.floor(number / 100)] +
        " hundred" +
        (number % 100 !== 0 ? " and " + convertNumber(number % 100) : "")
      );
    } else if (number < 100000) {
      return (
        convertNumber(Math.floor(number / 1000)) +
        " thousand" +
        (number % 1000 !== 0 ? " " + convertNumber(number % 1000) : "")
      );
    } else if (number < 10000000) {
      return (
        convertNumber(Math.floor(number / 100000)) +
        " lakh" +
        (number % 100000 !== 0 ? " " + convertNumber(number % 100000) : "")
      );
    } else if (number < 100000000) {
      return (
        convertNumber(Math.floor(number / 10000000)) +
        " crore" +
        (number % 10000000 !== 0 ? " " + convertNumber(number % 10000000) : "")
      );
    }
  }
});

// Documents
$(document).ready(function () {
  $("#documents").on("change", function () {
    var files = $(this)[0].files;
    if (files.length === 0) {
      $("#documentsError").text("Please select at least one document");
    } else {
      $("#documentsError").text("");
      displaySelectedFiles(files);
    }
  });

  function displaySelectedFiles(files) {
    var fileList = "";
    for (var i = 0; i < files.length; i++) {
      fileList +=
        '<div class="selected-file">' +
        files[i].name +
        ' <span class="remove-file" data-index="' +
        i +
        '">×</span></div>';
    }
    $("#selectedFiles").html(fileList);

    $(".remove-file").on("click", function () {
      var index = $(this).data("index");
      $(this).closest(".selected-file").remove();
      $("#documents")[0].value = ""; // Clear the file input value
    });
  }
});

$(document).ready(function () {
  // Account
  $("#ac-No").on("input", function () {
    validateAccount($(this).val());
  });

  // Confirm Account
  $("#confirm-Ac-No").on("input", function () {
    validateConfirmAccount($(this).val(), $("#ac-No").val());
  });

  // Party Name
  $("#partyname").on("input", function () {
    validatePartyName($(this).val());
  });

  // IFSC
  $("#ifsc").on("input", function () {
    validateifsc($(this).val());
  });

  //   HeadofAccount
  $("#headSelect").on("change", function () {
    validateHeadOfAccount($(this).val());
  });

  // Expenditure
  $("#expenditureSelect").on("change", function () {
    validateExpenditure($(this).val());
  });

  // Purpose Type
  $("#purposeTypeSelect").on("change", function () {
    validatePurposeType($(this).val());
  });

  // Purpose Name
  $("#purposeName").on("input", function () {
    validatePurposeName($(this).val());
  });

  // Amount validation
  $("#amount").on("input", function () {
    validateAmount($(this).val());
  });

  // Documents validation
  $("#documents").on("change", function () {
    validateDocuments($(this)[0].files);
  });

  // Next button click event
  $("#nextButton").on("click", function () {
    validateAccount($("#ac-No").val());
    validateConfirmAccount($("#confirm-Ac-No").val(), $("#ac-No").val());
    validatePartyName($("#partyname").val());
    validateIFSC($("#ifsc").val().toUpperCase());
    validateHeadOfAccount($("#headSelect").val());
    validateExpenditure($("#expenditureSelect").val());
    validatePurposeType($("#purposeTypeSelect").val());
    validatePurposeName($("#purposeName").val());
    validateAmount($("#amount").val());
    validateDocuments($("#documents")[0].files);

    function validateAccount(input) {
      var errorSpan = $("#accountError");
      errorSpan.text("");
      if (input.trim() === "") {
        errorSpan.text("Account number cannot be empty");
        return;
      }
      errorSpan.text("");
    }

    function validateConfirmAccount(confirmInput, partyInput) {
      var errorSpan = $("#confirm-Account-Error");
      errorSpan.text("");
      if (confirmInput.trim() === "") {
        errorSpan.text("Confirm Account cannot be empty");
        return;
      }
      if (confirmInput !== partyInput) {
        errorSpan.text("Account numbers do not match.");
      }
    }

    function validatePartyName(partyName) {
      var errorSpan = $("#partyNameError");
      errorSpan.text("");
      if (partyName.trim() === "") {
        errorSpan.text("Party Name cannot be empty.");
        return;
      }
    }

    function validateIFSC(ifscCode) {
      var errorSpan = $("#ifscError");
      errorSpan.text("");
      if (ifscCode.trim() === "") {
        errorSpan.text("IFSC code cannot be empty");
        return;
      }
    }

    function validateHeadOfAccount(input) {
      var errorSpan = $("#headError");
      errorSpan.text("");
      if (input.trim() === "") {
        errorSpan.text("Head of Account cannot be empty");
        return;
      }
      errorSpan.text("");
    }

    function validateExpenditure(input) {
      var errorSpan = $("#expenditureError");
      errorSpan.text("");
      if (input === "") {
        errorSpan.text("Expenditure field cannot be empty.");
        return;
      }
      errorSpan.text("");
    }

    function validatePurposeType(selectedValue) {
      var errorSpan = $("#purposeTypeError");
      errorSpan.text("");
      if (!selectedValue) {
        errorSpan.text("Please select a valid Purpose Type.");
      }
    }

    function validatePurposeName(purposeName) {
      var errorSpan = $("#purposeError");
      errorSpan.text("");
      if (purposeName.trim() === "") {
        errorSpan.text("Purpose cannot be empty");
        return;
      }
      if (purposeName.length > 500) {
        errorSpan.text("Maximum 500 characters allowed.");
      }
    }

    function validateAmount(amount) {
      var errorSpan = $("#amountError");
      errorSpan.text("");
      if (amount.trim() === "") {
        errorSpan.text("Party Amount cannot be empty");
        return;
      }
      if (!isValidAmount(amount)) {
        errorSpan.text("Party Amount cannot be a Fraction Value");
      }
    }

    function isValidAmount(amount) {
      return /^\d+$/.test(amount) && parseFloat(amount) % 1 === 0;
    }

    function validateDocuments(files) {
      var errorSpan = $("#documentsError");
      errorSpan.text("");
      if (files.length === 0) {
        errorSpan.text("Please select at least one Document");
      }
    }
  });
});
