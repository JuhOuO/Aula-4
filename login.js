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

function codigo(){
    let codigo = document.getElementById("codigo").value
    let mensagem2 = document.getElementById("mensagem2")

    if(codigo = 3){
        mensagem2.innerHTML = "Está correto! Bem vindo"
    } else{
        mensagem2.innerHTML = "Está incorreto. Como chegou até aqui?"
    }
}

