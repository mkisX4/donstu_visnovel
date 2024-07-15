class OneHundredTwentyEight_game extends RenJS.Plugin {
    onCall(){
    const TheGame = this.game
    TheGame.canvas.style.display = "none";
    const gameBody = TheGame.canvas.parentElement.getElementsByTagName("div")[0];
    gameBody.style.display = "block";
    let game_board = document.createElement('div');
    game_board.id = 'board';
    gameBody.appendChild(game_board);
    const board = gameBody.getElementsByTagName("div")[0];
    //const resetButton = document.getElementById("reset-button");
    const size = 4;
    let cells = [];
    let hasWon = false;

    function createBoard() {
        board.innerHTML = "";
        cells = [];
        hasWon = false;
        for (let i = 0; i < size * size; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            board.appendChild(cell);
            cells.push(cell);
        }
        generateNewCell();
        generateNewCell();
    }

    function generateNewCell() {
        let emptyCells = cells.filter(cell => cell.innerText === "");
        if (emptyCells.length === 0) return;
        let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        randomCell.innerText = Math.random() < 0.9 ? 2 : 4;
        randomCell.className = "cell cell-" + randomCell.innerText;
    }

    function move(direction) {
        let moved = false;
        for (let i = 0; i < size; i++) {
            let line = [];
            for (let j = 0; j < size; j++) {
                let index = (direction === "left" || direction === "right") ? i * size + j : j * size + i;
                if (direction === "right" || direction === "down") index = (direction === "right") ? i * size + (size - 1 - j) : (size - 1 - j) * size + i;
                line.push(cells[index]);
            }
            let mergedLine = mergeLine(line);
            for (let j = 0; j < size; j++) {
                let index = (direction === "left" || direction === "right") ? i * size + j : j * size + i;
                if (direction === "right" || direction === "down") index = (direction === "right") ? i * size + (size - 1 - j) : (size - 1 - j) * size + i;
                if (cells[index].innerText !== mergedLine[j].innerText) moved = true;
                cells[index].innerText = mergedLine[j].innerText;
                cells[index].className = "cell";
                if (mergedLine[j].innerText !== "") cells[index].classList.add("cell-" + mergedLine[j].innerText);

                // Check for win
                if (mergedLine[j].innerText === "128") hasWon = true;
            }
        }
        if (moved) generateNewCell();
        
        // Check for game over
        checkGameOver();

        // GameVictory
        if (hasWon) {
            board.remove();
            gameBody.style.display = "none";
            TheGame.managers.logic.vars["is_game_won"] = true;
            TheGame.canvas.style.marginRight = '0px';
            TheGame.canvas.style.display = "block";
            TheGame.resolveAction();
        }
    }

    function mergeLine(line) {
        let mergedLine = line.filter(cell => cell.innerText !== "");
        for (let i = 0; i < mergedLine.length - 1; i++) {
            if (mergedLine[i].innerText === mergedLine[i + 1].innerText) {
                mergedLine[i].innerText *= 2;
                mergedLine[i + 1].innerText = "";
            }
        }
        mergedLine = mergedLine.filter(cell => cell.innerText !== "");
        while (mergedLine.length < size) mergedLine.push(document.createElement("div"));
        return mergedLine;
    }

    function checkGameOver() {
        let emptyCells = cells.filter(cell => cell.innerText === "");
        if (emptyCells.length > 0) return;

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size - 1; j++) {
                // Check horizontal and vertical moves
                if (cells[i * size + j].innerText === cells[i * size + j + 1].innerText || 
                    cells[j * size + i].innerText === cells[(j + 1) * size + i].innerText) {
                    return;
                }
            }
        }

        // GameOver
        board.remove();
        gameBody.style.display = "none";
        TheGame.canvas.style.marginRight = '0px';
        TheGame.canvas.style.display = "block";
        TheGame.resolveAction();
    }

    gameBody.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") move("left");
        if (e.key === "ArrowRight") move("right");
        if (e.key === "ArrowUp") move("up");
        if (e.key === "ArrowDown") move("down");
    });

    const hammer = new Hammer(board);
    hammer.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    hammer.on("swipeleft", () => move("left"));
    hammer.on("swiperight", () => move("right"));
    hammer.on("swipeup", () => move("up"));
    hammer.on("swipedown", () => move("down"));

    //resetButton.addEventListener("click", createBoard);
    createBoard();
}
}

RenJSGame.addPlugin('OneHundredTwentyEight_game',OneHundredTwentyEight_game)
