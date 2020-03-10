import React, { useState } from 'react';
import classname from 'classnames/bind';
import styles from './RadioButton.module.css';
let cx = classname.bind(styles);

interface RadioButtonProps {
  className?: string;
  checked?: boolean;
  color: string;
  onClick: () => void;
}
const RadioButton: React.FC<RadioButtonProps> = props => {
  const { className, checked, color, onClick } = props;
  const [status, setStatus] = useState(checked || false);
  return (
    <div
      className={cx(
        'checkbox',
        status ? 'checked' : '',
        className ? className : '',
      )}
      onClick={() => {
        setStatus(status ? false : true);
        onClick();
      }}
    >
      {!status ? (
        <i className={cx('icon', status ? 'vns-Radio' : 'vns-Radio-empty')}></i>
      ) : (
        <i
          className={cx('icon', status ? 'vns-Radio' : 'vns-Radio-empty')}
          style={{ color: color }}
        ></i>
      )}
    </div>
  );
};

export default RadioButton;
