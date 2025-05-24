// generate a professional button in blue theme with hover effect and rounded corners
import React from 'react';
import { twMerge } from 'tailwind-merge';
import type { ButtonHTMLAttributes } from 'react';
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  const baseStyles = 'px-4 py-2 rounded-md text-sm font-medium focus:outline-none';
  const primaryStyles = 'bg-blue-600 text-white hover:bg-blue-700';
  const secondaryStyles = 'bg-gray-200 text-gray-800 hover:bg-gray-300';

  const styles = twMerge(
    baseStyles,
    variant === 'primary' ? primaryStyles : secondaryStyles,
    className
  );

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};