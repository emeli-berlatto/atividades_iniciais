const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

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
})