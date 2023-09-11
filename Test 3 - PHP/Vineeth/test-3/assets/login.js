function submit(){
    Name=$("#name").val();
    password=$("#password").val();
    console.log(Name,password)
    $.ajax({
        method:"POST",
        url:"./../api/login.php",
        data:{
            Name,
            password,
        },
        success:function(data){
             data=JSON.parse(data)
             if(data.status){
                window.location.replace("./../templetes/payment_details.html")
             }
        }
    })

}