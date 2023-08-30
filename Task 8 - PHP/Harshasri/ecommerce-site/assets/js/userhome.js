var ordersShown = false;
$("#logout").click(function () {
  console.log("clicked");
  localStorage.removeItem("token");
  localStorage.removeItem("user_type");
  window.location.replace("./login.html");
});

getProducts();

function getProducts() {
  $.get("./api/viewProducts.php", function (result) {
    console.log(result);
    var result = JSON.parse(result);

    for (var i = 0; i < result.length; i++)
      $("#tableContent").append(
        `                <tr>
          <td><input type="checkbox" class="entry-checkbox" value="${result[i].product_id}"></td>
          <td>${result[i].product_id}</td>
          <td>${result[i].product_name}</td>
          <td>${result[i].price}</td>
      
          <td>${result[i].product_description}</td>
        
         
      </tr>`
      );
  });
}
