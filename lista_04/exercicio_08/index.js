let botao = document.getElementById('botao')

botao.addEventListener('click', function() {
    let fahrenheit = document.getElementById('fahrenheit').value

    fetch('morango.php?fahrenheit=' + fahrenheit).then(function(resposta) {
        return resposta.text();
    }).then(function(texto) {
        document.getElementById('mensagem').innerText = texto
    })
})