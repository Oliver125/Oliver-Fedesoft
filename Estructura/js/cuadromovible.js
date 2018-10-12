
/*$(document).ready(inicio);
function inicio() {
    move(cero);
}*/
var object = document.getElementById("caja");
var cero = 0;
//object.style.left = cero + "px";

for (a = 0; a < 5; a++) {
    function move(cero) {
        for (var i = 0; i < 5; i++) {
            object.style.left = cero + "px"
        }
    }
    
    cero = cero + 50;
    //alert(a)
}
setTimeout("move(cero)", 1000);


//alert(inicio)