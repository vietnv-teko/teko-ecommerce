import React from 'react';
import ExpansionPanel from 'components/Common/ExpansionPanel/ExpansionPanel';
import ExpansionPanelSummary from 'components/Common/ExpansionPanelSummary';
import ExpansionPanelDetail from 'components/Common/ExpansionPanelDetail';
import classname from 'classnames/bind';
import styles from 'components/Common/ExpansionPanel/ExpansionPanel.module.css';
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
