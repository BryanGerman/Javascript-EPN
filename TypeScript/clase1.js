var nombre = 'Bryan';
nombre = 'Germán';
var cedula = '1723355044';
var apellido = 'Lema';
apellido = 1;
var edad = 1;
var usuario = {
    nombre: 'Bryan',
    edad: 23
};
var Usuario = /** @class */ (function () {
    function Usuario(mNombre, mEdad) {
        this.nombre = mNombre;
        this.edad = mEdad;
    }
    Usuario.prototype.imprimirEnConsola = function (saludo) {
        return saludo + ", mi nombre es: " + this.nombre + ", y mi edad es: " + this.edad;
    };
    return Usuario;
}());
var bryan = new Usuario('Bryan', 23);
console.log(bryan.imprimirEnConsola('hola'));
var UsuarioDos = /** @class */ (function () {
    function UsuarioDos(nombre, _edad) {
        this.nombre = nombre;
        this._edad = _edad;
    }
    Object.defineProperty(UsuarioDos.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (nuevaEdad) {
            this._edad = nuevaEdad;
        },
        enumerable: true,
        configurable: true
    });
    return UsuarioDos;
}());
var german = new UsuarioDos('German', 23);
console.log('german', german);
;
var abcd = {
    nombre: 'abcd',
    edad: 18,
    esposa: new Usuario('dfghi', 20)
};
