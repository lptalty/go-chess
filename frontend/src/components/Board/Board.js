import React, { useState } from 'react';
import Square from './Square';
import './Board.css'; // Make sure to create this CSS file for basic styling

// Initial setup of the chess board
const initialBoardState = [
    ['Rb', 'Nb', 'Bb', 'Qb', 'Kb', 'Bb', 'Nb', 'Rb'],
    ['Pb', 'Pb', 'Pb', 'Pb', 'Pb', 'Pb', 'Pb', 'Pb'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['Pw', 'Pw', 'Pw', 'Pw', 'Pw', 'Pw', 'Pw', 'Pw'],
    ['Rw', 'Nw', 'Bw', 'Qw', 'Kw', 'Bw', 'Nw', 'Rw']
];

const Board = () => {
    const [boardState, setBoardState] = useState(initialBoardState);
    const [selectedSquare, setSelectedSquare] = useState(null); // Stores [row, col] of selected square

    const handleSquareClick = (row, col) => {
        if (selectedSquare && selectedSquare[0] === row && selectedSquare[1] === col) {
            // Deselect if the same square is clicked again
            setSelectedSquare(null);
        } else if (boardState[row][col] && (!selectedSquare || (selectedSquare && boardState[row][col].charAt(0) !== boardState[selectedSquare[0]][selectedSquare[1]].charAt(0)))) {
            // Select the square if it has a piece and it's either the first selection
            // or a different color piece from the previously selected one
            setSelectedSquare([row, col]);
        } else if (selectedSquare) {
            // Move logic (simplified and without validation for this example)
            const newBoardState = [...boardState];
            const piece = newBoardState[selectedSquare[0]][selectedSquare[1]];
            newBoardState[selectedSquare[0]][selectedSquare[1]] = null; // Remove piece from current position
            newBoardState[row][col] = piece; // Place piece in new position
            setBoardState(newBoardState); // Update the board state
            setSelectedSquare(null); // Deselect piece after moving
        }
    };

    const createBoard = () => {
        return boardState.flatMap((row, i) => (
            <div key={i} className="board-row">
                {row.map((piece, j) => {
                    const squareColor = (i + j) % 2 === 0 ? 'white' : 'black';
                    const isSelected = selectedSquare && selectedSquare[0] === i && selectedSquare[1] === j;
                    return (
                        <Square
                            key={`${i}-${j}`}
                            color={squareColor}
                            piece={piece}
                            isSelected={isSelected}
                            onClick={() => handleSquareClick(i, j)}
                        />
                    );
                })}
            </div>
        ));
    };

    return (
        <div className="board">
            {createBoard()}
        </div>
    );
};

export default Board;
