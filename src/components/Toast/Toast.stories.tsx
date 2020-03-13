import React, { useState } from 'react';
import Toast from './Toast';
import { action } from '@storybook/addon-actions';

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

export const BottomToast = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Click</button>
      <Toast
        content={'Content'}
        open={open}
        position="bottom"
        onClick={action('clicked')}
      />
    </>
  );
};
