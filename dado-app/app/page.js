"use client";

import { useState } from "react";
import Dado from "../components/dado";

export default function Home() {
  const [valor, setValor] = useState(1);

  const jogarDado = () => {
    const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
    setValor(numeroAleatorio);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1>🎲 Jogo de Dados 🎲</h1>
      <Dado valor={valor} />
      <p
        style={{
          fontSize: "20px",
          marginTop: "10px",
          fontWeight: "bold",
        }}
      >
        Valor do Dado: {valor}
      </p>
      <button
        onClick={jogarDado}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#5391c7",
          borderRadius: "5px",
          color: "white",
          border: "none",
        }}
      >
        Jogar Dado
      </button>
    </div>
  );
}
