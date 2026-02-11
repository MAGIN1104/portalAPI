/**
 * Shared React Hooks
 * 
 * Custom hooks that are shared across applications.
 */

import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light' | 'system';

interface UseThemeReturn {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}

export const useTheme = (storageKey = 'fie-theme'): UseThemeReturn => {
  const [theme, setThemeState] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey) as Theme | null;
    if (stored) {
      setThemeState(stored);
    }
    setMounted(true);
  }, [storageKey]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem(storageKey, newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
  };

  const applyTheme = (currentTheme: Theme) => {
    const html = document.documentElement;
    if (currentTheme === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      html.setAttribute('data-theme', isDark ? 'dark' : 'light');
    } else {
      html.setAttribute('data-theme', currentTheme);
    }
  };

  const isDark = theme === 'dark' || (theme === 'system' && 
    (mounted ? window.matchMedia('(prefers-color-scheme: dark)').matches : true));

  return {
    theme,
    setTheme,
    toggleTheme,
    isDark,
  };
};

interface UseLoadingReturn {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  startLoading: () => void;
  stopLoading: () => void;
}

export const useLoading = (initialState = false): UseLoadingReturn => {
  const [isLoading, setLoading] = useState(initialState);

  return {
    isLoading,
    setLoading,
    startLoading: () => setLoading(true),
    stopLoading: () => setLoading(false),
  };
};
