function countWords(){
    let text = document.getElementById('textArea').value.trim();

    let wordCount = text.split(' ').filter(word => word !== '').length;

    document.getElementById('count').textContent = wordCount;
}