import React, { useState } from 'react';
import classname from 'classnames/bind';
import styles from './Checkbox.module.css';
let cx = classname.bind(styles);

interface CheckboxProps {
  className?: string;
  checked?: boolean;
  onClick: () => void;
  color: string;
}
const Checkbox: React.FC<CheckboxProps> = props => {
  const { className, checked, onClick, color } = props;
  const [status, setStatus] = useState(checked || false);
  const style = {
    color: color,
  };
  return (
    <div
      className={cx(
        'checkbox',
        status ? 'checked' : '',
        className ? className : '',
      )}
      // style={{  : colorEmpty  }}
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
    </div>
  );
};

export default Checkbox;
