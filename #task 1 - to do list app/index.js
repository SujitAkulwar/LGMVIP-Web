var submit = document.getElementById('Addbutton');
var list = document.getElementById("list");
submit.addEventListener("click", add);

function add(){
    var text = document.querySelector('input').value;
    if(text == ""){
        alert('empty task');
    }
    else{
        console.log(text);
        const nav = document.createElement("nav");
        nav.innerHTML = `<div id="task-name">`+text+`</div>
        <button id="delete-task">X</button>`;
        list.append(nav);
    }
}