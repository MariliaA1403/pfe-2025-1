'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ConversorUnidade() {
  const [tipo, setTipo] = useState('m-km')
  const [valor1, setValor1] = useState('')
  const [valor2, setValor2] = useState('')

  const converter = (valor, origem) => {
    const numero = parseFloat(valor)
    if (isNaN(numero)) {
      setValor1('')
      setValor2('')
      return
    }

    let convertido

    switch (tipo) {
      case 'm-km':
        convertido = origem === 'valor1' ? (numero / 1000) : (numero * 1000)
        break
      case 'km-m':
        convertido = origem === 'valor1' ? (numero * 1000) : (numero / 1000)
        break
      case 'g-kg':
        convertido = origem === 'valor1' ? (numero / 1000) : (numero * 1000)
        break
      case 'kg-g':
        convertido = origem === 'valor1' ? (numero * 1000) : (numero / 1000)
        break
      default:
        convertido = ''
    }

    if (origem === 'valor1') {
      setValor1(valor)
      setValor2(convertido.toString())
    } else {
      setValor2(valor)
      setValor1(convertido.toString())
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#68D391] via-[#48BB78] to-[#38A169] p-6">
      <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-6">
        Conversor de Unidades
      </h1>

      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md space-y-4">
        <select
          className="w-full p-3 border border-gray-300 rounded-md"
          value={tipo}
          onChange={(e) => {
            setTipo(e.target.value)
            setValor1('')
            setValor2('')
          }}
        >
          <option value="m-km">Metros ↔ Quilômetros</option>
          <option value="km-m">Quilômetros ↔ Metros</option>
          <option value="g-kg">Gramas ↔ Quilos</option>
          <option value="kg-g">Quilos ↔ Gramas</option>
        </select>

        <input
          type="number"
          placeholder="Valor 1"
          className="w-full p-3 border border-gray-300 rounded-md"
          value={valor1}
          onChange={(e) => converter(e.target.value, 'valor1')}
        />

        <input
          type="number"
          placeholder="Valor 2"
          className="w-full p-3 border border-gray-300 rounded-md"
          value={valor2}
          onChange={(e) => converter(e.target.value, 'valor2')}
        />
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

