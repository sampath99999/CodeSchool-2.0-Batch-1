$(document).ready(function() {

    $("#product-title").on("input", function() {
      var productTitle = $(this).val();
      if (productTitle == "") {
        $("#product-title-error").text("Please enter a product title.");
      } else {
        $("#product-title-error").text("");
      }
    });
  });
  
  $(document).ready(function() {
  
    $("#type").on("input", function() {
      var type = $(this).val();
      if (type == "") {
        $("#type-error").text("Please enter a product type.");
      } else {
        $("#type-error").text("");
      }
    });
  });
  
  $(document).ready(function() {
    $("#side").on("input", function() {
      var side = $(this).val();
      if (side == "") {
        $("#side-error").text("Please enter a product side.");
      } else {
        $("#side-error").text("");
      }
    });
  });
  
  
  $(document).ready(function() {
    $("#product-state").on("input", function() {
      var productstate = $(this).val();
      if (productstate == "") {
        $("#product-state-error").text("Please enter product state.");
      } else {
        $("#product-state-error").text("");
      }
    });
  });
  
  $(document).ready(function() {
    $("#product-Description").on("input", function() {
      var productDescription = $(this).val();
      if (product-Description == "") {
        $("#product-Description-error").text("Please enter product Description.");
      } else {
        $("#product-Description-error").text("");
      }
    });
  });
  
  
  const yearDropdownField = $("#yearDropdownField");
  const monthDropdownField = $("#monthDropdownField");
  const dateDropdownField = $("#dateDropdownField");
  
  window.onload = function () {
  
    populateYearDropdown();
    populateMonthDropdown();
    $("#dateDropdownDiv").toggle();
    $("#selectedDateField").click(function () {
      $("#dateDropdownDiv").toggle();
    });
  };
  
  function populateYearDropdown() {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 2000; i--) {
      const option = document.createElement("OPTION");
      option.innerHTML = i;
      option.value = i;
      yearDropdownField.append(option);
    }
  }
  
  function populateMonthDropdown() {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
   
    for (let i = 0; i < monthNames.length; i++) {
      const option = document.createElement("OPTION");
      option.innerHTML = monthNames[i];
      option.value = i;
      monthDropdownField.append(option);
    }
  }
  
  function onOkClick() {
    const y = yearDropdownField.val();
    const m = monthDropdownField.val();
    const date = new Date(y, m);
    selectedDateField.val(date.toLocaleDateString());
    $("#dateDropdownDiv").hide();
  }
  
  function onNowClick() {
    const date = new Date();
    yearDropdownField.val(date.getFullYear());
    monthDropdownField.val(date.getMonth());
    selectedDateField.val(date.toLocaleDateString());
    $("#dateDropdownDiv").hide();
  }
  
  
  $(document).ready(function() {
    $('#product-title').on('input', function() {
      const productTitle = $(this).val();
      if (productTitle.trim() !== '') {
        const apiKey = 'd9GlGupJQeU6IkvhTsLSKDkH-Ty_U2Rr2QfQmhh0CGs'; 
        const apiUrl = `https://api.unsplash.com/photos/random?query=${productTitle}&client_id=${apiKey}`;
        $.get(apiUrl, function(data) {
          if (data && data.urls && data.urls.small) {
            const imageContainer = $('#image-container');
            imageContainer.empty();
            const image = $('<img>').attr('src', data.urls.small).attr('alt', 'Product Image');
            imageContainer.append(image);
          }
        });
      }
    });
  });
  
  
  $(document).ready(function() {
    $("#submitBtn").click(function() {
        var user = {
            productTitle: $("#product-title").val(),
            type: $("#type").val(),
            side: $("#side").val(),
            state: $("#product-state").val(),
            productDescription: $("#product-Description").val()
        };
        
        $(document).ready(function() {
          $("#submitBtn").click(function() {
              // Check if the form is valid
              if ($("#product-title").val() && $("#type").val() && $("#side").val() && 
                 $("#product-state").val() && 
                  $("#product-Description").val()) {
  
                  var user = {
                      productTitle: $("#product-title").val(),
                      type: $("#type").val(),
                      side: $("#side").val(),
                      state: $("#product-state").val(),
                      productDescription: $("#product-Description").val()
                  };
                  $.ajax({
                    url: "https://reqres.in/api/users",
                    method: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(user),
                    success: function(response) {
                        $("#demo").text("Success");
                    },
                    error: function(xhr, status, error) {
                        console.log("Request failed:", error);
                    }
                });
            } else {
                console.log("All fields are required.");
            }
        });
    });
  
    });
  });
  
  