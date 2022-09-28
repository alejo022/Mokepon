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

let ataqueJugador
let ataqueMaquina

botonMascotaJugador.addEventListener('click', SeleccionarMascotaJugador)

botonFuego.addEventListener('click', ataqueFuego)
botonAgua.addEventListener('click', ataqueAgua)
botonTierra.addEventListener('click', ataqueTierra)

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

    if (resultadoAtaqueEnemigo == 1) {
        ataqueMaquina = 'Fuego';
    } else if (resultadoAtaqueEnemigo == 2) {
        ataqueMaquina = 'Agua';
    } else {
        ataqueMaquina = 'Tierra'
    }

    crearmensaje()

    console.log(resultadoAtaqueEnemigo)

}

function crearmensaje() {
    let parrafoMensaje = document.createElement('p')
    parrafoMensaje.innerHTML = 'Tu mascota ataco con: ' + ataqueJugador + ' y la mascota del enemigo ataco con: ' + ataqueMaquina;
    parrafoMensaje.style = 'text-align: center'
    mensajes.appendChild(parrafoMensaje)

}

function SeleccionarMascotaJugador() {

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

function aleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

