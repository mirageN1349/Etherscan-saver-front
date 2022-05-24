import React from 'react';
import { UISvgSelector } from '../../UI/UISvgSelector';
import s from './Transaction.module.scss';

import { Transaction } from '../../../@types/Entities/Transaction';
import { useActiveAddress } from '../../../hooks/useActiveAddress';

type Props = {
  item: Transaction;
};

function TransactionSent() {
  return (
    <div className={s.transaction_status}>
      <UISvgSelector id="sent" />
      <p>Send</p>
    </div>
  );
}

function TransactionReceived() {
  return (
    <div className={s.transaction_status}>
      <UISvgSelector id="received" />
      <p>Receive</p>
    </div>
  );
}

export function Transaction({ item: { from, value } }: Props) {
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
