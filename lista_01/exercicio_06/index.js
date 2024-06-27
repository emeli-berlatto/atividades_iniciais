let botao = document.getElementById('botao')

botao.addEventListener('click', function()  {
    document.body.style.backgroundColor=gerarcor()      
})

function gerarcor(){
    let cor='#'
    for(let i=0;i<6;i++){
        cor+=Math.floor(Math.random()*16).toString(16);
    }
    return cor;
}