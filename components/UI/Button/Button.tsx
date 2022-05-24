import React, { CSSProperties, ReactNode } from 'react';
import s from './Button.module.scss';

type Props = {
  children: ReactNode;
  sx?: CSSProperties;
  onClick: () => void;
};

export default function Button({ children, sx, onClick }: Props) {
  return (
    <button onClick={onClick} style={sx} className={s.button}>
      {children}
    </button>
  );
}
