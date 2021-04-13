/*
Mike Rodriguez
LWTech
JavaScript
Final Project
*/
// This function lists all the combinations that calculate the winner in const lines
// The function uses a for loop to calculate if an array equals one of the wins
// The function is also exported inline
export function calculateWinner(squares) {
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    //the following checks if the wins above match the squares an their input 
    for (let i = 0; i < wins.length; i++) {
        const [a, b, c] = wins[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}