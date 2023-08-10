
function childElements(post,category,color){
   const postElement = $("<div>", { class: "col-lg-4 col-12 d-flex flex-column gh justify-content-center align-items-center"} );
   const postCategory= $("<h1 class=\"category\"></h1>").css('background-color',color);
   const postTitle= $("<p class=\"title\"></p>");
   const postDate= $("<p class=\"publishedDate\"></p>");
   postCategory.text(category)
   postTitle.text(post.title)
   postDate.text(post.publishedAt);
   postTitle.addClass("headerTitle")
   postElement.append(postCategory,postTitle,postDate);
   postElement.addClass("headerPosts");
   postElement.css("background-image",`url(${post.urlToImage})`);
   return postElement
}

//header posts



async function  getFirstPost(){
    await $.get('https://newsapi.org/v2/everything?q="technology"&apiKey=d5fa9f6dc219402aa493f167bc113f21',getHeaderFirstPost);
    function getHeaderFirstPost(data,status){
        const posts=data.articles.slice(0,1);
        const randomFirstPost=posts[Math.floor(Math.random()*posts.length)];
        const childContainer=childElements(randomFirstPost,"Technology","#607ec7");
        let carouselContainer=childContainer.clone();
        $('#first-image').append(carouselContainer);
        $('#header-posts').append(childContainer);   
       
    }
}

getFirstPost()



async function getSecondPost(){
    await $.get('https://newsapi.org/v2/everything?q="environment"&apiKey=d5fa9f6dc219402aa493f167bc113f21',getHeaderSecondPost);

    function getHeaderSecondPost(data,status){
        const posts=data.articles.slice(0,1);
        const randomFirstPost=posts[Math.floor(Math.random()*posts.length)];
        const childContainer=childElements(randomFirstPost,"Environment","#CD92D9");
        let carouselContainer=childContainer.clone();
        $('#second-image').append(carouselContainer);
        $('#header-posts').append(childContainer);
       
    }
}

getSecondPost()

async function getThirdPost(){
    await $.get('https://newsapi.org/v2/everything?q="food"&apiKey=d5fa9f6dc219402aa493f167bc113f21',getHeaderThirdPost);

    function getHeaderThirdPost(data,status){
        const posts=data.articles.slice(0,1);
        const randomFirstPost=posts[Math.floor(Math.random()*posts.length)];
        const childContainer=childElements(randomFirstPost,"Food","#61C436");
        let carouselContainer=childContainer.clone();
        $('#third-image').append(carouselContainer);
        $('#header-posts').append(childContainer);
        
    }
}

getThirdPost();










// Fashion jquery call

function getFashionData(article,categorySection,fontColor){
    const imageContainer = $('<div class="image-container col-5 "></div>');
    const image = $('<img class="w-100 h-100" />').attr('src',article.urlToImage);
    imageContainer.append(image);
    const textContainer = $('<div class="text-container col-7"></div>').css('padding', '10px 7px');
    const category = $('<h6 style="font-size: 12px;"></h6>').css('color',fontColor);
    category.text(categorySection)
    const title = $(`<h5 style="font-size:10px" class="fw-bold"></h5`);
    title.text(article.title)
    textContainer.append(category, title);
    const flexContainer = $('<div class="d-flex col-12 ms-2 me-2"></div>').css('width', '18rem');
    flexContainer.append(imageContainer, textContainer);

    return flexContainer;

}
  
 async function getFashion(){
    const fashion=[];
    await $.get('https://newsapi.org/v2/everything?q="fashion"&from=2023-08-06&to=2023-08-06&sortBy=popularity&language=en&page=2&apiKey=d5fa9f6dc219402aa493f167bc113f21',getFashionDetails);
    function getFashionDetails(data){
        const {articles}=data;
        for (let each=0;each<3;each++){
            const randomFashion=articles[Math.floor(Math.random()*articles.length)]; 
            fashion.push(randomFashion)
        }

        for(let item=0;item<fashion.length;item++){
            if(item==0){
                const firstArticle=fashion[item]
                $('#fashion-image').attr("src",firstArticle.urlToImage);
                $('#fashion-title').text(firstArticle.title);
                $('#published-para').text(firstArticle.publishedAt);
                $('#fashion-description').text(firstArticle.description);
            }
            else{
                const flexItemContainer=getFashionData(fashion[item],"Fashion","#e54e7e");
                $('#fashion-container').append(flexItemContainer);
            }
        }

    }
}
   

 getFashion();

 

