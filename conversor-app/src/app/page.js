'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-[#3AAFA9] to-[#1E40AF] text-white p-6">
      <h1 className="text-5xl font-extrabold mb-10 drop-shadow-lg text-center">
        Bem-vindo ao Conversor Universal 💡
      </h1>

      <p className="text-lg text-center max-w-2xl mb-8">
        O Conversor Universal é um site simples e rápido para fazer conversões de valores de moeda, temperaturas, unidades e muito mais! 
        Converta entre diferentes unidades com facilidade e praticidade.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        <Link
          href="/conversor-dolar"
          className="bg-[#4299E1] hover:bg-[#3182CE] text-white text-center py-5 px-6 rounded-2xl shadow-xl font-semibold transition text-lg"
        >
          💵 Conversor Dólar/Real
        </Link>

        <Link
          href="/conversor-temperatura"
          className="bg-[#F6AD55] hover:bg-[#DD6B20] text-white text-center py-5 px-6 rounded-2xl shadow-xl font-semibold transition text-lg"
        >
          🌡️ Conversor de Temperatura
        </Link>

        <Link
          href="/conversor-unidade"
          className="bg-[#68D391] hover:bg-[#48BB78] text-white text-center py-5 px-6 rounded-2xl shadow-xl font-semibold transition text-lg"
        >
          📏 Conversor de Unidades
        </Link>

        <Link
          href="/sobre"
          className="bg-[#9F7AEA] hover:bg-[#6B46C1] text-white text-center py-5 px-6 rounded-2xl shadow-xl font-semibold transition text-lg"
        >
          ℹ️ Sobre a Desenvolvedora
        </Link>
      </div>
    </div>
  )
}

