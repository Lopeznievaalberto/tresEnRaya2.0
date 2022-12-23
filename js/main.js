
const cuadrado_btn = document.querySelectorAll(".cuadrado");
const cabecera = document.getElementById("cabecera");
const botondejuego = document.getElementById("botondejuego");
let i = 1;
const eventinitial = "pointer-events:initial;opacity:initial;";
const   eventoopacity = "pointer-events:none;opacity:40%;";
let state = false;


const entrar = () => {
    let jugador1 = document.getElementById("nombre").value;
    let jugador2 = document.getElementById("jugador").value;
    localStorage.setItem("nombre", jugador1);
    localStorage.setItem("jugador", jugador2);
    window.location.href=('../html/index.html');
    document.getElementById("nombre").value = "";
    document.getElementById("jugador").value = "";  
}

let matrizganadora = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

comprobar = () => {
    botondejuego.style.cssText = eventoopacity;
    for (let m = 0; m < matrizganadora.length; m++) {
        if (cuadrado_btn[matrizganadora[m][0]].innerHTML === "X" && cuadrado_btn[matrizganadora[m][1]].innerHTML === "X"
            && cuadrado_btn[matrizganadora[m][2]].innerHTML === "X") {
            cabecera.innerHTML = '"X" Gana';
            state = true;
            desactivarcasillas();
        } else if (cuadrado_btn[matrizganadora[m][0]].innerHTML === "O" && cuadrado_btn[matrizganadora[m][1]].innerHTML === "O"
            && cuadrado_btn[matrizganadora[m][2]].innerHTML === "O") {
            cabecera.innerHTML = '"O" Gana';
            state = true;
            desactivarcasillas();
        }
    }

    if (cuadrado_btn[0].innerHTML != "" && cuadrado_btn[1].innerHTML != "" && cuadrado_btn[2].innerHTML != ""
        && cuadrado_btn[3].innerHTML !== "" && cuadrado_btn[4].innerHTML != "" && cuadrado_btn[5].innerHTML != ""
        && cuadrado_btn[6].innerHTML != "" && cuadrado_btn[7].innerHTML != "" && cuadrado_btn[8].innerHTML != ""
        && state == false) {
        cabecera.innerHTML = "Empate";
        desactivarcasillas(false);
    }

}

/* funcion que va recorriendo las casillas y las deja "marcadas" */
desactivarcasillas = (d) => {
    (d == false) ? i = Math.floor(Math.random() * (3 - 1)) + 1 : 0;
            for (let actionboton = 0; actionboton < cuadrado_btn.length; actionboton++) {
        cuadrado_btn[actionboton].style.setProperty("pointer-events", "none");
    }
    botondejuego.style.cssText = eventinitial;
}

empezar = () => {
    botondejuego.style.cssText = eventoopacity;
    let c1;
    (i % 2 == 0) ? c1 = "X" : c1 = "O";
    cabecera.innerHTML = `Presione cualquier cuadrado para iniciar: <b>"${c1}"</b> empezar.`;
}

/* bucle forEach que recorre la matriz cuadrado_btn y establece el evento onclick de cada elemento
a una función que establece el inner del elemento de cabecerarmación, establece el HTML interno de
el elemento actual a "X" u "O" dependiendo del valor de i, llamando a la función comprobar, establece
la propiedad pointer-events del elemento actual hasta "none"(ninguno)*/
cuadrado_btn.forEach(boton => {
    boton.onclick = () => {
        cabecera.innerHTML = "";
        (i % 2 == 0) ? boton.innerHTML = "X" : boton.innerHTML = "O";
        comprobar();
        boton.style.setProperty("pointer-events", "none");
        i++;//incrementa ahora i, y establece i en 1 si es igual a 3
        (i == 3) ? i = 1 : 0;
    }
});

/* Establece el evento onclick del elemento botondejuego en una función que establece los eventos de puntero
de cada elemento en la matriz cuadrado_btn hasta "initial", estp hace que innerHTML sea "rellenado"
establece el HTML interno de cada elemento
en la matriz cuadrado_btn a una cadena vacía, establece la variable de estado en falso y llama al
Función nempezar. */
botondejuego.onclick = () => {
    for (let actionboton = 0; actionboton < cuadrado_btn.length; actionboton++) {
        cuadrado_btn[actionboton].style.cssText = "pointer-events:initial;";
        cuadrado_btn[actionboton].innerHTML = "";
        state = false;
    }
    empezar();
}
empezar();





