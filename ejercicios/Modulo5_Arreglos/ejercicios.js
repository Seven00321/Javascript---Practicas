// =====================================================================
// ======================= Ejercicio 1 =================================
// =====================================================================

// function devolverPrimerElemento(array) {
//     // Retornar el primer elemento del arreglo recibido por parámetro.
//     // Tu código:
//     return array[0];
//  }

// =====================================================================
// ======================= Ejercicio 2 =================================
// =====================================================================
 
//  function devolverUltimoElemento(array) {
//     // Retornar el último elemento del arreglo recibido por parámetro.
//     // Tu código:
//     const indice = array.length;
//     return array[indice-1];
//  }
 
// =====================================================================
// ======================= Ejercicio 3 =================================
// =====================================================================
//  function obtenerLargoDelArray(array) {
//     // Retornar la longitud del arreglo recibido por parámetro.
//     // Tu código:
//     return array.length;
//  }
 
// =====================================================================
// ======================= Ejercicio 4 =================================
// =====================================================================
//  function incrementarPorUno(array) {
//     // El arreglo recibido por parámetro contiene números.
//     // Retornar un arreglo con los elementos incrementados en +1.
//     // Tu código:
//     var masUno = array.map(num => {
//        return num + 1;
//     })
//     return masUno;
//  }

// =====================================================================
// ======================= Ejercicio 5 =================================
// =====================================================================
//  function agregarItemAlFinalDelArray(array, elemento) {
//     // Agrega el "elemento" al final del arreglo recibido.
//     // Retorna el arreglo.
//     // Tu código:
//     array.push(elemento);
 
//     return array;
//  }

// =====================================================================
// ======================= Ejercicio 6 =================================
// ===================================================================== 
//  function agregarItemAlComienzoDelArray(array, elemento) {
//     // Agrega el "elemento" al comienzo del arreglo recibido.
//     // Retorna el arreglo.
//     // Tu código:
//     array.unshift(elemento);
 
//     return array;
//  }

// =====================================================================
// ======================= Ejercicio 7 =================================
// ===================================================================== 
//  function dePalabrasAFrase(palabras) {
//     // El argumento "palabras" es un arreglo de strings.
//     // Retornar un string donde todas las palabras estén concatenadas
//     // con un espacio entre cada palabra.
//     // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
//     // Tu código:
 
//     const nuevaPalabra = palabras.join(' ');
  
//     return nuevaPalabra;
//  }
 

// =====================================================================
// ======================= Ejercicio 8 =================================
// =====================================================================
//  function arrayContiene(array, elemento) {
//     // Verifica si el elemento existe dentro del arreglo recibido.
//     // Retornar true si está, o false si no está.
//     // Tu código:
//     return array.includes(elemento);
//  }
 

// =====================================================================
// ======================= Ejercicio 9 =================================
// =====================================================================
//  function agregarNumeros(arrayOfNums) {
//     // El parámetro "arrayOfNums" debe ser un arreglo de números.
//     // Suma todos los elementos y retorna el resultado.
//     // Tu código:
 
//     var suma = 0;
 
//     for(let i=0;i<arrayOfNums.length;i++){
//        suma += arrayOfNums[i];
//     }
  
//      return suma;
//  }

// =====================================================================
// ======================= Ejercicio 10 ================================
// ===================================================================== 
//  function promedioResultadosTest(resultadosTest) {
//     // El parámetro "resultadosTest" es un arreglo de números.
//     // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
//     // Tu código:
 
//     sum = 0
  
//     for(i=0;i<resultadosTest.length;i++){
//        sum += resultadosTest[i];
//     }
  
//     return sum/resultadosTest.length;
//  }
 
// =====================================================================
// ======================= Ejercicio 11 ================================
// =====================================================================

//  function numeroMasGrande(arrayOfNums) {
//     // El parámetro "arrayOfNums" es un arreglo de números.
//     // Retornar el número más grande.
//     // Tu código:
 
//     var masGrande = arrayOfNums[0];
 
//     for(let i=0; i<arrayOfNums.length; i++){
         
//        if(arrayOfNums[i] > masGrande){
 
//           masGrande = arrayOfNums[i]
//        }
        
//     }
//     return masGrande;
    
//  }

