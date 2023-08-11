// Function to fetch and display products from the API
async function fetchProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      displayProducts(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
  
  // Function to display products in the HTML page
  function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    let productHTML = '';
  
    products.forEach(product => {
      productHTML += `
        <div class="product-card">
        <div class="img">
        <div class="heart">
          <i class="fa fa-heart-o"></i>
        </div>
          <img class="product_img" src="${product.image}" alt="Product Image">
          </div>
          <div class="content">
          <h2 class="product_title">${product.title}</h2>
          <p>$${product.price}</p>
          </div>
        </div>
      `;
    });
  
    productContainer.innerHTML = productHTML;
  }
  
  // Call the fetchProducts function when the page loads
  window.onload = fetchProducts;
  /*
  const API_URL = 'https://fakestoreapi.com/products';

  async function fetchProducts() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  
  function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';
  
    products.slice(0, 20).forEach((product) => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
  
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.title;
  
      const productName = document.createElement('h3');
      productName.textContent = product.title;
  
      const productPrice = document.createElement('p');
      productPrice.textContent = `$${product.price}`;
  
      productCard.appendChild(productImage);
      productCard.appendChild(productName);
      productCard.appendChild(productPrice);
  
      productContainer.appendChild(productCard);
    });
  }
  
  async function main() {
    const products = await fetchProducts();
    displayProducts(products);
  }
  
  main();
*/