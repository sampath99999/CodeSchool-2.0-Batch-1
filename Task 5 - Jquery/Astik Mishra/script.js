const api_key =  "a74e742f3cbe45f4991dc7c2caea6e6a";
function Technology(data){
    let {api} = data;
    let markup = "";
    let randomIndex = Math.floor(Math.random()*100);
    markup += `<div class="w-100 p-5 h-100" style="background-image: url('${api[randomIndex].urlToImage}');">
    <p class="p-2 m-auto bg-primary text-center text-white w-25">${api[randomIndex].source.name}</p>
    <h3 class="text-white m-auto text-center">${api[randomIndex].source.name}</h3>
    <p class="text-white text-center">1 week ago</p>
  </div>`;
  $("#technology").html(markup);
}

function Environment(data){
    let {api} = data;
    let markup = "";
    let randomIndex = Math.floor(Math.random()*100);
    markup += `<div class="w-100 p-5 h-100" style="background-image: url('${api[randomIndex].urlToImage}');">
    <p class="p-2 m-auto bg-primary text-center text-white w-25">${api[randomIndex].source.name}</p>
    <h3 class="text-white m-auto text-center">${api[randomIndex].source.name}</h3>
    <p class="text-white text-center">1 week ago</p>
  </div>`;
  $("#environment").html(markup);
};
function Food(data){
    let {api} = data;
    let markup = "";
    let randomIndex = Math.floor(Math.random()*100);
    markup += `<div class="w-100 p-5 h-100" style="background-image: url('${api[randomIndex].urlToImage}');">
    <p class="p-2 m-auto bg-primary text-center text-white w-25">${api[randomIndex].source.name}</p>
    <h3 class="text-white m-auto text-center">${api[randomIndex].title}</h3>
    <p class="text-white text-center">1 week ago</p>
  </div>`;
  $("#food").html(markup);
};
function Fashion(data){
    let {api} = data;
    let markup = "";
    let randomIndex = Math.floor(Math.random()*100);
    markup +=`<div id="card-heading" class="text-center">
    <div class="bg-white"><h2>Fashion</h2></div>
    <div id="card-discription" class="m-3 d-block text-center bg-white">
      <img src="${api[randomIndex].urlToImage}" width="100%" alt="">
      <div class="p-2">
        <p style="color:rgb(255, 0, 242) ;">${api[randomIndex].source.name}</p>
      <h4>${api[randomIndex].title}</h4>
      <p>1 Week ago</p>
      <p>${api[randomIndex].description}</p>
      </div>
    </div>
  </div>
  <div id="card1" class="m-3 p-0 d-flex bg-white">
    <div class="col-5">
      <img width="100%" src="${api[randomIndex - 1].urlToImage}" alt="">
    </div>
    <div class="col-7 p-1">
      <p style="color:rgb(255, 0, 242) ;">${api[randomIndex - 1].source.name}</p>
      <h6>${api[randomIndex - 1].title}</h6>
    </div>
  </div>
  <div id="card2" class="m-3 p-0 d-flex bg-white">
    <div class="col-5">
      <img width="100%" src="${api[randomIndex - 2].urlToImage}" alt="">
    </div>
    <div class="col-7 p-1">
      <p style="color:rgb(255, 0, 242) ;">${api[randomIndex - 1].source.name}</p>
      <h6>${api[randomIndex - 1].title}</h6>
    </div>
  </div>`;
  $("#fashion").html(markup);
}

function Lifestyle(data){
    let {api} = data;
    let markup = "";
    let randomIndex = Math.floor(Math.random()*100);
    markup +=` <div id="card-heading" class="text-center">
    <div class="bg-white"><h2>Lifestyle</h2></div>
    <div id="card-discription" class="m-3 d-block text-center bg-white">
      <img src="${api[randomIndex].urlToImage}" width="100%" alt="">
      <div class="p-2">
        <p style="color: rgb(255, 217, 0);">${api[randomIndex].source.name}</p>
      <h4>${api[randomIndex].title}</h4>
      <p>1 Week ago</p>
      <p>This video is a post format example. It supports all WordPress common embed  features for videos.</p>
      </div>
    </div>
  </div>
  <div id="card1" class="m-3 p-0 d-flex bg-white">
    <div class="col-5">
      <img width="100%" src="${api[randomIndex - 1].urlToImage}" alt="">
    </div>
    <div class="col-7 p-1">
      <p style="color: rgb(255, 217, 0);">${api[randomIndex - 1].source.name}</p>
      <h6>${api[randomIndex - 1].title}</h6>
    </div>
  </div>
  <div id="card2" class="m-3 p-0 d-flex bg-white">
    <div class="col-5">
      <img width="100%" src="${api[randomIndex - 2].urlToImage}" alt="">
    </div>
    <div class="col-7 p-1">
      <p style="color: rgb(255, 217, 0);">${api[randomIndex - 2].source.name}</p>
      <h6>${api[randomIndex - 2].title}</h6>
    </div>
  </div> `;
  $("#lifestyle").html(markup);
}