// =====================================================================
// ======================= Ejercicio 12 ================================
// ===================================================================== 
//  function multiplicarArgumentos() {
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
 
// =====================================================================
// ======================= Ejercicio 13 ================================
// =====================================================================
//  function cuentoElementos(array) {
//     // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
//     // Tu código:
//     var cantidad=0
 
//     for(let i=0; i<array.length; i++){
//        if(array[i]>18) cantidad += 1;
//     }
 
//     return cantidad;
//  }
 
// =====================================================================
// ======================= Ejercicio 14 ================================
// =====================================================================
//  function diaDeLaSemana(numeroDeDia) {
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
 
// =====================================================================
// ======================= Ejercicio 15 ================================
// =====================================================================
//  function empiezaConNueve(num) {
//     // Esta función recibe por parámetro un número.
//     // Debe retornar true si el entero inicia con 9 y false en otro caso.
//     // Tu código:
 
//     var numeroNueve = String(num).split("").map(num =>{
//        return Number(num);
//     });
 
//    if(numeroNueve[0]===9) return true;
//    else return false;
//  }
 
// =====================================================================
// ======================= Ejercicio 16 ================================
// =====================================================================
//  function todosIguales(array) {
//     // Si todos los elementos del arreglo son iguales, retornar true.
//     // Caso contrario retornar false.
//     // Tu código:
 
//     var i=0
//     var primerNumero = array[0];
 
//     return array.every( num => {
//          return num == primerNumero;
//     })
//  }
 
// =====================================================================
// ======================= Ejercicio 17 ================================
// =====================================================================
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
  
    if(mesesEncontrados.length != 3){
       return 'No se encontraron los meses pedidos';
          
    }
    
    return mesesEncontrados; 
 }

 var ok = [
    'Marzo',
    'Diciembre',
    'Abril',
    'Junio',
    'Julio',
    'Noviembre',
    'Enero',
    'Mayo',
    'Febrero',
 ];
 var notOk = ['Marzo', 'Diciembre', 'Julio', 'Noviembre'];

 console.log(mesesDelAño(ok));
 console.log(mesesDelAño(notOk));
 
// =====================================================================
// ======================= Ejercicio 18 ================================
// =====================================================================
//  function tablaDelSeis() {
//     // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
//     // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
//     // Tu código:
 
//     var tablaSeis = []
//     var i = 0;
 
//     while(i<=10){
//        tablaSeis.push(6*i);
//        i+=1;
//     }
 
//     return tablaSeis;
//  }
 
// =====================================================================
// ======================= Ejercicio 19 ================================
// =====================================================================
//  function mayorACien(array) {
//     // La función recibe un arreglo con enteros entre 0 y 200.
//     // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
//     // Tu código:
 
//     const resultado = []
     
//      for(var i=0; i<array.length;i++){
//          if(array[i]>100){
//              resultado.push(array[i]);
//          }
//      }
 
//     return resultado;
// }

// =====================================================================
// ======================= Ejercicio 20 ================================
// =====================================================================
// function breakStatement(num) {
//     // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
//     // Guardar cada nuevo valor en un arreglo y retornarlo.
//     // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
//     // la ejecución y retornar el string: "Se interrumpió la ejecución".
//     // [PISTA]: utiliza el statement 'break'.
//     // Tu código:
//     var i = 0;
//      var arreglo = [];
  
//      while(i < 10){
//          num = num + 2;
//          arreglo.push(num);
//         if(num === i){
//            return "Se interrumpió la ejecución"
//            break;       
//         }
//         i +=1;
//      }
 
//     return arreglo;
//  }

// =====================================================================
// ======================= Ejercicio 21 ================================
// =====================================================================
//  function continueStatement(num) {
//     // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
//     // Guardar cada nuevo valor en un array y retornarlo.
//     // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
//     // se continua con la siguiente iteración.
//     // [PISTA]: utiliza el statement 'continue'.
//     // Tu código:
//     var i = 0;
//      var arreglo = [];
   
//      while(i < 10){
//        i +=1;
 
//        if(i!=5){
//           num = num + 2;
//           arreglo.push(num);
//        }
//        else{
//           //arreglo.pop();
//           //num = num - 2;
             
//           continue; 
//        }    
//     }
  
//     return arreglo;
//  }