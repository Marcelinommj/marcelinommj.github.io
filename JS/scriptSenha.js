
window.addEventListener("load", addEventos);

function addEventos(){
    const sim = document.getElementById("sim");
    const nao = document.getElementById("não");
    const overlay = document.getElementById("overlay");
    const overlay2 = document.getElementById("overlay2");
    const overlay3 = document.getElementById("overlay3");
    const overlay4 = document.getElementById("overlay4");
    const overlay5 = document.getElementById("overlay5");
    const SimAlerta = document.getElementById("SimAlerta");
    const NaoAlerta = document.getElementById("NãoAlerta");
    const SimAlerta2 = document.getElementById("SimAlerta2");
    const NaoAlerta2 = document.getElementById("NãoAlerta2");
    const SimAlerta3 = document.getElementById("SimAlerta3");
    const NaoAlerta3 = document.getElementById("NãoAlerta3");
    const tchau = document.getElementById("Tchau");
    const adeus = document.getElementById("Adeus");

    const botao = document.getElementById("sim");
    const textoOriginal = botao.innerText;
    const placeholder = "Burro";
    
    botao.addEventListener("mouseenter", () => {
        botao.innerText = placeholder;
    });

    botao.addEventListener("mouseleave", () => {
        botao.innerText = textoOriginal;
    });


    nao.addEventListener('click', () => {
        event.preventDefault();
        overlay5.style.display = "flex";
    });

    tchau.addEventListener('click', () => {
        event.preventDefault();
        overlay5.style.display= 'none';
    });

    // Exibe o alerta e ativa o fundo blur
    sim.addEventListener("click", () => {
        event.preventDefault();
        overlay.style.display = "flex";
    });

    SimAlerta.addEventListener("click", () => {
        event.preventDefault();
        overlay.style.display = "none";
        overlay2.style.display= "flex";
    });
    // Fecha o alerta e remove o fundo blur
    NaoAlerta.addEventListener("click", () => {
        event.preventDefault();
        overlay.style.display= "none";
    });

    SimAlerta2.addEventListener("click", () => {
        event.preventDefault();
        overlay2.style.display= "none";
        overlay3.style.display= "flex";
    });
    // Fecha o alerta e remove o fundo blur
    NaoAlerta2.addEventListener("click", () => {
        event.preventDefault();
        overlay2.style.display= "none";
    });

    SimAlerta3.addEventListener("click", () => {
        event.preventDefault();
        overlay3.style.display= "none";
        overlay4.style.display= "flex";
    });
    // Fecha o alerta e remove o fundo blur
    NaoAlerta3.addEventListener("click", () => {
        event.preventDefault();
        overlay3.style.display= "none";
    });
  
    adeus.addEventListener('click', () => {
        event.preventDefault();
        overlay4.style.display= 'none';
    });


}


