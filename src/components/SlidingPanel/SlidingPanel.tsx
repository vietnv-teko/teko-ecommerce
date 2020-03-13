import React, { useRef, useEffect } from 'react';
import styles from './SlidingPanel.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

interface ISlidingPanel {
  open: boolean;
  onClose: any;
  position?: string;
  maxHeight?: number;
  minHeight?: number;
}

const SlidingPanel: React.FC<ISlidingPanel> = ({
  open,
  onClose,
  position,
  maxHeight = 100,
  minHeight = 0,
  children,
}) => {
  position = 'bottom';
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let content = contentRef.current;
    if (open) {
      if (content) {
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
      }
    } else {
      if (content) {
        content.style.top = `${'105%'}`;
        content.style.overflowY = 'hidden';
      }
    }
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
    <div className={cx({ sliding_panel: true, open, [position]: true })}>
      {open && <div className={cx('overlay')} onClick={handleClick} />}
      <div className={cx({ content: true, open })} ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

export default SlidingPanel;
