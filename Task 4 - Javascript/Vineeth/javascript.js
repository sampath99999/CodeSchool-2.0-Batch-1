function displayProducts() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var products = JSON.parse(this.responseText);
      var productListDiv = document.getElementById("productList");

      var productHTML = '';
      for (var i = 0; i < products.length; i++) {
        var product = products[i];
        productHTML +=`
        <div class="mt-4"> 
          <div class="card" style="width: 14rem; height:20rem;">
            <img src="${product.image}" class="card-img-center" alt="..." style="width:50%;height:40%;">
            <div class="card-body">
              <h6 class="card-title">${product.title}</h6>
              <div class='d-flex gap-5'>
                  <p>RS ${product.price}</p>
                  <p class='d-flex gap-1'><i class="bi bi-star-fill" style='color:"#FFD700";'></i>${product.rating.rate}</p>
              </div>
            </div>
          </div>
        </div>`;
      }

      productListDiv.innerHTML = productHTML;
    }
  };

  xhttp.open("GET", "https://fakestoreapi.com/products/", true);
  xhttp.send();
}
displayProducts();