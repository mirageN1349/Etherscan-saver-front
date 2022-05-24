import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { BalanceCard } from '../components/Home/BalanceCard/BalanceCard';
import { Transactions } from '../components/Home/Transactions/Transactions';
import Button from '../components/UI/Button/Button';

export default function Home() {
  return (
    <>
      <BalanceCard />
      <Transactions />
    </>
  );
}
