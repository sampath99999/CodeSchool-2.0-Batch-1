
    let sidebarOpen = false;
  
    function toggleNav() {
      const sidebar = $("#sideBar");
      const mainContent = $("#main");
  
      if (sidebarOpen) {
        sidebar.css("width", "0");
        mainContent.css("margin-left", "0");
      } else {
        sidebar.css("width", "250px");
        mainContent.css("margin-left", "250px");
      }
  
      sidebarOpen = !sidebarOpen;
    }

    $(document).ready(function() {
      let isLoggedIn = false;
      const actionLink = $("#actionLink");
  
      function update() {
          actionLink.text(isLoggedIn ? "Logout" : "Login");
      }
  
      update();
  
      actionLink.on("click", function() {
          isLoggedIn = !isLoggedIn;
          update();
      });
  });
  
$(document).ready(function() {
  function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ampm;
  }

  function formatDate(date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return day + '-' + months[monthIndex] + '-' + year;
  }

  function setCurrentDateTime() {
    const currentDateTime = new Date();
    const formattedDate = formatDate(currentDateTime);
    const formattedTime = formatAMPM(currentDateTime);

    $("#date").text(formattedDate);
    $("#time").text(formattedTime);
  }

  setCurrentDateTime();
});




$(document).ready(function () {
  $("#searchButton").click(function () {
    var ifscInput = $("#IfscInputEmail1");
    var ifscCode = ifscInput.val().trim();

    fetchBank(ifscCode);
  });
});


function fetchBank(ifscCode) {
  $.get(`https://ifsc.razorpay.com/${ifscCode}`, function(data) {
    if (data) {
      $("#BankName").text(data.BANK);
      $("#BranchName").text(data.BRANCH);
      $("#BankNameSection, #BranchNameSection").css("display", "block");
    } else {
      $("#BankName").text("Not Found");
      $("#BranchName").text("Not Found");
      $("#BankNameSection, #BranchNameSection").css("display", "none");
    }
  }).fail(function(error) {
    console.error("An error occurred:", error);
  });
}

$(document).ready(function() {
  const headOfAccountSelect = $('#headOfAccountSelect');
  const balanceValue = $('#BalanceValue');
  const locValue = $('#LOCValue');

  headOfAccountSelect.on('change', function() {
    const selectedOption = $(this).val();
    console.log('Selected Option:', selectedOption);

    if (selectedOption === 'option1') {
      balanceValue.text('1000000');
      locValue.text('5000');
    } else if (selectedOption === 'option2') {
      balanceValue.text('1008340');
      locValue.text('4000');
    } else if (selectedOption === 'option3') {
      balanceValue.text('14530000');
      locValue.text('78000');
    } else if (selectedOption === 'option4') {
      balanceValue.text('1056400');
      locValue.text('34000');
    } else {
      balanceValue.text('123465400');
      locValue.text('5000');
    }
  });
});


