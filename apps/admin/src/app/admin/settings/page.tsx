'use client';

import { useAuth } from '@/lib/auth-context';

export default function SettingsPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-6 max-w-2xl" style={{ color: 'var(--foreground)' }}>
      {/* Perfil */}
      <div className="rounded-lg shadow p-6" style={{ backgroundColor: 'var(--panel)' }}>
        <h3 className="font-display text-lg font-bold mb-4" style={{ color: 'var(--foreground)' }}>
          Perfil
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
              Nombre
            </label>
            <input
              type="text"
              defaultValue={user?.name}
              disabled
              className="w-full px-3 py-2 border rounded-lg"
              style={{
                borderColor: 'var(--stroke)',
                backgroundColor: 'var(--panel-strong)',
                color: 'var(--muted)',
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
              Email
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              disabled
              className="w-full px-3 py-2 border rounded-lg"
              style={{
                borderColor: 'var(--stroke)',
                backgroundColor: 'var(--panel-strong)',
                color: 'var(--muted)',
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
              Rol
            </label>
            <input
              type="text"
              defaultValue={user?.role}
              disabled
              className="w-full px-3 py-2 border rounded-lg"
              style={{
                borderColor: 'var(--stroke)',
                backgroundColor: 'var(--panel-strong)',
                color: 'var(--muted)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
