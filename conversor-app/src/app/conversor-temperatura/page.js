'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ConversorTemperatura() {
  const [valor, setValor] = useState('')
  const [tipo, setTipo] = useState('Celsius')
  const [resultado, setResultado] = useState(null)

  const converter = () => {
    const temp = parseFloat(valor)
    if (isNaN(temp)) {
      setResultado('Valor inválido')
      return
    }

    let resultadoFinal
    if (tipo === 'Celsius') {
      resultadoFinal = `${((temp * 9) / 5 + 32).toFixed(2)} °F`
    } else {
      resultadoFinal = `${(((temp - 32) * 5) / 9).toFixed(2)} °C`
    }

    setResultado(resultadoFinal)
  }

  useEffect(() => {
    if (valor !== '') {
      converter()
    }
  }, [valor, tipo]) // A conversão será chamada sempre que o valor ou tipo mudar

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F6AD55] via-[#FFA500] to-[#FF4500] p-6">
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6 text-center">
        Conversor de Temperatura 🌡️
      </h1>

      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg space-y-6">
        <input
          type="number"
          placeholder={`Temperatura em ${tipo}`}
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF4500] transition"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />

        <select
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF4500] transition"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="Celsius">Celsius para Fahrenheit</option>
          <option value="Fahrenheit">Fahrenheit para Celsius</option>
        </select>

        {resultado && (
          <div className="text-2xl font-semibold text-center text-[#FF4500]">
            Resultado: <span className="font-bold text-[#F6AD55]">{resultado}</span>
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


