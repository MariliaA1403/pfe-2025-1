import { useState } from "react";

export default function Home() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [winner, setWinner] = useState("");
  const [round, setRound] = useState(1); 
  const [gameOver, setGameOver] = useState(false); 
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true); 

  function rollDice(player) {
    if (gameOver) return; 

    const roll = Math.floor(Math.random() * 6) + 1;
    if (player === 1) {
      setPlayer1(roll);
      setIsPlayer1Turn(false); 
    } else {
      setPlayer2(roll);
      setIsPlayer1Turn(true); 
    }
  }

  
  function endRound() {
    if (player1 && player2) {
      if (player1 > player2) {
        setWinner("Jogador 1 ganhou!");
      } else if (player2 > player1) {
        setWinner("Jogador 2 ganhou!");
      } else {
        setWinner("Empate!");
      }
    }

    
    if (round < 5) {
      setRound(round + 1);
    } else {
      setGameOver(true); 
    }
  }

  function restartGame() {
    
    setPlayer1(null);
    setPlayer2(null);
    setWinner("");
    setRound(1);
    setGameOver(false);
    setIsPlayer1Turn(true);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Jogo de Dados</h1>

      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "30px" }}>
        <div>
          <h2>Jogador 1:</h2>
          {player1 && <img src={`/Dado${player1}.png`} alt={`Dado Jogador 1: ${player1}`} style={{ width: "100px", height: "100px" }} />}
          <button
            onClick={() => rollDice(1)}
            disabled={!isPlayer1Turn || gameOver}
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
          >
            Rolar Dados
          </button>
        </div>

        <div>
          <h2>Jogador 2:</h2>
          {player2 && <img src={`/Dado${player2}.png`} alt={`Dado Jogador 2: ${player2}`} style={{ width: "100px", height: "100px" }} />}
          <button
            onClick={() => rollDice(2)}
            disabled={isPlayer1Turn || gameOver} 
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
          >
            Rolar Dados
          </button>
        </div>
      </div>

      <h2>{winner}</h2>
      <h3>Rodada: {round} / 5</h3>

      
      {!gameOver && player1 && player2 && (
        <div>
          <button
            onClick={endRound}
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            Finalizar Rodada
          </button>
        </div>
      )}

      {gameOver && (
        <div>
          <h3>Fim de jogo! As 5 rodadas foram concluídas.</h3>
          <button
            onClick={restartGame}
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "20px",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
          >
            Jogar Novamente
          </button>
        </div>
      )}
    </div>
  );
}

