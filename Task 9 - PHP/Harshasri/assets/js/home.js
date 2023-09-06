var userId = localStorage.getItem("user_id");

if (userId) {
  //like status
  function onClickLike(e) {
    console.log("clicked");
    console.log(e);

    var likeButton = document.getElementById(`${e}`);
    var likePostVal = likeButton.innerHTML.trim();
    console.log(`${likePostVal}`);
    const isLiked = likeButton.getAttribute("data-liked") === "true";
    console.log(isLiked);
    $.ajax({
      url: "api/likesStatus.php",
      type: "POST",
      data: {
        post_id: e,
        like_status: !isLiked,
        user_id: userId,
      },
      success: function (data) {
        console.log(data);
        data = JSON.parse(data);
        {
          if (data.status) {
            likeButton.val("DisLike");
            alert("Like Status updated!");
          } else {
            alert("Failed to update like statu!.");
          }
        }
      },

      error: function () {
        alert("Error in updating like.");
      },
    });
  }

  //comment adding
  function addComment(e) {
    console.log(e);
    var contentText = $("#commentText").val();
    console.log(contentText);

    $.post(
      "api/addComment.php",
      {
        post_id: e,
        user_id: userId,
        content: contentText,
      },

      function (result) {
        console.log(result);

        var data = JSON.parse(result);
        if (data.status) {
          $("#commentText").val("");
          alert(result["message"]);
        } else {
          alert(result["message"]);
        }
      }
    );
  }

  //delete post
  function deletePost(e) {
    console.log(e);
    const deletePostId = e;
    $.post(
      "api/deletePost.php",
      {
        id: deletePostId,
      },
      function (result) {
        console.log(result);
        var result = JSON.parse(result);
        alert(result["message"]);
      }
    );
  }

  $(document).ready(function () {
    $("#logout").click(function () {
      console.log("clicked");

      localStorage.removeItem("user_id");
      window.location.replace("./login.html");
    });

    //loading posts
    function loadPosts(data) {
      let post = "";
      console.log(data);
      for (let i of data) {
        post += `
                <div class="card p-2 myCard"">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="profile-container d-flex flex-row justify-content-between gap-2">
                    <i class="fa fa-facebook-official fa-2x text-primary"></i>
                    <h6 class="username ps-2">${i.username}</h6>
                  </div>
                  <ul>
                    <li id="deletePost" onclick="deletePost(${i.id})"><i class="fa fa-times"></i> </li>
                  </ul>
                </div>
                  <img class="post-img" src="${i.post_img}"/>
                  <p class="content ms-1">${i.content}</p>
                  <div class="likes-container d-flex justify-content-between">
                    <div>
                     <i class="fa fa-thumbs-up"></i>
                    <button class="btn btn-light" onclick="onClickLike(${i.id})" id="${i.id}" data-liked="false"> Like</button>
                    </div>
      
                    <button class="btn btn-light" data-bs-toggle="modal"
                    data-bs-target="#staticBackdropComment"
                    type="button"
                    id="${i.id}"><i class="far fa-comment-alt"></i> Comment</button>
                    <div
                      class="modal fade"
                      id="staticBackdropComment"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1
                              class="modal-title fs-5 text-black"
                              id="exampleModalLabel"
                            >
                              Create Comment
                            </h1>
                          </div>
                          <div class="modal-body text-black d-flex flex-column gap-3">
                            <div class="form-floating">
                              <input
                                type="text"
                                class="form-control border-1 border-dark text-black"
                                id="commentText"
                                name="commentText"
                                placeholder="Comment Text"
                              />
                              <label for="commentText">Comment Text</label>
                              <p class="text-danger commentNameErr m-0"></p>
                            </div>
                          
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary commentCloseBtn"
                              data-bs-dismiss="modal"
                              id="commentCloseBtn"
                            >
                              Close
                            </button>
                            <button onclick="addComment(${i.id})"
                              type="button"
                              class="btn btn-primary commentAddBtn"
                              id="commentAddBtn"
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-light"><i class="fa fa-share"></i> Share</button>
      
                  </div>
                      </div>`;
      }
      document.getElementById("postContainer").innerHTML = post;
    }

    $.ajax({
      method: "GET",
      url: "./api/displayPosts.php",
      success: (response) => {
        // console.log(response);
        data = JSON.parse(response);
        console.log(data);
        if (data.status) {
          loadPosts(data.data);
        } else {
          console.log("No posts are available");
        }
      },
      error: function () {
        alert("Error loading posts.");
      },
    });

    $("#home-button").click(function () {
      console.log("clicked");
      loadPosts(data.data);
    });

    //post creating

    $("#postAddBtn").click(function () {
      console.log("post button clicked");

      var content = $("#postName").val();
      var postImg = $("#postImg").val();
      console.log(postImg);

      var usrId = localStorage.getItem("user_id");

      $.ajax({
        url: "api/createPost.php",
        type: "POST",
        data: { content: content, user_id: usrId, post_img: postImg },
        success: function (result) {
          console.log(result);
          var data = JSON.parse(result);
          console.log(data);
          if (data["status"]) {
            $("#postName").val("");
            $("#postImg").val("");
            console.log(data["message"]);
            alert(data["message"]);
          } else {
            alert(data["message"]);
            console.log(data["message"]);
          }
        },
        error: function () {
          alert("Error posting the comment.");
        },
      });
    });
  });
} else {
  window.location.replace("./login.html");
}
