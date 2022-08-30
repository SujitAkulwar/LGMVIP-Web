var submit = document.getElementById('add');
var task = document.getElementById("list");
submit.addEventListener("click", add);

function add(){
    var text = document.querySelector('input').value;
    if(text == null){
        alert('empty task');
    }
    else{
        console.log(text);
        task.innerHTML += 
    }
    
}