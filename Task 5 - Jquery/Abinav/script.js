const apiKey = "eeb2f2c499544cfa8ae19533dd635b1b";
const apiUrl1 =
  "https://newsapi.org/v2/everything?q=technology&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=" +
  apiKey;
const apiUrl2 =
  "https://newsapi.org/v2/everything?q=environment&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=eeb2f2c499544cfa8ae19533dd635b1b";
const apiUrl3 =
  "https://newsapi.org/v2/everything?q=food&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=" +
  apiKey;
const apiUrl4 =
  "https://newsapi.org/v2/everything?q=fashion&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=eeb2f2c499544cfa8ae19533dd635b1b";

const apiUrl5 =
  "https://newsapi.org/v2/everything?q=lifestyle&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=eeb2f2c499544cfa8ae19533dd635b1b";
function createImageDiv(imageUrl,t,d, a) {
  const imageDiv = $("<div>", { class: "col-12 col-lg-4" });
  if (a == "firstUrl") {
    const imageContainer = $("<div>").addClass("imagecontainer");
    imageDiv.css("background-image", "url(" + imageUrl + ")");
    const heading=$('<h5>').text(t).addClass("headings");
    const button = $("<button>").text("Technology").addClass("button1");
    const date =$('<p>').text(d).addClass("dateClass");
    imageContainer.append(button);
    imageContainer.append(heading);
    imageContainer.append(date);
    imageDiv.append(imageContainer);
    $("#couraselimage1").attr("src", imageUrl);

    return imageDiv;
  }
  if (a == "secondUrl") {
    const imageContainer = $("<div>").addClass("imagecontainer");
    imageDiv.css("background-image", "url(" + imageUrl + ")");
    const heading=$('<h5>').text(t).addClass("headings");
    const button = $("<button>").text("Environment").addClass("button2");
    const date =$('<p>').text(d).addClass("dateClass");
    imageContainer.append(button);
    imageContainer.append(heading);
    imageContainer.append(date);
    imageDiv.append(imageContainer);
    $("#couraselimage2").attr("src", imageUrl);

    
    return imageDiv;
    
  }
  if (a == "thirdUrl") {
    const imageContainer = $("<div>").addClass("imagecontainer");
    imageDiv.css("background-image", "url(" + imageUrl + ")");
    const heading=$('<h5>').text(t).addClass("headings");
    const button = $("<button>").text("Food").addClass("button3");
    const date =$('<p>').text(d).addClass("dateClass");
    imageContainer.append(button);
    imageContainer.append(heading);
    imageContainer.append(date);
    imageDiv.append(imageContainer);
    $("#couraselimage3").attr("src", imageUrl);

    return imageDiv;
   
  }
}


function getRandomIdBetween() {
  return Math.floor(Math.random() * 101) + 100;
}

$.get(apiUrl1, function (data) {
  const articles = data.articles;
  const randomIndices = getRandomIndices(articles.length, 1);


  const first = "firstUrl";
  randomIndices.forEach((index) => {
    const imageUrl = articles[index].urlToImage;
    const imageTitle=articles[index].title;
    const date=articles[index].publishedAt;
  
    const imageDiv = createImageDiv(imageUrl,imageTitle,date, first);
    $("#mainContainer").append(imageDiv);

  });


});

$.get(apiUrl2, function (data) {
  const articles = data.articles;
  const randomIndices = getRandomIndices(articles.length, 1);
  const second = "secondUrl";
  randomIndices.forEach((index) => {
    const imageUrl = articles[index].urlToImage;
    const imageTitle=articles[index].title;
    const date=articles[index].publishedAt;
  
    const imageDiv = createImageDiv(imageUrl,imageTitle,date, second);
    $("#mainContainer").append(imageDiv);

  
  });
});

$.get(apiUrl3, function (data) {
  const articles = data.articles;
  const randomIndices = getRandomIndices(articles.length, 1);
  const third = "thirdUrl";
  randomIndices.forEach((index) => {
    const imageUrl = articles[index].urlToImage;
    const imageTitle=articles[index].title;
    const date=articles[index].publishedAt;
  
    const imageDiv = createImageDiv(imageUrl,imageTitle,date,third);
    $("#mainContainer").append(imageDiv);

  
  });

});

