//const apiKey='60cde577a9ff44998508975a02e23a5c';
//const apiKey='89baa29a97b24d6aab6480ee4ce171c2';
const apiKey='09a8b3ec72154cbcbceaa7104ff6e68f';

const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

        const newsContainer = document.getElementById('newsContainer');

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const articles = data.articles.slice(0, 3);
                articles.forEach(article => {
                    const card = document.createElement('div');
                    card.className = 'news-card';

                    if (article.urlToImage) {
                        card.style.backgroundImage = `url(${article.urlToImage})`;
                        card.style.backgroundSize = 'cover';
                        card.style.backgroundPosition = 'center center';
                        card.style.width = '700px';
                        card.style.height = '400px'; 
                    }

                    const title = document.createElement('h5');
                    title.textContent = article.title;
                    card.appendChild(title);
                    title.className = 'news-title';
                    newsContainer.appendChild(card);

                    
                });
            })
            .catch(error => console.error('Error fetching data:', error));

async function fetchNews(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.articles;
}

function displayPosts(container, articles) {
    const postsHtml = articles.map(article => `
        <div class="post d-flex">
            <div class="left_img">
            <img src="${article.urlToImage}" alt="${article.title}" class="post-image"style="width: 40px;height: 50px;">
            </div>
            <div class="content"
            <h5 style="font-size:10px">${article.title}</h5>
            </div>
        </div>
    `).join('');
    container.innerHTML = postsHtml;
}


const mostPopularContainer = document.getElementById('mostPopular');
fetchNews(`https://newsapi.org/v2/everything?q=apple&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=${apiKey}`)
    .then(articles => displayPosts(mostPopularContainer, articles.slice(0, 4)));


const talkedAboutContainer = document.getElementById('talkedAbout');
fetchNews(`https://newsapi.org/v2/everything?q=apple&from=2023-08-06&to=2023-08-06&sortBy=relevancy&apiKey=${apiKey}`)
    .then(articles => displayPosts(talkedAboutContainer, articles.slice(0, 4)));

//latest news
        const latestNews = document.getElementById('latestNews');

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const articles = data.articles.slice(0, 10);
                articles.forEach(article => {
                    const card = document.createElement('div');
                    card.className = 'latest-card';

                    if (article.urlToImage) {
                        const image = document.createElement('img');
                        image.src = article.urlToImage;
                        card.appendChild(image);
                        image.style.width = '150px';
                        image.style.height = '100px'; 
                       
                    }
                    const title = document.createElement('h6');
                    title.textContent = article.title;
                    card.appendChild(title);

                    

                    latestNews.appendChild(card);
                });
            })
            .catch(error => console.error('Error fetching data:', error));

        //Fetch Fashion
            
            
            async function fetchNews() {
                try {
                    const response = await fetch(apiUrl);
                    const data = await response.json();
                    return data.articles;
                } catch (error) {
                    console.error('Error fetching news:', error);
                    return [];
                }
            }
            
            function createNewsCard(article) {
                const newsCard = document.createElement('div');
                newsCard.className = 'fashion-card';
            
                const image = document.createElement('img');
                image.src = article.urlToImage || 'placeholder-image.jpg';
                image.alt = article.title;
                newsCard.appendChild(image);
            
                const title = document.createElement('h6');
                title.textContent = article.title;
                newsCard.appendChild(title);
            
            
                return newsCard;
            }
            
            async function displayNews() {
                const fashionNews = document.getElementById('fashionNews');
                const articles = await fetchNews();
            
                articles.slice(0, 3).forEach(article => {
                    const newsCard = createNewsCard(article);
                    fashionNews.appendChild(newsCard);
                });
            }
            
            displayNews();
        
//Lifestyle fetch

        const lifestyleNews = document.getElementById('lifestyleNews');

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const articles = data.articles.slice(5,8);
                articles.forEach(article => {
                    const card = document.createElement('div');
                    card.className = 'lifestyle-card';

                    if (article.urlToImage) {
                        const image = document.createElement('img');
                        image.src = article.urlToImage;
                        card.appendChild(image);
                        image.style.width = '150px';
                        image.style.height = '150px'; 
                       
                    }
                    const title = document.createElement('h6');
                    title.textContent = article.title;
                    card.appendChild(title);

                    

                    lifestyleNews.appendChild(card);
                });
            })
            .catch(error => console.error('Error fetching data:', error));


//Food fetch

const foodNews = document.getElementById('foodNews');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const articles = data.articles.slice(12,15);
        articles.forEach(article => {
            const card = document.createElement('div');
            card.className = 'lifestyle-card';

            if (article.urlToImage) {
                const image = document.createElement('img');
                image.src = article.urlToImage;
                card.appendChild(image);
                image.style.width = '150px';
                image.style.height = '150px'; 
               
            }
            const title = document.createElement('h6');
            title.textContent = article.title;
            card.appendChild(title);

            

            foodNews.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

//Enviroment fetch

const enviromentNews = document.getElementById('enviromentNews');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const articles = data.articles.slice(10,13);
        articles.forEach(article => {
            const card = document.createElement('div');
            card.className = 'lifestyle-card';

            if (article.urlToImage) {
                const image = document.createElement('img');
                image.src = article.urlToImage;
                card.appendChild(image);
                image.style.width = '150px';
                image.style.height = '150px'; 
               
            }
            const title = document.createElement('h6');
            title.textContent = article.title;
            card.appendChild(title);

            

            enviromentNews.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
//Feathers Posts

const feathersNews = document.getElementById('feathersNews');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const articles = data.articles.slice(12,15);
        articles.forEach(article => {
            const card = document.createElement('div');
            card.className = 'feathers-card';

            if (article.urlToImage) {
                const image = document.createElement('img');
                image.src = article.urlToImage;
                card.appendChild(image);
                image.style.width = '100px';
                image.style.height = '100px'; 
               
            }
            const title = document.createElement('h6');
            title.textContent = article.title;
            card.appendChild(title);

            

            feathersNews.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error));