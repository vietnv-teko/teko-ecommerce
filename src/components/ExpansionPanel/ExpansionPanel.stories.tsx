import React from 'react';
import ExpansionPanel from './ExpansionPanel';
import ExpansionPanelSummary from '../ExpansionPanelSummary';
import ExpansionPanelDetail from '../ExpansionPanelDetail';
import classname from 'classnames/bind';
import styles from './ExpansionPanel.module.css';
let cx = classname.bind(styles);
export default {
  title: 'ExpansionPanel',
  component: ExpansionPanel,
};

export const Default = () => {
  return (
    <>
      <ExpansionPanel>
        <ExpansionPanelSummary
          content="Content 1"
          className={cx('summary-stories')}
        />
        <ExpansionPanelDetail
          content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget."
          className={cx('detail-stories')}
        />
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          content="Content 2"
          className={cx('summary-stories')}
        />
        <ExpansionPanelDetail
          content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget."
          className={cx('detail-stories')}
        />
      </ExpansionPanel>
    </>
  );
};
