import React from 'react';
import { UISvgSelector } from '../../UI/UISvgSelector';
import s from './TransactionItem.module.scss';

import { Transaction } from '../../../@types/Entities/Transaction';
import { useActiveAdress } from '../../../hooks/useActiveAdress';
import { BalanceSvgSelector } from '../BalanceCard/BalanceSvgSelector';

type Props = {
  item: Transaction;
};

function TransactionSent() {
  return (
    <div className={s.transaction_status}>
      <p>Send</p>
      <BalanceSvgSelector id="expenses" />
    </div>
  );
}

function TransactionReceived() {
  return (
    <div className={s.transaction_status}>
      <p>Receive</p>
      <BalanceSvgSelector id="income" />
    </div>
  );
}

export function TransactionItem({ item: { from, value } }: Props) {
  const currentAdress = useActiveAdress();

  return (
    <div className={s.transaction_container}>
      <UISvgSelector id="eth" />
      <p>ETH </p>
      {currentAdress === from ? <TransactionSent /> : <TransactionReceived />}
      <span> {value} </span>
    </div>
  );
}
