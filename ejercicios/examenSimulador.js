// Ejercicio 1
// function soloNumeros(array) {
//     // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
//     // Debe devolver un arreglo con solo los enteros.
//     // Ej:
//     // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]
//     // Tu código aca:

//     var soloNumeros = [];

//     for(let i=0;i<array.length;i++){
//         if(array[i] === 0 || array[i] > 0){
//             soloNumeros.push(array[i]);
//         }
//     }

//     return soloNumeros;

//     //Otra forma
//     // function soloNumeros(arr) {
//     //     const numeros = [];

//     //     for (let i = 0; i < arr.length; i++) {
//     //       if (typeof arr[i] === 'number') {
//     //         numeros.push(arr[i]);
//     //       }
//     //     }

//     //     return numeros;
//   }

// console.log(soloNumeros([1, 'Henry', 2]));

// Ejercicio 2
// function stringMasLarga(strings) {
//     // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
//     // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
//     // Ej:
//     // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
//     // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'

//     // Tu código aca

//     var string = strings[0].length;
//     var indice = 0;

//     for(let i=0; i< strings.length; i++){
//         //console.log(strings[i].length);
//         if(string < strings[i].length){
//             string = strings[i].length;
//             indice = i;
//         }
//     }

//     return strings[indice];
// }

// //stringMasLarga(['Richrd', 'Henry', 'Oso'])
// //console.log(stringMasLarga(['Richrd', 'Henry', 'Oso', 'Mikhael']));
// console.log(stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']));
// console.log(stringMasLarga(['JavaScript', 'HTML', 'CSS']));

// Ejercicio 3
// function buscarAmigo(amigos, nombre) {
//     // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
//     // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
//     // recibe un string llamado 'nombre'.
//     // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
//     // Ej:
//     //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
//     //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };

//     // Tu código aca:
//     var amigo = {};

//     for(let i=0; i<amigos.length;i++){
//         if(amigos[i].nombre === nombre){
//             amigo = amigos[i];
//         }
//     }

//     return amigo;

// }

// var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
// console.log(buscarAmigo(amigos, 'toni'));

// Ejercicio 4

// function numeroSimetrico(num) {
//     // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
//     // Esta devuelve true o false dependiendo de si el número es simétrico o no.
//     // Un número es simétrico cuando es igual a su reverso.
//     // Ej:
//     // numeroSimetrico(11711) devuelve true

//     // Tu código:

//     const numeros = num.toString()

//     const numReverso = numeros.split('');
//     var numeroInvertido = [];
//     // Usa el método map para convertir los caracteres en números
//     //const arregloDeDigitos = numeros.map(digito => parseInt(digito, 10));

//     for(let i = numReverso.length-1; i>=0; i--){
//         numeroInvertido.push(numReverso[i]);
//     }

//     return numeros === numeroInvertido.join('');
// }

// console.log(numeroSimetrico(11711));
// console.log(numeroSimetrico(12511));

// Ejercicio 5
// function pluck(array, propiedad) {
//     // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
//     // propiedad.
//     // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
//     // Ej:
//     // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
//     // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
//     // Pista: es una buena oportunidad para usar map.

//     // Tu código acá:
//     var nuevoObjeto = array.map(obj => obj[propiedad]);

//     return nuevoObjeto;

// }

// var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }];

// console.log(pluck(productos, 'name'));

// Ejercicio 6, 7, 8

// function crearClasePersona() {
//   class Persona {
//     constructor(nombre, edad, hobbies, amigos) {
//       // El constructor de la clase Persona recibe nombre (string), edad (integer), hobbies (array de strings), amigos (array de objetos)
//       // Inicializar las propiedades de la persona con los valores recibidos como argumento

//       // Tu código aca:
//       this.nombre = nombre;
//       this.edad = edad;
//       this.hobbies = hobbies;
//       this.amigos = amigos;
//     }

//     addFriend(nombre, edad) {
//       // El método 'addFriend' recibe un string 'nombre' y un entero 'edad' y debe agregar un objeto:
//       // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
//       // No debe retornar nada.
//       // Tu código aca:
//       var obj = {}

//       obj.nombre = nombre;
//       obj.edad = edad;

