$("#logout").click(function () {
  localStorage.removeItem("user_id");
  localStorage.removeItem("user_type");
  window.location.replace("../../bookmyshow/login.html");
});

let userId = window.localStorage.getItem("user_id");
let userType = window.localStorage.getItem("user_type");

if (!userId) {
  window.location.replace("./login.html");
}
if (!userType) {
  window.location.replace("./index.html");
}

$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "./../api/cinemaHall.php",
    success: function (response) {
      let data = JSON.parse(response);

      let details = data.data;

      for (let i of details) {
        let theaterName = `
                <option value="${i.id}" classs="p-2 mb-4">${i.name} ${i.address}</option>`;
        $("#cinema_hall_list").append(theaterName);
      }
    },
    error: function (error) {},
  });

  $("#uploadData").click(function () {
    let movieName = $("#movieName").val();
    let description = $("#description").val();
    let duration = $("#duration").val();
    let language = $("#language").val();
    let releaseDate = $("#releaseDate").val();
    let genre = $("#genre").val();
    let imageUrl = $("#image").val();
    let cinemaHallId = $("#cinema_hall_list").val();

    $("#movieNameErr").text("");
    $("#descriptionErr").text("");
    $("#durationErr").text("");
    $("#languageErr").text("");
    $("#releaseDateErr").text("");
    $("#genreErr").text("");
    $("#cinemaHallListErr").text("");
    $("#imageErr").text("");

    if (movieName.length < 3 || movieName.length > 25) {
      $("#movieNameErr").text(
        "Movie name should be at least 3 charecters and most 25 charecters"
      );
      return false;
    }
    if (description.length < 5 || description.length > 105) {
      $("#descriptionErr").text(
        "description should be at least 5 characters and at most 505 characters"
      );
      return false;
    }

    if (duration == "") {
      $("#durationErr").text("duration is required..");
      return false;
    }
    if (language == "") {
      $("#languageErr").text("Please Select Language");
      return false;
    }
    if (releaseDate == "") {
      $("#releaseDateErr").text("Please Enter Release Date");
      return false;
    }
    if (genre == "") {
      $("#genreErr").text("Please Select Genre");
      return false;
    }

    if (cinemaHallId == "") {
      $("#cinemaHallListErr").text("Please Select Cinema Hall");
      return false;
    }
    if (imageUrl == "") {
      $("#imageErr").text("Please Select Genre");
      return false;
    }

    let productData = new FormData();
    productData.append("movie_name", $("#movieName").val());
    productData.append("image_url", $("#image")[0].files[0]);
    productData.append("description", $("#description").val());
    productData.append("duration", $("#duration").val());
    productData.append("language", $("#language").val());
    productData.append("releaseDate", $("#releaseDate").val());
    productData.append("genre", $("#genre").val());
    productData.append("cinemaHallId", $("#cinema_hall_list").val());

    if (
      movieName !== "" &&
      description !== "" &&
      duration !== "" &&
      language !== "" &&
      releaseDate !== "" &&
      genre !== "" &&
      imageUrl !== "" &&
      cinemaHallId !== ""
    ) {
      $.ajax({
        method: "POST",
        url: "../api/movies.php",
        data: productData,
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
