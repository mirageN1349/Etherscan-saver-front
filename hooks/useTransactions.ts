import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function useTransactions(adress: string) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/transactions/`);
    };
    return () => {};
  }, []);
}
