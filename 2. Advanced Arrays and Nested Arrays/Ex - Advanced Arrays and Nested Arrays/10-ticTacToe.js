function ticTacToe(array) {

    //const board = new Array(3).fill().map(() => new Array(3).fill(false));
    const board = [[false, false, false],
    [false, false, false],
    [false, false, false]];
    let player = "X";

    for (let line of array) {
        let [row, col] = line.split(" ").map((el) => Number(el));

        if (board[row][col] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        board[row][col] = player;

        for (let i = 0; i < 3; i++) {

            if ((board[i][0] === player &&
                board[i][1] === player &&
                board[i][2] === player) ||
                (board[0][i] === player &&
                board[1][i] === player &&
                board[2][i] === player)) {
                    
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            }
            if ((board[0][0] === player &&
                board[1][1] === player &&
                board[2][2] === player) ||
                (board[0][2] === player &&
                    board[1][1] === player &&
                    board[2][0] === player)) {
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            }
        }
        let includesFalse = false;
        for (let row = 0; row < board.length; row++) {
            if (board[row].includes(false)) {
                includesFalse = true;
            }
        }
        if (!includesFalse) {
            console.log("The game ended! Nobody wins :(");
            printMatrix();
            return;
        }
        player = player === "X" ? "O" : "X";

    }
    function printMatrix() {
        for (let row = 0; row < board.length; row++) {
            console.log(board[row].join("\t"));
        }
    }

}
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);
/* 
Player O wins!
O	X	X
X	O	X
O	false	O
*/
ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]);
/* 
This place is already taken. Please choose another!
Player X wins!
X	X	X
false	O	O
false	false	false
*/
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);
/* 
The game ended! Nobody wins :(
O	X	X
X	X	O
O	O	X
*/