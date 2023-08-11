let key = 'eda6b52da9d74345a0be166f302c29a7';

let randomValues = [];
while (randomValues.length < 3) {
  let randomVal = Math.floor(Math.random() * 100);
  if (!(randomVal in randomValues)) {
    randomValues.push(randomVal)
  }
}
console.log(randomValues);

let mostPopularAndTalkedRandomValues = [];
while (mostPopularAndTalkedRandomValues.length < 6) {
  let randomval = Math.floor(Math.random() * 100);
  if (!(randomval in mostPopularAndTalkedRandomValues)) {
    mostPopularAndTalkedRandomValues.push(randomval)
  }
}

console.log(mostPopularAndTalkedRandomValues);


$(document).ready( async function () {

  let topThreeProducts = [];
  console.log(topThreeProducts);

 await  $.get(`https://newsapi.org/v2/everything?q=technology&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=${key}`, function (data, status) {

    topThreeProducts.push(data.articles[1])
  });
  await $.get(`https://newsapi.org/v2/everything?q=environment&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=${key}`, function (data, status) {

    topThreeProducts.push(data.articles[2])
  });
  await $.get(`https://newsapi.org/v2/everything?q=food&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=${key}`, function (data, status) {

    topThreeProducts.push(data.articles[4])
  });

 await $.get(`https://newsapi.org/v2/everything?q=apple&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=${key}`, function (data, status) {

    let top3pro = "";
    let carouselImages = "";
    let j = 0;


    let featuredProducts = data.articles;
    let randomFeaturedProducts = []
    for (let i of randomValues) {
      let featureItem = featuredProducts[i];
      randomFeaturedProducts.push(featureItem);

    }

    let featuredProductsData = ""

    for (let i of randomFeaturedProducts) {
      let feItem = `<div class="row d-flex justify-content-between align-items-center col-12 h-25 mb-2 text-center">
      <img src=${i.urlToImage} class='col-6 m-auto' style="height:120px" alt='image'>
      <div class='col-6'>    
      <p class="subcard_name ">${i.source.name}</p>
      <h2 class="subcard_title">${i.title}</h2> 
      </div>
               
      </div>`
      featuredProductsData += feItem;
    }

    $('.featured_articles_section').html(featuredProductsData);

    let mostPopular = data.articles;
    let randomMostIndex = mostPopularAndTalkedRandomValues.splice(0, 3);
    let mpRandomProducts = [];

    for (let i of randomMostIndex) {
      let mostItem = mostPopular[i];
      mpRandomProducts.push(mostItem);
    }

    console.log(mpRandomProducts)

    let mostProductsData = "";
    for (let i of mpRandomProducts) {
      let mostPopularItem = `<div class="row d-flex justify-content-between align-items-center col-12 h-25 mb-2">
      <img src=${i.urlToImage} class='col-lg-6 col-8 m-auto' style="height:120px;" alt='image'>
      <div class='col-lg-6 col-12'>    
      <h2 class="footer_card_title text-white">${i.title}</h2> 
      </div>
               
      </div>`

      mostProductsData += mostPopularItem;
    }
    $('.most_popular_section').html(mostProductsData);


    let talkedData = data.articles;
    let talkedIndex = mostPopularAndTalkedRandomValues.splice(0, 6);
    console.log(`talkedIndex ${talkedIndex}`);
    let talkedProducts = [];

    for (let i of talkedIndex) {
      let talkedIndexItem = talkedData[i];
      talkedProducts.push(talkedIndexItem);
    }
    let talkedProductsData = "";
    for (let i of talkedProducts) {
      let talkedItem = `<div class="row d-flex justify-content-between align-items-center col-12 h-25 mb-2">
       <img src=${i.urlToImage} class='col-lg-6 col-8 m-auto' style="height:120px" alt='image'>
       <div class='col-lg-6 col-12'>    
       <h2 class="footer_card_title text-white">${i.title}</h2> 
       </div>
                
       </div>`
      talkedProductsData += talkedItem;
    }
    $('.talked_section').html(talkedProductsData);

    let topThreeBg = ['#607ec7', '#ca85ca', '#613436'];

    for (let i of topThreeProducts) {
      let item = `<div style="background-image: url(${i.urlToImage}); background-size:cover; background-repeat: none; height:35vh;" class="d-none d-lg-block col-lg-4 text-white text-center pt-lg-5">
                         <span class="p-2" style="background-color:${topThreeBg[j]}">${i.source.name}</span>
                         <p class="fs-4 fw-medium">${i.title}</p>
                         <p class="fw-medium">${i.publishedAt}</p>              
              </div>`;
      if (j == 0) {
        let carousel_items = `<div style="background-image: url(${i.urlToImage}); background-size:cover; background-repeat: none; height:42vh;" class="d-lg-none col-lg-4 text-white text-center pt-5 carousel-item active">
              <span class="p-2 mb-3" style="background-color:${topThreeBg[j]}">${i.source.name}</span>
              <p class="fs-4 fw-medium">${i.title}</p>
              <p class="fw-medium">${i.publishedAt}</p>              
             </div>`;
        carouselImages += carousel_items;
      }
      else {
        let carousel_items = `<div style="background-image: url(${i.urlToImage}); background-size:cover; background-repeat: none; height:42vh;" class="d-lg-none col-lg-4 text-white text-center pt-5 carousel-item">
        <span class="p-2 mb-3" style="background-color:${topThreeBg[j]}">${i.source.name}</span>
              <p class="fs-4 fw-medium">${i.title}</p>
              <p class="fw-medium">${i.publishedAt}</p>              
              </div>`;
        carouselImages += carousel_items;
      }

      j += 1;

      top3pro += item;
    }
    $('.top_images').html(top3pro);
    $('.carousel-inner').html(carouselImages);
    let latestProducts = data.articles.slice(0, 10);
    let latestItems = "";
    for (let i of latestProducts) {
      let latestItem = `<div class="row col-lg-12 h-25 mb-2">
        <img src=${i.urlToImage} class='col-lg-6 col-12' style="height:210px" alt='image'>
        <div class='col-lg-6 col-12'>    
        <p class="latest_name">${i.source.name}</p>
        <h2 class="latest_title">${i.title}</h2>
        <p class="latest_date">${i.publishedAt}</p>  
        </div>
                 
        </div>`;
      latestItems += latestItem
    }
    $('.latest_articles_section').html(latestItems);
    let categories = '';
    let catIndexs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let catColors = ['#ca85ca', '#e54e7e', '#61c436', '#f4b23f', '#ca85ca', '#e54e7e', '#61c436', '#f4b23f', '#46c49c', '#607ec7']
    let num = 0;
    for (let i of latestProducts) {
      let catItem = `<div class="row col-lg-12 h-25 mb-2">
        <div class='col-12 d-flex justify-content-between align-items-center' style="border-left: 3px solid ${catColors[num]}">    
        <p class="latest_name" style="font-size:18px;">${i.source.name}</p>
        <button class="btn text-white text-center" style="background-color: ${catColors[num]}; width: 35px;">${catIndexs[num]} </button>
        </div>
                 
        </div>`;
      categories += catItem;
      num += 1
    }
    $('.categories_section').html(categories);

  });






 await $.get(`https://newsapi.org/v2/everything?q=fashion&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=${key}`, function (data, status) {
    let fashionProducts = data.articles;
    let randomFashionProducts = []
    for (let i of randomValues) {
      let fashionItem = fashionProducts[i];
      randomFashionProducts.push(fashionItem);

    }
    let j = 0;
    let fashionProductItems = "";
    for (let i of randomFashionProducts) {
      if (j === 0) {
        let fashionItem = `<div class="row col-lg-12 h-50 mb-2">
              <img src=${i.urlToImage} class='col-12' style="height:200px">
              <div class='col-12 text-center'>    
              <p class="maincard_name">${i.source.name}</p>
              <h2 class="maincard_title">${i.title}</h2>
              <p class="maincard_date">${i.publishedAt}</p>
              <p class="subcard_title">${i.description}</p>  
              </div>
                       
              </div>`;
        fashionProductItems += fashionItem
      }

      else {
        let fashionItem = `<div class="row d-flex justify-content-center align-items-center col-lg-12 h-25 mb-2">
          <img src=${i.urlToImage} class='col-6' style="height:100px">
          <div class='col-6 text-center'>    
          <p class="subcard_name">${i.source.name}</p>
          <h2 class="subcard_title">${i.title}</h2> 
          </div>
                   
          </div>`;
        fashionProductItems += fashionItem
      }
      j += 1

    }

    $('.fashion_articles_section').html(fashionProductItems);


  });


 await  $.get(`https://newsapi.org/v2/everything?q=lifestyle&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=${key}`, function (data, status) {

    let lifestyleProducts = data.articles;
    let randomlifestyleProducts = []
    for (let i of randomValues) {
      let lifestyleItem = lifestyleProducts[i];
      randomlifestyleProducts.push(lifestyleItem);

    }
    let j = 0;
    let lifestyleProductItems = "";
    for (let i of randomlifestyleProducts) {
      if (j === 0) {
        let lifestyleItem = `<div class="row col-lg-12 h-50 mb-2">
            <img src=${i.urlToImage} class='col-12' style="height:200px">
            <div class='col-12 text-center'>    
            <p class="maincard_name">${i.source.name}</p>
            <h2 class="maincard_title">${i.title}</h2>
            <p class="maincard_date">${i.publishedAt}</p>
            <p class="subcard_title">${i.description}</p>  
            </div>
                     
            </div>`;
        lifestyleProductItems += lifestyleItem;
      }

      else {
        let lifestyleItem = `<div class="row col-lg-12 h-25 mb-2 d-flex justify-content-center align-items-center">
        <img src=${i.urlToImage} class='col-6' style="height:100px">
        <div class='col-6 text-center'>    
        <p class="subcard_name">${i.source.name}</p>
        <h2 class="subcard_title">${i.title}</h2> 
        </div>
                 
        </div>`;
        lifestyleProductItems += lifestyleItem;
      }
      j += 1

    }

    $('.lifeStyle_articles_section').html(lifestyleProductItems);

  });


 await $.get(`https://newsapi.org/v2/everything?q=food&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=${key}`, function (data, status) {


    let foodProducts = data.articles;
    let randomFoodProducts = []
    for (let i of randomValues) {
      let foodItem = foodProducts[i];
      randomFoodProducts.push(foodItem);

    }
    let j = 0;
    let foodProductItems = "";
    for (let i of randomFoodProducts) {
      if (j === 0) {
        let foodItem = `<div class="row col-lg-12 h-50 mb-2">
            <img src=${i.urlToImage} class='col-12' style="height:200px">
            <div class='col-12 text-center'>    
            <p class="maincard_name">${i.source.name}</p>
            <h2 class="maincard_title">${i.title}</h2>
            <p class="maincard_date">${i.publishedAt}</p>
            <p class="subcard_title">${i.description}</p>  
            </div>
                     
            </div>`;
        foodProductItems += foodItem
      }

      else {
        let foodItem = `<div class="row col-lg-12 h-25 mb-2 d-flex justify-content-center align-items-center">
        <img src=${i.urlToImage} class='col-6' style="height:100px">
        <div class='col-6 text-center'>    
        <p class="subcard_name">${i.source.name}</p>
        <h2 class="subcard_title">${i.title}</h2> 
        </div>
                 
        </div>`;
        foodProductItems += foodItem
      }
      j += 1

    }

    $('.food_articles_section').html(foodProductItems);




  });



 await $.get(`https://newsapi.org/v2/everything?q=environment&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=${key}`, function (data, status) {

    let enviProducts = data.articles;
    let randomEnviProducts = []
    for (let i of randomValues) {
      let enviItem = enviProducts[i];
      randomEnviProducts.push(enviItem);

    }
    let j = 0;
    let enviProductItems = "";
    for (let i of randomEnviProducts) {
      if (j === 0) {
        let enviItem = `<div class="row col-lg-12 h-50 mb-2">
            <img src=${i.urlToImage} class='col-12' style="height:200px">
            <div class='col-12 text-center'>    
            <p class="maincard_name">${i.source.name}</p>
            <h2 class="maincard_title">${i.title}</h2>
            <p class="maincard_date">${i.publishedAt}</p>
            <p class="subcard_title">${i.description}</p>  
            </div>
                     
            </div>`;
        enviProductItems += enviItem;
      }

      else {
        let enviItem = `<div class="row col-lg-12 h-25 mb-2 d-flex justify-content-center align-items-center">
        <img src=${i.urlToImage} class='col-6' style="height:100px">
        <div class='col-6 text-center'>    
        <p class="subcard_name">${i.source.name}</p>
        <h2 class="subcard_title">${i.title}</h2> 
        </div>
                 
        </div>`;
        enviProductItems += enviItem;
      }
      j += 1

    }

    $('.environment_articles_section').html(enviProductItems);

  });


});

// console.log('hello')

