import React from 'react';
import ExpansionPanel from './ExpansionPanel';
import ExpansionPanelSummary from './ExpansionPanelSummary';
import ExpansionPanelDetail from './ExPansionPanelDetail';

export default {
  title: 'ExpansionPanel',
  component: ExpansionPanel,
};

export const Default = () => {
  return (
    <>
      <ExpansionPanel>
        <ExpansionPanelSummary content="Content 1" />
        <ExpansionPanelDetail
          content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget."
        />
      </ExpansionPanel>
    </>
  );
};
