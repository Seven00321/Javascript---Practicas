// var colores = ['amarrillo', 'azul']

// colores.push('rojo'); //Ingresa un elemento al final
// colores.unshift('verde'); // Ingresa elemento al inicio

// console.log(colores);

// colores.pop(); // Pare eliminar un elemento en la parte final
// colores.shift(); // Para eliminar un elemento en la parte inicial

// console.log(colores);

// ==================== INCLUDES =================================

// var pintores = ['Picasso', 'Velazquez', 'Van Gogh', 'Dali'];
// var includeDail = pintores.includes('Dail');

// console.log(includeDail);

// ===================== EVERY ================================

// var numeros = [6, 6, 8, 9];
// var cumpleNumeros = numeros.every(num => {
//     return num > 5;
// });

// console.log(cumpleNumeros);

// // ==================== SPLIT ==========================
// var palabra = 'Henri';
// var palabraSeparada = palabra.split('');  // Separa la palabra y la convierte en un arreglo

// palabraSeparada.pop();
// palabraSeparada.push("y");

// // ===================== JOIN ==============================
// var palabraArreglada = palabraSeparada.join('');

// console.log(palabraArreglada);


// ===================== FOREACH ==============================
var numeros = [1,2,3,4];
numeros.forEach(num => console.log(num));


// ===================== MAP ==============================
var masUno = numeros.map(num => {
    return num +1; 
})

console.log(masUno);