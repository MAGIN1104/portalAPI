/**
 * Shared Utility Functions
 * 
 * Helper functions and utilities shared across applications.
 */

interface FormatOptions {
  locale?: string;
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'long' | 'short';
  day?: 'numeric' | '2-digit';
}

export const formatDate = (date: Date, options?: FormatOptions): string => {
  const locale = options?.locale || 'es-ES';
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: options?.year || 'numeric',
    month: options?.month || '2-digit',
    day: options?.day || '2-digit',
  };
  return date.toLocaleDateString(locale, dateOptions);
};

interface TimeFormatOptions {
  locale?: string;
  hour24?: boolean;
  showSeconds?: boolean;
}

export const formatTime = (date: Date, options?: TimeFormatOptions): string => {
  const locale = options?.locale || 'es-ES';
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: options?.showSeconds ? '2-digit' : undefined,
    hour12: options?.hour24 === false,
  };
  return date.toLocaleTimeString(locale, timeOptions);
};

export const formatDateTime = (date: Date, options?: FormatOptions & TimeFormatOptions): string => {
  return `${formatDate(date, options)} ${formatTime(date, options)}`;
};

export const formatRelativeTime = (date: Date, baseDate = new Date()): string => {
  const diffMs = baseDate.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Hace unos segundos';
  if (diffMins < 60) return `Hace ${diffMins}m`;
  if (diffHours < 24) return `Hace ${diffHours}h`;
  if (diffDays < 7) return `Hace ${diffDays}d`;
  return formatDate(date);
};

export const clsx = (...classes: (string | boolean | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};
