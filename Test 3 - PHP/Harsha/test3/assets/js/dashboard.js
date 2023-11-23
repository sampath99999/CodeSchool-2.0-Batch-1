var userId = localStorage.getItem("user_id");

if (!userId) {
  window.location.href = "./login.html";
} else {
  $(document).ready(function () {
    $("#logoutBtn").click(function () {
      localStorage.removeItem("user_id");
      window.location.replace("login.html");
    });

    let nameValidate;
    let emailValidate;
    let phoneValidate;
    $("#SubscriberAddBtn").click(function () {
      console.log("sub button clicked");
      let subName = $("#name").val();
      let email = $("#email").val();
      let phone = $("#phone").val();
      console.log(subName);
      console.log(email);
      console.log(phone);

      //----name------

      const alphabeticRegex = /^[A-Za-z]+$/;

      if (subName == "") {
        $("#nameErr").text("*Name should not be Empty!");
        nameValidate = false;
      } else if (subName.length < 2 || subName.length > 50) {
        $("#nameErr").text("*Name must be between 2 and 50 characters");
        nameValidate = false;
      } else if (
        subName !==
        subName.charAt(0).toUpperCase() + subName.slice(1).toLowerCase()
      ) {
        $("#nameErr").text("*First character should be Capital in Name!!");
        nameValidate = false;
      } else if (!alphabeticRegex.test(subName)) {
        $("#nameErr").text("*Name should contain only alphabetic characters");
        nameValidate = false;
      } else {
        $("#nameErr").text("");
        nameValidate = true;
      }

      //phone no

      if (phone == "") {
        $("#phoneErr").text("*PhoneNo should not be Empty!");
        phoneValidate = false;
      } else if (phone.length !== 10) {
        $("#phoneErr").text("*Phone number must be 10 digits!");
        phoneValidate = false;
      } else if (!/^[0-9]+$/.test(phone)) {
        $("#phoneErr").text("*Phone number must be Only in digits!");
        phoneNoValidate = false;
      } else {
        $("#phoneErr").text("");
        phoneValidate = true;
      }

      //email

      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (email == "") {
        $("#emailErr").text("*Email should not be Empty!");
        emailValidate = false;
      } else if (email.length > 50) {
        $("#emailErr").text("*Phone number must be 10 digits!");
        emailValidate = false;
      } else if (email.match(/@/g).length > 1) {
        $("#emailErr").text("*Email should contain only single @!");
        emailValidate = false;
      } else if (!emailRegex.test(email)) {
        $("#emailErr").text("*Invalid email format!");
        emailValidate = false;
      } else {
        $("#emailErr").text("");
        emailValidate = true;
      }

      if (nameValidate && emailValidate && phoneValidate) {
        console.log("success");
        $.ajax({
          url: "api/addSubscriber.php",
          type: "POST",
          data: {
            name: subName,
            email: email,
            phone: phone,
          },
          success: function (data) {
            console.log(data);
            data = JSON.parse(data);
            {
              if (data.status) {
                alert("Subscriber Added!");
              } else {
                alert("Unable to add Subscriber");
              }
            }
          },

          error: function () {
            alert("Error while adding subscriber");
          },
        });
      }
    });
  });
}
