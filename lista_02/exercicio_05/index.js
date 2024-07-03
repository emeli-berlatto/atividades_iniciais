const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    if(document.getElementById('codigo').value){
        editar()
    }else{
        criar()
    }

document.getElementById('nome').value=''
document.getElementById('email').value=''
document.getElementById('codigo').value=''

})

function criar(){
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value

    let tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

let newRow = tbodyRef.insertRow();

let newCellnome = newRow.insertCell();

let newTextnome = document.createTextNode(nome);
newCellnome.appendChild(newTextnome);

let newCellemail = newRow.insertCell();

let newTextemail = document.createTextNode(email);
newCellemail.appendChild(newTextemail);

let newCelleditar = newRow.insertCell();

let botaoEditar = document.createElement('button');
botaoEditar.innerHTML='editar'
botaoEditar.addEventListener('click', function() {
    let linha=this.parentNode.parentNode
    document.getElementById('nome').value=linha.cells[0].innerHTML
document.getElementById('email').value=linha.cells[1].innerHTML
document.getElementById('codigo').value=linha.rowIndex
})
newCelleditar.appendChild(botaoEditar);
}

function editar(){
    let linha=document.getElementById('myTable').rows[document.getElementById('codigo').value]

    linha.cells[0].innerHTML=document.getElementById('nome').value
linha.cells[1].innerHTM=document.getElementById('email').value
}