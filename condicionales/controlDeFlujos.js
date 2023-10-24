function viajar(destino){
    if(destino==="Brasil"){
        console.log("Gire a la IZQUIERDA")
    }
    else if(destino === "Argentina"){
        console.log("Gire a la DERECHA")
    } else{
        console.log("Nos perdimos")
    }
}


viajar("Brasil");

viajar("Argentina")


function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } 
    console.log( false );
  }
  
  puedeManejar(17);