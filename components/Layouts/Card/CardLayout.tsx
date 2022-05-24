import React, { ReactNode } from 'react';
import s from './CardLayout.module.scss';

type Props = {
  title: string;
  description?: string;
  children: ReactNode;
};

export default function CardLayout({ title, description, children }: Props) {
  return (
    <div className={s.card_container}>
      <h2>{title}</h2>
      {description && <h4> {description}</h4>}
      <div>{children}</div>
    </div>
  );
}
