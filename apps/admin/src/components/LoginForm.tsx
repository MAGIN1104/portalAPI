
"use client";
import { useState } from 'react';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

type LoginFormProps = {
  title?: string;
  subtitle?: string;
  error?: string;
  isLoading?: boolean;
  onLogin?: (data: { email: string; password: string }) => void;
};

export default function LoginForm({ title = 'FIE API Admin', subtitle = 'Gestión de APIs', error, isLoading = false, onLogin }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onLogin) onLogin({ email, password });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f5f6fa] dark:bg-[#181a20] px-2">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto rounded-3xl shadow-lg bg-white dark:bg-[#23272f] flex flex-col gap-0 animate-fade-in border border-[#e0e0e0] dark:border-[#353945] p-0 overflow-hidden"
        style={{ minWidth: 0 }}>
        <div className="flex flex-col items-center gap-2 py-8 px-4 sm:px-6 bg-white dark:bg-[#23272f] w-full">
          <div className="flex items-center justify-center bg-[#f5f6fa] dark:bg-[#23272f] rounded-full shadow h-20 w-20 mb-2 p-2 border-2 border-[#e0e7ff] dark:border-[#353945]">
            <img src="/logo-fie.svg" alt="FIE Logo" className="h-14 w-14 object-contain" />
          </div>
          <h1 className="font-display text-2xl font-bold text-[#1a1a2e] dark:text-white text-center">{title}</h1>
          <p className="mt-1 text-base text-[#5c5c7a] dark:text-[#b0b0c3] text-center">{subtitle}</p>
        </div>
        {error && (
          <div className="px-4 py-3 rounded mb-2 border border-red-400 bg-red-50 text-red-700 text-sm text-center animate-shake">
            <span className="font-semibold">{error}</span>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-7 w-full px-3 sm:px-6 py-6 sm:py-8 mx-auto">
          {/* Logo arriba */}
          {/* Email Material 3 real */}
          <div className="relative mb-6">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b0b0c3] dark:text-[#6c6c80] text-lg">
              <FaUser />
            </span>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="peer w-full bg-transparent border-b-2 border-[#b0b0c3] dark:border-[#353945] text-[#1a1a2e] dark:text-white pt-6 pb-2 pl-10 pr-3 focus:outline-none focus:border-[#2166e3] focus:ring-0 transition placeholder-transparent"
              placeholder="Correo electrónico"
              disabled={isLoading}
              autoComplete="username"
            />
            <label htmlFor="email" className="absolute left-10 top-2 text-[#6c6c80] dark:text-[#b0b0c3] text-base font-medium pointer-events-none transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm bg-transparent">Correo electrónico</label>
          </div>
          {/* Password Material 3 real */}
          <div className="relative mb-6">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b0b0c3] dark:text-[#6c6c80] text-lg">
              <FaLock />
            </span>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="peer w-full bg-transparent border-b-2 border-[#b0b0c3] dark:border-[#353945] text-[#1a1a2e] dark:text-white pt-6 pb-2 pl-10 pr-10 focus:outline-none focus:border-[#2166e3] focus:ring-0 transition placeholder-transparent"
              placeholder="Contraseña"
              disabled={isLoading}
              autoComplete="current-password"
            />
            <label htmlFor="password" className="absolute left-10 top-2 text-[#6c6c80] dark:text-[#b0b0c3] text-base font-medium pointer-events-none transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm bg-transparent">Contraseña</label>
            <button
              type="button"
              tabIndex={-1}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2166e3] dark:text-[#b0b0c3] hover:scale-110 transition"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {/* Botón Material 3 */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full text-white font-semibold py-3 rounded-xl bg-[#2166e3] shadow-md hover:bg-[#174bbd] active:bg-[#174bbd] transition disabled:opacity-50 disabled:cursor-not-allowed text-lg relative overflow-hidden group"
          >
            <span className="relative z-10">{isLoading ? 'Autenticando...' : 'Ingresar'}</span>
            <span className="absolute inset-0 opacity-0 group-active:opacity-20 bg-white transition duration-200" />
          </button>
        </form>
      </div>
    </div>
  );
}
