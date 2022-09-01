var submit = document.getElementById('add');
var list = document.getElementById("list");
submit.addEventListener("click", add);

function add(){
    var text = document.querySelector('input').value;
    if(text == ""){
        alert('empty task');
    }
    else{
        console.log(text);
        
        
        
    }
    
}