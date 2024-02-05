import img from "../../../assets/game-logo.png";
import Player from "./Player/Player";
import "./TicTacToe.css";
export default function TicTakHeader() {
  return (
    <>
      <header>
        <img src={img} alt="logo" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        Game Board
      </div>
    </>
  );
}
