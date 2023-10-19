// Nro1
// function crearGato(nombre, edad) {
//     // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
//     // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
//     // Además, agregar una propiedad con el nombre "meow".
//     // La propiedad "meow" será una función que retorne el string: "Meow!".
//     // Retornar el objeto.
//     // Tu código:
//     const gato = {
//         nombre: nombre,
//         edad: edad,
//         meow: () => {
//             return "Meow!";
//         }
//      }
//     return gato ;
//  }

// const miGato = crearGato("Motis", 3)
// console.log(miGato.nombre); // Imprime "Whiskers"
// console.log(miGato.edad);   // Imprime 3
// console.log(miGato.meow()); // Imprime "Meow!"

// Nro 2
// function nuevoUsuario(nombre, email, password) {
//     // Debes crear un nuevo objeto.
//     // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
//     // Retornar el objeto.
//     // Tu código:
//     const usuario = {
//         nombre: nombre,
//         email: email,
//         password: password
//     }

//     return usuario;
// }

// const miUsuario = nuevoUsuario("Richard", "example1@gmail.com", "123");
// console.log(miUsuario.nombre); // Imprime "Whiskers"
// console.log(miUsuario.email);   // Imprime 3
// console.log(miUsuario.password); // Imprime "Meow!"

// Nro 3
// function agregarPropiedad(objeto, propiedad) {
//     // Recibirás un objeto por parámetro.
//     // Debes agregarle una propiedad con el nombre recibido por parámetro.
//     // Esta propiedad será igual al valor `null`.
//     // Retornar el objeto.
//     // Tu código:
//     objeto[propiedad] = null;

//     return objeto;
//  }

// const usuario = {
//     nombre: "Richard",
//     email: "example1@gmail.com",
//     password: "123"
// }

// const propiedad = "esPracticante"

// const miUsuario = agregarPropiedad(usuario, propiedad);
// console.log(miUsuario.nombre);
// console.log(miUsuario.email);
// console.log(miUsuario[propiedad]);
// console.log(miUsuario);

// Nro 4
function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // [NOTA]: no necesitar retornar nada.
  // Tu código:
  return objeto[metodo]();

  // Otra alternativa
  //   // Verificar si el objeto tiene una propiedad con el nombre del método
  //   if (objeto.hasOwnProperty(nombreMetodo) && typeof objeto[nombreMetodo] === 'function') {
  //     objeto[nombreMetodo]();
  //   } else {
  //     console.log(`El objeto no tiene un método llamado "${nombreMetodo}".`);
  //   }
}

// const gato = {
//     nombre: "Motis",
//     edad: 3,
//     meow: () => {
//         return "Meooow!";
//     },
// };

// const propiedad = invocarMetodo(gato, "meow")
// console.log(propiedad)

// Nro 5
// function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
//     // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
//     // Debes multiplicar este número por 5 y retornar el resultado.
//     // Tu código:
//     const resultado = objetoMisterioso.numeroMisterioso * 5;

//     return resultado;

// }

// const numero = {
//     numeroMisterioso : 25
// }

// const resultado = multiplicarNumeroDesconocidoPorCinco(numero);

// console.log(resultado);

// Nro 6
// function eliminarPropiedad(objeto, propiedad) {
//     // El parámetro "propiedad" es una propiedad del objeto que recibes.
//     // Debes eliminarla del objeto y retornarlo finalmente.
//     // Tu código:
//     delete objeto[propiedad];

//     return objeto;
// }

// const numero = {
//     numeroMisterioso: 25,
//     numeroNuevo: 26
// }

// const resultado = eliminarPropiedad(numero, "numeroNuevo");

// console.log(resultado);

// Nro 7
// function tieneEmail(objetoUsuario) {
//   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
//   // En ese caso retornar true. Caso contrario, false.
//   // Tu código:

//   // Verificar si el objeto tiene una propiedad con el nombre del método
//   if (objetoUsuario.hasOwnProperty('email')) {
// 	return true;
//   } else {
//     return false;
//   }
// }

// const numero = {
//     numeroMisterioso: 25,
//     numeroNuevo: 26
// }
// const nombre = {
//     numeroMisterioso: 25,
//     email: "email@gmail.com"
// }

// console.log(tieneEmail(numero));
// console.log(tieneEmail(nombre));

// Nro 8
// function tienePropiedad(objeto, propiedad) {
// 	// Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
// 	// En ese caso retornar true. Caso contrario, false.
// 	// Tu código:

// 	for(let prop in objeto){
// 		if(prop === propiedad) return true;

// 	}

// 	return false;
// }

// const numero = {
//     numeroMisterioso: 25,
//     numeroNuevo: 26
// }
// const nombre = {
//     numeroMisterioso: 25,
//     email: "email@gmail.com"
// }

// console.log(tienePropiedad(numero, "numeroNuevo"));
// console.log(tienePropiedad(nombre, "nombre"));

// Nro 9
// function verificarPassword(objetoUsuario, password) {
// 	// Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
// 	// En ese caso retornar true. Caso contrario, false.
// 	// Tu código:

// 	for(let prop in objetoUsuario){
// 		if(prop === password) return true;
// 	}

// 	return false;

//  }

