// document.addEventListener('DOMContentLoaded', function() {
//     let products = document.querySelector('.products');
//     let request = new XMLHttpRequest();
    
//     request.onreadystatechange = function() {
//         if (request.readyState === 4) {
//             if (request.status === 200) {
//                 let response = JSON.parse(request.responseText);

//                 let productsHTML = '';

//                 for (let i = 0; i < response.length; i++) {
//                     let title = response[i].title;
//                     let colClass = 'col-6 col-md-3'; 
//                     productsHTML += `
//                         <div class="${colClass}">
//                             <div class=" card product border-0">
//                                 <div class="heart-icon">
//                                     <i class="bi bi-heart"></i>
//                                 </div>
//                                 <img src="${response[i].images[2]}" alt="${response[i].category.name}" class="card-img-top product-img img-fluid ">
//                                <div class=" d-sm-block d-md-none"><i class=" plus bi bi-plus border border-danger rounded-circle"></i></div>
//                                 <div class="card-body ">
                                   
//                                     <h6 class="card-text">${response[i].category.name}</h6>
//                                     <h6 class="card-price">$${response[i].price}</h6>
                                    
//                                 </div>
//                             </div>
//                         </div>
//                     `;
//                 }

//                 products.innerHTML = `<div class="row">${productsHTML}</div>`;
//             } else {
//                 console.log('Error: ' + request.status);
//             }
//         }
//     };

//     request.open('GET', 'https://api.escuelajs.co/api/v1/products');
//     request.send();
// });
document.addEventListener('DOMContentLoaded', function() {
    let products = document.querySelector('.products');
    let request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            if (request.status === 200) {
                let response = JSON.parse(request.responseText);

                let productsHTML = '';

                for (let i = 0; i < response.length; i++) {
                    let title = response[i].title;
                    let colClass = 'col-6 col-md-3'; 
                    productsHTML += `
                        <div class="${colClass}">
                            <div class=" card product border-0">
                                <div class="heart-icon">
                                    <i class="bi bi-heart"></i>
                                </div>
                                <img src="${response[i].image}" alt="${response[i].category}" class=" image card-img-top product-img img-fluid ">
                               <div class=" d-sm-block d-md-none"><i class=" plus bi bi-plus border border-danger rounded-circle"></i></div>
                                <div class="card-body ">
                                   
                                    <h6 class="card-text">${response[i].title}</h6>
                                    <h6 class="card-price">$${response[i].price}</h6>
                                    
                                </div>
                            </div>
                        </div>
                    `;
                }

                products.innerHTML = `<div class="row">${productsHTML}</div>`;
            } else {
                console.log('Error: ' + request.status);
            }
        }
    };

    request.open('GET', 'https://fakestoreapi.com/products');
    request.send();
});
