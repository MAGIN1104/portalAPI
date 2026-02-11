'use client';

import { ApiManagement } from '@/components/admin/ApiManagement';

export default function ApisPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
          Gestión de APIs
        </h1>
        <p className="mt-1" style={{ color: 'var(--muted)' }}>
          Crea, edita y elimina APIs que estarán disponibles en el portal
        </p>
      </div>
      <ApiManagement />
    </div>
  );
}
