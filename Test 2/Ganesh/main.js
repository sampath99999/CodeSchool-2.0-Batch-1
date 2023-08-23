// API Endpoint: https://serpapi.com/search.json
// Query and Search Engine: ?q=Apple&engine=google_images&ijn=0

function getImagesList(query){
    event.preventDefault();
    $("#search-results").html(" ");
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://serpapi.com/search.json?q="+query+"&engine=google_images&ijn=0&api_key=1d3ac039ca292bab6cf1d6a622ac2c2e828dd5302bab88c20b9f1f63e0ece290",
        "method": "GET"
    }
    $.ajax(settings)
        .done(function (response) {
            let imageResults = response.images_results;
            for(let image in imageResults){
                $("#search-results").append(`
                    <div class="col">
                    <div class="card rounded-0">
                        <img src="${imageResults[image].original}" class="card-img-top text-center m-auto p-2" alt="...">       
                        <div class="card-footer">
                        <p class="title mb-1"><b>${imageResults[image].title}</b></p>
                        <p>${imageResults[image].source}</p>
                        </div>
                    </div>
                    </div>
                `);
            }
            
        })
        .fail(function (xhr, textStatus) {
            alert(xhr.responseText);
            alert(textStatus);
        });
}

function mediaFunction(listener) {
    if (listener.matches) { 
        $("#search-nav-options").addClass("d-none");     
    } else {
        $("#search-nav-options").removeClass("d-none");
        $("#sign-in").removeClass("d-none")
    }
}
  
var listener = window.matchMedia("(max-width: 540px)");
mediaFunction(listener);
listener.addListener(mediaFunction);
