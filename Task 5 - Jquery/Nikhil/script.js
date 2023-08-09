$(document).ready(function() {
  const apiUrl = "https://newsapi.org/v2/everything?q=apple&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=580d35bdefbd497496a8b8467b1363d9";

  function fetchAndDisplayNews() {
    $.getJSON(apiUrl, function(data) {
      const articles = data.articles.slice(0, 3); 
      const newsContainer = $("#news-container");
      articles.forEach((article, index) => {
        const articleElement = createArticleElement(article, index);
        newsContainer.append(articleElement);
      });
    }).fail(function(jqXHR, textStatus, errorThrown) {
      console.error("Error fetching news:", errorThrown);
    });
  }

  function createArticleElement(article, index) {
    const articleElement = $("<div>", {
      class: "col-12 col-md-6 col-lg-4",
    });

    const bgColorClass = getBackgroundColorClass(index);
    articleElement.html(`
      <div class="card h-100">
        <div class="news-article ${bgColorClass}" style="background-image: url(${article.urlToImage}); opacity: 1;">
          <p class="card-text">${article.author}</p>
          <h5 class="card-title">${article.title}</h5>
          <p class="card-text">${formatDate(article.publishedAt)}</p>
        </div>
      </div>
    `);

    return articleElement;
  }

  function getBackgroundColorClass(index) {
    const bgColorClasses = ["blue-bg", "pink-bg", "green-bg"];
    return bgColorClasses[index % bgColorClasses.length];
  }

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  fetchAndDisplayNews();
});
$(document).ready(function() {
  const apiUrl = "https://newsapi.org/v2/everything?q=apple&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=580d35bdefbd497496a8b8467b1363d9";

  function fetchAndDisplayNews() {
    $.getJSON(apiUrl, function(data) {
      const articles = data.articles.slice(0, 3); 
      const carouselInner = $("#carousel-inner");
      articles.forEach((article, index) => {
        const cardCarouselItem = createCardCarouselItem(article, index);
        carouselInner.append(cardCarouselItem);
      });

     
      carouselInner.children().first().addClass("active");
    }).fail(function(jqXHR, textStatus, errorThrown) {
      console.error("Error fetching news:", errorThrown);
    });
  }

  function createCardCarouselItem(article, index) {
    const cardCarouselItem = $("<div>", {
      class: index === 0 ? "carousel-item active" : "carousel-item",
    });

    const card = $("<div>", {
      class: "card position-relative",
    });

    const cardImage = $("<img>", {
      class: "card-img",
      src: article.urlToImage,
      alt: article.title,
    });

    const cardBody = $("<div>", {
      class: "card-body bg-transparent",
    });

    const cardTitle = $("<h5>", {
      class: "card-title text-white",
      text: article.title,
    });

    const cardAuthor = $("<p>", {
      class: "card-text text-white",
      text: "By " + article.author,
    });

    const cardPublishedAt = $("<p>", {
      class: "card-text text-white",
      text: formatDate(article.publishedAt),
    });

    cardBody.append(cardTitle);
    cardBody.append(cardAuthor);
    cardBody.append(cardPublishedAt);

    card.append(cardImage);
    card.append(cardBody);

    cardCarouselItem.append(card);
    return cardCarouselItem;
  }

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  fetchAndDisplayNews();
});
$(document).ready(function() {
  $.ajax({
    url: "https://newsapi.org/v2/everything?q=fashion&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=580d35bdefbd497496a8b8467b1363d9",
    method: "GET",
    dataType: "json",
    success: function(data) {
      const articles = data.articles;
      const randomArticle = articles[Math.floor(Math.random() * articles.length)];

      $(".card-img-top").attr("src", randomArticle.urlToImage);
      $(".card-img-top").attr("alt", randomArticle.title);

      $(".card-title").text(randomArticle.title);
      $(".card-text").text(randomArticle.description);
    },
    error: function() {
      console.log("Error fetching data.");
    }
  });
});
    $(document).ready(function() {
      $.ajax({
        url: "https://newsapi.org/v2/everything?q=fashion&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=580d35bdefbd497496a8b8467b1363d9",
        method: "GET",
        dataType: "json",
        success: function(data) {
          const articles = data.articles;
          const randomArticle = articles[Math.floor(Math.random() * articles.length)];

          $("#card-img-top").attr("src", randomArticle.urlToImage);
          $("#left_3").attr("alt", randomArticle.title);

          $("#left_3,#left_4").text(truncateString(randomArticle.title, 25));
        },
        error: function() {
          console.log("Error fetching data.");
        }
      });

      function truncateString(str, maxLength) {
        return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
      }
    });

   
   
    $(document).ready(function() {
      $.ajax({
        url: "https://newsapi.org/v2/everything?q=lifestyle&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=580d35bdefbd497496a8b8467b1363d9",
        method: "GET",
        dataType: "json",
        success: function(data) {
          const articles = data.articles;
          const randomArticle = articles[Math.floor(Math.random() * articles.length)];
    
          $(".card-img-top_1").attr("src", randomArticle.urlToImage);
          $(".card-img-top_1").attr("alt", randomArticle.title);
    
          $("#right_1").text(randomArticle.title);
          $("#right_2").text(randomArticle.description);
        },
        error: function() {
          console.log("Error fetching data.");
        }
      })
    });
    $(document).ready(function() {
      $.ajax({
        url: "https://newsapi.org/v2/everything?q=fashion&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=580d35bdefbd497496a8b8467b1363d9",
        method: "GET",
        dataType: "json",
        success: function(data) {
          const articles = data.articles;
          const randomArticle = articles[Math.floor(Math.random() * articles.length)];

          $("#right_3").attr("src", randomArticle.urlToImage);
          $("#right_4").attr("alt", randomArticle.title);
          $("#envir_6").text(truncateString(randomArticle.title, 25));
          $("#right_4").text(truncateString(randomArticle.title, 25));
        },
        error: function() {
          console.log("Error fetching data.");
        }
      });

      function truncateString(str, maxLength) {
        return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
      }
    });
    $(document).ready(function() {
      $.ajax({
        url: "https://newsapi.org/v2/everything?q=fashion&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=580d35bdefbd497496a8b8467b1363d9",
        method: "GET",
        dataType: "json",
        success: function(data) {
          const articles = data.articles;
          const randomArticle = articles[Math.floor(Math.random() * articles.length)];

          $("#right_5").attr("src", randomArticle.urlToImage);
          $("#right_6").attr("alt", randomArticle.title);

          $("#right_6").text(truncateString(randomArticle.title, 25));
        },
        error: function() {
          console.log("Error fetching data.");
        }
      });

      function truncateString(str, maxLength) {
        return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
      }
    });


    $(document).ready(function() {
      $.ajax({
        url: "https://newsapi.org/v2/everything?q=food&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=580d35bdefbd497496a8b8467b1363d9",
        method: "GET",
        dataType: "json",
        success: function(data) {
          const articles = data.articles;
          const randomArticle = articles[Math.floor(Math.random() * articles.length)];
    
          $("#food").attr("src", randomArticle.urlToImage);
          $(".card-img-top").attr("alt", randomArticle.title);
    
          $("#food_1").text(randomArticle.title);
          $("#food_2").text(randomArticle.description);
        },
        error: function() {
          console.log("Error fetching data.");
        }
      });
    });
    $(document).ready(function() {
      $.ajax({
        url: "https://newsapi.org/v2/everything?q=food&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=580d35bdefbd497496a8b8467b1363d9",
        method: "GET",
        dataType: "json",
        success: function(data) {
          const articles = data.articles;
          const randomArticle = articles[Math.floor(Math.random() * articles.length)];
    
          $("#food2").attr("src", randomArticle.urlToImage);
          $(".card-img-top").attr("alt", randomArticle.title);
    
          $("#food_3").text(truncateString(randomArticle.title, 25));
        
        },
        error: function() {
          console.log("Error fetching data.");
        }
      });
      function truncateString(str, maxLength) {
        return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
      }
    });
    $(document).ready(function() {
      $.ajax({
        url: "https://newsapi.org/v2/everything?q=food&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=580d35bdefbd497496a8b8467b1363d9",
        method: "GET",
        dataType: "json",
        success: function(data) {
          const articles = data.articles;
          const randomArticle = articles[Math.floor(Math.random() * articles.length)];
    
          $("#food3").attr("src", randomArticle.urlToImage);
          $("#envir5").attr("src", randomArticle.urlToImage);
          $(".card-img-top").attr("alt", randomArticle.title);
    
          $("#food_4").text(truncateString(randomArticle.title, 25));
        
        },
        error: function() {
          console.log("Error fetching data.");
        }
      });
      function truncateString(str, maxLength) {
        return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
      }
    });
    $(document).ready(function() {
      $.ajax({
        url: "https://newsapi.org/v2/everything?q=environment&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=580d35bdefbd497496a8b8467b1363d9",
        method: "GET",
        dataType: "json",
        success: function(data) {
          const articles = data.articles;
          const randomArticle = articles[Math.floor(Math.random() * articles.length)];
    
          $("#envir1").attr("src", randomArticle.urlToImage);
          $(".card-img-top").attr("alt", randomArticle.title);
          $("#envir3").attr("src",randomArticle.urlToImage)
          $("#envir_1").text(randomArticle.title);
          $("#envir_2").text(truncateString(randomArticle.description));
        },
        error: function() {
          console.log("Error fetching data.");
        }
      });
    });
    $(document).ready(function() {
      $.ajax({
        url: "https://newsapi.org/v2/everything?q=environment&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=580d35bdefbd497496a8b8467b1363d9",
        method: "GET",
        dataType: "json",
        success: function(data) {
          const articles = data.articles;
          const randomArticle = articles[Math.floor(Math.random() * articles.length)];
    
          $("#envir2").attr("src", randomArticle.urlToImage);
          $(".card-img-top").attr("alt", randomArticle.title);
    
          $("#envir_3").text(truncateString(randomArticle.title, 25));
         
        },
        error: function() {
          console.log("Error fetching data.");
        }
      });
      function truncateString(str, maxLength) {
        return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
      }
    });
    $(document).ready(function() {
      $.ajax({
        url: "https://newsapi.org/v2/everything?q=environment&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=580d35bdefbd497496a8b8467b1363d9",
        method: "GET",
        dataType: "json",
        success: function(data) {
          const articles = data.articles;
          const randomArticle = articles[Math.floor(Math.random() * articles.length)];
    
          $("#envir3").attr("src", randomArticle.urlToImage);
          $(".card-img-top").attr("alt", randomArticle.title);
    
          $("#envir_4").text(truncateString(randomArticle.title, 25));
          $("#envir_5").text(truncateString(randomArticle.title, 25));
          $("#envir_7").text(truncateString(randomArticle.title, 25));
         
         
        },
        error: function() {
          console.log("Error fetching data.");
        }
      });
      function truncateString(str, maxLength) {
        return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
      }
    });
    $(document).ready(function() {
      const latestNewsContainer = $('#latest-news-list');
      const apiKey = '580d35bdefbd497496a8b8467b1363d9';
      const apiUrl = `https://newsapi.org/v2/everything?q=apple&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=${apiKey}`;
  
      
      $.get(apiUrl, function(data) {
          const newsArticles = data.articles.slice(0, 10); 
  
          
          $.each(newsArticles, function(index, article) {
              const newsCard = `
                  <div class="col-md-4">
                      <div class="card1">
                          <img src="${article.urlToImage}" class="card-img-toppp" alt="News Image">
                          <div class="card-body">
                              <h5 class="card-titleee">${truncateString(article.title, 50)}</h5>
                          </div>
                      </div>
                  </div>
              `;
  
              latestNewsContainer.append(newsCard);
          });
  
          function truncateString(str, maxLength) {
              return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
          }
      }).fail(function(error) {
          console.error('Error fetching news data:', error);
      });
  });
  