//Lifestyle jquery call


  
 async function getLifeStyle(){
    const lifestyle=[];
    await $.get('https://newsapi.org/v2/everything?q="lifestyle"&from=2023-08-06&to=2023-08-06&sortBy=popularity&language=en&page=2&apiKey=d5fa9f6dc219402aa493f167bc113f21',getLifeStyleDetails);
    function getLifeStyleDetails(data){
        const {articles}=data;
        for (let each=0;each<3;each++){
            const randomLifestyle=articles[Math.floor(Math.random()*articles.length)]; 
            lifestyle.push(randomLifestyle)
        }

        for(let item=0;item<lifestyle.length;item++){
            if(item==0){
                const firstArticle=lifestyle[item];
                $('#lifestyle-image').attr("src",firstArticle.urlToImage);
                $('#lifestyle-second-container div h5').text(firstArticle.title);
                $('#lifestyle-para').text(firstArticle.publishedAt);
                $('#lifestyle-description').text(firstArticle.description);
            }
            else{
                const flexItemContainer=getFashionData(lifestyle[item],"Life Style","#F4B23F");
                $('#lifestyle-container').append(flexItemContainer);
            }
        }

    }
}
   

 getLifeStyle();

 //categories

 colors=["#CA85CA","#E54E7E","#61C436","#F4B23F","#46C49C","#607EC7"]

function getCategoryData(article,color,number){

    const categoryNameContainer = $('<div class="d-flex justify-content-between"></div>').css('border-left', `2px solid ${color}`);
    const sourceName = $('<h5 class="pt-2 ps-2"></h5>').css('font-size', '13px').text(article.source.name);
    const sourceNumber = $('<span class="p-1"></span>').css({
        'background-color': color,
        'font-size': '13px',
        'color': 'white',
        'width':'28px',
        'text-align':'center'
    });
    sourceNumber.text(number)

    categoryNameContainer.append(sourceName, sourceNumber);

    return categoryNameContainer;

}
  
 async function getCategories(){
    const categoryArray=[];
    await $.get('https://newsapi.org/v2/everything?q="news"&from=2023-08-06&to=2023-08-06&sortBy=popularity&language=en&page=2&apiKey=d5fa9f6dc219402aa493f167bc113f21',getCategoryDetails);
    function getCategoryDetails(data){
        const {articles}=data;
        for (let each=0;each<6;each++){
            const randomFashion=articles[Math.floor(Math.random()*articles.length)]; 
            categoryArray.push(randomFashion)
        }

        for(let item=0;item<categoryArray.length;item++){
            const flexItemContainer=getCategoryData(categoryArray[item],colors[item],(item+1)*2);
            $('#category-container').append(flexItemContainer);
        }

    }
}
   

 getCategories();
 
//Featured

function getFeaturedData(article){
    const imageContainer = $('<div class="image-container col-5"></div>');
    const image = $('<img class="w-100 h-100" />').attr('src',article.urlToImage);
    
    imageContainer.append(image);
    const textContainer = $('<div class="text-container col-7"></div>').css('padding', '10px 7px');
    const sourceName = $('<h6 style="font-size: 12px; color:#f3bfbf;"></h6>');
    sourceName.text(article.source.name)
    const title = $(`<h5 style="font-size:10px" class="fw-bold"></h5`);
    title.text(article.title)
    textContainer.append(sourceName, title);
    const flexContainer = $('<div class="d-flex col-12"></div>').css('height','85px')
    flexContainer.append(imageContainer, textContainer);

    return flexContainer;

}

