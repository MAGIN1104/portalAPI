'use client';

import { useAuth } from '@/lib/auth-context';

export default function DashboardPage() {
  const { user } = useAuth();

  const stats = [
    { label: 'APIs Activas', value: '12', color: 'var(--primary)' },
    { label: 'Endpoints', value: '48', color: 'rgba(99, 164, 255, 0.5)' },
    { label: 'Usuarios', value: '156', color: 'rgba(223, 21, 131, 0.5)' },
    { label: 'Solicitudes Hoy', value: '2.4K', color: 'rgba(99, 164, 255, 0.3)' },
  ];

  return (
    <div className="space-y-8" style={{ color: 'var(--foreground)' }}>
      {/* Welcome Card */}
      <div 
        className="rounded-lg p-8 shadow-lg border" 
        style={{ 
          backgroundColor: 'var(--panel)', 
          borderColor: 'var(--stroke)',
        }}
      >
        <h1 className="font-display text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
          Bienvenido, {user?.name}!
        </h1>
        <p style={{ color: 'var(--muted)' }}>
          Aquí puedes gestionar todas las APIs y su configuración
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg shadow p-6" style={{ backgroundColor: 'var(--panel)' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>{stat.label}</p>
                <p className="text-3xl font-bold mt-2" style={{ color: 'var(--primary)' }}>{stat.value}</p>
              </div>
              <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: stat.color }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
