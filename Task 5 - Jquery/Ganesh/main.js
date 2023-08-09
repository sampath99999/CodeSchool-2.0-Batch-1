// Function to call API and get JSON data.
function callAndGetJSON(articleTopic){
    let apiURL = "https://newsapi.org/v2/everything?q="+articleTopic+"&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=512083b305cb4d2aaa154f7c8f29a013";
    return new Promise((resolve, reject) => {
        $.getJSON(apiURL, function(data){
            var newsArticles = data.articles;
            resolve(newsArticles);
        });
    });
}

// Function to get a random index number
function getRandomIndex(){
    let index = Math.floor(Math.random()*100);
    return index;
}

// Function to get news highlights.
function getHighlights(){
    let highlightTopics = ["Technology", "Environment", "Food"];
    for(let topic in highlightTopics){
        callAndGetJSON(highlightTopics[topic].toLowerCase()).then(function(result) {
            let newsHighlight = result;
            let index = Math.floor(Math.random()*10);
            $(".highlights").append(`
            <div class="col px-0">
                <div class="text-center text-white object-fit-cover d-flex align-items-center justify-content-center" 
                    style="background-image: url(${newsHighlight[index].urlToImage}); 
                    background-size:cover; 
                    background-color: grey;  
                    background-blend-mode: multiply;
                    margin-right:1px;
                    height:280px;
                    object-fit:scale;">
                    <div>
                        <p class="d-inline p-1 px-2 rounded" style="background-color: #607ec7;">${highlightTopics[topic]}</p>
                        <h5 class="mt-2">${newsHighlight[index].title}</h5>
                        <p>2 days ago</p>
                    </div>   
                </div>
            </div> 
            `);
            let data  = `
            <div class="carousel-item active">
                <div class="text-center text-white object-fit-cover d-flex align-items-center justify-content-center" 
                    style="background-image: url(${newsHighlight[index].urlToImage}); 
                    background-size:cover; 
                    background-color: grey;  
                    background-blend-mode: multiply;
                    margin-right:1px;
                    height:280px;
                    object-fit:scale;">
                    <div>
                        <p class="d-inline p-1 px-2 rounded" style="background-color: #607ec7;">${highlightTopics[topic]}</p>
                        <h5 class="mt-2">${newsHighlight[index].title}</h5>
                        <p>2 days ago</p>
                    </div>   
                </div>
            </div>
            `;
            $(".carousel-inner").append(data);
        });
    }
}

// Load news categories feed
function getNewsCategoryFeed(){
    let feedCategory = ["Fashion", "Lifestyle", "Food", "Environment"];
    for(let topic in feedCategory){
        callAndGetJSON(feedCategory[topic].toLowerCase()).then(function(result) {
            let feedCategoryData = result;
            let index = getRandomIndex();
            let htmlMainTemplate = `
            <!-- Main Card -->
            <div class="card rounded-0 border-0 shadow-sm mb-3">
              <img
                src="${feedCategoryData[index].urlToImage}"
                class="card-img-top rounded-0" style="object-fit:cover;" alt="..." />
              <div class="card-body">
                <p class="card-text mb-0">${feedCategory[topic]}</p>
                <h6 class="card-title">
                    ${feedCategoryData[index].title}
                </h6>
                <p class="card-text">
                  <small class="text-body-secondary">2 days ago</small>
                </p>
                <p class="card-text mb-0">${feedCategoryData[index].description}</p>
              </div>
            </div>
            `;
            index = getRandomIndex();
            let htmlSubTemplate1 = `
            <!-- Sub Card 1 -->
            <div class="card text-start mb-3 rounded-0 border-0 shadow-sm">
              <div class="row">
                <div class="col-5 pe-0">
                  <img
                    src="${feedCategoryData[index].urlToImage}"
                    width="100%" height="100%" style="object-fit:cover;" alt="" />
                </div>
                <div class="card-body col-7 p-2">
                  <p class="card-text my-1">${feedCategory[topic]}</p>
                  <h6 class="card-title mb-1" style="font-size: 14px;">
                    ${feedCategoryData[index].title}
                  </h6>
                </div>
              </div>
            </div>
            `;
            index = getRandomIndex();
            let htmlSubTemplate2 = `
            <!-- Sub Card 2 -->
            <div class="card text-start mb-3 rounded-0 border-0 shadow-sm">
              <div class="row">
                <div class="col-5 pe-0">
                  <img
                    src="${feedCategoryData[index].urlToImage}"
                    width="100%" height="100%" style="object-fit:cover;" alt="" />
                </div>
                <div class="card-body col-7 p-2">
                  <p class="card-text my-1">${feedCategory[topic]}</p>
                  <h6 class="card-title mb-1" style="font-size: 14px;">
                    ${feedCategoryData[index].title}
                  </h6>
                </div>
              </div>
            </div>
            `;
            if(feedCategory[topic]=='Fashion'){
                $("#fashion-card-body").append(htmlMainTemplate);
                $("#fashion-card-body").append(htmlSubTemplate1);
                $("#fashion-card-body").append(htmlSubTemplate2);
            }
            else if(feedCategory[topic]=='Lifestyle'){
                $("#lifestyle-card-body").append(htmlMainTemplate);
                $("#lifestyle-card-body").append(htmlSubTemplate1);
                $("#lifestyle-card-body").append(htmlSubTemplate2);
            }
            else if(feedCategory[topic]=='Food'){
                $("#food-card-body").append(htmlMainTemplate);
                $("#food-card-body").append(htmlSubTemplate1);
                $("#food-card-body").append(htmlSubTemplate2);
            }
            else{
                $("#environment-card-body").append(htmlMainTemplate);
                $("#environment-card-body").append(htmlSubTemplate1);
                $("#environment-card-body").append(htmlSubTemplate2);
            }
           
        });
    }
}

