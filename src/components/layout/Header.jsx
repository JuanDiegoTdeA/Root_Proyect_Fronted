import React from 'react';
export function Header({ title, user, onNotificationClick }) {
  return (
    <header style={{
      height: 72, 
      borderBottom: '1px solid #222838', 
      display: 'flex',
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: '0 28px',
      background: 'rgba(11,13,19,.85)', 
      position: 'sticky', 
      top: 0, 
      zIndex: 10, 
      backdropFilter: 'blur(12px)'
    }}>
      <h1 style={{ fontSize: '18px', margin: 0 }}>{title}</h1>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <button className="btn" onClick={onNotificationClick}>🔔 Notificaciones</button>
        <div style={{
          width: 36, 
          height: 36, 
          borderRadius: '50%', 
          background: '#252b3a',
          display: 'grid', 
          placeItems: 'center', 
          fontWeight: 700
        }}>
          {user ? user.name.split(' ').map(x => x[0]).slice(0, 2).join('') : 'JD'}
        </div>
      </div>
    </header>
  );
}