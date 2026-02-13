/**
 * Shared UI Components
 * 
 * Components that are shared across FIE API Portal and Admin applications.
 */

import React from 'react';

export { ProtectedRoute } from './ProtectedRoute';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', isLoading = false, disabled = false, className, ...props }, ref) => {
    const variantClass = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
      danger: 'bg-red-600 text-white hover:bg-red-700',
      ghost: 'bg-transparent hover:bg-gray-100',
    }[variant];

    const sizeClass = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    }[size];

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`rounded font-medium transition ${variantClass} ${sizeClass} ${className || ''}`}
        {...props}
      >
        {isLoading ? 'Cargando...' : children}
      </button>
    );
  }
);

Button.displayName = 'Button';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title?: string;
  variant?: 'default' | 'elevated';
  padding?: 'sm' | 'md' | 'lg';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, title, variant = 'default', padding = 'md', className, ...props }, ref) => {
    const variantClass = {
      default: 'border border-gray-200',
      elevated: 'shadow-lg',
    }[variant];

    const paddingClass = {
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
    }[padding];

    return (
      <div
        ref={ref}
        className={`rounded-lg ${variantClass} ${paddingClass} ${className || ''}`}
        {...props}
      >
        {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
