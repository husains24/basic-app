import { useState } from "react";
import img from "../../../assets/game-logo.png";
import GameBoard from "./Player/GameBoard";
import Player from "./Player/Player";
import "./TicTacToe.css";
export default function TicTakHeader() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((currentlyActivePlayer) =>
      currentlyActivePlayer === "X" ? "O" : "X"
    );
  }
  return (
    <>
      <header>
        <img src={img} alt="logo" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </>
  );
}
