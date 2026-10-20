import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

const paddingMap: Record<string, string> = {
  sm: 'p-3',
  md: 'p-5',
  lg: 'p-7',
};

const Card: React.FC<CardProps> = ({ children, className = '', padding = 'md' }) => {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${paddingMap[padding]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
