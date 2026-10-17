import React from 'react';
export function ProfessionalDashboard() {
    return (
      <div>
        <h2>Agenda Profesional</h2>
        <p style={{ color: '#8f98aa' }}>Control de citas y atenciones asignadas.</p>
        <div className="card" style={{ marginTop: 20 }}>
          <h3>Próxima atención</h3>
          <p style={{ color: '#8f98aa' }}>Juan Diego · Psicología · 08 de Octubre, 09:00 AM</p>
          <span className="badge blue">Programada</span>
        </div>
      </div>
    );
  }