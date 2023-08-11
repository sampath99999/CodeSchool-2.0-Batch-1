let productSection = document.getElementById('productSection');


var allProducts;


const xhttp = new XMLHttpRequest();
xhttp.onload = async function() {
     allProducts = await JSON.parse(this.responseText);
     console.log(allProducts)
     let productItems=""
     for (let i of allProducts){
        console.log(i)
        let item= `<div class='col-lg-3 col-6 text-start shadow-md bg-white flex-lg-shrink-1' style='height: 600px!important;'>
        <div class='text-end me-4 mt-4'><i class="fa-regular fa-heart p-2 p-lg-0 border-1 btn shadow-lg mb-1" style='font-size:130%;' onclick='favIcon()'></i></div>
        
        <div class='text-center' style="height: 350px; width: 90%; bg-white">
        <img src=${i.image} class='w-100 h-100'></div>
        
        <div class="text-end me-3 d-lg-none"><i class="bi bi-plus-circle fs-1 text-danger"></i></div>
         <p class='text-wrap col-12 fw-medium ps-3 flex-shrink-1 mt-2' style="font-size: 100%;">${i.title}</p>
         <p class='fw-medium ps-3' style="font-size:120%"><s class='text-secondary'>$${Math.floor(30+i.price)}</s> $${i.price}</p>
         
     </div>`;
     productItems+=item;

     }
     productSection.innerHTML=productItems;
     
      }
xhttp.open("GET", "https://fakestoreapi.com/products/", true);
xhttp.send();
  


  
