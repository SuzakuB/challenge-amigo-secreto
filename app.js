let amigos = []; // Array para almacenar los nombres de amigos

// Resto del código de funciones (agregarAmigo, sortearAmigo, etc)

function agregarAmigo() {
    const nombre = document.getElementById('amigo').value.trim();
    
    if (nombre) {
        amigos.push(nombre); // Añadimos el nombre al array
        actualizarListaVisual();
        document.getElementById('amigo').value = ''; // Limpiar input
    }
}

function actualizarListaVisual() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(nombre => 
        `<li>${nombre}</li>`
    ).join('');
}