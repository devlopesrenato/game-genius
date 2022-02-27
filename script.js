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
//verifica se os botoes clicados são os mesmos gerados pelo sistema
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        var pontuacao = document.getElementsByClassName("txtscore")[0].innerText = `Pontuação: ${score}`;
        nextLevel();
    }
}
//função para o click do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}
//funcção retorna cor
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
//função next level
let nextLevel = () => {
    score++;
    shuffleOrder();
}
//função gameover
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
//oculta mensgaem e chama o inicio do jogo
let hidemsg = () => {
    var display = document.getElementById("screenmsg").style.display = 'none';
    playGame();
}
//coleta os clicks
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);
//piscar o botão iniciar
let lightbt = (btinicio) => {
    var btinicio = document.getElementById("btIniciar").style.backgroundColor = blue;
    setTimeout(() => {
        var btinicio = document.getElementById("btIniciar").style.backgroundColor = red;
    },250);
    lightbt();
}

lightbt();