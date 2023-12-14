let userToken = window.localStorage.getItem("token");

if (!userToken) {
  $("#addPost").addClass("d-none");
  $("#logout").addClass("d-none");
  $("#userCard").addClass("d-none");
  $("#navCategories").addClass("d-none");
} else {
  $("#logIn").addClass("d-none");
}

let post_container = $(".post_container");

function addPost() {
  window.location.assign("./post.html");
}

$("#logout").click(function () {
  localStorage.removeItem("token");
  window.location.replace("./login.html");
});

$("#logIn").click(function () {
  window.location.replace("./login.html");
});

$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "api/getUser.php",
    success: (response) => {
      let data = JSON.parse(response).data;
      $("#user").text(data.name);
    },
    error: (error) => {
      console.log(error);
    },
  });

  $.ajax({
    method: "GET",
    url: "api/post.php",
    success: async (response) => {
      let data = JSON.parse(response);
      for (let i of data.data) {
        let post = `
             <div class="card post_card border-0 p-3 p-lg-0 pb-5 col-lg-4 flex-grow-1 col-12 rounded-3 shadow-lg m-lg-3 mb-5" >
                <img src=${i.image_url.slice(
                  1
                )} class="card-img-top object-fit-cover rounded-3" alt="${
          i.name
        }">
                <p class="fw-medium fst-italic fs-5 m-2 mb-3 pb-0">${i.name}</p>
                <span class="fw-medium m-2 mt-0 pt-0 mb-3 p-0 col-6 text-center border border-2 border border-warning">${
                  i.category
                }</span>
                <p class="m-2 mt-1 mb-3">${i.description}</p>
                <p class="m-2 mt-1 mb-1">Posted By &nbsp;<span id="${
                  i.id
                }"></span></p>
                <p class="m-2 mt-1 mb-3">Posted At: ${i.created_at.slice(
                  0,
                  11
                )}</p>
              </div>
             `;

        post_container.append(post);
        let userToken = localStorage.getItem("token");
        await $.ajax({
          method: "GET",
          url: `api/getPostedUserDetails.php?user_id=${userToken}`,
          success: (response) => {
            let data = JSON.parse(response).data;
            $(`#${i.id}`).text(data.name);
          },
          error: (error) => {
            console.log(error);
          },
        });
      }
    },
    error: (response) => {},
  });
});
