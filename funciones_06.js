// es un pedazo de codigo que ejecuta una logica en particular y que puede devolver algo o si no solo modifica el valor de algun dato, UNA FUNCION ES REUTILIZABLE
//para ejecutar una funcion solamente es con el nombre+()
//Una funcion puede recibir parametros opcional

//funcion que solo modifica estado no devuelve algo
// function mayorNumero(algo) {
//     let ganador = 0;
//     for (let i = 0; i < algo.length; i++) {
//         if (ganador < algo[i]) {
//             ganador = algo[i];
//         }
//     }
//     console.log("mayor es", ganador)
// }


//Función que devuelve algo
function mayorNumero(algo) {
    let ganador = 0;
    for (let i = 0; i < algo.length; i++) {
        if (ganador < algo[i]) {
            ganador = algo[i];
        }
    }
    return ganador;
}

let a = [3, 5, 22, 4, 7]
let b = [233, 35, 232, 34, 7]
let c = [3443, 35, 4, 5, 5, 6, 56, 56, 56565656]

let recibido = mayorNumero(a)
console.log(recibido)

let r = mayorNumero(b)
console.log(r)

let e = mayorNumero(c)
console.log(e)




