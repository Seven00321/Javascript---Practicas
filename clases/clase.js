// Existen dos formas de declarar las clases

// 1ra forma:

// function Auto(puertas, color, marca, año, ruedas){
//     // Tiene propiedades
//     this.puertas = puertas;
//     this.color = color;
//     this.marca = marca;
//     this.año = año;
//     this.ruedas = ruedas;

//     // Tiene metodos
//     this.informacion = function () {
//         console.log('Este es un ' + this.marca + ' de color '+this.color);
//     }
// }

// var miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);

// // Pruebas
// // console.log(miPrimerAuto);
// // console.log(miPrimerAuto.marca);

// miPrimerAuto.informacion();


// 2da Forma
class Auto {
    // Tiene propiedades
    constructor(puertas, color, marca, año, ruedas) {
       this.puertas = puertas;
       this.color = color;
       this.marca = marca;
       this.año = año;
       this.ruedas = ruedas;
    }

    // Tiene metodos
    informacion () {
        console.log('Este es un ' + this.marca + ' de color '+this.color);
    }
 }


 let miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);

 // Pruebas
//  console.log(miSegundoAuto);
//  console.log(miSegundoAuto.marca);

miSegundoAuto.informacion();