import React, { useState } from 'react';
import { ForgotPassword } from './ForgotPassword';
import { loginUser } from '../../services/api';

export function Login({ onLogin }) {
  const [isForgot, setIsForgot] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Petición real al backend conectado a SQL Server
      const data = await loginUser(email, password);
      console.log('Login exitoso:', data.user);

      // Guardar la sesión del usuario real
      localStorage.setItem('usuario', JSON.stringify(data.user));

      // Si el componente padre pasa una función onLogin, la ejecutamos; si no, redirigimos
      if (onLogin) {
        onLogin(data.user);
      } else {
        window.location.href = '/dashboard';
      }
    } catch (err) {
      setError(err.message || 'Correo o contraseña incorrectos');
    } finally {
      setLoading(false);
    }
  };

  if (isForgot) {
    return <ForgotPassword onBackToLogin={() => setIsForgot(false)} />;
  }

  return (
    <div 
      style={{ 
        minHeight: '100vh', 
        display: 'grid', 
        placeItems: 'center', 
        background: 'radial-gradient(circle at 50% 30%, #1e3a8a 0%, #0b0d13 70%)', // Fondo con destello azul suave
        padding: 25 
      }}
    >
      <div 
        className="card" 
        style={{ 
          width: 'min(430px, 100%)', 
          position: 'relative', 
          overflow: 'hidden',
          boxShadow: '0 0 50px rgba(37, 99, 235, 0.25)', // Resplandor azul alrededor de la tarjeta
          borderRadius: 16
        }}
      >
        {/* Halo / Destello de luz azul detrás del logo */}
        <div 
          style={{
            position: 'absolute',
            top: -40,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 180,
            height: 180,
            background: '#2563eb',
            filter: 'blur(65px)',
            opacity: 0.45,
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <div style={{ textAlign: 'center', marginBottom: 25, position: 'relative', zIndex: 1 }}>
          <div 
            style={{ 
              width: 42, 
              height: 42, 
              background: '#2563eb', 
              borderRadius: 12, 
              margin: 'auto auto 12px', 
              display: 'grid', 
              placeItems: 'center', 
              fontWeight: 800,
              boxShadow: '0 0 20px rgba(37, 99, 235, 0.8)' // Destello en el ícono 'R'
            }}
          >
            R
          </div>
          <strong>Bienestar Estudiantil</strong>
          <div style={{ fontSize: 11, color: '#8f98aa' }}>Root · Tecnológico de Antioquia</div>
        </div>

        {error && (
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: 10, borderRadius: 8, fontSize: 12, marginBottom: 15, textAlign: 'center', position: 'relative', zIndex: 1 }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, position: 'relative', zIndex: 1 }}>
          <label style={{ fontSize: 12, color: '#8f98aa' }}>Correo institucional</label>
          <input 
            id="email" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="usuario@tdea.edu.co" 
            required
            style={{ background: '#0d111a', border: '1px solid #222838', borderRadius: 10, padding: 10, color: '#fff' }} 
          />
          
          <label style={{ fontSize: 12, color: '#8f98aa' }}>Contraseña</label>
          <input 
            id="pass" 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••" 
            required
            style={{ background: '#0d111a', border: '1px solid #222838', borderRadius: 10, padding: 10, color: '#fff' }} 
          />
          
          <button 
            type="submit" 
            className="btn primary" 
            disabled={loading} 
            style={{ 
              width: '100%', 
              marginTop: 10, 
              cursor: 'pointer',
              boxShadow: '0 0 15px rgba(37, 99, 235, 0.4)' // Brillo adicional al botón de ingresar
            }}
          >
            {loading ? 'Validando...' : 'Ingresar'}
          </button>
          
          <button 
            type="button" 
            onClick={() => setIsForgot(true)} 
            style={{ background: 'none', border: 0, color: '#3b82f6', fontSize: 12, cursor: 'pointer', textAlign: 'center', marginTop: 5 }}
          >
            ¿Olvidaste tu contraseña?
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;