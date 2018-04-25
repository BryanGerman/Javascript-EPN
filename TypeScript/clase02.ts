let arregloNumeroUno: number[] = [1, 2, 3, 4, 5];
let sumatoriaDeVectores = 0;
let resultadoForEach = arregloNumeroUno.forEach(
    (valorDelArreglo, indice, arreglo) => {
        sumatoriaDeVectores = valorDelArreglo + sumatoriaDeVectores;
        //console.log(valorDelArreglo);

        //console.log(indice);

        //.log(arreglo);
        //console.log(sumatoriaDeVectores);

    }
)

//console.log('Resultado ', resultadoForEach);

var resultadoSuma = arregloNumeroUno.reduce(
    (valorActualDeLaOperacion, valorDelArreglo) => {

        return valorActualDeLaOperacion -

            valorDelArreglo;


    },
    20
);

//console.log(resultadoSuma);


let arregloDeUsuarios = [
    {
        nombre: 'Bryan',
        edad: 23
    }
    ,
    {
        nombre: 'German',
        edad: 30
    },
    {
        nombre: 'Ana',
        edad: 14
    }
];

let arregloDeDeudasFamiliares = [
    140,
    314.23,
    50.94,

]

// El valor del arreglo de deudas familiares, multiplicado por la edad, dividido para cien.

let totalEdadDeLosUsuarios = arregloDeUsuarios.reduce(
    (total: number, usuario: UsuarioArreglo) => total + usuario.edad

    , 0
);

interface UsuarioArreglo {
    nombre: string;
    edad: number;
    casado? : boolean;
    deuda? : number;

}

const usuariosCasados = arregloDeUsuarios.map(
    (usuario: UsuarioArreglo) => {usuario.casado = false;
    return usuario;}

).map(
    (usuario: UsuarioArreglo) => {
        usuario.deuda = calcularDeuda(usuario.edad);
        return usuario;
    }


).filter(
    (usuario: UsuarioArreglo) => {
        return (usuario.deuda <= 310);
    }
).some((usuario:UsuarioArreglo) => {
    return usuario.edad >= 18;

});

function calcularDeuda(edad: number):number{
    return arregloDeDeudasFamiliares
        .reduce((totalDeuda, valorDeuda ) =>
            (totalDeuda + (valorDeuda *(edad / 100))));

}

console.log('usaurios Casados', usuariosCasados);
console.log(' arreglo Usuarios', arregloDeUsuarios);
