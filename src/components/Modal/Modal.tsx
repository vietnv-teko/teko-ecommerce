import React from 'react';
import classname from 'classnames/bind';
import styles from './Modal.module.css';
let cx = classname.bind(styles);

interface ModalProps {
  open: boolean;
  content: React.ReactNode;
  onClose: () => void;
  className?: string;
}
const Modal: React.FC<ModalProps> = props => {
  const { open, onClose, content, className } = props;
  return (
    <div className={cx('modal', { active: open }, className ? className : '')}>
      <div onClick={onClose} className={cx('over-lay', { active: open })}></div>
      <div className={cx('modal-content')}>
        <div className={cx('dialog')}>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
