// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

//CODE FOR TIC TAC TOE
/*
var turn = "X";

var cells = document.getElementsByClassName("cell");

function setTurn() {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "It is player " + turn + "'s turn!";
}

function setWinner(win) {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "Player " + win + " Wins!";
}

function onClick(event) {
    event.preventDefault();
    if (!event.target.innerText) {
        event.target.innerText = turn;

        if (turn === "X")
            turn = "O";
        else
            turn = "X";
        
        if (!checkForWin())
            setTurn();
    }
}

function checkForWin() {
    var cells = document.getElementsByClassName("square");

    for (var i = 0; i < 9; i += 3) {
        if (cells[i].innerText !== "" && cells[i].innerText === cells[1 + i].innerText && cells[1 + i].innerText === cells[2 + i].innerText) {
            setWinner(cells[i].innerText);
            return true;
        }
    }

    for (var i = 0; i < 9; i += 3) {
        if (cells[i].innerText !== "" && cells[i].innerText === cells[3 + i].innerText && cells[3 + i].innerText === cells[6 + i].innerText) {
            setWinner(cells[i].innerText);
            return true;
        }
    }

    if (cells[0].innerText !== "" && cells[0].innerText === cells[4].innerText && cells[4].innerText === cells[8].innerText) {
        setWinner(cells[4].innerText);
        return true;
    }

    if (cells[2].innerText !== "" && cells[2].innerText === cells[4].innerText && cells[4].innerText === cells[6].innerText) {
        setWinner(cells[4].innerText);
        return true;
    }
    
}

var cells = document.getElementsByClassName("square");
for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", onClick);
}

setTurn();
*/
//CODE FOR CHECKERS
var squares = document.getElementsByClassName("square");
var dragging;

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('dragenter', onDragEnter);
    squares[i].addEventListener('drop', onDrop);
    squares[i].addEventListener('dragleave', onDragLeave);
    squares[i].addEventListener('dragstart', onDragStart);
    squares[i].addEventListener('dragend', onDragEnd);
}

function onDragStart(event){
    dragging = {
        x: event.target.data.x,
        y: event.target.data.y
    }
    console.log(event);
}

function onDragEnter(event) {
    if (event.target.classList.contains("checker") || event.target.classList.contains("green") || event.target.children.length > 0)
        return;
    event.preventDefault();
    event.target.style.backgroundColor = "yellow";
    console.log(event);
}

function onDrop(event) {
    console.log(event);
}

function onDragLeave(event) {
    event.target.style.backgroundColor = null;
    console.log(event);
}

function onDragEnd(event) {
    console.log(event);
    
    // do something with
}