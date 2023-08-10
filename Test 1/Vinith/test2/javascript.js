function Add(){
        if(document.getElementById('add').value){
            document.getElementById('random').style.display='none';
            document.querySelector('#tasks').innerHTML += `
            <div class="task d-flex col-12">
                <div class="col-2">
                    <input class="mt-1" type="radio">
                </div>
                <span id="taskname" class="col-8">
                    ${document.querySelector('#add').value}
                </span>
                <div onclick="Deleted()" class="delete col-2">
                    <i class="bi bi-trash text-center"></i>
                </div>
            </div>
        `;
        }
        else{
            document.getElementById('random').innerHTML="please add the task"
        }

}
function Deleted(){
    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }
}
