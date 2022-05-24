import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function useActiveAdress(): string {
  const [adress, setAdress] = useState('');

  useEffect(() => {
    const getAdress = async () => {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/api/numerical-address`, {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        })
        .then(res => setAdress(res.data))
        .catch(error => console.log(error));
    };

    getAdress();
  }, []);
  return adress;
}
