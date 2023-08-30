$("#logout").click(function () {
  console.log("clicked");
  localStorage.removeItem("token");
  localStorage.removeItem("user_type");
  window.location.replace("./login.html");
});
$(document).ready(function () {
  getOrders();
});
function getOrders() {
  $.get("./api/viewOrders.php", function (result) {
    console.log(result);
    var result = JSON.parse(result);
    console.log(result);

    for (var i = 0; i < result.length; i++)
      $("#tableContent").append(
        `<tr>
        <td>${result[i].order_id}</td>
        <td>${result[i].user_id}</td>
        <td>${result[i].ordered_at}</td>
        <td>${result[i].shipped_date}</td> 
        <td>${result[i].status}</td> 
        </tr>`
      );
  });
}