function Food(data){
    
    let {api} = data;
    let markup = "";
    let randomIndex = Math.floor(Math.random()*100);
    markup +=`<div id="card-heading" class="text-center">
    <div class="bg-white"><h2>Food</h2></div>
    <div id="card-discription" class="m-3 d-block text-center bg-white">
      <img src="${api[randomIndex].urlToImage}" width="100%" alt="">
      <div class="p-2">
        <p style="color: rgb(0, 255, 98);">${api[randomIndex].source.name}</p>
      <h4>Hipster Yoga at the End of the World</h4>
      <p>1 Week ago</p>
      <p>${api[randomIndex].title}</p>
      </div>
    </div>
  </div>
  <div id="card1" class="m-3 p-0 d-flex bg-white">
    <div class="col-5">
      <img width="100%" src="${api[randomIndex - 1].urlToImage}" alt="">
    </div>
    <div class="col-7 p-1">
      <p style="color: rgb(0, 255, 98);">${api[randomIndex - 1].source.name}</p>
      <h6>${api[randomIndex - 1].title}</h6>
    </div>
  </div>
  <div id="card2" class="m-3 p-0 d-flex bg-white">
    <div class="col-5">
      <img width="100%" src="${api[randomIndex - 2].urlToImage}" alt="">
    </div>
    <div class="col-7 p-1">
      <p style="color: rgb(0, 255, 98);">${api[randomIndex - 2].source.name}</p>
      <h6>${api[randomIndex - 2].title}</h6>
    </div>
  </div>`;
  $("#lifestyle").html(markup);
}


function Environment(data){
    
    let {api} = data;
    let markup = "";
    let randomIndex = Math.floor(Math.random()*100);
    markup +=`<div id="card-heading" class="text-center">
    <div class="bg-white"><h2>Environment</h2></div>
    <div id="card-discription" class="m-3 d-block text-center bg-white">
      <img src="${api[randomIndex].urlToImage}" width="100%" alt="">
      <div class="p-2">
        <p style="color: rgb(170, 0, 255);">${api[randomIndex].source.name}</p>
      <h4>${api[randomIndex].title}</h4>
      <p>1 Week ago</p>
      <p>${api[randomIndex].description}</p>
      </div>
    </div>
  </div>
  <div id="card1" class="m-3 p-0 d-flex bg-white">
    <div class="col-5">
      <img width="100%" src="${api[randomIndex - 1].urlToImage}" alt="">
    </div>
    <div class="col-7 p-1">
      <p style="color: rgb(170, 0, 255);">${api[randomIndex - 1].source.name}</p>
      <h6>${api[randomIndex - 1].title}</h6>
    </div>
  </div>
  <div id="card2" class="m-3 p-0 d-flex bg-white">
    <div class="col-5">
      <img width="100%" src="${api[randomIndex].urlToImage}" alt="">
    </div>
    <div class="col-7 p-1">
      <p style="color: rgb(170, 0, 255);">${api[randomIndex - 2].source.name}</p>
      <h6>${api[randomIndex - 2].title}</h6>
    </div>
  </div>`;

  $("#environment").html(markup);
}


$(document).ready(function() {
    $(document).get(`https://newsapi.org/v2/everything?q=technology&from=2023-08-10&to=2023-08-10&sortBy=popularity&apiKey=${api_key}`), function(data){
        Technology(data);
    };
    $(document).get(`https://newsapi.org/v2/everything?q=environment&from=2023-08-10&to=2023-08-10&sortBy=popularity&apiKey=${api_key}`), function(data){
        Environment(data);
    };
    $(document).get(`https://newsapi.org/v2/everything?q=food&from=2023-08-10&to=2023-08-10&sortBy=popularity&apiKey=${api_key}`), function(data){
        Food(data);
    };
    $(document).get(`https://newsapi.org/v2/everything?q=fashion&from=2023-08-10&to=2023-08-10&sortBy=popularity&apiKey=${api_key}`), function(data){
        Fashion(data);
    };
    $(document).get(`https://newsapi.org/v2/everything?q=lifestyle&from=2023-08-10&to=2023-08-10&sortBy=popularity&apiKey=${api_key}`), function(data){
        Lifestyle(data);
    };
    $(document).get(`https://newsapi.org/v2/everything?q=food&from=2023-08-10&to=2023-08-10&sortBy=popularity&apiKey=${api_key}`), function(data){
        Food(data);
    };
    $(document).get(`https://newsapi.org/v2/everything?q=environment&from=2023-08-10&to=2023-08-10&sortBy=popularity&apiKey=${api_key}`), function(data){
        Environment(data);
    };
    
})