async function getFeaturedPosts(){
    const featuredArray=[];
    await $.get('https://newsapi.org/v2/everything?q="featured"&from=2023-08-06&to=2023-08-06&sortBy=popularity&language=en&page=2&apiKey=d5fa9f6dc219402aa493f167bc113f21',getFeaturedDetails);
    function getFeaturedDetails(data){
        const {articles}=data;
        for (let each=0;each<3;each++){
            const randomFeaturePost=articles[Math.floor(Math.random()*articles.length)]; 
            featuredArray.push(randomFeaturePost)
        }

        for(let item=0;item<featuredArray.length;item++){
            const flexItemContainer=getFeaturedData(featuredArray[item]);
            $('#featured-container').append(flexItemContainer);
        }

    }
}


getFeaturedPosts()



//Food jquery call

async function getFoodPosts(){
    const foodPostArray=[];
    await $.get('https://newsapi.org/v2/everything?q="Food"&from=2023-08-06&to=2023-08-06&sortBy=relevancy&language=en&page=2&apiKey=d5fa9f6dc219402aa493f167bc113f21',getFoodDetails);
    function getFoodDetails(data){
        const {articles}=data;
        for (let each=0;each<3;each++){
            const randomFoodPost=articles[Math.floor(Math.random()*articles.length)]; 
            foodPostArray.push(randomFoodPost)
        }

        for(let item=0;item<foodPostArray.length;item++){
            if(item==0){
                const firstArticle=foodPostArray[item]
                $('#foodPost-image').attr("src",firstArticle.urlToImage);
                $('#foodPost-second-container div h5').text(firstArticle.title);
                $('#foodPost-para').text(firstArticle.publishedAt);
                $('#foodPost-description').text(firstArticle.description);
            }
            else{
                const flexItemContainer=getFashionData(foodPostArray[item],"Food","#61C436");
                $('#foodPost-container').append(flexItemContainer);
            }
        }

    }
}
   

 getFoodPosts();

 //Environment jquery call

 async function getEnvironmentPosts(){
    const environmentPostArray=[];
    await $.get('https://newsapi.org/v2/everything?q="climate"&sortBy=popularity&language=en&page=2&apiKey=d5fa9f6dc219402aa493f167bc113f21',getEnvironmentDetails);
    function getEnvironmentDetails(data){
        const {articles}=data;
        for (let each=0;each<3;each++){
            const randomEnvironmentPost=articles[Math.floor(Math.random()*articles.length)]; 
            environmentPostArray.push(randomEnvironmentPost)
        }

        for(let item=0;item<environmentPostArray.length;item++){
            if(item==0){
                const firstArticle=environmentPostArray[item]
                $('#environmentPost-image').attr("src",firstArticle.urlToImage);
                $('#environmentPost-second-container div h5').text(firstArticle.title);
                $('#environmentPost-para').text(firstArticle.publishedAt);
                $('#environmentPost-description').text(firstArticle.description);
            }
            else{
                const flexItemContainer=getFashionData(environmentPostArray[item],"Environment","#CA85CA");
                $('#environmentPost-container').append(flexItemContainer);
            }
        }

    }
}
   

 getEnvironmentPosts();


//top headlines jquery call

