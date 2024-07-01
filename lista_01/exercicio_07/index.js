function calculate(){
    let num1 = parseFloat(document.getElementById('num1').value)
    let num2 = parseFloat(document.getElementById('num2').value)
    let operator = document.getElementById('operator').value;

let result;

switch (operator){
    case 'add' :
         result = num1 + num2;
         break;
    case 'subtract':
         result = num1 + num2;
         break;
    case 'multiply':
         result = num1 + num2;
         break;
    case 'divide':
         if (num2 !== 0){
            result = num1 / num2
         }else {
          result = 'Erro: Divisão por zero';
         }
         break;
default: 
     result = 'Operação inválida';
}

document.getElementById('output').textContent = result;
    
}
let botao = document.getElementById('botao')

botao.addEventListener('click', calculate)