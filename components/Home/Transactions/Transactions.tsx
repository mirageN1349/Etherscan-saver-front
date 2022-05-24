import React from 'react';

import s from './Transactions.module.scss';
import CardLayout from '../../Layouts/Card/CardLayout';

import { Transaction } from '../../../@types/Entities/Transaction';
import { TransactionItem } from '../TransactionItem/TransactionItem';
import { useTransactions } from '../../../hooks/useTransactions';

export function Transactions() {
  const transactions = useTransactions('0x4458f86353b4740fe9e09071c23a7437640063c9');

  return (
    <div className={s.transactions_container}>
      <CardLayout title="Transactions">
        {transactions.map((item: Transaction) => (
          <TransactionItem key={item.id} item={item} />
        ))}
      </CardLayout>
    </div>
  );
}
