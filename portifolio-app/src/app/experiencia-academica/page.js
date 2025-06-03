'use client'

import Link from 'next/link';

export default function ExperienciaAcademica() {
  const experiencias = [

        {
      curso: 'Residência Tecnológica',
      instituicao: 'FCxLabs - Home Center Ferreira Costa',
      periodo: '2025.1',
      descricao: 'Aulas práticas e teóricas de SQL e PL/SQL ministradas por Umberto Marrone, DBA Sênior da Ferreira Costa.'
    },
   {
      curso: 'Iniciação Científica - PIBIC',
      instituicao: 'Universidade Católica de Pernambuco',
      periodo: '2024 - 2025',
      descricao: 'Tema: Segmentação de Imagens Médicas com Deep Learning (Câncer de Pulmão).'
    },
   {
      curso: 'Iniciação Científica - PIC',
      instituicao: 'Centro Universitário Maurício de Nassau',
      periodo: '2024 - 2025',
      descricao: 'Tema: Coleta e Preparação de Dados de Saneamento– Recife/PE.'
    },

    {
      curso: 'Sistemas para Internet',
      instituicao: 'Universidade Católica de Pernambuco (UNICAP)',
      periodo: '2024 - 2026',
      descricao: 'Estudo focado em desenvolvimento de software, banco de dados, redes e engenharia de software.'
    },
    {
      curso: 'Análise e Desenvolvimento de Sistemas',
      instituicao: 'Centro Universitário Maurício de Nassau (UNINASSAU)',
      periodo: '2024 - 2025',
      descricao: 'Estudo focado em desenvolvimento de software, mobile, redes e tecnologia em geral.'
    },
  
       {
      curso: 'Curso Técnico em Redes de Computadores',
      instituicao: 'Escola Técnica Estadual Professor Lucilo Ávila Pessoa',
      periodo: '2020 - 2022',
      descricao: 'Aprendizado prático em configuração de redes, manutenção de hardware e banco de dados.'
    },
  
  ];

  return (
    <div style={{
      minHeight: '100vh',
      padding: '2rem',
      background: 'linear-gradient(135deg, #f72585, #720026)',
      color: '#f8f8f8',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>
        Experiência Acadêmica
      </h1>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {experiencias.map((item, index) => (
          <div key={index} style={{
            backgroundColor: '#fff',
            padding: '1.5rem',
            borderRadius: '10px',
            boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
            marginBottom: '1.5rem',
            color: '#333',
          }}>
            <h2 style={{ margin: 0, color: '#5a2a83' }}>{item.curso}</h2>
            <h3 style={{ marginTop: '0.2rem', fontWeight: 'normal' }}>{item.instituicao}</h3>
            <p style={{ fontStyle: 'italic', color: '#666' }}>{item.periodo}</p>
            <p>{item.descricao}</p>
          </div>
        ))}
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
