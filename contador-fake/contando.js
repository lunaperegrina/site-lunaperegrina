var elemento = document.getElementById('qtd-pessoas')
setInterval(definirNumero, 1000);

function definirNumero() {
    elemento.innerHTML = getRandomInt(30, 35);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}