$.get(apiUrl4, function (data) {

  // const div1 = $("<div>", { class: "col-4" });
  $("#secondmaincontainer").css("background-color", "#F0F0F0");
  $("#secondmaincontainer").addClass("pt-4");
  const fashionDiv = $("<div>").text("FASHION").addClass("miniHeader pb-3 bg-white").css({
    fontSize: "20px",
    borderTop: "2px solid red",
    padding: "10px",margin:"5px",
  });

  $("#cardsection").css("background-color", "#F9F9F9");
  const articles=data.articles;
  const randomIndices=getRandomIndices(articles.length,1);
  randomIndices.forEach((index) => {
     // First Card
const cardContainer = $("<div>").addClass("card custom-card mb-1").css("width", "18.5 rem");
const cardImage = $("<img>").addClass("card-img-top","pt-2","ps-5","col-sm-6").attr("src", articles[index].urlToImage ).attr("height","auto");
const cardBody = $("<div>").addClass("card-body");
const fashionTitle = $("<p>").addClass("fashiontitle").text("Fashion");

const cardTitle = $("<h6>").addClass("card-title card-title-single-line").text(articles[index].title.split(" ").slice(0, 4).join(" "));
const cardDate = $("<p>").addClass("cardDate").text(articles[index].publishedAt);

const cardText = $("<p>").addClass("card-text card-text-single-line maintext").text(articles[index].description.split(" ").slice(0, 8).join(" "));

cardBody.append(fashionTitle,cardTitle,cardDate, cardText);
cardContainer.append(cardImage,cardBody);
$("#cardsection").append(fashionDiv);
$("#cardsection").append(cardContainer);

  
  });
  

 
// Second Card
// const randomIndices2=getRandomIndices(articles.length,1);
// randomIndices2.forEach((index) => {
//   const cardContainer2 = $("<div>").addClass("card mb-3").css("max-width", "540px").attr("class","minicard");
//   const row2 = $("<div>").addClass("row g-0");
//   const colImage2 = $("<div>").addClass("col-md-4");
//   const cardImage2 = $("<img>").addClass("img-fluid rounded-start col-sm-6").attr("src",articles[index].urlToImage).attr("height", "auto");
//   colImage2.append(cardImage2);
//   const colCardBody2 = $("<div>").addClass("col-md-8");
//   const cardBody2 = $("<div>").addClass("card-body");
//   const cardTitle2 = $("<h6>").addClass("fashiontitle2").text("Fashion");
//   const titleWords = articles[index].title.split(" ").slice(0, 4).join(" ");
//   const cardText2 = $("<p>").addClass("card-text card-text-single-line").text(titleWords);
//   cardBody2.append(cardTitle2, cardText2,);
//   colCardBody2.append(cardBody2);
//   row2.append(colImage2, colCardBody2);
//   cardContainer2.append(row2);
//   $("#cardsection").append(cardContainer2);

// });

const randomIndices2 = getRandomIndices(articles.length, 1);
randomIndices2.forEach((index) => {
  const cardContainer2 = $("<div>").addClass("card mb-3 minicard");
  const row2 = $("<div>").addClass("row g-0");
  
  // Adjust the image column size for small screens
  const colImage2 = $("<div>").addClass("col-12 col-md-4 col-sm-6"); 
  
  const cardImage2 = $("<img>").addClass("img-fluid rounded-start").attr("src", articles[index].urlToImage).attr("height", "auto");
  colImage2.append(cardImage2);
  
  const colCardBody2 = $("<div>").addClass("col-12 col-md-8");
  const cardBody2 = $("<div>").addClass("card-body");
  
  const cardTitle2 = $("<h6>").addClass("fashiontitle2").text("Fashion");
  const titleWords = articles[index].title.split(" ").slice(0, 4).join(" ");
  const cardText2 = $("<p>").addClass("card-text card-text-single-line").text(titleWords);
  
  cardBody2.append(cardTitle2, cardText2);
  colCardBody2.append(cardBody2);
  
  row2.append(colImage2, colCardBody2);
  cardContainer2.append(row2);
  
  $("#cardsection").append(cardContainer2);
});




// Third Card
const randomIndices3=getRandomIndices(articles.length,1);
randomIndices3.forEach((index) => {
  const cardContainer3 = $("<div>").addClass("card mb-3").css("max-width", "540px").attr("class","minicard");
const row3 = $("<div>").addClass("row g-0");
const colImage3 = $("<div>").addClass("col-md-4");
const cardImage3 = $("<img>").addClass("img-fluid").attr("src",articles[index].urlToImage ).attr("alt", "Card Image");
colImage3.append(cardImage3);
const colCardBody3 = $("<div>").addClass("col-md-8");
const cardBody3 = $("<div>").addClass("card-body");
const cardTitle3 = $("<h6>").addClass("fashiontitle2").text("Fashion");
  const titleWords = articles[index].title.split(" ").slice(0, 4).join(" ");
  const cardText3 = $("<p>").addClass("card-text card-text-single-line").text(titleWords);

cardBody3.append(cardTitle3, cardText3);
colCardBody3.append(cardBody3);
row3.append(colImage3, colCardBody3);
cardContainer3.append(row3);
$("#cardsection").append(cardContainer3);
});




  
  
// $("#cardsection").append(div1);
});

