import React from 'react';
import classname from 'classnames/bind';
import styles from './DialogContent.module.css';
import Divider from 'components/Common/Divider';

let cx = classname.bind(styles);

export type DialogContentProps = {
  /**
   * Content of breadcrumb
   * */
  children: React.ReactNode;
  /**
   * Custom style of component
   * */
  className?: string;
  /**
   * If true, dialog have divider between dialog title and dialog action
   * */
  divider?: boolean;
};
const DialogContent = (props: DialogContentProps) => {
  const { children, className, divider } = props;

  return (
    <>
      {divider && <Divider />}
      <div className={cx('dialog-content', className)}>{children}</div>
      {divider && <Divider />}
    </>
  );
};

export default DialogContent;
