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
        alert("¡No hay amigos para sortear!");
        return;
    }

    //Indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener nombre
    const amigosSorteado = amigos[indiceAleatorio];

    // Resultado
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `
        <li>
            <span class="sorteados">${amigosSorteado}</span>
        <li>
    `;
}