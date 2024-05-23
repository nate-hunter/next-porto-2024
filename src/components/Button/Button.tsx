import React from 'react';

import styles from './button.module.css';

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  children: React.ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button ref={ref} className={styles.btn} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
