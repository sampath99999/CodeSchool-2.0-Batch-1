$(document).ready(function() {
    let products = $('.products');

    $.get('https://fakestoreapi.com/products', function(response) {
        let productsHTML = '';
        let randomIndexes = getRandomIndex(response.length, 3);
        for (let i = 0; i < randomIndexes.length; i++) {
            let index = randomIndexes[i];
            let title = response[index].title;
            let description = response[index].description;
            let image = response[index].image;
            let colClass = 'col-12 col-md-3'; 
            let truncatedDescription = description.slice(0, 125);
            let truncatedTitle = title.slice(0, 25);
             productsHTML += `
                <div class="${colClass}">
                    <div class="card product border-0 bg-white " style="width: 18rem;height:400px">
                        <img src="${image}" alt="${title}" class="image card-img-top product-img img-fluid m-auto mt-3 pt-3" style="height: 90px; width: 90px;">
                        <div class="card-body">
                            <h6 class="cardText mt-5 m-auto text-center">${truncatedTitle}</h6>
                            <p class="cardDescription mt-3 p-1">${truncatedDescription}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        products.html(`<div class="row justify-content-center">${productsHTML}</div>`);
    }).fail(function(error) {
        console.error('Error:', error);
    });
});

function getRandomIndex(max, count) {
    const indexes = new Set();
    while (indexes.size < count) {
        indexes.add(Math.floor(Math.random() * max));
    }
    return Array.from(indexes);
}
