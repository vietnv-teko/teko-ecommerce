import React, { useState } from 'react';
import ConfirmationDialog from 'components/Mobile/ConfirmationDialog';

export default {
  title: 'ConfirmationDialog',
  component: ConfirmationDialog,
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open confirmation dialog</button>
      <ConfirmationDialog
        title="Đăng xuất"
        content="Bạn có chắc chắn muốn đăng xuất?"
        open={open}
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        onAgree={() => {}}
      />
    </>
  );
};
