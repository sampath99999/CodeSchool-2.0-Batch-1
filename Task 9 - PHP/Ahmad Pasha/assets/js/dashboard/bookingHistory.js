
let userId = localStorage.getItem('user_id');


$(document).ready(function () {

    $.ajax({
        method: 'GET',
        url: '../api/bookings.php?user_id='+ userId,
        success: function (response) {
            let data = JSON.parse(response).data;

            for (let i of data){
                  
                let ticket = `
                <div class="card col-12 col-lg-3 m-auto shadow-lg p-2">
                <p class="fw-bold">${i.mname}</p>
                <p class="fw-medium">Seat Numbers: ${i.seats}</p>
                <p class="fw-medium">Show Time: ${i.start_time}</p>
                <p class="fw-medium">Theater Name: ${i.cname}</p>
                <p class="fw-medium">Address: ${i.address}</p>
                </div>`
                $('#bookingHistory').append(ticket);

            }
          

        },
        error: function (response) {
            console.log(response);
        },
    })

})