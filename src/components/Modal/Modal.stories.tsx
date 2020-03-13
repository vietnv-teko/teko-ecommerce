import React, { useState } from 'react';
import Modal from './Modal';
import classname from 'classnames/bind';
import styles from './Modal.module.css';
let cx = classname.bind(styles);
export default {
  title: 'Modal',
  component: Modal,
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Default Modal</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className={cx('content-story')}
      >
        Content
      </Modal>
    </>
  );
};
export const AnimateTop = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>AnimateTop</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        animation="top"
        className={cx('content-story')}
      >
        Content
      </Modal>
    </>
  );
};
export const AnimateBottom = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>AnimateBottom</button>
      <Modal
        children={'Content'}
        open={open}
        onClose={() => setOpen(false)}
        animation="bottom"
        className={cx('content-story')}
      />
    </>
  );
};
