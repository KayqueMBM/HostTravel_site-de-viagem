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