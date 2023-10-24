// =====================================================================
// ======================= Ejercicio 1 =================================
// =====================================================================
// function mayuscula(nombre) {
//     // Esta función recibe un nombre (string).
//     // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
//     // [Ejemplo]: "mario" ----> "Mario".
//     // Tu código:
//     // Verificar si el nombre no está vacío
//     if (nombre.length === 0) {
//         return nombre; // Devuelve el nombre sin cambios si está vacío
//     }

//     // Capitalizar la primera letra y concatenar el resto del nombre
//     return nombre.charAt(0).toUpperCase() + nombre.slice(1);
//  }

// =====================================================================
// ======================= Ejercicio 2 =================================
// =====================================================================
// function invocarCallback(cb) {
//     // Invoca/ejecuta el callback `cb`.
//     // [NOTA]: no debes reotrnar nada.
//     // Tu código:
//     cb();
// }

// =====================================================================
// ======================= Ejercicio 3 =================================
// =====================================================================
function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole como parámetros los números.
  // Tu código:

  return cb(num1, num2);
}

// =====================================================================
// ======================= Ejercicio 4 =================================
// =====================================================================
function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // [NOTA]: no debes reotrnar nada.
  // Tu código:
  var suma = 0;

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    suma += arrayOfNumbers[i];
  }

  cb(suma);
}

// =====================================================================
// ======================= Ejercicio 5 =================================
// =====================================================================
function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
  // Debes pasarle el elemento como argumento al callback.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    cb(array[i]);
  }
}

// =====================================================================
// ======================= Ejercicio 6 =================================
// =====================================================================
function map(array, cb) {
  // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  var nuevoArray = [];

  for (let i = 0; i < array.length; i++) {
    nuevoArray.push(cb(array[i]));
  }

  return nuevoArray;
}

// =====================================================================
// ======================= Ejercicio 7 =================================
// =====================================================================
function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:

  var nuevoArray = [];

  for (let i = 0; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].charAt(0) === "a") {
      nuevoArray.push(arrayOfStrings[i]);
    }
    //continue;
  }

  return nuevoArray;
}
