$(document).ready(function () {
  let userId = window.localStorage.getItem("user_id");
  let userType = window.localStorage.getItem("user_type");
  if (!userId && !userType == 1) {
    window.location.replace("./login.html");
  }
});

function addProduct(event) {
  event.preventDefault();
  console.log("clicked");
  let productName = $("#productName").val();
  let price = $("#price").val();

  let description = $("#description").val();

  $("#productNameErrorMessage").text("");
  $("#productPriceErrorMessage").text("");

  if (productName.length < 1 || productName.length > 25) {
    $("#productNameErrorMessage").text(
      "product name should be at least 1 Characters and at most 25 Characters"
    );
    return false;
  }
 
  let nums = /^[0-9]*$/;
  console.log(nums.test(price));

  if (!nums.test(price)) {
    $("#productPriceErrorMessage").text("Price accepts only digits");
    return false;
  }

  $.post(
    "./api/addProduct.php",
    {
      productName,
      price,
      description,
    },
    function (result) {
      result = JSON.parse(result);
      console.log(result);
      console.log(result.status);
      if (result.status) {
        alert(result.message);
        window.location.replace("./adminhome.html");
      } else {
        alert(result.message);
      }
    }
  );

 

  console.log("js connected");
}
