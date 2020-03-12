import React, { ReactNode } from 'react';
import classname from 'classnames/bind';
import styles from './ExpansionPanel.module.css';

let cx = classname.bind(styles);
type Props = {
  /**
   * The content of the expansion panel.
   */
  children?: ReactNode;
};

const ExpansionPanel = (props: Props) => {
  const { children } = props;
  return <div className={cx('panel')}>{children}</div>;
};

export default ExpansionPanel;
