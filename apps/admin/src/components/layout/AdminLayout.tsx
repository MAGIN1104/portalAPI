'use client';

import { useAuth } from '@/lib/auth-context';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface AdminLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title = '' }) => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const stored = window.localStorage.getItem('fie-admin-theme');
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
      document.documentElement.dataset.theme = stored;
      return;
    }
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const initial = prefersLight ? 'light' : 'dark';
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem('fie-admin-theme', next);
  };

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  const menuItems = [
    { name: 'Inicio', href: '/admin/dashboard' },
    { name: 'APIs', href: '/admin/apis' },
    { name: 'Endpoints', href: '/admin/endpoints' },
    { name: 'Grupos', href: '/admin/menu' },
  ];

  return (
    <div className="flex h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Sidebar */}
      <aside
        className="w-64 flex flex-col border-r"
        style={{ backgroundColor: 'var(--menu)', borderColor: 'var(--stroke)', color: 'var(--foreground)' }}
      >
        <div className="p-4 border-b" style={{ borderColor: 'var(--stroke)' }}>
          <div className="flex items-center gap-3">
            <Image
              src="/logo-fie.svg"
              alt="FIE Logo"
              width={80}
              height={80}
              className="h-10 w-30 object-contain"
            />
            <span className="font-bold text-md" style={{ color: 'var(--foreground)' }}>
              API Admin
            </span>
          </div>
        </div>

        <nav className="flex-1 px-2 py-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 rounded-lg transition text-sm font-medium relative"
                style={{
                  color: 'var(--foreground)',
                  backgroundColor: isActive ? 'var(--panel-strong)' : 'transparent',
                  fontWeight: isActive ? '600' : '500',
                  borderLeft: isActive ? '3px solid var(--primary)' : '3px solid transparent',
                  paddingLeft: '13px',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'var(--panel)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  } else {
                    e.currentTarget.style.backgroundColor = 'var(--panel-strong)';
                  }
                }}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t" style={{ borderColor: 'var(--stroke)' }}>
          <div 
            className="flex items-center space-x-3 mb-4 cursor-pointer rounded-lg p-2 transition"
            onClick={() => router.push('/admin/settings')}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--panel)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: 'var(--primary)' }}>
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div className="text-sm">
              <p className="font-medium" style={{ color: 'var(--foreground)' }}>{user?.name}</p>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full text-white py-2 px-4 rounded-lg text-sm transition font-medium"
            style={{ backgroundColor: 'var(--accent)' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="border-b px-6 py-4 flex items-center justify-between" style={{ backgroundColor: 'var(--panel)', borderColor: 'var(--stroke)' }}>
          <h2 className="font-display text-2xl font-bold" style={{ color: 'var(--foreground)' }}>{title}</h2>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
              title={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
              className="rounded-full border px-3 py-2 transition hover:bg-panel-strong"
              style={{ borderColor: 'var(--stroke)', backgroundColor: 'var(--panel)', color: 'var(--foreground)' }}
            >
              {theme === 'dark' ? (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                </svg>
              )}
            </button>
            <div className="text-sm" style={{ color: 'var(--muted)' }}>
              Bienvenido, <span className="font-medium">{user?.name}</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
};
