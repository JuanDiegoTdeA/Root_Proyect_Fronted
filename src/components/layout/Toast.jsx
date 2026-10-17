import React from 'react';
export function Toast({ message, show }) {
    if (!show) return null;
  
    return (
      <div style={{
        position: 'fixed',
        right: 22,
        bottom: 22,
        background: '#151b28',
        border: '1px solid #222838',
        padding: '13px 17px',
        borderRadius: 12,
        boxShadow: '0 16px 40px rgba(0,0,0,.25)',
        zIndex: 100,
        color: '#fff',
        fontSize: 13
      }}>
        {message}
      </div>
    );
  }