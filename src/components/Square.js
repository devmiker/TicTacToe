/*
Mike Rodriguez
LWTech
JavaScript
Final Project
*/
import React from 'react';

// This object provides the styling for the squares in the board
const style = {
    backgroundColor: '#FFFFFF',
    border: '2px solid #60DAFB',
    borderRadius: '10px',
    fontSize: '50px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};

// This function provides the game logic for the squares
const Square = ({ value, onClick }) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
);

// allows the fucntion to be exported
export default Square;