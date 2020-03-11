import React from 'react';
import classname from 'classnames/bind';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

let cx = classname.bind(styles);
interface ModalProps {
  open: boolean;
  content: React.ReactNode;
  onClose: () => void;
  className?: string;
  animation?: string;
}
const Modal: React.FC<ModalProps> = props => {
  const { open, onClose, content, className, animation = 'fadeIn' } = props;
  return (
    <div
      className={cx('modal', open ? 'active' : '', className ? className : '')}
      onClick={onClose}
    >
      <div className={cx('modal-content', animation)}>{content}</div>
    </div>
  );
};
Modal.propTypes = {
  animation: PropTypes.oneOf(['fadeIn', 'top', 'bottom']),
};

export default Modal;
