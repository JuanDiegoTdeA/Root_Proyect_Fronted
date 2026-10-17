import React from 'react';
export function Reports({ appointments, attentions }) {
    return (
      <div>
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ margin: '0 0 5px', fontSize: 27 }}>Reportes y estadísticas</h2>
          <p style={{ margin: 0, color: '#8f98aa' }}>Métricas operativas del servicio de Bienestar Estudiantil TdeA.</p>
        </div>
  
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 20 }}>
          <div className="card"><h3>Citas Efectivas</h3><div style={{ fontSize: 32, fontWeight: 700 }}>{appointments.length}</div></div>
          <div className="card"><h3>Atenciones Clínicas</h3><div style={{ fontSize: 32, fontWeight: 700 }}>{attentions.length}</div></div>
          <div className="card"><h3>Satisfacción</h3><div style={{ fontSize: 32, fontWeight: 700 }}>98.4%</div></div>
        </div>
  
        <div className="card">
          <h3>Demanda por Servicio</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 14 }}>
            {[['Psicología', 46], ['Salud Integrada', 26], ['Deportes', 16], ['Cultura', 12]].map(([item, pct]) => (
              <div key={item}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 4 }}>
                  <span>{item}</span>
                  <span>{pct}%</span>
                </div>
                <div style={{ height: 8, background: '#0d111a', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ width: `${pct}%`, height: '100%', background: '#2563eb' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }