let botao = document.getElementById('botao')

botao.addEventListener('click', function() {
    let nome = document.getElementById('anodenascimento').value

    document.getElementById('mensagem').innerText
        = 2024 - nome
})