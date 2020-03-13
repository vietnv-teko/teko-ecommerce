import React from 'react';
import classname from 'classnames/bind';
import styles from './Toast.module.css';
let cx = classname.bind(styles);

export type ToastProps = {
  /**
   * If true, the toast is display
   * */
  open: boolean;
  /**
   * Custom style of component
   * */
  className?: string;

  /**
   *Callback fired when click component
   */
  onClick?: () => void;
  /**
   * Content of toast
   */
  content: React.ReactNode;
  /**
   * position of toast: top of bottom
   */
  position?: string;
};
const Toast = (props: ToastProps) => {
  const { open, className, content, onClick, position = 'top' } = props;

  return (
    <div
      className={cx('toast', className, open ? 'active' : 'inactive', position)}
      onClick={onClick}
    >
      {content}
    </div>
  );
};

export default Toast;
