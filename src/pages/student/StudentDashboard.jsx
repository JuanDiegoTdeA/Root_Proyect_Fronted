import React from 'react';

export function StudentDashboard({ user, appointments = [], activities = [] }) {
  const myAppointments = appointments.filter(a => a.student === user?.name && a.status !== 'Cancelada');

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ margin: '0 0 5px', fontSize: 27 }}>¡Bienvenido, {user?.name || 'Estudiante'}!</h2>
        <p style={{ margin: 0, color: '#8f98aa' }}>Panel principal de Bienestar Estudiantil TdeA.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 24 }}>
        <div className="card">
          <span style={{ color: '#8f98aa', fontSize: 13 }}>Citas Activas</span>
          <div style={{ fontSize: 32, fontWeight: 700, marginTop: 8 }}>{myAppointments.length}</div>
        </div>
        <div className="card">
          <span style={{ color: '#8f98aa', fontSize: 13 }}>Actividades Inscritas</span>
          <div style={{ fontSize: 32, fontWeight: 700, marginTop: 8 }}>0</div>
        </div>
        <div className="card">
          <span style={{ color: '#8f98aa', fontSize: 13 }}>Estado de Cuenta</span>
          <div style={{ fontSize: 20, fontWeight: 700, marginTop: 8, color: '#22c55e' }}>Activo</div>
        </div>
      </div>

      <div className="card">
        <h3>Próximas citas programadas</h3>
        {myAppointments.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
            {myAppointments.map(a => (
              <div key={a.id} style={{ background: '#0d111a', border: '1px solid #222838', padding: 12, borderRadius: 10, display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <strong>{a.service}</strong>
                  <div style={{ fontSize: 12, color: '#8f98aa' }}>{a.professional} · {a.date} ({a.time})</div>
                </div>
                <span className="badge blue">{a.status}</span>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: '#8f98aa', marginTop: 10 }}>No tienes citas programadas actualmente.</p>
        )}
      </div>
    </div>
  );
}