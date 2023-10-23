
// function tienenMismaLongitud(str1, str2) {
//     // Retorna true si los dos strings tienen la misma longitud.
//     // De lo contrario, retorna false.
//     // Tu código:
//     // Compara la longitud de las dos palabras
//     return str1.length === str2.length;
    
    
//  }

//  //console.log(tienenMismaLongitud("hi", "there"));

//  function esVocal(letra) {
//     // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
//     // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
//     // Si no es vocal, tambien debe retornar "Dato incorrecto".
//     // Tu código:
//     if(letra.length && 'aeiouAEIOU'.includes(letra)){
//         return "Es vocal";
        
//     }
//     else{
//         return "Dato incorrecto";
//     }
//  }
// // Ejemplos de uso:
// console.log(esVocal("a")); // Devolverá true
// console.log(esVocal("E")); // Devolverá true
// console.log(esVocal("b")); // Devolverá "Dato incorrecto"
// console.log(esVocal("aa")); // Devolverá "Dato incorrecto"

// function multuplicarArgumentos(){
//     var arr = arguments;

//     return arr;
// }


// var arreglos = multuplicarArgumentos();
// console.log(arreglos);

// var dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

// console.log(dias.indexOf)

// //if(dias.indexOf()+1===1 && dias.length-1===1)

// function mayorACien(array){
//     // const resultado = []
    
//     // for(var i=0; i<array.length;i++){
//     //     if(array[i]>100){
//     //         resultado.push(array[i]);
//     //     }
//     // }

//     // return resultado;

//     // Filtrar los valores mayores a 100
//   const resultado = array.filter(valor => valor > 100);

//   return resultado;
// }

// const arregloOriginal = [50, 120, 80, 150, 90, 110];
// const resultadoFiltrado = mayorACien(arregloOriginal);

// console.log(resultadoFiltrado); // Resultado: [120, 150, 110]

// Nro 27
// function devolverUltimoElemento(array){
//     const indice = array.length;
//     return array[indice-1];
// }

// const arregloOriginal = [50, 120, 80, 150, 90, 110];
// const resultadoFiltrado = devolverUltimoElemento(arregloOriginal);

// console.log(resultadoFiltrado); 

// Nro 28
// function dePalabrasAFrase(palabras) { 
//     const nuevaPalabra = palabras.join(' ');
 
//     return nuevaPalabra;
//  }

//  const palabras = ['Hello', 'World'];

//  console.log(dePalabrasAFrase(palabras));

// Nro 29
// function agregarNumeros(arrayOfNums) {
//     // El parámetro "arrayOfNums" debe ser un arreglo de números.
//     // Suma todos los elementos y retorna el resultado.
//     // Tu código:
//     var suma = 0;

//     for(let i=0;i<arrayOfNums.length;i++){
//         suma += arrayOfNums[i];
//     }
 
//     return suma;
//  }

// const arregloOriginal = [50, 120, 80, 150, 90, 110];
// const resultadoFiltrado = agregarNumeros(arregloOriginal);

// console.log(resultadoFiltrado);

// Nro 30
// function promedioResultadosTest(resultadosTest) {
//     // El parámetro "resultadosTest" es un arreglo de números.
//     // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
//     // Tu código:
 
//     sum = 0
 
//     for(i=0;i<resultadosTest.length;i++){
//        sum += resultadosTest[i];
//     }
 
//     return sum/resultadosTest.length;
//  }
 
// const arregloOriginal = [20, 20, 20, 20, 20, 20];
// const resultadoFiltrado = promedioResultadosTest(arregloOriginal);

// console.log(resultadoFiltrado);

// Nro 31
function numeroMasGrande(arrayOfNums) {
    // El parámetro "arrayOfNums" es un arreglo de números.
    // Retornar el número más grande.
    // Tu código:
 
    // var masGrande = arrayOfNums[0];

    // for(let i=0; i<arrayOfNums.length; i++){
        
    //     if(arrayOfNums[i] > masGrande){

    //         masGrande = arrayOfNums[i]
    //    }
       
    // }
    // return masGrande;

    // Otra alternativa
    //return Math.max(...arrayOfNums);
 }

// const arregloOriginal = [50, 120, 80, 150, 90, 110];
// const resultadoFiltrado = numeroMasGrande(arregloOriginal);

// console.log(resultadoFiltrado);

// Nro 32

