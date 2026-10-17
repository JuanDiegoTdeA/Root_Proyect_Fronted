import React from 'react';
import { useState } from 'react';

export function BookAppointment({ services, professionals, availability, appointments, onBookSuccess }) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(services[0] || null);
  const [professional, setProfessional] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const days = ['2026-10-08', '2026-10-09', '2026-10-10', '2026-10-12', '2026-10-13'];

  const selectedPro = professional || professionals.find(p => p.specialty === service?.cat);
  const availSlots = availability.find(a => a.professional === selectedPro?.name && a.date === date)?.slots || ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00'];
  const busySlots = appointments.filter(a => a.date === date && a.professional === selectedPro?.name).map(a => a.time);

  const handleConfirm = () => {
    if (!time) return alert('Selecciona una franja disponible.');
    onBookSuccess({
      id: Date.now(),
      service: service.name,
      professional: selectedPro.name,
      date,
      time,
      status: 'Programada'
    });
    setStep(4);
  };

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ margin: '0 0 5px', fontSize: 27 }}>Solicitar cita</h2>
        <p style={{ margin: 0, color: '#8f98aa' }}>Reserva una atención seleccionando servicio, profesional, fecha y franja.</p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {['Servicio y profesional', 'Fecha', 'Franja', 'Confirmación'].map((title, i) => (
          <div key={i} style={{ flex: 1, padding: 10, background: step >= i + 1 ? '#172d61' : '#0d111a', border: `1px solid ${step >= i + 1 ? '#2563eb' : '#222838'}`, borderRadius: 10, textAlign: 'center', color: step >= i + 1 ? '#fff' : '#8f98aa', fontSize: 12 }}>
            {i + 1}. {title}
          </div>
        ))}
      </div>

      <div className="card">
        {step === 1 && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div>
                <label style={{ fontSize: 12, color: '#8f98aa', display: 'block', marginBottom: 6 }}>Servicio</label>
                <select value={service?.id} onChange={(e) => setService(services.find(s => s.id === Number(e.target.value)))} style={{ width: '100%', background: '#0d111a', border: '1px solid #222838', borderRadius: 10, color: '#fff', padding: 10 }}>
                  {services.filter(s => s.active).map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </div>
              <div>
                <label style={{ fontSize: 12, color: '#8f98aa', display: 'block', marginBottom: 6 }}>Profesional</label>
                <select onChange={(e) => setProfessional(professionals.find(p => p.id === Number(e.target.value)))} style={{ width: '100%', background: '#0d111a', border: '1px solid #222838', borderRadius: 10, color: '#fff', padding: 10 }}>
                  <option value="">Selecciona...</option>
                  {professionals.filter(p => p.active && (p.specialty === service?.cat || !service)).map(p => <option key={p.id} value={p.id}>{p.name} · {p.specialty}</option>)}
                </select>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
              <button className="btn primary" onClick={() => setStep(2)}>Continuar</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3>Selecciona una fecha</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 7, marginTop: 12 }}>
              {days.map(d => (
                <div key={d} style={{ background: '#0d111a', border: '1px solid #222838', borderRadius: 10, padding: 9, textAlign: 'center' }}>
                  <small style={{ color: '#8f98aa', display: 'block' }}>{d}</small>
                  <button className={`btn ${date === d ? 'primary' : ''}`} style={{ width: '100%', marginTop: 7 }} onClick={() => setDate(d)}>Elegir</button>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
              <button className="btn" onClick={() => setStep(1)}>Atrás</button>
              <button className="btn primary" onClick={() => date ? setStep(3) : alert('Selecciona una fecha.')}>Continuar</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3>Franja disponible · {selectedPro?.name}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 9, marginTop: 12 }}>
              {availSlots.map(s => {
                const isBusy = busySlots.includes(s);
                return (
                  <button key={s} disabled={isBusy} className={`btn ${time === s ? 'primary' : ''}`} onClick={() => setTime(s)} style={{ opacity: isBusy ? 0.4 : 1, textDecoration: isBusy ? 'line-through' : 'none' }}>
                    {s} {isBusy ? '· Ocupada' : ''}
                  </button>
                );
              })}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
              <button className="btn" onClick={() => setStep(2)}>Atrás</button>
              <button className="btn primary" onClick={handleConfirm}>Confirmar cita</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div style={{ textAlign: 'center', padding: 20 }}>
            <div style={{ fontSize: 48, color: '#22c55e' }}>✓</div>
            <h3>¡Cita solicitada!</h3>
            <p style={{ color: '#8f98aa' }}>La franja fue bloqueada y la confirmación quedó registrada.</p>
            <p><strong>{service?.name}</strong><br />{selectedPro?.name}<br />{date} · {time}</p>
            <span className="badge green" style={{ marginTop: 10 }}>US-01 · Confirmación enviada</span>
          </div>
        )}
      </div>
    </div>
  );
}