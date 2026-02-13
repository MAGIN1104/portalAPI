"use client";
import LoginForm from '../../components/LoginForm';
import './login.css';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../lib/auth-context';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading } = useAuth();
  const [error, setError] = useState<string | undefined>(undefined);

  const handleLogin = async ({ email, password }: { email: string; password: string }) => {
    setError(undefined);
    try {
      await login(email, password);
      router.push('/admin/apis');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || 'Error de autenticación');
      } else {
        setError('Error de autenticación');
      }
    }
  };

  return (
    <div className="login-bg">
      <LoginForm onLogin={handleLogin} error={error} isLoading={isLoading} />
    </div>
  );
}
