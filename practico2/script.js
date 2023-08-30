// Variables
let nombreJugador = "";
let eleccionJugador = "";
let eleccionPC = "";
let puntuacionJugador = 0;
let puntuacionPC = 0;
let rondas = 0;
const maxRondas = 5;

// Función para validar el nombre del jugador
function validarNombre(){
let nombre = document.getElementById('nombreJugador').value;

if (nombre === ""){ 
    alert("El campo de nombre no debe estar vacío!");  
return;
}

nombreJugador = nombre;
alert("Bienvenido, " + nombreJugador + "!");
}

// Para detectar la elección del jugador y resaltar su elección
document.querySelectorAll(".imagen-container").forEach(container => {
container.addEventListener('click', function(){

if (!nombreJugador) {
    alert("Ingresa tu nombre antes de jugar!");
    return;
}

eleccionJugador = container.querySelector("img").getAttribute("data-choice");

 // Resaltamos la elección del jugador
document.querySelectorAll('.imagen-container').forEach(innerContainer => {
    innerContainer.classList.remove('selected');});
    container.classList.add('selected');

    // Mostrar el botón para revelar la elección de la PC
    document.getElementById('jugadaPC').style.display = "block";});
});

// Función para la jugada de la PC y verificar el ganador
document.getElementById("jugadaPC").addEventListener("click", function(){
// Esconder el marco azul cuando se haga clicK en el botón de la PC
document.querySelectorAll('.imagen-container').forEach(innerContainer => {
    innerContainer.classList.remove('selected');
});

// Determinar aleatoriamente la elección de la PC
eleccionPC = ["piedra", "papel", "tijera"][Math.floor(Math.random() * 3)];
alert("La PC eligió: " + eleccionPC);

let ganador = determinarGanador();
actualizarMarcador(ganador);

rondas++;
mostrarRondas(rondas);

    if (verificarVictorias()) {
        anunciarGanador();
        document.getElementById("botonReiniciar").style.display = "block";
    }

// Esconder el botón después de que la PC hizo su jugada
document.getElementById('jugadaPC').style.display = "none";});

// Función para determinar el ganador 
function determinarGanador() {
    if (eleccionJugador == eleccionPC) return "empate";
    if ((eleccionJugador == "piedra" && eleccionPC == "tijera") ||
        (eleccionJugador == "tijera" && eleccionPC == "papel") ||
        (eleccionJugador == "papel" && eleccionPC == "piedra")){
        return "jugador";
    } else{
    return "pc";
    }
}

// Función para actualizar el marcador 
function actualizarMarcador(ganador){
    if (ganador === "jugador") puntuacionJugador++;
    else if (ganador === "pc") puntuacionPC++;
    document.getElementById("puntuacionJugador").textContent = puntuacionJugador;
    document.getElementById("puntuacionPC").textContent = puntuacionPC;
}

// Función para verificar si ya se han alcanzado las condiciones de victoria
function verificarVictorias(){
    return rondas >= maxRondas || puntuacionJugador == 3 || puntuacionPC == 3;
}

// Función para anunciar al ganador 
function anunciarGanador(){
    if (puntuacionJugador == 3){
        alert(nombreJugador + " es el ganador!");
    } else if (puntuacionPC == 3){
        alert("La PC es el ganador!");
    } else if (rondas == maxRondas){
        if (puntuacionJugador > puntuacionPC){
            alert(nombreJugador + " es el ganador!");
        } else if (puntuacionJugador < puntuacionPC){
            alert("La PC es el ganador!");
        } else{
            alert("Es un empate!");
        }
    }
}

// Función para mostrar en una alerta la cantidad de rondas jugadas y las que faltan
function mostrarRondas(rondasActuales) {
    let rondasFaltantes = maxRondas - rondasActuales;
    let mensajeRondas = `Rondas jugadas: ${rondasActuales}/${maxRondas}. Rondas faltantes: ${rondasFaltantes}`;
    alert(mensajeRondas);
}

// Función para reiniciar el juego
document.getElementById("botonReiniciar").addEventListener("click", function(){
    puntuacionJugador = 0;
    puntuacionPC = 0;
    rondas = 0;
    document.getElementById("puntuacionJugador").textContent = puntuacionJugador;
    document.getElementById("puntuacionPC").textContent = puntuacionPC;
    document.getElementById("botonReiniciar").style.display = "none";
});
