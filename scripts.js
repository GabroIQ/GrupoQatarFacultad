alert("Hola profe!, dividimos la tarea en dos partes, la primera que es nuestro index una aproximacion de como seria el front de una tienda, y por otro lado una interfaz en donde se puede guardar un nuevo prodcuto con todo lo q pedia el cliente ficticio (para acceder ahi click en el boton de AGREGAR PRODCUTO) es el unico link que funciona :)")

const open = document.getElementById('botonAgregar');
const modal_container = document.getElementById('modal-container');

open.addEventListener ('click', () => {
    modal_container.classList.add('show');
    console.log("asd")
    setTimeout(function() {
        modal_container.classList.remove('show')
    }, 3000)
});
