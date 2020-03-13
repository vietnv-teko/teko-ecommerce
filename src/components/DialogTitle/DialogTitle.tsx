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
  /**
   * Position of the title
   * */
  justify?: string;
};
const DialogTitle = (props: DialogTitleProps) => {
  const { children, className, justify = 'left' } = props;

  return <div className={cx(className, 'title', justify)}>{children}</div>;
};

export default DialogTitle;
