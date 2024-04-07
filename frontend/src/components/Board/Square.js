import React from "react";
import "./Square.css"; // Assuming you'll add some CSS for squares

const pieceToUnicode = {
  Pw: "♙",
  Rw: "♖",
  Nw: "♘",
  Bw: "♗",
  Qw: "♕",
  Kw: "♔",
  Pb: "♟︎",
  Rb: "♜",
  Nb: "♞",
  Bb: "♝",
  Qb: "♛",
  Kb: "♚",
};

const Square = ({ color, piece, onClick, isSelected }) => {
  const selectedStyle = isSelected
    ? { boxShadow: "0 0 10px 2px rgba(0,0,0,0.5)" }
    : {};

  return (
    <button
      className={`square ${color}`}
      onClick={onClick}
      style={selectedStyle}
    >
      {piece ? pieceToUnicode[piece] : ""}
    </button>
  );
};

export default Square;
