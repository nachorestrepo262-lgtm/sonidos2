function playSound(id) {
    const audio = document.getElementById(id);

    // Reinicia y reproduce
    audio.currentTime = 0;
    audio.play();
}

// Detectar doble click en TODOS los botones
document.querySelectorAll("button").forEach(button => {
    let timer = null;

    button.addEventListener("click", () => {
        timer = setTimeout(() => {
            // el sonido ya se reproduce con onclick
        }, 250);
    });

    button.addEventListener("dblclick", () => {
        clearTimeout(timer);

        const soundId = button.getAttribute("onclick")
            .match(/'([^']+)'/)[1];

        const audio = document.getElementById(soundId);
        audio.pause();
        audio.currentTime = 0;
    });
});