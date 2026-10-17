import React, { useState } from 'react';

export function ServicesCatalog({ services, onSelectService }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todos');

  const filtered = services.filter(s => 
    s.active && 
    s.name.toLowerCase().includes(search.toLowerCase()) && 
    (category === 'Todos' || s.cat === category)
  );

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ margin: '0 0 5px', fontSize: 27 }}>Servicios</h2>
        <p style={{ margin: 0, color: '#8f98aa' }}>Consulta los servicios disponibles y encuentra el acompañamiento que necesitas.</p>
      </div>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}>
        <input 
          placeholder="Buscar servicio..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
          style={{ maxWidth: 300, background: '#0d111a', border: '1px solid #222838', borderRadius: 10, color: '#fff', padding: '10px 12px' }}
        />
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          style={{ background: '#0d111a', border: '1px solid #222838', borderRadius: 10, color: '#fff', padding: '10px 12px' }}
        >
          <option>Todos</option>
          <option>Psicología</option>
          <option>Salud</option>
          <option>Deportes</option>
          <option>Cultura</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {filtered.map(s => (
          <div key={s.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
                <span className="badge blue">{s.cat}</span>
              </div>
              <h3 style={{ margin: '0 0 8px' }}>{s.name}</h3>
              <p style={{ color: '#8f98aa', fontSize: 13, margin: '0 0 20px' }}>{s.desc}</p>
            </div>
            <button className="btn primary" style={{ width: '100%' }} onClick={() => onSelectService(s)}>Solicitar cita</button>
          </div>
        ))}
      </div>
    </div>
  );
}