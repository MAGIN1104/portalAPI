'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(email, password);
      router.push('/admin/dashboard');
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Error en la autenticación'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--background)' }}>
      <div className="rounded-lg shadow-2xl p-8 w-full max-w-md" style={{ backgroundColor: 'var(--panel)' }}>
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl font-bold" style={{ color: 'var(--foreground)' }}>FIE API Admin</h1>
          <p className="mt-2" style={{ color: 'var(--muted)' }}>Gestión de APIs</p>
        </div>

        {error && (
          <div className="px-4 py-3 rounded mb-6" style={{ backgroundColor: 'rgba(223, 21, 131, 0.1)', borderColor: 'var(--accent)', borderWidth: '1px', color: 'var(--accent)' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg transition"
              style={{ borderColor: 'var(--stroke)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)', e.currentTarget.style.boxShadow = '0 0 0 3px rgba(99, 164, 255, 0.1)')}
              onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
              placeholder="admin@example.com"
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg transition"
              style={{ borderColor: 'var(--stroke)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)', e.currentTarget.style.boxShadow = '0 0 0 3px rgba(99, 164, 255, 0.1)')}
              onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
              placeholder="••••••••"
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full text-white font-medium py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: 'var(--primary)' }}
            onMouseEnter={(e) => !isLoading && (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            {isLoading ? 'Autenticando...' : 'Ingresar'}
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full" style={{ borderTopColor: 'var(--stroke)', borderTopWidth: '1px' }}></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2" style={{ backgroundColor: 'var(--panel)', color: 'var(--muted)' }}>O continúa con</span>
          </div>
        </div>

        <button
          type="button"
          className="w-full font-medium py-2 rounded-lg transition"
          style={{ borderColor: 'var(--stroke)', borderWidth: '1px', color: 'var(--foreground)' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--panel-strong)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          // TODO: Implementar login con RHSSO
          // onClick={() => handleSSOLogin()}
        >
          Red Hat SSO
        </button>
      </div>
    </div>
  );
};
