class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log('Hola, mi nombre es '+this.nombre + ', tengo ' + this.edad);
    }
}

class Programador extends Persona{
    constructor(nombre, edad, añosDeExperiencia){
        // Propiedades heredadas
        super(nombre, edad);

        // Propiedad de la clase actual
        this.añosDeExperiencia = añosDeExperiencia;
    }

    codear(){
        console.log("Soy " + this.nombre + ', Codeo desde hace ' + this.añosDeExperiencia+' años.');
    }
}

var martin = new Persona('Martin', 26);
var programador = new Programador('Maria', 22, 4);

// Pruebas
// martin.saludar();
// programador.codear();

// Prueba de la herencia
programador.saludar();