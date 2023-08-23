function showStore(products) {
    let productTag = "";
    for (let i = 0; i < 3; i++) {
      productTag += `<div class="col-4 products">
                            <div class="card">
                                <img src="${products[i].image}" class="card-img-top" alt="Iphone">
                                <div class="card-body text-center">
                                    <h3>₹ ${products[i].price}.00</h3>
                                    <p class="card-title">${products[i].title}</p>
                                    
                                    
                                </div>
                            </div>
                        </div>`;
    }

    document.getElementById("storeDiv").innerHTML = productTag;
  }

  function loadProducts() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      if (xhttp.status === 200) {
        let products = JSON.parse(xhttp.responseText);
        showStore(products);
      } else {
        console.error("Failed to fetch products:", xhttp.status);
      }
    };
    xhttp.open("GET", "https://fakestoreapi.com/products");
    xhttp.send();
  }
  document.addEventListener("DOMContentLoaded", loadProducts);