$(document).ready(() => {
  const categoryDivs = {
    technology: $("#technologyDiv"),
    environment: $("#environmentDiv"),
    food: $("#foodDiv"),
  };

  const apiKey = "328a3fda59fc4c6c9d7ac97e5addabc2";
  // const apiKey = "8d205a2e9b484d5984e1caebe82f1658";
  const categories = ["technology", "environment", "food"];

  async function fetchRandomImage(category) {
    try {
      const apiUrl = `https://newsapi.org/v2/everything?q=${category}&apiKey=${apiKey}&pageSize=100`;
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Network response looks bad");
      const data = await response.json();
      const articles = data.articles;
      if (articles.length > 0) {
        const randomIndex = Math.floor(Math.random() * articles.length);
        return articles[randomIndex].urlToImage;
      }
      return null;
    } catch (error) {
      console.error(`Error fetching ${category} image:`, error);
      return null;
    }
  }

  async function displayRandomImage(divElement, category) {
    try {
      const imageUrl = await fetchRandomImage(category);
      if (imageUrl) {
        const imgElement = $("<img>")
          .attr({
            src: imageUrl,
            alt: `${category} News Image`,
          })
          .addClass("img-fluid m-1");
        divElement.append(imgElement);
      }
    } catch (error) {
      console.error(`Error displaying ${category} image:`, error);
    }
  }

  categories.forEach((category) => {
    displayRandomImage(categoryDivs[category], category);
  });
});

$(document).ready(() => {
  const videoFrame = $("#videoFrame");
  const apiUrl = "https://vimeo.com/api/v2/channel/staffpicks/videos.json";

  async function fetchRandomVideo() {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Network response looks bad");
      const data = await response.json();
      if (data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex].id;
      }
      return null;
    } catch (error) {
      console.error("Error fetching random video:", error);
      return null;
    }
  }

  async function displayRandomVideo() {
    try {
      const videoId = await fetchRandomVideo();
      if (videoId) {
        const videoUrl = `https://player.vimeo.com/video/${videoId}`;
        videoFrame.attr("src", videoUrl);
      }
    } catch (error) {
      console.error("Error displaying random video:", error);
    }
  }

  displayRandomVideo();
});

$(document).ready(() => {
  const lifestyleImage = $("#lifestyleImage");
  const imageUrl = "https://picsum.photos/400/200?random=" + Math.random();
  lifestyleImage.attr("src", imageUrl);
});

$(document).ready(() => {
  const foodImage = $("#foodImage");
  const imageUrl = `https://picsum.photos/400/200?random=${Math.random()}&category=food`;
  foodImage.attr("src", imageUrl);
});

$(document).ready(() => {
  const environmentImage = $("#environmentImage");
  const imageUrl = "https://picsum.photos/400/200?random=" + Math.random();
  environmentImage.attr("src", imageUrl);
});

$(document).ready(async () => {
  // const apiKey = '8d205a2e9b484d5984e1caebe82f1658';
  const apiKey = "328a3fda59fc4c6c9d7ac97e5addabc2";
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&pageSize=10`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const cardContainer = $(".card-container");

    data.articles.forEach((article) => {
      const card = createCard(article);
      cardContainer.append(card);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

function createCard(article) {
  const card = $("<div>").addClass("card mb-3").css("max-width", "840px");
  const cardRow = $("<div>").addClass("row g-0");
  const cardImageContainer = $("<div>").addClass("col-md-4");
  const cardImage = $("<img>")
    .attr({
      src: article.urlToImage,
      alt: "Article Image",
    })
    .addClass("img-fluid rounded-start");
  cardImageContainer.append(cardImage);
  const cardContentContainer = $("<div>").addClass("col-md-8");
  const cardBody = $("<div>").addClass("card-body");
  const cardTitle = $("<h5>").addClass("card-title").text(article.title);
  const cardDescription = $("<p>")
    .addClass("card-text")
    .text(article.description);
  cardBody.append(cardTitle, cardDescription);
  cardContentContainer.append(cardBody);
  cardRow.append(cardImageContainer, cardContentContainer);
  card.append(cardRow);
  return card;
}

$(document).ready(() => {
  const categoryDivs = {
    technology: $(".normal-image:nth-child(1) img"),
    environment: $(".normal-image:nth-child(2) img"),
    food: $(".normal-image:nth-child(3) img"),
  };

  const apiKey = "7c736d9bb3bd40f48d673edcb965a3a9";
  const categories = ["technology", "environment", "food"];

  async function fetchRandomImage(category) {
    try {
      const apiUrl = `https://newsapi.org/v2/everything?q=${category}&apiKey=${apiKey}&pageSize=10`;
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Network response looks bad");
      const data = await response.json();
      const articles = data.articles;
      if (articles.length > 0) {
        const randomIndex = Math.floor(Math.random() * articles.length);
        return articles[randomIndex].urlToImage;
      }
      return null;
    } catch (error) {
      console.error(`Error fetching ${category} image:`, error);
      return null;
    }
  }
});


$(document).ready(function() {
  $(".overlay-content").append('<p style="font-weight: 400; font-size: xx-large; text-align: center;">The features of the best<br>Ergonomic Keyboard</p>');
  $(".overlay-content1").append('<p style="font-weight: 400; font-size: xx-large; text-align: center;">Making a Commitment to<br>Environmental Sustainability</p>');
  $(".overlay-content2").append('<p style="font-weight: 400; font-size: xx-large; text-align: center;">Stunning Health Benefits of Eating Chocolates</p>');
});


$(document).ready(function() {
 
  const apiKey = "328a3fda59fc4c6c9d7ac97e5addabc2";
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  $.get(apiUrl, function(data) {
    const articles = data.articles;
    const imageUrls = articles.map(article => article.urlToImage).filter(url => url !== null);
    var carouselInner = $(".carousel-inner");
    imageUrls.forEach(function(imageUrl, index) {
      var activeClass = index === 0 ? "active" : "";
      var carouselItem = `
        <div class="carousel-item ${activeClass}">
          <img src="${imageUrl}" class="d-block w-100" alt="Image ${index + 1}">
        </div>`;
      carouselInner.append(carouselItem);
    });

    $("#carouselImages").carousel();
  });

  $(".img-div").hover(function() {
    $(this).find("img").css("opacity", 0.7);
  }, function() {
    $(this).find("img").css("opacity", 1);
  });
});