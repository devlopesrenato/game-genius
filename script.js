let order = [];
let clickedOrder = [];
let score = 0;
// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
//gera ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}
//acende proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 500);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number - 250);
}
//Verifica se a ordem clicada pelo usuário foi a mesma que o sistema gerou
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            if(score < 0){
                score = 0;
            }
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        var pontuacao = document.getElementsByClassName("txtscore")[0].innerText = `Pontuação: ${score}`;
        nextLevel();
    }
}
//acende a cor que o usuário clica e chama a função para verificar a ordem
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}
//função retorna cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}
//função próximo level
let nextLevel = () => {
    score++;
    shuffleOrder();
}
//função GameOver
let gameOver = () => {
    alert(`Pontuação: ${score - 1}!\nVocê errou!\nClique em OK para iniciar um novo jogo.`);
    order = [];
    clickedOrder = [];
    playGame();
}
//funcao inicia o jogo
let playGame = () => {
    alert('ATENÇÃO!\nIniciando o jogo!');
    score = 0;
    var pontuacao = document.getElementsByClassName("txtscore")[0].innerText = `Pontuação: ${score}`;
        nextLevel();
}
//oculta mensagem incial e chama o inicio do jogo
let hidemsg = () => {
    var display = document.getElementById("screenmsg").style.display = 'none';
    var display2 = document.getElementById("maingame").style.display = 'flex';
    playGame();
}
//coleta os clicks
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

var display3 = document.getElementById("maingame").style.display = 'none';