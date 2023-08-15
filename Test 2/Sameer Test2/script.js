
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    const productListDiv = document.getElementById('productList');

    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    const productsToShow = data.slice(0, 10);
 

    productsToShow.forEach(product => {
      const {image, title,category,id,price } = product;

      const productDiv = document.createElement('div');
      productDiv.classList.add('product');

      productDiv.innerHTML = `
        <div class="d-flex flex-row align-items-center gap-3 border p-2">
        <p></p>
          <img src="${image}" alt="${title}" width="100">
          <p>${title}</p>
          <p>${category}</p>
          <p>TS3800${id}</p>
          <p>9</p>
          <p>$${price}</p>
        </div>
      `;

      productContainer.appendChild(productDiv);
    });

    productListDiv.appendChild(productContainer);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


  
