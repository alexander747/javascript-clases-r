let a = [3, 5, 22, 4, 7]

let ganador = 0;
//  ganador= 0 > 3 != ganador=3 
// ganador = 3 > 5 != ganador=5
//ganador = 5 > 22 != ganador=22
//ganador = 22 > 4 
//ganador = 22 > 7 

for (let i = 0; i < a.length; i++) {
    if (ganador < a[i]) {
        ganador = a[i];
    }
}

console.log({ ganador })








