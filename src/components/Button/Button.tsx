'use client';

import classNames from 'classnames';
import React, { HTMLAttributes, MouseEvent, useEffect, useState } from 'react';

import styles from './Button.module.css';

export type Size = 'sm' | 'md' | 'lg';
export type Variant = 'contained' | 'outlined';

type Props = HTMLAttributes<HTMLButtonElement> & {
  size?: Size;
  variant?: Variant;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

const Button = ({
  size = 'md',
  variant = 'contained',
  onClick,
  loading,
  disabled,
  children,
  ...attr
}: Props) => {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setDots((dots) => (dots % 3) + 1);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [loading]);

  return (
    <button
      {...attr}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      className={classNames(styles.button, styles[variant], styles[size], classNames)}
    >
      {loading ? 'Ładowanie' + '.'.repeat(dots).padEnd(3, '\xa0') : children}
    </button>
  );
};

export default Button;
