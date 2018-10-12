
var object = document.getElementById("caja");
var inicio = 0;
for (var a = 0; a < 10000000; a++) {
    var c = 200
}
//object.style="left: 100px"
object.style.left = inicio + "px"
for (var i = 0; i < 200; i++) {
    object.style.left = inicio + "px"
    inicio = inicio + 1;
    
}
//alert(inicio)