import React from 'react';
import s from './Line.module.scss';

type Props = {
  height: number;
};

export function Line({ height }: Props) {
  return <div className={s.line} style={{ height }}></div>;
}
