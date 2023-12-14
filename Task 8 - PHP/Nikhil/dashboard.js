$(document).ready(function() {
    $("#searchForm").submit(function(event) {
        event.preventDefault();
        fetchBusDetails();
    });
});

function fetchBusDetails() {
    let source = $("#source").val();
    let destination = $("#destination").val();
    let date = $("#date").val();
    

    $.ajax({
        method: "POST",
        url: "dashboard.php",
        data: {
            source,
            destination,
            date
        },
        success: function(data) {
            data = JSON.parse(data);
            if (data) {
                populateBusDetails(data);
            } else {
                console.log(data.error);
            }
        },
        error: function(error) {
            console.log(error);
        },
    });
}

function populateBusDetails(routes) {
    let table = `
        <table class="table text-center">
            <thead>
                <tr>
               
                <th>Bus_Id</th>
                    <th>Source</th>
                    <th>Destination</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Seats Available</th>
                </tr>
            </thead>
            <tbody>
    `;

    trips.forEach(function(route) {
        table += `
            <tr>
            
            <td>${route.bus_id}</td>
                <td>${route.source}</td>
                <td>${route.destination}</td>
                <td>${route.date}</td>
                <td>${route.time}</td>
                <td>${route.available_Seats}</td>
            </tr>
        `;
    });

    table += `
            </tbody>
        </table>
    `;

    $("#busDetails").html(table);
    $.each(routes, function(index, route) {
        // ... (populate other details)
        var button = `<button class="show-tickets-btn" data-bus-id="${route.bus_id}" data-trip-id="${route.id}">Show Tickets</button>`;
        var row = `
            <tr>
                <!-- ... (other cells) -->
                <td>${button}</td>
            </tr>
        `;
        $("#busDetails tbody").append(row);
    });

    $(".show-tickets-btn").click(function() {
        var busId = $(this).data("bus-id");
        var tripId = $(this).data("trip-id");
        fetchBookedTickets(busId, tripId);
    });
}
