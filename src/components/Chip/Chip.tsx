import React from 'react';
import classname from 'classnames/bind';
import styles from './Chip.module.css';
let cx = classname.bind(styles);

export type ChipProps = {
  /**
   * Content of chip.
   * */
  content: React.ReactNode;
  /**
   * Callback fired when click component
   * */
  onClick?: () => void;
  /**
   * Custom style of component
   * */
  className?: string;
  /**
   * The variant to use.
   * */
  variant: string;
  /**
   * Callback fired when click X button
   * */
  onDelete?: () => void;
};
const Chip = (props: ChipProps) => {
  const { content, onClick, className, variant, onDelete } = props;
  return (
    <div
      onClick={onClick}
      className={cx({ outlined: variant === 'outlined' }, className, 'chip')}
    >
      <span className={cx('label')}>{content}</span>
      {onDelete && (
        <i
          className={cx('icon', 'vns-Close-X-2', 'btn-delete')}
          onClick={onDelete}
        ></i>
      )}
    </div>
  );
};

export default Chip;
