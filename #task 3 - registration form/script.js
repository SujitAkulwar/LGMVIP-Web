var gender = null;
var cpp="",python="",java="";
var c1=0,c2=0,c3=0;
function setcpp(){
    c1++;
    if(c1%2==1){
        cpp="c++";
    }else{
        cpp="";
    }
}

function setjava(){
    c2++;
    if(c2%2==1){
        java="java";
    }else{
        java="";
    }
}

function setpython(){
    c3++;
    if(c3%2==1){
        python="python";
    }else{
        python="";
    }
}

function setgender(x){
    gender = x;
}
function formValidation(){
    console.log("hello");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;
    var skill = cpp+" "+java+" "+python;
    console.log(name,email,website,gender,skill);
    
}

function addphoto(){

}