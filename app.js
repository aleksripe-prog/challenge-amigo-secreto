// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables
let usuario = []
let UsuarioNombre;
let usuarioListaNombre;
let cantidadNombres;
/**
 * funcion que valida que el nombre del usuario no este vacio antes de agregarlo a la lista 
 * 
 */
function usuarioAgregar(){
    UsuarioNombre = document.getElementById("amigo").value;

    if (UsuarioNombre.trim() ==="") {
        alert("el campo esta vacio agrega un nombre");
    } else {
        usuario.push(UsuarioNombre);
        document.querySelector("#amigo").value = "";
        //funcion para mostrar la lista de los amigos
    }
}
/**
 * funcion para actualizar la lista de amigos en el DOM, crea elementos "li" por cada usuarios
 * 
 */
function usuarioLista(){
    usuarioListaNombre = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";

    for(let index = 0; index<amigos.length; index++){
        const element = amigos[index];

        let listaHTML = document.createElement("li");
        listaHTML.textContent = element;
        listaAmigos.appendChild(listaHTML);
    }
}
/**
 * funcion para poder sortear el nombre del usuario de manera aleatoria ta,bien verifica 
 * si la lista no esta vacia antes de realizar el sorteo
 * 
 */
function sortearUsuario() {
  cantidadNombres = amigos.length;

  if (cantidadAmigos === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
  }
}
