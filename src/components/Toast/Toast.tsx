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
};
const Toast = (props: ToastProps) => {
  const { open, className, content, onClick } = props;

  return (
    <div
      className={cx(
        'toast',
        className ? className : '',
        open ? 'active' : 'inactive',
      )}
      onClick={onClick}
    >
      {content}
    </div>
  );
};

export default Toast;
