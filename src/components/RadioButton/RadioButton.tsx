import React, { useState, useEffect } from 'react';
import classname from 'classnames/bind';
import styles from './RadioButton.module.css';
let cx = classname.bind(styles);

interface RadioButtonProps {
  className?: string;
  checked: boolean;
  color: string;
  onClick: () => void;
  label: string;
}
const RadioButton: React.FC<RadioButtonProps> = props => {
  const { className, checked, color, onClick, label } = props;
  const [status, setStatus] = useState(checked);
  useEffect(() => {
    setStatus(checked);
  }, [checked]);
  return (
    <div
      className={cx('radio', className ? className : '')}
      onClick={() => {
        setStatus(true);
        onClick();
      }}
    >
      {!status ? (
        <i
          className={cx(
            'icon',
            status ? 'vns-Radio' : 'vns-Radio-empty',
            'btn-radio',
          )}
        ></i>
      ) : (
        <i
          className={cx(
            'icon',
            status ? 'vns-Radio' : 'vns-Radio-empty',
            'btn-radio',
          )}
          style={{ color: color }}
        ></i>
      )}
      <div className={cx('radio-label')}>{label}</div>
    </div>
  );
};

export default RadioButton;
