// Ejercicio 1
// function menorMayor(numeros) {
//     // La función llamada 'menorMayor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un
//     // arreglo que contenga el menor número del arreglo 'numeros' en la posición cero y el mayor número del arreglo
//     // 'numeros' en la posición 1.
//     // Ej:
//     // menorMayor([4, 6, 1, 7, 15]) debe retornar [1, 15]
//     // ya que 1 es el número más chico (menor) dentro del arreglo [4, 6, 1, 7, 15]
//     // y 15 es el número más grande (mayor) dentro del arreglo [4, 6, 1, 7, 15]
  
//     // Tu código aca:
  
//     // Nuevo array vacio
//     var Array = [];
//     var nroMenor = numeros[0];
//     var nroMayor = numeros[0];
  
//     //== OBTENEMOS EL MENOR Y MAYOR NUMERO
//     for(let i=0;i<numeros.length;i++){
//         if(nroMenor>numeros[i]){
//             nroMenor = numeros[i];
//         }
//         else {
//             nroMayor = numeros[i];
//         }
//     }
    
  
//     //== ASIGNAMOS EL VALOR A LAS VARIABLES
//     Array[0] = nroMenor;
//     Array[1] = nroMayor;
  
//     //== RETORNAMOS LA RESPUESTA
//     return Array;
//   }

// console.log(menorMayor([4, 6, 1, 7, 15]));

// Ejercicio 2
// function stringMasLarga(strings) {
//     // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
//     // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
//     // Ej:
//     // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
//     // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'
  
//     // Tu código aca
  
//     //== DEFINIMOS VARIABLES 
//     var string=strings[0];
  
//     //== CALCULAMOS EL STRING MAS LARGO
//     for(let i=0; i < strings.length; i++){
  
//       if(strings[i].length>string.length){
//         string = strings[i];
//       }
//     }
  
//     //== RETORNAMOS EL STRING
//     return string;
// }

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

//     //== DEFINIMOS UN OBJETO VACIO
//     var amigo = {};
  
//     //== USAMOS EL METODO FOREACH PARA RECORRER EL ARREGLO
//     amigos.forEach(Object => {
//       if(Object.nombre === nombre){
//         //= DE ENCONTRAR EL NOMBRE EN EL ARREGLO CON EL NOMBRE A BUSCAR, RETORNA EL OBJETO
//         amigo = Object;
//       }
//     });

//     return amigo;
    
//   }

// var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
// console.log(buscarAmigo(amigos, 'toni'));
  

// Ejercicio 4:
// function sumArray(array, n) {
//     // La función llamada 'sumArray' recibe como argumento un arreglo de números ordenados llamado 'array' y un número
//     // entero llamdo 'n' y debe devolver true si alguna combinación de dos números cualesquiera del arreglo sumados
//     // dan n, y devuelva false si ninguna combinación de dos números sumados da como resultado el número n.
  
//     // Ej:
//     // sumArray([2,5,7,10,11,15,20], 13)  debería devolver true ya que 2 + 11 = 13
//     // sumArray([2,5,7,10,11,15,20], 14)  debería devolver false ya que no es posible sumar 14 con dos números del arreglo
//     // Pista: Podes usar bucles/ciclos anidados
//     // Aclaración: No es válido sumar el mismo número dos veces
//     // Ej:
//     // sumArray([2,5,7,10,11,15,20], 4)  Si bien 2 + 2 = 4 no está permitido sumar el mismo número dos veces
//     // por lo tanto también debería devolver false en este caso
  
//     // Tu código aca:

//     //== Definimos primer valor
//     var suma = 0
//     var j = 0;
    
//     //== RECORREMOS EL ARREGLO
//     for(let j=0; j < array.length; j++){
//         for(let i=0;i<array.length;i++){
//             //== CONDICIONAMOS LA SUMA, DE SER IGUAL A "n" DEVUELVE TRUE, CASO CONTRARIO FALSE
//             if(array[j]+array[i]===n && array[j] != array[i]){
//                 return true;
//                 break;
//             }
//             continue;
//         }
//     }

//     // DE NO ENCONTRAR NINGUNA RESPUESTA DENDRO DEL BUCLE, RETORNAR FALSE
//     return false;

//     // //== RECORREMOS EL ARREGLO
//     // for(let i=0; i<array.length; i++){
//     //   //== NRO TOMA UN ELEMENTO PARA SUMARLO CON LOS DEMAS
//     //   let Nro = array[i];
  
//     //   //== CONDICIONAMOS LA SUMA, DE SER IGUAL A "n" DEVUELVE TRUE, CASO CONTRARIO FALSE
//     //   if(Nro+array[i+1]===n){
//     //     //== CONDICIONAMOS QUE LOS SUMANDOS NO SEAN IGUALES
//     //     if(!(Nro===array[i+1])){
//     //       return true;
//     //     }
//     //     else{
//     //       return false;
//     //     }
//     //   }
//     // }
//     // // DE NO ENCONTRAR NINGUNA RESPUESTA DENDRO DEL BUCLE, RETORNAR FALSE
//     // return false;
  
// };

// console.log(sumArray([2,5,7,10,11,15,20], 13));
// console.log(sumArray([2,5,7,10,11,15,20], 14));
// console.log(sumArray([2,5,7,10,11,15,20], 4));
  

// Ejercicio 5:
function pluck(array, propiedad) {
    // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
    // propiedad.
    // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
    // Ej:
    // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
    // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
    // Pista: es una buena oportunidad para usar map.
  
    // Tu código acá:  

    //== OBTENEMOS LOS ELMENTOS A PARTIR DE LA PROPIEDAD
    var nuevoObjeto = array.map(obj => obj[propiedad]);

    //== RETORNAMOS EL NUEO PRODUCTO
    return nuevoObjeto;
  
  }