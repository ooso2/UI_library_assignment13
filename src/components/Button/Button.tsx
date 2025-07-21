import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  disabled = false, 
  variant = 'primary' 
}) => {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
      style={{
        padding: '10px 20px',
        backgroundColor: variant === 'primary' ? '#007bff' : '#6c757d',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1
      }}
    >
      {label}
    </button>
  );
};

