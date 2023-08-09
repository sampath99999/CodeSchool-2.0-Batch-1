

const apiKey = '96e2cb456b2f4ce7b9bb9638343db0f9';
        const apiUrl = 'https://newsapi.org/v2/everything';
//Technology
        $(document).ready(function() {
            const params = {
                q: 'Technology', 
                from: '2023-08-06',
                to: '2023-08-06',
                sortBy: 'popularity',
                pageSize: 10,
                apiKey: apiKey,
            };

            $.get(apiUrl, params, function(data) {
                if (data.status === 'ok') {
                    const articles = data.articles;
                    const articlesWithImages = articles.filter(article => article.urlToImage);

                    const randomPostsDiv = $('#random-posts');


                    articlesWithImages.slice(0, 1).forEach(post => {
                        const postDiv = $('<div class="post col-lg-4 h-100"></div>');
                        // postDiv.append(`<h4>${post.title}</h4>`);
                        postDiv.append(`<img src="${post.urlToImage}" alt="${post.title}">`);
                        // postDiv.append(`<p>${post.description}</p>`);
                        // postDiv.append(`<a href="${post.url}" target="_blank">Read more</a>`);
                        randomPostsDiv.append(postDiv);
                    });
                }
            });
        });



        //Fashion

        $(document).ready(function() {
            const params = {
                q: 'Environmental',
                from: '2023-08-06',
                to: '2023-08-06',
                sortBy: 'popularity',
                pageSize: 10,
                apiKey: apiKey,
            };

            $.get(apiUrl, params, function(data) {
                if (data.status === 'ok') {
                    const articles = data.articles;
                    const articlesWithImages = articles.filter(article => article.urlToImage);

                    const randomPostsDiv = $('#random-posts');


                    articlesWithImages.slice(0, 1).forEach(post => {
                        const postDiv = $('<div class="post"></div>');
                      //  postDiv.append(`<p>Environment</p>`);

                       //  postDiv.append(`<h4>${post.title}</h4>`);
                        //postDiv.css('background-image', `url("${post.urlToImage}")`);
                        postDiv.append(`<img src="${post.urlToImage}" alt="${post.title}">`);

                       //  postDiv.append(`<p>${post.description}</p>`);
                      //   postDiv.append(`<a href="${post.url}" target="_blank">Read more</a>`);
                        randomPostsDiv.append(postDiv);
                    });
                }
            });
        });

        //Food
        $(document).ready(function() {
            const params = {
                q: 'Food', 
                from: '2023-08-06',
                to: '2023-08-06',
                sortBy: 'popularity',
                pageSize: 10,
                apiKey: apiKey,
            };

            $.get(apiUrl, params, function(data) {
                if (data.status === 'ok') {
                    const articles = data.articles;
                    const articlesWithImages = articles.filter(article => article.urlToImage);

                    const randomPostsDiv = $('#random-posts');


                    articlesWithImages.slice(0, 1).forEach(post => {
                        const postDiv = $('<div class="post col-lg-4"></div>');
                        // postDiv.append(`<h4>${post.title}</h4>`);
                        postDiv.append(`<img src="${post.urlToImage}" alt="${post.title}">`);
                        // postDiv.append(`<p>${post.description}</p>`);
                        // postDiv.append(`<a href="${post.url}" target="_blank">Read more</a>`);
                        randomPostsDiv.append(postDiv);
                    });
                }
            });
        });