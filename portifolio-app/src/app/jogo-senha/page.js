'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function JogoDaSenha() {
  const [senha, setSenha] = useState('');
  const [tentativa, setTentativa] = useState('');
  const [historico, setHistorico] = useState([]);
  const [tentativasRestantes, setTentativasRestantes] = useState(10);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);
  const [mensagemFinal, setMensagemFinal] = useState('');
  const [tentativasFeitas, setTentativasFeitas] = useState(0);

  useEffect(() => {
    iniciarNovoJogo();
  }, []);

  const gerarSenha = () => {
    const digitos = [];
    while (digitos.length < 4) {
      const numero = Math.floor(Math.random() * 10).toString();
      if (!digitos.includes(numero)) {
        digitos.push(numero);
      }
    }
    return digitos.join('');
  };

  const iniciarNovoJogo = () => {
    const novaSenha = gerarSenha();
    setSenha(novaSenha);
    setTentativa('');
    setHistorico([]);
    setTentativasRestantes(10);
    setJogoFinalizado(false);
    setMensagemFinal('');
    setTentativasFeitas(0);
  };

  const verificarTentativa = () => {
    if (tentativa.length !== 4 || new Set(tentativa).size !== 4) {
      alert('Digite uma senha de 4 dígitos diferentes.');
      return;
    }

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (tentativa[i] === senha[i]) {
        bulls++;
      } else if (senha.includes(tentativa[i])) {
        cows++;
      }
    }

    const novaTentativa = {
      tentativa,
      bulls,
      cows
    };

    const novoHistorico = [novaTentativa, ...historico];
    setHistorico(novoHistorico);
    setTentativasRestantes(tentativasRestantes - 1);
    setTentativasFeitas(tentativasFeitas + 1);

    if (bulls === 4) {
      setJogoFinalizado(true);
      setMensagemFinal('Parabéns! Você acertou a senha!');
    } else if (tentativasRestantes - 1 === 0) {
      setJogoFinalizado(true);
      setMensagemFinal(`Fim de jogo! Você não acertou. A senha era ${senha}`);
    }

    setTentativa('');
  };

  const mostrarSenha = () => {
    if (tentativasFeitas < 3) {
      alert('Você precisa fazer pelo menos 3 tentativas antes de poder ver a senha.');
      return;
    }
    if (confirm('Tem certeza que deseja ver a senha?')) {
      alert(`Senha: ${senha}`);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '2rem',
      background: 'linear-gradient(135deg, #720026, #f72585)',
      color: '#fff',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '1rem' }}>
          Jogo da Senha
        </h1>

        <p style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Descubra a senha de 4 dígitos (sem repetir). Você tem {tentativasRestantes} tentativas.
        </p>

        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
          <input
            type="text"
            maxLength={4}
            value={tentativa}
            onChange={(e) => setTentativa(e.target.value.replace(/\D/g, ''))}
            disabled={jogoFinalizado}
            style={{
              padding: '0.5rem',
              borderRadius: '8px',
              border: 'none',
              width: '100px',
              textAlign: 'center',
              fontSize: '1.2rem'
            }}
          />
          <button
            onClick={verificarTentativa}
            disabled={jogoFinalizado}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              backgroundColor: '#f72585',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
            }}
          >
            Verificar
          </button>
          <button
            onClick={mostrarSenha}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              backgroundColor: tentativasFeitas >= 3 ? '#06d6a0' : '#999',
              color: '#fff',
              border: 'none',
              cursor: tentativasFeitas >= 3 ? 'pointer' : 'not-allowed',
              fontWeight: 'bold',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
            }}
            disabled={tentativasFeitas < 3}
          >
            Mostrar Senha
          </button>
        </div>

        <div style={{
          backgroundColor: '#fff',
          color: '#333',
          padding: '1rem',
          borderRadius: '10px',
          marginTop: '2rem',
          minHeight: '200px',
          boxShadow: '0 3px 10px rgba(0,0,0,0.1)'
        }}>
          <h2>Histórico de Tentativas</h2>
          {historico.length === 0 && <p>Nenhuma tentativa ainda.</p>}
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {historico.map((item, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>
                <strong>{item.tentativa}</strong> ➤ {item.bulls} dígitos certos na posição certa | {item.cows} dígitos certos na posição errada
              </li>
            ))}
          </ul>
        </div>

        {jogoFinalizado && (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h2>{mensagemFinal}</h2>
            <button
              onClick={iniciarNovoJogo}
              style={{
                padding: '0.7rem 1.5rem',
                backgroundColor: '#f72585',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                marginTop: '1rem'
              }}
            >
              Novo Jogo
            </button>
          </div>
        )}
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link href="/">
          <button
            style={{
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
              marginBottom: '1rem'
            }}
          >
            Voltar ao Início
          </button>
        </Link>
      </div>
    </div>
  );
}
