document.addEventListener("DOMContentLoaded", function () { //Isso daqui faz que o código dentro da função so seja feito depois que todo o html for carrego "TAVA BUGANDO SEM ISSO"//   


function verificarNomes() {

    try{
    const nome = document.getElementById("nome").value
    const sobrenome = document.getElementById("sobrenome").value
    const apelido = document.getElementById("apelido").value

    if (/\d/.test (nome) || /\d/.test (sobrenome) || /\d/.test (apelido)) {
        throw alert ("O nome, sobrenome e o apelido não podem ter números! Porfavor digite um nome real/válido!");
    }
    }
    catch (err){
        console.log(err);
    }

}

document.querySelector(".register").addEventListener("click", verificarNomes)


function verificarEmails() {
    
    try{
    const emails = document.getElementById("emailregister").value
    const confirmemail = document.getElementById("confirmemail").value
    const depoisArroba = emails.indexOf('@'); //esse foi complicado de entender viu, mas ele me salvou demais, se após o @ ele não encontrar nada, ele vai voltar o valor -1
    const depoisPonto = emails.indexOf('.'); // esse faz a mesma coisa do de cima, porem, se após o . ele não encontrar na ele retorna -1

    if (depoisArroba === -1 || depoisPonto === -1 || depoisArroba > depoisPonto) {
        throw alert ("O email deve conter @ e . porfavor");
    }
    else if(confirmemail !== emails){
        throw alert ("O email digitado não corresponde ao email acima!")
    }
    }
    catch (err){
        console.log(err);
    }
}

document.querySelector(".register").addEventListener("click", verificarEmails);


function verificarSenhas() {

try{
    const senhas = document.getElementById("senharegister").value;
    const confirmsenha = document.getElementById("confirmsenha").value

    if(senhas.length < 5){ //length conta os caracteres na string, muito util por sinal
        throw alert ("A senha deve conter mais de 5 digitos porfavor");
    }
    else if(senhas !== confirmsenha){
        throw alert ("A senha digitada não correponde a senha acima!");   
    }
    }
    catch(err){
        console.log(err);
    }
}
document.querySelector(".register").addEventListener("click", verificarSenhas);


function verificarTelefone () {

    try{
    const telefone = document.getElementById("telefone").value
        
    if(telefone.length <= 12 || telefone.length > 15 ){
        throw alert ("Digite um número de telefone válido!");
    }
    }
    catch (err){
        console.log(err);
    }
}
document.querySelector(".register").addEventListener("click", verificarTelefone);


function verificarEndereco () {

    try{
    const endereco = document.getElementById("endereco").value

    if(endereco.length < 8){
        throw alert ("Digite um nome de enredeço válido!");
    }
    }
    catch (err){
        console.log(err);
    }
}
document.querySelector(".register").addEventListener("click", verificarEndereco);

function verificarCep () {

    try {
    const cep = document.getElementById("cep").value

    if (cep.length > 8){
        throw alert ("Digite um CEP válido porfavor!");
    }
    }
    catch (err){
        console.log(err);
    }
}
document.querySelector(".register").addEventListener("click", verificarCep);

});

