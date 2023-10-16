
function tienenMismaLongitud(str1, str2) {
    // Retorna true si los dos strings tienen la misma longitud.
    // De lo contrario, retorna false.
    // Tu código:
    // Compara la longitud de las dos palabras
    return str1.length === str2.length;
    
    
 }

 //console.log(tienenMismaLongitud("hi", "there"));

 function esVocal(letra) {
    // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
    // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
    // Si no es vocal, tambien debe retornar "Dato incorrecto".
    // Tu código:
    if(letra.length && 'aeiouAEIOU'.includes(letra)){
        return "Es vocal";
        
    }
    else{
        return "Dato incorrecto";
    }
 }
// Ejemplos de uso:
console.log(esVocal("a")); // Devolverá true
console.log(esVocal("E")); // Devolverá true
console.log(esVocal("b")); // Devolverá "Dato incorrecto"
console.log(esVocal("aa")); // Devolverá "Dato incorrecto"
