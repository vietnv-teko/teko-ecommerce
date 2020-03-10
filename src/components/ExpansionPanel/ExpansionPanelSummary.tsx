import React from 'react';
import classname from 'classnames/bind';
import styles from './ExpansionPanel.module.css';
let cx = classname.bind(styles);

interface ExpansionPanelSummaryProps {
  content: React.ReactNode;
}
const ExpansionPanelSummary: React.FC<ExpansionPanelSummaryProps> = props => {
  const { content } = props;
  return <div className={cx('content')}>{content}</div>;
};

export default ExpansionPanelSummary;
