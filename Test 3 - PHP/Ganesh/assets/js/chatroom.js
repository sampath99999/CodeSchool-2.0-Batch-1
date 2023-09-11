// function to load the users list.
function loadUsers(userList){

    $("#usersList").html('');

    for(let user in userList){

        let htmlTemplate = `
        <ul class="list-group rounded-0" >
            <li class="list-group-item text-white bg-dark bg-gradient">
                <div class="d-inline-flex align-items-center">
                    <img src="${(userList[user]['profile_image']).slice(1)}" class="profile-img" width="80" height="80"
                        style="border-radius: 100%; object-fit: cover;" alt="">
                    <h5 class="p-2">${userList[user]['name']}</h5>
                </div>
            </li>
        </ul>
        `;

        $("#usersList").append(htmlTemplate);

    }
    
}

// function to load user conatainer.
function loadActiveContainer(activeUser){

    let htmlTemplate = `
        <img src="${(activeUser[0]['profile_image']).slice(1)}" class="profile-img" width="80" height="80"
            style="border-radius: 100%; object-fit: cover;" alt="">
        <h3 class="p-2">${activeUser[0]['name']}</h3>
    `;

    $("#activeUserContainer").html(htmlTemplate);

}

// function to load the message.
function loadMessages(userMessages){
    
    $("#userChats").html('');
    
    for(let msg in userMessages){
        let htmlTemplate = `
        <div class="toast align-items-center fade show mb-2" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    ${userMessages[msg]["message"]}
                </div>
            </div>
        </div>
        `;

        $("#userChats").append(htmlTemplate);
    }

   

}

// on submitting a message.
function sendMessage(){

    event.preventDefault();

    let token = window.localStorage.getItem("token"); 
    let message = $("#userMessage").val();

    $.ajax({
        method: "GET",
        url: "./api/message.php",
        data: { 
            token,
            message
         },
        success: function (data) {
            console.log(data);
            let jsonData = JSON.parse(data);
            if(jsonData['status']){
                $("#userMessage").val('');
                loadMessages(jsonData['data']);
            } else {
                console.log("error");
            }
            
        },
        error: function (error) {
            console.log("Server Connection Error!" + error);
        }
    });

};


// Function to the user window.
function loadWindow(){

    $("#main-container").html('');
    
    let htmlTemplate = `
        <div class="row">
            <div class="col-4 p-0 bg-body-secondary overflow-y-auto" style="height: 650px;" id="usersList">
                
            </div>
            <div class="col-8 p-0 bg-body-tertiary position-relative">
                <div class="d-flex align-items-center bg-body-secondary p-2" id="activeUserContainer">
                    
                </div>
                <div id="broadCasting bg-white " style="height: 420px;">
                    <div class="container-fluid p-3 overflow-y-auto" style="height: 420px;" id="userChats">
                    
                    </div>    
                </div>
                <div class="col-10 m-2 mx-4 p-2 position-absolute bottom-0 ">
                    <div class="row form-feature">
                        <form id="sendMessage" onsubmit="sendMessage()">
                            <input type="text" class="form-control col-8 me-1" id="userMessage"
                                placeholder="Type Message" required>
                            <button class="btn btn-primary d-inline-flex col-auto ms-1" type="submit">Send</button>  
                        </form>  
                </div>
            </div>
        </div>
    `;

    $("#main-container").html(htmlTemplate);
}

// LOAD SERVER ON DOCUMENT READY.
$(document).ready(function () {
    
    let token = window.localStorage.getItem("token"); 

    $.ajax({
        method: "GET",
        url: "./api/chatroom.php",
        data: { token },
        success: function (data) {
            loadWindow();
            let jsonData = JSON.parse(data);
            if(jsonData['status']){
                loadUsers(jsonData['data'][0]);
                loadActiveContainer(jsonData['data'][1]);
                loadMessages(jsonData['data'][2]);
            } else {
                console.log("error");
            }
            
        },
        error: function (error) {
            console.log("Server Connection Error!" + error);
        }
    });

})