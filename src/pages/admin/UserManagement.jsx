import React from 'react';
import { useState } from 'react';

export function UserManagement({ users, onToggleStatus }) {
  const [search, setSearch] = useState('');

  const filtered = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ margin: '0 0 5px', fontSize: 27 }}>Usuarios y roles</h2>
        <p style={{ margin: 0, color: '#8f98aa' }}>Gestión de cuentas institucionales y permisos de acceso.</p>
      </div>

      <input placeholder="Buscar por nombre o correo..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ maxWidth: 350, marginBottom: 16, background: '#0d111a', border: '1px solid #222838', borderRadius: 10, color: '#fff', padding: 10 }} />

      <div className="card">
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #222838', color: '#788195', textAlign: 'left' }}>
              <th style={{ padding: 12 }}>USUARIO</th>
              <th style={{ padding: 12 }}>CORREO</th>
              <th style={{ padding: 12 }}>ROL</th>
              <th style={{ padding: 12 }}>ESTADO</th>
              <th style={{ padding: 12 }}>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(u => (
              <tr key={u.id} style={{ borderBottom: '1px solid #222838' }}>
                <td style={{ padding: 12 }}>{u.name}</td>
                <td style={{ padding: 12 }}>{u.email}</td>
                <td style={{ padding: 12 }}><span className="badge purple">{u.role}</span></td>
                <td style={{ padding: 12 }}><span className={`badge ${u.status === 'Activo' ? 'green' : 'red'}`}>{u.status}</span></td>
                <td style={{ padding: 12 }}>
                  <button className="btn" style={{ fontSize: 11, padding: '4px 8px' }} onClick={() => onToggleStatus(u.id)}>
                    {u.status === 'Activo' ? 'Desactivar' : 'Activar'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}