import React, { useState, useEffect } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [isUserTurn, setIsUserTurn] = useState(true); // User = X

  useEffect(() => {
    const win = calculateWinner(board);
    if (win) {
      setWinner(win);
      return;
    }

    if (!isUserTurn && board.some((cell) => cell === null)) {
      setTimeout(makeComputerMove, 500);
    }
  }, [board, isUserTurn]);

  const handleClick = (index) => {
    if (board[index] || winner || !isUserTurn) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsUserTurn(false);
  };

  const makeComputerMove = () => {
    if (winner) return;

    const emptyIndexes = board
      .map((v, i) => (v === null ? i : null))
      .filter((v) => v !== null);

    if (emptyIndexes.length === 0) return;

    const move =
      findBestMove(board, "O") ??
      findBestMove(board, "X") ??
      emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];

    const newBoard = [...board];
    newBoard[move] = "O";
    setBoard(newBoard);
    setIsUserTurn(true);
  };

  const renderSquare = (index) => (
    <button
      key={index}
      onClick={() => handleClick(index)}
      style={{
        width: "70px",
        height: "70px",
        fontSize: "28px",
        fontWeight: "600",
        border: "2px solid #e5e7eb",
        backgroundColor: "#fcfcfcff",
        color: board[index] === "X" ? "#2563eb" : "#dc2626",
        cursor: board[index] || winner ? "default" : "pointer",
        transition: "background 0.2s",
      }}
    >
      {board[index]}
    </button>
  );

  const getStatus = () => {
    if (winner === "X") return "🎉 You have won!";
    
    if (winner === "O") return "👻 Moksh has won!";
    if (board.every(Boolean)) return "😐 It's a draw!";
    return "Your turn (X)";
  };

  return (
    <div
      style={{
        maxWidth: "320px",
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        textAlign: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: "10px", color: "#111827" }}>
        Tic Tac Toe
      </h2>

      <p
        style={{
          marginBottom: "16px",
          fontWeight: "500",
          color: winner ? "#16a34a" : "#374151",
        }}
      >
        {getStatus()}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 70px)",
          gap: "6px",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {board.map((_, i) => renderSquare(i))}
      </div>

      <button
        onClick={() => {
          setBoard(Array(9).fill(null));
          setWinner(null);
          setIsUserTurn(true);
        }}
        style={{
          padding: "10px 16px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#2563eb",
          color: "#ffffff",
          fontWeight: "500",
          cursor: "pointer",
        }}
      >
        Reset Game
      </button>
    </div>
  );
};

// ---------------- LOGIC ----------------

function calculateWinner(board) {
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

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function findBestMove(board, player) {
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

  for (let [a, b, c] of lines) {
    const line = [board[a], board[b], board[c]];
    if (
      line.filter((v) => v === player).length === 2 &&
      line.includes(null)
    ) {
      return [a, b, c][line.indexOf(null)];
    }
  }
  return null;
}

export default TicTacToe;
