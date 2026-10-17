import React from 'react';
import { useState } from 'react';

export function AvailabilityManager({ availability, user, onSaveAvailability }) {
  const [date, setDate] = useState('');
  const [slots, setSlots] = useState('08:00, 09:00, 10:00, 14:00');

  const myAvailability = availability.filter(a => a.professional === user.name);

  const handleSave = () => {
    if (!date || !slots) return alert('Completa la fecha y las franjas.');
    onSaveAvailability({
      professional: user.name,
      date,
      slots: slots.split(',').map(s => s.trim())
    });
    setDate('');
  };

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ margin: '0 0 5px', fontSize: 27 }}>Disponibilidad de agenda</h2>
        <p style={{ margin: 0, color: '#8f98aa' }}>Configura tus días de atención y franjas horarias disponibles.</p>
      </div>

      <div className="card" style={{ marginBottom: 20 }}>
        <h3>Agregar disponibilidad</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 14, marginTop: 12 }}>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ background: '#0d111a', border: '1px solid #222838', borderRadius: 10, color: '#fff', padding: 10 }} />
          <input value={slots} onChange={(e) => setSlots(e.target.value)} placeholder="Franjas separadas por coma" style={{ background: '#0d111a', border: '1px solid #222838', borderRadius: 10, color: '#fff', padding: 10 }} />
        </div>
        <button className="btn primary" style={{ marginTop: 12 }} onClick={handleSave}>Guardar horario</button>
      </div>

      <div className="card">
        <h3>Mis franjas publicadas</h3>
        {myAvailability.map(a => (
          <div key={a.date} style={{ borderBottom: '1px solid #222838', padding: '12px 0' }}>
            <strong>{a.date}</strong>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 6 }}>
              {a.slots.map(s => <span key={s} className="badge">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}