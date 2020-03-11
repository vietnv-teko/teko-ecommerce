import React from 'react';
import classname from 'classnames/bind';
import styles from './ExpansionPanel.module.css';
let cx = classname.bind(styles);

interface ExpansionPanelDetailProps {
  content: React.ReactNode;
  className?: string;
}
const ExpansionPanelDetail: React.FC<ExpansionPanelDetailProps> = props => {
  const { content, className } = props;
  return (
    <div className={cx('detail', className ? className : '')}>{content}</div>
  );
};

export default ExpansionPanelDetail;
