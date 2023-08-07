const imageGallery = document.getElementById("imageGallery");
const apiKey = "PyC8kaI51vmaZ5GQUVXgy4HgMZCyyOihkMfo4pNgVVfYSTpbVEeG2t3x"; // API key
const apiUrl = `https://api.pexels.com/v1/search?query=clothing+store&per_page=32`;

async function fetchImages(url) {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: apiKey,
      },
    });
    const data = await response.json();
    return data.photos;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}

function displayImages(images) {
  imageGallery.innerHTML = "";

  images.forEach((image, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.src.medium;
    imgElement.alt = "Clothing Image";
    imgElement.classList.add("img-fluid", "m-1");

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add(
      "col-6",
      "col-md-6",
      "col-lg-3",
      "mb-4",
      "position-relative"
    );

    imageWrapper.appendChild(imgElement);

    //   if (index === 1 || index === 4 || index === 5 || index === 7 || index === 11 || index === 13 || index === 14 || index === 15 || index === 19 || index === 21 || index === 26 || index === 28 || index === 29 || index === 32) {
    //     const randomButton = document.createElement('button');
    //     randomButton.textContent = 'Hot Limited';
    //     randomButton.classList.add('random-button', 'bg-green', 'text-white');
    //     imageWrapper.appendChild(randomButton);
    //   }

    if (
      index === 1 ||
      index === 4 ||
      index === 5 ||
      index === 7 ||
      index === 11 ||
      index === 13 ||
      index === 14 ||
      index === 15 ||
      index === 19 ||
      index === 21 ||
      index === 26 ||
      index === 28 ||
      index === 29 ||
      index === 32
    ) {
      const randomButton = document.createElement("button");
      randomButton.classList.add("random-button", "bg-green", "text-white");
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        randomButton.textContent = "Hot";
      } else {
        randomButton.textContent = "Limited";
      }

      imageWrapper.appendChild(randomButton);
    }

    if ([1, 4, 5, 7, 11, 13, 14, 15, 19, 21, 26, 28, 29, 32].includes(index)) {
      const randomLabel = document.createElement("div");
      randomLabel.textContent = Math.floor(Math.random() * 20) + "%";
      randomLabel.classList.add("random-label", "bg-orange", "text-white");
      imageWrapper.appendChild(randomLabel);
    }

    const heartIcon = document.createElement("i");
    heartIcon.classList.add(
      "far",
      "fa-heart",
      "heart-icon",
      "position-absolute",
      "top-0",
      "end-0",
      "p-2"
    );
    imageWrapper.appendChild(heartIcon);

    const contentWrapper = document.createElement("div");
    contentWrapper.classList.add("image-content");

    const titleElement = document.createElement("h5");
    titleElement.textContent = getRandomDescription();
    contentWrapper.appendChild(titleElement);

    const priceElement = document.createElement("p");
    priceElement.textContent =
      "$" + (Math.random() * (100 - 10) + 10).toFixed(2);
    contentWrapper.appendChild(priceElement);

    imageWrapper.appendChild(contentWrapper);

    imageGallery.appendChild(imageWrapper);
  });
}

function getRandomDescription() {
  const words = [
    "Beautiful",
    "Stylish",
    "Elegant",
    "Fashionable",
    "Trendy",
    "Chic",
    "Classy",
    "Cool",
    "Comfy",
    "Casual",
    "Sleek",
    "Glamorous",
    "Vintage",
    "Modern",
    "Boho",
    "Gorgeous",
    "Sassy",
    "Fancy",
    "Dapper",
    "Classy",
    "Cute",
    "Glam",
    "Posh",
    "Sharp",
    "Neat",
    "Swanky",
    "Snazzy",
    "Smart",
  ];
  const randomWord1 = words[Math.floor(Math.random() * words.length)];
  const randomWord2 = words[Math.floor(Math.random() * words.length)];
  return `${randomWord1} ${randomWord2}`;
}

async function loadImages() {
  const images = await fetchImages(apiUrl);
  displayImages(images);
}
loadImages();
