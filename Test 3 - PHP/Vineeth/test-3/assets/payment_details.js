$("document").ready(function(){
    $.ajax({
        method:"GET",
        url:"./../api/payment_details.php",
        success:function(data){
                result=`                
                <tr >
                <td  class="border">Id</td>
                <td class="border">Name</td>
                <td class="border">Email</td>
                <td class="border">Phone</td>
                <td class="border"> Account_number</td>
                <td class="border">Cvv</td>
                <td class="border">Holder_name</td>
                <td class="border">Amount</td>
            </tr>`
            file=JSON.parse(data)
            file.forEach(function(x){
                result+=`<tr>
                            <td  class="border">${x.id}</td>
                            <td class="border">${x.name}</td>
                            <td class="border">${x.email}</td>
                            <td class="border">${x.phone}</td>
                            <td class="border">${x.account_number}</td>
                            <td class="border">${x.cvv}</td>
                            <td class="border">${x.holder_name}</td>
                            <td class="border">${x.amount}</td>
                        </tr>`
            })
            $(".content").html(result)
        }
    })
})