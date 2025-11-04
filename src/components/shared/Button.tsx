import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = ''
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 min-h-[44px] min-w-[44px] touch-manipulation';
  
  const variants = {
    primary: 'bg-gradient-to-r from-red-900 to-red-800 text-white',
    secondary: 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-white',
    outline: 'border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white'
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {children}
    </button>
  );
};
