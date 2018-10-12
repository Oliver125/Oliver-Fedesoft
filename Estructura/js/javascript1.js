/**otro tipo de comentario con multiples lineas
 * @argument salon 
 */
//tipo de datos
// Boolenano true/false
var verificado = false //var para declarar variables Booleano, number string, undefine, null
verificado = true
//negación
!verificado
// and &&
verificado && false
// or -->   ||
verificado || true;
//dato numerico
var edad = 15;
var peso = 70.67;
var numeroAleatorio = Math.random() * 100;
var potencia = Math.pow(10, 3);
var logaritmo = Math.log10(1000);
//math para trabajar operaciones con numeros
Math.random() * 100;
Math.pow(10, 3);
Math.log10(1000);
console.log(numeroAleatorio, potencia);
console.log(logaritmo);
alert("logaritmo de 1000 " + logaritmo);
console.log("no esta verificado?", !verificado);
var listaNombres = [
    "juan",
    "pablo",
    "david"
];
var listaEdades = [
    10, 15, 50, 30, 40
]
//Objetos: para hacer adecuaciones de datos: key --> value: key:value, key2:value2
var estudiantes = {
    nombre: "juan",
    edad: 50,
    casas: [
        {
            direccion: "calle 53",
            viveAqui: false
        },
        {
            direccion: "calle 23",
            viveAqui: false
        },
        {
            direccion: "calle 80",
            viveAqui: true
        }
    ]

}
for (var i = 0; i < 50; i++) {
    console.log(i);
}
for (var i = 0; i < 50; i = i + 2) {
    console.log(i);
}
for (var indice in listaNombres) {//in muestra el indice de los datos
    console.log(indice);
}
for (var valor of listaNombres) {//of muestra el valor de la posición
    console.log(valor)
}
//palabras palindromes, se lee igual de derecha a izquierda y lo contrario
//
var mifuncion = function (arg1, arg2, arg3) {
    return arg1 + arg2 + arg3;
}
console.log(mifuncion(1, 2, 4));
console.log(mifuncion("a", 2, 4));

