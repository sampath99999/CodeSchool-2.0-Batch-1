document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("shareButton").addEventListener("click", function () {
    var text = document.getElementById("text").value;
    if (text !== "") {
      var postHtml =
        '<div class="post border rounded p-2 my-2">' + text + "</div>";
      document
        .getElementById("postContainer")
        .insertAdjacentHTML("beforeend", postHtml);
      document.getElementById("text").value = "";
    }
  });
});

$("#shareButton").click(function () {
  var content = $("#text").val();
  $.ajax({
    url: "post.php",
    type: "POST",
    data: {
      action: "sharePost",
      content: content,
    },
    dataType: "json",
    success: function (response) {
      if (response.status) {
        $("#text").val("");
        $("#postContainer").prepend("<p>" + content + "</p>");
      } else {
        $("#postContainer").prepend("<p>Error: " + response.message + "</p>");
      }
    },
    error: function (error) {
      console.error("AJAX error:", error);
    },
  });
});
