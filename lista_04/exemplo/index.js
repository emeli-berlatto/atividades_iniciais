let botao = document.getElementById('botao')

botao.addEventListener('click', function() {
    let nome = document.getElementById('nome').value

    fetch("morango.php?algo1=" + nome).then(function(resposta){
         return resposta.text();
    }).then(function(texto){
        document.getElementById('mensagem').innerText = texto
    })

})