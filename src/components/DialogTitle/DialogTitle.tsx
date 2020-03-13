import React from 'react';
import classname from 'classnames/bind';
import styles from './DialogTitle.module.css';

let cx = classname.bind(styles);

export type DialogTitleProps = {
  /**
   * Content of breadcrumb
   * */
  children: React.ReactNode;
  /**
   * Custom style of component
   * */
  className?: string;
};
const DialogTitle = (props: DialogTitleProps) => {
  const { children, className } = props;

  return <div className={cx(className, 'title')}>{children}</div>;
};

export default DialogTitle;
