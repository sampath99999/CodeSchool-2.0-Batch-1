var userId = localStorage.getItem("user_id");
if (!userId) {
  window.location.href = "./login.html";
} else {
  function loadUsersCount(data) {
    let user = "";
    console.log(data);
    for (let i of data) {
      user = `
                 <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">TOTAL SUBSCRIBERS</h5>
            <h1>${i.count}</h1>
         
            </div>
      </div>`;
    }
    document.getElementById("totalCount").innerHTML = user;
  }

  function getTable(data) {
    let row = "";
    for (let i of data) {
      row += `<tr>
           
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td>${i.email}</td>
            <td>${i.phone}</td>
          
           
        </tr>`;
    }
    document.getElementById("tableContent").innerHTML = row;
  }

  $(document).ready(function () {
    $("#logoutBtn").click(function () {
      localStorage.removeItem("user_id");
      window.location.replace("login.html");
    });

    $.ajax({
      method: "GET",
      url: "./api/getSubscribers.php",
      success: (response) => {
        console.log(response);
        data = JSON.parse(response);

        if (data.status) {
          loadUsersCount(data.data);
        } else {
          console.log("Subscriber count is zero");
        }
      },
      error: function (error) {
        console.log(error);
      },
    });
  });

  //all subscribers
  $.ajax({
    method: "GET",
    url: "./api/getAllSubscribers.php",
    success: (response) => {
      console.log(response);
      result = JSON.parse(response);
      console.log(result.data);
      getTable(result.data);
    },
    error: function (error) {
      console.log(error);
    },
  });
}
