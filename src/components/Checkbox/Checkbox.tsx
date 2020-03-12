import React, { useState } from 'react';
import classname from 'classnames/bind';
import styles from './Checkbox.module.css';
let cx = classname.bind(styles);

export type CheckboxProps = {
  /**
   * Custom style of component
   * */
  className?: string;
  /**
   * If true, the component is checked
   * */
  checked?: boolean;
  /**
   *Callback fired when click component
   */
  onClick: () => void;
  /**
   *The color of the component
   */
  color: string;
  /**
   *The text to be used in an enclosing label element
   */
  label?: string;
};
const Checkbox = (props: CheckboxProps) => {
  const { className, checked, onClick, color, label } = props;
  const [status, setStatus] = useState(checked || false);
  const style = {
    color: color,
  };
  return (
    <div
      className={cx('checkbox', className)}
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
