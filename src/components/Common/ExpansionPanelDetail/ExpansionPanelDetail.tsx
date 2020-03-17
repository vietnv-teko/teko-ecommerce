import React from 'react';
import classname from 'classnames/bind';
import styles from './ExpansionPanelDetail.module.css';
let cx = classname.bind(styles);

export type ExpansionPanelDetailProps = {
  /**
   * The content of the expansion panel detail.
   */
  content: React.ReactNode;
  /**
   * custom style of component.
   */
  className?: string;
};
const ExpansionPanelDetail = (props: ExpansionPanelDetailProps) => {
  const { content, className } = props;
  return <div className={cx('detail', className)}>{content}</div>;
};

export default ExpansionPanelDetail;
