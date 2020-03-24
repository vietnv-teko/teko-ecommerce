import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Checkbox.module.scss';

let cx = classNames.bind(styles);

interface ICheckBox {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  color?: string;
  label?: string;
  size?: number;
  className?: string;
}

const CheckBox: React.FC<ICheckBox> = ({
  checked: defaultChecked,
  onChange,
  color = '#1669a8',
  size,
  label,
  className,
}) => {
  const [checked, setChecked] = useState(defaultChecked || false);
  const toggleActive = () => {
    setChecked(checked => !checked);
    if (onChange) onChange(!checked);
  };
  return (
    <label className={cx('checkbox', size, className)}>
      {checked ? (
        <i
          className={cx('icon', 'vns-Checkbox')}
          style={{ color, fontSize: `${size}px` }}
          onClick={toggleActive}
        />
      ) : (
        <i
          className={cx('icon', 'vns-Checkbox-empty')}
          style={{ fontSize: `${size}px` }}
          onClick={toggleActive}
        />
      )}
      <span className={cx('label')}>{label}</span>
    </label>
  );
};

export default CheckBox;
