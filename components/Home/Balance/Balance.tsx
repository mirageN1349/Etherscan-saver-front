import React from 'react';
import CardLayout from '../../Layouts/Card/CardLayout';
import { Line } from '../../UI/Line/Line';
import { BalanceSvgSelector } from '../BalanceCard/BalanceSvgSelector';
import s from './Balance.module.scss';

type Props = {
  balance: string;
  income: string;
  expenses: string;
};

export function Balance({ balance, income, expenses }: Props) {
  return (
    <CardLayout title="Balance">
      <div className={s.balance}>
        <h3>{`ETH ${balance}`}</h3>
        <div className={s.balance_stateitems}>
          <div className={s.balance_stateitem}>
            <div>
              <BalanceSvgSelector id="income" />
              <h5>Income</h5>
            </div>

            <h4>{`ETH ${income}`}</h4>
          </div>
          <Line height={105} />
          <div className={s.balance_stateitem}>
            <div>
              <BalanceSvgSelector id="expenses" />
              <h5>Expenses</h5>
            </div>
            <h4>{`ETH ${expenses}`}</h4>
          </div>
        </div>
      </div>
    </CardLayout>
  );
}
