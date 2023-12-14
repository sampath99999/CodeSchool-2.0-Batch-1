$(document).ready(function () {
  const visibleImages = 8;
  const totalImages = $("#food-images li").length;

  let startIndex = 0;
  function updateImages() {
    $("#food-images li").hide();
    for (let i = startIndex; i < startIndex + visibleImages; i++) {
      $("#food-images li:eq(" + i + ")").show();
    }
  }

  updateImages();

  $("#right-arrow").click(function () {
    if (startIndex + visibleImages < totalImages) {
      startIndex++;
      updateImages();
    }
  });

  $("#left-arrow").click(function () {
    if (startIndex > 0) {
      startIndex--;
      updateImages();
    }
  });
});

$(document).ready(function () {
  const visibleImages = 4;
  const totalImages = $("#restaurant-images li").length;
  let startIndex = 0;
  function updateImages() {
    $("#restaurant-images li").hide();
    for (let i = startIndex; i < startIndex + visibleImages; i++) {
      $("#restaurant-images li:eq(" + i + ")").show();
    }
  }
  updateImages();

  $("#right-arrows").click(function () {
    if (startIndex + visibleImages < totalImages) {
      startIndex++;
      updateImages();
    }
  });

  $("#left-arrows").click(function () {
    if (startIndex > 0) {
      startIndex--;
      updateImages();
    }
  });
});

// location
$(document).ready(function () {
  $("#dropdown-trigger").click(function () {
    $("#dropdown-menu").toggleClass("show");
  });

  $("#track-location").click(function () {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      $("#map").html(
        `<p>Latitude: ${latitude}</p><p>Longitude: ${longitude}</p>`
      );
    });
  });
});

// restaurant images

// $(document).ready(function () {
//     $('#payment-form').submit(function (event) {
//         event.preventDefault();
//         $.ajax({
//             type: 'POST',
//             url: 'payment.php',
//             data: $(this).serialize(),
//             success: function (response) {

//             }
//         });
//     });
// });
