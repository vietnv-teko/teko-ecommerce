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

  useEffect(() => {
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
        setTimeout(() => {
          let content = contentRef.current;
          if (content) {
            content.style.overflowY = 'auto';
          }
        }, 400);
      } else {
        content.style.top = `${'105%'}`;
        content.style.overflowY = 'hidden';
      }
    }
    // eslint-disable-next-line
  }, [open]);

  const handleClick = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
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
    <div className={cx('sliding_panel', 'bottom', { open })}>
      {open && <div className={cx('overlay')} onClick={handleClick} />}
      <div className={cx('content', { open })} ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

export default SlidingPanel;
