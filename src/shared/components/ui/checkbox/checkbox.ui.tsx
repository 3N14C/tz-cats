import { forwardRef } from 'react';
import styles from './checkbox.module.scss';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, IProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className={styles['checkbox-container']}>
        <input
          {...props}
          type="checkbox"
          ref={ref}
          className={styles['input-checkbox']}
          id="checkbox"
        />
        {label && <label htmlFor="checkbox">{label}</label>}
      </div>
    );
  }
);
