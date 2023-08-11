// const productListElement = document.getElementById("productList");

// // Replace this hard-coded data with actual API data
// const productsData = [
//   {
//     id: 1,
//     name: "Product 1",
//     price: 29.99,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     image: "https://media.istockphoto.com/id/498852901/photo/red-plaid-shirt.jpg?s=612x612&w=0&k=20&c=FN0dBgzq0_GDJo5fKwRyM-QDz37TUVxAGKK4o3TSLnI="
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     price: 39.99,
//     description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
//     image: "https://media.istockphoto.com/id/157441019/photo/mens-black-short-sleeved-shirt-isolated-on-white-w-clipping-path.webp?b=1&s=170667a&w=0&k=20&c=yUatNCVVslr0K4iQzNazp6p3g9PLwIyG1IxhwLHD9qA="
//   },
//   // Add more products here...
// ];

// function renderProduct(product) {
//   const productElement = document.createElement("div");
//   productElement.classList.add("product");

//   const productImage = document.createElement("img");
//   productImage.src = product.image;

//   const productName = document.createElement("div");
//   productName.classList.add("product-name");
//   productName.textContent = product.name;

//   const productPrice = document.createElement("div");
//   productPrice.classList.add("product-price");
//   productPrice.textContent = `$${product.price}`;

//   const productDescription = document.createElement("div");
//   productDescription.classList.add("product-description");
//   productDescription.textContent = product.description;

//   productElement.appendChild(productImage);
//   productElement.appendChild(productName);
//   productElement.appendChild(productPrice);
//   productElement.appendChild(productDescription);

//   productListElement.appendChild(productElement);
// }

// function renderProductList(products) {
//   products.forEach(product => {
//     renderProduct(product);
//   });
// }

// renderProductList(productsData);


//=======================================================================================

// const productListElement = document.getElementById("productList");

// // async function getProducts() {
// //   try {
// //     const response = await fetch("https://fakestoreapi.com/products");
// //     const products = await response.json();
// //     return products;
// //   } catch (error) {
// //     console.error("Error fetching products:", error);
// //     return [];
// //   }
// // }




// function renderProduct(product) {
//   const productElement = document.createElement("div");
//   productElement.classList.add("product");

//   const productImage = document.createElement("img");
//   productImage.src = product.image;

//   const productName = document.createElement("div");
//   productName.classList.add("product-name");
//   productName.textContent = product.title;

//   const productPrice = document.createElement("div");
//   productPrice.classList.add("product-price");
//   productPrice.textContent = `$${product.price}`;

//   const productDescription = document.createElement("div");
//   productDescription.classList.add("product-description");
//   productDescription.textContent = product.description;

//   productElement.appendChild(productImage);
//   productElement.appendChild(productName);
//   productElement.appendChild(productPrice);
//   productElement.appendChild(productDescription);

//   productListElement.appendChild(productElement);
// }

// async function renderProductList() {
//   const products = await getProducts();
//   products.forEach(product => {
//     renderProduct(product);
//   });
// }

// renderProductList();


//==================================================================================


const productListElement = document.getElementById("productList");

function getProducts() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fakestoreapi.com/products/", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error("Failed to fetch products"));
      }
    };
    xhr.onerror = function () {
      reject(new Error("Network error occurred"));
    };
    xhr.send();
  });
}

function renderProduct(product) {
  const productElement = document.createElement("div");
  productElement.classList.add("product","col-lg-3","col-sm-5","ms-lg-0","ms-sm-0","bg-body-white");




  const productImage = document.createElement("img");
  productImage.classList.add("product-image");
  productImage.src = product.image;

  const productName = document.createElement("div");
  productName.classList.add("product-name");
  productName.textContent = product.title;

  const productPrice = document.createElement("div");
  productPrice.classList.add("product-price");
  productPrice.textContent = `$${product.price}`;

  const productDescription = document.createElement("div");
  productDescription.classList.add("product-description");
  productDescription.textContent = product.description;

  productElement.appendChild(productImage);
  productElement.appendChild(productName);
  productElement.appendChild(productPrice);
//   productElement.appendChild(productDescription);

  productListElement.appendChild(productElement);
}

function renderProductList() {
  getProducts()
    .then(products => {
      products.forEach(product => {
        renderProduct(product);
      });
    })
    .catch(error => {
      console.error("Error fetching products:", error);
    });
}

renderProductList();
