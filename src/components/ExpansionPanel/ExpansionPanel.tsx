import React from 'react';
import classname from 'classnames/bind';
import styles from './ExpansionPanel.module.css';

let cx = classname.bind(styles);

const ExpansionPanel: React.FC = props => {
  const { children } = props;
  return <div className={cx('panel')}>{children}</div>;
};

export default ExpansionPanel;
