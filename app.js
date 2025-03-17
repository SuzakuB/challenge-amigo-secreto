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
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        html += `<li>${amigos[i]}</li>`;
    } 

    lista.innerHTML = html;
}

function sortearAmigo() {
    // Validar amigos disponibles
    if (amigos.length === 0) {
        alert("¡Agrega amigos primero!");
        return;
    }

    //Indice aleatorio
    const resultadoElemento = document.getElementById('resultado');

    // Obtener nombre
    const amigo = amigos[Math.floor(Math.random() * amigos.length)];

    // Agregar nuevo resultado sin borrar anteriores
    resultadoElemento.innerHTML += `
        <li>
            <span class="sorteado">${amigo}</span>
        </li>
    `;
}