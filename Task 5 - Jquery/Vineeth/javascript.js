$(document).ready(function() {
    fetchImages();
    fetchAndDisplayData('fashion', '#card-1', 'FASHION');
    fetchAndDisplayData('lifestyle', '#card-2', 'LIFESTYLE');
    fetchAndDisplayData('food', '#card-4', 'FOOD');
    fetchAndDisplayData('apple', '#card-5', 'APPLE');
});

function fetchImages(containerid,num) {
    $.ajax({
        url: "https://newsapi.org/v2/everything?q=apple&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=cbff5be8dd29429389b689ba16df1ecc",
        method: 'GET',
        success: function (response) {
            const data = response.articles;
            const data2=response.articles.source;
            displayImages(data,containerid,num);
            third(data);
            popular(data);
            displayArticles(data);
            about(data);
            generateFeaturedCards2(data)
        }
    });
}
function displayImages(articles, containerId, i) {
    var imageContainer = $('#' + containerId);
    
    if (articles.length > i) {
        var card = `<div class="card text-bg-dark">
                        <img src="${articles[i].urlToImage}" class="card-img" alt="...">
                        <div class="card-img-overlay">
                            <small class="p-1 rounded" style="background-color:blue;">${articles[i].source.name}</small>
                            <h6 class="card-title">${articles[i].title}</h6>
                            <small>${articles[i].publishedAt}</small>
                        </div>
                    </div>`;
        
        imageContainer.append(card);
    }
}

fetchImages('image-container',0);
fetchImages('image-container1',1);
fetchImages('image-container2',2);
function fetchAndDisplayData(category, containerId, categoryName) {
    $.ajax({
        url: `https://newsapi.org/v2/everything?q=${category}&from=2023-08-07&to=2023-08-07&sortBy=popularity&apiKey=cbff5be8dd29429389b689ba16df1ecc`,
        method: 'GET',
        success: function (response) {
            const data = response.articles;
            showData(data, containerId, categoryName);
        }
    });
}


function showData(data, containerId, categoryName) {
    var cardContent = `<div class="card text-center" >
        <div class="card-header">${categoryName}</div>
        <div class="card-body">
            ${generateCard(data[0])}
        </div>
        <div class="card-footer text-body-secondary">
            ${generateSmallCards(data)}
        </div>
    </div>`;
    $(containerId).html(cardContent);
}

function generateCard(article) {
    return `<div class="card">
        <img src="${article.urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
            <h6 class="card-title">${article.title}</h6>
            <small class="card-text">${article.description ? article.description.slice(0, 30) + "..." : ""}</small><br>
            <small>${article.publishedAt}</small>
        </div>
    </div>`;
}

function generateSmallCards(articles) {
    var cards = '';
    for (let i = 0; i < 3; i++) {
        cards += `<div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${articles[i].urlToImage}" class="img-fluid rounded-start" alt="..." style="heigth:100%">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <small class="card-title">${articles[i].title.slice(0,30)+"..."}</small>
                    </div>
                </div>
            </div>
        </div>`;
    }
    return cards;
}
function third(data) {
    var content = `
        <div class="card">
            <div class="card-header text-center">
                CATEGORIES
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${data[0].source.name}</li>
                <li class="list-group-item">${data[1].source.name}</li>
                <li class="list-group-item">${data[2].source.name}</li>
                <li class="list-group-item">${data[3].source.name}</li>
                <li class="list-group-item">${data[4].source.name}</li>
                <li class="list-group-item">${data[5].source.name}</li>
            </ul>
        </div>
        <div class="card mt-3">
            <div class="card-header text-center">
                Featured Post
            </div>
            <div class="card-body">
                ${generateFeaturedCards(data)}
            </div>
        </div>`;

    $('#card-3').html(content);
}
function generateFeaturedCards(data) {
    var featuredCards = '';
    for (let i = 3; i < Math.min(data.length, 6); i++) {
        featuredCards += `
            <div class="card mb-3 ">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${data[i].urlToImage}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <small class="card-title">${data[i].title.slice(0,20)+"..."}</small>
                        </div>
                    </div>
                </div>
            </div>`;
    }
    return featuredCards;
}
function generateFeaturedCards2(data) {
    var featuredCards = '';
    for (let i = 3; i < Math.min(data.length, 6); i++) {
        featuredCards += `
            <div class="card mb-3 border-0" style="background-color:2B2E33;color:white;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${data[i].urlToImage}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <small class="card-title">${data[i].title.slice(0,20)+"..."}</small>
                        </div>
                    </div>
                </div>
            </div>`;
    }
    return featuredCards;
}
var Articles = $('#l-articles');

function displayArticles(data) {
    let articleContent = '';
    let combinedCardContent = ''; 

    for (var i = 0; i < Math.min(data.length, 10); i++) {
        articleContent = `
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${data[i].urlToImage}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <small class="card-title">${data[i].title}</small>
                    </div>
                </div>
            </div>`;

        combinedCardContent += articleContent;
    }

    // Wrap the combined card content in a card
    let combinedCard = `
        <div class="card mb-3">
            ${combinedCardContent}
        </div>`;

    Articles.html(combinedCard);
}



function popular(data) {
    var content = `
        <div class="card mt-3 border-0">
            <div class="card-header text-center" style="background-color:#24272C;color:white;">
                MOST POPULAR
            </div>
            <div class="card-body" style="background-color:#2B2E33">
                ${generateFeaturedCards2(data)}
                ${generateFeaturedCards2(data)}
            </div>
        </div>`;
    $('#popular').html(content);

}
function about(data) {
    var content = `
        <div class="card mt-3 border-0">
            <div class="card-header text-center" style="background-color:#24272C;color:white;">
                TALKED ABOUT
            </div>
            <div class="card-body" style="background-color:#2B2E33">
                ${generateFeaturedCards2(data)}
                ${generateFeaturedCards2(data)}
            </div>
        </div>`;
    $('#about').html(content);
}