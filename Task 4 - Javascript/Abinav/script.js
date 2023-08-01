
  function fetchProducts() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var products = JSON.parse(this.responseText);
        displayProducts(products);
      }
    };

    xmlhttp.open('GET', 'https://fakestoreapi.com/products/1', true);
    xmlhttp.send();
  }

  function displayProducts(products) {
    var productListDiv = document.getElementById('productList');
    var productListHTML = '';

    products.forEach(element => {
        
    });(function (product) {
      productListHTML += `
        <div>
          <h2>${product.name}</h2>
          <p>Category: ${product.category}</p>
          <p>Price: $${product.price}</p>
          <img src="${product.image}" alt="${product.name}" width="200">
        </div>
      `;
    });

    productListDiv.innerHTML = productListHTML;
  }

  // Call the fetchProducts function when the page loads
  window.onload = fetchProducts;

