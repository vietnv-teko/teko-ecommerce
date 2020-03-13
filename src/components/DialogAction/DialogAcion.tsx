import React from 'react';
import classname from 'classnames/bind';
import styles from './DialogAction.module.css';

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
   * If true, button on the right
   * */
  right?: boolean;
};
const DialogAction = (props: DialogActionProps) => {
  const { children, className, right } = props;

  return (
    <div className={cx(className, right ? 'right' : 'center')}>{children}</div>
  );
};

export default DialogAction;
