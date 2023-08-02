let mainbodyele=document.getElementById("mainbodyitem");

function createproduct(a){
  let product=document.createElement("div");
  product.classList.add("product-image","col-lg-3","col-6","col-lg-3","pe-sm-5","h-auto" );
  let imagediv=document.createElement("div");
  imagediv.classList.add("product");



  let productimage=document.createElement("img");
  productimage.src=a.image;
  productimage.setAttribute("height","190px")
  productimage.setAttribute("width","170px")
  productimage.classList.add("imageclass");

  
  let productname=document.createElement("div");
  productname.textContent=a.title;
  let productprice=document.createElement("div")
  productname.classList.add("nameele");
  productprice.classList.add("priceele");

  let favouraite=document.createElement("div");
  favouraite.classList.add("bi","bi-heart","ms-5","hearticon");
  let plusicon=document.createElement("div");
  plusicon.classList.add("bi","bi-plus","plusicon","plusboder","d-md-none")


  productprice.textContent="$"+a.price;

  imagediv.appendChild(productimage);
  product.appendChild(favouraite);
  product.appendChild(imagediv);
  product.appendChild(plusicon);
  
  
  product.appendChild(productname);
  product.appendChild(productprice);
  mainbodyele.appendChild(product);
  }



function fetchProducts() {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var products = JSON.parse(this.responseText);
      console.log(products)
      for(a of products){
        createproduct(a);

      }
   
    }
  };

  xmlhttp.open('GET', 'https://fakestoreapi.com/products/', true);
  xmlhttp.send();

}
fetchProducts();



