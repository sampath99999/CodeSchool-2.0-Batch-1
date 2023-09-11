let userId = window.localStorage.getItem("token");

if (!userId) {
  window.location.replace("./login.html");
}

function home(e) {
  e.preventDefault();
  console.log("home");
  window.location.replace("./index.html");
}
function category(e) {
  e.preventDefault();
  window.location.replace("./categories.html");
}

$(document).ready(function () {
  $("#logout").click(function () {
    localStorage.removeItem("user_id");
    window.location.replace("./login.html");
  });

  $.ajax({
    method: "GET",
    url: "./api/categories.php",
    success: function (response) {
      let data = JSON.parse(response).data;
      for (let i of data) {
        let option = `
          <option value="${i.name}">${i.name}</option>`;
        $("#category").append(option);
      }
    },
    error: function (error) {
      console.log(error);
    },
  });

  $("#uploadData").click(async function() {
    let postName = $("#postName").val();
    let description = $("#description").val();
    let category = $("#category").val();
    let imageUrl = $("#image").val();

    $("#postNameErr").text("");
    $("#descriptionErr").text("");

    $("#categoryErr").text("");
    $("#imageErr").text("");

    if (postName.length < 3 || postName.length > 55) {
      $("#postNameErr").text(
        "Post name should be at least 3 charecters and most 55 charecters"
      );
      return false;
    }
    if (description.length < 5 || description.length > 500) {
      $("#descriptionErr").text(
        "description should be at least 5 characters and at most 500 characters"
      );
      return false;
    }

    if (category == "") {
      $("#categoryErr").text("Please Select Category");
      return false;
    }

    if (imageUrl == "") {
      $("#imageErr").text("Please Upload Image");
      return false;
    }

    let postData = new FormData();
    postData.append("post_name", $("#postName").val());
    postData.append("image_url", $("#image")[0].files[0]);
    postData.append("description", $("#description").val());
    postData.append("category", $("#category").val());

    if (
      postName !== "" &&
      description !== "" &&
      category !== "" &&
      imageUrl !== ""
    ) {
      await $.ajax({
        method: "POST",
        url: "./api/post.php",
        data: postData,
        contentType: false,
        processData: false,
        success: function (data) {
          return true;
        },
        error: function (error) {
          return false;
        },
      });

      window.location.reload();
    } else {
      console.log("empty fileds");
    }
  });
});
