console.log("Welcome to tic tac toe game");
let music = new Audio("assets/music.mp3");
let turn = new Audio("assets/ting.mp3");
let gameOver = new Audio("assets/gameover.mp3");
let curTurn = "X";
let isgameover = false;
// function to change the turn

const changeTurn = ()=> {
    return curTurn === "X"?"0":"X";
}

// function to check win

const checkWin = ()=> {
    let boxTexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText) && (boxTexts[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxTexts[e[0]].innerText + " won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.width = "20vw";
            document.querySelector('.line').style.transform = `translate(${[e[3]]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            gameOver.play();
        }
    })
}

// Game logic 
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if (boxText.innerText === ''){
            boxText.innerText = curTurn;
            curTurn = changeTurn();
            turn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + curTurn;
            }
        }
    })
})

reset.addEventListener("click", ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText = "";
    })
    curTurn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + curTurn;
    document.querySelector('.line').style.width = "0vw";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})