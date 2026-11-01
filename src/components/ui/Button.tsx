import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variantStyles: Record<string, string> = {
  primary:
    'bg-sky-600 text-white hover:bg-sky-700 active:bg-sky-800 shadow-sm shadow-sky-600/20',
  secondary:
    'bg-sky-50 text-sky-800 hover:bg-sky-100 active:bg-sky-200',
  outline:
    'border border-sky-200 text-sky-800 bg-white hover:bg-sky-50 active:bg-sky-100',
  ghost:
    'text-sky-700 hover:bg-sky-50 hover:text-sky-900 active:bg-sky-100',
};

const sizeStyles: Record<string, string> = {
  sm: 'text-sm px-3 py-1.5 gap-1.5',
  md: 'text-sm px-4 py-2 gap-2',
  lg: 'text-base px-5 py-2.5 gap-2',
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled,
  ...props
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
