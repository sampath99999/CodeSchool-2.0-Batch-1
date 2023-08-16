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
    $(".right_section").toggleClass("col-10");
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


  function bankDetails(e){
    e.preventDefault()
    let code = $('#ifscCode').val();
    $.get(`https://ifsc.razorpay.com/${code}`,function(data){
      console.log(data)
    });
    
  }

  $("button").click(function(){
    $.get("demo_test.asp", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });

  
});

let obj = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  0: "Zero",
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen",
  20: "Twenty",
  30: "Thirty",
  40: "Forty",
  50: "Fifty",
  60: "Sixty",
  70: "Seventy",
  80: "Eighty",
  90: "Ninety",
};

let lengthValues = {
  3: "Hundred",
  4: "Thousend",
  6: "Lakh",
  8: "Crore",
};

function onInputChange(e) {
  let x = e.target.value;
  let res = "";
  let j = 0;
  let Thousends = false;
  let Lakhs = false;
  for (let i of x) {
    let char = x.slice(j, x.length + 1);

    j += 1;

    if (char.length > 8) {
      res = "can not determine";
      break;
    } else if (char.length === 8) {
      res += obj[i] + lengthValues[8] + " ";
    } else if (char.length === 7) {
      Lakhs = true;

      let secondDigit = char.slice(1, 2);
      let twoDigi = char.slice(0, 1) + "0";
      res += obj[twoDigi] + obj[secondDigit] + lengthValues[6] + " ";
    } else if (char.length === 6) {
      if (Lakhs) {
        continue;
      } else {
        res += obj[i] + lengthValues[6] + " ";
      }
    } else if (char.length === 5) {
      Thousends = true;
      let secondDigit = char.slice(1, 2);
      let twoDigi = char.slice(0, 1) + "0";

      if (parseInt(secondDigit) !== 0) {
        res += obj[twoDigi] + obj[secondDigit] + lengthValues[4] + " ";
      } else {
        res += obj[twoDigi] + lengthValues[4] + " ";
      }
    } else if (char.length === 4) {
      if (Thousends) {
        continue;
      } else {
        res += obj[i] + lengthValues[4] + " ";
      }
    } else if (char.length === 3 && parseInt(i) > 0) {
      res += obj[i] + lengthValues[3] + " ";
    } else if (char.length === 2 && parseInt(i) > 0) {
      if (parseInt(char) < 20) {
        res += obj[char] + " ";
        break;
      } else if (parseInt(char) >= 20) {
        let secondDigit = char.slice(1, 2);
        console.log(secondDigit);
        let twoDigi = char.slice(0, 1) + "0";
        console.log(twoDigi);
        res += obj[twoDigi] + obj[secondDigit] + " ";
        break;
      }
    } else if (char.length === 1) {
      res += obj[char];
    }
  }
  $("#amountInWords").text(res);
  
}

function expenditureFun(){
    let item = $('#expenditure').val();
    let expenOptions=""
    if(item==='Capital Expenditure'){
      let itemOption=`
      <option>Maintain current levels of operation within the organization</option>
      <option>Expenses to permit future expansion.</option>
      <option>Revenue Expenditure</option>
                `;
          expenOptions+=itemOption;

    }
    else if(item==='Revenue Expenditure'){
     
      let itemOption=`<option>Sales costs or All expenses incurred by the firm that are directly tied to the manufacture and selling of its goods or services.</option>
      <option>All expenses incurred by the firm to guarantee the smooth operation.</option>
      `;
      expenOptions+=itemOption;
    }
    else if(item==='Deferred Revenue Expenditure'){
      let itemOption=`<option>Exorbitant Advertising Expenditures</option>
      <option>Unprecedented Losses</option>
      <option>Development and Research Cost</option>`;
      expenOptions+=itemOption;
    }
    console.log(expenOptions);
    $('#purposeOptions').html(expenOptions);
}


function validateAccountNumber() {
  const accountNumberInput = $("#partyAccount");
  const errorText = $("#partyAccountErrMsg");
  const accountNumber = accountNumberInput.val().replace(/\D/g, '');

  if (accountNumber.length === 0) {
      errorText.text("Party account number should not be empty.");
      return false;
  } else if (accountNumber.length < 12 || accountNumber.length > 22) {
      errorText.text("Account number length must be between 12 and 22 digits.");
      return false;
  } else if (accountNumber.length > 1 && accountNumber.charAt(0) !== '0') {
      errorText.text("Account number cannot have leading zeros except for a single zero.",accountNumber.charAt(0));
      return false;
  } else {
      errorText.text("");
      return true;
   }
}



var headAccOption="";
$(document).on("change", "#headAccount", function () {
  headAccOption = $(this).find("option:selected").text();
  var val = this.value;
  validateHeadAcc(headAccOption,val);
});
function validateHeadAcc(headAccOption, val) {
  
  if (val === "1") {
    $("#balance").html("1000000");
    $("#loc").html("500");
  } else if (val === "2") {
    $("#balance").html("1008340");
    $("#loc").html("4000");
  } else if (val === "3") {
    $("#balance").html("14530000");
    $("#loc").html("78000");
  } else if (val === "4") {
    $("#balance").html("1056400");
    $("#loc").html("34000");
  } else if (val === "5") {
    $("#balance").html("123465400");
    $("#loc").html("5000");
  } else {
    $("#balance").html("XXXXX");
    $("#loc").html("XXXXX");
}
}


function submit(){
  validateAccountNumber();
  console.log($('#partyAmoutInWords').val())
  if($('#partyAmoutInWords').val()===""){
    $('amountInWords').text('Party amount should not be empty.')
  }
  if($('#purpose').val().length>=500){
    $('#purposeErrMsg').text('Maximum limit should be 500 characters');
  }
  console.log('submitted');
}

