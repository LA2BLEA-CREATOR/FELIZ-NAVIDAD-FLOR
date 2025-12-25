function celebrar() {
    document.getElementById("sorpresa").innerHTML =
        "🎄✨ Flor, eres un regalo maravilloso, muchas gracias. ERES LA MEJOR, Que Dios bendiga tu vida hoy y siempre, te quiero mucho. ❤️";

    const musica = document.getElementById("musica");
    musica.volume = 0.5; // volumen suave
    musica.play();
}


/* NIEVE */
const cantidadNieve = 50;

for (let i = 0; i < cantidadNieve; i++) {
    let snow = document.createElement("div");
    snow.innerHTML = "❄";
    snow.style.position = "fixed";
    snow.style.top = Math.random() * -100 + "px";
    snow.style.left = Math.random() * window.innerWidth + "px";
    snow.style.fontSize = (Math.random() * 20 + 10) + "px";
    snow.style.opacity = Math.random();
    snow.style.animation = `caer ${Math.random() * 5 + 5}s linear infinite`;
    document.body.appendChild(snow);
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes caer {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(120vh);
    }
}
`;
document.head.appendChild(style);
