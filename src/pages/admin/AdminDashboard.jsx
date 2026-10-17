import React from 'react';
export function AdminDashboard() {
    return (
      <div>
        <h2>Dashboard Ejecutivo</h2>
        <p style={{ color: '#8f98aa' }}>Resumen general de la operación del sistema TdeA.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 20 }}>
          <div className="card"><h3>Usuarios</h3><div style={{ fontSize: 30, fontWeight: 750 }}>3,450</div></div>
          <div className="card"><h3>Citas Hoy</h3><div style={{ fontSize: 30, fontWeight: 750 }}>55</div></div>
          <div className="card"><h3>Servicios Activos</h3><div style={{ fontSize: 30, fontWeight: 750 }}>12</div></div>
          <div className="card"><h3>Pendientes</h3><div style={{ fontSize: 30, fontWeight: 750 }}>18</div></div>
        </div>
      </div>
    );
  }