$(document).ready(function() {
  const addButton = $('#AddButton');
  const deleteButton = $('#DeleteButton');
  const fileInputsContainer = $('#fileInputs');

  addButton.click(function() {
    const newFileInput = $('<input>', {
      type: 'file',
      class: 'form-control me-2',
      placeholder: 'Enter IFSC Code',
      'aria-describedby': 'textHelp',
      name: 'ifsc'
    });

    fileInputsContainer.append(newFileInput);
    deleteButton.prop('disabled', false);
  });

  deleteButton.click(function() {
    const fileInputs = fileInputsContainer.find('input[type="file"]');
    if (fileInputs.length > 1) {
      fileInputs.last().remove();
    }

    if (fileInputsContainer.find('input[type="file"]').length === 1) {
      deleteButton.prop('disabled', true);
    }
  });

  deleteButton.prop('disabled', true);
});

      
$(document).ready(function() {
  $('#submitButton').click(function() {
   

    const partyAccountInput = $('#PartyAccountInputEmail1');
    const partyAccountError = $('#partyAccountError');
    const partyAccountValue = partyAccountInput.val().trim();
    if (partyAccountValue === '') {
      partyAccountError.text('Please fill this field');
    } else if (partyAccountValue.length < 12 || partyAccountValue.length > 22 || !/^\d+$/.test(partyAccountValue)) {
      partyAccountError.text('Party Account No. should be between 12 and 22 digits and only contain numbers');
    }
else{
  partyAccountError.text("");
}        
    const confirmPartyInput = $('#ConfirmPartyInputEmail1');
    const confirmPartyError = $('#ConfirmPartyError');
    if (confirmPartyInput.val().trim() !== partyAccountValue) {
      confirmPartyError.text('Confirm Party Account No. should match Party Account No.');
    } else {
      confirmPartyError.text('');
    }
    
    const partyNameInput = $('#PartyNameInputEmail1');
    const partyNameError = $('#PartyNameError');
    const specialCharacterPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (partyNameInput.val().trim() === '') {
      partyNameError.text('Please fill this field');
    } else if (specialCharacterPattern.test(partyNameInput.val())) {
      partyNameError.text('Party Name should not have special characters');
    } else {
      partyNameError.text('');
    }
            
    const ifscInput = $('#IfscInputEmail1');
    const ifscError = $('#IfscError');
    const ifscValue = ifscInput.val().trim();
    const ifscPattern = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    if (ifscValue === '') {
      ifscError.text('Please fill this field');
    } else if (!ifscPattern.test(ifscValue)) {
      ifscError.text('Invalid IFSC Code ');
    } else {
      ifscError.text('');
    }
    
           
    const purposeTextArea = $('#PartyNameTextArea');
    const purposeError = $('#PurposeareaError');
    if (purposeTextArea.val().trim() === '') {
      purposeError.text('Please fill this field');
    } else if (purposeTextArea.val().length > 500) {
      purposeError.text('Purpose should not exceed 500 characters');
    } else {
      purposeError.text('');
    }
    
    const partyAmountInput = $('#PartyAmountEmail1');
    const partyAmountError = $('#PartyamountRSError');
    if (partyAmountInput.val().trim() === '') {
      partyAmountError.text('Please fill this field');
    } else if (partyAmountInput.val().includes('.')) {
      partyAmountError.text('Party Amount should not be in fractions');
    } else {
      partyAmountError.text('');
    }    
    const transactionTypeInputs = $('[name="inlineRadioOptions"]');
    const transactionTypeError = $('#transactionTypeError');
    let isSelected = false;
    transactionTypeInputs.each(function() {
      if ($(this).prop('checked')) {
        isSelected = true;
        return false; 
      }
    });
    if (!isSelected) {
      transactionTypeError.text('Please select a transaction type');
    } else {
      transactionTypeError.text('');
    }
    
    const headOfAccountSelect = $('#headOfAccountSelect');
    const headOfAccountError = $('#HOAError');
    if (headOfAccountSelect.val() === 'Select') {
      headOfAccountError.text('Please select a head of account');
    }
    else{
      headOfAccountError.text('');
    }
    
      
          
    const expenditureTypeSelect = $('#ExpenditureTypeSelect');
    const expenditureTypeError = $('#ExpenditureError');
    if (expenditureTypeSelect.val() === 'Select') {
      expenditureTypeError.text('Please select an expenditure type');
    }
    else{
      expenditureTypeError.text("");
    }
  
      const purposeTypeSelect = $('#PurposeTypeSelect');
    const purposeTypeError = $('#PurposeError');
            
     console.log('Selected Value:', purposeTypeSelect.val());
            
            if (purposeTypeSelect.val() == 'Select') {
                purposeTypeError.text('Please select a purpose type');
                console.log('Error Message:', purposeTypeError.text());
            } else {
                purposeTypeError.text('');
                console.log('Error Message Cleared');
            }
      
        const uploadDocumentInputs = $('.form-control[name="ifsc"]');
          const uploadDocumentError = $('#DocumentError');
          let isDocumentUploaded = false;
          uploadDocumentInputs.each(function() {
            if ($(this).val() !== '') {
              isDocumentUploaded = true;
              return false; 
            }
          });
          if (!isDocumentUploaded) {
            uploadDocumentError.text('Please upload a document');
          }
          else{
            uploadDocumentError.text('');
          }
       
       
         
         }) });
        
      
      
        
        