import React, { ReactNode } from 'react';
import styles from './TextField.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
type TFProps = {
  disabled?: boolean; //Whether the input is disabled.
  maxLength?: number; //max length
  prefix?: string | ReactNode; //The prefix icon for the Input.
  suffix?: string | ReactNode; //The suffix icon for the Input.
  type?: string; //The type of input
  value?: string; //The input content value
  onChange?: (e: any) => void; //callback when user input
  onPressEnter?: () => void; //The callback function that is triggered when Enter key is pressed.
  allowClear?: boolean; //allow to remove input content with clear icon
};
export default ({
  disabled,
  maxLength,
  prefix,
  suffix,
  type,
  onChange,
  onPressEnter,
  allowClear,
  ...rest
}: TFProps) => {
  const pressEnterAction = (e: any) => {
    if (e.key === 'Enter') {
      onPressEnter && onPressEnter();
    }
  };
  return (
    <div>
      {prefix && <span className="tek-input-prefix">{prefix}</span>}
      <input
        className={cx('tek-input-wrapper')}
        {...rest}
        maxLength={maxLength || 524288}
        type={`${type || 'string'}`}
        disabled={disabled ? disabled : false}
        onChange={onChange}
        onKeyPress={pressEnterAction}
      ></input>
      {suffix && <span className="tek-input-suffix">{suffix}</span>}
    </div>
  );
};
