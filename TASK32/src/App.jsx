import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const initialBoard = [
    ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
    ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
    ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"],
  ];

  const symbols = {
    wp: "♙",
    wr: "♖",
    wn: "♘",
    wb: "♗",
    wq: "♕",
    wk: "♔",
    bp: "♟",
    br: "♜",
    bn: "♞",
    bb: "♝",
    bq: "♛",
    bk: "♚",
  };

  const [board, setBoard] = useState(initialBoard);
  const [selected, setSelected] = useState(null);
  const [turn, setTurn] = useState("w");
  const [moves, setMoves] = useState([]);
  const [message, setMessage] = useState("");

  const [whiteTime, setWhiteTime] = useState(300);
  const [blackTime, setBlackTime] = useState(300);

  useEffect(() => {
    const timer = setInterval(() => {
      if (turn === "w") {
        setWhiteTime((t) => (t > 0 ? t - 1 : 0));
      } else {
        setBlackTime((t) => (t > 0 ? t - 1 : 0));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [turn]);

  const formatTime = (time) => {
    const m = Math.floor(time / 60);
    const s = time % 60;

    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  function isPathClear(board, sr, sc, er, ec) {
    const dr = Math.sign(er - sr);
    const dc = Math.sign(ec - sc);

    let r = sr + dr;
    let c = sc + dc;

    while (r !== er || c !== ec) {
      if (board[r][c] !== "") return false;

      r += dr;
      c += dc;
    }

    return true;
  }

  function isValidMove(board, sr, sc, er, ec) {
    const piece = board[sr][sc];

    if (!piece) return false;

    const target = board[er][ec];

    if (target && target[0] === piece[0]) return false;

    const dr = er - sr;
    const dc = ec - sc;

    switch (piece[1]) {
      case "p": {
        const dir = piece[0] === "w" ? -1 : 1;

        if (dc === 0 && target === "") {
          if (dr === dir) return true;

          if (
            dr === 2 * dir &&
            ((piece[0] === "w" && sr === 6) ||
              (piece[0] === "b" && sr === 1)) &&
            board[sr + dir][sc] === ""
          ) {
            return true;
          }
        }

        if (Math.abs(dc) === 1 && dr === dir && target !== "") {
          return true;
        }

        return false;
      }

      case "r":
        return (sr === er || sc === ec) && isPathClear(board, sr, sc, er, ec);

      case "b":
        return (
          Math.abs(dr) === Math.abs(dc) && isPathClear(board, sr, sc, er, ec)
        );

      case "q":
        return (
          (sr === er || sc === ec || Math.abs(dr) === Math.abs(dc)) &&
          isPathClear(board, sr, sc, er, ec)
        );

      case "n":
        return (
          (Math.abs(dr) === 2 && Math.abs(dc) === 1) ||
          (Math.abs(dr) === 1 && Math.abs(dc) === 2)
        );

      case "k":
        return Math.abs(dr) <= 1 && Math.abs(dc) <= 1;

      default:
        return false;
    }
  }

  function findKing(board, color) {
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (board[r][c] === color + "k") {
          return [r, c];
        }
      }
    }
  }

  function isCheck(board, color) {
    const [kr, kc] = findKing(board, color);

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const piece = board[r][c];

        if (piece && piece[0] !== color) {
          if (isValidMove(board, r, c, kr, kc)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  function isCheckMate(board, color) {
    if (!isCheck(board, color)) return false;

    for (let sr = 0; sr < 8; sr++) {
      for (let sc = 0; sc < 8; sc++) {
        const piece = board[sr][sc];

        if (!piece || piece[0] !== color) continue;

        for (let er = 0; er < 8; er++) {
          for (let ec = 0; ec < 8; ec++) {
            if (!isValidMove(board, sr, sc, er, ec)) continue;

            const temp = board.map((row) => [...row]);

            temp[er][ec] = temp[sr][sc];
            temp[sr][sc] = "";

            if (!isCheck(temp, color)) {
              return false;
            }
          }
        }
      }
    }

    return true;
  }

  const [gameOver, setGameOver] = useState(false);

  function handleClick(r, c) {
    if (gameOver) return;

    if (!selected) {
      const piece = board[r][c];

      if (!piece) return;

      if (piece[0] !== turn) return;

      setSelected([r, c]);
      return;
    }

    const [sr, sc] = selected;

    if (!isValidMove(board, sr, sc, r, c)) {
      setSelected(null);
      return;
    }

    const copy = board.map((row) => [...row]);

    copy[r][c] = copy[sr][sc];
    copy[sr][sc] = "";

    if (isCheck(copy, turn)) {
      setMessage("Illegal Move! King is in check.");
      setSelected(null);
      return;
    }

    const enemy = turn === "w" ? "b" : "w";

    if (isCheckMate(copy, enemy)) {
      const winner = turn === "w" ? "White" : "Black";

      setMessage(`CHECKMATE! ${winner} Wins!`);

      alert(`CHECKMATE!\n${winner} Wins!`);
      setGameOver(true);
    } else if (isCheck(copy, enemy)) {
      const checkedPlayer = enemy === "w" ? "White" : "Black";

      setMessage(`${checkedPlayer} King is in CHECK!`);

      alert(`${checkedPlayer} King is in CHECK!`);
    } else {
      setMessage("");
    }

    const notation = `${String.fromCharCode(97 + c)}${8 - r}`;

    setMoves((prev) => [...prev, notation]);

    setBoard(copy);
    setTurn(enemy);
    setSelected(null);
  }

  return (
    <div className="container">
      <div className="game-section">
        <h2 className="timer">White : {formatTime(whiteTime)}</h2>

        <div className="board">
          {board.map((row, r) =>
            row.map((cell, c) => {
              const dark = (r + c) % 2 === 1;

              return (
                <div
                  key={`${r}-${c}`}
                  className={`square ${dark ? "dark" : "light"} ${
                    selected && selected[0] === r && selected[1] === c
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => handleClick(r, c)}
                >
                  {symbols[cell]}
                </div>
              );
            }),
          )}
        </div>

        <h2 className="timer">Black : {formatTime(blackTime)}</h2>

        <div className="message">{message}</div>
      </div>

      <div className="info">
        <h2 className="turn">Turn : {turn === "w" ? "White" : "Black"}</h2>

        <h3>Move History</h3>

        <div className="moves">
          {moves.map((m, i) => (
            <div key={i} className="move">
              {i + 1}. {m}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
