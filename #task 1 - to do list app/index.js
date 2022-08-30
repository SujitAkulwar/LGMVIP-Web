
document.querySelector('#add').onclick = function(){
    if(document.querySelector('#new').value.length == 0){
        alert("Please Enter a Task")
    }else{
        document.querySelector('#task').innerHTML += `
        <div id="tasks">
            <div id="task-name">
                ${document.querySelector('#new').value}
            </div>
            <button id="delete">
                X
            </button>
        </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}