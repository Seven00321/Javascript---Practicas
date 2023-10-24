// =====================================================================
// ======================= Ejercicio 1 =================================
// =====================================================================
// function deObjetoAarray(objeto) {
//     // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
//     // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
//     // Estos elementos debe ser cada par clave:valor del objeto recibido.
//     // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
//     // Tu código:

//     const arregloDeArreglos = [];

//     for(const clave in objeto){
//         if(objeto.hasOwnProperty(clave)){
//             const valor = objeto[clave];
//             arregloDeArreglos.push([clave, valor]);
//         }
//     }

//     return arregloDeArreglos;

// }

// =====================================================================
// ======================= Ejercicio 2 =================================
// =====================================================================
function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  const conteo = {}; // Objeto para almacenar el conteo de letras

  // Recorremos el string
  for (let i = 0; i < string.length; i++) {
    const letra = string[i].toLowerCase(); // Convertimos la letra a minúscula
    if (/[a-z]/.test(letra)) {
      // Verificamos si es una letra del alfabeto
      if (conteo[letra]) {
        // Si la letra ya existe en el objeto, aumentamos el contador
        conteo[letra]++;
      } else {
        // Si no existe, la inicializamos en 1
        conteo[letra] = 1;
      }
    }
  }

  // Ordenamos las propiedades alfabéticamente
  const propiedadesOrdenadas = Object.keys(conteo).sort();
  const resultado = {};

  // Construimos el objeto final con propiedades ordenadas
  for (const letra of propiedadesOrdenadas) {
    resultado[letra] = conteo[letra];
  }

  return resultado;
}

//  function capToFront(string) {
//     // Recibes un string con algunas letras en mayúscula y otras en minúscula.
//     // Debes enviar todas las letras en mayúscula al comienzo del string.
//     // Retornar el string.
//     // [EJEMPLO]: soyHENRY ---> HENRYsoy
//     // Tu código:
//  }

//  function asAmirror(frase) {
//     // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
//     // La diferencia es que cada palabra estará escrita al inverso.
//     // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
//     // Tu código:
//  }

//  function capicua(numero) {
//     // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
//     // Caso contrario: "No es capicua".
//     // Tu código:
//  }

//  function deleteAbc(string) {
//     // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
//     // Retorna el string sin estas letras.
//     // Tu código:
//  }

//  function sortArray(arrayOfStrings) {
//     // Recibes un arreglo de strings.
//     // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
//     // de la longitud de cada string.
//     // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
//     // Tu código:
//  }

//  function buscoInterseccion(array1, array2) {
//     // Recibes dos arreglos de números.
//     // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
//     // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
//     // Si no tienen elementos en común, retornar un arreglo vacío.
//     // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
//     // Tu código:
//  }