//second container

$.get(apiUrl5, function (data) {

  // const div1 = $("<div>", { class: "col-4" });
  $("#secondmaincontainer").css("background-color", "#F0F0F0");
  $("#secondmaincontainer").addClass("pt-4");
  const fashionDiv = $("<div>").text("LIFESTYLE").addClass("miniHeader pb-3 bg-white").css({
    fontSize: "20px",
    borderTop: "2px solid yellow",
    padding: "10px",margin:"5px",
  });

  $("#cardsection2").css("background-color", "#F9F9F9");
  const articles=data.articles;
  const randomIndices=getRandomIndices(articles.length,1);
  randomIndices.forEach((index) => {
     // First Card
const cardContainer = $("<div>").addClass("card custom-card mb-1").css("width", "18.5 rem");
const cardImage = $("<img>").addClass("card-img-top","pt-2","ps-5").attr("src", articles[index].urlToImage ).attr("height","auto");
const cardBody = $("<div>").addClass("card-body");
const fashionTitle = $("<p>").addClass("fashiontitle").text("Fashion");

const cardTitle = $("<h6>").addClass("card-title card-title-single-line").text(articles[index].title.split(" ").slice(0, 4).join(" "));
const cardDate = $("<p>").addClass("cardDate").text(articles[index].publishedAt);

const cardText = $("<p>").addClass("card-text card-text-single-line text-center").text(articles[index].description.split(" ").slice(0, 8).join(" "));

cardBody.append(fashionTitle,cardTitle,cardDate, cardText);
cardContainer.append(cardImage,cardBody);
$("#cardsection2").append(fashionDiv);
$("#cardsection2").append(cardContainer);

  
  });
  

 
// Second Card
const randomIndices2=getRandomIndices(articles.length,1);
randomIndices2.forEach((index) => {
  const cardContainer2 = $("<div>").addClass("card mb-1").css("max-width", "540px").attr("class","minicard");
  const row2 = $("<div>").addClass("row g-0");
  const colImage2 = $("<div>").addClass("col-md-4");
  const cardImage2 = $("<img>").addClass("img-fluid rounded-start").attr("src",articles[index].urlToImage).attr("height", "auto");
  colImage2.append(cardImage2);
  const colCardBody2 = $("<div>").addClass("col-md-8");
  const cardBody2 = $("<div>").addClass("card-body");
  const cardTitle2 = $("<h6>").addClass("fashiontitle2").text("Lifestyle");
  const titleWords = articles[index].title.split(" ").slice(0, 4).join(" ");
  const cardText2 = $("<p>").addClass("card-text card-text-single-line").text(titleWords);
  cardBody2.append(cardTitle2, cardText2,);
  colCardBody2.append(cardBody2);
  row2.append(colImage2, colCardBody2);
  cardContainer2.append(row2);
  $("#cardsection2").append(cardContainer2);

});


// Third Card
const randomIndices3=getRandomIndices(articles.length,1);
randomIndices3.forEach((index) => {
  const cardContainer3 = $("<div>").addClass("card mb-3").css("max-width", "540px").attr("class","minicard");
const row3 = $("<div>").addClass("row g-0");
const colImage3 = $("<div>").addClass("col-md-4");
const cardImage3 = $("<img>").addClass("img-fluid").attr("src",articles[index].urlToImage ).attr("alt", "Card Image");
colImage3.append(cardImage3);
const colCardBody3 = $("<div>").addClass("col-md-8");
const cardBody3 = $("<div>").addClass("card-body");
const cardTitle3 = $("<h6>").addClass("fashiontitle2").text("Lifestyle");
  const titleWords = articles[index].title.split(" ").slice(0, 4).join(" ");
  const cardText3 = $("<p>").addClass("card-text card-text-single-line").text(titleWords);

cardBody3.append(cardTitle3, cardText3);
colCardBody3.append(cardBody3);
row3.append(colImage3, colCardBody3);
cardContainer3.append(row3);
$("#cardsection2").append(cardContainer3);
});




  
  

  
});



