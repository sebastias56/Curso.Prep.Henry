// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un m�todo (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu c�digo:
  var gato = {
    nombre: nombre,
    edad: edad,
    meow: function(){
      return "Meow!"
    }
  }
  return gato
}


function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu c�digo:
  objeto[property]=null
  return objeto
}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un m�todo (funcion) en el objeto
  // Invoca ese m�todo
  // Nada necesita ser devuelto ("returned")
  // Tu c�digo:
  objeto[metodo]()
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu c�digo:
  var x= (objetoMisterioso.numeroMisterioso) *5
  return x
}


function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre est� pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu c�digo:
  delete objeto[unaPropiedad]
  return objeto
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la funci�n
  // Devuelve el objeto
  // Tu c�digo:
  var obj={
    nombre: nombre,
    email: email,
    password: password
  }
  return obj

}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu c�digo:
  return usuario.email != null
}


function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto tiene el valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu c�digo:
  return objeto[propiedad] != null
}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu c�digo:
  return password==usuario.password
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contrase�a existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu c�digo:
  usuario.password = nuevaPassword
  return usuario
}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu c�digo:
  usuario.amigos.push(nuevoAmigo)
  return usuario
}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu c�digo:
  for (let x in usuarios){
    usuarios[x].esPremium=true
  }
  return usuarios
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu c�digo:
  var x =0
  for(let i in usuario.posts){
    x += usuario.posts[i].likes
  }
  return x
}

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un m�todo (funci�n) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este m�todo debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El m�todo resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la funci�n
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu c�digo:
  var x = producto.precio
  producto.calcularPrecioDescuento= function(){
  	x -= producto.precio*producto.porcentajeDeDescuento
  	return x
  }
  return producto
}

// No modificar nada debajo de esta l�nea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};