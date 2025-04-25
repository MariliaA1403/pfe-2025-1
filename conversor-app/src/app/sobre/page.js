'use client'

import Link from 'next/link'

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#9F7AEA] via-[#805AD5] to-[#6B46C1] p-6">
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6 text-center">
        Sobre a Desenvolvedora 🖥️
      </h1>

      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-xl space-y-6">
        <p className="text-lg text-gray-800">
          Olá! Eu sou a Marília Albuquerque, a desenvolvedora por trás deste projeto. Com uma paixão por
          tecnologia, especialmente em TI, e um foco no desenvolvimento de aplicativos e soluções
          inovadoras, criei este site com a intenção de facilitar a vida de todos com ferramentas simples
          e eficientes.
        </p>

        <p className="text-lg text-gray-800">
          O objetivo principal do Conversor Universal é oferecer uma interface intuitiva para conversão
          de diferentes unidades e moedas. Eu sou apaixonada por aprender novas tecnologias e aplicar
          soluções criativas para problemas cotidianos.
        </p>
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
