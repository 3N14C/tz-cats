import { forwardRef } from 'react';
import styles from './button.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, IProps>(
  ({ children, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={styles['button']}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
