var suma = 0;
// For
for (var i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
 }
 console.log('Variable suma: ', suma);

 // While
 while(suma < 3) {
    suma = suma + 1;
        console.log(suma);
}; 
    
// Do while
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"


// Continue
i = 0;
n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
}

// Break
function comprobarBreak(x) {
    var i = 0;
    while (i < 6) {
      if (i == 3) break;
      i++;
    }
    return i * x;
  }