/*
Mike Rodriguez
LWTech
JavaScript
Final Project
*/
import React from 'react';
// imports the individual squares created for the board
import Square from './Square';

// the following object is the styling of the board used in Tic Tac Toe
const style = {
    border: '4px solid #60DAFB',
    borderRadius: '10px',
    backgroundColor: '#60DAFB',
    width: '250px',
    height: '250px',
    marginTop: '60px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

// The following function uses a function to create a div element to the board for the game 
const Board = ({ squares, onClick }) => (
    <div style={style}>
        {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </div>
)

export default Board;