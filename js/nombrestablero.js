



const entrar = () => {
    var jugador1 = document.getElementById("nombre").value;
    var jugador2 = document.getElementById("jugador").value;
    if (jugador1 && jugador2) {
        console.log(sessionStorage.setItem("nombre", jugador1));
        console.log(sessionStorage.setItem("jugador", jugador2));
        window.open('../html/index.html');
        document.getElementById("nombre").value = "";
        document.getElementById("jugador").value = "";
    } else {
        alert("rellenar");
    }
}






