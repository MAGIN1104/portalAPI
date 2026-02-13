'use client';

// Re-export from shared UI package with admin-specific config
import { LoginForm as SharedLoginForm } from '@fie-api/ui';

export const LoginForm: React.FC = () => {
  return (
    <SharedLoginForm
      title="FIE API Admin"
      subtitle="Gestión de APIs"
      redirectPath="/admin/dashboard"
    />
  );
};
