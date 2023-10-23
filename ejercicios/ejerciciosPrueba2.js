// Nro 37
// function breakStatement(num) {
//     // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
//     // Guardar cada nuevo valor en un arreglo y retornarlo.
//     // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
//     // la ejecución y retornar el string: "Se interrumpió la ejecución".
//     // [PISTA]: utiliza el statement 'break'.
//     // Tu código:
//     var i = 0;
//     var suma = num;
//     var arreglo = [];
 
//     while(i < 10){
//         num = num + 2;
//         arreglo.push(num);
//        if(suma === i){
//           return "Se interrumpió la ejecución"
//           break;       
//        }
//        i +=1;
//     }

//     return arreglo;
//  }
 


//  console.log(breakStatement(15));
//  console.log(breakStatement(7));
//  console.log(breakStatement(8));
//  console.log(breakStatement(10));
//  console.log(breakStatement(0));

 // Nro 38
//  function continueStatement(num) {
//     // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
//     // Guardar cada nuevo valor en un array y retornarlo.
//     // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
//     // se continua con la siguiente iteración.
//     // [PISTA]: utiliza el statement 'continue'.
//     // Tu código:
//     var i = 0;
//     var arreglo = [];
  
//     while(i < 10){
//         i +=1;

//         if(i!=5){
//             num = num + 2;
//             arreglo.push(num);
//         }
//         else{
//             //arreglo.pop();
//             //num = num - 2;
            
//             continue; 
//         }    
//     }
 
//     return arreglo;
// }

// console.log(continueStatement(15));
// console.log(continueStatement(7));
// console.log(continueStatement(8));
// console.log(continueStatement(10));
// console.log(continueStatement(-4));

// Nro 36
function mesesDelAño(array) {
    // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
    // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
    // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
    // Tu código:
 
   const mesesBuscados = ['Enero', 'Marzo', 'Noviembre'];
   const mesesEncontrados=[];

    for(let i=0; i< array.length; i++){
        //if(array[i]==='Enero' || array[i]==='Marzo' || array[i]==='Noviembre')
        if (mesesBuscados.includes(array[i])){
            mesesEncontrados.push(array[i]);
        }
    }
    if(mesesEncontrados.length != 3){
        return "No se encontraron los meses perdidos";
    }
    return mesesEncontrados;  
 }

console.log(mesesDelAño(['Marzo', 'Diciembre', 'Julio', 'Noviembre']));
