import React from 'react';
import classname from 'classnames/bind';
import styles from './Modal.module.css';

let cx = classname.bind(styles);
export type ModalProps = {
  /**
   * If true, the modal is open
   * */
  open: boolean;
  /**
   * Content of  modal.
   * */
  content: React.ReactNode;
  /**
   * Callback fired when the component requests to be closed.
   * */
  onClose: () => void;
  /**
   * custom style of component
   * */
  className?: string;
  /**
   * animation of content. Include 'top', 'bottom', 'fadeIn'
   * */
  animation?: string;
};
const Modal = (props: ModalProps) => {
  const { open, onClose, content, className, animation = 'fadeIn' } = props;
  return (
    <div
      className={cx('modal', { active: open }, className ? className : '')}
      onClick={onClose}
    >
      <div className={cx('modal-content', animation)}>{content}</div>
    </div>
  );
};

export default Modal;
