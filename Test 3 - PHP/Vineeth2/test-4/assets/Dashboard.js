$(document).ready(function () {
    var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get("Name");
    $("#user_name").text(name)
    $.ajax({
        method: "GET",
        url: "./../api/dashboard.php",
        success: function (data) {
            var count = 0
            try {
                result = ''
                data = JSON.parse(data)
                data.forEach(function (a) {
                    count = count + 1
                })
            }
            catch (e) {
                console.log(data)
            }
            $("#count").text(count)

        },
        error: function (error) {
            console.log('error:' + error)
        }
    })
})
function logout() {
    window.location.replace('./../templates/login.html')
}
function get_details() {
    var details = $("#show-details")
    $.ajax({
        method: "GET",
        url: "./../api/dashboard.php",
        success: function (data) {
            try {
                result = ''
                data = JSON.parse(data)
                console.log(data)
                data.forEach(function (a) {
                    result += `<div class="d-flex ">
                                  <div class="border p-2 col-lg-1">${a.id}</div>
                                  <div class="border p-2 col-lg-2"> ${a.name}</div>
                                  <div class="border p-2 col-lg-4"> ${a.email}</div>
                                  <div class="border p-2 col-lg-2"> ${a.phone_no}</div>
                                    <div class="border p-2 col-lg-3"> 
                                     <select>
                                        <option >${a.status}</option>
                                        <option onclick="status('DONE')">DONE</option>
                                        <option>HALF</option>
                                        <option>FULL</option>
                                     </select>
                                    </div>
                                </div>`
                })
                details.html(result)
            }
            catch (e) {
                console.log(data)
            }

        },
        error: function (error) {
            console.log('error:' + error)
        }
    })
}
