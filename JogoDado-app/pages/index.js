import { useState } from "react";

export default function Home() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [winner, setWinner] = useState("");
  const [round, setRound] = useState(1); // Contador de rodadas
  const [gameOver, setGameOver] = useState(false); // Para verificar se o jogo acabou
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true); // Para saber de quem é a vez

  function rollDice(player) {
    if (gameOver) return; // Não rolar os dados se o jogo tiver acabado

    const roll = Math.floor(Math.random() * 6) + 1;
    if (player === 1) {
      setPlayer1(roll);
      setIsPlayer1Turn(false); // Passar a vez para o Jogador 2
    } else {
      setPlayer2(roll);
      setIsPlayer1Turn(true); // Passar a vez para o Jogador 1
    }
  }

  // Função que calcula o vencedor e a próxima rodada
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

    // Incrementar a contagem de rodadas, mas garantir que não ultrapasse 5
    if (round < 5) {
      setRound(round + 1);
    } else {
      setGameOver(true); // Fim do jogo após 5 rodadas
    }
  }

  function restartGame() {
    // Reiniciar todas as variáveis
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
            disabled={!isPlayer1Turn || gameOver} // Desabilitar o botão se não for a vez do jogador ou se o jogo acabou
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
            disabled={isPlayer1Turn || gameOver} // Desabilitar o botão se não for a vez do jogador ou se o jogo acabou
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

      {/* Mostrar botão de "Finalizar Rodada" apenas se não for o fim do jogo */}
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

