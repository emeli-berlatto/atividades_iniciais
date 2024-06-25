let botao = document.getElementById('botao')
let soma = 0

botao.addEventListener('click', function() {
   soma++

    document.getElementById('mensagem').innerText=soma
      
})