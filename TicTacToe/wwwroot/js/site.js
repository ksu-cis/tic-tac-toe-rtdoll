// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var turn = "X";

var cells = document.getElementByClassName("cell");







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