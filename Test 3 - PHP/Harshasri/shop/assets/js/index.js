var userId = localStorage.getItem("user_id");
var roleId = localStorage.getItem("role_id");
if (!userId && !roleId) {
  window.location.href = "./login.html";
} else {
  $(document).ready(function () {
    $("#addButton").hide();

    console.log(typeof roleId);
    if (roleId == "1") {
      $("#addButton").show();
    } else {
      $("#addButton").hide();
    }

    loadProducts();
    function loadProducts() {
      $.ajax({
        method: "GET",
        url: "./api/displayProduct.php",
        success: function (response) {
          var data = JSON.parse(response);
          console.log(data);
          var result = "";
          for (let i of data.data) {
            result += `             
                        <div class="card d-flex flex-row justify-content-between p-2 product">
                            <div class="d-flex flex-row align-items-center">
                            <img class="card-img-top" style=" height:100px ;width:100px" src="${i.product_image}" alt="Card image cap">
                            <div class="card-body">
                                <p class="card-text">${i.name}</p>
                                <p class="card-text">${i.rating}<i class="fa fa-star text-success" aria-hidden="true"></i> | <span class="text-muted">${i.reviews} Reviews</span></p>
                                <p>Size : ${i.size}</p>


                            </div>
                            </div>
                            <div class="card-text d-flex flex-row align-items-end mb-3">$<b>${i.product_price}</b>.00</div>
                            </div>
                    `;
          }
          document.getElementById("productContainer").innerHTML = result;
        },
      });
    }

    //logout
    $("#logoutBtn").click(function () {
      $.post("./api/logout.php", function () {
        localStorage.removeItem("user_id");
        localStorage.removeItem("role_id");
        window.location.replace("login.html");
      });
    });

    $("#productAddBtn").click(function () {
      console.log("post button clicked");

      let productImage = $("#productImgUrl").val();
      let productName = $("#name").val();
      let price = $("#price").val();
      let rating = $("#rating").val();
      let review = $("#review").val();
      let size = $("#size").val();
      let categoryId = $("#categoryId").val();

      $.ajax({
        url: "api/addProduct.php",
        type: "POST",
        data: {
          product_image: productImage,
          name: productName,
          product_price: price,
          rating: rating,
          reviews: review,
          size: size,
          category_id: categoryId,
        },
        success: function (result) {
          console.log(result);
          var data = JSON.parse(result);
          console.log(data);
          if (data["status"]) {
            console.log(data["message"]);
            alert(data["message"]);
          } else {
            alert(data["message"]);
            console.log(data["message"]);
          }
        },
        error: function () {
          alert("Error posting the comment.");
        },
      });
    });
  });
}
