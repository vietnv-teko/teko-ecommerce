import React, { useRef, useEffect } from 'react';
import styles from './SlidingPanel.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

interface ISlidingPanel {
  open: boolean;
  onClose: any;
  maxHeight?: number;
  minHeight?: number;
}

const SlidingPanel: React.FC<ISlidingPanel> = ({
  open,
  onClose,
  maxHeight = 100,
  minHeight = 0,
  children,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const setContentPosition = () => {
    let content = contentRef.current;
    if (content) {
      if (open) {
        let height: number = 0;
        for (let node of Array.from(content.childNodes)) {
          //@ts-ignore
          height += node.offsetHeight;
        }
        let topPos = (height / window.innerHeight) * 100;
        if (topPos < minHeight) topPos = minHeight;
        if (topPos > maxHeight) topPos = maxHeight;
        content.style.top = `${100 - topPos}%`;
      } else {
        content.style.top = `${'100%'}`;
        content.style.overflowY = 'hidden';
      }
    }
  };

  useEffect(() => {
    if (window) window.addEventListener('resize', setContentPosition);
    return () => window.removeEventListener('resize', setContentPosition);
  });

  useEffect(() => {
    setContentPosition();
    // eslint-disable-next-line
  }, [open]);

  useEffect(() => {
    const element = document.querySelector('[data-open=true]');
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = element ? 'hidden' : '';
    }
  });

  return (
    <div className={cx('sliding_panel', 'bottom', { open })} data-open={open}>
      {open && <div className={cx('overlay')} onClick={onClose} />}
      <div className={cx('content', { open })} ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

export default SlidingPanel;
