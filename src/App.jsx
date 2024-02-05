import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cell from "./Cell";
import GotoButton from "./GotoButton";

function App() {
  const [currBoard, setCurrBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [turn, setTurn] = useState(0);
  const [winner, setWinnner] = useState("Noone");
  const [curBoardInHistory, setCurBoardInHistory] = useState(0);
  const [history, setHistory] = useState([
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
  ]);

  const historyUpdate = (newBoard) => {
    setHistory((prevHistory) => [...prevHistory, [...newBoard]]);
  };

  const gotoMove2 = () => {
    console.log(history[1]);
    setCurrBoard(history[1]);
  };

  const checkWinner = (i, j) => {
    if (
      (currBoard[i][0] == 1 && currBoard[i][1] == 1 && currBoard[i][2] == 1) ||
      (currBoard[0][j] == 1 && currBoard[1][j] == 1 && currBoard[2][j] == 1) ||
      (currBoard[0][0] == 1 && currBoard[1][1] == 1 && currBoard[2][2]) == 1 ||
      (currBoard[0][2] == 1 && currBoard[1][1] == 1 && currBoard[2][0] == 1)
    ) {
      setWinnner("X");
    }
    if (
      (currBoard[i][0] == 2 && currBoard[i][1] == 2 && currBoard[i][2] == 2) ||
      (currBoard[0][j] == 2 && currBoard[1][j] == 2 && currBoard[2][j] == 2) ||
      (currBoard[0][0] == 2 && currBoard[1][1] == 2 && currBoard[2][2]) == 2 ||
      (currBoard[0][2] == 2 && currBoard[1][1] == 2 && currBoard[2][0] == 2)
    ) {
      setWinnner("O");
    }
  };

  const takeTurn = (i, j) => {
    if (winner == "O" || winner == "X") {
      return;
    }
    if (currBoard[i][j] == 0) {
      if (turn == 0) {
        const tempArray = [...currBoard];
        tempArray[i][j] = 1;
        setCurrBoard(tempArray);
        let newArray = tempArray.map((row) => [...row]);

        historyUpdate(newArray);

        console.log(history);

        setTurn(1);
      }
      if (turn == 1) {
        const tempArray = [...currBoard];
        tempArray[i][j] = 2;
        let newArray = tempArray.map((row) => [...row]);

        setCurrBoard(tempArray);
        historyUpdate(newArray);
        console.log(history);

        setTurn(0);
      }
      console.log(currBoard);

      const winnerPlayer = checkWinner(i, j);
      if (
        (currBoard[i][0] == 1 &&
          currBoard[i][1] == 1 &&
          currBoard[i][2] == 1) ||
        (currBoard[0][j] == 1 &&
          currBoard[1][j] == 1 &&
          currBoard[2][j] == 1) ||
        (currBoard[0][0] == 1 && currBoard[1][1] == 1 && currBoard[2][2]) ==
          1 ||
        (currBoard[0][2] == 1 && currBoard[1][1] == 1 && currBoard[2][0] == 1)
      ) {
        setWinnner("X");
      }
      if (
        (currBoard[i][0] == 2 &&
          currBoard[i][1] == 2 &&
          currBoard[i][2] == 2) ||
        (currBoard[0][j] == 2 &&
          currBoard[1][j] == 2 &&
          currBoard[2][j] == 2) ||
        (currBoard[0][0] == 2 && currBoard[1][1] == 2 && currBoard[2][2]) ==
          2 ||
        (currBoard[0][2] == 2 && currBoard[1][1] == 2 && currBoard[2][0] == 2)
      ) {
        setWinnner("O");
      }
    }
  };

  return (
    <>
      <div className="board flex justify-center flex-col items-center p-8">
        <h1 className="text-4xl text-white ">Tic Tac Toe</h1>
        {winner == "X" || winner == "O" ? (
          <h2 className="pt-12">Game Over and winner is {winner}</h2>
        ) : (
          <h2 className="pt-12">Next Turn : {turn == 0 ? "X" : "O"}</h2>
        )}
        <table className=" border ">
          {currBoard.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <Cell
                  key={j}
                  value={currBoard[i][j]}
                  onClick={() => takeTurn(i, j)}
                />
              ))}
            </tr>
          ))}
        </table>
        <div className="gotoTurn flex flex-col">
          {history.map((board, index) => (
            <GotoButton
              key={index}
              bno={index}
              onGotoMove={() => {
                // setWinnner("");
                setCurrBoard(board);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
