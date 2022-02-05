import React from 'react';

// import { Container } from './styles';

interface ButtonProps {
  text: string
  variant?: 'primary' | 'secondary' | 'warning' | 'default'
  className?: string
  handleClick: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
  const bgColor = `bg-${props.variant || 'default'}`

  return (
    <button
      className={`${bgColor} border border-transparent rounded-md text-sm font-medium text-white hover:bg-opacity-75 px-4 py-2 ${props.className}`}
      onClick={() => props.handleClick()}
    >
      {props.text}
    </button>
  );
}

export default Button;