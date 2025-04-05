import { forwardRef } from 'react';
import './button.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, IProps>(
  ({ children, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
