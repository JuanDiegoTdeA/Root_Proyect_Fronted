import React from 'react';
import { useState } from 'react';

export function MyAppointments({ appointments, onCancelAppointment }) {
  const [filter, setFilter] = useState('Todos');

  const filtered = appointments.filter(a => filter === 'Todos' || a.status === filter);

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ margin: '0 0 5px', fontSize: 27 }}>Mis citas</h2>
        <p style={{ margin: 0, color: '#8f98aa' }}>Consulta tus citas en orden cronológico y su estado.</p>
      </div>

      <div style={{ marginBottom: 16 }}>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} style={{ background: '#0d111a', border: '1px solid #222838', borderRadius: 10, color: '#fff', padding: '10px 12px' }}>
          <option>Todos</option>
          <option>Programada</option>
          <option>Confirmada</option>
          <option>Atendida</option>
          <option>Completada</option>
          <option>Cancelada</option>
        </select>
      </div>

      <div className="card" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #222838', color: '#788195' }}>
              <th style={{ padding: 12 }}>FECHA</th>
              <th style={{ padding: 12 }}>SERVICIO</th>
              <th style={{ padding: 12 }}>PROFESIONAL</th>
              <th style={{ padding: 12 }}>ESTADO</th>
              <th style={{ padding: 12 }}>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(a => (
              <tr key={a.id} style={{ borderBottom: '1px solid #222838' }}>
                <td style={{ padding: 12 }}>{a.date} {a.time}</td>
                <td style={{ padding: 12 }}>{a.service}</td>
                <td style={{ padding: 12 }}>{a.professional}</td>
                <td style={{ padding: 12 }}><span className={`badge ${a.status === 'Cancelada' ? 'red' : 'blue'}`}>{a.status}</span></td>
                <td style={{ padding: 12 }}>
                  {a.status !== 'Cancelada' && (
                    <button className="btn" style={{ color: '#ef4444', fontSize: 12, padding: '5px 10px' }} onClick={() => onCancelAppointment(a.id)}>Cancelar</button>
                  )}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan="5" style={{ textAlign: 'center', padding: 20, color: '#8f98aa' }}>Sin citas registradas.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}