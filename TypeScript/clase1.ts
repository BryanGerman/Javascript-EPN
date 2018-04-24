let  nombre: string = 'Bryan';
nombre = 'Germán';
const cedula = '1723355044';
let apellido: any = 'Lema';
apellido = 1;

let edad: number = 1;

let usuario = {
    nombre: 'Bryan',
    edad: 23

};

class Usuario{
    public nombre:string;
    private edad:number;
    constructor(mNombre: string, mEdad:number){
        this.nombre = mNombre;
        this.edad = mEdad;
    }
    imprimirEnConsola(saludo: string):string {
        return `${saludo}, mi nombre es: ${this.nombre}, y mi edad es: ${this.edad}`
    }
}

let bryan = new Usuario('Bryan',23);
console.log(bryan.imprimirEnConsola('hola'));

class UsuarioDos{
    constructor(public nombre:string, private _edad: number){
    }
    get edad(): number{
        return this._edad;
    }
    set edad(nuevaEdad: number){
        this._edad = nuevaEdad;
    }
}

 let german = new UsuarioDos('German',23);

console.log('german',german);

interface UsuarioTres{

    nombre:string;

    edad: number;
    esposa: Usuario;

};

let abcd: UsuarioTres = {

    nombre: 'abcd',

    edad: 18,
    esposa: new Usuario('dfghi',20)

};