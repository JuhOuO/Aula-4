function logar(){

    let nome = document.getElementById('nome').value
    let senha = document.getElementById('senha').value
    let mensagem = document.getElementById('mensagem')

    if(nome === 'Veríssimo' && senha === 'olhosabertos'){
        mensagem.innerHTML = "Acesso permitido, bem vindo"
        window.location.href = "protegida.html"
    }else{
        mensagem.innerHTML = "Acesso negado, vai te catar"
    }

}

function votar(){
    let idade = document.getElementById("idade").value
    let mensagem2 = document.getElementById("mensagem2")

    if(idade >= 18){
        mensagem2.innerHTML = "Você pode votar! Que bom, ou não."
    } else{
        mensagem2.innerHTML = "Você não pode votar, tá novinho ainda"
    }
}