$.get(apiUrl5, function (data) {

 
  const fashionDiv = $("<div>").text("LIFESTYLE").addClass("text-center bg-white").css({
    fontSize: "10px",
    borderTop: "2px solid yellow",
    padding: "5px",margin:"2px",
  });

  $("#cardsection3").css("background-color", "#F9F9F9");
  const articles=data.articles;
  const randomIndices=getRandomIndices(articles.length,1);
  randomIndices.forEach((index) => {
    const cardContainer2 = $("<div>").addClass("card mb-3 minicard").css("max-width", "540px");
    const row2 = $("<div>").addClass("row g-0");
    const colImage2 = $("<div>").addClass("col-md-4");
    const cardImage2 = $("<img>").addClass("img-fluid rounded-start").attr("src",articles[index].urlToImage).attr("height", "auto");
    colImage2.append(cardImage2);
    const colCardBody2 = $("<div>").addClass("col-md-8");
    const cardBody2 = $("<div>").addClass("card-body");
    const cardTitle2 = $("<h6>").addClass("fashiontitle2").text("ENVIRONMENT");
    const titleWords = articles[index].title.split(" ").slice(0, 4).join(" ");
    const cardText3 = $("<p>").addClass("card-text card-text-single-line").text(titleWords);
    cardBody2.append(cardTitle2, cardText3,);
    colCardBody2.append(cardBody2);
    row2.append(colImage2, colCardBody2);
    cardContainer2.append(row2);
    $("#cardsection3").append(fashionDiv);

    $("#cardsection3").append(cardContainer2);
  

  
  });
  

 
// Second Card
const randomIndices2=getRandomIndices(articles.length,1);
randomIndices2.forEach((index) => {
  const cardContainer2 = $("<div>").addClass("card mb-1 minicard").css("max-width", "540px");
  const row2 = $("<div>").addClass("row g-0");
  const colImage2 = $("<div>").addClass("col-md-4");
  const cardImage2 = $("<img>").addClass("img-fluid rounded-start").attr("src",articles[index].urlToImage).attr("height", "180px");
  colImage2.append(cardImage2);
  const colCardBody2 = $("<div>").addClass("col-md-8");
  const cardBody2 = $("<div>").addClass("card-body");
  const cardTitle2 = $("<h6>").addClass("fashiontitle2").text("LIFESTYLE");
  const titleWords = articles[index].title.split(" ").slice(0, 4).join(" ");
    const cardText3 = $("<p>").addClass("card-text card-text-single-line").text(titleWords);
  cardBody2.append(cardTitle2, cardText3);
  colCardBody2.append(cardBody2);
  row2.append(colImage2, colCardBody2);
  cardContainer2.append(row2);
  $("#cardsection3").append(cardContainer2);

});


// Third Card
const randomIndices3=getRandomIndices(articles.length,1);
randomIndices3.forEach((index) => {
  const cardContainer3 = $("<div>").addClass("card mb-3 minicard").css("max-width", "540px");
const row3 = $("<div>").addClass("row g-0");
const colImage3 = $("<div>").addClass("col-md-4");
const cardImage3 = $("<img>").addClass("img-fluid").attr("src",articles[index].urlToImage ).attr("alt", "Card Image");
colImage3.append(cardImage3);
const colCardBody3 = $("<div>").addClass("col-md-8");
const cardBody3 = $("<div>").addClass("card-body");
const cardTitle3 = $("<h6>").addClass("fashiontitle2").text("LIFESTYLE");
const titleWords = articles[index].title.split(" ").slice(0, 4).join(" ");
const cardText3 = $("<p>").addClass("card-text card-text-single-line").text(titleWords);

cardBody3.append(cardTitle3, cardText3);
colCardBody3.append(cardBody3);
row3.append(colImage3, colCardBody3);
cardContainer3.append(row3);
$("#cardsection3").append(cardContainer3);
});






  
  

});

