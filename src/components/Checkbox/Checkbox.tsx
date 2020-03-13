import React from 'react';
import classNames from 'classnames/bind';
import styles from './Checkbox.module.scss';

let cx = classNames.bind(styles);

interface ICheckBox {
  checked: boolean;
  onChange: any;
  color?: string;
  label?: string;
  size?: number;
  className?: string;
}

const CheckBox: React.FC<ICheckBox> = ({
  checked,
  onChange,
  color = '#1669a8',
  size,
  label,
  className,
}) => {
  return (
    <label className={cx('checkbox', size, className)}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {checked ? (
        <i
          className={cx('icon', 'vns-Checkbox')}
          style={{ color, fontSize: `${size}px` }}
        />
      ) : (
        <i
          className={cx('icon', 'vns-Checkbox-empty')}
          style={{ fontSize: `${size}px` }}
        />
      )}
      <span className={cx('label')}>{label}</span>
    </label>
  );
};

export default CheckBox;
