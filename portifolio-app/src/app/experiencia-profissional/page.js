'use client'

import Link from 'next/link';

export default function ExperienciaProfissional() {
  const experiencias = [
    {
      cargo: 'Estagiária de Suporte em TI',
      empresa: 'Secretaria de Desenvolvimento Agrário – Governo de Pernambuco',
      periodo: '2024 – Atual',
      descricao: `
        • Suporte técnico a usuários;
        • Manutenção e configuração de microcomputadores, impressoras e periféricos;
        • Instalação e atualização de softwares e sistemas operacionais;
        • Apoio na configuração de redes e solução de problemas de conectividade;
        • Criação de planilhas de controle e suporte na elaboração de relatórios técnicos.
      `
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
        Experiência Profissional
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
            <h2 style={{ margin: 0, color: '#5a2a83' }}>{item.cargo}</h2>
            <h3 style={{ marginTop: '0.2rem', fontWeight: 'normal' }}>{item.empresa}</h3>
            <p style={{ fontStyle: 'italic', color: '#666' }}>{item.periodo}</p>
            <p style={{ whiteSpace: 'pre-line' }}>{item.descricao}</p>
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
