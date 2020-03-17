import React from 'react';
import classname from 'classnames/bind';
import styles from './ConfirmationDialog.module.css';
import Modal from 'components/Common/Modal';
import DialogTitle from 'components/Common/DialogTitle';
import DialogAction from 'components/Common/DialogAction';
import Button from 'components/Common/Button';
import DialogContent from 'components/Common/DialogContent';

let cx = classname.bind(styles);

export type ConfirmationDialogProps = {
  /**
   * Modal title
   * */
  title: string;
  /**
   * Modal content
   * */
  content: string;
  /**
   * Custom style of component
   * */
  className?: string;
  /**
   * If true, the modal is open
   * */
  open: boolean;
  /**
   * Callback fired when the component requests to be closed.
   * */
  onClose: () => void;
  /**
   * On Cancel
   * */
  onCancel: () => void;
  /**
   * On agree
   * */
  onAgree: () => void;
};
const ConfirmationDialog = (props: ConfirmationDialogProps) => {
  const { title, content, className, open, onClose, onCancel, onAgree } = props;

  return (
    <Modal
      open={open}
      onClose={onClose}
      className={cx('confirmation-dialog', className)}
    >
      <DialogTitle justify="center">{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogAction>
        <Button
          onClick={onCancel}
          className="mr16 w100 p0 radius-6"
          color="#eb1f3a"
          variant="outlined"
          size="small"
        >
          Đóng
        </Button>
        <Button
          className="w100 p0 radius-6"
          color="#eb1f3a"
          variant="contained"
          size="small"
          onClick={onAgree}
        >
          Xác nhận
        </Button>
      </DialogAction>
    </Modal>
  );
};

export default ConfirmationDialog;
