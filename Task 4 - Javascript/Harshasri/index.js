


function display(products){
  console.log(products);
  let product="";
      for (let i = 0; i<products.length;i++){
          product += `<div class= "card col-6 col-md-3 d-flex flex-column justify-content-center align-items-center" style="width:16rem">
          <div class="image-div d-flex flex-column">
            <i class="bi bi-heart fs-6 text-end p-2"></i>
            <img class="w-75 m-4 text-center image" src="${products[i].image}" alt="Card image cap">
            <i class="bi bi-plus-circle text-end text-danger fs-5 d-block d-md-none m-2"></i>
          </div>
          <div class="card-body d-flex flex-column justify-content-start align-items-start m-0">
            <p class="card-title"><b>Name :</b> ${products[i].title}</p>
            <span class="card-title"><b>Price :</b> ${products[i].price}</span>
            </div>
          </div>`;
      }
      document.getElementById("demo").innerHTML = product;


}

function loadSampleData(){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
      names = JSON.parse(this.responseText);
      display(names);
  };
  xhttp.open("GET", "https://fakestoreapi.com/products",true);
  xhttp.send();
}

loadSampleData();




// https://github.com/stockholmux/ecommerce-sample-set/blob/master/items.json

