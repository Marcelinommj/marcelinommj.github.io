document.addEventListener("DOMContentLoaded", function () { //Isso daqui faz que o código dentro da função so seja feito depois que todo o html for carrego "TAVA BUGANDO SEM ISSO"//   

function verificarSenha(){
    
    try{
    const senha = document.getElementById("senha").value;

    if(senha.length < 5){ //length conta os caracteres na string, muito util por sinal
        throw alert ("A senha deve conter mais de 5 digitos porfavor");
    }   
    }

    catch(err){
        console.log(err);
    }
}
document.querySelector(".login").addEventListener("click", function (){verificarSenha()});


function verificarEmail() {
    
    try{
    const email = document.getElementById("email").value
    const depoisArroba = email.indexOf('@'); //esse foi complicado de entender viu, mas ele me salvou demais, se após o @ ele não encontrar nada, ele vai voltar o valor -1
    const depoisPonto = email.indexOf('.'); // esse faz a mesma coisa do de cima, porem, se após o . ele não encontrar na ele retorna -1

    if (depoisArroba === -1 || depoisPonto === -1 || depoisArroba > depoisPonto) {
        throw alert ("O email deve conter @ e . porfavor");
    }
    }
    catch (err){
        console.log(err);
    }
}


document.querySelector(".login").addEventListener("click", function (){verificarEmail()});

});