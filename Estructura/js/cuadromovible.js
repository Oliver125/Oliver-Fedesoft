var object = document.getElementById("caja");
var cero = 0;
var t = setInterval(move, 10);//llama a la función move cada 120 milisegundos

function move() {
    if (cero >= 300) {
        clearInterval(t);// detiene el cronomentro
    }
    else {
        cero = cero + 5;
        object.style.left = cero + "px"
    }
}
