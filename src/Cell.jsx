import React from "react";

const BoardCell = ({ value, onClick }) => {
  return (
    <td onClick={onClick}>{value === 1 ? "X" : value === 2 ? "O" : " "}</td>
  );
};

export default BoardCell;
