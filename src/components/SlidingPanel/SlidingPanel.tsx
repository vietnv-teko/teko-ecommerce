import React from 'react';
import styles from './SlidingPanel.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

interface ISlidingPanel {
  open: boolean;
  onClose: any;
  position?: string;
}

const SlidingPanel: React.FC<ISlidingPanel> = ({
  open,
  onClose,
  position,
  children,
}) => {
  if (!position) position = 'bottom';

  const handleClick = () => {
    let body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'auto';
    }
    onClose();
  };

  if (open) {
    let body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'hidden';
    }
  }

  return (
    <div className={cx({ sliding_panel: true, open, [position]: true })}>
      {open && <div className={cx('overlay')} onClick={handleClick} />}
      <div className={cx({ content: true, open })}>{children}</div>
    </div>
  );
};

export default SlidingPanel;
