let colegio1 = {
    nombre: "SAN INES",
    direccion: "sur",
    tipo: "mixto",
    cantidad_estudiantes: 3,
    estudiantes: [
        {
            nombre: 'juan 1',
            edad: 18,
            graduado: false
        },
        {
            nombre: 'marta 2',
            edad: 28,
            graduado: true
        },
        {
            nombre: 'jose araujo',
            edad: 28,
            graduado: false
        }
    ]
};

let colegio2 = {
    nombre: "IEDR",
    direccion: "norte",
    tipo: "femenino",
    cantidad_estudiantes: 4,
    estudiantes: [
        {
            nombre: 'maria 1',
            edad: 18,
            graduado: false
        },
        {
            nombre: 'marta 2',
            edad: 28,
            graduado: false
        },
        {
            nombre: 'ana 3',
            edad: 28,
            graduado: false
        },
        {
            nombre: 'dayana',
            edad: 28,
            graduado: true
        }
    ]
};

let colegios = [
    colegio1,
    colegio2
];



// nombre, direccion, tipo, cantidad_estudiantes, estudiantes{nombre, edad, graduado}
for (let i = 0; i < colegios.length; i++) {
    let estudiantesActuales = colegios[i].estudiantes;
    for (let j = 0; j < estudiantesActuales.length; j++) {
        console.log(estudiantesActuales[j].nombre);
        // if (estudiantesActuales[j].nombre == 'dayana') {
        //     console.log("lo encontre es ");
        //     console.log(estudiantesActuales[j]);
        // }
    }
}



// i = 0
// 0 < 2 
// 1 < 2
// 2 < 2 

// arreglo 4 

// j = 0 
// 0 < 4
// 1 < 4
// 2 < 4
// 3 < 4  
// 4 < 4 false


















// ----------------------------FOR UNO
// for (let i = 0; i < colegios.length; i++) {
//     console.log(colegios[i]);
// }

// i = 0
// 0 < 5        true => colegios[0]
// 1 < 5        true => colegios[1]
// 2 < 5        true => colegios[2]
// 3 < 5        true => colegios[3]
// 4 < 5        true => colegios[4]
// 5 < 5        false

