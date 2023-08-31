$(document).ready(function () {
  $.ajax({
    url: "./api/getData.php",
    type: "POST",
    dataType: "json",
    success: function (data) {
      createTable(data);
    },
  });
});

function showDetails(clickedDiv) {
  var imageElement = $(clickedDiv).attr("id");
  $.ajax({
    method: "POST",
    url: "./api/getCustomerData.php",
    data: {
      lead_id: imageElement,
    },
    success: function (data) {
      console.log(data[0]);
      $("#tableBody").addClass("d-none");
      $("#tableBody2").removeClass("d-none");
      $("#contactId").text(data[0].lead_id);
      $("#dateSubmitted").text(data[0].date);
      console.log(data[0].first_name);
      $("#lastName").val(data[0].last_name);
      $("#email").val(data[0].email);
      $("#phone").val(data[0].phone);
      $("#company").val(data[0].company);
      $("#firstName").val(data[0].first_name);
      $("#title").val(data[0].title);
      $("#address").val(data[0].address);
      console.log(data[0].addressLine);
      $("#addressLine").val(data[0].addressline2);
      $("#city").val(data[0].city);
      $("#state").val(data[0].state);
    },
    error: function (xhr, textStatus, errorThrown) {
      console.error("AJAX request failed:", errorThrown);
    },
  });
}

function createTable(data) {
  data.forEach(function (item) {
    var tableRow = $("<tr></tr>");
    tableRow.append($("<td></td>").text(item.date));
    tableRow.append($("<td></td>").text(item.last_name));
    tableRow.append($("<td></td>").text(item.first_name));
    tableRow.append($("<td></td>").text(item.company));
    tableRow.append($("<td></td>").text(item.status));
    tableRow.append($("<td></td>").text(item.follow_up));
    var link = $("<td></td>");
    var anchorTag = $("<a></a>").text("Details");

    anchorTag.attr("id", item.lead_id);
    anchorTag.attr("onclick", "showDetails(this)");

    link.append(anchorTag);
    tableRow.append(link);
    $("#table").append(tableRow);
  });
}

function updateDetails(event) {
  event.preventDefault();
  let a=$("#contactId").val()

  $.ajax({
    type: "POST",
    url: "./api/updateDetails.php",
    data: {
      lead_id: $("#contactId").text(),
      date:$("#dateSubmitted").text(),
      last_name:$("#lastName").val(),
      email:$("#email").val(),
      phone:$("#phone").val(),
      company:$("#company").val(),
      first_name:$("#firstName").val(),
      titlel:$("#title").val(),
      addres:$("#address").val(),
      addressline2:  $("#addressLine").val(),
      city:$("#city").val(),
      state:$("#state").val()
    },
    success: function (data) {
      console.log(data[0]);
    },
    error: function (xhr, textStatus, errorThrown) {
      console.error("AJAX request failed:", errorThrown);
    },
  });
}
