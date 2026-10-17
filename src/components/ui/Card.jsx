import React from 'react';
export function Card({ children, className = '', style = {} }) {
    return (
      <div 
        className={`card ${className}`} 
        style={{
          background: '#141824',
          border: '1px solid #222838',
          borderRadius: 16,
          padding: 20,
          boxShadow: '0 16px 40px rgba(0,0,0,.25)',
          ...style
        }}
      >
        {children}
      </div>
    );
  }