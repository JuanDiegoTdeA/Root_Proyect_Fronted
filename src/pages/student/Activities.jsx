import React from 'react';
export function Activities({ activities, enrollments, onEnroll }) {
    return (
      <div>
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ margin: '0 0 5px', fontSize: 27 }}>Actividades y eventos</h2>
          <p style={{ margin: 0, color: '#8f98aa' }}>Explora talleres y actividades de bienestar e inscríbete en línea.</p>
        </div>
  
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
          {activities.filter(a => a.status === 'Activo').map(a => {
            const isEnrolled = enrollments.some(e => e.activityId === a.id);
            return (
              <div key={a.id} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span className="badge blue">{a.cat}</span>
                  <span className="badge">{a.enrolled}/{a.capacity}</span>
                </div>
                <h3 style={{ margin: '0 0 6px' }}>{a.name}</h3>
                <p style={{ color: '#8f98aa', fontSize: 13, margin: '0 0 12px' }}>{a.date} · {a.time}<br />{a.place}</p>
                
                <div style={{ height: 6, background: '#202534', borderRadius: 20, overflow: 'hidden', marginBottom: 14 }}>
                  <div style={{ height: '100%', background: '#2563eb', width: `${Math.min(100, (a.enrolled / a.capacity) * 100)}%` }} />
                </div>
  
                {isEnrolled ? (
                  <span className="badge green">Inscrito</span>
                ) : a.enrolled < a.capacity ? (
                  <button className="btn primary" style={{ width: '100%' }} onClick={() => onEnroll(a.id)}>Inscribirme</button>
                ) : (
                  <span className="badge red">Cupos agotados</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }