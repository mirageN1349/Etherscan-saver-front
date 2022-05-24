import React from 'react';
import { UISvgSelector } from '../../UI/UISvgSelector';
import s from './TransactionItem.module.scss';

import { Transaction } from '../../../@types/Entities/Transaction';
import { useActiveAddress } from '../../../hooks/useActiveAddress';
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
  const currentAddress = useActiveAddress();

  return (
    <div className={s.transaction_container}>
      <UISvgSelector id="eth" />
      <p>ETH </p>
      {currentAddress === from ? <TransactionSent /> : <TransactionReceived />}
      <span> {value} </span>
    </div>
  );
}
