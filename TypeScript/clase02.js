var arregloNumeroUno = [1, 2, 3, 4, 5];
var sumatoriaDeVectores = 0;
var resultadoForEach = arregloNumeroUno.forEach(function (valorDelArreglo, indice, arreglo) {
    sumatoriaDeVectores = valorDelArreglo + sumatoriaDeVectores;
    //console.log(valorDelArreglo);
    //console.log(indice);
    //.log(arreglo);
    //console.log(sumatoriaDeVectores);
});
//console.log('Resultado ', resultadoForEach);
var resultadoSuma = arregloNumeroUno.reduce(function (valorActualDeLaOperacion, valorDelArreglo) {
    return valorActualDeLaOperacion -
        valorDelArreglo;
}, 20);
//console.log(resultadoSuma);
var arregloDeUsuarios = [
    {
        nombre: 'Bryan',
        edad: 23
    },
    {
        nombre: 'German',
        edad: 30
    },
    {
        nombre: 'Ana',
        edad: 14
    }
];
var arregloDeDeudasFamiliares = [
    140,
    314.23,
    50.94,
];
// El valor del arreglo de deudas familiares, multiplicado por la edad, dividido para cien.
var totalEdadDeLosUsuarios = arregloDeUsuarios.reduce(function (total, usuario) { return total + usuario.edad; }, 0);
var usuariosCasados = arregloDeUsuarios.map(function (usuario) {
    usuario.casado = false;
    return usuario;
}).map(function (usuario) {
    usuario.deuda = calcularDeuda(usuario.edad);
    return usuario;
}).filter(function (usuario) {
    return (usuario.deuda <= 310);
}).some(function (usuario) {
    return usuario.edad >= 18;
});
function calcularDeuda(edad) {
    return arregloDeDeudasFamiliares
        .reduce(function (totalDeuda, valorDeuda) {
        return (totalDeuda + (valorDeuda * (edad / 100)));
    });
}
console.log('usaurios Casados', usuariosCasados);
console.log(' arreglo Usuarios', arregloDeUsuarios);
