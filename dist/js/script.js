let x= document.getElementById("myLinks");
function hamburger_menu() { 
    if (x.style.display==="block"){
        x.style.display = "hidden";
    }
    else {
        x.style.display = "block";
    }
}
function close() {
    x.style.display="hidden";
}