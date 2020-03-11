import React, { useState } from 'react';
import classname from 'classnames/bind';
import styles from './Checkbox.module.css';
let cx = classname.bind(styles);

interface CheckboxProps {
  className?: string;
  checked?: boolean;
  onClick: () => void;
  color: string;
  label: string;
}
const Checkbox: React.FC<CheckboxProps> = props => {
  const { className, checked, onClick, color, label } = props;
  const [status, setStatus] = useState(checked || false);
  const style = {
    color: color,
  };
  return (
    <div
      className={cx('checkbox', className ? className : '')}
      onClick={() => {
        setStatus(status ? false : true);
        onClick();
      }}
    >
      {!status ? (
        <i
          className={cx(
            'icon',
            status ? 'vns-Checkbox' : 'vns-Checkbox-empty',
            'icon-checkbox',
          )}
        ></i>
      ) : (
        <i
          className={cx(
            'icon',
            status ? 'vns-Checkbox' : 'vns-Checkbox-empty',
            'icon-checkbox',
          )}
          style={style}
        ></i>
      )}
      <div className={cx('checkbox-label')}>{label}</div>
    </div>
  );
};

export default Checkbox;