// Load featured post feed
function getFeaturedPosts(){
    let featuredCategories = ["Fashion", "Lifestyle", "Food", "Environment", "Music", "Technology"];
    for(let topic in featuredCategories){
        callAndGetJSON(featuredCategories[topic].toLowerCase()).then(function(result) {
            let featuredCategoriesData = result;
            let index = getRandomIndex();
            let htmlTemplate = `
            <div class="card text-start mb-3 rounded-0 border-0 bg-body-tertiary">
                <div class="row">
                    <div class="col-5 p-0 ps-2">
                      <img
                        src="${featuredCategoriesData[index].urlToImage}"
                        width="100%" height="100%" style="object-fit:cover;" alt="" />
                    </div>
                    <div class="card-body col-7 p-0 px-3">
                      <p class="card-text mb-1">${featuredCategories[topic]}</p>
                      <h6 class="card-title mb-1" style="font-size: 14px;">
                        ${featuredCategoriesData[index].title}
                      </h6>
                    </div>
                </div>
            </div>
            `;
            $("#featured-card-body").append(htmlTemplate);
        });
    }
}

// Load Latest Articles Feed
function getLatestArticles(){
    // let articles = ["Fashion", "Lifestyle", "Food", "Environment", "Music", "Technology"];
    callAndGetJSON("apple").then(function(result) {
        let latestArticles = result;
        for (let i = 0; i < 10; i++) {
            let index = getRandomIndex();
            let  htmlTemplate = `
            <div class="card text-start mb-3 rounded-0 border-0 shadow-sm">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <img
                            src="${latestArticles[index].urlToImage}"
                            width="100%" height="100%" style="object-fit:cover;" alt="" />
                    </div>
                    <div class="card-body col-12 col-md-6 p-2 text-center text-md-start">
                        <p class="card-text my-1" >Apple</p>
                        <h5 class="card-title mb-1 px-4 p-md-0">
                            ${latestArticles[index].title}
                        </h5>
                        <p class="card-text"><small class="text-body-secondary">2 Days Ago . ${index} Comments</small></p>
                    </div>
                </div>
            </div> 
            `;
            $("#latest-article-card-body").append(htmlTemplate);
        } 
    });
}

// Load popular feed 
function getMostPopularFeed(){
    callAndGetJSON("popular").then(function(result) {
        let popularFeed = result;
        for (let i = 0; i < 4; i++) {
            let index = getRandomIndex();
            let htmlTemplate = `
            <div class="card text-start mb-3 rounded-0 border-0 foot-feed-body">
                <div class="row">
                  <div class="col-5 p-0 ps-2">
                    <img
                      src="${popularFeed[index].urlToImage}"
                      width="100%" height="100%" style="object-fit:cover;" alt="" />
                  </div>
                  <div class="card-body col-7 p-0 px-3">
                    <h6 class="card-title mb-1" style="font-size: 14px;">
                        ${popularFeed[index].title}
                    </h6>
                    <p class="card-text"><small class="text-secondary">${index} Views</small></p>
                  </div>
                </div>
            </div>
            `;
            $("#popular-feed-card-body").append(htmlTemplate);
        }
    });
}

// Load most talked feed
function mostTalked(){
    callAndGetJSON("talked").then(function(result) {
        let mostTalkedFeed = result;
        for (let i = 0; i < 4; i++) {
            let index = getRandomIndex();
            let htmlTemplate = `
            <div class="card text-start mb-3 rounded-0 border-0 foot-feed-body">
                <div class="row">
                  <div class="col-5 p-0 ps-2">
                    <img
                      src="${mostTalkedFeed[index].urlToImage}"
                      width="100%" height="100%" style="object-fit:cover;" alt="" />
                  </div>
                  <div class="card-body col-7 p-0 px-3">
                    <h6 class="card-title mb-1" style="font-size: 14px;">
                        ${mostTalkedFeed[index].title}
                    </h6>
                    <p class="card-text"><small class="text-secondary">${index} Comments</small></p>
                  </div>
                </div>
            </div>
            `;
            $("#most-talked-card-body").append(htmlTemplate);
        }
    });
}

// Function to load the posts on home page load.
function loadHomePage(){
    getHighlights();
    getNewsCategoryFeed();
    getFeaturedPosts();    
    getLatestArticles();
    getMostPopularFeed();
    mostTalked();
}

// Media query function
function screenMinimizer(x) {
    if (x.matches) { 
        // $("#main-body-sub-div").removeClass("px-0");
    } 
}
var x = window.matchMedia("(min-width: 700px)")
screenMinimizer(x);
x.addListener(screenMinimizer); 