// function multiplicarArgumentos() {
//     // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
//     // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
//     // [PISTA]: "arguments" es un arreglo.
//     // Tu código:
 
//     if(arguments.length === 0){
//        return 0;
//     } else if (arguments.length === 1) {
//         return arguments[0];
//     }
    
//     var valorFinal = 1;

//     for(let i=0; i<arguments.length; i++){
 
//        valorFinal *= arguments[i];
//     }
//     return valorFinal;
//  }

// // Ejemplos de uso:
// console.log(multiplicarArgumentos());          // Retorna 0
// console.log(multiplicarArgumentos(5));         // Retorna 5
// console.log(multiplicarArgumentos(2, 3, 4));   // Retorna 24
// console.log(multiplicarArgumentos(7, 10, 2));  // Retorna 140

// Nro 33
// function diaDeLaSemana(numeroDeDia) {
//     // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
//     // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
//     // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
//     // Tu código:
//     var dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
 
//     if(dias.indexOf('Domingo')+1===numeroDeDia || dias.indexOf('Sabado')+1===numeroDeDia){
//        return "Es fin de semana";
//     }
//     else return "Es dia laboral";
//  }

// console.log(diaDeLaSemana(1));
// console.log(diaDeLaSemana(2));
// console.log(diaDeLaSemana(7));

// Nro 34
// function empiezaConNueve(num) {
//     // Esta función recibe por parámetro un número.
//     // Debe retornar true si el entero inicia con 9 y false en otro caso.
//     // Tu código:
 
//     var numeroNueve = String(num).split("").map(num =>{
//         return Number(num);
//     });

//     if(numeroNueve[0]===9) return true;
//     else return false;

//     // return numeroNueve;

//     //Otra Forma
//     // const numero = num.toString();
//     // return numero.charAt(0) === '9';
// }

// console.log(empiezaConNueve(9));
// console.log(empiezaConNueve(5));
// console.log(empiezaConNueve(987));

// Nro 35
// function todosIguales(array) {
//     // Si todos los elementos del arreglo son iguales, retornar true.
//     // Caso contrario retornar false.
//     // Tu código:
 
//     var i=0
//     var primerNumero = array[0];

//     return array.every( num => {
//         return num == primerNumero;
//     })
//  }

// console.log(todosIguales([50, 120, 80, 150, 90, 110]));
// console.log(todosIguales([50, 50, 50, 50, 50, 50]));

// Nro 36
function mesesDelAño(array) {
    // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
    // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
    // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
    // Tu código:
 
   const mesesBuscados = ['Enero', 'Marzo', 'Noviembre'];
   const mesesEncontrados=[];

   for(let i=0; i< array.length; i++){
      //if(array[i]==='Enero' || array[i]==='Marzo' || array[i]==='Noviembre'){
      if (mesesBuscados.includes(array[i])) { 
         mesesEncontrados.push(array[i]);
      }
   }
 
   if(mesesEncontrados.length === 3){
      return mesesEncontrados;    
   }
   else return "No se encontraron los meses perdidos";
 }

const mesesDesordenados1 = ["Abril", "Marzo", "Diciembre", "Enero", "Febrero", "Noviembre"];
const mesesDesordenados2 = ["Abril", "Julio", "Diciembre", "Octubre", "Febrero"];
const mesesDesordenados3 = ["Abril", "Julio", "Diciembre", "Octubre", "Febrero", "Marzo"];
const mesesDesordenados4 = ['Marzo', 'Diciembre', 'Julio', 'Noviembre'];

// console.log(mesesDelAño(mesesDesordenados1));
// console.log(mesesDelAño(mesesDesordenados2));
// console.log(mesesDelAño(mesesDesordenados3));
// console.log(mesesDelAño(mesesDesordenados4));

// Nro 37
// function breakStatement(num) {
//    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
//    // Guardar cada nuevo valor en un arreglo y retornarlo.
//    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
//    // la ejecución y retornar el string: "Se interrumpió la ejecución".
//    // [PISTA]: utiliza el statement 'break'.
//    // Tu código:
//    var i = 0;
//    var suma = num;
//    var arreglo = [];

//    while(i < 10){
//       arreglo.push(num);
//       num = num + 2;

//       // if(suma === i){
//       //    return "Se interrumpió la ejecución"
//       //    break;
         
//       // }
//    }

//    return arreglo;
// }

// console.log(breakStatement(15));
// console.log(breakStatement(7));
// console.log(breakStatement(8));
// console.log(breakStatement(10));
