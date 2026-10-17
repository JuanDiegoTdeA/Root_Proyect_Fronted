import React, { useState, useEffect } from 'react';
import Login from './pages/auth/Login.jsx';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { AppRouter } from './routes/AppRouter';
import './styles/global.css';

const initialData = {
  users: [
    { id: 1, name: 'Juan Diego', email: 'estudiante@tdea.edu.co', role: 'Estudiante', status: 'Activo' },
    { id: 2, name: 'Laura Gómez', email: 'profesional@tdea.edu.co', role: 'Profesional', status: 'Activo', specialty: 'Psicología' },
    { id: 3, name: 'Administrador Root', email: 'admin@tdea.edu.co', role: 'Administrador', status: 'Activo' }
  ],
  services: [
    { id: 1, name: 'Psicología', cat: 'Psicología', desc: 'Orientación psicológica individual.', active: true },
    { id: 2, name: 'Medicina', cat: 'Salud', desc: 'Atención en salud integral.', active: true },
    { id: 3, name: 'Deportes', cat: 'Deportes', desc: 'Actividades físicas y recreativas.', active: true },
    { id: 4, name: 'Cultura', cat: 'Cultura', desc: 'Talleres, arte y desarrollo cultural.', active: true }
  ],
  professionals: [
    { id: 1, name: 'Laura Gómez', specialty: 'Psicología', email: 'profesional@tdea.edu.co', active: true },
    { id: 2, name: 'Ana Torres', specialty: 'Medicina', email: 'ana@tdea.edu.co', active: true }
  ],
  appointments: [
    { id: 101, student: 'Juan Diego', professional: 'Laura Gómez', service: 'Psicología', date: '2026-10-08', time: '09:00', status: 'Programada' }
  ],
  activities: [
    { id: 1, name: 'Taller de manejo del estrés', cat: 'Salud', date: '2026-10-15', time: '15:00', capacity: 30, enrolled: 18, status: 'Activo', place: 'Bloque B · Aula 204' },
    { id: 2, name: 'Torneo relámpago', cat: 'Deportes', date: '2026-10-20', time: '10:00', capacity: 40, enrolled: 32, status: 'Activo', place: 'Cancha principal' }
  ],
  enrollments: [],
  attentions: [],
  availability: [
    { professional: 'Laura Gómez', date: '2026-10-08', slots: ['08:00', '09:00', '10:00', '11:00', '14:00'] }
  ]
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState('student');
  const [page, setPage] = useState('dashboard');
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem('rootBienestarReact');
    return saved ? JSON.parse(saved) : initialData;
  });

  useEffect(() => {
    localStorage.setItem('rootBienestarReact', JSON.stringify(state));
  }, [state]);

  const user = state.users.find(u => u.role.toLowerCase().startsWith(role === 'student' ? 'est' : role === 'professional' ? 'prof' : 'admin')) || state.users[0];

  const handlers = {
    onSelectService: () => setPage('appointment'),
    onBookAppointment: (newAppt) => {
      setState(prev => ({ ...prev, appointments: [...prev.appointments, newAppt] }));
      setPage('appointments');
    },
    onCancelAppointment: (id) => {
      setState(prev => ({
        ...prev,
        appointments: prev.appointments.map(a => a.id === id ? { ...a, status: 'Cancelada' } : a)
      }));
    },
    onEnrollActivity: (id) => {
      setState(prev => ({
        ...prev,
        enrollments: [...prev.enrollments, { id: Date.now(), activityId: id, user: user.name }],
        activities: prev.activities.map(a => a.id === id ? { ...a, enrolled: a.enrolled + 1 } : a)
      }));
    },
    onSaveAvailability: (newAvail) => {
      setState(prev => ({ ...prev, availability: [...prev.availability, newAvail] }));
    },
    onSaveAttention: (newAtt) => {
      setState(prev => ({ ...prev, attentions: [newAtt, ...prev.attentions] }));
    },
    onToggleUserStatus: (id) => {
      setState(prev => ({
        ...prev,
        users: prev.users.map(u => u.id === id ? { ...u, status: u.status === 'Activo' ? 'Inactivo' : 'Activo' } : u)
      }));
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="app">
      <Sidebar
        role={role}
        activePage={page}
        onSelectPage={setPage}
        onRoleChange={(r) => {
          setRole(r);
          setPage(r === 'student' ? 'dashboard' : r === 'professional' ? 'pro-dashboard' : 'admin-dashboard');
        }}
        onLogout={() => setIsAuthenticated(false)}
      />
      <main style={{ marginLeft: 260, width: 'calc(100% - 260px)', minWidth: 0 }}>
        <Header title="Bienestar Estudiantil" user={user} onNotificationClick={() => alert('Sistema de notificaciones activo')} />
        <section style={{ padding: 28, maxWidth: 1500, margin: 'auto' }}>
          <AppRouter role={role} page={page} user={user} state={state} handlers={handlers} />
        </section>
      </main>
    </div>
  );
}