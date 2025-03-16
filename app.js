let amigos = []; // Array para almacenar los nombres de amigos

// Resto del código de funciones (agregarAmigo, sortearAmigo, etc)

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (!nombre) {
        alert("Por favor, inserte un nombre.");
        return; // Detener la ejecución si hay error
    }
    amigos.push(nombre);
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML += `<li>${nombre}</li>`;
    input.value = '';
}

function actualizarListaVisual() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(nombre => 
        `<li>${nombre}</li>`
    ).join('');
}