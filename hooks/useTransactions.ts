import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function useTransactions(address: string) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/api/transactions/${address}`, {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        })
        .then(res => setTransactions(res.data))
        .catch(err => console.log(err));
    };
    return () => {};
  }, []);
}
