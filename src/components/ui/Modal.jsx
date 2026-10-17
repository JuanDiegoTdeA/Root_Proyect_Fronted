import React from 'react';
export function Modal({ isOpen, title, onClose, children }) {
    if (!isOpen) return null;
  
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,.72)',
        display: 'grid',
        placeItems: 'center',
        zIndex: 50,
        padding: 20
      }}>
        <div style={{
          width: 'min(650px, 100%)',
          maxHeight: '90vh',
          overflow: 'auto',
          background: '#121621',
          border: '1px solid #222838',
          borderRadius: 18,
          padding: 23,
          boxShadow: '0 25px 80px rgba(0,0,0,.55)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <h3 style={{ margin: 0, fontSize: 18 }}>{title}</h3>
            <button onClick={onClose} style={{ background: 'none', border: 0, color: '#8e97a8', fontSize: 24, cursor: 'pointer' }}>×</button>
          </div>
          {children}
        </div>
      </div>
    );
  }