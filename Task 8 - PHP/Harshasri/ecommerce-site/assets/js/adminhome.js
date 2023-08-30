// var ordersShown = false;
$("#logout").click(function () {
  console.log("clicked");
  localStorage.removeItem("token");
  localStorage.removeItem("user_type");
  window.location.replace("./login.html");
});

$(document).ready(function () {
  getProducts();

  $("#removeProductsBtn").click(function () {
    var selectedEntries = [];

    $(".entry-checkbox:checked").each(function () {
      selectedEntries.push($(this).val());
    });

    if (selectedEntries.length > 0) {
      var productIds = selectedEntries;

      $.ajax({
        type: "post",
        url: "./api/removeProduct.php",
        data: { productIds: productIds },

        success: function (result) {
          console.log(result);
          $("#tableContent").html("");
          getProducts();
        },
      });
    } else {
      alert("Select The Product");
    }
  });
  $("#addProductsBtn").click(function () {
    window.location.replace("./addproduct.html");
  });
});
function getProducts() {
  $.get("./api/viewProducts.php", function (result) {
    console.log(result);
    var result = JSON.parse(result);

    for (var i = 0; i < result.length; i++)
      $("#tableContent").append(
        `<tr>
        <td><input type="checkbox" class="entry-checkbox" value="${result[i].product_id}"></td>
        <td>${result[i].product_id}</td>
        <td>${result[i].product_name}</td>
        <td>${result[i].price}</td>
        <td>${result[i].product_description}</td>
      
       
    </tr>`
      );
  });
}
