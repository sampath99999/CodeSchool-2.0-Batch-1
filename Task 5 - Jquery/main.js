function showNews(products) {
    let productTag = "";
    for (let i = 0; i <3; i++) {
      productTag += `<div class="col-4 p-0 mt-1  ">
      <div class="col text-center align-content-center text-white py-5 px-2" 
      style="background-image: url(${products.articles[i].urlToImage}); 
      background-size:cover; 
      background-color: grey;  
      background-blend-mode: multiply;
      margin-right:1px; height:300px">
      <div class="mt-3">
          <p class="d-inline p-1 px-2 rounded" style="background-color: #607ec7;">${products.articles[i].author}</p>
          <h5 class="mt-2">${products.articles[i].title}</h5>
          <p>1 week ago</p>
      </div>
      
  </div>
                        </div>`;
    }

    document.getElementById("newsdiv").innerHTML = productTag;
  }

  function loadNews() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      if (xhttp.status === 200) {
        let products = JSON.parse(xhttp.responseText);
        showNews(products);
      } else {
        console.error("Failed to fetch products:", xhttp.status);
      }
    };
    xhttp.open("GET", "https://newsapi.org/v2/everything?q=apple&from=2023-08-08&to=2023-08-08&sortBy=popularity&apiKey=4300d83a09ed457d8dfaee3c53f7bcca");
    xhttp.send();
  }

  // Use DOMContentLoaded event and event listener to load products when the page is ready
  document.addEventListener("DOMContentLoaded", loadNews);
// fashion 
function showFashion(products) {
  let productTag = "";
  for (let i = 0; i <3; i++) {
    productTag += `<div class="col-4 p-2 mt-3 text-center">
    <div class="card w-350">
    <h3>Fashion</h3>
    <img src="${products.articles[i].urlToImage}" class="card-img-top" alt="Iphone">
    <div class="card-body">
    <h5 class="mt-2">${products.articles[i].title}</h5>
    <p>1 week ago</p>
    <h6 class="mt-2">${products.articles[i].description}</h6>
    </div>
</div>
    
   
                      </div>`;
  }

  document.getElementById("fashiondiv").innerHTML = productTag;
}

function fashion() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (xhttp.status === 200) {
      let products = JSON.parse(xhttp.responseText);
      showFashion(products);
    } else {
      console.error("Failed to fetch products:", xhttp.status);
    }
  };
  xhttp.open("GET", "https://newsapi.org/v2/everything?q=fashion&from=2023-08-08&to=2023-08-08&sortBy=popularity&apiKey=4300d83a09ed457d8dfaee3c53f7bcca");
  xhttp.send();
}

// Use DOMContentLoaded event and event listener to load products when the page is ready
document.addEventListener("DOMContentLoaded", fashion);
//food and environment
function showFood(products) {
  let productTag = "";
  for (let i = 0; i <2; i++) {
    productTag += `<div class="col-4 p-2 mt-3 text-center">
    <div class="card w-350">
    <h3>Food</h3>
    <img src="${products.articles[i].urlToImage}" class="card-img-top" alt="Iphone">
    <div class="card-body">
    <h5 class="mt-2">${products.articles[i].title}</h5>
    <p>1 week ago</p>
    <h6 class="mt-2">${products.articles[i].description}</h6>
    </div>
</div>
    
   
                      </div>`;
  }

  document.getElementById("fooddiv").innerHTML = productTag;
}

function food() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (xhttp.status === 200) {
      let products = JSON.parse(xhttp.responseText);
      showFood(products);
    } else {
      console.error("Failed to fetch products:", xhttp.status);
    }
  };
  xhttp.open("GET", "https://newsapi.org/v2/everything?q=food&from=2023-08-08&to=2023-08-08&sortBy=popularity&apiKey=4300d83a09ed457d8dfaee3c53f7bcca");
  xhttp.send();
}

// Use DOMContentLoaded event and event listener to load products when the page is ready
document.addEventListener("DOMContentLoaded", food);
//latest news article
function showArticles(products) {
  let productTag = "";
  for (let i = 0; i <7; i++) {
    productTag += `<div class="col-6 p-2 mt-3 text-center">
    <div class="card d-flex w-350">
    <div><img src="${products.articles[i].urlToImage}" class="card-img-top" alt="Iphone"></div>
    <div class="card-body">
    <h5 class="mt-2">${products.articles[i].title}</h5>
    <p>1 week ago .1 comment</p>
    </div>
</div>
    
   
                      </div>`;
  }

  document.getElementById("articlediv").innerHTML = productTag;
}

function articles() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (xhttp.status === 200) {
      let products = JSON.parse(xhttp.responseText);
      showArticles(products);
    } else {
      console.error("Failed to fetch products:", xhttp.status);
    }
  };
  xhttp.open("GET", "https://newsapi.org/v2/everything?q=food&from=2023-08-08&to=2023-08-08&sortBy=popularity&apiKey=4300d83a09ed457d8dfaee3c53f7bcca");
  xhttp.send();
}

// Use DOMContentLoaded event and event listener to load products when the page is ready
document.addEventListener("DOMContentLoaded", articles);

