function submit() {
    Name = $("#name").val();
    password = $("#password").val();
    if (Name && password) {
        $.ajax({
            method: "POST",
            url: "./../api/login.php",
            data: {
                Name,
                password,
            },
            success: function (data) {
                data = JSON.parse(data)
                if (data.status) {
                    window.location.replace("./../templates/Dashboard.html?Name=" + Name)
                }
                else{
                    $("#password-error").text("Name or password is incorrect")
                }
            },
            error: function (error) {
                console.log('error:' + error)
            }
        })
    }
    else{
        $("#password-error").text("Name or password is not entered !")
    }


}