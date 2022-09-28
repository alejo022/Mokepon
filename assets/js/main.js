let mascotaHipodoge = document.getElementById('hipodoge');
let mascotaCapipepo = document.getElementById('capipepo');
let mascotaRatigueya = document.getElementById('ratigueya');

let botonMascotaJugador = document.getElementById('boton-mascota');
let botonFuego = document.getElementById('boton-fuego');
let botonAgua = document.getElementById('boton-agua');
let botonTierra = document.getElementById('boton-tierra');
let botonReiniciar = document.getElementById('boton-reiniciar');

botonMascotaJugador.addEventListener('click', SeleccionarMascotaJugador)

function SeleccionarMascotaJugador() {

    if (mascotaHipodoge.checked) {
        console.log('eligiste hipodoge')
    } else if (mascotaCapipepo.checked) {
        console.log('eligiste capipepo')
    }
    else if (mascotaRatigueya.checked) {
        console.log('eligiste ratigueya')
    }
    else {
        console.log('No elegiste ninguna mascota')
    }

}