//fourth container
$.get(apiUrl3, function (data) {
   // const div1 = $("<div>", { class: "col-4" });
   $("#secondmaincontainer").css("background-color", "#F0F0F0");
   $("#secondmaincontainer").addClass("pt-4");
   const fashionDiv = $("<div>").text("FOOD").addClass("miniHeader pb-3 bg-white").css({
     fontSize: "20px",
     borderTop: "2px solid green",
     padding: "10px",margin:"5px",
   });
 
   $("#cardsection4").css("background-color", "#F9F9F9");
   const articles=data.articles;
   const randomIndices=getRandomIndices(articles.length,1);
   randomIndices.forEach((index) => {
      // First Card
 const cardContainer = $("<div>").addClass("card custom-card mb-1").css("width", "18.5 rem");
 const cardImage = $("<img>").addClass("card-img-top","pt-2","ps-5").attr("src", articles[index].urlToImage ).attr("height","1800px");
 const cardBody = $("<div>").addClass("card-body");
 const fashionTitle = $("<p>").addClass("fashiontitle").text("Food");
 
 const cardTitle = $("<h6>").addClass("card-title card-title-single-line").text(articles[index].title.split(" ").slice(0, 4).join(" "));
 const cardDate = $("<p>").addClass("cardDate").text(articles[index].publishedAt);
 
 const cardText = $("<p>").addClass("ard-text card-text-single-line maintext").text(articles[index].description.split(" ").slice(0, 8).join(" "));
 
 cardBody.append(fashionTitle,cardTitle,cardDate, cardText);
 cardContainer.append(cardImage,cardBody);
 $("#cardsection4").append(fashionDiv);
 $("#cardsection4").append(cardContainer);
 
   
   });
   
 
  
 // Second Card
 const randomIndices2=getRandomIndices(articles.length,1);
 randomIndices2.forEach((index) => {
   const cardContainer2 = $("<div>").addClass("card mb-1").css("max-width", "540px").attr("class","minicard");
   const row2 = $("<div>").addClass("row g-0");
   const colImage2 = $("<div>").addClass("col-md-4");
   const cardImage2 = $("<img>").addClass("img-fluid rounded-start").attr("src",articles[index].urlToImage).attr("height", "180px");
   colImage2.append(cardImage2);
   const colCardBody2 = $("<div>").addClass("col-md-8");
   const cardBody2 = $("<div>").addClass("card-body");
   const cardTitle2 = $("<h6>").addClass("fashiontitle2").text("Food");
   const titleWords = articles[index].title.split(" ").slice(0, 4).join(" ");
   const cardText2 = $("<p>").addClass("card-text card-text-single-line").text(titleWords);
   cardBody2.append(cardTitle2, cardText2,);
   colCardBody2.append(cardBody2);
   row2.append(colImage2, colCardBody2);
   cardContainer2.append(row2);
   $("#cardsection4").append(cardContainer2);
 
 });
 
 
 // Third Card
 const randomIndices3=getRandomIndices(articles.length,1);
 randomIndices3.forEach((index) => {
   const cardContainer3 = $("<div>").addClass("card mb-3").css("max-width", "540px").attr("class","minicard");
 const row3 = $("<div>").addClass("row g-0");
 const colImage3 = $("<div>").addClass("col-md-4");
 const cardImage3 = $("<img>").addClass("img-fluid").attr("src",articles[index].urlToImage ).attr("alt", "Card Image");
 colImage3.append(cardImage3);
 const colCardBody3 = $("<div>").addClass("col-md-8");
 const cardBody3 = $("<div>").addClass("card-body");
 const cardTitle3 = $("<h6>").addClass("fashiontitle2").text("Food");
   const titleWords = articles[index].title.split(" ").slice(0, 4).join(" ");
   const cardText3 = $("<p>").addClass("card-text card-text-single-line").text(titleWords);
 
 cardBody3.append(cardTitle3, cardText3);
 colCardBody3.append(cardBody3);
 row3.append(colImage3, colCardBody3);
 cardContainer3.append(row3);
 $("#cardsection4").append(cardContainer3);
 });
 
 

  




  
  
// $("#cardsection2").append(div1);
});


