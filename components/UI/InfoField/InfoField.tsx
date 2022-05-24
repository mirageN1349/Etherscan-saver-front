import React, { CSSProperties } from 'react';
import { UISvgSelector } from '../UISvgSelector';
import s from './InfoField.module.scss';

type Props = {
  label: string;
  value: string;
  sx: CSSProperties;
};

export default function InfoField({ label, value, sx }: Props) {
  function buttonHandler() {
    navigator.clipboard.writeText(value);
  }

  return (
    <div className={s.info_container} style={sx}>
      <h5>{label}</h5>
      <div className={s.info_field}>
        <p>{value}</p>
        <div>
          <span className={s.info_line} />
          <button onClick={buttonHandler}>
            <UISvgSelector id="copy" />{' '}
          </button>
        </div>
      </div>
    </div>
  );
}
