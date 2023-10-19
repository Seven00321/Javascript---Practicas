// ================ BUCLE FOR ==================
var arr = [1,2,3,4,5]

for(var i=0; i<arr.length; i++) {
    console.log(arr[i]);
};

function encontrarLetraP(string){
    var letras = string.split('');

    for(var i=0; letras.length; i++){
        if(letras[i] === 'p') console.log('Si contiene a P...');
        
    }
    console.log('No contiene a P...');
}

//encontrarLetraP('JavaScript');
encontrarLetraP('Henry');


// WHILE
// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('Camilo');
}
console.log(arr);