// Horario dinamico

function atualizarHorario(){
    let horarioElement = document.getElementById("horario");
    if (!horarioElement) return;

    let agora = new Date();
    let horas = agora.getHours().toString().padStart(2,'0');
    let minutos = agora.getMinutes().toString().padStart(2,'0');

    horarioElement.innerText = `Horario atual: ${horas} : ${minutos}`;
}

setInterval(atualizarHorario, 1000);
atualizarHorario();

// Carrossel

let index = 0;
function mudarImagem() {
    let imagens = document.querySelectorAll(".carrossel img");
    
    imagens.forEach((img, i) => {
        img.style.transform = `translateX(${-index * 100}%)`;
    });

    index = (index + 1) % imagens.length;
}

setInterval(mudarImagem, 3000);

// Tela de loading

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
    }, 1000);
});