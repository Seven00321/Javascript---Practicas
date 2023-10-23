// Ejemplo 1
// Array.prototype.mayoresQueTres = function(){
//     var arregloModificado = [];

//     for(let i = 0; i<this.length; i++){
//         if(this[i] > 3){
//             arregloModificado.push(false);
//         }
//         else {
//             arregloModificado.push(this[i]);
//         }
//     }

//     return arregloModificado;
// }

// var arreglo = [1,2,3,4,5,5,1,7];
// var nuevoArreglo = arreglo.mayoresQueTres();

// console.log(nuevoArreglo);


// Ejemplo 2
class Latinoamerica {
    constructor(){
        this.paises = [];
    }
}

Latinoamerica.prototype.agregarPais = function(pais){
    this.paises.push(pais);
};

var continente = new Latinoamerica();

continente.agregarPais('Mexico');
continente.agregarPais('Peru');
continente.agregarPais('Brazil');
continente.agregarPais('Chile');
console.log(continente.paises);