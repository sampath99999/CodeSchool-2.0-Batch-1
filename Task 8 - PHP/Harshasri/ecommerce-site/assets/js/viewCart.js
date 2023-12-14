$("#logout").click(function () {
  console.log("clicked");
  localStorage.removeItem("token");
  localStorage.removeItem("user_type");
  window.location.replace("./login.html");
});
$(document).ready(function () {
  cartOrders();
});
function cartOrders() {
  $.get("./api/viewCart.php", function (result) {
    console.log(result);
    var result = JSON.parse(result);
    console.log(result);
    var sum = 0;

    for (var i = 0; i < result.length; i++) {
      sum += result[i].price * result[i].quantity;
      $("#tableContent").append(
        `<tr>
        <td>${result[i].product_id}</td>
        <td>${result[i].product_name}</td>
        <td>${result[i].price}</td>
        <td>${result[i].order_id}</td> 
        <td>${result[i].quantity}</td> 
        <td>${result[i].total_price}</td> 
        </tr>`
      );
    }
    console.log(sum);
    $("#total").text(sum);
  });
}
