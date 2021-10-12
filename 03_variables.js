let nombre = 'alexander';  //tipo de dato string
console.log(nombre);

let edad = 50; //tipo de dato int (integer intero)
console.log(edad);


let bandera = false; //tipo de dato booleano; tiene dos posibles valores true false, true es 1, false es 0
console.log(bandera);

let dolar = 3.780; //tipo de dato decimal pero en javascript sigue siendo int (integer intero)
console.log(dolar);

let ganador; //tipo de dato undefined no se sabe aun que dato pueda tener
console.log(ganador);

let cantidad_arena = null; //tipo de dato null, es un objeto en donde le podemos agregar propiedades. Puede contener cualquier tipo de datos
console.log(cantidad_arena);

let apellidos = ['castillo', 'perez', 'andrade', 90, undefined, false, null]; //tipo de dato arreglo, podemos ingresar n datos, y se cuenta desde la posicion cero, sus elementos van separados por comas

console.log(apellidos);
console.log(apellidos[3]);

let persona = {  //tipo de dato objeto, tiene sus propiedades que son llamadas tambien identicadores o llave y por otra parte esta el valor
    cedula: 232342343,
    nombre: "juan",
    telefono: 3121232334
}
console.log(persona);
console.log(persona.telefono);
