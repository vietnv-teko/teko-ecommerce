import React, { useState } from 'react';
import Modal from './Modal';

export default {
  title: 'Modal',
  component: Modal,
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Default Modal</button>
      <Modal content={'Content'} open={open} onClose={() => setOpen(false)} />
    </>
  );
};
export const AnimateTop = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>AnimateTop</button>
      <Modal
        content={'Content'}
        open={open}
        onClose={() => setOpen(false)}
        animation="top"
      />
    </>
  );
};
export const AnimateBottom = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>AnimateBottom</button>
      <Modal
        content={'Content'}
        open={open}
        onClose={() => setOpen(false)}
        animation="bottom"
      />
    </>
  );
};
