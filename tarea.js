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

        },
        {
            "id": 322,
            "nombre": "david",
            "edad": 14

        },
        {
            "id": 100,
            "nombre": "sandra",
            "edad": 33

        },
        {
            "id": 101,
            "nombre": "carla andrade",
            "edad": 33

        },
        {
            "id": 200,
            "nombre": "sandra",
            "edad": 87

        },
        {
            "id": 2010,
            "nombre": "carla",
            "edad": 16

        },
        {
            "id": 2350,
            "nombre": "jaime",
            "edad": 20

        }
        ]
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
            },
            {
                "id": 100,
                "nombre": "sandra",
                "edad": 33
            },
            {
                "id": 300,
                "nombre": "luna",
                "edad": 78
            },
            {
                "id": 2100,
                "nombre": "matias",
                "edad": 78
            },
            {
                "id": 2200,
                "nombre": "anita casanares",
                "edad": 87
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
        },
        {
            "id": 322,
            "nombre": "david",
            "edad": 32

        },
        {
            "id": 522,
            "nombre": "alex",
            "edad": 11
        },
        {
            "id": 622,
            "nombre": "heder",
            "edad": 17
        },
        {
            "id": 922,
            "nombre": "helena",
            "edad": 30
        }
        ]
    }
];

for (let i = 0; i < personas.length; i++) {
    //let mayor = 0;
    let IDmayor = personas[i].bloqueados;

    // console.log("el ID mayor de las personas bloqueadas por el usuario ", personas[i].nombre, "es el ==> ");


    //console.log(personas[i].bloqueados);
    for (let j = 0; j < IDmayor.length; j++) {
        //let max = Math.max(IDmayor);

        //console.log(max);

        //console.log(IDmayor[j]); 
        console.log(IDmayor[j].id, ">", 3)
        if (IDmayor[j].id > IDmayor) {
            IDmayor = IDmayor[j].id;
            //console.log(IDmayor[j]);
        }
        //console.log(IDmayor);


























        //if (IDmayor[j].id > 50) {
        //mayor = mayor;
    }


}

//TALLER
// 1) sacar nombre y edad por consola ejemplo: eder tiene 26 años
// 2) sacar el nombre y nombres de los que tiene bloqueados ejemplo: eder tiene bloqueados a jaime ana zule
// 3) sacar cuantas de las personas bloqueadas tiene la misma edad ejemplo 8 bloqueados tienen 33 años 3 personas tienen 22 años 5 personas tienen 22 años
// 4) sacar cuantas de las personas bloqueadas son menores de 18 años ejemplo 10 personas son menores de edad
// 5) cual de los id de las personas bloqueadas es el mayor
// 6) cual de los id de las personas bloqueadas es el menor

