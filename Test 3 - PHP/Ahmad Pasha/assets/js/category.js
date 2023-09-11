function home(e) {
  e.preventDefault();
  window.location.replace("./index.html");
}
function category(e) {
  e.preventDefault();
  window.location.replace("./categories.html");
}

$(document).ready(function () {
  $("#logout").click(function () {
    localStorage.removeItem("token");
    window.location.replace("./login.html");
  });

  $.ajax({
    method: "GET",
    url: "./api/categories.php",
    success: function (response) {
      let data = JSON.parse(response).data;
      for (let i of data) {
        let item = `
          <li>${i.name}</li>`;
        $(".available_categories").append(item);
      }
    },
    error: function (error) {
      console.log(error);
    },
  });

  let userToken = localStorage.getItem("token");
  if (!userToken) {
    window.location.replace("./login.html");
  }

  $("#uploadData").click(function () {
    let addCategory = $("#addCategory").val();

    $("#addCategoryErr").text("");

    if (addCategory.length < 3 || addCategory.length > 15) {
      $("#addCategoryErr").text(
        "Category name should be at least 3 charecters and most 15 charecters"
      );
      return false;
    }

    if (addCategory !== "") {
      $.ajax({
        method: "POST",
        url: "./api/category.php",
        data: {
          category: addCategory,
        },
        success: function (data) {
          return true;
        },
        error: function (error) {
          console.log(error);
          return false;
        },
      });

      window.location.reload();
    } else {
      console.log("empty fileds");
    }
  });
});
