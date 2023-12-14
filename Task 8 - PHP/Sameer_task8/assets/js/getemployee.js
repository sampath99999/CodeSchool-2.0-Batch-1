const api_url =
      "https://employeedetails.free.beeceptor.com/my/api/path";
 

async function getapi(url) {
   

    const response = await fetch(url);
   
    
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
getapi(api_url);
 

function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

function show(data) {
    let tab =
        `<tr>
          <th>Name</th>
          <th>Office</th>
          <th>Position</th>
          <th>Salary</th>
         </tr>`;
   
    
    for (let r of data.list) {
        tab += `<tr>
    <td>${r.name} </td>
    <td>${r.office}</td>
    <td>${r.position}</td>
    <td>${r.salary}</td>         
</tr>`;
    }
   
    document.getElementById("employees").innerHTML = tab;
}