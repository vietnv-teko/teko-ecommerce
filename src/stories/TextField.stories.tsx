import React, { useState } from 'react';
import TextField from 'components/Common/TextField';

export default {
  title: 'Common/TextField',
  component: TextField,
};

export const Default = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const handlePhoneChange = (phone: string) => {
    setPhoneNumber(phone);
  };
  return (
    <TextField
      placeholder="Số điện thoại người nhận"
      validator="telephone"
      type="number"
      hasBorderBottom={true}
      value={phoneNumber}
      onChangeValue={handlePhoneChange}
      errorContent="Vui lòng nhập đúng số điện thoại người nhận"
    />
  );
};
