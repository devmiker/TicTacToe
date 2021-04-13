/*
Mike Rodriguez
LWTech
JavaScript
Final Project
*/
import React, { useState } from 'react';
// imports the calculateWinner function from the helpers.js file
import { calculateWinner } from '../helpers';
// imports the board function from the baord.js file
import Board from './Board';


// This object is the styling for the board div below
const styles = {
    textAlign: 'center',
    margin: '10px auto',
    fontSize: '20px',
    fontWeight: '1000'
};

// This object is the styling for the 'start game' button
const buttonStyles = {
    backgroundColor: '#60DAFB',
    border: '2px solid #60DAFB',
    borderRadius: '10px',
    color: 'black',
    padding: '8px 16px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inlineBlock',
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '6px'
}

// this function handles the functionality of the Tic Tac Toe game
const Game = () => {
    // useStates allows you to have state variables in functional components
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    // uses the imported function and redeclares it with the board function as the parameter
    const winner = calculateWinner(board);

    const handleClick = i => {
        const boardCopy = [...board];
        // If user click an occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        // Put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    // this function creates the start button with styling
    // renders the moves to the board for the index.html file
    // and returns the winner, if winner, or who's turns is next in a ternary operator
    const renderMoves = () => (
        <button style={buttonStyles} onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    )

    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>
    )
}

// allows the function to be exported
export default Game;