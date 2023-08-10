const apiKey='60cde577a9ff44998508975a02e23a5c';


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
const apiUrl1 =`https://newsapi.org/v2/everything&apiKey${apiKey}`;
        //const apiUrl1 = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

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
                    const title = document.createElement('p');
                    title.textContent = article.title;
                    card.appendChild(title);

                    

                    latestNews.appendChild(card);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
/*
const apiUrl2 =`https://newsapi.org/v2/everything?q=tesla&from=2023-07-10&sortBy=publishedAt&apiKey=60cde577a9ff44998508975a02e23a5c`;
        //const apiUrl1 = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

        const fashionNews = document.getElementById('fashionNews');

        fetch(apiUrl2)
            .then(response => response.json())
            .then(data => {
                const articles = data.articles.slice(0, 10);
                articles.forEach(article => {
                    const card = document.createElement('div');
                    card.className = 'fashion-card';

                    if (article.urlToImage) {
                        const image = document.createElement('img');
                        image.src = article.urlToImage;
                        card.appendChild(image);
                        image.style.width = '150px';
                        image.style.height = '100px'; 
                       
                    }
                    const title = document.createElement('p');
                    title.textContent = article.title;
                    card.appendChild(title);

                    

                    latestNews.appendChild(card);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
           */