//fifth container
$.get(apiUrl2, function (data) {

  
  $("#secondmaincontainer").css("background-color", "#F0F0F0");
  $("#secondmaincontainer").addClass("pt-4");
  const fashionDiv = $("<div>").text("Environment").addClass("miniHeader pb-3 bg-white").css({
    fontSize: "20px",
    borderTop: "2px solid violet",
    padding: "10px",margin:"5px",
  });

  $("#cardsection5").css("background-color", "#F9F9F9");
  const articles=data.articles;
  const randomIndices=getRandomIndices(articles.length,1);
  randomIndices.forEach((index) => {
     // First Card
const cardContainer = $("<div>").addClass("card custom-card mb-1").css("width", "18.5 rem");
const cardImage = $("<img>").addClass("card-img-top","pt-2","ps-5").attr("src", articles[index].urlToImage ).attr("height","1800px");
const cardBody = $("<div>").addClass("card-body");
const fashionTitle = $("<p>").addClass("fashiontitle").text("Environment");

const cardTitle = $("<h6>").addClass("card-title card-title-single-line").text(articles[index].title.split(" ").slice(0, 4).join(" "));
const cardDate = $("<p>").addClass("cardDate").text(articles[index].publishedAt);

const cardText = $("<p>").addClass("card-text card-text-single-line maintext").text(articles[index].description.split(" ").slice(0, 8).join(" "));

cardBody.append(fashionTitle,cardTitle,cardDate, cardText);
cardContainer.append(cardImage,cardBody);
$("#cardsection5").append(fashionDiv);
$("#cardsection5").append(cardContainer);

  
  });
  

 
// Second Card
const randomIndices2=getRandomIndices(articles.length,1);
randomIndices2.forEach((index) => {
  const cardContainer2 = $("<div>").addClass("card mb-3").css("max-width", "540px").attr("class","minicard");
  const row2 = $("<div>").addClass("row g-0");
  const colImage2 = $("<div>").addClass("col-md-4");
  const cardImage2 = $("<img>").addClass("img-fluid rounded-start").attr("src",articles[index].urlToImage).attr("height", "180px");
  colImage2.append(cardImage2);
  const colCardBody2 = $("<div>").addClass("col-md-8");
  const cardBody2 = $("<div>").addClass("card-body");
  const cardTitle2 = $("<h6>").addClass("fashiontitle2").text("Environment");
  const titleWords = articles[index].title.split(" ").slice(0, 4).join(" ");
  const cardText2 = $("<p>").addClass("card-text card-text-single-line").text(titleWords);
  cardBody2.append(cardTitle2, cardText2,);
  colCardBody2.append(cardBody2);
  row2.append(colImage2, colCardBody2);
  cardContainer2.append(row2);
  $("#cardsection5").append(cardContainer2);

});


// Third Card
const randomIndices3=getRandomIndices(articles.length,1);
randomIndices3.forEach((index) => {
  const cardContainer3 = $("<div>").addClass("card mb-3").css("max-width", "540px").attr("class","minicard");
const row3 = $("<div>").addClass("row g-0");
const colImage3 = $("<div>").addClass("col-md-4");
const cardImage3 = $("<img>").addClass("img-fluid").attr("src",articles[index].urlToImage ).attr("alt", "Card Image");
colImage3.append(cardImage3);
const colCardBody3 = $("<div>").addClass("col-md-8");
const cardBody3 = $("<div>").addClass("card-body");
const cardTitle3 = $("<h6>").addClass("fashiontitle2").text("Environment");
  const titleWords = articles[index].title.split(" ").slice(0, 4).join(" ");
  const cardText3 = $("<p>").addClass("card-text card-text-single-line").text(titleWords);

cardBody3.append(cardTitle3, cardText3);
colCardBody3.append(cardBody3);
row3.append(colImage3, colCardBody3);
cardContainer3.append(row3);
$("#cardsection5").append(cardContainer3);
});



$.get(apiUrl5, function (data) {
  const fashionDiv = $("<div>").text("Latest Articles").addClass("text-center bg-white").css({
    fontSize: "10px",
    borderTop: "2px solid red",
    padding: "5px",
    margin: "2px",
  });

  $("#cardsection6").css("background-color", "#F9F9F9");
  const articles = data.articles;
  const randomIndices = getRandomIndices(articles.length, 10);
  $("#cardsection6").append(fashionDiv);

  const nameArray = ["Environment", "Lifestyle", "Technology", "Music", "Food", "Fashion", "Environment", "Lifestyle", "Technology", "Music", "Food", "Fashion"];

  randomIndices.forEach((index) => {
    const cardContainer2 = $("<div>").addClass("card mb-3 minicard").css("width", "auto");
    const row2 = $("<div>").addClass("row g-0");
    const colImage2 = $("<div>").addClass("col-md-4");
    const cardImage2 = $("<img>").addClass("img rounded-start").attr("src", articles[index].urlToImage).attr("height", "60px");
    colImage2.append(cardImage2);
    const colCardBody2 = $("<div>").addClass("col-md-8");
    const cardBody2 = $("<div>").addClass("card-body");
    let i = index % nameArray.length; 
    const cardTitle2 = $("<h6>").addClass("fashiontitle2").text(nameArray[i]);
    const titleWords = articles[index].title.split(" ").slice(0, 4).join(" ");
    const cardText3 = $("<p>").addClass("card-text card-text-single-line").text(titleWords);
    cardBody2.append(cardTitle2, cardText3);
    colCardBody2.append(cardBody2);
    row2.append(colImage2, colCardBody2);
    cardContainer2.append(row2);

    $("#cardsection6").append(cardContainer2);
  });
});

$.get(apiUrl5, function (data) {

 
  const fashionDiv = $("<div>").text("LIFESTYLE").addClass("text-center footercards").css({
    fontSize: "10px",
    borderTop: "2px solid yellow",
    padding: "5px",margin:"2px",
    color:"white",
  });

  $("#cardsection3").css("background-color", "#F9F9F9");
  const articles=data.articles;
  const randomIndices=getRandomIndices(articles.length,1);
  randomIndices.forEach((index) => {
    const cardContainer2 = $("<div>").addClass("card footercards mb-3 minicard").css("max-width", "540px");
    const row2 = $("<div>").addClass("row g-0");
    const colImage2 = $("<div>").addClass("col-md-4");
    const cardImage2 = $("<img>").addClass("img-fluid rounded-start").attr("src",articles[index].urlToImage).attr("height", "180px");
    colImage2.append(cardImage2);
    const colCardBody2 = $("<div>").addClass("col-md-8");
    const cardBody2 = $("<div>").addClass("card-body");
    
    const titleWords = articles[index].title.split(" ").slice(0, 8).join(" ");

    const cardText3 = $("<p>").addClass("card-text card-text-single-line").text(titleWords);
    cardText3.css("color", "white");
    cardBody2.append(cardText3,);
    colCardBody2.append(cardBody2);
    row2.append(colImage2, colCardBody2);
    cardContainer2.append(row2);
    $("#cardsection7").append(fashionDiv);

    $("#cardsection7").append(cardContainer2);
  

  
  });
  

 
// Second Card
const randomIndices2=getRandomIndices(articles.length,1);
randomIndices2.forEach((index) => {
  const cardContainer2 = $("<div>").addClass("card footercards mb-1 minicard").css("max-width", "540px");
  const row2 = $("<div>").addClass("row g-0");
  const colImage2 = $("<div>").addClass("col-md-4");
  const cardImage2 = $("<img>").addClass("img-fluid rounded-start").attr("src",articles[index].urlToImage).attr("height", "180px");
  colImage2.append(cardImage2);
  const colCardBody2 = $("<div>").addClass("col-md-8");
  const cardBody2 = $("<div>").addClass("card-body");
  
  const titleWords = articles[index].title.split(" ").slice(0, 4).join(" ");
    const cardText3 = $("<p>").addClass("card-text card-text-single-line").text(titleWords);
  cardBody2.append(cardText3);
  cardText3.css("color", "white");
  colCardBody2.append(cardBody2);
  row2.append(colImage2, colCardBody2);
  cardContainer2.append(row2);
  $("#cardsection7").append(cardContainer2);

});


// Third Card
const randomIndices3=getRandomIndices(articles.length,1);
randomIndices3.forEach((index) => {
  const cardContainer3 = $("<div>").addClass("card footercards mb-3 minicard").css("max-width", "540px");
const row3 = $("<div>").addClass("row g-0");
const colImage3 = $("<div>").addClass("col-md-4");
const cardImage3 = $("<img>").addClass("img-fluid").attr("src",articles[index].urlToImage ).attr("alt", "Card Image");
colImage3.append(cardImage3);
const colCardBody3 = $("<div>").addClass("col-md-8");
const cardBody3 = $("<div>").addClass("card-body");

const titleWords = articles[index].title.split(" ").slice(0, 4).join(" ");
const cardText3 = $("<p>").addClass("card-text card-text-single-line").text(titleWords);
cardText3.css("color", "white");

cardBody3.append( cardText3);
colCardBody3.append(cardBody3);
row3.append(colImage3, colCardBody3);
cardContainer3.append(row3);
$("#cardsection7").append(cardContainer3);
});






  
  

});
$.get(apiUrl5, function (data) {

 
  const fashionDiv = $("<div>").text("Talked About").addClass("text-center footercards").css({
    fontSize: "10px",
    borderTop: "2px solid yellow",
    padding: "5px",margin:"2px",
    color:"white",
  });

  $("#cardsection3").css("background-color", "#F9F9F9");
  const articles=data.articles;
  const randomIndices=getRandomIndices(articles.length,1);
  randomIndices.forEach((index) => {
    const cardContainer2 = $("<div>").addClass("card footercards mb-3 minicard").css("max-width", "540px");
    const row2 = $("<div>").addClass("row g-0");
    const colImage2 = $("<div>").addClass("col-md-4");
    const cardImage2 = $("<img>").addClass("img-fluid rounded-start").attr("src",articles[index].urlToImage).attr("height", "180px");
    colImage2.append(cardImage2);
    const colCardBody2 = $("<div>").addClass("col-md-8");
    const cardBody2 = $("<div>").addClass("card-body");
    
    const titleWords = articles[index].title.split(" ").slice(0, 8).join(" ");

    const cardText3 = $("<p>").addClass("card-text card-text-single-line").text(titleWords);
    cardText3.css("color", "white");
    cardBody2.append(cardText3,);
    colCardBody2.append(cardBody2);
    row2.append(colImage2, colCardBody2);
    cardContainer2.append(row2);
    $("#cardsection8").append(fashionDiv);

    $("#cardsection8").append(cardContainer2);
  

  
  });
  

 
// Second Card
const randomIndices2=getRandomIndices(articles.length,1);
randomIndices2.forEach((index) => {
  const cardContainer2 = $("<div>").addClass("card footercards mb-1 minicard").css("max-width", "540px");
  const row2 = $("<div>").addClass("row g-0");
  const colImage2 = $("<div>").addClass("col-md-4");
  const cardImage2 = $("<img>").addClass("img-fluid rounded-start").attr("src",articles[index].urlToImage).attr("height", "180px");
  colImage2.append(cardImage2);
  const colCardBody2 = $("<div>").addClass("col-md-8");
  const cardBody2 = $("<div>").addClass("card-body");
  
  const titleWords = articles[index].title.split(" ").slice(0, 4).join(" ");
    const cardText3 = $("<p>").addClass("card-text card-text-single-line").text(titleWords);
  cardBody2.append(cardText3);
  cardText3.css("color", "white");
  colCardBody2.append(cardBody2);
  row2.append(colImage2, colCardBody2);
  cardContainer2.append(row2);
  $("#cardsection8").append(cardContainer2);

});


// Third Card
const randomIndices3=getRandomIndices(articles.length,1);
randomIndices3.forEach((index) => {
  const cardContainer3 = $("<div>").addClass("card footercards mb-3 minicard").css("max-width", "540px");
const row3 = $("<div>").addClass("row g-0");
const colImage3 = $("<div>").addClass("col-md-4");
const cardImage3 = $("<img>").addClass("img-fluid").attr("src",articles[index].urlToImage ).attr("alt", "Card Image");
colImage3.append(cardImage3);
const colCardBody3 = $("<div>").addClass("col-md-8");
const cardBody3 = $("<div>").addClass("card-body");

const titleWords = articles[index].title.split(" ").slice(0, 4).join(" ");
const cardText3 = $("<p>").addClass("card-text card-text-single-line").text(titleWords);
cardText3.css("color", "white");

cardBody3.append( cardText3);
colCardBody3.append(cardBody3);
row3.append(colImage3, colCardBody3);
cardContainer3.append(row3);
$("#cardsection8").append(cardContainer3);
});






  
  

});






  
  
// $("#cardsection").append(div1);
});
function getRandomIndices(max, count) {
  const indices = [];
  while (indices.length < count) {
    const randomIndex = Math.floor(Math.random() * max);
    if (!indices.includes(randomIndex)) {
      indices.push(randomIndex);
    }
  }
  return indices;
}


