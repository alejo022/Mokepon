let mascotaHipodoge = document.getElementById('hipodoge');
let mascotaCapipepo = document.getElementById('capipepo');
let mascotaRatigueya = document.getElementById('ratigueya');

let botonMascotaJugador = document.getElementById('boton-mascota');
let botonFuego = document.getElementById('boton-fuego');
let botonAgua = document.getElementById('boton-agua');
let botonTierra = document.getElementById('boton-tierra');
let botonReiniciar = document.getElementById('boton-reiniciar');

let mascotaJugador = document.getElementById('mascota-jugador');
let mascotaMaquina = document.getElementById('mascota-maquina');

let mensajes = document.getElementById('mensajes');

let vidasJugador = document.getElementById('vidas-jugador');
let vidasMaquina = document.getElementById('vidas-maquina');

let ataqueJugador
let ataqueMaquina

let perdiste = 0;
let ganaste = 0;
let empataste = 0;

let contadorVidasJugador = 3;
let contadorVidasMaquina = 3;

let txt_perdiste = document.getElementById('txt_perdiste');
let txt_empataron = document.getElementById('txt_empataron');
let txt_ganaste = document.getElementById('txt_ganaste');

let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
let sectionReiniciarJuego = document.getElementById('reiniciar-juego');





botonMascotaJugador.addEventListener('click', SeleccionarMascotaJugador)

botonFuego.addEventListener('click', ataqueFuego)
botonAgua.addEventListener('click', ataqueAgua)
botonTierra.addEventListener('click', ataqueTierra)

botonReiniciar.addEventListener('click', reiniciarJuego)

window.addEventListener('load', iniciarJuego)

function iniciarJuego() {
    sectionSeleccionarAtaque.style = 'display: none';
    sectionReiniciarJuego.style = 'display: none';
}


function ataqueFuego() {
    ataqueJugador = 'Fuego';
    ataqueEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'Tierra'
    ataqueEnemigo()
}

function ataqueEnemigo() {
    let resultadoAtaqueEnemigo = aleatorio(1, 3)
    console.log("resultadoAtaqueEnemigo aleatorio: " + resultadoAtaqueEnemigo)
    if (resultadoAtaqueEnemigo == 1) {
        ataqueMaquina = 'Fuego';
    } else if (resultadoAtaqueEnemigo == 2) {
        ataqueMaquina = 'Agua';
    } else {
        ataqueMaquina = 'Tierra'
    }
    calcularResultado()
}

function calcularResultado() {

    if (ataqueMaquina == ataqueJugador) {
        empataste++;
        txt_empataron.innerHTML = empataste;
        console.log("Empate" + empataste)
        crearmensaje("Empate")
    } else if (ataqueJugador == 'Fuego' && ataqueMaquina == 'Tierra') {
        ganaste++;
        contadorVidasMaquina--;
        txt_ganaste.innerHTML = ganaste;
        vidasMaquina.innerHTML = contadorVidasMaquina;
        console.log("Ganaste" + ganaste)
        crearmensaje("Ganaste")
    } else if (ataqueJugador == 'Agua' && ataqueMaquina == 'Fuego') {
        ganaste++;
        contadorVidasMaquina--;
        txt_ganaste.innerHTML = ganaste;
        vidasMaquina.innerHTML = contadorVidasMaquina;
        console.log("Ganaste" + ganaste)
        crearmensaje("Ganaste")
    } else if (ataqueJugador == 'Tierra' && ataqueMaquina == 'Agua') {
        ganaste++;
        contadorVidasMaquina--;
        txt_ganaste.innerHTML = ganaste;
        vidasMaquina.innerHTML = contadorVidasMaquina;
        console.log("Ganaste" + ganaste)
        crearmensaje("Ganaste")
    } else {
        perdiste++;
        contadorVidasJugador--;
        txt_perdiste.innerHTML = perdiste;
        vidasJugador.innerHTML = contadorVidasJugador;
        console.log("Perdiste" + perdiste)
        crearmensaje("Perdiste")
    }

    revisarVidas()

}

function revisarVidas() {
    if (contadorVidasMaquina == 0) {
        sectionSeleccionarAtaque.style = 'display:none';
        sectionReiniciarJuego.style = 'display: block';
        crearmensajeFinal("Felicitaciones ! GANASTE ✨")
    } else if (contadorVidasJugador == 0) {
        sectionSeleccionarAtaque.style = 'display:none';
        sectionReiniciarJuego.style = 'display: block';
        crearmensajeFinal("PERDISTE ! Sigue intentando...")
    }
}

function crearmensaje(resultado) {

    let parrafoMensaje = document.createElement('p')
    parrafoMensaje.innerHTML = 'Tu mascota ' + mascotaJugador.innerHTML + ' ataco con: ' + ataqueJugador + ' y la mascota ' + mascotaMaquina.innerHTML + ' del enemigo ataco con: ' + ataqueMaquina + ' - ' + resultado;
    parrafoMensaje.style = 'text-align: center'
    mensajes.appendChild(parrafoMensaje)

}

function crearmensajeFinal(resultadoFinal) {

    let parrafoMensaje = document.createElement('p')
    parrafoMensaje.innerHTML = resultadoFinal;
    parrafoMensaje.style = 'text-align: center'
    mensajes.appendChild(parrafoMensaje)

    botonFuego.disabled = true;
    botonAgua.disabled = true;
    botonTierra.disabled = true;

}

function SeleccionarMascotaJugador() {
    sectionSeleccionarMascota.style = 'display: none';
    sectionSeleccionarAtaque.style = 'display: block';

    if (mascotaHipodoge.checked) {
        mascotaJugador.innerHTML = 'hipodoge';
        console.log('resultado jugador: hipodoge')
    } else if (mascotaCapipepo.checked) {
        mascotaJugador.innerHTML = 'capipepo';
        console.log('resultado jugador: capipepo')
    }
    else if (mascotaRatigueya.checked) {
        mascotaJugador.innerHTML = 'ratigueya';
        console.log('resultado jugador: ratigueya')
    }
    else {
        alert('Por favor elige una mascota');
    }

    SeleccionarMascotaMaquina()

}

function SeleccionarMascotaMaquina() {

    let resultadoAleatorio = aleatorio(1, 3);

    console.log('resultado aleatorio mascota maquina: ' + resultadoAleatorio);

    if (resultadoAleatorio == 1) {
        mascotaMaquina.innerHTML = 'hipodoge'
    } else if (resultadoAleatorio == 2) {
        mascotaMaquina.innerHTML = 'capipepo'
    } else {
        mascotaMaquina.innerHTML = 'ratigueya'
    }

}

function reiniciarJuego() {
    location.reload();
}

function aleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

