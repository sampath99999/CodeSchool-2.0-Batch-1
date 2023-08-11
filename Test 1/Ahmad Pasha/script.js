let productTitelEle = document.getElementById("productTitel");
let productTitelErrMsg=document.getElementById('productTitelErrMsg');
let type = document.getElementById('type');
let typeErrMsg = document.getElementById('typeErrMsg');
let side = document.getElementById('side');
let sideErrMsg = document.getElementById('sideErrMsg');
let productSub = document.getElementById('productSub');
let productSubErrMsg = document.getElementById('productSubErrMsg');
let year = document.getElementById('year');
let yearErrMsg = document.getElementById('yearErrMsg');
let state= document.getElementById('state');
let stateErrMsg = document.getElementById('stateErrMsg');

let floatingTextarea = document.getElementById('floatingTextarea');
let floatingTextareaErrMsg = document.getElementById('floatingTextareaErrMsg');





function productTitleFun(){
    if(productTitelEle.value===""){
        productTitelErrMsg.innerHTML="*Product Title should not be empty."
    }
    else{
        productTitelErrMsg.textContent=""
    }
}

function typeFun(){
    if(type.value===""){
        typeErrMsg.textContent="*Type should not be empty."
    }
    else{
        typeErrMsg.textContent=""
    }
}
function sideFun(){
    if(side.value===""){
        sideErrMsg.textContent="*Side should not be empty."
    }
    else{
        sideErrMsg.textContent=""
    }
}
function productSubFun(){
    if(productSub.value===""){
        productSubErrMsg.textContent="*Product sub title should not be empty."
    }
    else{
        productSubErrMsg.textContent=""
    }
}
function yearFun(){
    if(year.value===""){
        yearErrMsg.textContent="*Year should not be empty."
    }
    else{
        yearErrMsg.textContent=""
    }
}

function stateFun(){
    if(state.value===""){
        stateErrMsg.textContent="*State should not be empty."
        console.log('from state')
    }
    else{
        stateErrMsg.textContent=""
    }
}




function submitFun(){
    productTitleFun();
    typeFun();
    sideFun();
    productSubFun();
    yearFun();
    stateFun();
 

}



let api = `https://api.unsplash.com/photos/random?query=hyderabad&client_id=0qPOwWhSfuLYLS-SAQKmD58YcbjKOJ3jeAkX3OkCiVo`

async function displayImg(){
    var url;
   await $.get(api,function(data,status){
        url =data.urls.raw;
        console.log(url)
    });
    let imageItem = `<img src=${url}>`;
    $('.image_section').html(imageItem);
}

displayImg();