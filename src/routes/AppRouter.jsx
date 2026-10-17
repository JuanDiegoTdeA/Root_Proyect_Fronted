import React from 'react';
import { StudentDashboard } from '../pages/student/StudentDashboard';
import { ServicesCatalog } from '../pages/student/ServicesCatalog';
import { BookAppointment } from '../pages/student/BookAppointment';
import { MyAppointments } from '../pages/student/MyAppointments';
import { Activities } from '../pages/student/Activities';

import { ProfessionalDashboard } from '../pages/professional/ProfessionalDashboard';
import { AvailabilityManager } from '../pages/professional/AvailabilityManager';
import { ClinicalAttentions } from '../pages/professional/ClinicalAttentions';

import { AdminDashboard } from '../pages/admin/AdminDashboard';
import { UserManagement } from '../pages/admin/UserManagement';
import { Reports } from '../pages/admin/Reports';

export function AppRouter({ role, page, user, state, handlers }) {
  if (role === 'student') {
    switch (page) {
      case 'services':
        return <ServicesCatalog services={state.services} onSelectService={handlers.onSelectService} />;
      case 'appointment':
        return <BookAppointment services={state.services} professionals={state.professionals} availability={state.availability} appointments={state.appointments} onBookSuccess={handlers.onBookAppointment} />;
      case 'appointments':
        return <MyAppointments appointments={state.appointments} onCancelAppointment={handlers.onCancelAppointment} />;
      case 'activities':
        return <Activities activities={state.activities} enrollments={state.enrollments} onEnroll={handlers.onEnrollActivity} />;
      default:
        return <StudentDashboard user={user} appointments={state.appointments} activities={state.activities} />;
    }
  }

  if (role === 'professional') {
    switch (page) {
      case 'availability':
        return <AvailabilityManager availability={state.availability} user={user} onSaveAvailability={handlers.onSaveAvailability} />;
      case 'attention':
        return <ClinicalAttentions attentions={state.attentions} user={user} onSaveAttention={handlers.onSaveAttention} />;
      default:
        return <ProfessionalDashboard user={user} appointments={state.appointments} attentions={state.attentions} />;
    }
  }

  if (role === 'admin') {
    switch (page) {
      case 'users':
        return <UserManagement users={state.users} onToggleStatus={handlers.onToggleUserStatus} />;
      case 'reports':
        return <Reports appointments={state.appointments} attentions={state.attentions} />;
      default:
        return <AdminDashboard users={state.users} appointments={state.appointments} activities={state.activities} />;
    }
  }

  return <StudentDashboard user={user} />;
}