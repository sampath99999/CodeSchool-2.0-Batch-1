
$(document).ready(function () {
$("#subscriber").click(function () {
    $(".dataCont").empty();
    $.get(
      "./api/getsubcriber.php",
      function (resData) {
        var resData = JSON.parse(resData);
        for (let each of resData.data) {
          <td>${each.total_members}</td>
          $(".tableData").append(` <tr>
          <td>${each.total_subscriber}</td>
        </tr>`);
      
        }
      }
    );
    $(
      ".dataCont"
    ).append(` <table class="table table-striped-columns table-hover table-bordered table-responsive">
        <thead>
          <tr>
            <th scope="col">Members Count</th>
            <th scope="col">Total Subscriber</th>
          </tr>
        </thead>
        <tbody class = "tableData">
        </tbody>
      </table>`);
  });


  $("#subscriberdetails").click(function () {
    $(".dataCont").empty();
    $.get(
      "./api/subscriberdetails.php",
      function (resData) {
        var resData = JSON.parse(resData);
        for (let each of resData.data) {
          $(".tableData").append(` <tr>
          <td>${each.name}</td>
          <td>${each.email}</td>
          <td>${each.phone}</td>
          <td>${each.status}</td>
        </tr>`);
        }
      }
    );
    $(
      ".dataCont"
    ).append(` <table class="table table-striped-columns table-hover table-bordered table-responsive">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody class = "tableData">
        </tbody>
      </table>`);
  });
});


function relocate_subscriber(){
  location.href = "subcriber.html";
}