//       this.amigos.push(obj);
//     }

//     addHobby(hobby) {
//       // El método 'addHobby' recibe un string 'hobby' y debe agregarlo al arreglo de hobbies de la persona.
//       // No debe retornar nada.
//       // Tu código aca:
//       this.hobbies.push(hobby);
//     }
//     getFriends() {
//       // El método 'getFriends' debe retornar un arreglo con sólo los nombres del arreglo de amigos
//       // de la persona.
//       // Ej:
//       // Suponiendo que la persona tiene estos amigos: [{nombre: 'martin', edad: 31},{nombre: 'toni', edad: 33}]
//       // persona.getFriends() debería devolver ['martin', 'toni']
//       // Tu código aca:
//       var misAmigos = this.amigos.map(obj => obj.nombre);

//       return misAmigos;

//     }

//     getHobbies() {
//       // El método 'getHobbies' debe retornar un arreglo con los hobbies de la persona
//       // Ej:
//       // persona.getHobbies() debe devolver ['correr', 'dormir', 'nadar']
//       // Tu código aca:
//     //   var misHobbies = this.hobbies.map(obj => {
//     //     obj.
//     //   })

//     return this.hobbies;
//     }

//     getPromedioEdad() {
//       // El método 'getPromedioEdad' debe retornar el promedio de edad de los amigos de una persona
//       // Ej:
//       // Si la persona tuviera estos amigos:
//       // {
//       //   amigos: [{
//       //     nombre: 'toni',
//       //     edad: 33,
//       //   }, {
//       //     nombre: 'Emi',
//       //     edad: 25
//       //   }]
//       // }
//       // persona.getPromedioEdad() debería devolver 29 ya que (33 + 25) / 2 = 29
//       // Tu código aca:
//         if(this.amigos.length === 0){
//             return 0;
//         }

//         var edades = this.amigos.map(amigo => amigo.edad);        
        
//         var promedioDeEdades = 0;

//         for(let i=0; i< edades.length;i++){
//             promedioDeEdades += edades[i];
//         }

//         return promedioDeEdades/edades.length;
//     }
//   }

//   return Persona;
// }


// const Persona = crearClasePersona();
// const persona = new Persona('toni', 23, ['futbol'], [{
//     nombre: 'toni',
//     edad: 33,
//   }, {
//     nombre: 'Emi',
//     edad: 25
//   }]);

// console.log(persona.getPromedioEdad());
// console.log(persona.getFriends());



// Ejercicio 9
Array.prototype.filtrar = function (funcion) {
    // Escribi una función filtrar en el prototipo de Arrays,
    // que recibe una funcion (callback) que devuelve true o false.
    // filtrar los elementos de ese arreglo en base al resultado de esa funcion
    // comparadora, devolver un nuevo arreglo con los elementos filtrados.
    // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
    // ej:
    // var productos = [{
    //   price: 100,
    //   name: 'tv'
    // }, {
    //   price: 50,
    //   name: 'phone'
    // }, {
    //   price: 30,
    //   name: 'lamp'
    // }]
    // productos.filtrar(function(p) {
    //   return p.price >= 50;
    // }) => [{price: 100, name:'tv'}]

    Array.prototype.filtrar = function(funcion) {
        // Crear el arreglo que se va a devolver
        let Nuevo_Array = [];
        // Recorrer elementos actuales
        this.forEach(item => {
            // Analizar el resultado de la función de retorno o "callback"
            if(funcion(item)) {
                // Si devuelve verdadero, agregar elemento
                Nuevo_Array.push(item);
            }
        });
        // Devolver arreglo filtrado
        return Nuevo_Array;
    };
    
};

var productos = [{
      price: 100,
      name: 'tv',
      edad: 25
    }, {
      price: 50,
      name: 'phone',
      edad: 22
    }, {
      price: 30,
      name: 'lamp',
      edad: 5
    }
]

var resultado1 = productos.filtrar(function(p) {
    return p => p.edad <= 22;
}) 
var resultado2 = productos.filtrar(function(p) {
    return p => p.edad > 50;
}) 


console.log(resultado1);
console.log(resultado2);
//=> [{price: 100, name:'tv'}]
