import React, { useState } from 'react';
import classname from 'classnames/bind';
import styles from './ExpansionPanelSummary.module.css';
import { ExpansionPanelDetailProps } from '../ExpansionPanelDetail/ExpansionPanelDetail';
let cx = classname.bind(styles);

export type ExpansionPanelSummaryProps = {
  /**
   * The content of the expansion panel detail.
   */
  content: React.ReactNode;
  /**
   * custom style of component.
   */
  className?: string;
};
const ExpansionPanelSummary = (props: ExpansionPanelDetailProps) => {
  const { content, className } = props;
  const [open, setOpen] = useState(false);
  const openDetail = (_event: any) => {
    if (_event.currentTarget) {
      if (!open) {
        setOpen(true);
        _event.currentTarget.nextElementSibling?.setAttribute(
          'style',
          'visibility:visible; margin: 20px 0; transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; height: auto;',
        );
        _event.currentTarget
          .getElementsByTagName('i')[0]
          .setAttribute('style', 'transform: rotate(180deg);');
      } else {
        setOpen(false);
        _event.currentTarget.nextElementSibling?.setAttribute(
          'style',
          'visibility:hidden; transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;  height: 0;',
        );
        _event.currentTarget
          .getElementsByTagName('i')[0]
          .setAttribute('style', 'transform: rotate(0deg);');
      }
    }
  };
  return (
    <div
      className={cx('summary', className ? className : '')}
      onClick={event => openDetail(event)}
    >
      {content}
      <i className={cx('icon', 'vns-Down-2')} />
    </div>
  );
};

export default ExpansionPanelSummary;
