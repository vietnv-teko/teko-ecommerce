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
  children: React.ReactNode;
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
  const { open, onClose, children, className, animation = 'fadeIn' } = props;
  const handleOnClick = (event: any) => {
    const modalContent = document.getElementById('modal-content');
    let targetElement = event.target;
    do {
      if (targetElement === modalContent) {
        return;
      }

      targetElement = targetElement.parentNode;
    } while (targetElement);
    onClose();
  };
  return (
    <div
      className={cx('modal', { active: open })}
      onClick={event => handleOnClick(event)}
    >
      <div
        id="modal-content"
        className={cx('modal-content', animation, className)}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
