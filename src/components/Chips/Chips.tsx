import React from 'react';
import classname from 'classnames/bind';
import styles from './Chips.module.css';
let cx = classname.bind(styles);

interface ChipsProps {
  content: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant: string;
  onDelete?: () => void;
}
const Chips: React.FC<ChipsProps> = props => {
  const { content, onClick, className, variant, onDelete } = props;
  return (
    <div
      onClick={onClick}
      className={cx(
        variant === 'outlined' ? 'outlined' : '',
        className ? className : '',
        'chips',
      )}
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

export default Chips;
