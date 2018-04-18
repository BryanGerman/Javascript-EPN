console.log('Hola mundo');

var nombre = 'Bryan';
var edad = 23;
var deudas = 123.345;
var fechaNacimiento = new Date();
var casado = false;
var vacio = null;
var indefinido = 1;
if (indefinido) {
    console.log('Verdadero');
}
else {
    console.log('Falso');
}
//Json
// Ctrl + A -> selecciona
// Ctrl + Alt + L -> formatear
var usuario = {
    "nombre": 'Bryan',
    apellido: 'Lema',
    edad: sumarDosNumeros(10,13),
    imprimir : sumarDosNumeros
    //imprimirEnConsola: function () {
    //     //    console.log(this.nombre + ' ' + this.apellido + ' ' + this.edad);
    //},
};
function imprimirEnConsola () {
         console.log(this.nombre + ' ' + this.apellido + ' ' + this.edad);
}
console.log(usuario);
//delete usuario.edad;
console.log(usuario);
usuario.cedula = '1718137159';
console.log(usuario)
usuario.mascota = {};
usuario.mascota.nombre = 'Black';
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof casado);
console.log(typeof fechaNacimiento);
console.log(typeof usuario);
function sumarDosNumeros(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}
var sumarDosNumerosVersionDos = function noImportaSiEscriboElNombre(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}
console.log(sumarDosNumerosVersionDos(1, 2));
var sumarDosNumerosVersionTres = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

console.log(sumarDosNumerosVersionTres(1, 2));
console.log(usuario);




var arreglo = [

    1,

    2,

    1.2,

    true,

    undefined,

    'Bryan',

    {

        nombre : 'Bryan'

    },

    sumarDosNumeros(1,2),

    sumarDosNumeros,

    [1,2,3,true]





];

console.log(arreglo)