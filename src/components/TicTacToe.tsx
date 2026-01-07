import { useState } from 'react';
import GameIcon from './GameIcon';

const TicTacToe = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((square) => square !== null);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];

    newBoard[index] = isXNext ? 'X' : 'O';

    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Assignment 3 - X Mix Drix</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="row g-2">
            {board.map((square, index) => (
              <div key={index} className="col-4">
                <div
                  className="card text-center d-flex align-items-center justify-content-center"
                  style={{ height: 100, cursor: 'pointer' }}
                  onClick={() => handleClick(index)}
                >
                  <GameIcon value={square} style={{ width: '60%', height: '60%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {(winner || isDraw) && (
        <div className="text-center mt-4">
          {winner && <h2>Winner: <GameIcon value={winner} style={{ width: 30 }} /></h2>}
          {isDraw && <h2>It's a Draw!</h2>}
          <button className="btn btn-primary mt-2" onClick={resetGame}>
            Play Again
          </button>
        </div>
      )}
      
      {!winner && !isDraw && (
        <div className="text-center mt-4">
          <h3>Currently Playing: <GameIcon value={isXNext ? 'X' : 'O'} style={{ width: 30 }} /></h3>
        </div>
      )}
    </div>
  );
}

export default TicTacToe;
