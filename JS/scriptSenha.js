
window.addEventListener("load", addEventos);

function addEventos(){
    var sim=document.getElementById("sim");
    var nao=document.getElementById("não");

    sim.addEventListener('alert', () => {
        console.log(alert);
    }
}