// const numero = {
//     numeroMisterioso: 25,
//     numeroNuevo: 26
// }
// const nombre = {
//     numeroMisterioso: 25,
//     password: "email@gmail.com"
// }

// console.log(verificarPassword(numero, "numeroNuevo"));
// console.log(verificarPassword(nombre, "nombre"));

// Nro 10
// function actualizarPassword(objetoUsuario, nuevaPassword) {
// 	// Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
// 	// La nueva contraseña la recibes por parámetro.
// 	// Retornar el objeto.
// 	// Tu código:

// 	for(let prop in objetoUsuario){
// 		if(prop === "password"){
// 			objetoUsuario["password"] = nuevaPassword;
// 		}
// 	}

// 	return objetoUsuario;
// }

// const numero = {
//     numeroMisterioso: 25,
//     password: 26
// }
// const nombre = {
//     numeroMisterioso: 25,
//     password: "email@gmail.com"
// }

// console.log(actualizarPassword(numero, "numeroNuevo"));
// console.log(actualizarPassword(nombre, "nombre"));



// Nro 11
// function agregarAmigo(objetoUsuario, nuevoAmigo) {
// 	// El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
// 	// Debes agregar el "nuevoAmigo" al final de este arreglo.
// 	// Retornar el objeto.
// 	// Tu código:
// 	const amigos = objetoUsuario.amigos;

// 	amigos.push(nuevoAmigo);

// 	objetoUsuario.amigos = amigos;

// 	return objetoUsuario;
//  }

// const Persona = {
//     numeroMisterioso: 25,
//     nombre: "Richard",
// 	amigos: ["Sandra", "Jean", "Maria"]
// }

// console.log(agregarAmigo(Persona, "Victor"));

// Nro 12

// function pasarUsuarioAPremium(objetoMuchosUsuarios) {
// 	// El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
// 	// Cada usuario tiene una propiedad llamada "esPremium".
// 	// Define esta propiedad de todos los usuarios como true.
// 	// Retornar el arreglo.
// 	// Tu código:

// 	for (let i = 0; i < objetoMuchosUsuarios.length; i++) {
// 		objetoMuchosUsuarios[i].esPremium = true;
// 	  }
// 	return objetoMuchosUsuarios;
	
// }

// // Ejemplo de uso
// const usuarios = [
// 	{ nombre: "Usuario1", esPremium: false },
// 	{ nombre: "Usuario2", esPremium: false },
// 	{ nombre: "Usuario3", esPremium: false }
// ];
// const usuarios2 = [
// 	{ nombre: "Usuario1", esPremium: true },
// 	{ nombre: "Usuario2", esPremium: true },
// 	{ nombre: "Usuario3", esPremium: true }
// ];
  
// const usuariosPremium = pasarUsuarioAPremium(usuarios);
// const usuariosPremium2 = pasarUsuarioAPremium(usuarios2);

// console.log(usuariosPremium);
// console.log(usuariosPremium2);

// Nro 13
// function sumarLikesDeUsuario(objetoUsuario) {
// 	// El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
// 	// Este arreglo contiene objetos (post).
// 	// Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
// 	// Debes sumar los likes de todos los post y retornar el resultado.
// 	// Tu código:
// 	const posts = objetoUsuario.posts;
// 	let sumaLikes = 0;

// 	for(let i=0; i<posts.length; i++){
// 		//sumaLikes = posts[post] + sumaLikes;
// 		//console.log(typeof posts[i].likes);
// 		//sumaLikes += posts[i].likes;
// 		if (posts[i].hasOwnProperty("likes") && typeof posts[i].likes === "number") {
// 			sumaLikes += posts[i].likes;
// 			//console.log(posts[i].likes);
// 		}
		

// 	}

// 	return sumaLikes;
//  }

// const usuario1 = { 
// 	nombre: "Usuario1", 
// 	posts: [{likes : 5}, {likes : 6}, {likes : 7}] 
// }
// const usuario2 = {
// 	nombre: "Usuario2", 
// 	posts: [{likes : 0}, {likes : 1}, {likes : 2}] 
// }
// const usuario3 = { 
// 	nombre: "Usuario3", 
// 	posts: [{likes : 2}, {likes : 3}, {likes : 4}]
// }


// console.log(sumarLikesDeUsuario(usuario1));
//console.log(sumarLikesDeUsuario(usuario2));
//console.log(sumarLikesDeUsuario(usuario3));

// Nro 14
function agregarMetodoCalculoDescuento(objetoProducto) {
	// Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
	// Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
	// El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
	// Luego debes restar del precio total del producto ese valor de descuento.
	// Retornar el precio final.
	// Ejemplo:
	// Precio ---> 10
	// PorcentajeDeDescuento ---> 0.2
	// Precio final ---> 8
	// Tu código:
	objetoProducto.calcularPrecioDescuento = () => {
		const precio  = objetoProducto.precio;
		const descuento = objetoProducto.porcentajeDescuento;

		return precio - precio*descuento;
	}

	return objetoProducto;
 }

 // Ejemplo de uso:
const producto = {
	precio: 10,
	porcentajeDescuento: 0.2
  };
  
  console.log(agregarMetodoCalculoDescuento(producto));