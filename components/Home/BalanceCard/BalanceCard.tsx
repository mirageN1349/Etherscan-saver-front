import React from 'react';
import CardLayout from '../../Layouts/Card/CardLayout';
import { Line } from '../../UI/Line/Line';
import ActiveAddress from '../ActiveAddress/ActiveAddress';
import { Balance } from '../Balance/Balance';
import s from './BalanceCard.module.scss';

type Props = {};

export function BalanceCard({}: Props) {
  return (
    <div className={s.balance_container}>
      <ActiveAddress address="0x4458f86353b4740fe9e09071c23a7437640063c9" onGetAddress={() => console.log('console')} />
      <Line height={300} />
      <Balance balance="34.958,27" income="6.456,87" expenses="14,794,12" />
    </div>
  );
}
