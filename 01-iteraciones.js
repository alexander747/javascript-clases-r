//para referenciar un dato de un arreglo se hace con la posicion  . ejemplo data[2]
let data = ["eder", 27, "M"];
console.log(data[1]);

//para referenciar un dato de una objeto se hace con . ejemplo objeto.id
let objeto = {
    "cedula": 12345,
    "id": 1,
    "dir": "ju#"
}
console.log(objeto.id);

let personas = [
    {
        "id": 1,
        "nombre": "eder",
        "edad": 27,
        "bloqueados": [{
            "id": 11,
            "nombre": "carlos",
            "edad": 32
        },
        {
            "id": 12,
            "nombre": "ximena",
            "edad": 32

        }]
    },
    {
        "id": 2,
        "nombre": "richard",
        "edad": 29,
        "bloqueados": [
            {
                "id": 13,
                "nombre": "alexa",
                "edad": 33
            },
            {
                "id": 14,
                "nombre": "hernan",
                "edad": 35
            }
        ]
    },
    {
        "id": 3,
        "nombre": "alex",
        "edad": 30,
        "bloqueados": [{
            "id": 15,
            "nombre": "ana",
            "edad": 35
        },
        {
            "id": 16,
            "nombre": "camilo",
            "edad": 18
        },
        {
            "id": 17,
            "nombre": "zule",
            "edad": 25
        }]
    }
];
console.log(personas[1].bloqueados[1].id);

//hacer con while y do while

console.clear();

//recorrido con for
// console.log(personas.length);
for (let i = 0; i < personas.length; i++) {
    console.log("La persona ", personas[i].nombre, "tiene bloqueados a");
    console.log(personas[i].bloqueados);
    for (let i = 0; i < personas[i].bloqueados.length; i++) {

    }
    console.log("----------------------------");
}
// console.log(personas[2].bloqueados[2]);




























