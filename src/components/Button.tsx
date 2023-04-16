// Button.tsx
import React from 'react';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
