// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables
let usuario = []
let UsuarioNombre;

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

