// API KEY: 512083b305cb4d2aaa154f7c8f29a013
function callAndGetJSON(articleTopic){
    let apiURL = "https://newsapi.org/v2/everything?q="+articleTopic+"&from=2023-08-06&to=2023-08-06&sortBy=popularity&apiKey=512083b305cb4d2aaa154f7c8f29a013";
    $.getJSON(apiURL, function(data){
        var newsArticles = data.articles;
        console.log(newsArticles)
        return (newsArticles);
    });
}

function getHighlights(){
    let highlightTopics = ["Technology", "Environment", "Food"];
    for(let topic in highlightTopics){
        let newsHighlight = callAndGetJSON(highlightTopics[topic].toLowerCase());
        console.log("OK: "+ newsHighlight)
        $(".highlights").append(`
        <div class="col text-center text-white p-6 py-5" 
            style="background-image: url(); 
            background-size:cover; 
            background-color: grey; 
            background-blend-mode: multiply; 
            margin-right:1px;">
            <p class="d-inline p-1 px-2 rounded" style="background-color: #607ec7;">${highlightTopics[topic]}</p>
            <h5 class="mt-2"></h5>
            <p>1 week ago</p>
        </div>
        `);
    }
}

function loadNews(){
    getHighlights();
}

function loadHomePage(){
    loadNews();
    // $(".home-page").removeClass("d-none");
    // $("#home").addClass("active");
}
