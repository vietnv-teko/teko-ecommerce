import React, { useState } from 'react';
import Toast from './Toast';

export default {
  title: 'Toast',
  component: Toast,
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Click</button>
      <Toast content={'Content'} open={open} />
    </>
  );
};
