import React from 'react';
import classname from 'classnames/bind';
import styles from './ExpansionPanel.module.css';
let cx = classname.bind(styles);

interface ExpansionPanelDetailProps {
  content: React.ReactNode;
}
const ExpansionPanelDetail: React.FC<ExpansionPanelDetailProps> = props => {
  const { content } = props;
  return <div className={cx('detail')}>{content}</div>;
};

export default ExpansionPanelDetail;
