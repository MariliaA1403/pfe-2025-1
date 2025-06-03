'use client'

import Link from 'next/link';

export default function TecnologiasUtilizadas() {
  const tecnologias = [
    'Next.js',
    'React',
    'JavaScript',
    'HTML5',
    'CSS3 (estilização inline)',
    'Node.js (ambiente para rodar o Next.js)',
    'Vercel (para hospedagem)',
    'GitHub (codespace)',
  ];

  return (
    <div style={{
      minHeight: '100vh',
      padding: '2rem',
      background: 'linear-gradient(135deg, #f72585, #720026)',
      color: '#f8f8f8',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
        Sobre o Projeto
      </h1>

      <p style={{
        maxWidth: '800px',
        margin: '0 auto 2rem auto',
        textAlign: 'center',
        fontSize: '1.1rem',
        lineHeight: '1.6',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '1rem',
        borderRadius: '10px'
      }}>
        Este site foi desenvolvido com o objetivo de apresentar minhas experiências acadêmicas e profissionais,
        além de compartilhar informações sobre minha trajetória. Nele você encontrará uma página inicial de boas-vindas, 
        e botões para as páginas: sobre minhas experiências profissionais, uma sobre minhas experiências acadêmicas, página do jogo 
        da senha e também esta, que explica as tecnologias utilizadas para criar o projeto.
      </p>

      <div style={{
        backgroundColor: '#fff',
        padding: '1.5rem',
        borderRadius: '10px',
        boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
        color: '#333',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{ textAlign: 'center', color: '#5a2a83' }}>Tecnologias Utilizadas</h2>
        <ul style={{ paddingLeft: '1.2rem', marginTop: '1rem' }}>
          {tecnologias.map((item, index) => (
            <li key={index} style={{ marginBottom: '0.7rem' }}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link href="/">
          <button style={{
            padding: '0.7rem 1.5rem',
            backgroundColor: '#f72585',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          }}>
            Voltar ao Início
          </button>
        </Link>
      </div>
    </div>
  );
}
