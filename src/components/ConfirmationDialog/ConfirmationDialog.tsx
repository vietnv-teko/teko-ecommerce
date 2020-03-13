import React from 'react';
import classname from 'classnames/bind';
import styles from './ConfirmationDialog.module.css';
import Modal from '../Modal';

let cx = classname.bind(styles);

export type ConfirmationDialogProps = {
  /**
   * Custom style of component
   * */
  className?: string;
  /**
   * Content of breadcrumb
   * */
  children: React.ReactNode;
  /**
   * If true, the modal is open
   * */
  open: boolean;
  /**
   * Callback fired when the component requests to be closed.
   * */
  onClose: () => void;
};
const ConfirmationDialog = (props: ConfirmationDialogProps) => {
  const { className, children, open, onClose } = props;

  return (
    <Modal
      open={open}
      onClose={onClose}
      className={cx('confirmation-dialog', className)}
    >
      {children}
    </Modal>
  );
};

export default ConfirmationDialog;
