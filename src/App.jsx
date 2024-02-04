import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [currBoard, setCurrBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [turn, setTurn] = useState(0);
  const [winner, setWinnner] = useState("Noone");

  const takeTurn = (i, j) => {
    if (winner == "O" || winner == "X") {
      return;
    }
    if (currBoard[i][j] == 0) {
      if (turn == 0) {
        const tempArray = [...currBoard];
        tempArray[i][j] = 1;
        setCurrBoard(tempArray);
        setTurn(1);
      }
      if (turn == 1) {
        const tempArray = [...currBoard];
        tempArray[i][j] = 2;
        setCurrBoard(tempArray);
        setTurn(0);
      }
      console.log(currBoard);
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

  useEffect(() => {
    console.log(currBoard);
  }, []);

  return (
    <>
      <div className="board flex justify-center flex-col items-center p-8">
        <h1 className="text-4xl text-white ">Tic Tac Toe</h1>
        <h2 className="pt-12"> Winner : {winner}</h2>
        <table className=" border ">
          <tr>
            <td
              onClick={() => {
                takeTurn(0, 0);
              }}
            >
              {currBoard[0][0] === 1 ? "X" : currBoard[0][0] === 2 ? "O" : " "}
            </td>
            <td
              onClick={() => {
                takeTurn(0, 1);
              }}
            >
              {" "}
              {currBoard[0][1] === 1 ? "X" : currBoard[0][1] === 2 ? "O" : " "}
            </td>
            <td
              onClick={() => {
                takeTurn(0, 2);
              }}
            >
              {" "}
              {currBoard[0][2] === 1 ? "X" : currBoard[0][2] === 2 ? "O" : " "}
            </td>
          </tr>
          <tr>
            <td
              onClick={() => {
                takeTurn(1, 0);
              }}
            >
              {" "}
              {currBoard[1][0] === 1 ? "X" : currBoard[1][0] === 2 ? "O" : " "}
            </td>
            <td
              onClick={() => {
                takeTurn(1, 1);
              }}
            >
              {" "}
              {currBoard[1][1] === 1 ? "X" : currBoard[1][1] === 2 ? "O" : " "}
            </td>
            <td
              onClick={() => {
                takeTurn(1, 2);
              }}
            >
              {" "}
              {currBoard[1][2] === 1 ? "X" : currBoard[1][2] === 2 ? "O" : " "}
            </td>
          </tr>
          <tr>
            <td
              onClick={() => {
                takeTurn(2, 0);
              }}
            >
              {" "}
              {currBoard[2][0] === 1 ? "X" : currBoard[2][0] === 2 ? "O" : " "}
            </td>
            <td
              onClick={() => {
                takeTurn(2, 1);
              }}
            >
              {" "}
              {currBoard[2][1] === 1 ? "X" : currBoard[2][1] === 2 ? "O" : " "}
            </td>
            <td
              onClick={() => {
                takeTurn(2, 2);
              }}
            >
              {" "}
              {currBoard[2][2] === 1 ? "X" : currBoard[2][2] === 2 ? "O" : " "}
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default App;
