function showStore(products) {
    let productTag = "";
    for (let i = 0; i < products.length; i++) {
      productTag += `<div class="col-6 col-md-3">
                            <div class="card">
                                <img src="${products[i].image}" class="card-img-top" alt="Iphone">
                                <div class="card-body">
                                    <p class="card-title">${products[i].title}</p>
                                    <h3>₹ ${products[i].price}.00</h3>
                                    
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

  // Use DOMContentLoaded event and event listener to load products when the page is ready
  document.addEventListener("DOMContentLoaded", loadProducts);