//latest articles
function getLatestData(article){
    const imageContainer = $('<div class="image-container col-lg-4 col-12"></div>');
    const image = $('<img class="w-100 h-100" />').attr('src',article.urlToImage);
    imageContainer.append(image);
    const textContainer = $('<div class="text-container col-lg-8 text-center text-lg-start col-12 ps-2"></div>').css('margin','auto');
    const sourceName = $('<h6 style="font-size: 12px; color:#f3bfbf;"></h6>');
    sourceName.text(article.source.name)
    const title = $(`<h5 style="font-size:15px" class="fw-bold"></h5>`);
    title.text(article.title)
    const latestArtictlePublishedDate = $(`<h6 style="font-size:13px" class="fw-bold"></h6`);
    latestArtictlePublishedDate.text(article.publishedAt)
    textContainer.append(sourceName, title,latestArtictlePublishedDate);
    const flexContainer = $('<div class="d-flex flex-column flex-lg-row col-12 border latestarticles"></div>').css('height','134px')
    flexContainer.append(imageContainer, textContainer);

    return flexContainer;

}
async function getLatestArticles(){
    const latestPostArray=[];
    await $.get('https://newsapi.org/v2/everything?q="news"&sortBy=publishedAt&page=2&language=en&apiKey=d5fa9f6dc219402aa493f167bc113f21',getLatestDetails);
    function getLatestDetails(data){
        const {articles}=data;
        for (let each=0;each<10;each++){
            latestPostArray.push(articles[each])
        }

        for(let item=0;item<latestPostArray.length;item++){
            const flexItemContainer=getLatestData(latestPostArray[item]);
            $('#latestPost-container').append(flexItemContainer);
        }
        const buttonContainer = $('<div class="d-flex col-12"></div>');
        const loadMoreButton = $(`<button class="btn bg-danger text-white m-auto" style="font-size:13px;"></button>`);
        loadMoreButton.text('Load More');
        buttonContainer.append(loadMoreButton)
        $('#latestPost-container').append(buttonContainer);
    }
}

getLatestArticles()

//most popular 

function getPopularPostdData(article){
    const imageContainer = $('<div class="image-container col-5"></div>');
    imageContainer.css({'background-image':`url(${article.urlToImage})`,'background-size':'cover'})
    const textContainer = $('<div class="text-container col-7"></div>').css('padding', '10px 7px');
    const sourceName = $('<h6 style="font-size: 12px; color:#f3bfbf;"></h6>');
    sourceName.text(article.source.name)
    const title = $(`<h5 style="font-size:10px" class="fw-bold text-white"></h5`);
    title.text(article.title)
    textContainer.append(sourceName, title);
    const flexContainer = $('<div class="d-flex col-12"></div>').css('height','85px')
    flexContainer.append(imageContainer, textContainer);

    return flexContainer;

}

async function getPopularPosts(){
    const popularPostsArray=[];
    await $.get('https://newsapi.org/v2/everything?q="news"&sortBy=popularity&language=en&page=2&apiKey=d5fa9f6dc219402aa493f167bc113f21',getPopularPostDetails);
    function getPopularPostDetails(data){
        const {articles}=data;
        for (let each=0;each<3;each++){
            const randomPopularPost=articles[Math.floor(Math.random()*articles.length)]; 
            popularPostsArray.push(randomPopularPost)
        }
        for(let item=0;item<popularPostsArray.length;item++){
            const flexItemContainer=getPopularPostdData(popularPostsArray[item]);
            $('#popularPost-container').append(flexItemContainer);
        }

    }
}


getPopularPosts()



//talked about


function getTalkedPostdData(article){
    const imageContainer = $('<div class="image-container col-5"></div>');
    imageContainer.css({'background-image':`url(${article.urlToImage})`,'background-size':'cover'})
    const textContainer = $('<div class="text-container col-7"></div>').css('padding', '10px 7px');
    const sourceName = $('<h6 style="font-size: 12px; color:#f3bfbf;"></h6>');
    sourceName.text(article.source.name)
    const title = $(`<h5 style="font-size:10px" class="fw-bold text-white"></h5`);
    title.text(article.title)
    textContainer.append(sourceName, title);
    const flexContainer = $('<div class="d-flex col-12"></div>').css('height','85px')
    flexContainer.append(imageContainer, textContainer);

    return flexContainer;

}

async function getTalkedPosts(){
    const talkedPostsArray=[];
    await $.get('https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&language=en&apiKey=d5fa9f6dc219402aa493f167bc113f21',getTalkedPostDetails);
    function getTalkedPostDetails(data){
        const {articles}=data;
        for (let each=0;each<3;each++){
            const randomTalkedPost=articles[Math.floor(Math.random()*articles.length)]; 
            talkedPostsArray.push(randomTalkedPost)
        }
        for(let item=0;item<talkedPostsArray.length;item++){
            const flexItemContainer=getTalkedPostdData(talkedPostsArray[item]);
            $('#talkedPost-container').append(flexItemContainer);
        }

    }
}


getTalkedPosts()




