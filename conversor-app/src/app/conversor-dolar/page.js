'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ConversorDolar() {
  const [valorDolar, setValorDolar] = useState('')
  const [cotacao, setCotacao] = useState('')
  const [resultado, setResultado] = useState('')

  useEffect(() => {
    const valor = parseFloat(valorDolar)
    const taxa = parseFloat(cotacao)

    if (!isNaN(valor) && !isNaN(taxa)) {
      setResultado((valor * taxa).toFixed(2))
    } else {
      setResultado('')
    }
  }, [valorDolar, cotacao])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0F4C75] via-[#1A8D8E] to-[#1AAB8B] p-6">
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6 text-center">
        Conversor Dólar para Real 💵
      </h1>

      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg space-y-6">
        <input
          type="number"
          placeholder="Valor em Dólar (USD)"
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#68D391] transition"
          value={valorDolar}
          onChange={(e) => setValorDolar(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cotação do Dólar (ex: 5.10)"
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#68D391] transition"
          value={cotacao}
          onChange={(e) => setCotacao(e.target.value)}
        />

        {resultado && (
          <div className="text-2xl font-semibold text-center text-[#1A8D8E]">
            Resultado: <span className="font-bold text-[#3B82F6]">R$ {resultado}</span>
          </div>
        )}
      </div>

      <Link
        href="/"
        className="mt-8 inline-block bg-[#4299E1] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#3182CE] transition"
      >
        Voltar à Home
      </Link>
    </div>
  )
}

