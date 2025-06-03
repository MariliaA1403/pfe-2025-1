'use client'

import Link from 'next/link';

export default function ProjetosDesenvolvidos() {
  const projetos = [
    {
      nome: 'Conversores',
      descricao: 'Projeto de conversores desenvolvido no curso, publicado no Vercel.',
      url: 'https://pfe-2025-1-conversores.vercel.app/?classId=89eeb333-a901-449f-8426-7077ff260c56&assignmentId=085640c6-b7ee-4c57-9040-0ead7e0453c0&submissionId=12330bb4-297d-922a-bc65-6eb583dd7f13'
    },
    {
      nome: 'Jogo de Dados',
      descricao: 'Um divertido jogo de dados criado para prática e aprendizado.',
      url: 'https://pfe-2025-1-jogo-dados.vercel.app/?classId=89eeb333-a901-449f-8426-7077ff260c56&assignmentId=3d95c39d-ab04-47b2-aa87-381d2a099a94&submissionId=32a6f307-d63e-ec99-a4a3-c632edfee070'
    }
  ];

  const buttonStyle = {
    padding: '0.7rem 1.5rem',
    backgroundColor: '#f72585',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    marginTop: '2rem',
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '2rem',
      background: 'linear-gradient(135deg, #f72585, #720026)',
      color: '#f8f8f8',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '2rem' }}>
          Projetos Desenvolvidos
        </h1>

        {projetos.map((projeto, index) => (
          <div key={index} style={{
            backgroundColor: '#fff',
            color: '#5a2a83',
            padding: '1.5rem',
            borderRadius: '10px',
            marginBottom: '1.5rem',
            boxShadow: '0 3px 10px rgba(0,0,0,0.1)'
          }}>
            <h2>{projeto.nome}</h2>
            <p>{projeto.descricao}</p>
            <a href={projeto.url} target="_blank" rel="noopener noreferrer"
              style={{
                color: '#f72585',
                fontWeight: 'bold',
                textDecoration: 'none'
              }}>
              Ver projeto online
            </a>
          </div>
        ))}

        <div style={{ textAlign: 'center' }}>
          <Link href="/">
            <button style={buttonStyle}>
              Voltar ao Início
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}

