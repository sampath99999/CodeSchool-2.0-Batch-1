// Function to load the feed for user.
function loadFeed(jsonData){
    
    $("#search-results").addClass("row-cols-2 row-cols-md-5");
    $("#search-results").html('');
    // List of feed.
    for (let index in jsonData) {

        let saleprice = Math.round((jsonData[index]['price']) - ((jsonData[index]['price'] * (jsonData[index]['discount']/100))));
        
        let htmlTemplate = `
            <div class="col">
                <div class="card rounded-0 border-0">
                    <img src="${(jsonData[index]['product_image']).slice(1)}" class="card-img-top text-center m-auto p-2" alt="..." >       
                    <div class="card-footer border-0 bg-white bg-body-tertiary">
                        <p class="title mb-1 fs-5">${jsonData[index]['name']}</p>
                        <p class="text-danger original-price m-0 fs-5" >&#8377;${saleprice.toLocaleString('en-IN')}</p>
                        <p class="text-secondary m-0"><small> M.R.P &#8377;<s>${jsonData[index]['price'].toLocaleString('en-IN')}</s> (${jsonData[index]['discount']}% OFF)</small></p>
                    </div>
                </div>
            </div>
        `;

        $("#search-results").append(htmlTemplate);
    }

}

// Function to load the categories for user.
function loadCategories(jsonData){

    $("#categoryFilter").html('');
    $("#categoryFilter").html(`<option value="-1">All</option>`);

    // List of categories.
    for (let index in jsonData) {
        
        let htmlTemplate = `
            <option value="${jsonData[index]['id']}">${jsonData[index]['category']}</option>
        `;

        $("#categoryFilter").append(htmlTemplate);
    }

}

// 
function displayWarningMessage(message){
    $("#search-results").removeClass("row-cols-2 row-cols-md-5");
    $("#search-results").html('');
    $("#search-results").html(message);
}

// LOAD SERVER ON DOCUMENT READY.
$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "./api/index.php?type=getfeed",
        success: function (data) {
            // console.log(data)
            let jsonData = JSON.parse(data);
            loadCategories(jsonData['data'][1]);
            setTimeout(()=>{    
                loadFeed(jsonData['data'][0]);
            }, 1000);    
        },
        error: function (error) {
            console.log("Server Connection Error!" + error);
        }
    });
});

// On applying the filters and search. 
$("#applySearchFilter").on("submit", ()=>{
    event.preventDefault(); 
    let category =  $("#categoryFilter").val();
    let search = $("#searchInput").val();
    $.ajax({
        method: "POST",
        url: "./api/index.php",
        data: {
            "filter_option": category,
            "search_keyword": search
        },
        success: function (data) {
            // console.log(data)
            let jsonData = JSON.parse(data);
            if(jsonData['status']){
                setTimeout(()=>{
                    loadFeed(jsonData['data'][0]);
                }, 1000); 
            } else {
                displayWarningMessage(jsonData['message']);
            }
               
        },
        error: function (error) {
            console.log("Server Connection Error!" + error);
        }
    });
});