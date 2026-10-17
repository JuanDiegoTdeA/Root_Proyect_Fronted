import React from 'react';
export function Sidebar({ role, activePage, onSelectPage, onRoleChange, onLogout }) {
  const menus = {
    student: [
      { id: 'dashboard', label: 'Dashboard', icon: '▦' },
      { id: 'services', label: 'Servicios', icon: '◫' },
      { id: 'appointment', label: 'Solicitar cita', icon: '＋' },
      { id: 'appointments', label: 'Mis citas', icon: '◷' },
      { id: 'activities', label: 'Actividades y eventos', icon: '✦' }
    ],
    professional: [
      { id: 'pro-dashboard', label: 'Agenda / Dashboard', icon: '▦' },
      { id: 'availability', label: 'Disponibilidad', icon: '◷' },
      { id: 'attention', label: 'Registro de atenciones', icon: '▤' }
    ],
    admin: [
      { id: 'admin-dashboard', label: 'Dashboard Ejecutivo', icon: '▦' },
      { id: 'users', label: 'Usuarios y roles', icon: '♙' },
      { id: 'reports', label: 'Reportes y estadísticas', icon: '▥' }
    ]
  };

  return (
    <aside style={{
      width: 260, 
      background: '#0d1018', 
      borderRight: '1px solid #222838',
      padding: '22px 16px', 
      position: 'fixed', 
      inset: '0 auto 0 0', 
      zIndex: 20,
      overflowY: 'auto'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingBottom: 24, borderBottom: '1px solid #222838', marginBottom: 18 }}>
        <div style={{ width: 38, height: 38, borderRadius: 12, background: '#2563eb', display: 'grid', placeItems: 'center', fontWeight: 800 }}>R</div>
        <div>
          <strong style={{ fontSize: 14 }}>Bienestar Estudiantil</strong>
          <span style={{ fontSize: 11, color: '#8f98aa', display: 'block' }}>Root · TdeA</span>
        </div>
      </div>

      <div style={{ background: '#141824', border: '1px solid #222838', borderRadius: 12, padding: 10, marginBottom: 16 }}>
        <label style={{ fontSize: 10, textTransform: 'uppercase', color: '#8f98aa', display: 'block', marginBottom: 5 }}>Vista de demostración</label>
        <select value={role} onChange={(e) => onRoleChange(e.target.value)} style={{ width: '100%', background: '#0d1018', border: 0, color: '#fff', outline: 0 }}>
          <option value="student">Estudiante</option>
          <option value="professional">Profesional</option>
          <option value="admin">Administrador</option>
        </select>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {menus[role]?.map(item => (
          <button
            key={item.id}
            onClick={() => onSelectPage(item.id)}
            style={{
              width: '100%', 
              background: activePage === item.id ? '#191e2c' : 'none',
              border: 0, 
              color: activePage === item.id ? '#fff' : '#9da6b8',
              padding: '11px 12px', 
              borderRadius: 10, 
              textAlign: 'left',
              display: 'flex', 
              gap: 10, 
              alignItems: 'center', 
              cursor: 'pointer'
            }}
          >
            <span>{item.icon}</span> {item.label}
          </button>
        ))}
      </nav>

      <button onClick={onLogout} style={{ width: '100%', marginTop: 24, background: 'none', border: 0, color: '#ef4444', textAlign: 'left', padding: '10px', cursor: 'pointer' }}>
        ↪ Cerrar sesión
      </button>
    </aside>
  );
}