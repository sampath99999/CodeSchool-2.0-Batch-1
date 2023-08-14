function articlesTechnology(data) {
    let { articles } = data;
    let product = "";
  
    let random = Math.floor(Math.random() * 95) + 5;
    product = `<div class="d-none d-md-flex col-md-12 m-auto bg-container d-flex flex-column" id="bgContainer" style="background-image: url('${articles[random].urlToImage}'); ">
                <div class="bg-text-container m-auto text-white d-flex flex-column justify-content-center align-items-center">
                  <p class="bg-btn fs-6 p-2">${articles[random].source.name}</p>
                  <h4 class="text-center">${articles[random].title}</h4>
                  <p class="fs-5">${articles[random].publishedAt}</p>
                </div>
    
              </div>`;
  
    $("#articleTechnology").html(product);
  }
  
  function articlesEnvironment(data) {
    let { articles } = data;
    let product = "";
    let random = Math.floor(Math.random() * 95) + 5;
    product += `<div class="d-none d-md-flex col-md-12 m-auto bg-container d-flex flex-column" id="bgContainer" style="background-image: url('${articles[random].urlToImage}'); ">
              <div class="bg-text-container m-auto text-white d-flex flex-column justify-content-center align-items-center">
                <p class="bg-btn1 fs-6 p-2">${articles[random].source.name}</p>
                <h4 class="text-center">${articles[random].title}</h4>
                <p class="fs-5">${articles[random].publishedAt}</p>
              </div>
    
          </div>`;
  
    $("#articleEnvironment").html(product);
  }
  function articlesFood(data) {
    let { articles } = data;
    let product = "";
    let random = Math.floor(Math.random() * 95) + 5;
  
    product += `<div class="d-none d-md-flex col-md-12 m-auto bg-container d-flex flex-column" id="bgContainer" style="background-image: url('${articles[random].urlToImage}'); ">
                  <div class="bg-text-container m-auto text-white d-flex flex-column justify-content-center align-items-center">
                    <p class="bg-btn2 fs-6 p-2">${articles[random].source.name}</p>
                    <h4 class="text-center">${articles[random].title}</h4>
                    <p class="fs-5">${articles[random].publishedAt}</p>
                  </div>
  
                </div>`;
    $("#articleFood").html(product);
  }
  
  //fashion
  
  function fashionArticles(fdata) {
    let { articles } = fdata;
    let fashionData = "";
    let random = Math.floor(Math.random() * 95) + 5;
  
    fashionData += `<div class="col-12"> 
                    <div class="header text-center shadow-lg">
                      <h4 class="p-2">FASHION</h4>
                    </div>
                    <div class="fashion-bottom-container p-3">
                     
                        <div class="card border-0 shadow-lg" style="max-width: 24rem; height:450px">
                          <div class="mx-auto">
                            <img style="height:150px; width:280px" src="${articles[random].urlToImage}" alt="Card image cap"/>
                          </div>
                          <div class="p-2 text-center">
                            <p class="para-fashion">${articles[random].source.name}</p>
                            <h6 class="">${articles[random].title}</h6>
                            <p class=" fs-6">${articles[random].publishedAt}</p>
                            <p class="desc">${articles[random].description}</p>
                          </div>
                      
                      </div>
  
                      <div class="d-flex flex-row mt-2 shadow-lg style="height:125px">
                        <img class="img-left" src="${articles[random - 1].urlToImage}" alt="Card image cap"/>
                        <div class="text-content d-flex flex-column justify-content-start align-items-start p-2">
                          <p class="para-fashion small-para">${articles[random - 1].source.name}</p>
                          <h6 class="small-heading">${articles[random - 1].title}</h6>
                        </div>
                      </div>
                      <div class="d-flex flex-row mt-2 shadow-lg style="height:125px">
                        <img class="img-left" src="${articles[random - 2].urlToImage}" alt="Card image cap"/>
                        <div class="text-content d-flex flex-column justify-content-start align-items-start p-2">
                          <p class="para-fashion small-para">${articles[random - 2].source.name}</p>
                          <h6 class="small-heading">${articles[random - 2].title}</h6>
                        </div>
                      </div>
                      
  
                    </div>
                
                </div>`;
  
    $("#fashionContainer").html(fashionData);
  }
  
  //lifestyle
  function lifestyleArticles(ldata) {
    let { articles } = ldata;
    let lifestyleData = "";
    let random = Math.floor(Math.random() * 95) + 5;
  
    lifestyleData += `<div class="col-12"> 
                    <div class="header1 text-center shadow-lg">
                      <h4 class="p-2">LIFESTYLE</h4>
                    </div>
                    <div class="fashion-bottom-container p-3">
                     
                        <div class="card border-0 shadow-lg" style="max-width: 24rem; height:450px">
                          <div class="mx-auto">
                            <img style="height:150px; width:280px" src="${articles[random].urlToImage}" alt="Card image cap"/>
                          </div>
                          <div class="p-2 text-center">
                            <p class="para-fashion1">${articles[random].source.name}</p>
                            <h6 class="">${articles[random].title}</h6>
                            <p class=" fs-6">${articles[random].publishedAt}</p>
                            <p class="desc">${articles[random].description}</p>
                          </div>
                      
                      </div>
  
                      <div class="d-flex flex-row mt-2 shadow-lg style="height:125px">
                       
                        <img class="img-left" src="${articles[random - 1].urlToImage}" alt="Card image cap"/>
                      
                        <div class="text-content d-flex flex-column justify-content-start align-items-start p-2">
                          <p class="para-fashion1 small-para">${articles[random - 1].source.name}</p>
                          <h6 class="small-heading">${articles[random - 1].title}</h6>
                        </div>
                      </div>
                      <div class="d-flex flex-row mt-3 shadow-lg" style="height:125px">
                        <img class="img-left" src="${articles[random - 2].urlToImage}" alt="Card image cap"/>
                        <div class="text-content d-flex flex-column justify-content-start align-items-start p-2">
                          <p class="para-fashion1 small-para">${articles[random - 2].source.name}</p>
                          <h6 class="small-heading">${articles[random - 2].title}</h6>
                        </div>
                      </div>
                      
  
                    </div>
                
                </div>`;
  
    $("#lifestleContainer").html(lifestyleData);
  }
  
  function categoryArticles(cdata) {
    let { articles } = cdata;
    let prod = "";
    prod += `<div>
            <div class="text-center shadow-lg">
              <h4 class="p-2">CATEGORIES</h4>
            </div>
            <div class="fashion-bottom-container">
              <div class="first d-flex flex-row justify-content-between align-items-center my-auto">
                <p class="pl-2 m-3">${articles[0].source.name}</p>
                <a class="number p-3">9</a>
               
              </div>
            </div>
            <div class="fashion-bottom-container">
              <div class="second d-flex flex-row justify-content-between align-items-center">
                <p class="pl-2 m-3">${articles[1].source.name}</p>
                <a class="number1 p-3">7</a>
              </div>
            </div>
            <div class="fashion-bottom-container">
              <div class="three d-flex flex-row justify-content-between align-items-center">
                <p class="pl-2 m-3">${articles[2].source.name}</p>
                <a class="number2 p-3">8</a>
              </div>
            </div>
            <div class="fashion-bottom-container">
              <div class="four d-flex flex-row justify-content-between align-items-center">
                <p class="pl-2 m-3">${articles[3].source.name}</p>
                <a class="number3 p-3">9</a>
              </div>
            </div>
            <div class="fashion-bottom-container">
              <div class="five d-flex flex-row justify-content-between align-items-center">
                <p class="pl-2 m-3">${articles[4].source.name}</p>
                <a class="number4 p-3">7</a>
              </div>
            </div>
            <div class="fashion-bottom-container">
              <div class="six d-flex flex-row justify-content-between align-items-center">
                <p class="pl-2 m-3">${articles[5].source.name}</p>
                <a class="number5 p-3">6</a>
              </div>
            </div>
          </div>`;
  
    $("#categoryContainer").html(prod);
  }
  
  function featuredArticles(fdata) {
    let { articles } = fdata;
    let featuredData = "";
    let random = Math.floor(Math.random() * 95) + 5;
    featuredData += `<div class="col-12"> 
            <div class="header1 text-center shadow-lg">
              <h4 class="p-2">FEATURED POSTS</h4>
            </div>
            <div class="fashion-bottom-container shadow-lg p-2">
              <div class="d-flex flex-row mt-2 shadow-lg style="height:80px">
                <div class="my-auto">
                  <img class="img-left1" src="${articles[random].urlToImage}" alt="Card image cap"/>
                </div>
                <div class="text-content d-flex flex-column justify-content-start align-items-start p-2">
                  <p class="para-fashion small-para">${articles[random].source.name}</p>
                  <h6 class="small-heading">${articles[random].title}</h6>
                </div>
              </div>
              <div class="d-flex flex-row mt-2 shadow-lg style="height:80px">
                <div class="my-auto">
                  <img class="img-left1" src="${articles[random - 1].urlToImage}" alt="Card image cap"/>
                </div>
                <div class="text-content d-flex flex-column justify-content-start align-items-start p-2">
                  <p class="para-fashion small-para">${articles[random - 1].source.name}</p>
                  <h6 class="small-heading">${articles[random - 1].title}</h6>
                </div>
              </div>
              <div class="d-flex flex-row mt-2 shadow-lg style="height:80px">
                <div class="my-auto">
                  <img class="img-left1" src="${articles[random - 2].urlToImage}" alt="Card image cap"/>
                </div>
                <div class="text-content d-flex flex-column justify-content-start align-items-start p-2">
                  <p class="para-fashion small-para">${articles[random - 2].source.name}</p>
                  <h6 class="small-heading">${articles[random - 3].title}</h6>
                </div>
              </div>
            </div>
          </div>`;
    $("#featuredContainer").html(featuredData);
  }
  
  function foodArticles(fdData) {
    let { articles } = fdData;
    let foodData = "";
    let random = Math.floor(Math.random() * 95) + 5;
  
    foodData += `<div class="col-12"> 
                    <div class="header2 text-center shadow-lg">
                      <h4 class="p-2">FOOD</h4>
                    </div>
                    <div class="fashion-bottom-container p-3">
                     
                        <div class="card border-0 shadow-lg" style="max-width: 24rem; height:450px">
                          <div class="mx-auto">
                            <img style="height:150px; width:280px" src="${articles[random].urlToImage}" alt="Card image cap"/>
                          </div>
                            <div class="p-2 text-center">
                            <p class="para-fashion2">${articles[random].source.name}</p>
                            <h6 class="">${articles[random].title}</h6>
                            <p class=" fs-6">${articles[random].publishedAt}</p>
                            <p class="desc">${articles[random].description}</p>
                          </div>
                      
                      </div>
  
                      <div class="d-flex flex-row mt-2 shadow-lg style="height:125px">
                       
                        <img class="img-left" src="${articles[random - 1].urlToImage}" alt="Card image cap"/>
                      
                        <div class="text-content d-flex flex-column justify-content-start align-items-start p-2">
                          <p class="para-fashion2 small-para">${articles[random - 1].source.name}</p>
                          <h6 class="small-heading">${articles[random - 1].title}</h6>
                        </div>
                      </div>
                      <div class="d-flex flex-row mt-3 shadow-lg" style="height:125px">
                        <img class="img-left" src="${articles[random - 2].urlToImage}" alt="Card image cap"/>
                        <div class="text-content d-flex flex-column justify-content-start align-items-start p-2">
                          <p class="para-fashion2 small-para">${articles[random - 2].source.name}</p>
                          <h6 class="small-heading">${articles[random - 2].title}</h6>
                        </div>
                      </div>
                      
  
                    </div>
                
                </div>`;
  
    $("#foodContainer").html(foodData);
  }
  
  function environmentArticles(edata) {
    let { articles } = edata;
    let environmentData = "";
    let random = Math.floor(Math.random() * 95) + 5;
  
    environmentData += `<div class="col-12"> 
                    <div class="header3 text-center shadow-lg">
                      <h4 class="p-2">ENVIRONMENT</h4>
                    </div>
                    <div class="fashion-bottom-container p-3">
                     
                        <div class="card border-0 shadow-lg" style="max-width: 24rem; height:450px">
                          <div class="mx-auto">
                            <img style="height:150px; width:280px" src="${articles[random].urlToImage}" alt="Card image cap"/>
                          </div>
                            <div class="p-2 text-center">
                            <p class="para-fashion3">${articles[random].source.name}</p>
                            <h6 class="">${articles[random].title}</h6>
                            <p class=" fs-6">${articles[random].publishedAt}</p>
                            <p class="desc">${articles[random].description}</p>
                          </div>
                      
                      </div>
  
                      <div class="d-flex flex-row mt-2 shadow-lg style="height:125px">
                       
                        <img class="img-left" src="${articles[random - 1].urlToImage}" alt="Card image cap"/>
                      
                        <div class="text-content d-flex flex-column justify-content-start align-items-start p-2">
                          <p class="para-fashion3 small-para">${articles[random - 1].source.name}</p>
                          <h6 class="small-heading">${articles[random - 1].title}</h6>
                        </div>
                      </div>
                      <div class="d-flex flex-row mt-3 shadow-lg" style="height:125px">
                        <img class="img-left" src="${articles[random - 2].urlToImage}" alt="Card image cap"/>
                        <div class="text-content d-flex flex-column justify-content-start align-items-start p-2">
                          <p class="para-fashion3 small-para">${articles[random - 2].source.name}</p>
                          <h6 class="small-heading">${articles[random - 2].title}</h6>
                        </div>
                      </div>
                      
  
                    </div>
                
                </div>`;
  
    $("#environmentContainer").html(environmentData);
  }
  
  function latestArticles(ldata) {
    let { articles } = ldata;
    let latestData = "";
    for (let i = 10; i <= 19; i++) {
      latestData += `<div class="fashion-bottom-container p-2">
                    <div class="d-flex flex-column flex-md-row shadow-lg mx-auto style="height:150px">
                        <div class="mx-auto col-12 col-md-3">
                          <img class="img-left2" src="${articles[i].urlToImage}" alt="Card image cap"/>
                        </div>
                        <div class="text-content col-12 col-md-9 d-flex flex-column justify-content-start align-items-start p-2">
                          <p class="para-fashion4 fs-6" id="color${i}">${articles[i].source.name}</p>
                          <h6 class="fs-6">${articles[i].title}</h6>
                          <p class="text-muted fs-6">${articles[i].publishedAt}</p>
                        </div>
                    
                    </div>
                  </div> `;
    }
  
    $("#latestContainer").html(latestData);
  }
  
  function mostPopularContainer(mostData) {
    let { articles } = mostData;
    let mostPopData = "";
    let random = Math.floor(Math.random() * 95) + 5;
    mostPopData += `<div class="col-12"> 
            <div class="text-center shadow-lg">
              <h5 class="p-2 text-white bg-dark">MOST POPUPAR</h5>
            </div>
            
            <div class="fashion-bottom-container shadow-lg p-2">
              <div class="d-flex flex-row mt-2 shadow-lg style="height:120px">
                <div class="my-auto">
                  <img class="img-left" src="${articles[random].urlToImage}" alt="Card image cap"/>
                </div>
                <div class="text-content d-flex flex-column justify-content-start align-items-start p-2">
                  <h6 class="small-heading text-white">${articles[random].title}</h6>
                  <p class="para-fashion small-para text-muted">8,656 Views</p>
                </div>
              </div>
              <div class="d-flex flex-row mt-2 shadow-lg style="height:120px">
                <div class="my-auto">
                  <img class="img-left" src="${articles[random - 1].urlToImage}" alt="Card image cap"/>
                </div>
                <div class="text-content d-flex flex-column justify-content-start align-items-start p-2">
                <h6 class="small-heading text-white">${articles[random - 1].title}</h6>
                <p class="para-fashion small-para text-muted">7,212 Views Views</p>
              </div>
              </div>
              <div class="d-flex flex-row mt-2 shadow-lg style="height:120px">
                <div class="my-auto">
                  <img class="img-left" src="${articles[random - 2].urlToImage}" alt="Card image cap"/>
                </div>
                <div class="text-content d-flex flex-column justify-content-start align-items-start p-2">
                  <h6 class="small-heading text-white">${articles[random - 2].title}</h6>
                  <p class="para-fashion small-para text-muted">5,315 Views</p>
                </div>
              </div>
            </div>
          </div>`;
    $("#mostPopularContainer").html(mostPopData);
  }
  
  function talkedAboutContainer(talkData) {
    let { articles } = talkData;
    let talkedData = "";
    let random = Math.floor(Math.random() * 95) + 5;
    talkedData += `<div class="col-12"> 
            <div class="text-center shadow-lg">
              <h5 class="p-2 text-white bg-dark">TALKED ABOUT</h5>
            </div>
            
            <div class="fashion-bottom-container shadow-lg p-2">
              <div class="d-flex flex-row mt-2 shadow-lg style="height:120px">
                <div class="my-auto">
                  <img class="img-left" src="${articles[random].urlToImage}" alt="Card image cap"/>
                </div>
                <div class="text-content d-flex flex-column justify-content-start align-items-start p-2">
                  <h6 class="small-heading text-white">${articles[random].title}</h6>
                  <p class="para-fashion small-para text-muted">8,656 Views</p>
                </div>
              </div>
              <div class="d-flex flex-row mt-2 shadow-lg style="height:120px">
                <div class="my-auto">
                  <img class="img-left" src="${articles[random - 1].urlToImage}" alt="Card image cap"/>
                </div>
                <div class="text-content d-flex flex-column justify-content-start align-items-start p-2">
                <h6 class="small-heading text-white">${articles[random - 1].title}</h6>
                <p class="para-fashion small-para text-muted">7,212 Views Views</p>
              </div>
              </div>
              <div class="d-flex flex-row mt-2 shadow-lg style="height:120px">
                <div class="my-auto">
                  <img class="img-left" src="${articles[random - 2].urlToImage}" alt="Card image cap"/>
                </div>
                <div class="text-content d-flex flex-column justify-content-start align-items-start p-2">
                  <h6 class="small-heading text-white">${articles[random - 2].title}</h6>
                  <p class="para-fashion small-para text-muted">5,315 Views</p>
                </div>
              </div>
            </div>
          </div>`;
    $("#talkedAboutContainer").html(talkedData);
  }
  
  $(document).ready(function () {
    $.get(
      "https://newsapi.org/v2/everything?q=technology&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=656b5de797f84c2c80a197071ea2d884",
      function (data, status) {
        // console.log(data);
        articlesTechnology(data);
      }
    );
    $.get(
      "https://newsapi.org/v2/everything?q=environment&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=656b5de797f84c2c80a197071ea2d884",
      function (data, status) {
        articlesEnvironment(data);
      }
    );
    $.get(
      "https://newsapi.org/v2/everything?q=food&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=656b5de797f84c2c80a197071ea2d884",
      function (data, status) {
        articlesFood(data);
      }
    );
  
    $.get(
      "https://newsapi.org/v2/everything?q=fashion&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=656b5de797f84c2c80a197071ea2d884",
      function (fdata, status) {
        fashionArticles(fdata);
      }
    );
  
    $.get(
      "https://newsapi.org/v2/everything?q=lifestyle&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=656b5de797f84c2c80a197071ea2d884",
      function (ldata, status) {
        lifestyleArticles(ldata);
      }
    );
  
    $.get(
      "https://newsapi.org/v2/everything?q=apple&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=656b5de797f84c2c80a197071ea2d884",
      function (cdata, status) {
        categoryArticles(cdata);
      }
    );
    $.get(
      "https://newsapi.org/v2/everything?q=apple&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=656b5de797f84c2c80a197071ea2d884",
      function (fdata, status) {
        featuredArticles(fdata);
      }
    );
    $.get(
      "https://newsapi.org/v2/everything?q=food&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=656b5de797f84c2c80a197071ea2d884",
      function (foodData, status) {
        foodArticles(foodData);
      }
    );
    $.get(
      "https://newsapi.org/v2/everything?q=environment&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=656b5de797f84c2c80a197071ea2d884",
      function (edata, status) {
        environmentArticles(edata);
      }
    );
  
    $.get(
      "https://newsapi.org/v2/everything?q=apple&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=656b5de797f84c2c80a197071ea2d884",
      function (ldata, status) {
        latestArticles(ldata);
      }
    );
    //footer
  
    $.get(
      "https://newsapi.org/v2/everything?q=random&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=656b5de797f84c2c80a197071ea2d884",
      function (mostData, status) {
        mostPopularContainer(mostData);
      }
    );
    $.get(
      "https://newsapi.org/v2/everything?q=random&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=656b5de797f84c2c80a197071ea2d884",
      function (talkedData, status) {
        talkedAboutContainer(talkedData);
      }
    );
  });
  