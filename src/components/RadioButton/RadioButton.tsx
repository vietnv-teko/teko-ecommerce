import React, { useState, useEffect } from 'react';
import classname from 'classnames/bind';
import styles from './RadioButton.module.css';
let cx = classname.bind(styles);

export type RadioButtonProps = {
  /**
   * custom style of component
   * */
  className?: string;
  /**
   * If true, the component is checked
   * */
  checked: boolean;
  /**
   *The color of the component
   */
  color: string;
  /**
   * Callback fired when click component
   */
  onClick: () => void;
  /**
   *The text to be used in an enclosing label element
   */
  label?: string;
};
const RadioButton = (props: RadioButtonProps) => {
  const { className, checked, color, onClick, label } = props;
  const [status, setStatus] = useState(checked);
  useEffect(() => {
    setStatus(checked);
  }, [checked]);
  return (
    <div
      className={cx('radio', className)}
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
