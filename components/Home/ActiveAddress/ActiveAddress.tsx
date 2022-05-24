import React from 'react';
import CardLayout from '../../Layouts/Card/CardLayout';
import Button from '../../UI/Button/Button';
import InfoField from '../../UI/InfoField/InfoField';

type Props = {
  address: string;
  onGetAddress: () => void;
};

export default function ActiveAddress({ address, onGetAddress }: Props) {
  return (
    <CardLayout
      title="Most active balance address"
      description="Click to get an address of a balance which has been changed the most."
    >
      <InfoField sx={{ marginTop: '30px' }} value={address} label="Address" />
      <Button onClick={onGetAddress} sx={{ marginTop: '40px', marginLeft: 'auto' }}>
        Get Address
      </Button>
    </CardLayout>
  );
}
