import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function useActiveAddress(): string {
  const [address, setAddress] = useState('');

  useEffect(() => {
    const getAddress = async () => {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/api/numerical-address`, {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        })
        .then(res => setAddress(res.data))
        .catch(error => console.log(error));
    };

    getAddress();
  }, []);
  return address;
}
