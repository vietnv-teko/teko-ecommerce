import React from 'react';
import classname from 'classnames/bind';
import styles from './DialogAction.module.scss';

let cx = classname.bind(styles);
export type DialogActionProps = {
  /**
   * Content of breadcrumb
   * */
  children: React.ReactNode;
  /**
   * Custom style of component
   * */
  className?: string;
  /**
   * Position of the button
   * */
  justify?: string;
};
const DialogAction = (props: DialogActionProps) => {
  const { children, className, justify = 'center' } = props;

  return (
    <div className={cx('dialog-action', className, justify)}>{children}</div>
  );
};

export default DialogAction;
