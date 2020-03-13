import React from 'react';
import classNames from 'classnames/bind';
import styles from './Checkbox.module.scss';

let cx = classNames.bind(styles);

interface ICheckBox {
  checked: boolean;
  onChange: any;
  color?: string;
  label?: string;
  size?: string;
  className?: string;
}

const CheckBox: React.FC<ICheckBox> = ({
  checked,
  onChange,
  color = 'primary',
  size = 'medium',
  label,
  className,
}) => {
  return (
    <label className={cx('checkbox', size, className)}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {checked ? (
        <i className={cx('icon', color, 'vns-Checkbox')} />
      ) : (
        <i className={cx('icon', 'vns-Checkbox-empty')} />
      )}
      <span className={cx('label')}>{label}</span>
    </label>
  );
};

export default CheckBox;
