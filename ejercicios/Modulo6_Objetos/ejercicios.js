// =====================================================================
// ======================= Ejercicio 1 =================================
// =====================================================================
// function crearGato(nombre, edad) {
//     // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
//     // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
//     // Además, agregar una propiedad con el nombre "meow".
//     // La propiedad "meow" será una función que retorne el string: "Meow!".
//     // Retornar el objeto.
//     // Tu código:
//     const gato = {
//        nombre: nombre,
//        edad: edad,
//        meow: () => {
//            return "Meow!";
//        }
//     }
//    return gato ;
//  }

// =====================================================================
// ======================= Ejercicio 2 =================================
// =====================================================================
//  function nuevoUsuario(nombre, email, password) {
//     // Debes crear un nuevo objeto.
//     // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
//     // Retornar el objeto.
//     // Tu código:
//     const usuario = {
//        nombre: nombre,
//        email: email,
//        password: password
//    }

//    return usuario;
//  }

// =====================================================================
// ======================= Ejercicio 3 =================================
// =====================================================================
//  function agregarPropiedad(objeto, propiedad) {
//     // Recibirás un objeto por parámetro.
//     // Debes agregarle una propiedad con el nombre recibido por parámetro.
//     // Esta propiedad será igual al valor `null`.
//     // Retornar el objeto.
//     // Tu código:
//     objeto[propiedad] = null;

//     return objeto;
//  }

// =====================================================================
// ======================= Ejercicio 4 =================================
// =====================================================================
//  function invocarMetodo(objeto, metodo) {
//     // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
//     // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
//     // [NOTA]: no necesitar retornar nada.
//     // Tu código:
//     return objeto[metodo]();
//  }

// =====================================================================
// ======================= Ejercicio 5 =================================
// =====================================================================
//  function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
//     // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
//     // Debes multiplicar este número por 5 y retornar el resultado.
//     // Tu código:
//     const resultado = objetoMisterioso.numeroMisterioso * 5;

//     return resultado;
//  }

// =====================================================================
// ======================= Ejercicio 6 =================================
// =====================================================================
//  function eliminarPropiedad(objeto, propiedad) {
//     // El parámetro "propiedad" es una propiedad del objeto que recibes.
//     // Debes eliminarla del objeto y retornarlo finalmente.
//     // Tu código:
//     delete objeto[propiedad];

//     return objeto;
//  }

// =====================================================================
// ======================= Ejercicio 7 =================================
// =====================================================================
// function tieneEmail(objetoUsuario) {
//   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
//   // En ese caso retornar true. Caso contrario, false.
//   // Tu código:
//   if (objetoUsuario.hasOwnProperty("email") && objetoUsuario.email != undefined) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(tieneEmail({ usernombre: 'Samuel', email: 'samuel@email.com' }));
// console.log(tieneEmail({ usernombre: 'Jhon', email: null }));
// console.log(tieneEmail({ usernombre: 'Antonio' }));

// =====================================================================
// ======================= Ejercicio 8 =================================
// =====================================================================
//  function tienePropiedad(objeto, propiedad) {
//     // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
//     // En ese caso retornar true. Caso contrario, false.
//     // Tu código:
//     for(let prop in objeto){
//          if(prop === propiedad) return true;
//      }

//      return false;
//  }

// =====================================================================
// ======================= Ejercicio 9 =================================
// =====================================================================
// function verificarPassword(objetoUsuario, password) {
//   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
//   // En ese caso retornar true. Caso contrario, false.
//   // Tu código:
//     if(objetoUsuario && objetoUsuario.hasOwnProperty('password') && objetoUsuario.password === password){
//         return true;
//     }
//     else return false;

//   //return false;
// }

// // const user = {
// //     password: 'Me encanta JS!',
// // };
// // const password = 'Me encanta JS!';
// // console.log(verificarPassword(user, password));

// const user = {
//     password: 'Me encanta JS!',
//  };
//  const password = 'Hacker time!';
// console.log(verificarPassword(user, password));


// =====================================================================
// ======================= Ejercicio 10 ================================
// =====================================================================
//  function actualizarPassword(objetoUsuario, nuevaPassword) {
//     // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
//     // La nueva contraseña la recibes por parámetro.
//     // Retornar el objeto.
//     // Tu código:
//     for(let prop in objetoUsuario){
//          if(prop === "password"){
//              objetoUsuario["password"] = nuevaPassword;
//          }
//      }

//      return objetoUsuario;
//  }

// =====================================================================
// ======================= Ejercicio 11 ================================
// =====================================================================
//  function agregarAmigo(objetoUsuario, nuevoAmigo) {
//     // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
//     // Debes agregar el "nuevoAmigo" al final de este arreglo.
//     // Retornar el objeto.
//     // Tu código:
//     const amigos = objetoUsuario.amigos;

//      amigos.push(nuevoAmigo);

//     objetoUsuario.amigos = amigos;

//      return objetoUsuario;

//  }

// =====================================================================
// ======================= Ejercicio 12 ================================
// =====================================================================
//  function pasarUsuarioAPremium(objetoMuchosUsuarios) {
//     // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
//     // Cada usuario tiene una propiedad llamada "esPremium".
//     // Define esta propiedad de todos los usuarios como true.
//     // Retornar el arreglo.
//     // Tu código:

//     for (let i = 0; i < objetoMuchosUsuarios.length; i++) {
//          objetoMuchosUsuarios[i].esPremium = true;
//      }

//      return objetoMuchosUsuarios;

//  }

// =====================================================================
// ======================= Ejercicio 13 ================================
// =====================================================================
//  function sumarLikesDeUsuario(objetoUsuario) {
//     // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
//     // Este arreglo contiene objetos (post).
//     // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
//     // Debes sumar los likes de todos los post y retornar el resultado.
//     // Tu código:
//     const posts = objetoUsuario.posts;
//      let sumaLikes = 0;

//      for(let i=0; i<posts.length; i++){
//          //sumaLikes = posts[post] + sumaLikes;
//          //console.log(typeof posts[i].likes);
//          //sumaLikes += posts[i].likes;
//          if (posts[i].hasOwnProperty("likes") && typeof posts[i].likes === "number") {
//              sumaLikes += posts[i].likes;
//              //console.log(posts[i].likes);
//          }
//      }
//      return sumaLikes;
//  }

// =====================================================================
// ======================= Ejercicio 14 ================================
// =====================================================================
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
    objetoProducto.calcularPrecioDescuento = (x) =>{ 
        return objetoProducto.precio - objetoProducto.precio * objetoProducto.porcentajeDeDescuento

    }

    return objetoProducto;
 }