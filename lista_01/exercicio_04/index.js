let botao = document.getElementById('botao')

botao.addEventListener('click', function() {
    let nome = document.getElementById('idade').value
if(nome >= 18){
    document.getElementById('mensagem').innerText= 'é maior de idade'
}else{
    document.getElementById('mensagem').innerText= 'não é maior de idade'
}
        
})