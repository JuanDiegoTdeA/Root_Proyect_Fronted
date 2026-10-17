import React from 'react';
import { useState } from 'react';

export function ClinicalAttentions({ attentions, user, onSaveAttention }) {
  const [student, setStudent] = useState('');
  const [type, setType] = useState('Psicológica');
  const [notes, setNotes] = useState('');

  const myAttentions = attentions.filter(a => a.professional === user.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!student || !notes) return alert('Completa los campos.');
    onSaveAttention({
      id: Date.now(),
      student,
      professional: user.name,
      date: new Date().toISOString().slice(0, 10),
      type,
      notes
    });
    setStudent('');
    setNotes('');
  };

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ margin: '0 0 5px', fontSize: 27 }}>Registro de atenciones</h2>
        <p style={{ margin: 0, color: '#8f98aa' }}>Evoluciones y notas confidenciales del acompañamiento realizado.</p>
      </div>

      <div className="card" style={{ marginBottom: 20 }}>
        <h3>Nueva atención clínica</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12 }}>
          <input placeholder="Nombre del estudiante" value={student} onChange={(e) => setStudent(e.target.value)} style={{ background: '#0d111a', border: '1px solid #222838', borderRadius: 10, color: '#fff', padding: 10 }} />
          <select value={type} onChange={(e) => setType(e.target.value)} style={{ background: '#0d111a', border: '1px solid #222838', borderRadius: 10, color: '#fff', padding: 10 }}>
            <option>Psicológica</option>
            <option>Médica</option>
            <option>Orientación General</option>
          </select>
          <textarea placeholder="Notas clínicas confidenciales..." value={notes} onChange={(e) => setNotes(e.target.value)} style={{ background: '#0d111a', border: '1px solid #222838', borderRadius: 10, color: '#fff', padding: 10, minHeight: 90 }} />
          <button type="submit" className="btn primary">Guardar registro confidencial</button>
        </form>
      </div>

      <div className="card">
        <h3>Historial de evoluciones</h3>
        {myAttentions.map(a => (
          <div key={a.id} style={{ borderBottom: '1px solid #222838', padding: '12px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>{a.student} · {a.type}</strong>
              <small style={{ color: '#8f98aa' }}>{a.date}</small>
            </div>
            <p style={{ color: '#8f98aa', margin: '6px 0 0', fontSize: 13 }}>{a.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}