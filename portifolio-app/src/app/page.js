'use client'

import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '3rem',
      background: 'linear-gradient(135deg, #f72585, #720026)',
      color: '#f8f8f8',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <div style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textShadow: '0 0 8px rgba(0,0,0,0.4)' }}>
          Bem-vindo(a) ao meu Portifólio!
        </h1>
        <p style={{ fontSize: '1.25rem', lineHeight: '1.6', textShadow: '0 0 5px rgba(0,0,0,0.3)' }}>
          Sou Marília Albuquerque de Lima Ribeiro, dona desse site e fico muito feliz com a sua visita! 
          Aqui você pode conhecer minhas experiências, projetos e se divertir com um joguinho.
        </p>

        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
          <Link href="/experiencia-academica">
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
              Minha Experiência Acadêmica
            </button>
          </Link>

          <Link href="/experiencia-profissional">
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
              Minha Experiência Profissional
            </button>
          </Link>

           <Link href="/projetos-desenvolvidos">
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
              Meus Projetos
            </button>
          </Link>

          <Link href="/sobre-projeto">
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
              Sobre o Site
            </button>
          </Link>

          
           <Link href="/jogo-senha">
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
              Jogar
            </button>
          </Link>
        
        </div>
      </div>

      <img 
        src="/Foto perfil.jpg" 
        alt="Minha foto" 
        style={{ 
          width: '250px', 
          height: '250px', 
          borderRadius: '50%', 
          objectFit: 'cover', 
          boxShadow: '0 0 15px rgba(0,0,0,0.5)' 
        }} 
      />
    </div>
  );
}
