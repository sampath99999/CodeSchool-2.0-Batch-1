var userId = localStorage.getItem("user_id");
if (!userId) {
  window.location.replace("login.html");
}

function loadFriends(data) {
  let friend = "";
  console.log(data);
  for (let i of data) {
    friend += `
     
                <div class="card p-2" style="width: 18rem;">
                    <img class="card-img-top h-25 w-25"  src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${i.username}</h5>
                        <p class="card-text">35 Mutual Friends</p>
                        <a href="#" class="btn btn-primary">View More</a>
                    </div>
                    </div>
             
                    `;
  }
  document.getElementById("friendsContainer").innerHTML = friend;
}




$(document).ready(function () {
  $("#logout").click(function () {
    console.log("clicked");

    localStorage.removeItem("user_id");
    window.location.replace("./login.html");
  });

  $.ajax({
    method: "GET",
    url: "./api/friends.php?user_id=" + userId,
    success: (response) => {
      console.log(response);
      data = JSON.parse(response);
      console.log(data);
      if (data.status) {
        loadFriends(data.data);
      } else {
        console.log("No friends are available");
      }
    },
    error: function () {
      alert("Error loading friends.");
    },
  });


  $("#friendsButton").click(function () {
    console.log("clicked");
    loadFriends(data.data);

  });

});