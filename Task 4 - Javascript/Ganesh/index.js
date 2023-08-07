// API Function listing products to user
function listProductsAPI(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            let productList = JSON.parse(this.responseText);
            let productsContainer = document.getElementById("products-container");
            for(let product in productList){
                productsContainer.innerHTML += `
                <div class="col">
                    <div class="card h-100 rounded-0 border-0">
                        <div class="px-5 py-3 position-relative">
                            <div class="position-absolute top-0 end-0 p-2 px-2 m-2 rounded-circle bg-body-tertiary">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-heart"
                                viewBox="0 0 16 16"
                                >
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                                />
                                </svg>
                            </div>
                            <img
                            src="${productList[product].image}"
                            class="card-img-top"
                            alt="..."
                            />
                        </div>
                        <div class="card-body bg-body-tertiary">
                            <h6 class="card-title text-dark">${productList[product].title}</h6>
                            <div class="row">
                                <div class="col-6">
                                    <p class="card-text text-teritory">$${productList[product].price}</p>
                                </div>
                                <div class="col-6 text-end">
                                    <p class="card-text text-teritory">${productList[product].rating.rate}⭐</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            }
        }
    };
    xhttp.open("GET", "https://fakestoreapi.com/products");
    xhttp.send();
}

function myMobileFilterFunction(x) {
    if (x.matches) { // If media query matches
      document.getElementById("mobile-filters").classList.add("bg-body-tertiary");
      let filterContentElement = document.getElementById("filterContent");
      filterContentElement.classList.remove("d-inline-flex","show");
    } else {
        // 
    }
}
  
var x = window.matchMedia("(max-width: 540px)");
myMobileFilterFunction(x); // Call listener function at run time
x.addListener(myMobileFilterFunction);