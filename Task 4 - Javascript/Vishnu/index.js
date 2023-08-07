let productsContainer=document.getElementById("productsContainer");

const views=[firstViewConstructor,secondViewContructor,thirdViewConstructor]
function firstViewConstructor(image,title="",price=""){
    return  `<div class="col-5 col-lg-2 card-image mb-4 mb-lg-0 position-relative" >
                <div class="h-75 position-relative" style="background-color: #e6f7ff; padding: 10px;">
                    <div class="d-flex justify-content-between">
                        <div>
                        <p class="bg-danger text-center text-white" style="border-radius: 8px;">Hot</p>
                        </div>
                        <div class="me-2 d-none d-lg-block">
                            <i class="bi bi-heart"></i>
                        </div>
                        <button class="me-2 d-lg-none border-0 bg-white" style="height:2%">
                            <i class="bi bi-heart"></i>
                        </button>
                    </div>
                    <div class="text-center">
                        <img src=${image}  />
                    </div>
                </div>
                <div class="h-25 d-flex flex-column justify-content-between">
                    <div>
                        <p style="font-size: 13px;">${title}</p>    
                    </div>
                    <div class="d-flex justify-content-lg-between flex-column flex-lg-row justify-content-start">
                        <div><p style="font-size: 13px;">$${price}</p></div>
                        <div class="d-flex pt-2">
                            <div class="fs-1 me-2 bg-warning border-0" style="height: 10px; width: 10px; border: 1px solid green; border-radius: 50%; ;"></div>
                            <div class="fs-1 me-2 bg-success border-0" style="height: 10px; width: 10px; border: 1px solid green; border-radius: 50%;"></div>
                            <div class="fs-1 me-2 bg-dark border-0" style="height: 10px; width: 10px; border: 1px solid green; border-radius: 50%;"></div>
                        </div> 
                    </div>
                </div>
                <button class="rounded-circle d-lg-none border border-2 ps-2 pe-2 pt-0 fw-bold border-danger card-button">+</button>
            </div>`
}
let firstView=firstViewConstructor("");


function secondViewContructor(image,title="",price=""){
    return  `<div class="col-5 col-lg-2 card-image mb-4 mb-lg-0 position-relative" >
                <div class="h-75" style="background-color: #e6f7ff; padding: 10px;">
                    <div class="d-flex justify-content-between">
                        <div>
                        <p class="bg-success text-center text-white" style="border-radius: 8px;">-13%off</p>
                        <p class="bg-warning text-center text-white" style="border-radius: 8px;">Limited</p>
                        </div>
                        <div class="me-2 d-none d-lg-block">
                            <i class="bi bi-heart"></i>
                        </div>
                        <button class="me-2 d-lg-none border-0 bg-white" style="height:2%">
                            <i class="bi bi-heart"></i>
                        </button>
                    </div>
                    <div class="text-center">
                        <img src=${image}  />
                    </div>   
                </div>
                <div class=" h-25 d-flex flex-column justify-content-between" >
                    <div>
                        <p style="font-size: 13px;">${title}</p> 
                    </div>
                    <div class="d-flex justify-content-lg-between flex-column flex-lg-row justify-content-start">
                        <div><p style="font-size: 13px;"><span class="text-decoration-line-through">$${price}</span> $${price-13}</p></div>
                        <div class="d-flex pt-2">
                            <div class="fs-1 me-2 bg-warning border-0" style="height: 10px; width: 10px; border: 1px solid green; border-radius: 50%; ;"></div>
                            <div class="fs-1 me-2 bg-success border-0" style="height: 10px; width: 10px; border: 1px solid green; border-radius: 50%;"></div>
                            <div class="fs-1 me-2 bg-dark border-0" style="height: 10px; width: 10px; border: 1px solid green; border-radius: 50%;"></div>
                        </div>
                   </div>
                </div>
                <button class="rounded-circle d-lg-none border border-2 ps-2 pe-2 pt-0 fw-bold border-danger card-button">+</button>
            </div>`;
    }
let secondView=secondViewContructor("");


function thirdViewConstructor(image,title="",price=""){
    return  `<div class="col-5 col-lg-2 card-image mb-4 mb-lg-0 position-relative" >
                <div class="h-75 " style="background-color: #e6f7ff; padding: 10px;">
                    <div class="d-flex justify-content-end">
                        <div class="me-2 d-none d-lg-block">
                            <i class="bi bi-heart"></i>
                        </div>
                        <button class="me-2 d-lg-none border-0 bg-white" style="height:2%">
                            <i class="bi bi-heart"></i>
                        </button>
                    </div>
                    <div class="text-center">
                        <img src=${image}  />
                    </div>   
                </div>
                <div class="h-25 d-flex flex-column justify-content-between">
                    <div>
                        <p style="font-size: 13px;">${title}</p>
                    </div>
                    <div class="d-flex flex-column flex-lg-row justify-content-lg-between  justify-content-start justify-content-lg-end">
                        <div><p style="font-size: 13px;">$${price}</p></div>
                        <div class="d-flex pt-2">
                            <div class="fs-1 me-2 bg-warning border-0" style="height: 10px; width: 10px; border: 1px solid green; border-radius: 50%; ;"></div>
                            <div class="fs-1 me-2 bg-success border-0" style="height: 10px; width: 10px; border: 1px solid green; border-radius: 50%;"></div>
                            <div class="fs-1 me-2 bg-dark border-0" style="height: 10px; width: 10px; border: 1px solid green; border-radius: 50%;"></div>  
                        </div>
                    </div>
                </div>
                <button class="rounded-circle d-lg-none border border-2 ps-2 pe-2 pt-0 fw-bold border-danger card-button">+</button>
            </div>`;
}
let thirdView=thirdViewConstructor("");

function getRandom(){
    const randomValue=Math.floor(Math.random()*views.length);
    return views[randomValue];
}
function getProducts(products){
    for(let item=0;item<20;item++){
        let image=products[item].image;
        let title=products[item].title;
        let price=products[item].price;
        if(item===10 || item===12 || item===13 || item===4 || item===7 || item===8 || item===9){
            title=title.substring(0,34);
        }
        const radomFunction=getRandom()
        randomView=radomFunction(image,title,price);
        productsContainer.innerHTML+=randomView;
       
    }  
   
   
}

const xhr= new XMLHttpRequest();
xhr.onload=function(){
    const products=JSON.parse(this.responseText);
    getProducts(products);
}
xhr.open("GET","https://fakestoreapi.com/products/");
xhr.send();



