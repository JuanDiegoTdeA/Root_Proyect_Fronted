import React, { useState } from 'react';

export function ForgotPassword({ onBackToLogin }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return alert('Por favor ingresa tu correo institucional.');
    
    // Aquí puedes simular el envío o conectar con tu API backend
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#0b0d13', padding: 25 }}>
      <div className="card" style={{ width: 'min(430px, 100%)' }}>
        <div style={{ textAlign: 'center', marginBottom: 25 }}>
          <div style={{ width: 42, height: 42, background: '#2563eb', borderRadius: 12, margin: 'auto auto 12px', display: 'grid', placeItems: 'center', fontWeight: 800 }}>R</div>
          <strong>Recuperar Contraseña</strong>
          <div style={{ fontSize: 11, color: '#8f98aa' }}>Bienestar Estudiantil · TdeA</div>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 40, color: '#22c55e', marginBottom: 10 }}>✓</div>
            <p style={{ color: '#f5f7fb', fontSize: 14 }}>Hemos enviado las instrucciones de recuperación al correo institucional <strong>{email}</strong>.</p>
            <button className="btn primary" onClick={onBackToLogin} style={{ width: '100%', marginTop: 15 }}>Volver al inicio de sesión</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <label style={{ fontSize: 12, color: '#8f98aa' }}>Correo institucional</label>
            <input 
              type="email" 
              placeholder="usuario@tdea.edu.co" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              style={{ background: '#0d111a', border: '1px solid #222838', borderRadius: 10, padding: 10, color: '#fff' }} 
            />
            
            <button type="submit" className="btn primary" style={{ width: '100%', marginTop: 10 }}>Enviar instrucciones</button>
            <button type="button" className="btn" onClick={onBackToLogin} style={{ width: '100%' }}>Regresar al login</button>
          </form>
        )}
      </div>
    </div>
  );
}