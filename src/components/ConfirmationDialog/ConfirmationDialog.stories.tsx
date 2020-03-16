import React, { useState } from 'react';
import ConfirmationDialog from './ConfirmationDialog';
import DialogTitle from 'components/DialogTitle';
import DialogContent from 'components/DialogContent';
import DialogAction from 'components/DialogAction/DialogAcion';
import Button from 'components/Button';

export default {
  title: 'ConfirmationDialog',
  component: ConfirmationDialog,
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open confirmation dialog</button>
      <ConfirmationDialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Title</DialogTitle>
        <DialogContent>Content</DialogContent>
        <DialogAction justify="right">
          <Button
            className="mr16"
            color="#eb1f3a"
            variant="outlined"
            size="medium"
          >
            Cancel
          </Button>
          <Button color="#eb1f3a" variant="contained" size="medium">
            Agree
          </Button>
        </DialogAction>
      </ConfirmationDialog>
    </>
  );
};

export const Custom = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open confirmation dialog</button>
      <ConfirmationDialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle justify="center">Đăng xuất</DialogTitle>
        <DialogContent>Bạn có chắc chắn muốn đăng xuất?</DialogContent>
        <DialogAction>
          <Button
            className="mr16 w100"
            color="#eb1f3a"
            variant="outlined"
            size="small"
          >
            Đóng
          </Button>
          <Button
            className="w100"
            color="#eb1f3a"
            variant="contained"
            size="small"
          >
            Xác nhận
          </Button>
        </DialogAction>
      </ConfirmationDialog>
    </>
  );
};
