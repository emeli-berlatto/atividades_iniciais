const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    if(!nome){
        window.alert('preencha o nome')
        return
    }
    if(!email){
        window.alert('preencha o email')
        return
    }
    console.log({
        "nome": nome,
        "email": email
    })
})